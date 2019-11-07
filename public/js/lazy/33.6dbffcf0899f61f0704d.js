(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Custom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Custom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SettingDrawer_settingConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SettingDrawer/settingConfig */ "./resources/src/components/SettingDrawer/settingConfig.js");
/* harmony import */ var ant_design_vue_es_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ant-design-vue/es/switch */ "./node_modules/ant-design-vue/es/switch/index.js");
/* harmony import */ var ant_design_vue_es_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ant-design-vue/es/list */ "./node_modules/ant-design-vue/es/list/index.js");
/* harmony import */ var ant_design_vue_es_list_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ant-design-vue/es/list/Item */ "./node_modules/ant-design-vue/es/list/Item.js");
/* harmony import */ var _utils_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/mixin */ "./resources/src/utils/mixin.js");






var Meta = ant_design_vue_es_list_Item__WEBPACK_IMPORTED_MODULE_4__["default"].Meta;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AListItem: ant_design_vue_es_list_Item__WEBPACK_IMPORTED_MODULE_4__["default"],
    AList: ant_design_vue_es_list__WEBPACK_IMPORTED_MODULE_3__["default"],
    ASwitch: ant_design_vue_es_switch__WEBPACK_IMPORTED_MODULE_2__["default"],
    Meta: Meta
  },
  mixins: [_utils_mixin__WEBPACK_IMPORTED_MODULE_5__["mixin"]],
  data: function data() {
    return {};
  },
  filters: {
    themeFilter: function themeFilter(theme) {
      var themeMap = {
        'dark': '暗色',
        'light': '白色'
      };
      return themeMap[theme];
    }
  },
  methods: {
    colorFilter: function colorFilter(color) {
      var c = _components_SettingDrawer_settingConfig__WEBPACK_IMPORTED_MODULE_1__["colorList"].filter(function (o) {
        return o.color === color;
      })[0];
      return c && c.key;
    },
    onChange: function onChange(checked) {
      if (checked) {
        this.$store.dispatch('ToggleTheme', 'dark');
      } else {
        this.$store.dispatch('ToggleTheme', 'light');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(ant_design_vue_es_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "itemLayout": "horizontal"
      }
    }, [h(ant_design_vue_es_list_Item__WEBPACK_IMPORTED_MODULE_4__["default"], [h(Meta, [h("a", {
      "slot": "title"
    }, ["\u98CE\u683C\u914D\u8272"]), h("span", {
      "slot": "description"
    }, ["\u6574\u4F53\u98CE\u683C\u914D\u8272\u8BBE\u7F6E"])]), h("div", {
      "slot": "actions"
    }, [h(ant_design_vue_es_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "checkedChildren": "暗色",
        "unCheckedChildren": "白色",
        "defaultChecked": this.navTheme === 'dark' && true || false
      },
      "on": {
        "change": this.onChange
      }
    })])]), h(ant_design_vue_es_list_Item__WEBPACK_IMPORTED_MODULE_4__["default"], [h(Meta, [h("a", {
      "slot": "title"
    }, ["\u4E3B\u9898\u8272"]), h("span", {
      "slot": "description"
    }, ["\u9875\u9762\u98CE\u683C\u914D\u8272\uFF1A ", h("a", {
      "domProps": {
        "innerHTML": this.colorFilter(this.primaryColor)
      }
    })])])])]);
  }
});

/***/ }),

/***/ "./resources/src/components/SettingDrawer/settingConfig.js":
/*!*****************************************************************!*\
  !*** ./resources/src/components/SettingDrawer/settingConfig.js ***!
  \*****************************************************************/
/*! exports provided: updateTheme, colorList, updateColorWeak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTheme", function() { return updateTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorList", function() { return colorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateColorWeak", function() { return updateColorWeak; });
/* harmony import */ var ant_design_vue_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ant-design-vue/es */ "./node_modules/ant-design-vue/es/index.js");
 // import defaultSettings from '@/config/defaultSettings';

var lessNodesAppended;
var colorList = [{
  key: '薄暮',
  color: '#F5222D'
}, {
  key: '火山',
  color: '#FA541C'
}, {
  key: '日暮',
  color: '#FAAD14'
}, {
  key: '明青',
  color: '#13C2C2'
}, {
  key: '极光绿',
  color: '#52C41A'
}, {
  key: '拂晓蓝（默认）',
  color: '#1890FF'
}, {
  key: '极客蓝',
  color: '#2F54EB'
}, {
  key: '酱紫',
  color: '#722ED1'
}];

var updateTheme = function updateTheme(primaryColor) {
  // Don't compile less in production!

  /* if (process.env.NODE_ENV === 'production') {
    return;
  } */
  // Determine if the component is remounted
  if (!primaryColor) {
    return;
  }

  var hideMessage = ant_design_vue_es__WEBPACK_IMPORTED_MODULE_0__["message"].loading('正在编译主题！', 0);

  function buildIt() {
    if (!window.less) {
      return;
    }

    setTimeout(function () {
      window.less.modifyVars({
        '@primary-color': primaryColor
      }).then(function () {
        hideMessage();
      })["catch"](function () {
        ant_design_vue_es__WEBPACK_IMPORTED_MODULE_0__["message"].error('Failed to update theme');
        hideMessage();
      });
    }, 200);
  }

  if (!lessNodesAppended) {
    // insert less.js and color.less
    var lessStyleNode = document.createElement('link');
    var lessConfigNode = document.createElement('script');
    var lessScriptNode = document.createElement('script');
    lessStyleNode.setAttribute('rel', 'stylesheet/less');
    lessStyleNode.setAttribute('href', '/color.less');
    lessConfigNode.innerHTML = "\n      window.less = {\n        async: true,\n        env: 'production',\n        javascriptEnabled: true\n      };\n    ";
    lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js';
    lessScriptNode.async = true;

    lessScriptNode.onload = function () {
      buildIt();
      lessScriptNode.onload = null;
    };

    document.body.appendChild(lessStyleNode);
    document.body.appendChild(lessConfigNode);
    document.body.appendChild(lessScriptNode);
    lessNodesAppended = true;
  } else {
    buildIt();
  }
};

var updateColorWeak = function updateColorWeak(colorWeak) {
  // document.body.className = colorWeak ? 'colorWeak' : '';
  colorWeak ? document.body.classList.add('colorWeak') : document.body.classList.remove('colorWeak');
};



/***/ }),

/***/ "./resources/src/views/account/settings/Custom.vue":
/*!*********************************************************!*\
  !*** ./resources/src/views/account/settings/Custom.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Custom.vue?vue&type=script&lang=js& */ "./resources/src/views/account/settings/Custom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  "3b5b00f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/account/settings/Custom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/account/settings/Custom.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/account/settings/Custom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Custom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Custom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);