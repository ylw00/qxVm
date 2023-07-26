CSS = {
    Hz() {
    },
    Q() {
    },
    ch() {
    },
    cm() {
    },
    deg() {
    },
    dpcm() {
    },
    dpi() {
    },
    dppx() {
    },
    em() {
    },
    escape() {
    },
    ex() {
    },
    fr() {
    },
    grad() {
    },
    in() {
    },
    kHz() {
    },
    mm() {
    },
    ms() {
    },
    number() {
    },
    pc() {
    },
    percent() {
    },
    pt() {
    },
    px() {
    },
    rad() {
    },
    registerProperty() {
    },
    rem() {
    },
    s() {
    },
    supports() {
        return true;
    },
    turn() {
    },
    vh() {
    },
    vmax() {
    },
    vmin() {
    },
    vw() {
    }
};
lwVm.rename(CSS, 'CSS');

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [
        'Hz', 'Q', 'ch', 'cm', 'deg', 'dpcm', 'dpi', 'dppx', 'em', 'escape', 'ex', 'fr', 'grad', 'in', 'kHz', 'mm', 'ms', 'number', 'pc', 'percent', 'pt',
        'px', 'rad', 'registerProperty', 'rem', 's', 'supports', 'turn', 'vh', 'vmax', 'vmin', 'vw'
    ];

    lwVm.safe_Objattribute(CSS, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute, true);
})();

