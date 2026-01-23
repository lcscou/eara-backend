/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mantine/carousel/esm/Carousel.context.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/carousel/esm/Carousel.context.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselProvider: function() { return /* binding */ CarouselProvider; },
/* harmony export */   useCarouselContext: function() { return /* binding */ useCarouselContext; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs");
'use client';


const [CarouselProvider, useCarouselContext] = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_0__.createSafeContext)(
  "Carousel component was not found in tree"
);


//# sourceMappingURL=Carousel.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/carousel/esm/Carousel.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@mantine/carousel/esm/Carousel.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: function() { return /* binding */ Carousel; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel-react */ "./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs");
/* harmony import */ var _Carousel_context_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Carousel.context.mjs */ "./node_modules/@mantine/carousel/esm/Carousel.context.mjs");
/* harmony import */ var _CarouselSlide_CarouselSlide_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CarouselSlide/CarouselSlide.mjs */ "./node_modules/@mantine/carousel/esm/CarouselSlide/CarouselSlide.mjs");
/* harmony import */ var _CarouselVariables_CarouselVariables_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CarouselVariables/CarouselVariables.mjs */ "./node_modules/@mantine/carousel/esm/CarouselVariables/CarouselVariables.mjs");
/* harmony import */ var _get_chevron_rotation_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./get-chevron-rotation.mjs */ "./node_modules/@mantine/carousel/esm/get-chevron-rotation.mjs");
/* harmony import */ var _Carousel_module_css_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Carousel.module.css.mjs */ "./node_modules/@mantine/carousel/esm/Carousel.module.css.mjs");
'use client';











const defaultProps = {
  controlSize: 26,
  controlsOffset: "sm",
  slideSize: "100%",
  slideGap: 0,
  orientation: "horizontal",
  align: "center",
  slidesToScroll: 1,
  includeGapInSize: true,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: true,
  withIndicators: false,
  skipSnaps: false,
  containScroll: "",
  withKeyboardEvents: true,
  type: "media"
};
const varsResolver = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.createVarsResolver)(
  (_, { height, controlSize, controlsOffset }) => ({
    root: {
      "--carousel-height": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(height),
      "--carousel-control-size": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)(controlSize),
      "--carousel-controls-offset": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.getSpacing)(controlsOffset)
    }
  })
);
const Carousel = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_10__.factory)((_props, ref) => {
  const props = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_7__.useProps)("Carousel", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlProps,
    previousControlProps,
    controlSize,
    controlsOffset,
    slideSize,
    slideGap,
    orientation,
    height,
    align,
    slidesToScroll,
    includeGapInSize,
    draggable,
    dragFree,
    loop,
    speed,
    initialSlide,
    inViewThreshold,
    withControls,
    withIndicators,
    plugins,
    nextControlIcon,
    previousControlIcon,
    skipSnaps,
    containScroll,
    withKeyboardEvents,
    mod,
    type,
    ...others
  } = props;
  const getStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Carousel",
    classes: _Carousel_module_css_mjs__WEBPACK_IMPORTED_MODULE_19__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const responsiveClassName = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_8__.useRandomClassName)();
  const { dir } = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_11__.useDirection)();
  const [emblaRefElement, embla] = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__["default"])(
    {
      axis: orientation === "horizontal" ? "x" : "y",
      direction: orientation === "horizontal" ? dir : void 0,
      startIndex: initialSlide,
      loop,
      align,
      slidesToScroll,
      draggable,
      dragFree,
      speed,
      inViewThreshold,
      skipSnaps,
      containScroll
    },
    plugins
  );
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [slidesCount, setSlidesCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index) => embla && embla.scrollTo(index), [embla]);
  const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!embla) {
      return;
    }
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    slide !== selected && onSlideChange?.(slide);
  }, [embla, setSelected, onSlideChange, selected]);
  const handlePrevious = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    embla?.scrollPrev();
    onPreviousSlide?.();
  }, [embla]);
  const handleNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    embla?.scrollNext();
    onNextSlide?.();
  }, [embla]);
  const handleKeydown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (event) => {
      if (withKeyboardEvents) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          handleNext();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          handlePrevious();
        }
      }
    },
    [embla]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (embla) {
      getEmblaApi?.(embla);
      handleSelect();
      setSlidesCount(embla.scrollSnapList().length);
      embla.on("select", handleSelect);
      return () => {
        embla.off("select", handleSelect);
      };
    }
    return void 0;
  }, [embla, slidesToScroll, handleSelect]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected(
        (currentSelected) => (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_14__.clamp)(currentSelected, 0, react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).length - 1)
      );
    }
  }, [react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).length, slidesToScroll]);
  const canScrollPrev = embla?.canScrollPrev() || false;
  const canScrollNext = embla?.canScrollNext() || false;
  const indicators = Array(slidesCount).fill(0).map((_, index) => /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
    _mantine_core__WEBPACK_IMPORTED_MODULE_12__.UnstyledButton,
    {
      ...getStyles("indicator"),
      key: index,
      "data-active": index === selected || void 0,
      "aria-hidden": true,
      tabIndex: -1,
      onClick: () => handleScroll(index),
      "data-orientation": orientation,
      onMouseDown: (event) => event.preventDefault()
    }
  ));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Carousel_context_mjs__WEBPACK_IMPORTED_MODULE_15__.CarouselProvider, { value: { getStyles, orientation }, children: [
    type === "container" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CarouselVariables_CarouselVariables_mjs__WEBPACK_IMPORTED_MODULE_17__.CarouselContainerVariables, { ...props, selector: `.${responsiveClassName}` }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CarouselVariables_CarouselVariables_mjs__WEBPACK_IMPORTED_MODULE_17__.CarouselVariables, { ...props, selector: `.${responsiveClassName}` }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _mantine_core__WEBPACK_IMPORTED_MODULE_9__.Box,
      {
        ref,
        ...getStyles("root", { className: "responsiveClassName" }),
        ...others,
        mod: [{ orientation, "include-gap-in-size": includeGapInSize }, mod],
        onKeyDownCapture: handleKeydown,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...getStyles("viewport"), ref: emblaRefElement, "data-type": type, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              ...getStyles("container", { className: responsiveClassName }),
              "data-orientation": orientation,
              children
            }
          ) }),
          withIndicators && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...getStyles("indicators"), "data-orientation": orientation, children: indicators }),
          withControls && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...getStyles("controls"), "data-orientation": orientation, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _mantine_core__WEBPACK_IMPORTED_MODULE_12__.UnstyledButton,
              {
                ...previousControlProps,
                ...getStyles("control", {
                  className: previousControlProps?.className,
                  style: previousControlProps?.style
                }),
                onClick: (event) => {
                  handlePrevious();
                  previousControlProps?.onClick?.(event);
                },
                "data-inactive": !canScrollPrev || void 0,
                tabIndex: canScrollPrev ? 0 : -1,
                children: typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mantine_core__WEBPACK_IMPORTED_MODULE_13__.AccordionChevron,
                  {
                    style: {
                      transform: `rotate(${(0,_get_chevron_rotation_mjs__WEBPACK_IMPORTED_MODULE_18__.getChevronRotation)({
                        dir,
                        orientation,
                        direction: "previous"
                      })}deg)`
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _mantine_core__WEBPACK_IMPORTED_MODULE_12__.UnstyledButton,
              {
                ...getStyles("control", {
                  className: nextControlProps?.className,
                  style: nextControlProps?.style
                }),
                ...nextControlProps,
                onClick: (event) => {
                  handleNext();
                  nextControlProps?.onClick?.(event);
                },
                "data-inactive": !canScrollNext || void 0,
                tabIndex: canScrollNext ? 0 : -1,
                children: typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mantine_core__WEBPACK_IMPORTED_MODULE_13__.AccordionChevron,
                  {
                    style: {
                      transform: `rotate(${(0,_get_chevron_rotation_mjs__WEBPACK_IMPORTED_MODULE_18__.getChevronRotation)({
                        dir,
                        orientation,
                        direction: "next"
                      })}deg)`
                    }
                  }
                )
              }
            )
          ] })
        ]
      }
    )
  ] });
});
Carousel.classes = _Carousel_module_css_mjs__WEBPACK_IMPORTED_MODULE_19__["default"];
Carousel.displayName = "@mantine/carousel/Carousel";
Carousel.Slide = _CarouselSlide_CarouselSlide_mjs__WEBPACK_IMPORTED_MODULE_16__.CarouselSlide;


//# sourceMappingURL=Carousel.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/carousel/esm/Carousel.module.css.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@mantine/carousel/esm/Carousel.module.css.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_17884d0f","viewport":"m_a2dae653","container":"m_fcd81474","controls":"m_39bc3463","control":"m_64f58e10","indicators":"m_71ea3ab1","indicator":"m_eae68602","slide":"m_d98df724"};


//# sourceMappingURL=Carousel.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/carousel/esm/CarouselSlide/CarouselSlide.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@mantine/carousel/esm/CarouselSlide/CarouselSlide.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselSlide: function() { return /* binding */ CarouselSlide; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Carousel_context_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Carousel.context.mjs */ "./node_modules/@mantine/carousel/esm/Carousel.context.mjs");
/* harmony import */ var _Carousel_module_css_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Carousel.module.css.mjs */ "./node_modules/@mantine/carousel/esm/Carousel.module.css.mjs");
'use client';





