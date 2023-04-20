Performance = function Performance(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Performance);

; (function () {
    MemoryInfo = function MemoryInfo(createObj_key) {
        if (createObj_key !== qxVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
    }; qxVm.safefunction(MemoryInfo);

    ; (function () {
        const $safe_get_attribute = ['jsHeapSizeLimit', 'totalJSHeapSize', 'usedJSHeapSize'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = [];

        MemoryInfo.prototype = {
            get jsHeapSizeLimit() {
                debugger;
                if (!MemoryInfo.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return 2330000000;
            },
            get totalJSHeapSize() {
                debugger;
                if (!MemoryInfo.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return 18200000;
            },
            get usedJSHeapSize() {
                debugger;
                if (!MemoryInfo.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return 15200000;
            },
        }
        qxVm.rename(MemoryInfo.prototype, "MemoryInfo");
        qxVm.safeDescriptor_addConstructor(MemoryInfo);
        qxVm.safe_Objattribute(MemoryInfo, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();


    const $safe_get_attribute = ['eventCounts', 'memory', 'navigation', 'onresourcetimingbufferfull', 'timeOrigin', 'timing'];
    const $safe_set_attribute = ['onresourcetimingbufferfull'];
    const $safe_func_attribute = ['clearMarks', 'clearMeasures', 'clearResourceTimings', 'getEntries', 'getEntriesByName', 'getEntriesByType', 'mark', 'measure', 'now', 'setResourceTimingBufferSize', 'toJSON'];

    // Performance.prototype.eventCounts
    Performance.prototype = {
        clearMarks() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clearMeasures() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clearResourceTimings() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get eventCounts() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).eventCounts, "");
        },
        getEntries() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getEntriesByName() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getEntriesByType(type) {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (type === undefined)
                throw new TypeError(`Failed to execute 'getEntriesByType' on 'Performance': 1 argument required, but only 0 present.`)
            console.log(type)

            let ele;
            switch (type){
                default:
                    debugger;
                    ele = [];
                    break
            };
            return ele

        },
        mark() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        measure() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get memory() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).memory;
            if (!ele) {
                ele = new MemoryInfo(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.get(this).memory = ele;
            }
            return ele;
        },
        get navigation() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).navigation;
            if (!ele) {
                ele = new PerformanceNavigation(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.get(this).navigation = ele;
            }
            return ele;
        },
        now() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onresourcetimingbufferfull() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresourcetimingbufferfull, null);
        },
        set onresourcetimingbufferfull(value) {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresourcetimingbufferfull = value;
        },
        setResourceTimingBufferSize() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get timeOrigin() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).timeOrigin;
            if (!ele){
                ele = (new Date().getTime()) + parseFloat((Math.random()).toFixed(1))
                qxVm.memory.private_data.get(this).timeOrigin = ele
            }
            return ele;
        },
        get timing() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).timing;
            if (!ele){
                ele = new PerformanceTiming(qxVm.memory.$createObj_key, parseInt(this.timeOrigin));
                qxVm.memory.private_data.get(this).timing = ele;
            }
            return ele;
        },
        toJSON() {
            debugger;
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };

    qxVm.rename(Performance.prototype, "Performance");
    qxVm.safeDescriptor_addConstructor(Performance);
    qxVm.safe_Objattribute(Performance, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Performance.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Performance, EventTarget);
})();
performance = new Performance(qxVm.memory.$createObj_key);

