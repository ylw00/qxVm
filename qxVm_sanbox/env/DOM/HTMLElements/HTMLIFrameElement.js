HTMLIFrameElement = function HTMLIFrameElement(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLIFrameElement);

; (function () {
    const $safe_get_attribute = ['align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'contentDocument', 'contentWindow', 'csp', 'featurePolicy', 'frameBorder', 'height', 'loading', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];
    const $safe_set_attribute = ['align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'csp', 'frameBorder', 'height', 'loading', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];
    const $safe_func_attribute = ['getSVGDocument'];

    HTMLIFrameElement.prototype = {
        get align() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).align, "");
        },
        set align(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).align = value + "";
        },
        get allow() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).allow, "");
        },
        set allow(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).allow = value + "";
        },
        get allowFullscreen() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).allowFullscreen, false);
        },
        set allowFullscreen(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).allowFullscreen = value ? true : false;
        },
        get allowPaymentRequest() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).allowPaymentRequest, false);
        },
        set allowPaymentRequest(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).allowPaymentRequest =  value ? true : false;
        },
        get contentDocument() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).contentDocument, null);
        },
        get contentWindow() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).contentWindow, null);
        },
        get csp() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).csp, "");
        },
        set csp(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).csp = value + "";
        },
        get featurePolicy() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).featurePolicy, "");
        },
        get frameBorder() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).frameBorder, "");
        },
        set frameBorder(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).frameBorder = value + "";
        },
        getSVGDocument() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get height() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, "");
        },
        set height(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).height = value + "";
        },
        get loading() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).loading, "auto");
        },
        set loading(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).loading = value + "";
        },
        get longDesc() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).longDesc, "");
        },
        set longDesc(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).longDesc = value + "";
        },
        get marginHeight() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).marginHeight, "");
        },
        set marginHeight(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).marginHeight = value + "";
        },
        get marginWidth() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).marginWidth, "");
        },
        set marginWidth(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).marginWidth = value + "";
        },
        get name() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        get referrerPolicy() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrerPolicy, "");
        },
        set referrerPolicy(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get sandbox() {  // DOMTokenList
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sandbox, "");
        },
        set sandbox(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).sandbox = value + "";
        },
        get scrolling() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).scrolling, "");
        },
        set scrolling(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).scrolling = value + "";
        },
        get src() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).src, "");
        },
        set src(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).src = value + "";
        },
        get srcdoc() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).srcdoc, "");
        },
        set srcdoc(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).srcdoc = value + "";
        },
        get width() {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, "");
        },
        set width(value) {
            debugger;
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).width = value + "";
        },
    }
    qxVm.rename(HTMLIFrameElement.prototype, "HTMLIFrameElement");
    qxVm.safeDescriptor_addConstructor(HTMLIFrameElement);
    qxVm.safe_Objattribute(HTMLIFrameElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameElement, HTMLElement);
})();

qxVm.memory.htmlElements["iframe"] = function () {
    return new HTMLImageElement(qxVm.memory.$createObj_key);
}

