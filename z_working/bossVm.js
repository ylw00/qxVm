const fs = require("fs");
// const { VM, VMScript } = require('vm2/index');
// const { NodeVM } = require('vm2/index');


// const fs = require('fs');
// // let express = require('express')
// // const parser = require('body-parser');

const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');




function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`./boss.js`);
const user_config = {
    isTest: true,
    compress: false,
    proxy_config: { proxy: false, proxy_proto: true, print_log: true },
    window_attribute: {
    },
    env: {
        canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAAD1ZJREFUeF7t3HtwVOUZx/HnJOQCCBEk4EgEQg2CXKSRiDheAKNQ6TigSEFaHYHsgs6geMMitVOwdERGip0WdqMwXBRQBLWCOhMuVosgihKjttxEJCCEMtxJEPZ03pPdsLsJIPC8kJDv/mf27O+c8zm7v3nPs4uO8EAAAQRqiIBTQ46Tw1QUcH3iKsbVmCgnKLzfa8zVqvpAuYA1/AKezeFTWGejxmuqgwCFVR2uwnk+BgrrPIOzOzUBCkuNsuYEUVg151pxpLECFFYtfEdQWLXwol8kp0xhXSQX8kxOg8I6Ey22rU4CFFZ1uhrn6VgorPMEzW7UBSgsddLqH0hhVf9rxBFWLUBh1cJ3BoVVCy/6RXLKFNZFciHP5DQorDPRYtvqJEBhVaercZ6OhcI6T9DsRl2AwlInrf6BFFb1v0YcITMs3gNhAQqLt0JNFWCFVVOv3DkcN4V1Dni89IIKUFgXlP/C7JzCujDu7PXcBU4U1rD8ZpIQWiGu86jk+z6Iif7drPqSWvq6OO6dlXbpOr0rtvcFRorIlCq2mSb5vhEVf/dPu1Zcp0BEmnh/c53Y5+Nzovdhts8LThXHHR7O2y2OmyuB4eu8/47Pjs6PnKNI27hjjM0w+SItpDR1gMy+/1Cl84l+PqXsEs/tdJnnfq3UEigsNUqCzrPAmRWWyEsxZZYX7CWOO6eiMEzRuE67mHI6URJTJeh/qaJQXOe3XlakDEW2eq8rL6sREkroLi/n7ay0fXyZVHUMBtHsK/5RfiwLxXEfqig4s038PssLsYeIvC1B/+iYmEiZus4Sr9DKC+v0mef5wp5qdxRWNboYHMoZCVQqrKzM1c/3zJ1+x7bia9YuXvLIaHGdBVKa+oRZYaU3+25Gv35/yXVcaW72cuxYUsqukswujRsXf5WafOhvgfzAFaaw/H7fBhExH3jvUVLSsmNSUtnBtLQflwTzA9vEdXqZD7t/1P3XucflkcOHGzXfu7dZ+0sv3fHanDkvZIjjfmAKx/+ZPGZyzOtNTnJS6fh5r497IrIK9K2Ria6b2GHXzlbXJacc2dG4yfaRganBQSLyln+E74jJdhxJjhzHkSP1ts6aPblz5w4fTOjabeFgcaSBea60rH7DPXuad0xP/35lUnLZxHBGWu7twXZXtvimMKHB4VGvtJc94XLND+elDRn68HpXkhrPmzeu7dWtV447ZWa2/OuMrozFjSksi7hEWxWosrC63bRgwMqVA27auPH6e6NXQRWFFZKCQI4sELO6Eenr9/mWuiKDVn4ycFvRVz2TTWG5rlwezJGnxKxqHHd6z+4z/pTV5pNHxZHPAl3kRf9aucUrFJG5gWDwQL36ex+/b/AzWxPkpz3mdV5ZudIlQWTs1GDwyQ4dlx29sdu8DG/7HFlgykoSpOH6Ld2fW/H+fYGePaZ/kdl6TcflK4bV37w5O6NTx4KrjVxh4e0nbjfDKyyvsG5c2F8SZEbAFEn5qkn8Pn8ds89Fi8a4u0pa7e/TZ3JWw7SSxAYNdn8U7CLPequ9UMJocdyvu16/cHCnTgVbjoVSSioK6xSZ3nnkyGarV/NnhlNYPxOKzaqdQKXCanll0fS2bT8au3d/szdXD/1giCmWY0cTH9+4qWuHVav7t74+5y0p3tZONn+XXX4yrrOk36+eH920xabH/71y4P6ioh4jO3UskLr19snq1fdETtibEfmGDR/sOPKjV1ifyWOuI20WLfp9QcmuVm+I6/T2+3xmxXO368gkccTnuLI+EAhmieN2N7eIPn/e4yYwUWRaSOS50rKGi2fOnHSf+Vv33q/5M5t/+ud1X+b2Xru2z599ef6MsrKG68LPl99uhm9PGzbY3TY7e7H8d/2NsmNHVuQ8pvlH+OZKSB5ctHBMsimsgYOeqbt3X7MOLTKKlpl9Ts0P/NpsnNZoZ73rfvmuPzPzi/dCblL9uXPHdUuuU5Z1qswEV8ZTWBf2/c//IvnC+mvsvVJhmQ9z165vliUnl47NaPHNp2YVVFbWcKH54FdaYYUH3D27zwhclbUqOXy7590SVqywwjOqpulb9va9Z8KBxJBMrPjgls+f3jdlZVZy/jXS302Q3OOpMsa7BSufJXllZeZZZlUVKbyo2ZeY28uhT9+fklgqE5yQFByrJ8sSj8gfHZH00rL6zf+3u0X2JQ12vznvtQmjzbyp0gorPAfr33/czMsaF2/3SlJEhgx9uHTr1mu7X95s41uJiaGNM2dO6iMJoec7tF8xpGnTzXe1alk403USMqtcYcVndpEXNS4YGQjUZoFKhZVxxX9ev+GGBX2+25Kdkt353W8T6hxfFZgyK1DVDMvAReZLTZp+//7818dt2bfn8pbxM6xDhxqlmxlV02bffejNiMxt2IlvHsvnVWukvzjygLgy07vdLC/D+eK4vzEDcq+sRDIqbq3KC+GvpsyGjsr7yZSVOR5TdsmH5VKzAvNuP6flv1r3kn3v3H33c1sTnaO7qpphhUKJiWYOllr3UIk3ZwsGvdmWz+c7UFzcLvv7rdd+3f6a5anz549vIKWpebf1eWnOwYOXXd3+mg9nuQkJ7aqaYVXKNLfHPBBA4JwEqpxh3Xzrq3ftKsm8vW7d/Zu8QfbkWZ/HFFZkhmV2nRecGpkvrSvstW/1qnvKYlZY5dv0ip9RRW7PzADduxWMLqvwayKFZG4FY8rKaxPvG8le5lawTasVY82fwreX4yu+YTR/LC++f/S7+4WJjdJ+eKBgWV5W4wbbn46ZYYXL08zBrspa1W7Z8mGJGzdcv8MU1v4D6U3f+eeTl9xy8+ymRYW5y3vdO3nKrs1ZC78qzE3p2WPG2zGFFT3Dist0EmWKV9Q8EEDgrAVO+i3h9u1tD/yw7ZrB7Tsue6+4pPMoM9g+yS2htwoy8ymzGlm8eNSGqm4JzTd//jz/djOjih5AD/1aGnu3cmZeVcVtk5mhSUiGS4JMq+oD763MIpmB/EPh30SV/4QiahU3Is//bunR1AlLVwxrX6mwwqu1Tp0L+t7Q9Y1R3xT16Pjxx4MKTWEdO56UNP2Vv7fp3Pn9W6/KWj3tsibF72wvzhq3dGne0YEDnl120sKKyzzZ+Z31leOFCNRCgZMWlogsXLRoTL+cnLe6N260PTD71YldU+oevLOKobs3fzK3bJs2dclauiyvb6Whe/iHoTEzqsn5SaZcIj+jMPvzbgUjj/AHfuCAZyelpe28rdK3bOEV1pAHR35UJ6W0VcXca1h+szZtV35+ZUZR8zVr+sr+/enet4Sm+I4eSX1o0dtjuoSOJ/4ibkDufSkwdOTwH0x5rl7ZP3Nd4R2bTWGZwzGzuVYtvxx0W+7LXyTW+Wnbpg1dcpYu9SWbfZvCOsnQPSbTzNZizq8Wvtk4ZQTOVaDSP80ZsUZae/OfcIF4JSMyyNzSHEuRoshgO/rDF78K8r4BjPysIXyEp1tJneuJRL++4hzCP6GI37f3vCN/qPhZQ/jFMau1HNns/XTCFFaOPBXJkJCkR27vIt90VszNfkam5nmShUBtEzhtYXnjovBvniRZXpCj8mTkh6MxWJFhuRkbhX/wGY/puvKt99usqEd8Qca/Jr5EKj0f/nlExQorvEFUaXkD9Oh9xz8XyXRdORo9a4ouLLNNdEGZbzErFVb5oN/b38kya9sbjPNFQFOAf/ysqUkWAghYFaCwrPISjgACmgIUlqYmWQggYFWAwrLKSzgCCGgKUFiammQhgIBVAQrLKi/hCCCgKUBhaWqShQACVgUoLKu8hCOAgKYAhaWpSRYCCFgVoLCs8hKOAAKaAhSWpiZZCCBgVYDCsspLOAIIaApQWJqaZCGAgFUBCssqL+EIIKApQGFpapKFAAJWBSgsq7yEI4CApgCFpalJFgIIWBWgsKzyEo4AApoCFJamJlkIIGBVgMKyyks4AghoClBYmppkIYCAVQEKyyov4QggoClAYWlqkoUAAlYFKCyrvIQjgICmAIWlqUkWAghYFaCwrPISjgACmgIUlqYmWQggYFWAwrLKSzgCCGgKUFiammQhgIBVAQrLKi/hCCCgKUBhaWqShQACVgUoLKu8hCOAgKYAhaWpSRYCCFgVoLCs8hKOAAKaAhSWpiZZCCBgVYDCsspLOAIIaApQWJqaZCGAgFUBCssqL+EIIKApQGFpapKFAAJWBSgsq7yEI4CApgCFpalJFgIIWBWgsKzyEo4AApoCFJamJlkIIGBVgMKyyks4AghoClBYmppkIYCAVQEKyyov4QggoClAYWlqkoUAAlYFKCyrvIQjgICmAIWlqUkWAghYFaCwrPISjgACmgIUlqYmWQggYFWAwrLKSzgCCGgKUFiammQhgIBVAQrLKi/hCCCgKUBhaWqShQACVgUoLKu8hCOAgKYAhaWpSRYCCFgVoLCs8hKOAAKaAhSWpiZZCCBgVYDCsspLOAIIaApQWJqaZCGAgFUBCssqL+EIIKApQGFpapKFAAJWBSgsq7yEI4CApgCFpalJFgIIWBWgsKzyEo4AApoCFJamJlkIIGBVgMKyyks4AghoClBYmppkIYCAVQEKyyov4QggoClAYWlqkoUAAlYFKCyrvIQjgICmAIWlqUkWAghYFaCwrPISjgACmgIUlqYmWQggYFWAwrLKSzgCCGgKUFiammQhgIBVAQrLKi/hCCCgKUBhaWqShQACVgUoLKu8hCOAgKYAhaWpSRYCCFgVoLCs8hKOAAKaAhSWpiZZCCBgVYDCsspLOAIIaApQWJqaZCGAgFUBCssqL+EIIKApQGFpapKFAAJWBSgsq7yEI4CApgCFpalJFgIIWBWgsKzyEo4AApoCFJamJlkIIGBVgMKyyks4AghoClBYmppkIYCAVQEKyyov4QggoClAYWlqkoUAAlYFKCyrvIQjgICmAIWlqUkWAghYFaCwrPISjgACmgIUlqYmWQggYFWAwrLKSzgCCGgKUFiammQhgIBVAQrLKi/hCCCgKUBhaWqShQACVgUoLKu8hCOAgKYAhaWpSRYCCFgVoLCs8hKOAAKaAhSWpiZZCCBgVYDCsspLOAIIaApQWJqaZCGAgFUBCssqL+EIIKApQGFpapKFAAJWBSgsq7yEI4CApgCFpalJFgIIWBWgsKzyEo4AApoCFJamJlkIIGBVgMKyyks4AghoClBYmppkIYCAVQEKyyov4QggoClAYWlqkoUAAlYFKCyrvIQjgICmAIWlqUkWAghYFaCwrPISjgACmgL/B094l+ICDqF4AAAAAElFTkSuQmCC",
        plugin: [
            {
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                name: "PDF Viewer",
                MimeTypes: [
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "application/pdf"
                    },
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "text/pdf"
                    }
                ]
            },
            {
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                name: "Chrome PDF Viewer",
                MimeTypes: [
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "application/pdf"
                    },
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "text/pdf"
                    }
                ]
            },
            {
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                name: "Chrome PDF Viewer",
                MimeTypes: [
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "application/pdf"
                    },
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "text/pdf"
                    }
                ]
            },
            {
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                name: "Microsoft Edge PDF Viewer",
                MimeTypes: [
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "application/pdf"
                    },
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "text/pdf"
                    }
                ]
            },
            {
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                name: "WebKit built-in PDF",
                MimeTypes: [
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "application/pdf"
                    },
                    {
                        description: "Portable Document Format",
                        suffixes: "pdf",
                        type: "text/pdf"
                    }
                ]
            }
        ],
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44"
        },
        location: {
            href: "https://www.zhipin.com/web/geek/job?query=&city=101210100&position=100101&page=2"
        },
        document: {
            referrer:'https://www.zhipin.com/web/common/security-check.html?seed=35RlLUuTTh6g26lBz1cBplZdepbJ6vQzb507t%2Fo7JZ8%3D&name=4672dc2c&ts=1664246307766&callbackUrl=https%3A%2F%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3D%26city%3D101210100%26position%3D100101%26page%3D1',
            cookie: 'lastCity=101210100; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1662443756; wd_guid=86a84d99-3d6e-4b15-8df8-3c08239470b4; historyState=state; _bl_uid=kXl637tmpvts9F3XqjkjmwaekhhO; __zp_seo_uuid__=9b4caed5-bd47-401f-99d4-e9860622005d; __g=-; __l=r=https%3A%2F%2Fcn.bing.com%2F&l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3D%26city%3D101210100%26position%3D100101&s=3&g=&friend_source=0&s=3&friend_source=0; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1664246308; __c=1662443756; __a=96096595.1653529792.1655263172.1662443756.39.3.11.23; __zp_stoken__=e468eGiBFYQ49fFUyBAAnN2gUUHZBAi9RP1ZBPBURdxpgSnx8awd3JWh6PXsEejZlQR9SdDA6IjZ3ZkANAiEHNVs%2FawdQEwR6Kw9%2FQjJ1KH9ieE9%2BSi0STSA1CxQpTFx3AyZgfT88XTxpVkU%3D; __zp_sseed__=35RlLUuTTh6g26lBz1cBphl7k9O9tSGHKruxK+FxGYs=; __zp_sname__=4672dc2c; __zp_sts__=1664246323419'
        }
    }
}


