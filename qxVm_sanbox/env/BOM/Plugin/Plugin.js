Plugin = function Plugin() {
    throw new TypeError("Illegal constructor");
}; lwVm.safefunction(Plugin);

; (function () {
    const $safe_get_attribute = ['description', 'filename', 'length', 'name'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem']


    Plugin.prototype = {
        get description() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Plugin', 'description', arguments, result);
            return result;
        },
        get filename() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Plugin', 'filename', arguments, result);
            return result;
        },
        item(index) {
            // debugger;
            let result = this[index];
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Plugin', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Plugin', 'length', arguments, result);
            return result;
        },
        get name() {
            if (!Plugin.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Plugin', 'name', arguments, result);
            return result;
        },
        namedItem(key) {
            let result = this[key];
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Plugin', 'namedItem', arguments, result);
            return result;
        },
    }; 
    lwVm.set_iterator(Plugin);
    lwVm.rename(Plugin.prototype, 'Plugin');
    lwVm.safeDescriptor_addConstructor(Plugin);
    lwVm.safe_Objattribute(Plugin, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    lwVm.memory.plugin.new = function (plugin_data) {
        let plugin = {};

        if (plugin_data !== undefined) {
            plugin.description = plugin_data.description;
            plugin.filename = plugin_data.filename;
            plugin.name = plugin_data.name;

            for (let mtindex = 0; mtindex < plugin_data.MimeTypes.length; mtindex++) {
                let mimeType_data = plugin_data.MimeTypes[mtindex];
                let mimeType = lwVm.memory.mimeType.new(mimeType_data, plugin);

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
            let result = plugin;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Plugin', 'namedItem', arguments, result);
            return result;
    }

})()

// debugger;