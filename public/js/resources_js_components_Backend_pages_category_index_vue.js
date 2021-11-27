"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Backend_pages_category_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/category/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/category/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categories: [],
      form: {
        name: '',
        image: ''
      },
      errors: '',
      cat_id: '',
      isEdit: false
    };
  },
  methods: {
    loadCategories: function loadCategories() {
      var _this = this;

      axios.get('category').then(function (response) {
        _this.categories = response.data;
      });
    },
    deleteCategory: function deleteCategory(category) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post("/api/category/delete/".concat(category.id));

          var index = _this2.categories.indexOf(category);

          _this2.categories.splice(index, 1);

          Swal.fire('Deleted!', 'Category Deleted.', 'success');
        }
      });
    },
    createcategory: function createcategory() {
      var _this3 = this;

      var data = new FormData();
      data.append('name', this.form.name);
      data.append('image', this.form.image);
      axios.post('category/create', data).then(function (response) {
        _this3.form = '';
        _this3.errors = '';

        _this3.loadCategories();

        Toast.fire({
          icon: 'success',
          title: 'Category Added successfully.'
        });
      })["catch"](function (e) {
        _this3.errors = e.response.data.errors;
      });
    },
    update: function update() {
      var _this4 = this;

      var id = this.cat_id;
      var data = new FormData();
      data.append('name', this.form.name);
      data.append('image', this.form.image);
      axios.post("category/update/".concat(id), data).then(function () {
        _this4.form.name = '';
        _this4.isEdit = false;

        _this4.loadCategories();

        Toast.fire({
          icon: 'success',
          title: 'Category Updated.'
        });
      });
    },
    edit: function edit(category) {
      this.isEdit = true;
      this.form.name = category.name;
      this.cat_id = category.id;
    },
    image: function image(event) {
      this.form.image = event;
    }
  },
  mounted: function mounted() {
    this.loadCategories();
  }
});

/***/ }),

/***/ "./resources/js/components/Backend/pages/category/index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Backend/pages/category/index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_326b2d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=326b2d9c& */ "./resources/js/components/Backend/pages/category/index.vue?vue&type=template&id=326b2d9c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Backend/pages/category/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_326b2d9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_326b2d9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Backend/pages/category/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Backend/pages/category/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Backend/pages/category/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/category/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Backend/pages/category/index.vue?vue&type=template&id=326b2d9c&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Backend/pages/category/index.vue?vue&type=template&id=326b2d9c& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_326b2d9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_326b2d9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_326b2d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=326b2d9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/category/index.vue?vue&type=template&id=326b2d9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/category/index.vue?vue&type=template&id=326b2d9c&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Backend/pages/category/index.vue?vue&type=template&id=326b2d9c& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "lg:flex gap-5" }, [
    _c("div", { staticClass: "lg:w-8/12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header flex items-center justify-between" },
          [
            _vm._v(
              "\n                        Category Lists\n                    "
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm.categories.length
                ? _c(
                    "tbody",
                    _vm._l(_vm.categories, function (category) {
                      return _c("tr", { key: category.id }, [
                        _c("td", [_vm._v(" " + _vm._s(category.name) + " ")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(category.slug) + " ")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm._f("dateformat")(category.created_at)
                              ) +
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
                                  return _vm.edit(category)
                                },
                              },
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm disabled",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.deleteCategory(category)
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
                : _c("tbody", [
                    _c("tr", [
                      _c(
                        "td",
                        { attrs: { colspan: "4" } },
                        [
                          _vm.Loading
                            ? [_c("content-loading")]
                            : _c(
                                "h5",
                                { staticClass: "text-center mt-4 mb-4" },
                                [_vm._v("No categories found.")]
                              ),
                        ],
                        2
                      ),
                    ]),
                  ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "CAform lg:w-4/12" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("\n            Category\n        "),
      ]),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "p-10 bg-white" },
        [
          _c("div", [
            _vm.errors.name
              ? _c("small", { staticClass: "form-text text-danger" }, [
                  _vm._v(_vm._s(_vm.errors.name[0])),
                ])
              : _vm._e(),
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
              staticClass: "form-control",
              attrs: { type: "text", name: "name", placeholder: "name" },
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
          _c("br"),
          _vm._v(" "),
          _c("Dropimage", {
            on: {
              image: function ($event) {
                return _vm.image($event)
              },
            },
          }),
          _vm._v(" "),
          _vm.isEdit
            ? _c(
                "button",
                {
                  staticClass: "text-sm btn btn-lg btn-primary mt-3",
                  attrs: { type: "submit" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.update()
                    },
                  },
                },
                [_vm._v("Update")]
              )
            : _c(
                "button",
                {
                  staticClass: "text-sm btn btn-lg btn-primary mt-3",
                  attrs: { type: "submit" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.createcategory()
                    },
                  },
                },
                [_vm._v("Submit")]
              ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Slug ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" date ")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [_vm._v(" Action ")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);