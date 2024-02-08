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
    --sidebar-title-small: 18px;
    --text: 20px;
    --row-icon-size: 45px;

    --sidebar-width: clamp(350px, 10%, 200px);

    --light-grey: rgb(219, 228, 242);
    --button-shadow: rgb(168, 173, 184);
    --light-blue: rgb(33, 140, 227);
    --light-red: rgb(239, 10, 10);
    --sidebar-highlight: rgb(25, 146, 238);
    --white: rgb(244, 248, 255);
    --strike-out: rgb(174, 174, 174);
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
    width: clamp(1100px, 60%, 1500px);
    box-shadow: 0px 5px 10px rgba(0, 50, 115, 0.8);
    display: grid;
    grid-template-rows: 75px 1fr;
}

.content {
    display: flex;
    align-items: flex-start;
    position: relative;
    flex: auto;
    min-height: 100%;
    overflow: hidden;
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
    width: var(--sidebar-width);
    background-color: var(--light-grey);
    border-radius: 0 0px 0px var(--radius);
    box-shadow: 2px 0px 5px rgba(141, 145, 154, 0.7);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px;
    box-sizing: border-box;
}

.sidebar:last-child {
    flex: auto;
}

.sidebar div {
    width: 100%;
    padding: 15px 30px;
    box-sizing: border-box;
    min-width: 100%;
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

.project-list {
    padding-left: 10px;
    margin-top: 0px;
}

.project-list li {
    padding: 5px 0px;
}

.project-list li button {
    list-style: none;
    text-align: start;
    font-size: var(--sidebar-title-small);
    font-family: LEMONMILK;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}

.project-list li {
    list-style: none;
}

.highlighted {
    font-size: calc(var(--sidebar-title) + 1px);
    font-weight: bold;
    color: var(--sidebar-highlight);
}

.project-list-container {
    overflow: auto;
    margin-top: 10px;
}

.project-option button {
    text-overflow: ellipsis;
}

#projects-header {
    border-bottom: 2px solid black;
    margin-top: 30px;
}

.body-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 40px;
    box-sizing: border-box;
    gap: 15px;
    overflow: auto;
    flex: auto;
    position: relative;
}

.empty-title {
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    font-family: coolvetica;
    font-weight: 100;
}

.todo-row {
    display: grid;
    grid-template-columns: 1fr 6fr 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    padding: 10px 0px;
    box-sizing: border-box;
    font-size: var(--text);
    box-shadow: 0px 5px 5px rgb(177, 177, 177);
    position: relative;
}

.todo-row-element {
    font-family: Coolvetica;
    margin: 0px;
    text-align: center;
}

#todo-edit-btn,
#todo-delete-btn {
    font-size: calc(var(--row-icon-size) - 5px) ;
    padding: 0px;
    line-height: calc(var(--row-icon-size));
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
}

#todo-checkbox:hover,
#todo-edit-btn:hover,
#todo-delete-btn:hover,
#todo-title:hover {
    cursor: pointer;
}

#priority-indicator {
    position: absolute;
    height: 100%;
    width: 1%;
}

#todo-checkbox {
    grid-column: 1/2;
    font-size: var(--row-icon-size);
    line-height: var(--row-icon-size);
}

#todo-title {
    grid-column: 2/3;
    line-height: var(--row-icon-size);
    padding-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.todo-title-hover:hover {
    color: var(--sidebar-highlight);
}

.strike-out {
    color: var(--strike-out);
    text-decoration: line-through;
}

#todo-date {
    grid-column: 3/4;
    line-height: var(--row-icon-size);
}

#todo-edit-btn {
    grid-column: 4/5;
}

#todo-delete-btn {
    grid-column: 5/6;
}

.delete-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.big-btn {
    height: var(--button-width);
    width: var(--button-width);
    border: 0px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 2px rgb(168, 173, 184);
    color: white;

}

.big-delete-btn {
    background-color: var(--light-red);

    & span {
        font-size: calc(var(--button-width) - 7px);
    }
}

.add-btn {
    bottom: var(--position-spacing);
    right: var(--position-spacing);
    position: absolute;
    background-color: var(--light-blue);
    
    & span {
        font-size: var(--button-width);
    }
}
.big-delete-btn:hover,
.add-btn:hover {
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

.note-container {
    column-count: 3;
    column-gap: 15px;
}

.note-card {
    border-radius: 15px;
    box-shadow: 0px 5px 5px rgb(177, 177, 177);
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
    box-sizing: border-box;
    font-family: coolvetica;
    min-width: 100%;
    display: inline-block;
    width: 0px;
    position: relative;
    /* background-color: ; */

    & * {
        overflow-wrap: break-word;
    }
}

.note-title {
    font-size: var(--text);
}

.note-description {
    font-size: var(--text);
}

.note-delete-btn {
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 30px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    background-color: rgba(0,0,0,0);
    font-weight: bold;
    line-height: 34px;
}

.note-delete-btn:hover {
    color: red;
    font-size: 34px;
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

.view-todo-container {
    padding: 40px 50px;
    height: 80%;
    overflow: auto;

    & :first-child {
        margin-top: 0px;
    }

    & p {
        font-family: coolvetica;
        font-size: 24px;
        background-color: var(--white);
        text-align: start;
        overflow-wrap: break-word;
        hyphens: manual;
    }

    & div {
        display: flex;
        justify-content: center;
    }

    & button {
        font-size: 50px;
    }

    & button:hover {
        font-size:  52px;
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
    resize: none;
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
}

@media only screen and (max-width: 1000px) {
    /* Hamburger sidebar */
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --radius: 15px;\r\n    --button-width: 60px;\r\n    --position-spacing: 3%;\r\n    --hidden-btn-right-offset: 80px;\r\n    --hidden-btn-top-offset: 10px;\r\n    --hidden-btn-gap: 60px;\r\n\r\n    --sidebar-title: 24px;\r\n    --sidebar-title-small: 18px;\r\n    --text: 20px;\r\n    --row-icon-size: 45px;\r\n\r\n    --sidebar-width: clamp(350px, 10%, 200px);\r\n\r\n    --light-grey: rgb(219, 228, 242);\r\n    --button-shadow: rgb(168, 173, 184);\r\n    --light-blue: rgb(33, 140, 227);\r\n    --light-red: rgb(239, 10, 10);\r\n    --sidebar-highlight: rgb(25, 146, 238);\r\n    --white: rgb(244, 248, 255);\r\n    --strike-out: rgb(174, 174, 174);\r\n}\r\n\r\n@font-face {\r\n    font-family: coolvetica;\r\n    src: url(fonts/coolvetica\\ rg.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: LEMONMILK;\r\n    src: url(fonts/LEMONMILK-Regular.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: LUMINA;\r\n    src: url(fonts/LUMINA.ttf);\r\n}\r\n\r\nbody {\r\n    background-image: linear-gradient(45deg, rgb(0, 77, 177), rgb(0, 225, 255));\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    margin: 0px;\r\n}\r\n\r\n.main-card {\r\n    background-color: var(--white);\r\n    border-radius: var(--radius);\r\n    height: 800px; /* Placeholder */\r\n    width: clamp(1100px, 60%, 1500px);\r\n    box-shadow: 0px 5px 10px rgba(0, 50, 115, 0.8);\r\n    display: grid;\r\n    grid-template-rows: 75px 1fr;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    position: relative;\r\n    flex: auto;\r\n    min-height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.title-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: LEMONMILK;\r\n    font-size: 40px;\r\n    background-color: rgb(73, 201, 226);\r\n    color: white;\r\n    border-radius: var(--radius) var(--radius) 0px 0px;\r\n    line-height: 50px;\r\n    text-shadow: 2px 2px 0px rgb(67, 149, 197);\r\n}\r\n\r\n.title-icon {\r\n    font-size: 50px;\r\n}\r\n\r\n.sidebar {\r\n    height: 100%;\r\n    width: var(--sidebar-width);\r\n    background-color: var(--light-grey);\r\n    border-radius: 0 0px 0px var(--radius);\r\n    box-shadow: 2px 0px 5px rgba(141, 145, 154, 0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 20px 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sidebar:last-child {\r\n    flex: auto;\r\n}\r\n\r\n.sidebar div {\r\n    width: 100%;\r\n    padding: 15px 30px;\r\n    box-sizing: border-box;\r\n    min-width: 100%;\r\n}\r\n\r\n.sidebar-big-text {\r\n    font-size: var(--sidebar-title);\r\n    font-family: LEMONMILK;\r\n    font-weight: 100;\r\n    margin: 0px;\r\n    line-height: calc(var(--sidebar-title) + 3px);\r\n    text-align: start;\r\n}\r\n\r\n.sidebar div button {\r\n    border: 0px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.project-list {\r\n    padding-left: 10px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.project-list li {\r\n    padding: 5px 0px;\r\n}\r\n\r\n.project-list li button {\r\n    list-style: none;\r\n    text-align: start;\r\n    font-size: var(--sidebar-title-small);\r\n    font-family: LEMONMILK;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.project-list li {\r\n    list-style: none;\r\n}\r\n\r\n.highlighted {\r\n    font-size: calc(var(--sidebar-title) + 1px);\r\n    font-weight: bold;\r\n    color: var(--sidebar-highlight);\r\n}\r\n\r\n.project-list-container {\r\n    overflow: auto;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-option button {\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n#projects-header {\r\n    border-bottom: 2px solid black;\r\n    margin-top: 30px;\r\n}\r\n\r\n.body-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    padding: 20px 40px;\r\n    box-sizing: border-box;\r\n    gap: 15px;\r\n    overflow: auto;\r\n    flex: auto;\r\n    position: relative;\r\n}\r\n\r\n.empty-title {\r\n    font-size: 30px;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    font-family: coolvetica;\r\n    font-weight: 100;\r\n}\r\n\r\n.todo-row {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr 2fr 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    width: 100%;\r\n    padding: 10px 0px;\r\n    box-sizing: border-box;\r\n    font-size: var(--text);\r\n    box-shadow: 0px 5px 5px rgb(177, 177, 177);\r\n    position: relative;\r\n}\r\n\r\n.todo-row-element {\r\n    font-family: Coolvetica;\r\n    margin: 0px;\r\n    text-align: center;\r\n}\r\n\r\n#todo-edit-btn,\r\n#todo-delete-btn {\r\n    font-size: calc(var(--row-icon-size) - 5px) ;\r\n    padding: 0px;\r\n    line-height: calc(var(--row-icon-size));\r\n    border: 0px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n#todo-checkbox:hover,\r\n#todo-edit-btn:hover,\r\n#todo-delete-btn:hover,\r\n#todo-title:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#priority-indicator {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 1%;\r\n}\r\n\r\n#todo-checkbox {\r\n    grid-column: 1/2;\r\n    font-size: var(--row-icon-size);\r\n    line-height: var(--row-icon-size);\r\n}\r\n\r\n#todo-title {\r\n    grid-column: 2/3;\r\n    line-height: var(--row-icon-size);\r\n    padding-left: 15px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.todo-title-hover:hover {\r\n    color: var(--sidebar-highlight);\r\n}\r\n\r\n.strike-out {\r\n    color: var(--strike-out);\r\n    text-decoration: line-through;\r\n}\r\n\r\n#todo-date {\r\n    grid-column: 3/4;\r\n    line-height: var(--row-icon-size);\r\n}\r\n\r\n#todo-edit-btn {\r\n    grid-column: 4/5;\r\n}\r\n\r\n#todo-delete-btn {\r\n    grid-column: 5/6;\r\n}\r\n\r\n.delete-btn-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.big-btn {\r\n    height: var(--button-width);\r\n    width: var(--button-width);\r\n    border: 0px;\r\n    border-radius: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-shadow: 2px 2px 2px rgb(168, 173, 184);\r\n    color: white;\r\n\r\n}\r\n\r\n.big-delete-btn {\r\n    background-color: var(--light-red);\r\n\r\n    & span {\r\n        font-size: calc(var(--button-width) - 7px);\r\n    }\r\n}\r\n\r\n.add-btn {\r\n    bottom: var(--position-spacing);\r\n    right: var(--position-spacing);\r\n    position: absolute;\r\n    background-color: var(--light-blue);\r\n    \r\n    & span {\r\n        font-size: var(--button-width);\r\n    }\r\n}\r\n.big-delete-btn:hover,\r\n.add-btn:hover {\r\n    background-color: black;\r\n    height: calc(var(--button-width) + 2px);\r\n    width: calc(var(--button-width) + 2px);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.hidden-menu-btn {\r\n    position: absolute;\r\n    background-color: var(--light-grey);\r\n    padding: 12px;\r\n    border-radius: 10px;\r\n    border: 0px;\r\n    font-size: 18px;\r\n    box-shadow: 2px 2px 5px var(--button-shadow);\r\n}\r\n\r\n.hidden-menu-btn:hover {\r\n    padding: 14px;\r\n    background-color: var(--sidebar-highlight);\r\n    color: white;\r\n}\r\n\r\n.add-todo-button {\r\n    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset) + (var(--hidden-btn-gap)*2));\r\n    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));\r\n}\r\n\r\n.add-project-button {\r\n    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset) + var(--hidden-btn-gap));\r\n    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));\r\n}\r\n\r\n.add-note-button {\r\n    bottom: calc(var(--position-spacing) + var(--hidden-btn-top-offset));\r\n    right: calc(var(--position-spacing) + var(--hidden-btn-right-offset));\r\n}\r\n\r\n.note-container {\r\n    column-count: 3;\r\n    column-gap: 15px;\r\n}\r\n\r\n.note-card {\r\n    border-radius: 15px;\r\n    box-shadow: 0px 5px 5px rgb(177, 177, 177);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px 15px;\r\n    box-sizing: border-box;\r\n    font-family: coolvetica;\r\n    min-width: 100%;\r\n    display: inline-block;\r\n    width: 0px;\r\n    position: relative;\r\n    /* background-color: ; */\r\n\r\n    & * {\r\n        overflow-wrap: break-word;\r\n    }\r\n}\r\n\r\n.note-title {\r\n    font-size: var(--text);\r\n}\r\n\r\n.note-description {\r\n    font-size: var(--text);\r\n}\r\n\r\n.note-delete-btn {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 10px;\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 0px;\r\n    background-color: rgba(0,0,0,0);\r\n    font-weight: bold;\r\n    line-height: 34px;\r\n}\r\n\r\n.note-delete-btn:hover {\r\n    color: red;\r\n    font-size: 34px;\r\n}\r\n\r\ndialog {\r\n    background-color: var(--white);\r\n    width: 800px;\r\n    box-shadow: 0px 5px 10px rgb(89, 89, 89);\r\n    border: 0px;\r\n    border-radius: 15px;\r\n    padding: 0px;\r\n}\r\n\r\n::backdrop {\r\n    backdrop-filter: blur(7px);\r\n}\r\n\r\n.dialog-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    & div {\r\n        height: 60px;\r\n    }\r\n}\r\n\r\n.view-todo-container {\r\n    padding: 40px 50px;\r\n    height: 80%;\r\n    overflow: auto;\r\n\r\n    & :first-child {\r\n        margin-top: 0px;\r\n    }\r\n\r\n    & p {\r\n        font-family: coolvetica;\r\n        font-size: 24px;\r\n        background-color: var(--white);\r\n        text-align: start;\r\n        overflow-wrap: break-word;\r\n        hyphens: manual;\r\n    }\r\n\r\n    & div {\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    & button {\r\n        font-size: 50px;\r\n    }\r\n\r\n    & button:hover {\r\n        font-size:  52px;\r\n    }\r\n}\r\n\r\nform {\r\n    flex: auto;\r\n    display: grid;\r\n    gap: 10px;\r\n    padding: 20px 30px 30px 30px;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n\r\n    & * {\r\n        font-family: coolvetica;\r\n        font-size: 24px;\r\n        background-color: var(--white);\r\n    }\r\n}\r\n\r\n.todo-form,\r\n.note-form {\r\n    grid-template-rows: 1fr 5fr 1fr;\r\n}\r\n\r\n.project-form {\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n#title, \r\n#description, \r\n#date, \r\n#low-priority-btn,\r\n#high-priority-btn,\r\n#form-submit-btn {\r\n    border-radius: 15px;\r\n}\r\n\r\n#title, \r\n#description, \r\n#date {\r\n    padding-left: 15px;\r\n}\r\n\r\n#title,\r\n#description {\r\n    border: 0px;\r\n}\r\n\r\n#title:focus-visible,\r\n#description:focus-visible {\r\n    outline: 0px;\r\n}\r\n\r\n#title {\r\n    grid-row: 1/2;\r\n    grid-column: 1/4;\r\n}\r\n\r\n#description {\r\n    grid-row: 2/3;\r\n    grid-column: 1/4;\r\n    resize: none;\r\n}\r\n\r\n#date {\r\n    grid-row: 3/4;\r\n    grid-column: 1/2;\r\n}\r\n\r\nform div {\r\n    grid-row: 3/4;\r\n    grid-column: 2/3;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    padding: 0px 10px;\r\n    gap: 10px;\r\n}\r\n\r\n#low-priority-btn,\r\n#high-priority-btn {\r\n    background-color: rgba(0,0,0,0);\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n\r\n#low-priority-btn {\r\n    border: 2px solid green;\r\n    color: green;\r\n}\r\n\r\n#high-priority-btn {\r\n    border: 2px solid red;\r\n    color: red;\r\n}\r\n\r\n#form-submit-btn {\r\n    grid-row: 3/4;\r\n    grid-column: 3/4;\r\n    border-radius: 15px;\r\n    border: 2px solid black;\r\n    background-color: rgba(0,0,0,0);\r\n    height: 60px;\r\n}\r\n\r\n#form-submit-btn:hover {\r\n    background-color: rgb(39, 39, 39);\r\n    color: white;\r\n    border: 2px solid rgb(39, 39, 39);\r\n}\r\n\r\n@media only screen and (max-width: 1500px) {\r\n    body {\r\n        display: block;\r\n    }\r\n\r\n    .main-card {\r\n        border-radius: 0px;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    .title-container {\r\n        border-radius: 0px;\r\n    }\r\n\r\n    .sidebar {\r\n        padding: 50px 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n    /* Hamburger sidebar */\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/content/emptyContent.js":
/*!*********************************************!*\
  !*** ./src/scripts/content/emptyContent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showEmpty: () => (/* binding */ showEmpty)
/* harmony export */ });
let showEmpty = () => {
    let body_content = document.querySelector(".body-content");
    body_content.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.className = "empty-title";
    h1.textContent = "Nothing to show here";
    body_content.appendChild(h1);
}



/***/ }),

/***/ "./src/scripts/content/noteContent.js":
/*!********************************************!*\
  !*** ./src/scripts/content/noteContent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateNotes: () => (/* binding */ populateNotes)
/* harmony export */ });
/* harmony import */ var _storage_noteStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/noteStorage */ "./src/scripts/storage/noteStorage.js");
/* harmony import */ var _emptyContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptyContent */ "./src/scripts/content/emptyContent.js");



let populateNotes = () => {
    if(_storage_noteStorage__WEBPACK_IMPORTED_MODULE_0__.notes.length == 0) {
        (0,_emptyContent__WEBPACK_IMPORTED_MODULE_1__.showEmpty)();
    }
    else {
        addNoteContents();
    }
}

let addNoteContents = () => {
    let body_content = document.querySelector(".body-content");
    body_content.innerHTML = "";
    let note_container = document.createElement("div");
    note_container.className = "note-container";
    for(let note of _storage_noteStorage__WEBPACK_IMPORTED_MODULE_0__.notes) {
        let card = document.createElement("div");
        card.className = "note-card";
        card.setAttribute("value", note.id);
        
        let title = document.createElement("p");
        title.className = "note-title";
        title.textContent = note.title;
        
        let description = document.createElement("p");
        description.className = "note-description";
        description.textContent = note.description;

        let delete_btn = document.createElement("button");
        delete_btn.setAttribute("type", "button");
        delete_btn.className = "note-delete-btn";
        delete_btn.innerHTML = "&#x292B";
        delete_btn.addEventListener("click", () => {
            (0,_storage_noteStorage__WEBPACK_IMPORTED_MODULE_0__.deleteNote)(note);
            populateNotes();
        })
        
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(delete_btn);
        note_container.appendChild(card);
    }
    body_content.appendChild(note_container);
}



/***/ }),

