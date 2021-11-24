"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Frontend_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Pages/home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Pages/home.vue?vue&type=script&lang=js& ***!
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
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    console.log('home App');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/footer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/footer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
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
  data: function data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/auth/logout', {
        token: localStorage.getItem('token')
      }).then(function () {
        _this.$store.commit('SET_AUTHENTICATED', false);

        _this.$store.commit('SET_USER', '');

        localStorage.removeItem("token");

        _this.$router.push({
          name: 'home'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  data: function data() {
    return {
      isPhoneOpen: true
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('logout').then(function (res) {
        console.log(res);

        _this.$store.commit('SET_AUTHENTICATED', false);

        _this.$router.push({
          name: 'Home'
        });

        _this.$store.commit('SET_USER', null);

        localStorage.removeItem('token');
      });
    },
    openmenu: function openmenu() {
      document.getElementById("phonenav").style.display = "block";
      this.isPhoneOpen = false;
    },
    closemenu: function closemenu() {
      document.getElementById("phonenav").style.display = "none";
      this.isPhoneOpen = true;
    },
    mounted: function mounted() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partials_topbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partials/topbar.vue */ "./resources/js/components/Frontend/Partials/topbar.vue");
/* harmony import */ var _Frontend_Partials_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Frontend/Partials/footer.vue */ "./resources/js/components/Frontend/Partials/footer.vue");
/* harmony import */ var _Frontend_Pages_home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frontend/Pages/home.vue */ "./resources/js/components/Frontend/Pages/home.vue");
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
    Header: _Partials_topbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FoterSection: _Frontend_Partials_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Home: _Frontend_Pages_home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    console.log('home App');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.menu-item[data-v-06b022ee]{\npadding: 10px 25px ;\n}\n.menu-item[data-v-06b022ee]{\nmargin: 0px 5px ;\n}\n.auth-menu[data-v-06b022ee]{\n    margin-top: -10px;\n}\n@media screen and (max-width: 768px) {\n#phonenav[data-v-06b022ee]{\n       display: none;\n}\nnav.nav-menu[data-v-06b022ee] {\n    position: absolute;\n    left: 0;\n    top: 96%;\n    background: rgb(3, 114, 90);\n    width: 100%;\n    padding: 10px;\n}\nnav.nav-menu > li[data-v-06b022ee]{\n    padding: 10px 0px;\n    padding: 20px 0px;\n    border-bottom: solid 3px rgb(3, 92, 72);\n}\n}\n.brang-logo[data-v-06b022ee]{\n    padding: 0px;\n}\na.menu-item.router-link-exact-active.router-link-active[data-v-06b022ee] {\n    background: #127d4f;\n}\na.menu-item[data-v-06b022ee]:hover{\n    background: #127d4f;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_Frontend_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/Frontend/css/style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/Frontend/css/style.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_Frontend_plugins_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/Frontend/plugins/font-awesome/css/font-awesome.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/Frontend/plugins/font-awesome/css/font-awesome.min.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_Frontend_css_style_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_Frontend_plugins_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/Frontend/css/style.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/Frontend/css/style.css ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_home_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/home/hero.jpg */ "./public/Frontend/images/home/hero.jpg");
/* harmony import */ var _images_subscription_subscription_back_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/subscription/subscription-back.jpg */ "./public/Frontend/images/subscription/subscription-back.jpg");
/* harmony import */ var _images_call_to_action_cta_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/call-to-action/cta-background.jpg */ "./public/Frontend/images/call-to-action/cta-background.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_home_hero_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_subscription_subscription_back_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_call_to_action_cta_background_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*=== MEDIA QUERY ===*/\nbody {\n  line-height: 1.5;\n  font-family: \"Muli\", sans-serif;\n}\n\np, li, input, select, button {\n  font-family: \"Muli\", sans-serif;\n  color: #666;\n  font-size: 14px;\n  font-weight: 400;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Muli\", sans-serif;\n  font-weight: 600;\n  color: #333;\n}\n\np {\n  color: #666;\n}\n\nh1 {\n  font-size: 35px;\n}\n\nh2 {\n  font-size: 25px;\n}\n\nh3 {\n  font-size: 20px;\n}\n\nh4 {\n  font-size: 18px;\n}\n\np {\n  color: #888;\n}\n\nlabel {\n  font-size: 14px;\n  letter-spacing: 0;\n  color: #848484;\n}\n\n.nav-pills .nav-link {\n  font-size: 16px;\n}\n\n@media (max-width: 480px) {\n  .nav-pills .nav-link {\n    font-size: 12px;\n  }\n}\n\n.nav-pills.with-background .nav-item {\n  margin-right: 10px;\n}\n\n.nav-pills.with-background .nav-item:last-child {\n  margin-right: 0;\n}\n\n.nav-pills.with-background .nav-link {\n  background: white;\n  padding: 10px 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n}\n\n.nav-pills.with-background .nav-link:hover {\n  color: #5672f9;\n}\n\n.nav-pills.with-background .nav-link.active {\n  background: #5672f9;\n  position: relative;\n  transition: 0s;\n}\n\n.nav-pills.with-background .nav-link.active:hover {\n  color: #fff;\n}\n\n.nav-pills.with-background .nav-link.active:after {\n  content: '';\n  position: absolute;\n  left: 42%;\n  top: 100%;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #5672f9;\n  clear: both;\n  transition: all .2s ease-in 0s;\n}\n\n.nav-pills.transparent .nav-link {\n  background: transparent;\n  margin-bottom: 20px;\n  color: #848484;\n  font-size: 24px;\n}\n\n@media (max-width: 768px) {\n  .nav-pills.transparent .nav-link {\n    font-size: 17px;\n  }\n}\n\n@media (max-width: 480px) {\n  .nav-pills.transparent .nav-link {\n    font-size: 12px;\n  }\n}\n\n.nav-pills.transparent .nav-link.active {\n  background: transparent;\n  color: #666;\n}\n\nul.pagination li {\n  margin-right: 10px;\n}\n\nul.pagination li a {\n  border-radius: 3px !important;\n  font-size: 16px;\n  padding: 0;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-color: transparent;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  color: #666;\n}\n\nul.pagination .active a {\n  background-color: #5672f9 !important;\n  color: #fff !important;\n  border-color: transparent !important;\n}\n\nul.social-circle-icons li {\n  margin-right: 7px;\n}\n\nul.social-circle-icons li:last-child {\n  margin-right: 0;\n}\n\nul.social-circle-icons li a {\n  display: block;\n  font-size: 15px;\n  line-height: 38px;\n  color: #5672f9;\n  height: 38px;\n  width: 38px;\n  border: 2px solid #5672f9;\n  background: #fff;\n  border-radius: 100%;\n}\n\nul.social-circle-icons li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: #5672f9;\n}\n\n.store-list h4 {\n  font-size: 20px;\n  margin-bottom: 20px;\n  letter-spacing: 0.01em;\n  color: #666;\n}\n\n.store-list ul {\n  list-style: none;\n}\n\n.store-list ul li {\n  display: block;\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n\n.store-list ul li a {\n  display: block;\n  color: #848484;\n}\n\n.store-list ul li a:hover {\n  text-decoration: underline;\n  color: #5672f9;\n}\n\n@media (max-width: 768px) {\n  .store-list {\n    margin-bottom: 15px;\n  }\n}\n\n.store-list .btn {\n  margin-top: 35px;\n}\n\n/**\r\n *\r\n * Base Elements\r\n *\r\n */\nol, ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nfigure {\n  margin: 0;\n}\n\na {\n  transition: all .3s ease-in 0s;\n  color: #000;\n}\n\niframe {\n  border: 0;\n}\n\na:focus, a:hover {\n  text-decoration: none;\n  outline: 0;\n  color: #5672f9;\n}\n\n.form-control {\n  border-radius: 2px;\n  height: 50px;\n  background-color: transparent;\n  color: #666;\n  box-shadow: none;\n  font-size: 15px;\n}\n\n.form-control:focus {\n  color: #666;\n  box-shadow: none;\n  border: 1px solid #5672f9;\n  background-color: transparent;\n}\n\ntextarea.form-control {\n  padding: 20px;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #666;\n}\n\n/* WebKit, Blink, Edge */\n.form-control:-moz-placeholder {\n  color: #666;\n}\n\n/* Mozilla Firefox 4 to 18 */\n.form-control::-moz-placeholder {\n  color: #666;\n}\n\n/* Mozilla Firefox 19+ */\n.form-control:-ms-input-placeholder {\n  color: #666;\n}\n\n/* Internet Explorer 10-11 */\n.form-control::-ms-input-placeholder {\n  color: #666;\n}\n\n/* Microsoft Edge */\n.mt-20 {\n  margin-top: 20px;\n}\n\n.btn:focus {\n  color: #ddd;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.margin-0 {\n  margin: 0 !important;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.btn.active:focus, .btn:active:focus, .btn:focus {\n  outline: 0;\n}\n\n.bg-shadow {\n  background-color: #fff;\n  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n}\n\n.section {\n  padding: 100px 0;\n}\n\n.section-sm {\n  padding: 70px 0;\n}\n\n.section-title {\n  position: relative;\n  margin-bottom: 75px;\n  text-align: center;\n}\n\n.section-title h2 {\n  font-size: 30px;\n  letter-spacing: 0.05em;\n  text-align: center;\n}\n\n.section-title h2:before {\n  content: \" \";\n  display: block;\n  margin: 0 auto;\n  position: absolute;\n  bottom: -24px;\n  left: 0;\n  right: 0;\n  width: 127px;\n  height: 2px;\n  background-color: #e0e0e0;\n}\n\n.section-title h2:after {\n  content: \" \";\n  display: block;\n  margin: 0 auto;\n  position: absolute;\n  bottom: -25px;\n  left: 0;\n  right: 0;\n  width: 40px;\n  height: 5px;\n  background-color: #5672f9;\n}\n\n.section-title p {\n  font-size: 18px;\n  line-height: 30px;\n  color: #848484;\n}\n\n.user-profile, .dashboard {\n  padding-top: 50px;\n}\n\n.overly {\n  position: relative;\n}\n\n.overly:before {\n  content: '';\n  background: rgba(0, 0, 0, 0.51);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.page-wrapper {\n  padding: 70px 0;\n}\n\n.social-media-icons ul li {\n  display: inline-block;\n}\n\n.social-media-icons ul li a {\n  font-size: 18px;\n  color: #333;\n  display: inline-block;\n  padding: 7px 12px;\n  color: #fff;\n}\n\n.social-media-icons ul li .twitter {\n  background: #00aced;\n}\n\n.social-media-icons ul li .facebook {\n  background: #3b5998;\n  padding: 7px 18px;\n}\n\n.social-media-icons ul li .googleplus {\n  background: #dd4b39;\n}\n\n.social-media-icons ul li .dribbble {\n  background: #ea4c89;\n}\n\n.social-media-icons ul li .instagram {\n  background: #bc2a8d;\n}\n\n/**\r\n *\r\n * Button Styles\r\n *\r\n */\n.btn {\n  font-size: 15px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 4px;\n}\n\n.btn-main, .btn-main-sm {\n  background: #5672f9;\n  color: #fff;\n}\n\n.btn-main:hover, .btn-main-sm:hover {\n  background: #082de1;\n  color: #fff;\n}\n\n.btn-main-sm {\n  padding: 6px 20px;\n  font-size: 12px;\n}\n\n.btn-secondary {\n  background: #fff;\n  color: #000;\n  border-color: #fff;\n}\n\n.btn-secondary:hover {\n  background: #5672f9;\n  color: #fff;\n  border-color: #fff;\n}\n\n.btn-transparent {\n  background: transparent;\n  color: #5672f9;\n  border: 1px solid #5672f9;\n}\n\n.btn-transparent:hover {\n  background: #082de1;\n  color: #fff;\n}\n\n.btn-transparent-white {\n  background: transparent;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.btn-transparent-white:hover {\n  background: #fff;\n  color: #848484;\n}\n\n.btn-group .btn i {\n  font-size: 16px;\n  line-height: 40px;\n}\n\n.btn-group .btn:focus {\n  color: #d0d0d0;\n}\n\n.btn-group .btn-transparent {\n  color: #d0d0d0;\n  border: 1px solid #d0d0d0;\n  padding: 0;\n  width: 40px;\n}\n\n.btn-group .btn-transparent:hover {\n  color: #e6b322;\n  background: transparent;\n}\n\n.btn-active {\n  color: #e6b322;\n}\n\n.btn:focus {\n  color: #5672f9;\n  box-shadow: none;\n}\n\n/**\r\n *\r\n * Card Styles\r\n *\r\n */\n.card-main {\n  border-radius: 2px;\n  border: none;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n}\n\n.mb-30 {\n  margin-bottom: 20px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dedede;\n}\n\n.bl-none {\n  border-left: none !important;\n}\n\n.alt-color {\n  color: #c7c7c7;\n}\n\n.success {\n  color: #1fcc2e;\n}\n\n.page-title {\n  background: #5672f9;\n  padding: 35px 0;\n}\n\n.page-title h3 {\n  color: #fff;\n  font-size: 42px;\n  letter-spacing: 0;\n  line-height: 1;\n  margin-bottom: 0;\n}\n\nul.pagination li {\n  margin-right: 10px;\n}\n\nul.pagination li a {\n  font-weight: 600;\n  border-radius: 3px !important;\n  font-size: 16px;\n  padding: 0;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-color: transparent;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  color: #666;\n}\n\nul.pagination li a:hover {\n  background-color: #5672f9 !important;\n  color: #fff !important;\n  border-color: transparent !important;\n}\n\nul.pagination .active a {\n  background-color: #5672f9 !important;\n  color: #fff !important;\n  border-color: transparent !important;\n}\n\n.page-search {\n  background: #5672f9;\n  padding: 30px 0;\n}\n\n.page-search .advance-search .form-group {\n  margin-bottom: 0;\n}\n\n.page-search .advance-search .form-control {\n  border: 1px solid #fff;\n  color: #fff;\n}\n\n.page-search .advance-search ::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff;\n}\n\n.page-search .advance-search ::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n}\n\n.page-search .advance-search :-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff;\n}\n\n.page-search .advance-search :-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n}\n\n.bg-light {\n  background: #fff;\n}\n\n.bg-gray {\n  background: #F5F5F5;\n}\n\n.bg-1 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.bg-2 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.bg-3 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-4 {\n  background: #5672f9;\n}\n\n.navigation {\n  padding: 20px 0;\n}\n\n.navigation .navbar-nav {\n  text-align: center;\n}\n\n.login-button {\n  border: 2px solid #dedede;\n  margin-right: 8px;\n  padding: 6px 20px !important;\n}\n\n@media (max-width: 400px) {\n  .login-button {\n    display: inline-block;\n    padding: 6px 45px !important;\n    margin: 5px 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .login-button {\n    display: inline-block;\n    padding: 6px 45px !important;\n    margin: 5px 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .login-button {\n    display: inline-block;\n    padding: 6px 45px !important;\n    margin: 5px 0;\n  }\n}\n\n@media (max-width: 992px) {\n  .login-button {\n    display: inline-block;\n    padding: 6px 45px !important;\n    margin: 5px 0;\n  }\n}\n\n.add-button {\n  background: #28a745;\n  color: #fff;\n  padding: 8px 20px !important;\n  display: inline-block;\n}\n\n.add-button:hover {\n  color: #fff;\n}\n\n.main-nav .nav-item .nav-link {\n  font-size: 16px;\n  line-height: 43px;\n  padding: 0 20px;\n}\n\n.main-nav .nav-item .nav-link span {\n  margin-left: 4px;\n}\n\n.main-nav .nav-item .nav-link.dropdown-toggle {\n  padding-right: 10px;\n}\n\n.main-nav .nav-item .dropdown-toggle::after {\n  border: none;\n}\n\n.main-nav .nav-item.active .nav-link {\n  color: #5672f9;\n}\n\n.main-nav .search .nav-link i {\n  font-size: 15px;\n  height: 43px;\n  width: 43px;\n  line-height: 43px;\n  color: #5672f9;\n  border: 1px solid #5672f9;\n  border-radius: 3px;\n  text-align: center;\n}\n\n.main-nav .search .input-group {\n  width: 300px;\n}\n\n.main-nav .search .input-group .input-group-addon {\n  background: #5672f9;\n  color: #fff;\n  border: 1px solid #5672f9;\n}\n\n.main-nav .search .input-group .input-group-addon i {\n  font-size: 15px;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.dropdown-menu {\n  padding: 15px;\n  border-radius: 0;\n}\n\n.nav-item.dropdown {\n  position: relative;\n}\n\n.dropdown-item.active, .dropdown-item:active {\n  background: #5672f9;\n}\n\n.dropdown-item {\n  font-size: 14px;\n  padding: 10px 60px 10px 10px;\n}\n\n@media (max-width: 400px) {\n  .dropdown-item {\n    padding: 10px 25px 10px 10px;\n    text-align: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .dropdown-item {\n    padding: 10px 25px 10px 10px;\n    text-align: center;\n  }\n}\n\n@media (max-width: 768px) {\n  .dropdown-item {\n    padding: 10px 25px 10px 10px;\n    text-align: center;\n  }\n}\n\n@media (max-width: 992px) {\n  .dropdown-item {\n    padding: 10px 25px 10px 10px;\n    text-align: center;\n  }\n}\n\n@media (min-width: 992px) {\n  .dropdown-slide {\n    position: static;\n  }\n  .dropdown-slide .open > a, .dropdown-slide .open > a:focus, .dropdown-slide .open > a:hover {\n    background: transparent;\n  }\n  .dropdown-slide.full-width .dropdown-menu {\n    left: 0 !important;\n    right: 0 !important;\n  }\n  .dropdown-slide:hover .dropdown-menu {\n    display: none;\n    opacity: 1;\n    display: block;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n    opacity: 1;\n    visibility: visible;\n    color: #777;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  .dropdown-slide .dropdown-menu {\n    margin-top: 0;\n    border-radius: 0;\n    opacity: 1;\n    visibility: visible;\n    position: absolute;\n    padding: 15px;\n    border: 1px solid #ebebeb;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n    transition: .3s all;\n    position: absolute;\n    display: block;\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n    transition: visibility 0.2s, opacity 0.2s, -webkit-transform 500ms cubic-bezier(0.43, 0.26, 0.11, 0.99);\n    transition: visibility 0.2s, opacity 0.2s, transform 500ms cubic-bezier(0.43, 0.26, 0.11, 0.99);\n    transition: visibility 0.2s, opacity 0.2s, transform 500ms cubic-bezier(0.43, 0.26, 0.11, 0.99), -webkit-transform 500ms cubic-bezier(0.43, 0.26, 0.11, 0.99);\n  }\n}\n\n@media (min-width: 992px) and (max-width: 480px) {\n  .dropdown-slide .dropdown-menu {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@media (max-width: 480px) {\n  .navbar-toggleable-md > .container {\n    margin-right: 0;\n    margin-left: 0;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n}\n\n.hero-area .content-block h1, .hero-area-2 .content-block h1 {\n  color: #fff;\n  font-size: 65px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  margin-bottom: 15px;\n}\n\n@media (max-width: 768px) {\n  .hero-area .content-block h1, .hero-area-2 .content-block h1 {\n    font-size: 40px;\n  }\n}\n\n.hero-area .content-block p, .hero-area-2 .content-block p {\n  color: #fff;\n  font-size: 20px;\n}\n\n@media (max-width: 768px) {\n  .hero-area .content-block p, .hero-area-2 .content-block p {\n    font-size: 17px;\n  }\n}\n\n.hero-area {\n  padding: 100px 0 0;\n}\n\n.hero-area .content-block {\n  padding-bottom: 80px;\n}\n\n.hero-area .advance-search {\n  background: #fff;\n  padding: 40px 15px 25px 15px;\n  border-radius: 3px;\n  margin-bottom: -50px;\n  box-shadow: -1px 3px 6px rgba(0, 0, 0, 0.12);\n}\n\n@media (max-width: 480px) {\n  .hero-area .advance-search {\n    margin-bottom: -80px;\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-area .advance-search .block {\n    display: block !important;\n  }\n}\n\n.hero-area .advance-search .form-control {\n  border-color: #dedede;\n}\n\n.hero-area .advance-search button {\n  display: block;\n}\n\n@media (max-width: 480px) {\n  .hero-area .advance-search button {\n    width: 100%;\n  }\n}\n\n.short-popular-category-list {\n  margin-top: 40px;\n}\n\n.short-popular-category-list h2 {\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fff;\n}\n\n.short-popular-category-list ul {\n  margin-top: 20px;\n}\n\n.short-popular-category-list ul li {\n  margin: 0 2px;\n}\n\n.short-popular-category-list ul li a {\n  border: 1px solid #404040;\n  color: #c1c1c1;\n  font-weight: 200;\n  padding: 4px 10px;\n  font-size: 12px;\n}\n\n.short-popular-category-list ul li a i {\n  margin-right: 2px;\n}\n\n.page-breadcrumb {\n  background: none;\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n\n.page-breadcrumb li a {\n  color: #fff;\n}\n\n.page-breadcrumb li.active {\n  color: #fff !important;\n}\n\n.category-slider {\n  box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.07);\n  background: #fff;\n  padding: 20px 0;\n}\n\n.category-slider .item {\n  text-align: center;\n}\n\n.category-slider .item a {\n  display: inline-block;\n  padding: 20px 40px;\n  background: #fff;\n}\n\n.category-slider .item a h4 {\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n.category-slider .item a i {\n  font-size: 40px;\n}\n\n.user-dashboard-menu li {\n  margin-bottom: 5px;\n}\n\n.user-dashboard-menu li.active a {\n  background: #5672f9;\n  color: #fff;\n}\n\n.user-dashboard-menu li.active a:hover {\n  color: #fff;\n}\n\n.user-dashboard-menu li a {\n  padding: 10px;\n  font-size: 15px;\n  display: block;\n  font-weight: 600;\n  color: #555;\n}\n\n.user-dashboard-menu li a:hover {\n  color: #5672f9;\n}\n\n.user-dashboard-menu li a:hover span {\n  background: #5672f9;\n  color: #fff;\n}\n\n.user-dashboard-menu li a i {\n  margin-right: 5px;\n}\n\n.user-dashboard-menu li a span {\n  float: right;\n  background: #F4F7F9;\n  float: right;\n  font-size: 10px;\n  border-radius: 8px;\n  padding: 3px 8px;\n  color: #84919B;\n}\n\n.user-dashboard-profile {\n  text-align: center;\n}\n\n.user-dashboard-profile .profile-thumb img {\n  width: 130px;\n  height: auto;\n  border: 5px solid #F4F7F9;\n}\n\n.user-dashboard-profile h4 {\n  margin-top: 10px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.user-dashboard-profile .member-time {\n  color: #888;\n  font-size: 12px;\n  margin-bottom: 3px;\n}\n\n.user-dashboard-profile .btn-contact {\n  background: #1FCA6B;\n}\n\n.user-dashboard-profile .btn-offer {\n  background: #373C4D;\n}\n\n.dashboard-container .product-dashboard-table thead th {\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n\n.dashboard-container .product-dashboard-table td {\n  vertical-align: middle;\n  padding: 40px 0;\n}\n\n.dashboard-container .product-thumb {\n  width: 15%;\n}\n\n.dashboard-container tbody tr:hover .action a {\n  color: #fff;\n}\n\n.dashboard-container tbody tr:hover .action a.edit {\n  background: #59d659;\n}\n\n.dashboard-container tbody tr:hover .action a.view {\n  background: #50c6e9;\n}\n\n.dashboard-container tbody tr:hover .action a.delete {\n  background: #ff5252;\n}\n\n.dashboard-container .product-details {\n  width: 45%;\n}\n\n.dashboard-container .product-details span {\n  display: block;\n  font-size: 14px;\n  color: #848484;\n}\n\n.dashboard-container .product-details span strong {\n  color: #666;\n  width: 30%;\n  display: inline-block;\n}\n\n.dashboard-container .product-details .title {\n  font-size: 16px;\n}\n\n.dashboard-container .product-details .status.active {\n  color: #59d659;\n}\n\n.dashboard-container .product-category {\n  width: 15%;\n  text-align: center;\n}\n\n.dashboard-container .action {\n  width: 20%;\n  text-align: center;\n}\n\n.dashboard-container .action a {\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  font-size: 14px;\n  color: #363b4d;\n  text-align: center;\n  display: inline-block;\n}\n\n.dashboard-container .action a:hover {\n  color: #fff;\n}\n\n.dashboard-container .action a:hover.delete {\n  background: #ff5252;\n}\n\n.dashboard-container .action a i {\n  line-height: 40px;\n}\n\n.dashboard-container .action .list-inline .list-inline-item:not(:last-child) {\n  margin-right: 0px;\n}\n\n.dashboard-container .action .edit {\n  background: #f7f7f7;\n}\n\n.dashboard-container .action .view {\n  background: #f7f7f7;\n}\n\n.dashboard-container .action .delete {\n  background: #f7f7f7;\n}\n\n.submit-coupon .form-control, .submit-coupon .sbHolder {\n  margin-bottom: 30px;\n}\n\n.submit-coupon button {\n  margin-top: 20px;\n}\n\n.deals-categories {\n  padding: 100px 0 0 0;\n}\n\n.deals-categories .border-bottom {\n  padding-bottom: 70px;\n}\n\n@media (max-width: 768px) {\n  .hero-area-2 {\n    padding: 60px 0;\n  }\n}\n\n.hero-area-2 .content-block {\n  padding-bottom: 30px;\n}\n\n.hero-area-2 form {\n  margin-bottom: 13px;\n}\n\n.hero-area-2 .coupon-ig {\n  margin-bottom: 6px;\n  /* WebKit, Blink, Edge */\n  /* Mozilla Firefox 4 to 18 */\n  /* Mozilla Firefox 19+ */\n  /* Internet Explorer 10-11 */\n  /* Microsoft Edge */\n}\n\n.hero-area-2 .coupon-ig input {\n  background: #5672f9;\n  color: #fff;\n  border-color: transparent;\n}\n\n.hero-area-2 .coupon-ig .input-group-addon {\n  background: #5672f9;\n  color: #fff;\n  border-left: none;\n}\n\n.hero-area-2 .coupon-ig .input-group-addon i {\n  font-size: 17px;\n  padding-right: 7px;\n}\n\n.hero-area-2 .coupon-ig .form-control::-webkit-input-placeholder {\n  color: white;\n}\n\n.hero-area-2 .coupon-ig .form-control:-moz-placeholder {\n  color: white;\n}\n\n.hero-area-2 .coupon-ig .form-control::-moz-placeholder {\n  color: white;\n}\n\n.hero-area-2 .coupon-ig .form-control:-ms-input-placeholder {\n  color: white;\n}\n\n.hero-area-2 .coupon-ig .form-control::-ms-input-placeholder {\n  color: white;\n}\n\n.hero-area-2 .category-search .form-control {\n  background: #fff;\n}\n\n.best-deal .block .tab-content {\n  margin-top: 30px;\n}\n\n.category-block {\n  box-shadow: 0px 7px 16px 0px rgba(0, 0, 0, 0.09);\n  padding: 20px 25px;\n  border-radius: 3px;\n  margin-bottom: 25px;\n}\n\n.category-block .header {\n  margin-bottom: 20px;\n  border-bottom: 3px solid #F4F7F9;\n  text-align: center;\n}\n\n.category-block .header h4 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 5px;\n}\n\n.category-block .header .icon-bg-1 {\n  background: #ccdb38;\n  box-shadow: 0 0 0px 4px rgba(204, 219, 56, 0.35);\n}\n\n.category-block .header .icon-bg-2 {\n  background: #a676b8;\n  box-shadow: 0 0 0px 4px rgba(166, 118, 184, 0.35);\n}\n\n.category-block .header .icon-bg-3 {\n  background: #fe7e17;\n  box-shadow: 0 0 0px 4px rgba(254, 126, 23, 0.35);\n}\n\n.category-block .header .icon-bg-4 {\n  background: #EC3A56;\n  box-shadow: 0 0 0px 4px rgba(236, 58, 86, 0.35);\n}\n\n.category-block .header .icon-bg-5 {\n  background: #1DBFFF;\n  box-shadow: 0 0 0px 4px rgba(29, 191, 255, 0.35);\n}\n\n.category-block .header .icon-bg-6 {\n  background: #02d3a4;\n  box-shadow: 0 0 0px 4px rgba(2, 211, 164, 0.35);\n}\n\n.category-block .header .icon-bg-7 {\n  background: #bc02d3;\n  box-shadow: 0 0 0px 4px rgba(188, 2, 211, 0.35);\n}\n\n.category-block .header .icon-bg-8 {\n  background: #025fd3;\n  box-shadow: 0 0 0px 4px rgba(2, 95, 211, 0.35);\n}\n\n.category-block .header i {\n  margin-right: 6px;\n  color: #fff;\n  font-size: 13px;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  margin-bottom: 6px;\n  border-radius: 40px;\n}\n\n.category-block .category-list li {\n  display: block;\n  font-size: 14px;\n  border-bottom: 1px solid #F4F7F9;\n  padding: 10px 0;\n}\n\n.category-block .category-list li:last-child {\n  border: none;\n}\n\n.category-block .category-list li a {\n  display: block;\n  color: #777;\n  font-size: 13px;\n}\n\n.category-block .category-list li a span {\n  float: right;\n  font-size: 10px;\n  border-radius: 10px;\n  padding: 3px 8px;\n  color: #84919B;\n}\n\n.category-block .category-list li a:hover {\n  text-decoration: underline;\n}\n\n.category-block .category-list li a i {\n  margin-right: 6px;\n  font-size: 12px;\n  color: #5672f9;\n  vertical-align: middle;\n}\n\n.search-result {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\n.search-result p {\n  margin: 0;\n}\n\n.category-search-filter {\n  background: #f7f7f7;\n  padding: 20px;\n}\n\n.category-search-filter strong {\n  margin: 0 5px;\n}\n\n.category-search-filter .view {\n  text-align: right;\n}\n\n.category-search-filter .view ul {\n  display: inline-block;\n}\n\n.category-search-filter .view ul li:not(:last-child) {\n  margin-right: 10px;\n}\n\n.category-search-filter .view ul li a {\n  font-size: 15px;\n}\n\n.category-search-filter .view .view-switcher {\n  background: #fff;\n  padding: 10px 15px;\n}\n\n.nice-select {\n  float: none;\n  display: inline-block;\n  border-radius: 0;\n}\n\n.nice-select .list {\n  border-radius: 0;\n}\n\n.arrow-right, .arrow-left {\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  background: #025fd3;\n  text-align: center;\n  color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2;\n}\n\n.arrow-right {\n  right: -18px;\n}\n\n.arrow-left {\n  left: -18px;\n}\n\n.product-item {\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n\n.product-item .card {\n  border: none;\n}\n\n.product-item .card .card-body {\n  padding: 20px;\n}\n\n.product-item .card .card-body .card-title {\n  font-size: 18px;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n\n.product-item .card .card-body .card-text {\n  color: #777;\n}\n\n.product-item .thumb-content {\n  position: relative;\n}\n\n.product-item .thumb-content .price {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #5672f9;\n  color: #fff;\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 12px;\n}\n\n.product-item .product-meta {\n  margin-bottom: 15px;\n}\n\n.product-item .product-meta li {\n  margin-right: 15px;\n}\n\n.product-item .product-meta li a {\n  color: #888;\n  font-size: 12px;\n}\n\n.product-item .product-meta li a i {\n  margin-right: 4px;\n}\n\n.product-item .product-ratings li {\n  margin-right: 1px;\n}\n\n.product-item .product-ratings li i {\n  font-size: 18px;\n  color: #dedede;\n  cursor: pointer;\n}\n\n.product-item .product-ratings .selected i {\n  color: #5672f9;\n}\n\n.product-details .product-title {\n  font-size: 25px;\n  font-weight: 600;\n}\n\n.product-details .tab-title {\n  border-bottom: 1px solid #dedede;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\n\n.product-details .product-meta li {\n  color: #888;\n  margin-right: 25px;\n}\n\n.product-details .product-meta li a {\n  color: #333;\n  margin-left: 3px;\n}\n\n.product-details .content {\n  padding-top: 40px;\n}\n\n.product-details .content h3 {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.product-details .content p {\n  color: #888;\n  line-height: 22px;\n}\n\n.product-details .content .nav {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.product-details .content .nav .nav-item {\n  margin-right: 3px;\n}\n\n.product-details .content .nav .nav-item .nav-link {\n  padding: 20px 30px;\n  border-radius: 0;\n  background: #fff;\n}\n\n.product-details .content .nav .nav-item .nav-link:hover {\n  background: #5672f9;\n  color: #fff;\n}\n\n.product-details .content .nav .nav-item .nav-link.active {\n  background: #5672f9;\n}\n\n.product-details .content .tab-content {\n  background: #fff;\n  padding: 30px;\n}\n\n.product-slider {\n  padding: 40px 0;\n}\n\n.product-slider .carousel-indicators li {\n  background: #888;\n}\n\n.product-slider .carousel-indicators li.active {\n  background: #5672f9;\n}\n\n.product-slider .slick-dots {\n  display: flex;\n  bottom: -50px;\n}\n\n.product-slider .slick-dots li {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  padding-left: 0;\n}\n\n.product-slider .slick-dots li:first-child {\n  margin-left: 0;\n}\n\n.product-slider .slick-dots li:last-child {\n  margin-right: 0;\n}\n\n.product-slider .slick-dots li img {\n  max-width: 100%;\n  height: auto;\n}\n\n.product-table {\n  margin-top: 20px;\n}\n\n.product-table tr td:first-child {\n  background: #f9f9f9;\n}\n\n.product-table tr td {\n  padding-left: 25px;\n}\n\n.product-review img {\n  width: 60px;\n  margin-right: 20px;\n}\n\n.product-review .name h5 {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\n.product-review .media-body {\n  background: #fff;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 30px;\n  border-radius: 2px;\n}\n\n.product-review .review-submission h5 {\n  font-size: 16px;\n  color: #888;\n}\n\n.product-review .review-submission .rate {\n  margin-bottom: 20px;\n}\n\n.product-review .review-submission .rate i {\n  margin: 0 5px;\n}\n\n.product-review .review-submission .form-control {\n  margin-bottom: 8px;\n  border-radius: 0;\n}\n\n.product-review .review-submission input[type=\"email\"], .product-review .review-submission input[type=\"password\"], .product-review .review-submission input[type=\"text\"], .product-review .review-submission input[type=\"tel\"] {\n  height: 40px;\n}\n\n.widget {\n  background: #fff;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  padding: 25px 30px 30px;\n  margin-bottom: 30px;\n  border-radius: 2px;\n}\n\n.widget .widget-header {\n  display: block;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #dedede;\n}\n\n.widget.category-list ul li:not(:last-child) {\n  border-bottom: 1px solid #F4F7F9;\n}\n\n.widget.category-list ul li a {\n  padding: 8px 0;\n  display: block;\n  transition: all linear 0.3s;\n}\n\n.widget.category-list ul li a span {\n  float: right;\n  font-size: 10px;\n  background: #F4F7F9;\n  border-radius: 10px;\n  padding: 3px 8px;\n  color: #84919B;\n}\n\n.widget.category-list ul li a:hover {\n  color: #5672f9;\n}\n\n.widget.category-list ul li a:hover span {\n  background: #5672f9;\n  color: #fff;\n}\n\n.widget.filter .nice-select {\n  width: 100%;\n}\n\n.widget.filter .nice-select .list {\n  width: 100%;\n}\n\n.widget.price-range b {\n  font-size: 13px;\n  color: #888;\n}\n\n.widget.price-range .slider.slider-horizontal {\n  width: 100%;\n}\n\n.widget.price-range .slider-handle {\n  background: #5672f9;\n}\n\n.widget.price-range .slider-track {\n  margin-top: -2px;\n  height: 5px;\n  box-shadow: none;\n  border-radius: 0;\n  background: #f5f5f5;\n}\n\n.widget.price-range .slider-selection {\n  background: #dedede;\n  box-shadow: none;\n}\n\n.widget.price {\n  background: #5672f9;\n}\n\n.widget.price h4 {\n  color: #fff;\n}\n\n.widget.price p {\n  color: #fff;\n  font-size: 30px;\n  text-align: center;\n  font-weight: bold;\n  margin: 0;\n}\n\n.widget.map {\n  padding: 10px;\n}\n\n.widget.map #map_canvas {\n  height: 300px;\n}\n\n.widget.category ul.category-list li {\n  margin-bottom: 8px;\n}\n\n.widget.category ul.category-list li a {\n  font-size: 15px;\n  letter-spacing: 0;\n  display: block;\n  color: #848484;\n}\n\n.widget.category ul.category-list li a:hover {\n  color: #5672f9;\n}\n\n.widget.category ul.category-list li:last-child {\n  margin-bottom: 5px;\n}\n\n.widget.archive ul.archive-list li {\n  margin-bottom: 10px;\n}\n\n.widget.archive ul.archive-list li:last-child {\n  margin-bottom: 5px;\n}\n\n.widget.archive ul.archive-list li a {\n  font-size: 15px;\n  letter-spacing: 0;\n  display: block;\n  color: #848484;\n}\n\n.widget.archive ul.archive-list li a:hover {\n  color: #5672f9;\n  text-decoration: underline;\n}\n\n.widget.share-coupon .sbHolder, .widget.share-coupon .form-control {\n  margin-bottom: 10px !important;\n}\n\n.widget.share-coupon button {\n  width: 100%;\n}\n\n.widget.coupon {\n  background: #5672f9;\n  padding: 35px 30px 40px 30px;\n}\n\n.widget.coupon p {\n  font-size: 20px;\n  line-height: 1.4;\n  color: #fff;\n  margin-bottom: 25px;\n}\n\n.widget.rate .starrr {\n  display: flex;\n  justify-content: center;\n}\n\n.widget.rate .starrr i {\n  font-size: 20px;\n  cursor: pointer;\n  color: #e6b322;\n  padding: 0 5px;\n}\n\n.widget.filter {\n  padding-bottom: 17px;\n}\n\n.widget.filter .form-1 {\n  margin-bottom: 20px;\n}\n\n.widget.filter .form-check-label {\n  font-size: 14px;\n  color: #848484;\n}\n\n.widget.filter .form-check-label input {\n  margin-right: 10px;\n}\n\n.widget.filter .form-check-label input[type=checkbox]:checked .form-check-label {\n  color: #5672f9 !important;\n}\n\n.widget.filter .form-check-label:hover {\n  color: #5672f9;\n}\n\n.widget.user {\n  padding-top: 50px;\n}\n\n.widget.user .image img {\n  width: 157px;\n  height: 157px;\n  border-radius: 100%;\n  border: 7px solid #dedede;\n}\n\n.widget.user h5 {\n  font-size: 20px;\n  margin-top: 23px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.widget .welcome-message h2 {\n  font-size: 30px;\n  line-height: 54px;\n  letter-spacing: .05em;\n}\n\n.widget .welcome-message p {\n  font-size: 14px;\n  line-height: 26px;\n  letter-spacing: 0;\n  color: #848484;\n}\n\n.widget.personal-info .form-group, .widget.change-password .form-group, .widget.change-email .form-group {\n  margin-bottom: 25px;\n}\n\n.widget.personal-info .form-group i, .widget.change-password .form-group i, .widget.change-email .form-group i {\n  color: white;\n  background: #5672f9;\n  font-size: 25px;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  margin-right: 15px;\n  border-radius: 100%;\n}\n\n@media (max-width: 768px) {\n  .widget.personal-info .form-group i, .widget.change-password .form-group i, .widget.change-email .form-group i {\n    margin-bottom: 20px;\n  }\n}\n\n.widget.personal-info .form-check, .widget.change-password .form-check, .widget.change-email .form-check {\n  margin-bottom: 25px;\n}\n\n.widget.personal-info .form-check .form-check-label input, .widget.change-password .form-check .form-check-label input, .widget.change-email .form-check .form-check-label input {\n  margin-right: 7px;\n}\n\n.widget.personal-info button, .widget.change-password button, .widget.change-email button {\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n.widget.product-shorting .form-check {\n  margin-bottom: 4px;\n}\n\n@media (max-width: 768px) {\n  .widget.search {\n    margin-top: 30px;\n  }\n}\n\n.widget.search .input-group .form-control {\n  border: none;\n}\n\n.widget.search .input-group .input-group-addon {\n  background: #5672f9;\n  color: #fff;\n  border: none;\n}\n\n.widget.search .input-group .input-group-addon i {\n  font-size: 15px;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 45px;\n  cursor: pointer;\n}\n\n.call-to-action .content-holder h2 {\n  color: #fff;\n  font-weight: 600;\n}\n\n@media (max-width: 400px) {\n  .call-to-action .content-holder ul li a {\n    font-size: 14px;\n    padding: 12px;\n  }\n}\n\n.call-to-action .content-holder .store-btn-holder {\n  margin-top: 35px;\n}\n\n@media (max-width: 768px) {\n  .call-to-action .content-holder .store-btn-holder {\n    margin-top: 25px;\n  }\n  .call-to-action .content-holder .store-btn-holder a:first-child img {\n    margin-bottom: 10px;\n  }\n}\n\n.call-to-action .content-holder .store-btn-holder a {\n  margin-right: 15px;\n}\n\n.subscription {\n  position: relative;\n  padding: 80px 0;\n}\n\n.subscription .content-block h2 {\n  font-size: 43px;\n  letter-spacing: 0.05em;\n  text-align: center;\n  color: #fff;\n  margin-bottom: 40px;\n}\n\n@media (max-width: 768px) {\n  .subscription .content-block h2 {\n    font-size: 30px;\n  }\n}\n\n.subscription .content-block .form-control {\n  display: inline-block;\n  background-color: #fff;\n}\n\n.subscription .content-block input {\n  width: 69%;\n}\n\n.subscription .content-block button {\n  margin-left: 10px;\n  width: 30%;\n}\n\n@media (max-width: 768px) {\n  .subscription .content-block button {\n    width: auto;\n  }\n}\n\n.client-slider-03 {\n  padding: 30px 0 0 0;\n}\n\n.stores {\n  padding-bottom: 70px;\n  padding-top: 70px;\n}\n\n.stores .block {\n  margin-bottom: 30px;\n}\n\n.stores .block:last-child {\n  margin-bottom: 0;\n}\n\n.stores .store-letter {\n  font-size: 20px;\n  margin-bottom: 16px;\n}\n\n.stores hr {\n  margin-bottom: 25px;\n}\n\n.stores ul.store-list li a {\n  display: block;\n  font-size: 15px;\n  color: #666;\n  margin-bottom: 25px;\n}\n\n.stores ul.store-list li a:hover {\n  text-decoration: underline;\n  color: #5672f9;\n}\n\n.store-coupon {\n  padding: 30px 0;\n}\n\n.store-coupon .block {\n  padding: 25px 30px 30px;\n  background: #fff;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n}\n\n@media (max-width: 768px) {\n  .store-coupon .block .media {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 768px) {\n  .store-coupon .block .media .image-content {\n    flex-grow: 1;\n    width: 100%;\n    justify-content: center;\n    padding-bottom: 30px;\n  }\n}\n\n.store-coupon .block .media .media-body {\n  margin: 0 75px;\n}\n\n.store-coupon .block .media .media-body h4 {\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n}\n\n.store-coupon .block .media .media-body ul li {\n  font-weight: bold;\n  font-size: 17px;\n  padding: 0 15px;\n  border-right: 1px solid #dedede;\n}\n\n.store-coupon .block .media .media-body ul li:last-child {\n  border: none;\n}\n\n.store-coupon .block .media .media-body ul li a {\n  color: #5672f9;\n}\n\n.store-coupon .block .media .media-body p {\n  font-size: 14px;\n  line-height: 26px;\n  color: #848484;\n  letter-spacing: 0;\n  margin: 20px 0;\n}\n\n@media (max-width: 768px) {\n  .store-coupon .block .media .media-body {\n    flex-grow: 1;\n    width: 100%;\n    text-align: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .store-coupon .block .media .media-body {\n    margin: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .store-coupon .block .social-content {\n    flex-grow: 1;\n    width: 100%;\n    padding-top: 30px;\n    text-align: center;\n  }\n}\n\n.store-coupon .block .social-content ul.social-circle-icons li {\n  margin-right: 7px;\n}\n\n.store-coupon .block .social-content ul.social-circle-icons li:last-child {\n  margin-right: 0;\n}\n\n.store-coupon .block .social-content ul.social-circle-icons li a {\n  display: block;\n  font-size: 15px;\n  line-height: 38px;\n  color: #5672f9;\n  height: 38px;\n  width: 38px;\n  border: 2px solid #5672f9;\n  background: #fff;\n  border-radius: 100%;\n}\n\n.store-coupon .block .social-content ul.social-circle-icons li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: #5672f9;\n}\n\n.store-coupon .block .social-content .share {\n  font-size: 15px;\n  line-height: 28px;\n  color: #848484;\n}\n\n@media (max-width: 768px) {\n  .store-coupon .block .social-content .share {\n    text-align: center !important;\n    margin-top: 10px;\n  }\n}\n\n.store {\n  padding: 0 0 80px 0;\n}\n\n.store .block .store-nav .nav-item .nav-link {\n  font-size: 17px;\n  padding: 0 40px 0 0;\n  margin-bottom: 15px;\n}\n\n.submit-coupon-sec {\n  padding-top: 70px;\n}\n\n.submit-coupon-sec form .form-group label {\n  color: #666;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.submit-coupon-sec form .form-group .form-control {\n  background: #fff;\n}\n\n.submit-coupon-sec form .form-group .input-group input {\n  border-right: none;\n}\n\n.submit-coupon-sec form .form-group .input-group input:focus + .input-group-addon {\n  border: 1px solid #5672f9;\n}\n\n.submit-coupon-sec form .form-group .input-group .input-group-addon {\n  background: #fff;\n  border-left: none !important;\n}\n\n.submit-coupon-sec form .form-group .input-group .input-group-addon i {\n  font-size: 15px;\n  color: #848484;\n  padding-right: 8px;\n}\n\n.submit-coupon-sec form .coupon-type {\n  padding: 40px 0 22px 0;\n}\n\n.submit-coupon-sec form .coupon-type ul.coupon-types li {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .submit-coupon-sec form .coupon-type ul.coupon-types li {\n    margin: 5px;\n  }\n}\n\n.submit-coupon-sec form .coupon-type ul.coupon-types li a {\n  color: #5672f9;\n  display: block;\n  font-size: 14px;\n  text-decoration: none;\n  padding: 25px 0;\n  width: 170px;\n  text-align: center;\n  border: 1px solid #5672f9;\n  border-radius: 3px;\n}\n\n.submit-coupon-sec form .coupon-type ul.coupon-types li a i {\n  display: block;\n  text-align: center;\n  font-size: 40px;\n}\n\n.submit-coupon-sec form .coupon-type ul.coupon-types li.active a {\n  background: #5672f9;\n  color: #fff;\n}\n\n.submit-coupon-sec form button {\n  margin-top: 10px;\n}\n\n.submit-coupon-sec p {\n  margin: 70px 0 0 0;\n  font-size: 14px;\n  line-height: 26px;\n  color: #848484;\n  letter-spacing: 0.01em;\n}\n\n.submit-coupon-sec p a {\n  color: #5672f9;\n  text-decoration: underline;\n}\n\narticle {\n  background: #fff;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 30px;\n  border-radius: 2px;\n}\n\narticle .image, article .video, article .post-slider {\n  margin-bottom: 25px;\n}\n\narticle img {\n  width: 100%;\n  border-radius: 3px;\n}\n\narticle .video {\n  position: relative;\n}\n\narticle .video:before {\n  border-radius: 3px;\n}\n\narticle .video .video-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\narticle .video .video-box a {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\narticle .video .video-box a img {\n  width: 79px;\n}\n\narticle .video .video-box a iframe {\n  width: 100%;\n  height: 100%;\n}\n\narticle .post-slider .owl-nav {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n\narticle .post-slider .owl-nav i {\n  font-size: 30px;\n  color: #fff;\n}\n\narticle .post-slider .owl-nav [class*=owl-] {\n  padding: 7px 16px;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n\narticle .post-slider .owl-nav [class*=owl-]:hover {\n  background-color: #5672f9;\n}\n\narticle h3 {\n  margin-bottom: 5px;\n}\n\narticle ul {\n  margin-bottom: 15px;\n}\n\narticle ul li {\n  margin-right: 10px !important;\n  color: #848484;\n}\n\narticle ul li a {\n  color: #5672f9;\n}\n\narticle p {\n  line-height: 26px;\n  color: #848484;\n  margin-bottom: 24px;\n}\n\narticle .btn {\n  margin-bottom: 10px;\n}\n\n.single-blog {\n  padding-top: 50px !important;\n}\n\narticle.single-post img {\n  margin-bottom: 35px;\n}\n\narticle.single-post p {\n  margin-bottom: 35px;\n}\n\n.comment {\n  background: #fff;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 30px;\n  border-radius: 2px;\n}\n\n.comment h4 {\n  font-size: 20px;\n  letter-spacing: 0;\n}\n\n.comment button {\n  margin: 10px 0;\n}\n\n.popup .block-1 {\n  padding: 20px 80px;\n  background: #F6F8FA;\n}\n\n.popup .block-1 .media .img-content {\n  height: 80px;\n  width: 130px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  margin-right: 20px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n}\n\n.popup .block-1 .media .media-body h4 {\n  font-size: 24px;\n}\n\n.popup .block-2 {\n  padding: 50px 80px;\n  background: #fff;\n}\n\n.popup .block-2 h6 {\n  margin-bottom: 20px;\n}\n\n.popup .block-2 p {\n  width: 100%;\n  text-align: center;\n  line-height: 60px;\n  text-transform: uppercase;\n  background: #fff6f7;\n  border: 2px dashed #5672f9;\n  border-radius: 3px;\n  margin-bottom: 40px;\n}\n\n.popup .block-2 form .form-group label {\n  display: block;\n  color: #666;\n}\n\n.popup .block-2 form .form-group a {\n  float: right;\n  margin-top: -5px;\n}\n\n.ad-post form fieldset input:focus {\n  outline: 0;\n}\n\n.ad-post form fieldset label {\n  margin-bottom: 0;\n}\n\n.ad-post .choose-file {\n  cursor: pointer;\n  display: block;\n  border: 3px dashed #eaedef;\n}\n\n.ad-post .choose-file .select-files {\n  border-radius: 45px;\n}\n\n.ad-post textarea {\n  height: 200px;\n}\n\n.ad-listing-list {\n  transition: all linear 0.3s;\n}\n\n.ad-listing-list:hover {\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n}\n\n.product-ratings ul li i {\n  font-size: 18px;\n  color: #5672f9;\n}\n\n.terms-condition-content p {\n  line-height: 30px;\n}\n\n.package-content {\n  transition: all linear 0.3s;\n}\n\n.package-content .package-content-heading i {\n  font-size: 50px;\n  padding-bottom: 25px;\n  color: #5672f9;\n}\n\n.package-content .package-content-heading span {\n  font-size: 30px;\n}\n\n.package-content ul li i {\n  margin-right: 10px;\n}\n\n.package-content:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.about-content p {\n  line-height: 30px;\n}\n\n.counter-content i {\n  font-size: 60px;\n  color: #5672f9;\n}\n\n.counter-content span {\n  font-size: 24px;\n}\n\n.contact-us-content h1 {\n  font-size: 66px;\n}\n\n@media (max-width: 992px) {\n  .contact-us-content h1 {\n    font-size: 45px;\n  }\n}\n\n@media (max-width: 768px) {\n  .contact-us-content h1 {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 480px) {\n  .contact-us-content h1 {\n    font-size: 36px;\n  }\n}\n\n@media (max-width: 400px) {\n  .contact-us-content h1 {\n    font-size: 36px;\n  }\n}\n\nform textarea {\n  height: 200px;\n}\n\n.footer {\n  background: #232425;\n}\n\n.footer .block h4 {\n  color: #fff;\n  font-size: 16px;\n  margin-bottom: 25px;\n}\n\n.footer .block.about img {\n  margin-bottom: 25px;\n}\n\n.footer .block.about p {\n  line-height: 26px;\n}\n\n.footer .block ul li {\n  margin-bottom: 10px;\n}\n\n.footer .block ul li a {\n  display: block;\n  font-size: 14px;\n  color: #797979;\n}\n\n.footer .block ul li a:hover {\n  color: #5672f9;\n  text-decoration: underline;\n}\n\n.footer .block ul.terms-list {\n  margin-top: 10px;\n}\n\n.footer .block ul.terms-list li a {\n  padding-right: 10px;\n}\n\n@media (max-width: 768px) {\n  .footer .block:last-child {\n    margin-bottom: 30px;\n  }\n}\n\n.footer .block-2 {\n  padding: 18px 30px;\n  background: #46484A;\n  border-radius: 2px;\n}\n\n.footer .block-2.app-promotion {\n  margin-bottom: 20px;\n}\n\n.footer .block-2.app-promotion p {\n  margin-left: 20px;\n  color: #fff;\n}\n\n.footer .block-2.discount-coupon p {\n  color: #fff;\n  margin-bottom: 0;\n}\n\n.footer .block-2.discount-coupon p a {\n  color: #5672f9;\n}\n\n.footer-bottom {\n  position: relative;\n  background: #363839;\n  padding: 25px 0;\n}\n\n@media (max-width: 480px) {\n  .footer-bottom {\n    text-align: center;\n  }\n}\n\n.footer-bottom .copyright p {\n  color: #c7c7c7;\n  margin-bottom: 0;\n}\n\n.social-media-icons {\n  text-align: center !important;\n}\n\n.social-media-icons li {\n  display: inline-block;\n}\n\n.social-media-icons li a {\n  color: #848484;\n  padding: 0 20px;\n}\n\n.social-media-icons li a:hover {\n  color: #fff !important;\n  text-decoration: none;\n}\n\n.top-to {\n  position: absolute;\n  right: 20px;\n  bottom: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.top-to a {\n  width: 40px;\n  height: 40px;\n  background: #5672f9;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n}\n\n.top-to a i {\n  line-height: 40px;\n}\n\n.top-to a:hover {\n  text-decoration: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/Frontend/plugins/font-awesome/css/font-awesome.min.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/Frontend/plugins/font-awesome/css/font-awesome.min.css ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_fontawesome_webfont_eot_v_4_7_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/fontawesome-webfont.eot?v=4.7.0 */ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0");
/* harmony import */ var _fonts_fontawesome_webfont_eot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/fontawesome-webfont.eot */ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.eot");
/* harmony import */ var _fonts_fontawesome_webfont_woff2_v_4_7_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/fontawesome-webfont.woff2?v=4.7.0 */ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0");
/* harmony import */ var _fonts_fontawesome_webfont_woff_v_4_7_0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/fontawesome-webfont.woff?v=4.7.0 */ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0");
/* harmony import */ var _fonts_fontawesome_webfont_ttf_v_4_7_0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/fontawesome-webfont.ttf?v=4.7.0 */ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0");
/* harmony import */ var _fonts_fontawesome_webfont_svg_v_4_7_0__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/fontawesome-webfont.svg?v=4.7.0 */ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_fontawesome_webfont_eot_v_4_7_0__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_fontawesome_webfont_eot__WEBPACK_IMPORTED_MODULE_3__["default"], { hash: "?#iefix&v=4.7.0" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_fontawesome_webfont_woff2_v_4_7_0__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_fontawesome_webfont_woff_v_4_7_0__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_fontawesome_webfont_ttf_v_4_7_0__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_fontawesome_webfont_svg_v_4_7_0__WEBPACK_IMPORTED_MODULE_7__["default"], { hash: "#fontawesomeregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */@font-face{font-family:'FontAwesome';src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-vcard:before,.fa-address-card:before{content:\"\\f2bb\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/Frontend/images/call-to-action/cta-background.jpg":
/*!******************************************************************!*\
  !*** ./public/Frontend/images/call-to-action/cta-background.jpg ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/cta-background.jpg?79efb22ed0ce5c26c600bcea00f3806c");

/***/ }),

/***/ "./public/Frontend/images/home/hero.jpg":
/*!**********************************************!*\
  !*** ./public/Frontend/images/home/hero.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/hero.jpg?976eddebaa370e36e3c569b70099335a");

/***/ }),

