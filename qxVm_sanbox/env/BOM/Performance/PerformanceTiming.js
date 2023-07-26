PerformanceTiming = function PerformanceTiming(createObj_key, timeOrigin) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {base_time: timeOrigin})
}; lwVm.safefunction(PerformanceTiming);

; (function () {
    const $safe_get_attribute = [
        'connectEnd', 'connectStart', 'domComplete', 'domContentLoadedEventEnd', 'domContentLoadedEventStart', 'domInteractive', 'domLoading', 'domainLookupEnd',
        'domainLookupStart', 'fetchStart', 'loadEventEnd', 'loadEventStart', 'navigationStart', 'redirectEnd', 'redirectStart', 'requestStart', 'responseEnd',
        'responseStart', 'secureConnectionStart', 'unloadEventEnd', 'unloadEventStart'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];


    PerformanceTiming.prototype = {
        get connectEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'connectEnd', arguments, result);
            return result;
        },
        get connectStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'connectStart', arguments, result);
            return result;
        },
        get domComplete() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + parseInt(Math.random()*(500 - 10) + 100, 10);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domComplete', arguments, result);
            return result;
        },
        get domContentLoadedEventEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + 106;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domContentLoadedEventEnd', arguments, result);
            return result;
        },
        get domContentLoadedEventStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + 103;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domContentLoadedEventStart', arguments, result);
            return result;
        },
        get domInteractive() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + 102;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domInteractive', arguments, result);
            return result;
        },
        get domLoading() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + 79;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domLoading', arguments, result);
            return result;
        },
        get domainLookupEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domainLookupEnd', arguments, result);
            return result;
        },
        get domainLookupStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'domainLookupStart', arguments, result);
            return result;
        },
        get fetchStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'fetchStart', arguments, result);
            return result;
        },
        get loadEventEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this.domComplete;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'loadEventEnd', arguments, result);
            return result;
        },
        get loadEventStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this.domComplete;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'loadEventStart', arguments, result);
            return result;
        },
        get navigationStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + -8;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'navigationStart', arguments, result);
            return result;
        },
        get redirectEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'redirectEnd', arguments, result);
            return result;
        },
        get redirectStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'redirectStart', arguments, result);
            return result;
        },
        get requestStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'requestStart', arguments, result);
            return result;
        },
        get responseEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time + 20;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'responseEnd', arguments, result);
            return result;
        },
        get responseStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).base_time;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'responseStart', arguments, result);
            return result;
        },
        get secureConnectionStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'secureConnectionStart', arguments, result);
            return result;
        },
        toJSON() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PerformanceTiming', 'toJSON', arguments, result);
            return result;
        },
        get unloadEventEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceTiming', 'unloadEventEnd', arguments, result);
            return result;
        },
        get unloadEventStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        }
    };

    lwVm.rename(PerformanceTiming.prototype, "PerformanceTiming");
    lwVm.safeDescriptor_addConstructor(PerformanceTiming);
    lwVm.safe_Objattribute(PerformanceTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

