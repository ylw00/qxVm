WebGLRenderingContext = function WebGLRenderingContext(createObj_key, canvas) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, { canvas: canvas })
}; qxVm.safefunction(WebGLRenderingContext);

; (function () {
    let WebGLDebugRendererInfo = function WebGLDebugRendererInfo(createObj_key) {
        qxVm.memory.private_data.set(this, {})
    };
    ; (function () {
        const $attributes = {
            UNMASKED_RENDERER_WEBGL: 37446,
            UNMASKED_VENDOR_WEBGL: 37445,
        };

        WebGLDebugRendererInfo.prototype = {};
        for (let key in $attributes) {
            if ($attributes.hasOwnProperty(key)) {
                const value = $attributes[key];
                Object.defineProperty(WebGLDebugRendererInfo, key, { value: value, configurable: false, enumerable: true, writable: false });
                Object.defineProperty(WebGLDebugRendererInfo.prototype, key, { value: value, configurable: false, enumerable: true, writable: false });
            }
        };

        qxVm.rename(WebGLDebugRendererInfo.prototype, "WebGLDebugRendererInfo");
        qxVm.safeDescriptor_addConstructor(WebGLDebugRendererInfo);

    })();


    const $safe_get_attribute = ['canvas', 'drawingBufferHeight', 'drawingBufferWidth'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [
        'activeTexture', 'attachShader', 'bindAttribLocation', 'bindBuffer', 'bindFramebuffer', 'bindRenderbuffer', 'bindTexture',
        'blendColor', 'blendEquation', 'blendEquationSeparate', 'blendFunc', 'blendFuncSeparate', 'bufferData', 'bufferSubData',
        'checkFramebufferStatus', 'clear', 'clearColor', 'clearDepth', 'clearStencil', 'colorMask', 'compileShader', 'compressedTexImage2D',
        'compressedTexSubImage2D', 'copyTexImage2D', 'copyTexSubImage2D', 'createBuffer', 'createFramebuffer', 'createProgram',
        'createRenderbuffer', 'createShader', 'createTexture', 'cullFace', 'deleteBuffer', 'deleteFramebuffer', 'deleteProgram',
        'deleteRenderbuffer', 'deleteShader', 'deleteTexture', 'depthFunc', 'depthMask', 'depthRange', 'detachShader', 'disable',
        'disableVertexAttribArray', 'drawArrays', 'drawElements', 'enable', 'enableVertexAttribArray', 'finish', 'flush',
        'framebufferRenderbuffer', 'framebufferTexture2D', 'frontFace', 'generateMipmap', 'getActiveAttrib', 'getActiveUniform',
        'getAttachedShaders', 'getAttribLocation', 'getBufferParameter', 'getContextAttributes', 'getError', 'getExtension',
        'getFramebufferAttachmentParameter', 'getParameter', 'getProgramInfoLog', 'getProgramParameter', 'getRenderbufferParameter',
        'getShaderInfoLog', 'getShaderParameter', 'getShaderPrecisionFormat', 'getShaderSource', 'getSupportedExtensions', 'getTexParameter',
        'getUniform', 'getUniformLocation', 'getVertexAttrib', 'getVertexAttribOffset', 'hint', 'isBuffer', 'isContextLost', 'isEnabled',
        'isFramebuffer', 'isProgram', 'isRenderbuffer', 'isShader', 'isTexture', 'lineWidth', 'linkProgram', 'makeXRCompatible',
        'pixelStorei', 'polygonOffset', 'readPixels', 'renderbufferStorage', 'sampleCoverage', 'scissor', 'shaderSource', 'stencilFunc',
        'stencilFuncSeparate', 'stencilMask', 'stencilMaskSeparate', 'stencilOp', 'stencilOpSeparate', 'texImage2D', 'texParameterf',
        'texParameteri', 'texSubImage2D', 'uniform1f', 'uniform1fv', 'uniform1i', 'uniform1iv', 'uniform2f', 'uniform2fv', 'uniform2i',
        'uniform2iv', 'uniform3f', 'uniform3fv', 'uniform3i', 'uniform3iv', 'uniform4f', 'uniform4fv', 'uniform4i', 'uniform4iv',
        'uniformMatrix2fv', 'uniformMatrix3fv', 'uniformMatrix4fv', 'useProgram', 'validateProgram', 'vertexAttrib1f', 'vertexAttrib1fv',
        'vertexAttrib2f', 'vertexAttrib2fv', 'vertexAttrib3f', 'vertexAttrib3fv', 'vertexAttrib4f', 'vertexAttrib4fv', 'vertexAttribPointer',
        'viewport'
    ];
    const $attributes = {
        ACTIVE_ATTRIBUTES: 35721,
        ACTIVE_TEXTURE: 34016,
        ACTIVE_UNIFORMS: 35718,
        ALIASED_LINE_WIDTH_RANGE: 33902,
        ALIASED_POINT_SIZE_RANGE: 33901,
        ALPHA: 6406,
        ALPHA_BITS: 3413,
        ALWAYS: 519,
        ARRAY_BUFFER: 34962,
        ARRAY_BUFFER_BINDING: 34964,
        ATTACHED_SHADERS: 35717,
        BACK: 1029,
        BLEND: 3042,
        BLEND_COLOR: 32773,
        BLEND_DST_ALPHA: 32970,
        BLEND_DST_RGB: 32968,
        BLEND_EQUATION: 32777,
        BLEND_EQUATION_ALPHA: 34877,
        BLEND_EQUATION_RGB: 32777,
        BLEND_SRC_ALPHA: 32971,
        BLEND_SRC_RGB: 32969,
        BLUE_BITS: 3412,
        BOOL: 35670,
        BOOL_VEC2: 35671,
        BOOL_VEC3: 35672,
        BOOL_VEC4: 35673,
        BROWSER_DEFAULT_WEBGL: 37444,
        BUFFER_SIZE: 34660,
        BUFFER_USAGE: 34661,
        BYTE: 5120,
        CCW: 2305,
        CLAMP_TO_EDGE: 33071,
        COLOR_ATTACHMENT0: 36064,
        COLOR_BUFFER_BIT: 16384,
        COLOR_CLEAR_VALUE: 3106,
        COLOR_WRITEMASK: 3107,
        COMPILE_STATUS: 35713,
        COMPRESSED_TEXTURE_FORMATS: 34467,
        CONSTANT_ALPHA: 32771,
        CONSTANT_COLOR: 32769,
        CONTEXT_LOST_WEBGL: 37442,
        CULL_FACE: 2884,
        CULL_FACE_MODE: 2885,
        CURRENT_PROGRAM: 35725,
        CURRENT_VERTEX_ATTRIB: 34342,
        CW: 2304,
        DECR: 7683,
        DECR_WRAP: 34056,
        DELETE_STATUS: 35712,
        DEPTH_ATTACHMENT: 36096,
        DEPTH_BITS: 3414,
        DEPTH_BUFFER_BIT: 256,
        DEPTH_CLEAR_VALUE: 2931,
        DEPTH_COMPONENT: 6402,
        DEPTH_COMPONENT16: 33189,
        DEPTH_FUNC: 2932,
        DEPTH_RANGE: 2928,
        DEPTH_STENCIL: 34041,
        DEPTH_STENCIL_ATTACHMENT: 33306,
        DEPTH_TEST: 2929,
        DEPTH_WRITEMASK: 2930,
        DITHER: 3024,
        DONT_CARE: 4352,
        DST_ALPHA: 772,
        DST_COLOR: 774,
        DYNAMIC_DRAW: 35048,
        ELEMENT_ARRAY_BUFFER: 34963,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        EQUAL: 514,
        FASTEST: 4353,
        FLOAT: 5126,
        FLOAT_MAT2: 35674,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        FRAGMENT_SHADER: 35632,
        FRAMEBUFFER: 36160,
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
        FRAMEBUFFER_BINDING: 36006,
        FRAMEBUFFER_COMPLETE: 36053,
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
        FRAMEBUFFER_UNSUPPORTED: 36061,
        FRONT: 1028,
        FRONT_AND_BACK: 1032,
        FRONT_FACE: 2886,
        FUNC_ADD: 32774,
        FUNC_REVERSE_SUBTRACT: 32779,
        FUNC_SUBTRACT: 32778,
        GENERATE_MIPMAP_HINT: 33170,
        GEQUAL: 518,
        GREATER: 516,
        GREEN_BITS: 3411,
        HIGH_FLOAT: 36338,
        HIGH_INT: 36341,
        IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
        IMPLEMENTATION_COLOR_READ_TYPE: 35738,
        INCR: 7682,
        INCR_WRAP: 34055,
        INT: 5124,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        INVALID_ENUM: 1280,
        INVALID_FRAMEBUFFER_OPERATION: 1286,
        INVALID_OPERATION: 1282,
        INVALID_VALUE: 1281,
        INVERT: 5386,
        KEEP: 7680,
        LEQUAL: 515,
        LESS: 513,
        LINEAR: 9729,
        LINEAR_MIPMAP_LINEAR: 9987,
        LINEAR_MIPMAP_NEAREST: 9985,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        LINE_WIDTH: 2849,
        LINK_STATUS: 35714,
        LOW_FLOAT: 36336,
        LOW_INT: 36339,
        LUMINANCE: 6409,
        LUMINANCE_ALPHA: 6410,
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
        MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
        MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
        MAX_RENDERBUFFER_SIZE: 34024,
        MAX_TEXTURE_IMAGE_UNITS: 34930,
        MAX_TEXTURE_SIZE: 3379,
        MAX_VARYING_VECTORS: 36348,
        MAX_VERTEX_ATTRIBS: 34921,
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
        MAX_VERTEX_UNIFORM_VECTORS: 36347,
        MAX_VIEWPORT_DIMS: 3386,
        MEDIUM_FLOAT: 36337,
        MEDIUM_INT: 36340,
        MIRRORED_REPEAT: 33648,
        NEAREST: 9728,
        NEAREST_MIPMAP_LINEAR: 9986,
        NEAREST_MIPMAP_NEAREST: 9984,
        NEVER: 512,
        NICEST: 4354,
        NONE: 0,
        NOTEQUAL: 517,
        NO_ERROR: 0,
        ONE: 1,
        ONE_MINUS_CONSTANT_ALPHA: 32772,
        ONE_MINUS_CONSTANT_COLOR: 32770,
        ONE_MINUS_DST_ALPHA: 773,
        ONE_MINUS_DST_COLOR: 775,
        ONE_MINUS_SRC_ALPHA: 771,
        ONE_MINUS_SRC_COLOR: 769,
        OUT_OF_MEMORY: 1285,
        PACK_ALIGNMENT: 3333,
        POINTS: 0,
        POLYGON_OFFSET_FACTOR: 32824,
        POLYGON_OFFSET_FILL: 32823,
        POLYGON_OFFSET_UNITS: 10752,
        RED_BITS: 3410,
        RENDERBUFFER: 36161,
        RENDERBUFFER_ALPHA_SIZE: 36179,
        RENDERBUFFER_BINDING: 36007,
        RENDERBUFFER_BLUE_SIZE: 36178,
        RENDERBUFFER_DEPTH_SIZE: 36180,
        RENDERBUFFER_GREEN_SIZE: 36177,
        RENDERBUFFER_HEIGHT: 36163,
        RENDERBUFFER_INTERNAL_FORMAT: 36164,
        RENDERBUFFER_RED_SIZE: 36176,
        RENDERBUFFER_STENCIL_SIZE: 36181,
        RENDERBUFFER_WIDTH: 36162,
        RENDERER: 7937,
        REPEAT: 10497,
        REPLACE: 7681,
        RGB: 6407,
        RGB5_A1: 32855,
        RGB565: 36194,
        RGBA: 6408,
        RGBA4: 32854,
        SAMPLER_2D: 35678,
        SAMPLER_CUBE: 35680,
        SAMPLES: 32937,
        SAMPLE_ALPHA_TO_COVERAGE: 32926,
        SAMPLE_BUFFERS: 32936,
        SAMPLE_COVERAGE: 32928,
        SAMPLE_COVERAGE_INVERT: 32939,
        SAMPLE_COVERAGE_VALUE: 32938,
        SCISSOR_BOX: 3088,
        SCISSOR_TEST: 3089,
        SHADER_TYPE: 35663,
        SHADING_LANGUAGE_VERSION: 35724,
        SHORT: 5122,
        SRC_ALPHA: 770,
        SRC_ALPHA_SATURATE: 776,
        SRC_COLOR: 768,
        STATIC_DRAW: 35044,
        STENCIL_ATTACHMENT: 36128,
        STENCIL_BACK_FAIL: 34817,
        STENCIL_BACK_FUNC: 34816,
        STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
        STENCIL_BACK_PASS_DEPTH_PASS: 34819,
        STENCIL_BACK_REF: 36003,
        STENCIL_BACK_VALUE_MASK: 36004,
        STENCIL_BACK_WRITEMASK: 36005,
        STENCIL_BITS: 3415,
        STENCIL_BUFFER_BIT: 1024,
        STENCIL_CLEAR_VALUE: 2961,
        STENCIL_FAIL: 2964,
        STENCIL_FUNC: 2962,
        STENCIL_INDEX8: 36168,
        STENCIL_PASS_DEPTH_FAIL: 2965,
        STENCIL_PASS_DEPTH_PASS: 2966,
        STENCIL_REF: 2967,
        STENCIL_TEST: 2960,
        STENCIL_VALUE_MASK: 2963,
        STENCIL_WRITEMASK: 2968,
        STREAM_DRAW: 35040,
        SUBPIXEL_BITS: 3408,
        TEXTURE: 5890,
        TEXTURE0: 33984,
        TEXTURE1: 33985,
        TEXTURE2: 33986,
        TEXTURE3: 33987,
        TEXTURE4: 33988,
        TEXTURE5: 33989,
        TEXTURE6: 33990,
        TEXTURE7: 33991,
        TEXTURE8: 33992,
        TEXTURE9: 33993,
        TEXTURE10: 33994,
        TEXTURE11: 33995,
        TEXTURE12: 33996,
        TEXTURE13: 33997,
        TEXTURE14: 33998,
        TEXTURE15: 33999,
        TEXTURE16: 34000,
        TEXTURE17: 34001,
        TEXTURE18: 34002,
        TEXTURE19: 34003,
        TEXTURE20: 34004,
        TEXTURE21: 34005,
        TEXTURE22: 34006,
        TEXTURE23: 34007,
        TEXTURE24: 34008,
        TEXTURE25: 34009,
        TEXTURE26: 34010,
        TEXTURE27: 34011,
        TEXTURE28: 34012,
        TEXTURE29: 34013,
        TEXTURE30: 34014,
        TEXTURE31: 34015,
        TEXTURE_2D: 3553,
        TEXTURE_BINDING_2D: 32873,
        TEXTURE_BINDING_CUBE_MAP: 34068,
        TEXTURE_CUBE_MAP: 34067,
        TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
        TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
        TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
        TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
        TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
        TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
        TEXTURE_MAG_FILTER: 10240,
        TEXTURE_MIN_FILTER: 10241,
        TEXTURE_WRAP_S: 10242,
        TEXTURE_WRAP_T: 10243,
        TRIANGLES: 4,
        TRIANGLE_FAN: 6,
        TRIANGLE_STRIP: 5,
        UNPACK_ALIGNMENT: 3317,
        UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
        UNPACK_FLIP_Y_WEBGL: 37440,
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
        UNSIGNED_BYTE: 5121,
        UNSIGNED_INT: 5125,
        UNSIGNED_SHORT: 5123,
        UNSIGNED_SHORT_4_4_4_4: 32819,
        UNSIGNED_SHORT_5_5_5_1: 32820,
        UNSIGNED_SHORT_5_6_5: 33635,
        VALIDATE_STATUS: 35715,
        VENDOR: 7936,
        VERSION: 7938,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_SHADER: 35633,
        VIEWPORT: 2978,
        ZERO: 0
    };

    WebGLRenderingContext.prototype = {
        activeTexture() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        attachShader() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bindAttribLocation() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bindBuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bindFramebuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bindRenderbuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bindTexture() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        blendColor() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        blendEquation() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        blendEquationSeparate() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        blendFunc() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        blendFuncSeparate() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bufferData() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        bufferSubData() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get canvas() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).canvas;
        },
        checkFramebufferStatus() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clear() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clearColor() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clearDepth() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        clearStencil() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        colorMask() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        compileShader() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        compressedTexImage2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        compressedTexSubImage2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        copyTexImage2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        copyTexSubImage2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createBuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createFramebuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createProgram() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createRenderbuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createShader() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createTexture() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        cullFace() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteBuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteFramebuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteProgram() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteRenderbuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteShader() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteTexture() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        depthFunc() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        depthMask() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        depthRange() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        detachShader() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        disable() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        disableVertexAttribArray() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        drawArrays() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        drawElements() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get drawingBufferHeight() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 150;
        },
        get drawingBufferWidth() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 300;
        },
        enable() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        enableVertexAttribArray() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        finish() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        flush() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        framebufferRenderbuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        framebufferTexture2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        frontFace() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        generateMipmap() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getActiveAttrib() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getActiveUniform() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttachedShaders() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAttribLocation() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getBufferParameter() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getContextAttributes() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getError() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getExtension(name) {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele;
            switch (name) {
                case "WEBGL_debug_renderer_info":
                    ele = new WebGLDebugRendererInfo(name);
                    break;
                default:
                    debugger;
            };

            return ele
        },
        getFramebufferAttachmentParameter() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getParameter(param) {
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele;
            switch(param + ""){
                case "37445":
                    ele = "Google Inc. (NVIDIA)"
                    break
                case "37446":
                    ele = "ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 Direct3D11 vs_5_0 ps_5_0, D3D11)"
                    break
                default:
                    debugger;
                    break
            }
            return ele;
        },
        getProgramInfoLog() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getProgramParameter() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getRenderbufferParameter() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getShaderInfoLog() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getShaderParameter() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getShaderPrecisionFormat() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getShaderSource() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getSupportedExtensions() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return [
                "ANGLE_instanced_arrays",
                "EXT_blend_minmax",
                "EXT_color_buffer_half_float",
                "EXT_disjoint_timer_query",
                "EXT_float_blend",
                "EXT_frag_depth",
                "EXT_shader_texture_lod",
                "EXT_texture_compression_bptc",
                "EXT_texture_compression_rgtc",
                "EXT_texture_filter_anisotropic",
                "WEBKIT_EXT_texture_filter_anisotropic",
                "EXT_sRGB",
                "KHR_parallel_shader_compile",
                "OES_element_index_uint",
                "OES_fbo_render_mipmap",
                "OES_standard_derivatives",
                "OES_texture_float",
                "OES_texture_float_linear",
                "OES_texture_half_float",
                "OES_texture_half_float_linear",
                "OES_vertex_array_object",
                "WEBGL_color_buffer_float",
                "WEBGL_compressed_texture_s3tc",
                "WEBKIT_WEBGL_compressed_texture_s3tc",
                "WEBGL_compressed_texture_s3tc_srgb",
                "WEBGL_debug_renderer_info",
                "WEBGL_debug_shaders",
                "WEBGL_depth_texture",
                "WEBKIT_WEBGL_depth_texture",
                "WEBGL_draw_buffers",
                "WEBGL_lose_context",
                "WEBKIT_WEBGL_lose_context",
                "WEBGL_multi_draw"
            ]
        },
        getTexParameter() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getUniform() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getUniformLocation() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getVertexAttrib() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getVertexAttribOffset() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        hint() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isBuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isContextLost() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isEnabled() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isFramebuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isProgram() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isRenderbuffer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isShader() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isTexture() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        lineWidth() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        linkProgram() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        makeXRCompatible() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        pixelStorei() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        polygonOffset() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        readPixels() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        renderbufferStorage() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        sampleCoverage() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        scissor() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        shaderSource() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stencilFunc() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stencilFuncSeparate() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stencilMask() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stencilMaskSeparate() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stencilOp() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stencilOpSeparate() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        texImage2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        texParameterf() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        texParameteri() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        texSubImage2D() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform1f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform1fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform1i() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform1iv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform2f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform2fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform2i() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform2iv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform3f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform3fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform3i() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform3iv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform4f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform4fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform4i() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniform4iv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniformMatrix2fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniformMatrix3fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        uniformMatrix4fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        useProgram() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        validateProgram() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib1f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib1fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib2f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib2fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib3f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib3fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib4f() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttrib4fv() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        vertexAttribPointer() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        viewport() {
            debugger;
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    };

    for (let key in $attributes) {
        if ($attributes.hasOwnProperty(key)) {
            const value = $attributes[key];
            Object.defineProperty(WebGLRenderingContext, key, { value: value, configurable: false, enumerable: true, writable: false });
            Object.defineProperty(WebGLRenderingContext.prototype, key, { value: value, configurable: false, enumerable: true, writable: false });
        }
    };

    qxVm.rename(WebGLRenderingContext.prototype, "WebGLRenderingContext");
    qxVm.safeDescriptor_addConstructor(WebGLRenderingContext);
    qxVm.safe_Objattribute(WebGLRenderingContext, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
