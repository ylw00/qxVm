Path2D = function Path2D() {
    if(new.target !== Path2D){
		throw new TypeError(`Failed to construct 'Path2D': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Path2D);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addPath', 'arc', 'arcTo', 'bezierCurveTo', 'closePath', 'ellipse', 'lineTo', 'moveTo', 'quadraticCurveTo', 'rect', 'roundRect'];
    Path2D.prototype = {

        addPath() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        arc() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        arcTo() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bezierCurveTo() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        closePath() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        ellipse() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        lineTo() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        moveTo() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        quadraticCurveTo() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        rect() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        roundRect() {
            debugger;
            if (!Path2D.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Path2D.prototype, "Path2D");
    qxVm.safeDescriptor_addConstructor(Path2D);
    qxVm.safe_Objattribute(Path2D, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();