/***/ "./public/Frontend/images/subscription/subscription-back.jpg":
/*!*******************************************************************!*\
  !*** ./public/Frontend/images/subscription/subscription-back.jpg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/subscription-back.jpg?4dd8ddbd7e03a1e1477c86141ffa2def");

/***/ }),

/***/ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.eot":
/*!****************************************************************************!*\
  !*** ./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.eot ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/fontawesome-webfont.eot?8b43027f47b20503057dfbbaa9401fef");

/***/ }),

/***/ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
/*!************************************************************************************!*\
  !*** ./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/fontawesome-webfont.eot?8b43027f47b20503057dfbbaa9401fef");

/***/ }),

/***/ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
/*!************************************************************************************!*\
  !*** ./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/fontawesome-webfont.svg?6878d55e3615ccf40c386ec2a90dfd6a");

/***/ }),

/***/ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
/*!************************************************************************************!*\
  !*** ./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/fontawesome-webfont.ttf?1e59d2330b4c6deb84b340635ed36249");

/***/ }),

/***/ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
/*!**************************************************************************************!*\
  !*** ./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/fontawesome-webfont.woff2?20fd1704ea223900efa9fd4e869efb08");

/***/ }),

/***/ "./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
/*!*************************************************************************************!*\
  !*** ./public/Frontend/plugins/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/fontawesome-webfont.woff?f691f37e57f04c152e2315ab7dbad881");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_06b022ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_06b022ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_06b022ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/Frontend/Pages/home.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Frontend/Pages/home.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_73d452ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=73d452ec& */ "./resources/js/components/Frontend/Pages/home.vue?vue&type=template&id=73d452ec&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/Pages/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_73d452ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_73d452ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/Pages/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Partials/footer.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/footer.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_1073c1f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=1073c1f4& */ "./resources/js/components/Frontend/Partials/footer.vue?vue&type=template&id=1073c1f4&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/Partials/footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_1073c1f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_1073c1f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/Partials/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Partials/topbar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/topbar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _topbar_vue_vue_type_template_id_06b022ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.vue?vue&type=template&id=06b022ee&scoped=true& */ "./resources/js/components/Frontend/Partials/topbar.vue?vue&type=template&id=06b022ee&scoped=true&");
