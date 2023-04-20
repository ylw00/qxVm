const fs = require('fs');
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`./unknow1.js`);
const user_config = {
    compress: false,
    proxy_config: { proxy: true, print_log: true },
    window_attribute: {
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
            href: "https://www.douyin.com/search/%E7%BE%8E%E5%A5%B3?aid=cacd12e5-e9d5-4ceb-b818-2ad7b245514b&enter_from=discover&focus_method=&modal_id=7117595309009669416&source=normal_search"
        },
        document: {
            referrer: "",
            cookie: "ttcid=1e9a0ac9626d4931b235cb3ad4367c5e28; douyin.com; strategyABtestKey=1661868893.02; s_v_web_id=verify_l7g9twqu_jigMTuKc_1DVq_4fHd_AbyI_zUCBmBZER4Mm; passport_csrf_token=e1bfef4342870bdb4846e52616ad36fb; passport_csrf_token_default=e1bfef4342870bdb4846e52616ad36fb; __ac_nonce=0630e1b7400d1b4ae682b; __ac_signature=_02B4Z6wo00f01g6TOTAAAIDCjpHDc45OwdIOsz2AAOC4zB8cP0Bb2eKU8e.tGSIFnNLRSrcF.xiRHJPVGsK9VZ-XJyQeEJBE2a4uDMheb9k6rhG-.udo4B0A77J309kOXNpDhDVL5AgkADWX54; SEARCH_RESULT_LIST_TYPE=%22multi%22; download_guide=%221%2F20220830%22; msToken=KnlASY6DNJStnnzOkAk8YfYp5t7FMEv_AIVeHv-aomd_8EXf7MiNY2vL5Bx-ksVgcKtlTRqhp8LRhdq5T87WKoVi8TafCQlMKUKgLGngiZmeaIBoxhComACyNQ-7c7Q=; IS_HIDE_THEME_CHANGE=%221%22; THEME_STAY_TIME=%22294435%22; home_can_add_dy_2_desktop=%221%22; tt_scid=RK8aK6gvBEww9eRct-8VE8dfWeGwB2vNHFhkxcSBUxGwyJ.e7wUdBZL-TYB0QEFf47f0; msToken=csXRNdUNbKUreC1uivbHAkBK3uZ-1Ls6ELaRkk5qDLrDwy2eqVUTkv7NHX288tTf4HLhOEHyIWBvcv2JuVxFYwPyIzuJ6vDkh0eQHi0FYiYVo_waoS681I_ZSsHSLog="
        }
    }
}

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_from", user_config);
console.log(result.get_from())
