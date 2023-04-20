HTMLInputElement = function HTMLInputElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLInputElement);

; (function () {
    const $safe_get_attribute = [
        'accept', 'align', 'alt', 'autocomplete', 'checked', 'defaultChecked', 'defaultValue', 'dirName', 'disabled', 'files', 'form', 'formAction', 
        'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'height', 'incremental', 'indeterminate', 'labels', 'list', 'max', 'maxLength', 
        'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 
        'size', 'src', 'step', 'type', 'useMap', 'validationMessage', 'validity', 'value', 'valueAsDate', 'valueAsNumber', 'webkitEntries', 
        'webkitdirectory', 'width', 'willValidate'
    ];
    const $safe_set_attribute = [
        'accept', 'align', 'alt', 'autocomplete', 'checked', 'defaultChecked', 'defaultValue', 'dirName', 'disabled', 'files', 'form', 'formAction', 
        'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'height', 'incremental', 'indeterminate', 'max', 'maxLength', 'min', 'minLength', 
        'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'src', 
        'step', 'type', 'useMap', 'value', 'valueAsDate', 'valueAsNumber', 'webkitdirectory', 'width'
    ];
    const $safe_func_attribute = [
        'checkValidity', 'reportValidity', 'select', 'setCustomValidity', 'setRangeText', 'setSelectionRange', 'stepDown', 'stepUp'
    ];

    HTMLInputElement.prototype = {

        get accept(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).accept, "");
        },
        set accept(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).accept = value + "";
        },
        get align(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).align, "");
        },
        set align(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).align = value + "";
        },
        get alt(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).alt, "");
        },
        set alt(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).alt = value + "";
        },
        get autocomplete(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).autocomplete, "");
        },
        set autocomplete(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).autocomplete = value + "";
        },
        checkValidity(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get checked(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).checked, "");
        },
        set checked(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).checked = value + "";
        },
        get defaultChecked(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultChecked, "");
        },
        set defaultChecked(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).defaultChecked = value + "";
        },
        get defaultValue(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultValue, "");
        },
        set defaultValue(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).defaultValue = value + "";
        },
        get dirName(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).dirName, "");
        },
        set dirName(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).dirName = value + "";
        },
        get disabled(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).disabled, "");
        },
        set disabled(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).disabled = value + "";
        },
        get files(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).files, "");
        },
        set files(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).files = value + "";
        },
        get form(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).form, "");
        },
        set form(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).form = value + "";
        },
        get formAction(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formAction, "");
        },
        set formAction(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formAction = value + "";
        },
        get formEnctype(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formEnctype, "");
        },
        set formEnctype(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formEnctype = value + "";
        },
        get formMethod(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formMethod, "");
        },
        set formMethod(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formMethod = value + "";
        },
        get formNoValidate(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formNoValidate, "");
        },
        set formNoValidate(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formNoValidate = value + "";
        },
        get formTarget(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).formTarget, "");
        },
        set formTarget(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).formTarget = value + "";
        },
        get height(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, "");
        },
        set height(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).height = value + "";
        },
        get incremental(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).incremental, "");
        },
        set incremental(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).incremental = value + "";
        },
        get indeterminate(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).indeterminate, "");
        },
        set indeterminate(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).indeterminate = value + "";
        },
        get labels(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).labels, "");
        },
        get list(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).list, "");
        },
        get max(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).max, "");
        },
        set max(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).max = value + "";
        },
        get maxLength(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).maxLength, "");
        },
        set maxLength(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).maxLength = value + "";
        },
        get min(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).min, "");
        },
        set min(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).min = value + "";
        },
        get minLength(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).minLength, "");
        },
        set minLength(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).minLength = value + "";
        },
        get multiple(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).multiple, "");
        },
        set multiple(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).multiple = value + "";
        },
        get name(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        get pattern(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pattern, "");
        },
        set pattern(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).pattern = value + "";
        },
        get placeholder(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).placeholder, "");
        },
        set placeholder(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).placeholder = value + "";
        },
        get readOnly(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).readOnly, "");
        },
        set readOnly(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).readOnly = value + "";
        },
        reportValidity(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get required(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).required, "");
        },
        set required(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).required = value + "";
        },
        select(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get selectionDirection(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).selectionDirection, "");
        },
        set selectionDirection(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).selectionDirection = value + "";
        },
        get selectionEnd(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).selectionEnd, "");
        },
        set selectionEnd(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).selectionEnd = value + "";
        },
        get selectionStart(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).selectionStart, "");
        },
        set selectionStart(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).selectionStart = value + "";
        },
        setCustomValidity(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setRangeText(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setSelectionRange(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get size(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).size, "");
        },
        set size(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).size = value + "";
        },
        get src(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).src, "");
        },
        set src(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).src = value + "";
        },
        get step(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).step, "");
        },
        set step(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).step = value + "";
        },
        stepDown(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stepUp(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "");
        },
        set type(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        },
        get useMap(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).useMap, "");
        },
        set useMap(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).useMap = value + "";
        },
        get validationMessage(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).validationMessage, "");
        },
        get validity(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).validity, "");
        },
        get value(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).value, "");
        },
        set value(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).value = value + "";
        },
        get valueAsDate(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).valueAsDate, "");
        },
        set valueAsDate(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).valueAsDate = value + "";
        },
        get valueAsNumber(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).valueAsNumber, "");
        },
        set valueAsNumber(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).valueAsNumber = value + "";
        },
        get webkitEntries(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitEntries, "");
        },
        get webkitdirectory(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).webkitdirectory, "");
        },
        set webkitdirectory(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).webkitdirectory = value + "";
        },
        get width(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, "");
        },
        set width(value){
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).width = value + "";
        },
        get willValidate(){
            debugger;
            if (!HTMLInputElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).willValidate, "");
        }
    }

    qxVm.rename(HTMLInputElement.prototype, "HTMLInputElement");
    qxVm.safeDescriptor_addConstructor(HTMLInputElement);
    qxVm.safe_Objattribute(HTMLInputElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLInputElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLInputElement, HTMLElement);
})();
qxVm.memory.htmlElements["input"] = function () {
    return new HTMLInputElement(qxVm.memory.$createObj_key);
}
