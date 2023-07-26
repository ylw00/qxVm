DOMTokenList = function DOMTokenList(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(DOMTokenList);

; (function () {
    const $safe_get_attribute = ['length', 'value'];
    const $safe_set_attribute = ['value'];
    const $safe_func_attribute = ['add', 'contains', 'entries', 'forEach', 'item', 'keys', 'remove', 'replace', 'supports', 'toString', 'toggle', 'values'];
    
    DOMTokenList.prototype = {
        add() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'add', arguments, result);
            return result;
        },
        contains() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'contains', arguments, result);
            return result;
        },
        entries() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'entries', arguments, result);
            return result;
        },
        forEach() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'forEach', arguments, result);
            return result;
        },
        item() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'item', arguments, result);
            return result;
        },
        keys() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'keys', arguments, result);
            return result;
        },
        get length() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).length, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'DOMTokenList', 'length', arguments, result);
            return result;
        },
        remove() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'remove', arguments, result);
            return result;
        },
        replace() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'replace', arguments, result);
            return result;
        },
        supports() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'supports', arguments, result);
            return result;
        },
        toString() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'toString', arguments, result);
            return result;
        },
        toggle() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'toggle', arguments, result);
            return result;
        },
        get value() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).value, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'DOMTokenList', 'value', arguments, result);
            return result;
        },
        set value(value) {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'DOMTokenList', 'value', arguments);
            lwVm.memory.private_data.get(this).value = value + "";
        },
        values() {
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMTokenList', 'values', arguments, result);
            return result;
        }
    };

    lwVm.rename(DOMTokenList.prototype, "DOMTokenList");
    lwVm.safeDescriptor_addConstructor(DOMTokenList);
    lwVm.safe_Objattribute(DOMTokenList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

