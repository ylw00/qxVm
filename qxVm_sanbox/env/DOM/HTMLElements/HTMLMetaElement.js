HTMLMetaElement = function HTMLMetaElement(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLMetaElement);

; (function () {
    const $safe_get_attribute = ['content', 'httpEquiv', 'media', 'name', 'scheme'];
    const $safe_set_attribute = ['content', 'httpEquiv', 'media', 'name', 'scheme'];
    const $safe_func_attribute = [];
    HTMLMetaElement.prototype = {

        get content() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).content, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMetaElement', 'content', arguments, result);
            return result;
        },
        set content(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMetaElement', 'content', arguments);
            lwVm.memory.private_data.get(this).content = value + "";
        },
        get httpEquiv() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).httpEquiv, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMetaElement', 'httpEquiv', arguments, result);
            return result;
        },
        set httpEquiv(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMetaElement', 'httpEquiv', arguments);
            lwVm.memory.private_data.get(this).httpEquiv = value + "";
        },
        get media() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).media, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMetaElement', 'media', arguments, result);
            return result;
        },
        set media(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMetaElement', 'media', arguments);
            lwVm.memory.private_data.get(this).media = value + "";
        },
        get name() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).name, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMetaElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMetaElement', 'name', arguments);
            lwVm.memory.private_data.get(this).name = value + "";
        },
        get scheme() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).scheme, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLMetaElement', 'scheme', arguments, result);
            return result;
        },
        set scheme(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLMetaElement', 'scheme', arguments);
            lwVm.memory.private_data.get(this).scheme = value + "";
        },
    }
    lwVm.rename(HTMLMetaElement.prototype, "HTMLMetaElement");
    lwVm.safeDescriptor_addConstructor(HTMLMetaElement);
    lwVm.safe_Objattribute(HTMLMetaElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLMetaElement, HTMLElement);
})();

lwVm.memory.htmlElements["meta"] = function () {
    return new HTMLMetaElement(lwVm.memory.$createObj_key);
}