const defaultProps = {};
const CarouselSlide = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.factory)((props, ref) => {
  const { classNames, className, style, styles, vars, mod, ...others } = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useProps)(
    "CarouselSlide",
    defaultProps,
    props
  );
  const ctx = (0,_Carousel_context_mjs__WEBPACK_IMPORTED_MODULE_4__.useCarouselContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box,
    {
      ref,
      mod: [{ orientation: ctx.orientation }, mod],
      ...ctx.getStyles("slide", { className, style, classNames, styles }),
      ...others
    }
  );
});
CarouselSlide.classes = _Carousel_module_css_mjs__WEBPACK_IMPORTED_MODULE_5__["default"];
CarouselSlide.displayName = "@mantine/carousel/CarouselSlide";


//# sourceMappingURL=CarouselSlide.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/carousel/esm/CarouselVariables/CarouselVariables.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@mantine/carousel/esm/CarouselVariables/CarouselVariables.mjs ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarouselContainerVariables: function() { return /* binding */ CarouselContainerVariables; },
/* harmony export */   CarouselVariables: function() { return /* binding */ CarouselVariables; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs");
'use client';



function CarouselVariables({ slideGap, slideSize, selector }) {
  const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_8__.useMantineTheme)();
  const baseStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.filterProps)({
    "--carousel-slide-gap": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.getSpacing)((0,_mantine_core__WEBPACK_IMPORTED_MODULE_7__.getBaseValue)(slideGap)),
    "--carousel-slide-size": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)((0,_mantine_core__WEBPACK_IMPORTED_MODULE_7__.getBaseValue)(slideSize))
  });
  const queries = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.keys)(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
        acc[breakpoint]["--carousel-slide-gap"] = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.getSpacing)(slideGap[breakpoint]);
      }
      if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
        acc[breakpoint]["--carousel-slide-size"] = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.getSpacing)(slideSize[breakpoint]);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_6__.getSortedBreakpoints)((0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.keys)(queries), theme.breakpoints).filter(
    (breakpoint) => (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.keys)(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.InlineStyles, { styles: baseStyles, media, selector });
}
function getBreakpoints(values) {
  if (typeof values === "object" && values !== null) {
    return (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.keys)(values);
  }
  return [];
}
function sortBreakpoints(breakpoints) {
  return breakpoints.sort((a, b) => (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.px)(a) - (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.px)(b));
}
function getUniqueBreakpoints({ slideGap, slideSize }) {
  const breakpoints = Array.from(
    /* @__PURE__ */ new Set([...getBreakpoints(slideGap), ...getBreakpoints(slideSize)])
  );
  return sortBreakpoints(breakpoints);
}
function CarouselContainerVariables({
  slideGap,
  slideSize,
  selector
}) {
  const baseStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.filterProps)({
    "--carousel-slide-gap": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.getSpacing)((0,_mantine_core__WEBPACK_IMPORTED_MODULE_7__.getBaseValue)(slideGap)),
    "--carousel-slide-size": (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.rem)((0,_mantine_core__WEBPACK_IMPORTED_MODULE_7__.getBaseValue)(slideSize))
  });
  const queries = getUniqueBreakpoints({ slideGap, slideSize }).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
      acc[breakpoint]["--carousel-slide-gap"] = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.getSpacing)(slideGap[breakpoint]);
    }
    if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
      acc[breakpoint]["--carousel-slide-size"] = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_5__.getSpacing)(slideSize[breakpoint]);
    }
    return acc;
  }, {});
  const media = Object.keys(queries).map((breakpoint) => ({
    query: `carousel (min-width: ${breakpoint})`,
    styles: queries[breakpoint]
  }));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.InlineStyles, { styles: baseStyles, container: media, selector });
}


//# sourceMappingURL=CarouselVariables.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/carousel/esm/get-chevron-rotation.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@mantine/carousel/esm/get-chevron-rotation.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChevronRotation: function() { return /* binding */ getChevronRotation; }
/* harmony export */ });
'use client';
function getChevronRotation({ dir, orientation, direction }) {
  if (direction === "previous") {
    return orientation === "horizontal" ? 90 * (dir === "ltr" ? 1 : -1) : -180;
  }
  return orientation === "horizontal" ? 90 * (dir === "ltr" ? -1 : 1) : 0;
}


//# sourceMappingURL=get-chevron-rotation.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/carousel/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@mantine/carousel/styles.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionChevron: function() { return /* binding */ AccordionChevron; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';













function AccordionChevron({ style, size = 16, ...others }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(size), height: (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(size), display: "block" },
      ...others,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "path",
        {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
AccordionChevron.displayName = "@mantine/core/AccordionChevron";


//# sourceMappingURL=AccordionChevron.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnstyledButton: function() { return /* binding */ UnstyledButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _UnstyledButton_module_css_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UnstyledButton.module.css.mjs */ "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs");
'use client';
















const defaultProps = {
  __staticSelector: "UnstyledButton"
};
const UnstyledButton = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_6__.polymorphicFactory)(
  (_props, ref) => {
    const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useProps)("UnstyledButton", defaultProps, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;
    const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.useStyles)({
      name: __staticSelector,
      props,
      classes: _UnstyledButton_module_css_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__.Box,
      {
        ...getStyles("root", { focusable: true }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
      }
    );
  }
);
UnstyledButton.classes = _UnstyledButton_module_css_mjs__WEBPACK_IMPORTED_MODULE_7__["default"];
UnstyledButton.displayName = "@mantine/core/UnstyledButton";


//# sourceMappingURL=UnstyledButton.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_87cf2631"};


//# sourceMappingURL=UnstyledButton.module.css.mjs.map


/***/ }),

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

/***/ "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectionContext: function() { return /* binding */ DirectionContext; },
/* harmony export */   DirectionProvider: function() { return /* binding */ DirectionProvider; },
/* harmony export */   useDirection: function() { return /* binding */ useDirection; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs");
'use client';




const DirectionContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DirectionContext);
}
function DirectionProvider({
  children,
  initialDirection = "ltr",
  detectDirection = true
}) {
  const [dir, setDir] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialDirection);
  const setDirection = (direction) => {
    setDir(direction);
    document.documentElement.setAttribute("dir", direction);
  };
  const toggleDirection = () => setDirection(dir === "ltr" ? "rtl" : "ltr");
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicEffect)(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute("dir");
      if (direction === "rtl" || direction === "ltr") {
        setDirection(direction);
      }
    }
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DirectionContext.Provider, { value: { dir, toggleDirection, setDirection }, children });
}


//# sourceMappingURL=DirectionProvider.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProps: function() { return /* binding */ useProps; }
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filter-props/filter-props.mjs */ "./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
'use client';






function useProps(component, defaultProps, props) {
  const theme = (0,_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return { ...defaultProps, ...contextProps, ...(0,_utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_0__.filterProps)(props) };
}


//# sourceMappingURL=use-props.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/factory/factory.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/factory/factory.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factory: function() { return /* binding */ factory; },
/* harmony export */   getWithProps: function() { return /* binding */ getWithProps; },
/* harmony export */   identity: function() { return /* binding */ identity; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
'use client';



function identity(value) {
  return value;
}
function getWithProps(Component) {
  const _Component = Component;
  return (fixedProps) => {
    const Extended = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Component, { ...fixedProps, ...props, ref }));
    Extended.extend = _Component.extend;
    Extended.displayName = `WithProps(${_Component.displayName})`;
    return Extended;
  };
}
function factory(ui) {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(ui);
  Component.extend = identity;
  Component.withProps = (fixedProps) => {
    const Extended = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  return Component;
}


//# sourceMappingURL=factory.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polymorphicFactory: function() { return /* binding */ polymorphicFactory; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _factory_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
'use client';




function polymorphicFactory(ui) {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(ui);
  Component.withProps = (fixedProps) => {
    const Extended = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  Component.extend = _factory_mjs__WEBPACK_IMPORTED_MODULE_2__.identity;
  return Component;
}


//# sourceMappingURL=polymorphic-factory.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createVarsResolver: function() { return /* binding */ createVarsResolver; }
/* harmony export */ });
'use client';
function createVarsResolver(resolver) {
  return resolver;
}


//# sourceMappingURL=create-vars-resolver.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClassName: function() { return /* binding */ getClassName; }
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _get_global_class_names_get_global_class_names_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-global-class-names/get-global-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs");
/* harmony import */ var _get_options_class_names_get_options_class_names_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-options-class-names/get-options-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs");
/* harmony import */ var _get_resolved_class_names_get_resolved_class_names_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-resolved-class-names/get-resolved-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs");
/* harmony import */ var _get_root_class_name_get_root_class_name_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-root-class-name/get-root-class-name.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs");
/* harmony import */ var _get_selector_class_name_get_selector_class_name_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-selector-class-name/get-selector-class-name.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs");
/* harmony import */ var _get_static_class_names_get_static_class_names_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-static-class-names/get-static-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs");
/* harmony import */ var _get_theme_class_names_get_theme_class_names_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-theme-class-names/get-theme-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs");
/* harmony import */ var _get_variant_class_name_get_variant_class_name_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-variant-class-name/get-variant-class-name.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs");
'use client';










