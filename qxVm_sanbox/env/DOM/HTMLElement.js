HTMLElement = function HTMLElement(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLElement);

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
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).accessKey, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'accessKey', arguments, result);
            return result;
        },
        set accessKey(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'accessKey', arguments);
            lwVm.memory.private_data.get(this).accessKey = value + "";
        },
        attachInternals() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLElement', 'attachInternals', arguments, result);
            return result;
        },
        get autocapitalize() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).autocapitalize, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'autocapitalize', arguments, result);
            return result;
        },
        set autocapitalize(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'autocapitalize', arguments);
            lwVm.memory.private_data.get(this).autocapitalize = value + "";
        },
        get autofocus() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).autofocus, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'autofocus', arguments, result);
            return result;
        },
        set autofocus(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'autofocus', arguments);
            lwVm.memory.private_data.get(this).autofocus = value ? true : false;
        },
        blur() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLElement', 'blur', arguments, result);
            return result;
        },
        click() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLElement', 'click', arguments, result);
            return result;
        },
        get contentEditable() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).contentEditable, "inherit");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'contentEditable', arguments, result);
            return result;
        },
        set contentEditable(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (['true', 'false', 'plaintext-only', 'inherit'].index(value + "") != -1) {
                throw new DOMException(`Failed to set the 'contentEditable' property on 'HTMLElement': The value provided ('111') is not one of 'true', 'false', 'plaintext-only', or 'inherit'.`)
            }
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'contentEditable', arguments);
            lwVm.memory.private_data.get(this).contentEditable = value + "";
        },
        get dataset() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).dataset;
            if (!ele) {
                ele = new DOMStringMap();
                lwVm.memory.private_data.get(this).dataset = ele;
            }
            let result = ele;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLElement', 'if ', arguments, result);
            return result;
        },
        get dir() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).dir, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'dir', arguments, result);
            return result;
        },
        set dir(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'dir', arguments);
            lwVm.memory.private_data.get(this).dir = value + "";
        },
        get draggable() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).draggable, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'draggable', arguments, result);
            return result;
        },
        set draggable(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'draggable', arguments);
            lwVm.memory.private_data.get(this).draggable = value ? true : false;
        },
        get enterKeyHint() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).enterKeyHint, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'enterKeyHint', arguments, result);
            return result;
        },
        set enterKeyHint(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'enterKeyHint', arguments);
            lwVm.memory.private_data.get(this).enterKeyHint = value + "";
        },
        focus() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLElement', 'focus', arguments, result);
            return result;
        },
        get hidden() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hidden, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'hidden', arguments, result);
            return result;
        },
        set hidden(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'hidden', arguments);
            lwVm.memory.private_data.get(this).hidden = value ? true : false;
        },
        get innerText() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).innerText, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'innerText', arguments, result);
            return result;
        },
        set innerText(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'innerText', arguments);
            lwVm.memory.private_data.get(this).innerText = value + "";
        },
        get inputMode() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).inputMode, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'inputMode', arguments, result);
            return result;
        },
        set inputMode(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'inputMode', arguments);
            lwVm.memory.private_data.get(this).inputMode = value + "";
        },
        get isContentEditable() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).isContentEditable, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'isContentEditable', arguments, result);
            return result;
        },
        get lang() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).lang, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'lang', arguments, result);
            return result;
        },
        set lang(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'lang', arguments);
            lwVm.memory.private_data.get(this).lang = value + "";
        },
        get nonce() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).nonce, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'nonce', arguments, result);
            return result;
        },
        set nonce(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'nonce', arguments);
            lwVm.memory.private_data.get(this).nonce = value + "";
        },
        get offsetHeight() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'offsetHeight', arguments, result);
            return result;
        },
        get offsetLeft() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'offsetLeft', arguments, result);
            return result;
        },
        get offsetParent() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'offsetParent', arguments, result);
            return result;
        },
        get offsetTop() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'offsetTop', arguments, result);
            return result;
        },
        get offsetWidth() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'offsetWidth', arguments, result);
            return result;
        },
        get onabort() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onabort, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onabort', arguments);
            lwVm.memory.private_data.get(this).onabort = value + "";
        },
        get onanimationend() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onanimationend, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onanimationend', arguments, result);
            return result;
        },
        set onanimationend(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onanimationend', arguments);
            lwVm.memory.private_data.get(this).onanimationend = value + "";
        },
        get onanimationiteration() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onanimationiteration, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onanimationiteration', arguments, result);
            return result;
        },
        set onanimationiteration(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onanimationiteration', arguments);
            lwVm.memory.private_data.get(this).onanimationiteration = value + "";
        },
        get onanimationstart() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onanimationstart, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onanimationstart', arguments, result);
            return result;
        },
        set onanimationstart(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onanimationstart', arguments);
            lwVm.memory.private_data.get(this).onanimationstart = value + "";
        },
        get onauxclick() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onauxclick, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onauxclick', arguments, result);
            return result;
        },
        set onauxclick(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onauxclick', arguments);
            lwVm.memory.private_data.get(this).onauxclick = value + "";
        },
        get onbeforexrselect() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onbeforexrselect, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onbeforexrselect', arguments, result);
            return result;
        },
        set onbeforexrselect(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onbeforexrselect', arguments);
            lwVm.memory.private_data.get(this).onbeforexrselect = value + "";
        },
        get onblur() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onblur, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onblur', arguments, result);
            return result;
        },
        set onblur(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onblur', arguments);
            lwVm.memory.private_data.get(this).onblur = value + "";
        },
        get oncancel() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncancel, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncancel', arguments, result);
            return result;
        },
        set oncancel(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncancel', arguments);
            lwVm.memory.private_data.get(this).oncancel = value + "";
        },
        get oncanplay() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncanplay, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncanplay', arguments, result);
            return result;
        },
        set oncanplay(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncanplay', arguments);
            lwVm.memory.private_data.get(this).oncanplay = value + "";
        },
        get oncanplaythrough() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncanplaythrough, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncanplaythrough', arguments, result);
            return result;
        },
        set oncanplaythrough(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncanplaythrough', arguments);
            lwVm.memory.private_data.get(this).oncanplaythrough = value + "";
        },
        get onchange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onchange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onchange', arguments);
            lwVm.memory.private_data.get(this).onchange = value + "";
        },
        get onclick() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onclick, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onclick', arguments, result);
            return result;
        },
        set onclick(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onclick', arguments);
            lwVm.memory.private_data.get(this).onclick = value + "";
        },
        get onclose() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onclose, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onclose', arguments);
            lwVm.memory.private_data.get(this).onclose = value + "";
        },
        get oncontextmenu() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncontextmenu, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncontextmenu', arguments, result);
            return result;
        },
        set oncontextmenu(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncontextmenu', arguments);
            lwVm.memory.private_data.get(this).oncontextmenu = value + "";
        },
        get oncopy() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncopy, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncopy', arguments, result);
            return result;
        },
        set oncopy(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncopy', arguments);
            lwVm.memory.private_data.get(this).oncopy = value + "";
        },
        get oncuechange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncuechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncuechange', arguments, result);
            return result;
        },
        set oncuechange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncuechange', arguments);
            lwVm.memory.private_data.get(this).oncuechange = value + "";
        },
        get oncut() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncut, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oncut', arguments, result);
            return result;
        },
        set oncut(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oncut', arguments);
            lwVm.memory.private_data.get(this).oncut = value + "";
        },
        get ondblclick() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondblclick, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondblclick', arguments, result);
            return result;
        },
        set ondblclick(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondblclick', arguments);
            lwVm.memory.private_data.get(this).ondblclick = value + "";
        },
        get ondrag() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondrag, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondrag', arguments, result);
            return result;
        },
        set ondrag(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondrag', arguments);
            lwVm.memory.private_data.get(this).ondrag = value + "";
        },
        get ondragend() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragend, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondragend', arguments, result);
            return result;
        },
        set ondragend(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondragend', arguments);
            lwVm.memory.private_data.get(this).ondragend = value + "";
        },
        get ondragenter() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragenter, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondragenter', arguments, result);
            return result;
        },
        set ondragenter(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondragenter', arguments);
            lwVm.memory.private_data.get(this).ondragenter = value + "";
        },
        get ondragleave() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragleave, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondragleave', arguments, result);
            return result;
        },
        set ondragleave(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondragleave', arguments);
            lwVm.memory.private_data.get(this).ondragleave = value + "";
        },
        get ondragover() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragover, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondragover', arguments, result);
            return result;
        },
        set ondragover(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondragover', arguments);
            lwVm.memory.private_data.get(this).ondragover = value + "";
        },
        get ondragstart() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondragstart, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondragstart', arguments, result);
            return result;
        },
        set ondragstart(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondragstart', arguments);
            lwVm.memory.private_data.get(this).ondragstart = value + "";
        },
        get ondrop() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondrop, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondrop', arguments, result);
            return result;
        },
        set ondrop(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondrop', arguments);
            lwVm.memory.private_data.get(this).ondrop = value + "";
        },
        get ondurationchange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondurationchange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ondurationchange', arguments, result);
            return result;
        },
        set ondurationchange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ondurationchange', arguments);
            lwVm.memory.private_data.get(this).ondurationchange = value + "";
        },
        get onemptied() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onemptied, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onemptied', arguments, result);
            return result;
        },
        set onemptied(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onemptied', arguments);
            lwVm.memory.private_data.get(this).onemptied = value + "";
        },
        get onended() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onended, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onended', arguments, result);
            return result;
        },
        set onended(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onended', arguments);
            lwVm.memory.private_data.get(this).onended = value + "";
        },
        get onerror() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onfocus, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onfocus', arguments, result);
            return result;
        },
        set onfocus(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onfocus', arguments);
            lwVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onformdata() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onformdata, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onformdata', arguments, result);
            return result;
        },
        set onformdata(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onformdata', arguments);
            lwVm.memory.private_data.get(this).onformdata = value + "";
        },
        get ongotpointercapture() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ongotpointercapture, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ongotpointercapture', arguments, result);
            return result;
        },
        set ongotpointercapture(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ongotpointercapture', arguments);
            lwVm.memory.private_data.get(this).ongotpointercapture = value + "";
        },
        get oninput() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oninput, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oninput', arguments, result);
            return result;
        },
        set oninput(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oninput', arguments);
            lwVm.memory.private_data.get(this).oninput = value + "";
        },
        get oninvalid() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oninvalid, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'oninvalid', arguments, result);
            return result;
        },
        set oninvalid(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'oninvalid', arguments);
            lwVm.memory.private_data.get(this).oninvalid = value + "";
        },
        get onkeydown() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onkeydown, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onkeydown', arguments, result);
            return result;
        },
        set onkeydown(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onkeydown', arguments);
            lwVm.memory.private_data.get(this).onkeydown = value + "";
        },
        get onkeypress() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onkeypress, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onkeypress', arguments, result);
            return result;
        },
        set onkeypress(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onkeypress', arguments);
            lwVm.memory.private_data.get(this).onkeypress = value + "";
        },
        get onkeyup() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onkeyup, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onkeyup', arguments, result);
            return result;
        },
        set onkeyup(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onkeyup', arguments);
            lwVm.memory.private_data.get(this).onkeyup = value + "";
        },
        get onload() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onload, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onload', arguments, result);
            return result;
        },
        set onload(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onload', arguments);
            lwVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadeddata() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onloadeddata, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onloadeddata', arguments, result);
            return result;
        },
        set onloadeddata(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onloadeddata', arguments);
            lwVm.memory.private_data.get(this).onloadeddata = value + "";
        },
        get onloadedmetadata() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onloadedmetadata, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onloadedmetadata', arguments, result);
            return result;
        },
        set onloadedmetadata(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onloadedmetadata', arguments);
            lwVm.memory.private_data.get(this).onloadedmetadata = value + "";
        },
        get onloadstart() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onloadstart, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onloadstart', arguments, result);
            return result;
        },
        set onloadstart(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onloadstart', arguments);
            lwVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onlostpointercapture() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onlostpointercapture, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onlostpointercapture', arguments, result);
            return result;
        },
        set onlostpointercapture(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onlostpointercapture', arguments);
            lwVm.memory.private_data.get(this).onlostpointercapture = value + "";
        },
        get onmousedown() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmousedown, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onmousedown', arguments, result);
            return result;
        },
        set onmousedown(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onmousedown', arguments);
            lwVm.memory.private_data.get(this).onmousedown = value + "";
        },
        get onmousemove() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmousemove, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onmousemove', arguments, result);
            return result;
        },
        set onmousemove(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onmousemove', arguments);
            lwVm.memory.private_data.get(this).onmousemove = value + "";
        },
        get onmouseout() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmouseout, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onmouseout', arguments, result);
            return result;
        },
        set onmouseout(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onmouseout', arguments);
            lwVm.memory.private_data.get(this).onmouseout = value + "";
        },
        get onmouseover() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmouseover, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onmouseover', arguments, result);
            return result;
        },
        set onmouseover(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onmouseover', arguments);
            lwVm.memory.private_data.get(this).onmouseover = value + "";
        },
        get onmouseup() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmouseup, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onmouseup', arguments, result);
            return result;
        },
        set onmouseup(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onmouseup', arguments);
            lwVm.memory.private_data.get(this).onmouseup = value + "";
        },
        get onmousewheel() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmousewheel, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onmousewheel', arguments, result);
            return result;
        },
        set onmousewheel(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onmousewheel', arguments);
            lwVm.memory.private_data.get(this).onmousewheel = value + "";
        },
        get onpaste() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpaste, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpaste', arguments, result);
            return result;
        },
        set onpaste(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpaste', arguments);
            lwVm.memory.private_data.get(this).onpaste = value + "";
        },
        get onpause() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpause, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpause', arguments, result);
            return result;
        },
        set onpause(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpause', arguments);
            lwVm.memory.private_data.get(this).onpause = value + "";
        },
        get onplay() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onplay, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onplay', arguments, result);
            return result;
        },
        set onplay(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onplay', arguments);
            lwVm.memory.private_data.get(this).onplay = value + "";
        },
        get onplaying() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onplaying, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onplaying', arguments, result);
            return result;
        },
        set onplaying(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onplaying', arguments);
            lwVm.memory.private_data.get(this).onplaying = value + "";
        },
        get onpointercancel() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointercancel, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointercancel', arguments, result);
            return result;
        },
        set onpointercancel(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointercancel', arguments);
            lwVm.memory.private_data.get(this).onpointercancel = value + "";
        },
        get onpointerdown() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerdown, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerdown', arguments, result);
            return result;
        },
        set onpointerdown(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerdown', arguments);
            lwVm.memory.private_data.get(this).onpointerdown = value + "";
        },
        get onpointerenter() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerenter, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerenter', arguments, result);
            return result;
        },
        set onpointerenter(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerenter', arguments);
            lwVm.memory.private_data.get(this).onpointerenter = value + "";
        },
        get onpointerleave() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerleave, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerleave', arguments, result);
            return result;
        },
        set onpointerleave(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerleave', arguments);
            lwVm.memory.private_data.get(this).onpointerleave = value + "";
        },
        get onpointermove() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointermove, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointermove', arguments, result);
            return result;
        },
        set onpointermove(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointermove', arguments);
            lwVm.memory.private_data.get(this).onpointermove = value + "";
        },
        get onpointerout() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerout, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerout', arguments, result);
            return result;
        },
        set onpointerout(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerout', arguments);
            lwVm.memory.private_data.get(this).onpointerout = value + "";
        },
        get onpointerover() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerover, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerover', arguments, result);
            return result;
        },
        set onpointerover(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerover', arguments);
            lwVm.memory.private_data.get(this).onpointerover = value + "";
        },
        get onpointerrawupdate() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerrawupdate, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerrawupdate', arguments, result);
            return result;
        },
        set onpointerrawupdate(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerrawupdate', arguments);
            lwVm.memory.private_data.get(this).onpointerrawupdate = value + "";
        },
        get onpointerup() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onpointerup, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onpointerup', arguments, result);
            return result;
        },
        set onpointerup(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onpointerup', arguments);
            lwVm.memory.private_data.get(this).onpointerup = value + "";
        },
        get onprogress() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onprogress, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onprogress', arguments, result);
            return result;
        },
        set onprogress(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onprogress', arguments);
            lwVm.memory.private_data.get(this).onprogress = value + "";
        },
        get onratechange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onratechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onratechange', arguments, result);
            return result;
        },
        set onratechange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onratechange', arguments);
            lwVm.memory.private_data.get(this).onratechange = value + "";
        },
        get onreset() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onreset, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onreset', arguments, result);
            return result;
        },
        set onreset(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onreset', arguments);
            lwVm.memory.private_data.get(this).onreset = value + "";
        },
        get onresize() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onresize, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onresize', arguments);
            lwVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onscroll, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onscroll', arguments);
            lwVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onsecuritypolicyviolation() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsecuritypolicyviolation, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onsecuritypolicyviolation', arguments, result);
            return result;
        },
        set onsecuritypolicyviolation(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onsecuritypolicyviolation', arguments);
            lwVm.memory.private_data.get(this).onsecuritypolicyviolation = value + "";
        },
        get onseeked() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onseeked, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onseeked', arguments, result);
            return result;
        },
        set onseeked(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onseeked', arguments);
            lwVm.memory.private_data.get(this).onseeked = value + "";
        },
        get onseeking() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onseeking, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onseeking', arguments, result);
            return result;
        },
        set onseeking(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onseeking', arguments);
            lwVm.memory.private_data.get(this).onseeking = value + "";
        },
        get onselect() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onselect, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onselect', arguments, result);
            return result;
        },
        set onselect(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onselect', arguments);
            lwVm.memory.private_data.get(this).onselect = value + "";
        },
        get onselectionchange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onselectionchange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onselectionchange', arguments, result);
            return result;
        },
        set onselectionchange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onselectionchange', arguments);
            lwVm.memory.private_data.get(this).onselectionchange = value + "";
        },
        get onselectstart() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onselectstart, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onselectstart', arguments, result);
            return result;
        },
        set onselectstart(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onselectstart', arguments);
            lwVm.memory.private_data.get(this).onselectstart = value + "";
        },
        get onslotchange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onslotchange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onslotchange', arguments, result);
            return result;
        },
        set onslotchange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onslotchange', arguments);
            lwVm.memory.private_data.get(this).onslotchange = value + "";
        },
        get onstalled() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onstalled, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onstalled', arguments, result);
            return result;
        },
        set onstalled(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onstalled', arguments);
            lwVm.memory.private_data.get(this).onstalled = value + "";
        },
        get onsubmit() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsubmit, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onsubmit', arguments, result);
            return result;
        },
        set onsubmit(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onsubmit', arguments);
            lwVm.memory.private_data.get(this).onsubmit = value + "";
        },
        get onsuspend() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsuspend, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onsuspend', arguments, result);
            return result;
        },
        set onsuspend(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onsuspend', arguments);
            lwVm.memory.private_data.get(this).onsuspend = value + "";
        },
        get ontimeupdate() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontimeupdate, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ontimeupdate', arguments, result);
            return result;
        },
        set ontimeupdate(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ontimeupdate', arguments);
            lwVm.memory.private_data.get(this).ontimeupdate = value + "";
        },
        get ontoggle() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontoggle, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ontoggle', arguments, result);
            return result;
        },
        set ontoggle(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ontoggle', arguments);
            lwVm.memory.private_data.get(this).ontoggle = value + "";
        },
        get ontransitioncancel() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitioncancel, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ontransitioncancel', arguments, result);
            return result;
        },
        set ontransitioncancel(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ontransitioncancel', arguments);
            lwVm.memory.private_data.get(this).ontransitioncancel = value + "";
        },
        get ontransitionend() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitionend, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ontransitionend', arguments, result);
            return result;
        },
        set ontransitionend(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ontransitionend', arguments);
            lwVm.memory.private_data.get(this).ontransitionend = value + "";
        },
        get ontransitionrun() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitionrun, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ontransitionrun', arguments, result);
            return result;
        },
        set ontransitionrun(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ontransitionrun', arguments);
            lwVm.memory.private_data.get(this).ontransitionrun = value + "";
        },
        get ontransitionstart() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ontransitionstart, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'ontransitionstart', arguments, result);
            return result;
        },
        set ontransitionstart(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'ontransitionstart', arguments);
            lwVm.memory.private_data.get(this).ontransitionstart = value + "";
        },
        get onvolumechange() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onvolumechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onvolumechange', arguments, result);
            return result;
        },
        set onvolumechange(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onvolumechange', arguments);
            lwVm.memory.private_data.get(this).onvolumechange = value + "";
        },
        get onwaiting() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwaiting, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onwaiting', arguments, result);
            return result;
        },
        set onwaiting(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onwaiting', arguments);
            lwVm.memory.private_data.get(this).onwaiting = value + "";
        },
        get onwebkitanimationend() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkitanimationend, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onwebkitanimationend', arguments, result);
            return result;
        },
        set onwebkitanimationend(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onwebkitanimationend', arguments);
            lwVm.memory.private_data.get(this).onwebkitanimationend = value + "";
        },
        get onwebkitanimationiteration() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkitanimationiteration, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onwebkitanimationiteration', arguments, result);
            return result;
        },
        set onwebkitanimationiteration(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onwebkitanimationiteration', arguments);
            lwVm.memory.private_data.get(this).onwebkitanimationiteration = value + "";
        },
        get onwebkitanimationstart() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkitanimationstart, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onwebkitanimationstart', arguments, result);
            return result;
        },
        set onwebkitanimationstart(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onwebkitanimationstart', arguments);
            lwVm.memory.private_data.get(this).onwebkitanimationstart = value + "";
        },
        get onwebkittransitionend() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwebkittransitionend, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onwebkittransitionend', arguments, result);
            return result;
        },
        set onwebkittransitionend(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onwebkittransitionend', arguments);
            lwVm.memory.private_data.get(this).onwebkittransitionend = value + "";
        },
        get onwheel() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onwheel, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'onwheel', arguments, result);
            return result;
        },
        set onwheel(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'onwheel', arguments);
            lwVm.memory.private_data.get(this).onwheel = value + "";
        },
        get outerText() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).outerText, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'outerText', arguments, result);
            return result;
        },
        set outerText(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'outerText', arguments);
            lwVm.memory.private_data.get(this).outerText = value + "";
        },
        get spellcheck() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).spellcheck, true);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'spellcheck', arguments, result);
            return result;
        },
        set spellcheck(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'spellcheck', arguments);
            lwVm.memory.private_data.get(this).spellcheck = value ? true : false;
        },
        get style() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this);
            if (!ele) {
                ele = new CSSStyleDeclaration(lwVm.memory.$createObj_key);
                for (key of $cssstyle_attribute) {
                    ele[key] = "";
                };
                lwVm.memory.private_data.set(this, {
                    style:ele
                })
                lwVm.memory.private_data.get(this).style = ele;
            }else{
                ele = ele.style;
            }
            let result = ele;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLElement', 'for ', arguments, result);
            return result;
        },
        set style(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'style', arguments);
            lwVm.memory.private_data.get(this).style = value;
        },
        get tabIndex() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).tabIndex, -1);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'tabIndex', arguments, result);
            return result;
        },
        set tabIndex(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'tabIndex', arguments);
            lwVm.memory.private_data.get(this).tabIndex = value ? 1 : -1;
        },
        get title() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).title, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'title', arguments, result);
            return result;
        },
        set title(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'title', arguments);
            lwVm.memory.private_data.get(this).title = value + "";
        },
        get translate() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).translate, true);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'translate', arguments, result);
            return result;
        },
        set translate(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'translate', arguments);
            lwVm.memory.private_data.get(this).translate = value ? true : false;
        },
        get virtualKeyboardPolicy() {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).virtualKeyboardPolicy, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLElement', 'virtualKeyboardPolicy', arguments, result);
            return result;
        },
        set virtualKeyboardPolicy(value) {
            if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLElement', 'virtualKeyboardPolicy', arguments);
            lwVm.memory.private_data.get(this).virtualKeyboardPolicy = value + "";
        },
    }
    lwVm.rename(HTMLElement.prototype, "HTMLElement");
    lwVm.safeDescriptor_addConstructor(HTMLElement);
    lwVm.safe_Objattribute(HTMLElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
    Object.setPrototypeOf(HTMLElement, Element);
})();