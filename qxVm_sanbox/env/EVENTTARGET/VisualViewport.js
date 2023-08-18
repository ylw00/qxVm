VisualViewport = function VisualViewport(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(VisualViewport);

; (function () {
    const $safe_get_attribute = ['height', 'offsetLeft', 'offsetTop', 'onresize', 'onscroll', 'pageLeft', 'pageTop', 'scale', 'width'];
    const $safe_set_attribute = ['onresize', 'onscroll'];
    const $safe_func_attribute = [];

    VisualViewport.prototype = {
        get height() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 963.3333129882812;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'height', arguments, result);
            return result;
        },
        get offsetLeft() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'offsetLeft', arguments, result);
            return result;
        },
        get offsetTop() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'offsetTop', arguments, result);
            return result;
        },
        get onresize() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onresize, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'VisualViewport', 'onresize', arguments);
            lwVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onscroll, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'VisualViewport', 'onscroll', arguments);
            lwVm.memory.private_data.get(this).onscroll = value + "";
        },
        get pageLeft() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'pageLeft', arguments, result);
            return result;
        },
        get pageTop() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'pageTop', arguments, result);
            return result;
        },
        get scale() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 1;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'scale', arguments, result);
            return result;
        },
        get width() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 1707.3333740234375;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VisualViewport', 'width', arguments, result);
            return result;
        },
    }
    lwVm.rename(VisualViewport.prototype, "VisualViewport");
    lwVm.safeDescriptor_addConstructor(VisualViewport);
    lwVm.safe_Objattribute(VisualViewport, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(VisualViewport.prototype, EventTarget.prototype);
    Object.setPrototypeOf(VisualViewport, EventTarget);
})();
visualViewport = new VisualViewport(lwVm.memory.$createObj_key);

