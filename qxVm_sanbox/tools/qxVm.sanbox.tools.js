const parse = require("@babel/parser").parse;
const generator = require("@babel/generator").default;
let fs = require("fs");

function ReadCode(name) {
    return fs.readFileSync(name) + "\r\n"
}


function str_is_funcName(str) {
    if (str === null || str === "" || str === undefined) {
        return false;
    }
    if (!isNaN(str) || !isNaN(str.slice(0, 1))) {
        return false;
    }

    return true;
}

function isFilePath(value) {
    if (value.length >= 256) {
        return false;
    }

    while (value.split("\\").length > 1) {
        value = value.replace("\\", "/");
    }
    if (value.split(":")[0].length > 1 || value.split("//").length > 1 || value.split(".").length <= 1 || value.split(".")[1] === null || value.split(".")[1] === "" || value.split(".")[1].match("/")) {
        return false;
    }

    let regex = /[a-zA-Z]{1}:{1}\/[^\/].+(\/$)?/;
    let array = regex.exec(value);
    if (array !== null) {
        return true;
    }
    return false;
}

function compress_jsCode(js_code) {
    const ast = parse(js_code);
    return generator(ast, opts = {"compact": true}, js_code).code;
}

function set_Time_Random(js_code) {
    return `Date.now = function now() { return 1661986251253 };
Date.parse = function () { return 1661986251253 };
Date.prototype.valueOf = function () { return 1661986251253 };
Date.prototype.getTime = function () { return 1661986251253 };
Date.prototype.toString = function () { return 1661986251253 };

Math.random = function random() { return 0.08636862211354912 };\r\n

${js_code}`;
}


module.exports = {
    str_is_funcName,
    isFilePath,
    compress_jsCode,
    set_Time_Random
};



// console.log(compress_jsCode(ReadCode('C:\\Users\\27836\\Desktop\\补环境\\QXVM\\z_working/boss.js')))