// e468eGiBFYQ49XSRFBCtuN2gUUHZgKDkQcFZBPBURdxpnNUxqVwd3JWh6JUJ5AGk6QR9SdDA6IjZ3ahc ND Gd ZQSh7MxkO Ty NdAQ hW QjJ1KH9ieBAhMFArVSA1CxQpcFx3AyZgfT88XTxpVkU=  正确

let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_form", user_config);


console.log(result.get_form("MTnfh/wYU9PwzKkN0LZIk3Ozez2lqz/KvTOLLXaQU4M=", 1664430692198))
console.log(result.get_form("MTnfh/wYU9PwzKkN0LZIk3Ozez2lqz/KvTOLLXaQU4M=", 1664430692198))
console.log(result.get_form("MTnfh/wYU9PwzKkN0LZIk3Ozez2lqz/KvTOLLXaQU4M=", 1664430692198))
console.log(result.get_form("MTnfh/wYU9PwzKkN0LZIk3Ozez2lqz/KvTOLLXaQU4M=", 1664430692198))
console.log(result.get_form("MTnfh/wYU9PwzKkN0LZIk3Ozez2lqz/KvTOLLXaQU4M=", 1664430692198))
// console.log(result.get_form('GFyZV2jP/ZWpsQYI3CYklE6nxJF+VZpbEAYA/cnV0m0=', 1662875071415))
// // console.log(result.get_form('GFyZV2jP/ZWpsQYI3CYklE6nxJF+VZpbEAYA/cnV0m0=', 1662875071415))



// // let APP = express();

// // APP.use(express.json({limit: '50mb'}));
// // APP.use(express.urlencoded({limit: '50mb'}));
// // APP.use(parser.json({limit: '10mb', extended: true}));

// // user_config['isTest'] = false;

// // APP.post('/boss', (req, res) => {
// //     console.log('====')
// //     let bd = req.body
// //     // console.log(bd)
// //     let js_code = bd['js_code']
// //     let seed = bd['seed'];
// //     let ts = bd['ts'];
// //     console.log(seed, ts)
// //     let result = QXVM_GENERATE.QXVm_sanbox(js_code, "get_form", user_config);
// //     let token = result.get_form(seed, ts)
// //     res.send({'desc':"success", 'zptokn': token})
// // })
// // APP.listen(3300, () => {
// //     console.log('服务器运行在3300');
// // });
// function ReadCode(name) {
//     return fs.readFileSync(name) + "\r\n"
// }
// var vos = {};
// const vm = new VM({sandbox: vos});
// const script = new VMScript(ReadCode('C:\\Users\\27836\\Desktop\\补环境\\QXVM\\z_working/boss_2.js'), `${__dirname}/vmcode.js`);
// aa  =vm.run(script);
// console.log(aa)