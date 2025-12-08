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

/***/ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionProvider: function() { return /* binding */ AccordionProvider; },
/* harmony export */   useAccordionContext: function() { return /* binding */ useAccordionContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/create-safe-context/create-safe-context.mjs */ "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';













const [AccordionProvider, useAccordionContext] = (0,_core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_1__.createSafeContext)(
  "Accordion component was not found in the tree"
);


//# sourceMappingURL=Accordion.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: function() { return /* binding */ Accordion; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs");
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_safe_id_get_safe_id_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/get-safe-id/get-safe-id.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-safe-id/get-safe-id.mjs");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Accordion.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs");
/* harmony import */ var _AccordionChevron_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AccordionChevron.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs");
/* harmony import */ var _AccordionControl_AccordionControl_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AccordionControl/AccordionControl.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs");
/* harmony import */ var _AccordionItem_AccordionItem_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AccordionItem/AccordionItem.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionItem/AccordionItem.mjs");
/* harmony import */ var _AccordionPanel_AccordionPanel_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AccordionPanel/AccordionPanel.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs");
/* harmony import */ var _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Accordion.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs");
'use client';

























const defaultProps = {
  multiple: false,
  disableChevronRotation: false,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccordionChevron_mjs__WEBPACK_IMPORTED_MODULE_14__.AccordionChevron, {})
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_7__.createVarsResolver)(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      "--accordion-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--accordion-chevron-size": chevronSize === void 0 ? void 0 : (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_3__.rem)(chevronSize),
      "--accordion-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_6__.getRadius)(radius)
    }
  })
);
function Accordion(_props) {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_9__.useProps)("Accordion", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius,
    ...others
  } = props;
  const uid = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_1__.useId)(id);
  const [_value, handleChange] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useUncontrolled)({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isItemActive = (itemValue) => Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;
  const handleItemChange = (itemValue) => {
    const nextValue = Array.isArray(_value) ? _value.includes(itemValue) ? _value.filter((selectedValue) => selectedValue !== itemValue) : [..._value, itemValue] : itemValue === _value ? null : itemValue;
    handleChange(nextValue);
  };
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_10__.useStyles)({
    name: "Accordion",
    classes: _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_18__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_13__.AccordionProvider,
    {
      value: {
        isItemActive,
        onChange: handleItemChange,
        getControlId: (0,_core_utils_get_safe_id_get_safe_id_mjs__WEBPACK_IMPORTED_MODULE_5__.getSafeId)(
          `${uid}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: (0,_core_utils_get_safe_id_get_safe_id_mjs__WEBPACK_IMPORTED_MODULE_5__.getSafeId)(
          `${uid}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        chevron,
        loop,
        getStyles,
        variant,
        unstyled
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_11__.Box, { ...getStyles("root"), id: uid, ...others, variant, "data-accordion": true, children })
    }
  );
}
const extendAccordion = (c) => c;
Accordion.extend = extendAccordion;
Accordion.withProps = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_12__.getWithProps)(Accordion);
Accordion.classes = _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_18__["default"];
Accordion.displayName = "@mantine/core/Accordion";
Accordion.Item = _AccordionItem_AccordionItem_mjs__WEBPACK_IMPORTED_MODULE_16__.AccordionItem;
Accordion.Panel = _AccordionPanel_AccordionPanel_mjs__WEBPACK_IMPORTED_MODULE_17__.AccordionPanel;
Accordion.Control = _AccordionControl_AccordionControl_mjs__WEBPACK_IMPORTED_MODULE_15__.AccordionControl;
Accordion.Chevron = _AccordionChevron_mjs__WEBPACK_IMPORTED_MODULE_14__.AccordionChevron;


//# sourceMappingURL=Accordion.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_9bdbb667","panel":"m_df78851f","content":"m_4ba554d4","itemTitle":"m_8fa820a0","control":"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b","label":"m_df3ffa0f","chevron":"m_3f35ae96","icon":"m_9bd771fe","item":"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};


//# sourceMappingURL=Accordion.module.css.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionControl: function() { return /* binding */ AccordionControl; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_create_scoped_keydown_handler_create_scoped_keydown_handler_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs */ "./node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _UnstyledButton_UnstyledButton_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UnstyledButton/UnstyledButton.mjs */ "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs");
/* harmony import */ var _Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Accordion.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs");
/* harmony import */ var _AccordionItem_context_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AccordionItem.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs");
/* harmony import */ var _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Accordion.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs");
'use client';



















const defaultProps = {};
const AccordionControl = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_6__.factory)((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    chevron,
    icon,
    onClick,
    onKeyDown,
    children,
    disabled,
    mod,
    ...others
  } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.useProps)("AccordionControl", defaultProps, props);
  const { value } = (0,_AccordionItem_context_mjs__WEBPACK_IMPORTED_MODULE_9__.useAccordionItemContext)();
  const ctx = (0,_Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_8__.useAccordionContext)();
  const isActive = ctx.isItemActive(value);
  const shouldWrapWithHeading = typeof ctx.order === "number";
  const Heading = `h${ctx.order}`;
  const content = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _UnstyledButton_UnstyledButton_mjs__WEBPACK_IMPORTED_MODULE_7__.UnstyledButton,
    {
      ...others,
      ...ctx.getStyles("control", { className, classNames, style, styles, variant: ctx.variant }),
      unstyled: ctx.unstyled,
      mod: [
        "accordion-control",
        { active: isActive, "chevron-position": ctx.chevronPosition, disabled },
        mod
      ],
      ref,
      onClick: (event) => {
        onClick?.(event);
        ctx.onChange(value);
      },
      type: "button",
      disabled,
      "aria-expanded": isActive,
      "aria-controls": ctx.getRegionId(value),
      id: ctx.getControlId(value),
      onKeyDown: (0,_core_utils_create_scoped_keydown_handler_create_scoped_keydown_handler_mjs__WEBPACK_IMPORTED_MODULE_2__.createScopedKeydownHandler)({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: false,
        loop: ctx.loop,
        orientation: "vertical",
        onKeyDown
      }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__.Box,
          {
            component: "span",
            mod: { rotate: !ctx.disableChevronRotation && isActive, position: ctx.chevronPosition },
            ...ctx.getStyles("chevron", { classNames, styles }),
            children: chevron || ctx.chevron
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { ...ctx.getStyles("label", { classNames, styles }), children }),
        icon && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__.Box,
          {
            component: "span",
            mod: { "chevron-position": ctx.chevronPosition },
            ...ctx.getStyles("icon", { classNames, styles }),
            children: icon
          }
        )
      ]
    }
  );
  return shouldWrapWithHeading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Heading, { ...ctx.getStyles("itemTitle", { classNames, styles }), children: content }) : content;
});
AccordionControl.displayName = "@mantine/core/AccordionControl";
AccordionControl.classes = _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"];


//# sourceMappingURL=AccordionControl.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionItemProvider: function() { return /* binding */ AccordionItemProvider; },
/* harmony export */   useAccordionItemContext: function() { return /* binding */ useAccordionItemContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/create-safe-context/create-safe-context.mjs */ "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';













const [AccordionItemProvider, useAccordionItemContext] = (0,_core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_1__.createSafeContext)("Accordion.Item component was not found in the tree");


//# sourceMappingURL=AccordionItem.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Accordion/AccordionItem/AccordionItem.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/AccordionItem/AccordionItem.mjs ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionItem: function() { return /* binding */ AccordionItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Accordion.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs");
/* harmony import */ var _AccordionItem_context_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AccordionItem.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs");
/* harmony import */ var _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Accordion.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs");
'use client';

















const defaultProps = {};
const AccordionItem = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_5__.factory)((props, ref) => {
  const { classNames, className, style, styles, vars, value, mod, ...others } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useProps)(
    "AccordionItem",
    defaultProps,
    props
  );
  const ctx = (0,_Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_6__.useAccordionContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AccordionItem_context_mjs__WEBPACK_IMPORTED_MODULE_7__.AccordionItemProvider, { value: { value }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__.Box,
    {
      ref,
      mod: [{ active: ctx.isItemActive(value) }, mod],
      ...ctx.getStyles("item", { className, classNames, styles, style, variant: ctx.variant }),
      ...others
    }
  ) });
});
AccordionItem.displayName = "@mantine/core/AccordionItem";
AccordionItem.classes = _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_8__["default"];


//# sourceMappingURL=AccordionItem.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionPanel: function() { return /* binding */ AccordionPanel; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Collapse_Collapse_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Collapse/Collapse.mjs */ "./node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs");
/* harmony import */ var _Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Accordion.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs");
/* harmony import */ var _AccordionItem_context_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AccordionItem.context.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs");
/* harmony import */ var _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Accordion.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs");
'use client';


















const defaultProps = {};
const AccordionPanel = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_4__.factory)((props, ref) => {
  const { classNames, className, style, styles, vars, children, ...others } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useProps)(
    "AccordionPanel",
    defaultProps,
    props
  );
  const { value } = (0,_AccordionItem_context_mjs__WEBPACK_IMPORTED_MODULE_7__.useAccordionItemContext)();
  const ctx = (0,_Accordion_context_mjs__WEBPACK_IMPORTED_MODULE_6__.useAccordionContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Collapse_Collapse_mjs__WEBPACK_IMPORTED_MODULE_5__.Collapse,
    {
      ref,
      ...ctx.getStyles("panel", { className, classNames, style, styles }),
      ...others,
      in: ctx.isItemActive(value),
      transitionDuration: ctx.transitionDuration ?? 200,
      role: "region",
      id: ctx.getRegionId(value),
      "aria-labelledby": ctx.getControlId(value),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...ctx.getStyles("content", { classNames, styles }), children })
    }
  );
});
AccordionPanel.displayName = "@mantine/core/AccordionPanel";
AccordionPanel.classes = _Accordion_module_css_mjs__WEBPACK_IMPORTED_MODULE_8__["default"];


//# sourceMappingURL=AccordionPanel.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _AvatarGroup_AvatarGroup_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AvatarGroup/AvatarGroup.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.mjs");
/* harmony import */ var _AvatarGroup_AvatarGroup_context_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AvatarGroup/AvatarGroup.context.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.context.mjs");
/* harmony import */ var _AvatarPlaceholderIcon_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AvatarPlaceholderIcon.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/AvatarPlaceholderIcon.mjs");
/* harmony import */ var _get_initials_color_get_initials_color_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-initials-color/get-initials-color.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/get-initials-color/get-initials-color.mjs");
/* harmony import */ var _get_initials_get_initials_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-initials/get-initials.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/get-initials/get-initials.mjs");
/* harmony import */ var _Avatar_module_css_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Avatar.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/Avatar.module.css.mjs");
'use client';