/***/ "./src/scripts/content/projectContent.js":
/*!***********************************************!*\
  !*** ./src/scripts/content/projectContent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populate: () => (/* binding */ populate)
/* harmony export */ });
/* harmony import */ var _modal_toDoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/toDoModal */ "./src/scripts/modal/toDoModal.js");
/* harmony import */ var _modal_viewToDoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/viewToDoModal */ "./src/scripts/modal/viewToDoModal.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar */ "./src/scripts/sidebar.js");
/* harmony import */ var _storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/projectStorage */ "./src/scripts/storage/projectStorage.js");
/* harmony import */ var _emptyContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emptyContent */ "./src/scripts/content/emptyContent.js");





let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let populate = project => {
    switch(project) {
        case "home":
            populateHome();
            break;
        case "today":
            populateToday();
            break;
        case "later":
            populateLater();
            break;
        default:
            populateProject(project);
    }
}

let populateHome = () => {
    let todos = _storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.home_project.todos;
    createToDos("home", todos);
}

let populateToday = () => {
    let due_todos = filterToDos((a,b) => (a <= b));
    createToDos("home", due_todos);
}

let populateLater = () => {
    let due_todos = filterToDos((a,b) => (a > b));
    createToDos("home", due_todos);
}

let populateProject = id => {
    let targetProject = (0,_storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.getProjectById)(id);
    let todos = targetProject.todos;
    createToDos(id, todos);
}

let createToDos = (projectId, todos) => {
    if(todos.length > 0) {
        createToDoEntries(todos);
    } else {
        (0,_emptyContent__WEBPACK_IMPORTED_MODULE_4__.showEmpty)();
        if(projectId !== "home") {
            createProjectDeleteButton(projectId);
        }
    }
}

let filterToDos = filter => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // .getMonth() is 0-indexed
    let day = date.getDate();
    let today = Date.parse(`${year}-${month}-${day}`);
    let todos = _storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.home_project.todos;
    let due_todos = [];
    for(let todo of todos) {
        let due_date = Date.parse(todo.dueDate);
        if(filter(due_date, today)) {
            due_todos.push(todo);
        }
    }
    return due_todos;
}

let createPriorityIndicator = (todo, row) => {
    let priority_indicator = document.createElement("div");
    priority_indicator.id = "priority-indicator";
    let colour = todo.priority === "none" ? "gray" : todo.priority === "low" ? "green" : "red";
    priority_indicator.style["background-color"] = colour;
    row.appendChild(priority_indicator);
}

let createCheckbox = (todo, row) => {
    let checkbox = document.createElement("p");
    checkbox.id = "todo-checkbox";
    checkbox.className = "todo-row-element";
    let box = document.createElement("span");
    box.innerHTML = "&#x2610" // Unchecked Box
    box.setAttribute("checked", "false");
    box.addEventListener("click", () => {
        let checked = box.getAttribute("checked");
        let title = document.querySelector(`.todo-row[value="${todo.id}"] #todo-title`);
        let due_date = document.querySelector(`.todo-row[value="${todo.id}"] #todo-date`);
        if(checked === "false") {
            checked_box(box, title, due_date);
            todo.completed = true;
            (0,_storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.updateProjectTodos)(todo.projectId, todo)
        } else {
            unchecked_box(box, title, due_date);
            todo.completed = false;
            (0,_storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.updateProjectTodos)(todo.projectId, todo)
        }
    })
    checkbox.appendChild(box);
    row.appendChild(checkbox);
    return box;
}

let createTitle = (todo, row) => {
    let title = document.createElement("p");
    title.id = "todo-title";
    title.classList.add("todo-row-element", "todo-title-hover");
    title.textContent = todo.title;
    title.addEventListener("click", () => {
        (0,_modal_viewToDoModal__WEBPACK_IMPORTED_MODULE_1__.createViewToDoModal)(todo);
    })
    row.appendChild(title);
    return title;
}

let createDueDate = (todo, row) => {
    let due_date = document.createElement("p");
    due_date.id = "todo-date";
    due_date.className = "todo-row-element";
    let dueDate = todo.dueDate;
    if(dueDate !== "") {
        let todo_due_date = dueDate.split("-");
        let year = todo_due_date[0];
        let month = months[Number(todo_due_date[1]) - 1];
        let day = todo_due_date[2];
        due_date.textContent = `${month} ${day} ${year}`;
    } else {
        due_date.textContent = "No Due Date";
    }        
    row.appendChild(due_date);

    return due_date;
}

let createEditBtn = (todo, row) => {
    let btn_highlight = "rgb(25, 146, 238)";
    let edit_btn = document.createElement("button");
    edit_btn.id = "todo-edit-btn";
    edit_btn.className = "todo-row-element";
    edit_btn.innerHTML = "&#x270E;"; // Pencil icon
    (0,_modal_toDoModal__WEBPACK_IMPORTED_MODULE_0__.createToDoModal)("edit", edit_btn, todo);
    edit_btn.addEventListener("mouseover", () => {
        edit_btn.style.color = btn_highlight;
        edit_btn.style["font-weight"] = "bold";
    })
    edit_btn.addEventListener("mouseout", () => {
        edit_btn.style.color = "black";
        edit_btn.style["font-weight"] = 100;
    })
    edit_btn.addEventListener("click", () => {
        document.querySelector("dialog").showModal();
    })
    row.appendChild(edit_btn);
}

let createToDoDeleteBtn = (todo, todos, row) => {
    let delete_btn = document.createElement("button");
    delete_btn.id = "todo-delete-btn";
    delete_btn.className = "todo-row-element";
    delete_btn.innerHTML = "&#x292B;"; // Cross icon
    delete_btn.addEventListener("mouseover", () => {
        delete_btn.style.color = "red";
        delete_btn.style["font-weight"] = "bold";
    })
    delete_btn.addEventListener("mouseout", () => {
        delete_btn.style.color = "black";
        delete_btn.style["font-weight"] = 100;
    })
    delete_btn.addEventListener("click", () => {
        ;(0,_storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.deleteToDo)(todo);
        createToDos(todo.projectId, todos);
    })
    row.appendChild(delete_btn);
}

let createToDoEntries = (todos) => {
    let body_content = document.querySelector(".body-content");
    body_content.innerHTML = ""; // Clear Content
    for(let todo of todos) {
        let row = document.createElement("div");
        row.className = "todo-row";
        row.setAttribute("value", todo.id);
        
        createPriorityIndicator(todo, row);

        let box = createCheckbox(todo, row);
        let title = createTitle(todo, row);
        let due_date = createDueDate(todo, row);

        if(todo.completed === true) {
            checked_box(box, title, due_date);
        }
        
        createEditBtn(todo, row);
        createToDoDeleteBtn(todo, todos, row);

        body_content.appendChild(row);
    }
}

