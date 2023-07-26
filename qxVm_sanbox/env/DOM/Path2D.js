Path2D = function Path2D() {
    if(new.target !== Path2D){
		throw new TypeError(`Failed to construct 'Path2D': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Path2D);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addPath', 'arc', 'arcTo', 'bezierCurveTo', 'closePath', 'ellipse', 'lineTo', 'moveTo', 'quadraticCurveTo', 'rect', 'roundRect'];
    Path2D.prototype = {

        addPath() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'addPath', arguments, result);
            return result;
        },
        arc() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'arc', arguments, result);
            return result;
        },
        arcTo() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'arcTo', arguments, result);
            return result;
        },
        bezierCurveTo() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'bezierCurveTo', arguments, result);
            return result;
        },
        closePath() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'closePath', arguments, result);
            return result;
        },
        ellipse() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'ellipse', arguments, result);
            return result;
        },
        lineTo() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'lineTo', arguments, result);
            return result;
        },
        moveTo() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'moveTo', arguments, result);
            return result;
        },
        quadraticCurveTo() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'quadraticCurveTo', arguments, result);
            return result;
        },
        rect() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'rect', arguments, result);
            return result;
        },
        roundRect() {
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Path2D', 'roundRect', arguments, result);
            return result;
        },
    }
    lwVm.rename(Path2D.prototype, "Path2D");
    lwVm.safeDescriptor_addConstructor(Path2D);
    lwVm.safe_Objattribute(Path2D, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();