HTMLFrameElement = function HTMLFrameElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLFrameElement);

; (function () {
    const $safe_get_attribute = ['contentDocument', 'contentWindow', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
    const $safe_set_attribute = ['frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
    const $safe_func_attribute = [];
    
    HTMLFrameElement.prototype = {
        get contentDocument() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).contentDocument, "");
        },
        get contentWindow() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).contentWindow, "");
        },
        get frameBorder() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).frameBorder, "");
        },
        set frameBorder(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).frameBorder = value + "";
        },
        get longDesc() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).longDesc, "");
        },
        set longDesc(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).longDesc = value + "";
        },
        get marginHeight() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).marginHeight, "");
        },
        set marginHeight(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).marginHeight = value + "";
        },
        get marginWidth() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).marginWidth, "");
        },
        set marginWidth(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).marginWidth = value + "";
        },
        get name() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        get noResize() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).noResize, "");
        },
        set noResize(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).noResize = value + "";
        },
        get scrolling() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).scrolling, "");
        },
        set scrolling(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).scrolling = value + "";
        },
        get src() {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).src, "");
        },
        set src(value) {
            debugger;
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).src = value + "";
        },
    }

    qxVm.rename(HTMLFrameElement.prototype, "HTMLFrameElement");
    qxVm.safeDescriptor_addConstructor(HTMLFrameElement);
    qxVm.safe_Objattribute(HTMLFrameElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameElement, HTMLElement);

})();

qxVm.memory.htmlElements["frame"] = function () {
    return new HTMLFrameElement(qxVm.memory.$createObj_key);
}

