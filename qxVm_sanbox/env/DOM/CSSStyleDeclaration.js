CSSStyleDeclaration = function CSSStyleDeclaration(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CSSStyleDeclaration);

; (function () {
    const $safe_get_attribute = ['cssFloat', 'cssText', 'length', 'parentRule'];
    const $safe_set_attribute = ['cssFloat', 'cssText'];
    const $safe_func_attribute = ['getPropertyPriority', 'getPropertyValue', 'item', 'removeProperty', 'setProperty'];
    CSSStyleDeclaration.prototype = {

        get cssFloat() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).cssFloat, "");
        },
        set cssFloat(value) {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).cssFloat = value + "";
        },
        get cssText() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).cssText, "");
        },
        set cssText(value) {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).cssText = value + "";
        },
        getPropertyPriority() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getPropertyValue() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        item() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get length() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).length, "");
        },
        get parentRule() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).parentRule, null);
        },
        removeProperty() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setProperty() {
            debugger;
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    }

    qxVm.rename(CSSStyleDeclaration.prototype, "CSSStyleDeclaration");
    qxVm.safeDescriptor_addConstructor(CSSStyleDeclaration);
    qxVm.safe_Objattribute(CSSStyleDeclaration, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

