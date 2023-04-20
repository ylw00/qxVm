const fs = require('fs');
// let express = require('express')
// const parser = require('body-parser');

const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`./juliang.js`);
const user_config = {
    isTest:true,
    compress: false,
    proxy_config: { proxy: true, print_log: true },
    window_attribute: {},

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
            href: "https://trendinsight.oceanengine.com/arithmetic-index/hot?topic_name=%E6%88%90%E9%83%BD%E4%B8%8B%E9%9B%A8%E4%BA%86"
        },
        document: {
            referrer: "",
            cookie: "Hm_lvt_df640d0b13edcfb2bad5f8d5e951c90e=1661909133; _gid=GA1.2.923187457.1661909134; Hm_lpvt_df640d0b13edcfb2bad5f8d5e951c90e=1661909142; _ga=GA1.1.1419657735.1661909133; _ga_313DD262YW=GS1.1.1661909133.1.1.1661909145.0.0.0; Hm_lvt_c36ebf0e0753eda09586ef4fb80ea125=1661909167; MONITOR_WEB_ID=7ddcf411-8ccc-4049-96cd-777107577387; passport_csrf_token=bc8bd682d5e9824e79ad093cf88e8109; passport_csrf_token_default=bc8bd682d5e9824e79ad093cf88e8109; ttcid=3c6b31f63d11400897c9ee47e7228edb29; _csrf_token=Miw4TkFxV-Ca0Y3mbm6g4uoo; msToken=gfjORrCYjnc45WYyXnHAE2L3Ibc4Qj4U_aXYC8WW0CrsiZ6cgeFeOYqXqG7MoJYOUnjB1423FHCQR0X_D53dZxI16txEsQcrFykZog93zcVNkNKLSBT6; tt_scid=lmQ0oLHwWq7tpWrY2q-bqu39ObpA805jHlyogun6RvOIF-WJv6Ik1p3fNGA3-ofJad21; Hm_lpvt_c36ebf0e0753eda09586ef4fb80ea125=1661913742"
        }
    }
}


let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_form", user_config);
let cookie = "Hm_lvt_df640d0b13edcfb2bad5f8d5e951c90e=1661909133; _gid=GA1.2.923187457.1661909134; Hm_lpvt_df640d0b13edcfb2bad5f8d5e951c90e=1661909142; _ga=GA1.1.1419657735.1661909133; _ga_313DD262YW=GS1.1.1661909133.1.1.1661909145.0.0.0; Hm_lvt_c36ebf0e0753eda09586ef4fb80ea125=1661909167; MONITOR_WEB_ID=7ddcf411-8ccc-4049-96cd-777107577387; passport_csrf_token=bc8bd682d5e9824e79ad093cf88e8109; passport_csrf_token_default=bc8bd682d5e9824e79ad093cf88e8109; ttcid=3c6b31f63d11400897c9ee47e7228edb29; _csrf_token=Miw4TkFxV-Ca0Y3mbm6g4uoo; msToken=gfjORrCYjnc45WYyXnHAE2L3Ibc4Qj4U_aXYC8WW0CrsiZ6cgeFeOYqXqG7MoJYOUnjB1423FHCQR0X_D53dZxI16txEsQcrFykZog93zcVNkNKLSBT6; tt_scid=lmQ0oLHwWq7tpWrY2q-bqu39ObpA805jHlyogun6RvOIF-WJv6Ik1p3fNGA3-ofJad21; Hm_lpvt_c36ebf0e0753eda09586ef4fb80ea125=1661913742"
console.log(result.get_form(cookie))
console.log(result.get_form(cookie))
// console.log(result.get_from())
// console.log(result.get_from())
// console.log(result.get_from())

let APP = express();
APP.use(parser.json());

APP.post('/juliang', (req, res) => {
    console.log('====')
    
    let cookie = "Hm_lvt_df640d0b13edcfb2bad5f8d5e951c90e=1661909133; _gid=GA1.2.923187457.1661909134; Hm_lpvt_df640d0b13edcfb2bad5f8d5e951c90e=1661909142; _ga=GA1.1.1419657735.1661909133; _ga_313DD262YW=GS1.1.1661909133.1.1.1661909145.0.0.0; Hm_lvt_c36ebf0e0753eda09586ef4fb80ea125=1661909167; MONITOR_WEB_ID=7ddcf411-8ccc-4049-96cd-777107577387; passport_csrf_token=bc8bd682d5e9824e79ad093cf88e8109; passport_csrf_token_default=bc8bd682d5e9824e79ad093cf88e8109; ttcid=3c6b31f63d11400897c9ee47e7228edb29; _csrf_token=Miw4TkFxV-Ca0Y3mbm6g4uoo; msToken=gfjORrCYjnc45WYyXnHAE2L3Ibc4Qj4U_aXYC8WW0CrsiZ6cgeFeOYqXqG7MoJYOUnjB1423FHCQR0X_D53dZxI16txEsQcrFykZog93zcVNkNKLSBT6; tt_scid=lmQ0oLHwWq7tpWrY2q-bqu39ObpA805jHlyogun6RvOIF-WJv6Ik1p3fNGA3-ofJad21; Hm_lpvt_c36ebf0e0753eda09586ef4fb80ea125=1661913742"
    return result.get_form(cookie)
})


APP.listen(3300, () => {
    console.log('服务器运行在3300');
});