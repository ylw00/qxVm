document = new HTMLDocument(qxVm.memory.$createObj_key);
; (function () {
    let $attribute_map = {
        'location': location
    }

    for (const key in $attribute_map) {
        if (Object.hasOwnProperty.call($attribute_map, key)) {
            const value = $attribute_map[key];
            Object.defineProperty(document, key, {
                get() { return value; },
                set(value) { },
                configurable: false,
                enumerable: true
            });
            qxVm.safefunction(Object.getOwnPropertyDescriptor(document, key)['get'], `get ${key}`, true);
            qxVm.safefunction(Object.getOwnPropertyDescriptor(document, key)['set'], `set ${key}`, true);
        }
    };

    Object.setPrototypeOf(document.body, HTMLBodyElement.prototype);
    
    let get_set_attribute_map = {
        document: [document, true, false, false, true]
    }
    
    for (const key in get_set_attribute_map) {
        if (Object.hasOwnProperty.call(get_set_attribute_map, key)) {
            const element = get_set_attribute_map[key];
            const value = element[0],
                get = element[1],
                set = element[2],
                configurable = element[3],
                enumerable = element[4];

            let desc = {
                get() { return value },
                set(value) { },
                configurable: configurable,
                enumerable: enumerable
            }
            if (set === false) {
                desc.set = undefined;
            }
            Object.defineProperty(window, key, desc);

            qxVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['get'], `get ${key}`, true);
            if (set === true) {
                qxVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['set'], `set ${key}`, true);
            }
        }
    };

})();
debugger;
