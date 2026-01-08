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

/***/ "./src/blocks/HeroHome/block.json":
/*!****************************************!*\
  !*** ./src/blocks/HeroHome/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/hero-home","title":"Hero Home","category":"eara","icon":"cover-image","description":"Seção hero 16:9 com imagem de fundo e conteúdo central.","supports":{"html":false},"attributes":{"backgroundImage":{"type":"object","default":{"url":"","id":0,"alt":""}},"innerContainer":{"type":"boolean","default":true},"overlayColor":{"type":"string","default":"#000000"},"overlayOpacity":{"type":"number","default":0}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/HeroHome/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/HeroHome/edit.js ***!
  \*************************************/
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
  Notice,
  ToggleControl,
  RangeControl,
  ColorPicker
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useEffect,
  useMemo,
  useState
} = wp.element;
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    backgroundImage,
    innerContainer,
    overlayColor,
    overlayOpacity
  } = attributes;
  const blockProps = useBlockProps();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  // Fetch daily metadata from WPGraphQL (admin/editor)
  useEffect(() => {
    let alive = true;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const base = window && window.wpApiSettings && typeof window.wpApiSettings.root === 'string' ? window.wpApiSettings.root.replace(/\/wp\-json\/?$/, '') : window && window.location && window.location.origin ? window.location.origin : '';
        const endpoint = base ? base + '/graphql' : '/graphql';
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `query HeroHomeMeta { heroHomeOfTheDay { id slug title credits creditWebsite creditsMoreInfo featuredImageUrl } }`
          })
        });
        if (!res.ok) {
          throw new Error(`GraphQL request failed (${res.status})`);
        }
        let out;
        try {
          out = await res.json();
        } catch (e) {
          throw new Error('Invalid GraphQL JSON response');
        }
        if (!alive) return;
        if (out.errors) {
          throw new Error(out.errors?.[0]?.message || 'GraphQL error');
        }
        setMeta(out.data?.heroHomeOfTheDay || null);
      } catch (e) {
        setError(e?.message || 'Failed to load metadata');
      } finally {
        if (alive) setLoading(false);
      }
    }
    run();
    return () => {
      alive = false;
    };
  }, []);
  const previewBg = useMemo(() => {
    if (backgroundImage?.url) return backgroundImage.url;
    if (meta?.featuredImageUrl) return meta.featuredImageUrl;
    return '';
  }, [backgroundImage, meta]);
  const wrapperStyle = {
    backgroundImage: previewBg ? `url(${previewBg})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelBody, {
        title: __('Configuração', 'eara'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
          label: __('Usar container interno', 'eara'),
          checked: innerContainer,
          onChange: v => setAttributes({
            innerContainer: !!v
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __('Overlay', 'eara'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __('Transparência do overlay', 'eara'),
          value: overlayOpacity,
          onChange: v => setAttributes({
            overlayOpacity: v
          }),
          min: 0,
          max: 100,
          help: __('0 = transparente, 100 = opaco', 'eara')
        }), overlayOpacity > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: __('Cor do overlay', 'eara')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorPicker, {
            color: overlayColor,
            onChangeComplete: color => setAttributes({
              overlayColor: color.hex
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Today's Featured Media Bank", 'eara'),
        initialOpen: false,
        children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Notice, {
          status: "info",
          isDismissible: false,
          children: __('Carregando destaque do dia…', 'eara')
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Notice, {
          status: "error",
          isDismissible: false,
          children: error
        }), meta && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
              children: __('Título:', 'eara')
            }), " ", meta.title]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
              children: __('Slug:', 'eara')
            }), " ", meta.slug]
          }), meta.credits && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
              children: __('Créditos:', 'eara')
            }), " ", meta.credits]
          }), meta.creditWebsite && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
              children: __('Créditos site:', 'eara')
            }), " ", meta.creditWebsite]
          }), meta.creditsMoreInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
              children: __('Mais info:', 'eara')
            }), " ", meta.creditsMoreInfo]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "eara-hero-home",
      style: wrapperStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "eara-hero-home__ratio",
        children: [overlayOpacity > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "eara-hero-home__overlay",
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
            opacity: overlayOpacity / 100,
            pointerEvents: 'none',
            zIndex: 1
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: innerContainer ? 'eara-hero-home__container' : undefined,
          style: {
            position: 'relative',
            zIndex: 2
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks, {})
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/HeroHome/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/HeroHome/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/HeroHome/save.js":
/*!*************************************!*\
  !*** ./src/blocks/HeroHome/save.js ***!
  \*************************************/
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
    backgroundImage,
    innerContainer,
    overlayColor,
    overlayOpacity
  } = attributes;
  const style = {
    backgroundImage: backgroundImage?.url ? `url(${backgroundImage.url})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  };
  const blockProps = useBlockProps.save({
    className: 'eara-hero-home',
    style
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "eara-hero-home__ratio",
      children: [overlayOpacity > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "eara-hero-home__overlay",
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
          opacity: overlayOpacity / 100,
          pointerEvents: 'none',
          zIndex: 1
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: innerContainer ? 'eara-hero-home__container' : undefined,
        style: {
          position: 'relative',
          zIndex: 2
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
      })]
    })
  });
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
/*!**************************************!*\
  !*** ./src/blocks/HeroHome/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/HeroHome/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/HeroHome/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/HeroHome/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/HeroHome/editor.scss");
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