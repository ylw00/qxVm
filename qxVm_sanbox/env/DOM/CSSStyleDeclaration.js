CSSStyleDeclaration = function CSSStyleDeclaration(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CSSStyleDeclaration);

; (function () {
    const $safe_get_attribute = ['cssFloat', 'cssText', 'length', 'parentRule'];
    const $safe_set_attribute = ['cssFloat', 'cssText'];
    const $safe_func_attribute = ['getPropertyPriority', 'getPropertyValue', 'item', 'removeProperty', 'setProperty'];
    CSSStyleDeclaration.prototype = {

        get cssFloat() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cssFloat, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'cssFloat', arguments, result);
            return result;
        },
        set cssFloat(value) {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CSSStyleDeclaration', 'cssFloat', arguments);
            lwVm.memory.private_data.get(this).cssFloat = value + "";
        },
        get cssText() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cssText, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'cssText', arguments, result);
            return result;
        },
        set cssText(value) {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CSSStyleDeclaration', 'cssText', arguments);
            lwVm.memory.private_data.get(this).cssText = value + "";
        },
        getPropertyPriority() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'getPropertyPriority', arguments, result);
            return result;
        },
        getPropertyValue() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'getPropertyValue', arguments, result);
            return result;
        },
        item() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).length, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'length', arguments, result);
            return result;
        },
        get parentRule() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).parentRule, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'parentRule', arguments, result);
            return result;
        },
        removeProperty() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'removeProperty', arguments, result);
            return result;
        },
        setProperty() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'setProperty', arguments, result);
            return result;
        }
    }

    lwVm.rename(CSSStyleDeclaration.prototype, "CSSStyleDeclaration");
    lwVm.safeDescriptor_addConstructor(CSSStyleDeclaration);
    lwVm.safe_Objattribute(CSSStyleDeclaration, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

