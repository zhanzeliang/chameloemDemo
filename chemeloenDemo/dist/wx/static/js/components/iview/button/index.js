var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([28],{

/***/ "./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\17992\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=script!./src/components/iview/button/index.wxml":
/***/ (function(module, exports) {

Component({
    externalClasses: ['i-class'],

    properties: {
        // default, primary, ghost, info, success, warning, error
        type: {
            type: String,
            value: ''
        },
        inline: {
            type: Boolean,
            value: false
        },
        // default, large, small
        size: {
            type: String,
            value: ''
        },
        // circle, square
        shape: {
            type: String,
            value: 'square'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        },
        long: {
            type: Boolean,
            value: false
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: 'en'
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },

    methods: {
        handleTap: function handleTap() {
            if (this.data.disabled) return false;

            this.triggerEvent('click');
        },
        bindgetuserinfo: function bindgetuserinfo() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$detail = _ref.detail,
                detail = _ref$detail === undefined ? {} : _ref$detail;

            this.triggerEvent('getuserinfo', detail);
        },
        bindcontact: function bindcontact() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$detail = _ref2.detail,
                detail = _ref2$detail === undefined ? {} : _ref2$detail;

            this.triggerEvent('contact', detail);
        },
        bindgetphonenumber: function bindgetphonenumber() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref3$detail = _ref3.detail,
                detail = _ref3$detail === undefined ? {} : _ref3$detail;

            this.triggerEvent('getphonenumber', detail);
        },
        binderror: function binderror() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref4$detail = _ref4.detail,
                detail = _ref4$detail === undefined ? {} : _ref4$detail;

            this.triggerEvent('error', detail);
        }
    }
});

;
module.exports = function () {};

/***/ }),

/***/ "./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\17992\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=styles!./src/components/iview/button/index.wxml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/iview/button/index.wxml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style = __webpack_require__("./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\17992\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=styles!./src/components/iview/button/index.wxml");
var __cml__script = __webpack_require__("./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\17992\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/17992/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/wxml-selector.js?type=script!./src/components/iview/button/index.wxml");

      __CML__GLOBAL.__CMLCOMPONNETS__['components/iview/button/index'] = __cml__script;


/***/ })

},["./src/components/iview/button/index.wxml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['components/iview/button/index'];