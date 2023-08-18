HTMLImageElement = function HTMLImageElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLImageElement);

; (function () {
    const $safe_get_attribute = ['align', 'alt', 'border', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'hspace', 'isMap', 'loading', 'longDesc', 'lowsrc', 'name', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width', 'x', 'y'];
    const $safe_set_attribute = ['align', 'alt', 'border', 'crossOrigin', 'decoding', 'height', 'hspace', 'isMap', 'loading', 'longDesc', 'lowsrc', 'name', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width'];
    const $safe_func_attribute = ['decode'];

    HTMLImageElement.prototype = {
        get align() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).align, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'align', arguments, result);
            return result;
        },
        set align(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'align', arguments);
            lwVm.memory.private_data.get(this).align = value + "";
        },
        get alt() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).alt, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'alt', arguments, result);
            return result;
        },
        set alt(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'alt', arguments);
            lwVm.memory.private_data.get(this).alt = value + "";
        },
        get border() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).border, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'border', arguments, result);
            return result;
        },
        set border(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'border', arguments);
            lwVm.memory.private_data.get(this).border = value + "";
        },
        get complete() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'complete', arguments, result);
            return result;
        },
        get crossOrigin() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).crossOrigin, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'crossOrigin', arguments, result);
            return result;
        },
        set crossOrigin(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'crossOrigin', arguments);
            lwVm.memory.private_data.get(this).crossOrigin = "anonymous";
        },
        get currentSrc() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentSrc, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'currentSrc', arguments, result);
            return result;
        },
        decode() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLImageElement', 'decode', arguments, result);
            return result;
        },
        get decoding() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).decoding, 'auto');
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'decoding', arguments, result);
            return result;
        },
        set decoding(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'decoding', arguments);
            lwVm.memory.private_data.get(this).decoding = 'auto';
        },
        get height() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).height, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === "") {
                lwVm.memory.private_data.get(this).height = "";
            } else if (value === true) {
                lwVm.memory.private_data.get(this).height = 1;
            } else {
                lwVm.memory.private_data.get(this).height = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
            }
        },
        get hspace() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hspace, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'hspace', arguments, result);
            return result;
        },
        set hspace(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).hspace = 1;
            } else {
                lwVm.memory.private_data.get(this).hspace = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
            }
        },
        get isMap() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).isMap, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'isMap', arguments, result);
            return result;
        },
        set isMap(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'isMap', arguments);
            lwVm.memory.private_data.get(this).isMap = value ? true: false;
        },
        get loading() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).loading, "auto");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'loading', arguments, result);
            return result;
        },
        set loading(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'loading', arguments);
            lwVm.memory.private_data.get(this).loading = value + "";
        },
        get longDesc() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).longDesc, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'longDesc', arguments, result);
            return result;
        },
        set longDesc(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'longDesc', arguments);
            lwVm.memory.private_data.get(this).longDesc = `${location.href}${value}`;
        },
        get lowsrc() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lowsrc, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'lowsrc', arguments, result);
            return result;
        },
        set lowsrc(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'lowsrc', arguments);
            lwVm.memory.private_data.get(this).lowsrc = `${location.href}${value}`;
        },
        get name() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).name, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'name', arguments);
            lwVm.memory.private_data.get(this).name = value + "";
        },
        get naturalHeight() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).naturalHeight, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'naturalHeight', arguments, result);
            return result;
        },
        get naturalWidth() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).naturalWidth, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'naturalWidth', arguments, result);
            return result;
        },
        get referrerPolicy() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).referrerPolicy, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'referrerPolicy', arguments, result);
            return result;
        },
        set referrerPolicy(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'referrerPolicy', arguments);
            lwVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get sizes() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sizes, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'sizes', arguments, result);
            return result;
        },
        set sizes(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'sizes', arguments);
            lwVm.memory.private_data.get(this).sizes = value + "";
        },
        get src() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).src, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'src', arguments, result);
            return result;
        },
        set src(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'src', arguments);
            lwVm.memory.private_data.get(this).src = value + "";
        },
        get srcset() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).srcset, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'srcset', arguments, result);
            return result;
        },
        set srcset(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'srcset', arguments);
            lwVm.memory.private_data.get(this).srcset = value + "";
        },
        get useMap() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).useMap, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'useMap', arguments, result);
            return result;
        },
        set useMap(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'useMap', arguments);
            lwVm.memory.private_data.get(this).useMap = value + "";
        },
        get vspace() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).vspace, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'vspace', arguments, result);
            return result;
        },
        set vspace(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'vspace', arguments);
            lwVm.memory.private_data.get(this).vspace = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        get width() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).width, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLImageElement', 'width', arguments);
            lwVm.memory.private_data.get(this).width = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        get x() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).x, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLImageElement', 'x', arguments, result);
            return result;
        },
        get y() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).y, 0);
        }
    };

    lwVm.rename(HTMLImageElement.prototype, "HTMLImageElement");
    lwVm.safeDescriptor_addConstructor(HTMLImageElement);
    lwVm.safe_Objattribute(HTMLImageElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLImageElement, HTMLElement);

})();

lwVm.memory.htmlElements["img"] = function () {
    return new HTMLImageElement(lwVm.memory.$createObj_key);
}

