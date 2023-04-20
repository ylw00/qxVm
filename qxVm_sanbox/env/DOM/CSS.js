CSS = {
    Hz() {
        debugger;
    },
    Q() {
        debugger;
    },
    ch() {
        debugger;
    },
    cm() {
        debugger;
    },
    deg() {
        debugger;
    },
    dpcm() {
        debugger;
    },
    dpi() {
        debugger;
    },
    dppx() {
        debugger;
    },
    em() {
        debugger;
    },
    escape() {
        debugger;
    },
    ex() {
        debugger;
    },
    fr() {
        debugger;
    },
    grad() {
        debugger;
    },
    in() {
        debugger;
    },
    kHz() {
        debugger;
    },
    mm() {
        debugger;
    },
    ms() {
        debugger;
    },
    number() {
        debugger;
    },
    pc() {
        debugger;
    },
    percent() {
        debugger;
    },
    pt() {
        debugger;
    },
    px() {
        debugger;
    },
    rad() {
        debugger;
    },
    registerProperty() {
        debugger;
    },
    rem() {
        debugger;
    },
    s() {
        debugger;
    },
    supports() {
        debugger;
        return true;
    },
    turn() {
        debugger;
    },
    vh() {
        debugger;
    },
    vmax() {
        debugger;
    },
    vmin() {
        debugger;
    },
    vw() {
        debugger;
    }
};
qxVm.rename(CSS, 'CSS');

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [
        'Hz', 'Q', 'ch', 'cm', 'deg', 'dpcm', 'dpi', 'dppx', 'em', 'escape', 'ex', 'fr', 'grad', 'in', 'kHz', 'mm', 'ms', 'number', 'pc', 'percent', 'pt',
        'px', 'rad', 'registerProperty', 'rem', 's', 'supports', 'turn', 'vh', 'vmax', 'vmin', 'vw'
    ];

    qxVm.safe_Objattribute(CSS, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute, true);
})();

