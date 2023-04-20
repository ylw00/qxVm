SVGGraphicsElement = function SVGGraphicsElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(SVGGraphicsElement);

; (function () {
    const $safe_get_attribute = ['farthestViewportElement', 'nearestViewportElement', 'requiredExtensions', 'systemLanguage', 'transform'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getBBox', 'getCTM', 'getScreenCTM'];

    SVGGraphicsElement.prototype = {
        get farthestViewportElement() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).farthestViewportElement, "");
        },
        getBBox() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getCTM() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getScreenCTM() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get nearestViewportElement() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).nearestViewportElement, "");
        },
        get requiredExtensions() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).requiredExtensions, "");
        },
        get systemLanguage() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).systemLanguage, "");
        },
        get transform() {
            debugger;
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).transform, "");
        },
    }

    qxVm.rename(SVGGraphicsElement.prototype, "SVGGraphicsElement");
    qxVm.safeDescriptor_addConstructor(SVGGraphicsElement);
    qxVm.safe_Objattribute(SVGGraphicsElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SVGGraphicsElement.prototype, SVGElement.prototype);
    Object.setPrototypeOf(SVGGraphicsElement, SVGElement);

})();

qxVm.memory.htmlElements["div"] = function () {
    return new SVGGraphicsElement(qxVm.memory.$createObj_key);
}