let createProjectDeleteButton = (projectId) => {
    let content = document.querySelector(".body-content");
    let delete_btn_container = document.createElement("div");
    delete_btn_container.className = "delete-btn-container";
    let delete_btn = document.createElement("button");
    delete_btn.setAttribute("type", "button");
    delete_btn.classList.add("big-delete-btn", "big-btn");
    let span = document.createElement("span");
    span.innerHTML = "&#x292B";
    delete_btn.appendChild(span);
    delete_btn.addEventListener("click", () => {
        (0,_storage_projectStorage__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(projectId);
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.initiate)();
    })
    delete_btn_container.appendChild(delete_btn);
    content.appendChild(delete_btn_container);
}

let checked_box = (box, title, dueDate)  => {
    let highlight_colour = "rgb(174, 174, 174)";
    box.setAttribute("checked", "true");
    box.innerHTML = "&#x2611;" // Checked Box
    box.style.color = highlight_colour;
    
    title.classList.add("strike-out");
    title.classList.remove("todo-title-hover");
    dueDate.classList.add("strike-out");
}

let unchecked_box = (box, title, dueDate) => {
    box.setAttribute("checked", "false");
    box.innerHTML = "&#x2610" // Unchecked Box
    box.style.color = "black";
    title.classList.remove("strike-out");
    title.classList.add("todo-title-hover");
    dueDate.classList.remove("strike-out");
}



/***/ }),

/***/ "./src/scripts/hiddenMenu.js":
/*!***********************************!*\
  !*** ./src/scripts/hiddenMenu.js ***!
  \***********************************/
/***/ (() => {

// Adds hiding and unhiding buttons for hidden button menu
let add_btn = document.querySelector(".add-btn");
let new_todo_btn = document.querySelector(".add-todo-button");
let new_project_btn = document.querySelector(".add-project-button");
let new_note_btn = document.querySelector(".add-note-button");

add_btn.addEventListener("click", () => {
    new_todo_btn.classList.toggle("hide");
    new_project_btn.classList.toggle("hide");
    new_note_btn.classList.toggle("hide");
})

/***/ }),

/***/ "./src/scripts/modal/addNoteModal.js":
/*!*******************************************!*\
  !*** ./src/scripts/modal/addNoteModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_noteContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/noteContent.js */ "./src/scripts/content/noteContent.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar.js */ "./src/scripts/sidebar.js");
/* harmony import */ var _storage_noteStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/noteStorage.js */ "./src/scripts/storage/noteStorage.js");




let modal = document.querySelector("dialog");
let new_note_btn = document.querySelector(".add-note-button");
new_note_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container"> 
            <div class="title-container">
                <span>Add New Note</span>
            </div>
            <form class="note-form" action="">
                <input name="title" type="text" id="title" maxlength="25" placeholder="New Note..." required>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Description..." required></textarea>
                <button id="form-submit-btn" type="submit">Submit</button>
            </form>   
        </div> 
    `
    modal.showModal();

    let note_form = document.querySelector(".note-form");
    note_form.addEventListener("submit", e => {
        e.preventDefault();
        modal.close();
        (0,_storage_noteStorage_js__WEBPACK_IMPORTED_MODULE_2__.makeNewNote)(note_form);

        let selected = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelected)();
        if(selected === "notes") {
            (0,_content_noteContent_js__WEBPACK_IMPORTED_MODULE_0__.populateNotes)(selected);
        }
    });
})

/***/ }),

/***/ "./src/scripts/modal/addProjectModal.js":
/*!**********************************************!*\
  !*** ./src/scripts/modal/addProjectModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/projectStorage.js */ "./src/scripts/storage/projectStorage.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar.js */ "./src/scripts/sidebar.js");



let modal = document.querySelector("dialog");
let new_project_btn = document.querySelector(".add-project-button");
new_project_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container">  
            <div class="title-container">
                <span>Add New Project</span>
            </div>
            <form class="project-form" action="">
                <input name="title" type="text" id="title" maxlength="20" placeholder="New Project..." required>
                <button id="form-submit-btn" type="submit">Submit</button>
            </form> 
        </div>     
    `
    modal.showModal();
    
    let project_form = document.querySelector(".project-form");  
    project_form.addEventListener("submit", e => {
        e.preventDefault();
        modal.close();
        (0,_storage_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__.makeNewProject)(project_form);
        (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.populateProjectList)();
    });
})

/***/ }),

/***/ "./src/scripts/modal/toDoModal.js":
/*!****************************************!*\
  !*** ./src/scripts/modal/toDoModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToDoModal: () => (/* binding */ createToDoModal)
/* harmony export */ });
/* harmony import */ var _storage_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/todoStorage.js */ "./src/scripts/storage/todoStorage.js");


let createToDoModal = (action, element, todo = null) => {
    if(action === "add") {
        let modalTitle = `
            <div class="title-container">
                <span>Add New To Do</span>
            </div>
        `
        let todo_obj = {
            title: "",
            description: "",
            dueDate: "",
            priority: "",
            id: ""
        }
        toDoModal(modalTitle, _storage_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.makeNewToDo, element, todo_obj);
    } 
    else if(action === "edit") {
        let modalTitle = `
            <div class="title-container">
                <span>Edit To Do</span>
            </div>
        `
        toDoModal(modalTitle, _storage_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateToDo, element, todo);
    }
}

let toDoModal = (modalTitle, modalAction, element, todo) => {
    let modal = document.querySelector("dialog");
    element.addEventListener("click", () => {
        modal.innerHTML = `
            <div class="dialog-container">
                ${modalTitle}
                <form class="todo-form" action="" value="${todo.id}">
                    <input name="title" type="text" id="title" maxlength="50" placeholder="New To Do..." required>
                    <textarea name="description" id="description" cols="10" rows="5" placeholder="Description...">${todo.description}</textarea>
                    <input type="date" id="date" required>
                    <div>  
                        <button id="low-priority-btn" type="button" data-selected="false">Low</button>
                        <button id="high-priority-btn" type="button" data-selected="false">High</button>
                    </div>
                    <button id="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>
        `
        document.querySelector("#title").setAttribute("value", todo.title);
        document.querySelector("#date").setAttribute("value", todo.dueDate);

        modal.showModal();
        
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

        if(todo.priority !== "") {
            if(todo.priority === "high") {
                high_priority_btn.click();
            }
            else if(todo.priority === "low") {
                low_priority_btn.click();
            }
        }

        let todo_form = document.querySelector(".todo-form");
        todo_form.addEventListener("submit", e => {
            e.preventDefault();
            modal.close();
            modalAction(todo_form);
        });
    })
}

let new_todo_btn = document.querySelector(".add-todo-button");
createToDoModal("add", new_todo_btn);



/***/ }),

/***/ "./src/scripts/modal/viewToDoModal.js":
/*!********************************************!*\
  !*** ./src/scripts/modal/viewToDoModal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createViewToDoModal: () => (/* binding */ createViewToDoModal)
/* harmony export */ });
let createViewToDoModal = todo => {
    let dialog = document.querySelector("dialog");  
    dialog.innerHTML = `
        <div class="view-todo-container"> 
            <p>${todo.title}</p>
            <p>${todo.description}</p>
            <div>
                <button class="note-delete-btn">
                    <span>&#x292B</span>
                </button>
            </div>
        </div> 
    `
    dialog.showModal();
    let close = document.querySelector(".view-todo-container button");
    close.addEventListener("click", () => {
        dialog.close();
    })
}



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
/* harmony export */   getCurrentlySelected: () => (/* binding */ getCurrentlySelected),
/* harmony export */   initiate: () => (/* binding */ initiate),
/* harmony export */   populateProjectList: () => (/* binding */ populateProjectList)
/* harmony export */ });
/* harmony import */ var _content_projectContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/projectContent */ "./src/scripts/content/projectContent.js");
/* harmony import */ var _content_noteContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/noteContent */ "./src/scripts/content/noteContent.js");
/* harmony import */ var _storage_projectStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage/projectStorage */ "./src/scripts/storage/projectStorage.js");




let addEventListenersForStyling = (element) => {
    let value = element.getAttribute("value");
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
    let project_list = document.querySelector(".project-list");
    project_list.innerHTML = "";
    for(let project of _storage_projectStorage__WEBPACK_IMPORTED_MODULE_2__.projects) {     
        let project_btn = document.createElement("button");
        project_btn.setAttribute("type", "button");
        project_btn.textContent = project.title;

        let new_list_item = document.createElement("li");
        new_list_item.classList.add("sidebar-option", "project-option");
        new_list_item.setAttribute("value", project.id) ;
        new_list_item.setAttribute("selected", "false");
        new_list_item.addEventListener("click", () => (0,_content_projectContent__WEBPACK_IMPORTED_MODULE_0__.populate)(new_list_item.getAttribute("value")));
              
        new_list_item.appendChild(project_btn);
        project_list.appendChild(new_list_item);
        
        addEventListenersForStyling(new_list_item);
    }
}

// Load content into main-content div when clicked
let addContentLoadFunction = () => {
    let home_option = document.querySelector(`.sidebar-option[value="home"]`);
    home_option.addEventListener("click", () => (0,_content_projectContent__WEBPACK_IMPORTED_MODULE_0__.populate)("home"));

    let today_option = document.querySelector(`.sidebar-option[value="today"]`);
    today_option.addEventListener("click", () => (0,_content_projectContent__WEBPACK_IMPORTED_MODULE_0__.populate)("today"));
    
    let later_option = document.querySelector(`.sidebar-option[value="later"]`);
    later_option.addEventListener("click", () => (0,_content_projectContent__WEBPACK_IMPORTED_MODULE_0__.populate)("later"));

    let notes_option = document.querySelector(`.sidebar-option[value="notes"]`);
    notes_option.addEventListener("click", _content_noteContent__WEBPACK_IMPORTED_MODULE_1__.populateNotes);
}



let getCurrentlySelected = () => {
    let options = document.querySelectorAll(".sidebar-option");
    for(let option of options) {
        if(option.getAttribute("selected") === "true") {
            return option.getAttribute("value");
        }
    }
}

let sidebar_options = document.querySelectorAll(".sidebar-option");
for(let option of sidebar_options) {
    addEventListenersForStyling(option);
}

let initiate = () => {
    populateProjectList();
    addContentLoadFunction();

    // Home automatically selected upon loading
    let home = document.querySelector(".sidebar-option[value='home']");
    home.click();
}

initiate();



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
/* harmony export */   notes: () => (/* binding */ notes),
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
    localStorage.setItem("notes", JSON.stringify(notes));
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
/* harmony export */   deleteToDo: () => (/* binding */ deleteToDo),
/* harmony export */   getProjectById: () => (/* binding */ getProjectById),
/* harmony export */   getToDoFromProject: () => (/* binding */ getToDoFromProject),
/* harmony export */   home_project: () => (/* binding */ home_project),
/* harmony export */   makeNewProject: () => (/* binding */ makeNewProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   updateProject: () => (/* binding */ updateProject),
/* harmony export */   updateProjectTodos: () => (/* binding */ updateProjectTodos)
/* harmony export */ });
/* harmony import */ var _objects_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/project */ "./src/scripts/objects/project.js");
/* harmony import */ var _storageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageHelper */ "./src/scripts/storage/storageHelper.js");




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

let deleteProject = projectId => {
    let project = getProjectById(projectId);
    let index = projects.indexOf(project);
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
}

let getProjectById = id => {
    for(let project of projects) {
        if(project.id === id) {
            return project;
        }
    }
}

let deleteToDo = (todo) => {
    let project_id = todo.projectId; 
    if(project_id === "home") {
        let index = home_project.todos.indexOf(todo);
        home_project.todos.splice(index, 1);
        localStorage.setItem("home", JSON.stringify(home_project));
    } else {
        let project = getProjectById(project_id);
        let index = project.todos.indexOf(todo);
        project.todos.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}

let getToDoFromProject = (project, todoId) => {
    for(let todo of project.todos) {
        if(todo.id === todoId) {
            return todo;
        }
    }
} 

let updateProjectTodos = (projectId) => {
    if(projectId === "home") {
        localStorage.setItem("home", JSON.stringify(home_project));
    } else {
        localStorage.setItem("projects", JSON.stringify(projects));
    }
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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar */ "./src/scripts/sidebar.js");
/* harmony import */ var _content_projectContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/projectContent */ "./src/scripts/content/projectContent.js");







