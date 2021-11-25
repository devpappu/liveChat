"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_profile_profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/profile/profile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/profile/profile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/login', this.form).then(function (response) {
        var token = response.data.token;
        localStorage.setItem('token', token);
      });
    }
  },
  mounted: function mounted() {
    console.log('hello');
  }
});

/***/ }),

/***/ "./resources/js/components/Auth/profile/profile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Auth/profile/profile.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_vue_vue_type_template_id_f1c6f872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=f1c6f872& */ "./resources/js/components/Auth/profile/profile.vue?vue&type=template&id=f1c6f872&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/profile/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_f1c6f872___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_f1c6f872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/profile/profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/profile/profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Auth/profile/profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/profile/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/profile/profile.vue?vue&type=template&id=f1c6f872&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Auth/profile/profile.vue?vue&type=template&id=f1c6f872& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_f1c6f872___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_f1c6f872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_f1c6f872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=f1c6f872& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/profile/profile.vue?vue&type=template&id=f1c6f872&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/profile/profile.vue?vue&type=template&id=f1c6f872&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/profile/profile.vue?vue&type=template&id=f1c6f872& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "user-profile section" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-10 offset-md-1 col-lg-3 offset-lg-0" },
          [
            _c("div", { staticClass: "sidebar" }, [
              _c("div", { staticClass: "widget user" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("h5", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(this.AuthUser.name)),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(1),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-10 offset-md-1 col-lg-9 offset-lg-0" },
          [
            _c("div", { staticClass: "widget welcome-message" }, [
              _c("h2", [_vm._v("Edit Profile")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation"
                ),
              ]),
              _vm._v(" "),
              this.AuthUser.role == "superadmin"
                ? _c(
                    "div",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link text-white add-button",
                          attrs: { to: { name: "super-admin-dashboard" } },
                        },
                        [_vm._v("Go To Dashboard")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              this.AuthUser.role == "admin"
                ? _c(
                    "div",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link text-white add-button",
                          attrs: { to: { name: "admin-dashboard" } },
                        },
                        [_vm._v("Go To Dashboard")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                _c("div", { staticClass: "widget personal-info" }, [
                  _c("h3", { staticClass: "widget-header user" }, [
                    _vm._v("Edit Personal Information"),
                  ]),
                  _vm._v(" "),
                  _c("form", { attrs: { action: "#" } }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "first-name" } }, [
                        _vm._v("First Name"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", id: "first-name" },
                        domProps: { value: this.AuthUser.name },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn btn-transparent" }, [
                      _vm._v("Save My Changes"),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._m(8),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image d-flex justify-content-center" }, [
      _c("img", { attrs: { src: "#", alt: "" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget dashboard-links" }, [
      _c("ul", [
        _c("li", [
          _c("a", { staticClass: "my-1 d-inline-block", attrs: { href: "" } }, [
            _vm._v("Savings Dashboard"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "my-1 d-inline-block", attrs: { href: "" } }, [
            _vm._v("Saved Offer "),
            _c("span", [_vm._v("(5)")]),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "my-1 d-inline-block", attrs: { href: "" } }, [
            _vm._v("Favourite Stores "),
            _c("span", [_vm._v("(3)")]),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "my-1 d-inline-block", attrs: { href: "" } }, [
            _vm._v("Recommended"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "last-name" } }, [_vm._v("Last Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "last name", id: "last-name" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group choose-file d-inline-flex" }, [
      _c("i", { staticClass: "fa fa-user text-center px-3" }),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control-file mt-2 pt-1",
        attrs: { type: "file", id: "input-file" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "comunity-name" } }, [
        _vm._v("Comunity Name"),
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "comunity-name" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check" }, [
      _c(
        "label",
        { staticClass: "form-check-label", attrs: { for: "hide-profile" } },
        [
          _c("input", {
            staticClass: "form-check-input mt-1",
            attrs: { type: "checkbox", value: "", id: "hide-profile" },
          }),
          _vm._v(
            "\n                                        Hide Profile from Public/Comunity\n                                    "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "zip-code" } }, [_vm._v("Zip Code")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "zip-code" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "widget change-password" }, [
        _c("h3", { staticClass: "widget-header user" }, [
          _vm._v("Edit Password"),
        ]),
        _vm._v(" "),
        _c("form", { attrs: { action: "#" } }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "current-password" } }, [
              _vm._v("Current Password"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "password", id: "current-password" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "new-password" } }, [
              _vm._v("New Password"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "password", id: "new-password" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "confirm-password" } }, [
              _vm._v("Confirm New Password"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "password", id: "confirm-password" },
            }),
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-transparent" }, [
            _vm._v("Change Password"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "widget change-email mb-0" }, [
        _c("h3", { staticClass: "widget-header user" }, [
          _vm._v("Edit Email Address"),
        ]),
        _vm._v(" "),
        _c("form", { attrs: { action: "#" } }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "current-email" } }, [
              _vm._v("Current Email"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "email", id: "current-email" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "new-email" } }, [_vm._v("New email")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "email", id: "new-email" },
            }),
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-transparent" }, [
            _vm._v("Change email"),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);