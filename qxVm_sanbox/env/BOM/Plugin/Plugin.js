Plugin = function Plugin() {
    throw new TypeError("Illegal constructor");
}; qxVm.safefunction(Plugin);

; (function () {
    const $safe_get_attribute = ['description', 'filename', 'length', 'name'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem']


    Plugin.prototype = {
        get description() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get filename() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        item(index) {
            // debugger;
            return this[index];
        },
        get length() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get name() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        namedItem(key) {
            debugger;
            return this[key];
        },
    }; 
    qxVm.set_iterator(Plugin);
    qxVm.rename(Plugin.prototype, 'Plugin');
    qxVm.safeDescriptor_addConstructor(Plugin);
    qxVm.safe_Objattribute(Plugin, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    qxVm.memory.plugin.new = function (plugin_data) {
        let plugin = {};

        if (plugin_data !== undefined) {
            plugin.description = plugin_data.description;
            plugin.filename = plugin_data.filename;
            plugin.name = plugin_data.name;

            for (let mtindex = 0; mtindex < plugin_data.MimeTypes.length; mtindex++) {
                let mimeType_data = plugin_data.MimeTypes[mtindex];
                let mimeType = qxVm.memory.mimeType.new(mimeType_data, plugin);

                Object.defineProperty(plugin, mtindex, {
                    value: mimeType, configurable: true, enumerable: true, writable: false
                })
                Object.defineProperty(plugin, mimeType.type, {
                    value: mimeType, configurable: true, enumerable: false, writable: false
                });
            };
            plugin.length = plugin_data.MimeTypes.length;
        }
        Object.setPrototypeOf(plugin, Plugin.prototype)
        return plugin;
    }

})()

// debugger;