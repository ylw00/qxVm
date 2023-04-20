CanvasRenderingContext2D = function CanvasRenderingContext2D(createObj_key, canvas) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {canvas: canvas})
}; qxVm.safefunction(CanvasRenderingContext2D);

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
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        arcTo(x1, y1, x2, y2, radius) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        beginPath() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get canvas() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).canvas;
        },
        clearRect(x, y, width, height) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clip() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        closePath() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createImageData(width, height) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createLinearGradient(x0, y0, x1, y1) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createPattern(image, repetition) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createRadialGradient(x0, y0, r0, x1, y1, r1) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get direction() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).direction, "ltr");
        },
        set direction(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).direction = value + "";
        },
        drawFocusIfNeeded(path, element) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        fill(path, fillRule) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        fillRect(x, y, width, height) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get fillStyle() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).fillStyle, "#000000");
        },
        set fillStyle(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            // if (value.slice(0, 1) !== "#" || value.length !== 7) {
            //     return
            // }
            qxVm.memory.private_data.get(this).fillStyle = value + "";
        },
        fillText(text, x, y, maxWidth) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get filter() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).filter, "none");
        },
        set filter(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).filter = value + "";
        },
        get font() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).font, "10px sans-serif");
        },
        set font(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).font = value + "";
        },
        getContextAttributes() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return {
                alpha: true,
                colorSpace: "srgb",
                desynchronized: false,
            }
        },
        getImageData(sx, sy, sw, sh) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getLineDash() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return [];
        },
        getTransform() {
            debugger;
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
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).globalAlpha, 1);
        },
        set globalAlpha(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).globalAlpha = value === 1 ? 1 : 0;
        },
        get globalCompositeOperation() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).globalCompositeOperation, "source-over");
        },
        set globalCompositeOperation(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).globalCompositeOperation = value + "";
        },
        get imageSmoothingEnabled() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).imageSmoothingEnabled, true);
        },
        set imageSmoothingEnabled(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).imageSmoothingEnabled = value === 0 ? false : true;
        },
        get imageSmoothingQuality() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).imageSmoothingQuality, "low");
        },
        set imageSmoothingQuality(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).imageSmoothingQuality = value + "";
        },
        isPointInPath(path, x, y, fillRule) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isPointInStroke(path, x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get lineCap() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lineCap, "butt");
        },
        set lineCap(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).lineCap = value + "";
        },
        get lineDashOffset() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lineDashOffset, 0);
        },
        set lineDashOffset(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).lineDashOffset = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    qxVm.memory.private_data.get(this).lineDashOffset =  parseInt(value);
                }
            }
        },
        get lineJoin() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lineJoin, "miter");
        },
        set lineJoin(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).lineJoin = value + "";
        },
        lineTo(x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get lineWidth() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lineWidth, 1);
        },
        set lineWidth(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).lineWidth = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    qxVm.memory.private_data.get(this).lineWidth =  parseInt(value);
                }
            }
        },
        measureText(text) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get miterLimit() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).miterLimit, 10);
        },
        set miterLimit(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).miterLimit = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    qxVm.memory.private_data.get(this).miterLimit =  parseInt(value);
                }
            }
        },
        moveTo(x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        quadraticCurveTo(cpx, cpy, x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        rect(x, y, width, height) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        resetTransform() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        restore() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        rotate(angle) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        save() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        scale(x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setLineDash(segments) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setTransform(a, b, c, d, e, f) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get shadowBlur() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shadowBlur, 0);
        },
        set shadowBlur(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).shadowBlur = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    qxVm.memory.private_data.get(this).shadowBlur =  parseInt(value);
                }
            }
        },
        get shadowColor() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shadowColor, "rgba(0, 0, 0, 0)");
        },
        set shadowColor(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).shadowColor = value + "";
        },
        get shadowOffsetX() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shadowOffsetX, 0);
        },
        set shadowOffsetX(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).shadowOffsetX = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    qxVm.memory.private_data.get(this).shadowOffsetX =  parseInt(value);
                }
            }
        },
        get shadowOffsetY() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shadowOffsetY, 0);
        },
        set shadowOffsetY(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                qxVm.memory.private_data.get(this).shadowOffsetY = 1;
            }else{
                if (!isNaN(parseFloat(value)) && isFinite(value)){
                    qxVm.memory.private_data.get(this).shadowOffsetY =  parseInt(value);
                }
            }
        },
        stroke(path) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        strokeRect(x, y, width, height) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get strokeStyle() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).strokeStyle, "#000000");
        },
        set strokeStyle(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).strokeStyle = value + "";
        },
        strokeText(text, x, y, maxWidth) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get textAlign() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).textAlign, "start");
        },
        set textAlign(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).textAlign = value + "";
        },
        get textBaseline() {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).textBaseline, "alphabetic");
        },
        set textBaseline(value) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (["top", "hanging", "middle", "alphabetic", "ideographic", "bottom"].includes(value)){
                qxVm.memory.private_data.get(this).textBaseline = value + "";
            }
        },
        transform(a, b, c, d, e, f) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        translate(x, y) {
            debugger;
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };

    qxVm.rename(CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D");
    qxVm.safeDescriptor_addConstructor(CanvasRenderingContext2D);
    qxVm.safe_Objattribute(CanvasRenderingContext2D, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();