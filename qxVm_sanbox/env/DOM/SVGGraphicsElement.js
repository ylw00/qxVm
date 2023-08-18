SVGGraphicsElement = function SVGGraphicsElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(SVGGraphicsElement);

; (function () {
    const $safe_get_attribute = ['farthestViewportElement', 'nearestViewportElement', 'requiredExtensions', 'systemLanguage', 'transform'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getBBox', 'getCTM', 'getScreenCTM'];

    SVGGraphicsElement.prototype = {
        get farthestViewportElement() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).farthestViewportElement, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGGraphicsElement', 'farthestViewportElement', arguments, result);
            return result;
        },
        getBBox() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SVGGraphicsElement', 'getBBox', arguments, result);
            return result;
        },
        getCTM() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SVGGraphicsElement', 'getCTM', arguments, result);
            return result;
        },
        getScreenCTM() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'SVGGraphicsElement', 'getScreenCTM', arguments, result);
            return result;
        },
        get nearestViewportElement() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).nearestViewportElement, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGGraphicsElement', 'nearestViewportElement', arguments, result);
            return result;
        },
        get requiredExtensions() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).requiredExtensions, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGGraphicsElement', 'requiredExtensions', arguments, result);
            return result;
        },
        get systemLanguage() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).systemLanguage, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGGraphicsElement', 'systemLanguage', arguments, result);
            return result;
        },
        get transform() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).transform, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'SVGGraphicsElement', 'transform', arguments, result);
            return result;
        },
    }

    lwVm.rename(SVGGraphicsElement.prototype, "SVGGraphicsElement");
    lwVm.safeDescriptor_addConstructor(SVGGraphicsElement);
    lwVm.safe_Objattribute(SVGGraphicsElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SVGGraphicsElement.prototype, SVGElement.prototype);
    Object.setPrototypeOf(SVGGraphicsElement, SVGElement);

})();

lwVm.memory.htmlElements["div"] = function () {
    return new SVGGraphicsElement(lwVm.memory.$createObj_key);
}

