import os
import re


def gen_new_js(js_all: str):
    get = False
    _set = False
    func = False
    funcName = False
    prototype = ''

    new_js = []

    for js in js_all.split('\n'):
        strip_js = js.strip()
        if strip_js == 'debugger;':
            continue
        if strip_js.startswith('//'):
            new_js.append(js)
            continue
        if strip_js.endswith('.prototype = {'):
            prototype = strip_js.split('.', 1)[0]
            # print(js)
            new_js.append(js)
            continue
        if prototype and strip_js.startswith('get ') and strip_js.endswith("() {"):
            funcName = strip_js.split(' ', 1)[-1].split('(', 1)[0]
            get = True
            func = False
            _set = False

        elif prototype and re.findall('set .*?\(.*?\) {', strip_js):
            funcName = strip_js.split(' ', 1)[-1].split('(', 1)[0]
            _set = True
            get = False
            func = False
        elif prototype and re.findall('.*?\(.*?\) {',
                                      strip_js) and '=' not in strip_js and 'function' not in strip_js and strip_js.endswith(
                ' {'):
            funcName = strip_js.split('(', 1)[0]
            func = True
            get = False
            _set = False

        if func:
            upjs = str(new_js[-1].strip())
            if strip_js == '},' or strip_js == '}':
                if upjs.endswith('new TypeError("Illegal constructor"); };'):
                    js = f"            let result = undefined;\n            if (qxVm.config.log_print === true) qxVm.logAdd('Func', '{prototype}', '{funcName}', arguments, result);\n            return result;\n" + js

                elif upjs.startswith('return '):
                    del new_js[-1]
                    _1, _2 = upjs.split(' ', 1)
                    js = f"            let result = {_2};\n            if (qxVm.config.log_print === true) qxVm.logAdd('Func', '{prototype}', '{funcName}', arguments, result);\n            return result;\n" + js

                # new_js.append(js)
        elif get:
            upjs = str(new_js[-1].strip())
            if strip_js == '},':
                if upjs.endswith('new TypeError("Illegal constructor"); };'):
                    js = f"            let result = undefined;\n            if (qxVm.config.log_print === true) qxVm.logAdd('Get', '{prototype}', '{funcName}', arguments, result);\n            return result;\n" + js

                elif upjs.startswith('return '):
                    # if 'onmanagedconfigurationchange' in upjs:
                    #     print(11)
                    #     pass
                    del new_js[-1]
                    _1, _2 = upjs.split(' ', 1)
                    js = f"            let result = {_2};\n            if (qxVm.config.log_print === true) qxVm.logAdd('Get', '{prototype}', '{funcName}', arguments, result);\n            return result;\n" + js
        elif _set:
            if strip_js == '},':
                _1 = new_js[-1]
                del new_js[-1]
                upjs = str(_1.strip())
                if upjs.endswith('new TypeError("Illegal constructor"); };'):
                    js = f"            if (qxVm.config.log_print === true) qxVm.logAdd('Set', '{prototype}', '{funcName}', arguments);\n            qxVm.memory.private_data.get(this).{funcName} = value;\n" + js
                elif upjs.startswith('qxVm.memory.private_data.get(this)'):
                    js = f"            if (qxVm.config.log_print === true) qxVm.logAdd('Set', '{prototype}', '{funcName}', arguments);\n" + _1 + '\n' + js
                elif upjs.startswith('$attribute_map'):
                    js = f"            if (qxVm.config.log_print === true) qxVm.logAdd('Set', '{prototype}', '{funcName}', arguments);\n" + _1 + "\n" + js

        new_js.append(js)
        # print(js)
    result = '\n'.join(new_js)
    return result


def traverse_folder(folder_path, copyFilePath=None):
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)

        print(item_path)
        if os.path.isfile(item_path) and item_path.endswith('.js'):
            copy_file = item_path.replace('qxVm_sanbox/env', 'qxVm_sanbox/envCopy')
            with open(item_path, encoding='utf8') as f:
                js = f.read()
            new_js = gen_new_js(js)

            with open(copy_file, encoding='utf8', mode='w') as f:
                f.write(new_js)
            # return

        if os.path.isdir(item_path):
            copy_item_path = item_path.replace('qxVm_sanbox/env', 'qxVm_sanbox/envCopy')
            if os.path.exists(copy_item_path) is False:
                os.makedirs(copy_item_path)
            traverse_folder(item_path, copy_item_path)  # 递归处理子文件夹


# folder_path = 'C:/Users/Administrator/Desktop/my_code/合集-环境框架/qxVm-master/qxVm_sanbox/env'
# traverse_folder(folder_path)

# traverse_folder(folder_path, r'C:/Users/Administrator/Desktop/my_code/合集-环境框架/qxVm-master/qxVm_sanbox/envCopy')


