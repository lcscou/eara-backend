/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/Box/block.json":
/*!***********************************!*\
  !*** ./src/blocks/Box/block.json ***!
  \***********************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/box","title":"Box","category":"eara","icon":"format-aside","description":"A simple container box with optional link, background, and spacing.","supports":{"html":false,"color":{"text":true,"background":true},"background":{"backgroundImage":true,"backgroundSize":true},"spacing":{"padding":true,"margin":true},"dimensions":{"aspectRatio":true,"height":true,"minHeight":true,"width":true},"interactivity":true,"layout":true},"attributes":{"href":{"type":"string","default":""},"borderRadius":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"borderWidth":{"type":"string","default":""},"borderStyle":{"type":"string","default":"solid"}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/Box/edit.js":
/*!********************************!*\
  !*** ./src/blocks/Box/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Box/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const {
  __
} = wp.i18n;
const {
  InspectorControls,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl
} = wp.components;


function Edit({
  attributes,
  setAttributes
}) {
  const {
    href,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle
  } = attributes;
  const borderStyles = {
    border: borderWidth && borderStyle && borderColor ? `${borderWidth} ${borderStyle} ${borderColor}` : undefined,
    borderRadius: borderRadius || undefined
  };
  const blockProps = useBlockProps({
    className: "eara-box-editor",
    style: borderStyles
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PanelBody, {
        title: __("Border Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Border Radius", "eara"),
          value: borderRadius,
          onChange: value => setAttributes({
            borderRadius: value
          }),
          placeholder: __("e.g. 8px or 1rem", "eara"),
          help: __("Set the border radius", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Border Width", "eara"),
          value: borderWidth,
          onChange: value => setAttributes({
            borderWidth: value
          }),
          placeholder: __("e.g. 1px or 2px", "eara"),
          help: __("Set the border width", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
          label: __("Border Style", "eara"),
          value: borderStyle,
          options: [{
            label: "Solid",
            value: "solid"
          }, {
            label: "Dashed",
            value: "dashed"
          }, {
            label: "Dotted",
            value: "dotted"
          }, {
            label: "Double",
            value: "double"
          }, {
            label: "None",
            value: "none"
          }],
          onChange: value => setAttributes({
            borderStyle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Border Color", "eara"),
          value: borderColor,
          onChange: value => setAttributes({
            borderColor: value
          }),
          placeholder: __("e.g. #000000 or rgba(0,0,0,0.1)", "eara"),
          help: __("Set the border color", "eara")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PanelBody, {
        title: __("Link Settings", "eara"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Link URL (optional)", "eara"),
          value: href,
          onChange: value => setAttributes({
            href: value
          }),
          placeholder: __("https://example.com", "eara"),
          help: __("If set, the entire box will be clickable.", "eara")
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InnerBlocks, {})
    })]
  });
}

/***/ }),

/***/ "./src/blocks/Box/editor.scss":
/*!************************************!*\
  !*** ./src/blocks/Box/editor.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Box/save.js":
/*!********************************!*\
  !*** ./src/blocks/Box/save.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
function save({
  attributes
}) {
  const {
    href,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle
  } = attributes;
  const borderStyles = {
    border: borderWidth && borderStyle && borderColor ? `${borderWidth} ${borderStyle} ${borderColor}` : undefined,
    borderRadius: borderRadius || undefined
  };
  const blockProps = useBlockProps.save({
    style: borderStyles
  });
  if (href) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      ...blockProps,
      href: href,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./src/blocks/Box/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Box/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/Box/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/Box/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map