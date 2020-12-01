module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/about-me.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/posts/about-me.js":
/*!*********************************!*\
  !*** ./pages/posts/about-me.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AboutMe; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/nehemiahwilson/Documents/Education/Fall 2020/LMC 2700/lmc2700finalportfolio/pages/posts/about-me.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction AboutMe() {\n  return __jsx(\"div\", {\n    id: \"about-me-div\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 21\n    }\n  }, \"Home\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"about-me\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 21\n    }\n  }, \"About Me\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"photography\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 21\n    }\n  }, \"Photography\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 21\n    }\n  }, \"Contact\"))), __jsx(\"img\", {\n    class: \"about-me-photo\",\n    src: \"../compressed/DSC_0038-min.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    class: \"about-me-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, \"I have an insatiable desire to impact lives in a positive manner through my passion for computer science and digital media, which developed from teaching my high school's computer programming class during my 11th and 12th grade years. I am pursuing a degree in Computational Media with a concentration in UI/UX Design. My goal is to become a UI/UX Designer in a role that allows me to combine my technical and creative skills to solve the most pressing problems in modern technology.\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9hYm91dC1tZS5qcz9iNTJlIl0sIm5hbWVzIjpbIkFib3V0TWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFULEdBQW1CO0FBQzlCLFNBQ0k7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLENBSkosQ0FESixFQU9JO0FBQUssU0FBSyxFQUFDLGdCQUFYO0FBQTRCLE9BQUcsRUFBQyxnQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBRyxTQUFLLEVBQUMsZUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJlQVJKLENBREo7QUFZSCIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL2Fib3V0LW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRNZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiYWJvdXQtbWUtZGl2XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYWJvdXQtbWVcIj5BYm91dCBNZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwicGhvdG9ncmFwaHlcIj5QaG90b2dyYXBoeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiY29udGFjdFwiPkNvbnRhY3Q8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiYWJvdXQtbWUtcGhvdG9cIiBzcmM9XCIuLi9jb21wcmVzc2VkL0RTQ18wMDM4LW1pbi5qcGdcIi8+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImFib3V0LW1lLXRleHRcIj5JIGhhdmUgYW4gaW5zYXRpYWJsZSBkZXNpcmUgdG8gaW1wYWN0IGxpdmVzIGluIGEgcG9zaXRpdmUgbWFubmVyIHRocm91Z2ggbXkgcGFzc2lvbiBmb3IgY29tcHV0ZXIgc2NpZW5jZSBhbmQgZGlnaXRhbCBtZWRpYSwgd2hpY2ggZGV2ZWxvcGVkIGZyb20gdGVhY2hpbmcgbXkgaGlnaCBzY2hvb2wncyBjb21wdXRlciBwcm9ncmFtbWluZyBjbGFzcyBkdXJpbmcgbXkgMTF0aCBhbmQgMTJ0aCBncmFkZSB5ZWFycy4gSSBhbSBwdXJzdWluZyBhIGRlZ3JlZSBpbiBDb21wdXRhdGlvbmFsIE1lZGlhIHdpdGggYSBjb25jZW50cmF0aW9uIGluIFVJL1VYIERlc2lnbi4gTXkgZ29hbCBpcyB0byBiZWNvbWUgYSBVSS9VWCBEZXNpZ25lciBpbiBhIHJvbGUgdGhhdCBhbGxvd3MgbWUgdG8gY29tYmluZSBteSB0ZWNobmljYWwgYW5kIGNyZWF0aXZlIHNraWxscyB0byBzb2x2ZSB0aGUgbW9zdCBwcmVzc2luZyBwcm9ibGVtcyBpbiBtb2Rlcm4gdGVjaG5vbG9neS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/about-me.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });