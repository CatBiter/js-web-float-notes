/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/changeFormat.js":
/*!*****************************!*\
  !*** ./src/changeFormat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n *\n * @param url 图片路径\n * @param ext 图片格式\n * @param callback 结果回调\n */\n\nfunction getUrlBase64(url, ext, callback) {\n  var canvas = document.createElement(\"canvas\"); //创建canvas DOM元素\n  var ctx = canvas.getContext(\"2d\");\n  var img = new Image();\n  img.crossOrigin = 'Anonymous';\n  img.src = url;\n  img.onload = function () {\n    canvas.height = 60; //指定画板的高度,自定义\n    canvas.width = 85; //指定画板的宽度，自定义\n    ctx.drawImage(img, 0, 0, 60, 85); //参数可自定义\n    var dataURL = canvas.toDataURL(\"image/\" + ext);\n    callback.call(this, dataURL); //回掉函数获取Base64编码\n    canvas = null;\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUrlBase64());\n\n//# sourceURL=webpack://js-web-float-notes/./src/changeFormat.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialization */ \"./src/initialization.js\");\n\n\n(0,_initialization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('notes');\n// // 初始化\n// const draggableIcon = document.createElement('div')\n\n// const draggableDiv = document.createElement('div');\n// draggableDiv.textContent = '拖动框1';\n// draggableDiv.classList.add('floatDiv')\n\n// document.body.appendChild(draggableDiv);\n\n//# sourceURL=webpack://js-web-float-notes/./src/index.js?");

/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _changeFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeFormat */ \"./src/changeFormat.js\");\n\n\nfunction initialization(id) {\n  var oldElement = document.getElementById(id);\n  var newElement = document.createElement('div');\n  newElement.classList.add('floatIcon');\n  // let icon = document.createElement('img')\n  // icon.classList.add('noteIcon')\n  // icon.src = './assets/icon/笔记.svg'\n  // newElement.appendChild(icon)\n  (0,_changeFormat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('./assets/icon/note.svg', 'svg', function (base64) {\n    console.log(base64);\n  });\n\n  // 拖动\n  var isDragging = false;\n  var offsetX = 0;\n  var offsetY = 0;\n  newElement.addEventListener('mousedown', function (e) {\n    isDragging = true;\n    offsetX = e.clientX - newElement.getBoundingClientRect().left;\n    offsetY = e.clientY - newElement.getBoundingClientRect().top;\n    newElement.style.cursor = 'grabbing';\n  });\n  document.addEventListener('mousemove', function (e) {\n    if (!isDragging) return;\n    newElement.style.left = \"\".concat(e.clientX - offsetX, \"px\");\n    newElement.style.top = \"\".concat(e.clientY - offsetY, \"px\");\n  });\n  document.addEventListener('mouseup', function () {\n    isDragging = false;\n    newElement.style.cursor = 'grab';\n  });\n  oldElement.parentNode.replaceChild(newElement, oldElement);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialization);\n\n//# sourceURL=webpack://js-web-float-notes/./src/initialization.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-web-float-notes/./src/assets/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;