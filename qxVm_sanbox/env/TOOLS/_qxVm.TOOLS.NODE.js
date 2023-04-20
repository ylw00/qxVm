let fs = require("fs");

/**
 * @return {string}
 */
function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`) + "\r\n"
}

/**
 * @return {string}
 */
function Get_tools_node_code() {
    let code = "";
    code += ReadCode("vm_menmory.js");
    code += ReadCode("vm_tools.js");
    code += ReadCode("vm_protection.js");
    code += ReadCode("vm_expose_interfaces.js");
    code += ReadCode("vm.print.js");
    code += ReadCode("vm_proxy.js");
    code += ReadCode("vm_throw_error.js");
    
    return code;
}

module.exports = {
    Get_tools_node_code
};


// Screen.prototype.constructor = Screen;
// for (let key in Screen.prototype) {
//     // Object.defineProperty(screen, key, {
//     //     value: Screen.prototype[key], writable: false, enumerable:false
//     // });
//     // Object.getOwnPropertyDescriptors(sss)
//     if (typeof Screen.prototype[key] !== "function") {
//         Screen.prototype.__defineGetter__(key, function () {
//             console.log(arguments)
//             debugger;
//             throw new TypeError("Illegal invocation")
//         })
//     }
// };