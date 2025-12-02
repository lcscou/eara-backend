/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mantine/core/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@mantine/core/styles.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Grid/block.json":
/*!************************************!*\
  !*** ./src/blocks/Grid/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/grid","title":"Grid","category":"eara","icon":"grid-view","description":"Flexbox grid system with customizable columns and gaps, like Mantine Grid.","supports":{"html":false},"attributes":{"columns":{"type":"number","default":12},"gutter":{"type":"string","default":"md"},"grow":{"type":"boolean","default":false},"justify":{"type":"string","default":"flex-start"},"align":{"type":"string","default":"stretch"},"overflow":{"type":"string","default":"visible"}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./editor.scss","style":"file:./styles.scss"}');

/***/ }),

/***/ "./src/blocks/Grid/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/Grid/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const {
  InspectorControls,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  RangeControl
} = wp.components;
const {
  __
} = wp.i18n;


const ALLOWED_BLOCKS = ['eara/grid-col'];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    columns,
    gutter,
    grow,
    justify,
    align,
    overflow
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Grid Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Columns", "eara"),
          value: columns,
          onChange: v => setAttributes({
            columns: v
          }),
          min: 1,
          max: 24,
          help: __("Total number of columns in the grid", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Gutter", "eara"),
          value: gutter,
          options: [{
            label: "Extra Small (xs)",
            value: "xs"
          }, {
            label: "Small (sm)",
            value: "sm"
          }, {
            label: "Medium (md)",
            value: "md"
          }, {
            label: "Large (lg)",
            value: "lg"
          }, {
            label: "Extra Large (xl)",
            value: "xl"
          }, {
            label: "None (0)",
            value: "0"
          }],
          onChange: v => setAttributes({
            gutter: v
          }),
          help: __("Space between columns", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Justify", "eara"),
          value: justify,
          options: [{
            label: "Start",
            value: "flex-start"
          }, {
            label: "Center",
            value: "center"
          }, {
            label: "End",
            value: "flex-end"
          }, {
            label: "Space Between",
            value: "space-between"
          }, {
            label: "Space Around",
            value: "space-around"
          }],
          onChange: v => setAttributes({
            justify: v
          }),
          help: __("Horizontal alignment of columns", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Align", "eara"),
          value: align,
          options: [{
            label: "Start",
            value: "flex-start"
          }, {
            label: "Center",
            value: "center"
          }, {
            label: "End",
            value: "flex-end"
          }, {
            label: "Stretch",
            value: "stretch"
          }],
          onChange: v => setAttributes({
            align: v
          }),
          help: __("Vertical alignment of columns", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Overflow", "eara"),
          value: overflow,
          options: [{
            label: "Visible",
            value: "visible"
          }, {
            label: "Hidden",
            value: "hidden"
          }],
          onChange: v => setAttributes({
            overflow: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelBody, {
        title: __("Options", "eara"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
          label: __("Grow", "eara"),
          checked: grow,
          onChange: v => setAttributes({
            grow: v
          }),
          help: __("Allows Grid.Col to grow and fill remaining space", "eara")
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        //   flexWrap: 'wrap',
        gap: gutter === '0' ? 0 : undefined,
        justifyContent: justify,
        width: '100%',
        alignItems: align,
        overflow: overflow,
        border: '1px dashed #ccc',
        padding: '0.5rem',
        minHeight: '50px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: [
          // ['eara/grid-col', { span: 4 }],
          // ['eara/grid-col', { span: 4 }],
          // ['eara/grid-col', { span: 4 }],
        ]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/Grid/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/Grid/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Grid/save.js":
/*!*********************************!*\
  !*** ./src/blocks/Grid/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  InnerBlocks
} = wp.blockEditor;
function Save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {});
}

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
/*!**********************************!*\
  !*** ./src/blocks/Grid/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Grid/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Grid/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Grid/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Grid/editor.scss");
const {
  registerBlockType
} = wp.blocks;

const {
  __
} = wp.i18n;




registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  title: __(_block_json__WEBPACK_IMPORTED_MODULE_0__.title, "eara"),
  description: __(_block_json__WEBPACK_IMPORTED_MODULE_0__.description, "eara"),
  category: _block_json__WEBPACK_IMPORTED_MODULE_0__.category,
  icon: _block_json__WEBPACK_IMPORTED_MODULE_0__.icon,
  keywords: _block_json__WEBPACK_IMPORTED_MODULE_0__.keywords,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  editorStyle: _block_json__WEBPACK_IMPORTED_MODULE_0__.editorStyle,
  style: _block_json__WEBPACK_IMPORTED_MODULE_0__.style,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map