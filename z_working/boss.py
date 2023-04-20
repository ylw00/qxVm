import requests, re
from urllib.parse import unquote


import execjs


def get_index(url):
    # 请求列表页，获取seed、js-filename、ts
    headers = {
        'authority': 'www.zhipin.com',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'zh-CN,zh;q=0.9',
    }
    res = requests.get(url, headers=headers, allow_redirects=False)
    print('===', res.text, '====')
    location = res.headers['location']
    seed = unquote(re.findall(r'seed=(.*?)&', location)[0])
    name = re.findall(r'name=(.*?)&', location)[0]
    ts = re.findall(r'ts=(.*?)&', location)[0]
    print(res.headers)
    print("seed:", seed)
    print("js-filename:", name)
    print("ts:", ts)
    return seed, name, ts


def get_code(name):
    # 请求js-filename，获取动态代码
    headers = {
        'authority': 'www.zhipin.com',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'zh-CN,zh;q=0.9',
        # 'if-modified-since': 'Tue, 26 May 2020 11:27:36 GMT',
    }
    url = 'https://www.zhipin.com/web/common/security-js/%s.js' % name
    response = requests.get(url, headers=headers)
    print("code.length:", len(response.text))
    return response.text


def get_cookie(seed, ts, code):
    # 传入seed、ts、code代码，获取zp_stoken
    data = {
        "seed": seed,
        "ts": ts,
        "js_code": code + """
function get_form(m, t) {
    let o = window.ABC;
return (new o).z(m, t);
}"""
    }
    # print(data)
    res = requests.post('http://127.0.0.1:3300/boss', json=data).json()
    zp_stoken = res["zptokn"]

    # zp_stoken = ctx.call("get_cookie", seed, ts, code)["cookie"]

    print("zp_stoken：", zp_stoken)
    return zp_stoken


def main(url):
    # 主要运行逻辑
    # 1、请求列表页，获取参数
    # 2、获取js代码
    # 3、获取cookie
    # 4、携带cookie重新请求列表页，获取数据
    seed, name, ts = get_index(url)
    print(seed, name, ts)
    code = get_code(name)
    zp_stoken = get_cookie(seed, ts, code)
    headers = {
        'authority': 'www.zhipin.com',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-dest': 'document',
        'accept-language': 'zh-CN,zh;q=0.9',
        "cookie": '__zp_stoken__=' + zp_stoken
    }
    res = requests.get(url, headers=headers)
    print(res.text)


if __name__ == "__main__":
    with open("boss.js", "r", encoding="utf-8") as f:
        ctx = execjs.compile(f.read())

    # 列表页url
    url = 'https://www.zhipin.com/job_detail/?query=java&city=101280600&industry=&position='
    main(url)