const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)(
  (theme, { size, radius, variant, gradient, color, autoContrast, name, allowedInitialsColors }) => {
    const _color = color === "initials" && typeof name === "string" ? (0,_get_initials_color_get_initials_color_mjs__WEBPACK_IMPORTED_MODULE_12__.getInitialsColor)(name, allowedInitialsColors) : color;
    const colors = theme.variantColorResolver({
      color: _color || "gray",
      theme,
      gradient,
      variant: variant || "light",
      autoContrast
    });
    return {
      root: {
        "--avatar-size": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "avatar-size"),
        "--avatar-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getRadius)(radius),
        "--avatar-bg": _color || variant ? colors.background : void 0,
        "--avatar-color": _color || variant ? colors.color : void 0,
        "--avatar-bd": _color || variant ? colors.border : void 0
      }
    };
  }
);
const Avatar = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Avatar", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    src,
    alt,
    radius,
    color,
    gradient,
    imageProps,
    children,
    autoContrast,
    mod,
    name,
    allowedInitialsColors,
    ...others
  } = props;
  const ctx = (0,_AvatarGroup_AvatarGroup_context_mjs__WEBPACK_IMPORTED_MODULE_10__.useAvatarGroupContext)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!src);
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Avatar",
    props,
    classes: _Avatar_module_css_mjs__WEBPACK_IMPORTED_MODULE_14__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setError(!src), [src]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
    {
      ...getStyles("root"),
      mod: [{ "within-group": ctx.withinGroup }, mod],
      ref,
      ...others,
      children: error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { ...getStyles("placeholder"), title: alt, children: children || typeof name === "string" && (0,_get_initials_get_initials_mjs__WEBPACK_IMPORTED_MODULE_13__.getInitials)(name) || /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AvatarPlaceholderIcon_mjs__WEBPACK_IMPORTED_MODULE_11__.AvatarPlaceholderIcon, {}) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "img",
        {
          ...imageProps,
          ...getStyles("image"),
          src,
          alt,
          onError: (event) => {
            setError(true);
            imageProps?.onError?.(event);
          }
        }
      )
    }
  );
});
Avatar.classes = _Avatar_module_css_mjs__WEBPACK_IMPORTED_MODULE_14__["default"];
Avatar.displayName = "@mantine/core/Avatar";
Avatar.Group = _AvatarGroup_AvatarGroup_mjs__WEBPACK_IMPORTED_MODULE_9__.AvatarGroup;


//# sourceMappingURL=Avatar.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/Avatar.module.css.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/Avatar.module.css.mjs ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"group":"m_11def92b","root":"m_f85678b6","image":"m_11f8ac07","placeholder":"m_104cd71f"};


//# sourceMappingURL=Avatar.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.context.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.context.mjs ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarGroupProvider: function() { return /* binding */ AvatarGroupProvider; },
/* harmony export */   useAvatarGroupContext: function() { return /* binding */ useAvatarGroupContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const AvatarGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const AvatarGroupProvider = AvatarGroupContext.Provider;
function useAvatarGroupContext() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AvatarGroupContext);
  return { withinGroup: !!ctx };
}


//# sourceMappingURL=AvatarGroup.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarGroup: function() { return /* binding */ AvatarGroup; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _AvatarGroup_context_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AvatarGroup.context.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.context.mjs");
/* harmony import */ var _Avatar_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Avatar.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Avatar/Avatar.module.css.mjs");
'use client';



















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { spacing }) => ({
  group: {
    "--ag-spacing": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSpacing)(spacing)
  }
}));
const AvatarGroup = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("AvatarGroup", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, spacing, ...others } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "AvatarGroup",
    classes: _Avatar_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "group"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AvatarGroup_context_mjs__WEBPACK_IMPORTED_MODULE_9__.AvatarGroupProvider, { value: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box, { ref, ...getStyles("group"), ...others }) });
});
AvatarGroup.classes = _Avatar_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"];
AvatarGroup.displayName = "@mantine/core/AvatarGroup";


//# sourceMappingURL=AvatarGroup.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/AvatarPlaceholderIcon.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/AvatarPlaceholderIcon.mjs ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarPlaceholderIcon: function() { return /* binding */ AvatarPlaceholderIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
'use client';


function AvatarPlaceholderIcon(props) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "svg",
    {
      ...props,
      "data-avatar-placeholder-icon": true,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "path",
        {
          d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}


//# sourceMappingURL=AvatarPlaceholderIcon.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/get-initials-color/get-initials-color.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/get-initials-color/get-initials-color.mjs ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInitialsColor: function() { return /* binding */ getInitialsColor; }
/* harmony export */ });
'use client';
function hashCode(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
const defaultColors = [
  "blue",
  "cyan",
  "grape",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "red",
  "teal",
  "violet"
];
function getInitialsColor(name, colors = defaultColors) {
  const hash = hashCode(name);
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}


//# sourceMappingURL=get-initials-color.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Avatar/get-initials/get-initials.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Avatar/get-initials/get-initials.mjs ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInitials: function() { return /* binding */ getInitials; }
/* harmony export */ });
'use client';
function getInitials(name, limit = 2) {
  const splitted = name.split(" ");
  if (splitted.length === 1) {
    return name.slice(0, limit).toUpperCase();
  }
  return splitted.map((word) => word[0]).slice(0, limit).join("").toUpperCase();
}


//# sourceMappingURL=get-initials.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Badge/Badge.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Badge/Badge.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: function() { return /* binding */ Badge; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Badge_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Badge.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Badge/Badge.module.css.mjs");
'use client';



















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)(
  (theme, { radius, color, gradient, variant, size, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--badge-height": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "badge-height"),
        "--badge-padding-x": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "badge-padding-x"),
        "--badge-fz": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "badge-fz"),
        "--badge-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getRadius)(radius),
        "--badge-bg": color || variant ? colors.background : void 0,
        "--badge-color": color || variant ? colors.color : void 0,
        "--badge-bd": color || variant ? colors.border : void 0,
        "--badge-dot-color": variant === "dot" ? (0,_core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__.getThemeColor)(color, theme) : void 0
      }
    };
  }
);
const Badge = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_9__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__.useProps)("Badge", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth,
    autoContrast,
    circle,
    mod,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__.useStyles)({
    name: "Badge",
    props,
    classes: _Badge_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box,
    {
      variant,
      mod: [
        {
          block: fullWidth,
          circle,
          "with-right-section": !!rightSection,
          "with-left-section": !!leftSection
        },
        mod
      ],
      ...getStyles("root", { variant }),
      ref,
      ...others,
      children: [
        leftSection && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { ...getStyles("section"), "data-position": "left", children: leftSection }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { ...getStyles("label"), children }),
        rightSection && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { ...getStyles("section"), "data-position": "right", children: rightSection })
      ]
    }
  );
});
Badge.classes = _Badge_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"];
Badge.displayName = "@mantine/core/Badge";


//# sourceMappingURL=Badge.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Badge/Badge.module.css.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Badge/Badge.module.css.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_347db0ec","root--dot":"m_fbd81e3d","label":"m_5add502a","section":"m_91fdda9b"};


//# sourceMappingURL=Badge.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Button/Button.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Button/Button.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Loader_Loader_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Loader/Loader.mjs */ "./node_modules/@mantine/core/esm/components/Loader/Loader.mjs");
/* harmony import */ var _Transition_Transition_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Transition/Transition.mjs */ "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs");
/* harmony import */ var _UnstyledButton_UnstyledButton_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UnstyledButton/UnstyledButton.mjs */ "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs");
/* harmony import */ var _ButtonGroup_ButtonGroup_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ButtonGroup/ButtonGroup.mjs */ "./node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs");
/* harmony import */ var _ButtonGroupSection_ButtonGroupSection_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ButtonGroupSection/ButtonGroupSection.mjs */ "./node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs");
/* harmony import */ var _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Button.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs");
'use client';
























const loaderTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${(0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
};
const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__.createVarsResolver)(
  (theme, { radius, color, gradient, variant, size, justify, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__.getSize)(size, "button-height"),
        "--button-padding-x": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__.getSize)(size, "button-padding-x"),
        "--button-fz": size?.includes("compact") ? (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__.getFontSize)(size.replace("compact-", "")) : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__.getFontSize)(size),
        "--button-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__.getRadius)(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : void 0,
        "--button-hover-color": color || variant ? colors.hoverColor : void 0
      }
    };
  }
);
const Button = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_9__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__.useProps)("Button", defaultProps, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__.useStyles)({
    name: "Button",
    props,
    classes: _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_15__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _UnstyledButton_UnstyledButton_mjs__WEBPACK_IMPORTED_MODULE_12__.UnstyledButton,
    {
      ref,
      ...getStyles("root", { active: !disabled && !loading && !dataDisabled }),
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        },
        mod
      ],
      ...others,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Transition_Transition_mjs__WEBPACK_IMPORTED_MODULE_11__.Transition, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box, { component: "span", ...getStyles("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Loader_Loader_mjs__WEBPACK_IMPORTED_MODULE_10__.Loader,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...loaderProps
          }
        ) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { ...getStyles("inner"), children: [
          leftSection && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box, { component: "span", ...getStyles("section"), mod: { position: "left" }, children: leftSection }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box, { component: "span", mod: { loading }, ...getStyles("label"), children }),
          rightSection && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box, { component: "span", ...getStyles("section"), mod: { position: "right" }, children: rightSection })
        ] })
      ]
    }
  );
});
Button.classes = _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_15__["default"];
Button.displayName = "@mantine/core/Button";
Button.Group = _ButtonGroup_ButtonGroup_mjs__WEBPACK_IMPORTED_MODULE_13__.ButtonGroup;
Button.GroupSection = _ButtonGroupSection_ButtonGroupSection_mjs__WEBPACK_IMPORTED_MODULE_14__.ButtonGroupSection;


//# sourceMappingURL=Button.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_77c9d27d","inner":"m_80f1301b","label":"m_811560b9","section":"m_a74036a","loader":"m_a25b86ee","group":"m_80d6d844","groupSection":"m_70be2a01"};


//# sourceMappingURL=Button.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonGroup: function() { return /* binding */ ButtonGroup; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs");
'use client';


















const defaultProps = {
  orientation: "horizontal"
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { borderWidth }) => ({
  group: { "--button-border-width": (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(borderWidth) }
}));
const ButtonGroup = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("ButtonGroup", defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("ButtonGroup", defaultProps, _props);
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "ButtonGroup",
    props,
    classes: _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "group"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
    {
      ...getStyles("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ButtonGroup.classes = _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
ButtonGroup.displayName = "@mantine/core/ButtonGroup";


//# sourceMappingURL=ButtonGroup.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonGroupSection: function() { return /* binding */ ButtonGroupSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs");
'use client';


















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)(
  (theme, { radius, color, gradient, variant, autoContrast, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      groupSection: {
        "--section-height": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "section-height"),
        "--section-padding-x": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "section-padding-x"),
        "--section-fz": size?.includes("compact") ? (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getFontSize)(size.replace("compact-", "")) : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getFontSize)(size),
        "--section-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getRadius)(radius),
        "--section-bg": color || variant ? colors.background : void 0,
        "--section-color": colors.color,
        "--section-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
const ButtonGroupSection = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("ButtonGroupSection", defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    variant,
    gradient,
    radius,
    autoContrast,
    ...others
  } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("ButtonGroupSection", defaultProps, _props);
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "ButtonGroupSection",
    props,
    classes: _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box, { ...getStyles("groupSection"), ref, variant, ...others });
});
ButtonGroupSection.classes = _Button_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
ButtonGroupSection.displayName = "@mantine/core/ButtonGroupSection";


//# sourceMappingURL=ButtonGroupSection.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Card/Card.context.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Card/Card.context.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardProvider: function() { return /* binding */ CardProvider; },
/* harmony export */   useCardContext: function() { return /* binding */ useCardContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/create-safe-context/create-safe-context.mjs */ "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';













const [CardProvider, useCardContext] = (0,_core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_1__.createSafeContext)(
  "Card component was not found in tree"
);


//# sourceMappingURL=Card.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Card/Card.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Card/Card.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Paper_Paper_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Paper/Paper.mjs */ "./node_modules/@mantine/core/esm/components/Paper/Paper.mjs");
/* harmony import */ var _Card_context_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card.context.mjs */ "./node_modules/@mantine/core/esm/components/Card/Card.context.mjs");
/* harmony import */ var _CardSection_CardSection_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardSection/CardSection.mjs */ "./node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs");
/* harmony import */ var _Card_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Card.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs");
'use client';





















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { padding }) => ({
  root: {
    "--card-padding": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSpacing)(padding)
  }
}));
const Card = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_7__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Card", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, children, padding, ...others } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Card",
    props,
    classes: _Card_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const _children = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === "object" && child && "type" in child && child.type === _CardSection_CardSection_mjs__WEBPACK_IMPORTED_MODULE_10__.CardSection) {
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, {
        "data-first-section": index === 0 || void 0,
        "data-last-section": index === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card_context_mjs__WEBPACK_IMPORTED_MODULE_9__.CardProvider, { value: { getStyles }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Paper_Paper_mjs__WEBPACK_IMPORTED_MODULE_8__.Paper, { ref, unstyled, ...getStyles("root"), ...others, children: content }) });
});
Card.classes = _Card_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__["default"];
Card.displayName = "@mantine/core/Card";
Card.Section = _CardSection_CardSection_mjs__WEBPACK_IMPORTED_MODULE_10__.CardSection;


