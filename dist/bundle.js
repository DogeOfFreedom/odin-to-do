/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/coolvetica rg.otf */ "./src/fonts/coolvetica rg.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LEMONMILK-Regular.otf */ "./src/fonts/LEMONMILK-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LUMINA.ttf */ "./src/fonts/LUMINA.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --radius: 15px;
    --button-width: 60px;
    --position-spacing: 3%;
    --hidden-btn-right-offset: 80px;
    --hidden-btn-top-offset: 10px;
    --hidden-btn-gap: 60px;

    --sidebar-title: 24px;
    --sidebar-title-small: 20px;

    --light-grey: rgb(219, 228, 242);
    --button-shadow: rgb(168, 173, 184);
    --light-blue: rgb(33, 140, 227);
    --sidebar-highlight: rgb(25, 146, 238);
    --white: rgb(244, 248, 255);
}

@font-face {
    font-family: coolvetica;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: LEMONMILK;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: LUMINA;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

body {
    background-image: linear-gradient(45deg, rgb(0, 77, 177), rgb(0, 225, 255));
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0px;
}

.main-card {
    background-color: var(--white);
    border-radius: var(--radius);
    height: 800px; /* Placeholder */
    width: clamp(850px, 50%, 1500px);
    box-shadow: 0px 5px 10px rgba(0, 50, 115, 0.8);
    display: grid;
    grid-template-rows: 75px 1fr;
}

.content {
    display: flex;
    align-items: normal;
    position: relative;
}

.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: LEMONMILK;
    font-size: 40px;
    background-color: rgb(73, 201, 226);
    color: white;
    border-radius: var(--radius) var(--radius) 0px 0px;
    line-height: 50px;
    text-shadow: 2px 2px 0px rgb(67, 149, 197);
}

.title-icon {
    font-size: 50px;
}

.sidebar {
    height: 100%;
    width: clamp(350px, 10%, 200px);
    background-color: var(--light-grey);
    border-radius: 0 0px 0px var(--radius);
    box-shadow: 2px 0px 5px rgba(141, 145, 154, 0.7);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 0px;
    box-sizing: border-box;
}

.sidebar:last-child {
    flex: auto;
}

.sidebar div {
    width: 100%;
    padding: 15px 30px;
    box-sizing: border-box;
}

.sidebar-big-text {
    font-size: var(--sidebar-title);
    font-family: LEMONMILK;
    font-weight: 100;
    margin: 0px;
    line-height: calc(var(--sidebar-title) + 3px);
    text-align: start;
}

.sidebar div button {
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
}

.sidebar div ul {
    padding-left: 20px;
    margin-top: 0px;
}

.sidebar div ul li {
    padding: 5px 0px;
}

.sidebar div ul li button {
    list-style: none;
    text-align: start;
    font-size: var(--sidebar-title-small);
    font-family: LEMONMILK;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}

.sidebar div ul li {
    list-style: none;
}

.highlighted {
    font-size: calc(var(--sidebar-title) + 1px);
    font-weight: bold;
    color: var(--sidebar-highlight);
}

#projects-header {
    border-bottom: 2px solid black;
    margin-top: 30px;
}

.body-content {
    height: 100%;
    flex: auto;
}

.add-button {
    border: 0px;
    border-radius: 100px;
    background-color: var(--light-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--button-width);
    width: var(--button-width);
    box-sizing: border-box;
    padding: 0px;
    position: absolute;
    bottom: var(--position-spacing);
    right: var(--position-spacing);
    box-shadow: 2px 2px 2px rgb(168, 173, 184);

    & span {
        color: white;
        font-size: var(--button-width);
    }
}

.add-button:hover {
    background-color: black;
    height: calc(var(--button-width) + 2px);
    width: calc(var(--button-width) + 2px);
}

.hide {
    display: none;
}

.hidden-menu-btn {
    position: absolute;
    background-color: var(--light-grey);
    padding: 12px;
    border-radius: 10px;
    border: 0px;
    font-size: 18px;
    box-shadow: 2px 2px 5px var(--button-shadow);
}

.hidden-menu-btn:hover {
    padding: 14px;
    background-color: var(--sidebar-highlight);
    color: white;
}

.add-todo-button {
    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset) + (var(--hidden-btn-gap)*2));
    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));
}

.add-project-button {
    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset) + var(--hidden-btn-gap));
    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));
}

.add-note-button {
    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset));
    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));
}

dialog {
    background-color: var(--white);
    width: 800px;
    box-shadow: 0px 5px 10px rgb(89, 89, 89);
    border: 0px;
    border-radius: 15px;
    padding: 0px;
}

::backdrop {
    backdrop-filter: blur(7px);
}

.dialog-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & div {
        height: 60px;
    }
}

form {
    flex: auto;
    display: grid;
    gap: 10px;
    padding: 20px 30px 30px 30px;
    grid-template-columns: 1fr 2fr 1fr;

    & * {
        font-family: coolvetica;
        font-size: 24px;
        background-color: var(--white);
    }
}

.todo-form,
.note-form {
    grid-template-rows: 1fr 5fr 1fr;
}

.project-form {
    grid-template-rows: 1fr 1fr;
}

#title, 
#description, 
#date, 
#low-priority-btn,
#high-priority-btn,
#form-submit-btn {
    border-radius: 15px;
}

#title, 
#description, 
#date {
    padding-left: 15px;
}

#title,
#description {
    border: 0px;
}

#title:focus-visible,
#description:focus-visible {
    outline: 0px;
}

#title {
    grid-row: 1/2;
    grid-column: 1/4;
}

#description {
    grid-row: 2/3;
    grid-column: 1/4;
}

#date {
    grid-row: 3/4;
    grid-column: 1/2;
}

form div {
    grid-row: 3/4;
    grid-column: 2/3;
    display: flex;
    justify-content: flex-start;
    padding: 0px 10px;
    gap: 10px;
}

#low-priority-btn,
#high-priority-btn {
    background-color: rgba(0,0,0,0);
    height: 40px;
    width: 100px;
}

#low-priority-btn {
    border: 2px solid green;
    color: green;
}

#high-priority-btn {
    border: 2px solid red;
    color: red;
}

#form-submit-btn {
    grid-row: 3/4;
    grid-column: 3/4;
    border-radius: 15px;
    border: 2px solid black;
    background-color: rgba(0,0,0,0);
    height: 60px;
}

#form-submit-btn:hover {
    background-color: rgb(39, 39, 39);
    color: white;
    border: 2px solid rgb(39, 39, 39);
}

