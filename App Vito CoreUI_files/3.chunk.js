(this["webpackJsonp@coreui/coreui-free-react-admin-template"] = this["webpackJsonp@coreui/coreui-free-react-admin-template"] || []).push([[3],{

/***/ "./node_modules/@coreui/utils/dist/coreui-utils.common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/utils/dist/coreui-utils.common.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (e, t) {
  for (var n in t) {
    e[n] = t[n];
  }
}(exports, function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "deepObjectsMerge", function () {
    return r;
  }), n.d(t, "getColor", function () {
    return u;
  }), n.d(t, "getStyle", function () {
    return a;
  }), n.d(t, "hexToRgb", function () {
    return s;
  }), n.d(t, "hexToRgba", function () {
    return l;
  }), n.d(t, "makeUid", function () {
    return f;
  }), n.d(t, "omitByKeys", function () {
    return d;
  }), n.d(t, "pickByKeys", function () {
    return p;
  }), n.d(t, "rgbToHex", function () {
    return g;
  });

  var r = function e(t, n) {
    for (var r = 0, o = Object.keys(n); r < o.length; r++) {
      var c = o[r];
      n[c] instanceof Object && Object.assign(n[c], e(t[c], n[c]));
    }

    return Object.assign(t || {}, n), t;
  },
      o = function o() {
    for (var e = {}, t = document.styleSheets, n = "", r = t.length - 1; r > -1; r--) {
      for (var o = t[r].cssRules, c = o.length - 1; c > -1; c--) {
        if (".ie-custom-properties" === o[c].selectorText) {
          n = o[c].cssText;
          break;
        }
      }

      if (n) break;
    }

    return (n = n.substring(n.lastIndexOf("{") + 1, n.lastIndexOf("}"))).split(";").forEach(function (t) {
      if (t) {
        var n = t.split(": ")[0],
            r = t.split(": ")[1];
        n && r && (e["--".concat(n.trim())] = r.trim());
      }
    }), e;
  },
      c = function c() {
    return Boolean(document.documentMode) && document.documentMode >= 10;
  },
      i = function i(e) {
    return e.match(/^--.*/i);
  },
      a = function a(e) {
    var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;

    if (i(e) && c()) {
      var r = o();
      t = r[e];
    } else t = window.getComputedStyle(n, null).getPropertyValue(e).replace(/^\s/, "");

    return t;
  },
      u = function u(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
        n = "--".concat(e),
        r = a(n, t);
    return r || e;
  },
      s = function s(e) {
    if (void 0 === e) throw new TypeError("Hex color is not defined");
    var t, n, r;
    if (!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i)) throw new Error("".concat(e, " is not a valid hex color"));
    return 7 === e.length ? (t = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16)) : (t = parseInt(e.slice(1, 2), 16), n = parseInt(e.slice(2, 3), 16), r = parseInt(e.slice(3, 5), 16)), "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ")");
  },
      l = function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (void 0 === e) throw new TypeError("Hex color is not defined");
    var n,
        r,
        o,
        c = e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);
    if (!c) throw new Error("".concat(e, " is not a valid hex color"));
    return 7 === e.length ? (n = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16)) : (n = parseInt(e.slice(1, 2), 16), r = parseInt(e.slice(2, 3), 16), o = parseInt(e.slice(3, 5), 16)), "rgba(".concat(n, ", ").concat(r, ", ").concat(o, ", ").concat(t / 100, ")");
  },
      f = function f() {
    return "uid-" + Math.random().toString(36).substr(2);
  },
      d = function d(e, t) {
    for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
      !t.includes(r[o]) && (n[r[o]] = e[r[o]]);
    }

    return n;
  },
      p = function p(e, t) {
    for (var n = {}, r = 0; r < t.length; r++) {
      n[t[r]] = e[t[r]];
    }

    return n;
  },
      g = function g(e) {
    if (void 0 === e) throw new TypeError("Hex color is not defined");
    if ("transparent" === e) return "#00000000";
    var t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if (!t) throw new Error("".concat(e, " is not a valid rgb color"));
    var n = "0".concat(parseInt(t[1], 10).toString(16)),
        r = "0".concat(parseInt(t[2], 10).toString(16)),
        o = "0".concat(parseInt(t[3], 10).toString(16));
    return "#".concat(n.slice(-2)).concat(r.slice(-2)).concat(o.slice(-2));
  },
      b = {
    deepObjectsMerge: r,
    getColor: u,
    getStyle: a,
    hexToRgb: s,
    hexToRgba: l,
    makeUid: f,
    omitByKeys: d,
    pickByKeys: p,
    rgbToHex: g
  };

  t.default = b;
}]));

/***/ }),

/***/ "./src/views/charts/ChartLineSimple.js":
/*!*********************************************!*\
  !*** ./src/views/charts/ChartLineSimple.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Users_massimo_Desktop_REACT_coreui_free_react_admin_template_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_massimo_Desktop_REACT_coreui_free_react_admin_template_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




var _jsxFileName = "/Users/massimo/Desktop/REACT/coreui-free-react-admin-template/src/views/charts/ChartLineSimple.js",
    _this = undefined;







var ChartLineSimple = function ChartLineSimple(props) {
  var borderColor = props.borderColor,
      backgroundColor = props.backgroundColor,
      pointHoverBackgroundColor = props.pointHoverBackgroundColor,
      dataPoints = props.dataPoints,
      label = props.label,
      pointed = props.pointed,
      attributes = Object(_Users_massimo_Desktop_REACT_coreui_free_react_admin_template_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["borderColor", "backgroundColor", "pointHoverBackgroundColor", "dataPoints", "label", "pointed"]);

  var pointHoverColor = function () {
    if (pointHoverBackgroundColor) {
      return pointHoverBackgroundColor;
    } else if (backgroundColor !== 'transparent') {
      return backgroundColor;
    }

    return borderColor;
  }();

  var defaultDatasets = function () {
    return [{
      data: dataPoints,
      borderColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getColor"])(borderColor),
      backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getColor"])(backgroundColor),
      pointBackgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getColor"])(pointHoverColor),
      pointHoverBackgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getColor"])(pointHoverColor),
      label: label
    }];
  }();

  var pointedOptions = function () {
    return {
      scales: {
        xAxes: [{
          offset: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, dataPoints) - 5,
            max: Math.max.apply(Math, dataPoints) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();

  var straightOptions = function () {
    return {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();

  var defaultOptions = function () {
    var options = pointed ? pointedOptions : straightOptions;
    return Object.assign({}, options, {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    });
  }();

  var computedDatasets = function () {
    return Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["deepObjectsMerge"])(defaultDatasets, attributes.datasets || {});
  }();

  var computedOptions = function () {
    return Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["deepObjectsMerge"])(defaultOptions, attributes.options || {});
  }(); // render


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_5__["CChartLine"], Object(_Users_massimo_Desktop_REACT_coreui_free_react_admin_template_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_massimo_Desktop_REACT_coreui_free_react_admin_template_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes), {}, {
    datasets: computedDatasets,
    options: computedOptions,
    labels: label
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, _this);
};

_c = ChartLineSimple;
ChartLineSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  //
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  pointHoverBackgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  dataPoints: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  pointed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
ChartLineSimple.defaultProps = {
  borderColor: 'rgba(255,255,255,.55)',
  backgroundColor: 'transparent',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ __webpack_exports__["default"] = (ChartLineSimple);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChartLineSimple");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

}]);
//# sourceMappingURL=3.chunk.js.map