//# sourceMappingURL=Card.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_e615b15f","section":"m_599a2148"};


//# sourceMappingURL=Card.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardSection: function() { return /* binding */ CardSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Card_context_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Card.context.mjs */ "./node_modules/@mantine/core/esm/components/Card/Card.context.mjs");
/* harmony import */ var _Card_module_css_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Card.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs");
'use client';
















const defaultProps = {};
const CardSection = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_5__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useProps)("CardSection", defaultProps, _props);
  const { classNames, className, style, styles, vars, withBorder, inheritPadding, mod, ...others } = props;
  const ctx = (0,_Card_context_mjs__WEBPACK_IMPORTED_MODULE_6__.useCardContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__.Box,
    {
      ref,
      mod: [{ "with-border": withBorder, "inherit-padding": inheritPadding }, mod],
      ...ctx.getStyles("section", { className, style, styles, classNames }),
      ...others
    }
  );
});
CardSection.classes = _Card_module_css_mjs__WEBPACK_IMPORTED_MODULE_7__["default"];
CardSection.displayName = "@mantine/core/CardSection";


//# sourceMappingURL=CardSection.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapse: function() { return /* binding */ Collapse; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_Box_get_style_object_get_style_object_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Box/get-style-object/get-style-object.mjs */ "./node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _use_collapse_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-collapse.mjs */ "./node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs");
'use client';
















const defaultProps = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
const Collapse = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((props, ref) => {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    ...others
  } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Collapse", defaultProps, props);
  const theme = (0,_core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_4__.useMantineTheme)();
  const shouldReduceMotion = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = (0,_use_collapse_mjs__WEBPACK_IMPORTED_MODULE_9__.useCollapse)({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box, { ...others, children }) : null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
    {
      ...getCollapseProps({
        style: {
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none",
          ...(0,_core_Box_get_style_object_get_style_object_mjs__WEBPACK_IMPORTED_MODULE_6__.getStyleObject)(style, theme)
        },
        ref,
        ...others
      }),
      children
    }
  );
});
Collapse.displayName = "@mantine/core/Collapse";


//# sourceMappingURL=Collapse.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getElementHeight: function() { return /* binding */ getElementHeight; },
/* harmony export */   useCollapse: function() { return /* binding */ useCollapse; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs");
'use client';




function getAutoHeightDuration(height) {
  if (!height || typeof height === "string") {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function getElementHeight(el) {
  return el?.current ? el.current.scrollHeight : "auto";
}
const raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened
}) {
  const el = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(opened ? {} : collapsedStyles);
  const setStyles = (newStyles) => {
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles = (newStyles) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };
  function getTransitionStyles(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}, opacity ${_duration}ms ${transitionTimingFunction}`
    };
  }
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useDidUpdate)(() => {
    if (typeof raf === "function") {
      if (opened) {
        raf(() => {
          mergeStyles({ willChange: "height", display: "block", overflow: "hidden" });
          raf(() => {
            const height = getElementHeight(el);
            mergeStyles({ ...getTransitionStyles(height), height });
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles({ ...getTransitionStyles(height), willChange: "height", height });
          raf(() => mergeStyles({ height: collapsedHeight, overflow: "hidden" }));
        });
      }
    }
  }, [opened]);
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || e.propertyName !== "height") {
      return;
    }
    if (opened) {
      const height = getElementHeight(el);
      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles({ height });
      }
      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };
  function getCollapseProps({ style = {}, refKey = "ref", ...rest } = {}) {
    const theirRef = rest[refKey];
    const props = {
      "aria-hidden": !opened,
      ...rest,
      [refKey]: (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.mergeRefs)(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: "border-box", ...style, ...styles }
    };
    if (react__WEBPACK_IMPORTED_MODULE_0__.version.startsWith("18")) {
      if (!opened) {
        props.inert = "";
      }
    } else {
      props.inert = !opened;
    }
    return props;
  }
  return getCollapseProps;
}


//# sourceMappingURL=use-collapse.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Container/Container.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Container/Container.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Container_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Container.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs");
'use client';


















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { size, fluid }) => ({
  root: {
    "--container-size": fluid ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "container-size")
  }
}));
const Container = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Container", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, fluid, mod, ...others } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Container",
    classes: _Container_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box, { ref, mod: [{ fluid }, mod], ...getStyles("root"), ...others });
});
Container.classes = _Container_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
Container.displayName = "@mantine/core/Container";


//# sourceMappingURL=Container.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_7485cace"};


//# sourceMappingURL=Container.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Group/Group.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Group/Group.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: function() { return /* binding */ Group; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _filter_falsy_children_filter_falsy_children_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-falsy-children/filter-falsy-children.mjs */ "./node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs");
/* harmony import */ var _Group_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Group.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs");
'use client';



















const defaultProps = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSpacing)(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
const Group = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Group", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size,
    mod,
    ...others
  } = props;
  const filteredChildren = (0,_filter_falsy_children_filter_falsy_children_mjs__WEBPACK_IMPORTED_MODULE_9__.filterFalsyChildren)(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSpacing)(gap ?? "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: _Group_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
    {
      ...getStyles("root"),
      ref,
      variant,
      mod: [{ grow }, mod],
      size: __size,
      ...others,
      children: filteredChildren
    }
  );
});
Group.classes = _Group_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"];
Group.displayName = "@mantine/core/Group";


//# sourceMappingURL=Group.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_4081bf90"};


//# sourceMappingURL=Group.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterFalsyChildren: function() { return /* binding */ filterFalsyChildren; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function filterFalsyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(Boolean);
}


//# sourceMappingURL=filter-falsy-children.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Image/Image.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Image/Image.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Image_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Image.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Image/Image.module.css.mjs");
'use client';


















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { radius, fit }) => ({
  root: {
    "--image-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getRadius)(radius),
    "--image-object-fit": fit
  }
}));
const Image = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Image", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onError,
    src,
    radius,
    fit,
    fallbackSrc,
    mod,
    ...others
  } = props;
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!src);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setError(!src), [src]);
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Image",
    classes: _Image_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (error && fallbackSrc) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
      {
        component: "img",
        ref,
        src: fallbackSrc,
        ...getStyles("root"),
        onError,
        mod: ["fallback", mod],
        ...others
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
    {
      component: "img",
      ref,
      ...getStyles("root"),
      src,
      onError: (event) => {
        onError?.(event);
        setError(true);
      },
      mod,
      ...others
    }
  );
});
Image.classes = _Image_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
Image.displayName = "@mantine/core/Image";


//# sourceMappingURL=Image.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Image/Image.module.css.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Image/Image.module.css.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_9e117634"};


//# sourceMappingURL=Image.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Loader/Loader.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Loader/Loader.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: function() { return /* binding */ Loader; },
/* harmony export */   defaultLoaders: function() { return /* binding */ defaultLoaders; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _loaders_Bars_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loaders/Bars.mjs */ "./node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs");
/* harmony import */ var _loaders_Dots_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loaders/Dots.mjs */ "./node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs");
/* harmony import */ var _loaders_Oval_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loaders/Oval.mjs */ "./node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs");
/* harmony import */ var _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Loader.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs");
'use client';






















const defaultLoaders = {
  bars: _loaders_Bars_mjs__WEBPACK_IMPORTED_MODULE_10__.Bars,
  oval: _loaders_Oval_mjs__WEBPACK_IMPORTED_MODULE_12__.Oval,
  dots: _loaders_Dots_mjs__WEBPACK_IMPORTED_MODULE_11__.Dots
};
const defaultProps = {
  loaders: defaultLoaders,
  type: "oval"
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((theme, { size, color }) => ({
  root: {
    "--loader-size": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSize)(size, "loader-size"),
    "--loader-color": color ? (0,_core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__.getThemeColor)(color, theme) : void 0
  }
}));
const Loader = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_9__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__.useProps)("Loader", defaultProps, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__.useStyles)({
    name: "Loader",
    props,
    classes: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_13__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (children) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box, { ...getStyles("root"), ref, ...others, children });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box,
    {
      ...getStyles("root"),
      ref,
      component: loaders[type],
      variant,
      size,
      ...others
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_13__["default"];
Loader.displayName = "@mantine/core/Loader";


//# sourceMappingURL=Loader.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_5ae2e3c","barsLoader":"m_7a2bd4cd","bar":"m_870bb79","bars-loader-animation":"m_5d2b3b9d","dotsLoader":"m_4e3f22d7","dot":"m_870c4af","loader-dots-animation":"m_aac34a1","ovalLoader":"m_b34414df","oval-loader-animation":"m_f8e89c4b"};


//# sourceMappingURL=Loader.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bars: function() { return /* binding */ Bars; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs");
'use client';













const Bars = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__.Box, { component: "span", className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].barsLoader, className), ...others, ref, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].bar }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].bar }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].bar })
] }));
Bars.displayName = "@mantine/core/Bars";


//# sourceMappingURL=Bars.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dots: function() { return /* binding */ Dots; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs");
'use client';













const Dots = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__.Box, { component: "span", className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].dotsLoader, className), ...others, ref, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].dot }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].dot }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].dot })
] }));
Dots.displayName = "@mantine/core/Dots";


//# sourceMappingURL=Dots.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Oval: function() { return /* binding */ Oval; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs");
'use client';













const Oval = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__.Box, { component: "span", className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loader_module_css_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].ovalLoader, className), ...others, ref }));
Oval.displayName = "@mantine/core/Oval";


//# sourceMappingURL=Oval.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Paper/Paper.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Paper/Paper.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paper: function() { return /* binding */ Paper; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Paper_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Paper.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs");
'use client';


















const defaultProps = {};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { radius, shadow }) => ({
  root: {
    "--paper-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getRadius)(radius),
    "--paper-shadow": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getShadow)(shadow)
  }
}));
const Paper = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Paper", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Paper",
    props,
    classes: _Paper_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box,
    {
      ref,
      mod: [{ "data-with-border": withBorder }, mod],
      ...getStyles("root"),
      variant,
      ...others
    }
  );
});
Paper.classes = _Paper_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
Paper.displayName = "@mantine/core/Paper";


//# sourceMappingURL=Paper.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_1b7284a3"};


//# sourceMappingURL=Paper.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: function() { return /* binding */ Skeleton; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Skeleton_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Skeleton.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.module.css.mjs");
'use client';



















const defaultProps = {
  visible: true,
  animate: true
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_4__.createVarsResolver)(
  (_, { width, height, radius, circle }) => ({
    root: {
      "--skeleton-height": (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(height),
      "--skeleton-width": circle ? (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(height) : (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__.rem)(width),
      "--skeleton-radius": circle ? "1000px" : radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_3__.getRadius)(radius)
    }
  })
);
const Skeleton = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_9__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__.useProps)("Skeleton", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    width,
    height,
    circle,
    visible,
    radius,
    animate,
    mod,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_7__.useStyles)({
    name: "Skeleton",
    classes: _Skeleton_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_8__.Box, { ref, ...getStyles("root"), mod: [{ visible, animate }, mod], ...others });
});
Skeleton.classes = _Skeleton_module_css_mjs__WEBPACK_IMPORTED_MODULE_10__["default"];
Skeleton.displayName = "@mantine/core/Skeleton";


//# sourceMappingURL=Skeleton.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.module.css.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.module.css.mjs ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_18320242","skeleton-fade":"m_299c329c"};


//# sourceMappingURL=Skeleton.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Stack/Stack.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Stack/Stack.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: function() { return /* binding */ Stack; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Stack_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Stack.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs");
'use client';


















const defaultProps = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)((_, { gap, align, justify }) => ({
  root: {
    "--stack-gap": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getSpacing)(gap),
    "--stack-align": align,
    "--stack-justify": justify
  }
}));
const Stack = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("Stack", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "Stack",
    props,
    classes: _Stack_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box, { ref, ...getStyles("root"), variant, ...others });
});
Stack.classes = _Stack_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
Stack.displayName = "@mantine/core/Stack";


//# sourceMappingURL=Stack.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_6d731127"};


//# sourceMappingURL=Stack.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Text/Text.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Text/Text.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: function() { return /* binding */ Text; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_gradient_get_gradient_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/color-functions/get-gradient/get-gradient.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/factory/polymorphic-factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs");
/* harmony import */ var _Text_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Text.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs");
'use client';




















function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
const defaultProps = {
  inherit: false
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)(
  (theme, { variant, lineClamp, gradient, size, color }) => ({
    root: {
      "--text-fz": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getFontSize)(size),
      "--text-lh": (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_2__.getLineHeight)(size),
      "--text-gradient": variant === "gradient" ? (0,_core_MantineProvider_color_functions_get_gradient_get_gradient_mjs__WEBPACK_IMPORTED_MODULE_6__.getGradient)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--text-color": color ? (0,_core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_5__.getThemeColor)(color, theme) : void 0
    }
  })
);
const Text = (0,_core_factory_polymorphic_factory_mjs__WEBPACK_IMPORTED_MODULE_10__.polymorphicFactory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_7__.useProps)("Text", defaultProps, _props);
  const {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_8__.useStyles)({
    name: ["Text", __staticSelector],
    props,
    classes: _Text_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_9__.Box,
    {
      ...getStyles("root", { focusable: true }),
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size,
      ...others
    }
  );
});
Text.classes = _Text_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__["default"];
Text.displayName = "@mantine/core/Text";


//# sourceMappingURL=Text.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_b6d8b162"};


//# sourceMappingURL=Text.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Title/Title.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Title/Title.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Title: function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _get_title_size_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-title-size.mjs */ "./node_modules/@mantine/core/esm/components/Title/get-title-size.mjs");
/* harmony import */ var _Title_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Title.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs");
'use client';


















const defaultProps = {
  order: 1
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_2__.createVarsResolver)((_, { order, size, lineClamp, textWrap }) => {
  const sizeVariables = (0,_get_title_size_mjs__WEBPACK_IMPORTED_MODULE_8__.getTitleSize)(order, size);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize,
      "--title-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--title-text-wrap": textWrap
    }
  };
});
const Title = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_7__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.useProps)("Title", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size,
    variant,
    lineClamp,
    textWrap,
    mod,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_5__.useStyles)({
    name: "Title",
    props,
    classes: _Title_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_6__.Box,
    {
      ...getStyles("root"),
      component: `h${order}`,
      variant,
      ref,
      mod: [{ order, "data-line-clamp": typeof lineClamp === "number" }, mod],
      size,
      ...others
    }
  );
});
Title.classes = _Title_module_css_mjs__WEBPACK_IMPORTED_MODULE_9__["default"];
Title.displayName = "@mantine/core/Title";


//# sourceMappingURL=Title.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_8a5d1357"};


//# sourceMappingURL=Title.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Title/get-title-size.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Title/get-title-size.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTitleSize: function() { return /* binding */ getTitleSize; }
/* harmony export */ });
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';













const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
const sizes = ["xs", "sm", "md", "lg", "xl"];
function getTitleSize(order, size) {
  const titleSize = size !== void 0 ? size : `h${order}`;
  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`
    };
  } else if (sizes.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-font-size-${titleSize})`,
      fontWeight: `var(--mantine-h${order}-font-weight)`,
      lineHeight: `var(--mantine-h${order}-line-height)`
    };
  }
  return {
    fontSize: (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_0__.rem)(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`
  };
}


