HTMLLinkElement = function HTMLLinkElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLLinkElement);

; (function () {
    const $safe_get_attribute = ['as', 'charset', 'crossOrigin', 'disabled', 'href', 'hreflang', 'imageSizes', 'imageSrcset', 'integrity', 'media', 'referrerPolicy', 'rel', 'relList', 'rev', 'sheet', 'sizes', 'target', 'type'];
    const $safe_set_attribute = ['as', 'charset', 'crossOrigin', 'disabled', 'href', 'hreflang', 'imageSizes', 'imageSrcset', 'integrity', 'media', 'referrerPolicy', 'rel', 'relList', 'rev', 'sizes', 'target', 'type'];
    const $safe_func_attribute = [];

    HTMLLinkElement.prototype = {
        get as() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).as, "");
        },
        set as(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).as = "";
        },
        get charset() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).charset, "");
        },
        set charset(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).charset = value + "";
        },
        get crossOrigin() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).crossOrigin, null);
        },
        set crossOrigin(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).crossOrigin = "anonymous";
        },
        get disabled() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).disabled, false);
        },
        set disabled(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).disabled = value ? true : false;
        },
        get href() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).href, "");
        },
        set href(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).href =  + `${location.origin}/${value}`;
        },
        get hreflang() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hreflang, "");
        },
        set hreflang(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).hreflang = value + "";
        },
        get imageSizes() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).imageSizes, "");
        },
        set imageSizes(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).imageSizes = value + "";
        },
        get imageSrcset() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).imageSrcset, "");
        },
        set imageSrcset(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).imageSrcset = value + "";
        },
        get integrity() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).integrity, "");
        },
        set integrity(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).integrity = value + "";
        },
        get media() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).media, "");
        },
        set media(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).media = value + "";
        },
        get referrerPolicy() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrerPolicy, "");
        },
        set referrerPolicy(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get rel() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).rel, "");
        },
        set rel(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).rel = value + "";
        },
        get relList() {  // DOMTokenList
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).relList, "");
        },
        set relList(value) {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).relList = value + "";
        },
        get rev() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).rev, "");
        },
        set rev(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).rev = value + "";
        },
        get sheet() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sheet, null);
        },
        get sizes() {  // DOMTokenList
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sizes, "");
        },
        set sizes(value) {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).sizes = value + "";
        },
        get target() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).target, "");
        },
        set target(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).target = value + "";
        },
        get type() {
            debugger;
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "");
        },
        set type(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        },
    }

    qxVm.rename(HTMLLinkElement.prototype, "HTMLLinkElement");
    qxVm.safeDescriptor_addConstructor(HTMLLinkElement);
    qxVm.safe_Objattribute(HTMLLinkElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLinkElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLinkElement, HTMLElement);

})();


qxVm.memory.htmlElements["link"] = function () {
    return new HTMLLinkElement(qxVm.memory.$createObj_key);
}