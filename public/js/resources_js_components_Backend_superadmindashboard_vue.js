"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Backend_superadmindashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.vue */ "./resources/js/components/Backend/pages/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminDashboad: _pages_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      menutex: true
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.post('logout').then(function (res) {
        console.log(res);

        _this.$store.commit('SET_AUTHENTICATED', false);

        _this.$router.push({
          name: 'Home'
        });

        _this.$store.commit('SET_USER', null);

        localStorage.removeItem('token');
      });
    },
    leftmenutext: function leftmenutext() {
      document.getElementById("sidebar").style.display = "block";
    }
  },
  mounted: function mounted() {
    console.log('Backend Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.router-link-active[data-v-61dac2ca]{\n    background: #e7eaeb\n}\n*body[data-v-61dac2ca] {\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n    font-style: normal;\n}\n*[data-v-61dac2ca]{\n    font-style: normal;\n}\n\n\n/* width */\n[data-v-61dac2ca]::-webkit-scrollbar {\n    width: 10px;\n}\n\n\n/* Track */\n[data-v-61dac2ca]::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 0px !important;\n}\n\n\n/* Handle */\n[data-v-61dac2ca]::-webkit-scrollbar-thumb {\n    background: #bac1c4;\n    border-radius: 10px;\n}\n\n\n/* Handle on hover */\n[data-v-61dac2ca]::-webkit-scrollbar-thumb:hover {\n    background: #a6b2b4;\n}\n.content[data-v-61dac2ca] {\n    margin-left: 172px;\n    height: 100vh;\n    transition: 0.3s !important;\n}\n@media screen and (max-width: 780px) {\n.content[data-v-61dac2ca] {\n        margin-left: 55px !important;\n}\n.admin.menu-setting .sidebar[data-v-61dac2ca] {\n        width: 60px !important;\n}\n}\n\n\n\n/* JS MENU */\n.admin.menu-setting .sidebar[data-v-61dac2ca] {\n    width: 68px;\n}\n.admin.menu-setting .content[data-v-61dac2ca] {\n    margin-left: 67px\n}\n.admin.menu-setting .sidebar a span[data-v-61dac2ca],\n.admin.menu-setting .profile_info[data-v-61dac2ca] {\n    display: none;\n}\n.admin.menu-setting .sidebar a[data-v-61dac2ca] {\n    padding-left: 22px;\n}\n.admin[data-v-61dac2ca]{\n    background: #f3f3f5 !important;\n}\n\n\n/* Start Sidebar*/\n.sidebar[data-v-61dac2ca] {\n    z-index: 1;\n    top: 0;\n    /* margin-top: 57px;\n    padding-top: 14px; */\n    position: fixed;\n    left: 0;\n    width: 170px;\n    height: 100%;\n    /* transition: 0.3s !important; */\n    transition-property: left;\n    overflow-y: auto;\n}\n.sidebar a[data-v-61dac2ca] {\n    font-size: 14px;\n    color: #363940 !important;\n    display: block;\n    width: 100%;\n    line-height: 45px;\n    text-decoration: none;\n    padding-left: 25px;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    font-style: normal !important;\n    /* transition: 0.1s; */\n}\n.sidebar a[data-v-61dac2ca]:hover {\n    color: black;\n    /* font-size: 15px; */\n    background-color: #eaeff3;\n    padding-left: 24px;\n}\na#icon-menu[data-v-61dac2ca] {\n    color: white;\n    margin-left: 35px;\n    font-size: 18px;\n}\n.sidebar i[data-v-61dac2ca] {\n    padding-right: 10px;\n}\n\n/* .top-header {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n} */\n.admin-name[data-v-61dac2ca] {\n    color: white;\n}\n.sidebar li[data-v-61dac2ca] {\n    padding: 2px 10px;\n}\n\n\n\n/* End Sidebar*/\n\n\n/* Start header css on phone */\n@media screen and (max-width: 780px) {\nspan.admin-name[data-v-61dac2ca] {\n        display: none;\n}\n.sidebar a[data-v-61dac2ca] {\n        padding-left: 20px !important;\n}\n.admin.menu-setting .sidebar[data-v-61dac2ca] {\n        width: 0px !important;\n}\n.content[data-v-61dac2ca] {\n        margin-left: 0px !important;\n}\n.admin.menu-setting .sidebar a span[data-v-61dac2ca],\n.admin.menu-setting .profile_info[data-v-61dac2ca] {\n    display: none !important;\n}\n}\n@media screen and (max-width: 780px) {\n.sidebar[data-v-61dac2ca]  {\n        display: none;\n}\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_style_index_0_id_61dac2ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_style_index_0_id_61dac2ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_style_index_0_id_61dac2ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Backend/pages/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Backend/pages/index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5dd2b7b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5dd2b7b1& */ "./resources/js/components/Backend/pages/index.vue?vue&type=template&id=5dd2b7b1&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Backend/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5dd2b7b1___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5dd2b7b1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Backend/pages/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Backend/superadmindashboard.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Backend/superadmindashboard.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _superadmindashboard_vue_vue_type_template_id_61dac2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true& */ "./resources/js/components/Backend/superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true&");
/* harmony import */ var _superadmindashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superadmindashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Backend/superadmindashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _superadmindashboard_vue_vue_type_style_index_0_id_61dac2ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css& */ "./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _superadmindashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _superadmindashboard_vue_vue_type_template_id_61dac2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _superadmindashboard_vue_vue_type_template_id_61dac2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61dac2ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Backend/superadmindashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Backend/pages/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Backend/pages/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Backend/superadmindashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Backend/superadmindashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./superadmindashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_style_index_0_id_61dac2ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=style&index=0&id=61dac2ca&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Backend/pages/index.vue?vue&type=template&id=5dd2b7b1&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Backend/pages/index.vue?vue&type=template&id=5dd2b7b1& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5dd2b7b1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5dd2b7b1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5dd2b7b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5dd2b7b1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/index.vue?vue&type=template&id=5dd2b7b1&");


/***/ }),