//# sourceMappingURL=get-title-size.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Transition/Transition.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transition: function() { return /* binding */ Transition; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/MantineProvider/Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _get_transition_styles_get_transition_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-transition-styles/get-transition-styles.mjs */ "./node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs");
/* harmony import */ var _use_transition_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-transition.mjs */ "./node_modules/@mantine/core/esm/components/Transition/use-transition.mjs");
'use client';














function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited,
  enterDelay,
  exitDelay
}) {
  const env = (0,_core_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_3__.useMantineEnv)();
  const { transitionDuration, transitionStatus, transitionTimingFunction } = (0,_use_transition_mjs__WEBPACK_IMPORTED_MODULE_5__.useTransition)({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay
  });
  if (transitionDuration === 0 || env === "test") {
    return mounted ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children({}) }) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children(
    (0,_get_transition_styles_get_transition_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.getTransitionStyles)({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ) });
}
Transition.displayName = "@mantine/core/Transition";


//# sourceMappingURL=Transition.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransitionStyles: function() { return /* binding */ getTransitionStyles; }
/* harmony export */ });
/* harmony import */ var _transitions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transitions.mjs */ "./node_modules/@mantine/core/esm/components/Transition/transitions.mjs");
'use client';


const transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    WebkitBackfaceVisibility: "hidden",
    willChange: "transform, opacity",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in _transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.transitions)) {
      return {};
    }
    return {
      transitionProperty: _transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.transitions[transition].transitionProperty,
      ...shared,
      ..._transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.transitions[transition].common,
      ..._transitions_mjs__WEBPACK_IMPORTED_MODULE_0__.transitions[transition][transitionStatuses[state]]
    };
  }
  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]]
  };
}


