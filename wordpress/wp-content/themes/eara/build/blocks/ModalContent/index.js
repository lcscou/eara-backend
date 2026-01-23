/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/ModalContent/block.json":
/*!********************************************!*\
  !*** ./src/blocks/ModalContent/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/modal-content","title":"Modal Content","category":"eara","icon":"welcome-view-site","description":"Modal content that appears when a ModalTrigger with matching ID is clicked.","supports":{"html":false},"attributes":{"triggerId":{"type":"string","default":""},"title":{"type":"string","default":""},"centered":{"type":"boolean","default":false},"size":{"type":"string","default":"md","enum":["sm","md","lg","xl"]},"withCloseButton":{"type":"boolean","default":true},"fullScreen":{"type":"boolean","default":false}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/ModalContent/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/ModalContent/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/ModalContent/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    triggerId,
    title,
    centered,
    size,
    withCloseButton,
    fullScreen
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "wp-block-eara-modal-content",
    style: {
      border: "2px solid #3A3A6B",
      borderRadius: "4px",
      padding: "16px",
      position: "relative",
      minHeight: "100px",
      backgroundColor: "#f8f9fa"
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Modal Content Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Trigger ID", "eara"),
          value: triggerId,
          onChange: value => setAttributes({
            triggerId: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Must match the ID of a ModalTrigger block", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "eara"),
          value: title,
          onChange: value => setAttributes({
            title: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Optional title for the modal", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Size", "eara"),
          value: size,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small", "eara"),
            value: "sm"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium", "eara"),
            value: "md"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Large", "eara"),
            value: "lg"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra Large", "eara"),
            value: "xl"
          }],
          onChange: value => setAttributes({
            size: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Centered", "eara"),
          checked: centered,
          onChange: value => setAttributes({
            centered: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Center the modal vertically on the screen", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("With Close Button", "eara"),
          checked: withCloseButton,
          onChange: value => setAttributes({
            withCloseButton: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show close button in modal header", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Full Screen", "eara"),
          checked: fullScreen,
          onChange: value => setAttributes({
            fullScreen: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display modal in full screen mode", "eara")
        }), !triggerId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Notice, {
          status: "warning",
          isDismissible: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            style: {
              margin: 0
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Warning:", "eara")
            }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Please provide a Trigger ID that matches a ModalTrigger block.", "eara")]
          })
        }), triggerId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Notice, {
          status: "info",
          isDismissible: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            style: {
              margin: 0
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("This modal will be triggered by the ModalTrigger with ID:", "eara"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: triggerId
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        borderBottom: "1px solid #ddd",
        paddingBottom: "8px",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            fontSize: "11px",
            color: "#3A3A6B",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "4px"
          },
          children: ["modal content - ", triggerId || "no-id"]
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            fontSize: "14px",
            fontWeight: "600",
            color: "#333"
          },
          children: title
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          fontSize: "10px",
          color: "#666",
          backgroundColor: "white",
          padding: "2px 6px",
          borderRadius: "2px",
          border: "1px solid #ddd"
        },
        children: [size.toUpperCase(), " ", fullScreen && "| FULLSCREEN", " ", centered && "| CENTERED"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        minHeight: "80px"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
        renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender,
        templateLock: false
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/ModalContent/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/ModalContent/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/ModalContent/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/ModalContent/save.js ***!
  \*****************************************/
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
    triggerId,
    title,
    centered,
    size,
    withCloseButton,
    fullScreen
  } = attributes;
  const blockProps = useBlockProps.save({
    className: "eara-modal-content",
    "data-modal-content": triggerId,
    "data-modal-title": title,
    "data-modal-centered": centered,
    "data-modal-size": size,
    "data-modal-close-button": withCloseButton,
    "data-modal-fullscreen": fullScreen,
    style: {
      display: "none" // Hidden by default, shown by JavaScript
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/*!******************************************!*\
  !*** ./src/blocks/ModalContent/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/ModalContent/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/ModalContent/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/ModalContent/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map