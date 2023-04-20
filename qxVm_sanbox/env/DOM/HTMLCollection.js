HTMLCollection = function HTMLCollection(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    };
}; qxVm.safefunction(HTMLCollection);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem'];

    HTMLCollection.prototype = {
        item(index) {
            debugger;
            if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this[index];
        },
        get length() {
            if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return Object.keys(this).length
        },
        namedItem(name) {
            debugger;
            if (!HTMLCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this[name];
        }
    };
    qxVm.set_iterator(HTMLCollection);
    qxVm.rename(HTMLCollection.prototype, "HTMLCollection");
    qxVm.safeDescriptor_addConstructor(HTMLCollection);
    qxVm.safe_Objattribute(HTMLCollection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    // 创建一个放到框架内存(模拟全局变量), 便于后续得其他引用操作
    qxVm.memory.htmlCollection = new HTMLCollection(qxVm.memory.$createObj_key);

})();

