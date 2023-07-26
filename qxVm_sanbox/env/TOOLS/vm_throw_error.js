Error.prepareStackTrace = function (error, callSites) {
    // 先处理 非法调用
    if (error.name === 'TypeError' && error.message === 'Illegal invocation') {
        let stack = callSites.map(callSite => {
            let one_stack;
            let func_name = callSite.getFunctionName();
            
            // 过滤掉node相关的堆栈, 以及 调试的文件名堆栈
            if (func_name && (func_name.includes('Module') || func_name.includes('executeUserEntryPoint'))) {
                return
            }

            if (!func_name){
                one_stack = `    at <anonymous>:${callSite.getLineNumber()}:${callSite.getColumnNumber()}`;
            }else{
                one_stack = `    at ${func_name} (<anonymous>:${callSite.getLineNumber()}:${callSite.getColumnNumber()})`;
            }
            return one_stack;
        })
        stack = stack.filter((item) => {
            return item
        });
        return `${error.toString()}\n${stack.join('\n')}`
    }
    // 默认格式
    return error.toString() + '\n' + callSites.map(callSite => {
        return '    at ' + callSite.getFunctionName() + ' ('
            + callSite.getFileName() + ':'
            + callSite.getLineNumber() + ':'
            + callSite.getColumnNumber() + ')'
    }).join('\n')   
};


lwVm.Illegal_error = function Illegal_error(message, stack) {
    let e = new TypeError()
    if (message) e.message = message
    else e.message = "Illegal constructor"
    if (stack) e.stack = stack
    else e.stack = `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`
    throw e
};

