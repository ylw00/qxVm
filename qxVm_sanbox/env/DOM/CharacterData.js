CharacterData = function (createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CharacterData);

; (function () {
    const $safe_get_attribute = ['data', 'length', 'nextElementSibling', 'previousElementSibling'];
    const $safe_set_attribute = ['data'];
    const $safe_func_attribute = ['after', 'appendData', 'before', 'deleteData', 'insertData', 'remove', 'replaceData', 'replaceWith', 'substringData'];

    CharacterData.prototype = {
        after() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        appendData() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        before() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get data() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).data, "");
        },
        set data(value) {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).data = value + "";
        },
        deleteData() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        insertData() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get length() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).length, "");
        },
        get nextElementSibling() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).nextElementSibling, "");
        },
        get previousElementSibling() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).previousElementSibling, "");
        },
        remove() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replaceData() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replaceWith() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        substringData() {
            debugger;
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };

    qxVm.rename(CharacterData.prototype, "CharacterData");
    qxVm.safeDescriptor_addConstructor(CharacterData);
    qxVm.safe_Objattribute(CharacterData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.defineProperties(CharacterData.prototype, {
        [Symbol.unscopables]: {
            value: {
                after: true,
                before: true,
                remove: true,
                replaceWith: true
            },
            configurable: true, enumerable: false, writable: false
        }
    });

    Object.setPrototypeOf(CharacterData.prototype, Node.prototype);
    Object.setPrototypeOf(CharacterData, Node);

})();