/***/ "./resources/js/components/Backend/superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Backend/superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_template_id_61dac2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_template_id_61dac2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_superadmindashboard_vue_vue_type_template_id_61dac2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/index.vue?vue&type=template&id=5dd2b7b1&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/index.vue?vue&type=template&id=5dd2b7b1& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-16" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Dashboard Component"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("h3", [_vm._v("!! Hello " + _vm._s(_vm.AuthUser.name) + " ")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [
              _vm._v("Your Current Role Is " + _vm._s(_vm.AuthUser.role)),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/superadmindashboard.vue?vue&type=template&id=61dac2ca&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c("div", { staticClass: "admin" }, [
      _c(
        "nav",
        { staticClass: "sidebar bg-white shadow-lg", attrs: { id: "sidebar" } },
        [
          _c(
            "div",
            {
              staticClass: "mt-3 p-2 text-center text-black",
              attrs: { id: "authName" },
            },
            [_c("span", [_vm._v("! Hello " + _vm._s(_vm.AuthUser.name))])]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "mt-2" }, [
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "super-admin-dashboard" } } },
                  [
                    _c("i", { staticClass: "las la-cart-arrow-down" }),
                    _c("span", { staticClass: "menuText" }, [
                      _vm._v("Dashboard"),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "Users" } } }, [
                  _c("i", { staticClass: "las la-cart-arrow-down" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Users")]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "Category" } } }, [
                  _c("i", { staticClass: "las la-cart-arrow-down" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Category")]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "Home" } } }, [
                  _c("i", { staticClass: "las la-cart-arrow-down" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Home")]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      return _vm.logout()
                    },
                  },
                },
                [
                  _c("i", { staticClass: "las la-sign-out-alt" }),
                  _c("span", { staticClass: "menuText" }, [_vm._v("Logout")]),
                ]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content  font-normal" }, [
        _c(
          "div",
          {
            staticClass:
              "flex items-center  justify-between px-2 h-16 bg-purple-700 shadow-2xl",
          },
          [
            _c("div", { staticClass: "pl-3 w-full" }, [
              _c("span", { staticClass: "admin-name" }, [
                _vm._v("!! Hello " + _vm._s(_vm.AuthUser.name)),
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "#", id: "icon-menu" },
                  on: {
                    click: function ($event) {
                      return _vm.leftmenutext()
                    },
                  },
                },
                [_c("i", { staticClass: "las la-expand-arrows-alt lg:hidden" })]
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "routing h-screen py-4 px-4 bg-gray-100" },
          [
            _vm.$router.currentRoute.name === "super-admin-dashboard"
              ? _c("div", [_c("admin-dashboad")], 1)
              : _vm._e(),
            _vm._v(" "),
            _c("router-view"),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);