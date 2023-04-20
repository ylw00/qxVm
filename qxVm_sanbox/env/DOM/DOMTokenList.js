DOMTokenList = function DOMTokenList(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(DOMTokenList);

; (function () {
    const $safe_get_attribute = ['length', 'value'];
    const $safe_set_attribute = ['value'];
    const $safe_func_attribute = ['add', 'contains', 'entries', 'forEach', 'item', 'keys', 'remove', 'replace', 'supports', 'toString', 'toggle', 'values'];
    
    DOMTokenList.prototype = {
        add() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        contains() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        entries() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        forEach() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        item() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        keys() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get length() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).length, "");
        },
        remove() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replace() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        supports() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        toString() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        toggle() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get value() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).value, "");
        },
        set value(value) {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).value = value + "";
        },
        values() {
            debugger;
            if (!DOMTokenList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };

    qxVm.rename(DOMTokenList.prototype, "DOMTokenList");
    qxVm.safeDescriptor_addConstructor(DOMTokenList);
    qxVm.safe_Objattribute(DOMTokenList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