function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx,
  withStaticClasses,
  headless,
  transformedStyles
}) {
  return (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(
    (0,_get_global_class_names_get_global_class_names_mjs__WEBPACK_IMPORTED_MODULE_1__.getGlobalClassNames)({ theme, options, unstyled: unstyled || headless }),
    (0,_get_theme_class_names_get_theme_class_names_mjs__WEBPACK_IMPORTED_MODULE_7__.getThemeClassNames)({ theme, themeName, selector, props, stylesCtx }),
    (0,_get_variant_class_name_get_variant_class_name_mjs__WEBPACK_IMPORTED_MODULE_8__.getVariantClassName)({ options, classes, selector, unstyled }),
    (0,_get_resolved_class_names_get_resolved_class_names_mjs__WEBPACK_IMPORTED_MODULE_3__.getResolvedClassNames)({ selector, stylesCtx, theme, classNames, props }),
    (0,_get_resolved_class_names_get_resolved_class_names_mjs__WEBPACK_IMPORTED_MODULE_3__.getResolvedClassNames)({ selector, stylesCtx, theme, classNames: transformedStyles, props }),
    (0,_get_options_class_names_get_options_class_names_mjs__WEBPACK_IMPORTED_MODULE_2__.getOptionsClassNames)({ selector, stylesCtx, options, props, theme }),
    (0,_get_root_class_name_get_root_class_name_mjs__WEBPACK_IMPORTED_MODULE_4__.getRootClassName)({ rootSelector, selector, className }),
    (0,_get_selector_class_name_get_selector_class_name_mjs__WEBPACK_IMPORTED_MODULE_5__.getSelectorClassName)({ selector, classes, unstyled: unstyled || headless }),
    withStaticClasses && !headless && (0,_get_static_class_names_get_static_class_names_mjs__WEBPACK_IMPORTED_MODULE_6__.getStaticClassNames)({
      themeName,
      classNamesPrefix,
      selector,
      withStaticClass: options?.withStaticClass
    }),
    options?.className
  );
}


//# sourceMappingURL=get-class-name.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOCUS_CLASS_NAMES: function() { return /* binding */ FOCUS_CLASS_NAMES; },
/* harmony export */   getGlobalClassNames: function() { return /* binding */ getGlobalClassNames; }
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';


const FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(
    options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName
  );
}


//# sourceMappingURL=get-global-class-names.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOptionsClassNames: function() { return /* binding */ getOptionsClassNames; }
/* harmony export */ });
/* harmony import */ var _resolve_class_names_resolve_class_names_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolve-class-names/resolve-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs");
'use client';


function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return (0,_resolve_class_names_resolve_class_names_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveClassNames)({
    theme,
    classNames: options?.classNames,
    props: options?.props || props,
    stylesCtx
  })[selector];
}


//# sourceMappingURL=get-options-class-names.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedClassNames: function() { return /* binding */ getResolvedClassNames; }
/* harmony export */ });
/* harmony import */ var _resolve_class_names_resolve_class_names_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolve-class-names/resolve-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs");
'use client';


function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return (0,_resolve_class_names_resolve_class_names_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveClassNames)({ theme, classNames, props, stylesCtx })[selector];
}


//# sourceMappingURL=get-resolved-class-names.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRootClassName: function() { return /* binding */ getRootClassName; }
/* harmony export */ });
'use client';
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}


//# sourceMappingURL=get-root-class-name.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectorClassName: function() { return /* binding */ getSelectorClassName; }
/* harmony export */ });
'use client';
function getSelectorClassName({ selector, classes, unstyled }) {
  return unstyled ? void 0 : classes[selector];
}


//# sourceMappingURL=get-selector-class-name.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStaticClassNames: function() { return /* binding */ getStaticClassNames; }
/* harmony export */ });
'use client';
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass
}) {
  if (withStaticClass === false) {
    return [];
  }
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}


//# sourceMappingURL=get-static-class-names.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThemeClassNames: function() { return /* binding */ getThemeClassNames; }
/* harmony export */ });
/* harmony import */ var _resolve_class_names_resolve_class_names_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolve-class-names/resolve-class-names.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs");
'use client';


function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => (0,_resolve_class_names_resolve_class_names_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveClassNames)({
      theme,
      classNames: theme.components[n]?.classNames,
      props,
      stylesCtx
    })?.[selector]
  );
}


//# sourceMappingURL=get-theme-class-names.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariantClassName: function() { return /* binding */ getVariantClassName; }
/* harmony export */ });
'use client';
function getVariantClassName({
  options,
  classes,
  selector,
  unstyled
}) {
  return options?.variant && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}


//# sourceMappingURL=get-variant-class-name.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveClassNames: function() { return /* binding */ resolveClassNames; }
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';


const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}


//# sourceMappingURL=resolve-class-names.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: function() { return /* binding */ getStyle; }
/* harmony export */ });
/* harmony import */ var _get_theme_styles_get_theme_styles_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-theme-styles/get-theme-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs");
/* harmony import */ var _resolve_style_resolve_style_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-style/resolve-style.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs");
/* harmony import */ var _resolve_styles_resolve_styles_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolve-styles/resolve-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs");
/* harmony import */ var _resolve_vars_resolve_vars_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-vars/resolve-vars.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs");
'use client';





function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver,
  headless,
  withStylesTransform
}) {
  return {
    ...!withStylesTransform && (0,_get_theme_styles_get_theme_styles_mjs__WEBPACK_IMPORTED_MODULE_0__.getThemeStyles)({ theme, themeName, props, stylesCtx, selector }),
    ...!withStylesTransform && (0,_resolve_styles_resolve_styles_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveStyles)({ theme, styles, props, stylesCtx })[selector],
    ...!withStylesTransform && (0,_resolve_styles_resolve_styles_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveStyles)({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[selector],
    ...(0,_resolve_vars_resolve_vars_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveVars)({ theme, props, stylesCtx, vars, varsResolver, selector, themeName, headless }),
    ...rootSelector === selector ? (0,_resolve_style_resolve_style_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveStyle)({ style, theme }) : null,
    ...(0,_resolve_style_resolve_style_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveStyle)({ style: options?.style, theme })
  };
}


//# sourceMappingURL=get-style.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThemeStyles: function() { return /* binding */ getThemeStyles; }
/* harmony export */ });
/* harmony import */ var _resolve_styles_resolve_styles_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolve-styles/resolve-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs");
'use client';


function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => (0,_resolve_styles_resolve_styles_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveStyles)({
      theme,
      styles: theme.components[n]?.styles,
      props,
      stylesCtx
    })[selector]
  ).reduce((acc, val) => ({ ...acc, ...val }), {});
}


//# sourceMappingURL=get-theme-styles.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveStyle: function() { return /* binding */ resolveStyle; }
/* harmony export */ });
'use client';
function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}


//# sourceMappingURL=resolve-style.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveStyles: function() { return /* binding */ resolveStyles; }
/* harmony export */ });
'use client';
function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return { ...acc, ...style(theme, props, stylesCtx) };
    }
    return { ...acc, ...style };
  }, {});
}


//# sourceMappingURL=resolve-styles.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeVars: function() { return /* binding */ mergeVars; }
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/filter-props/filter-props.mjs */ "./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';





function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...(0,_utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_0__.filterProps)(current[key]) };
      });
    }
    return acc;
  }, {});
}


//# sourceMappingURL=merge-vars.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVars: function() { return /* binding */ resolveVars; }
/* harmony export */ });
/* harmony import */ var _merge_vars_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-vars.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs");
'use client';


function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
  headless
}) {
  return (0,_merge_vars_mjs__WEBPACK_IMPORTED_MODULE_0__.mergeVars)([
    headless ? {} : varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((name) => theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx)
  ])?.[selector];
}


//# sourceMappingURL=resolve-vars.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStyles: function() { return /* binding */ useStyles; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MantineProvider/Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _get_class_name_get_class_name_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-class-name/get-class-name.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs");
/* harmony import */ var _get_style_get_style_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-style/get-style.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs");
/* harmony import */ var _use_transformed_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-transformed-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs");
'use client';












function useStyles({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver
}) {
  const theme = (0,_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();
  const classNamesPrefix = (0,_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineClassNamesPrefix)();
  const withStaticClasses = (0,_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineWithStaticClasses)();
  const headless = (0,_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineIsHeadless)();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  const { withStylesTransform, getTransformedStyles } = (0,_use_transformed_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStylesTransform)({
    props,
    stylesCtx,
    themeName
  });
  return (selector, options) => ({
    className: (0,_get_class_name_get_class_name_mjs__WEBPACK_IMPORTED_MODULE_4__.getClassName)({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
      withStaticClasses,
      headless,
      transformedStyles: getTransformedStyles([options?.styles, styles])
    }),
    style: (0,_get_style_get_style_mjs__WEBPACK_IMPORTED_MODULE_5__.getStyle)({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver,
      headless,
      withStylesTransform
    })
  });
}


//# sourceMappingURL=use-styles.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStylesTransform: function() { return /* binding */ useStylesTransform; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MantineProvider/Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
'use client';









function useStylesTransform({ props, stylesCtx, themeName }) {
  const theme = (0,_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();
  const stylesTransform = (0,_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_2__.useMantineStylesTransform)()?.();
  const getTransformedStyles = (styles) => {
    if (!stylesTransform) {
      return [];
    }
    const transformedStyles = styles.map(
      (style) => stylesTransform(style, { props, theme, ctx: stylesCtx })
    );
    return [
      ...transformedStyles,
      ...themeName.map(
        (n) => stylesTransform(theme.components[n]?.styles, { props, theme, ctx: stylesCtx })
      )
    ].filter(Boolean);
  };
  return {
    getTransformedStyles,
    withStylesTransform: !!stylesTransform
  };
}


//# sourceMappingURL=use-transformed-styles.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSafeContext: function() { return /* binding */ createSafeContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
'use client';



function createSafeContext(errorMessage) {
  const Context = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, { value, children });
  return [Provider, useSafeContext];
}


//# sourceMappingURL=create-safe-context.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBaseValue: function() { return /* binding */ getBaseValue; }
/* harmony export */ });
'use client';
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}


//# sourceMappingURL=get-base-value.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBreakpointValue: function() { return /* binding */ getBreakpointValue; }
/* harmony export */ });
/* harmony import */ var _units_converters_px_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units-converters/px.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs");
'use client';


