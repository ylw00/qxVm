/*
 一些保护性功能方法会放到这里
 */

//  保护伪造的函数(Function.toString()) 让其更难被识破
lwVm.safefunction = (function() {
    "use strict";
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this === 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true,
                enumerable: false,
                writable: true
            }
        );
        d.value = value;
        return d;
    };
    function set_native(func, key, value) {
        Object.defineProperty(func, key, buffer_memory(value))
    };

    Reflect.deleteProperty(Function.prototype, 'toString'); //删除原型链上的toString
    set_native(Function.prototype, "toString", myToString); //自己定义个getter方法
    set_native(Function, myFunction_toString_symbol, "function Function() { [native code] }")
    set_native(Function, "toString", myToString)
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }"); //套个娃 保护一下我们定义的toString 否则就暴露了


    /**
     * 保护伪造func (Function.toString())  让其更难被识破
     * @param { Object } func 
     * @param { String } func_name - 可显示的名称
     * @param { Boolean } defined_func_name - 自定义可显示的名称
     * @returns { undefined } 
     */
    return function (func, func_name, defined_func_name) {
        if (func_name !== undefined && defined_func_name === true) {
            set_native(func, myFunction_toString_symbol, `function ${func_name || ''}() { [native code] }`);
        } else {
            set_native(func, myFunction_toString_symbol, `function ${func.name || func_name || ''}() { [native code] }`);
        }
    };
})();


//  保护伪造的对象(Object.toString())  让其更难被识破
lwVm.rename = (function () {
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true, enumerable: false, writable: false
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 保护伪造Object (Object[Symbol.toStringTag])  让其更难被识破
     * @param { Object } Obj 
     * @param { String } Objname - 可显示的名称
     * @returns { undefined } 
     */
    return function (Obj, Objname) {
        Object.defineProperties(Obj, {
            [Symbol.toStringTag]: buffer_memory(Objname)
        })
    };
})();


// 保护 Object.prototype属性的对象描述符, 并给Object.prototype添加constructor属性
lwVm.safeDescriptor_addConstructor = (function () {
    function buffer_memory_proto(value) {
        let d = buffer_memory_proto.d || (
            buffer_memory_proto.d = {
                configurable: false, enumerable: false, writable: false
            }
        );
        d.value = value;
        return d;
    };
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true, enumerable: false, writable: true
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 保护 Object.prototype属性的对象描述符, 并给Object.prototype添加constructor属性
     * @param { Object } Obj 
     * @returns { undefined } 
     */
    return function (Obj) {
        Object.defineProperty(Obj, 'prototype', buffer_memory_proto(Obj.prototype))
        Object.defineProperty(Obj.prototype, 'constructor', buffer_memory(Obj));
    };

})();



/**
 * 保护对象get, set, func 属性的toString 操作  
 * @param { Object } Obj 
 * @param { Array } safe_get_attribute - 需要保护的 get 属性
 * @param { Array } safe_set_attribute - 需要保护的 set 属性
 * @param { Array } safe_func_attribute - 需要保护的 func 属性
 * @param { Boolean } oneself - 给自身添加, 而不是 prototype
 * @returns { undefined } 
 */
lwVm.safe_Objattribute = function (Obj, safe_get_attribute, safe_set_attribute, safe_func_attribute, oneself) {
    /*
    Obj：                需要保护的对象, 默认是保护对象的原型对象
    safe_get_attribute： 需要保护的 get 属性
    safe_set_attribute： 需要保护的 set 属性
    safe_func_attribute：需要保护的 func 属性
    oneself：            如果指定了这个参数 为 true，则说明是保护的自身，而不是原型链
    */
    const obj = oneself ? Obj : Obj.prototype;

    // 保护get属性
    for (let key of safe_get_attribute) {
        lwVm.safefunction(Object.getOwnPropertyDescriptor(obj, key)['get']);
    }
    // 保护set属性
    for (let key of safe_set_attribute) {
        lwVm.safefunction(Object.getOwnPropertyDescriptor(obj, key)['set']);
    }
    // 保护func属性
    for (let key of safe_func_attribute) {
        lwVm.safefunction(obj[key]);
    }
}


/**
 * 设置 iterator 属性
 * @param { Object } Obj 
 * @param { Boolean } oneself - 是否给自身添加, 而不是 prototype
 * @returns { undefined } 
 */
lwVm.set_iterator = function (Obj, oneself) {
    const obj = oneself ? Obj : Obj.prototype;

    Object.defineProperties(obj, {
        [Symbol.iterator]: {
            value: Array.prototype[Symbol.iterator],
            configurable: true,
            enumerable: false,
            writable: true
        }
    })
};

/* 
大写字母的属性, 都是原型以及本身, 都会有一份
给原型, 以及本身设置属性, 并设置对象描述符
*/
lwVm.add_capitalLetter_attribute = (function () {
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: false, enumerable: true, writable: false
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 同时给原型, 以及自身设置属性, 并设置对象描述符
     * @param { Object } Obj 
     * @param { Array } attributes
     * @returns { undefined } 
     */
    return function (Obj, attributes) {
        for (let key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                const value_obj = buffer_memory(attributes[key]);
                Object.defineProperty(Obj, key, value_obj);
                Object.defineProperty(Obj.prototype, key, value_obj);
            }
        };
    };
})();



