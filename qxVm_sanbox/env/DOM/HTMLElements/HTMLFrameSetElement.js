HTMLFrameSetElement = function HTMLFrameSetElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLFrameSetElement);

; (function () {
    const $safe_get_attribute = [
        'cols', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'onerror', 'onfocus', 'onhashchange', 'onlanguagechange', 'onload',
        'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onresize', 'onscroll',
        'onstorage', 'onunhandledrejection', 'onunload', 'rows'
    ];
    const $safe_set_attribute = [
        'cols', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'onerror', 'onfocus', 'onhashchange', 'onlanguagechange', 'onload',
        'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onresize', 'onscroll',
        'onstorage', 'onunhandledrejection', 'onunload', 'rows'
    ];
    const $safe_func_attribute = [];

    HTMLFrameSetElement.prototype = {
        get cols() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).cols, "");
        },
        set cols(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).cols = value + "";
        },
        get onafterprint() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onafterprint, "");
        },
        set onafterprint(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onafterprint = value + "";
        },
        get onbeforeprint() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbeforeprint, "");
        },
        set onbeforeprint(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbeforeprint = value + "";
        },
        get onbeforeunload() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbeforeunload, "");
        },
        set onbeforeunload(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbeforeunload = value + "";
        },
        get onblur() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onblur, "");
        },
        set onblur(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onblur = value + "";
        },
        get onerror() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, "");
        },
        set onerror(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onfocus, "");
        },
        set onfocus(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onhashchange() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onhashchange, "");
        },
        set onhashchange(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onhashchange = value + "";
        },
        get onlanguagechange() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onlanguagechange, "");
        },
        set onlanguagechange(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onlanguagechange = value + "";
        },
        get onload() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onload, "");
        },
        set onload(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onload = value + "";
        },
        get onmessage() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessage, "");
        },
        set onmessage(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onmessageerror() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessageerror, "");
        },
        set onmessageerror(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessageerror = value + "";
        },
        get onoffline() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onoffline, "");
        },
        set onoffline(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onoffline = value + "";
        },
        get ononline() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ononline, "");
        },
        set ononline(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ononline = value + "";
        },
        get onpagehide() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpagehide, "");
        },
        set onpagehide(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpagehide = value + "";
        },
        get onpageshow() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpageshow, "");
        },
        set onpageshow(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpageshow = value + "";
        },
        get onpopstate() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpopstate, "");
        },
        set onpopstate(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpopstate = value + "";
        },
        get onrejectionhandled() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onrejectionhandled, "");
        },
        set onrejectionhandled(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onrejectionhandled = value + "";
        },
        get onresize() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresize, "");
        },
        set onresize(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onscroll, "");
        },
        set onscroll(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onstorage() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstorage, "");
        },
        set onstorage(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstorage = value + "";
        },
        get onunhandledrejection() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onunhandledrejection, "");
        },
        set onunhandledrejection(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onunhandledrejection = value + "";
        },
        get onunload() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onunload, "");
        },
        set onunload(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onunload = value + "";
        },
        get rows() {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).rows, "");
        },
        set rows(value) {
            debugger;
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).rows = value + "";
        }
    }

    qxVm.rename(HTMLFrameSetElement.prototype, "HTMLFrameSetElement");
    qxVm.safeDescriptor_addConstructor(HTMLFrameSetElement);
    qxVm.safe_Objattribute(HTMLFrameSetElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameSetElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameSetElement, HTMLElement);

})();

qxVm.memory.htmlElements["frameset"] = function () {
    return new HTMLFrameSetElement(qxVm.memory.$createObj_key);
}

