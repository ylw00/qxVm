/*
指定需要代理的对象
*/

function vm_proxyObj(){
    let code = "";
    let proxyObj = [
        'Node',
        'window', 
        'top',
        'parent',
        'self',
        'Window', 
        'location',
        'Location', 
        'navigator', 
        'Navigator', 
        'document', 
        'Document', 
        'screen', 
        'Screen', 
        'history', 
        'History', 
        'Storage',
        'localStorage', 
        'sessionStorage',
        'MimeType',
        'MimeTypeArray',
        'Plugin',
        'PluginArray',
        'Element',
        'HTMLElement',
        'HTMLDocument',
        'CharacterData',
        'Attr',
        'HTMLBodyElement',
        'HTMLDivElement',
    ];


    for (let obj of proxyObj){
        code += `${obj} = qxVm.proxy(${obj}, "${obj}");\r\n`
    }

    return code;
}

module.exports = {
    vm_proxyObj
}
