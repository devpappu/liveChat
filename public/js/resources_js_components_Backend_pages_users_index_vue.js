"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Backend_pages_users_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/users/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/users/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        email: '',
        role: '',
        name: ''
      },
      users: {},
      errors: '',
      edit_user_id: '',
      edit_user_mode: false
    };
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      axios.get('users').then(function (response) {
        console.log(response);
        _this.users = response.data;
      });
    },
    createuser: function createuser() {
      var _this2 = this;

      axios.post('/api/user/create', this.form).then(function (response) {
        _this2.errors = '';
        Toast.fire({
          icon: 'success',
          title: 'user Added successfully.'
        });

        _this2.loadUser();

        console.log(response);
      })["catch"](function (e) {
        _this2.errors = e.response.data.errors;
      });
    },
    Edituser: function Edituser(user) {
      this.edit_user_id = user.id;
      this.edit_user_mode = true;
      this.form.name = user.name;
      this.form.email = user.email;
      this.form.role = user.role;
    },
    Deleteuser: function Deleteuser(id) {
      var _this3 = this;

      axios.post("user/delete/".concat(id)).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'User Updated successfully.'
        });
        console.log(res);

        _this3.loadUser();
      });
    },
    Updateuser: function Updateuser() {
      var _this4 = this;

      var id = this.edit_user_id;
      axios.post("user/update/".concat(id), this.form).then(function () {
        Toast.fire({
          icon: 'success',
          title: 'User Updated successfully.'
        });
        _this4.edit_user_id = null;
        _this4.edit_user_mode = false;
        _this4.form.name = null;
        _this4.form.email = null;

        _this4.loadUser();
      });
    }
  },
  mounted: function mounted() {
    this.loadUser();
  }
});

/***/ }),

/***/ "./resources/js/components/Backend/pages/users/index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Backend/pages/users/index.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_7d57cf2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7d57cf2a& */ "./resources/js/components/Backend/pages/users/index.vue?vue&type=template&id=7d57cf2a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Backend/pages/users/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7d57cf2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_7d57cf2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Backend/pages/users/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Backend/pages/users/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Backend/pages/users/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/users/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Backend/pages/users/index.vue?vue&type=template&id=7d57cf2a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Backend/pages/users/index.vue?vue&type=template&id=7d57cf2a& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7d57cf2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7d57cf2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7d57cf2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=7d57cf2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/users/index.vue?vue&type=template&id=7d57cf2a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/users/index.vue?vue&type=template&id=7d57cf2a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/users/index.vue?vue&type=template&id=7d57cf2a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "user" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _c("div", { staticClass: "card card-primary" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table" }, [
                _vm._m(1),
                _vm._v(" "),
                _vm.users.length
                  ? _c(
                      "tbody",
                      _vm._l(_vm.users, function (user) {
                        return _c("tr", { key: user.id }, [
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(_vm._f("strToUpper")(user.name)) +
                                " "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(" " + _vm._s(user.email) + " ")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v(_vm._s(_vm._f("strToUpper")(user.role))),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(_vm._f("dateformat")(user.created_at)) +
                                " "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "170px" } }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-sm",
                                attrs: { href: "#" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.Edituser(user)
                                  },
                                },
                              },
                              [_vm._v("Edit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-sm",
                                attrs: { href: "#" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.Deleteuser(user.id)
                                  },
                                },
                              },
                              [_vm._v("Delete")]
                            ),
                          ]),
                        ])
                      }),
                      0
                    )
                  : _c("tbody", [_vm._m(2)]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c("div", { staticClass: "card card-primary" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.createuser.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "my-2" }, [
                    _c("label", { staticClass: "block text-gray-800" }, [
                      _vm._v("Name"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name",
                        },
                      ],
                      staticClass:
                        "w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600",
                      attrs: {
                        type: "email",
                        id: "name",
                        placeholder: "name",
                        required: "",
                      },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-2" }, [
                    _c("label", { staticClass: "block text-gray-800" }, [
                      _vm._v("Email"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email",
                        },
                      ],
                      staticClass:
                        "w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600",
                      attrs: {
                        type: "email",
                        id: "email",
                        placeholder: "email",
                        required: "",
                      },
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "text-sm form-label" }, [
                      _vm._v("User Role"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.role,
                            expression: "form.role",
                          },
                        ],
                        staticClass: "form-control text-sm",
                        attrs: { id: "user_type" },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "role",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c(
                          "option",
                          {
                            staticStyle: { display: "none" },
                            attrs: { value: "", selected: "" },
                          },
                          [
                            _vm._v(
                              "Select Role\n                                    "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "user", selected: "" } },
                          [_vm._v("User")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "admin", selected: "" } },
                          [_vm._v("Admin")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "superadmin", selected: "" } },
                          [_vm._v("Super Admin")]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.edit_user_mode
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.Updateuser()
                            },
                          },
                        },
                        [_vm._v("Update")]
                      )
                    : _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" },
                        },
                        [_vm._v("Submit")]
                      ),
                ]
              ),
            ]),
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("All users")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [_vm._v(" Action ")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("h5", { staticClass: "text-center mt-4 mb-4" }, [
          _vm._v("No user found. "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Create New user!")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);