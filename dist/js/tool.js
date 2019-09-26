/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    router.addRoutes([{
        name: 'vend-api',
        path: '/vend-api',
        component: __webpack_require__(2)
    }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            initialLoading: true,
            loading: false,
            status: {}

        };
    },


    computed: {
        hasNoToken: function hasNoToken() {
            return !this.loading && !this.initialLoading && this.status.token === null;
        },
        hasToken: function hasToken() {
            return !this.loading && !this.initialLoading && this.status.token !== null;
        },
        expires: function expires() {
            return !this.loading && !this.initialLoading && this.status.token !== null ? moment(this.status.token.expires).calendar() : null;
        }
    },

    methods: {
        getStatus: function getStatus() {
            var _this = this;

            this.loading = true;
            this.initialLoading = false;
            Nova.request().get('/nova-vendor/vend-api/status').then(function (response) {
                _this.status = response.data;
                _this.loading = false;
            });
        }
    },

    created: function created() {
        this.getStatus();
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "loading-view",
    { attrs: { loading: _vm.initialLoading } },
    [
      _c("heading", { staticClass: "mb-6" }, [
        _vm._v(_vm._s(_vm.__("Vend API Login")))
      ]),
      _vm._v(" "),
      _c(
        "loading-card",
        { staticClass: "card", attrs: { loading: _vm.loading } },
        [
          _vm.hasNoToken
            ? _c(
                "card",
                {
                  staticClass: "flex flex-col items-center justify-center p-8",
                  staticStyle: { "min-height": "300px" }
                },
                [
                  _c(
                    "h1",
                    {
                      staticClass: "text-black text-4xl text-90 font-light mb-6"
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.__("You need to log in to the Vend API")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-6" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.__(
                            "Make sure you have set the redirect URI for your Vend application to"
                          )
                        ) +
                        ": "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("code", [_vm._v(_vm._s(_vm.status.oauth_redirect))])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-primary",
                        attrs: { href: _vm.status.oauth_request }
                      },
                      [_vm._v(_vm._s(_vm.__("Login")))]
                    )
                  ])
                ]
              )
            : _vm.hasToken
            ? _c(
                "card",
                {
                  staticClass: "flex flex-col items-center justify-center p-8",
                  staticStyle: { "min-height": "300px" }
                },
                [
                  _c(
                    "h1",
                    {
                      staticClass: "text-black text-4xl text-90 font-light mb-6"
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            _vm.__("You are already logged in to the Vend API")
                          ) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-6" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.__("Your OAuth token details are")) +
                        ":\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table mb-8" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v(_vm._s(_vm.__("Key")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v(_vm._s(_vm.__("Value")))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [
                          _c("span", { staticClass: "font-bold" }, [
                            _vm._v(_vm._s(_vm.__("Domain Prefix")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.status.token.domain_prefix))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("span", { staticClass: "font-bold" }, [
                            _vm._v(_vm._s(_vm.__("Current Token")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.status.token.access_token))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("span", { staticClass: "font-bold" }, [
                            _vm._v(_vm._s(_vm.__("Expires")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.expires))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("span", { staticClass: "font-bold" }, [
                            _vm._v(_vm._s(_vm.__("Refresh Token")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.status.token.refresh_token))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-6" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.__(
                            "You may revoke the token if you wish to login again"
                          )
                        ) +
                        ":\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-primary",
                        attrs: { href: _vm.status.oauth_reset }
                      },
                      [_vm._v(_vm._s(_vm.__("Revoke")))]
                    )
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);