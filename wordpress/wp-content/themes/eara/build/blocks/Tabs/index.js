/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/Tabs/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/Tabs/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Tabs/editor.scss");
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
    tabs,
    activeTab,
    layout
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `wp-block-eara-tabs wp-block-eara-tabs--${layout}`
  });
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const updateTab = (tabId, field, value) => {
    const updatedTabs = tabs.map(tab => {
      if (tab.id === tabId) {
        return {
          ...tab,
          [field]: value
        };
      }
      return tab;
    });
    setAttributes({
      tabs: updatedTabs
    });
  };
  const updateTabImage = (tabId, media) => {
    const updatedTabs = tabs.map(tab => {
      if (tab.id === tabId) {
        return {
          ...tab,
          image: {
            url: media.url,
            id: media.id,
            alt: media.alt || ""
          }
        };
      }
      return tab;
    });
    setAttributes({
      tabs: updatedTabs
    });
  };
  const removeTabImage = tabId => {
    const updatedTabs = tabs.map(tab => {
      if (tab.id === tabId) {
        return {
          ...tab,
          image: {
            url: "",
            id: 0,
            alt: ""
          }
        };
      }
      return tab;
    });
    setAttributes({
      tabs: updatedTabs
    });
  };
  const addTab = () => {
    const newTabId = `tab-${Date.now()}`;
    const newTab = {
      id: newTabId,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("New Tab", "eara"),
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab content goes here", "eara"),
      image: {
        url: "",
        id: 0,
        alt: ""
      }
    };
    setAttributes({
      tabs: [...tabs, newTab],
      activeTab: newTabId
    });
  };
  const removeTab = tabId => {
    if (tabs.length === 1) {
      alert((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("You must have at least one tab", "eara"));
      return;
    }
    const updatedTabs = tabs.filter(tab => tab.id !== tabId);
    const newActiveTab = activeTab === tabId ? updatedTabs[0].id : activeTab;
    setAttributes({
      tabs: updatedTabs,
      activeTab: newActiveTab
    });
  };
  const layoutOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vertical (Left)", "eara"),
    value: "vertical"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Horizontal (Top)", "eara"),
    value: "horizontal"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tabs Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "eara"),
          value: layout,
          options: layoutOptions,
          onChange: value => setAttributes({
            layout: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose tabs layout orientation", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            marginTop: "16px",
            marginBottom: "16px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            style: {
              margin: "0 0 12px 0",
              fontSize: "13px"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Manage Tabs", "eara")
          }), tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              borderLeft: activeTab === tab.id ? "4px solid #3A3A6B" : "4px solid transparent"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              onClick: () => setAttributes({
                activeTab: tab.id
              }),
              isSecondary: activeTab !== tab.id,
              isPrimary: activeTab === tab.id,
              style: {
                width: "100%",
                marginBottom: "8px"
              },
              children: tab.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Untitled Tab", "eara")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              onClick: () => removeTab(tab.id),
              isDestructive: true,
              isSmall: true,
              style: {
                width: "100%"
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Tab", "eara")
            })]
          }, tab.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            onClick: addTab,
            isPrimary: true,
            style: {
              width: "100%"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Tab", "eara")
          })]
        })]
      }), activeTabData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Content", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Title", "eara"),
          value: activeTabData.title,
          onChange: value => updateTab(activeTab, "title", value),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab button title", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            marginTop: "16px",
            marginBottom: "16px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            style: {
              margin: "0 0 12px 0",
              fontSize: "13px"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Image", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
              onSelect: media => updateTabImage(activeTab, media),
              allowedTypes: ["image"],
              value: activeTabData.image.id,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [activeTabData.image.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: activeTabData.image.url,
                  alt: "Tab Preview",
                  style: {
                    maxWidth: "100%",
                    height: "auto",
                    marginBottom: "8px",
                    borderRadius: "4px"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  onClick: open,
                  isSecondary: true,
                  style: {
                    marginRight: "8px",
                    marginBottom: "8px"
                  },
                  children: activeTabData.image.url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Image", "eara") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image", "eara")
                }), activeTabData.image.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  onClick: () => removeTabImage(activeTab),
                  isDestructive: true,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "eara")
                })]
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "eara-tabs",
      style: {
        display: "flex",
        gap: "32px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "eara-tabs__nav",
        style: {
          display: "flex",
          flexDirection: layout === "vertical" ? "column" : "row",
          gap: "12px",
          minWidth: layout === "vertical" ? "180px" : "100%"
        },
        children: tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          onClick: () => setAttributes({
            activeTab: tab.id
          }),
          className: `eara-tabs__button ${activeTab === tab.id ? "eara-tabs__button--active" : ""}`,
          style: {
            padding: "12px 24px",
            borderRadius: "24px",
            border: "none",
            backgroundColor: activeTab === tab.id ? "#3A3A6B" : "#5B5FD9",
            color: "#FFFFFF",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            transition: "background-color 0.3s ease"
          },
          children: tab.title
        }, tab.id))
      }), activeTabData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "eara-tabs__content",
        style: {
          flex: 1
        },
        children: [activeTabData.image.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "eara-tabs__image",
          style: {
            marginBottom: "24px"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: activeTabData.image.url,
            alt: activeTabData.image.alt,
            style: {
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover"
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "eara-tabs__text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "h3",
            value: activeTabData.title,
            onChange: value => updateTab(activeTab, "title", value),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab title...", "eara"),
            style: {
              fontSize: "18px",
              fontWeight: "600",
              color: "#3A3A6B",
              marginBottom: "12px"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "div",
            value: activeTabData.content,
            onChange: value => updateTab(activeTab, "content", value),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab content...", "eara"),
            multiline: "p",
            style: {
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#333333"
            }
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/Tabs/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/Tabs/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Tabs/save.js":
/*!*********************************!*\
  !*** ./src/blocks/Tabs/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  RichText
} = wp.blockEditor;
function Save({
  attributes
}) {
  const {
    tabs,
    activeTab,
    layout
  } = attributes;
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `eara-tabs eara-tabs--${layout}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "eara-tabs__nav",
      children: tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        className: `eara-tabs__button ${activeTab === tab.id ? "eara-tabs__button--active" : ""}`,
        "data-tab-id": tab.id,
        children: tab.title
      }, tab.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "eara-tabs__panels",
      children: tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `eara-tabs__panel ${activeTab === tab.id ? "eara-tabs__panel--active" : ""}`,
        "data-tab-id": tab.id,
        style: {
          display: activeTab === tab.id ? "block" : "none"
        },
        children: [tab.image.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "eara-tabs__image",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: tab.image.url,
            alt: tab.image.alt || tab.title,
            className: "eara-tabs__image-img"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "eara-tabs__text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
            className: "eara-tabs__title",
            children: tab.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "eara-tabs__description",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichText.Content, {
              value: tab.content
            })
          })]
        })]
      }, tab.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script", {
      dangerouslySetInnerHTML: {
        __html: `
            (function() {
              const tabs = document.querySelectorAll('.eara-tabs__button');
              const panels = document.querySelectorAll('.eara-tabs__panel');

              tabs.forEach(button => {
                button.addEventListener('click', function() {
                  const tabId = this.dataset.tabId;

                  // Remove active class from all buttons
                  tabs.forEach(b => b.classList.remove('eara-tabs__button--active'));
                  // Hide all panels
                  panels.forEach(p => {
                    p.classList.remove('eara-tabs__panel--active');
                    p.style.display = 'none';
                  });

                  // Add active class to clicked button
                  this.classList.add('eara-tabs__button--active');
                  // Show corresponding panel
                  const activePanel = document.querySelector(\`.eara-tabs__panel[data-tab-id="\${tabId}"]\`);
                  if (activePanel) {
                    activePanel.classList.add('eara-tabs__panel--active');
                    activePanel.style.display = 'block';
                  }
                });
              });

              // Set initial active state
              const firstButton = tabs[0];
              if (firstButton) {
                firstButton.classList.add('eara-tabs__button--active');
              }
            })();
          `
      }
    })]
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
/*!**********************************!*\
  !*** ./src/blocks/Tabs/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/Tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/Tabs/save.js");


const {
  registerBlockType
} = wp.blocks;
registerBlockType("eara/tabs", {
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map