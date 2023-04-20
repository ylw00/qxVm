HTMLButtonElement = function HTMLButtonElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLButtonElement);

; (function () {
    const $safe_get_attribute = ['disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
    const $safe_set_attribute = ['disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'type', 'value'];
    const $safe_func_attribute = ['checkValidity', 'reportValidity', 'setCustomValidity'];
    
    HTMLButtonElement.prototype = {
        checkValidity() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
        get disabled() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).disabled, false);
        },
        set disabled(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            qxVm.memory.private_data.get(this).disabled = value ? true: false;
        },
        get form() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).form, null);
        },
        set form(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).form = null;
        },
        get formAction() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formAction, location.href);
        },
        set formAction(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formAction = value + "";
        },
        get formEnctype() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formEnctype, "");
        },
        set formEnctype(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formEnctype = value + "";
        },
        get formMethod() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formMethod, "");
        },
        set formMethod(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formMethod = value.toLowerCase() + "" === 'post'? 'post': 'get';
        },
        get formNoValidate() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formNoValidate, false);
        },
        set formNoValidate(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formNoValidate = value ? true: false;
        },
        get formTarget() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formTarget, "");
        },
        set formTarget(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formTarget = value + "";
        },
        get labels() {  // NodeList 
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).labels, "");
        },
        get name() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        reportValidity() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
        setCustomValidity() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "submit");
        },
        set type(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = "submit";
        },
        get validationMessage() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).validationMessage, "");
        },
        get validity() {  // ValidityState 
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).validity, "");
        },
        get value() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).value, "");
        },
        set value(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).value = value + "";
        },
        get willValidate() {
            debugger;
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        }
    };

    qxVm.rename(HTMLButtonElement.prototype, "HTMLButtonElement");
    qxVm.safeDescriptor_addConstructor(HTMLButtonElement);
    qxVm.safe_Objattribute(HTMLButtonElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLButtonElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLButtonElement, HTMLElement);

})();


qxVm.memory.htmlElements["button"] = function () {
    return new HTMLButtonElement(qxVm.memory.$createObj_key);
}