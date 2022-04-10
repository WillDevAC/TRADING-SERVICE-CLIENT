/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-nextjs-toast */ \"react-nextjs-toast\");\n/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    const { pathname , asPath , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (pathname.search(\"/login\") < 0 && \"undefined\" != undefined) {\n            const value = localStorage.getItem(\"@token\");\n            const date = localStorage.getItem(\"@timestampToken\");\n            const isValid = value && dayjs__WEBPACK_IMPORTED_MODULE_9___default()(date).toDate().getDate() === dayjs__WEBPACK_IMPORTED_MODULE_9___default()(new Date()).toDate().getDate();\n            if (!isValid) {\n                push(`/login?url=${asPath}`);\n            }\n        }\n    }, [\n        \"undefined\",\n        pathname\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFUztBQUNFO0FBQ1Q7QUFDUDtBQUNJO0FBQ0E7QUFDTTtBQUNwQjtBQUV6QixLQUFLLENBQUNRLEtBQUssSUFBd0IsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUMvRCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVDLE1BQU0sR0FBRUMsSUFBSSxFQUFDLENBQUMsR0FBR1Asc0RBQVM7SUFDNUNMLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsRUFBRVUsUUFBUSxDQUFDRyxNQUFNLENBQUMsQ0FBUSxXQUFJLENBQUMsSUFBSSxDQUFhLGNBQUlDLFNBQVMsRUFBRSxDQUFDO1lBQ2hFLEtBQUssQ0FBQ0MsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFRO1lBQzNDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFpQjtZQUNuRCxLQUFLLENBQUNFLE9BQU8sR0FDWEosS0FBSyxJQUNMVCw0Q0FBSyxDQUFDWSxJQUFJLEVBQUVFLE1BQU0sR0FBR0MsT0FBTyxPQUFPZiw0Q0FBSyxDQUFDLEdBQUcsQ0FBQ2dCLElBQUksSUFBSUYsTUFBTSxHQUFHQyxPQUFPO1lBQ3ZFLEVBQUUsR0FBR0YsT0FBTyxFQUFFLENBQUM7Z0JBQ2JQLElBQUksRUFBRSxXQUFXLEVBQUVELE1BQU07WUFDM0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQztRQUFBLENBQWE7UUFBRUQsUUFBUTtJQUFBLENBQUM7SUFFNUIsTUFBTSw2RUFDSFQsNERBQWE7UUFBQ0csS0FBSyxFQUFFQSxxREFBSzs7d0ZBQ3hCSSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7d0ZBQ3ZCTixzREFBVzs7Ozs7d0ZBQ1hELDhEQUFjOzs7Ozs7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVLLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1uZXh0anMtdG9hc3RcIjtcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2dsb2JhbFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGF0aG5hbWUuc2VhcmNoKFwiL2xvZ2luXCIpIDwgMCAmJiB0eXBlb2Ygd2luZG93ICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkB0b2tlblwiKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkB0aW1lc3RhbXBUb2tlblwiKTtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPVxuICAgICAgICB2YWx1ZSAmJlxuICAgICAgICBkYXlqcyhkYXRlKS50b0RhdGUoKS5nZXREYXRlKCkgPT09IGRheWpzKG5ldyBEYXRlKCkpLnRvRGF0ZSgpLmdldERhdGUoKTtcbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwdXNoKGAvbG9naW4/dXJsPSR7YXNQYXRofWApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3R5cGVvZiB3aW5kb3csIHBhdGhuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlRoZW1lUHJvdmlkZXIiLCJUb2FzdENvbnRhaW5lciIsIkdsb2JhbFN0eWxlIiwidGhlbWUiLCJ1c2VSb3V0ZXIiLCJkYXlqcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJwdXNoIiwic2VhcmNoIiwidW5kZWZpbmVkIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0ZSIsImlzVmFsaWQiLCJ0b0RhdGUiLCJnZXREYXRlIiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n\n@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Archivo+Black&family=Poppins:wght@400;700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n  }\n\n  body {\n    background: ${(props)=>props.theme.colors.background\n};\n    color: ${(props)=>props.theme.colors.text\n};\n    font-family: 'Poppins', sans-serif;\n\n        /* width */\n    ::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: white; \n    }\n    \n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      background: #072038; \n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n      background: black; \n    }\n  }\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsaUVBQWVBLGdFQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Z0JBWWpCLEdBQUdDLEtBQUssR0FBS0EsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtDQUFDO1dBQ2hELEdBQUdILEtBQUssR0FBS0EsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSTtDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCaEQsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwudHM/MGZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QUJlZVplZTppdGFsQDA7MSZmYW1pbHk9QXJjaGl2bytCbGFjayZmYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgIC8qIHdpZHRoICovXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICB9XG5cbiAgICAvKiBUcmFjayAqL1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7IFxuICAgIH1cbiAgICBcbiAgICAvKiBIYW5kbGUgKi9cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwNzIwMzg7IFxuICAgIH1cblxuICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst theme = {\n    colors: {\n        background: \"#F5F7F9\",\n        text: \"#e1e1e6\",\n        primary: \"#0B3B69\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLEtBQUssR0FBRyxDQUFDO0lBQ2JDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLFVBQVUsRUFBRSxDQUFTO1FBQ3JCQyxJQUFJLEVBQUUsQ0FBUztRQUNmQyxPQUFPLEVBQUUsQ0FBUztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlSixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIGJhY2tncm91bmQ6IFwiI0Y1RjdGOVwiLFxuICAgIHRleHQ6IFwiI2UxZTFlNlwiLFxuICAgIHByaW1hcnk6IFwiIzBCM0I2OVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwidGV4dCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-nextjs-toast":
/*!*************************************!*\
  !*** external "react-nextjs-toast" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-nextjs-toast");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();