MimeTypeArray = function MimeTypeArray() {
    throw new TypeError("Illegal constructor");
}; qxVm.safefunction(MimeTypeArray);

; (function () {

    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem'];

    MimeTypeArray.prototype = {
        item(index) {
            debugger;
            return this[index];
        },
        get length() {
            debugger;
            if (!MimeTypeArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.mimeTypeArray.length;
        },
        namedItem(key) {
            debugger;
            return this[key];
        }

    }; qxVm.rename(MimeTypeArray.prototype, 'MimeTypeArray');
    qxVm.safeDescriptor_addConstructor(MimeTypeArray);
    qxVm.safe_Objattribute(MimeTypeArray, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    qxVm.memory.mimeTypeArray.instantiate = {};
    qxVm.memory.mimeTypeArray.length = 0;

    ; (function add_default_mimeTypeArray() {
        for (let plugin_index = 0; plugin_index < qxVm.memory.pluginArray.temp.length; plugin_index++) {
            let plugin_ = qxVm.memory.pluginArray.instantiate.item(plugin_index);
            for (let mindex = 0; mindex < plugin_.length; mindex++) {
                let mimeType_ = plugin_.item(mindex)
                if (qxVm.memory.mimeTypeArray.instantiate[mimeType_.type] === undefined) {
                    
                    Object.defineProperty(qxVm.memory.mimeTypeArray.instantiate, qxVm.memory.mimeTypeArray.length, {
                        value: mimeType_, configurable: true, enumerable: true, writable: false
                    });
                    Object.defineProperty(qxVm.memory.mimeTypeArray.instantiate, mimeType_.type, {
                        value: mimeType_, configurable: true, enumerable: false, writable: false
                    });

                    qxVm.memory.mimeTypeArray.length += 1;
                }
            }
        }
    })();

    Object.setPrototypeOf(qxVm.memory.mimeTypeArray.instantiate, MimeTypeArray.prototype);

})();

// debugger;