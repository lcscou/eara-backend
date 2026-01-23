/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/MediaBank/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/MediaBank/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/media-bank","title":"Media Bank","category":"eara","icon":"format-image","description":"Select an image from Media Bank and display credits and links.","supports":{"html":false,"spacing":{"padding":true,"margin":true}},"attributes":{"mediaId":{"type":"number","default":0},"mediaTitle":{"type":"string","default":""},"imageUrl":{"type":"string","default":""},"imageAlt":{"type":"string","default":""},"width":{"type":"string","default":"auto"},"height":{"type":"string","default":"auto"},"credits":{"type":"string","default":""},"creditWebsite":{"type":"string","default":""},"creditsMoreInfo":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/blocks/MediaBank/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/MediaBank/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  __experimentalDivider: Divider
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
    mediaId,
    mediaTitle,
    imageUrl,
    imageAlt,
    width,
    height,
    credits,
    creditWebsite,
    creditsMoreInfo
  } = attributes;
  const blockProps = useBlockProps({
    className: "wp-block-eara-media-bank"
  });
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getGraphQLEndpoint = async () => {
    const endpoints = ["/graphql", "/wp/graphql"];
    for (const ep of endpoints) {
      try {
        const resp = await fetch(ep, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{ __typename }'
          })
        });
        if (resp.ok) return ep;
      } catch (e) {
        // continue
      }
    }
    return null;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let alive = true;
    const run = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/wp-json/wp/v2/media-bank?per_page=20&orderby=date&order=desc&search=${encodeURIComponent(search)}`);
        const data = await res.json();
        if (!alive) return;
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("MediaBank: error fetching posts", e);
        if (!alive) return;
        setItems([]);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    };
    run();
    return () => {
      alive = false;
    };
  }, [search]);
  const handleSelect = async id => {
    if (!id) return;
    const selected = items.find(p => p.id === id);
    setAttributes({
      mediaId: id,
      mediaTitle: selected?.title?.rendered || ""
    });

    // Try fetching details via WPGraphQL (preferred for ACF fields)
    try {
      const query = `query MediaBank($id: ID!) {\n        mediaBank(id: $id, idType: DATABASE_ID) {\n          title\n          cfMediaBank {\n            image {\n              node {\n                id\n                sourceUrl\n                guid\n                altText\n                caption\n                mediaDetails { width height }\n              }\n            }\n            credits\n            creditWebsite\n            creditsMoreInfo\n          }\n        }\n      }`;
      const endpoint = await getGraphQLEndpoint();
      let json = null;
      if (endpoint) {
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query,
            variables: {
              id
            }
          })
        });
        json = await resp.json();
      }
      const cf = json?.data?.mediaBank?.cfMediaBank;
      const img = cf?.image?.node;
      if (cf) {
        const src = img?.sourceUrl || img?.guid || "";
        const alt = img?.altText || selected?.title?.rendered || "";
        setAttributes({
          imageUrl: src,
          imageAlt: alt,
          credits: cf?.credits || "",
          creditWebsite: cf?.creditWebsite || "",
          creditsMoreInfo: cf?.creditsMoreInfo || ""
        });
        return;
      }
    } catch (e) {
      console.warn("MediaBank: GraphQL not available, falling back to REST", e);
    }

    // Fallback to REST (requires ACF to REST API plugin)
    try {
      const res = await fetch(`/wp-json/wp/v2/media-bank/${id}`);
      const item = await res.json();
      const acf = item?.acf || {};
      const img = acf?.image || item?.image;
      setAttributes({
        imageUrl: img?.url || "",
        imageAlt: img?.alt || selected?.title?.rendered || "",
        credits: acf?.credits || "",
        creditWebsite: acf?.credit_website || "",
        creditsMoreInfo: acf?.credits_more_info || ""
      });
    } catch (e) {
      console.error("MediaBank: error fetching REST details", e);
    }
  };
  const imageStyle = {
    width: width === 'auto' ? 'auto' : width || 'auto',
    height: height === 'auto' ? 'auto' : height || 'auto',
    maxWidth: '100%',
    display: 'block'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PanelBody, {
        title: __("Media Selection", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Search Media Bank", "eara"),
          value: search,
          onChange: v => setSearch(v),
          placeholder: __("Type to search…", "eara"),
          help: __("Search by title", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
          label: loading ? __("Loading…", "eara") : __("Choose an item", "eara"),
          value: mediaId || 0,
          options: [{
            label: __("— Select —", "eara"),
            value: 0
          }, ...items.map(p => ({
            label: p?.title?.rendered || `#${p.id}`,
            value: p.id
          }))],
          onChange: val => handleSelect(parseInt(val))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Divider, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PanelBody, {
        title: __("Dimensions", "eara"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Width", "eara"),
          value: width,
          onChange: v => setAttributes({
            width: v
          }),
          placeholder: "auto",
          help: __("Use CSS units (e.g., 100%, 600px). 'auto' by default.", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextControl, {
          label: __("Height", "eara"),
          value: height,
          onChange: v => setAttributes({
            height: v
          }),
          placeholder: "auto",
          help: __("Use CSS units (e.g., 400px). 'auto' keeps aspect ratio.", "eara")
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "eara-media-bank__preview",
      children: imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figure", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: imageUrl,
          alt: imageAlt || mediaTitle || '',
          style: imageStyle
        }), (credits || creditWebsite || creditsMoreInfo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figcaption", {
          style: {
            fontSize: '12px',
            color: '#666',
            marginTop: '6px'
          },
          children: [credits && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: credits
          }), creditWebsite && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            children: [credits ? ' • ' : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: creditWebsite,
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Website"
            })]
          }), creditsMoreInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            children: [credits || creditWebsite ? ' • ' : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: creditsMoreInfo,
              target: "_blank",
              rel: "noopener noreferrer",
              children: "More Info"
            })]
          })]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        style: {
          padding: '12px',
          border: '1px dashed #ccc',
          borderRadius: '8px',
          color: '#777'
        },
        children: __("Select an item from Media Bank to preview the image and credits.", "eara")
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/MediaBank/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/MediaBank/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/MediaBank/save.js":
/*!**************************************!*\
  !*** ./src/blocks/MediaBank/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Save(props) {
  const {
    attributes
  } = props;
  const {
    imageUrl,
    imageAlt,
    width,
    height,
    credits,
    creditWebsite,
    creditsMoreInfo
  } = attributes;
  if (!imageUrl) return null;
  const style = {
    width: width === 'auto' ? 'auto' : width || 'auto',
    height: height === 'auto' ? 'auto' : height || 'auto',
    maxWidth: '100%',
    display: 'block'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "wp-block-eara-media-bank",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: imageUrl,
        alt: imageAlt || '',
        style: style
      }), (credits || creditWebsite || creditsMoreInfo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figcaption", {
        className: "eara-media-bank__credits",
        children: [credits && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          children: credits
        }), creditWebsite && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          children: [credits ? ' • ' : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: creditWebsite,
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Website"
          })]
        }), creditsMoreInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          children: [credits || creditWebsite ? ' • ' : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: creditsMoreInfo,
            target: "_blank",
            rel: "noopener noreferrer",
            children: "More Info"
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/MediaBank/styles.scss":
/*!******************************************!*\
  !*** ./src/blocks/MediaBank/styles.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

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
  !*** ./src/blocks/MediaBank/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/MediaBank/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/MediaBank/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/MediaBank/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/MediaBank/editor.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/blocks/MediaBank/styles.scss");
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
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map