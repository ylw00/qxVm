Scheduler = function Scheduler(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Scheduler);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['postTask'];

    Scheduler.prototype = {
        postTask() {
            if (!Scheduler.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Scheduler', 'postTask', arguments, result);
            return result;
        },
    }
    lwVm.rename(Scheduler.prototype, "Scheduler");
    lwVm.safeDescriptor_addConstructor(Scheduler);
    lwVm.safe_Objattribute(Scheduler, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
scheduler = new Scheduler(lwVm.memory.$createObj_key)

