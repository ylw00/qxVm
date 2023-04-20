
const fs = require('fs');
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`./dy.js`);
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

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "userxb", user_config);
let xb ="device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=MS4wLjABAAAAlwXCzzm7SmBfdZAsqQ_wVVUbpTvUSX1WC_x8HAjMa3gLb88-MwKL7s4OqlYntX4r&max_cursor=1668924001000&locate_query=false&show_live_replay_strategy=1&count=10&publish_video_strategy_type=2&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Win32&browser_name=Edge&browser_version=107.0.1418.62&browser_online=true&engine_name=Blink&engine_version=107.0.0.0&os_name=Windows&os_version=10&cpu_core_num=6&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=100&webid=7171645449338029602&msToken="
console.log(result.userxb(xb))
console.log('\n')

debugger
