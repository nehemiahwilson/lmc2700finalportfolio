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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/photography.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/posts/photography.js":
/*!************************************!*\
  !*** ./pages/posts/photography.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Design; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/nehemiahwilson/Documents/Education/Fall 2020/LMC 2700/lmc2700finalportfolio/pages/posts/photography.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction Design() {\n  return __jsx(\"div\", {\n    id: \"photography-div\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 21\n    }\n  }, \"Home\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"about-me\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 21\n    }\n  }, \"About Me\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"photography\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 21\n    }\n  }, \"Photography\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 21\n    }\n  }, \"Contact\"))), __jsx(\"img\", {\n    class: \"photography-photo\",\n    src: \"../compressed/chyna-min.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    class: \"photography-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, \"Photography is my creative passion. I've been shooting for around 6 years, but I started professionally in the summer of 2019 when I bought my first camera. I have a passion for connecting with people through portrait photography, but I also dabble in street photography!\"), __jsx(\"p\", {\n    class: \"page-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"Check out more of my work at \", __jsx(\"a\", {\n    class: \"link\",\n    href: \"https://www.shotbynehemiah.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 46\n    }\n  }, \" shotbynehemiah.com\"), \"!\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9waG90b2dyYXBoeS5qcz81YWFlIl0sIm5hbWVzIjpbIkRlc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0IsU0FDSTtBQUFLLE1BQUUsRUFBQyxpQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLENBSkosQ0FESixFQU9JO0FBQUssU0FBSyxFQUFDLG1CQUFYO0FBQStCLE9BQUcsRUFBQyw2QkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBRyxTQUFLLEVBQUMsa0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1UkFSSixFQVNJO0FBQUcsU0FBSyxFQUFDLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FDaUM7QUFBRyxTQUFLLEVBQUMsTUFBVDtBQUFnQixRQUFJLEVBQUMsZ0NBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRGpDLE1BVEosQ0FESjtBQWVIIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvcGhvdG9ncmFwaHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNpZ24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInBob3RvZ3JhcGh5LWRpdlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImFib3V0LW1lXCI+QWJvdXQgTWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cInBob3RvZ3JhcGh5XCI+UGhvdG9ncmFwaHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImNvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBob3RvZ3JhcGh5LXBob3RvXCIgc3JjPVwiLi4vY29tcHJlc3NlZC9jaHluYS1taW4uanBnXCIvPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwaG90b2dyYXBoeS10ZXh0XCI+UGhvdG9ncmFwaHkgaXMgbXkgY3JlYXRpdmUgcGFzc2lvbi4gSSd2ZSBiZWVuIHNob290aW5nIGZvciBhcm91bmQgNiB5ZWFycywgYnV0IEkgc3RhcnRlZCBwcm9mZXNzaW9uYWxseSBpbiB0aGUgc3VtbWVyIG9mIDIwMTkgd2hlbiBJIGJvdWdodCBteSBmaXJzdCBjYW1lcmEuIEkgaGF2ZSBhIHBhc3Npb24gZm9yIGNvbm5lY3Rpbmcgd2l0aCBwZW9wbGUgdGhyb3VnaCBwb3J0cmFpdCBwaG90b2dyYXBoeSwgYnV0IEkgYWxzbyBkYWJibGUgaW4gc3RyZWV0IHBob3RvZ3JhcGh5ITwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgQ2hlY2sgb3V0IG1vcmUgb2YgbXkgd29yayBhdCA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuc2hvdGJ5bmVoZW1pYWguY29tXCI+IHNob3RieW5laGVtaWFoLmNvbTwvYT4hXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/photography.js\n");

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