//# sourceMappingURL=get-transition-styles.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Transition/transitions.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Transition/transitions.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transitions: function() { return /* binding */ transitions; }
/* harmony export */ });
'use client';
const popIn = (from) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${from === "bottom" ? 10 : -10}px)` },
  transitionProperty: "transform, opacity"
});
const transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-30px)" },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
};


//# sourceMappingURL=transitions.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Transition/use-transition.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Transition/use-transition.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransition: function() { return /* binding */ useTransition; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
'use client';













function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
  enterDelay,
  exitDelay
}) {
  const theme = (0,_core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_6__.useMantineTheme)();
  const shouldReduceMotion = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(mounted ? "entered" : "exited");
  const transitionTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
  const delayTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
  const rafRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
  function clearAllTimeouts() {
    window.clearTimeout(transitionTimeoutRef.current);
    window.clearTimeout(delayTimeoutRef.current);
    cancelAnimationFrame(rafRef.current);
  }
  const handleStateChange = (shouldMount) => {
    clearAllTimeouts();
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      rafRef.current = requestAnimationFrame(() => {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => {
          setStatus(shouldMount ? "pre-entering" : "pre-exiting");
        });
        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === "function" && preHandler();
          setStatus(shouldMount ? "entering" : "exiting");
          transitionTimeoutRef.current = window.setTimeout(() => {
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
          }, newTransitionDuration);
        });
      });
    }
  };
  const handleTransitionWithDelay = (shouldMount) => {
    clearAllTimeouts();
    const delay = shouldMount ? enterDelay : exitDelay;
    if (typeof delay !== "number") {
      handleStateChange(shouldMount);
      return;
    }
    delayTimeoutRef.current = window.setTimeout(
      () => {
        handleStateChange(shouldMount);
      },
      shouldMount ? enterDelay : exitDelay
    );
  };
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useDidUpdate)(() => {
    handleTransitionWithDelay(mounted);
  }, [mounted]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => () => {
      clearAllTimeouts();
    },
    []
  );
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}


//# sourceMappingURL=use-transition.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleObject: function() { return /* binding */ getStyleObject; }
/* harmony export */ });
'use client';
function getStyleObject(style, theme) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
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


//# sourceMappingURL=get-style-object.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScopedKeydownHandler: function() { return /* binding */ createScopedKeydownHandler; }
/* harmony export */ });
/* harmony import */ var _find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../find-element-ancestor/find-element-ancestor.mjs */ "./node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs");
'use client';


function getPreviousIndex(current, elements, loop) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function getNextIndex(current, elements, loop) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function onSameLevel(target, sibling, parentSelector) {
  return (0,_find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__.findElementAncestor)(target, parentSelector) === (0,_find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__.findElementAncestor)(sibling, parentSelector);
}
function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = "rtl",
  orientation
}) {
  return (event) => {
    onKeyDown?.(event);
    const elements = Array.from(
      (0,_find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__.findElementAncestor)(event.currentTarget, parentSelector)?.querySelectorAll(
        siblingSelector
      ) || []
    ).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));
    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
    const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
    switch (event.key) {
      case "ArrowRight": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }
        break;
      }
      case "ArrowLeft": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }
        break;
      }
      case "ArrowUp": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }
        break;
      }
      case "ArrowDown": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }
        break;
      }
      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }
      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}


//# sourceMappingURL=create-scoped-keydown-handler.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findElementAncestor: function() { return /* binding */ findElementAncestor; }
/* harmony export */ });
'use client';
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector)) {
  }
  return _element;
}


//# sourceMappingURL=find-element-ancestor.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/get-safe-id/get-safe-id.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-safe-id/get-safe-id.mjs ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSafeId: function() { return /* binding */ getSafeId; }
/* harmony export */ });
'use client';
function getSafeId(uid, errorMessage) {
  return (value) => {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
    return `${uid}-${value}`;
  };
}


//# sourceMappingURL=get-safe-id.mjs.map


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

/***/ "./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDidUpdate: function() { return /* binding */ useDidUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function useDidUpdate(fn, dependencies) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}


//# sourceMappingURL=use-did-update.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-id/use-id.mjs ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_isomorphic_effect_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../use-isomorphic-effect/use-isomorphic-effect.mjs */ "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs");
/* harmony import */ var _utils_random_id_random_id_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/random-id/random-id.mjs */ "./node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs");
/* harmony import */ var _use_react_id_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-react-id.mjs */ "./node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs");
'use client';





function useId(staticId) {
  const reactId = (0,_use_react_id_mjs__WEBPACK_IMPORTED_MODULE_3__.useReactId)();
  const [uuid, setUuid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(reactId);
  (0,_use_isomorphic_effect_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicEffect)(() => {
    setUuid((0,_utils_random_id_random_id_mjs__WEBPACK_IMPORTED_MODULE_2__.randomId)());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}


//# sourceMappingURL=use-id.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReactId: function() { return /* binding */ useReactId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const __useId = react__WEBPACK_IMPORTED_MODULE_0__["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}


//# sourceMappingURL=use-react-id.mjs.map


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

/***/ "./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMediaQuery: function() { return /* binding */ useMediaQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}


//# sourceMappingURL=use-media-query.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignRef: function() { return /* binding */ assignRef; },
/* harmony export */   mergeRefs: function() { return /* binding */ mergeRefs; },
/* harmony export */   useMergedRef: function() { return /* binding */ useMergedRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function assignRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  const cleanupMap = /* @__PURE__ */ new Map();
  return (node) => {
    refs.forEach((ref) => {
      const cleanup = assignRef(ref, node);
      if (cleanup) {
        cleanupMap.set(ref, cleanup);
      }
    });
    if (cleanupMap.size > 0) {
      return () => {
        refs.forEach((ref) => {
          const cleanup = cleanupMap.get(ref);
          if (cleanup) {
            cleanup();
          } else {
            assignRef(ref, null);
          }
        });
        cleanupMap.clear();
      };
    }
  };
}
function useMergedRef(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(mergeRefs(...refs), refs);
}


//# sourceMappingURL=use-merged-ref.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReducedMotion: function() { return /* binding */ useReducedMotion; }
/* harmony export */ });
/* harmony import */ var _use_media_query_use_media_query_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../use-media-query/use-media-query.mjs */ "./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs");
'use client';


function useReducedMotion(initialValue, options) {
  return (0,_use_media_query_use_media_query_mjs__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)("(prefers-reduced-motion: reduce)", initialValue, options);
}


//# sourceMappingURL=use-reduced-motion.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUncontrolled: function() { return /* binding */ useUncontrolled; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val, ...payload) => {
    setUncontrolledValue(val);
    onChange?.(val, ...payload);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}


//# sourceMappingURL=use-uncontrolled.mjs.map


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

/***/ "./node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomId: function() { return /* binding */ randomId; }
/* harmony export */ });
'use client';
function randomId(prefix = "mantine-") {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}


//# sourceMappingURL=random-id.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createReactComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.mjs */ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs");
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */




const createReactComponent = (type, iconName, iconNamePascal, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "svg",
      {
        ref,
        ..._defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][type],
        width: size,
        height: size,
        className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(" "),
        ...type === "filled" ? {
          fill: color
        } : {
          strokeWidth: stroke,
          stroke: color
        },
        ...rest
      },
      [
        title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", { key: "svg-title" }, title),
        ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  Component.displayName = `${iconNamePascal}`;
  return Component;
};


//# sourceMappingURL=createReactComponent.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defaultAttributes; }
/* harmony export */ });
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};


//# sourceMappingURL=defaultAttributes.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: function() { return /* binding */ __iconNode; },
/* harmony export */   "default": function() { return /* binding */ IconArrowRight; }
/* harmony export */ });
/* harmony import */ var _createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.mjs */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs");
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { "d": "M5 12l14 0", "key": "svg-0" }], ["path", { "d": "M13 18l6 -6", "key": "svg-1" }], ["path", { "d": "M13 6l6 6", "key": "svg-2" }]];
const IconArrowRight = (0,_createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("outline", "arrow-right", "ArrowRight", __iconNode);


//# sourceMappingURL=IconArrowRight.mjs.map


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

/***/ "./src/blocks/Accordion/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/Accordion/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/accordion","title":"Accordion","category":"eara","icon":"list-view","description":"An accordion item with expandable content.","supports":{"html":false},"attributes":{"title":{"type":"string","default":"Accordion Item"},"defaultOpened":{"type":"boolean","default":false},"disabled":{"type":"boolean","default":false}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/Accordion/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/Accordion/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const {
  InspectorControls,
  InnerBlocks,
  RichText,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  TextControl
} = wp.components;
const {
  __
} = wp.i18n;


function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    title,
    defaultOpened,
    disabled
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
        title: __("Accordion Item Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: __("Default Opened", "eara"),
          checked: defaultOpened,
          onChange: v => setAttributes({
            defaultOpened: v
          }),
          help: __("Open this item by default", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
          label: __("Disabled", "eara"),
          checked: disabled,
          onChange: v => setAttributes({
            disabled: v
          }),
          help: __("Disable this accordion item", "eara")
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
        defaultValue: defaultOpened ? clientId : null,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Accordion.Item, {
          value: clientId,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Accordion.Control, {
            disabled: disabled,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RichText, {
              tagName: "div",
              value: title,
              onChange: v => setAttributes({
                title: v
              }),
              placeholder: __("Accordion title...", "eara"),
              withoutInteractiveFormatting: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Accordion.Panel, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerBlocks, {})
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/Accordion/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/Accordion/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Accordion/index.js":
/*!***************************************!*\
  !*** ./src/blocks/Accordion/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Accordion/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Accordion/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Accordion/editor.scss");
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
  parent: _block_json__WEBPACK_IMPORTED_MODULE_0__.parent,
  keywords: _block_json__WEBPACK_IMPORTED_MODULE_0__.keywords,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  editorStyle: _block_json__WEBPACK_IMPORTED_MODULE_0__.editorStyle,
  style: _block_json__WEBPACK_IMPORTED_MODULE_0__.style,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/Accordion/save.js":
/*!**************************************!*\
  !*** ./src/blocks/Accordion/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  InnerBlocks,
  RichText
} = wp.blockEditor;
function Save(props) {
  const {
    attributes
  } = props;
  const {
    title,
    defaultOpened,
    disabled
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "eara-accordion__item",
    "data-default-opened": defaultOpened,
    "data-disabled": disabled,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "eara-accordion__control",
      type: "button",
      "aria-expanded": defaultOpened ? "true" : "false",
      disabled: disabled,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-accordion__label",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichText.Content, {
          value: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-accordion__chevron",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "eara-accordion__panel",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "eara-accordion__content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/AccordionContainer/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/AccordionContainer/block.json ***!
  \**************************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/accordion-container","title":"Accordion Container","category":"eara","icon":"list-view","description":"A container for accordion items with expandable content, like Mantine Accordion.","supports":{"html":false},"attributes":{"variant":{"type":"string","default":"default"},"radius":{"type":"string","default":"sm"},"chevronPosition":{"type":"string","default":"right"},"chevronSize":{"type":"string","default":"md"},"disableChevronRotation":{"type":"boolean","default":false},"multiple":{"type":"boolean","default":false},"loop":{"type":"boolean","default":true}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/AccordionContainer/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/AccordionContainer/edit.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const {
  InspectorControls,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl
} = wp.components;
const {
  __
} = wp.i18n;


const ALLOWED_BLOCKS = ['eara/accordion'];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    variant,
    radius,
    chevronPosition,
    chevronSize,
    disableChevronRotation,
    multiple,
    loop
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
          title: __("Accordion Settings", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Variant", "eara"),
            value: variant,
            options: [{
              label: "Default",
              value: "default"
            }, {
              label: "Contained",
              value: "contained"
            }, {
              label: "Filled",
              value: "filled"
            }, {
              label: "Separated",
              value: "separated"
            }],
            onChange: v => setAttributes({
              variant: v
            }),
            help: __("Visual style of the accordion", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Radius", "eara"),
            value: radius,
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
            }],
            onChange: v => setAttributes({
              radius: v
            }),
            help: __("Border radius", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Chevron Position", "eara"),
            value: chevronPosition,
            options: [{
              label: "Left",
              value: "left"
            }, {
              label: "Right",
              value: "right"
            }],
            onChange: v => setAttributes({
              chevronPosition: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Chevron Size", "eara"),
            value: chevronSize,
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
            }],
            onChange: v => setAttributes({
              chevronSize: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
          title: __("Behavior", "eara"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: __("Multiple Open", "eara"),
            checked: multiple,
            onChange: v => setAttributes({
              multiple: v
            }),
            help: __("Allow multiple items to be opened at once", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: __("Loop", "eara"),
            checked: loop,
            onChange: v => setAttributes({
              loop: v
            }),
            help: __("Loop keyboard navigation", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: __("Disable Chevron Rotation", "eara"),
            checked: disableChevronRotation,
            onChange: v => setAttributes({
              disableChevronRotation: v
            }),
            help: __("Prevent chevron icon from rotating", "eara")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
        variant: variant,
        radius: radius,
        chevronPosition: chevronPosition,
        chevronSize: chevronSize,
        multiple: multiple,
        loop: loop,
        disableChevronRotation: disableChevronRotation,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerBlocks, {
          allowedBlocks: ALLOWED_BLOCKS,
          template: [['eara/accordion', {
            title: 'First accordion item'
          }], ['eara/accordion', {
            title: 'Second accordion item'
          }]]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/AccordionContainer/editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/AccordionContainer/editor.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/AccordionContainer/index.js":
/*!************************************************!*\
  !*** ./src/blocks/AccordionContainer/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/AccordionContainer/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/AccordionContainer/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/AccordionContainer/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/AccordionContainer/editor.scss");
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

/***/ }),

/***/ "./src/blocks/AccordionContainer/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/AccordionContainer/save.js ***!
  \***********************************************/
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
function Save(props) {
  const {
    attributes
  } = props;
  const {
    variant,
    radius,
    chevronPosition,
    chevronSize,
    disableChevronRotation,
    multiple,
    loop
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "eara-accordion-container",
    "data-variant": variant,
    "data-radius": radius,
    "data-chevron-position": chevronPosition,
    "data-chevron-size": chevronSize,
    "data-disable-chevron-rotation": disableChevronRotation,
    "data-multiple": multiple,
    "data-loop": loop,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/blocks/Button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/Button/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/button","title":"Button","category":"eara","icon":"button","description":"You can choose between several styles of buttons","supports":{"html":false},"example":{"attributes":{"label":"Eara Button"}},"attributes":{"label":{"type":"string","default":"Button"},"link":{"type":"string","default":"#"},"target":{"type":"string","default":"_self"},"variant":{"type":"string","default":"filled"},"size":{"type":"string","default":"sm"},"width":{"type":"string","default":""},"color":{"type":"string","default":"blue"},"radius":{"type":"string","default":"sm"},"fullWidth":{"type":"boolean","default":false},"compact":{"type":"boolean","default":false},"disabled":{"type":"boolean","default":false},"loading":{"type":"boolean","default":false},"uppercase":{"type":"boolean","default":false},"leftIcon":{"type":"string","default":""},"rightIcon":{"type":"string","default":""},"gradient":{"type":"object","default":{}}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/Button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/Button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Button/Button.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const {
  InspectorControls,
  useBlockProps
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
    label,
    link,
    target,
    variant,
    size,
    color,
    radius,
    fullWidth,
    width,
    compact,
    disabled,
    loading,
    uppercase,
    leftIcon,
    rightIcon,
    className
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
          title: __("Button Content", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Label", "eara"),
            value: label,
            onChange: v => setAttributes({
              label: v
            }),
            help: __("The text displayed on the button", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Link URL", "eara"),
            value: link,
            onChange: v => setAttributes({
              link: v
            }),
            placeholder: "https://example.com"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __("Link Target", "eara"),
            value: target,
            options: [{
              label: "Same Window (_self)",
              value: "_self"
            }, {
              label: "New Window (_blank)",
              value: "_blank"
            }, {
              label: "Parent Frame (_parent)",
              value: "_parent"
            }, {
              label: "Top Frame (_top)",
              value: "_top"
            }],
            onChange: v => setAttributes({
              target: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("ClassName", "eara"),
            value: className,
            onChange: v => setAttributes({
              className: v
            }),
            placeholder: "e.g., my-custom-button"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
          title: __("Appearance", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __("Variant", "eara"),
            value: variant,
            options: [{
              label: "Filled",
              value: "filled"
            }, {
              label: "Outline",
              value: "outline"
            }, {
              label: "Link",
              value: "link"
            }, {
              label: "With Arrow",
              value: "with-arrow"
            }],
            onChange: v => setAttributes({
              variant: v
            }),
            help: __("Button visual style", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __("Size", "eara"),
            value: size,
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
              label: "Compact XS",
              value: "compact-xs"
            }, {
              label: "Compact SM",
              value: "compact-sm"
            }, {
              label: "Compact MD",
              value: "compact-md"
            }, {
              label: "Compact LG",
              value: "compact-lg"
            }, {
              label: "Compact XL",
              value: "compact-xl"
            }],
            onChange: v => setAttributes({
              size: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Width", "eara"),
            value: width,
            onChange: w => setAttributes({
              width: w
            }),
            help: __("Button width", "eara")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
          title: __("Icon Settings", "eara"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Left Icon (emoji or symbol)", "eara"),
            value: leftIcon,
            onChange: v => setAttributes({
              leftIcon: v
            }),
            placeholder: "e.g., \u2190, \u2713, \uD83D\uDE80",
            help: __("Add an icon or emoji before the label", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Right Icon (emoji or symbol)", "eara"),
            value: rightIcon,
            onChange: v => setAttributes({
              rightIcon: v
            }),
            placeholder: "e.g., \u2192, \u2713, \uD83D\uDE80",
            help: __("Add an icon or emoji after the label", "eara")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
          title: __("Options", "eara"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ToggleControl, {
            label: __("Full Width", "eara"),
            checked: fullWidth,
            onChange: v => setAttributes({
              fullWidth: v
            }),
            help: __("Make button take 100% width of container", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ToggleControl, {
            label: __("Uppercase", "eara"),
            checked: uppercase,
            onChange: v => setAttributes({
              uppercase: v
            }),
            help: __("Transform text to uppercase", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ToggleControl, {
            label: __("Disabled", "eara"),
            checked: disabled,
            onChange: v => setAttributes({
              disabled: v
            }),
            help: __("Disable button interactions", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ToggleControl, {
            label: __("Loading State", "eara"),
            checked: loading,
            onChange: v => setAttributes({
              loading: v
            }),
            help: __("Show loading spinner", "eara")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          display: "inline-block"
        },
        children: [variant == "filled" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          ...(link ? {
            component: "a"
          } : {}),
          ...(link ? {
            href: "javascript:void(0)"
          } : {}),
          ...(link && target ? {
            target: target
          } : {}),
          // fw="medium"
          w: width,
          className: className,
          tt: "uppercase",
          size: "lg",
          styles: {
            root: {
              backgroundColor: props.bg?.toString() || "var(--color-primaryColor)",
              borderRadius: props.radius?.toString() || "100px"
            },
            label: {
              fontWeight: "400",
              fontSize: "13px",
              letterSpacing: ".8px"
            }
          },
          ...props,
          children: props.children || label
        }), variant == "outline" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          ...(link ? {
            component: "a"
          } : {}),
          ...(link ? {
            href: "javascript:void(0)"
          } : {}),
          ...(link && target ? {
            target: target
          } : {}),
          variant: "outline",
          w: width,
          tt: "uppercase",
          className: className,
          size: "lg",
          c: "white"
          // leftSection={leftSection}
          ,
          styles: {
            root: {
              borderColor: props.bd?.toString() || "white"
            },
            label: {
              fontWeight: "400",
              fontSize: "13px",
              letterSpacing: ".8px"
            }
          },
          ...props,
          children: props.children || label
        }), variant == "link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button
        // leftSection={leftSection}
        , {
          ...(link ? {
            component: "a"
          } : {}),
          ...(link ? {
            href: "javascript:void(0)"
          } : {}),
          ...(link && target ? {
            target: target
          } : {}),
          rightSection: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
            size: 16
          }),
          unstyled: true,
          tt: "uppercase",
          className: "link hover:opacity-85",
          size: "lg",
          c: "var(--color-primaryColor)",
          styles: {
            inner: {
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              gap: 15,
              borderBottom: "1px solid var(--color-primaryColor)"
            },
            root: {
              borderColor: "white",
              width: "fit-content"
            },
            label: {
              fontWeight: "400",
              fontSize: "13px",
              letterSpacing: ".8px"
            }
          },
          ...props,
          children: props.children || label
        }), variant == "with-arrow" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "withArrow",
          ...(link ? {
            component: "a"
          } : {}),
          ...(link ? {
            href: "javascript:void(0)"
          } : {}),
          ...(link && target ? {
            target: target
          } : {}),
          rightSection: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "arrowIcon flex aspect-square h-[48.4px] items-center justify-center rounded-full p-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])("bg-secondaryColor h-full w-full rounded-full p-2 text-black")
            })
          }),
          variant: "filled",
          tt: "uppercase",
          size: "lg",
          c: "white",
          styles: {
            root: {
              paddingRight: "0px"
            },
            label: {
              fontWeight: "400",
              fontSize: "13px",
              letterSpacing: ".8px"
            }
          },
          ...props,
          children: props.children || label
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/Button/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/Button/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Button/index.js":
/*!************************************!*\
  !*** ./src/blocks/Button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Button/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Button/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Button/editor.scss");
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

/***/ }),

/***/ "./src/blocks/Button/save.js":
/*!***********************************!*\
  !*** ./src/blocks/Button/save.js ***!
  \***********************************/
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
    label,
    link,
    target,
    variant,
    size,
    color,
    radius,
    fullWidth,
    disabled,
    loading,
    uppercase,
    leftIcon,
    rightIcon
  } = attributes;
  const Element = link && link !== '#' ? 'a' : 'button';
  const elementProps = Element === 'a' ? {
    href: link,
    target: target,
    rel: target === '_blank' ? 'noopener noreferrer' : undefined
  } : {
    type: 'button',
    disabled: disabled
  };
  const className = `eara-button ${fullWidth ? 'eara-button--full-width' : ''} ${loading ? 'eara-button--loading' : ''}`;
  const styles = {
    '--button-variant': variant,
    '--button-size': size,
    '--button-color': color,
    '--button-radius': radius
  };
  if (uppercase) {
    styles.textTransform = 'uppercase';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Element, {
    className: className,
    style: styles,
    "data-variant": variant,
    "data-size": size,
    "data-color": color,
    "data-radius": radius,
    "data-disabled": disabled,
    "data-loading": loading,
    ...elementProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "eara-button__inner",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-button__loader",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeDasharray: "50 50"
          })
        })
      }), leftIcon && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-button__left-icon",
        children: leftIcon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-button__label",
        children: label
      }), rightIcon && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-button__right-icon",
        children: rightIcon
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/Card/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/Card/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Card/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Group/Group.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Card/Card.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Image/Image.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Text/Text.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);






function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    variant,
    title,
    link,
    featuredImage,
    icon,
    orientation
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)({
    className: `wp-block-eara-card wp-block-eara-card--${variant}`
  });
  const variantOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member", "eara"),
    value: "member"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("News", "eara"),
    value: "news"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Animals", "eara"),
    value: "animals"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team", "eara"),
    value: "team"
  }];
  const orientationOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Vertical", "eara"),
    value: "vertical"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Horizontal", "eara"),
    value: "horizontal"
  }];
  const onSelectImage = media => {
    setAttributes({
      featuredImage: {
        url: media.url,
        id: media.id,
        alt: media.alt || ""
      }
    });
  };
  const removeImage = () => {
    setAttributes({
      featuredImage: {
        url: "",
        id: 0,
        alt: ""
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Settings", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Variant", "eara"),
            value: variant,
            options: variantOptions,
            onChange: value => setAttributes({
              variant: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose the card variant style", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Orientation", "eara"),
            value: orientation,
            options: orientationOptions,
            onChange: value => setAttributes({
              orientation: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose the card orientation", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "eara"),
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card title", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link URL", "eara"),
            value: link,
            onChange: value => setAttributes({
              link: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card link (optional)", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "eara"),
            value: icon,
            onChange: value => setAttributes({
              icon: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon name or emoji (optional)", "eara")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Featured Image", "eara"),
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
              onSelect: onSelectImage,
              allowedTypes: ["image"],
              value: featuredImage.id,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: featuredImage.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
                    src: featuredImage.url,
                    alt: featuredImage.alt,
                    style: {
                      maxWidth: "100%",
                      marginBottom: "10px"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {
                    gap: "xs",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
                      onClick: open,
                      variant: "secondary",
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace Image", "eara")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
                      onClick: removeImage,
                      variant: "tertiary",
                      isDestructive: true,
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "eara")
                    })]
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
                  onClick: open,
                  variant: "secondary",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image", "eara")
                })
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Card, {
        shadow: "sm",
        padding: "lg",
        radius: "md",
        withBorder: true,
        children: [featuredImage.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Card.Section, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Image, {
            src: featuredImage.url,
            height: 200,
            alt: featuredImage.alt || title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {
          justify: "space-between",
          mt: "md",
          mb: "xs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {
            fw: 500,
            size: "lg",
            children: title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Title", "eara")
          }), icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {
            size: "xl",
            children: icon
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "card-description",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InnerBlocks, {
            allowedBlocks: ["core/paragraph", "core/heading", "core/list"],
            template: [["core/paragraph", {
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add card description...", "eara")
            }]]
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/Card/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/Card/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Card/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Card/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/blocks/Card/styles.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Card/save.js");



const block = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};
wp.blocks.registerBlockType('eara/card', block);

/***/ }),

/***/ "./src/blocks/Card/save.js":
/*!*********************************!*\
  !*** ./src/blocks/Card/save.js ***!
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
function Save({
  attributes
}) {
  const {
    variant,
    title,
    link,
    featuredImage,
    icon
  } = attributes;
  const CardWrapper = ({
    children
  }) => {
    if (link) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: link,
        className: `eara-card eara-card--${variant}`,
        style: {
          textDecoration: 'none',
          color: 'inherit',
          display: 'block'
        },
        children: children
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: `eara-card eara-card--${variant}`,
      children: children
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardWrapper, {
    children: [featuredImage.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "eara-card__image",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: featuredImage.url,
        alt: featuredImage.alt || title
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "eara-card__content",
      children: [variant && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "eara-card__badge",
        "data-variant": variant,
        children: variant
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "eara-card__header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
          className: "eara-card__title",
          children: title
        }), icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "eara-card__icon",
          children: icon
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "eara-card__description",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/Card/styles.scss":
/*!*************************************!*\
  !*** ./src/blocks/Card/styles.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Container/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/Container/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/container","title":"Container","category":"eara","icon":"screenoptions","description":"A customizable container block for grouping content.","supports":{"html":false},"example":{"attributes":{"size":"xl"}},"attributes":{"size":{"type":"string","default":"md"},"fluid":{"type":"boolean","default":false},"p":{"type":"string","default":"md"},"px":{"type":"string","default":""},"py":{"type":"string","default":""}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/Container/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/Container/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Container/Container.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const {
  InspectorControls,
  InnerBlocks,
  useBlockProps
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
    size,
    fluid,
    p,
    px,
    py
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
          title: __("Container Settings", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Size", "eara"),
            value: size,
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
            }],
            onChange: value => setAttributes({
              size: value
            }),
            help: __("Maximum width of the container. Ignored if fluid is enabled.", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: __("Fluid", "eara"),
            checked: fluid,
            onChange: value => setAttributes({
              fluid: value
            }),
            help: __("Enable to make container take 100% width.", "eara")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
          title: __("Padding", "eara"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Padding (all sides)", "eara"),
            value: p,
            options: [{
              label: "None",
              value: "0"
            }, {
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
            }],
            onChange: value => setAttributes({
              p: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextControl, {
            label: __("Horizontal Padding (px)", "eara"),
            value: px,
            onChange: value => setAttributes({
              px: value
            }),
            help: __("Custom horizontal padding (e.g., 20px, 2rem). Overrides padding setting.", "eara"),
            placeholder: "e.g., 20px or md"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextControl, {
            label: __("Vertical Padding (py)", "eara"),
            value: py,
            onChange: value => setAttributes({
              py: value
            }),
            help: __("Custom vertical padding (e.g., 20px, 2rem). Overrides padding setting.", "eara"),
            placeholder: "e.g., 20px or md"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
        size: fluid ? "100%" : size,
        fluid: fluid,
        p: p,
        px: px || undefined,
        py: py || undefined,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerBlocks, {})
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/Container/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/Container/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Container/index.js":
/*!***************************************!*\
  !*** ./src/blocks/Container/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Container/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Container/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Container/editor.scss");
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

/***/ }),

/***/ "./src/blocks/Container/save.js":
/*!**************************************!*\
  !*** ./src/blocks/Container/save.js ***!
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
function Save(props) {
  const {
    attributes
  } = props;
  const {
    size,
    fluid,
    p,
    px,
    py
  } = attributes;

  // Build class names based on Mantine Container structure
  const className = `eara-container ${fluid ? 'eara-container--fluid' : ''}`;

  // Build inline styles
  const styles = {};
  if (!fluid && size) {
    styles['--container-size'] = size;
  }
  if (px) {
    styles['--container-px'] = px;
  }
  if (py) {
    styles['--container-py'] = py;
  }
  if (p && !px && !py) {
    styles['--container-p'] = p;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: className,
    style: Object.keys(styles).length > 0 ? styles : undefined,
    "data-size": size,
    "data-fluid": fluid,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/blocks/Grid/block.json":
/*!************************************!*\
  !*** ./src/blocks/Grid/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/grid","title":"Grid","category":"eara","icon":"grid-view","description":"Flexbox grid system with customizable columns and gaps, like Mantine Grid.","supports":{"html":false},"attributes":{"columns":{"type":"number","default":12},"gutter":{"type":"string","default":"md"},"grow":{"type":"boolean","default":false},"justify":{"type":"string","default":"flex-start"},"align":{"type":"string","default":"stretch"},"overflow":{"type":"string","default":"visible"}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

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

/***/ "./src/blocks/Grid/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Grid/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/blocks/GridCol/block.json":
/*!***************************************!*\
  !*** ./src/blocks/GridCol/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/grid-col","title":"Grid Column","category":"eara","icon":"columns","description":"A column within a Grid, like Mantine Grid.Col.","supports":{"html":false},"attributes":{"span":{"type":"number","default":12},"offset":{"type":"number","default":0},"order":{"type":"number","default":0},"spanXs":{"type":"number","default":0},"spanSm":{"type":"number","default":0},"spanMd":{"type":"number","default":0},"spanLg":{"type":"number","default":0},"spanXl":{"type":"number","default":0}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/GridCol/edit.js":
/*!************************************!*\
  !*** ./src/blocks/GridCol/edit.js ***!
  \************************************/
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
  RangeControl
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
    span,
    offset,
    order,
    spanXs,
    spanSm,
    spanMd,
    spanLg,
    spanXl
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Column Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Span (Default)", "eara"),
          value: span,
          onChange: v => setAttributes({
            span: v
          }),
          min: 1,
          max: 24,
          help: __("Number of columns this element should span", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Offset", "eara"),
          value: offset,
          onChange: v => setAttributes({
            offset: v
          }),
          min: 0,
          max: 23,
          help: __("Number of columns to offset from the left", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Order", "eara"),
          value: order,
          onChange: v => setAttributes({
            order: v
          }),
          min: 0,
          max: 10,
          help: __("Controls the order of the column (flex order)", "eara")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
        title: __("Responsive Spans", "eara"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          style: {
            fontSize: '12px',
            color: '#666',
            marginBottom: '12px'
          },
          children: __("Set to 0 to use default span. XS < 576px, SM >= 576px, MD >= 768px, LG >= 992px, XL >= 1200px", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Span XS (< 576px)", "eara"),
          value: spanXs,
          onChange: v => setAttributes({
            spanXs: v
          }),
          min: 0,
          max: 24
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Span SM (>= 576px)", "eara"),
          value: spanSm,
          onChange: v => setAttributes({
            spanSm: v
          }),
          min: 0,
          max: 24
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Span MD (>= 768px)", "eara"),
          value: spanMd,
          onChange: v => setAttributes({
            spanMd: v
          }),
          min: 0,
          max: 24
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Span LG (>= 992px)", "eara"),
          value: spanLg,
          onChange: v => setAttributes({
            spanLg: v
          }),
          min: 0,
          max: 24
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
          label: __("Span XL (>= 1200px)", "eara"),
          value: spanXl,
          onChange: v => setAttributes({
            spanXl: v
          }),
          min: 0,
          max: 24
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        width: '100%'
      },
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks, {})
    })]
  });
}

/***/ }),

/***/ "./src/blocks/GridCol/editor.scss":
/*!****************************************!*\
  !*** ./src/blocks/GridCol/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/GridCol/index.js":
/*!*************************************!*\
  !*** ./src/blocks/GridCol/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/GridCol/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/GridCol/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/GridCol/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/GridCol/editor.scss");
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

/***/ }),

/***/ "./src/blocks/GridCol/save.js":
/*!************************************!*\
  !*** ./src/blocks/GridCol/save.js ***!
  \************************************/
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

/***/ "./src/blocks/Group/block.json":
/*!*************************************!*\
  !*** ./src/blocks/Group/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/group","title":"Group","category":"eara","icon":"grid-view","description":"Compose elements and components in a horizontal flex container, like Mantine Group.","supports":{"html":false},"attributes":{"justify":{"type":"string","default":"flex-start"},"align":{"type":"string","default":"center"},"gap":{"type":"string","default":"md"},"grow":{"type":"boolean","default":false},"wrap":{"type":"string","default":"no-wrap"},"preventGrowOverflow":{"type":"boolean","default":true}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/Group/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/Group/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Group/Group.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const {
  InspectorControls,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl
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
    justify,
    align,
    gap,
    grow,
    wrap,
    preventGrowOverflow
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
          title: __("Layout", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Justify (Horizontal Alignment)", "eara"),
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
            }, {
              label: "Space Evenly",
              value: "space-evenly"
            }],
            onChange: v => setAttributes({
              justify: v
            }),
            help: __("Controls horizontal alignment of items", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Align (Vertical Alignment)", "eara"),
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
              label: "Baseline",
              value: "baseline"
            }, {
              label: "Stretch",
              value: "stretch"
            }],
            onChange: v => setAttributes({
              align: v
            }),
            help: __("Controls vertical alignment of items", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Gap", "eara"),
            value: gap,
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
              gap: v
            }),
            help: __("Space between items", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectControl, {
            label: __("Wrap", "eara"),
            value: wrap,
            options: [{
              label: "Wrap",
              value: "wrap"
            }, {
              label: "No Wrap",
              value: "nowrap"
            }, {
              label: "Wrap Reverse",
              value: "wrap-reverse"
            }],
            onChange: v => setAttributes({
              wrap: v
            }),
            help: __("Controls wrapping behavior", "eara")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PanelBody, {
          title: __("Options", "eara"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: __("Grow", "eara"),
            checked: grow,
            onChange: v => setAttributes({
              grow: v
            }),
            help: __("Allow all children to grow to fill available space", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToggleControl, {
            label: __("Prevent Grow Overflow", "eara"),
            checked: preventGrowOverflow,
            onChange: v => setAttributes({
              preventGrowOverflow: v
            }),
            help: __("Prevent children from overflowing when grow is enabled", "eara")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
        justify: justify,
        align: align,
        gap: gap,
        grow: grow,
        wrap: wrap,
        preventGrowOverflow: preventGrowOverflow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerBlocks, {})
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/Group/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/Group/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Group/index.js":
/*!***********************************!*\
  !*** ./src/blocks/Group/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Group/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Group/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Group/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Group/editor.scss");
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

/***/ }),

/***/ "./src/blocks/Group/save.js":
/*!**********************************!*\
  !*** ./src/blocks/Group/save.js ***!
  \**********************************/
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

/***/ "./src/blocks/HeroCarousel/index.js":
/*!******************************************!*\
  !*** ./src/blocks/HeroCarousel/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/blocks/HeroSlide/index.js":
/*!***************************************!*\
  !*** ./src/blocks/HeroSlide/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/blocks/LatestEvents/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/LatestEvents/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/LatestEvents/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Badge/Badge.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Card/Card.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Stack/Stack.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Text/Text.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);







function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    postsPerPage,
    columns
  } = attributes;
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.useBlockProps)({
    className: 'wp-block-eara-latest-events'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Fetch latest events posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/wp-json/wp/v2/events?_embed&per_page=${postsPerPage}&orderby=date&order=desc`);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching events:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [postsPerPage]);
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '2rem',
    marginTop: '1rem'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Latest Events Settings', 'eara'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of Events', 'eara'),
            value: postsPerPage,
            onChange: v => setAttributes({
              postsPerPage: v
            }),
            min: 1,
            max: 12,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('How many events to display', 'eara')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Columns', 'eara'),
            value: columns,
            onChange: v => setAttributes({
              columns: v
            }),
            min: 1,
            max: 4,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of columns in the grid', 'eara')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        style: containerStyle,
        children: loading ? Array.from({
          length: postsPerPage
        }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Card, {
          shadow: "sm",
          padding: "lg",
          radius: "md",
          withBorder: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Stack, {
            gap: "xs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
              height: 15,
              radius: "md",
              width: "30%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
              height: 24,
              radius: "md"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
              height: 15,
              radius: "md",
              width: "100%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
              height: 15,
              radius: "md",
              width: "80%"
            })]
          })
        }, i)) : posts.length > 0 ? posts.map(post => {
          const categories = post._embedded?.['wp:term']?.[0] || [];
          const excerpt = post.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]*>/g, '').trim() : '';
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Card, {
            shadow: "sm",
            padding: "lg",
            radius: "md",
            withBorder: true,
            children: [categories.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Badge, {
              color: "blue",
              variant: "light",
              mb: "sm",
              children: categories[0].name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Text, {
              fw: 600,
              size: "lg",
              mb: "xs",
              lineClamp: 2,
              children: post.title.rendered
            }), excerpt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Text, {
              size: "sm",
              c: "dimmed",
              lineClamp: 3,
              children: excerpt
            })]
          }, post.id);
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Text, {
          c: "dimmed",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No events found', 'eara')
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/LatestEvents/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/LatestEvents/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/LatestEvents/index.js":
/*!******************************************!*\
  !*** ./src/blocks/LatestEvents/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/blocks/LatestEvents/styles.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/LatestEvents/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/LatestEvents/save.js");



const block = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};
wp.blocks.registerBlockType('eara/latest-events', block);

/***/ }),

/***/ "./src/blocks/LatestEvents/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/LatestEvents/save.js ***!
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

/***/ "./src/blocks/LatestEvents/styles.scss":
/*!*********************************************!*\
  !*** ./src/blocks/LatestEvents/styles.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/LatestNews/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/LatestNews/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/LatestNews/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Group/Group.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Card/Card.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Image/Image.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Stack/Stack.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Text/Text.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);







function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    postsPerPage,
    columns
  } = attributes;
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__.useBlockProps)({
    className: 'wp-block-eara-latest-news'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Fetch latest news posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/wp-json/wp/v2/news?_embed&per_page=${postsPerPage}&orderby=date&order=desc`);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [postsPerPage]);
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '2rem',
    marginTop: '1rem'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Latest News Settings', 'eara'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of Posts', 'eara'),
            value: postsPerPage,
            onChange: v => setAttributes({
              postsPerPage: v
            }),
            min: 1,
            max: 12,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('How many posts to display', 'eara')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Columns', 'eara'),
            value: columns,
            onChange: v => setAttributes({
              columns: v
            }),
            min: 1,
            max: 4,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of columns in the grid', 'eara')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "grid gap-8 sm:grid-cols-4 sm:grid-rows-4",
        children: loading ? Array.from({
          length: postsPerPage
        }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          shadow: "sm",
          padding: "lg",
          radius: "md",
          withBorder: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Card.Section, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
              height: 200
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.Stack, {
            gap: "xs",
            mt: "md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
              height: 20,
              radius: "md"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
              height: 15,
              radius: "md",
              width: "80%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
              height: 15,
              radius: "md",
              width: "60%"
            })]
          })]
        }, i)) : posts.length > 0 ? posts.map(post => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
          const author = post._embedded?.author?.[0];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
            ard: true,
            className: "sm:col-span-2 sm:row-span-4",
            shadow: "sm",
            padding: "lg",
            radius: "md",
            withBorder: true,
            children: [featuredImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Card.Section, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Image, {
                src: featuredImage.source_url,
                height: 200,
                alt: post.title.rendered
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {
              justify: "space-between",
              mt: "md",
              mb: "xs",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.Text, {
                fw: 500,
                size: "lg",
                lineClamp: 2,
                children: post.title.rendered
              })
            }), author && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {
              gap: "xs",
              mt: "md",
              pt: "md",
              style: {
                borderTop: '1px solid #e9ecef'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
                src: author.avatar_urls?.[48],
                size: "sm",
                radius: "xl"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.Text, {
                size: "sm",
                c: "dimmed",
                children: author.name
              })]
            })]
          }, post.id);
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.Text, {
          c: "dimmed",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No posts found', 'eara')
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/LatestNews/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/LatestNews/editor.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/LatestNews/index.js":
/*!****************************************!*\
  !*** ./src/blocks/LatestNews/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/blocks/LatestNews/styles.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/LatestNews/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/LatestNews/save.js");



const block = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};
wp.blocks.registerBlockType('eara/latest-news', block);

/***/ }),

