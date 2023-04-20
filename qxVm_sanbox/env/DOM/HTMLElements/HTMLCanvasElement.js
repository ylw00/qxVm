HTMLCanvasElement = function HTMLCanvasElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, { getContext: null, contextType: null })
}; qxVm.safefunction(HTMLCanvasElement);

; (function () {
    const $safe_get_attribute = ['height', 'width'];
    const $safe_set_attribute = ['height', 'width'];
    const $safe_func_attribute = ['captureStream', 'getContext', 'toBlob', 'toDataURL', 'transferControlToOffscreen'];

    HTMLCanvasElement.prototype = {
        captureStream() {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getContext(contextType, contextAttributes) {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (contextType === undefined) { throw new TypeError("Failed to execute 'getContext' on 'HTMLCanvasElement': 1 argument required, but only 0 present.") }

            const buffer_context = qxVm.memory.private_data.get(this).getContext;
            const buffer_contextType = qxVm.memory.private_data.get(this).contextType;

            if (buffer_context === null) {
                let context = {};
                switch (contextType) {
                    case "webgl":
                        context = new WebGLRenderingContext(qxVm.memory.$createObj_key, this)
                        break;
                    case "2d":
                        context = new CanvasRenderingContext2D(qxVm.memory.$createObj_key, this)
                        break
                    default:
                        debugger;
                        context = null;
                };

                qxVm.memory.private_data.get(this).getContext = context;
                qxVm.memory.private_data.get(this).contextType = contextType
                return context;
            }

            if (buffer_context !== null && contextType === buffer_contextType) {
                return buffer_context;
            }
            return null;
        },
        get height() {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, 150);
        },
        set height(value) {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).height = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        toBlob(callback, type, quality) {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        toDataURL() {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.default_envs.canvas;
        },
        transferControlToOffscreen() {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get width() {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, 300);
        },
        set width(value) {
            debugger;
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).width = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
    }

    qxVm.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement");
    qxVm.safeDescriptor_addConstructor(HTMLCanvasElement);
    qxVm.safe_Objattribute(HTMLCanvasElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLCanvasElement, HTMLElement);

})();


qxVm.memory.htmlElements["canvas"] = function () {
    return new HTMLCanvasElement(qxVm.memory.$createObj_key);
}


