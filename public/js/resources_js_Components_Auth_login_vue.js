"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: '',
      success: '',
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/sanctum/csrf-cookie').then(function (response) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post('login', _this.form).then(function (response) {
          var token = response.data.token;
          var user_role = response.data.user.role;

          if (user_role !== "admin") {
            _this.errors = 'Make Sure Your Email & Password!';
          }

          if (user_role == "admin") {
            _this.$store.commit('SET_AUTHENTICATED', true);

            _this.$router.push({
              name: 'admin-dashboard'
            });

            _this.$store.commit('SET_USER', response.data.user);

            localStorage.setItem('token', token);
          }

          if (user_role == "user") {
            _this.$store.commit('SET_AUTHENTICATED', true);

            _this.$router.push({
              name: 'Profile'
            });

            _this.$store.commit('SET_USER', response.data.user);

            localStorage.setItem('token', token);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      });
    }
  },
  mounted: function mounted() {
    console.log('hello');
  }
});

/***/ }),

/***/ "./resources/js/components/Auth/login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Auth/login.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_e2132026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=e2132026& */ "./resources/js/components/Auth/login.vue?vue&type=template&id=e2132026&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_e2132026___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_e2132026___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Auth/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/login.vue?vue&type=template&id=e2132026&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Auth/login.vue?vue&type=template&id=e2132026& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e2132026___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e2132026___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e2132026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=e2132026& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/login.vue?vue&type=template&id=e2132026&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/login.vue?vue&type=template&id=e2132026&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/login.vue?vue&type=template&id=e2132026& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "login py-5 border-top-1" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-lg-5 col-md-8 align-item-center" }, [
          _c("div", { staticClass: "border" }, [
            _c("h3", { staticClass: "bg-gray p-4" }, [_vm._v("Login Now")]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.login.apply(null, arguments)
                  },
                },
              },
              [
                _c(
                  "fieldset",
                  { staticClass: "p-4" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email",
                        },
                      ],
                      staticClass: "border p-3 w-100 my-2",
                      attrs: { type: "text", placeholder: "Email*" },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      staticClass: "border p-3 w-100 my-2",
                      attrs: { type: "password", placeholder: "Password*" },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3",
                        attrs: { type: "submit" },
                      },
                      [_vm._v("Log in")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "mt-3 d-block  text-primary",
                        attrs: { href: "#" },
                      },
                      [_vm._v("Forget Password?")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "mt-3 d-inline-block text-primary",
                        attrs: { to: { name: "Register" } },
                      },
                      [_vm._v("Register")]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]),
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
    return _c("div", { staticClass: "loggedin-forgot" }, [
      _c("input", { attrs: { type: "checkbox", id: "keep-me-logged-in" } }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "pt-3 pb-2", attrs: { for: "keep-me-logged-in" } },
        [_vm._v("Keep me logged in")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);