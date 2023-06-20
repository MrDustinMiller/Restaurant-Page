/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
 --main-font: 'Pacifico';
}


body {
    margin: 0;
    padding: 0;
    width: 100%; 
    height: 100%;
    box-sizing: border-box;
    background-position: center;
    background-size:cover; 
    background-repeat: no-repeat; 
    font-family: var(--main-font);
}

.html {
    height: 100%;
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.header-title {
    font-weight: bold;
    font-size: 3rem;
    color:#548e9d;
    margin-left: 1rem;
}

.nav-div{  
    display: flex;
    justify-content: center; 
    gap: 1em;
    margin-right: 1rem;
}

.nav-div > button {
    cursor: pointer;
    background: none;
    font-family: var(--main-font);
    border: none;
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    transition: 0.2s all;
}

.nav-div > button:active {
    transform: scale(0.95);
}

.nav-div > button:hover {
    color: rgba(0, 0, 0, 0.626);

}


.home-nav-content{ 
    display: flex;
    align-items: center;
    height: 50vh;
    width: 100%;
    background-position: center;
}

.home-text{
    background-color: rgb(0, 0, 0,0.3);
    height: 30vh;
    font-size: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 8px ;
    color: white;
}

.menu-images{
    background-repeat: no-repeat;
    background-size: contain;
    padding: 5rem;
    text-align: right;
  }


.menu {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
}

.contact-form{
    width: 50%;
    opacity: 90%;
    border-radius: 8px;
}

.contact-message{
    height: 30vh;
    width: 50%;
    resize: none;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.buttonDiv {
    display: flex;
    gap: 2rem;
}

.contact-nav-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

input, textarea {
    border: 1.5px solid black;
}

input[id~='email'] {
    margin-right: 1em;
}

label {
    margin-right: 1rem;
}

fieldset {
    border: none;
}

.form-left {
    display: flex;
    justify-content: center;
}

.dialog-btn {
    align-self: center;
    height: 10vh;
    font-family: var(--main-font);
    width: 30%;
    border-radius: 8px;
    background-color: rgb(0, 0, 0, 0.7);
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-4;
    animation-timing-function: ease;
}

.confirm-btn, .cancel-btn{
    height: 5vh;
    /* width: 5vw; */
    background-color: #e0c4c8;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.2s all;
}

.confirm-btn, .cancel-btn > .confirm-btn:active, .cancel-btn:active {
    transform: scale(0.95);
}

.menu-nav-content {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 70vh; */
}

.food-details {
    /* margin-right: 3rem; */
}

@keyframes bounce-4 {
    0%   { transform: scale(1,1)    translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1) translateY(-100px); }
    50%  { transform: scale(1,1)    translateY(0); }
    100% { transform: scale(1,1)    translateY(0); }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;CACC,uBAAuB;AACxB;;;AAGA;IACI,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;IACrB,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;;AAE/B;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,aAAa;IACb,iBAAiB;EACnB;;;AAGF;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,6BAA6B;IAC7B,UAAU;IACV,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,mCAAmC;IACnC,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,OAAO,sCAAsC,EAAE;IAC/C,OAAO,sCAAsC,EAAE;IAC/C,OAAO,2CAA2C,EAAE;IACpD,OAAO,sCAAsC,EAAE;IAC/C,OAAO,sCAAsC,EAAE;AACnD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');\n:root {\n --main-font: 'Pacifico';\n}\n\n\nbody {\n    margin: 0;\n    padding: 0;\n    width: 100%; \n    height: 100%;\n    box-sizing: border-box;\n    background-position: center;\n    background-size:cover; \n    background-repeat: no-repeat; \n    font-family: var(--main-font);\n}\n\n.html {\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header-title {\n    font-weight: bold;\n    font-size: 3rem;\n    color:#548e9d;\n    margin-left: 1rem;\n}\n\n.nav-div{  \n    display: flex;\n    justify-content: center; \n    gap: 1em;\n    margin-right: 1rem;\n}\n\n.nav-div > button {\n    cursor: pointer;\n    background: none;\n    font-family: var(--main-font);\n    border: none;\n    color: rgb(0, 0, 0);\n    font-size: 1.5rem;\n    transition: 0.2s all;\n}\n\n.nav-div > button:active {\n    transform: scale(0.95);\n}\n\n.nav-div > button:hover {\n    color: rgba(0, 0, 0, 0.626);\n\n}\n\n\n.home-nav-content{ \n    display: flex;\n    align-items: center;\n    height: 50vh;\n    width: 100%;\n    background-position: center;\n}\n\n.home-text{\n    background-color: rgb(0, 0, 0,0.3);\n    height: 30vh;\n    font-size: 3rem;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    border-radius: 8px ;\n    color: white;\n}\n\n.menu-images{\n    background-repeat: no-repeat;\n    background-size: contain;\n    padding: 5rem;\n    text-align: right;\n  }\n\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.25rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.contact-form{\n    width: 50%;\n    opacity: 90%;\n    border-radius: 8px;\n}\n\n.contact-message{\n    height: 30vh;\n    width: 50%;\n    resize: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.buttonDiv {\n    display: flex;\n    gap: 2rem;\n}\n\n.contact-nav-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80vh;\n}\n\ninput, textarea {\n    border: 1.5px solid black;\n}\n\ninput[id~='email'] {\n    margin-right: 1em;\n}\n\nlabel {\n    margin-right: 1rem;\n}\n\nfieldset {\n    border: none;\n}\n\n.form-left {\n    display: flex;\n    justify-content: center;\n}\n\n.dialog-btn {\n    align-self: center;\n    height: 10vh;\n    font-family: var(--main-font);\n    width: 30%;\n    border-radius: 8px;\n    background-color: rgb(0, 0, 0, 0.7);\n    color: white;\n    cursor: pointer;\n    font-size: 1.5rem;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-name: bounce-4;\n    animation-timing-function: ease;\n}\n\n.confirm-btn, .cancel-btn{\n    height: 5vh;\n    /* width: 5vw; */\n    background-color: #e0c4c8;\n    border: 2px solid black;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: 0.2s all;\n}\n\n.confirm-btn, .cancel-btn > .confirm-btn:active, .cancel-btn:active {\n    transform: scale(0.95);\n}\n\n.menu-nav-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* height: 70vh; */\n}\n\n.food-details {\n    /* margin-right: 3rem; */\n}\n\n@keyframes bounce-4 {\n    0%   { transform: scale(1,1)    translateY(0); }\n    10%  { transform: scale(1.1,.9) translateY(0); }\n    30%  { transform: scale(.9,1.1) translateY(-100px); }\n    50%  { transform: scale(1,1)    translateY(0); }\n    100% { transform: scale(1,1)    translateY(0); }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeContactPage)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _images_b_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/b.jpeg */ "./src/images/b.jpeg");



function createForm(dialog) {
  const form = document.createElement('form');
  const leftFieldset = document.createElement('fieldset');
  leftFieldset.classList.add('form-left');
  form.appendChild(leftFieldset);
  const email = document.createElement('input');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  email.setAttribute('id', 'email');
  email.setAttribute('for', 'email');
  leftFieldset.appendChild(emailLabel);
  leftFieldset.appendChild(email);

  const name = document.createElement('input');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  name.setAttribute('id', 'name');
  name.setAttribute('for', 'name');
  leftFieldset.appendChild(nameLabel);
  leftFieldset.appendChild(name);

  const message = document.createElement('textarea');
  message.classList.add('contact-message');
  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message:';
  message.setAttribute('id', 'message');
  message.setAttribute('for', 'message');
  form.appendChild(messageLabel);
  form.appendChild(message);

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('buttonDiv');
  form.appendChild(buttonDiv);
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('formmethod', 'dialog');

  const confirmBtn = document.createElement('button');
  confirmBtn.classList.add('confirm-btn');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.setAttribute('value', 'default');
  buttonDiv.appendChild(confirmBtn);
  buttonDiv.appendChild(cancelBtn);
  dialog.appendChild(form);
}

function createFormDisplayButton(dialog, contactDiv) {
  const btn = document.createElement('button');
  btn.classList.add('dialog-btn');
  btn.textContent = "Let's Talk";
  contactDiv.appendChild(btn);

  btn.addEventListener('click', () => {
    dialog.showModal();
    contactDiv.removeChild(btn);
  });
  dialog.addEventListener('close', () => {
    contactDiv.appendChild(btn);
  });

  createForm(dialog);
}

function createContactDiv() {
  document.body.style.backgroundImage = `url(${_images_b_jpeg__WEBPACK_IMPORTED_MODULE_1__})`;
  const content = document.querySelector('.content');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-nav-content');
  content.appendChild(contactDiv);
  const dialog = document.createElement('dialog');
  dialog.classList.add('contact-form');
  contactDiv.appendChild(dialog);
  createFormDisplayButton(dialog, contactDiv);
}

function MakeContactPage() {
  const check = (0,_displayController__WEBPACK_IMPORTED_MODULE_0__["default"])('contact-nav-content');

  // if false, doesnt exist so make contact-content section
  if (check === false) {
    createContactDiv();
  }
}


/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkForAndRemoveMainContentChild() {
  const content = document.querySelector('.content');

  if (content.hasChildNodes()) {
    // if mainContent has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

function checkIfNavItemIsActivelyDisplayed(navItemContentClass) {
  const existingContentDiv = document.querySelector(`.${navItemContentClass}`);
  if (existingContentDiv) return true;

  // if doesnt exist, remove current content on screen for new content coming in
  checkForAndRemoveMainContentChild();
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkIfNavItemIsActivelyDisplayed);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _images_b_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/b.jpeg */ "./src/images/b.jpeg");



function createHome() {
  const content = document.querySelector('.content');
  const check = (0,_displayController__WEBPACK_IMPORTED_MODULE_0__["default"])('home-nav-content');

  // if false doesnt exist so make home-content section
  if (check === false) {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-nav-content');
    content.appendChild(homeDiv);
    document.body.style.backgroundImage = `url(${_images_b_jpeg__WEBPACK_IMPORTED_MODULE_1__})`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _images_menu_steak_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/steak.png */ "./src/images/menu/steak.png");
/* harmony import */ var _images_menu_bread_pudding_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/bread-pudding.png */ "./src/images/menu/bread-pudding.png");
/* harmony import */ var _images_menu_cheeseburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/cheeseburger.png */ "./src/images/menu/cheeseburger.png");
/* harmony import */ var _images_menu_pizza_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/pizza.png */ "./src/images/menu/pizza.png");
/* harmony import */ var _images_menu_shrimp_grits_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu/shrimp-grits.png */ "./src/images/menu/shrimp-grits.png");
/* harmony import */ var _images_menu_cheesecake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu/cheesecake.png */ "./src/images/menu/cheesecake.png");
/* harmony import */ var _images_b_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/b.jpeg */ "./src/images/b.jpeg");









