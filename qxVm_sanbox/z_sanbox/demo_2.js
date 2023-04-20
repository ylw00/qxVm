aa = ''


win_attribute_array = Object.keys(window);
for (const key in win_attribute_array) {
    const attribute_name = win_attribute_array[key];

    let attribute_desc = Object.getOwnPropertyDescriptor(window, attribute_name);

    let desc_keys = Object.keys(attribute_desc)

    let desc_info;

    if (desc_keys.indexOf('set') !== -1 && desc_keys.indexOf('set') !== -1) {
        let attribute_value = window[attribute_name]
        if (String(attribute_value).indexOf('[object ') !== -1) {
            attribute_value = String(attribute_value).replace('[object ', '').replace(']', '');
        };
        attribute_value = typeof attribute_value === 'string' ? `"${attribute_value}"` : attribute_value;

        let attribute_set = ` ${attribute_name}(value){ debugger; }`
        let safefunction_set = `qxVm.safefunction(Object.getOwnPropertyDescriptor(window, '${attribute_name}')['set'], 'set ${attribute_name}', true);`
        if (attribute_desc.set === undefined) {
            attribute_set = ': undefined'
            safefunction_set = ''
        }

        desc_info = `Object.defineProperty(window, '${attribute_name}', {
                get ${attribute_name}(){ return ${attribute_value}; },
                set ${attribute_set},
                configurable: ${attribute_desc.configurable},
                enumerable: ${attribute_desc.enumerable},
            });
            qxVm.safefunction(Object.getOwnPropertyDescriptor(window, '${attribute_name}')['get'], 'get ${attribute_name}', true);
            ${safefunction_set}
            `
    } else if (desc_keys.indexOf('value') !== -1) {
        let attribute_value = attribute_desc.value;
        if (String(attribute_value).indexOf('function ') !== -1 && String(attribute_value).indexOf('() { [native code] }') !== -1) {
            attribute_value = String(attribute_desc.value).replace('function ', '').replace('() { [native code] }', '') || attribute_name;
        } else if (String(attribute_value).indexOf('[object ') !== -1) {
            attribute_value = attribute_name;
        }

        desc_info = `Object.defineProperty(window, '${attribute_name}', {  // ${attribute_name}
                value: ${attribute_value}, configurable: ${attribute_desc.configurable}, enumerable: ${attribute_desc.enumerable}, writable: ${attribute_desc.writable}
            });
            qxVm.safefunction(Object.getOwnPropertyDescriptor(window, '${attribute_name}')['value'])
            `
    }
    console.log(attribute_name, attribute_desc, String(attribute_desc))
    console.log(desc_info)

    aa += desc_info + "\r\n";
}



value_attribute_map_string = {
    alert: [alert, true, true, true],
    atob: [atob, true, true, true],
    blur: [blur, true, true, true],
    btoa: [btoa, true, true, true],
    cancelAnimationFrame: [cancelAnimationFrame, true, true, true],
    cancelIdleCallback: [cancelIdleCallback, true, true, true],
    captureEvents: [captureEvents, true, true, true],
    clearInterval: [clearInterval, true, true, true],
    clearTimeout: [clearTimeout, true, true, true],
    close: [close, true, true, true],
    confirm: [confirm, true, true, true],
    createImageBitmap: [createImageBitmap, true, true, true],
    fetch: [fetch, true, true, true],
    find: [find, true, true, true],
    focus: [focus, true, true, true],
    getComputedStyle: [getComputedStyle, true, true, true],
    getSelection: [getSelection, true, true, true],
    matchMedia: [matchMedia, true, true, true],
    moveBy: [moveBy, true, true, true],
    moveTo: [moveTo, true, true, true],
    open: [open, true, true, true],
    postMessage: [postMessage, true, true, true],
    print: [print, true, true, true],
    prompt: [prompt, true, true, true],
    queueMicrotask: [queueMicrotask, true, true, true],
    releaseEvents: [releaseEvents, true, true, true],
    reportError: [reportError, true, true, true],
    requestAnimationFrame: [requestAnimationFrame, true, true, true],
    requestIdleCallback: [requestIdleCallback, true, true, true],
    resizeBy: [resizeBy, true, true, true],
    resizeTo: [resizeTo, true, true, true],
    scroll: [scroll, true, true, true],
    scrollBy: [scrollBy, true, true, true],
    scrollTo: [scrollTo, true, true, true],
    setInterval: [setInterval, true, true, true],
    setTimeout: [setTimeout, true, true, true],
    stop: [stop, true, true, true],
    webkitCancelAnimationFrame: [webkitCancelAnimationFrame, true, true, true],
    webkitRequestAnimationFrame: [webkitRequestAnimationFrame, true, true, true],
    chrome: [chrome, false, true, true],
    showDirectoryPicker: [showDirectoryPicker, true, true, true],
    showOpenFilePicker: [showOpenFilePicker, true, true, true],
    showSaveFilePicker: [showSaveFilePicker, true, true, true],
    openDatabase: [openDatabase, true, true, true],
    webkitRequestFileSystem: [webkitRequestFileSystem, true, true, true],
    webkitResolveLocalFileSystemURL: [webkitResolveLocalFileSystemURL, true, true, true],
    cr: [cr, true, true, true],
    JSCompiler_renameProperty: [JSCompiler_renameProperty, true, true, true],
    ShadyCSS: [ShadyCSS, true, true, true],
    my_typeof: [my_typeof, false, true, true],
}