/***/ "./src/blocks/LatestNews/save.js":
/*!***************************************!*\
  !*** ./src/blocks/LatestNews/save.js ***!
  \***************************************/
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

/***/ "./src/blocks/LatestNews/styles.scss":
/*!*******************************************!*\
  !*** ./src/blocks/LatestNews/styles.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/List/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/List/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/List/editor.scss");
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
    withIcon,
    size,
    color,
    spacing,
    listStyleType
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `wp-block-eara-list wp-block-eara-list--${size}`,
    style: {
      "--list-color": color,
      "--list-spacing": spacing,
      "--list-style": listStyleType
    }
  });
  const sizeOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small", "eara"),
    value: "sm"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium", "eara"),
    value: "md"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Large", "eara"),
    value: "lg"
  }];
  const spacingOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra Small", "eara"),
    value: "xs"
  }, {
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
  }];
  const styleTypeOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Disc", "eara"),
    value: "disc"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Circle", "eara"),
    value: "circle"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Square", "eara"),
    value: "square"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Decimal", "eara"),
    value: "decimal"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lower Alpha", "eara"),
    value: "lower-alpha"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upper Alpha", "eara"),
    value: "upper-alpha"
  }];
  const colorOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Blue", "eara"),
    value: "blue"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Red", "eara"),
    value: "red"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Green", "eara"),
    value: "green"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yellow", "eara"),
    value: "yellow"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Purple", "eara"),
    value: "purple"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Black", "eara"),
    value: "black"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gray", "eara"),
    value: "gray"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("List Settings", "eara"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Icons", "eara"),
          checked: withIcon,
          onChange: value => setAttributes({
            withIcon: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display icons before each list item", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Size", "eara"),
          value: size,
          options: sizeOptions,
          onChange: value => setAttributes({
            size: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text size of list items", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "eara"),
          value: color,
          options: colorOptions,
          onChange: value => setAttributes({
            color: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color of list markers and icons", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spacing", "eara"),
          value: spacing,
          options: spacingOptions,
          onChange: value => setAttributes({
            spacing: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Space between list items", "eara")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("List Style Type", "eara"),
          value: listStyleType,
          options: styleTypeOptions,
          onChange: value => setAttributes({
            listStyleType: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Style of list markers", "eara")
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
      className: "eara-list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
        renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender,
        allowedBlocks: ["eara/list-item"],
        template: [["eara/list-item"]],
        orientation: "vertical"
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/List/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/List/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/List/index.js":
/*!**********************************!*\
  !*** ./src/blocks/List/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/blocks/List/styles.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/List/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/List/save.js");



const block = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};
wp.blocks.registerBlockType('eara/list', block);

/***/ }),

