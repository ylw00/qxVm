Text = function Text(wholeText) {
    if (new.target !== Text) {
        throw new TypeError(`Failed to construct 'Text': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    }

    qxVm.memory.private_data.set(this, { wholeText: wholeText })
}; qxVm.safefunction(Text);

; (function () {
    const $safe_get_attribute = ['assignedSlot'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['splitText'];

    Text.prototype = {
        get assignedSlot() {
            debugger;
            if (!Text.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).assignedSlot, null);
        },
        splitText() {
            debugger;
            if (!Text.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get wholeText() {
            debugger;
            if (!Text.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).wholeText, "");
        }
    }
    qxVm.rename(Text.prototype, "Text");
    qxVm.safeDescriptor_addConstructor(Text);
    qxVm.safe_Objattribute(Text, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
    Object.setPrototypeOf(Text, CharacterData);

})();