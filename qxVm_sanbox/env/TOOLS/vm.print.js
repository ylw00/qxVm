// ========================================================================================================================

//框架日志功能
qxVm.print.log = function (logType, target, property, value) {

    if (qxVm.config.print_log) {
        //开始保存日志
        if (qxVm.memory.print.length === 111) {
            debugger;
        }
        qxVm.memory.logs.push({ "类型": logType, "调用者": target, "属性": property, "值": value });
    }
};
qxVm.print.getall = function () {
    console.table(qxVm.memory.logs, ["类型", "调用者", "属性", "值"]);
};
