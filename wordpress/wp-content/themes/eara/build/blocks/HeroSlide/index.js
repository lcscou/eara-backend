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

/***/ "./src/blocks/HeroSlide/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/HeroSlide/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/hero-slide","title":"Hero Slide","category":"eara","icon":"format-image","description":"Individual slide for Hero Carousel with background images and content positioning.","supports":{"html":false},"attributes":{"backgroundImageDesktop":{"type":"object","default":{"url":"","id":0,"alt":""}},"backgroundImageMobile":{"type":"object","default":{"url":"","id":0,"alt":""}},"contentAlignment":{"type":"string","default":"center"},"contentVerticalAlignment":{"type":"string","default":"center"},"contentPosition":{"type":"string","default":"relative"},"overlayOpacity":{"type":"number","default":0},"overlayColor":{"type":"string","default":"#000000"},"minHeight":{"type":"string","default":"auto"}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/HeroSlide/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/HeroSlide/edit.js ***!
  \**************************************/
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
  MediaUpload,
  MediaUploadCheck,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  Button,
  SelectControl,
  RangeControl,
  ColorPicker
} = wp.components;
const {
  __
} = wp.i18n;
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    backgroundImageDesktop,
    backgroundImageMobile,
    contentAlignment,
    contentVerticalAlignment,
    contentPosition,
    overlayOpacity,
    overlayColor,
    minHeight
  } = attributes;
  const blockProps = useBlockProps();
  const onSelectImageDesktop = media => {
    setAttributes({
      backgroundImageDesktop: {
        url: media.url,
        id: media.id,
        alt: media.alt || ""
      }
    });
  };
  const onSelectImageMobile = media => {
    setAttributes({
      backgroundImageMobile: {
        url: media.url,
        id: media.id,
        alt: media.alt || ""
      }
    });
  };
  const removeImageDesktop = () => {
    setAttributes({
      backgroundImageDesktop: {
        url: "",
        id: 0,
        alt: ""
      }
    });
  };
  const removeImageMobile = () => {
    setAttributes({
      backgroundImageMobile: {
        url: "",
        id: 0,
        alt: ""
      }
    });
  };
  const slideStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: minHeight !== "auto" ? minHeight : "400px",
    backgroundImage: backgroundImageDesktop.url ? `url(${backgroundImageDesktop.url})` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: contentVerticalAlignment,
    justifyContent: contentAlignment
  };
  const overlayStyle = overlayOpacity > 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: overlayColor,
    opacity: overlayOpacity / 100,
    pointerEvents: "none"
  } : null;
  const contentStyle = {
    position: contentPosition,
    zIndex: 1,
    padding: "2rem",
    width: "100%",
    maxWidth: "1200px"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Background Images", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
            children: __("Desktop Background", "eara")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MediaUpload, {
            onSelect: onSelectImageDesktop,
            allowedTypes: ["image"],
            value: backgroundImageDesktop.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              style: {
                marginBottom: "1rem"
              },
              children: backgroundImageDesktop.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                  src: backgroundImageDesktop.url,
                  alt: backgroundImageDesktop.alt,
                  style: {
                    width: "100%",
                    height: "auto",
                    marginBottom: "0.5rem"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
                  onClick: open,
                  variant: "secondary",
                  style: {
                    marginRight: "0.5rem"
                  },
                  children: __("Replace Image", "eara")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
                  onClick: removeImageDesktop,
                  variant: "tertiary",
                  isDestructive: true,
                  children: __("Remove", "eara")
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
                onClick: open,
                variant: "primary",
                children: __("Select Desktop Image", "eara")
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
            children: __("Mobile Background", "eara")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MediaUpload, {
            onSelect: onSelectImageMobile,
            allowedTypes: ["image"],
            value: backgroundImageMobile.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              children: backgroundImageMobile.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                  src: backgroundImageMobile.url,
                  alt: backgroundImageMobile.alt,
                  style: {
                    width: "100%",
                    height: "auto",
                    marginBottom: "0.5rem"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
                  onClick: open,
                  variant: "secondary",
                  style: {
                    marginRight: "0.5rem"
                  },
                  children: __("Replace Image", "eara")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
                  onClick: removeImageMobile,
                  variant: "tertiary",
                  isDestructive: true,
                  children: __("Remove", "eara")
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
                onClick: open,
                variant: "primary",
                children: __("Select Mobile Image", "eara")
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Content Positioning", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Horizontal Alignment", "eara"),
          value: contentAlignment,
          options: [{
            label: "Left",
            value: "flex-start"
          }, {
            label: "Center",
            value: "center"
          }, {
            label: "Right",
            value: "flex-end"
          }],
          onChange: v => setAttributes({
            contentAlignment: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Vertical Alignment", "eara"),
          value: contentVerticalAlignment,
          options: [{
            label: "Top",
            value: "flex-start"
          }, {
            label: "Center",
            value: "center"
          }, {
            label: "Bottom",
            value: "flex-end"
          }],
          onChange: v => setAttributes({
            contentVerticalAlignment: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Content Position", "eara"),
          value: contentPosition,
          options: [{
            label: "Relative",
            value: "relative"
          }, {
            label: "Absolute",
            value: "absolute"
          }, {
            label: "Fixed",
            value: "fixed"
          }],
          onChange: v => setAttributes({
            contentPosition: v
          }),
          help: __("Position type for the content container", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectControl, {
          label: __("Minimum Height", "eara"),
          value: minHeight,
          options: [{
            label: "Auto",
            value: "auto"
          }, {
            label: "400px",
            value: "400px"
          }, {
            label: "500px",
            value: "500px"
          }, {
            label: "600px",
            value: "600px"
          }, {
            label: "100vh",
            value: "100vh"
          }],
          onChange: v => setAttributes({
            minHeight: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Overlay", "eara"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Overlay Opacity", "eara"),
          value: overlayOpacity,
          onChange: v => setAttributes({
            overlayOpacity: v
          }),
          min: 0,
          max: 100,
          help: __("Add a colored overlay over the background image", "eara")
        }), overlayOpacity > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: __("Overlay Color", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorPicker, {
            color: overlayColor,
            onChangeComplete: color => setAttributes({
              overlayColor: color.hex
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: slideStyle,
        children: [overlayStyle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          style: overlayStyle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          style: contentStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks, {})
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/HeroSlide/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/HeroSlide/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/HeroSlide/save.js":
/*!**************************************!*\
  !*** ./src/blocks/HeroSlide/save.js ***!
  \**************************************/
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
/*!***************************************!*\
  !*** ./src/blocks/HeroSlide/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/HeroSlide/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/HeroSlide/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/HeroSlide/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/HeroSlide/editor.scss");
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