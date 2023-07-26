HTMLLinkElement = function HTMLLinkElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLLinkElement);

; (function () {
    const $safe_get_attribute = ['as', 'charset', 'crossOrigin', 'disabled', 'href', 'hreflang', 'imageSizes', 'imageSrcset', 'integrity', 'media', 'referrerPolicy', 'rel', 'relList', 'rev', 'sheet', 'sizes', 'target', 'type'];
    const $safe_set_attribute = ['as', 'charset', 'crossOrigin', 'disabled', 'href', 'hreflang', 'imageSizes', 'imageSrcset', 'integrity', 'media', 'referrerPolicy', 'rel', 'relList', 'rev', 'sizes', 'target', 'type'];
    const $safe_func_attribute = [];

    HTMLLinkElement.prototype = {
        get as() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).as, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'as', arguments, result);
            return result;
        },
        set as(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'as', arguments);
            lwVm.memory.private_data.get(this).as = "";
        },
        get charset() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).charset, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'charset', arguments, result);
            return result;
        },
        set charset(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'charset', arguments);
            lwVm.memory.private_data.get(this).charset = value + "";
        },
        get crossOrigin() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).crossOrigin, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'crossOrigin', arguments, result);
            return result;
        },
        set crossOrigin(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'crossOrigin', arguments);
            lwVm.memory.private_data.get(this).crossOrigin = "anonymous";
        },
        get disabled() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).disabled, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'disabled', arguments, result);
            return result;
        },
        set disabled(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'disabled', arguments);
            lwVm.memory.private_data.get(this).disabled = value ? true : false;
        },
        get href() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).href, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'href', arguments, result);
            return result;
        },
        set href(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'href', arguments);
            lwVm.memory.private_data.get(this).href =  + `${location.origin}/${value}`;
        },
        get hreflang() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hreflang, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'hreflang', arguments, result);
            return result;
        },
        set hreflang(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'hreflang', arguments);
            lwVm.memory.private_data.get(this).hreflang = value + "";
        },
        get imageSizes() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).imageSizes, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'imageSizes', arguments, result);
            return result;
        },
        set imageSizes(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'imageSizes', arguments);
            lwVm.memory.private_data.get(this).imageSizes = value + "";
        },
        get imageSrcset() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).imageSrcset, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'imageSrcset', arguments, result);
            return result;
        },
        set imageSrcset(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'imageSrcset', arguments);
            lwVm.memory.private_data.get(this).imageSrcset = value + "";
        },
        get integrity() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).integrity, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'integrity', arguments, result);
            return result;
        },
        set integrity(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'integrity', arguments);
            lwVm.memory.private_data.get(this).integrity = value + "";
        },
        get media() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).media, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'media', arguments, result);
            return result;
        },
        set media(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'media', arguments);
            lwVm.memory.private_data.get(this).media = value + "";
        },
        get referrerPolicy() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).referrerPolicy, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'referrerPolicy', arguments, result);
            return result;
        },
        set referrerPolicy(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'referrerPolicy', arguments);
            lwVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get rel() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).rel, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'rel', arguments, result);
            return result;
        },
        set rel(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'rel', arguments);
            lwVm.memory.private_data.get(this).rel = value + "";
        },
        get relList() {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set relList(value) {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'relList', arguments);
            lwVm.memory.private_data.get(this).relList = value + "";
        },
        get rev() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).rev, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'rev', arguments, result);
            return result;
        },
        set rev(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'rev', arguments);
            lwVm.memory.private_data.get(this).rev = value + "";
        },
        get sheet() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sheet, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'sheet', arguments, result);
            return result;
        },
        get sizes() {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sizes, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'sheet', arguments, result);
            return result;
        },
        set sizes(value) {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'sizes', arguments);
            lwVm.memory.private_data.get(this).sizes = value + "";
        },
        get target() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).target, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'target', arguments, result);
            return result;
        },
        set target(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'target', arguments);
            lwVm.memory.private_data.get(this).target = value + "";
        },
        get type() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLinkElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLinkElement', 'type', arguments);
            lwVm.memory.private_data.get(this).type = value + "";
        },
    }

    lwVm.rename(HTMLLinkElement.prototype, "HTMLLinkElement");
    lwVm.safeDescriptor_addConstructor(HTMLLinkElement);
    lwVm.safe_Objattribute(HTMLLinkElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLinkElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLinkElement, HTMLElement);

})();


lwVm.memory.htmlElements["link"] = function () {
    return new HTMLLinkElement(lwVm.memory.$createObj_key);
}