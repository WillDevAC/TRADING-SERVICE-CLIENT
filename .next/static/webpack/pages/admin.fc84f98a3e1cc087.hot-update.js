"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./src/components/dashboard/aside/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/dashboard/aside/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/dashboard/aside/styles.ts\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar aside = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        dynamicWidth: window.innerWidth,\n        dynamicHeight: window.innerHeight\n    }), screenSize = ref[0], getDimension = ref[1];\n    var setDimension = function() {\n        getDimension({\n            dynamicWidth: window.innerWidth,\n            dynamicHeight: window.innerHeight\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', setDimension);\n        return function() {\n            window.removeEventListener('resize', setDimension);\n        };\n    }, [\n        screenSize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Aside\"\n                }, void 0, false, {\n                    fileName: \"/home/will/\\xc1rea de Trabalho/repo-teste/src/components/dashboard/aside/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/will/\\xc1rea de Trabalho/repo-teste/src/components/dashboard/aside/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Conteudo, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Conteudo\"\n                }, void 0, false, {\n                    fileName: \"/home/will/\\xc1rea de Trabalho/repo-teste/src/components/dashboard/aside/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/will/\\xc1rea de Trabalho/repo-teste/src/components/dashboard/aside/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(aside, \"3X0dHjwMmqtRKb8t54EqF7wtHig=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (aside);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvYXNpZGUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFFVDs7O0FBRXpDLEdBQUssQ0FBQ0ssS0FBSyxHQUFhLFFBQ3hCLEdBRDhCLENBQUM7O0lBRTdCLEdBQUssQ0FBOEJILEdBR2pDLEdBSGlDQSwrQ0FBUSxDQUFDLENBQUM7UUFDM0NJLFlBQVksRUFBRUMsTUFBTSxDQUFDQyxVQUFVO1FBQy9CQyxhQUFhLEVBQUVGLE1BQU0sQ0FBQ0csV0FBVztJQUNuQyxDQUFDLEdBSE1DLFVBQVUsR0FBa0JULEdBR2pDLEtBSGlCVSxZQUFZLEdBQUlWLEdBR2pDO0lBQ0YsR0FBSyxDQUFDVyxZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQkQsWUFBWSxDQUFDLENBQUM7WUFDWk4sWUFBWSxFQUFFQyxNQUFNLENBQUNDLFVBQVU7WUFDL0JDLGFBQWEsRUFBRUYsTUFBTSxDQUFDRyxXQUFXO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRURULGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZNLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsQ0FBUSxTQUFFRCxZQUFZO1FBRTlDLE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDVk4sTUFBTSxDQUFDUSxtQkFBbUIsQ0FBQyxDQUFRLFNBQUVGLFlBQVk7UUFDckQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDRjtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUVmLE1BQU07O3dGQUVEUix5Q0FBSTtzR0FDRmEsQ0FBQzs4QkFBQyxDQUFLOzs7Ozs7Ozs7Ozt3RkFFVFosNkNBQVE7c0dBQ05ZLENBQUM7OEJBQUMsQ0FBUTs7Ozs7Ozs7Ozs7OztBQUluQixDQUFDO0dBL0JLWCxLQUFLO0FBaUNYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FzaWRlL2luZGV4LnRzeD8wNTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1lbnUsIENvbnRldWRvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IGFzaWRlOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbc2NyZWVuU2l6ZSwgZ2V0RGltZW5zaW9uXSA9IHVzZVN0YXRlKHtcbiAgICBkeW5hbWljV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGR5bmFtaWNIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICB9KTtcbiAgY29uc3Qgc2V0RGltZW5zaW9uID0gKCkgPT4ge1xuICAgIGdldERpbWVuc2lvbih7XG4gICAgICBkeW5hbWljV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgZHluYW1pY0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSlcbiAgfVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0RGltZW5zaW9uKTtcbiAgICBcbiAgICByZXR1cm4oKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0RGltZW5zaW9uKTtcbiAgICB9KVxuICB9LCBbc2NyZWVuU2l6ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnU+XG4gICAgICAgIDxwPkFzaWRlPC9wPlxuICAgICAgPC9NZW51PlxuICAgICAgPENvbnRldWRvPlxuICAgICAgICA8cD5Db250ZXVkbzwvcD5cbiAgICAgIDwvQ29udGV1ZG8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc2lkZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWVudSIsIkNvbnRldWRvIiwiYXNpZGUiLCJkeW5hbWljV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZHluYW1pY0hlaWdodCIsImlubmVySGVpZ2h0Iiwic2NyZWVuU2l6ZSIsImdldERpbWVuc2lvbiIsInNldERpbWVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/aside/index.tsx\n");

/***/ })

});