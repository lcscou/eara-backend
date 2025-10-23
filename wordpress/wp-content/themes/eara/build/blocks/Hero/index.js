/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mantine/core/esm/core/Box/Box.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/Box.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: function() { return /* binding */ Box; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _factory_create_polymorphic_component_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/create-polymorphic-component.mjs */ "./node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs");
/* harmony import */ var _InlineStyles_InlineStyles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InlineStyles/InlineStyles.mjs */ "./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs");
/* harmony import */ var _utils_is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-number-like/is-number-like.mjs */ "./node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs");
/* harmony import */ var _MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MantineProvider/Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _get_box_mod_get_box_mod_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-box-mod/get-box-mod.mjs */ "./node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs");
/* harmony import */ var _get_box_style_get_box_style_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-box-style/get-box-style.mjs */ "./node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs");
/* harmony import */ var _style_props_extract_style_props_extract_style_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style-props/extract-style-props/extract-style-props.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs");
/* harmony import */ var _style_props_style_props_data_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style-props/style-props-data.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs");
/* harmony import */ var _style_props_parse_style_props_parse_style_props_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style-props/parse-style-props/parse-style-props.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs");
/* harmony import */ var _use_random_classname_use_random_classname_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use-random-classname/use-random-classname.mjs */ "./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs");
'use client';



















const _Box = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  ({
    component,
    style,
    __vars,
    className,
    variant,
    mod,
    size,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    renderRoot,
    __size,
    ...others
  }, ref) => {
    const theme = (0,_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_7__.useMantineTheme)();
    const Element = component || "div";
    const { styleProps, rest } = (0,_style_props_extract_style_props_extract_style_props_mjs__WEBPACK_IMPORTED_MODULE_10__.extractStyleProps)(others);
    const useSxTransform = (0,_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_6__.useMantineSxTransform)();
    const transformedSx = useSxTransform?.()?.(styleProps.sx);
    const responsiveClassName = (0,_use_random_classname_use_random_classname_mjs__WEBPACK_IMPORTED_MODULE_13__.useRandomClassName)();
    const parsedStyleProps = (0,_style_props_parse_style_props_parse_style_props_mjs__WEBPACK_IMPORTED_MODULE_12__.parseStyleProps)({
      styleProps,
      theme,
      data: _style_props_style_props_data_mjs__WEBPACK_IMPORTED_MODULE_11__.STYlE_PROPS_DATA
    });
    const props = {
      ref,
      style: (0,_get_box_style_get_box_style_mjs__WEBPACK_IMPORTED_MODULE_9__.getBoxStyle)({
        theme,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles
      }),
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, transformedSx, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        "mantine-light-hidden": lightHidden,
        "mantine-dark-hidden": darkHidden,
        [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`mantine-visible-from-${visibleFrom}`]: visibleFrom
      }),
      "data-variant": variant,
      "data-size": (0,_utils_is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_5__.isNumberLike)(size) ? void 0 : size || void 0,
      size: __size,
      ...(0,_get_box_mod_get_box_mod_mjs__WEBPACK_IMPORTED_MODULE_8__.getBoxMod)(mod),
      ...rest
    };
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _InlineStyles_InlineStyles_mjs__WEBPACK_IMPORTED_MODULE_4__.InlineStyles,
        {
          selector: `.${responsiveClassName}`,
          styles: parsedStyleProps.styles,
          media: parsedStyleProps.media
        }
      ),
      typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Element, { ...props })
    ] });
  }
);
_Box.displayName = "@mantine/core/Box";
const Box = (0,_factory_create_polymorphic_component_mjs__WEBPACK_IMPORTED_MODULE_3__.createPolymorphicComponent)(_Box);


//# sourceMappingURL=Box.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBoxMod: function() { return /* binding */ getBoxMod; },
/* harmony export */   getMod: function() { return /* binding */ getMod; }
/* harmony export */ });
'use client';
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => ({ ...acc, ...getBoxMod(value) }),
      {}
    );
  }
  return getMod(mod);
}


//# sourceMappingURL=get-box-mod.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBoxStyle: function() { return /* binding */ getBoxStyle; }
/* harmony export */ });
'use client';
function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}


//# sourceMappingURL=get-box-style.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractStyleProps: function() { return /* binding */ extractStyleProps; }
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/filter-props/filter-props.mjs */ "./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';





function extractStyleProps(others) {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx,
    ...rest
  } = others;
  const styleProps = (0,_utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_0__.filterProps)({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx
  });
  return { styleProps, rest };
}


//# sourceMappingURL=extract-style-props.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseStyleProps: function() { return /* binding */ parseStyleProps; }
/* harmony export */ });
/* harmony import */ var _utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/keys/keys.mjs */ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _resolvers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolvers/index.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs");
/* harmony import */ var _sort_media_queries_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-media-queries.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs");
'use client';







function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return (0,_sort_media_queries_mjs__WEBPACK_IMPORTED_MODULE_4__.sortMediaQueries)(
    (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
          return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = _resolvers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = _resolvers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = {
              ...acc.media[bp],
              [property]: _resolvers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme
              )
            };
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}


//# sourceMappingURL=parse-style-props.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortMediaQueries: function() { return /* binding */ sortMediaQueries; }
/* harmony export */ });
'use client';
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media,
  ...props
}) {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return { ...props, media: sortedMedia };
}


//# sourceMappingURL=sort-media-queries.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   borderResolver: function() { return /* binding */ borderResolver; }
/* harmony export */ });
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _color_resolver_color_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-resolver/color-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs");
'use client';