function getBreakpointValue(breakpoint, breakpoints) {
  if (breakpoint in breakpoints) {
    return (0,_units_converters_px_mjs__WEBPACK_IMPORTED_MODULE_0__.px)(breakpoints[breakpoint]);
  }
  return (0,_units_converters_px_mjs__WEBPACK_IMPORTED_MODULE_0__.px)(breakpoint);
}


//# sourceMappingURL=get-breakpoint-value.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFontSize: function() { return /* binding */ getFontSize; },
/* harmony export */   getLineHeight: function() { return /* binding */ getLineHeight; },
/* harmony export */   getRadius: function() { return /* binding */ getRadius; },
/* harmony export */   getShadow: function() { return /* binding */ getShadow; },
/* harmony export */   getSize: function() { return /* binding */ getSize; },
/* harmony export */   getSpacing: function() { return /* binding */ getSpacing; }
/* harmony export */ });
/* harmony import */ var _is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is-number-like/is-number-like.mjs */ "./node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs");
/* harmony import */ var _units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
'use client';



function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return (0,_is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__.isNumberLike)(size) ? convertToRem ? (0,_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "mantine-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
  return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
  if (!size) {
    return void 0;
  }
  return getSize(size, "mantine-shadow", false);
}


//# sourceMappingURL=get-size.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSortedBreakpoints: function() { return /* binding */ getSortedBreakpoints; }
/* harmony export */ });
/* harmony import */ var _get_breakpoint_value_get_breakpoint_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-breakpoint-value/get-breakpoint-value.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs");
'use client';


function getSortedBreakpoints(values, breakpoints) {
  const convertedBreakpoints = values.map((breakpoint) => ({
    value: breakpoint,
    px: (0,_get_breakpoint_value_get_breakpoint_value_mjs__WEBPACK_IMPORTED_MODULE_0__.getBreakpointValue)(breakpoint, breakpoints)
  }));
  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}


//# sourceMappingURL=get-sorted-breakpoints.mjs.map


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

/***/ "./node_modules/@mantine/core/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@mantine/core/styles.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: function() { return /* binding */ clamp; }
/* harmony export */ });
'use client';
function clamp(value, min, max) {
  if (min === void 0 && max === void 0) {
    return value;
  }
  if (min !== void 0 && max === void 0) {
    return Math.max(value, min);
  }
  if (min === void 0 && max !== void 0) {
    return Math.min(value, max);
  }
  return Math.min(Math.max(value, min), max);
}


//# sourceMappingURL=clamp.mjs.map


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

/***/ "./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useEmblaCarousel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! embla-carousel-reactive-utils */ "./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js");
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ "./node_modules/embla-carousel/esm/embla-carousel.esm.js");




function useEmblaCarousel(options = {}, plugins = []) {
  const storedOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options);
  const storedPlugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(plugins);
  const [emblaApi, setEmblaApi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const reInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
  }, [emblaApi]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.areOptionsEqual)(storedOptions.current, options)) return;
    storedOptions.current = options;
    reInit();
  }, [options, reInit]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.arePluginsEqual)(storedPlugins.current, plugins)) return;
    storedPlugins.current = plugins;
    reInit();
  }, [plugins, reInit]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() && viewport) {
      embla_carousel__WEBPACK_IMPORTED_MODULE_2__["default"].globalOptions = useEmblaCarousel.globalOptions;
      const newEmblaApi = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])(viewport, storedOptions.current, storedPlugins.current);
      setEmblaApi(newEmblaApi);
      return () => newEmblaApi.destroy();
    } else {
      setEmblaApi(undefined);
    }
  }, [viewport, setEmblaApi]);
  return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = undefined;


//# sourceMappingURL=embla-carousel-react.esm.js.map


/***/ }),

/***/ "./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areOptionsEqual: function() { return /* binding */ areOptionsEqual; },
/* harmony export */   arePluginsEqual: function() { return /* binding */ arePluginsEqual; },
/* harmony export */   canUseDOM: function() { return /* binding */ canUseDOM; },
/* harmony export */   sortAndMapPluginToOptions: function() { return /* binding */ sortAndMapPluginToOptions; }
/* harmony export */ });
function isObject(subject) {
  return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
  return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
  const optionsAKeys = Object.keys(optionsA);
  const optionsBKeys = Object.keys(optionsB);
  if (optionsAKeys.length !== optionsBKeys.length) return false;
  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
  if (breakpointsA !== breakpointsB) return false;
  return optionsAKeys.every(key => {
    const valueA = optionsA[key];
    const valueB = optionsB[key];
    if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
    return areOptionsEqual(valueA, valueB);
  });
}
function sortAndMapPluginToOptions(plugins) {
  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map(plugin => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
  if (pluginsA.length !== pluginsB.length) return false;
  const optionsA = sortAndMapPluginToOptions(pluginsA);
  const optionsB = sortAndMapPluginToOptions(pluginsB);
  return optionsA.every((optionA, index) => {
    const optionB = optionsB[index];
    return areOptionsEqual(optionA, optionB);
  });
}


//# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map


/***/ }),

/***/ "./node_modules/embla-carousel/esm/embla-carousel.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/embla-carousel/esm/embla-carousel.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EmblaCarousel; }
/* harmony export */ });
function isNumber(subject) {
  return typeof subject === 'number';
}
function isString(subject) {
  return typeof subject === 'string';
}
function isBoolean(subject) {
  return typeof subject === 'boolean';
}
function isObject(subject) {
  return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
  return Math.abs(n);
}
function mathSign(n) {
  return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
  return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
  const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
  return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
  return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
  return objectKeys(array).map(Number);
}
function arrayLast(array) {
  return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
  return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
  return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
  return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
  return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
  return [objectA, objectB].reduce((mergedObjects, currentObject) => {
    objectKeys(currentObject).forEach(key => {
      const valueA = mergedObjects[key];
      const valueB = currentObject[key];
      const areObjects = isObject(valueA) && isObject(valueB);
      mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
    });
    return mergedObjects;
  }, {});
}
function isMouseEvent(evt, ownerWindow) {
  return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}

function Alignment(align, viewSize) {
  const predefined = {
    start,
    center,
    end
  };
  function start() {
    return 0;
  }
  function center(n) {
    return end(n) / 2;
  }
  function end(n) {
    return viewSize - n;
  }
  function measure(n, index) {
    if (isString(align)) return predefined[align](n);
    return align(viewSize, n, index);
  }
  const self = {
    measure
  };
  return self;
}

function EventStore() {
  let listeners = [];
  function add(node, type, handler, options = {
    passive: true
  }) {
    let removeListener;
    if ('addEventListener' in node) {
      node.addEventListener(type, handler, options);
      removeListener = () => node.removeEventListener(type, handler, options);
    } else {
      const legacyMediaQueryList = node;
      legacyMediaQueryList.addListener(handler);
      removeListener = () => legacyMediaQueryList.removeListener(handler);
    }
    listeners.push(removeListener);
    return self;
  }
  function clear() {
    listeners = listeners.filter(remove => remove());
  }
  const self = {
    add,
    clear
  };
  return self;
}

function Animations(ownerDocument, ownerWindow, update, render) {
  const documentVisibleHandler = EventStore();
  const fixedTimeStep = 1000 / 60;
  let lastTimeStamp = null;
  let accumulatedTime = 0;
  let animationId = 0;
  function init() {
    documentVisibleHandler.add(ownerDocument, 'visibilitychange', () => {
      if (ownerDocument.hidden) reset();
    });
  }
  function destroy() {
    stop();
    documentVisibleHandler.clear();
  }
  function animate(timeStamp) {
    if (!animationId) return;
    if (!lastTimeStamp) {
      lastTimeStamp = timeStamp;
      update();
      update();
    }
    const timeElapsed = timeStamp - lastTimeStamp;
    lastTimeStamp = timeStamp;
    accumulatedTime += timeElapsed;
    while (accumulatedTime >= fixedTimeStep) {
      update();
      accumulatedTime -= fixedTimeStep;
    }
    const alpha = accumulatedTime / fixedTimeStep;
    render(alpha);
    if (animationId) {
      animationId = ownerWindow.requestAnimationFrame(animate);
    }
  }
  function start() {
    if (animationId) return;
    animationId = ownerWindow.requestAnimationFrame(animate);
  }
  function stop() {
    ownerWindow.cancelAnimationFrame(animationId);
    lastTimeStamp = null;
    accumulatedTime = 0;
    animationId = 0;
  }
  function reset() {
    lastTimeStamp = null;
    accumulatedTime = 0;
  }
  const self = {
    init,
    destroy,
    start,
    stop,
    update,
    render
  };
  return self;
}

function Axis(axis, contentDirection) {
  const isRightToLeft = contentDirection === 'rtl';
  const isVertical = axis === 'y';
  const scroll = isVertical ? 'y' : 'x';
  const cross = isVertical ? 'x' : 'y';
  const sign = !isVertical && isRightToLeft ? -1 : 1;
  const startEdge = getStartEdge();
  const endEdge = getEndEdge();
  function measureSize(nodeRect) {
    const {
      height,
      width
    } = nodeRect;
    return isVertical ? height : width;
  }
  function getStartEdge() {
    if (isVertical) return 'top';
    return isRightToLeft ? 'right' : 'left';
  }
  function getEndEdge() {
    if (isVertical) return 'bottom';
    return isRightToLeft ? 'left' : 'right';
  }
  function direction(n) {
    return n * sign;
  }
  const self = {
    scroll,
    cross,
    startEdge,
    endEdge,
    measureSize,
    direction
  };
  return self;
}

function Limit(min = 0, max = 0) {
  const length = mathAbs(min - max);
  function reachedMin(n) {
    return n < min;
  }
  function reachedMax(n) {
    return n > max;
  }
  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }
  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }
  function removeOffset(n) {
    if (!length) return n;
    return n - length * Math.ceil((n - max) / length);
  }
  const self = {
    length,
    max,
    min,
    constrain,
    reachedAny,
    reachedMax,
    reachedMin,
    removeOffset
  };
  return self;
}

