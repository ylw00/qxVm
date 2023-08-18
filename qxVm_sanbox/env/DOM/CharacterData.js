CharacterData = function (createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CharacterData);

; (function () {
    const $safe_get_attribute = ['data', 'length', 'nextElementSibling', 'previousElementSibling'];
    const $safe_set_attribute = ['data'];
    const $safe_func_attribute = ['after', 'appendData', 'before', 'deleteData', 'insertData', 'remove', 'replaceData', 'replaceWith', 'substringData'];

    CharacterData.prototype = {
        after() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'after', arguments, result);
            return result;
        },
        appendData() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'appendData', arguments, result);
            return result;
        },
        before() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'before', arguments, result);
            return result;
        },
        get data() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).data, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CharacterData', 'data', arguments, result);
            return result;
        },
        set data(value) {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CharacterData', 'data', arguments);
            lwVm.memory.private_data.get(this).data = value + "";
        },
        deleteData() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'deleteData', arguments, result);
            return result;
        },
        insertData() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'insertData', arguments, result);
            return result;
        },
        get length() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).length, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CharacterData', 'length', arguments, result);
            return result;
        },
        get nextElementSibling() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).nextElementSibling, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CharacterData', 'nextElementSibling', arguments, result);
            return result;
        },
        get previousElementSibling() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).previousElementSibling, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CharacterData', 'previousElementSibling', arguments, result);
            return result;
        },
        remove() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'remove', arguments, result);
            return result;
        },
        replaceData() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'replaceData', arguments, result);
            return result;
        },
        replaceWith() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'replaceWith', arguments, result);
            return result;
        },
        substringData() {
            if (!CharacterData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CharacterData', 'substringData', arguments, result);
            return result;
        }
    };

    lwVm.rename(CharacterData.prototype, "CharacterData");
    lwVm.safeDescriptor_addConstructor(CharacterData);
    lwVm.safe_Objattribute(CharacterData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

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