const fs = require("fs")

function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

function Get_baseConfig_node_code() {
    let code = "";
    code += ReadCode("Del_attribute.js");
    return code;
};

function Get_frameEnd_code(){
    let code = ""
    code += ReadCode("vm_frameLoadEnd.js");
    return code;
}

module.exports = {
    Get_baseConfig_node_code, 
    Get_frameEnd_code
}