/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony export */ exports["b"] = myFunc;// ES6 Modules export
	var TaskCollection = function TaskCollection(tasks){
		if ( tasks === void 0 ) tasks = [];

			this.tasks = tasks;
	};

	TaskCollection.prototype.dump = function dump(){
		console.log(this.tasks);
	};

	var foo = 'bar';/* unused harmony export foo */

	function myFunc(){
		return {foo: foo};
	};

	// exports at the end
	/* harmony default export */ exports["a"] = TaskCollection;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskCollection__ = __webpack_require__(0);
	// ES6 Modules import
	// import {TaskCollection, foo, myFunc} from './TaskCollection';
	// or because TaskCollection


	new /* harmony import */__WEBPACK_IMPORTED_MODULE_0__TaskCollection__["a"](['Eat', 'Sleep', 'Rave', 'Repeat']).dump();
	console.log(/* harmony import */__WEBPACK_IMPORTED_MODULE_0__TaskCollection__["b"].bind()());

/***/ }
/******/ ]);