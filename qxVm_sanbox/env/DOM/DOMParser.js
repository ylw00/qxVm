DOMParser = function DOMParser() {
    if(new.target !== DOMParser){
		throw new TypeError(`Failed to construct 'DOMParser': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(DOMParser);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['parseFromString'];

    DOMParser.prototype = {
        parseFromString() {
            debugger;
            if (!DOMParser.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(DOMParser.prototype, "DOMParser");
    qxVm.safeDescriptor_addConstructor(DOMParser);
    qxVm.safe_Objattribute(DOMParser, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();