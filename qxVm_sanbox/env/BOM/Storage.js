Storage = function Storage() {//构造函数
    throw new TypeError("Illegal constructor");
}; qxVm.safefunction(Storage);

localStorage = {};
sessionStorage = {};

; (function () {

    const $safe_get_attribute = [ 'length' ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['clear', 'getItem', 'key', 'removeItem', 'setItem']

    Storage.prototype = {
        clear() {
            debugger;
            var temp = Object.keys(this)
            for (var i = 0; temp.length > i; i++) {
                delete this[temp[i]];
            }
        },
        getItem(k) {
            debugger;
            return this[k] ? this[k] : null;
        },
        key(index) {
            debugger;
            return Object.keys(this)[index];
        },
        get length() {
            if (!Storage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return Object.keys(this).length;
        },
        removeItem(k) {
            debugger;
            delete this[k];
        },
        setItem(k, v) {
            debugger;
            this[k] = v;
        }
    }; qxVm.rename(Storage.prototype, "Storage");
    qxVm.safeDescriptor_addConstructor(Storage);
    qxVm.safe_Objattribute(Storage, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(localStorage, Storage.prototype);
    Object.setPrototypeOf(sessionStorage, Storage.prototype);

})();

// debugger;