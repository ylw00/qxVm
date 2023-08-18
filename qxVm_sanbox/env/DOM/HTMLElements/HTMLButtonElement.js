HTMLButtonElement = function HTMLButtonElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLButtonElement);

; (function () {
    const $safe_get_attribute = ['disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
    const $safe_set_attribute = ['disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'type', 'value'];
    const $safe_func_attribute = ['checkValidity', 'reportValidity', 'setCustomValidity'];
    
    HTMLButtonElement.prototype = {
        checkValidity() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLButtonElement', 'checkValidity', arguments, result);
            return result;
        },
        get disabled() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).disabled, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'disabled', arguments, result);
            return result;
        },
        set disabled(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'disabled', arguments);
            lwVm.memory.private_data.get(this).disabled = value ? true: false;
        },
        get form() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).form, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'form', arguments, result);
            return result;
        },
        set form(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'form', arguments);
            lwVm.memory.private_data.get(this).form = null;
        },
        get formAction() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).formAction, location.href);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'formAction', arguments, result);
            return result;
        },
        set formAction(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'formAction', arguments);
            lwVm.memory.private_data.get(this).formAction = value + "";
        },
        get formEnctype() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).formEnctype, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'formEnctype', arguments, result);
            return result;
        },
        set formEnctype(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'formEnctype', arguments);
            lwVm.memory.private_data.get(this).formEnctype = value + "";
        },
        get formMethod() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).formMethod, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'formMethod', arguments, result);
            return result;
        },
        set formMethod(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'formMethod', arguments);
            lwVm.memory.private_data.get(this).formMethod = value.toLowerCase() + "" === 'post'? 'post': 'get';
        },
        get formNoValidate() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).formNoValidate, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'formNoValidate', arguments, result);
            return result;
        },
        set formNoValidate(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'formNoValidate', arguments);
            lwVm.memory.private_data.get(this).formNoValidate = value ? true: false;
        },
        get formTarget() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).formTarget, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'formTarget', arguments, result);
            return result;
        },
        set formTarget(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'formTarget', arguments);
            lwVm.memory.private_data.get(this).formTarget = value + "";
        },
        get labels() {  // NodeList 
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get name() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).name, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'name', arguments);
            lwVm.memory.private_data.get(this).name = value + "";
        },
        reportValidity() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLButtonElement', 'reportValidity', arguments, result);
            return result;
        },
        setCustomValidity() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLButtonElement', 'setCustomValidity', arguments, result);
            return result;
        },
        get type() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "submit");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'type', arguments);
            lwVm.memory.private_data.get(this).type = "submit";
        },
        get validationMessage() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).validationMessage, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'validationMessage', arguments, result);
            return result;
        },
        get validity() {  // ValidityState 
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).validity, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'validationMessage', arguments, result);
            return result;
        },
        get value() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).value, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLButtonElement', 'value', arguments, result);
            return result;
        },
        set value(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLButtonElement', 'value', arguments);
            lwVm.memory.private_data.get(this).value = value + "";
        },
        get willValidate() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        }
    };

    lwVm.rename(HTMLButtonElement.prototype, "HTMLButtonElement");
    lwVm.safeDescriptor_addConstructor(HTMLButtonElement);
    lwVm.safe_Objattribute(HTMLButtonElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLButtonElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLButtonElement, HTMLElement);

})();


lwVm.memory.htmlElements["button"] = function () {
    return new HTMLButtonElement(lwVm.memory.$createObj_key);
}