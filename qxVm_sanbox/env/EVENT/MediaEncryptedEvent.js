MediaEncryptedEvent = function MediaEncryptedEvent(type) {
    if(new.target !== MediaEncryptedEvent){
		throw new TypeError(`Failed to construct 'MediaEncryptedEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    if (type === undefined){
        throw new TypeError(`Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.`)
    }

    qxVm.memory.private_data.set(this, {type: type})
}; qxVm.safefunction(MediaEncryptedEvent);

; (function () {
    const $safe_get_attribute = ['initData', 'initDataType'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    MediaEncryptedEvent.prototype = {
        get initData() {
            debugger;
            if (!MediaEncryptedEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).initData, null);
        },
        get initDataType() {
            debugger;
            if (!MediaEncryptedEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).initDataType, "");
        },
    }
    qxVm.rename(MediaEncryptedEvent.prototype, "MediaEncryptedEvent");
    qxVm.safeDescriptor_addConstructor(MediaEncryptedEvent);
    qxVm.safe_Objattribute(MediaEncryptedEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaEncryptedEvent.prototype, Event.prototype);
    Object.setPrototypeOf(MediaEncryptedEvent, Event);

})();

