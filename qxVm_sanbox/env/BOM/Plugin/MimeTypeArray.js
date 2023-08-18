MimeTypeArray = function MimeTypeArray() {
    throw new TypeError("Illegal constructor");
}; lwVm.safefunction(MimeTypeArray);

; (function () {

    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem'];

    MimeTypeArray.prototype = {
        item(index) {
            let result = this[index];
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MimeTypeArray', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!MimeTypeArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.mimeTypeArray.length;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MimeTypeArray', 'length', arguments, result);
            return result;
        },
        namedItem(key) {
            let result = this[key];
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MimeTypeArray', 'namedItem', arguments, result);
            return result;
        }

    }; lwVm.rename(MimeTypeArray.prototype, 'MimeTypeArray');
    lwVm.safeDescriptor_addConstructor(MimeTypeArray);
    lwVm.safe_Objattribute(MimeTypeArray, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    lwVm.memory.mimeTypeArray.instantiate = {};
    lwVm.memory.mimeTypeArray.length = 0;

    ; (function add_default_mimeTypeArray() {
        for (let plugin_index = 0; plugin_index < lwVm.memory.pluginArray.temp.length; plugin_index++) {
            let plugin_ = lwVm.memory.pluginArray.instantiate.item(plugin_index);
            for (let mindex = 0; mindex < plugin_.length; mindex++) {
                let mimeType_ = plugin_.item(mindex)
                if (lwVm.memory.mimeTypeArray.instantiate[mimeType_.type] === undefined) {
                    
                    Object.defineProperty(lwVm.memory.mimeTypeArray.instantiate, lwVm.memory.mimeTypeArray.length, {
                        value: mimeType_, configurable: true, enumerable: true, writable: false
                    });
                    Object.defineProperty(lwVm.memory.mimeTypeArray.instantiate, mimeType_.type, {
                        value: mimeType_, configurable: true, enumerable: false, writable: false
                    });

                    lwVm.memory.mimeTypeArray.length += 1;
                }
            }
        }
    })();

    Object.setPrototypeOf(lwVm.memory.mimeTypeArray.instantiate, MimeTypeArray.prototype);

})();

// debugger;