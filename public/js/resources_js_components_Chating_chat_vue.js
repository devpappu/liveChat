"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Chating_chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chating/chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chating/chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      messages: [],
      newMessage: '',
      users: [],
      activeUser: false,
      typingTimer: false
    };
  },
  created: function created() {
    var _this = this;

    this.fetchMessages();
    Echo["private"]('chat').listen('ChatEvent', function (e) {
      _this.messages.push({
        message: e.message.message,
        user: e.user
      });
    });
  },
  methods: {
    fetchMessages: function fetchMessages() {
      var _this2 = this;

      axios.get('messages').then(function (response) {
        _this2.messages = response.data;
      });
    },
    sendMessage: function sendMessage() {
      this.messages.push({
        user: this.AuthUser,
        message: this.newMessage
      });
      axios.post('messages', {
        message: this.newMessage
      });
      this.newMessage = '';
    },
    sendTypingEvent: function sendTypingEvent() {
      Echo.join('chat').whisper('typing', this.AuthUser);
      console.log(this.AuthUser.name + ' is typing now');
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Chating/chat.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Chating/chat.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chat_vue_vue_type_template_id_6ca91bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=6ca91bb0& */ "./resources/js/components/Chating/chat.vue?vue&type=template&id=6ca91bb0&");
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ "./resources/js/components/Chating/chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_6ca91bb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _chat_vue_vue_type_template_id_6ca91bb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Chating/chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Chating/chat.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Chating/chat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chating/chat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Chating/chat.vue?vue&type=template&id=6ca91bb0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Chating/chat.vue?vue&type=template&id=6ca91bb0& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_6ca91bb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_6ca91bb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_6ca91bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chat.vue?vue&type=template&id=6ca91bb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chating/chat.vue?vue&type=template&id=6ca91bb0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chating/chat.vue?vue&type=template&id=6ca91bb0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chating/chat.vue?vue&type=template&id=6ca91bb0& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-8" }, [
      _c("div", { staticClass: "card card-default" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Messages")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-0" }, [
          _c(
            "ul",
            {
              directives: [{ name: "chat-scroll", rawName: "v-chat-scroll" }],
              staticClass: "list-unstyled",
              staticStyle: { height: "300px", "overflow-y": "scroll" },
            },
            _vm._l(_vm.messages, function (message, index) {
              return _c("li", { key: index, staticClass: "p-2" }, [
                _c("strong", [_vm._v(_vm._s(message.user.name))]),
                _vm._v(
                  "\n                        " +
                    _vm._s(message.message) +
                    "\n                    "
                ),
              ])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newMessage,
              expression: "newMessage",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            name: "message",
            placeholder: "Enter your message...",
          },
          domProps: { value: _vm.newMessage },
          on: {
            keydown: _vm.sendTypingEvent,
            keyup: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.sendMessage.apply(null, arguments)
            },
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newMessage = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _vm.activeUser
        ? _c("span", { staticClass: "text-muted" }, [
            _vm._v(_vm._s(_vm.activeUser.name) + " is typing..."),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);