function Counter(max, start, loop) {
  const {
    constrain
  } = Limit(0, max);
  const loopEnd = max + 1;
  let counter = withinLimit(start);
  function withinLimit(n) {
    return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
  }
  function get() {
    return counter;
  }
  function set(n) {
    counter = withinLimit(n);
    return self;
  }
  function add(n) {
    return clone().set(get() + n);
  }
  function clone() {
    return Counter(max, get(), loop);
  }
  const self = {
    get,
    set,
    add,
    clone
  };
  return self;
}

function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
  const {
    cross: crossAxis,
    direction
  } = axis;
  const focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  const nonPassiveEvent = {
    passive: false
  };
  const initEvents = EventStore();
  const dragEvents = EventStore();
  const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
  const snapForceBoost = {
    mouse: 300,
    touch: 400
  };
  const freeForceBoost = {
    mouse: 500,
    touch: 600
  };
  const baseSpeed = dragFree ? 43 : 25;
  let isMoving = false;
  let startScroll = 0;
  let startCross = 0;
  let pointerIsDown = false;
  let preventScroll = false;
  let preventClick = false;
  let isMouse = false;
  function init(emblaApi) {
    if (!watchDrag) return;
    function downIfAllowed(evt) {
      if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
    }
    const node = rootNode;
    initEvents.add(node, 'dragstart', evt => evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', () => undefined, nonPassiveEvent).add(node, 'touchend', () => undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
  }
  function destroy() {
    initEvents.clear();
    dragEvents.clear();
  }
  function addDragEvents() {
    const node = isMouse ? ownerDocument : rootNode;
    dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
  }
  function isFocusNode(node) {
    const nodeName = node.nodeName || '';
    return focusNodes.includes(nodeName);
  }
  function forceBoost() {
    const boost = dragFree ? freeForceBoost : snapForceBoost;
    const type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }
  function allowedForce(force, targetChanged) {
    const next = index.add(mathSign(force) * -1);
    const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
    if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
    if (skipSnaps && targetChanged) return baseForce * 0.5;
    return scrollTarget.byIndex(next.get(), 0).distance;
  }
  function down(evt) {
    const isMouseEvt = isMouseEvent(evt, ownerWindow);
    isMouse = isMouseEvt;
    preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
    isMoving = deltaAbs(target.get(), location.get()) >= 2;
    if (isMouseEvt && evt.button !== 0) return;
    if (isFocusNode(evt.target)) return;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    scrollBody.useFriction(0).useDuration(0);
    target.set(location);
    addDragEvents();
    startScroll = dragTracker.readPoint(evt);
    startCross = dragTracker.readPoint(evt, crossAxis);
    eventHandler.emit('pointerDown');
  }
  function move(evt) {
    const isTouchEvt = !isMouseEvent(evt, ownerWindow);
    if (isTouchEvt && evt.touches.length >= 2) return up(evt);
    const lastScroll = dragTracker.readPoint(evt);
    const lastCross = dragTracker.readPoint(evt, crossAxis);
    const diffScroll = deltaAbs(lastScroll, startScroll);
    const diffCross = deltaAbs(lastCross, startCross);
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt);
      preventScroll = diffScroll > diffCross;
      if (!preventScroll) return up(evt);
    }
    const diff = dragTracker.pointerMove(evt);
    if (diffScroll > dragThreshold) preventClick = true;
    scrollBody.useFriction(0.3).useDuration(0.75);
    animation.start();
    target.add(direction(diff));
    evt.preventDefault();
  }
  function up(evt) {
    const currentLocation = scrollTarget.byDistance(0, false);
    const targetChanged = currentLocation.index !== index.get();
    const rawForce = dragTracker.pointerUp(evt) * forceBoost();
    const force = allowedForce(direction(rawForce), targetChanged);
    const forceFactor = factorAbs(rawForce, force);
    const speed = baseSpeed - 10 * forceFactor;
    const friction = baseFriction + forceFactor / 50;
    preventScroll = false;
    pointerIsDown = false;
    dragEvents.clear();
    scrollBody.useDuration(speed).useFriction(friction);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    eventHandler.emit('pointerUp');
  }
  function click(evt) {
    if (preventClick) {
      evt.stopPropagation();
      evt.preventDefault();
      preventClick = false;
    }
  }
  function pointerDown() {
    return pointerIsDown;
  }
  const self = {
    init,
    destroy,
    pointerDown
  };
  return self;
}

function DragTracker(axis, ownerWindow) {
  const logInterval = 170;
  let startEvent;
  let lastEvent;
  function readTime(evt) {
    return evt.timeStamp;
  }
  function readPoint(evt, evtAxis) {
    const property = evtAxis || axis.scroll;
    const coord = `client${property === 'x' ? 'X' : 'Y'}`;
    return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
  }
  function pointerDown(evt) {
    startEvent = evt;
    lastEvent = evt;
    return readPoint(evt);
  }
  function pointerMove(evt) {
    const diff = readPoint(evt) - readPoint(lastEvent);
    const expired = readTime(evt) - readTime(startEvent) > logInterval;
    lastEvent = evt;
    if (expired) startEvent = evt;
    return diff;
  }
  function pointerUp(evt) {
    if (!startEvent || !lastEvent) return 0;
    const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
    const diffTime = readTime(evt) - readTime(startEvent);
    const expired = readTime(evt) - readTime(lastEvent) > logInterval;
    const force = diffDrag / diffTime;
    const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
    return isFlick ? force : 0;
  }
  const self = {
    pointerDown,
    pointerMove,
    pointerUp,
    readPoint
  };
  return self;
}

function NodeRects() {
  function measure(node) {
    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight
    } = node;
    const offset = {
      top: offsetTop,
      right: offsetLeft + offsetWidth,
      bottom: offsetTop + offsetHeight,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight
    };
    return offset;
  }
  const self = {
    measure
  };
  return self;
}

function PercentOfView(viewSize) {
  function measure(n) {
    return viewSize * (n / 100);
  }
  const self = {
    measure
  };
  return self;
}

function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
  const observeNodes = [container].concat(slides);
  let resizeObserver;
  let containerSize;
  let slideSizes = [];
  let destroyed = false;
  function readSize(node) {
    return axis.measureSize(nodeRects.measure(node));
  }
  function init(emblaApi) {
    if (!watchResize) return;
    containerSize = readSize(container);
    slideSizes = slides.map(readSize);
    function defaultCallback(entries) {
      for (const entry of entries) {
        if (destroyed) return;
        const isContainer = entry.target === container;
        const slideIndex = slides.indexOf(entry.target);
        const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
        const newSize = readSize(isContainer ? container : slides[slideIndex]);
        const diffSize = mathAbs(newSize - lastSize);
        if (diffSize >= 0.5) {
          emblaApi.reInit();
          eventHandler.emit('resize');
          break;
        }
      }
    }
    resizeObserver = new ResizeObserver(entries => {
      if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
        defaultCallback(entries);
      }
    });
    ownerWindow.requestAnimationFrame(() => {
      observeNodes.forEach(node => resizeObserver.observe(node));
    });
  }
  function destroy() {
    destroyed = true;
    if (resizeObserver) resizeObserver.disconnect();
  }
  const self = {
    init,
    destroy
  };
  return self;
}

function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
  let scrollVelocity = 0;
  let scrollDirection = 0;
  let scrollDuration = baseDuration;
  let scrollFriction = baseFriction;
  let rawLocation = location.get();
  let rawLocationPrevious = 0;
  function seek() {
    const displacement = target.get() - location.get();
    const isInstant = !scrollDuration;
    let scrollDistance = 0;
    if (isInstant) {
      scrollVelocity = 0;
      previousLocation.set(target);
      location.set(target);
      scrollDistance = displacement;
    } else {
      previousLocation.set(location);
      scrollVelocity += displacement / scrollDuration;
      scrollVelocity *= scrollFriction;
      rawLocation += scrollVelocity;
      location.add(scrollVelocity);
      scrollDistance = rawLocation - rawLocationPrevious;
    }
    scrollDirection = mathSign(scrollDistance);
    rawLocationPrevious = rawLocation;
    return self;
  }
  function settled() {
    const diff = target.get() - offsetLocation.get();
    return mathAbs(diff) < 0.001;
  }
  function duration() {
    return scrollDuration;
  }
  function direction() {
    return scrollDirection;
  }
  function velocity() {
    return scrollVelocity;
  }
  function useBaseDuration() {
    return useDuration(baseDuration);
  }
  function useBaseFriction() {
    return useFriction(baseFriction);
  }
  function useDuration(n) {
    scrollDuration = n;
    return self;
  }
  function useFriction(n) {
    scrollFriction = n;
    return self;
  }
  const self = {
    direction,
    duration,
    velocity,
    seek,
    settled,
    useBaseFriction,
    useBaseDuration,
    useFriction,
    useDuration
  };
  return self;
}

function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
  const pullBackThreshold = percentOfView.measure(10);
  const edgeOffsetTolerance = percentOfView.measure(50);
  const frictionLimit = Limit(0.1, 0.99);
  let disabled = false;
  function shouldConstrain() {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location.get())) return false;
    return true;
  }
  function constrain(pointerDown) {
    if (!shouldConstrain()) return;
    const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
    const diffToEdge = mathAbs(limit[edge] - location.get());
    const diffToTarget = target.get() - location.get();
    const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
    target.subtract(diffToTarget * friction);
    if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useDuration(25).useBaseFriction();
    }
  }
  function toggleActive(active) {
    disabled = !active;
  }
  const self = {
    shouldConstrain,
    constrain,
    toggleActive
  };
  return self;
}