function borderResolver(value, theme) {
  if (typeof value === "number") {
    return (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
  }
  if (typeof value === "string") {
    const [size, style, ...colorTuple] = value.split(" ").filter((val) => val.trim() !== "");
    let result = `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(size)}`;
    style && (result += ` ${style}`);
    colorTuple.length > 0 && (result += ` ${(0,_color_resolver_color_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.colorResolver)(colorTuple.join(" "), theme)}`);
    return result.trim();
  }
  return value;
}


//# sourceMappingURL=border-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorResolver: function() { return /* binding */ colorResolver; },
/* harmony export */   textColorResolver: function() { return /* binding */ textColorResolver; }
/* harmony export */ });
/* harmony import */ var _MantineProvider_color_functions_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';










function colorResolver(color, theme) {
  const parsedColor = (0,_MantineProvider_color_functions_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.parseThemeColor)({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
  const parsedColor = (0,_MantineProvider_color_functions_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.parseThemeColor)({ color, theme });
  if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }
  return colorResolver(color, theme);
}


//# sourceMappingURL=color-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontFamilyResolver: function() { return /* binding */ fontFamilyResolver; }
/* harmony export */ });
'use client';
const values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
  if (typeof fontFamily === "string" && fontFamily in values) {
    return values[fontFamily];
  }
  return fontFamily;
}


//# sourceMappingURL=font-family-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontSizeResolver: function() { return /* binding */ fontSizeResolver; }
/* harmony export */ });
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';





const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "string" && headings.includes(value)) {
    return `var(--mantine-${value}-font-size)`;
  }
  if (typeof value === "number") {
    return (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
  }
  if (typeof value === "string") {
    return (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
  }
  return value;
}


//# sourceMappingURL=font-size-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identityResolver: function() { return /* binding */ identityResolver; }
/* harmony export */ });
'use client';
function identityResolver(value) {
  return value;
}


//# sourceMappingURL=identity-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolvers: function() { return /* binding */ resolvers; }
/* harmony export */ });
/* harmony import */ var _border_resolver_border_resolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border-resolver/border-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs");
/* harmony import */ var _color_resolver_color_resolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-resolver/color-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs");
/* harmony import */ var _font_family_resolver_font_family_resolver_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font-family-resolver/font-family-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs");
/* harmony import */ var _font_size_resolver_font_size_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font-size-resolver/font-size-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs");
/* harmony import */ var _identity_resolver_identity_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity-resolver/identity-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs");
/* harmony import */ var _line_height_resolver_line_height_resolver_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-height-resolver/line-height-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs");
/* harmony import */ var _size_resolver_size_resolver_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./size-resolver/size-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs");
/* harmony import */ var _spacing_resolver_spacing_resolver_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spacing-resolver/spacing-resolver.mjs */ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs");
'use client';









const resolvers = {
  color: _color_resolver_color_resolver_mjs__WEBPACK_IMPORTED_MODULE_1__.colorResolver,
  textColor: _color_resolver_color_resolver_mjs__WEBPACK_IMPORTED_MODULE_1__.textColorResolver,
  fontSize: _font_size_resolver_font_size_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.fontSizeResolver,
  spacing: _spacing_resolver_spacing_resolver_mjs__WEBPACK_IMPORTED_MODULE_7__.spacingResolver,
  identity: _identity_resolver_identity_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__.identityResolver,
  size: _size_resolver_size_resolver_mjs__WEBPACK_IMPORTED_MODULE_6__.sizeResolver,
  lineHeight: _line_height_resolver_line_height_resolver_mjs__WEBPACK_IMPORTED_MODULE_5__.lineHeightResolver,
  fontFamily: _font_family_resolver_font_family_resolver_mjs__WEBPACK_IMPORTED_MODULE_2__.fontFamilyResolver,
  border: _border_resolver_border_resolver_mjs__WEBPACK_IMPORTED_MODULE_0__.borderResolver
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lineHeightResolver: function() { return /* binding */ lineHeightResolver; }
/* harmony export */ });
'use client';
const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }
  if (typeof value === "string" && headings.includes(value)) {
    return `var(--mantine-${value}-line-height)`;
  }
  return value;
}


//# sourceMappingURL=line-height-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sizeResolver: function() { return /* binding */ sizeResolver; }
/* harmony export */ });
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';





function sizeResolver(value) {
  if (typeof value === "number") {
    return (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
  }
  return value;
}


//# sourceMappingURL=size-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spacingResolver: function() { return /* binding */ spacingResolver; }
/* harmony export */ });
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';





function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}


//# sourceMappingURL=spacing-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STYlE_PROPS_DATA: function() { return /* binding */ STYlE_PROPS_DATA; }
/* harmony export */ });
'use client';
const STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};


//# sourceMappingURL=style-props-data.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRandomClassName: function() { return /* binding */ useRandomClassName; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function useRandomClassName() {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/:/g, "");
  return `__m__-${id}`;
}


//# sourceMappingURL=use-random-classname.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineStyles: function() { return /* binding */ InlineStyles; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MantineProvider/Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _styles_to_string_styles_to_string_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles-to-string/styles-to-string.mjs */ "./node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs");
'use client';










function InlineStyles(props) {
  const nonce = (0,_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineStyleNonce)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: (0,_styles_to_string_styles_to_string_mjs__WEBPACK_IMPORTED_MODULE_3__.stylesToString)(props) }
    }
  );
}


//# sourceMappingURL=InlineStyles.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssObjectToString: function() { return /* binding */ cssObjectToString; }
/* harmony export */ });
/* harmony import */ var _utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/keys/keys.mjs */ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs");
/* harmony import */ var _utils_camel_to_kebab_case_camel_to_kebab_case_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/camel-to-kebab-case/camel-to-kebab-case.mjs */ "./node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';






function cssObjectToString(css) {
  return (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${(0,_utils_camel_to_kebab_case_camel_to_kebab_case_mjs__WEBPACK_IMPORTED_MODULE_1__.camelToKebabCase)(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}


//# sourceMappingURL=css-object-to-string.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesToString: function() { return /* binding */ stylesToString; }
/* harmony export */ });
/* harmony import */ var _css_object_to_string_css_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-object-to-string/css-object-to-string.mjs */ "./node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs");
'use client';


function stylesToString({ selector, styles, media, container }) {
  const baseStyles = styles ? (0,_css_object_to_string_css_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__.cssObjectToString)(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${(0,_css_object_to_string_css_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__.cssObjectToString)(item.styles)}}}`);
  const containerStyles = !Array.isArray(container) ? [] : container.map(
    (item) => `@container ${item.query}{${selector}{${(0,_css_object_to_string_css_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__.cssObjectToString)(item.styles)}}}`
  );
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}


//# sourceMappingURL=styles-to-string.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MantineContext: function() { return /* binding */ MantineContext; },
/* harmony export */   useMantineClassNamesPrefix: function() { return /* binding */ useMantineClassNamesPrefix; },
/* harmony export */   useMantineContext: function() { return /* binding */ useMantineContext; },
/* harmony export */   useMantineCssVariablesResolver: function() { return /* binding */ useMantineCssVariablesResolver; },
/* harmony export */   useMantineEnv: function() { return /* binding */ useMantineEnv; },
/* harmony export */   useMantineIsHeadless: function() { return /* binding */ useMantineIsHeadless; },
/* harmony export */   useMantineStyleNonce: function() { return /* binding */ useMantineStyleNonce; },
/* harmony export */   useMantineStylesTransform: function() { return /* binding */ useMantineStylesTransform; },
/* harmony export */   useMantineSxTransform: function() { return /* binding */ useMantineSxTransform; },
/* harmony export */   useMantineWithStaticClasses: function() { return /* binding */ useMantineWithStaticClasses; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const MantineContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function useMantineContext() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
  return useMantineContext().headless;
}
function useMantineSxTransform() {
  return useMantineContext().stylesTransform?.sx;
}
function useMantineStylesTransform() {
  return useMantineContext().stylesTransform?.styles;
}
function useMantineEnv() {
  return useMantineContext().env || "default";
}


//# sourceMappingURL=Mantine.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MantineClasses: function() { return /* binding */ MantineClasses; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/keys/keys.mjs */ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs");
/* harmony import */ var _utils_units_converters_px_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/units-converters/px.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs");
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
'use client';









function MantineClasses() {
  const theme = (0,_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__.useMantineTheme)();
  const nonce = (0,_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_5__.useMantineStyleNonce)();
  const classes = (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_1__.keys)(theme.breakpoints).reduce((acc, breakpoint) => {
    const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
    const pxValue = (0,_utils_units_converters_px_mjs__WEBPACK_IMPORTED_MODULE_2__.px)(theme.breakpoints[breakpoint]);
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_3__.em)(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_3__.em)(pxValue);
    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: classes }
    }
  );
}


//# sourceMappingURL=MantineClasses.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MantineCssVariables: function() { return /* binding */ MantineCssVariables; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _convert_css_variables_convert_css_variables_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../convert-css-variables/convert-css-variables.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs");
/* harmony import */ var _Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _get_merged_variables_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-merged-variables.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs");
/* harmony import */ var _remove_default_variables_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove-default-variables.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs");
'use client';







function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({
  cssVariablesSelector,
  deduplicateCssVariables
}) {
  const theme = (0,_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();
  const nonce = (0,_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineStyleNonce)();
  const generator = (0,_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineCssVariablesResolver)();
  const mergedVariables = (0,_get_merged_variables_mjs__WEBPACK_IMPORTED_MODULE_4__.getMergedVariables)({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
  const cleanedVariables = shouldCleanVariables ? (0,_remove_default_variables_mjs__WEBPACK_IMPORTED_MODULE_5__.removeDefaultVariables)(mergedVariables) : mergedVariables;
  const css = (0,_convert_css_variables_convert_css_variables_mjs__WEBPACK_IMPORTED_MODULE_1__.convertCssVariables)(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";


//# sourceMappingURL=MantineCssVariables.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCssVariablesResolver: function() { return /* binding */ defaultCssVariablesResolver; }
/* harmony export */ });
/* harmony import */ var _utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/keys/keys.mjs */ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs");
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _color_functions_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-functions/get-primary-shade/get-primary-shade.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs");
/* harmony import */ var _color_functions_get_contrast_color_get_contrast_color_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-functions/get-contrast-color/get-contrast-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs");
/* harmony import */ var _get_css_color_variables_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-css-color-variables.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs");
/* harmony import */ var _virtual_color_virtual_color_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./virtual-color/virtual-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs");
'use client';










function assignSizeVariables(variables, sizes, name) {
  (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(sizes).forEach(
    (size) => Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}
const defaultCssVariablesResolver = (theme) => {
  const lightPrimaryShade = (0,_color_functions_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_4__.getPrimaryShade)(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-heading-text-wrap": theme.headings.textWrap,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": (0,_color_functions_get_contrast_color_get_contrast_color_mjs__WEBPACK_IMPORTED_MODULE_5__.getPrimaryContrastColor)(theme, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": (0,_color_functions_get_contrast_color_get_contrast_color_mjs__WEBPACK_IMPORTED_MODULE_5__.getPrimaryContrastColor)(theme, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] = `var(--mantine-color-${theme.primaryColor}-${index})`;
  });
  (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(theme.colors).forEach((color) => {
    const value = theme.colors[color];
    if ((0,_virtual_color_virtual_color_mjs__WEBPACK_IMPORTED_MODULE_7__.isVirtualColor)(value)) {
      Object.assign(
        result.light,
        (0,_get_css_color_variables_mjs__WEBPACK_IMPORTED_MODULE_6__.getCSSColorVariables)({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: "light",
          withColorValues: true
        })
      );
      Object.assign(
        result.dark,
        (0,_get_css_color_variables_mjs__WEBPACK_IMPORTED_MODULE_6__.getCSSColorVariables)({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: "dark",
          withColorValues: true
        })
      );
      return;
    }
    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });
    Object.assign(
      result.light,
      (0,_get_css_color_variables_mjs__WEBPACK_IMPORTED_MODULE_6__.getCSSColorVariables)({
        theme,
        color,
        colorScheme: "light",
        withColorValues: false
      })
    );
    Object.assign(
      result.dark,
      (0,_get_css_color_variables_mjs__WEBPACK_IMPORTED_MODULE_6__.getCSSColorVariables)({
        theme,
        color,
        colorScheme: "dark",
        withColorValues: false
      })
    );
  });
  const headings = theme.headings.sizes;
  (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};


//# sourceMappingURL=default-css-variables-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCSSColorVariables: function() { return /* binding */ getCSSColorVariables; }
/* harmony export */ });
/* harmony import */ var _color_functions_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-functions/get-primary-shade/get-primary-shade.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-functions/rgba/rgba.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs");
'use client';






function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true
}) {
  if (!theme.colors[color]) {
    return {};
  }
  if (colorScheme === "light") {
    const primaryShade2 = (0,_color_functions_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__.getPrimaryShade)(theme, "light");
    const dynamicVariables2 = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade2 === 9 ? 8 : primaryShade2 + 1})`,
      [`--mantine-color-${name}-light`]: (0,_color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.colors[color][primaryShade2], 0.1),
      [`--mantine-color-${name}-light-hover`]: (0,_color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.colors[color][primaryShade2], 0.12),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline-hover`]: (0,_color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.colors[color][primaryShade2], 0.05)
    };
    if (!withColorValues) {
      return dynamicVariables2;
    }
    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables2
    };
  }
  const primaryShade = (0,_color_functions_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__.getPrimaryShade)(theme, "dark");
  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade === 9 ? 8 : primaryShade + 1})`,
    [`--mantine-color-${name}-light`]: (0,_color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha)(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${name}-light-hover`]: (0,_color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha)(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${name}-outline-hover`]: (0,_color_functions_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha)(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    )
  };
  if (!withColorValues) {
    return dynamicVariables;
  }
  return {
    [`--mantine-color-${name}-0`]: theme.colors[color][0],
    [`--mantine-color-${name}-1`]: theme.colors[color][1],
    [`--mantine-color-${name}-2`]: theme.colors[color][2],
    [`--mantine-color-${name}-3`]: theme.colors[color][3],
    [`--mantine-color-${name}-4`]: theme.colors[color][4],
    [`--mantine-color-${name}-5`]: theme.colors[color][5],
    [`--mantine-color-${name}-6`]: theme.colors[color][6],
    [`--mantine-color-${name}-7`]: theme.colors[color][7],
    [`--mantine-color-${name}-8`]: theme.colors[color][8],
    [`--mantine-color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables
  };
}


//# sourceMappingURL=get-css-color-variables.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMergedVariables: function() { return /* binding */ getMergedVariables; }
/* harmony export */ });
/* harmony import */ var _utils_deep_merge_deep_merge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/deep-merge/deep-merge.mjs */ "./node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _default_css_variables_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-css-variables-resolver.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs");
'use client';






function getMergedVariables({ theme, generator }) {
  const defaultResolver = (0,_default_css_variables_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.defaultCssVariablesResolver)(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator ? (0,_utils_deep_merge_deep_merge_mjs__WEBPACK_IMPORTED_MODULE_0__.deepMerge)(defaultResolver, providerGenerator) : defaultResolver;
}


//# sourceMappingURL=get-merged-variables.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeDefaultVariables: function() { return /* binding */ removeDefaultVariables; }
/* harmony export */ });
/* harmony import */ var _utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/keys/keys.mjs */ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _default_theme_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default-theme.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs");
/* harmony import */ var _default_css_variables_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-css-variables-resolver.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs");
'use client';







const defaultCssVariables = (0,_default_css_variables_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultCssVariablesResolver)(_default_theme_mjs__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  (0,_utils_keys_keys_mjs__WEBPACK_IMPORTED_MODULE_0__.keys)(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}


//# sourceMappingURL=remove-default-variables.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVirtualColor: function() { return /* binding */ isVirtualColor; },
/* harmony export */   virtualColor: function() { return /* binding */ virtualColor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _color_functions_colors_tuple_colors_tuple_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color-functions/colors-tuple/colors-tuple.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/colors-tuple/colors-tuple.mjs");





function virtualColor(input) {
  const result = (0,_color_functions_colors_tuple_colors_tuple_mjs__WEBPACK_IMPORTED_MODULE_2__.colorsTuple)(
    Array.from({ length: 10 }).map((_, i) => `var(--mantine-color-${input.name}-${i})`)
  );
  Object.defineProperty(result, "mantine-virtual-color", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true
  });
  Object.defineProperty(result, "dark", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.dark
  });
  Object.defineProperty(result, "light", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.light
  });
  Object.defineProperty(result, "name", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.name
  });
  return result;
}
function isVirtualColor(value) {
  return !!value && typeof value === "object" && "mantine-virtual-color" in value;
}


//# sourceMappingURL=virtual-color.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadlessMantineProvider: function() { return /* binding */ HeadlessMantineProvider; },
/* harmony export */   MantineProvider: function() { return /* binding */ MantineProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _color_scheme_managers_local_storage_manager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-scheme-managers/local-storage-manager.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs");
/* harmony import */ var _Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _MantineClasses_MantineClasses_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MantineClasses/MantineClasses.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs");
/* harmony import */ var _MantineCssVariables_MantineCssVariables_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MantineCssVariables/MantineCssVariables.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _suppress_nextjs_warning_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suppress-nextjs-warning.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs");
/* harmony import */ var _use_mantine_color_scheme_use_provider_color_scheme_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-mantine-color-scheme/use-provider-color-scheme.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs");
/* harmony import */ var _use_respect_reduce_motion_use_respect_reduce_motion_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-respect-reduce-motion/use-respect-reduce-motion.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs");
'use client';












(0,_suppress_nextjs_warning_mjs__WEBPACK_IMPORTED_MODULE_7__.suppressNextjsWarning)();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withStaticClasses = true,
  withGlobalClasses = true,
  deduplicateCssVariables = true,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = (0,_color_scheme_managers_local_storage_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.localStorageColorSchemeManager)(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
  stylesTransform,
  env
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = (0,_use_mantine_color_scheme_use_provider_color_scheme_mjs__WEBPACK_IMPORTED_MODULE_8__.useProviderColorScheme)({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  (0,_use_respect_reduce_motion_use_respect_reduce_motion_mjs__WEBPACK_IMPORTED_MODULE_9__.useRespectReduceMotion)({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.MantineContext.Provider,
    {
      value: {
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
        withStaticClasses,
        stylesTransform,
        env
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__.MantineThemeProvider, { theme, children: [
        withCssVariables && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _MantineCssVariables_MantineCssVariables_mjs__WEBPACK_IMPORTED_MODULE_4__.MantineCssVariables,
          {
            cssVariablesSelector,
            deduplicateCssVariables
          }
        ),
        withGlobalClasses && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MantineClasses_MantineClasses_mjs__WEBPACK_IMPORTED_MODULE_3__.MantineClasses, {}),
        children
      ] })
    }
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";
function HeadlessMantineProvider({ children, theme }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.MantineContext.Provider,
    {
      value: {
        colorScheme: "auto",
        setColorScheme: () => {
        },
        clearColorScheme: () => {
        },
        getRootElement: () => document.documentElement,
        classNamesPrefix: "mantine",
        cssVariablesSelector: ":root",
        withStaticClasses: false,
        headless: true
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__.MantineThemeProvider, { theme, children })
    }
  );
}
HeadlessMantineProvider.displayName = "@mantine/core/HeadlessMantineProvider";


//# sourceMappingURL=MantineProvider.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MantineThemeContext: function() { return /* binding */ MantineThemeContext; },
/* harmony export */   MantineThemeProvider: function() { return /* binding */ MantineThemeProvider; },
/* harmony export */   useMantineTheme: function() { return /* binding */ useMantineTheme; },
/* harmony export */   useSafeMantineTheme: function() { return /* binding */ useSafeMantineTheme; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _default_theme_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../default-theme.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs");
/* harmony import */ var _merge_mantine_theme_merge_mantine_theme_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../merge-mantine-theme/merge-mantine-theme.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs");
'use client';





const MantineThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const useSafeMantineTheme = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MantineThemeContext) || _default_theme_mjs__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_THEME;
function useMantineTheme() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_merge_mantine_theme_merge_mantine_theme_mjs__WEBPACK_IMPORTED_MODULE_3__.mergeMantineTheme)(inherit ? parentTheme : _default_theme_mjs__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MantineThemeContext.Provider, { value: mergedTheme, children });
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";


//# sourceMappingURL=MantineThemeProvider.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/colors-tuple/colors-tuple.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/colors-tuple/colors-tuple.mjs ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorsTuple: function() { return /* binding */ colorsTuple; }
/* harmony export */ });
function colorsTuple(input) {
  if (Array.isArray(input)) {
    return input;
  }
  return Array(10).fill(input);
}


//# sourceMappingURL=colors-tuple.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   darken: function() { return /* binding */ darken; }
/* harmony export */ });
/* harmony import */ var _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../to-rgba/to-rgba.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs");


function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, black ${alpha * 100}%)`;
  }
  const { r, g, b, a } = (0,_to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.toRgba)(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}


//# sourceMappingURL=darken.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultVariantColorsResolver: function() { return /* binding */ defaultVariantColorsResolver; }
/* harmony export */ });
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _darken_darken_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../darken/darken.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs");
/* harmony import */ var _get_gradient_get_gradient_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get-gradient/get-gradient.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs");
/* harmony import */ var _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse-theme-color/parse-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs");
/* harmony import */ var _rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rgba/rgba.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs");
'use client';









const defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  autoContrast
}) => {
  const parsed = (0,_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__.parseThemeColor)({ color, theme });
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (variant === "filled") {
    const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: (0,_darken_darken_mjs__WEBPACK_IMPORTED_MODULE_3__.darken)(color, 0.1),
      color: textColor,
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(parsedColor, 0.1),
        hover: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
      };
    }
    return {
      background: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(color, 0.1),
      hover: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(color, 0.12),
      color,
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(color, 0.05),
      color,
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: (0,_rgba_rgba_mjs__WEBPACK_IMPORTED_MODULE_6__.rgba)(color, 0.12),
      color,
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: (0,_darken_darken_mjs__WEBPACK_IMPORTED_MODULE_3__.darken)(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: (0,_darken_darken_mjs__WEBPACK_IMPORTED_MODULE_3__.darken)(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: (0,_darken_darken_mjs__WEBPACK_IMPORTED_MODULE_3__.darken)(theme.white, 0.01),
      color,
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: (0,_get_gradient_get_gradient_mjs__WEBPACK_IMPORTED_MODULE_4__.getGradient)(gradient, theme),
      hover: (0,_get_gradient_get_gradient_mjs__WEBPACK_IMPORTED_MODULE_4__.getGradient)(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};


//# sourceMappingURL=default-variant-colors-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContrastColor: function() { return /* binding */ getContrastColor; },
/* harmony export */   getPrimaryContrastColor: function() { return /* binding */ getPrimaryContrastColor; }
/* harmony export */ });
/* harmony import */ var _get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-primary-shade/get-primary-shade.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs");
/* harmony import */ var _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse-theme-color/parse-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs");
'use client';



function getContrastColor({ color, theme, autoContrast }) {
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (!_autoContrast) {
    return "var(--mantine-color-white)";
  }
  const parsed = (0,_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_1__.parseThemeColor)({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme, colorScheme) {
  return getContrastColor({
    color: theme.colors[theme.primaryColor][(0,_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__.getPrimaryShade)(theme, colorScheme)],
    theme,
    autoContrast: null
  });
}


//# sourceMappingURL=get-contrast-color.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGradient: function() { return /* binding */ getGradient; }
/* harmony export */ });
/* harmony import */ var _get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
'use client';


function getGradient(gradient, theme) {
  const merged = {
    from: gradient?.from || theme.defaultGradient.from,
    to: gradient?.to || theme.defaultGradient.to,
    deg: gradient?.deg ?? theme.defaultGradient.deg ?? 0
  };
  const fromColor = (0,_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.getThemeColor)(merged.from, theme);
  const toColor = (0,_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.getThemeColor)(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}


//# sourceMappingURL=get-gradient.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPrimaryShade: function() { return /* binding */ getPrimaryShade; }
/* harmony export */ });
'use client';
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}


//# sourceMappingURL=get-primary-shade.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThemeColor: function() { return /* binding */ getThemeColor; }
/* harmony export */ });
/* harmony import */ var _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse-theme-color/parse-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs");
'use client';


function getThemeColor(color, theme) {
  const parsed = (0,_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__.parseThemeColor)({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}


//# sourceMappingURL=get-theme-color.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLightColor: function() { return /* binding */ isLightColor; },
/* harmony export */   luminance: function() { return /* binding */ luminance; }
/* harmony export */ });
/* harmony import */ var _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../to-rgba/to-rgba.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs");


function gammaCorrect(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
  if (color.startsWith("oklch(")) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }
  const { r, g, b } = (0,_to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.toRgba)(color);
  const sR = r / 255;
  const sG = g / 255;
  const sB = b / 255;
  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  if (color.startsWith("var(")) {
    return false;
  }
  return luminance(color) > luminanceThreshold;
}


//# sourceMappingURL=luminance.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseThemeColor: function() { return /* binding */ parseThemeColor; }
/* harmony export */ });
/* harmony import */ var _get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-primary-shade/get-primary-shade.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs");
/* harmony import */ var _luminance_luminance_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../luminance/luminance.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs");
'use client';



function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }
  if (color === "bright") {
    return {
      color,
      value: colorScheme === "dark" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: (0,_luminance_luminance_mjs__WEBPACK_IMPORTED_MODULE_1__.isLightColor)(
        colorScheme === "dark" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  }
  if (color === "dimmed") {
    return {
      color,
      value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      shade: void 0,
      isThemeColor: false,
      isLight: (0,_luminance_luminance_mjs__WEBPACK_IMPORTED_MODULE_1__.isLightColor)(
        colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: (0,_luminance_luminance_mjs__WEBPACK_IMPORTED_MODULE_1__.isLightColor)(
        color === "white" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][(0,_get_primary_shade_get_primary_shade_mjs__WEBPACK_IMPORTED_MODULE_0__.getPrimaryShade)(theme, colorScheme || "light")];
    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: (0,_luminance_luminance_mjs__WEBPACK_IMPORTED_MODULE_1__.isLightColor)(colorValue, theme.luminanceThreshold),
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    isLight: (0,_luminance_luminance_mjs__WEBPACK_IMPORTED_MODULE_1__.isLightColor)(color, theme.luminanceThreshold),
    shade: colorShade,
    variable: void 0
  };
}


//# sourceMappingURL=parse-theme-color.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: function() { return /* binding */ alpha; },
/* harmony export */   rgba: function() { return /* binding */ rgba; }
/* harmony export */ });
/* harmony import */ var _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../to-rgba/to-rgba.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs");


function rgba(color, alpha2) {
  if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  if (color.startsWith("var(")) {
    const mixPercentage = (1 - alpha2) * 100;
    return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
  }
  if (color.startsWith("oklch")) {
    if (color.includes("/")) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
    }
    return color.replace(")", ` / ${alpha2})`);
  }
  const { r, g, b } = (0,_to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.toRgba)(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha2})`;
}
const alpha = rgba;


//# sourceMappingURL=rgba.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toRgba: function() { return /* binding */ toRgba; }
/* harmony export */ });
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  if (hexString.length === 8) {
    const alpha = parseInt(hexString.slice(6, 8), 16) / 255;
    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha
    };
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r, g, b, a: a === void 0 ? 1 : a };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r = x;
    g = 0;
    b = chroma;
  } else {
    r = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}


//# sourceMappingURL=to-rgba.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMantineColorScheme: function() { return /* binding */ isMantineColorScheme; }
/* harmony export */ });
'use client';
function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}


//# sourceMappingURL=is-mantine-color-scheme.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localStorageColorSchemeManager: function() { return /* binding */ localStorageColorSchemeManager; }
/* harmony export */ });
/* harmony import */ var _is_mantine_color_scheme_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-mantine-color-scheme.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs");
'use client';


function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return (0,_is_mantine_color_scheme_mjs__WEBPACK_IMPORTED_MODULE_0__.isMantineColorScheme)(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          (0,_is_mantine_color_scheme_mjs__WEBPACK_IMPORTED_MODULE_0__.isMantineColorScheme)(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}


//# sourceMappingURL=local-storage-manager.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertCssVariables: function() { return /* binding */ convertCssVariables; }
/* harmony export */ });
/* harmony import */ var _css_variables_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-object-to-string.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs");
/* harmony import */ var _wrap_with_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrap-with-selector.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs");
'use client';



function convertCssVariables(input, selector) {
  const sharedVariables = (0,_css_variables_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__.cssVariablesObjectToString)(input.variables);
  const shared = sharedVariables ? (0,_wrap_with_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.wrapWithSelector)(selector, sharedVariables) : "";
  const dark = (0,_css_variables_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__.cssVariablesObjectToString)(input.dark);
  const light = (0,_css_variables_object_to_string_mjs__WEBPACK_IMPORTED_MODULE_0__.cssVariablesObjectToString)(input.light);
  const darkForced = dark ? selector === ":host" ? (0,_wrap_with_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.wrapWithSelector)(`${selector}([data-mantine-color-scheme="dark"])`, dark) : (0,_wrap_with_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.wrapWithSelector)(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const lightForced = light ? selector === ":host" ? (0,_wrap_with_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.wrapWithSelector)(`${selector}([data-mantine-color-scheme="light"])`, light) : (0,_wrap_with_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.wrapWithSelector)(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}


//# sourceMappingURL=convert-css-variables.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssVariablesObjectToString: function() { return /* binding */ cssVariablesObjectToString; }
/* harmony export */ });
'use client';
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}


//# sourceMappingURL=css-variables-object-to-string.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrapWithSelector: function() { return /* binding */ wrapWithSelector; }
/* harmony export */ });
'use client';
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}


//# sourceMappingURL=wrap-with-selector.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_COLORS: function() { return /* binding */ DEFAULT_COLORS; }
/* harmony export */ });
const DEFAULT_COLORS = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};


//# sourceMappingURL=default-colors.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_THEME: function() { return /* binding */ DEFAULT_THEME; }
/* harmony export */ });
/* harmony import */ var _utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _color_functions_default_variant_colors_resolver_default_variant_colors_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs");
/* harmony import */ var _default_colors_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-colors.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs");







const DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
const DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: _default_colors_mjs__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: _color_functions_default_variant_colors_resolver_default_variant_colors_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.defaultVariantColorsResolver,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(34), lineHeight: "1.3" },
      h2: { fontSize: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(26), lineHeight: "1.35" },
      h3: { fontSize: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(22), lineHeight: "1.4" },
      h4: { fontSize: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(18), lineHeight: "1.45" },
      h5: { fontSize: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(16), lineHeight: "1.5" },
      h6: { fontSize: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(12),
    sm: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(14),
    md: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(16),
    lg: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(18),
    xl: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(2),
    sm: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(4),
    md: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(8),
    lg: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(16),
    xl: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(32)
  },
  spacing: {
    xs: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(10),
    sm: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(12),
    md: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(16),
    lg: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(20),
    xl: (0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(10)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(
      15
    )} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(7)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(7)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-5)}`,
    md: `0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(20)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(
      25
    )} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(10)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(10)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-5)}`,
    lg: `0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(28)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(
      23
    )} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(12)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(12)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-7)}`,
    xl: `0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(1)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(36)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(
      28
    )} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(17)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(17)} ${(0,_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(-7)}`
  },
  other: {},
  components: {}
};


//# sourceMappingURL=default-theme.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INVALID_PRIMARY_COLOR_ERROR: function() { return /* binding */ INVALID_PRIMARY_COLOR_ERROR; },
/* harmony export */   INVALID_PRIMARY_SHADE_ERROR: function() { return /* binding */ INVALID_PRIMARY_SHADE_ERROR; },
/* harmony export */   mergeMantineTheme: function() { return /* binding */ mergeMantineTheme; },
/* harmony export */   validateMantineTheme: function() { return /* binding */ validateMantineTheme; }
/* harmony export */ });
/* harmony import */ var _utils_deep_merge_deep_merge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/deep-merge/deep-merge.mjs */ "./node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");





const INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
const INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = (0,_utils_deep_merge_deep_merge_mjs__WEBPACK_IMPORTED_MODULE_0__.deepMerge)(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}


//# sourceMappingURL=merge-mantine-theme.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   suppressNextjsWarning: function() { return /* binding */ suppressNextjsWarning; }
/* harmony export */ });
'use client';
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme")) ; else {
      originalError(...args);
    }
  };
}


//# sourceMappingURL=suppress-nextjs-warning.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProviderColorScheme: function() { return /* binding */ useProviderColorScheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs");
'use client';



function setColorSchemeAttribute(colorScheme, getRootElement) {
  const hasDarkColorScheme = typeof window !== "undefined" && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)")?.matches;
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : hasDarkColorScheme ? "dark" : "light";
  getRootElement()?.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicEffect)(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    if (forceColorScheme === void 0) {
      setColorSchemeAttribute(value, getRootElement);
    }
    if (typeof window !== "undefined" && "matchMedia" in window) {
      media.current = window.matchMedia("(prefers-color-scheme: dark)");
    }
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    media.current?.addEventListener("change", listener);
    return () => media.current?.removeEventListener("change", listener);
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}


//# sourceMappingURL=use-provider-color-scheme.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRespectReduceMotion: function() { return /* binding */ useRespectReduceMotion; }
/* harmony export */ });
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs");
'use client';


function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicEffect)(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}


//# sourceMappingURL=use-respect-reduce-motion.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPolymorphicComponent: function() { return /* binding */ createPolymorphicComponent; }
/* harmony export */ });
function createPolymorphicComponent(component) {
  return component;
}


//# sourceMappingURL=create-polymorphic-component.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToKebabCase: function() { return /* binding */ camelToKebabCase; }
/* harmony export */ });
'use client';
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}


//# sourceMappingURL=camel-to-kebab-case.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepMerge: function() { return /* binding */ deepMerge; }
/* harmony export */ });
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = { ...target };
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}


//# sourceMappingURL=deep-merge.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterProps: function() { return /* binding */ filterProps; }
/* harmony export */ });
'use client';
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}


//# sourceMappingURL=filter-props.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumberLike: function() { return /* binding */ isNumberLike; }
/* harmony export */ });
'use client';
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
      return true;
    }
    const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    const values = value.trim().split(/\s+/);
    return values.every((val) => cssUnitsRegex.test(val));
  }
  return false;
}


//# sourceMappingURL=is-number-like.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keys: function() { return /* binding */ keys; }
/* harmony export */ });
'use client';
function keys(object) {
  return Object.keys(object);
}


//# sourceMappingURL=keys.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   px: function() { return /* binding */ px; }
/* harmony export */ });
function getTransformedScaledValue(value) {
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return value.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}


//# sourceMappingURL=px.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   em: function() { return /* binding */ em; },
/* harmony export */   rem: function() { return /* binding */ rem; }
/* harmony export */ });
function scaleRem(remValue) {
  if (remValue === "0rem") {
    return "0rem";
  }
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  function converter(value) {
    if (value === 0 || value === "0") {
      return `0${units}`;
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value === "") {
        return value;
      }
      if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
        return value;
      }
      if (value.includes(",")) {
        return value.split(",").map((val) => converter(val)).join(",");
      }
      if (value.includes(" ")) {
        return value.split(" ").map((val) => converter(val)).join(" ");
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  }
  return converter;
}
const rem = createConverter("rem", { shouldScale: true });
const em = createConverter("em");


//# sourceMappingURL=rem.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicEffect: function() { return /* binding */ useIsomorphicEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const useIsomorphicEffect = typeof document !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-isomorphic-effect.mjs.map


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: function() { return /* binding */ clsx; }
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ __webpack_exports__["default"] = (clsx);

/***/ }),

/***/ "./src/blocks/Hero/block.json":
/*!************************************!*\
  !*** ./src/blocks/Hero/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/hero","title":"Hero","category":"eara","icon":"smiley","description":"Um bloco personalizado de exemplo","supports":{"html":false},"example":{"attributes":{"name":"Li"}},"attributes":{"name":{"type":"string"}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./editor.scss","style":"file:./styles.scss"}');

/***/ }),

/***/ "./src/blocks/Hero/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/Hero/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const {
  RichText,
  InspectorControls,
  ColorPalette
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl
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
    content,
    textColor,
    alignment,
    showBorder
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        title: __("Configurações do Bloco", "eara")
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
      h: 100,
      c: "red",
      className: "bg-red-800",
      children: "Helo"
    })]
  });
}

/***/ }),

/***/ "./src/blocks/Hero/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/Hero/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Hero/save.js":
/*!*********************************!*\
  !*** ./src/blocks/Hero/save.js ***!
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
function Save(props) {
  const {
    attributes
  } = props;
  const {
    content,
    textColor,
    alignment,
    showBorder
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: `meu-bloco ${showBorder ? 'com-borda' : ''}`,
    style: {
      textAlign: alignment,
      color: textColor
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichText.Content, {
      tagName: "div",
      className: "meu-bloco-conteudo",
      value: content
    })
  });
}

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
/*!**********************************!*\
  !*** ./src/blocks/Hero/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Hero/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Hero/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Hero/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Hero/editor.scss");
const {
  registerBlockType
} = wp.blocks;
const {
  RichText
} = wp.blockEditor;

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