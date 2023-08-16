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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialization */ \"./src/initialization.js\");\n\n\nvar appContainer = document.getElementById('notes');\nappContainer.innerHTML = \"\\n  <div id=\\\"floatIcon\\\" class=\\\"floatIcon floatPosition floatShadow\\\">\\n    <img id=\\\"icon\\\" src=\\\"\".concat('/src/assets/icon/note.svg', \"\\\" class=\\\"noteIcon\\\"></img>\\n  </div>\\n\");\n(0,_initialization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(appContainer);\n\n//# sourceURL=webpack://js-web-float-notes/./src/index.js?");

/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n\nfunction initialization(appContainer) {\n  var newElement = document.getElementById('floatIcon');\n  var icon = document.getElementById('icon');\n\n  // 拖动\n  var isDragging = false; // 是否正在拖动\n  var offsetX = 0; // 整个的X轴值\n  var offsetY = 0; // 整个的Y轴值\n\n  // 判断是点击还是拖动\n  var beforeX = 0;\n  var beforeY = 0;\n  var afterX = 0;\n  var afterY = 0;\n\n  // 是否是图标\n  var isIcon = true;\n\n  // 当浮动图标被按下的时候\n  newElement.addEventListener('mousedown', function (e) {\n    console.log('点击');\n    isDragging = true; // 设置现在为拖动状态\n    offsetX = e.clientX - newElement.getBoundingClientRect().left; // 记录现在的X值\n    offsetY = e.clientY - newElement.getBoundingClientRect().top; // 记录现在的Y值\n    beforeX = e.clientX;\n    beforeY = e.clientY;\n    afterX = e.clientX;\n    afterY = e.clientY;\n    newElement.style.cursor = 'grabbing';\n    newElement.classList.remove('changeAnimation');\n  });\n\n  // 当鼠标移动的时候（此时是document，是全局鼠标移动）\n  document.addEventListener('mousemove', function (e) {\n    if (!isDragging) return; // 若没有在移动状态，则直接返回不动\n    newElement.style.left = \"\".concat(e.clientX - offsetX, \"px\");\n    newElement.style.top = \"\".concat(e.clientY - offsetY, \"px\");\n    afterX = e.clientX;\n    afterY = e.clientY;\n  });\n\n  // 当鼠标抬起的时候\n  document.addEventListener('mouseup', function () {\n    if (isIcon && isDragging) {\n      var moveX = Math.abs(afterX - beforeX);\n      var moveY = Math.abs(afterY - beforeY);\n      if (moveX == 0 && moveY == 0) {\n        // 当点击的时候\n        console.log('click');\n        newElement.classList.remove('floatIcon');\n        newElement.classList.add('changeAnimation');\n        newElement.classList.add('floatNotes');\n        newElement.removeChild(icon);\n        newElement.innerHTML = \"\\n          <div class=\\\"noteTop\\\">\\n            <div></div>\\n            <div class=\\\"closeIcon\\\"></div>\\n          </div>\\n        \";\n        isIcon = false;\n      }\n    }\n    isDragging = false;\n    newElement.style.cursor = 'pointer';\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialization);\n\n//# sourceURL=webpack://js-web-float-notes/./src/initialization.js?");

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