DOMParser = function DOMParser() {
    if(new.target !== DOMParser){
		throw new TypeError(`Failed to construct 'DOMParser': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(DOMParser);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['parseFromString'];

    DOMParser.prototype = {
        parseFromString() {
            if (!DOMParser.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'DOMParser', 'parseFromString', arguments, result);
            return result;
        },
    }
    lwVm.rename(DOMParser.prototype, "DOMParser");
    lwVm.safeDescriptor_addConstructor(DOMParser);
    lwVm.safe_Objattribute(DOMParser, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();