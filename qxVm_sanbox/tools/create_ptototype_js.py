def one(prototype_js: str, obj: str):
    safe_get_attribute = []
    safe_set_attribute = []
    safe_func_attribute = []
    all_js_code = """
%s = function %s(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(%s);

; (function () {\n""" % (obj, obj, obj)

    js_code = f"{obj}.prototype = {{\n"

    for attribute in prototype_js.split('\n'):
        if not attribute:
            continue

        if ' ƒ ' in attribute and (attribute.startswith('set ') is False and attribute.startswith('get ') is False):
            function_name = attribute.split(' ƒ ')[-1].replace('()', '')
            safe_func_attribute.append(function_name)
            js_code += """
    %s(){
        debugger;
        if (!%s.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    },""" % (function_name, obj)
        elif attribute.endswith(': （…）') or attribute.endswith(': (...)'):
            if attribute.endswith(': （…）'):
                attribute_name = attribute.replace(': （…）', '')
            else:
                attribute_name = attribute.replace(': (...)', '')

            get_code = f'get {attribute_name}' in prototype_js
            set_code = f'set {attribute_name}' in prototype_js
            if all([get_code, set_code]):
                safe_get_attribute.append(attribute_name)
                safe_set_attribute.append(attribute_name)
                js_code += """
    get %s(){
        debugger;
        if (!%s.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        return qxVm.abs(qxVm.memory.private_data.get(this).%s, "");
    },
    set %s(value){
        debugger;
        if (!%s.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        qxVm.memory.private_data.get(this).%s = value + "";
    },""" % (attribute_name, obj, attribute_name, attribute_name, obj, attribute_name)
            elif get_code:
                safe_get_attribute.append(attribute_name)
                js_code += """
    get %s(){
        debugger;
        if (!%s.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        return qxVm.abs(qxVm.memory.private_data.get(this).%s, "");
    },""" % (attribute_name, obj, attribute_name)
            elif set_code:
                safe_set_attribute.append(attribute_name)
                js_code += """
    set %s(){
        debugger;
        if (!%s.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        qxVm.memory.private_data.get(this).%s = value + "";
    },""" % (attribute_name, obj, attribute_name)


    a1 = f"    const $safe_get_attribute = {safe_get_attribute};\n"
    a2 = f"    const $safe_set_attribute = {safe_set_attribute};\n"
    a3 = f"    const $safe_func_attribute = {safe_func_attribute};\n"

    # print(all_js_code)

    return all_js_code + a1 + a2 + a3+ js_code + "\n}" + """
    qxVm.rename(%s.prototype, "%s");
    qxVm.safeDescriptor_addConstructor(%s);
    qxVm.safe_Objattribute(%s, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
""" % (obj, obj, obj, obj)




aaaa = """
item: ƒ item()
length: (...)
get length: ƒ length()
"""
js_ = one(aaaa, 'SQLResultSetRowList')

print(js_)