/***/ "./src/blocks/List/save.js":
/*!*********************************!*\
  !*** ./src/blocks/List/save.js ***!
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
function Save({
  attributes
}) {
  const {
    withIcon,
    size,
    color,
    spacing,
    listStyleType
  } = attributes;
  const classList = ['eara-list', `eara-list--${size}`];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
    className: classList.join(' '),
    "data-with-icon": withIcon ? 'true' : 'false',
    "data-color": color,
    "data-spacing": spacing,
    style: {
      listStyleType: listStyleType
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/blocks/List/styles.scss":
/*!*************************************!*\
  !*** ./src/blocks/List/styles.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/ListItem/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/ListItem/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/ListItem/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    text
  } = attributes;

  // Check if this block is inside a List block
  const parentBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlockParents,
      getBlockName
    } = select('core/block-editor');
    const parents = getBlockParents(clientId);

    // Find the first parent that is an 'eara/list' block
    for (const parentId of parents) {
      if (getBlockName(parentId) === 'eara/list') {
        return parentId;
      }
    }
    return null;
  }, [clientId]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'wp-block-eara-list-item'
  });
  const showWarning = parentBlockId === null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [showWarning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Warning, {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Item must be placed inside a List block', 'eara')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Item Settings', 'eara'),
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit the item text in the editor below.', 'eara')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
        tagName: "span",
        value: text,
        onChange: value => setAttributes({
          text: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add list item text...', 'eara'),
        allowedFormats: ['core/bold', 'core/italic', 'core/link']
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/ListItem/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/ListItem/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/ListItem/index.js":
/*!**************************************!*\
  !*** ./src/blocks/ListItem/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/blocks/ListItem/styles.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/ListItem/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/ListItem/save.js");



const block = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};
wp.blocks.registerBlockType('eara/list-item', block);

/***/ }),

/***/ "./src/blocks/ListItem/save.js":
/*!*************************************!*\
  !*** ./src/blocks/ListItem/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Save({
  attributes
}) {
  const {
    text
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    children: text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      dangerouslySetInnerHTML: {
        __html: text
      }
    })
  });
}

/***/ }),

/***/ "./src/blocks/ListItem/styles.scss":
/*!*****************************************!*\
  !*** ./src/blocks/ListItem/styles.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Section/block.json":
/*!***************************************!*\
  !*** ./src/blocks/Section/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"eara/section","title":"Section","category":"eara","icon":"layout","description":"A section container with title, subtitle, and customizable spacing.","supports":{"html":false},"attributes":{"title":{"type":"string","default":""},"subtitle":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"description":{"type":"string","default":""},"py":{"type":"string","default":"xl"},"noTitle":{"type":"boolean","default":false},"containerSize":{"type":"string","default":""}},"textdomain":"eara","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/Section/edit.js":
/*!************************************!*\
  !*** ./src/blocks/Section/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Container/Container.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Text/Text.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Title/Title.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const {
  InspectorControls,
  InnerBlocks,
  RichText,
  useBlockProps
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  TextareaControl
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
    title,
    subtitle,
    backgroundColor,
    description,
    py,
    noTitle,
    className,
    containerSize
  } = attributes;
  const blockProps = useBlockProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
          title: __("Content", "eara"),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Subtitle", "eara"),
            value: subtitle,
            onChange: v => setAttributes({
              subtitle: v
            }),
            help: __("Small text above the title", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Title", "eara"),
            value: title,
            onChange: v => setAttributes({
              title: v
            }),
            help: __("Main section title", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextareaControl, {
            label: __("Description", "eara"),
            value: description,
            onChange: v => setAttributes({
              description: v
            }),
            help: __("Description text below the title", "eara"),
            rows: 4
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
          title: __("Section Settings", "eara"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ToggleControl, {
            label: __("Hide Title", "eara"),
            checked: noTitle,
            onChange: v => setAttributes({
              noTitle: v
            }),
            help: __("Hide the title and subtitle section", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __("Container Size", "eara"),
            value: containerSize,
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
              label: "None",
              value: "none"
            }],
            onChange: v => setAttributes({
              containerSize: v
            }),
            help: __("Maximum width of the section container", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __("Vertical Padding", "eara"),
            value: py,
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
              label: "2XL",
              value: "2xl"
            }, {
              label: "3XL",
              value: "3xl"
            }, {
              label: "None (0)",
              value: "0"
            }],
            onChange: v => setAttributes({
              py: v
            }),
            help: __("Top and bottom padding of the section", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
            label: __("Background Color", "eara"),
            value: backgroundColor,
            onChange: v => setAttributes({
              backgroundColor: v
            }),
            help: __("Background color of the section", "eara")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
        class: "py-20 ",
        style: {
          backgroundColor: backgroundColor || "transparent"
        },
        children: [!noTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "w-full items-start gap-20 sm:flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              borderBottom: "1px solid #dee2e6"
            },
            className: " w-fit  border-b border-b-gray-400 py-2 pl-20 sm:pl-40",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
              className: "uppercase",
              children: subtitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "sm:px-unset mt-5 max-w-2xl grow px-[16px] sm:mt-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {
              order: 2,
              className: "text-primaryColor",
              children: [title, !title && "Section Title"]
            }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
              mt: 15,
              children: description
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
          ...(containerSize == "none" ? {
            px: 0,
            fluid: true
          } : {
            size: containerSize
          }),
          mt: 60,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InnerBlocks, {})
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/Section/editor.scss":
/*!****************************************!*\
  !*** ./src/blocks/Section/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/Section/index.js":
/*!*************************************!*\
  !*** ./src/blocks/Section/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/Section/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/Section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/Section/save.js");
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/Section/editor.scss");
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

/***/ }),

/***/ "./src/blocks/Section/save.js":
/*!************************************!*\
  !*** ./src/blocks/Section/save.js ***!
  \************************************/
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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mantine_core_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core/styles.css */ "./node_modules/@mantine/core/styles.css");
/* harmony import */ var _blocks_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/Button */ "./src/blocks/Button/index.js");
/* harmony import */ var _blocks_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Container */ "./src/blocks/Container/index.js");
/* harmony import */ var _blocks_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/Accordion */ "./src/blocks/Accordion/index.js");
/* harmony import */ var _blocks_AccordionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/AccordionContainer */ "./src/blocks/AccordionContainer/index.js");
/* harmony import */ var _blocks_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/Group */ "./src/blocks/Group/index.js");
/* harmony import */ var _blocks_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/Grid */ "./src/blocks/Grid/index.js");
/* harmony import */ var _blocks_GridCol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/GridCol */ "./src/blocks/GridCol/index.js");
/* harmony import */ var _blocks_HeroCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/HeroCarousel */ "./src/blocks/HeroCarousel/index.js");
/* harmony import */ var _blocks_HeroSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/HeroSlide */ "./src/blocks/HeroSlide/index.js");
/* harmony import */ var _blocks_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/Section */ "./src/blocks/Section/index.js");
/* harmony import */ var _blocks_LatestNews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/LatestNews */ "./src/blocks/LatestNews/index.js");
/* harmony import */ var _blocks_LatestEvents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/LatestEvents */ "./src/blocks/LatestEvents/index.js");
/* harmony import */ var _blocks_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/Card */ "./src/blocks/Card/index.js");
/* harmony import */ var _blocks_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/List */ "./src/blocks/List/index.js");
/* harmony import */ var _blocks_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/ListItem */ "./src/blocks/ListItem/index.js");
// import './style.css'
// import './editor.css'


// Import blocks















}();
/******/ })()
;
//# sourceMappingURL=index.js.map