NodeList = function NodeList(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(NodeList);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['entries', 'forEach', 'item', 'keys', 'values'];

    NodeList.prototype = {
        entries() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NodeList', 'entries', arguments, result);
            return result;
        },
        forEach(callback, ...args) {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NodeList', 'forEach', arguments, result);
            return result;
        },
        item(imdex) {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            try{
                return this[imdex]
            }catch(error){
            let result = null;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NodeList', 'item', arguments, result);
            return result;
            }
        },
        keys() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = Object.keys(this);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NodeList', 'keys', arguments, result);
            return result;
        },
        get length() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).length, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NodeList', 'length', arguments, result);
            return result;
        },
        values() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NodeList', 'values', arguments, result);
            return result;
        }
    };
    lwVm.set_iterator(NodeList);
    lwVm.rename(NodeList.prototype, "NodeList");
    lwVm.safeDescriptor_addConstructor(NodeList);
    lwVm.safe_Objattribute(NodeList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();