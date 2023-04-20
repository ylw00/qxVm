const fs = require('fs');
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`./pdd.js`);
const user_config = {
    proxy_config: { proxy: true, print_log: true },
    canvas: "",
    window_attribute: { },
    env: {
        plugin: [
            { description: "Portable Document Format", filename: "internal-pdf-viewer", name: "Chrome PDF Plugin", MimeTypes: [{ description: "Portable Document Format", suffixes: "pdf", type: "application/x-google-chrome-pdf" }] },
            { description: "", filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai", name: "Chrome PDF Viewer", MimeTypes: [{ description: "", suffixes: "pdf", type: "application/pdf" }] },
            { description: "", filename: "internal-nacl-plugin", name: "Native Client", MimeTypes: [{ description: "Native Client Executable", suffixes: "", type: "application/x-nacl" }, { description: "Portable Native Client Executable", suffixes: "", type: "application/x-pnacl" }] }
        ],
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.55"
        },
        location: {
            href: "https://mms.pinduoduo.com/login/?redirectUrl=https%3A%2F%2Fmms.pinduoduo.com%2Fgoods%2Fgoods_list",
            search: "?redirectUrl=https%3A%2F%2Fmms.pinduoduo.com%2Fgoods%2Fgoods_list"
        }
    }
}

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_crawler_info", user_config);

console.log(result.get_crawler_info('CiYVEmJbi+YZ+gBf9LH3Ag==', 1650199489460))
console.log('\n')

debugger
