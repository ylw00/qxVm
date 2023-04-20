Headers = function Headers() {//构造函数
    if(new.target !== Headers){
		throw new TypeError(`Failed to construct 'Headers': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Headers);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['append', 'delete', 'entries', 'forEach', 'get', 'has', 'keys', 'set', 'values'];
    
    Headers.prototype = {
        append() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        delete() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        entries() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        forEach() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        has() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        keys() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        values() {
            debugger;
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    }

    qxVm.rename(Headers.prototype, "Headers");
    qxVm.safeDescriptor_addConstructor(Headers);
    qxVm.safe_Objattribute(Headers, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

