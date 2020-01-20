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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/1e47b2_65c22d9dd665412384741e6b0794c447.webp":
/*!************************************************************************!*\
  !*** ./src/assets/images/1e47b2_65c22d9dd665412384741e6b0794c447.webp ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/1e47b2_65c22d9dd665412384741e6b0794c447.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/1e47b2_65c22d9dd665412384741e6b0794c447.webp?");

/***/ }),

/***/ "./src/assets/images/apples.webp":
/*!***************************************!*\
  !*** ./src/assets/images/apples.webp ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/apples.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/apples.webp?");

/***/ }),

/***/ "./src/assets/images/fb.webp":
/*!***********************************!*\
  !*** ./src/assets/images/fb.webp ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/fb.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/fb.webp?");

/***/ }),

/***/ "./src/assets/images/fbw.webp":
/*!************************************!*\
  !*** ./src/assets/images/fbw.webp ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/fbw.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/fbw.webp?");

/***/ }),

/***/ "./src/assets/images/ig.webp":
/*!***********************************!*\
  !*** ./src/assets/images/ig.webp ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/ig.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/ig.webp?");

/***/ }),

/***/ "./src/assets/images/igw.webp":
/*!************************************!*\
  !*** ./src/assets/images/igw.webp ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/igw.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/igw.webp?");

/***/ }),

/***/ "./src/assets/images/p.webp":
/*!**********************************!*\
  !*** ./src/assets/images/p.webp ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/p.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/p.webp?");

/***/ }),

/***/ "./src/assets/images/person_pin-24px.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/person_pin-24px.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/person_pin-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/person_pin-24px.svg?");

/***/ }),

/***/ "./src/assets/images/pw.webp":
/*!***********************************!*\
  !*** ./src/assets/images/pw.webp ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/pw.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/pw.webp?");

/***/ }),

/***/ "./src/assets/images/salad.webp":
/*!**************************************!*\
  !*** ./src/assets/images/salad.webp ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/salad.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/salad.webp?");

/***/ }),

/***/ "./src/assets/images/twitter.webp":
/*!****************************************!*\
  !*** ./src/assets/images/twitter.webp ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/twitter.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/twitter.webp?");

/***/ }),

/***/ "./src/assets/images/twitterw.webp":
/*!*****************************************!*\
  !*** ./src/assets/images/twitterw.webp ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/twitterw.webp\");\n\n//# sourceURL=webpack:///./src/assets/images/twitterw.webp?");

/***/ }),

/***/ "./src/assets/images/veggies.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/veggies.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/veggies.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/veggies.jpg?");

/***/ }),

/***/ "./src/assets/images/woodbg2.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/woodbg2.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/woodbg2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/woodbg2.jpg?");

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/app.scss */ \"./src/assets/styles/app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_1e47b2_65c22d9dd665412384741e6b0794c447_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/1e47b2_65c22d9dd665412384741e6b0794c447.webp */ \"./src/assets/images/1e47b2_65c22d9dd665412384741e6b0794c447.webp\");\n/* harmony import */ var _assets_images_apples_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/apples.webp */ \"./src/assets/images/apples.webp\");\n/* harmony import */ var _assets_images_fb_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/fb.webp */ \"./src/assets/images/fb.webp\");\n/* harmony import */ var _assets_images_fbw_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/fbw.webp */ \"./src/assets/images/fbw.webp\");\n/* harmony import */ var _assets_images_ig_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/ig.webp */ \"./src/assets/images/ig.webp\");\n/* harmony import */ var _assets_images_igw_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/igw.webp */ \"./src/assets/images/igw.webp\");\n/* harmony import */ var _assets_images_p_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/p.webp */ \"./src/assets/images/p.webp\");\n/* harmony import */ var _assets_images_person_pin_24px_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/person_pin-24px.svg */ \"./src/assets/images/person_pin-24px.svg\");\n/* harmony import */ var _assets_images_pw_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/pw.webp */ \"./src/assets/images/pw.webp\");\n/* harmony import */ var _assets_images_salad_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/salad.webp */ \"./src/assets/images/salad.webp\");\n/* harmony import */ var _assets_images_twitter_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/twitter.webp */ \"./src/assets/images/twitter.webp\");\n/* harmony import */ var _assets_images_twitterw_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/twitterw.webp */ \"./src/assets/images/twitterw.webp\");\n/* harmony import */ var _assets_images_veggies_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/veggies.jpg */ \"./src/assets/images/veggies.jpg\");\n/* harmony import */ var _assets_images_woodbg2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/woodbg2.jpg */ \"./src/assets/images/woodbg2.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });