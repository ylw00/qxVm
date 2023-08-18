Text = function Text(wholeText) {
    if (new.target !== Text) {
        throw new TypeError(`Failed to construct 'Text': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    }

    lwVm.memory.private_data.set(this, { wholeText: wholeText })
}; lwVm.safefunction(Text);

; (function () {
    const $safe_get_attribute = ['assignedSlot'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['splitText'];

    Text.prototype = {
        get assignedSlot() {
            if (!Text.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).assignedSlot, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Text', 'assignedSlot', arguments, result);
            return result;
        },
        splitText() {
            if (!Text.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Text', 'splitText', arguments, result);
            return result;
        },
        get wholeText() {
            if (!Text.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).wholeText, "");
        }
    }
    lwVm.rename(Text.prototype, "Text");
    lwVm.safeDescriptor_addConstructor(Text);
    lwVm.safe_Objattribute(Text, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
    Object.setPrototypeOf(Text, CharacterData);

})();