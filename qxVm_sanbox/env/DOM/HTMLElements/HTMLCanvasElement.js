HTMLCanvasElement = function HTMLCanvasElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, { getContext: null, contextType: null })
}; lwVm.safefunction(HTMLCanvasElement);

; (function () {
    const $safe_get_attribute = ['height', 'width'];
    const $safe_set_attribute = ['height', 'width'];
    const $safe_func_attribute = ['captureStream', 'getContext', 'toBlob', 'toDataURL', 'transferControlToOffscreen'];

    HTMLCanvasElement.prototype = {
        captureStream() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'captureStream', arguments, result);
            return result;
        },
        getContext(contextType, contextAttributes) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (contextType === undefined) { throw new TypeError("Failed to execute 'getContext' on 'HTMLCanvasElement': 1 argument required, but only 0 present.") }

            const buffer_context = lwVm.memory.private_data.get(this).getContext;
            const buffer_contextType = lwVm.memory.private_data.get(this).contextType;

            if (buffer_context === null) {
                let context = {};
                switch (contextType) {
                    case "webgl":
                        context = new WebGLRenderingContext(lwVm.memory.$createObj_key, this)
                        break;
                    case "2d":
                        context = new CanvasRenderingContext2D(lwVm.memory.$createObj_key, this)
                        break
                    default:
                        context = null;
                };

                lwVm.memory.private_data.get(this).getContext = context;
                lwVm.memory.private_data.get(this).contextType = contextType
            let result = context;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'switch ', arguments, result);
            return result;
            }

            if (buffer_context !== null && contextType === buffer_contextType) {
            let result = buffer_context;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'switch ', arguments, result);
            return result;
            }
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'switch ', arguments, result);
            return result;
        },
        get height() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).height, 150);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLCanvasElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLCanvasElement', 'height', arguments);
            lwVm.memory.private_data.get(this).height = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        toBlob(callback, type, quality) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'toBlob', arguments, result);
            return result;
        },
        toDataURL() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.default_envs.canvas;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'toDataURL', arguments, result);
            return result;
        },
        transferControlToOffscreen() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLCanvasElement', 'transferControlToOffscreen', arguments, result);
            return result;
        },
        get width() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).width, 300);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLCanvasElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLCanvasElement', 'width', arguments);
            lwVm.memory.private_data.get(this).width = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
    }

    lwVm.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement");
    lwVm.safeDescriptor_addConstructor(HTMLCanvasElement);
    lwVm.safe_Objattribute(HTMLCanvasElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLCanvasElement, HTMLElement);

})();


lwVm.memory.htmlElements["canvas"] = function () {
    return new HTMLCanvasElement(lwVm.memory.$createObj_key);
}


