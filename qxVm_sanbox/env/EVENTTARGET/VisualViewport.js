VisualViewport = function VisualViewport(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(VisualViewport);

; (function () {
    const $safe_get_attribute = ['height', 'offsetLeft', 'offsetTop', 'onresize', 'onscroll', 'pageLeft', 'pageTop', 'scale', 'width'];
    const $safe_set_attribute = ['onresize', 'onscroll'];
    const $safe_func_attribute = [];

    VisualViewport.prototype = {
        get height() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 963.3333129882812;
        },
        get offsetLeft() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get offsetTop() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get onresize() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresize, null);
        },
        set onresize(value) {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onscroll, null);
        },
        set onscroll(value) {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onscroll = value + "";
        },
        get pageLeft() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get pageTop() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get scale() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 1;
        },
        get width() {
            debugger;
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 1707.3333740234375;
        },
    }
    qxVm.rename(VisualViewport.prototype, "VisualViewport");
    qxVm.safeDescriptor_addConstructor(VisualViewport);
    qxVm.safe_Objattribute(VisualViewport, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(VisualViewport.prototype, EventTarget.prototype);
    Object.setPrototypeOf(VisualViewport, EventTarget);
})();
visualViewport = new VisualViewport(qxVm.memory.$createObj_key);

