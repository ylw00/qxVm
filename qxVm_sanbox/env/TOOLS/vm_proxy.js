// ========================================================================================================================

qxVm.proxy = function (obj, objname, type) {
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
                if (qxVm.config.print_log === true) {
                    console.log(`[${watchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`);
                }
                return result

            },
            construct(target, argArray, newTarget) {
                let result = Reflect.construct(target, argArray, newTarget);
                if (qxVm.config.print_log === true) {
                    console.log(`[${watchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`);
                }
                return result;
            }
        }
    }

    function get_obj_handler(WatchName) {
        return {
            get(target, propKey, receiver) {
                if (qxVm.config.proxy_proto === false && propKey === "__proto__") {
                    console.log(`getting propKey-> ${WatchName}.${propKey}  value-> ${(target[propKey])}`)
                    return target[propKey]
                };

                let result = Reflect.get(target, propKey, receiver);
                let result_type = get_attribute_type(result);

                if (result instanceof Object) {
                    if (Object.getOwnPropertyDescriptor(target, propKey)?.writable === false) {
                        console.log(`getting propKey-> ${WatchName}.${propKey} it is non-writable`)
                    } else {
                        if (typeof result === "function") {
                            if (qxVm.config.print_log === true) {

                                console.log(`getting propKey-> ${WatchName}.${propKey}  value-> ${qxVm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
                            }
                            return new Proxy(result, get_method_handler(WatchName))
                        } else {
                            if (qxVm.config.print_log === true) {
                                console.log(`\ngetting propKey-> ${WatchName}.${propKey}  value-> ${qxVm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
                            }
                        }
                        return new Proxy(result, get_obj_handler(`${WatchName}.${propKey}`))
                    }

                }
                if (typeof (propKey) !== "symbol" && propKey !== "toString") {
                    try {
                        if (qxVm.config.print_log === true) {
                            console.log(`\ngetting propKey-> ${WatchName}.${propKey?.description ?? propKey}  result-> ${result}  typeof-> ${result_type}`);
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
                    if (qxVm.config.print_log === true) {
                        console.log(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${qxVm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
                    }
                } else {
                    if (qxVm.config.print_log === true) {
                        console.log(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${qxVm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
                    }
                }
                return Reflect.set(target, propKey, value, receiver);
            },
            has(target, propKey) {
                let result = Reflect.has(target, propKey);
                if (qxVm.config.print_log === true) {
                    console.log(`has propKey-> ${WatchName}.${propKey}, result-> ${result}`);
                }
                return result;
            },
            deleteProperty(target, propKey) {
                let result = Reflect.deleteProperty(target, propKey);
                if (qxVm.config.print_log === true) {
                    console.log(`delete propKey-> ${WatchName}.${propKey}, result-> ${result}`);
                }
                return result;
            },
            getOwnPropertyDescriptor(target, propKey) {
                let result = Reflect.getOwnPropertyDescriptor(target, propKey);
                if (qxVm.config.print_log === true) {
                    try {
                        console.log(`getOwnPropertyDescriptor  propKey-> ${WatchName}.${propKey} result-> ${(String(result))}`);
                    } catch (error) { }
                }
                return result;
            },
            defineProperty(target, propKey, attributes) {
                let result = Reflect.defineProperty(target, propKey, attributes);
                try {
                    if (qxVm.config.print_log === true) {
                        console.log(`defineProperty propKey-> ${WatchName}.${propKey} attributes is [${(attributes)}], result is [${result}]`);
                    }
                } catch (e) {
                    console.log(`[${WatchName}] defineProperty error`)
                }
                return result;
            },
            getPrototypeOf(target) {
                let result = Reflect.getPrototypeOf(target);
                if (qxVm.config.print_log === true) {
                    console.log(`[${WatchName}] getPrototypeOf result is [${(result)}]`);
                }
                return result;
            },
            setPrototypeOf(target, proto) {
                let result = Reflect.setPrototypeOf(target, proto);
                if (qxVm.config.print_log === true) {
                    console.log(`[${WatchName}] setPrototypeOf proto is [${(proto)}], result is [${result}]`);
                }
                return result;
            },
            preventExtensions(target) {
                let result = Reflect.preventExtensions(target);
                if (qxVm.config.print_log === true) {
                    console.log(`[${WatchName}] preventExtensions, result is [${result}]`);
                }
                return result;
            },
            isExtensible(target) {
                let result = Reflect.isExtensible(target);
                if (qxVm.config.print_log === true) {
                    console.log(`[${WatchName}] isExtensible, result is [${result}]`);
                }
                return result;
            },
            ownKeys(target) {
                debugger;
                let result = Reflect.ownKeys(target);
                if (qxVm.config.print_log === true) {
                    try {
                        console.log(`[${WatchName}] invoke ownkeys, result is [${String((result))}]`);
                    } catch (error) {

                    }
                }
                return result
            }
        }
    }

    if (qxVm.config.proxy === false) {
        return obj
    }


    // if (type === "method") {
    if (typeof obj === "function") {
        return new Proxy(obj, get_method_handler(objname));
    }
    return new Proxy(obj, get_obj_handler(objname));
};
