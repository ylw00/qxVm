CanvasRenderingContext2D = function CanvasRenderingContext2D(createObj_key, canvas) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {canvas: canvas})
}; lwVm.safefunction(CanvasRenderingContext2D);

; (function () {
    const $safe_get_attribute = [
        'canvas', 'direction', 'fillStyle', 'filter', 'font', 'globalAlpha', 'globalCompositeOperation', 'imageSmoothingEnabled', 'imageSmoothingQuality',
        'lineCap', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle',
        'textAlign', 'textBaseline'
    ];
    const $safe_set_attribute = [
        'direction', 'fillStyle', 'filter', 'font', 'globalAlpha', 'globalCompositeOperation', 'imageSmoothingEnabled', 'imageSmoothingQuality', 'lineCap',
        'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle', 'textAlign',
        'textBaseline'
    ];
    const $safe_func_attribute = [
        'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createImageData', 'createLinearGradient', 'createPattern',
        'createRadialGradient', 'drawFocusIfNeeded', 'drawImage', 'ellipse', 'fill', 'fillRect', 'fillText', 'getContextAttributes', 'getImageData',
        'getLineDash', 'getTransform', 'isPointInPath', 'isPointInStroke', 'lineTo', 'measureText', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect',
        'resetTransform', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform',
        'translate'
    ];

    CanvasRenderingContext2D.prototype = {
        arc(x, y, radius, startAngle, endAngle, anticlockwise) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'arc', arguments, result);
            return result;
        },
        arcTo(x1, y1, x2, y2, radius) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'arcTo', arguments, result);
            return result;
        },
        beginPath() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'beginPath', arguments, result);
            return result;
        },
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'bezierCurveTo', arguments, result);
            return result;
        },
        get canvas() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).canvas;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'canvas', arguments, result);
            return result;
        },
        clearRect(x, y, width, height) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'clearRect', arguments, result);
            return result;
        },
        clip() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'clip', arguments, result);
            return result;
        },
        closePath() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'closePath', arguments, result);
            return result;
        },
        createImageData(width, height) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'createImageData', arguments, result);
            return result;
        },
        createLinearGradient(x0, y0, x1, y1) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'createLinearGradient', arguments, result);
            return result;
        },
        createPattern(image, repetition) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'createPattern', arguments, result);
            return result;
        },
        createRadialGradient(x0, y0, r0, x1, y1, r1) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'createRadialGradient', arguments, result);
            return result;
        },
        get direction() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).direction, "ltr");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'direction', arguments, result);
            return result;
        },
        set direction(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'direction', arguments);
            lwVm.memory.private_data.get(this).direction = value + "";
        },
        drawFocusIfNeeded(path, element) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'drawFocusIfNeeded', arguments, result);
            return result;
        },
        drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'drawImage', arguments, result);
            return result;
        },
        ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'ellipse', arguments, result);
            return result;
        },
        fill(path, fillRule) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'fill', arguments, result);
            return result;
        },
        fillRect(x, y, width, height) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'fillRect', arguments, result);
            return result;
        },
        get fillStyle() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).fillStyle, "#000000");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'fillStyle', arguments, result);
            return result;
        },
        set fillStyle(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            // if (value.slice(0, 1) !== "#" || value.length !== 7) {
            //     return
            // }
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'fillStyle', arguments);
            lwVm.memory.private_data.get(this).fillStyle = value + "";
        },
        fillText(text, x, y, maxWidth) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'fillText', arguments, result);
            return result;
        },
        get filter() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).filter, "none");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'filter', arguments, result);
            return result;
        },
        set filter(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'filter', arguments);
            lwVm.memory.private_data.get(this).filter = value + "";
        },
        get font() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).font, "10px sans-serif");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'font', arguments, result);
            return result;
        },
        set font(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'font', arguments);
            lwVm.memory.private_data.get(this).font = value + "";
        },
        getContextAttributes() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return {
                alpha: true,
                colorSpace: "srgb",
                desynchronized: false,
            }
        },
        getImageData(sx, sy, sw, sh) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'getImageData', arguments, result);
            return result;
        },
        getLineDash() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = [];;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'getLineDash', arguments, result);
            return result;
        },
        getTransform() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new (class DOMMatrix {
                a = 1;
                b = 0;
                c = 0;
                d = 1;
                e = 0;
                f = 0;
                is2D = true;
                isIdentity = true;
                m11 = 1;
                m12 = 0;
                m13 = 0;
                m14 = 0;
                m21 = 0;
                m22 = 1;
                m23 = 0;
                m24 = 0;
                m31 = 0;
                m32 = 0;
                m33 = 1;
                m34 = 0;
                m41 = 0;
                m42 = 0;
                m43 = 0;
                m44 = 1;
            })
        },
        get globalAlpha() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).globalAlpha, 1);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'globalAlpha', arguments, result);
            return result;
        },
        set globalAlpha(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'globalAlpha', arguments);
            lwVm.memory.private_data.get(this).globalAlpha = value === 1 ? 1 : 0;
        },
        get globalCompositeOperation() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).globalCompositeOperation, "source-over");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'globalCompositeOperation', arguments, result);
            return result;
        },
        set globalCompositeOperation(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'globalCompositeOperation', arguments);
            lwVm.memory.private_data.get(this).globalCompositeOperation = value + "";
        },
        get imageSmoothingEnabled() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).imageSmoothingEnabled, true);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'imageSmoothingEnabled', arguments, result);
            return result;
        },
        set imageSmoothingEnabled(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'imageSmoothingEnabled', arguments);
            lwVm.memory.private_data.get(this).imageSmoothingEnabled = value === 0 ? false : true;
        },
        get imageSmoothingQuality() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).imageSmoothingQuality, "low");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'imageSmoothingQuality', arguments, result);
            return result;
        },
        set imageSmoothingQuality(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'imageSmoothingQuality', arguments);
            lwVm.memory.private_data.get(this).imageSmoothingQuality = value + "";
        },
        isPointInPath(path, x, y, fillRule) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'isPointInPath', arguments, result);
            return result;
        },
        isPointInStroke(path, x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'isPointInStroke', arguments, result);
            return result;
        },
        get lineCap() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lineCap, "butt");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'lineCap', arguments, result);
            return result;
        },
        set lineCap(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'lineCap', arguments);
            lwVm.memory.private_data.get(this).lineCap = value + "";
        },
        get lineDashOffset() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lineDashOffset, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'lineDashOffset', arguments, result);
            return result;
        },
        set lineDashOffset(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).lineDashOffset = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    lwVm.memory.private_data.get(this).lineDashOffset =  parseInt(value);
                }
            }
        },
        get lineJoin() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lineJoin, "miter");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'lineJoin', arguments, result);
            return result;
        },
        set lineJoin(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'lineJoin', arguments);
            lwVm.memory.private_data.get(this).lineJoin = value + "";
        },
        lineTo(x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'lineTo', arguments, result);
            return result;
        },
        get lineWidth() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lineWidth, 1);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'lineWidth', arguments, result);
            return result;
        },
        set lineWidth(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).lineWidth = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    lwVm.memory.private_data.get(this).lineWidth =  parseInt(value);
                }
            }
        },
        measureText(text) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'measureText', arguments, result);
            return result;
        },
        get miterLimit() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).miterLimit, 10);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'miterLimit', arguments, result);
            return result;
        },
        set miterLimit(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).miterLimit = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    lwVm.memory.private_data.get(this).miterLimit =  parseInt(value);
                }
            }
        },
        moveTo(x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'moveTo', arguments, result);
            return result;
        },
        putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'putImageData', arguments, result);
            return result;
        },
        quadraticCurveTo(cpx, cpy, x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'quadraticCurveTo', arguments, result);
            return result;
        },
        rect(x, y, width, height) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'rect', arguments, result);
            return result;
        },
        resetTransform() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'resetTransform', arguments, result);
            return result;
        },
        restore() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'restore', arguments, result);
            return result;
        },
        rotate(angle) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'rotate', arguments, result);
            return result;
        },
        save() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'save', arguments, result);
            return result;
        },
        scale(x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'scale', arguments, result);
            return result;
        },
        setLineDash(segments) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'setLineDash', arguments, result);
            return result;
        },
        setTransform(a, b, c, d, e, f) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'setTransform', arguments, result);
            return result;
        },
        get shadowBlur() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).shadowBlur, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'shadowBlur', arguments, result);
            return result;
        },
        set shadowBlur(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).shadowBlur = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    lwVm.memory.private_data.get(this).shadowBlur =  parseInt(value);
                }
            }
        },
        get shadowColor() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).shadowColor, "rgba(0, 0, 0, 0)");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'shadowColor', arguments, result);
            return result;
        },
        set shadowColor(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'shadowColor', arguments);
            lwVm.memory.private_data.get(this).shadowColor = value + "";
        },
        get shadowOffsetX() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).shadowOffsetX, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'shadowOffsetX', arguments, result);
            return result;
        },
        set shadowOffsetX(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).shadowOffsetX = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    lwVm.memory.private_data.get(this).shadowOffsetX =  parseInt(value);
                }
            }
        },
        get shadowOffsetY() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).shadowOffsetY, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'shadowOffsetY', arguments, result);
            return result;
        },
        set shadowOffsetY(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                lwVm.memory.private_data.get(this).shadowOffsetY = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    lwVm.memory.private_data.get(this).shadowOffsetY =  parseInt(value);
                }
            }
        },
        stroke(path) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'stroke', arguments, result);
            return result;
        },
        strokeRect(x, y, width, height) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'strokeRect', arguments, result);
            return result;
        },
        get strokeStyle() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).strokeStyle, "#000000");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'strokeStyle', arguments, result);
            return result;
        },
        set strokeStyle(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'strokeStyle', arguments);
            lwVm.memory.private_data.get(this).strokeStyle = value + "";
        },
        strokeText(text, x, y, maxWidth) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'strokeText', arguments, result);
            return result;
        },
        get textAlign() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).textAlign, "start");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'textAlign', arguments, result);
            return result;
        },
        set textAlign(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CanvasRenderingContext2D', 'textAlign', arguments);
            lwVm.memory.private_data.get(this).textAlign = value + "";
        },
        get textBaseline() {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).textBaseline, "alphabetic");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CanvasRenderingContext2D', 'textBaseline', arguments, result);
            return result;
        },
        set textBaseline(value) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (["top", "hanging", "middle", "alphabetic", "ideographic", "bottom"].includes(value)){
                lwVm.memory.private_data.get(this).textBaseline = value + "";
            }
        },
        transform(a, b, c, d, e, f) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'transform', arguments, result);
            return result;
        },
        translate(x, y) {
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CanvasRenderingContext2D', 'translate', arguments, result);
            return result;
        }
    };

    lwVm.rename(CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D");
    lwVm.safeDescriptor_addConstructor(CanvasRenderingContext2D);
    lwVm.safe_Objattribute(CanvasRenderingContext2D, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();