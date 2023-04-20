PerformanceTiming = function PerformanceTiming(createObj_key, timeOrigin) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {base_time: timeOrigin})
}; qxVm.safefunction(PerformanceTiming);

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
            return qxVm.memory.private_data.get(this).base_time;
        },
        get connectStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time;
        },
        get domComplete() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + parseInt(Math.random()*(500 - 10) + 100, 10);
        },
        get domContentLoadedEventEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + 106;
        },
        get domContentLoadedEventStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + 103;
        },
        get domInteractive() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + 102;
        },
        get domLoading() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + 79;
        },
        get domainLookupEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time;
        },
        get domainLookupStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time;
        },
        get fetchStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time;
        },
        get loadEventEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this.domComplete;
        },
        get loadEventStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return this.domComplete;
        },
        get navigationStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + -8;
        },
        get redirectEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get redirectStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get requestStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time;
        },
        get responseEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time + 20;
        },
        get responseStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).base_time;
        },
        get secureConnectionStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        toJSON() {
            debugger;
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get unloadEventEnd() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get unloadEventStart() {
            if (!PerformanceTiming.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        }
    };

    qxVm.rename(PerformanceTiming.prototype, "PerformanceTiming");
    qxVm.safeDescriptor_addConstructor(PerformanceTiming);
    qxVm.safe_Objattribute(PerformanceTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