function loadMenu() {
  const menuItems = [
    {
      image: _images_menu_steak_png__WEBPACK_IMPORTED_MODULE_1__,
      title: 'Steak',
      description: 'Juicy, tender, grilled delight for meat lovers.',
    },
    {
      image: _images_menu_bread_pudding_png__WEBPACK_IMPORTED_MODULE_2__,
      title: 'Bread Pudding',
      description:
        'Sweet, creamy, and comforting dessert with caramelized edges',
    },
    {
      image: _images_menu_cheeseburger_png__WEBPACK_IMPORTED_MODULE_3__,
      title: 'Cheeseburger',
      description: 'Classic combo of juicy beef and melted cheese.',
    },
    {
      image: _images_menu_shrimp_grits_png__WEBPACK_IMPORTED_MODULE_5__,
      title: 'Shrimp and Grits',
      description: 'Savory blend of succulent shrimp and creamy grits.',
    },
    {
      image: _images_menu_pizza_png__WEBPACK_IMPORTED_MODULE_4__,
      title: 'Pizza',
      description:
        'Deliciously cheesy, saucy, and endlessly customizable delight.',
    },
    {
      image: _images_menu_cheesecake_png__WEBPACK_IMPORTED_MODULE_6__,
      title: 'Cheesecake',
      description: 'Rich, creamy, and indulgent dessert with smooth texture.',
    },
  ];

  const check = (0,_displayController__WEBPACK_IMPORTED_MODULE_0__["default"])('menu-nav-content');
  document.body.style.backgroundImage = `url(${_images_b_jpeg__WEBPACK_IMPORTED_MODULE_7__})`;

  // if false doesnt exist so make menu-content section
  if (check === false) {
    const content = document.querySelector('.content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-nav-content');
    content.appendChild(menuDiv);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.style.backgroundColor = 'rgba(19, 20, 20, 0.7)';
    menuDiv.appendChild(menu);

    for (let i = 0; i < menuItems.length; i += 1) {
      const imgdiv = document.createElement('div');
      imgdiv.classList.add('menu-images');
      imgdiv.style.backgroundImage = `url(${menuItems[i].image})`;
      const foodDetails = document.createElement('div');
      foodDetails.classList.add('food-details');

      const foodTitle = document.createElement('div');
      foodTitle.classList.add('food-title');
      foodTitle.textContent = `${menuItems[i].title}`;
      foodTitle.style.color = 'white';
      const foodDescription = document.createElement('div');
      foodDescription.classList.add('food-description');
      foodDescription.textContent = `${menuItems[i].description}`;
      foodDescription.style.color = 'white';
      menu.appendChild(imgdiv);
      menu.appendChild(foodDetails);
      foodDetails.appendChild(foodTitle);
      foodDetails.appendChild(foodDescription);
    }
  }
}


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function createHeader(htmlBody, navDiv) {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  htmlBody.appendChild(header);
  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'Breezy Bites';
  header.appendChild(headerTitle);
  header.appendChild(navDiv);
}

