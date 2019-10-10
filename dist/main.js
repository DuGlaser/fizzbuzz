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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Fizzbuzz.ts":
/*!*************************!*\
  !*** ./src/Fizzbuzz.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Fizzbuzz {\r\n    constructor(min, max) {\r\n        this.formInfo = [];\r\n        this.formInfoCounter = 0;\r\n        this.min = Number(min);\r\n        this.max = Number(max);\r\n    }\r\n    // [forInfoに値を設定するためのInput要素を生成するメソッド]\r\n    addForm(name, value) {\r\n        const inputName = document.createElement('input');\r\n        inputName.type = 'text';\r\n        inputName.value = name;\r\n        const inputValue = document.createElement('input');\r\n        inputValue.type = 'number';\r\n        inputValue.value = value;\r\n        document.getElementById('formArea').appendChild(inputName);\r\n        document.getElementById('formArea').appendChild(inputValue);\r\n        this.formInfo.push({ text: name, value: Number(value) });\r\n        const count = this.formInfoCounter;\r\n        inputName.onchange = () => {\r\n            this.formInfo[count].text = inputName.value;\r\n            this.displyfizzbuzz();\r\n        };\r\n        inputValue.onchange = () => {\r\n            this.formInfo[count].value = Number(inputValue.value);\r\n            this.displyfizzbuzz();\r\n        };\r\n        this.formInfoCounter++;\r\n    }\r\n    setMin(Min) {\r\n        this.min = Number(Min);\r\n        this.displyfizzbuzz();\r\n    }\r\n    setMax(Max) {\r\n        this.max = Number(Max);\r\n        this.displyfizzbuzz();\r\n    }\r\n    // [formInfoのvalueの倍数が範囲内にあるかをcontainsを使って調べ、結果をfizzbuzzListに格納し\r\n    // html上に表示するメソッド]\r\n    displyfizzbuzz() {\r\n        const container = document.querySelector('#container ul');\r\n        container.innerHTML = null;\r\n        const contains = [];\r\n        const fizzbuzzList = [];\r\n        const min = this.min;\r\n        const max = this.max;\r\n        for (let i = min; i <= max; i++) {\r\n            contains.push(i);\r\n            fizzbuzzList.push(`<p>${i}</p>`);\r\n        }\r\n        this.formInfo.forEach(el => {\r\n            for (let j = el.value; j <= max; j += el.value) {\r\n                // findIndexはcontainsに値があるときその添字を返し、ないときは－１を返す\r\n                const index = contains.findIndex((val) => val === j);\r\n                if (index !== -1) {\r\n                    // textが入れられたことがなければ中身を置き換える\r\n                    if (fizzbuzzList[index] === `<p>${j}</p>`) {\r\n                        fizzbuzzList[index] = `<p>${el.text}</p>`;\r\n                    }\r\n                    else {\r\n                        fizzbuzzList[index] =\r\n                            fizzbuzzList[index] + `<p>${el.text}</p>`;\r\n                    }\r\n                }\r\n            }\r\n        });\r\n        for (let i = 0; i <= max - min; i++) {\r\n            const list = document.createElement('li');\r\n            list.innerHTML = fizzbuzzList[i];\r\n            container.appendChild(list);\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fizzbuzz);\r\n\n\n//# sourceURL=webpack:///./src/Fizzbuzz.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fizzbuzz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fizzbuzz */ \"./src/Fizzbuzz.ts\");\n\r\nconst RangeMin = document.getElementById('min-range');\r\nconst RangeMax = document.getElementById('max-range');\r\nconst fizzbuzz = new _Fizzbuzz__WEBPACK_IMPORTED_MODULE_0__[\"default\"](RangeMin.value, RangeMax.value);\r\nfizzbuzz.addForm('fizz', '3');\r\nfizzbuzz.addForm('buzz', '5');\r\nfizzbuzz.displyfizzbuzz();\r\n// min-rangeが変更されたらクラスのminを更新する\r\nRangeMin.addEventListener('change', () => {\r\n    fizzbuzz.setMin(RangeMin.value);\r\n});\r\n// max-rangeが変更されたらクラスのmaxを更新する\r\nRangeMax.addEventListener('change', () => {\r\n    fizzbuzz.setMax(RangeMax.value);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });