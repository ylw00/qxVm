/*
指定需要代理的对象
*/

function vm_proxyObj(){
    let code = "";
    let proxyObj = [
        'window', 
        'top',
        'parent',
        'self',
    ];


    for (let obj of proxyObj){
        code += `${obj} = lwVm.proxy(${obj}, "${obj}");\r\n`
    }

    return code;
}

module.exports = {
    vm_proxyObj
}
