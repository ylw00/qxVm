HTMLTitleElement = function HTMLTitleElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLTitleElement);



; (function () {
    const $safe_get_attribute = ['text'];
    const $safe_set_attribute = ['text'];
    const $safe_func_attribute = [];

    HTMLTitleElement.prototype = {
        get text() {
            if (!HTMLTitleElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            return qxVm.abs(qxVm.memory.private_data.get(this).text, "");
        },
        set text(value) {
            if (!HTMLTitleElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            qxVm.memory.private_data.get(this).text = value + "";
        }
    };

    qxVm.rename(HTMLTitleElement.prototype, "HTMLTitleElement");
    qxVm.safeDescriptor_addConstructor(HTMLTitleElement);
    qxVm.safe_Objattribute(HTMLTitleElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLTitleElement, HTMLElement);

})();
qxVm.memory.htmlElements["title"] = function () {
    return new HTMLTitleElement(qxVm.memory.$createObj_key);
}