/* harmony import */ var _topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/Partials/topbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _topbar_vue_vue_type_style_index_0_id_06b022ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css& */ "./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _topbar_vue_vue_type_template_id_06b022ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _topbar_vue_vue_type_template_id_06b022ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06b022ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/Partials/topbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Frontend/index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_62223f40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=62223f40& */ "./resources/js/components/Frontend/index.vue?vue&type=template&id=62223f40&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Frontend/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_62223f40___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_62223f40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Frontend/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Pages/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Frontend/Pages/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Pages/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Partials/footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Partials/topbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/topbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Frontend/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_06b022ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=style&index=0&id=06b022ee&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Frontend/Pages/home.vue?vue&type=template&id=73d452ec&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Pages/home.vue?vue&type=template&id=73d452ec& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_73d452ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_73d452ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_73d452ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=73d452ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Pages/home.vue?vue&type=template&id=73d452ec&");


/***/ }),

/***/ "./resources/js/components/Frontend/Partials/footer.vue?vue&type=template&id=1073c1f4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/footer.vue?vue&type=template&id=1073c1f4& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1073c1f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1073c1f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1073c1f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=1073c1f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/footer.vue?vue&type=template&id=1073c1f4&");


/***/ }),

/***/ "./resources/js/components/Frontend/Partials/topbar.vue?vue&type=template&id=06b022ee&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Partials/topbar.vue?vue&type=template&id=06b022ee&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_06b022ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_06b022ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_06b022ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topbar.vue?vue&type=template&id=06b022ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=template&id=06b022ee&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Frontend/index.vue?vue&type=template&id=62223f40&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Frontend/index.vue?vue&type=template&id=62223f40& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62223f40___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62223f40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62223f40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=62223f40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=template&id=62223f40&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Pages/home.vue?vue&type=template&id=73d452ec&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Pages/home.vue?vue&type=template&id=73d452ec& ***!
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
  return _c("div", {}, [
    _c("section", { staticClass: "hero-area bg-1 text-center overly" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "content-block" }, [
              _c("h1", [
                _vm._v(
                  "Buy & Sell Near You " + _vm._s(_vm.Authenticated) + " "
                ),
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
            ]),
            _vm._v(" "),
            _vm._m(2),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Join the millions who buy and sell from each other "),
      _c("br"),
      _vm._v(" everyday in local communities around the world"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "short-popular-category-list text-center" },
      [
        _c("h2", [_vm._v("Popular Category")]),
        _vm._v(" "),
        _c("ul", { staticClass: "list-inline" }, [
          _c("li", { staticClass: "list-inline-item" }, [
            _c("a", { attrs: { href: "category.html" } }, [
              _c("i", { staticClass: "fa fa-bed" }),
              _vm._v(" Hotel"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [
            _c("a", { attrs: { href: "category.html" } }, [
              _c("i", { staticClass: "fa fa-grav" }),
              _vm._v(" Fitness"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [
            _c("a", { attrs: { href: "category.html" } }, [
              _c("i", { staticClass: "fa fa-car" }),
              _vm._v(" Cars"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [
            _c("a", { attrs: { href: "category.html" } }, [
              _c("i", { staticClass: "fa fa-cutlery" }),
              _vm._v(" Restaurants"),
            ]),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item" }, [
            _c("a", { attrs: { href: "category.html" } }, [
              _c("i", { staticClass: "fa fa-coffee" }),
              _vm._v(" Cafe"),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "advance-search" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 col-md-12 align-content-center" },
            [
              _c("form", [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-4" }, [
                    _c("input", {
                      staticClass: "form-control my-2 my-lg-1",
                      attrs: {
                        type: "text",
                        id: "inputtext4",
                        placeholder: "What are you looking for",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c(
                      "select",
                      { staticClass: "w-100 form-control mt-lg-1 mt-md-2" },
                      [
                        _c("option", [_vm._v("Category")]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Top rated"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Lowest Price"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("Highest Price"),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-3" }, [
                    _c("input", {
                      staticClass: "form-control my-2 my-lg-1",
                      attrs: {
                        type: "text",
                        id: "inputLocation4",
                        placeholder: "Location",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-2 align-self-center" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" },
                        },
                        [_vm._v("Search Now")]
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "popular-deals section bg-gray" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "section-title" }, [
              _c("h2", [_vm._v("Trending Adds")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magnam."
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "trending-ads-slide" }, [
              _c("div", { staticClass: "col-sm-12 col-lg-4" }, [
                _c("div", { staticClass: "product-item bg-light" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "thumb-content" }, [
                      _c("a", { attrs: { href: "single.html" } }, [
                        _c("img", {
                          staticClass: "card-img-top img-fluid",
                          attrs: {
                            src: "images/products/products-1.jpg",
                            alt: "Card image cap",
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h4", { staticClass: "card-title" }, [
                        _c("a", { attrs: { href: "single.html" } }, [
                          _vm._v("11inch Macbook Air"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-inline product-meta" }, [
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "single.html" } }, [
                            _c("i", { staticClass: "fa fa-folder-open-o" }),
                            _vm._v("Electronics"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "fa fa-calendar" }),
                            _vm._v("26th December"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "product-ratings" }, [
                        _c("ul", { staticClass: "list-inline" }, [
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-inline-item" }, [
                            _c("i", { staticClass: "fa fa-star" }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-lg-4" }, [
                _c("div", { staticClass: "product-item bg-light" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "thumb-content" }, [
                      _c("a", { attrs: { href: "single.html" } }, [
                        _c("img", {
                          staticClass: "card-img-top img-fluid",
                          attrs: {
                            src: "images/products/products-2.jpg",
                            alt: "Card image cap",
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h4", { staticClass: "card-title" }, [
                        _c("a", { attrs: { href: "single.html" } }, [
                          _vm._v("Full Study Table Combo"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-inline product-meta" }, [
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "single.html" } }, [
                            _c("i", { staticClass: "fa fa-folder-open-o" }),
                            _vm._v("Furnitures"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "fa fa-calendar" }),
                            _vm._v("26th December"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "product-ratings" }, [
                        _c("ul", { staticClass: "list-inline" }, [
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-inline-item" }, [
                            _c("i", { staticClass: "fa fa-star" }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-lg-4" }, [
                _c("div", { staticClass: "product-item bg-light" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "thumb-content" }, [
                      _c("a", { attrs: { href: "single.html" } }, [
                        _c("img", {
                          staticClass: "card-img-top img-fluid",
                          attrs: {
                            src: "images/products/products-3.jpg",
                            alt: "Card image cap",
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h4", { staticClass: "card-title" }, [
                        _c("a", { attrs: { href: "single.html" } }, [
                          _vm._v("11inch Macbook Air"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-inline product-meta" }, [
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "single.html" } }, [
                            _c("i", { staticClass: "fa fa-folder-open-o" }),
                            _vm._v("Electronics"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "fa fa-calendar" }),
                            _vm._v("26th December"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "product-ratings" }, [
                        _c("ul", { staticClass: "list-inline" }, [
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-inline-item" }, [
                            _c("i", { staticClass: "fa fa-star" }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-lg-4" }, [
                _c("div", { staticClass: "product-item bg-light" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "thumb-content" }, [
                      _c("a", { attrs: { href: "single.html" } }, [
                        _c("img", {
                          staticClass: "card-img-top img-fluid",
                          attrs: {
                            src: "images/products/products-2.jpg",
                            alt: "Card image cap",
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h4", { staticClass: "card-title" }, [
                        _c("a", { attrs: { href: "single.html" } }, [
                          _vm._v("Full Study Table Combo"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-inline product-meta" }, [
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "single.html" } }, [
                            _c("i", { staticClass: "fa fa-folder-open-o" }),
                            _vm._v("Furnitures"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-inline-item" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("i", { staticClass: "fa fa-calendar" }),
                            _vm._v("26th December"),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "product-ratings" }, [
                        _c("ul", { staticClass: "list-inline" }, [
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "list-inline-item selected" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-inline-item" }, [
                            _c("i", { staticClass: "fa fa-star" }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: " section" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "section-title" }, [
              _c("h2", [_vm._v("All Categories")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, provident!"
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-laptop icon-bg-1" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Electronics")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Laptops "),
                          _c("span", [_vm._v("93")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Iphone "),
                          _c("span", [_vm._v("233")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Microsoft  "),
                          _c("span", [_vm._v("183")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Monitors "),
                          _c("span", [_vm._v("343")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-apple icon-bg-2" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Restaurants")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Cafe "),
                          _c("span", [_vm._v("393")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Fast food "),
                          _c("span", [_vm._v("23")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Restaurants  "),
                          _c("span", [_vm._v("13")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Food Track"),
                          _c("span", [_vm._v("43")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-home icon-bg-3" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Real Estate")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Farms "),
                          _c("span", [_vm._v("93")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Gym "),
                          _c("span", [_vm._v("23")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Hospitals  "),
                          _c("span", [_vm._v("83")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Parolurs "),
                          _c("span", [_vm._v("33")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", {
                        staticClass: "fa fa-shopping-basket icon-bg-4",
                      }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Shoppings")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Mens Wears "),
                          _c("span", [_vm._v("53")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Accessories "),
                          _c("span", [_vm._v("212")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Kids Wears "),
                          _c("span", [_vm._v("133")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("It & Software "),
                          _c("span", [_vm._v("143")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-briefcase icon-bg-5" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Jobs")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("It Jobs "),
                          _c("span", [_vm._v("93")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Cleaning & Washing "),
                          _c("span", [_vm._v("233")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Management  "),
                          _c("span", [_vm._v("183")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Voluntary Works "),
                          _c("span", [_vm._v("343")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-car icon-bg-6" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Vehicles")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Bus "),
                          _c("span", [_vm._v("193")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Cars "),
                          _c("span", [_vm._v("23")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Motobike  "),
                          _c("span", [_vm._v("33")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Rent a car "),
                          _c("span", [_vm._v("73")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-paw icon-bg-7" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Pets")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Cats "),
                          _c("span", [_vm._v("65")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Dogs "),
                          _c("span", [_vm._v("23")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Birds  "),
                          _c("span", [_vm._v("113")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Others "),
                          _c("span", [_vm._v("43")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6",
                },
                [
                  _c("div", { staticClass: "category-block" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("i", { staticClass: "fa fa-laptop icon-bg-8" }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Services")]),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "category-list" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Cleaning "),
                          _c("span", [_vm._v("93")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Car Washing "),
                          _c("span", [_vm._v("233")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Clothing  "),
                          _c("span", [_vm._v("183")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "category.html" } }, [
                          _vm._v("Business "),
                          _c("span", [_vm._v("343")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/footer.vue?vue&type=template&id=1073c1f4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/footer.vue?vue&type=template&id=1073c1f4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("footer", { staticClass: "footer section section-sm" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-3 col-md-7 offset-md-1 offset-lg-0" },
              [
                _c("div", { staticClass: "block about" }, [
                  _c("img", { attrs: { src: "", alt: "" } }),
                  _vm._v(" "),
                  _c("p", { staticClass: "alt-color" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                            tempor\n                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                            exercitation ullamco\n                            laboris nisi ut aliquip ex ea commodo consequat."
                    ),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 offset-lg-1 col-md-3" }, [
              _c("div", { staticClass: "block" }, [
                _c("h4", [_vm._v("Site Pages")]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Boston")]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("How It works")]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Deals & Coupons"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Articls & Tips"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Terms & Conditions"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-2 col-md-3 offset-md-1 offset-lg-0" },
              [
                _c("div", { staticClass: "block" }, [
                  _c("h4", [_vm._v("Quick Pages")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [_vm._v("Category")]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v("Single Page"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v("Store Single"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v("Single Post"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [_vm._v("Blog")]),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-7" }, [
              _c("div", { staticClass: "block-2 app-promotion" }, [
                _c("div", { staticClass: "mobile d-flex" }, [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", {
                      attrs: {
                        src: "https://news.devpappu.com/website/images/footer/phone-icon.png",
                        alt: "mobile-icon",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Get the Dealsy Mobile App and Save more")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "download-btn d-flex my-3" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "", alt: "" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("a", { staticClass: " ml-3", attrs: { href: "#" } }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "", alt: "" },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=template&id=06b022ee&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Partials/topbar.vue?vue&type=template&id=06b022ee&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", {}, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "nav",
            { staticClass: "navbar navbar-expand-lg navbar-light navigation" },
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar-brand",
                  attrs: { to: { name: "Home" } },
                },
                [
                  _c("img", {
                    attrs: {
                      src: "https://news.devpappu.com/website/images/logo.png",
                      alt: "",
                    },
                  }),
                ]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse navbar-collapse",
                  attrs: { id: "navbarSupportedContent" },
                },
                [
                  _c("ul", { staticClass: "navbar-nav ml-auto main-nav " }, [
                    _c(
                      "li",
                      { staticClass: "nav-item active" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "Home" } },
                          },
                          [_vm._v("Home")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                  ]),
                  _vm._v(" "),
                  !_vm.Authenticated
                    ? _c("ul", { staticClass: "navbar-nav ml-auto mt-10" }, [
                        _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link login-button",
                                attrs: { to: { name: "Login" } },
                              },
                              [_vm._v("Login")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link text-white add-button",
                                attrs: { to: { name: "Register" } },
                              },
                              [_vm._v("Register")]
                            ),
                            _vm._v(" "),
                            _vm.Authenticated
                              ? _c("p", [_vm._v("hello")])
                              : _vm._e(),
                          ],
                          1
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.Authenticated
                    ? _c("ul", { staticClass: "navbar-nav ml-auto mt-10" }, [
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "button",
                            {
                              staticClass: "nav-link login-button",
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.logout.apply(null, arguments)
                                },
                              },
                            },
                            [_vm._v("Logout")]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link text-white add-button",
                                attrs: { to: { name: "Profile" } },
                              },
                              [_vm._v("Profile")]
                            ),
                          ],
                          1
                        ),
                      ])
                    : _vm._e(),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "navbar-toggler", attrs: { type: "button" } },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown dropdown-slide" }, [
      _c(
        "a",
        { staticClass: "nav-link dropdown-toggle", attrs: { href: "#" } },
        [_vm._v("Category")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: { href: "https://news.devpappu.com/frontend-posts" },
        },
        [_vm._v("\n                                Blogs\n\t\t\t\t\t\t\t\t")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown dropdown-slide" }, [
      _c(
        "a",
        { staticClass: "nav-link dropdown-toggle", attrs: { href: "" } },
        [_vm._v("About Us")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=template&id=62223f40&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/index.vue?vue&type=template&id=62223f40& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("Header"),
      _vm._v(" "),
      _vm.$route.name == "Home" ? _c("div", [_c("Home")], 1) : _vm._e(),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("FoterSection"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);