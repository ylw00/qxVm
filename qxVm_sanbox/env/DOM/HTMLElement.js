HTMLElement = function HTMLElement(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLElement);

; (function () {
    const $cssstyle_attribute = [
        "accentColor", "additiveSymbols", "alignContent", "alignItems", "alignSelf", "alignmentBaseline", "all", "animation", "animationDelay", "animationDirection",
        "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "appRegion",
        "appearance", "ascentOverride", "aspectRatio", "backdropFilter", "backfaceVisibility", "background", "backgroundAttachment", "backgroundBlendMode",
        "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundPositionX", "backgroundPositionY",
        "backgroundRepeat", "backgroundRepeatX", "backgroundRepeatY", "backgroundSize", "baselineShift", "blockSize", "border", "borderBlock", "borderBlockColor",
        "borderBlockEnd", "borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth", "borderBlockStart", "borderBlockStartColor", "borderBlockStartStyle",
        "borderBlockStartWidth", "borderBlockStyle", "borderBlockWidth", "borderBottom", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius",
        "borderBottomStyle", "borderBottomWidth", "borderCollapse", "borderColor", "borderEndEndRadius", "borderEndStartRadius", "borderImage", "borderImageOutset",
        "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderInline", "borderInlineColor", "borderInlineEnd",
        "borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth", "borderInlineStart", "borderInlineStartColor", "borderInlineStartStyle",
        "borderInlineStartWidth", "borderInlineStyle", "borderInlineWidth", "borderLeft", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius",
        "borderRight", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderSpacing", "borderStartEndRadius", "borderStartStartRadius",
        "borderStyle", "borderTop", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom",
        "boxShadow", "boxSizing", "breakAfter", "breakBefore", "breakInside", "bufferedRendering", "captionSide", "caretColor", "clear", "clip", "clipPath",
        "clipRule", "color", "colorInterpolation", "colorInterpolationFilters", "colorRendering", "colorScheme", "columnCount", "columnFill", "columnGap",
        "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "columns", "contain", "containIntrinsicBlockSize",
        "containIntrinsicHeight", "containIntrinsicInlineSize", "containIntrinsicSize", "containIntrinsicWidth", "content", "contentVisibility", "counterIncrement",
        "counterReset", "counterSet", "cursor", "cx", "cy", "d", "descentOverride", "direction", "display", "dominantBaseline", "emptyCells", "fallback", "fill",
        "fillOpacity", "fillRule", "filter", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "float", "floodColor",
        "floodOpacity", "font", "fontDisplay", "fontFamily", "fontFeatureSettings", "fontKerning", "fontOpticalSizing", "fontSize", "fontStretch", "fontStyle",
        "fontSynthesis", "fontSynthesisSmallCaps", "fontSynthesisStyle", "fontSynthesisWeight", "fontVariant", "fontVariantCaps", "fontVariantEastAsian",
        "fontVariantLigatures", "fontVariantNumeric", "fontVariationSettings", "fontWeight", "forcedColorAdjust", "gap", "grid", "gridArea", "gridAutoColumns",
        "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap",
        "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "height", "hyphens", "imageOrientation", "imageRendering",
        "inherits", "initialValue", "inlineSize", "inset", "insetBlock", "insetBlockEnd", "insetBlockStart", "insetInline", "insetInlineEnd", "insetInlineStart",
        "isolation", "justifyContent", "justifyItems", "justifySelf", "left", "letterSpacing", "lightingColor", "lineBreak", "lineGapOverride", "lineHeight",
        "listStyle", "listStyleImage", "listStylePosition", "listStyleType", "margin", "marginBlock", "marginBlockEnd", "marginBlockStart", "marginBottom",
        "marginInline", "marginInlineEnd", "marginInlineStart", "marginLeft", "marginRight", "marginTop", "marker", "markerEnd", "markerMid", "markerStart",
        "mask", "maskType", "maxBlockSize", "maxHeight", "maxInlineSize", "maxWidth", "maxZoom", "minBlockSize", "minHeight", "minInlineSize", "minWidth", "minZoom",
        "mixBlendMode", "negative", "objectFit", "objectPosition", "offset", "offsetDistance", "offsetPath", "offsetRotate", "opacity", "order", "orientation",
        "orphans", "outline", "outlineColor", "outlineOffset", "outlineStyle", "outlineWidth", "overflow", "overflowAnchor", "overflowClipMargin", "overflowWrap",
        "overflowX", "overflowY", "overscrollBehavior", "overscrollBehaviorBlock", "overscrollBehaviorInline", "overscrollBehaviorX", "overscrollBehaviorY",
        "pad", "padding", "paddingBlock", "paddingBlockEnd", "paddingBlockStart", "paddingBottom", "paddingInline", "paddingInlineEnd", "paddingInlineStart",
        "paddingLeft", "paddingRight", "paddingTop", "page", "pageBreakAfter", "pageBreakBefore", "pageBreakInside", "pageOrientation", "paintOrder", "perspective",
        "perspectiveOrigin", "placeContent", "placeItems", "placeSelf", "pointerEvents", "position", "prefix", "quotes", "r", "range", "resize", "right", "rowGap",
        "rubyPosition", "rx", "ry", "scrollBehavior", "scrollMargin", "scrollMarginBlock", "scrollMarginBlockEnd", "scrollMarginBlockStart", "scrollMarginBottom",
        "scrollMarginInline", "scrollMarginInlineEnd", "scrollMarginInlineStart", "scrollMarginLeft", "scrollMarginRight", "scrollMarginTop", "scrollPadding",
        "scrollPaddingBlock", "scrollPaddingBlockEnd", "scrollPaddingBlockStart", "scrollPaddingBottom", "scrollPaddingInline", "scrollPaddingInlineEnd",
        "scrollPaddingInlineStart", "scrollPaddingLeft", "scrollPaddingRight", "scrollPaddingTop", "scrollSnapAlign", "scrollSnapStop", "scrollSnapType",
        "scrollbarGutter", "shapeImageThreshold", "shapeMargin", "shapeOutside", "shapeRendering", "size", "sizeAdjust", "speak", "speakAs", "src", "stopColor",
        "stopOpacity", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth",
        "suffix", "symbols", "syntax", "system", "tabSize", "tableLayout", "textAlign", "textAlignLast", "textAnchor", "textCombineUpright", "textDecoration",
        "textDecorationColor", "textDecorationLine", "textDecorationSkipInk", "textDecorationStyle", "textDecorationThickness", "textIndent", "textOrientation",
        "textOverflow", "textRendering", "textShadow", "textSizeAdjust", "textTransform", "textUnderlineOffset", "textUnderlinePosition", "top", "touchAction",
        "transform", "transformBox", "transformOrigin", "transformStyle", "transition", "transitionDelay", "transitionDuration", "transitionProperty",
        "transitionTimingFunction", "unicodeBidi", "unicodeRange", "userSelect", "userZoom", "vectorEffect", "verticalAlign", "visibility", "webkitAlignContent",
        "webkitAlignItems", "webkitAlignSelf", "webkitAnimation", "webkitAnimationDelay", "webkitAnimationDirection", "webkitAnimationDuration",
        "webkitAnimationFillMode", "webkitAnimationIterationCount", "webkitAnimationName", "webkitAnimationPlayState", "webkitAnimationTimingFunction",
        "webkitAppRegion", "webkitAppearance", "webkitBackfaceVisibility", "webkitBackgroundClip", "webkitBackgroundOrigin", "webkitBackgroundSize",
        "webkitBorderAfter", "webkitBorderAfterColor", "webkitBorderAfterStyle", "webkitBorderAfterWidth", "webkitBorderBefore", "webkitBorderBeforeColor",
        "webkitBorderBeforeStyle", "webkitBorderBeforeWidth", "webkitBorderBottomLeftRadius", "webkitBorderBottomRightRadius", "webkitBorderEnd",
        "webkitBorderEndColor", "webkitBorderEndStyle", "webkitBorderEndWidth", "webkitBorderHorizontalSpacing", "webkitBorderImage", "webkitBorderRadius",
        "webkitBorderStart", "webkitBorderStartColor", "webkitBorderStartStyle", "webkitBorderStartWidth", "webkitBorderTopLeftRadius",
        "webkitBorderTopRightRadius", "webkitBorderVerticalSpacing", "webkitBoxAlign", "webkitBoxDecorationBreak", "webkitBoxDirection", "webkitBoxFlex",
        "webkitBoxOrdinalGroup", "webkitBoxOrient", "webkitBoxPack", "webkitBoxReflect", "webkitBoxShadow", "webkitBoxSizing", "webkitClipPath",
        "webkitColumnBreakAfter", "webkitColumnBreakBefore", "webkitColumnBreakInside", "webkitColumnCount", "webkitColumnGap", "webkitColumnRule",
        "webkitColumnRuleColor", "webkitColumnRuleStyle", "webkitColumnRuleWidth", "webkitColumnSpan", "webkitColumnWidth", "webkitColumns", "webkitFilter",
        "webkitFlex", "webkitFlexBasis", "webkitFlexDirection", "webkitFlexFlow", "webkitFlexGrow", "webkitFlexShrink", "webkitFlexWrap",
        "webkitFontFeatureSettings", "webkitFontSmoothing", "webkitHighlight", "webkitHyphenateCharacter", "webkitJustifyContent", "webkitLineBreak",
        "webkitLineClamp", "webkitLocale", "webkitLogicalHeight", "webkitLogicalWidth", "webkitMarginAfter", "webkitMarginBefore", "webkitMarginEnd",
        "webkitMarginStart", "webkitMask", "webkitMaskBoxImage", "webkitMaskBoxImageOutset", "webkitMaskBoxImageRepeat", "webkitMaskBoxImageSlice",
        "webkitMaskBoxImageSource", "webkitMaskBoxImageWidth", "webkitMaskClip", "webkitMaskComposite", "webkitMaskImage", "webkitMaskOrigin",
        "webkitMaskPosition", "webkitMaskPositionX", "webkitMaskPositionY", "webkitMaskRepeat", "webkitMaskRepeatX", "webkitMaskRepeatY", "webkitMaskSize",
        "webkitMaxLogicalHeight", "webkitMaxLogicalWidth", "webkitMinLogicalHeight", "webkitMinLogicalWidth", "webkitOpacity", "webkitOrder",
        "webkitPaddingAfter", "webkitPaddingBefore", "webkitPaddingEnd", "webkitPaddingStart", "webkitPerspective", "webkitPerspectiveOrigin",
        "webkitPerspectiveOriginX", "webkitPerspectiveOriginY", "webkitPrintColorAdjust", "webkitRtlOrdering", "webkitRubyPosition",
        "webkitShapeImageThreshold", "webkitShapeMargin", "webkitShapeOutside", "webkitTapHighlightColor", "webkitTextCombine", "webkitTextDecorationsInEffect",
        "webkitTextEmphasis", "webkitTextEmphasisColor", "webkitTextEmphasisPosition", "webkitTextEmphasisStyle", "webkitTextFillColor",
        "webkitTextOrientation", "webkitTextSecurity", "webkitTextSizeAdjust", "webkitTextStroke", "webkitTextStrokeColor", "webkitTextStrokeWidth",
        "webkitTransform", "webkitTransformOrigin", "webkitTransformOriginX", "webkitTransformOriginY", "webkitTransformOriginZ", "webkitTransformStyle",
        "webkitTransition", "webkitTransitionDelay", "webkitTransitionDuration", "webkitTransitionProperty", "webkitTransitionTimingFunction", "webkitUserDrag",
        "webkitUserModify", "webkitUserSelect", "webkitWritingMode", "whiteSpace", "widows", "width", "willChange", "wordBreak", "wordSpacing", "wordWrap",
        "writingMode", "x", "y", "zIndex", "zoom"
    ]

    const $safe_get_attribute = [
        'accessKey', 'autocapitalize', 'autofocus', 'contentEditable', 'dataset', 'dir', 'draggable', 'enterKeyHint', 'hidden', 'innerText',
        'inputMode', 'isContentEditable', 'lang', 'nonce', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'onabort',
        'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay',
        'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag',
        'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror',
        'onfocus', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata',
        'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup',
        'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave',
        'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset',
        'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart',
        'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun',
        'ontransitionstart', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart',
        'onwebkittransitionend', 'onwheel', 'outerText', 'spellcheck', 'style', 'tabIndex', 'title', 'translate', 'virtualKeyboardPolicy'
    ];
    const $safe_set_attribute = [
        'accessKey', 'autocapitalize', 'autofocus', 'contentEditable', 'dir', 'draggable', 'enterKeyHint', 'hidden', 'innerText', 'inputMode',
        'lang', 'nonce', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur',
        'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut',
        'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
        'onended', 'onerror', 'onfocus', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup',
        'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover',
        'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave',
        'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize',
        'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
        'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart',
        'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkittransitionend',
        'onwheel', 'outerText', 'spellcheck', 'style', 'tabIndex', 'title', 'translate', 'virtualKeyboardPolicy'
    ];
    const $safe_func_attribute = ['attachInternals', 'blur', 'click', 'focus'];

    HTMLElement.prototype = {
        get accessKey() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).accessKey, "");
        },
        set accessKey(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).accessKey = value + "";
        },
        attachInternals() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get autocapitalize() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).autocapitalize, "");
        },
        set autocapitalize(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).autocapitalize = value + "";
        },
        get autofocus() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).autofocus, false);
        },
        set autofocus(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).autofocus = value ? true : false;
        },
        blur() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        click() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get contentEditable() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).contentEditable, "inherit");
        },
        set contentEditable(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (['true', 'false', 'plaintext-only', 'inherit'].index(value + "") != -1) {
                throw new DOMException(`Failed to set the 'contentEditable' property on 'HTMLElement': The value provided ('111') is not one of 'true', 'false', 'plaintext-only', or 'inherit'.`)
            }
            qxVm.memory.private_data.get(this).contentEditable = value + "";
        },
        get dataset() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).dataset;
            if (!ele) {
                ele = new DOMStringMap();
                qxVm.memory.private_data.get(this).dataset = ele;
            }
            return ele;
        },
        get dir() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).dir, "");
        },
        set dir(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).dir = value + "";
        },
        get draggable() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).draggable, false);
        },
        set draggable(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).draggable = value ? true : false;
        },
        get enterKeyHint() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).enterKeyHint, "");
        },
        set enterKeyHint(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).enterKeyHint = value + "";
        },
        focus() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get hidden() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hidden, false);
        },
        set hidden(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).hidden = value ? true : false;
        },
        get innerText() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).innerText, "");
        },
        set innerText(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).innerText = value + "";
        },
        get inputMode() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).inputMode, "");
        },
        set inputMode(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).inputMode = value + "";
        },
        get isContentEditable() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).isContentEditable, false);
        },
        get lang() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).lang, "");
        },
        set lang(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).lang = value + "";
        },
        get nonce() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).nonce, "");
        },
        set nonce(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).nonce = value + "";
        },
        get offsetHeight() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get offsetLeft() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get offsetParent() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        get offsetTop() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get offsetWidth() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get onabort() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onabort, null);
        },
        set onabort(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onabort = value + "";
        },
        get onanimationend() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onanimationend, null);
        },
        set onanimationend(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onanimationend = value + "";
        },
        get onanimationiteration() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onanimationiteration, null);
        },
        set onanimationiteration(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onanimationiteration = value + "";
        },
        get onanimationstart() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onanimationstart, null);
        },
        set onanimationstart(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onanimationstart = value + "";
        },
        get onauxclick() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onauxclick, null);
        },
        set onauxclick(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onauxclick = value + "";
        },
        get onbeforexrselect() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbeforexrselect, null);
        },
        set onbeforexrselect(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbeforexrselect = value + "";
        },
        get onblur() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onblur, null);
        },
        set onblur(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onblur = value + "";
        },
        get oncancel() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncancel, null);
        },
        set oncancel(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncancel = value + "";
        },
        get oncanplay() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncanplay, null);
        },
        set oncanplay(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncanplay = value + "";
        },
        get oncanplaythrough() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncanplaythrough, null);
        },
        set oncanplaythrough(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncanplaythrough = value + "";
        },
        get onchange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onchange, null);
        },
        set onchange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onchange = value + "";
        },
        get onclick() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onclick, null);
        },
        set onclick(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onclick = value + "";
        },
        get onclose() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onclose, null);
        },
        set onclose(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onclose = value + "";
        },
        get oncontextmenu() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncontextmenu, null);
        },
        set oncontextmenu(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncontextmenu = value + "";
        },
        get oncopy() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncopy, null);
        },
        set oncopy(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncopy = value + "";
        },
        get oncuechange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncuechange, null);
        },
        set oncuechange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncuechange = value + "";
        },
        get oncut() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncut, null);
        },
        set oncut(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncut = value + "";
        },
        get ondblclick() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondblclick, null);
        },
        set ondblclick(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondblclick = value + "";
        },
        get ondrag() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondrag, null);
        },
        set ondrag(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondrag = value + "";
        },
        get ondragend() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragend, null);
        },
        set ondragend(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragend = value + "";
        },
        get ondragenter() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragenter, null);
        },
        set ondragenter(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragenter = value + "";
        },
        get ondragleave() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragleave, null);
        },
        set ondragleave(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragleave = value + "";
        },
        get ondragover() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragover, null);
        },
        set ondragover(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragover = value + "";
        },
        get ondragstart() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondragstart, null);
        },
        set ondragstart(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondragstart = value + "";
        },
        get ondrop() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondrop, null);
        },
        set ondrop(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondrop = value + "";
        },
        get ondurationchange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondurationchange, null);
        },
        set ondurationchange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondurationchange = value + "";
        },
        get onemptied() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onemptied, null);
        },
        set onemptied(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onemptied = value + "";
        },
        get onended() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onended, null);
        },
        set onended(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onended = value + "";
        },
        get onerror() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onfocus, null);
        },
        set onfocus(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onformdata() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onformdata, null);
        },
        set onformdata(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onformdata = value + "";
        },
        get ongotpointercapture() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ongotpointercapture, null);
        },
        set ongotpointercapture(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ongotpointercapture = value + "";
        },
        get oninput() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oninput, null);
        },
        set oninput(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oninput = value + "";
        },
        get oninvalid() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oninvalid, null);
        },
        set oninvalid(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oninvalid = value + "";
        },
        get onkeydown() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onkeydown, null);
        },
        set onkeydown(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onkeydown = value + "";
        },
        get onkeypress() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onkeypress, null);
        },
        set onkeypress(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onkeypress = value + "";
        },
        get onkeyup() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onkeyup, null);
        },
        set onkeyup(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onkeyup = value + "";
        },
        get onload() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onload, null);
        },
        set onload(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadeddata() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadeddata, null);
        },
        set onloadeddata(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadeddata = value + "";
        },
        get onloadedmetadata() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadedmetadata, null);
        },
        set onloadedmetadata(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadedmetadata = value + "";
        },
        get onloadstart() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onloadstart, null);
        },
        set onloadstart(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onlostpointercapture() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onlostpointercapture, null);
        },
        set onlostpointercapture(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onlostpointercapture = value + "";
        },
        get onmousedown() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmousedown, null);
        },
        set onmousedown(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmousedown = value + "";
        },
        get onmousemove() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmousemove, null);
        },
        set onmousemove(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmousemove = value + "";
        },
        get onmouseout() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmouseout, null);
        },
        set onmouseout(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmouseout = value + "";
        },
        get onmouseover() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmouseover, null);
        },
        set onmouseover(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmouseover = value + "";
        },
        get onmouseup() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmouseup, null);
        },
        set onmouseup(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmouseup = value + "";
        },
        get onmousewheel() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmousewheel, null);
        },
        set onmousewheel(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmousewheel = value + "";
        },
        get onpaste() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpaste, null);
        },
        set onpaste(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpaste = value + "";
        },
        get onpause() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpause, null);
        },
        set onpause(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpause = value + "";
        },
        get onplay() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onplay, null);
        },
        set onplay(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onplay = value + "";
        },
        get onplaying() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onplaying, null);
        },
        set onplaying(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onplaying = value + "";
        },
        get onpointercancel() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointercancel, null);
        },
        set onpointercancel(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointercancel = value + "";
        },
        get onpointerdown() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerdown, null);
        },
        set onpointerdown(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerdown = value + "";
        },
        get onpointerenter() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerenter, null);
        },
        set onpointerenter(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerenter = value + "";
        },
        get onpointerleave() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerleave, null);
        },
        set onpointerleave(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerleave = value + "";
        },
        get onpointermove() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointermove, null);
        },
        set onpointermove(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointermove = value + "";
        },
        get onpointerout() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerout, null);
        },
        set onpointerout(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerout = value + "";
        },
        get onpointerover() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerover, null);
        },
        set onpointerover(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerover = value + "";
        },
        get onpointerrawupdate() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerrawupdate, null);
        },
        set onpointerrawupdate(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerrawupdate = value + "";
        },
        get onpointerup() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onpointerup, null);
        },
        set onpointerup(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onpointerup = value + "";
        },
        get onprogress() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onprogress, null);
        },
        set onprogress(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onprogress = value + "";
        },
        get onratechange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onratechange, null);
        },
        set onratechange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onratechange = value + "";
        },
        get onreset() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onreset, null);
        },
        set onreset(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onreset = value + "";
        },
        get onresize() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onresize, null);
        },
        set onresize(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onscroll, null);
        },
        set onscroll(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onsecuritypolicyviolation() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsecuritypolicyviolation, null);
        },
        set onsecuritypolicyviolation(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsecuritypolicyviolation = value + "";
        },
        get onseeked() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onseeked, null);
        },
        set onseeked(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onseeked = value + "";
        },
        get onseeking() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onseeking, null);
        },
        set onseeking(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onseeking = value + "";
        },
        get onselect() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onselect, null);
        },
        set onselect(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onselect = value + "";
        },
        get onselectionchange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onselectionchange, null);
        },
        set onselectionchange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onselectionchange = value + "";
        },
        get onselectstart() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onselectstart, null);
        },
        set onselectstart(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onselectstart = value + "";
        },
        get onslotchange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onslotchange, null);
        },
        set onslotchange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onslotchange = value + "";
        },
        get onstalled() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstalled, null);
        },
        set onstalled(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstalled = value + "";
        },
        get onsubmit() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsubmit, null);
        },
        set onsubmit(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsubmit = value + "";
        },
        get onsuspend() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsuspend, null);
        },
        set onsuspend(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsuspend = value + "";
        },
        get ontimeupdate() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontimeupdate, null);
        },
        set ontimeupdate(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontimeupdate = value + "";
        },
        get ontoggle() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontoggle, null);
        },
        set ontoggle(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontoggle = value + "";
        },
        get ontransitioncancel() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitioncancel, null);
        },
        set ontransitioncancel(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitioncancel = value + "";
        },
        get ontransitionend() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitionend, null);
        },
        set ontransitionend(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitionend = value + "";
        },
        get ontransitionrun() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitionrun, null);
        },
        set ontransitionrun(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitionrun = value + "";
        },
        get ontransitionstart() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ontransitionstart, null);
        },
        set ontransitionstart(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ontransitionstart = value + "";
        },
        get onvolumechange() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onvolumechange, null);
        },
        set onvolumechange(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onvolumechange = value + "";
        },
        get onwaiting() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwaiting, null);
        },
        set onwaiting(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwaiting = value + "";
        },
        get onwebkitanimationend() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkitanimationend, null);
        },
        set onwebkitanimationend(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkitanimationend = value + "";
        },
        get onwebkitanimationiteration() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkitanimationiteration, null);
        },
        set onwebkitanimationiteration(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkitanimationiteration = value + "";
        },
        get onwebkitanimationstart() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkitanimationstart, null);
        },
        set onwebkitanimationstart(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkitanimationstart = value + "";
        },
        get onwebkittransitionend() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwebkittransitionend, null);
        },
        set onwebkittransitionend(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwebkittransitionend = value + "";
        },
        get onwheel() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onwheel, null);
        },
        set onwheel(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onwheel = value + "";
        },
        get outerText() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).outerText, null);
        },
        set outerText(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).outerText = value + "";
        },
        get spellcheck() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).spellcheck, true);
        },
        set spellcheck(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).spellcheck = value ? true : false;
        },
        get style() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this);
            if (!ele) {
                ele = new CSSStyleDeclaration(qxVm.memory.$createObj_key);
                for (key of $cssstyle_attribute) {
                    ele[key] = "";
                };
                qxVm.memory.private_data.set(this, {
                    style:ele
                })
                qxVm.memory.private_data.get(this).style = ele;
            }else{
                ele = ele.style;
            }
            return ele;
        },
        set style(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).style = value;
        },
        get tabIndex() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).tabIndex, -1);
        },
        set tabIndex(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).tabIndex = value ? 1 : -1;
        },
        get title() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).title, "");
        },
        set title(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).title = value + "";
        },
        get translate() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).translate, true);
        },
        set translate(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).translate = value ? true : false;
        },
        get virtualKeyboardPolicy() {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).virtualKeyboardPolicy, "");
        },
        set virtualKeyboardPolicy(value) {
            debugger;
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).virtualKeyboardPolicy = value + "";
        },
    }
    qxVm.rename(HTMLElement.prototype, "HTMLElement");
    qxVm.safeDescriptor_addConstructor(HTMLElement);
    qxVm.safe_Objattribute(HTMLElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
    Object.setPrototypeOf(HTMLElement, Element);
})();