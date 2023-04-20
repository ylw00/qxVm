HTMLImageElement = function HTMLImageElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLImageElement);

; (function () {
    const $safe_get_attribute = ['align', 'alt', 'border', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'hspace', 'isMap', 'loading', 'longDesc', 'lowsrc', 'name', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width', 'x', 'y'];
    const $safe_set_attribute = ['align', 'alt', 'border', 'crossOrigin', 'decoding', 'height', 'hspace', 'isMap', 'loading', 'longDesc', 'lowsrc', 'name', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width'];
    const $safe_func_attribute = ['decode'];

    HTMLImageElement.prototype = {
        get align() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).align, "");
        },
        set align(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).align = value + "";
        },
        get alt() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).alt, "");
        },
        set alt(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).alt = value + "";
        },
        get border() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).border, "");
        },
        set border(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).border = value + "";
        },
        get complete() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
        get crossOrigin() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).crossOrigin, null);
        },
        set crossOrigin(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).crossOrigin = "anonymous";
        },
        get currentSrc() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentSrc, "");
        },
        decode() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get decoding() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).decoding, 'auto');
        },
        set decoding(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).decoding = 'auto';
        },
        get height() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, 0);
        },
        set height(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === "") {
                qxVm.memory.private_data.get(this).height = "";
            } else if (value === true) {
                qxVm.memory.private_data.get(this).height = 1;
            } else {
                qxVm.memory.private_data.get(this).height = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
            }
        },
        get hspace() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hspace, 0);
        },
        set hspace(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).hspace = 1;
            } else {
                qxVm.memory.private_data.get(this).hspace = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
            }
        },
        get isMap() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).isMap, false);
        },
        set isMap(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).isMap = value ? true: false;
        },
        get loading() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).loading, "auto");
        },
        set loading(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).loading = value + "";
        },
        get longDesc() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).longDesc, "");
        },
        set longDesc(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).longDesc = `${location.href}${value}`;
        },
        get lowsrc() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lowsrc, "");
        },
        set lowsrc(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).lowsrc = `${location.href}${value}`;
        },
        get name() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        get naturalHeight() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).naturalHeight, "");
        },
        get naturalWidth() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).naturalWidth, 0);
        },
        get referrerPolicy() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrerPolicy, "");
        },
        set referrerPolicy(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get sizes() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sizes, "");
        },
        set sizes(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).sizes = value + "";
        },
        get src() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).src, "");
        },
        set src(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).src = value + "";
        },
        get srcset() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).srcset, "");
        },
        set srcset(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).srcset = value + "";
        },
        get useMap() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).useMap, "");
        },
        set useMap(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).useMap = value + "";
        },
        get vspace() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).vspace, 0);
        },
        set vspace(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).vspace = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        get width() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, 0);
        },
        set width(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).width = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        get x() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).x, 0);
        },
        get y() {
            debugger;
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).y, 0);
        }
    };

    qxVm.rename(HTMLImageElement.prototype, "HTMLImageElement");
    qxVm.safeDescriptor_addConstructor(HTMLImageElement);
    qxVm.safe_Objattribute(HTMLImageElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLImageElement, HTMLElement);

})();

qxVm.memory.htmlElements["img"] = function () {
    return new HTMLImageElement(qxVm.memory.$createObj_key);
}