@media only screen and (max-width: 1500px) {
    body {
        display: block;
    }

    .main-card {
        border-radius: 0px;
        height: 100%;
        width: 100%;
    }

    .title-container {
        border-radius: 0px;
    }

    .sidebar {
        padding: 50px 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --radius: 15px;\r\n    --button-width: 60px;\r\n    --position-spacing: 3%;\r\n    --hidden-btn-right-offset: 80px;\r\n    --hidden-btn-top-offset: 10px;\r\n    --hidden-btn-gap: 60px;\r\n\r\n    --sidebar-title: 24px;\r\n    --sidebar-title-small: 20px;\r\n\r\n    --light-grey: rgb(219, 228, 242);\r\n    --button-shadow: rgb(168, 173, 184);\r\n    --light-blue: rgb(33, 140, 227);\r\n    --sidebar-highlight: rgb(25, 146, 238);\r\n    --white: rgb(244, 248, 255);\r\n}\r\n\r\n@font-face {\r\n    font-family: coolvetica;\r\n    src: url(fonts/coolvetica\\ rg.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: LEMONMILK;\r\n    src: url(fonts/LEMONMILK-Regular.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: LUMINA;\r\n    src: url(fonts/LUMINA.ttf);\r\n}\r\n\r\nbody {\r\n    background-image: linear-gradient(45deg, rgb(0, 77, 177), rgb(0, 225, 255));\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    margin: 0px;\r\n}\r\n\r\n.main-card {\r\n    background-color: var(--white);\r\n    border-radius: var(--radius);\r\n    height: 800px; /* Placeholder */\r\n    width: clamp(850px, 50%, 1500px);\r\n    box-shadow: 0px 5px 10px rgba(0, 50, 115, 0.8);\r\n    display: grid;\r\n    grid-template-rows: 75px 1fr;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    align-items: normal;\r\n    position: relative;\r\n}\r\n\r\n.title-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: LEMONMILK;\r\n    font-size: 40px;\r\n    background-color: rgb(73, 201, 226);\r\n    color: white;\r\n    border-radius: var(--radius) var(--radius) 0px 0px;\r\n    line-height: 50px;\r\n    text-shadow: 2px 2px 0px rgb(67, 149, 197);\r\n}\r\n\r\n.title-icon {\r\n    font-size: 50px;\r\n}\r\n\r\n.sidebar {\r\n    height: 100%;\r\n    width: clamp(350px, 10%, 200px);\r\n    background-color: var(--light-grey);\r\n    border-radius: 0 0px 0px var(--radius);\r\n    box-shadow: 2px 0px 5px rgba(141, 145, 154, 0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 40px 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sidebar:last-child {\r\n    flex: auto;\r\n}\r\n\r\n.sidebar div {\r\n    width: 100%;\r\n    padding: 15px 30px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sidebar-big-text {\r\n    font-size: var(--sidebar-title);\r\n    font-family: LEMONMILK;\r\n    font-weight: 100;\r\n    margin: 0px;\r\n    line-height: calc(var(--sidebar-title) + 3px);\r\n    text-align: start;\r\n}\r\n\r\n.sidebar div button {\r\n    border: 0px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.sidebar div ul {\r\n    padding-left: 20px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.sidebar div ul li {\r\n    padding: 5px 0px;\r\n}\r\n\r\n.sidebar div ul li button {\r\n    list-style: none;\r\n    text-align: start;\r\n    font-size: var(--sidebar-title-small);\r\n    font-family: LEMONMILK;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.sidebar div ul li {\r\n    list-style: none;\r\n}\r\n\r\n.highlighted {\r\n    font-size: calc(var(--sidebar-title) + 1px);\r\n    font-weight: bold;\r\n    color: var(--sidebar-highlight);\r\n}\r\n\r\n#projects-header {\r\n    border-bottom: 2px solid black;\r\n    margin-top: 30px;\r\n}\r\n\r\n.body-content {\r\n    height: 100%;\r\n    flex: auto;\r\n}\r\n\r\n.add-button {\r\n    border: 0px;\r\n    border-radius: 100px;\r\n    background-color: var(--light-blue);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: var(--button-width);\r\n    width: var(--button-width);\r\n    box-sizing: border-box;\r\n    padding: 0px;\r\n    position: absolute;\r\n    bottom: var(--position-spacing);\r\n    right: var(--position-spacing);\r\n    box-shadow: 2px 2px 2px rgb(168, 173, 184);\r\n\r\n    & span {\r\n        color: white;\r\n        font-size: var(--button-width);\r\n    }\r\n}\r\n\r\n.add-button:hover {\r\n    background-color: black;\r\n    height: calc(var(--button-width) + 2px);\r\n    width: calc(var(--button-width) + 2px);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.hidden-menu-btn {\r\n    position: absolute;\r\n    background-color: var(--light-grey);\r\n    padding: 12px;\r\n    border-radius: 10px;\r\n    border: 0px;\r\n    font-size: 18px;\r\n    box-shadow: 2px 2px 5px var(--button-shadow);\r\n}\r\n\r\n.hidden-menu-btn:hover {\r\n    padding: 14px;\r\n    background-color: var(--sidebar-highlight);\r\n    color: white;\r\n}\r\n\r\n.add-todo-button {\r\n    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset) + (var(--hidden-btn-gap)*2));\r\n    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));\r\n}\r\n\r\n.add-project-button {\r\n    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset) + var(--hidden-btn-gap));\r\n    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));\r\n}\r\n\r\n.add-note-button {\r\n    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset));\r\n    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));\r\n}\r\n\r\ndialog {\r\n    background-color: var(--white);\r\n    width: 800px;\r\n    box-shadow: 0px 5px 10px rgb(89, 89, 89);\r\n    border: 0px;\r\n    border-radius: 15px;\r\n    padding: 0px;\r\n}\r\n\r\n::backdrop {\r\n    backdrop-filter: blur(7px);\r\n}\r\n\r\n.dialog-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    & div {\r\n        height: 60px;\r\n    }\r\n}\r\n\r\nform {\r\n    flex: auto;\r\n    display: grid;\r\n    gap: 10px;\r\n    padding: 20px 30px 30px 30px;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n\r\n    & * {\r\n        font-family: coolvetica;\r\n        font-size: 24px;\r\n        background-color: var(--white);\r\n    }\r\n}\r\n\r\n.todo-form,\r\n.note-form {\r\n    grid-template-rows: 1fr 5fr 1fr;\r\n}\r\n\r\n.project-form {\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n#title, \r\n#description, \r\n#date, \r\n#low-priority-btn,\r\n#high-priority-btn,\r\n#form-submit-btn {\r\n    border-radius: 15px;\r\n}\r\n\r\n#title, \r\n#description, \r\n#date {\r\n    padding-left: 15px;\r\n}\r\n\r\n#title,\r\n#description {\r\n    border: 0px;\r\n}\r\n\r\n#title:focus-visible,\r\n#description:focus-visible {\r\n    outline: 0px;\r\n}\r\n\r\n#title {\r\n    grid-row: 1/2;\r\n    grid-column: 1/4;\r\n}\r\n\r\n#description {\r\n    grid-row: 2/3;\r\n    grid-column: 1/4;\r\n}\r\n\r\n#date {\r\n    grid-row: 3/4;\r\n    grid-column: 1/2;\r\n}\r\n\r\nform div {\r\n    grid-row: 3/4;\r\n    grid-column: 2/3;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    padding: 0px 10px;\r\n    gap: 10px;\r\n}\r\n\r\n#low-priority-btn,\r\n#high-priority-btn {\r\n    background-color: rgba(0,0,0,0);\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n\r\n#low-priority-btn {\r\n    border: 2px solid green;\r\n    color: green;\r\n}\r\n\r\n#high-priority-btn {\r\n    border: 2px solid red;\r\n    color: red;\r\n}\r\n\r\n#form-submit-btn {\r\n    grid-row: 3/4;\r\n    grid-column: 3/4;\r\n    border-radius: 15px;\r\n    border: 2px solid black;\r\n    background-color: rgba(0,0,0,0);\r\n    height: 60px;\r\n}\r\n\r\n#form-submit-btn:hover {\r\n    background-color: rgb(39, 39, 39);\r\n    color: white;\r\n    border: 2px solid rgb(39, 39, 39);\r\n}\r\n\r\n@media only screen and (max-width: 1500px) {\r\n    body {\r\n        display: block;\r\n    }\r\n\r\n    .main-card {\r\n        border-radius: 0px;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    .title-container {\r\n        border-radius: 0px;\r\n    }\r\n\r\n    .sidebar {\r\n        padding: 50px 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/hiddenMenu.js":
/*!***********************************!*\
  !*** ./src/scripts/hiddenMenu.js ***!
  \***********************************/
/***/ (() => {

// Adds hiding and unhiding buttons for hidden button menu
let add_btn = document.querySelector(".add-button");
let new_todo_btn = document.querySelector(".add-todo-button");
let new_project_btn = document.querySelector(".add-project-button");
let new_note_btn = document.querySelector(".add-note-button");

add_btn.addEventListener("click", () => {
    new_todo_btn.classList.toggle("hide");
    new_project_btn.classList.toggle("hide");
    new_note_btn.classList.toggle("hide");
})

/***/ }),

/***/ "./src/scripts/modal/populateNoteModal.js":
/*!************************************************!*\
  !*** ./src/scripts/modal/populateNoteModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_noteStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/noteStorage.js */ "./src/scripts/storage/noteStorage.js");


let modal = document.querySelector("dialog");
let new_note_btn = document.querySelector(".add-note-button");
new_note_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container"> 
            <div class="title-container">
                <span>Add New Note</span>
            </div>
            <form class="note-form" action="">
                <input name="title" type="text" id="title" placeholder="New Note..." required>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Description..."></textarea>
                <button id="form-submit-btn" type="button">Submit</button>
            </form>   
        </div> 
    `
    modal.showModal();
    let submit_btn = document.querySelector("#form-submit-btn");
    submit_btn.addEventListener("click", e => {
        e.preventDefault();
        modal.close();
        let new_note_form = document.querySelector(".note-form");
        (0,_storage_noteStorage_js__WEBPACK_IMPORTED_MODULE_0__.makeNewNote)(new_note_form);
    });
})

/***/ }),

/***/ "./src/scripts/modal/populateProjectModal.js":
/*!***************************************************!*\
  !*** ./src/scripts/modal/populateProjectModal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/projectStorage.js */ "./src/scripts/storage/projectStorage.js");


let modal = document.querySelector("dialog");
let new_project_btn = document.querySelector(".add-project-button");
new_project_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container">  
            <div class="title-container">
                <span>Add New Project</span>
            </div>
            <form class="project-form" action="">
                <input name="title" type="text" id="title" placeholder="New Project..." required>
                <button id="form-submit-btn" type="button">Submit</button>
            </form> 
        </div>     
    `
    modal.showModal();
    let submit_btn = document.querySelector("#form-submit-btn");
    submit_btn.addEventListener("click", e => {
        e.preventDefault();
        modal.close();
        let new_project_form = document.querySelector(".project-form");
        (0,_storage_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__.makeNewProject)(new_project_form);
    });
})

/***/ }),

/***/ "./src/scripts/modal/populateToDoModal.js":
/*!************************************************!*\
  !*** ./src/scripts/modal/populateToDoModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/todoStorage.js */ "./src/scripts/storage/todoStorage.js");


let modal = document.querySelector("dialog");
let new_todo_btn = document.querySelector(".add-todo-button");
new_todo_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container">
            <div class="title-container">
            <span>Add New To Do</span>
            </div>
            <form class="todo-form" action="">
                <input name="title" type="text" id="title" placeholder="New To Do..." required>
                <textarea name="description" id="description" cols="10" rows="5" placeholder="Description..."></textarea>
                <input type="date" id="date" required>
                <div>  
                    <button id="low-priority-btn" type="button" data-selected="false">Low</button>
                    <button id="high-priority-btn" type="button" data-selected="false">High</button>
                </div>
                <button id="form-submit-btn" type="button">Submit</button>
            </form>
        </div>
    `
    modal.showModal();
    let submit_btn = document.querySelector("#form-submit-btn");
    submit_btn.addEventListener("click", e => {
        e.preventDefault();
        modal.close();
        let new_todo_form = document.querySelector(".todo-form");
        (0,_storage_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.makeNewToDo)(new_todo_form);
    });
    
    let low_priority_btn = document.querySelector("#low-priority-btn");
    let high_priority_btn = document.querySelector("#high-priority-btn");
    low_priority_btn.addEventListener("click", () => {
        let selected = low_priority_btn.getAttribute("data-selected");
        if(selected === "false") {
            low_priority_btn.style.color = "rgb(244, 248, 255)";
            low_priority_btn.style["background-color"] = "green";
            low_priority_btn.setAttribute("data-selected", "true");
            if(high_priority_btn.getAttribute("data-selected") === "true") {
                high_priority_btn.click();
            }
        } else {
            low_priority_btn.style.color = "green";
            low_priority_btn.style["background-color"] = "rgb(244, 248, 255)";
            low_priority_btn.setAttribute("data-selected", "false");
        }
    })

    high_priority_btn.addEventListener("click", () => {
        let selected = high_priority_btn.getAttribute("data-selected");
        if(selected === "false") {
            high_priority_btn.style.color = "rgb(244, 248, 255)";
            high_priority_btn.style["background-color"] = "red";
            high_priority_btn.setAttribute("data-selected", "true");
            if(low_priority_btn.getAttribute("data-selected") === "true") {
                low_priority_btn.click();
            }
        } else {
            high_priority_btn.style.color = "red";
            high_priority_btn.style["background-color"] = "rgb(244, 248, 255)";
            high_priority_btn.setAttribute("data-selected", "false");
        }
    })
})

/***/ }),

/***/ "./src/scripts/objects/note.js":
/*!*************************************!*\
  !*** ./src/scripts/objects/note.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNote: () => (/* binding */ createNote)
/* harmony export */ });
let createNote = (id, title, description) => {
    return { id, title, description };
}



/***/ }),

/***/ "./src/scripts/objects/project.js":
/*!****************************************!*\
  !*** ./src/scripts/objects/project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDo: () => (/* binding */ addToDo),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteToDo: () => (/* binding */ deleteToDo)
/* harmony export */ });
let createProject = (id, title) => {
    let todos = [];
    return { id, title, todos };
}

let addToDo = (project, todo) => {
    project.todos.push(todo);
}

let deleteToDo = (project, todo) => {
    let index = project.todos.indexOf(todo);
    if(index > -1) { // found todo
        project.todos.splice(index, 1);
    }
}




/***/ }),

/***/ "./src/scripts/objects/todo.js":
/*!*************************************!*\
  !*** ./src/scripts/objects/todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   createToDo: () => (/* binding */ createToDo)
/* harmony export */ });
let createToDo = (id, title, description, dueDate, priority, projectId) => {
    let completed = false;
    return { id, title, description, dueDate, priority, projectId, completed };
}

let changePriority = (todo, value) => {
    let valid_priorities = ["none", "low", "high"];
    if(valid_priorities.includes(value)) {
        todo.priority = value;
    }
    else {
        console.log("INVALID PRIORITY VALUE");
    }
}



/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateProjectList: () => (/* binding */ populateProjectList)
/* harmony export */ });
/* harmony import */ var _storage_projectStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage/projectStorage */ "./src/scripts/storage/projectStorage.js");


let addButtonFunctionality = (element) => {
    let raw_value = element.getAttribute("value");
    let value = typeof raw_value === "number" ? String(raw_value) : raw_value;
    let child = document.querySelector(`.sidebar-option[value="${value}"] button`);
    
    // Adds "//" when sidebar options are hovered over
    element.addEventListener("mouseover", () => {
        if(element.getAttribute("selected") === "false") {
            child.textContent = "// " + child.textContent; 
        }
    })

    // Removes "//" when sidebar options are hovered off
    element.addEventListener("mouseout", () => {
        if(element.getAttribute("selected") === "false") {
            child.textContent = child.textContent.slice(3);
        }
    })

    element.addEventListener("click", () => {
        // Remove the selected symbol from all other options
        let sidebar_options = document.querySelectorAll(".sidebar-option");
        for(let opt of sidebar_options) {
            opt.setAttribute("selected", "false");
            let val = opt.getAttribute("value");
            let opt_child = document.querySelector(`.sidebar-option[value="${val}"] button`);
            opt_child.classList.remove("highlighted");
            if(opt_child.textContent[0] === "/") {
                opt_child.textContent = opt_child.textContent.slice(3);
            }
        }
        element.setAttribute("selected", "true");
        child.classList.add("highlighted");
        child.textContent = "// " + child.textContent; 
    })
}

// Populate project list
let populateProjectList = () => {
    let projects = (0,_storage_projectStorage__WEBPACK_IMPORTED_MODULE_0__.getProjectList)();
    let project_list = document.querySelector(".project-list");
    project_list.innerHTML = "";
    for(let project of projects) {     
        let project_btn = document.createElement("button");
        project_btn.setAttribute("type", "button");
        project_btn.textContent = project.title;

        let new_list_item = document.createElement("li");
        new_list_item.classList.add("sidebar-option", "project-option");
        new_list_item.setAttribute("value", project.id) ;
        new_list_item.setAttribute("selected", "false");
              
        new_list_item.appendChild(project_btn);
        project_list.appendChild(new_list_item);
        
        addButtonFunctionality(new_list_item);
    }
}



let sidebar_options = document.querySelectorAll(".sidebar-option");
for(let option of sidebar_options) {
    addButtonFunctionality(option);
}

populateProjectList();



/***/ }),

/***/ "./src/scripts/storage/noteStorage.js":
/*!********************************************!*\
  !*** ./src/scripts/storage/noteStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteNote: () => (/* binding */ deleteNote),
/* harmony export */   makeNewNote: () => (/* binding */ makeNewNote),
/* harmony export */   updateNote: () => (/* binding */ updateNote)
/* harmony export */ });
/* harmony import */ var _storageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageHelper */ "./src/scripts/storage/storageHelper.js");
/* harmony import */ var _objects_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/note */ "./src/scripts/objects/note.js");



let notes = [];

if(localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.getItem("notes"));
}

let makeNewNote = element => {
    let { id, title, description } = extractFromNoteForm(element);
    
    let new_note = (0,_objects_note__WEBPACK_IMPORTED_MODULE_1__.createNote)(id, title, description);
    notes.push(new_note);
    localStorage.setItem("notes", JSON.stringify(notes))
}

let extractFromNoteForm = element => {
    let title = String(element.children[0].value);
    title = title.trim();
    let id = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_0__.modifyName)(notes, title);

    let description = element.children[1].value;

    return { id, title, description }
}

let updateNote = element => {
    let { title, description } = extractFromNoteForm(element);
    let id = element.id;
    let note = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_0__.getById)(notes, id);
    note.title = title;
    note.description = description;
}

let deleteNote = note => {
    let index = notes.indexOf(note);
    notes.splice(index, 1);
}



/***/ }),

/***/ "./src/scripts/storage/projectStorage.js":
/*!***********************************************!*\
  !*** ./src/scripts/storage/projectStorage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProjectList: () => (/* binding */ getProjectList),
/* harmony export */   home_project: () => (/* binding */ home_project),
/* harmony export */   makeNewProject: () => (/* binding */ makeNewProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _objects_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/project */ "./src/scripts/objects/project.js");
/* harmony import */ var _storageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageHelper */ "./src/scripts/storage/storageHelper.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar */ "./src/scripts/sidebar.js");





let projects = [];
let home_project = (0,_objects_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("home");

if(localStorage.getItem("home") !== null) {
    home_project = JSON.parse(localStorage.getItem("home"));
}

if(localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
}

let makeNewProject = element => {
    let { id, title } = extractFromProjectForm(element);
    let new_project = (0,_objects_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(id, title);
    projects.push(new_project);
    localStorage.setItem("projects", JSON.stringify(projects));
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.populateProjectList)();
}

let extractFromProjectForm = element => {
    let title = String(element.children[0].value);
    title = title.trim();
    let id = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_1__.modifyName)(projects, title);
    return { id, title }
}

let updateProject = element => {
    let { title } = extractFromProjectForm(element);
    let id = element.id;
    let project = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_1__.getById)(projects, id);
    project.title = title;
}

let deleteProject = project => {
    let index = projects.indexOf(project);
    projects.splice(index, 1);
}

let getProjectList = () => {
    return projects;
}



/***/ }),

/***/ "./src/scripts/storage/storageHelper.js":
/*!**********************************************!*\
  !*** ./src/scripts/storage/storageHelper.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getById: () => (/* binding */ getById),
/* harmony export */   modifyName: () => (/* binding */ modifyName)
/* harmony export */ });
let getById = (arr, id) => {
    for(let obj of arr) {
        if(obj.id === id) {
            return note;
        }
    }
}

let modifyName = (arr, name) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id === name) {
            let arr_modified = arr.slice(i+1);
            return modifyName(arr_modified, name + "-0");
        }
    }
    return name;
}



/***/ }),

/***/ "./src/scripts/storage/todoStorage.js":
/*!********************************************!*\
  !*** ./src/scripts/storage/todoStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeNewToDo: () => (/* binding */ makeNewToDo),
/* harmony export */   removeToDo: () => (/* binding */ removeToDo),
/* harmony export */   updateToDo: () => (/* binding */ updateToDo)
/* harmony export */ });
/* harmony import */ var _storageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageHelper */ "./src/scripts/storage/storageHelper.js");
/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectStorage */ "./src/scripts/storage/projectStorage.js");
/* harmony import */ var _objects_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/todo */ "./src/scripts/objects/todo.js");
/* harmony import */ var _objects_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/project */ "./src/scripts/objects/project.js");





let makeNewToDo = element => {
    let { id, title, description, dueDate, priority, targetProject } = extractFromToDoForm(element);
    let new_to_do = (0,_objects_todo__WEBPACK_IMPORTED_MODULE_2__.createToDo)(id, title, description, dueDate, priority, targetProject.id);

    (0,_objects_project__WEBPACK_IMPORTED_MODULE_3__.addToDo)(targetProject, new_to_do);
    if(targetProject.id === "home") {
        localStorage.setItem("home", JSON.stringify(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.home_project));
    } else {
        localStorage.setItem("projects", JSON.stringify(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.projects));
    }
}

let extractFromToDoForm = (element) => {
    let title = String(element.children[0].value);
    title = title.trim();
    
    let description = element.children[1].value;
    let dueDate = element.children[2].value;
    
    let priority_div = element.children[3];
    let low_priority_btn = priority_div.children[0];
    let high_priority_btn = priority_div.children[1];
    let priority = "";

    if(low_priority_btn.getAttribute("data-selected") === "true") {
        priority = "low";
    } 
    else if(high_priority_btn.getAttribute("data-selected") === "true") {
        priority = "high";
    }
    else {
        priority = "none";
    }

    // choose which project to add todo to depending on which option in the sidebar is selected
    let targetProject = chooseProject();

    let id = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_0__.modifyName)(targetProject.todos, title);
    return { id, title, description, dueDate, priority, targetProject }
}

let updateToDo = element => {
    let { title, description, dueDate, priority, targetProject } = extractFromToDoForm(element);
    let id = element.id;
    let todo = getToDo(targetProject.id, id);
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
}

let removeToDo = (projectId, todoId) => {
    let project = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_0__.getById)(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.projects, project_id);
    let todo = getToDo(projectId, todoId);
    deleteToDo(project, todo);
}

let getToDo = (projectId, todoId) => {
    let project = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_0__.getById)(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.projects, projectId);
    for(let todo in project.todos) {
        if(todo.id === todoId) {
            return todo;
        }
    }
} 

// Determines which project is selected on the sidebar, which the todo will be added to
let chooseProject = () => {
    let project_options = document.querySelectorAll(".project-option");
    for(let project_option of project_options) {
        if(project_option.getAttribute("selected") === "true") {
            let chosen_project = _projectStorage__WEBPACK_IMPORTED_MODULE_1__.projects.filter(x => x.title === project_option.getAttribute("value"))[0]
            return chosen_project; 
        }
    }
    return _projectStorage__WEBPACK_IMPORTED_MODULE_1__.home_project;
}



/***/ }),

/***/ "./src/fonts/LEMONMILK-Regular.otf":
/*!*****************************************!*\
  !*** ./src/fonts/LEMONMILK-Regular.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "55fc24317b9c2b507dd8.otf";

/***/ }),

/***/ "./src/fonts/LUMINA.ttf":
/*!******************************!*\
  !*** ./src/fonts/LUMINA.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a019d3af846943095366.ttf";

/***/ }),

/***/ "./src/fonts/coolvetica rg.otf":
/*!*************************************!*\
  !*** ./src/fonts/coolvetica rg.otf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d81d0e1fdbd5f69b232.otf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


__webpack_require__(/*! ./sidebar.js */ "./src/scripts/sidebar.js");
__webpack_require__(/*! ./hiddenMenu.js */ "./src/scripts/hiddenMenu.js");
__webpack_require__(/*! ./modal/populateNoteModal.js */ "./src/scripts/modal/populateNoteModal.js");
__webpack_require__(/*! ./modal/populateProjectModal.js */ "./src/scripts/modal/populateProjectModal.js");
__webpack_require__(/*! ./modal/populateToDoModal.js */ "./src/scripts/modal/populateToDoModal.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkhBQTBDO0FBQ3RGLDRDQUE0QyxxSUFBOEM7QUFDMUYsNENBQTRDLCtHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLHVCQUF1QixhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLGdDQUFn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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBVztBQUNuQixLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pCNkQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwRUFBYztBQUN0QixLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hCdUQ7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRDtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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WTtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdEI7QUFDQSxtQkFBTyxDQUFDLDhDQUFjO0FBQ3RCLG1CQUFPLENBQUMsb0RBQWlCO0FBQ3pCLG1CQUFPLENBQUMsOEVBQThCO0FBQ3RDLG1CQUFPLENBQUMsb0ZBQWlDO0FBQ3pDLG1CQUFPLENBQUMsOEVBQThCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9oaWRkZW5NZW51LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9tb2RhbC9wb3B1bGF0ZU5vdGVNb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3NjcmlwdHMvbW9kYWwvcG9wdWxhdGVQcm9qZWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL21vZGFsL3BvcHVsYXRlVG9Eb01vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9vYmplY3RzL25vdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL29iamVjdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3NjcmlwdHMvb2JqZWN0cy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlL25vdGVTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlL3Byb2plY3RTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlL3N0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UvdG9kb1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL2Nvb2x2ZXRpY2Egcmcub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvTEVNT05NSUxLLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udHMvTFVNSU5BLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLXJhZGl1czogMTVweDtcclxuICAgIC0tYnV0dG9uLXdpZHRoOiA2MHB4O1xyXG4gICAgLS1wb3NpdGlvbi1zcGFjaW5nOiAzJTtcclxuICAgIC0taGlkZGVuLWJ0bi1yaWdodC1vZmZzZXQ6IDgwcHg7XHJcbiAgICAtLWhpZGRlbi1idG4tdG9wLW9mZnNldDogMTBweDtcclxuICAgIC0taGlkZGVuLWJ0bi1nYXA6IDYwcHg7XHJcblxyXG4gICAgLS1zaWRlYmFyLXRpdGxlOiAyNHB4O1xyXG4gICAgLS1zaWRlYmFyLXRpdGxlLXNtYWxsOiAyMHB4O1xyXG5cclxuICAgIC0tbGlnaHQtZ3JleTogcmdiKDIxOSwgMjI4LCAyNDIpO1xyXG4gICAgLS1idXR0b24tc2hhZG93OiByZ2IoMTY4LCAxNzMsIDE4NCk7XHJcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigzMywgMTQwLCAyMjcpO1xyXG4gICAgLS1zaWRlYmFyLWhpZ2hsaWdodDogcmdiKDI1LCAxNDYsIDIzOCk7XHJcbiAgICAtLXdoaXRlOiByZ2IoMjQ0LCAyNDgsIDI1NSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IGNvb2x2ZXRpY2E7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IExVTUlOQTtcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAsIDc3LCAxNzcpLCByZ2IoMCwgMjI1LCAyNTUpKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcclxuICAgIGhlaWdodDogODAwcHg7IC8qIFBsYWNlaG9sZGVyICovXHJcbiAgICB3aWR0aDogY2xhbXAoODUwcHgsIDUwJSwgMTUwMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDUwLCAxMTUsIDAuOCk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDFmcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBMRU1PTk1JTEs7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDIwMSwgMjI2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cykgdmFyKC0tcmFkaXVzKSAwcHggMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggcmdiKDY3LCAxNDksIDE5Nyk7XHJcbn1cclxuXHJcbi50aXRsZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGNsYW1wKDM1MHB4LCAxMCUsIDIwMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwcHggMHB4IHZhcigtLXJhZGl1cyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDVweCByZ2JhKDE0MSwgMTQ1LCAxNTQsIDAuNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2lkZWJhcjpsYXN0LWNoaWxkIHtcclxuICAgIGZsZXg6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlYmFyIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJpZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZWJhci10aXRsZSk7XHJcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tc2lkZWJhci10aXRsZSkgKyAzcHgpO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGRpdiBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGRpdiB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGRpdiB1bCBsaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciBkaXYgdWwgbGkgYnV0dG9uIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZWJhci10aXRsZS1zbWFsbCk7XHJcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNpZGViYXIgZGl2IHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tc2lkZWJhci10aXRsZSkgKyAxcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1oaWdobGlnaHQpO1xyXG59XHJcblxyXG4jcHJvamVjdHMtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5ib2R5LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleDogYXV0bztcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcclxuICAgIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogdmFyKC0tcG9zaXRpb24tc3BhY2luZyk7XHJcbiAgICByaWdodDogdmFyKC0tcG9zaXRpb24tc3BhY2luZyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMTY4LCAxNzMsIDE4NCk7XHJcblxyXG4gICAgJiBzcGFuIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1idXR0b24td2lkdGgpICsgMnB4KTtcclxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgKyAycHgpO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGlkZGVuLW1lbnUtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWJ1dHRvbi1zaGFkb3cpO1xyXG59XHJcblxyXG4uaGlkZGVuLW1lbnUtYnRuOmhvdmVyIHtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhpZ2hsaWdodCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hZGQtdG9kby1idXR0b24ge1xyXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0KSArICh2YXIoLS1oaWRkZW4tYnRuLWdhcCkqMikpO1xyXG4gICAgcmlnaHQ6IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXJpZ2h0LW9mZnNldCkpO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcclxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tdG9wLW9mZnNldCkgKyB2YXIoLS1oaWRkZW4tYnRuLWdhcCkpO1xyXG4gICAgcmlnaHQ6IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXJpZ2h0LW9mZnNldCkpO1xyXG59XHJcblxyXG4uYWRkLW5vdGUtYnV0dG9uIHtcclxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tdG9wLW9mZnNldCkpO1xyXG4gICAgcmlnaHQ6IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXJpZ2h0LW9mZnNldCkpO1xyXG59XHJcblxyXG5kaWFsb2cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYig4OSwgODksIDg5KTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuOjpiYWNrZHJvcCB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcclxufVxyXG5cclxuLmRpYWxvZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAmIGRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMzBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcblxyXG4gICAgJiAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogY29vbHZldGljYTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9kby1mb3JtLFxyXG4ubm90ZS1mb3JtIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWZvcm0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG59XHJcblxyXG4jdGl0bGUsIFxyXG4jZGVzY3JpcHRpb24sIFxyXG4jZGF0ZSwgXHJcbiNsb3ctcHJpb3JpdHktYnRuLFxyXG4jaGlnaC1wcmlvcml0eS1idG4sXHJcbiNmb3JtLXN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuI3RpdGxlLCBcclxuI2Rlc2NyaXB0aW9uLCBcclxuI2RhdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4jdGl0bGUsXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuI3RpdGxlOmZvY3VzLXZpc2libGUsXHJcbiNkZXNjcmlwdGlvbjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDBweDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24ge1xyXG4gICAgZ3JpZC1yb3c6IDIvMztcclxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbn1cclxuXHJcbiNkYXRlIHtcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG59XHJcblxyXG5mb3JtIGRpdiB7XHJcbiAgICBncmlkLXJvdzogMy80O1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI2xvdy1wcmlvcml0eS1idG4sXHJcbiNoaWdoLXByaW9yaXR5LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4jbG93LXByaW9yaXR5LWJ0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI2hpZ2gtcHJpb3JpdHktYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNmb3JtLXN1Ym1pdC1idG4ge1xyXG4gICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4jZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzksIDM5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzOSwgMzksIDM5KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLHNCQUFzQjs7SUFFdEIscUJBQXFCO0lBQ3JCLDJCQUEyQjs7SUFFM0IsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdDQUFnQztJQUNoQyw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtEQUFrRDtJQUNsRCxpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFB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K0I7SUFDL0IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXJhZGl1czogMTVweDtcXHJcXG4gICAgLS1idXR0b24td2lkdGg6IDYwcHg7XFxyXFxuICAgIC0tcG9zaXRpb24tc3BhY2luZzogMyU7XFxyXFxuICAgIC0taGlkZGVuLWJ0bi1yaWdodC1vZmZzZXQ6IDgwcHg7XFxyXFxuICAgIC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0OiAxMHB4O1xcclxcbiAgICAtLWhpZGRlbi1idG4tZ2FwOiA2MHB4O1xcclxcblxcclxcbiAgICAtLXNpZGViYXItdGl0bGU6IDI0cHg7XFxyXFxuICAgIC0tc2lkZWJhci10aXRsZS1zbWFsbDogMjBweDtcXHJcXG5cXHJcXG4gICAgLS1saWdodC1ncmV5OiByZ2IoMjE5LCAyMjgsIDI0Mik7XFxyXFxuICAgIC0tYnV0dG9uLXNoYWRvdzogcmdiKDE2OCwgMTczLCAxODQpO1xcclxcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigzMywgMTQwLCAyMjcpO1xcclxcbiAgICAtLXNpZGViYXItaGlnaGxpZ2h0OiByZ2IoMjUsIDE0NiwgMjM4KTtcXHJcXG4gICAgLS13aGl0ZTogcmdiKDI0NCwgMjQ4LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGNvb2x2ZXRpY2E7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL2Nvb2x2ZXRpY2FcXFxcIHJnLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xcclxcbiAgICBzcmM6IHVybChmb250cy9MRU1PTk1JTEstUmVndWxhci5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IExVTUlOQTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvTFVNSU5BLnR0Zik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwLCA3NywgMTc3KSwgcmdiKDAsIDIyNSwgMjU1KSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDsgLyogUGxhY2Vob2xkZXIgKi9cXHJcXG4gICAgd2lkdGg6IGNsYW1wKDg1MHB4LCA1MCUsIDE1MDBweCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDUwLCAxMTUsIDAuOCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCAxZnI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBMRU1PTk1JTEs7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAyMDEsIDIyNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKSB2YXIoLS1yYWRpdXMpIDBweCAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggcmdiKDY3LCAxNDksIDE5Nyk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDM1MHB4LCAxMCUsIDIwMHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMHB4IDBweCB2YXIoLS1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDVweCByZ2JhKDE0MSwgMTQ1LCAxNTQsIDAuNyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXI6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZsZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJpZy10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLXRpdGxlKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IExFTU9OTUlMSztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLXNpZGViYXItdGl0bGUpICsgM3B4KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgZGl2IHVsIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiB1bCBsaSBidXR0b24ge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLXRpdGxlLXNtYWxsKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IExFTU9OTUlMSztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiB1bCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHRlZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zaWRlYmFyLXRpdGxlKSArIDFweCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1oaWdobGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keS1jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWJ1dHRvbi13aWR0aCk7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiB2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKTtcXHJcXG4gICAgcmlnaHQ6IHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMTY4LCAxNzMsIDE4NCk7XFxyXFxuXFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi13aWR0aCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgKyAycHgpO1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1idXR0b24td2lkdGgpICsgMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLW1lbnUtYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tYnV0dG9uLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tbWVudS1idG46aG92ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhpZ2hsaWdodCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxyXFxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tdG9wLW9mZnNldCkgKyAodmFyKC0taGlkZGVuLWJ0bi1nYXApKjIpKTtcXHJcXG4gICAgcmlnaHQ6IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXJpZ2h0LW9mZnNldCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0KSArIHZhcigtLWhpZGRlbi1idG4tZ2FwKSk7XFxyXFxuICAgIHJpZ2h0OiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi1yaWdodC1vZmZzZXQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ub3RlLWJ1dHRvbiB7XFxyXFxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tdG9wLW9mZnNldCkpO1xcclxcbiAgICByaWdodDogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tcmlnaHQtb2Zmc2V0KSk7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiKDg5LCA4OSwgODkpO1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46OmJhY2tkcm9wIHtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgJiBkaXYge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBmbGV4OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4IDMwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuXFxyXFxuICAgICYgKiB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogY29vbHZldGljYTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb3JtLFxcclxcbi5ub3RlLWZvcm0ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUsIFxcclxcbiNkZXNjcmlwdGlvbiwgXFxyXFxuI2RhdGUsIFxcclxcbiNsb3ctcHJpb3JpdHktYnRuLFxcclxcbiNoaWdoLXByaW9yaXR5LWJ0bixcXHJcXG4jZm9ybS1zdWJtaXQtYnRuIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLCBcXHJcXG4jZGVzY3JpcHRpb24sIFxcclxcbiNkYXRlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUsXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZTpmb2N1cy12aXNpYmxlLFxcclxcbiNkZXNjcmlwdGlvbjpmb2N1cy12aXNpYmxlIHtcXHJcXG4gICAgb3V0bGluZTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gZGl2IHtcXHJcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG93LXByaW9yaXR5LWJ0bixcXHJcXG4jaGlnaC1wcmlvcml0eS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdy1wcmlvcml0eS1idG4ge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaC1wcmlvcml0eS1idG4ge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXN1Ym1pdC1idG4ge1xcclxcbiAgICBncmlkLXJvdzogMy80O1xcclxcbiAgICBncmlkLWNvbHVtbjogMy80O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzOSwgMzksIDM5KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1jYXJkIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWRlYmFyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEFkZHMgaGlkaW5nIGFuZCB1bmhpZGluZyBidXR0b25zIGZvciBoaWRkZW4gYnV0dG9uIG1lbnVcclxubGV0IGFkZF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idXR0b25cIik7XHJcbmxldCBuZXdfdG9kb19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWJ1dHRvblwiKTtcclxubGV0IG5ld19wcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnV0dG9uXCIpO1xyXG5sZXQgbmV3X25vdGVfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbm90ZS1idXR0b25cIik7XHJcblxyXG5hZGRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBuZXdfdG9kb19idG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbiAgICBuZXdfcHJvamVjdF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbiAgICBuZXdfbm90ZV9idG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbn0pIiwiaW1wb3J0IHsgbWFrZU5ld05vdGUgfSBmcm9tIFwiLi4vc3RvcmFnZS9ub3RlU3RvcmFnZS5qc1wiO1xyXG5cclxubGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxubGV0IG5ld19ub3RlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnV0dG9uXCIpO1xyXG5uZXdfbm90ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lclwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBOb3RlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJub3RlLWZvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIk5ldyBOb3RlLi4uXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZvcm0tc3VibWl0LWJ0blwiIHR5cGU9XCJidXR0b25cIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPiAgIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIGBcclxuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgbGV0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VibWl0LWJ0blwiKTtcclxuICAgIHN1Ym1pdF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIGxldCBuZXdfbm90ZV9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlLWZvcm1cIik7XHJcbiAgICAgICAgbWFrZU5ld05vdGUobmV3X25vdGVfZm9ybSk7XHJcbiAgICB9KTtcclxufSkiLCJpbXBvcnQgeyBtYWtlTmV3UHJvamVjdCB9IGZyb20gXCIuLi9zdG9yYWdlL3Byb2plY3RTdG9yYWdlLmpzXCI7XHJcblxyXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xyXG5sZXQgbmV3X3Byb2plY3RfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idXR0b25cIik7XHJcbm5ld19wcm9qZWN0X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBQcm9qZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJwcm9qZWN0LWZvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIk5ldyBQcm9qZWN0Li4uXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZm9ybS1zdWJtaXQtYnRuXCIgdHlwZT1cImJ1dHRvblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICBgXHJcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcclxuICAgIGxldCBzdWJtaXRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Ym1pdC1idG5cIik7XHJcbiAgICBzdWJtaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICBsZXQgbmV3X3Byb2plY3RfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgICAgIG1ha2VOZXdQcm9qZWN0KG5ld19wcm9qZWN0X2Zvcm0pO1xyXG4gICAgfSk7XHJcbn0pIiwiaW1wb3J0IHsgbWFrZU5ld1RvRG8gfSBmcm9tIFwiLi4vc3RvcmFnZS90b2RvU3RvcmFnZS5qc1wiO1xyXG5cclxubGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxubGV0IG5ld190b2RvX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnV0dG9uXCIpO1xyXG5uZXdfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkFkZCBOZXcgVG8gRG88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRvZG8tZm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiTmV3IFRvIERvLi4uXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIGNvbHM9XCIxMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG93LXByaW9yaXR5LWJ0blwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXNlbGVjdGVkPVwiZmFsc2VcIj5Mb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiaGlnaC1wcmlvcml0eS1idG5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1zZWxlY3RlZD1cImZhbHNlXCI+SGlnaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZm9ybS1zdWJtaXQtYnRuXCIgdHlwZT1cImJ1dHRvblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcclxuICAgIGxldCBzdWJtaXRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Ym1pdC1idG5cIik7XHJcbiAgICBzdWJtaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICBsZXQgbmV3X3RvZG9fZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtXCIpO1xyXG4gICAgICAgIG1ha2VOZXdUb0RvKG5ld190b2RvX2Zvcm0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGxldCBsb3dfcHJpb3JpdHlfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3ctcHJpb3JpdHktYnRuXCIpO1xyXG4gICAgbGV0IGhpZ2hfcHJpb3JpdHlfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoLXByaW9yaXR5LWJ0blwiKTtcclxuICAgIGxvd19wcmlvcml0eV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBsb3dfcHJpb3JpdHlfYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICBsb3dfcHJpb3JpdHlfYnRuLnN0eWxlLmNvbG9yID0gXCJyZ2IoMjQ0LCAyNDgsIDI1NSlcIjtcclxuICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgIGxvd19wcmlvcml0eV9idG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGlmKGhpZ2hfcHJpb3JpdHlfYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0ZWRcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoX3ByaW9yaXR5X2J0bi5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcInJnYigyNDQsIDI0OCwgMjU1KVwiO1xyXG4gICAgICAgICAgICBsb3dfcHJpb3JpdHlfYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0ZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGhpZ2hfcHJpb3JpdHlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gaGlnaF9wcmlvcml0eV9idG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiKTtcclxuICAgICAgICBpZihzZWxlY3RlZCA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIGhpZ2hfcHJpb3JpdHlfYnRuLnN0eWxlLmNvbG9yID0gXCJyZ2IoMjQ0LCAyNDgsIDI1NSlcIjtcclxuICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGlmKGxvd19wcmlvcml0eV9idG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIGxvd19wcmlvcml0eV9idG4uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2hfcHJpb3JpdHlfYnRuLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJyZ2IoMjQ0LCAyNDgsIDI1NSlcIjtcclxuICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIiwibGV0IGNyZWF0ZU5vdGUgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOb3RlIH07IiwibGV0IGNyZWF0ZVByb2plY3QgPSAoaWQsIHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgdG9kb3MgPSBbXTtcclxuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgdG9kb3MgfTtcclxufVxyXG5cclxubGV0IGFkZFRvRG8gPSAocHJvamVjdCwgdG9kbykgPT4ge1xyXG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xyXG59XHJcblxyXG5sZXQgZGVsZXRlVG9EbyA9IChwcm9qZWN0LCB0b2RvKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XHJcbiAgICBpZihpbmRleCA+IC0xKSB7IC8vIGZvdW5kIHRvZG9cclxuICAgICAgICBwcm9qZWN0LnRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBhZGRUb0RvLCBkZWxldGVUb0RvIH0iLCJsZXQgY3JlYXRlVG9EbyA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElkKSA9PiB7XHJcbiAgICBsZXQgY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdElkLCBjb21wbGV0ZWQgfTtcclxufVxyXG5cclxubGV0IGNoYW5nZVByaW9yaXR5ID0gKHRvZG8sIHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgdmFsaWRfcHJpb3JpdGllcyA9IFtcIm5vbmVcIiwgXCJsb3dcIiwgXCJoaWdoXCJdO1xyXG4gICAgaWYodmFsaWRfcHJpb3JpdGllcy5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICB0b2RvLnByaW9yaXR5ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklOVkFMSUQgUFJJT1JJVFkgVkFMVUVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRvRG8sIGNoYW5nZVByaW9yaXR5IH07IiwiaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdlL3Byb2plY3RTdG9yYWdlXCI7XHJcblxyXG5sZXQgYWRkQnV0dG9uRnVuY3Rpb25hbGl0eSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBsZXQgcmF3X3ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgIGxldCB2YWx1ZSA9IHR5cGVvZiByYXdfdmFsdWUgPT09IFwibnVtYmVyXCIgPyBTdHJpbmcocmF3X3ZhbHVlKSA6IHJhd192YWx1ZTtcclxuICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLW9wdGlvblt2YWx1ZT1cIiR7dmFsdWV9XCJdIGJ1dHRvbmApO1xyXG4gICAgXHJcbiAgICAvLyBBZGRzIFwiLy9cIiB3aGVuIHNpZGViYXIgb3B0aW9ucyBhcmUgaG92ZXJlZCBvdmVyXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIikgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICBjaGlsZC50ZXh0Q29udGVudCA9IFwiLy8gXCIgKyBjaGlsZC50ZXh0Q29udGVudDsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBSZW1vdmVzIFwiLy9cIiB3aGVuIHNpZGViYXIgb3B0aW9ucyBhcmUgaG92ZXJlZCBvZmZcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICBpZihlbGVtZW50LmdldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBjaGlsZC50ZXh0Q29udGVudC5zbGljZSgzKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNlbGVjdGVkIHN5bWJvbCBmcm9tIGFsbCBvdGhlciBvcHRpb25zXHJcbiAgICAgICAgbGV0IHNpZGViYXJfb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1vcHRpb25cIik7XHJcbiAgICAgICAgZm9yKGxldCBvcHQgb2Ygc2lkZWJhcl9vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gb3B0LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBsZXQgb3B0X2NoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItb3B0aW9uW3ZhbHVlPVwiJHt2YWx9XCJdIGJ1dHRvbmApO1xyXG4gICAgICAgICAgICBvcHRfY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodGVkXCIpO1xyXG4gICAgICAgICAgICBpZihvcHRfY2hpbGQudGV4dENvbnRlbnRbMF0gPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRfY2hpbGQudGV4dENvbnRlbnQgPSBvcHRfY2hpbGQudGV4dENvbnRlbnQuc2xpY2UoMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xyXG4gICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gXCIvLyBcIiArIGNoaWxkLnRleHRDb250ZW50OyBcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIHByb2plY3QgbGlzdFxyXG5sZXQgcG9wdWxhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0cyA9IGdldFByb2plY3RMaXN0KCk7XHJcbiAgICBsZXQgcHJvamVjdF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XHJcbiAgICBwcm9qZWN0X2xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykgeyAgICAgXHJcbiAgICAgICAgbGV0IHByb2plY3RfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcm9qZWN0X2J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RfYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuXHJcbiAgICAgICAgbGV0IG5ld19saXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbmV3X2xpc3RfaXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1vcHRpb25cIiwgXCJwcm9qZWN0LW9wdGlvblwiKTtcclxuICAgICAgICBuZXdfbGlzdF9pdGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3QuaWQpIDtcclxuICAgICAgICBuZXdfbGlzdF9pdGVtLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgbmV3X2xpc3RfaXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0X2J0bik7XHJcbiAgICAgICAgcHJvamVjdF9saXN0LmFwcGVuZENoaWxkKG5ld19saXN0X2l0ZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZEJ1dHRvbkZ1bmN0aW9uYWxpdHkobmV3X2xpc3RfaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBvcHVsYXRlUHJvamVjdExpc3QgfTtcclxuXHJcbmxldCBzaWRlYmFyX29wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItb3B0aW9uXCIpO1xyXG5mb3IobGV0IG9wdGlvbiBvZiBzaWRlYmFyX29wdGlvbnMpIHtcclxuICAgIGFkZEJ1dHRvbkZ1bmN0aW9uYWxpdHkob3B0aW9uKTtcclxufVxyXG5cclxucG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xyXG5cclxuIiwiaW1wb3J0IHsgZ2V0QnlJZCwgbW9kaWZ5TmFtZSB9IGZyb20gXCIuL3N0b3JhZ2VIZWxwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTm90ZSB9IGZyb20gXCIuLi9vYmplY3RzL25vdGVcIjtcclxuXHJcbmxldCBub3RlcyA9IFtdO1xyXG5cclxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3Rlc1wiKSAhPT0gbnVsbCkge1xyXG4gICAgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikpO1xyXG59XHJcblxyXG5sZXQgbWFrZU5ld05vdGUgPSBlbGVtZW50ID0+IHtcclxuICAgIGxldCB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGV4dHJhY3RGcm9tTm90ZUZvcm0oZWxlbWVudCk7XHJcbiAgICBcclxuICAgIGxldCBuZXdfbm90ZSA9IGNyZWF0ZU5vdGUoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICBub3Rlcy5wdXNoKG5ld19ub3RlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkobm90ZXMpKVxyXG59XHJcblxyXG5sZXQgZXh0cmFjdEZyb21Ob3RlRm9ybSA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHRpdGxlID0gU3RyaW5nKGVsZW1lbnQuY2hpbGRyZW5bMF0udmFsdWUpO1xyXG4gICAgdGl0bGUgPSB0aXRsZS50cmltKCk7XHJcbiAgICBsZXQgaWQgPSBtb2RpZnlOYW1lKG5vdGVzLCB0aXRsZSk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZWxlbWVudC5jaGlsZHJlblsxXS52YWx1ZTtcclxuXHJcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uIH1cclxufVxyXG5cclxubGV0IHVwZGF0ZU5vdGUgPSBlbGVtZW50ID0+IHtcclxuICAgIGxldCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gZXh0cmFjdEZyb21Ob3RlRm9ybShlbGVtZW50KTtcclxuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICBsZXQgbm90ZSA9IGdldEJ5SWQobm90ZXMsIGlkKTtcclxuICAgIG5vdGUudGl0bGUgPSB0aXRsZTtcclxuICAgIG5vdGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxubGV0IGRlbGV0ZU5vdGUgPSBub3RlID0+IHtcclxuICAgIGxldCBpbmRleCA9IG5vdGVzLmluZGV4T2Yobm90ZSk7XHJcbiAgICBub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG59XHJcblxyXG5leHBvcnQgeyBtYWtlTmV3Tm90ZSwgZGVsZXRlTm90ZSwgdXBkYXRlTm90ZSB9IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuLi9vYmplY3RzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgZ2V0QnlJZCwgbW9kaWZ5TmFtZSB9IGZyb20gXCIuL3N0b3JhZ2VIZWxwZXJcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVQcm9qZWN0TGlzdCB9IGZyb20gXCIuLi9zaWRlYmFyXCI7XHJcblxyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBob21lX3Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiaG9tZVwiKTtcclxuXHJcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZVwiKSAhPT0gbnVsbCkge1xyXG4gICAgaG9tZV9wcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVcIikpO1xyXG59XHJcblxyXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpICE9PSBudWxsKSB7XHJcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbn1cclxuXHJcbmxldCBtYWtlTmV3UHJvamVjdCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHsgaWQsIHRpdGxlIH0gPSBleHRyYWN0RnJvbVByb2plY3RGb3JtKGVsZW1lbnQpO1xyXG4gICAgbGV0IG5ld19wcm9qZWN0ID0gY3JlYXRlUHJvamVjdChpZCwgdGl0bGUpO1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdfcHJvamVjdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICBwb3B1bGF0ZVByb2plY3RMaXN0KCk7XHJcbn1cclxuXHJcbmxldCBleHRyYWN0RnJvbVByb2plY3RGb3JtID0gZWxlbWVudCA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBTdHJpbmcoZWxlbWVudC5jaGlsZHJlblswXS52YWx1ZSk7XHJcbiAgICB0aXRsZSA9IHRpdGxlLnRyaW0oKTtcclxuICAgIGxldCBpZCA9IG1vZGlmeU5hbWUocHJvamVjdHMsIHRpdGxlKTtcclxuICAgIHJldHVybiB7IGlkLCB0aXRsZSB9XHJcbn1cclxuXHJcbmxldCB1cGRhdGVQcm9qZWN0ID0gZWxlbWVudCA9PiB7XHJcbiAgICBsZXQgeyB0aXRsZSB9ID0gZXh0cmFjdEZyb21Qcm9qZWN0Rm9ybShlbGVtZW50KTtcclxuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICBsZXQgcHJvamVjdCA9IGdldEJ5SWQocHJvamVjdHMsIGlkKTtcclxuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxufVxyXG5cclxubGV0IGRlbGV0ZVByb2plY3QgPSBwcm9qZWN0ID0+IHtcclxuICAgIGxldCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG59XHJcblxyXG5sZXQgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1ha2VOZXdQcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCwgcHJvamVjdHMsIGhvbWVfcHJvamVjdCB9IiwibGV0IGdldEJ5SWQgPSAoYXJyLCBpZCkgPT4ge1xyXG4gICAgZm9yKGxldCBvYmogb2YgYXJyKSB7XHJcbiAgICAgICAgaWYob2JqLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm90ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtb2RpZnlOYW1lID0gKGFyciwgbmFtZSkgPT4ge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGFycltpXS5pZCA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgYXJyX21vZGlmaWVkID0gYXJyLnNsaWNlKGkrMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlOYW1lKGFycl9tb2RpZmllZCwgbmFtZSArIFwiLTBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldEJ5SWQsIG1vZGlmeU5hbWUgfSIsImltcG9ydCB7IGdldEJ5SWQsIG1vZGlmeU5hbWUgfSBmcm9tIFwiLi9zdG9yYWdlSGVscGVyXCI7XHJcbmltcG9ydCB7IHByb2plY3RzLCBob21lX3Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb0RvLCBjaGFuZ2VQcmlvcml0eSB9IGZyb20gXCIuLi9vYmplY3RzL3RvZG9cIjtcclxuaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuLi9vYmplY3RzL3Byb2plY3RcIjtcclxuXHJcbmxldCBtYWtlTmV3VG9EbyA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhcmdldFByb2plY3QgfSA9IGV4dHJhY3RGcm9tVG9Eb0Zvcm0oZWxlbWVudCk7XHJcbiAgICBsZXQgbmV3X3RvX2RvID0gY3JlYXRlVG9EbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFyZ2V0UHJvamVjdC5pZCk7XHJcblxyXG4gICAgYWRkVG9Ebyh0YXJnZXRQcm9qZWN0LCBuZXdfdG9fZG8pO1xyXG4gICAgaWYodGFyZ2V0UHJvamVjdC5pZCA9PT0gXCJob21lXCIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhvbWVcIiwgSlNPTi5zdHJpbmdpZnkoaG9tZV9wcm9qZWN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGV4dHJhY3RGcm9tVG9Eb0Zvcm0gPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IHRpdGxlID0gU3RyaW5nKGVsZW1lbnQuY2hpbGRyZW5bMF0udmFsdWUpO1xyXG4gICAgdGl0bGUgPSB0aXRsZS50cmltKCk7XHJcbiAgICBcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGVsZW1lbnQuY2hpbGRyZW5bMV0udmFsdWU7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IGVsZW1lbnQuY2hpbGRyZW5bMl0udmFsdWU7XHJcbiAgICBcclxuICAgIGxldCBwcmlvcml0eV9kaXYgPSBlbGVtZW50LmNoaWxkcmVuWzNdO1xyXG4gICAgbGV0IGxvd19wcmlvcml0eV9idG4gPSBwcmlvcml0eV9kaXYuY2hpbGRyZW5bMF07XHJcbiAgICBsZXQgaGlnaF9wcmlvcml0eV9idG4gPSBwcmlvcml0eV9kaXYuY2hpbGRyZW5bMV07XHJcbiAgICBsZXQgcHJpb3JpdHkgPSBcIlwiO1xyXG5cclxuICAgIGlmKGxvd19wcmlvcml0eV9idG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBwcmlvcml0eSA9IFwibG93XCI7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZihoaWdoX3ByaW9yaXR5X2J0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGVkXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgIHByaW9yaXR5ID0gXCJoaWdoXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwcmlvcml0eSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNob29zZSB3aGljaCBwcm9qZWN0IHRvIGFkZCB0b2RvIHRvIGRlcGVuZGluZyBvbiB3aGljaCBvcHRpb24gaW4gdGhlIHNpZGViYXIgaXMgc2VsZWN0ZWRcclxuICAgIGxldCB0YXJnZXRQcm9qZWN0ID0gY2hvb3NlUHJvamVjdCgpO1xyXG5cclxuICAgIGxldCBpZCA9IG1vZGlmeU5hbWUodGFyZ2V0UHJvamVjdC50b2RvcywgdGl0bGUpO1xyXG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhcmdldFByb2plY3QgfVxyXG59XHJcblxyXG5sZXQgdXBkYXRlVG9EbyA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFyZ2V0UHJvamVjdCB9ID0gZXh0cmFjdEZyb21Ub0RvRm9ybShlbGVtZW50KTtcclxuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICBsZXQgdG9kbyA9IGdldFRvRG8odGFyZ2V0UHJvamVjdC5pZCwgaWQpO1xyXG4gICAgdG9kby50aXRsZSA9IHRpdGxlO1xyXG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxufVxyXG5cclxubGV0IHJlbW92ZVRvRG8gPSAocHJvamVjdElkLCB0b2RvSWQpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gZ2V0QnlJZChwcm9qZWN0cywgcHJvamVjdF9pZCk7XHJcbiAgICBsZXQgdG9kbyA9IGdldFRvRG8ocHJvamVjdElkLCB0b2RvSWQpO1xyXG4gICAgZGVsZXRlVG9Ebyhwcm9qZWN0LCB0b2RvKTtcclxufVxyXG5cclxubGV0IGdldFRvRG8gPSAocHJvamVjdElkLCB0b2RvSWQpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gZ2V0QnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcclxuICAgIGZvcihsZXQgdG9kbyBpbiBwcm9qZWN0LnRvZG9zKSB7XHJcbiAgICAgICAgaWYodG9kby5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuXHJcbi8vIERldGVybWluZXMgd2hpY2ggcHJvamVjdCBpcyBzZWxlY3RlZCBvbiB0aGUgc2lkZWJhciwgd2hpY2ggdGhlIHRvZG8gd2lsbCBiZSBhZGRlZCB0b1xyXG5sZXQgY2hvb3NlUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0X29wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9uXCIpO1xyXG4gICAgZm9yKGxldCBwcm9qZWN0X29wdGlvbiBvZiBwcm9qZWN0X29wdGlvbnMpIHtcclxuICAgICAgICBpZihwcm9qZWN0X29wdGlvbi5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNob3Nlbl9wcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKHggPT4geC50aXRsZSA9PT0gcHJvamVjdF9vcHRpb24uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpWzBdXHJcbiAgICAgICAgICAgIHJldHVybiBjaG9zZW5fcHJvamVjdDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhvbWVfcHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IHsgbWFrZU5ld1RvRG8sIHVwZGF0ZVRvRG8sIHJlbW92ZVRvRG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XHJcblxyXG5yZXF1aXJlKFwiLi9zaWRlYmFyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9oaWRkZW5NZW51LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9tb2RhbC9wb3B1bGF0ZU5vdGVNb2RhbC5qc1wiKTtcclxucmVxdWlyZShcIi4vbW9kYWwvcG9wdWxhdGVQcm9qZWN0TW9kYWwuanNcIik7XHJcbnJlcXVpcmUoXCIuL21vZGFsL3BvcHVsYXRlVG9Eb01vZGFsLmpzXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==