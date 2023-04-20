const fs = require('fs');
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`yidun.js`);
const user_config = {
    compress: true,
    proxy_config: { proxy: true, print_log: true },
    window_attribute: {
        initWatchman: { 'version': 7, __supportCaptcha__: true },
        initNEWatchman: { 'version': 7 },
        options: {
            "auto": true,
            "staticServer": "acstatic-dun.126.net",
            "apiServer": "ac.dun.163yun.com",
            "staticServers": [
                "acstatic-dun.126.net",
                "acstatic.dun.163yun.com"
            ],
            "apiServers": [
                "ac.dun.163.com",
                "ac.dun.163yun.com"
            ],
            "productNumber": "YD20160637306799",
            "protocol": "https",
            "domain": "",
            "Kc": [
                ""
            ],
            "ic": [
                ""
            ],
            "buildVersion": "2.7.5_602a5ad7",
            "lastUsedVersion": "2.7.5_602a5ad7",
            "sConfig": "9ca170a1abeedba16ba1f2ac96ed26f3eafdcfe265aff1bad3ae70e2f4ee83e27fe2e6ee82e226a8aba2cfb43ef1f2ad90f025b6eee183a128e2bca4c3b92ae2f4ee8ee867e2e6fbd1af2aafbba7c3b939f4f0e4c3e26faffef6d3b328e2bdab8aa132f1f000cda161a7b3eedbb43cf0fea586ec2afaed00d1af2aa6bba3c3b93af4f4ee87e863e2e6fdd1b328e2adab8ea132f2f0e4c3f26fabfef6d4b33cf0feab8be270e2e6aa82ef79a7f4ee86e579e2e6aa82ef79a7f4ee86f679e2e6aa82ef79a7f4ee93e880e2e6ffcda169afb2eedbb128e2bda7c3b93bf4f0e4c3ee80a7b3eedbb83cf0fea195e863e2e6fdd1b328e2b3bc86f02afaeb00cda167b8bba7c3b939f4f0e4c3f366e2e6eebac73af4effad1b539f5ed00d7b633fbfee4c3e870a1fef695f17fa7f4ee83ef2afafeeecda163b6b0eedbb23cf4f000d1af2aa8acba91a132fceafcd1b33cf4f0e4c3f780adfef6d3b33cf4f4ee86e47fe2e6aa82ef79a7f4ee82e780e2e6fbd1af2aa7acadc3b96ea3b4bd86af2ab8bdbcc3b93cbf",
            "configHash": "9ca170a1abeedba16ba1f2ac96ed26f3eafdcfe265aff1bad3ae70e2f4ee83e27fe2e6ee82e226a8aba2cfb43ef1f2ad90f025b6eee183a128e2bca4c3b92ae2f4ee8ee867e2e6fbd1af2aafbba7c3b939f4f0e4c3e26faffef6d3b328e2bdab8aa132f1f000cda161a7b3eedbb43cf0fea586ec2afaed00d1af2aa6bba3c3b93af4f4ee87e863e2e6fdd1b328e2adab8ea132f2f0e4c3f26fabfef6d4b33cf0feab8be270e2e6aa82ef79a7f4ee86e579e2e6aa82ef79a7f4ee86f679e2e6aa82ef79a7f4ee93e880e2e6ffcda169afb2eedbb128e2bda7c3b93bf4f0e4c3ee80a7b3eedbb83cf0fea195e863e2e6fdd1b328e2b3bc86f02afaeb00cda167b8bba7c3b939f4f0e4c3f366e2e6eebac73af4effad1b539f5ed00d7b633fbfee4c3e870a1fef695f17fa7f4ee83ef2afafeeecda163b6b0eedbb23cf4f000d1af2aa8acba91a132fceafcd1b33cf4f0e4c3f780adfef6d3b33cf4f4ee86e47fe2e6aa82ef79a7f4ee82e780e2e6fbd1af2aa7acadc3b96ea3b4bd86af2ab8bdbcc3b93cbf",
            "merged": true,
            "nc": false,
            "oc": false,
            "ra": true,
            "uc": 300000,
            "mc": 86400000,
            "Gc": 2000,
            "za": 1,
            "moveMax": 50,
            "moveInterval": 300,
            "keydownMax": 10,
            "keydownInterval": 300,
            "clickMax": 20,
            "clickInterval": 300,
            "upMax": 20,
            "upInterval": 300,
            "downMax": 20,
            "downInterval": 300,
            "focusMax": 20,
            "focusInterval": 300,
            "blurMax": 20,
            "blurInterval": 300,
            "scrollMax": 20,
            "scrollInterval": 300,
            "orientationMax": 50,
            "orientationInterval": 3000,
            "motionMax": 50,
            "motionInterval": 3000,
            "batteryMax": 100,
            "batteryInterval": 10
        }
    },
    
    env: {
        canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==",
        plugin: [
            { description: "Portable Document Format", filename: "internal-pdf-viewer", name: "Chrome PDF Plugin", MimeTypes: [{ description: "Portable Document Format", suffixes: "pdf", type: "application/x-google-chrome-pdf" }] },
            { description: "", filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai", name: "Chrome PDF Viewer", MimeTypes: [{ description: "", suffixes: "pdf", type: "application/pdf" }] },
            { description: "", filename: "internal-nacl-plugin", name: "Native Client", MimeTypes: [{ description: "Native Client Executable", suffixes: "", type: "application/x-nacl" }, { description: "Portable Native Client Executable", suffixes: "", type: "application/x-pnacl" }] }
        ],
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.55"
        },
        location: {
            href: "https://www.chinaexpressair.com/yss/login/"
        },
        document: {
            cookie: ""
        }
    }
}

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_dd", user_config);
console.log(result.get_dd())