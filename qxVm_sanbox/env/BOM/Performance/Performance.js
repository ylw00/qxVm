Performance = function Performance(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Performance);

; (function () {
    MemoryInfo = function MemoryInfo(createObj_key) {
        if (createObj_key !== lwVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
    }; lwVm.safefunction(MemoryInfo);

    ; (function () {
        const $safe_get_attribute = ['jsHeapSizeLimit', 'totalJSHeapSize', 'usedJSHeapSize'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = [];

        MemoryInfo.prototype = {
            get jsHeapSizeLimit() {
                if (!MemoryInfo.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 2330000000;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MemoryInfo', 'jsHeapSizeLimit', arguments, result);
            return result;
            },
            get totalJSHeapSize() {
                if (!MemoryInfo.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 18200000;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MemoryInfo', 'totalJSHeapSize', arguments, result);
            return result;
            },
            get usedJSHeapSize() {
                if (!MemoryInfo.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 15200000;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MemoryInfo', 'usedJSHeapSize', arguments, result);
            return result;
            },
        }
        lwVm.rename(MemoryInfo.prototype, "MemoryInfo");
        lwVm.safeDescriptor_addConstructor(MemoryInfo);
        lwVm.safe_Objattribute(MemoryInfo, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();


    const $safe_get_attribute = ['eventCounts', 'memory', 'navigation', 'onresourcetimingbufferfull', 'timeOrigin', 'timing'];
    const $safe_set_attribute = ['onresourcetimingbufferfull'];
    const $safe_func_attribute = ['clearMarks', 'clearMeasures', 'clearResourceTimings', 'getEntries', 'getEntriesByName', 'getEntriesByType', 'mark', 'measure', 'now', 'setResourceTimingBufferSize', 'toJSON'];

    // Performance.prototype.eventCounts
    Performance.prototype = {
        clearMarks() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'clearMarks', arguments, result);
            return result;
        },
        clearMeasures() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'clearMeasures', arguments, result);
            return result;
        },
        clearResourceTimings() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'clearResourceTimings', arguments, result);
            return result;
        },
        get eventCounts() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).eventCounts, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Performance', 'eventCounts', arguments, result);
            return result;
        },
        getEntries() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'getEntries', arguments, result);
            return result;
        },
        getEntriesByName() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'getEntriesByName', arguments, result);
            return result;
        },
        getEntriesByType(type) {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (type === undefined)
                throw new TypeError(`Failed to execute 'getEntriesByType' on 'Performance': 1 argument required, but only 0 present.`)
            console.log(type)

            let ele;
            switch (type){
                default:
                    ele = [];
                    break
            };
            return ele

        },
        mark() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'mark', arguments, result);
            return result;
        },
        measure() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'measure', arguments, result);
            return result;
        },
        get memory() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).memory;
            if (!ele) {
                ele = new MemoryInfo(lwVm.memory.$createObj_key);
                lwVm.memory.private_data.get(this).memory = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'if ', arguments, result);
            return result;
        },
        get navigation() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).navigation;
            if (!ele) {
                ele = new PerformanceNavigation(lwVm.memory.$createObj_key);
                lwVm.memory.private_data.get(this).navigation = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'if ', arguments, result);
            return result;
        },
        now() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'now', arguments, result);
            return result;
        },
        get onresourcetimingbufferfull() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onresourcetimingbufferfull, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Performance', 'onresourcetimingbufferfull', arguments, result);
            return result;
        },
        set onresourcetimingbufferfull(value) {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Performance', 'onresourcetimingbufferfull', arguments);
            lwVm.memory.private_data.get(this).onresourcetimingbufferfull = value;
        },
        setResourceTimingBufferSize() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'setResourceTimingBufferSize', arguments, result);
            return result;
        },
        get timeOrigin() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).timeOrigin;
            if (!ele){
                ele = (new Date().getTime()) + parseFloat((Math.random()).toFixed(1))
                lwVm.memory.private_data.get(this).timeOrigin = ele
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Performance', 'timeOrigin', arguments, result);
            return result;
        },
        get timing() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).timing;
            if (!ele){
                ele = new PerformanceTiming(lwVm.memory.$createObj_key, parseInt(this.timeOrigin));
                lwVm.memory.private_data.get(this).timing = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Performance', 'timing', arguments, result);
            return result;
        },
        toJSON() {
            if (!Performance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Performance', 'toJSON', arguments, result);
            return result;
        }
    };

    lwVm.rename(Performance.prototype, "Performance");
    lwVm.safeDescriptor_addConstructor(Performance);
    lwVm.safe_Objattribute(Performance, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Performance.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Performance, EventTarget);
})();
performance = new Performance(lwVm.memory.$createObj_key);