function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
  const scrollBounds = Limit(-contentSize + viewSize, 0);
  const snapsBounded = measureBounded();
  const scrollContainLimit = findScrollContainLimit();
  const snapsContained = measureContained();
  function usePixelTolerance(bound, snap) {
    return deltaAbs(bound, snap) <= 1;
  }
  function findScrollContainLimit() {
    const startSnap = snapsBounded[0];
    const endSnap = arrayLast(snapsBounded);
    const min = snapsBounded.lastIndexOf(startSnap);
    const max = snapsBounded.indexOf(endSnap) + 1;
    return Limit(min, max);
  }
  function measureBounded() {
    return snapsAligned.map((snapAligned, index) => {
      const {
        min,
        max
      } = scrollBounds;
      const snap = scrollBounds.constrain(snapAligned);
      const isFirst = !index;
      const isLast = arrayIsLastIndex(snapsAligned, index);
      if (isFirst) return max;
      if (isLast) return min;
      if (usePixelTolerance(min, snap)) return min;
      if (usePixelTolerance(max, snap)) return max;
      return snap;
    }).map(scrollBound => parseFloat(scrollBound.toFixed(3)));
  }
  function measureContained() {
    if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
    if (containScroll === 'keepSnaps') return snapsBounded;
    const {
      min,
      max
    } = scrollContainLimit;
    return snapsBounded.slice(min, max);
  }
  const self = {
    snapsContained,
    scrollContainLimit
  };
  return self;
}

function ScrollLimit(contentSize, scrollSnaps, loop) {
  const max = scrollSnaps[0];
  const min = loop ? max - contentSize : arrayLast(scrollSnaps);
  const limit = Limit(min, max);
  const self = {
    limit
  };
  return self;
}

function ScrollLooper(contentSize, limit, location, vectors) {
  const jointSafety = 0.1;
  const min = limit.min + jointSafety;
  const max = limit.max + jointSafety;
  const {
    reachedMin,
    reachedMax
  } = Limit(min, max);
  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }
  function loop(direction) {
    if (!shouldLoop(direction)) return;
    const loopDistance = contentSize * (direction * -1);
    vectors.forEach(v => v.add(loopDistance));
  }
  const self = {
    loop
  };
  return self;
}

function ScrollProgress(limit) {
  const {
    max,
    length
  } = limit;
  function get(n) {
    const currentLocation = n - max;
    return length ? currentLocation / -length : 0;
  }
  const self = {
    get
  };
  return self;
}

function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
  const {
    startEdge,
    endEdge
  } = axis;
  const {
    groupSlides
  } = slidesToScroll;
  const alignments = measureSizes().map(alignment.measure);
  const snaps = measureUnaligned();
  const snapsAligned = measureAligned();
  function measureSizes() {
    return groupSlides(slideRects).map(rects => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
  }
  function measureUnaligned() {
    return slideRects.map(rect => containerRect[startEdge] - rect[startEdge]).map(snap => -mathAbs(snap));
  }
  function measureAligned() {
    return groupSlides(snaps).map(g => g[0]).map((snap, index) => snap + alignments[index]);
  }
  const self = {
    snaps,
    snapsAligned
  };
  return self;
}

function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
  const {
    groupSlides
  } = slidesToScroll;
  const {
    min,
    max
  } = scrollContainLimit;
  const slideRegistry = createSlideRegistry();
  function createSlideRegistry() {
    const groupedSlideIndexes = groupSlides(slideIndexes);
    const doNotContain = !containSnaps || containScroll === 'keepSnaps';
    if (scrollSnaps.length === 1) return [slideIndexes];
    if (doNotContain) return groupedSlideIndexes;
    return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(groups, index);
      if (isFirst) {
        const range = arrayLast(groups[0]) + 1;
        return arrayFromNumber(range);
      }
      if (isLast) {
        const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
        return arrayFromNumber(range, arrayLast(groups)[0]);
      }
      return group;
    });
  }
  const self = {
    slideRegistry
  };
  return self;
}

function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
  const {
    reachedAny,
    removeOffset,
    constrain
  } = limit;
  function minDistance(distances) {
    return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
  }
  function findTargetSnap(target) {
    const distance = loop ? removeOffset(target) : constrain(target);
    const ascDiffsToSnaps = scrollSnaps.map((snap, index) => ({
      diff: shortcut(snap - distance, 0),
      index
    })).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff));
    const {
      index
    } = ascDiffsToSnaps[0];
    return {
      index,
      distance
    };
  }
  function shortcut(target, direction) {
    const targets = [target, target + contentSize, target - contentSize];
    if (!loop) return target;
    if (!direction) return minDistance(targets);
    const matchingTargets = targets.filter(t => mathSign(t) === direction);
    if (matchingTargets.length) return minDistance(matchingTargets);
    return arrayLast(targets) - contentSize;
  }
  function byIndex(index, direction) {
    const diffToSnap = scrollSnaps[index] - targetVector.get();
    const distance = shortcut(diffToSnap, direction);
    return {
      index,
      distance
    };
  }
  function byDistance(distance, snap) {
    const target = targetVector.get() + distance;
    const {
      index,
      distance: targetSnapDistance
    } = findTargetSnap(target);
    const reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index,
      distance
    };
    const diffToSnap = scrollSnaps[index] - targetSnapDistance;
    const snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index,
      distance: snapDistance
    };
  }
  const self = {
    byDistance,
    byIndex,
    shortcut
  };
  return self;
}

function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
  function scrollTo(target) {
    const distanceDiff = target.distance;
    const indexDiff = target.index !== indexCurrent.get();
    targetVector.add(distanceDiff);
    if (distanceDiff) {
      if (scrollBody.duration()) {
        animation.start();
      } else {
        animation.update();
        animation.render(1);
        animation.update();
      }
    }
    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      eventHandler.emit('select');
    }
  }
  function distance(n, snap) {
    const target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }
  function index(n, direction) {
    const targetIndex = indexCurrent.clone().set(n);
    const target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }
  const self = {
    distance,
    index
  };
  return self;
}

function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
  const focusListenerOptions = {
    passive: true,
    capture: true
  };
  let lastTabPressTime = 0;
  function init(emblaApi) {
    if (!watchFocus) return;
    function defaultCallback(index) {
      const nowTime = new Date().getTime();
      const diffTime = nowTime - lastTabPressTime;
      if (diffTime > 10) return;
      eventHandler.emit('slideFocusStart');
      root.scrollLeft = 0;
      const group = slideRegistry.findIndex(group => group.includes(index));
      if (!isNumber(group)) return;
      scrollBody.useDuration(0);
      scrollTo.index(group, 0);
      eventHandler.emit('slideFocus');
    }
    eventStore.add(document, 'keydown', registerTabPress, false);
    slides.forEach((slide, slideIndex) => {
      eventStore.add(slide, 'focus', evt => {
        if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
          defaultCallback(slideIndex);
        }
      }, focusListenerOptions);
    });
  }
  function registerTabPress(event) {
    if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
  }
  const self = {
    init
  };
  return self;
}

function Vector1D(initialValue) {
  let value = initialValue;
  function get() {
    return value;
  }
  function set(n) {
    value = normalizeInput(n);
  }
  function add(n) {
    value += normalizeInput(n);
  }
  function subtract(n) {
    value -= normalizeInput(n);
  }
  function normalizeInput(n) {
    return isNumber(n) ? n : n.get();
  }
  const self = {
    get,
    set,
    add,
    subtract
  };
  return self;
}

function Translate(axis, container) {
  const translate = axis.scroll === 'x' ? x : y;
  const containerStyle = container.style;
  let previousTarget = null;
  let disabled = false;
  function x(n) {
    return `translate3d(${n}px,0px,0px)`;
  }
  function y(n) {
    return `translate3d(0px,${n}px,0px)`;
  }
  function to(target) {
    if (disabled) return;
    const newTarget = roundToTwoDecimals(axis.direction(target));
    if (newTarget === previousTarget) return;
    containerStyle.transform = translate(newTarget);
    previousTarget = newTarget;
  }
  function toggleActive(active) {
    disabled = !active;
  }
  function clear() {
    if (disabled) return;
    containerStyle.transform = '';
    if (!container.getAttribute('style')) container.removeAttribute('style');
  }
  const self = {
    clear,
    to,
    toggleActive
  };
  return self;
}

function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
  const roundingSafety = 0.5;
  const ascItems = arrayKeys(slideSizesWithGaps);
  const descItems = arrayKeys(slideSizesWithGaps).reverse();
  const loopPoints = startPoints().concat(endPoints());
  function removeSlideSizes(indexes, from) {
    return indexes.reduce((a, i) => {
      return a - slideSizesWithGaps[i];
    }, from);
  }
  function slidesInGap(indexes, gap) {
    return indexes.reduce((a, i) => {
      const remainingGap = removeSlideSizes(a, gap);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }
  function findSlideBounds(offset) {
    return snaps.map((snap, index) => ({
      start: snap - slideSizes[index] + roundingSafety + offset,
      end: snap + viewSize - roundingSafety + offset
    }));
  }
  function findLoopPoints(indexes, offset, isEndEdge) {
    const slideBounds = findSlideBounds(offset);
    return indexes.map(index => {
      const initial = isEndEdge ? 0 : -contentSize;
      const altered = isEndEdge ? contentSize : 0;
      const boundEdge = isEndEdge ? 'end' : 'start';
      const loopPoint = slideBounds[index][boundEdge];
      return {
        index,
        loopPoint,
        slideLocation: Vector1D(-1),
        translate: Translate(axis, slides[index]),
        target: () => location.get() > loopPoint ? initial : altered
      };
    });
  }
  function startPoints() {
    const gap = scrollSnaps[0];
    const indexes = slidesInGap(descItems, gap);
    return findLoopPoints(indexes, contentSize, false);
  }
  function endPoints() {
    const gap = viewSize - scrollSnaps[0] - 1;
    const indexes = slidesInGap(ascItems, gap);
    return findLoopPoints(indexes, -contentSize, true);
  }
  function canLoop() {
    return loopPoints.every(({
      index
    }) => {
      const otherIndexes = ascItems.filter(i => i !== index);
      return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
    });
  }
  function loop() {
    loopPoints.forEach(loopPoint => {
      const {
        target,
        translate,
        slideLocation
      } = loopPoint;
      const shiftLocation = target();
      if (shiftLocation === slideLocation.get()) return;
      translate.to(shiftLocation);
      slideLocation.set(shiftLocation);
    });
  }
  function clear() {
    loopPoints.forEach(loopPoint => loopPoint.translate.clear());
  }
  const self = {
    canLoop,
    clear,
    loop,
    loopPoints
  };
  return self;
}

function SlidesHandler(container, eventHandler, watchSlides) {
  let mutationObserver;
  let destroyed = false;
  function init(emblaApi) {
    if (!watchSlides) return;
    function defaultCallback(mutations) {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          emblaApi.reInit();
          eventHandler.emit('slidesChanged');
          break;
        }
      }
    }
    mutationObserver = new MutationObserver(mutations => {
      if (destroyed) return;
      if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
        defaultCallback(mutations);
      }
    });
    mutationObserver.observe(container, {
      childList: true
    });
  }
  function destroy() {
    if (mutationObserver) mutationObserver.disconnect();
    destroyed = true;
  }
  const self = {
    init,
    destroy
  };
  return self;
}

function SlidesInView(container, slides, eventHandler, threshold) {
  const intersectionEntryMap = {};
  let inViewCache = null;
  let notInViewCache = null;
  let intersectionObserver;
  let destroyed = false;
  function init() {
    intersectionObserver = new IntersectionObserver(entries => {
      if (destroyed) return;
      entries.forEach(entry => {
        const index = slides.indexOf(entry.target);
        intersectionEntryMap[index] = entry;
      });
      inViewCache = null;
      notInViewCache = null;
      eventHandler.emit('slidesInView');
    }, {
      root: container.parentElement,
      threshold
    });
    slides.forEach(slide => intersectionObserver.observe(slide));
  }
  function destroy() {
    if (intersectionObserver) intersectionObserver.disconnect();
    destroyed = true;
  }
  function createInViewList(inView) {
    return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
      const index = parseInt(slideIndex);
      const {
        isIntersecting
      } = intersectionEntryMap[index];
      const inViewMatch = inView && isIntersecting;
      const notInViewMatch = !inView && !isIntersecting;
      if (inViewMatch || notInViewMatch) list.push(index);
      return list;
    }, []);
  }
  function get(inView = true) {
    if (inView && inViewCache) return inViewCache;
    if (!inView && notInViewCache) return notInViewCache;
    const slideIndexes = createInViewList(inView);
    if (inView) inViewCache = slideIndexes;
    if (!inView) notInViewCache = slideIndexes;
    return slideIndexes;
  }
  const self = {
    init,
    destroy,
    get
  };
  return self;
}

function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
  const {
    measureSize,
    startEdge,
    endEdge
  } = axis;
  const withEdgeGap = slideRects[0] && readEdgeGap;
  const startGap = measureStartGap();
  const endGap = measureEndGap();
  const slideSizes = slideRects.map(measureSize);
  const slideSizesWithGaps = measureWithGaps();
  function measureStartGap() {
    if (!withEdgeGap) return 0;
    const slideRect = slideRects[0];
    return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
  }
  function measureEndGap() {
    if (!withEdgeGap) return 0;
    const style = ownerWindow.getComputedStyle(arrayLast(slides));
    return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
  }
  function measureWithGaps() {
    return slideRects.map((rect, index, rects) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(rects, index);
      if (isFirst) return slideSizes[index] + startGap;
      if (isLast) return slideSizes[index] + endGap;
      return rects[index + 1][startEdge] - rect[startEdge];
    }).map(mathAbs);
  }
  const self = {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  };
  return self;
}

function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
  const {
    startEdge,
    endEdge,
    direction
  } = axis;
  const groupByNumber = isNumber(slidesToScroll);
  function byNumber(array, groupSize) {
    return arrayKeys(array).filter(i => i % groupSize === 0).map(i => array.slice(i, i + groupSize));
  }
  function bySize(array) {
    if (!array.length) return [];
    return arrayKeys(array).reduce((groups, rectB, index) => {
      const rectA = arrayLast(groups) || 0;
      const isFirst = rectA === 0;
      const isLast = rectB === arrayLastIndex(array);
      const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
      const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
      const gapA = !loop && isFirst ? direction(startGap) : 0;
      const gapB = !loop && isLast ? direction(endGap) : 0;
      const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
      if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
      if (isLast) groups.push(array.length);
      return groups;
    }, []).map((currentSize, index, groups) => {
      const previousSize = Math.max(groups[index - 1] || 0);
      return array.slice(previousSize, currentSize);
    });
  }
  function groupSlides(array) {
    return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
  }
  const self = {
    groupSlides
  };
  return self;
}

function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
  // Options
  const {
    align,
    axis: scrollAxis,
    direction,
    startIndex,
    loop,
    duration,
    dragFree,
    dragThreshold,
    inViewThreshold,
    slidesToScroll: groupSlides,
    skipSnaps,
    containScroll,
    watchResize,
    watchSlides,
    watchDrag,
    watchFocus
  } = options;
  // Measurements
  const pixelTolerance = 2;
  const nodeRects = NodeRects();
  const containerRect = nodeRects.measure(container);
  const slideRects = slides.map(nodeRects.measure);
  const axis = Axis(scrollAxis, direction);
  const viewSize = axis.measureSize(containerRect);
  const percentOfView = PercentOfView(viewSize);
  const alignment = Alignment(align, viewSize);
  const containSnaps = !loop && !!containScroll;
  const readEdgeGap = loop || !!containScroll;
  const {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
  const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
  const {
    snaps,
    snapsAligned
  } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
  const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
  const {
    snapsContained,
    scrollContainLimit
  } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
  const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
  const {
    limit
  } = ScrollLimit(contentSize, scrollSnaps, loop);
  // Indexes
  const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
  const indexPrevious = index.clone();
  const slideIndexes = arrayKeys(slides);
  // Animation
  const update = ({
    dragHandler,
    scrollBody,
    scrollBounds,
    options: {
      loop
    }
  }) => {
    if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
    scrollBody.seek();
  };
  const render = ({
    scrollBody,
    translate,
    location,
    offsetLocation,
    previousLocation,
    scrollLooper,
    slideLooper,
    dragHandler,
    animation,
    eventHandler,
    scrollBounds,
    options: {
      loop
    }
  }, alpha) => {
    const shouldSettle = scrollBody.settled();
    const withinBounds = !scrollBounds.shouldConstrain();
    const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
    const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
    if (hasSettledAndIdle) animation.stop();
    const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
    offsetLocation.set(interpolatedLocation);
    if (loop) {
      scrollLooper.loop(scrollBody.direction());
      slideLooper.loop();
    }
    translate.to(offsetLocation.get());
    if (hasSettledAndIdle) eventHandler.emit('settle');
    if (!hasSettled) eventHandler.emit('scroll');
  };
  const animation = Animations(ownerDocument, ownerWindow, () => update(engine), alpha => render(engine, alpha));
  // Shared
  const friction = 0.68;
  const startLocation = scrollSnaps[index.get()];
  const location = Vector1D(startLocation);
  const previousLocation = Vector1D(startLocation);
  const offsetLocation = Vector1D(startLocation);
  const target = Vector1D(startLocation);
  const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
  const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
  const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
  const scrollProgress = ScrollProgress(limit);
  const eventStore = EventStore();
  const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
  const {
    slideRegistry
  } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
  const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
  // Engine
  const engine = {
    ownerDocument,
    ownerWindow,
    eventHandler,
    containerRect,
    slideRects,
    animation,
    axis,
    dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
    eventStore,
    percentOfView,
    index,
    indexPrevious,
    limit,
    location,
    offsetLocation,
    previousLocation,
    options,
    resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
    scrollBody,
    scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
    scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [location, offsetLocation, previousLocation, target]),
    scrollProgress,
    scrollSnapList: scrollSnaps.map(scrollProgress.get),
    scrollSnaps,
    scrollTarget,
    scrollTo,
    slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
    slideFocus,
    slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
    slidesInView,
    slideIndexes,
    slideRegistry,
    slidesToScroll,
    target,
    translate: Translate(axis, container)
  };
  return engine;
}

function EventHandler() {
  let listeners = {};
  let api;
  function init(emblaApi) {
    api = emblaApi;
  }
  function getListeners(evt) {
    return listeners[evt] || [];
  }
  function emit(evt) {
    getListeners(evt).forEach(e => e(api, evt));
    return self;
  }
  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }
  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter(e => e !== cb);
    return self;
  }
  function clear() {
    listeners = {};
  }
  const self = {
    init,
    emit,
    off,
    on,
    clear
  };
  return self;
}

const defaultOptions = {
  align: 'center',
  axis: 'x',
  container: null,
  slides: null,
  containScroll: 'trimSnaps',
  direction: 'ltr',
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: false,
  dragThreshold: 10,
  loop: false,
  skipSnaps: false,
  duration: 25,
  startIndex: 0,
  active: true,
  watchDrag: true,
  watchResize: true,
  watchSlides: true,
  watchFocus: true
};

function OptionsHandler(ownerWindow) {
  function mergeOptions(optionsA, optionsB) {
    return objectsMergeDeep(optionsA, optionsB || {});
  }
  function optionsAtMedia(options) {
    const optionsAtMedia = options.breakpoints || {};
    const matchedMediaOptions = objectKeys(optionsAtMedia).filter(media => ownerWindow.matchMedia(media).matches).map(media => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {});
    return mergeOptions(options, matchedMediaOptions);
  }
  function optionsMediaQueries(optionsList) {
    return optionsList.map(options => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
  }
  const self = {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  };
  return self;
}

function PluginsHandler(optionsHandler) {
  let activePlugins = [];
  function init(emblaApi, plugins) {
    activePlugins = plugins.filter(({
      options
    }) => optionsHandler.optionsAtMedia(options).active !== false);
    activePlugins.forEach(plugin => plugin.init(emblaApi, optionsHandler));
    return plugins.reduce((map, plugin) => Object.assign(map, {
      [plugin.name]: plugin
    }), {});
  }
  function destroy() {
    activePlugins = activePlugins.filter(plugin => plugin.destroy());
  }
  const self = {
    init,
    destroy
  };
  return self;
}

function EmblaCarousel(root, userOptions, userPlugins) {
  const ownerDocument = root.ownerDocument;
  const ownerWindow = ownerDocument.defaultView;
  const optionsHandler = OptionsHandler(ownerWindow);
  const pluginsHandler = PluginsHandler(optionsHandler);
  const mediaHandlers = EventStore();
  const eventHandler = EventHandler();
  const {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  } = optionsHandler;
  const {
    on,
    off,
    emit
  } = eventHandler;
  const reInit = reActivate;
  let destroyed = false;
  let engine;
  let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
  let options = mergeOptions(optionsBase);
  let pluginList = [];
  let pluginApis;
  let container;
  let slides;
  function storeElements() {
    const {
      container: userContainer,
      slides: userSlides
    } = options;
    const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
    container = customContainer || root.children[0];
    const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
    slides = [].slice.call(customSlides || container.children);
  }
  function createEngine(options) {
    const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
    if (options.loop && !engine.slideLooper.canLoop()) {
      const optionsWithoutLoop = Object.assign({}, options, {
        loop: false
      });
      return createEngine(optionsWithoutLoop);
    }
    return engine;
  }
  function activate(withOptions, withPlugins) {
    if (destroyed) return;
    optionsBase = mergeOptions(optionsBase, withOptions);
    options = optionsAtMedia(optionsBase);
    pluginList = withPlugins || pluginList;
    storeElements();
    engine = createEngine(options);
    optionsMediaQueries([optionsBase, ...pluginList.map(({
      options
    }) => options)]).forEach(query => mediaHandlers.add(query, 'change', reActivate));
    if (!options.active) return;
    engine.translate.to(engine.location.get());
    engine.animation.init();
    engine.slidesInView.init();
    engine.slideFocus.init(self);
    engine.eventHandler.init(self);
    engine.resizeHandler.init(self);
    engine.slidesHandler.init(self);
    if (engine.options.loop) engine.slideLooper.loop();
    if (container.offsetParent && slides.length) engine.dragHandler.init(self);
    pluginApis = pluginsHandler.init(self, pluginList);
  }
  function reActivate(withOptions, withPlugins) {
    const startIndex = selectedScrollSnap();
    deActivate();
    activate(mergeOptions({
      startIndex
    }, withOptions), withPlugins);
    eventHandler.emit('reInit');
  }
  function deActivate() {
    engine.dragHandler.destroy();
    engine.eventStore.clear();
    engine.translate.clear();
    engine.slideLooper.clear();
    engine.resizeHandler.destroy();
    engine.slidesHandler.destroy();
    engine.slidesInView.destroy();
    engine.animation.destroy();
    pluginsHandler.destroy();
    mediaHandlers.clear();
  }
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    mediaHandlers.clear();
    deActivate();
    eventHandler.emit('destroy');
    eventHandler.clear();
  }
  function scrollTo(index, jump, direction) {
    if (!options.active || destroyed) return;
    engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
    engine.scrollTo.index(index, direction || 0);
  }
  function scrollNext(jump) {
    const next = engine.index.add(1).get();
    scrollTo(next, jump, -1);
  }
  function scrollPrev(jump) {
    const prev = engine.index.add(-1).get();
    scrollTo(prev, jump, 1);
  }
  function canScrollNext() {
    const next = engine.index.add(1).get();
    return next !== selectedScrollSnap();
  }
  function canScrollPrev() {
    const prev = engine.index.add(-1).get();
    return prev !== selectedScrollSnap();
  }
  function scrollSnapList() {
    return engine.scrollSnapList;
  }
  function scrollProgress() {
    return engine.scrollProgress.get(engine.offsetLocation.get());
  }
  function selectedScrollSnap() {
    return engine.index.get();
  }
  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }
  function slidesInView() {
    return engine.slidesInView.get();
  }
  function slidesNotInView() {
    return engine.slidesInView.get(false);
  }
  function plugins() {
    return pluginApis;
  }
  function internalEngine() {
    return engine;
  }
  function rootNode() {
    return root;
  }
  function containerNode() {
    return container;
  }
  function slideNodes() {
    return slides;
  }
  const self = {
    canScrollNext,
    canScrollPrev,
    containerNode,
    internalEngine,
    destroy,
    off,
    on,
    emit,
    plugins,
    previousScrollSnap,
    reInit,
    rootNode,
    scrollNext,
    scrollPrev,
    scrollProgress,
    scrollSnapList,
    scrollTo,
    selectedScrollSnap,
    slideNodes,
    slidesInView,
    slidesNotInView
  };
  activate(userOptions, userPlugins);
  setTimeout(() => eventHandler.emit('init'), 0);
  return self;
}
EmblaCarousel.globalOptions = undefined;


//# sourceMappingURL=embla-carousel.esm.js.map


/***/ }),

/***/ "./src/blocks/HeroCarousel/block.json":
/*!********************************************!*\
  !*** ./src/blocks/HeroCarousel/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/hero-carousel","title":"Hero Carousel","category":"eara","icon":"slides","description":"A full-width carousel with 16:9 ratio slides, background images and customizable content.","supports":{"html":false},"attributes":{"autoplay":{"type":"boolean","default":true},"autoplayDelay":{"type":"number","default":5000},"loop":{"type":"boolean","default":true},"showControls":{"type":"boolean","default":true},"showIndicators":{"type":"boolean","default":true},"transitionDuration":{"type":"number","default":500}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/HeroCarousel/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/HeroCarousel/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/carousel */ "./node_modules/@mantine/carousel/esm/Carousel.mjs");
/* harmony import */ var _mantine_carousel_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/carousel/styles.css */ "./node_modules/@mantine/carousel/styles.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const {
  InspectorControls,
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  RangeControl
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useSelect
} = wp.data;




const ALLOWED_BLOCKS = ["eara/hero-slide"];
function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    autoplay,
    autoplayDelay,
    loop,
    showControls,
    showIndicators,
    transitionDuration
  } = attributes;
  const blockProps = useBlockProps();

  // Get inner blocks
  const innerBlocks = useSelect(select => {
    return select('core/block-editor').getBlocks(clientId);
  }, [clientId]);
  const innerBlocksProps = useInnerBlocksProps({}, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: [["eara/hero-slide", {}]],
    renderAppender: InnerBlocks.ButtonBlockAppender
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PanelBody, {
        title: __("Carousel Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ToggleControl, {
          label: __("Autoplay", "eara"),
          checked: autoplay,
          onChange: v => setAttributes({
            autoplay: v
          }),
          help: __("Automatically cycle through slides", "eara")
        }), autoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RangeControl, {
          label: __("Autoplay Delay (ms)", "eara"),
          value: autoplayDelay,
          onChange: v => setAttributes({
            autoplayDelay: v
          }),
          min: 1000,
          max: 10000,
          step: 500,
          help: __("Time between slide transitions", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ToggleControl, {
          label: __("Loop", "eara"),
          checked: loop,
          onChange: v => setAttributes({
            loop: v
          }),
          help: __("Return to first slide after last", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ToggleControl, {
          label: __("Show Controls", "eara"),
          checked: showControls,
          onChange: v => setAttributes({
            showControls: v
          }),
          help: __("Show previous/next arrows", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ToggleControl, {
          label: __("Show Indicators", "eara"),
          checked: showIndicators,
          onChange: v => setAttributes({
            showIndicators: v
          }),
          help: __("Show dot indicators", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RangeControl, {
          label: __("Transition Duration (ms)", "eara"),
          value: transitionDuration,
          onChange: v => setAttributes({
            transitionDuration: v
          }),
          min: 200,
          max: 2000,
          step: 100
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          width: "100%",
          aspectRatio: "16/9",
          border: "2px dashed #ccc"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mantine_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
          loop: loop,
          withControls: showControls,
          withIndicators: showIndicators,
          height: "100%",
          slideSize: "100%",
          slideGap: 0,
          children: [innerBlocks.map(block => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel.Slide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              ...innerBlocksProps
            })
          }, block.clientId)), innerBlocks.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel.Slide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              ...innerBlocksProps
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/HeroCarousel/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/HeroCarousel/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/HeroCarousel/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/HeroCarousel/save.js ***!
  \*****************************************/
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
/*!******************************************!*\
  !*** ./src/blocks/HeroCarousel/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/HeroCarousel/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/HeroCarousel/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/HeroCarousel/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/HeroCarousel/editor.scss");
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