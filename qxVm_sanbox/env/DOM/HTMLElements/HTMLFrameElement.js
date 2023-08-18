HTMLFrameElement = function HTMLFrameElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLFrameElement);

; (function () {
    const $safe_get_attribute = ['contentDocument', 'contentWindow', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
    const $safe_set_attribute = ['frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
    const $safe_func_attribute = [];
    
    HTMLFrameElement.prototype = {
        get contentDocument() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).contentDocument, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'contentDocument', arguments, result);
            return result;
        },
        get contentWindow() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).contentWindow, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'contentWindow', arguments, result);
            return result;
        },
        get frameBorder() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).frameBorder, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'frameBorder', arguments, result);
            return result;
        },
        set frameBorder(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'frameBorder', arguments);
            lwVm.memory.private_data.get(this).frameBorder = value + "";
        },
        get longDesc() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).longDesc, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'longDesc', arguments, result);
            return result;
        },
        set longDesc(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'longDesc', arguments);
            lwVm.memory.private_data.get(this).longDesc = value + "";
        },
        get marginHeight() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).marginHeight, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'marginHeight', arguments, result);
            return result;
        },
        set marginHeight(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'marginHeight', arguments);
            lwVm.memory.private_data.get(this).marginHeight = value + "";
        },
        get marginWidth() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).marginWidth, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'marginWidth', arguments, result);
            return result;
        },
        set marginWidth(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'marginWidth', arguments);
            lwVm.memory.private_data.get(this).marginWidth = value + "";
        },
        get name() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).name, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'name', arguments);
            lwVm.memory.private_data.get(this).name = value + "";
        },
        get noResize() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).noResize, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'noResize', arguments, result);
            return result;
        },
        set noResize(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'noResize', arguments);
            lwVm.memory.private_data.get(this).noResize = value + "";
        },
        get scrolling() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).scrolling, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'scrolling', arguments, result);
            return result;
        },
        set scrolling(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'scrolling', arguments);
            lwVm.memory.private_data.get(this).scrolling = value + "";
        },
        get src() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).src, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameElement', 'src', arguments, result);
            return result;
        },
        set src(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameElement', 'src', arguments);
            lwVm.memory.private_data.get(this).src = value + "";
        },
    }

    lwVm.rename(HTMLFrameElement.prototype, "HTMLFrameElement");
    lwVm.safeDescriptor_addConstructor(HTMLFrameElement);
    lwVm.safe_Objattribute(HTMLFrameElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameElement, HTMLElement);

})();

lwVm.memory.htmlElements["frame"] = function () {
    return new HTMLFrameElement(lwVm.memory.$createObj_key);
}

