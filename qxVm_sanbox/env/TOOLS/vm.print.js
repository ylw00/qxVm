// ========================================================================================================================

//框架日志功能
lwVm.print.log = function (logType, target, property, value) {

    if (lwVm.config.logOpen) {
        //开始保存日志
        if (lwVm.memory.print.length === 111) {
        }
        lwVm.memory.logs.push({ "类型": logType, "调用者": target, "属性": property, "值": value });
    }
};


lwVm.print.getall = function () {
    console.table(lwVm.memory.logs, ["类型", "调用者", "属性", "值"]);
};


lwVm.logAdd = function (logType, target, property, argArray, result) {
    let log_str;

    if (logType === 'ProxyGet') {
        
        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`

    } else if (logType === 'ProxySet' || logType === 'ProxyHas' || logType === 'ProxyDeleteProperty' || logType === 'ProxyGetOwnPropertyDescriptor' || logType === 'ProxyDefineProperty') {

        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`

    } else if (logType === 'ProxyDefineProperty') {

        log_str = `[${logType}] -> ${target}.${property} -> [${argArray}] -> [${result}]`

    } else if (logType === 'ProxyGetPrototypeOf' || logType === 'ProxyIsExtensible' || logType === 'ProxyOwnKeys') {
        try{
            log_str = `[${logType}] -> [${target}] -> [${result}]`
        }catch(e){
            log_str = `[${logType}] -> [${target}] -> [error]`
        }
    } else if (logType === 'ProxySetPrototypeOf') {

        log_str = `[${logType}] -> [${target}] -> [${result}]`

    } else if (logType === 'ProxyPreventExtensions') {

        log_str = `[${logType}] -> [${target}] -> [${result}]`

    } else if (logType === 'Apply' || logType === 'ProxyApply' || logType === 'ProxyConstruct') {

        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${argArray} ] -> [ ${result} ]`

    } else if (logType === 'NodeJs') {

        log_str = `[${logType}] -> [${Array.prototype.slice.call(argArray).join(', ')}]`

    } else if (logType === 'Func') {
        let _args = Array.prototype.slice.call(argArray).join(', ');
        _args = lwVm.compressJsCode(_args + "")
        log_str = `[${logType}] -> [ ${target}.${property} ] -> (${_args}) -> [ ${result} ]`

    } else if (logType === 'Get') {
        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`
    } else if (logType === 'Set') {
        log_str = `[${logType}] -> [ ${target}.${property} ] -> (${Array.prototype.slice.call(argArray).join(', ')})`
    } else if (logType == 'lwVmLog') {
        log_str = `[${logType}] -> [${target}]`
    }

    if (lwVm.memory.isIframe) log_str = '[iframe]' + log_str;
    lwVm.memory.logs.push(log_str);
    lwVm.console_log(log_str);
}



/**
 * 打印环境日志
 * @param {boolean} filter 是否过滤重复日志(默认不过滤)
 * @return String
 */
 lwVm.printLog = function (filter = false, key = '') {
    let logs = filter ? new Set(lwVm.memory.logs) : lwVm.memory.logs;

    let _logs = "";
    if (key) {
        key = `[${key}`;
        let key_length = key.length;

        for (let index = 0; index < logs.length; index++) {
            let l = logs[index]
            if (l.slice(0, key_length) === key) {
                _logs += `${l}\n`
            }
        }
        return _logs
    }

    for (let index = 0; index < logs.length; index++) {
        let l = logs[index]
        _logs += `${l}\n`
    }

    lwVm.memory.logs = [];  // 打印之后清空内存
    return _logs;
};