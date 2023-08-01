// ========================================================================================================================

lwVm.proxy = function (obj, objname, type) {
    function get_attribute_type(value) {
        return Object.prototype.toString.call(value);
    }

    function get_method_handler(watchName) {
        return {
            apply(target, thisArg, argArray) {
                let result = Reflect.apply(target, thisArg, argArray);
                if (thisArg === console && target.name === "log") {
                    return result;
                };
                if (target.name === "toString") {
                    return result;
                };
                if (lwVm.config.logOpen === true) {
                    console.log(`[${watchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`);
                }
                return result

            },
            construct(target, argArray, newTarget) {
                let result = Reflect.construct(target, argArray, newTarget);
                if (lwVm.config.logOpen === true) {
                    console.log(`[${watchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`);
                }
                return result;
            }
        }
    }

    function get_obj_handler(WatchName) {
        return {
            get(target, propKey, receiver) {
                if (lwVm.config.proxy_proto === false && propKey === "__proto__") {
                    console.log(`getting propKey-> ${WatchName}.${propKey}  value-> ${(target[propKey])}`)
                    return target[propKey]
                };

                let result = Reflect.get(target, propKey, receiver);
                let result_type = get_attribute_type(result);

                if (result instanceof Object) {
                    if (Object.getOwnPropertyDescriptor(target, propKey).writable === false) {
                        console.log(`getting propKey-> ${WatchName}.${propKey} it is non-writable`)
                    } else {
                        if (typeof result === "function") {
                            if (lwVm.config.logOpen === true) {

                                console.log(`getting propKey-> ${WatchName}.${propKey}  value-> ${lwVm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
                            }
                            return new Proxy(result, get_method_handler(WatchName))
                        } else {
                            if (lwVm.config.logOpen === true) {
                                console.log(`\ngetting propKey-> ${WatchName}.${propKey}  value-> ${lwVm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
                            }
                        }
                        return new Proxy(result, get_obj_handler(`${WatchName}.${propKey}`))
                    }

                }
                if (typeof (propKey) !== "symbol" && propKey !== "toString") {
                    try {
                        if (lwVm.config.logOpen === true) {
                            console.log(`\ngetting propKey-> ${WatchName}.${propKey.description ?? propKey}  result-> ${result}  typeof-> ${result_type}`);
                        }
                    } catch (e) {
                        console.log(`[${WatchName}] getting error`);
                    }
                }
                return result;
            },
            set(target, propKey, value, receiver) {
                let value_type = get_attribute_type(value);
                if (value instanceof Object) {
                    if (lwVm.config.logOpen === true) {
                        console.log(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${lwVm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
                    }
                } else {
                    if (lwVm.config.logOpen === true) {
                        console.log(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${lwVm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
                    }
                }
                return Reflect.set(target, propKey, value, receiver);
            },
            has(target, propKey) {
                let result = Reflect.has(target, propKey);
                if (lwVm.config.logOpen === true) {
                    console.log(`has propKey-> ${WatchName}.${propKey}, result-> ${result}`);
                }
                return result;
            },
            deleteProperty(target, propKey) {
                let result = Reflect.deleteProperty(target, propKey);
                if (lwVm.config.logOpen === true) {
                    console.log(`delete propKey-> ${WatchName}.${propKey}, result-> ${result}`);
                }
                return result;
            },
            getOwnPropertyDescriptor(target, propKey) {
                let result = Reflect.getOwnPropertyDescriptor(target, propKey);
                if (lwVm.config.logOpen === true) {
                    try {
                        console.log(`getOwnPropertyDescriptor  propKey-> ${WatchName}.${propKey} result-> ${(String(result))}`);
                    } catch (error) { }
                }
                return result;
            },
            defineProperty(target, propKey, attributes) {
                let result = Reflect.defineProperty(target, propKey, attributes);
                try {
                    if (lwVm.config.logOpen === true) {
                        console.log(`defineProperty propKey-> ${WatchName}.${propKey} attributes is [${(attributes)}], result is [${result}]`);
                    }
                } catch (e) {
                    console.log(`[${WatchName}] defineProperty error`)
                }
                return result;
            },
            getPrototypeOf(target) {
                let result = Reflect.getPrototypeOf(target);
                if (lwVm.config.logOpen === true) {
                    console.log(`[${WatchName}] getPrototypeOf result is [${(result)}]`);
                }
                return result;
            },
            setPrototypeOf(target, proto) {
                let result = Reflect.setPrototypeOf(target, proto);
                if (lwVm.config.logOpen === true) {
                    console.log(`[${WatchName}] setPrototypeOf proto is [${(proto)}], result is [${result}]`);
                }
                return result;
            },
            preventExtensions(target) {
                let result = Reflect.preventExtensions(target);
                if (lwVm.config.logOpen === true) {
                    console.log(`[${WatchName}] preventExtensions, result is [${result}]`);
                }
                return result;
            },
            isExtensible(target) {
                let result = Reflect.isExtensible(target);
                if (lwVm.config.logOpen === true) {
                    console.log(`[${WatchName}] isExtensible, result is [${result}]`);
                }
                return result;
            },
            ownKeys(target) {
                let result = Reflect.ownKeys(target);
                if (lwVm.config.logOpen === true) {
                    try {
                        console.log(`[${WatchName}] invoke ownkeys, result is [${String((result))}]`);
                    } catch (error) {

                    }
                }
                return result
            }
        }
    }

    if (lwVm.config.proxy === false) {
        return obj
    }


    // if (type === "method") {
    if (typeof obj === "function") {
        return new Proxy(obj, get_method_handler(objname));
    }
    return new Proxy(obj, get_obj_handler(objname));
};



lwVm.proxy_chained = function (obj_, obj_name) {
    function set_traverse_object(tarrget, obj, recursion_layers) {
        recursion_layers -= 1;
        for (let prop in obj) {
            const value = obj[prop];
            const tg_name = `${tarrget}.${prop.toString()}`;
            const value_type = get_value_type(value);
            if (value && value_type === "object" && recursion_layers >= 1) {
                set_traverse_object(tg_name, value, recursion_layers);
                continue
            }
            if (value && value.toString() !== '[object Object]') {
                if (lwVm.config.logOpen === true) lwVm.console_log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`);
                continue
            }
            if (lwVm.config.logOpen === true) lwVm.console_log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`)
        }
    }

    function new_handel(target_name, obj, number) {
        return new Proxy(obj, my_handler(target_name, number))
    }

    function get_value_type(value) {
        if (Array.isArray(value)) {
            return 'Array'
        }
        return typeof value;
    }

    function my_handler(target_name, number) {
        return {
            set: function (obj, prop, value) {
                const value_type = get_value_type(value);
                const tg_name = `${target_name}.${prop.toString()}`;

                if (value && value_type === "object") {
                    set_traverse_object(tg_name, value, number)
                } else {
                    if (lwVm.config.logOpen === true) lwVm.console_log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`)
                }
                return Reflect.set(obj, prop, value);
            },
            get: function (obj, prop) {
                const tg_name = `${target_name}.${prop.toString()}`;
                const value = Reflect.get(obj, prop);
                let value_type = get_value_type(value);
                if (value && value_type === 'object') {
                    return new_handel(tg_name, value, number)
                }
                if (lwVm.config.logOpen === true) lwVm.console_log(`getter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`);
                return value
            },
            deleteProperty(target, propKey) {
                // 没有实现链式输出
                let result = Reflect.deleteProperty(target, propKey);
                let value_type = get_value_type(result);

                if (lwVm.config.logOpen === true) lwVm.console_log(`delete hook-> ${propKey}, result-> ${result};  typeof-> ${value_type}`);
                return result;
            }
        }
    }
    return new Proxy(obj_, my_handler(obj_name, 30));
}
