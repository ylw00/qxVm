HTMLFrameSetElement = function HTMLFrameSetElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLFrameSetElement);

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
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cols, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'cols', arguments, result);
            return result;
        },
        set cols(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'cols', arguments);
            lwVm.memory.private_data.get(this).cols = value + "";
        },
        get onafterprint() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onafterprint, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onafterprint', arguments, result);
            return result;
        },
        set onafterprint(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onafterprint', arguments);
            lwVm.memory.private_data.get(this).onafterprint = value + "";
        },
        get onbeforeprint() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onbeforeprint, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onbeforeprint', arguments, result);
            return result;
        },
        set onbeforeprint(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onbeforeprint', arguments);
            lwVm.memory.private_data.get(this).onbeforeprint = value + "";
        },
        get onbeforeunload() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onbeforeunload, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onbeforeunload', arguments, result);
            return result;
        },
        set onbeforeunload(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onbeforeunload', arguments);
            lwVm.memory.private_data.get(this).onbeforeunload = value + "";
        },
        get onblur() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onblur, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onblur', arguments, result);
            return result;
        },
        set onblur(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onblur', arguments);
            lwVm.memory.private_data.get(this).onblur = value + "";
        },
        get onerror() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onfocus, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onfocus', arguments, result);
            return result;
        },
        set onfocus(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onfocus', arguments);
            lwVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onhashchange() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onhashchange, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onhashchange', arguments, result);
            return result;
        },
        set onhashchange(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onhashchange', arguments);
            lwVm.memory.private_data.get(this).onhashchange = value + "";
        },
        get onlanguagechange() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onlanguagechange, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onlanguagechange', arguments, result);
            return result;
        },
        set onlanguagechange(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onlanguagechange', arguments);
            lwVm.memory.private_data.get(this).onlanguagechange = value + "";
        },
        get onload() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onload, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onload', arguments, result);
            return result;
        },
        set onload(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onload', arguments);
            lwVm.memory.private_data.get(this).onload = value + "";
        },
        get onmessage() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmessage, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onmessage', arguments, result);
            return result;
        },
        set onmessage(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onmessage', arguments);
            lwVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onmessageerror() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmessageerror, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onmessageerror', arguments, result);
            return result;
        },
        set onmessageerror(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onmessageerror', arguments);
            lwVm.memory.private_data.get(this).onmessageerror = value + "";
        },
        get onoffline() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onoffline, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onoffline', arguments, result);
            return result;
        },
        set onoffline(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onoffline', arguments);
            lwVm.memory.private_data.get(this).onoffline = value + "";
        },
        get ononline() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ononline, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'ononline', arguments, result);
            return result;
        },
        set ononline(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'ononline', arguments);
            lwVm.memory.private_data.get(this).ononline = value + "";
        },
        get onpagehide() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpagehide, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onpagehide', arguments, result);
            return result;
        },
        set onpagehide(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onpagehide', arguments);
            lwVm.memory.private_data.get(this).onpagehide = value + "";
        },
        get onpageshow() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpageshow, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onpageshow', arguments, result);
            return result;
        },
        set onpageshow(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onpageshow', arguments);
            lwVm.memory.private_data.get(this).onpageshow = value + "";
        },
        get onpopstate() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpopstate, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onpopstate', arguments, result);
            return result;
        },
        set onpopstate(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onpopstate', arguments);
            lwVm.memory.private_data.get(this).onpopstate = value + "";
        },
        get onrejectionhandled() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onrejectionhandled, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onrejectionhandled', arguments, result);
            return result;
        },
        set onrejectionhandled(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onrejectionhandled', arguments);
            lwVm.memory.private_data.get(this).onrejectionhandled = value + "";
        },
        get onresize() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onresize, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onresize', arguments);
            lwVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onscroll, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onscroll', arguments);
            lwVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onstorage() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onstorage, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onstorage', arguments, result);
            return result;
        },
        set onstorage(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onstorage', arguments);
            lwVm.memory.private_data.get(this).onstorage = value + "";
        },
        get onunhandledrejection() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onunhandledrejection, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onunhandledrejection', arguments, result);
            return result;
        },
        set onunhandledrejection(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onunhandledrejection', arguments);
            lwVm.memory.private_data.get(this).onunhandledrejection = value + "";
        },
        get onunload() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onunload, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'onunload', arguments, result);
            return result;
        },
        set onunload(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLFrameSetElement', 'onunload', arguments);
            lwVm.memory.private_data.get(this).onunload = value + "";
        },
        get rows() {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).rows, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLFrameSetElement', 'rows', arguments, result);
            return result;
        },
        set rows(value) {
            if (!HTMLFrameSetElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).rows = value + "";
        }
    }

    lwVm.rename(HTMLFrameSetElement.prototype, "HTMLFrameSetElement");
    lwVm.safeDescriptor_addConstructor(HTMLFrameSetElement);
    lwVm.safe_Objattribute(HTMLFrameSetElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameSetElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameSetElement, HTMLElement);

})();

lwVm.memory.htmlElements["frameset"] = function () {
    return new HTMLFrameSetElement(lwVm.memory.$createObj_key);
}