let makeNewToDo = element => {
    let { id, title, description, dueDate, priority, targetProject } = extractFromToDoForm(element);
    targetProject = targetProject === "" ? "home" : targetProject;
    let new_to_do = (0,_objects_todo__WEBPACK_IMPORTED_MODULE_2__.createToDo)(id, title, description, dueDate, priority, targetProject.id);

    (0,_objects_project__WEBPACK_IMPORTED_MODULE_3__.addToDo)(targetProject, new_to_do);
    if(targetProject.id === "home") {
        localStorage.setItem("home", JSON.stringify(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.home_project));
    } else {
        localStorage.setItem("projects", JSON.stringify(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.projects));
    }

    // Refresh contents
    let selected = (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.getCurrentlySelected)();
    (0,_content_projectContent__WEBPACK_IMPORTED_MODULE_5__.populate)(selected);
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

let updateToDo = (element) => {
    let { title, description, dueDate, priority, targetProject } = extractFromToDoForm(element);
    let id = document.querySelector("form").getAttribute("value");
    let todo = (0,_projectStorage__WEBPACK_IMPORTED_MODULE_1__.getToDoFromProject)(targetProject, id);
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;

    // Refresh contents
    let selected = (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.getCurrentlySelected)();
    (0,_content_projectContent__WEBPACK_IMPORTED_MODULE_5__.populate)(selected);
}

let removeToDo = (projectId, todoId) => {
    let project = (0,_storageHelper__WEBPACK_IMPORTED_MODULE_0__.getById)(_projectStorage__WEBPACK_IMPORTED_MODULE_1__.projects, project_id);
    let todo = getToDo(projectId, todoId);
    deleteToDo(project, todo);
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
__webpack_require__(/*! ./modal/addNoteModal.js */ "./src/scripts/modal/addNoteModal.js");
__webpack_require__(/*! ./modal/addProjectModal.js */ "./src/scripts/modal/addProjectModal.js");
__webpack_require__(/*! ./modal/toDoModal.js */ "./src/scripts/modal/toDoModal.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkhBQTBDO0FBQ3RGLDRDQUE0QyxxSUFBOEM7QUFDMUYsNENBQTRDLCtHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsdUJBQXVCLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVB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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3RCO0FBQ0EsbUJBQU8sQ0FBQyw4Q0FBYztBQUN0QixtQkFBTyxDQUFDLG9EQUFpQjtBQUN6QixtQkFBTyxDQUFDLG9FQUF5QjtBQUNqQyxtQkFBTyxDQUFDLDBFQUE0QjtBQUNwQyxtQkFBTyxDQUFDLDhEQUFzQjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL2NvbnRlbnQvZW1wdHlDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9jb250ZW50L25vdGVDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9jb250ZW50L3Byb2plY3RDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9oaWRkZW5NZW51LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9tb2RhbC9hZGROb3RlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL21vZGFsL2FkZFByb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3NjcmlwdHMvbW9kYWwvdG9Eb01vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9tb2RhbC92aWV3VG9Eb01vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9vYmplY3RzL25vdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL29iamVjdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3NjcmlwdHMvb2JqZWN0cy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlL25vdGVTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlL3Byb2plY3RTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvc2NyaXB0cy9zdG9yYWdlL3N0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UvdG9kb1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL2Nvb2x2ZXRpY2Egcmcub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvTEVNT05NSUxLLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udHMvTFVNSU5BLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLXJhZGl1czogMTVweDtcclxuICAgIC0tYnV0dG9uLXdpZHRoOiA2MHB4O1xyXG4gICAgLS1wb3NpdGlvbi1zcGFjaW5nOiAzJTtcclxuICAgIC0taGlkZGVuLWJ0bi1yaWdodC1vZmZzZXQ6IDgwcHg7XHJcbiAgICAtLWhpZGRlbi1idG4tdG9wLW9mZnNldDogMTBweDtcclxuICAgIC0taGlkZGVuLWJ0bi1nYXA6IDYwcHg7XHJcblxyXG4gICAgLS1zaWRlYmFyLXRpdGxlOiAyNHB4O1xyXG4gICAgLS1zaWRlYmFyLXRpdGxlLXNtYWxsOiAxOHB4O1xyXG4gICAgLS10ZXh0OiAyMHB4O1xyXG4gICAgLS1yb3ctaWNvbi1zaXplOiA0NXB4O1xyXG5cclxuICAgIC0tc2lkZWJhci13aWR0aDogY2xhbXAoMzUwcHgsIDEwJSwgMjAwcHgpO1xyXG5cclxuICAgIC0tbGlnaHQtZ3JleTogcmdiKDIxOSwgMjI4LCAyNDIpO1xyXG4gICAgLS1idXR0b24tc2hhZG93OiByZ2IoMTY4LCAxNzMsIDE4NCk7XHJcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigzMywgMTQwLCAyMjcpO1xyXG4gICAgLS1saWdodC1yZWQ6IHJnYigyMzksIDEwLCAxMCk7XHJcbiAgICAtLXNpZGViYXItaGlnaGxpZ2h0OiByZ2IoMjUsIDE0NiwgMjM4KTtcclxuICAgIC0td2hpdGU6IHJnYigyNDQsIDI0OCwgMjU1KTtcclxuICAgIC0tc3RyaWtlLW91dDogcmdiKDE3NCwgMTc0LCAxNzQpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjb29sdmV0aWNhO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IExFTU9OTUlMSztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMVU1JTkE7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwLCA3NywgMTc3KSwgcmdiKDAsIDIyNSwgMjU1KSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWFpbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XHJcbiAgICBoZWlnaHQ6IDgwMHB4OyAvKiBQbGFjZWhvbGRlciAqL1xyXG4gICAgd2lkdGg6IGNsYW1wKDExMDBweCwgNjAlLCAxNTAwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgNTAsIDExNSwgMC44KTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggMWZyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBMRU1PTk1JTEs7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDIwMSwgMjI2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cykgdmFyKC0tcmFkaXVzKSAwcHggMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggcmdiKDY3LCAxNDksIDE5Nyk7XHJcbn1cclxuXHJcbi50aXRsZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDBweCAwcHggdmFyKC0tcmFkaXVzKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggNXB4IHJnYmEoMTQxLCAxNDUsIDE1NCwgMC43KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zaWRlYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgZmxleDogYXV0bztcclxufVxyXG5cclxuLnNpZGViYXIgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXItYmlnLXRleHQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLXRpdGxlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBMRU1PTk1JTEs7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1zaWRlYmFyLXRpdGxlKSArIDNweCk7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLnNpZGViYXIgZGl2IGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QgbGkge1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdCBsaSBidXR0b24ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLXRpdGxlLXNtYWxsKTtcclxuICAgIGZvbnQtZmFtaWx5OiBMRU1PTk1JTEs7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0IGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tc2lkZWJhci10aXRsZSkgKyAxcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1oaWdobGlnaHQpO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW9wdGlvbiBidXR0b24ge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJvZHktY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5lbXB0eS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGNvb2x2ZXRpY2E7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4udG9kby1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAyZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiKDE3NywgMTc3LCAxNzcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9kby1yb3ctZWxlbWVudCB7XHJcbiAgICBmb250LWZhbWlseTogQ29vbHZldGljYTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdG9kby1lZGl0LWJ0bixcclxuI3RvZG8tZGVsZXRlLWJ0biB7XHJcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tcm93LWljb24tc2l6ZSkgLSA1cHgpIDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLXJvdy1pY29uLXNpemUpKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuI3RvZG8tY2hlY2tib3g6aG92ZXIsXHJcbiN0b2RvLWVkaXQtYnRuOmhvdmVyLFxyXG4jdG9kby1kZWxldGUtYnRuOmhvdmVyLFxyXG4jdG9kby10aXRsZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNwcmlvcml0eS1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDElO1xyXG59XHJcblxyXG4jdG9kby1jaGVja2JveCB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1yb3ctaWNvbi1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1yb3ctaWNvbi1zaXplKTtcclxufVxyXG5cclxuI3RvZG8tdGl0bGUge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1yb3ctaWNvbi1zaXplKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50b2RvLXRpdGxlLWhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWhpZ2hsaWdodCk7XHJcbn1cclxuXHJcbi5zdHJpa2Utb3V0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1zdHJpa2Utb3V0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4jdG9kby1kYXRlIHtcclxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tcm93LWljb24tc2l6ZSk7XHJcbn1cclxuXHJcbiN0b2RvLWVkaXQtYnRuIHtcclxuICAgIGdyaWQtY29sdW1uOiA0LzU7XHJcbn1cclxuXHJcbiN0b2RvLWRlbGV0ZS1idG4ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWctYnRuIHtcclxuICAgIGhlaWdodDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcclxuICAgIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMTY4LCAxNzMsIDE4NCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4uYmlnLWRlbGV0ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1idXR0b24td2lkdGgpIC0gN3B4KTtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZC1idG4ge1xyXG4gICAgYm90dG9tOiB2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKTtcclxuICAgIHJpZ2h0OiB2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xyXG4gICAgXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLXdpZHRoKTtcclxuICAgIH1cclxufVxyXG4uYmlnLWRlbGV0ZS1idG46aG92ZXIsXHJcbi5hZGQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgKyAycHgpO1xyXG4gICAgd2lkdGg6IGNhbGModmFyKC0tYnV0dG9uLXdpZHRoKSArIDJweCk7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oaWRkZW4tbWVudS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tYnV0dG9uLXNoYWRvdyk7XHJcbn1cclxuXHJcbi5oaWRkZW4tbWVudS1idG46aG92ZXIge1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaGlnaGxpZ2h0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkZC10b2RvLWJ1dHRvbiB7XHJcbiAgICBib3R0b206IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXRvcC1vZmZzZXQpICsgKHZhcigtLWhpZGRlbi1idG4tZ2FwKSoyKSk7XHJcbiAgICByaWdodDogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tcmlnaHQtb2Zmc2V0KSk7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1idXR0b24ge1xyXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0KSArIHZhcigtLWhpZGRlbi1idG4tZ2FwKSk7XHJcbiAgICByaWdodDogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tcmlnaHQtb2Zmc2V0KSk7XHJcbn1cclxuXHJcbi5hZGQtbm90ZS1idXR0b24ge1xyXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0KSk7XHJcbiAgICByaWdodDogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tcmlnaHQtb2Zmc2V0KSk7XHJcbn1cclxuXHJcbi5ub3RlLWNvbnRhaW5lciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4ubm90ZS1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2IoMTc3LCAxNzcsIDE3Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBjb29sdmV0aWNhO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IDsgKi9cclxuXHJcbiAgICAmICoge1xyXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3RlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi5ub3RlLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi5ub3RlLWRlbGV0ZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5ub3RlLWRlbGV0ZS1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxufVxyXG5cclxuZGlhbG9nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2IoODksIDg5LCA4OSk7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbjo6YmFja2Ryb3Age1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJiBkaXYge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnZpZXctdG9kby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDBweCA1MHB4O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAmIDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvb2x2ZXRpY2E7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIGh5cGhlbnM6IG1hbnVhbDtcclxuICAgIH1cclxuXHJcbiAgICAmIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBmb250LXNpemU6ICA1MnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMzBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcblxyXG4gICAgJiAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogY29vbHZldGljYTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9kby1mb3JtLFxyXG4ubm90ZS1mb3JtIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWZvcm0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG59XHJcblxyXG4jdGl0bGUsIFxyXG4jZGVzY3JpcHRpb24sIFxyXG4jZGF0ZSwgXHJcbiNsb3ctcHJpb3JpdHktYnRuLFxyXG4jaGlnaC1wcmlvcml0eS1idG4sXHJcbiNmb3JtLXN1Ym1pdC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuI3RpdGxlLCBcclxuI2Rlc2NyaXB0aW9uLCBcclxuI2RhdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4jdGl0bGUsXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuI3RpdGxlOmZvY3VzLXZpc2libGUsXHJcbiNkZXNjcmlwdGlvbjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDBweDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24ge1xyXG4gICAgZ3JpZC1yb3c6IDIvMztcclxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbiNkYXRlIHtcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG59XHJcblxyXG5mb3JtIGRpdiB7XHJcbiAgICBncmlkLXJvdzogMy80O1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI2xvdy1wcmlvcml0eS1idG4sXHJcbiNoaWdoLXByaW9yaXR5LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4jbG93LXByaW9yaXR5LWJ0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI2hpZ2gtcHJpb3JpdHktYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNmb3JtLXN1Ym1pdC1idG4ge1xyXG4gICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4jZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzksIDM5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzOSwgMzksIDM5KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAvKiBIYW1idXJnZXIgc2lkZWJhciAqL1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNc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QUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIC0tYnV0dG9uLXdpZHRoOiA2MHB4O1xcclxcbiAgICAtLXBvc2l0aW9uLXNwYWNpbmc6IDMlO1xcclxcbiAgICAtLWhpZGRlbi1idG4tcmlnaHQtb2Zmc2V0OiA4MHB4O1xcclxcbiAgICAtLWhpZGRlbi1idG4tdG9wLW9mZnNldDogMTBweDtcXHJcXG4gICAgLS1oaWRkZW4tYnRuLWdhcDogNjBweDtcXHJcXG5cXHJcXG4gICAgLS1zaWRlYmFyLXRpdGxlOiAyNHB4O1xcclxcbiAgICAtLXNpZGViYXItdGl0bGUtc21hbGw6IDE4cHg7XFxyXFxuICAgIC0tdGV4dDogMjBweDtcXHJcXG4gICAgLS1yb3ctaWNvbi1zaXplOiA0NXB4O1xcclxcblxcclxcbiAgICAtLXNpZGViYXItd2lkdGg6IGNsYW1wKDM1MHB4LCAxMCUsIDIwMHB4KTtcXHJcXG5cXHJcXG4gICAgLS1saWdodC1ncmV5OiByZ2IoMjE5LCAyMjgsIDI0Mik7XFxyXFxuICAgIC0tYnV0dG9uLXNoYWRvdzogcmdiKDE2OCwgMTczLCAxODQpO1xcclxcbiAgICAtLWxpZ2h0LWJsdWU6IHJnYigzMywgMTQwLCAyMjcpO1xcclxcbiAgICAtLWxpZ2h0LXJlZDogcmdiKDIzOSwgMTAsIDEwKTtcXHJcXG4gICAgLS1zaWRlYmFyLWhpZ2hsaWdodDogcmdiKDI1LCAxNDYsIDIzOCk7XFxyXFxuICAgIC0td2hpdGU6IHJnYigyNDQsIDI0OCwgMjU1KTtcXHJcXG4gICAgLS1zdHJpa2Utb3V0OiByZ2IoMTc0LCAxNzQsIDE3NCk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogY29vbHZldGljYTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvY29vbHZldGljYVxcXFwgcmcub3RmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBMRU1PTk1JTEs7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0xFTU9OTUlMSy1SZWd1bGFyLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogTFVNSU5BO1xcclxcbiAgICBzcmM6IHVybChmb250cy9MVU1JTkEudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAsIDc3LCAxNzcpLCByZ2IoMCwgMjI1LCAyNTUpKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcclxcbiAgICBoZWlnaHQ6IDgwMHB4OyAvKiBQbGFjZWhvbGRlciAqL1xcclxcbiAgICB3aWR0aDogY2xhbXAoMTEwMHB4LCA2MCUsIDE1MDBweCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDUwLCAxMTUsIDAuOCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCAxZnI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxleDogYXV0bztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgMjAxLCAyMjYpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cykgdmFyKC0tcmFkaXVzKSAwcHggMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4IHJnYig2NywgMTQ5LCAxOTcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaWNvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMHB4IDBweCB2YXIoLS1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDVweCByZ2JhKDE0MSwgMTQ1LCAxNTQsIDAuNyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXI6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZsZXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItYmlnLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGViYXItdGl0bGUpO1xcclxcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tc2lkZWJhci10aXRsZSkgKyAzcHgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgZGl2IGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QgbGkge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IGxpIGJ1dHRvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGViYXItdGl0bGUtc21hbGwpO1xcclxcbiAgICBmb250LWZhbWlseTogTEVNT05NSUxLO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHRlZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zaWRlYmFyLXRpdGxlKSArIDFweCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1oaWdobGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1vcHRpb24gYnV0dG9uIHtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1oZWFkZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgZmxleDogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGNvb2x2ZXRpY2E7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAyZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiKDE3NywgMTc3LCAxNzcpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXJvdy1lbGVtZW50IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IENvb2x2ZXRpY2E7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWVkaXQtYnRuLFxcclxcbiN0b2RvLWRlbGV0ZS1idG4ge1xcclxcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tcm93LWljb24tc2l6ZSkgLSA1cHgpIDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1yb3ctaWNvbi1zaXplKSk7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jaGVja2JveDpob3ZlcixcXHJcXG4jdG9kby1lZGl0LWJ0bjpob3ZlcixcXHJcXG4jdG9kby1kZWxldGUtYnRuOmhvdmVyLFxcclxcbiN0b2RvLXRpdGxlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktaW5kaWNhdG9yIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY2hlY2tib3gge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXJvdy1pY29uLXNpemUpO1xcclxcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tcm93LWljb24tc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXRpdGxlIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXJvdy1pY29uLXNpemUpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZS1ob3Zlcjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWhpZ2hsaWdodCk7XFxyXFxufVxcclxcblxcclxcbi5zdHJpa2Utb3V0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN0cmlrZS1vdXQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tZGF0ZSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1yb3ctaWNvbi1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tZWRpdC1idG4ge1xcclxcbiAgICBncmlkLWNvbHVtbjogNC81O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1kZWxldGUtYnRuIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaWctYnRuIHtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1idXR0b24td2lkdGgpO1xcclxcbiAgICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDE2OCwgMTczLCAxODQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5iaWctZGVsZXRlLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxyXFxuXFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tYnV0dG9uLXdpZHRoKSAtIDdweCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4ge1xcclxcbiAgICBib3R0b206IHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpO1xcclxcbiAgICByaWdodDogdmFyKC0tcG9zaXRpb24tc3BhY2luZyk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICAgIFxcclxcbiAgICAmIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24td2lkdGgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5iaWctZGVsZXRlLWJ0bjpob3ZlcixcXHJcXG4uYWRkLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYnV0dG9uLXdpZHRoKSArIDJweCk7XFxyXFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgKyAycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tbWVudS1idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1idXR0b24tc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaGlnaGxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnV0dG9uIHtcXHJcXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0KSArICh2YXIoLS1oaWRkZW4tYnRuLWdhcCkqMikpO1xcclxcbiAgICByaWdodDogY2FsYyh2YXIoLS1wb3NpdGlvbi1zcGFjaW5nKSArIHZhcigtLWhpZGRlbi1idG4tcmlnaHQtb2Zmc2V0KSk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBib3R0b206IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXRvcC1vZmZzZXQpICsgdmFyKC0taGlkZGVuLWJ0bi1nYXApKTtcXHJcXG4gICAgcmlnaHQ6IGNhbGModmFyKC0tcG9zaXRpb24tc3BhY2luZykgKyB2YXIoLS1oaWRkZW4tYnRuLXJpZ2h0LW9mZnNldCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW5vdGUtYnV0dG9uIHtcXHJcXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi10b3Atb2Zmc2V0KSk7XFxyXFxuICAgIHJpZ2h0OiBjYWxjKHZhcigtLXBvc2l0aW9uLXNwYWNpbmcpICsgdmFyKC0taGlkZGVuLWJ0bi1yaWdodC1vZmZzZXQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUtY29udGFpbmVyIHtcXHJcXG4gICAgY29sdW1uLWNvdW50OiAzO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZS1jYXJkIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiKDE3NywgMTc3LCAxNzcpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGNvb2x2ZXRpY2E7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IDsgKi9cXHJcXG5cXHJcXG4gICAgJiAqIHtcXHJcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi5ub3RlLWRlbGV0ZS1idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsaW5lLWhlaWdodDogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUtZGVsZXRlLWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2IoODksIDg5LCA4OSk7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbjo6YmFja2Ryb3Age1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAmIGRpdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctdG9kby1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDUwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG5cXHJcXG4gICAgJiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgcCB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogY29vbHZldGljYTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgICAgIGh5cGhlbnM6IG1hbnVhbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIGRpdiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiBidXR0b24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogIDUycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGZsZXg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG5cXHJcXG4gICAgJiAqIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb29sdmV0aWNhO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvcm0sXFxyXFxuLm5vdGUtZm9ybSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSwgXFxyXFxuI2Rlc2NyaXB0aW9uLCBcXHJcXG4jZGF0ZSwgXFxyXFxuI2xvdy1wcmlvcml0eS1idG4sXFxyXFxuI2hpZ2gtcHJpb3JpdHktYnRuLFxcclxcbiNmb3JtLXN1Ym1pdC1idG4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUsIFxcclxcbiNkZXNjcmlwdGlvbiwgXFxyXFxuI2RhdGUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSxcXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlOmZvY3VzLXZpc2libGUsXFxyXFxuI2Rlc2NyaXB0aW9uOmZvY3VzLXZpc2libGUge1xcclxcbiAgICBvdXRsaW5lOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGdyaWQtcm93OiAyLzM7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUge1xcclxcbiAgICBncmlkLXJvdzogMy80O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGRpdiB7XFxyXFxuICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdy1wcmlvcml0eS1idG4sXFxyXFxuI2hpZ2gtcHJpb3JpdHktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb3ctcHJpb3JpdHktYnRuIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gtcHJpb3JpdHktYnRuIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1zdWJtaXQtYnRuIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzksIDM5LCAzOSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4tY2FyZCB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lkZWJhciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgLyogSGFtYnVyZ2VyIHNpZGViYXIgKi9cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgc2hvd0VtcHR5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGJvZHlfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keS1jb250ZW50XCIpO1xyXG4gICAgYm9keV9jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoMS5jbGFzc05hbWUgPSBcImVtcHR5LXRpdGxlXCI7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiTm90aGluZyB0byBzaG93IGhlcmVcIjtcclxuICAgIGJvZHlfY29udGVudC5hcHBlbmRDaGlsZChoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dFbXB0eSB9IiwiaW1wb3J0IHsgZGVsZXRlTm90ZSwgbm90ZXMgfSBmcm9tIFwiLi4vc3RvcmFnZS9ub3RlU3RvcmFnZVwiXHJcbmltcG9ydCB7IHNob3dFbXB0eSB9IGZyb20gXCIuL2VtcHR5Q29udGVudFwiXHJcblxyXG5sZXQgcG9wdWxhdGVOb3RlcyA9ICgpID0+IHtcclxuICAgIGlmKG5vdGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgc2hvd0VtcHR5KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhZGROb3RlQ29udGVudHMoKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGFkZE5vdGVDb250ZW50cyA9ICgpID0+IHtcclxuICAgIGxldCBib2R5X2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHktY29udGVudFwiKTtcclxuICAgIGJvZHlfY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG5vdGVfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5vdGVfY29udGFpbmVyLmNsYXNzTmFtZSA9IFwibm90ZS1jb250YWluZXJcIjtcclxuICAgIGZvcihsZXQgbm90ZSBvZiBub3Rlcykge1xyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9IFwibm90ZS1jYXJkXCI7XHJcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBub3RlLmlkKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSBcIm5vdGUtdGl0bGVcIjtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5vdGUudGl0bGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJub3RlLWRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBsZXQgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlX2J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZV9idG4uY2xhc3NOYW1lID0gXCJub3RlLWRlbGV0ZS1idG5cIjtcclxuICAgICAgICBkZWxldGVfYnRuLmlubmVySFRNTCA9IFwiJiN4MjkyQlwiO1xyXG4gICAgICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlTm90ZShub3RlKTtcclxuICAgICAgICAgICAgcG9wdWxhdGVOb3RlcygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVfYnRuKTtcclxuICAgICAgICBub3RlX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuICAgIGJvZHlfY29udGVudC5hcHBlbmRDaGlsZChub3RlX2NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBvcHVsYXRlTm90ZXMgfSIsImltcG9ydCB7IGNyZWF0ZVRvRG9Nb2RhbCB9IGZyb20gXCIuLi9tb2RhbC90b0RvTW9kYWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVmlld1RvRG9Nb2RhbCB9IGZyb20gXCIuLi9tb2RhbC92aWV3VG9Eb01vZGFsXCI7XHJcbmltcG9ydCB7IGluaXRpYXRlIH0gZnJvbSBcIi4uL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdEJ5SWQsIGhvbWVfcHJvamVjdCwgdXBkYXRlUHJvamVjdFRvZG9zLCBkZWxldGVUb0RvLCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4uL3N0b3JhZ2UvcHJvamVjdFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgc2hvd0VtcHR5IH0gZnJvbSBcIi4vZW1wdHlDb250ZW50XCI7XHJcbmxldCBtb250aHMgPSBbXCJKQU5cIiwgXCJGRUJcIiwgXCJNQVJcIiwgXCJBUFJcIiwgXCJNQVlcIiwgXCJKVU5cIiwgXCJKVUxcIiwgXCJBVUdcIiwgXCJTRVBcIiwgXCJPQ1RcIiwgXCJOT1ZcIiwgXCJERUNcIl07XHJcblxyXG5sZXQgcG9wdWxhdGUgPSBwcm9qZWN0ID0+IHtcclxuICAgIHN3aXRjaChwcm9qZWN0KSB7XHJcbiAgICAgICAgY2FzZSBcImhvbWVcIjpcclxuICAgICAgICAgICAgcG9wdWxhdGVIb21lKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0b2RheVwiOlxyXG4gICAgICAgICAgICBwb3B1bGF0ZVRvZGF5KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsYXRlclwiOlxyXG4gICAgICAgICAgICBwb3B1bGF0ZUxhdGVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdChwcm9qZWN0KTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHBvcHVsYXRlSG9tZSA9ICgpID0+IHtcclxuICAgIGxldCB0b2RvcyA9IGhvbWVfcHJvamVjdC50b2RvcztcclxuICAgIGNyZWF0ZVRvRG9zKFwiaG9tZVwiLCB0b2Rvcyk7XHJcbn1cclxuXHJcbmxldCBwb3B1bGF0ZVRvZGF5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGR1ZV90b2RvcyA9IGZpbHRlclRvRG9zKChhLGIpID0+IChhIDw9IGIpKTtcclxuICAgIGNyZWF0ZVRvRG9zKFwiaG9tZVwiLCBkdWVfdG9kb3MpO1xyXG59XHJcblxyXG5sZXQgcG9wdWxhdGVMYXRlciA9ICgpID0+IHtcclxuICAgIGxldCBkdWVfdG9kb3MgPSBmaWx0ZXJUb0RvcygoYSxiKSA9PiAoYSA+IGIpKTtcclxuICAgIGNyZWF0ZVRvRG9zKFwiaG9tZVwiLCBkdWVfdG9kb3MpO1xyXG59XHJcblxyXG5sZXQgcG9wdWxhdGVQcm9qZWN0ID0gaWQgPT4ge1xyXG4gICAgbGV0IHRhcmdldFByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XHJcbiAgICBsZXQgdG9kb3MgPSB0YXJnZXRQcm9qZWN0LnRvZG9zO1xyXG4gICAgY3JlYXRlVG9Eb3MoaWQsIHRvZG9zKTtcclxufVxyXG5cclxubGV0IGNyZWF0ZVRvRG9zID0gKHByb2plY3RJZCwgdG9kb3MpID0+IHtcclxuICAgIGlmKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjcmVhdGVUb0RvRW50cmllcyh0b2Rvcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dFbXB0eSgpO1xyXG4gICAgICAgIGlmKHByb2plY3RJZCAhPT0gXCJob21lXCIpIHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdERlbGV0ZUJ1dHRvbihwcm9qZWN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGZpbHRlclRvRG9zID0gZmlsdGVyID0+IHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgLy8gLmdldE1vbnRoKCkgaXMgMC1pbmRleGVkXHJcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBsZXQgdG9kYXkgPSBEYXRlLnBhcnNlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xyXG4gICAgbGV0IHRvZG9zID0gaG9tZV9wcm9qZWN0LnRvZG9zO1xyXG4gICAgbGV0IGR1ZV90b2RvcyA9IFtdO1xyXG4gICAgZm9yKGxldCB0b2RvIG9mIHRvZG9zKSB7XHJcbiAgICAgICAgbGV0IGR1ZV9kYXRlID0gRGF0ZS5wYXJzZSh0b2RvLmR1ZURhdGUpO1xyXG4gICAgICAgIGlmKGZpbHRlcihkdWVfZGF0ZSwgdG9kYXkpKSB7XHJcbiAgICAgICAgICAgIGR1ZV90b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkdWVfdG9kb3M7XHJcbn1cclxuXHJcbmxldCBjcmVhdGVQcmlvcml0eUluZGljYXRvciA9ICh0b2RvLCByb3cpID0+IHtcclxuICAgIGxldCBwcmlvcml0eV9pbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlfaW5kaWNhdG9yLmlkID0gXCJwcmlvcml0eS1pbmRpY2F0b3JcIjtcclxuICAgIGxldCBjb2xvdXIgPSB0b2RvLnByaW9yaXR5ID09PSBcIm5vbmVcIiA/IFwiZ3JheVwiIDogdG9kby5wcmlvcml0eSA9PT0gXCJsb3dcIiA/IFwiZ3JlZW5cIiA6IFwicmVkXCI7XHJcbiAgICBwcmlvcml0eV9pbmRpY2F0b3Iuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gY29sb3VyO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHByaW9yaXR5X2luZGljYXRvcik7XHJcbn1cclxuXHJcbmxldCBjcmVhdGVDaGVja2JveCA9ICh0b2RvLCByb3cpID0+IHtcclxuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2hlY2tib3guaWQgPSBcInRvZG8tY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwidG9kby1yb3ctZWxlbWVudFwiO1xyXG4gICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYm94LmlubmVySFRNTCA9IFwiJiN4MjYxMFwiIC8vIFVuY2hlY2tlZCBCb3hcclxuICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiZmFsc2VcIik7XHJcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgY2hlY2tlZCA9IGJveC5nZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RvLXJvd1t2YWx1ZT1cIiR7dG9kby5pZH1cIl0gI3RvZG8tdGl0bGVgKTtcclxuICAgICAgICBsZXQgZHVlX2RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kby1yb3dbdmFsdWU9XCIke3RvZG8uaWR9XCJdICN0b2RvLWRhdGVgKTtcclxuICAgICAgICBpZihjaGVja2VkID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgY2hlY2tlZF9ib3goYm94LCB0aXRsZSwgZHVlX2RhdGUpO1xyXG4gICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RUb2Rvcyh0b2RvLnByb2plY3RJZCwgdG9kbylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1bmNoZWNrZWRfYm94KGJveCwgdGl0bGUsIGR1ZV9kYXRlKTtcclxuICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdFRvZG9zKHRvZG8ucHJvamVjdElkLCB0b2RvKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjaGVja2JveC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIHJldHVybiBib3g7XHJcbn1cclxuXHJcbmxldCBjcmVhdGVUaXRsZSA9ICh0b2RvLCByb3cpID0+IHtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGl0bGUuaWQgPSBcInRvZG8tdGl0bGVcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJvdy1lbGVtZW50XCIsIFwidG9kby10aXRsZS1ob3ZlclwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlVmlld1RvRG9Nb2RhbCh0b2RvKTtcclxuICAgIH0pXHJcbiAgICByb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG59XHJcblxyXG5sZXQgY3JlYXRlRHVlRGF0ZSA9ICh0b2RvLCByb3cpID0+IHtcclxuICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZHVlX2RhdGUuaWQgPSBcInRvZG8tZGF0ZVwiO1xyXG4gICAgZHVlX2RhdGUuY2xhc3NOYW1lID0gXCJ0b2RvLXJvdy1lbGVtZW50XCI7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIGlmKGR1ZURhdGUgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgdG9kb19kdWVfZGF0ZSA9IGR1ZURhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gdG9kb19kdWVfZGF0ZVswXTtcclxuICAgICAgICBsZXQgbW9udGggPSBtb250aHNbTnVtYmVyKHRvZG9fZHVlX2RhdGVbMV0pIC0gMV07XHJcbiAgICAgICAgbGV0IGRheSA9IHRvZG9fZHVlX2RhdGVbMl07XHJcbiAgICAgICAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSBgJHttb250aH0gJHtkYXl9ICR7eWVhcn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IFwiTm8gRHVlIERhdGVcIjtcclxuICAgIH0gICAgICAgIFxyXG4gICAgcm93LmFwcGVuZENoaWxkKGR1ZV9kYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZHVlX2RhdGU7XHJcbn1cclxuXHJcbmxldCBjcmVhdGVFZGl0QnRuID0gKHRvZG8sIHJvdykgPT4ge1xyXG4gICAgbGV0IGJ0bl9oaWdobGlnaHQgPSBcInJnYigyNSwgMTQ2LCAyMzgpXCI7XHJcbiAgICBsZXQgZWRpdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZWRpdF9idG4uaWQgPSBcInRvZG8tZWRpdC1idG5cIjtcclxuICAgIGVkaXRfYnRuLmNsYXNzTmFtZSA9IFwidG9kby1yb3ctZWxlbWVudFwiO1xyXG4gICAgZWRpdF9idG4uaW5uZXJIVE1MID0gXCImI3gyNzBFO1wiOyAvLyBQZW5jaWwgaWNvblxyXG4gICAgY3JlYXRlVG9Eb01vZGFsKFwiZWRpdFwiLCBlZGl0X2J0biwgdG9kbyk7XHJcbiAgICBlZGl0X2J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICBlZGl0X2J0bi5zdHlsZS5jb2xvciA9IGJ0bl9oaWdobGlnaHQ7XHJcbiAgICAgICAgZWRpdF9idG4uc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IFwiYm9sZFwiO1xyXG4gICAgfSlcclxuICAgIGVkaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZWRpdF9idG4uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgZWRpdF9idG4uc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDEwMDtcclxuICAgIH0pXHJcbiAgICBlZGl0X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIikuc2hvd01vZGFsKCk7XHJcbiAgICB9KVxyXG4gICAgcm93LmFwcGVuZENoaWxkKGVkaXRfYnRuKTtcclxufVxyXG5cclxubGV0IGNyZWF0ZVRvRG9EZWxldGVCdG4gPSAodG9kbywgdG9kb3MsIHJvdykgPT4ge1xyXG4gICAgbGV0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGVsZXRlX2J0bi5pZCA9IFwidG9kby1kZWxldGUtYnRuXCI7XHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTmFtZSA9IFwidG9kby1yb3ctZWxlbWVudFwiO1xyXG4gICAgZGVsZXRlX2J0bi5pbm5lckhUTUwgPSBcIiYjeDI5MkI7XCI7IC8vIENyb3NzIGljb25cclxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlX2J0bi5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgZGVsZXRlX2J0bi5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gXCJib2xkXCI7XHJcbiAgICB9KVxyXG4gICAgZGVsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZV9idG4uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgZGVsZXRlX2J0bi5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMTAwO1xyXG4gICAgfSlcclxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkZWxldGVUb0RvKHRvZG8pO1xyXG4gICAgICAgIGNyZWF0ZVRvRG9zKHRvZG8ucHJvamVjdElkLCB0b2Rvcyk7XHJcbiAgICB9KVxyXG4gICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZV9idG4pO1xyXG59XHJcblxyXG5sZXQgY3JlYXRlVG9Eb0VudHJpZXMgPSAodG9kb3MpID0+IHtcclxuICAgIGxldCBib2R5X2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHktY29udGVudFwiKTtcclxuICAgIGJvZHlfY29udGVudC5pbm5lckhUTUwgPSBcIlwiOyAvLyBDbGVhciBDb250ZW50XHJcbiAgICBmb3IobGV0IHRvZG8gb2YgdG9kb3MpIHtcclxuICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gXCJ0b2RvLXJvd1wiO1xyXG4gICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2RvLmlkKTtcclxuICAgICAgICBcclxuICAgICAgICBjcmVhdGVQcmlvcml0eUluZGljYXRvcih0b2RvLCByb3cpO1xyXG5cclxuICAgICAgICBsZXQgYm94ID0gY3JlYXRlQ2hlY2tib3godG9kbywgcm93KTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVUaXRsZSh0b2RvLCByb3cpO1xyXG4gICAgICAgIGxldCBkdWVfZGF0ZSA9IGNyZWF0ZUR1ZURhdGUodG9kbywgcm93KTtcclxuXHJcbiAgICAgICAgaWYodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZF9ib3goYm94LCB0aXRsZSwgZHVlX2RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjcmVhdGVFZGl0QnRuKHRvZG8sIHJvdyk7XHJcbiAgICAgICAgY3JlYXRlVG9Eb0RlbGV0ZUJ0bih0b2RvLCB0b2Rvcywgcm93KTtcclxuXHJcbiAgICAgICAgYm9keV9jb250ZW50LmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjcmVhdGVQcm9qZWN0RGVsZXRlQnV0dG9uID0gKHByb2plY3RJZCkgPT4ge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHktY29udGVudFwiKTtcclxuICAgIGxldCBkZWxldGVfYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWxldGVfYnRuX2NvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlbGV0ZS1idG4tY29udGFpbmVyXCI7XHJcbiAgICBsZXQgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWxldGVfYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoXCJiaWctZGVsZXRlLWJ0blwiLCBcImJpZy1idG5cIik7XHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSBcIiYjeDI5MkJcIjtcclxuICAgIGRlbGV0ZV9idG4uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBkZWxldGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gICAgICAgIGluaXRpYXRlKCk7XHJcbiAgICB9KVxyXG4gICAgZGVsZXRlX2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlX2J0bik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlbGV0ZV9idG5fY29udGFpbmVyKTtcclxufVxyXG5cclxubGV0IGNoZWNrZWRfYm94ID0gKGJveCwgdGl0bGUsIGR1ZURhdGUpICA9PiB7XHJcbiAgICBsZXQgaGlnaGxpZ2h0X2NvbG91ciA9IFwicmdiKDE3NCwgMTc0LCAxNzQpXCI7XHJcbiAgICBib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XHJcbiAgICBib3guaW5uZXJIVE1MID0gXCImI3gyNjExO1wiIC8vIENoZWNrZWQgQm94XHJcbiAgICBib3guc3R5bGUuY29sb3IgPSBoaWdobGlnaHRfY29sb3VyO1xyXG4gICAgXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtlLW91dFwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLXRpdGxlLWhvdmVyXCIpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtlLW91dFwiKTtcclxufVxyXG5cclxubGV0IHVuY2hlY2tlZF9ib3ggPSAoYm94LCB0aXRsZSwgZHVlRGF0ZSkgPT4ge1xyXG4gICAgYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIGJveC5pbm5lckhUTUwgPSBcIiYjeDI2MTBcIiAvLyBVbmNoZWNrZWQgQm94XHJcbiAgICBib3guc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RyaWtlLW91dFwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWhvdmVyXCIpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RyaWtlLW91dFwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcG9wdWxhdGUgfSIsIi8vIEFkZHMgaGlkaW5nIGFuZCB1bmhpZGluZyBidXR0b25zIGZvciBoaWRkZW4gYnV0dG9uIG1lbnVcclxubGV0IGFkZF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idG5cIik7XHJcbmxldCBuZXdfdG9kb19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWJ1dHRvblwiKTtcclxubGV0IG5ld19wcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnV0dG9uXCIpO1xyXG5sZXQgbmV3X25vdGVfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbm90ZS1idXR0b25cIik7XHJcblxyXG5hZGRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBuZXdfdG9kb19idG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbiAgICBuZXdfcHJvamVjdF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbiAgICBuZXdfbm90ZV9idG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbn0pIiwiaW1wb3J0IHsgcG9wdWxhdGVOb3RlcyB9IGZyb20gXCIuLi9jb250ZW50L25vdGVDb250ZW50LmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkIH0gZnJvbSBcIi4uL3NpZGViYXIuanNcIjtcclxuaW1wb3J0IHsgbWFrZU5ld05vdGUgfSBmcm9tIFwiLi4vc3RvcmFnZS9ub3RlU3RvcmFnZS5qc1wiO1xyXG5cclxubGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxubGV0IG5ld19ub3RlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnV0dG9uXCIpO1xyXG5uZXdfbm90ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lclwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBOb3RlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJub3RlLWZvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBtYXhsZW5ndGg9XCIyNVwiIHBsYWNlaG9sZGVyPVwiTmV3IE5vdGUuLi5cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZm9ybS1zdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICAgXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgYFxyXG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcblxyXG4gICAgbGV0IG5vdGVfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS1mb3JtXCIpO1xyXG4gICAgbm90ZV9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgbWFrZU5ld05vdGUobm90ZV9mb3JtKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gZ2V0Q3VycmVudGx5U2VsZWN0ZWQoKTtcclxuICAgICAgICBpZihzZWxlY3RlZCA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICAgICAgICAgIHBvcHVsYXRlTm90ZXMoc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSIsImltcG9ydCB7IG1ha2VOZXdQcm9qZWN0IH0gZnJvbSBcIi4uL3N0b3JhZ2UvcHJvamVjdFN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVQcm9qZWN0TGlzdCB9IGZyb20gXCIuLi9zaWRlYmFyLmpzXCI7XHJcblxyXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xyXG5sZXQgbmV3X3Byb2plY3RfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idXR0b25cIik7XHJcbm5ld19wcm9qZWN0X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBQcm9qZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJwcm9qZWN0LWZvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBtYXhsZW5ndGg9XCIyMFwiIHBsYWNlaG9sZGVyPVwiTmV3IFByb2plY3QuLi5cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmb3JtLXN1Ym1pdC1idG5cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgPC9kaXY+ICAgICBcclxuICAgIGBcclxuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdF9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7ICBcclxuICAgIHByb2plY3RfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIG1ha2VOZXdQcm9qZWN0KHByb2plY3RfZm9ybSk7XHJcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xyXG4gICAgfSk7XHJcbn0pIiwiaW1wb3J0IHsgbWFrZU5ld1RvRG8sIHVwZGF0ZVRvRG8gfSBmcm9tIFwiLi4vc3RvcmFnZS90b2RvU3RvcmFnZS5qc1wiO1xyXG5cclxubGV0IGNyZWF0ZVRvRG9Nb2RhbCA9IChhY3Rpb24sIGVsZW1lbnQsIHRvZG8gPSBudWxsKSA9PiB7XHJcbiAgICBpZihhY3Rpb24gPT09IFwiYWRkXCIpIHtcclxuICAgICAgICBsZXQgbW9kYWxUaXRsZSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBUbyBEbzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGxldCB0b2RvX29iaiA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBkdWVEYXRlOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogXCJcIixcclxuICAgICAgICAgICAgaWQ6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9Eb01vZGFsKG1vZGFsVGl0bGUsIG1ha2VOZXdUb0RvLCBlbGVtZW50LCB0b2RvX29iaik7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZihhY3Rpb24gPT09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgbGV0IG1vZGFsVGl0bGUgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkVkaXQgVG8gRG88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICB0b0RvTW9kYWwobW9kYWxUaXRsZSwgdXBkYXRlVG9EbywgZWxlbWVudCwgdG9kbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB0b0RvTW9kYWwgPSAobW9kYWxUaXRsZSwgbW9kYWxBY3Rpb24sIGVsZW1lbnQsIHRvZG8pID0+IHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgJHttb2RhbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ0b2RvLWZvcm1cIiBhY3Rpb249XCJcIiB2YWx1ZT1cIiR7dG9kby5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbWF4bGVuZ3RoPVwiNTBcIiBwbGFjZWhvbGRlcj1cIk5ldyBUbyBEby4uLlwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjEwXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+JHt0b2RvLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG93LXByaW9yaXR5LWJ0blwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXNlbGVjdGVkPVwiZmFsc2VcIj5Mb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhpZ2gtcHJpb3JpdHktYnRuXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkhpZ2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZm9ybS1zdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2RvLnRpdGxlKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9kby5kdWVEYXRlKTtcclxuXHJcbiAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxvd19wcmlvcml0eV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvdy1wcmlvcml0eS1idG5cIik7XHJcbiAgICAgICAgbGV0IGhpZ2hfcHJpb3JpdHlfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoLXByaW9yaXR5LWJ0blwiKTtcclxuICAgICAgICBsb3dfcHJpb3JpdHlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGxvd19wcmlvcml0eV9idG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWQgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5zdHlsZS5jb2xvciA9IFwicmdiKDI0NCwgMjQ4LCAyNTUpXCI7XHJcbiAgICAgICAgICAgICAgICBsb3dfcHJpb3JpdHlfYnRuLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgIGxvd19wcmlvcml0eV9idG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBpZihoaWdoX3ByaW9yaXR5X2J0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGVkXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hfcHJpb3JpdHlfYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb3dfcHJpb3JpdHlfYnRuLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcInJnYigyNDQsIDI0OCwgMjU1KVwiO1xyXG4gICAgICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBoaWdoX3ByaW9yaXR5X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBoaWdoX3ByaW9yaXR5X2J0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZCA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoX3ByaW9yaXR5X2J0bi5zdHlsZS5jb2xvciA9IFwicmdiKDI0NCwgMjQ4LCAyNTUpXCI7XHJcbiAgICAgICAgICAgICAgICBoaWdoX3ByaW9yaXR5X2J0bi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBpZihsb3dfcHJpb3JpdHlfYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0ZWRcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93X3ByaW9yaXR5X2J0bi5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgaGlnaF9wcmlvcml0eV9idG4uc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJyZ2IoMjQ0LCAyNDgsIDI1NSlcIjtcclxuICAgICAgICAgICAgICAgIGhpZ2hfcHJpb3JpdHlfYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0ZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHRvZG8ucHJpb3JpdHkgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYodG9kby5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2hfcHJpb3JpdHlfYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0b2RvLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsb3dfcHJpb3JpdHlfYnRuLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b2RvX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybVwiKTtcclxuICAgICAgICB0b2RvX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgICAgICBtb2RhbEFjdGlvbih0b2RvX2Zvcm0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxubGV0IG5ld190b2RvX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnV0dG9uXCIpO1xyXG5jcmVhdGVUb0RvTW9kYWwoXCJhZGRcIiwgbmV3X3RvZG9fYnRuKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRvRG9Nb2RhbCB9IiwibGV0IGNyZWF0ZVZpZXdUb0RvTW9kYWwgPSB0b2RvID0+IHtcclxuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpOyAgXHJcbiAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LXRvZG8tY29udGFpbmVyXCI+IFxyXG4gICAgICAgICAgICA8cD4ke3RvZG8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5vdGUtZGVsZXRlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjeDI5MkI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgYFxyXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3LXRvZG8tY29udGFpbmVyIGJ1dHRvblwiKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVWaWV3VG9Eb01vZGFsIH0iLCJsZXQgY3JlYXRlTm90ZSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU5vdGUgfTsiLCJsZXQgY3JlYXRlUHJvamVjdCA9IChpZCwgdGl0bGUpID0+IHtcclxuICAgIGxldCB0b2RvcyA9IFtdO1xyXG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCB0b2RvcyB9O1xyXG59XHJcblxyXG5sZXQgYWRkVG9EbyA9IChwcm9qZWN0LCB0b2RvKSA9PiB7XHJcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XHJcbn1cclxuXHJcbmxldCBkZWxldGVUb0RvID0gKHByb2plY3QsIHRvZG8pID0+IHtcclxuICAgIGxldCBpbmRleCA9IHByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgIGlmKGluZGV4ID4gLTEpIHsgLy8gZm91bmQgdG9kb1xyXG4gICAgICAgIHByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGFkZFRvRG8sIGRlbGV0ZVRvRG8gfSIsImxldCBjcmVhdGVUb0RvID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SWQpID0+IHtcclxuICAgIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0SWQsIGNvbXBsZXRlZCB9O1xyXG59XHJcblxyXG5sZXQgY2hhbmdlUHJpb3JpdHkgPSAodG9kbywgdmFsdWUpID0+IHtcclxuICAgIGxldCB2YWxpZF9wcmlvcml0aWVzID0gW1wibm9uZVwiLCBcImxvd1wiLCBcImhpZ2hcIl07XHJcbiAgICBpZih2YWxpZF9wcmlvcml0aWVzLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5WQUxJRCBQUklPUklUWSBWQUxVRVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVG9EbywgY2hhbmdlUHJpb3JpdHkgfTsiLCJpbXBvcnQgeyBwb3B1bGF0ZSB9IGZyb20gXCIuL2NvbnRlbnQvcHJvamVjdENvbnRlbnRcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVOb3RlcyB9IGZyb20gXCIuL2NvbnRlbnQvbm90ZUNvbnRlbnRcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9zdG9yYWdlL3Byb2plY3RTdG9yYWdlXCI7XHJcblxyXG5sZXQgYWRkRXZlbnRMaXN0ZW5lcnNGb3JTdHlsaW5nID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcbiAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2lkZWJhci1vcHRpb25bdmFsdWU9XCIke3ZhbHVlfVwiXSBidXR0b25gKTtcclxuICAgIFxyXG4gICAgLy8gQWRkcyBcIi8vXCIgd2hlbiBzaWRlYmFyIG9wdGlvbnMgYXJlIGhvdmVyZWQgb3ZlclxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICBpZihlbGVtZW50LmdldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBcIi8vIFwiICsgY2hpbGQudGV4dENvbnRlbnQ7IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gUmVtb3ZlcyBcIi8vXCIgd2hlbiBzaWRlYmFyIG9wdGlvbnMgYXJlIGhvdmVyZWQgb2ZmXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnQuc2xpY2UoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZCBzeW1ib2wgZnJvbSBhbGwgb3RoZXIgb3B0aW9uc1xyXG4gICAgICAgIGxldCBzaWRlYmFyX29wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItb3B0aW9uXCIpO1xyXG4gICAgICAgIGZvcihsZXQgb3B0IG9mIHNpZGViYXJfb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IG9wdC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdF9jaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLW9wdGlvblt2YWx1ZT1cIiR7dmFsfVwiXSBidXR0b25gKTtcclxuICAgICAgICAgICAgb3B0X2NoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgICAgICAgICAgaWYob3B0X2NoaWxkLnRleHRDb250ZW50WzBdID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgb3B0X2NoaWxkLnRleHRDb250ZW50ID0gb3B0X2NoaWxkLnRleHRDb250ZW50LnNsaWNlKDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgICAgICBjaGlsZC50ZXh0Q29udGVudCA9IFwiLy8gXCIgKyBjaGlsZC50ZXh0Q29udGVudDsgXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwcm9qZWN0IGxpc3RcclxubGV0IHBvcHVsYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XHJcbiAgICBwcm9qZWN0X2xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykgeyAgICAgXHJcbiAgICAgICAgbGV0IHByb2plY3RfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcm9qZWN0X2J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RfYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuXHJcbiAgICAgICAgbGV0IG5ld19saXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbmV3X2xpc3RfaXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1vcHRpb25cIiwgXCJwcm9qZWN0LW9wdGlvblwiKTtcclxuICAgICAgICBuZXdfbGlzdF9pdGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3QuaWQpIDtcclxuICAgICAgICBuZXdfbGlzdF9pdGVtLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgbmV3X2xpc3RfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcG9wdWxhdGUobmV3X2xpc3RfaXRlbS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIG5ld19saXN0X2l0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdF9idG4pO1xyXG4gICAgICAgIHByb2plY3RfbGlzdC5hcHBlbmRDaGlsZChuZXdfbGlzdF9pdGVtKTtcclxuICAgICAgICBcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyc0ZvclN0eWxpbmcobmV3X2xpc3RfaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIExvYWQgY29udGVudCBpbnRvIG1haW4tY29udGVudCBkaXYgd2hlbiBjbGlja2VkXHJcbmxldCBhZGRDb250ZW50TG9hZEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IGhvbWVfb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItb3B0aW9uW3ZhbHVlPVwiaG9tZVwiXWApO1xyXG4gICAgaG9tZV9vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBvcHVsYXRlKFwiaG9tZVwiKSk7XHJcblxyXG4gICAgbGV0IHRvZGF5X29wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLW9wdGlvblt2YWx1ZT1cInRvZGF5XCJdYCk7XHJcbiAgICB0b2RheV9vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBvcHVsYXRlKFwidG9kYXlcIikpO1xyXG4gICAgXHJcbiAgICBsZXQgbGF0ZXJfb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNpZGViYXItb3B0aW9uW3ZhbHVlPVwibGF0ZXJcIl1gKTtcclxuICAgIGxhdGVyX29wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcG9wdWxhdGUoXCJsYXRlclwiKSk7XHJcblxyXG4gICAgbGV0IG5vdGVzX29wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaWRlYmFyLW9wdGlvblt2YWx1ZT1cIm5vdGVzXCJdYCk7XHJcbiAgICBub3Rlc19vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVsYXRlTm90ZXMpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBnZXRDdXJyZW50bHlTZWxlY3RlZCA9ICgpID0+IHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLW9wdGlvblwiKTtcclxuICAgIGZvcihsZXQgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb24uZ2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc2lkZWJhcl9vcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLW9wdGlvblwiKTtcclxuZm9yKGxldCBvcHRpb24gb2Ygc2lkZWJhcl9vcHRpb25zKSB7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyc0ZvclN0eWxpbmcob3B0aW9uKTtcclxufVxyXG5cclxubGV0IGluaXRpYXRlID0gKCkgPT4ge1xyXG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xyXG4gICAgYWRkQ29udGVudExvYWRGdW5jdGlvbigpO1xyXG5cclxuICAgIC8vIEhvbWUgYXV0b21hdGljYWxseSBzZWxlY3RlZCB1cG9uIGxvYWRpbmdcclxuICAgIGxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLW9wdGlvblt2YWx1ZT0naG9tZSddXCIpO1xyXG4gICAgaG9tZS5jbGljaygpO1xyXG59XHJcblxyXG5pbml0aWF0ZSgpO1xyXG5cclxuZXhwb3J0IHsgcG9wdWxhdGVQcm9qZWN0TGlzdCwgZ2V0Q3VycmVudGx5U2VsZWN0ZWQsIGluaXRpYXRlIH07IiwiaW1wb3J0IHsgZ2V0QnlJZCwgbW9kaWZ5TmFtZSB9IGZyb20gXCIuL3N0b3JhZ2VIZWxwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTm90ZSB9IGZyb20gXCIuLi9vYmplY3RzL25vdGVcIjtcclxuXHJcbmxldCBub3RlcyA9IFtdO1xyXG5cclxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3Rlc1wiKSAhPT0gbnVsbCkge1xyXG4gICAgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikpO1xyXG59XHJcblxyXG5sZXQgbWFrZU5ld05vdGUgPSBlbGVtZW50ID0+IHtcclxuICAgIGxldCB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGV4dHJhY3RGcm9tTm90ZUZvcm0oZWxlbWVudCk7XHJcbiAgICBcclxuICAgIGxldCBuZXdfbm90ZSA9IGNyZWF0ZU5vdGUoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICBub3Rlcy5wdXNoKG5ld19ub3RlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkobm90ZXMpKVxyXG59XHJcblxyXG5sZXQgZXh0cmFjdEZyb21Ob3RlRm9ybSA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHRpdGxlID0gU3RyaW5nKGVsZW1lbnQuY2hpbGRyZW5bMF0udmFsdWUpO1xyXG4gICAgdGl0bGUgPSB0aXRsZS50cmltKCk7XHJcbiAgICBsZXQgaWQgPSBtb2RpZnlOYW1lKG5vdGVzLCB0aXRsZSk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZWxlbWVudC5jaGlsZHJlblsxXS52YWx1ZTtcclxuXHJcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uIH1cclxufVxyXG5cclxubGV0IHVwZGF0ZU5vdGUgPSBlbGVtZW50ID0+IHtcclxuICAgIGxldCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gZXh0cmFjdEZyb21Ob3RlRm9ybShlbGVtZW50KTtcclxuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICBsZXQgbm90ZSA9IGdldEJ5SWQobm90ZXMsIGlkKTtcclxuICAgIG5vdGUudGl0bGUgPSB0aXRsZTtcclxuICAgIG5vdGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxubGV0IGRlbGV0ZU5vdGUgPSBub3RlID0+IHtcclxuICAgIGxldCBpbmRleCA9IG5vdGVzLmluZGV4T2Yobm90ZSk7XHJcbiAgICBub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3Rlc1wiLCBKU09OLnN0cmluZ2lmeShub3RlcykpO1xyXG59XHJcblxyXG5leHBvcnQgeyBtYWtlTmV3Tm90ZSwgZGVsZXRlTm90ZSwgdXBkYXRlTm90ZSwgbm90ZXMgfSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi4vb2JqZWN0cy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGdldEJ5SWQsIG1vZGlmeU5hbWUgfSBmcm9tIFwiLi9zdG9yYWdlSGVscGVyXCI7XHJcblxyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCBob21lX3Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiaG9tZVwiKTtcclxuXHJcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZVwiKSAhPT0gbnVsbCkge1xyXG4gICAgaG9tZV9wcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVcIikpO1xyXG59XHJcblxyXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpICE9PSBudWxsKSB7XHJcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbn1cclxuXHJcbmxldCBtYWtlTmV3UHJvamVjdCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHsgaWQsIHRpdGxlIH0gPSBleHRyYWN0RnJvbVByb2plY3RGb3JtKGVsZW1lbnQpO1xyXG4gICAgbGV0IG5ld19wcm9qZWN0ID0gY3JlYXRlUHJvamVjdChpZCwgdGl0bGUpO1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdfcHJvamVjdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmxldCBleHRyYWN0RnJvbVByb2plY3RGb3JtID0gZWxlbWVudCA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBTdHJpbmcoZWxlbWVudC5jaGlsZHJlblswXS52YWx1ZSk7XHJcbiAgICB0aXRsZSA9IHRpdGxlLnRyaW0oKTtcclxuICAgIGxldCBpZCA9IG1vZGlmeU5hbWUocHJvamVjdHMsIHRpdGxlKTtcclxuICAgIHJldHVybiB7IGlkLCB0aXRsZSB9XHJcbn1cclxuXHJcbmxldCB1cGRhdGVQcm9qZWN0ID0gZWxlbWVudCA9PiB7XHJcbiAgICBsZXQgeyB0aXRsZSB9ID0gZXh0cmFjdEZyb21Qcm9qZWN0Rm9ybShlbGVtZW50KTtcclxuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICBsZXQgcHJvamVjdCA9IGdldEJ5SWQocHJvamVjdHMsIGlkKTtcclxuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxufVxyXG5cclxubGV0IGRlbGV0ZVByb2plY3QgPSBwcm9qZWN0SWQgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xyXG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmxldCBnZXRQcm9qZWN0QnlJZCA9IGlkID0+IHtcclxuICAgIGZvcihsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIGlmKHByb2plY3QuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGRlbGV0ZVRvRG8gPSAodG9kbykgPT4ge1xyXG4gICAgbGV0IHByb2plY3RfaWQgPSB0b2RvLnByb2plY3RJZDsgXHJcbiAgICBpZihwcm9qZWN0X2lkID09PSBcImhvbWVcIikge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGhvbWVfcHJvamVjdC50b2Rvcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgIGhvbWVfcHJvamVjdC50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaG9tZVwiLCBKU09OLnN0cmluZ2lmeShob21lX3Byb2plY3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0X2lkKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgcHJvamVjdC50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGdldFRvRG9Gcm9tUHJvamVjdCA9IChwcm9qZWN0LCB0b2RvSWQpID0+IHtcclxuICAgIGZvcihsZXQgdG9kbyBvZiBwcm9qZWN0LnRvZG9zKSB7XHJcbiAgICAgICAgaWYodG9kby5pZCA9PT0gdG9kb0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuXHJcbmxldCB1cGRhdGVQcm9qZWN0VG9kb3MgPSAocHJvamVjdElkKSA9PiB7XHJcbiAgICBpZihwcm9qZWN0SWQgPT09IFwiaG9tZVwiKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob21lXCIsIEpTT04uc3RyaW5naWZ5KGhvbWVfcHJvamVjdCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1ha2VOZXdQcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBkZWxldGVUb0RvLCB1cGRhdGVQcm9qZWN0VG9kb3MsIGdldFByb2plY3RCeUlkLCBnZXRUb0RvRnJvbVByb2plY3QsIHByb2plY3RzLCBob21lX3Byb2plY3QgfSIsImxldCBnZXRCeUlkID0gKGFyciwgaWQpID0+IHtcclxuICAgIGZvcihsZXQgb2JqIG9mIGFycikge1xyXG4gICAgICAgIGlmKG9iai5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbW9kaWZ5TmFtZSA9IChhcnIsIG5hbWUpID0+IHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihhcnJbaV0uaWQgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IGFycl9tb2RpZmllZCA9IGFyci5zbGljZShpKzEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5TmFtZShhcnJfbW9kaWZpZWQsIG5hbWUgKyBcIi0wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYW1lO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRCeUlkLCBtb2RpZnlOYW1lIH0iLCJpbXBvcnQgeyBnZXRCeUlkLCBtb2RpZnlOYW1lIH0gZnJvbSBcIi4vc3RvcmFnZUhlbHBlclwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgaG9tZV9wcm9qZWN0LCBnZXRUb0RvRnJvbVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0U3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb0RvIH0gZnJvbSBcIi4uL29iamVjdHMvdG9kb1wiO1xyXG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4uL29iamVjdHMvcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZCB9IGZyb20gXCIuLi9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcIi4uL2NvbnRlbnQvcHJvamVjdENvbnRlbnRcIjtcclxuXHJcbmxldCBtYWtlTmV3VG9EbyA9IGVsZW1lbnQgPT4ge1xyXG4gICAgbGV0IHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhcmdldFByb2plY3QgfSA9IGV4dHJhY3RGcm9tVG9Eb0Zvcm0oZWxlbWVudCk7XHJcbiAgICB0YXJnZXRQcm9qZWN0ID0gdGFyZ2V0UHJvamVjdCA9PT0gXCJcIiA/IFwiaG9tZVwiIDogdGFyZ2V0UHJvamVjdDtcclxuICAgIGxldCBuZXdfdG9fZG8gPSBjcmVhdGVUb0RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0YXJnZXRQcm9qZWN0LmlkKTtcclxuXHJcbiAgICBhZGRUb0RvKHRhcmdldFByb2plY3QsIG5ld190b19kbyk7XHJcbiAgICBpZih0YXJnZXRQcm9qZWN0LmlkID09PSBcImhvbWVcIikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaG9tZVwiLCBKU09OLnN0cmluZ2lmeShob21lX3Byb2plY3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZnJlc2ggY29udGVudHNcclxuICAgIGxldCBzZWxlY3RlZCA9IGdldEN1cnJlbnRseVNlbGVjdGVkKCk7XHJcbiAgICBwb3B1bGF0ZShzZWxlY3RlZCk7XHJcbn1cclxuXHJcbmxldCBleHRyYWN0RnJvbVRvRG9Gb3JtID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGxldCB0aXRsZSA9IFN0cmluZyhlbGVtZW50LmNoaWxkcmVuWzBdLnZhbHVlKTtcclxuICAgIHRpdGxlID0gdGl0bGUudHJpbSgpO1xyXG4gICAgXHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBlbGVtZW50LmNoaWxkcmVuWzFdLnZhbHVlO1xyXG4gICAgbGV0IGR1ZURhdGUgPSBlbGVtZW50LmNoaWxkcmVuWzJdLnZhbHVlO1xyXG4gICAgXHJcbiAgICBsZXQgcHJpb3JpdHlfZGl2ID0gZWxlbWVudC5jaGlsZHJlblszXTtcclxuICAgIGxldCBsb3dfcHJpb3JpdHlfYnRuID0gcHJpb3JpdHlfZGl2LmNoaWxkcmVuWzBdO1xyXG4gICAgbGV0IGhpZ2hfcHJpb3JpdHlfYnRuID0gcHJpb3JpdHlfZGl2LmNoaWxkcmVuWzFdO1xyXG4gICAgbGV0IHByaW9yaXR5ID0gXCJcIjtcclxuXHJcbiAgICBpZihsb3dfcHJpb3JpdHlfYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0ZWRcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgcHJpb3JpdHkgPSBcImxvd1wiO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYoaGlnaF9wcmlvcml0eV9idG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3RlZFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBwcmlvcml0eSA9IFwiaGlnaFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcHJpb3JpdHkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaG9vc2Ugd2hpY2ggcHJvamVjdCB0byBhZGQgdG9kbyB0byBkZXBlbmRpbmcgb24gd2hpY2ggb3B0aW9uIGluIHRoZSBzaWRlYmFyIGlzIHNlbGVjdGVkXHJcbiAgICBsZXQgdGFyZ2V0UHJvamVjdCA9IGNob29zZVByb2plY3QoKTtcclxuXHJcbiAgICBsZXQgaWQgPSBtb2RpZnlOYW1lKHRhcmdldFByb2plY3QudG9kb3MsIHRpdGxlKTtcclxuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0YXJnZXRQcm9qZWN0IH1cclxufVxyXG5cclxubGV0IHVwZGF0ZVRvRG8gPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFyZ2V0UHJvamVjdCB9ID0gZXh0cmFjdEZyb21Ub0RvRm9ybShlbGVtZW50KTtcclxuICAgIGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgbGV0IHRvZG8gPSBnZXRUb0RvRnJvbVByb2plY3QodGFyZ2V0UHJvamVjdCwgaWQpO1xyXG4gICAgdG9kby50aXRsZSA9IHRpdGxlO1xyXG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuXHJcbiAgICAvLyBSZWZyZXNoIGNvbnRlbnRzXHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBnZXRDdXJyZW50bHlTZWxlY3RlZCgpO1xyXG4gICAgcG9wdWxhdGUoc2VsZWN0ZWQpO1xyXG59XHJcblxyXG5sZXQgcmVtb3ZlVG9EbyA9IChwcm9qZWN0SWQsIHRvZG9JZCkgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSBnZXRCeUlkKHByb2plY3RzLCBwcm9qZWN0X2lkKTtcclxuICAgIGxldCB0b2RvID0gZ2V0VG9Ebyhwcm9qZWN0SWQsIHRvZG9JZCk7XHJcbiAgICBkZWxldGVUb0RvKHByb2plY3QsIHRvZG8pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hpY2ggcHJvamVjdCBpcyBzZWxlY3RlZCBvbiB0aGUgc2lkZWJhciwgd2hpY2ggdGhlIHRvZG8gd2lsbCBiZSBhZGRlZCB0b1xyXG5sZXQgY2hvb3NlUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0X29wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qtb3B0aW9uXCIpO1xyXG4gICAgZm9yKGxldCBwcm9qZWN0X29wdGlvbiBvZiBwcm9qZWN0X29wdGlvbnMpIHtcclxuICAgICAgICBpZihwcm9qZWN0X29wdGlvbi5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNob3Nlbl9wcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKHggPT4geC50aXRsZSA9PT0gcHJvamVjdF9vcHRpb24uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpWzBdXHJcbiAgICAgICAgICAgIHJldHVybiBjaG9zZW5fcHJvamVjdDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhvbWVfcHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IHsgbWFrZU5ld1RvRG8sIHVwZGF0ZVRvRG8sIHJlbW92ZVRvRG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XHJcblxyXG5yZXF1aXJlKFwiLi9zaWRlYmFyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9oaWRkZW5NZW51LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9tb2RhbC9hZGROb3RlTW9kYWwuanNcIik7XHJcbnJlcXVpcmUoXCIuL21vZGFsL2FkZFByb2plY3RNb2RhbC5qc1wiKTtcclxucmVxdWlyZShcIi4vbW9kYWwvdG9Eb01vZGFsLmpzXCIpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9