function addAllEventListeners(mainContent, ...elements) {
  const [{ homeNav, contactNav, menuNav }] = elements;

  homeNav.addEventListener('click', () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  contactNav.addEventListener('click', () => {
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  menuNav.addEventListener('click', () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
}

function createNav() {
  const htmlBody = document.querySelector('body');
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'content');
  const navDiv = document.createElement('div');
  navDiv.setAttribute('class', 'nav-div');
  const homeNav = document.createElement('button');
  homeNav.setAttribute('class', 'nav home-nav');
  homeNav.textContent = 'Home';
  const contactNav = document.createElement('button');
  contactNav.setAttribute('class', 'nav contact-nav');
  contactNav.textContent = 'Contact';
  const menuNav = document.createElement('button');
  menuNav.setAttribute('class', 'nav menu-nav');
  menuNav.textContent = 'Menu';
  navDiv.appendChild(homeNav);
  navDiv.appendChild(contactNav);
  navDiv.appendChild(menuNav);
  addAllEventListeners(mainContent, {
    menuNav,
    homeNav,
    contactNav,
  });
  createHeader(htmlBody, navDiv);
  htmlBody.appendChild(mainContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);


/***/ }),

/***/ "./src/images/b.jpeg":
/*!***************************!*\
  !*** ./src/images/b.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c829c6f3d3595481fcc.jpeg";

/***/ }),

