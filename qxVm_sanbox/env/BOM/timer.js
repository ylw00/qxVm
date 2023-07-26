; (function () {
    let timer = {
        setTimeout(callback, ...arg) {
            const timer_obj = lwVm_module.node_func.setTimeout(callback, ...arg);
            const timer_id = parseInt(Object.keys(lwVm.memory.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            lwVm.memory.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        setInterval(callback, ...arg) {
            const timer_obj = lwVm_module.node_func.setInterval(callback, ...arg);
            const timer_id = parseInt(Object.keys(lwVm.memory.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            lwVm.memory.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        clearTimeout(timer_id) {
            const timer_obj = lwVm.memory.timer_map[timer_id];
            return lwVm_module.node_func.clearTimeout(timer_obj)
        },
        clearInterval(timer_id) {
            const timer_obj = lwVm.memory.timer_map[timer_id];
            return lwVm_module.node_func.clearInterval(timer_obj)
        }
    };
    for (const key in timer) {
        if (Object.hasOwnProperty.call(timer, key)) {
            const timer_obj = timer[key];
            
            lwVm.safefunction(timer_obj);

            Object.defineProperty(window, timer_obj.name, {
                value: timer_obj,
                configurable: true,
                enumerable: true,
                writable: true
            })
        }
    };
    
})();