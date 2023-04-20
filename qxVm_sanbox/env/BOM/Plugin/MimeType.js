MimeType = function MimeType() {
    throw new TypeError("Illegal constructor");
}; qxVm.safefunction(MimeType);

; (function () {

    const $safe_get_attribute = ['description', 'enabledPlugin', 'suffixes', 'type'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = []

    MimeType.prototype = {
        get description() {
            if (!MimeType.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

        },
        get enabledPlugin() {
            if (!MimeType.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

        },
        get suffixes() {
            if (!MimeType.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

        },
        get type() {
            if (!MimeType.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },

    }; qxVm.rename(MimeType.prototype, 'MimeType');
    qxVm.safeDescriptor_addConstructor(MimeType);
    qxVm.safe_Objattribute(MimeType, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    qxVm.memory.mimeType.new = function (mimeType_data, initPlugin) {
        let mimetype = {};
        if (mimeType_data !== undefined) {
            mimetype.description = mimeType_data.description;
            mimetype.suffixes = mimeType_data.suffixes;
            mimetype.type = mimeType_data.type;
            mimetype.enabledPlugin = initPlugin;
        };

        Object.setPrototypeOf(mimetype, MimeType.prototype)
        return mimetype
    }

})();

// debugger;