/***/ "./src/images/menu/bread-pudding.png":
/*!*******************************************!*\
  !*** ./src/images/menu/bread-pudding.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b1da92f444583d03b6b.png";

/***/ }),

/***/ "./src/images/menu/cheeseburger.png":
/*!******************************************!*\
  !*** ./src/images/menu/cheeseburger.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b997fa23638351feab8.png";

/***/ }),

/***/ "./src/images/menu/cheesecake.png":
/*!****************************************!*\
  !*** ./src/images/menu/cheesecake.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3681fc2b8ac9d6b9039e.png";

/***/ }),

/***/ "./src/images/menu/pizza.png":
/*!***********************************!*\
  !*** ./src/images/menu/pizza.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e11c8379acddeb528bd.png";

/***/ }),

/***/ "./src/images/menu/shrimp-grits.png":
/*!******************************************!*\
  !*** ./src/images/menu/shrimp-grits.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec5d33fb05fa916e2f14.png";

/***/ }),

/***/ "./src/images/menu/steak.png":
/*!***********************************!*\
  !*** ./src/images/menu/steak.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95be6017861e228766d6.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNIO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQSxPQUFPLGdGQUFnRixZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHdHQUF3RyxTQUFTLDJCQUEyQixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixtQkFBbUIsbUJBQW1CLDZCQUE2QixrQ0FBa0MsNkJBQTZCLG9DQUFvQyxvQ0FBb0MsR0FBRyxXQUFXLG1CQUFtQixHQUFHLGFBQWEsb0JBQW9CLDZCQUE2QixxQ0FBcUMsMEJBQTBCLEdBQUcsbUJBQW1CLHdCQUF3QixzQkFBc0Isb0JBQW9CLHdCQUF3QixHQUFHLGVBQWUsb0JBQW9CLCtCQUErQixlQUFlLHlCQUF5QixHQUFHLHVCQUF1QixzQkFBc0IsdUJBQXVCLG9DQUFvQyxtQkFBbUIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsR0FBRyw4QkFBOEIsNkJBQTZCLEdBQUcsNkJBQTZCLGtDQUFrQyxLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLG1CQUFtQixrQkFBa0Isa0NBQWtDLEdBQUcsZUFBZSx5Q0FBeUMsbUJBQW1CLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQiwwQkFBMEIsbUJBQW1CLEdBQUcsaUJBQWlCLG1DQUFtQywrQkFBK0Isb0JBQW9CLHdCQUF3QixLQUFLLGFBQWEsb0JBQW9CLHNCQUFzQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLGtCQUFrQixpQkFBaUIsbUJBQW1CLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsaUJBQWlCLG1CQUFtQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsR0FBRywwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLEdBQUcscUJBQXFCLGdDQUFnQyxHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxXQUFXLHlCQUF5QixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsR0FBRyxpQkFBaUIseUJBQXlCLG1CQUFtQixvQ0FBb0MsaUJBQWlCLHlCQUF5QiwwQ0FBMEMsbUJBQW1CLHNCQUFzQix3QkFBd0IsNkJBQTZCLDBDQUEwQywrQkFBK0Isc0NBQXNDLEdBQUcsOEJBQThCLGtCQUFrQixxQkFBcUIsa0NBQWtDLDhCQUE4Qix5QkFBeUIsc0JBQXNCLHNCQUFzQiwyQkFBMkIsR0FBRyx5RUFBeUUsNkJBQTZCLEdBQUcsdUJBQXVCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHVCQUF1QixLQUFLLG1CQUFtQiw2QkFBNkIsS0FBSyx5QkFBeUIsYUFBYSx5Q0FBeUMsYUFBYSx5Q0FBeUMsYUFBYSw4Q0FBOEMsYUFBYSx5Q0FBeUMsYUFBYSx5Q0FBeUMsR0FBRyxxQkFBcUI7QUFDNXdLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDOU0xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4QztBQUNSOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsMkNBQU8sQ0FBQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixnQkFBZ0IsOERBQVc7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Qsb0JBQW9CO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlDQUFpQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCSDtBQUNSOztBQUV0QztBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFXOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDJDQUFPLENBQUM7QUFDekQ7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJvQjtBQUNHO0FBQ1U7QUFDSTtBQUNiO0FBQ007QUFDRztBQUNyQjs7QUFFdkI7QUFDZjtBQUNBO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSwyREFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhLDBEQUFpQjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSwwREFBVTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxtREFBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhLHdEQUFlO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsZ0JBQWdCLDhEQUFXO0FBQzNCLCtDQUErQywyQ0FBTyxDQUFDOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakY4QjtBQUNNO0FBQ047O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyw4QkFBOEI7O0FBRXpDO0FBQ0EsSUFBSSxpREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBLElBQUksb0RBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeER6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDSjs7QUFFOUIsb0RBQVM7QUFDVCxpREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuIC0tbWFpbi1mb250OiAnUGFjaWZpY28nO1xufVxuXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbn1cblxuLmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6IzU0OGU5ZDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm5hdi1kaXZ7ICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBnYXA6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5uYXYtZGl2ID4gYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLm5hdi1kaXYgPiBidXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4ubmF2LWRpdiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjYpO1xuXG59XG5cblxuLmhvbWUtbmF2LWNvbnRlbnR7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaG9tZS10ZXh0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuMyk7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnUtaW1hZ2Vze1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuXG4ubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxLjI1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWZvcm17XG4gICAgd2lkdGg6IDUwJTtcbiAgICBvcGFjaXR5OiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY29udGFjdC1tZXNzYWdle1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYnV0dG9uRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbn1cblxuLmNvbnRhY3QtbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbn1cblxuaW5wdXRbaWR+PSdlbWFpbCddIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxubGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmZvcm0tbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpYWxvZy1idG4ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2UtNDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuXG4uY29uZmlybS1idG4sIC5jYW5jZWwtYnRue1xuICAgIGhlaWdodDogNXZoO1xuICAgIC8qIHdpZHRoOiA1dnc7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzRjODtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLmNvbmZpcm0tYnRuLCAuY2FuY2VsLWJ0biA+IC5jb25maXJtLWJ0bjphY3RpdmUsIC5jYW5jZWwtYnRuOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuLm1lbnUtbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBoZWlnaHQ6IDcwdmg7ICovXG59XG5cbi5mb29kLWRldGFpbHMge1xuICAgIC8qIG1hcmdpbi1yaWdodDogM3JlbTsgKi9cbn1cblxuQGtleWZyYW1lcyBib3VuY2UtNCB7XG4gICAgMCUgICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICB0cmFuc2xhdGVZKDApOyB9XG4gICAgMTAlICB7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XG4gICAgMzAlICB7IHRyYW5zZm9ybTogc2NhbGUoLjksMS4xKSB0cmFuc2xhdGVZKC0xMDBweCk7IH1cbiAgICA1MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtDQUNDLHVCQUF1QjtBQUN4Qjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7O0FBRS9COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7O0FBR0Y7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLE9BQU8sc0NBQXNDLEVBQUU7SUFDL0MsT0FBTyxzQ0FBc0MsRUFBRTtJQUMvQyxPQUFPLDJDQUEyQyxFQUFFO0lBQ3BELE9BQU8sc0NBQXNDLEVBQUU7SUFDL0MsT0FBTyxzQ0FBc0MsRUFBRTtBQUNuRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuIC0tbWFpbi1mb250OiAnUGFjaWZpY28nO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbi5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IzU0OGU5ZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5uYXYtZGl2eyAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgZ2FwOiAxZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLm5hdi1kaXYgPiBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcXG59XFxuXFxuLm5hdi1kaXYgPiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLm5hdi1kaXYgPiBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyNik7XFxuXFxufVxcblxcblxcbi5ob21lLW5hdi1jb250ZW50eyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS10ZXh0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjMpO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudS1pbWFnZXN7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgcGFkZGluZzogNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB9XFxuXFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMS4yNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWZvcm17XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG9wYWNpdHk6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY29udGFjdC1tZXNzYWdle1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtbmF2LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5pbnB1dFtpZH49J2VtYWlsJ10ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybS1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2ctYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlLTQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxufVxcblxcbi5jb25maXJtLWJ0biwgLmNhbmNlbC1idG57XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICAvKiB3aWR0aDogNXZ3OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNGM4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XFxufVxcblxcbi5jb25maXJtLWJ0biwgLmNhbmNlbC1idG4gPiAuY29uZmlybS1idG46YWN0aXZlLCAuY2FuY2VsLWJ0bjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ubWVudS1uYXYtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBoZWlnaHQ6IDcwdmg7ICovXFxufVxcblxcbi5mb29kLWRldGFpbHMge1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDNyZW07ICovXFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlLTQge1xcbiAgICAwJSAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG4gICAgMTAlICB7IHRyYW5zZm9ybTogc2NhbGUoMS4xLC45KSB0cmFuc2xhdGVZKDApOyB9XFxuICAgIDMwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgdHJhbnNsYXRlWSgtMTAwcHgpOyB9XFxuICAgIDUwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgdHJhbnNsYXRlWSgwKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2FkQ29udGVudCBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyJztcbmltcG9ydCBiZ0ltYWdlIGZyb20gJy4vaW1hZ2VzL2IuanBlZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oZGlhbG9nKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGxlZnRGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGxlZnRGaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxlZnQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChsZWZ0RmllbGRzZXQpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsOic7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgbGVmdEZpZWxkc2V0LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICBsZWZ0RmllbGRzZXQuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICBuYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgbGVmdEZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gIGxlZnRGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW1lc3NhZ2UnKTtcbiAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gJ01lc3NhZ2U6JztcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkRpdicpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnZm9ybW1ldGhvZCcsICdkaWFsb2cnKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybS1idG4nKTtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQnKTtcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRGlzcGxheUJ1dHRvbihkaWFsb2csIGNvbnRhY3REaXYpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctYnRuJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiTGV0J3MgVGFsa1wiO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBjb250YWN0RGl2LnJlbW92ZUNoaWxkKGJ0bik7XG4gIH0pO1xuICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChidG4pO1xuICB9KTtcblxuICBjcmVhdGVGb3JtKGRpYWxvZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3REaXYoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JnSW1hZ2V9KWA7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1uYXYtY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gIGNyZWF0ZUZvcm1EaXNwbGF5QnV0dG9uKGRpYWxvZywgY29udGFjdERpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgY2hlY2sgPSBsb2FkQ29udGVudCgnY29udGFjdC1uYXYtY29udGVudCcpO1xuXG4gIC8vIGlmIGZhbHNlLCBkb2VzbnQgZXhpc3Qgc28gbWFrZSBjb250YWN0LWNvbnRlbnQgc2VjdGlvblxuICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgY3JlYXRlQ29udGFjdERpdigpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBjaGVja0ZvckFuZFJlbW92ZU1haW5Db250ZW50Q2hpbGQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vIGlmIG1haW5Db250ZW50IGhhcyBhIGNoaWxkLCByZXBsYWNlIHcvZW1wdHkgc3RyaW5nIHNvIHdlIGNhbiBzaG93IG5leHQgbmF2IGl0ZW1zIGNsaWNrZWQgY29udGVudFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0lmTmF2SXRlbUlzQWN0aXZlbHlEaXNwbGF5ZWQobmF2SXRlbUNvbnRlbnRDbGFzcykge1xuICBjb25zdCBleGlzdGluZ0NvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYXZJdGVtQ29udGVudENsYXNzfWApO1xuICBpZiAoZXhpc3RpbmdDb250ZW50RGl2KSByZXR1cm4gdHJ1ZTtcblxuICAvLyBpZiBkb2VzbnQgZXhpc3QsIHJlbW92ZSBjdXJyZW50IGNvbnRlbnQgb24gc2NyZWVuIGZvciBuZXcgY29udGVudCBjb21pbmcgaW5cbiAgY2hlY2tGb3JBbmRSZW1vdmVNYWluQ29udGVudENoaWxkKCk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tJZk5hdkl0ZW1Jc0FjdGl2ZWx5RGlzcGxheWVkO1xuIiwiaW1wb3J0IGxvYWRDb250ZW50IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IGJnSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYi5qcGVnJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGNoZWNrID0gbG9hZENvbnRlbnQoJ2hvbWUtbmF2LWNvbnRlbnQnKTtcblxuICAvLyBpZiBmYWxzZSBkb2VzbnQgZXhpc3Qgc28gbWFrZSBob21lLWNvbnRlbnQgc2VjdGlvblxuICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZS1uYXYtY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdJbWFnZX0pYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IGxvYWRDb250ZW50IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IHN0ZWFrSW1hZ2UgZnJvbSAnLi9pbWFnZXMvbWVudS9zdGVhay5wbmcnO1xuaW1wb3J0IHB1ZGRpbmdJbWFnZSBmcm9tICcuL2ltYWdlcy9tZW51L2JyZWFkLXB1ZGRpbmcucG5nJztcbmltcG9ydCBjaGVlc2VidXJnZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9tZW51L2NoZWVzZWJ1cmdlci5wbmcnO1xuaW1wb3J0IHNocmltcEltYWdlIGZyb20gJy4vaW1hZ2VzL21lbnUvcGl6emEucG5nJztcbmltcG9ydCBwaXp6YUltYWdlIGZyb20gJy4vaW1hZ2VzL21lbnUvc2hyaW1wLWdyaXRzLnBuZyc7XG5pbXBvcnQgY2hlZXNlY2FrZUltYWdlIGZyb20gJy4vaW1hZ2VzL21lbnUvY2hlZXNlY2FrZS5wbmcnO1xuaW1wb3J0IGJnSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYi5qcGVnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBpbWFnZTogc3RlYWtJbWFnZSxcbiAgICAgIHRpdGxlOiAnU3RlYWsnLFxuICAgICAgZGVzY3JpcHRpb246ICdKdWljeSwgdGVuZGVyLCBncmlsbGVkIGRlbGlnaHQgZm9yIG1lYXQgbG92ZXJzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogcHVkZGluZ0ltYWdlLFxuICAgICAgdGl0bGU6ICdCcmVhZCBQdWRkaW5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3dlZXQsIGNyZWFteSwgYW5kIGNvbWZvcnRpbmcgZGVzc2VydCB3aXRoIGNhcmFtZWxpemVkIGVkZ2VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBjaGVlc2VidXJnZXJJbWFnZSxcbiAgICAgIHRpdGxlOiAnQ2hlZXNlYnVyZ2VyJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3NpYyBjb21ibyBvZiBqdWljeSBiZWVmIGFuZCBtZWx0ZWQgY2hlZXNlLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogcGl6emFJbWFnZSxcbiAgICAgIHRpdGxlOiAnU2hyaW1wIGFuZCBHcml0cycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nhdm9yeSBibGVuZCBvZiBzdWNjdWxlbnQgc2hyaW1wIGFuZCBjcmVhbXkgZ3JpdHMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBzaHJpbXBJbWFnZSxcbiAgICAgIHRpdGxlOiAnUGl6emEnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZWxpY2lvdXNseSBjaGVlc3ksIHNhdWN5LCBhbmQgZW5kbGVzc2x5IGN1c3RvbWl6YWJsZSBkZWxpZ2h0LicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogY2hlZXNlY2FrZUltYWdlLFxuICAgICAgdGl0bGU6ICdDaGVlc2VjYWtlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmljaCwgY3JlYW15LCBhbmQgaW5kdWxnZW50IGRlc3NlcnQgd2l0aCBzbW9vdGggdGV4dHVyZS4nLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY2hlY2sgPSBsb2FkQ29udGVudCgnbWVudS1uYXYtY29udGVudCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltYWdlfSlgO1xuXG4gIC8vIGlmIGZhbHNlIGRvZXNudCBleGlzdCBzbyBtYWtlIG1lbnUtY29udGVudCBzZWN0aW9uXG4gIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LW5hdi1jb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDE5LCAyMCwgMjAsIDAuNyknO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW1nZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbWdkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZXMnKTtcbiAgICAgIGltZ2Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWVudUl0ZW1zW2ldLmltYWdlfSlgO1xuICAgICAgY29uc3QgZm9vZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvb2REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZGV0YWlscycpO1xuXG4gICAgICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvb2RUaXRsZS5jbGFzc0xpc3QuYWRkKCdmb29kLXRpdGxlJyk7XG4gICAgICBmb29kVGl0bGUudGV4dENvbnRlbnQgPSBgJHttZW51SXRlbXNbaV0udGl0bGV9YDtcbiAgICAgIGZvb2RUaXRsZS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvb2REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb29kLWRlc2NyaXB0aW9uJyk7XG4gICAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHttZW51SXRlbXNbaV0uZGVzY3JpcHRpb259YDtcbiAgICAgIGZvb2REZXNjcmlwdGlvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICBtZW51LmFwcGVuZENoaWxkKGltZ2Rpdik7XG4gICAgICBtZW51LmFwcGVuZENoaWxkKGZvb2REZXRhaWxzKTtcbiAgICAgIGZvb2REZXRhaWxzLmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gICAgICBmb29kRGV0YWlscy5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoaHRtbEJvZHksIG5hdkRpdikge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG4gIGh0bWxCb2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdCcmVlenkgQml0ZXMnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2RGl2KTtcbn1cblxuZnVuY3Rpb24gYWRkQWxsRXZlbnRMaXN0ZW5lcnMobWFpbkNvbnRlbnQsIC4uLmVsZW1lbnRzKSB7XG4gIGNvbnN0IFt7IGhvbWVOYXYsIGNvbnRhY3ROYXYsIG1lbnVOYXYgfV0gPSBlbGVtZW50cztcblxuICBob21lTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuICBjb250YWN0TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xuICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IGh0bWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1kaXYnKTtcbiAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lTmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2IGhvbWUtbmF2Jyk7XG4gIGhvbWVOYXYudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdE5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdiBjb250YWN0LW5hdicpO1xuICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVOYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYgbWVudS1uYXYnKTtcbiAgbWVudU5hdi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2RGl2LmFwcGVuZENoaWxkKGhvbWVOYXYpO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG4gIG5hdkRpdi5hcHBlbmRDaGlsZChtZW51TmF2KTtcbiAgYWRkQWxsRXZlbnRMaXN0ZW5lcnMobWFpbkNvbnRlbnQsIHtcbiAgICBtZW51TmF2LFxuICAgIGhvbWVOYXYsXG4gICAgY29udGFjdE5hdixcbiAgfSk7XG4gIGNyZWF0ZUhlYWRlcihodG1sQm9keSwgbmF2RGl2KTtcbiAgaHRtbEJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXY7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tICcuL3dlYnNpdGUnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5cbmNyZWF0ZU5hdigpO1xubG9hZEhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==