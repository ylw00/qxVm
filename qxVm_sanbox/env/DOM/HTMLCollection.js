HTMLCollection = function HTMLCollection(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    };
}; lwVm.safefunction(HTMLCollection);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem'];

    HTMLCollection.prototype = {
        item(index) {
            if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this[index];;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCollection', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = Object.keys(this).length;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLCollection', 'length', arguments, result);
            return result;
        },
        namedItem(name) {
            if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this[name];;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCollection', 'namedItem', arguments, result);
            return result;
        }
    };
    lwVm.set_iterator(HTMLCollection);
    lwVm.rename(HTMLCollection.prototype, "HTMLCollection");
    lwVm.safeDescriptor_addConstructor(HTMLCollection);
    lwVm.safe_Objattribute(HTMLCollection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    // 创建一个放到框架内存(模拟全局变量), 便于后续得其他引用操作
    lwVm.memory.htmlCollection = new HTMLCollection(lwVm.memory.$createObj_key);

})();

