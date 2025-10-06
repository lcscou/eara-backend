/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: function() { return /* binding */ arrow; },
/* harmony export */   autoPlacement: function() { return /* binding */ autoPlacement; },
/* harmony export */   computePosition: function() { return /* binding */ computePosition; },
/* harmony export */   detectOverflow: function() { return /* binding */ detectOverflow; },
/* harmony export */   flip: function() { return /* binding */ flip; },
/* harmony export */   hide: function() { return /* binding */ hide; },
/* harmony export */   inline: function() { return /* binding */ inline; },
/* harmony export */   limitShift: function() { return /* binding */ limitShift; },
/* harmony export */   offset: function() { return /* binding */ offset; },
/* harmony export */   rectToClientRect: function() { return /* reexport safe */ _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect; },
/* harmony export */   shift: function() { return /* binding */ shift; },
/* harmony export */   size: function() { return /* binding */ size; }
/* harmony export */ });
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement);
  const alignmentAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentAxis)(placement);
  const alignLength = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAxisLength)(alignmentAxis);
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
  const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
    const coords = {
      x,
      y
    };
    const axis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentAxis)(placement);
    const length = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAxisLength)(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) === alignment), ...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) !== alignment)] : allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) === alignment || (autoAlignment ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAlignmentPlacement)(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
      const initialSideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(initialPlacement);
      const isBasePlacement = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositePlacement)(initialPlacement)] : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getExpandedPlacements)(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentSides)(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...rects.map(rect => rect.left));
  const minY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...rects.map(rect => rect.top));
  const maxX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...rects.map(rect => rect.right));
  const maxY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getBoundingRect(nativeClientRects));
      const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === 'left';
          const maxRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...clientRects.map(rect => rect.right));
          const minLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
  const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement);
  const isVertical = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement));
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement);
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = originSides.has((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
      const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement);
      const isYAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.left, 0);
        const xMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.right, 0);
        const yMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.top, 0);
        const yMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};




/***/ }),

/***/ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: function() { return /* binding */ arrow; },
/* harmony export */   autoPlacement: function() { return /* binding */ autoPlacement; },
/* harmony export */   autoUpdate: function() { return /* binding */ autoUpdate; },
/* harmony export */   computePosition: function() { return /* binding */ computePosition; },
/* harmony export */   detectOverflow: function() { return /* binding */ detectOverflow; },
/* harmony export */   flip: function() { return /* binding */ flip; },
/* harmony export */   getOverflowAncestors: function() { return /* reexport safe */ _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors; },
/* harmony export */   hide: function() { return /* binding */ hide; },
/* harmony export */   inline: function() { return /* binding */ inline; },
/* harmony export */   limitShift: function() { return /* binding */ limitShift; },
/* harmony export */   offset: function() { return /* binding */ offset; },
/* harmony export */   platform: function() { return /* binding */ platform; },
/* harmony export */   shift: function() { return /* binding */ shift; },
/* harmony export */   size: function() { return /* binding */ size; }
/* harmony export */ });
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/core */ "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/utils/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");





function getCssDimensions(element) {
  const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.round)(width) !== offsetWidth || (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(domElement)) {
    return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) : rect.width) / width;
  let y = ($ ? (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(0);
function getVisualOffsets(element) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(domElement);
    const offsetWin = offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(offsetParent) ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getFrameElement)(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(currentIFrame);
      currentIFrame = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getFrameElement)(currentWin);
    }
  }
  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeScroll)(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(offsetParent);
  const topLayer = elements ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTopLayer)(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(1);
  const offsets = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(0);
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeScroll)(offsetParent);
    }
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(element);
  const scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeScroll)(element);
  const body = element.ownerDocument.body;
  const width = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(body).direction === 'rtl') {
    x += (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element);
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
  // visual width of the <html> but this is not considered in the size
  // of `html.clientWidth`.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(element) ? getScale(element) : (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(element));
  } else if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getParentNode)(element);
  if (parentNode === stopNode || !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(parentNode) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors)(element, [], false).filter(el => (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(el) && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeName)(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(element).position === 'fixed';
  let currentNode = elementIsFixed ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getParentNode)(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(currentNode) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isLastTraversableNode)(currentNode)) {
    const computedStyle = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(currentNode);
    const currentNodeIsContaining = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.max)(rect.top, accRect.top);
    accRect.right = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent);
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.createCoords)(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(element) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element);
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTopLayer)(element)) {
    return win;
  }
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(element)) {
    let svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getParentNode)(element);
    while (svgOffsetParent && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isLastTraversableNode)(svgOffsetParent)) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getParentNode)(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTableElement)(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isContainingBlock)(offsetParent)) {
    return win;
  }
  return offsetParent || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getContainingBlock)(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle)(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.floor)(top);
    const insetRight = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.floor)(root.clientWidth - (left + width));
    const insetBottom = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.floor)(root.clientHeight - (top + height));
    const insetLeft = (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.floor)(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.max)(0, (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.min)(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors)(referenceEl) : []), ...(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors)(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const detectOverflow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.detectOverflow;

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_1__.computePosition)(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};




/***/ }),

/***/ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: function() { return /* binding */ arrow; },
/* harmony export */   autoPlacement: function() { return /* binding */ autoPlacement; },
/* harmony export */   autoUpdate: function() { return /* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate; },
/* harmony export */   computePosition: function() { return /* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition; },
/* harmony export */   detectOverflow: function() { return /* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow; },
/* harmony export */   flip: function() { return /* binding */ flip; },
/* harmony export */   getOverflowAncestors: function() { return /* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors; },
/* harmony export */   hide: function() { return /* binding */ hide; },
/* harmony export */   inline: function() { return /* binding */ inline; },
/* harmony export */   limitShift: function() { return /* binding */ limitShift; },
/* harmony export */   offset: function() { return /* binding */ offset; },
/* harmony export */   platform: function() { return /* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform; },
/* harmony export */   shift: function() { return /* binding */ shift; },
/* harmony export */   size: function() { return /* binding */ size; },
/* harmony export */   useFloating: function() { return /* binding */ useFloating; }
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");






var isClient = typeof document !== 'undefined';

var noop = function noop() {};
var index = isClient ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : noop;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2__.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_2__.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  const setReference = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const floatingRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const dataRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const openRef = useLatestRef(open);
  const update = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        react_dom__WEBPACK_IMPORTED_MODULE_3__.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset)(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift)(options),
  options: [options, deps]
});

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift)(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip)(options),
  options: [options, deps]
});

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size)(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement)(options),
  options: [options, deps]
});

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide)(options),
  options: [options, deps]
});

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline)(options),
  options: [options, deps]
});

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});




/***/ }),

/***/ "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@floating-ui/react/dist/floating-ui.react.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Composite: function() { return /* binding */ Composite; },
/* harmony export */   CompositeItem: function() { return /* binding */ CompositeItem; },
/* harmony export */   FloatingArrow: function() { return /* binding */ FloatingArrow; },
/* harmony export */   FloatingDelayGroup: function() { return /* binding */ FloatingDelayGroup; },
/* harmony export */   FloatingFocusManager: function() { return /* binding */ FloatingFocusManager; },
/* harmony export */   FloatingList: function() { return /* binding */ FloatingList; },
/* harmony export */   FloatingNode: function() { return /* binding */ FloatingNode; },
/* harmony export */   FloatingOverlay: function() { return /* binding */ FloatingOverlay; },
/* harmony export */   FloatingPortal: function() { return /* binding */ FloatingPortal; },
/* harmony export */   FloatingTree: function() { return /* binding */ FloatingTree; },
/* harmony export */   arrow: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.arrow; },
/* harmony export */   autoPlacement: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.autoPlacement; },
/* harmony export */   autoUpdate: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.autoUpdate; },
/* harmony export */   computePosition: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.computePosition; },
/* harmony export */   detectOverflow: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.detectOverflow; },
/* harmony export */   flip: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.flip; },
/* harmony export */   getOverflowAncestors: function() { return /* reexport safe */ _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getOverflowAncestors; },
/* harmony export */   hide: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.hide; },
/* harmony export */   inline: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.inline; },
/* harmony export */   inner: function() { return /* binding */ inner; },
/* harmony export */   limitShift: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.limitShift; },
/* harmony export */   offset: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.offset; },
/* harmony export */   platform: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.platform; },
/* harmony export */   safePolygon: function() { return /* binding */ safePolygon; },
/* harmony export */   shift: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.shift; },
/* harmony export */   size: function() { return /* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.size; },
/* harmony export */   useClick: function() { return /* binding */ useClick; },
/* harmony export */   useClientPoint: function() { return /* binding */ useClientPoint; },
/* harmony export */   useDelayGroup: function() { return /* binding */ useDelayGroup; },
/* harmony export */   useDelayGroupContext: function() { return /* binding */ useDelayGroupContext; },
/* harmony export */   useDismiss: function() { return /* binding */ useDismiss; },
/* harmony export */   useFloating: function() { return /* binding */ useFloating; },
/* harmony export */   useFloatingNodeId: function() { return /* binding */ useFloatingNodeId; },
/* harmony export */   useFloatingParentNodeId: function() { return /* binding */ useFloatingParentNodeId; },
/* harmony export */   useFloatingPortalNode: function() { return /* binding */ useFloatingPortalNode; },
/* harmony export */   useFloatingRootContext: function() { return /* binding */ useFloatingRootContext; },
/* harmony export */   useFloatingTree: function() { return /* binding */ useFloatingTree; },
/* harmony export */   useFocus: function() { return /* binding */ useFocus; },
/* harmony export */   useHover: function() { return /* binding */ useHover; },
/* harmony export */   useId: function() { return /* binding */ useId; },
/* harmony export */   useInnerOffset: function() { return /* binding */ useInnerOffset; },
/* harmony export */   useInteractions: function() { return /* binding */ useInteractions; },
/* harmony export */   useListItem: function() { return /* binding */ useListItem; },
/* harmony export */   useListNavigation: function() { return /* binding */ useListNavigation; },
/* harmony export */   useMergeRefs: function() { return /* binding */ useMergeRefs; },
/* harmony export */   useRole: function() { return /* binding */ useRole; },
/* harmony export */   useTransitionStatus: function() { return /* binding */ useTransitionStatus; },
/* harmony export */   useTransitionStyles: function() { return /* binding */ useTransitionStyles; },
/* harmony export */   useTypeahead: function() { return /* binding */ useTypeahead; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/react/utils */ "./node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs");
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");










/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/react-utils#usemergerefs
 */
function useMergeRefs(refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const SafeReact = {
  .../*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))
};

const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect || (fn => fn());
function useEffectEvent(callback) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(() => {
    if (true) {
      throw new Error('Cannot call an event handler while rendering.');
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
function isDifferentRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index) {
  return index < 0 || index >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset : offset - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }

  // Remains on the same row/column.
  if (orientation === 'both') {
    const prevRow = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.floor)(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.floor)(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}

/** For each cell index, gets the item index that occupies that cell */
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every(cell => cellMap[cell] == null)) {
        targetCells.forEach(cell => {
          cellMap[cell] = index;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });

  // convert into a non-sparse array
  return [...cellMap];
}

/** Gets cell index of an item's corner or -1 when index is -1. */
function getCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
  if (index === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index);
  const sizeItem = sizes[index];
  switch (corner) {
    case 'tl':
      return firstCellIndex;
    case 'tr':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case 'bl':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case 'br':
      return cellMap.lastIndexOf(index);
  }
}

/** Gets all cell indices that correspond to the specified indices */
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index, cellIndex) => indices.includes(index) ? [cellIndex] : []);
}
function isDisabled(list, index, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index);
  }
  const element = list[index];
  return element == null || element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}

var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
const FloatingListContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  register: () => {},
  unregister: () => {},
  map: /*#__PURE__*/new Map(),
  elementsRef: {
    current: []
  }
});
/**
 * Provides context for a list of items within the floating element.
 * @see https://floating-ui.com/docs/FloatingList
 */
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new Map());
  const register = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    setMap(prevMap => new Map(prevMap).set(node, null));
  }, []);
  const unregister = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    setMap(prevMap => {
      const map = new Map(prevMap);
      map.delete(node);
      return map;
    });
  }, []);
  index(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index) => {
      newMap.set(node, index);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingListContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
/**
 * Used to register a list item and its index (DOM position) in the
 * `FloatingList`.
 * @see https://floating-ui.com/docs/FloatingList#uselistitem
 */
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingListContext);
  const [index$1, setIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const componentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== undefined;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index(() => {
    const index = componentRef.current ? map.get(componentRef.current) : null;
    if (index != null) {
      setIndex(index);
    }
  }, [map]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}

function renderJsx(render, computedProps) {
  if (typeof render === 'function') {
    return render(computedProps);
  }
  if (render) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render, computedProps);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", computedProps);
}
const CompositeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  activeIndex: 0,
  onNavigate: () => {}
});
const horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
const verticalKeys = [ARROW_UP, ARROW_DOWN];
const allKeys = [...horizontalKeys, ...verticalKeys];

/**
 * Creates a single tab stop whose items are navigated by arrow keys, which
 * provides list navigation outside of floating element contexts.
 *
 * This is useful to enable navigation of a list of items that aren’t part of a
 * floating element. A menubar is an example of a composite, with each reference
 * element being an item.
 * @see https://floating-ui.com/docs/Composite
 */
const Composite = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Composite(props, forwardedRef) {
  const {
    render,
    orientation = 'both',
    loop = true,
    rtl = false,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
  const renderElementProps = render && typeof render !== 'function' ? render.props : {};
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    const horizontalEndKey = rtl ? ARROW_LEFT : ARROW_RIGHT;
    const horizontalStartKey = rtl ? ARROW_RIGHT : ARROW_LEFT;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      // To calculate movements on the grid, we use hypothetical cell indices
      // as if every item was 1x1, then convert back to real indices.
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex(index => index != null && !isDisabled(elementsRef.current, index, disabledIndices));
      // last enabled index
      const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex) => index != null && !isDisabled(elementsRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
      const maybeNextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map(itemIndex => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        rtl,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...(disabledIndices || elementsRef.current.map((_, index) => isDisabled(elementsRef.current, index) ? index : undefined)), undefined], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(activeIndex > maxIndex ? minIndex : activeIndex, sizes, cellMap, cols,
        // use a corner matching the edge closest to the direction we're
        // moving in so we don't end up in the same item. Prefer
        // top/left over bottom/right.
        event.key === ARROW_DOWN ? 'bl' : event.key === horizontalEndKey ? 'tr' : 'tl')
      })];
      if (maybeNextIndex != null) {
        nextIndex = maybeNextIndex;
      }
    }
    const toEndKeys = {
      horizontal: [horizontalEndKey],
      vertical: [ARROW_DOWN],
      both: [horizontalEndKey, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [horizontalStartKey],
      vertical: [ARROW_UP],
      both: [horizontalStartKey, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      var _elementsRef$current$;
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      (_elementsRef$current$ = elementsRef.current[nextIndex]) == null || _elementsRef$current$.focus();
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    'aria-orientation': orientation === 'both' ? undefined : orientation,
    onKeyDown(e) {
      domProps.onKeyDown == null || domProps.onKeyDown(e);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e);
      handleKeyDown(e);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CompositeContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingList, {
    elementsRef: elementsRef
  }, renderJsx(render, computedProps)));
});
/**
 * @see https://floating-ui.com/docs/Composite
 */
const CompositeItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CompositeItem(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== 'function' ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CompositeContext);
  const {
    ref,
    index
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    'data-active': isActive ? '' : undefined,
    onFocus(e) {
      domProps.onFocus == null || domProps.onFocus(e);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e);
      onNavigate(index);
    }
  };
  return renderJsx(render, computedProps);
});

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

let serverHandoffComplete = false;
let count = 0;
const genId = () => // Ensure the id is unique with multiple independent versions of Floating UI
// on <React 18
"floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => serverHandoffComplete ? genId() : undefined);
  index(() => {
    if (id == null) {
      setId(genId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
const useReactId = SafeReact.useId;

/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/react-utils#useid
 */
const useId = useReactId || useFloatingId;

let devMessageSet;
if (true) {
  devMessageSet = /*#__PURE__*/new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}

/**
 * Renders a pointing arrow triangle.
 * @see https://floating-ui.com/docs/FloatingArrow
 */
const FloatingArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FloatingArrow(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow,
        shift
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn('The `ref` prop is required for `FloatingArrow`.');
    }
  }
  const clipPathId = useId();
  const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  // https://github.com/floating-ui/floating-ui/issues/2932
  index(() => {
    if (!floating) return;
    const isRTL = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getComputedStyle)(floating).direction === 'rtl';
    if (isRTL) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const [side, alignment] = placement.split('-');
  const isVerticalSide = side === 'top' || side === 'bottom';
  let computedStaticOffset = staticOffset;
  if (isVerticalSide && shift != null && shift.x || !isVerticalSide && shift != null && shift.y) {
    computedStaticOffset = null;
  }

  // Strokes must be double the border width, this ensures the stroke's width
  // works as you'd expect.
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const isCustomShape = !!d;
  const yOffsetProp = computedStaticOffset && alignment === 'end' ? 'bottom' : 'top';
  let xOffsetProp = computedStaticOffset && alignment === 'end' ? 'right' : 'left';
  if (computedStaticOffset && isRTL) {
    xOffsetProp = alignment === 'end' ? 'left' : 'right';
  }
  const arrowX = (arrow == null ? void 0 : arrow.x) != null ? computedStaticOffset || arrow.x : '';
  const arrowY = (arrow == null ? void 0 : arrow.y) != null ? computedStaticOffset || arrow.y : '';
  const dValue = d || 'M0,0' + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + ' Z';
  const rotation = {
    top: isCustomShape ? 'rotate(180deg)' : '',
    left: isCustomShape ? 'rotate(90deg)' : 'rotate(-90deg)',
    bottom: isCustomShape ? '' : 'rotate(180deg)',
    right: isCustomShape ? 'rotate(-90deg)' : 'rotate(90deg)'
  }[side];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref: ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? '100%' : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: [rotation, transform].filter(t => !!t).join(' '),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke: stroke
    // Account for the stroke on the fill path rendered below.
    ,
    strokeWidth: computedStrokeWidth + (d ? 0 : 1),
    d: dValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: computedStrokeWidth && !d ? rest.fill : 'none',
    d: dValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: clipPathId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach(handler => handler(data));
    },
    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter(l => l !== listener)) || []);
    }
  };
}

const FloatingNodeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const FloatingTreeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};

/**
 * Returns the nearest floating tree context, if available.
 */
const useFloatingTree = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingTreeContext);

/**
 * Registers a node into the `FloatingTree`, returning its id.
 * @see https://floating-ui.com/docs/FloatingTree
 */
function useFloatingNodeId(customParentId) {
  const id = useId();
  const tree = useFloatingTree();
  const reactParentId = useFloatingParentNodeId();
  const parentId = customParentId || reactParentId;
  index(() => {
    const node = {
      id,
      parentId
    };
    tree == null || tree.addNode(node);
    return () => {
      tree == null || tree.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
}
/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 */
function FloatingNode(props) {
  const {
    children,
    id
  } = props;
  const parentId = useFloatingParentNodeId();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingNodeContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      id,
      parentId
    }), [id, parentId])
  }, children);
}
/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM.
 * This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
 * - The `bubbles` option in the `useDismiss()` Hook
 * - Nested virtual list navigation
 * - Nested floating elements that each open on hover
 * - Custom communication between parent and child floating elements
 * @see https://floating-ui.com/docs/FloatingTree
 */
function FloatingTree(props) {
  const {
    children
  } = props;
  const nodesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
  const addNode = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    nodesRef.current = [...nodesRef.current, node];
  }, []);
  const removeNode = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    nodesRef.current = nodesRef.current.filter(n => n !== node);
  }, []);
  const events = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createPubSub())[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingTreeContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      nodesRef,
      addNode,
      removeNode,
      events
    }), [addNode, removeNode, events])
  }, children);
}

function createAttribute(name) {
  return "data-floating-ui-" + name;
}

function useLatestRef(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

const safePolygonIdentifier = /*#__PURE__*/createAttribute('safe-polygon');
function getDelay(value, prop, pointerType) {
  if (pointerType && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMouseLikePointerType)(pointerType)) {
    return 0;
  }
  if (typeof value === 'number') {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef(handleClose);
  const delayRef = useLatestRef(delay);
  const openRef = useLatestRef(open);
  const pointerTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
  const handlerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const restTimeoutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
  const blockMouseMoveRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  const performedPointerEventsMutationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const unbindMouseMoveRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(() => {});
  const restTimeoutPendingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const isHoverOpen = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes('mouse')) && type !== 'mousedown';
  }, [dataRef]);

  // When closing before opening, clear the delay timeouts to cancel it
  // from showing.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onOpenChange(_ref) {
      let {
        open
      } = _ref;
      if (!open) {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
        restTimeoutPendingRef.current = false;
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
    };
  }, [enabled, events]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    if (!handleCloseRef.current) return;
    if (!open) return;
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, 'hover');
      }
    }
    const html = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating).documentElement;
    html.addEventListener('mouseleave', onLeave);
    return () => {
      html.removeEventListener('mouseleave', onLeave);
    };
  }, [elements.floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = 'hover';
    }
    const closeDelay = getDelay(delayRef.current, 'close', pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = useEffectEvent(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = undefined;
  });
  const clearPointerEvents = useEffectEvent(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating).body;
      body.style.pointerEvents = '';
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  });
  const isClickLikeOpenEvent = useEffectEvent(() => {
    return dataRef.current.openEvent ? ['click', 'mousedown'].includes(dataRef.current.openEvent.type) : false;
  });

  // Registering the mouse events on the reference directly to bypass React's
  // delegation system. If the cursor was on a disabled element and then entered
  // the reference (no gap), `mouseenter` doesn't fire in the delegation system.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMouseLikePointerType)(pointerTypeRef.current) || restMs > 0 && !getDelay(delayRef.current, 'open')) {
        return;
      }
      const openDelay = getDelay(delayRef.current, 'open', pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = window.setTimeout(() => {
          if (!openRef.current) {
            onOpenChange(true, event, 'hover');
          }
        }, openDelay);
      } else if (!open) {
        onOpenChange(true, event, 'hover');
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      unbindMouseMoveRef.current();
      const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating);
      clearTimeout(restTimeoutRef.current);
      restTimeoutPendingRef.current = false;
      if (handleCloseRef.current && dataRef.current.floatingContext) {
        // Prevent clearing `onScrollMouseLeave` timeout.
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...dataRef.current.floatingContext,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            if (!isClickLikeOpenEvent()) {
              closeWithDelay(event, true, 'safe-polygon');
            }
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener('mousemove', handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener('mousemove', handler);
        };
        return;
      }

      // Allow interactivity without `safePolygon` on touch devices. With a
      // pointer, a short close delay is an alternative, so it should work
      // consistently.
      const shouldClose = pointerTypeRef.current === 'touch' ? !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(elements.floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }

    // Ensure the floating element closes after scrolling even if the pointer
    // did not move.
    // https://github.com/floating-ui/floating-ui/discussions/1692
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      if (!dataRef.current.floatingContext) return;
      handleCloseRef.current == null || handleCloseRef.current({
        ...dataRef.current.floatingContext,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          if (!isClickLikeOpenEvent()) {
            closeWithDelay(event);
          }
        }
      })(event);
    }
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(elements.domReference)) {
      var _elements$floating;
      const ref = elements.domReference;
      open && ref.addEventListener('mouseleave', onScrollMouseLeave);
      (_elements$floating = elements.floating) == null || _elements$floating.addEventListener('mouseleave', onScrollMouseLeave);
      move && ref.addEventListener('mousemove', onMouseEnter, {
        once: true
      });
      ref.addEventListener('mouseenter', onMouseEnter);
      ref.addEventListener('mouseleave', onMouseLeave);
      return () => {
        var _elements$floating2;
        open && ref.removeEventListener('mouseleave', onScrollMouseLeave);
        (_elements$floating2 = elements.floating) == null || _elements$floating2.removeEventListener('mouseleave', onScrollMouseLeave);
        move && ref.removeEventListener('mousemove', onMouseEnter);
        ref.removeEventListener('mouseenter', onMouseEnter);
        ref.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [elements, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, openRef, tree, delayRef, handleCloseRef, dataRef, isClickLikeOpenEvent]);

  // Block pointer-events of every element other than the reference and floating
  // while the floating element is open and has a `handleClose` handler. Also
  // handles nested floating elements.
  // https://github.com/floating-ui/floating-ui/issues/1722
  index(() => {
    var _handleCloseRef$curre;
    if (!enabled) return;
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      performedPointerEventsMutationRef.current = true;
      const floatingEl = elements.floating;
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(elements.domReference) && floatingEl) {
        var _tree$nodesRef$curren;
        const body = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating).body;
        body.setAttribute(safePolygonIdentifier, '');
        const ref = elements.domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = '';
        }
        body.style.pointerEvents = 'none';
        ref.style.pointerEvents = 'auto';
        floatingEl.style.pointerEvents = 'auto';
        return () => {
          body.style.pointerEvents = '';
          ref.style.pointerEvents = '';
          floatingEl.style.pointerEvents = '';
        };
      }
    }
  }, [enabled, open, parentId, elements, tree, handleCloseRef, isHoverOpen]);
  index(() => {
    if (!open) {
      pointerTypeRef.current = undefined;
      restTimeoutPendingRef.current = false;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, elements.domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          if (!blockMouseMoveRef.current && !openRef.current) {
            onOpenChange(true, nativeEvent, 'hover');
          }
        }
        if (mouseOnly && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMouseLikePointerType)(pointerTypeRef.current)) {
          return;
        }
        if (open || restMs === 0) {
          return;
        }

        // Ignore insignificant movements to account for tremors.
        if (restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2) {
          return;
        }
        clearTimeout(restTimeoutRef.current);
        if (pointerTypeRef.current === 'touch') {
          handleMouseMove();
        } else {
          restTimeoutPendingRef.current = true;
          restTimeoutRef.current = window.setTimeout(handleMouseMove, restMs);
        }
      }
    };
  }, [mouseOnly, onOpenChange, open, openRef, restMs]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(timeoutRef.current);
    },
    onMouseLeave(event) {
      if (!isClickLikeOpenEvent()) {
        closeWithDelay(event.nativeEvent, false);
      }
    }
  }), [closeWithDelay, isClickLikeOpenEvent]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

const NOOP = () => {};
const FloatingDelayGroupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});

/**
 * @deprecated
 * Use the return value of `useDelayGroup()` instead.
 */
const useDelayGroupContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingDelayGroupContext);
/**
 * Provides context for a group of floating elements that should share a
 * `delay`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */
function FloatingDelayGroup(props) {
  const {
    children,
    delay,
    timeoutMs = 0
  } = props;
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const setCurrentId = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(currentId => {
    setState({
      currentId
    });
  }, []);
  index(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else if (!state.isInstantPhase) {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      if (state.isInstantPhase) {
        setState({
          isInstantPhase: false
        });
      }
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId, state.isInstantPhase]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingDelayGroupContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setCurrentId])
  }, children);
}
/**
 * Enables grouping when called inside a component that's a child of a
 * `FloatingDelayGroup`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */
function useDelayGroup(context, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open,
    onOpenChange,
    floatingId
  } = context;
  const {
    id: optionId,
    enabled = true
  } = options;
  const id = optionId != null ? optionId : floatingId;
  const groupContext = useDelayGroupContext();
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = groupContext;
  index(() => {
    if (!enabled) return;
    if (!currentId) return;
    setState({
      delay: {
        open: 1,
        close: getDelay(initialDelay, 'close')
      }
    });
    if (currentId !== id) {
      onOpenChange(false);
    }
  }, [enabled, id, onOpenChange, setState, currentId, initialDelay]);
  index(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    if (!enabled) return;
    if (!currentId) return;
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      }
      unset();
    }
  }, [enabled, open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  index(() => {
    if (!enabled) return;
    if (setCurrentId === NOOP || !open) return;
    setCurrentId(id);
  }, [enabled, open, setCurrentId, id]);
  return groupContext;
}

let rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}

function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find(node => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find(node => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

function getChildren(nodes, id) {
  let allChildren = nodes.filter(node => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter(node => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some(n => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getDeepestNode(nodes, id) {
  let deepestNodeId;
  let maxDepth = -1;
  function findDeepest(nodeId, depth) {
    if (depth > maxDepth) {
      deepestNodeId = nodeId;
      maxDepth = depth;
    }
    const children = getChildren(nodes, nodeId);
    children.forEach(child => {
      findDeepest(child.id, depth + 1);
    });
  }
  findDeepest(id, 0);
  return nodes.find(node => node.id === deepestNodeId);
}

// Modified to add conditional `aria-hidden` support:
// https://github.com/theKashey/aria-hidden/blob/9220c8f4a4fd35f63bee5510a9f41a37264382d4/src/index.ts
let counterMap = /*#__PURE__*/new WeakMap();
let uncontrolledElementsSet = /*#__PURE__*/new WeakSet();
let markerMap = {};
let lockCount$1 = 0;
const supportsInert = () => typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
const unwrapHost = node => node && (node.host || unwrapHost(node.parentNode));
const correctElements = (parent, targets) => targets.map(target => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter(x => x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
  const markerName = 'data-floating-ui-inert';
  const controlAttribute = inert ? 'inert' : ariaHidden ? 'aria-hidden' : null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const elementsToKeep = new Set();
  const elementsToStop = new Set(avoidElements);
  const hiddenElements = [];
  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  avoidElements.forEach(keep);
  deep(body);
  elementsToKeep.clear();
  function keep(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    el.parentNode && keep(el.parentNode);
  }
  function deep(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    [].forEach.call(parent.children, node => {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getNodeName)(node) === 'script') return;
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        const attr = controlAttribute ? node.getAttribute(controlAttribute) : null;
        const alreadyHidden = attr !== null && attr !== 'false';
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenElements.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledElementsSet.add(node);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, '');
        }
        if (!alreadyHidden && controlAttribute) {
          node.setAttribute(controlAttribute, 'true');
        }
      }
    });
  }
  lockCount$1++;
  return () => {
    hiddenElements.forEach(element => {
      const counterValue = (counterMap.get(element) || 0) - 1;
      const markerValue = (markerCounter.get(element) || 0) - 1;
      counterMap.set(element, counterValue);
      markerCounter.set(element, markerValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element) && controlAttribute) {
          element.removeAttribute(controlAttribute);
        }
        uncontrolledElementsSet.delete(element);
      }
      if (!markerValue) {
        element.removeAttribute(markerName);
      }
    });
    lockCount$1--;
    if (!lockCount$1) {
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledElementsSet = new WeakSet();
      markerMap = {};
    }
  };
}
function markOthers(avoidElements, ariaHidden, inert) {
  if (ariaHidden === void 0) {
    ariaHidden = false;
  }
  if (inert === void 0) {
    inert = false;
  }
  const body = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll('[aria-live]'))), body, ariaHidden, inert);
}

const getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck:
  // JSDOM does not support the `tabbable` library. To solve this we can
  // check if `ResizeObserver` is a real function (not polyfilled), which
  // determines if the current environment is JSDOM-like.
  typeof ResizeObserver === 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none'
});
function getTabbableIn(container, direction) {
  const allTabbable = (0,tabbable__WEBPACK_IMPORTED_MODULE_4__.tabbable)(container, getTabbableOptions());
  if (direction === 'prev') {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, 'next');
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, 'prev');
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = (0,tabbable__WEBPACK_IMPORTED_MODULE_4__.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach(element => {
    element.dataset.tabindex = element.getAttribute('tabindex') || '';
    element.setAttribute('tabindex', '-1');
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll('[data-tabindex]');
  elements.forEach(element => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute('tabindex', tabindex);
    } else {
      element.removeAttribute('tabindex');
    }
  });
}

// See Diego Haz's Sandbox for making this logic work well on Safari/iOS:
// https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/FocusTrap.tsx

const HIDDEN_STYLES = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  whiteSpace: 'nowrap',
  width: '1px',
  top: 0,
  left: 0
};
let timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === 'Tab') {
    event.target;
    clearTimeout(timeoutId);
  }
}
const FocusGuard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FocusGuard(props, ref) {
  const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  index(() => {
    if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isSafari)()) {
      // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
      // on VoiceOver does trigger the onFocus event, so we can use the focus
      // trap element. On Safari, only buttons trigger the onFocus event.
      // NB: "group" role in the Sandbox no longer appears to work, must be a
      // button role.
      setRole('button');
    }
    document.addEventListener('keydown', setActiveElementOnTab);
    return () => {
      document.removeEventListener('keydown', setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    'aria-hidden': role ? undefined : true,
    [createAttribute('focus-guard')]: '',
    style: HIDDEN_STYLES
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({}, props, restProps));
});

const PortalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const attr = /*#__PURE__*/createAttribute('portal');
/**
 * @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
 */
function useFloatingPortalNode(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    id,
    root
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const [portalNode, setPortalNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const portalNodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  index(() => {
    return () => {
      portalNode == null || portalNode.remove();
      // Allow the subsequent layout effects to create a new node on updates.
      // The portal node will still be cleaned up on unmount.
      // https://github.com/floating-ui/floating-ui/issues/2454
      queueMicrotask(() => {
        portalNodeRef.current = null;
      });
    };
  }, [portalNode]);
  index(() => {
    // Wait for the uniqueId to be generated before creating the portal node in
    // React <18 (using `useFloatingId` instead of the native `useId`).
    // https://github.com/floating-ui/floating-ui/issues/2778
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    const existingIdRoot = id ? document.getElementById(id) : null;
    if (!existingIdRoot) return;
    const subRoot = document.createElement('div');
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, '');
    existingIdRoot.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, uniqueId]);
  index(() => {
    // Wait for the root to exist before creating the portal node. The root must
    // be stored in state, not a ref, for this to work reactively.
    if (root === null) return;
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
    if (container && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(container)) container = container.current;
    container = container || document.body;
    let idWrapper = null;
    if (id) {
      idWrapper = document.createElement('div');
      idWrapper.id = id;
      container.appendChild(idWrapper);
    }
    const subRoot = document.createElement('div');
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, '');
    container = idWrapper || container;
    container.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, root, uniqueId, portalContext]);
  return portalNode;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 */
function FloatingPortal(props) {
  const {
    children,
    id,
    root,
    preserveTabOrder = true
  } = props;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const beforeOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const afterOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const beforeInsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const afterInsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
  const open = focusManagerState == null ? void 0 : focusManagerState.open;
  const shouldRenderGuards =
  // The FocusManager and therefore floating element are currently open/
  // rendered.
  !!focusManagerState &&
  // Guards are only for non-modal focus management.
  !focusManagerState.modal &&
  // Don't render if unmount is transitioning.
  focusManagerState.open && preserveTabOrder && !!(root || portalNode);

  // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!portalNode || !preserveTabOrder || modal) {
      return;
    }

    // Make sure elements inside the portal element are tabbable only when the
    // portal has already been focused, either by tabbing into a focus trap
    // element outside or using the mouse.
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === 'focusin';
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    // Listen to the event on the capture phase so they run before the focus
    // trap elements onFocus prop is called.
    portalNode.addEventListener('focusin', onFocus, true);
    portalNode.addEventListener('focusout', onFocus, true);
    return () => {
      portalNode.removeEventListener('focusin', onFocus, true);
      portalNode.removeEventListener('focusout', onFocus, true);
    };
  }, [portalNode, preserveTabOrder, modal]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!portalNode) return;
    if (open) return;
    enableFocusInside(portalNode);
  }, [open, portalNode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null || prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null || nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent, 'focus-out'));
      }
    }
  }));
}
const usePortalContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(PortalContext);

const FOCUSABLE_ATTRIBUTE = 'data-floating-ui-focusable';
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  // Try to find the element that has `{...getFloatingProps()}` spread on it.
  // This indicates the floating element is acting as a positioning wrapper, and
  // so focus should be managed on the child element with the event handlers and
  // aria props.
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector("[" + FOCUSABLE_ATTRIBUTE + "]") || floatingElement;
}

const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
  previouslyFocusedElements = previouslyFocusedElements.filter(el => el.isConnected);
  let tabbableEl = element;
  if (!tabbableEl || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getNodeName)(tabbableEl) === 'body') return;
  if (!(0,tabbable__WEBPACK_IMPORTED_MODULE_4__.isTabbable)(tabbableEl, getTabbableOptions())) {
    const tabbableChild = (0,tabbable__WEBPACK_IMPORTED_MODULE_4__.tabbable)(tabbableEl, getTabbableOptions())[0];
    if (tabbableChild) {
      tabbableEl = tabbableChild;
    }
  }
  previouslyFocusedElements.push(tabbableEl);
  if (previouslyFocusedElements.length > LIST_LIMIT) {
    previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
  }
}
function getPreviouslyFocusedElement() {
  return previouslyFocusedElements.slice().reverse().find(el => el.isConnected);
}
const VisuallyHiddenDismiss = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function VisuallyHiddenDismiss(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({}, props, {
    type: "button",
    ref: ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    order = ['content'],
    guards: _guards = true,
    initialFocus = 0,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    floatingId,
    elements: {
      domReference,
      floating
    }
  } = context;
  const ignoreInitialFocus = typeof initialFocus === 'number' && initialFocus < 0;
  // If the reference is a combobox and is typeable (e.g. input/textarea),
  // there are different focus semantics. The guards should not be rendered, but
  // aria-hidden should be applied to all nodes still. Further, the visually
  // hidden dismiss button should only appear at the end of the list, not the
  // start.
  const isUntrappedTypeableCombobox = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeableCombobox)(domReference) && ignoreInitialFocus;

  // Force the guards to be rendered if the `inert` attribute is not supported.
  const guards = supportsInert() ? _guards : true;
  const orderRef = useLatestRef(order);
  const initialFocusRef = useLatestRef(initialFocus);
  const returnFocusRef = useLatestRef(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const startDismissButtonRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const endDismissButtonRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const preventReturnFocusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const isPointerDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const tabbableIndexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useEffectEvent(function (container) {
    if (container === void 0) {
      container = floatingFocusElement;
    }
    return container ? (0,tabbable__WEBPACK_IMPORTED_MODULE_4__.tabbable)(container, getTabbableOptions()) : [];
  });
  const getTabbableElements = useEffectEvent(container => {
    const content = getTabbableContent(container);
    return orderRef.current.map(type => {
      if (domReference && type === 'reference') {
        return domReference;
      }
      if (floatingFocusElement && type === 'floating') {
        return floatingFocusElement;
      }
      return content;
    }).filter(Boolean).flat();
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (disabled) return;
    if (!modal) return;
    function onKeyDown(event) {
      if (event.key === 'Tab') {
        // The focus guards have nothing to focus, so we need to stop the event.
        if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(floatingFocusElement, (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
        }
        const els = getTabbableElements();
        const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event);
        if (orderRef.current[0] === 'reference' && target === domReference) {
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === 'floating' && target === floatingFocusElement && event.shiftKey) {
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floatingFocusElement);
    doc.addEventListener('keydown', onKeyDown);
    return () => {
      doc.removeEventListener('keydown', onKeyDown);
    };
  }, [disabled, domReference, floatingFocusElement, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent, getTabbableElements]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (disabled) return;
    if (!floating) return;
    function handleFocusIn(event) {
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event);
      const tabbableContent = getTabbableContent();
      const tabbableIndex = tabbableContent.indexOf(target);
      if (tabbableIndex !== -1) {
        tabbableIndexRef.current = tabbableIndex;
      }
    }
    floating.addEventListener('focusin', handleFocusIn);
    return () => {
      floating.removeEventListener('focusin', handleFocusIn);
    };
  }, [disabled, floating, getTabbableContent]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (disabled) return;
    if (!closeOnFocusOut) return;

    // In Safari, buttons lose focus when pressing them.
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(domReference, relatedTarget) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(floating, relatedTarget) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(relatedTarget, floating) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute('focus-guard')) || tree && (getChildren(tree.nodesRef.current, nodeId).find(node => {
          var _node$context, _node$context2;
          return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find(node => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));

        // Restore focus to the previous tabbable element index to prevent
        // focus from being lost outside the floating tree.
        if (restoreFocus && movedToUnrelatedNode && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floatingFocusElement)) === (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floatingFocusElement).body) {
          // Let `FloatingPortal` effect knows that focus is still inside the
          // floating tree.
          if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(floatingFocusElement)) {
            floatingFocusElement.focus();
          }
          const prevTabbableIndex = tabbableIndexRef.current;
          const tabbableContent = getTabbableContent();
          const nodeToFocus = tabbableContent[prevTabbableIndex] || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }

        // Focus did not move inside the floating tree, and there are no tabbable
        // portal guards to handle closing.
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current &&
        // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== getPreviouslyFocusedElement()) {
          preventReturnFocusRef.current = true;
          onOpenChange(false, event, 'focus-out');
        }
      });
    }
    if (floating && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(domReference)) {
      domReference.addEventListener('focusout', handleFocusOutside);
      domReference.addEventListener('pointerdown', handlePointerDown);
      floating.addEventListener('focusout', handleFocusOutside);
      return () => {
        domReference.removeEventListener('focusout', handleFocusOutside);
        domReference.removeEventListener('pointerdown', handlePointerDown);
        floating.removeEventListener('focusout', handleFocusOutside);
      };
    }
  }, [disabled, domReference, floating, floatingFocusElement, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var _portalContext$portal;
    if (disabled) return;

    // Don't hide portals nested within the parent portal.
    const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute('portal') + "]")) || []);
    if (floating) {
      const insideElements = [floating, ...portalNodes, startDismissButtonRef.current, endDismissButtonRef.current, orderRef.current.includes('reference') || isUntrappedTypeableCombobox ? domReference : null].filter(x => x != null);
      const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
      return () => {
        cleanup();
      };
    }
  }, [disabled, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, guards]);
  index(() => {
    if (disabled || !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(floatingFocusElement)) return;
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floatingFocusElement);
    const previouslyFocusedElement = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)(doc);

    // Wait for any layout effect state setters to execute to set `tabIndex`.
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floatingFocusElement);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === 'number' ? focusableElements[initialFocusValue] : initialFocusValue.current) || floatingFocusElement;
      const focusAlreadyInsideFloatingEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(floatingFocusElement, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floatingFocusElement
        });
      }
    });
  }, [disabled, open, floatingFocusElement, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  index(() => {
    if (disabled || !floatingFocusElement) return;
    let preventReturnFocusScroll = false;
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floatingFocusElement);
    const previouslyFocusedElement = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)(doc);
    const contextData = dataRef.current;
    let openEvent = contextData.openEvent;
    addPreviouslyFocusedElement(previouslyFocusedElement);

    // Dismissing via outside press should always ignore `returnFocus` to
    // prevent unwanted scrolling.
    function onOpenChange(_ref) {
      let {
        open,
        reason,
        event,
        nested
      } = _ref;
      if (open) {
        openEvent = event;
      }
      if (reason === 'escape-key' && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      if (reason === 'hover' && event.type === 'mouseleave') {
        preventReturnFocusRef.current = true;
      }
      if (reason !== 'outside-press') return;
      if (nested) {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = true;
      } else {
        preventReturnFocusRef.current = !((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualClick)(event) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualPointerEvent)(event));
      }
    }
    events.on('openchange', onOpenChange);
    const fallbackEl = doc.createElement('span');
    fallbackEl.setAttribute('tabindex', '-1');
    fallbackEl.setAttribute('aria-hidden', 'true');
    Object.assign(fallbackEl.style, HIDDEN_STYLES);
    if (isInsidePortal && domReference) {
      domReference.insertAdjacentElement('afterend', fallbackEl);
    }
    function getReturnElement() {
      if (typeof returnFocusRef.current === 'boolean') {
        return getPreviouslyFocusedElement() || fallbackEl;
      }
      return returnFocusRef.current.current || fallbackEl;
    }
    return () => {
      events.off('openchange', onOpenChange);
      const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)(doc);
      const isFocusInsideFloatingTree = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
        var _node$context5;
        return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      });
      const shouldFocusReference = isFocusInsideFloatingTree || openEvent && ['click', 'mousedown'].includes(openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      const returnElement = getReturnElement();
      queueMicrotask(() => {
        if (
        // eslint-disable-next-line react-hooks/exhaustive-deps
        returnFocusRef.current && !preventReturnFocusRef.current && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(returnElement) && (
        // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          returnElement.focus({
            preventScroll: preventReturnFocusScroll
          });
        }
        fallbackEl.remove();
      });
    };
  }, [disabled, floating, floatingFocusElement, returnFocusRef, dataRef, refs, events, tree, nodeId, isInsidePortal, domReference]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // The `returnFocus` cleanup behavior is inside a microtask; ensure we
    // wait for it to complete before resetting the flag.
    queueMicrotask(() => {
      preventReturnFocusRef.current = false;
    });
  }, [disabled]);

  // Synchronize the `context` & `modal` value to the FloatingPortal context.
  // It will decide whether or not it needs to render its own guards.
  index(() => {
    if (disabled) return;
    if (!portalContext) return;
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange,
      refs
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, onOpenChange, refs, closeOnFocusOut]);
  index(() => {
    if (disabled) return;
    if (!floatingFocusElement) return;
    if (typeof MutationObserver !== 'function') return;
    if (ignoreInitialFocus) return;
    const handleMutation = () => {
      const tabIndex = floatingFocusElement.getAttribute('tabindex');
      const tabbableContent = getTabbableContent();
      const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(floating));
      const tabbableIndex = tabbableContent.indexOf(activeEl);
      if (tabbableIndex !== -1) {
        tabbableIndexRef.current = tabbableIndex;
      }
      if (orderRef.current.includes('floating') || activeEl !== refs.domReference.current && tabbableContent.length === 0) {
        if (tabIndex !== '0') {
          floatingFocusElement.setAttribute('tabindex', '0');
        }
      } else if (tabIndex !== '-1') {
        floatingFocusElement.setAttribute('tabindex', '-1');
      }
    };
    handleMutation();
    const observer = new MutationObserver(handleMutation);
    observer.observe(floatingFocusElement, {
      childList: true,
      subtree: true,
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [disabled, floating, floatingFocusElement, refs, orderRef, getTabbableContent, ignoreInitialFocus]);
  function renderDismissButton(location) {
    if (disabled || !visuallyHiddenDismiss || !modal) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VisuallyHiddenDismiss, {
      ref: location === 'start' ? startDismissButtonRef : endDismissButtonRef,
      onClick: event => onOpenChange(false, event.nativeEvent)
    }, typeof visuallyHiddenDismiss === 'string' ? visuallyHiddenDismiss : 'Dismiss');
  }
  const shouldRenderGuards = !disabled && guards && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, shouldRenderGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: event => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === 'reference' ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null || nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
        }
      }
    }
  }), !isUntrappedTypeableCombobox && renderDismissButton('start'), children, renderDismissButton('end'), shouldRenderGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: event => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null || prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
        }
      }
    }
  }));
}

let lockCount = 0;
function enableScrollLock() {
  const isIOS = /iP(hone|ad|od)|iOS/.test((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getPlatform)());
  const bodyStyle = document.body.style;
  // RTL <body> scrollbar
  const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
  const paddingProp = scrollbarX ? 'paddingLeft' : 'paddingRight';
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
  const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
  bodyStyle.overflow = 'hidden';
  if (scrollbarWidth) {
    bodyStyle[paddingProp] = scrollbarWidth + "px";
  }

  // Only iOS doesn't respect `overflow: hidden` on document.body, and this
  // technique has fewer side effects.
  if (isIOS) {
    var _window$visualViewpor, _window$visualViewpor2;
    // iOS 12 does not support `visualViewport`.
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    Object.assign(bodyStyle, {
      position: 'fixed',
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: '0'
    });
  }
  return () => {
    Object.assign(bodyStyle, {
      overflow: '',
      [paddingProp]: ''
    });
    if (isIOS) {
      Object.assign(bodyStyle, {
        position: '',
        top: '',
        left: '',
        right: ''
      });
      window.scrollTo(scrollX, scrollY);
    }
  };
}
let cleanup = () => {};

/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */
const FloatingOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FloatingOverlay(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  index(() => {
    if (!lockScroll) return;
    lockCount++;
    if (lockCount === 1) {
      cleanup = enableScrollLock();
    }
    return () => {
      lockCount--;
      if (lockCount === 0) {
        cleanup();
      }
    };
  }, [lockScroll]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: ref
  }, rest, {
    style: {
      position: 'fixed',
      overflow: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});

function isButtonTarget(event) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(event.target) && event.target.tagName === 'BUTTON';
}
function isSpaceIgnored(element) {
  return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeableElement)(element);
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = 'click',
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true,
    stickIfOpen = true
  } = props;
  const pointerTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const didKeyDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onPointerDown(event) {
      pointerTypeRef.current = event.pointerType;
    },
    onMouseDown(event) {
      const pointerType = pointerTypeRef.current;

      // Ignore all buttons except for the "main" button.
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
      if (event.button !== 0) return;
      if (eventOption === 'click') return;
      if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMouseLikePointerType)(pointerType, true) && ignoreMouse) return;
      if (open && toggle && (dataRef.current.openEvent && stickIfOpen ? dataRef.current.openEvent.type === 'mousedown' : true)) {
        onOpenChange(false, event.nativeEvent, 'click');
      } else {
        // Prevent stealing focus from the floating element
        event.preventDefault();
        onOpenChange(true, event.nativeEvent, 'click');
      }
    },
    onClick(event) {
      const pointerType = pointerTypeRef.current;
      if (eventOption === 'mousedown' && pointerTypeRef.current) {
        pointerTypeRef.current = undefined;
        return;
      }
      if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMouseLikePointerType)(pointerType, true) && ignoreMouse) return;
      if (open && toggle && (dataRef.current.openEvent && stickIfOpen ? dataRef.current.openEvent.type === 'click' : true)) {
        onOpenChange(false, event.nativeEvent, 'click');
      } else {
        onOpenChange(true, event.nativeEvent, 'click');
      }
    },
    onKeyDown(event) {
      pointerTypeRef.current = undefined;
      if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
        return;
      }
      if (event.key === ' ' && !isSpaceIgnored(domReference)) {
        // Prevent scrolling
        event.preventDefault();
        didKeyDownRef.current = true;
      }
      if (event.key === 'Enter') {
        if (open && toggle) {
          onOpenChange(false, event.nativeEvent, 'click');
        } else {
          onOpenChange(true, event.nativeEvent, 'click');
        }
      }
    },
    onKeyUp(event) {
      if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
        return;
      }
      if (event.key === ' ' && didKeyDownRef.current) {
        didKeyDownRef.current = false;
        if (open && toggle) {
          onOpenChange(false, event.nativeEvent, 'click');
        } else {
          onOpenChange(true, event.nativeEvent, 'click');
        }
      }
    }
  }), [dataRef, domReference, eventOption, ignoreMouse, keyboardHandlers, onOpenChange, open, stickIfOpen, toggle]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

function createVirtualElement(domElement, data) {
  let offsetX = null;
  let offsetY = null;
  let isAutoUpdateEvent = false;
  return {
    contextElement: domElement || undefined,
    getBoundingClientRect() {
      var _data$dataRef$current;
      const domRect = (domElement == null ? void 0 : domElement.getBoundingClientRect()) || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      const isXAxis = data.axis === 'x' || data.axis === 'both';
      const isYAxis = data.axis === 'y' || data.axis === 'both';
      const canTrackCursorOnAutoUpdate = ['mouseenter', 'mousemove'].includes(((_data$dataRef$current = data.dataRef.current.openEvent) == null ? void 0 : _data$dataRef$current.type) || '') && data.pointerType !== 'touch';
      let width = domRect.width;
      let height = domRect.height;
      let x = domRect.x;
      let y = domRect.y;
      if (offsetX == null && data.x && isXAxis) {
        offsetX = domRect.x - data.x;
      }
      if (offsetY == null && data.y && isYAxis) {
        offsetY = domRect.y - data.y;
      }
      x -= offsetX || 0;
      y -= offsetY || 0;
      width = 0;
      height = 0;
      if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
        width = data.axis === 'y' ? domRect.width : 0;
        height = data.axis === 'x' ? domRect.height : 0;
        x = isXAxis && data.x != null ? data.x : x;
        y = isYAxis && data.y != null ? data.y : y;
      } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
        height = data.axis === 'x' ? domRect.height : height;
        width = data.axis === 'y' ? domRect.width : width;
      }
      isAutoUpdateEvent = true;
      return {
        width,
        height,
        x,
        y,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x
      };
    }
  };
}
function isMouseBasedEvent(event) {
  return event != null && event.clientX != null;
}
/**
 * Positions the floating element relative to a client point (in the viewport),
 * such as the mouse position. By default, it follows the mouse cursor.
 * @see https://floating-ui.com/docs/useClientPoint
 */
function useClientPoint(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    dataRef,
    elements: {
      floating,
      domReference
    },
    refs
  } = context;
  const {
    enabled = true,
    axis = 'both',
    x = null,
    y = null
  } = props;
  const initialRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const cleanupListenerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const [pointerType, setPointerType] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const [reactive, setReactive] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  const setReference = useEffectEvent((x, y) => {
    if (initialRef.current) return;

    // Prevent setting if the open event was not a mouse-like one
    // (e.g. focus to open, then hover over the reference element).
    // Only apply if the event exists.
    if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
      return;
    }
    refs.setPositionReference(createVirtualElement(domReference, {
      x,
      y,
      axis,
      dataRef,
      pointerType
    }));
  });
  const handleReferenceEnterOrMove = useEffectEvent(event => {
    if (x != null || y != null) return;
    if (!open) {
      setReference(event.clientX, event.clientY);
    } else if (!cleanupListenerRef.current) {
      // If there's no cleanup, there's no listener, but we want to ensure
      // we add the listener if the cursor landed on the floating element and
      // then back on the reference (i.e. it's interactive).
      setReactive([]);
    }
  });

  // If the pointer is a mouse-like pointer, we want to continue following the
  // mouse even if the floating element is transitioning out. On touch
  // devices, this is undesirable because the floating element will move to
  // the dismissal touch point.
  const openCheck = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMouseLikePointerType)(pointerType) ? floating : open;
  const addListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    // Explicitly specified `x`/`y` coordinates shouldn't add a listener.
    if (!openCheck || !enabled || x != null || y != null) return;
    const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getWindow)(floating);
    function handleMouseMove(event) {
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event);
      if (!(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(floating, target)) {
        setReference(event.clientX, event.clientY);
      } else {
        win.removeEventListener('mousemove', handleMouseMove);
        cleanupListenerRef.current = null;
      }
    }
    if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
      win.addEventListener('mousemove', handleMouseMove);
      const cleanup = () => {
        win.removeEventListener('mousemove', handleMouseMove);
        cleanupListenerRef.current = null;
      };
      cleanupListenerRef.current = cleanup;
      return cleanup;
    }
    refs.setPositionReference(domReference);
  }, [openCheck, enabled, x, y, floating, dataRef, refs, domReference, setReference]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return addListener();
  }, [addListener, reactive]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (enabled && !floating) {
      initialRef.current = false;
    }
  }, [enabled, floating]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled && open) {
      initialRef.current = true;
    }
  }, [enabled, open]);
  index(() => {
    if (enabled && (x != null || y != null)) {
      initialRef.current = false;
      setReference(x, y);
    }
  }, [enabled, x, y, setReference]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function setPointerTypeRef(_ref) {
      let {
        pointerType
      } = _ref;
      setPointerType(pointerType);
    }
    return {
      onPointerDown: setPointerTypeRef,
      onPointerEnter: setPointerTypeRef,
      onMouseMove: handleReferenceEnterOrMove,
      onMouseEnter: handleReferenceEnterOrMove
    };
  }, [handleReferenceEnterOrMove]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

const bubbleHandlerKeys = {
  pointerdown: 'onPointerDown',
  mousedown: 'onMouseDown',
  click: 'onClick'
};
const captureHandlerKeys = {
  pointerdown: 'onPointerDownCapture',
  mousedown: 'onMouseDownCapture',
  click: 'onClickCapture'
};
const normalizeProp = normalizable => {
  var _normalizable$escapeK, _normalizable$outside;
  return {
    escapeKey: typeof normalizable === 'boolean' ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
    outsidePress: typeof normalizable === 'boolean' ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
  };
};
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    elements,
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = 'pointerdown',
    referencePress = false,
    referencePressEvent = 'pointerdown',
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === 'function' ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === 'function' ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const endedOrStartedInsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const isComposingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const closeOnEscapeKeyDown = useEffectEvent(event => {
    var _dataRef$current$floa;
    if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
      return;
    }

    // Wait until IME is settled. Pressing `Escape` while composing should
    // close the compose menu, but not the floating element.
    if (isComposingRef.current) {
      return;
    }
    const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach(child => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isReactEvent)(event) ? event.nativeEvent : event, 'escape-key');
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent(event => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event)) == null || _getTarget.removeEventListener('keydown', callback);
    };
    (_getTarget2 = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event)) == null || _getTarget2.addEventListener('keydown', callback);
  });
  const closeOnPressOutside = useEffectEvent(event => {
    var _dataRef$current$floa2;
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;

    // When click outside is lazy (`click` event), handle dragging.
    // Don't close if:
    // - The click started inside the floating element.
    // - The click ended inside the floating element.
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === 'click' && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === 'function' && !outsidePress(event)) {
      return;
    }
    const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event);
    const inertSelector = "[" + createAttribute('inert') + "]";
    const markers = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating).querySelectorAll(inertSelector);
    let targetRootAncestor = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(target) ? target : null;
    while (targetRootAncestor && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isLastTraversableNode)(targetRootAncestor)) {
      const nextParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getParentNode)(targetRootAncestor);
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isLastTraversableNode)(nextParent) || !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }

    // Check if the click occurred on a third-party element injected after the
    // floating element rendered.
    if (markers.length && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(target) && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isRootElement)(target) &&
    // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(target, elements.floating) &&
    // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every(marker => !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(targetRootAncestor, marker))) {
      return;
    }

    // Check if the click occurred on the scrollbar
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(target) && floating) {
      // In Firefox, `target.scrollWidth > target.clientWidth` for inline
      // elements.
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;

      // In some browsers it is possible to change the <body> (or window)
      // scrollbar to the left side, but is very rare and is difficult to
      // check for. Plus, for modal dialogs with backdrops, it is more
      // important that the backdrop is checked but not so much the window.
      if (canScrollY) {
        const isRTL = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getComputedStyle)(target).direction === 'rtl';
        if (isRTL) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
      var _node$context;
      return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isEventTargetWithin)(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isEventTargetWithin)(event, elements.floating) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isEventTargetWithin)(event, elements.domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach(child => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, 'outside-press');
  });
  const closeOnPressOutsideCapture = useEffectEvent(event => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    let compositionTimeout = -1;
    function onScroll(event) {
      onOpenChange(false, event, 'ancestor-scroll');
    }
    function handleCompositionStart() {
      window.clearTimeout(compositionTimeout);
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      // Safari fires `compositionend` before `keydown`, so we need to wait
      // until the next tick to set `isComposing` to `false`.
      // https://bugs.webkit.org/show_bug.cgi?id=165004
      compositionTimeout = window.setTimeout(() => {
        isComposingRef.current = false;
      },
      // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
      // Only apply to WebKit for the test to remain 0ms.
      (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isWebKit)() ? 5 : 0);
    }
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating);
    if (escapeKey) {
      doc.addEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      doc.addEventListener('compositionstart', handleCompositionStart);
      doc.addEventListener('compositionend', handleCompositionEnd);
    }
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(elements.domReference)) {
        ancestors = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getOverflowAncestors)(elements.domReference);
      }
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(elements.floating)) {
        ancestors = ancestors.concat((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getOverflowAncestors)(elements.floating));
      }
      if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(elements.reference) && elements.reference && elements.reference.contextElement) {
        ancestors = ancestors.concat((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getOverflowAncestors)(elements.reference.contextElement));
      }
    }

    // Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)
    ancestors = ancestors.filter(ancestor => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach(ancestor => {
      ancestor.addEventListener('scroll', onScroll, {
        passive: true
      });
    });
    return () => {
      if (escapeKey) {
        doc.removeEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
        doc.removeEventListener('compositionstart', handleCompositionStart);
        doc.removeEventListener('compositionend', handleCompositionEnd);
      }
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach(ancestor => {
        ancestor.removeEventListener('scroll', onScroll);
      });
      window.clearTimeout(compositionTimeout);
    };
  }, [dataRef, elements, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    [bubbleHandlerKeys[referencePressEvent]]: event => {
      if (referencePress) {
        onOpenChange(false, event.nativeEvent, 'reference-press');
      }
    }
  }), [closeOnEscapeKeyDown, onOpenChange, referencePress, referencePressEvent]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onMouseDown() {
      endedOrStartedInsideRef.current = true;
    },
    onMouseUp() {
      endedOrStartedInsideRef.current = true;
    },
    [captureHandlerKeys[outsidePressEvent]]: () => {
      insideReactTreeRef.current = true;
    }
  }), [closeOnEscapeKeyDown, outsidePressEvent]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  const [events] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(optionDomReference)) {
      error('Cannot pass a virtual element to the `elements.reference` option,', 'as it must be a real DOM element. Use `refs.setPositionReference()`', 'instead.');
    }
  }
  const [positionReference, setPositionReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open, event, reason) => {
    dataRef.current.openEvent = open ? event : undefined;
    events.emit('openchange', {
      open,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open, event, reason);
  });
  const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [positionReference, _setPositionReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.useFloating)({
    ...options,
    elements: {
      ...computedElements,
      ...(positionReference && {
        reference: positionReference
      })
    }
  });
  const setPositionReference = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    const computedPositionReference = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    // Store the positionReference in state if the DOM reference is specified externally via the
    // `elements.reference` option. This ensures that it won't be overridden on future renders.
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }

    // Backwards-compatibility for passing a virtual element to `reference`
    // after it has set the DOM reference.
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(position.refs.reference.current) || position.refs.reference.current === null ||
    // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position.elements,
    domReference: domReference
  }), [position.elements, domReference]);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    dataRef,
    elements
  } = context;
  const {
    enabled = true,
    visibleOnly = true
  } = props;
  const blockFocusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const keyboardModalityRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getWindow)(elements.domReference);

    // If the reference was focused and the user left the tab/window, and the
    // floating element was not open, the focus should be blocked when they
    // return to the tab/window.
    function onBlur() {
      if (!open && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(elements.domReference) && elements.domReference === (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.domReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    win.addEventListener('blur', onBlur);
    win.addEventListener('keydown', onKeyDown, true);
    return () => {
      win.removeEventListener('blur', onBlur);
      win.removeEventListener('keydown', onKeyDown, true);
    };
  }, [elements.domReference, open, enabled]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onOpenChange(_ref) {
      let {
        reason
      } = _ref;
      if (reason === 'reference-press' || reason === 'escape-key') {
        blockFocusRef.current = true;
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
    };
  }, [events, enabled]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onPointerDown(event) {
      if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualPointerEvent)(event.nativeEvent)) return;
      keyboardModalityRef.current = false;
    },
    onMouseLeave() {
      blockFocusRef.current = false;
    },
    onFocus(event) {
      if (blockFocusRef.current) return;
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event.nativeEvent);
      if (visibleOnly && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(target)) {
        try {
          // Mac Safari unreliably matches `:focus-visible` on the reference
          // if focus was outside the page initially - use the fallback
          // instead.
          if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isSafari)() && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMac)()) throw Error();
          if (!target.matches(':focus-visible')) return;
        } catch (e) {
          // Old browsers will throw an error when using `:focus-visible`.
          if (!keyboardModalityRef.current && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeableElement)(target)) {
            return;
          }
        }
      }
      onOpenChange(true, event.nativeEvent, 'focus');
    },
    onBlur(event) {
      blockFocusRef.current = false;
      const relatedTarget = event.relatedTarget;
      const nativeEvent = event.nativeEvent;

      // Hit the non-modal focus management portal guard. Focus will be
      // moved into the floating element immediately after.
      const movedToFocusGuard = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(relatedTarget) && relatedTarget.hasAttribute(createAttribute('focus-guard')) && relatedTarget.getAttribute('data-type') === 'outside';

      // Wait for the window blur listener to fire.
      timeoutRef.current = window.setTimeout(() => {
        var _dataRef$current$floa;
        const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)(elements.domReference ? elements.domReference.ownerDocument : document);

        // Focus left the page, keep it open.
        if (!relatedTarget && activeEl === elements.domReference) return;

        // When focusing the reference element (e.g. regular click), then
        // clicking into the floating element, prevent it from hiding.
        // Note: it must be focusable, e.g. `tabindex="-1"`.
        // We can not rely on relatedTarget to point to the correct element
        // as it will only point to the shadow host of the newly focused element
        // and not the element that actually has received focus if it is located
        // inside a shadow root.
        if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)((_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.refs.floating.current, activeEl) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(elements.domReference, activeEl) || movedToFocusGuard) {
          return;
        }
        onOpenChange(false, nativeEvent, 'focus');
      });
    }
  }), [dataRef, elements.domReference, onOpenChange, visibleOnly]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
function mergeProps(userProps, propsList, elementKey) {
  const map = new Map();
  const isItem = elementKey === 'item';
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...(elementKey === 'floating' && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ''
    }),
    ...domUserProps,
    ...propsList.map(value => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === 'function') {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf('on') === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === 'function') {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function () {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map(fn => fn(...args)).find(val => val !== undefined);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/useInteractions
 */
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map(key => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map(key => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map(key => key == null ? void 0 : key.item);
  const getReferenceProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(userProps => mergeProps(userProps, propsList, 'reference'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  referenceDeps);
  const getFloatingProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(userProps => mergeProps(userProps, propsList, 'floating'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  floatingDeps);
  const getItemProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(userProps => mergeProps(userProps, propsList, 'item'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  itemDeps);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}

let isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case 'vertical':
      return vertical;
    case 'horizontal':
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    elements
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = 'auto',
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = 'vertical',
    cols = 1,
    scrollItemIntoView = true,
    virtualItemRef,
    itemSizes,
    dense = false
  } = props;
  if (true) {
    if (allowEscape) {
      if (!loop) {
        warn('`useListNavigation` looping must be enabled to allow escaping.');
      }
      if (!virtual) {
        warn('`useListNavigation` must be virtual to allow escaping.');
      }
    }
    if (orientation === 'vertical' && cols > 1) {
      warn('In grid list navigation mode (`cols` > 1), the `orientation` should', 'be either "horizontal" or "both".');
    }
  }
  const floatingFocusElement = getFloatingFocusElement(elements.floating);
  const floatingFocusElementRef = useLatestRef(floatingFocusElement);
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEffectEvent(unstable_onNavigate);
  const typeableComboboxReference = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeableCombobox)(elements.domReference);
  const focusItemOnOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(focusItemOnOpen);
  const indexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const isPointerModalityRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  const previousOnNavigateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(onNavigate);
  const previousMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!!elements.floating);
  const previousOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(open);
  const forceSyncFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const forceScrollIntoViewRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const disabledIndicesRef = useLatestRef(disabledIndices);
  const latestOpenRef = useLatestRef(open);
  const scrollItemIntoViewRef = useLatestRef(scrollItemIntoView);
  const selectedIndexRef = useLatestRef(selectedIndex);
  const [activeId, setActiveId] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const [virtualId, setVirtualId] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const focusItem = useEffectEvent(function (listRef, indexRef, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    function runFocus(item) {
      if (virtual) {
        setActiveId(item.id);
        tree == null || tree.events.emit('virtualfocus', item);
        if (virtualItemRef) {
          virtualItemRef.current = item;
        }
      } else {
        enqueueFocus(item, {
          preventScroll: true,
          // Mac Safari does not move the virtual cursor unless the focus call
          // is sync. However, for the very first focus call, we need to wait
          // for the position to be ready in order to prevent unwanted
          // scrolling. This means the virtual cursor will not move to the first
          // item when first opening the floating element, but will on
          // subsequent calls. `preventScroll` is supported in modern Safari,
          // so we can use that instead.
          // iOS Safari must be async or the first item will not be focused.
          sync: (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isMac)() && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isSafari)() ? isPreventScrollSupported || forceSyncFocus.current : false
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    if (initialItem) {
      runFocus(initialItem);
    }
    requestAnimationFrame(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) return;
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
        // by all browsers.
        waitedItem.scrollIntoView == null || waitedItem.scrollIntoView(typeof scrollIntoViewOptions === 'boolean' ? {
          block: 'nearest',
          inline: 'nearest'
        } : scrollIntoViewOptions);
      }
    });
  });
  index(() => {
    document.createElement('div').focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);

  // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
  // element. Also, reset `activeIndex` upon closing the floating element.
  index(() => {
    if (!enabled) return;
    if (open && elements.floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        // Regardless of the pointer modality, we want to ensure the selected
        // item comes into view when the floating element is opened.
        forceScrollIntoViewRef.current = true;
        indexRef.current = selectedIndex;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      // Since the user can specify `onNavigate` conditionally
      // (onNavigate: open ? setActiveIndex : setSelectedIndex),
      // we store and call the previous function.
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, elements.floating, selectedIndex, onNavigate]);

  // Sync `activeIndex` to be the focused item while the floating element is
  // open.
  index(() => {
    if (!enabled) return;
    if (open && elements.floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndexRef.current != null) {
          return;
        }

        // Reset while the floating element was open (e.g. the list changed).
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }

        // Initial sync.
        if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              // Avoid letting the browser paint if possible on the first try,
              // otherwise use rAF. Don't try more than twice, since something
              // is wrong otherwise.
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);

  // Ensure the parent floating element has focus when a nested child closes
  // to allow arrow key navigation to work after the pointer leaves the child.
  index(() => {
    var _nodes$find;
    if (!enabled || elements.floating || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = (_nodes$find = nodes.find(node => node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
    const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getDocument)(elements.floating));
    const treeContainsActiveEl = nodes.some(node => node.context && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, elements.floating, tree, parentId, virtual]);
  index(() => {
    if (!enabled) return;
    if (!tree) return;
    if (!virtual) return;
    if (parentId) return;
    function handleVirtualFocus(item) {
      setVirtualId(item.id);
      if (virtualItemRef) {
        virtualItemRef.current = item;
      }
    }
    tree.events.on('virtualfocus', handleVirtualFocus);
    return () => {
      tree.events.off('virtualfocus', handleVirtualFocus);
    };
  }, [enabled, tree, virtual, parentId, virtualItemRef]);
  index(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!elements.floating;
  });
  index(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  index(() => {
    previousOpenRef.current = open;
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open) return;
      const index = listRef.current.indexOf(currentTarget);
      if (index !== -1) {
        onNavigate(index);
      }
    }
    const props = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: _ref2 => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...(focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === 'touch') {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(floatingFocusElementRef.current, {
              preventScroll: true
            });
          }
        }
      })
    };
    return props;
  }, [open, floatingFocusElementRef, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  const commonOnKeyDown = useEffectEvent(event => {
    isPointerModalityRef.current = false;
    forceSyncFocus.current = true;

    // When composing a character, Chrome fires ArrowDown twice. Firefox/Safari
    // don't appear to suffer from this. `event.isComposing` is avoided due to
    // Safari not supporting it properly (although it's not needed in the first
    // place for Safari, just avoiding any possible issues).
    if (event.which === 229) {
      return;
    }

    // If the floating element is animating out, ignore navigation. Otherwise,
    // the `activeIndex` gets set to 0 despite not being open so the next time
    // the user ArrowDowns, the first item won't be focused.
    if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
      onOpenChange(false, event.nativeEvent, 'list-navigation');
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(elements.domReference)) {
        if (virtual) {
          tree == null || tree.events.emit('virtualfocus', elements.domReference);
        } else {
          elements.domReference.focus();
        }
      }
      return;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinIndex(listRef, disabledIndices);
    const maxIndex = getMaxIndex(listRef, disabledIndices);
    if (!typeableComboboxReference) {
      if (event.key === 'Home') {
        (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === 'End') {
        (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
    }

    // Grid navigation.
    if (cols > 1) {
      const sizes = itemSizes || Array.from({
        length: listRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      // To calculate movements on the grid, we use hypothetical cell indices
      // as if every item was 1x1, then convert back to real indices.
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex(index => index != null && !isDisabled(listRef.current, index, disabledIndices));
      // last enabled index
      const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex) => index != null && !isDisabled(listRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
      const index = cellMap[getGridNavigatedIndex({
        current: cellMap.map(itemIndex => itemIndex != null ? listRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        rtl,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...(disabledIndices || listRef.current.map((_, index) => isDisabled(listRef.current, index) ? index : undefined)), undefined], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols,
        // use a corner matching the edge closest to the direction
        // we're moving in so we don't end up in the same item. Prefer
        // top/left over bottom/right.
        event.key === ARROW_DOWN ? 'bl' : event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT) ? 'tr' : 'tl'),
        stopEvent: true
      })];
      if (index != null) {
        indexRef.current = index;
        onNavigate(indexRef.current);
      }
      if (orientation === 'both') {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);

      // Reset the index if no item is focused.
      if (open && !virtual && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.activeElement)(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(indexRef.current);
        return;
      }
      if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
        if (loop) {
          indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          });
        } else {
          indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          }));
        }
      } else {
        if (loop) {
          indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          });
        } else {
          indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          }));
        }
      }
      if (isIndexOutOfBounds(listRef, indexRef.current)) {
        onNavigate(null);
      } else {
        onNavigate(indexRef.current);
      }
    }
  });
  const ariaActiveDescendantProp = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return virtual && open && hasActiveIndex && {
      'aria-activedescendant': virtualId || activeId
    };
  }, [virtual, open, hasActiveIndex, virtualId, activeId]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      'aria-orientation': orientation === 'both' ? undefined : orientation,
      ...(!(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isTypeableCombobox)(elements.domReference) && ariaActiveDescendantProp),
      onKeyDown: commonOnKeyDown,
      onPointerMove() {
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, elements.domReference, orientation]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === 'auto' && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualClick)(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      // `pointerdown` fires first, reset the state then perform the checks.
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === 'auto' && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualPointerEvent)(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      ...ariaActiveDescendantProp,
      onKeyDown(event) {
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith('Arrow');
        const isHomeOrEndKey = ['Home', 'End'].includes(event.key);
        const isMoveKey = isArrowKey || isHomeOrEndKey;
        const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
        const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
        const isMainKey = isMainOrientationKey(event.key, orientation);
        const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
        if (virtual && open) {
          const rootNode = tree == null ? void 0 : tree.nodesRef.current.find(node => node.parentId == null);
          const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
          if (isMoveKey && deepestNode && virtualItemRef) {
            const eventObject = new KeyboardEvent('keydown', {
              key: event.key,
              bubbles: true
            });
            if (isCrossOpenKey || isCrossCloseKey) {
              var _deepestNode$context, _deepestNode$context2;
              const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
              const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? listRef.current.find(item => (item == null ? void 0 : item.id) === activeId) : null;
              if (dispatchItem) {
                (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
                dispatchItem.dispatchEvent(eventObject);
                setVirtualId(undefined);
              }
            }
            if ((isMainKey || isHomeOrEndKey) && deepestNode.context) {
              if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
                var _deepestNode$context$;
                (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
                (_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
                return;
              }
            }
          }
          return commonOnKeyDown(event);
        }

        // If a floating element should not open on arrow key down, avoid
        // setting `activeIndex` while it's closed.
        if (!open && !openOnArrowKeyDown && isArrowKey) {
          return;
        }
        if (isNavigationKey) {
          keyRef.current = nested && isMainKey ? null : event.key;
        }
        if (nested) {
          if (isCrossOpenKey) {
            (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
            if (open) {
              indexRef.current = getMinIndex(listRef, disabledIndicesRef.current);
              onNavigate(indexRef.current);
            } else {
              onOpenChange(true, event.nativeEvent, 'list-navigation');
            }
          }
          return;
        }
        if (isMainKey) {
          if (selectedIndex != null) {
            indexRef.current = selectedIndex;
          }
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
          if (!open && openOnArrowKeyDown) {
            onOpenChange(true, event.nativeEvent, 'list-navigation');
          } else {
            commonOnKeyDown(event);
          }
          if (open) {
            onNavigate(indexRef.current);
          }
        }
      },
      onFocus() {
        if (open && !virtual) {
          onNavigate(null);
        }
      },
      onPointerDown: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [activeId, ariaActiveDescendantProp, commonOnKeyDown, disabledIndicesRef, focusItemOnOpen, listRef, nested, onNavigate, onOpenChange, open, openOnArrowKeyDown, orientation, rtl, selectedIndex, tree, virtual, virtualItemRef]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

const componentRoleToAriaRoleMap = /*#__PURE__*/new Map([['select', 'listbox'], ['combobox', 'listbox'], ['label', false]]);

/**
 * Adds base screen reader props to the reference and floating elements for a
 * given floating element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
function useRole(context, props) {
  var _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = 'dialog'
  } = props;
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const referenceId = useId();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ariaRole === 'tooltip' || role === 'label') {
      return {
        ["aria-" + (role === 'label' ? 'labelledby' : 'describedby')]: open ? floatingId : undefined
      };
    }
    return {
      'aria-expanded': open ? 'true' : 'false',
      'aria-haspopup': ariaRole === 'alertdialog' ? 'dialog' : ariaRole,
      'aria-controls': open ? floatingId : undefined,
      ...(ariaRole === 'listbox' && {
        role: 'combobox'
      }),
      ...(ariaRole === 'menu' && {
        id: referenceId
      }),
      ...(ariaRole === 'menu' && isNested && {
        role: 'menuitem'
      }),
      ...(role === 'select' && {
        'aria-autocomplete': 'none'
      }),
      ...(role === 'combobox' && {
        'aria-autocomplete': 'list'
      })
    };
  }, [ariaRole, floatingId, isNested, open, referenceId, role]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...(ariaRole && {
        role: ariaRole
      })
    };
    if (ariaRole === 'tooltip' || role === 'label') {
      return floatingProps;
    }
    return {
      ...floatingProps,
      ...(ariaRole === 'menu' && {
        'aria-labelledby': referenceId
      })
    };
  }, [ariaRole, floatingId, referenceId, role]);
  const item = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(_ref => {
    let {
      active,
      selected
    } = _ref;
    const commonProps = {
      role: 'option',
      ...(active && {
        id: floatingId + "-option"
      })
    };

    // For `menu`, we are unable to tell if the item is a `menuitemradio`
    // or `menuitemcheckbox`. For backwards-compatibility reasons, also
    // avoid defaulting to `menuitem` as it may overwrite custom role props.
    switch (role) {
      case 'select':
        return {
          ...commonProps,
          'aria-selected': active && selected
        };
      case 'combobox':
        {
          return {
            ...commonProps,
            ...(active && {
              'aria-selected': true
            })
          };
        }
    }
    return {};
  }, [floatingId, role]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

// Converts a JS style key like `backgroundColor` to a CSS transition-property
// like `background-color`.
const camelCaseToKebabCase = str => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());
function execWithArgsOrReturn(valueOrFn, args) {
  return typeof valueOrFn === 'function' ? valueOrFn(args) : valueOrFn;
}
function useDelayUnmount(open, durationMs) {
  const [isMounted, setIsMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(open);
  if (open && !isMounted) {
    setIsMounted(true);
  }
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!open && isMounted) {
      const timeout = setTimeout(() => setIsMounted(false), durationMs);
      return () => clearTimeout(timeout);
    }
  }, [open, isMounted, durationMs]);
  return isMounted;
}
/**
 * Provides a status string to apply CSS transitions to a floating element,
 * correctly handling placement-aware transitions.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstatus
 */
function useTransitionStatus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    elements: {
      floating
    }
  } = context;
  const {
    duration = 250
  } = props;
  const isNumberDuration = typeof duration === 'number';
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState('unmounted');
  const isMounted = useDelayUnmount(open, closeDuration);
  if (!isMounted && status === 'close') {
    setStatus('unmounted');
  }
  index(() => {
    if (!floating) return;
    if (open) {
      setStatus('initial');
      const frame = requestAnimationFrame(() => {
        setStatus('open');
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    }
    setStatus('close');
  }, [open, floating]);
  return {
    isMounted,
    status
  };
}
/**
 * Provides styles to apply CSS transitions to a floating element, correctly
 * handling placement-aware transitions. Wrapper around `useTransitionStatus`.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstyles
 */
function useTransitionStyles(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    initial: unstable_initial = {
      opacity: 0
    },
    open: unstable_open,
    close: unstable_close,
    common: unstable_common,
    duration = 250
  } = props;
  const placement = context.placement;
  const side = placement.split('-')[0];
  const fnArgs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    side,
    placement
  }), [side, placement]);
  const isNumberDuration = typeof duration === 'number';
  const openDuration = (isNumberDuration ? duration : duration.open) || 0;
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [styles, setStyles] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => ({
    ...execWithArgsOrReturn(unstable_common, fnArgs),
    ...execWithArgsOrReturn(unstable_initial, fnArgs)
  }));
  const {
    isMounted,
    status
  } = useTransitionStatus(context, {
    duration
  });
  const initialRef = useLatestRef(unstable_initial);
  const openRef = useLatestRef(unstable_open);
  const closeRef = useLatestRef(unstable_close);
  const commonRef = useLatestRef(unstable_common);
  index(() => {
    const initialStyles = execWithArgsOrReturn(initialRef.current, fnArgs);
    const closeStyles = execWithArgsOrReturn(closeRef.current, fnArgs);
    const commonStyles = execWithArgsOrReturn(commonRef.current, fnArgs);
    const openStyles = execWithArgsOrReturn(openRef.current, fnArgs) || Object.keys(initialStyles).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    if (status === 'initial') {
      setStyles(styles => ({
        transitionProperty: styles.transitionProperty,
        ...commonStyles,
        ...initialStyles
      }));
    }
    if (status === 'open') {
      setStyles({
        transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(','),
        transitionDuration: openDuration + "ms",
        ...commonStyles,
        ...openStyles
      });
    }
    if (status === 'close') {
      const styles = closeStyles || initialStyles;
      setStyles({
        transitionProperty: Object.keys(styles).map(camelCaseToKebabCase).join(','),
        transitionDuration: closeDuration + "ms",
        ...commonStyles,
        ...styles
      });
    }
  }, [closeDuration, closeRef, initialRef, openRef, commonRef, openDuration, status, fnArgs]);
  return {
    isMounted,
    styles
  };
}

/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const stringRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef('');
  const prevIndexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const onMatch = useEffectEvent(unstable_onMatch);
  const onTypingChange = useEffectEvent(unstable_onTypingChange);
  const findMatchRef = useLatestRef(findMatch);
  const ignoreKeysRef = useLatestRef(ignoreKeys);
  index(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = '';
    }
  }, [open]);
  index(() => {
    // Sync arrow key navigation but not typeahead navigation.
    if (open && stringRef.current === '') {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  const setTypingChange = useEffectEvent(value => {
    if (value) {
      if (!dataRef.current.typing) {
        dataRef.current.typing = value;
        onTypingChange(value);
      }
    } else {
      if (dataRef.current.typing) {
        dataRef.current.typing = value;
        onTypingChange(value);
      }
    }
  });
  const onKeyDown = useEffectEvent(event => {
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find(text => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
      if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
        setTypingChange(false);
      } else if (event.key === ' ') {
        (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
      }
    }
    if (listContent == null || ignoreKeysRef.current.includes(event.key) ||
    // Character key.
    event.key.length !== 1 ||
    // Modifier key.
    event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (open && event.key !== ' ') {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.stopEvent)(event);
      setTypingChange(true);
    }

    // Bail out if the list contains a word like "llama" or "aaron". TODO:
    // allow it in this case, too.
    const allowRapidSuccessionOfFirstLetter = listContent.every(text => {
      var _text$, _text$2;
      return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
    });

    // Allows the user to cycle through items that start with the same letter
    // in rapid succession.
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
      setTypingChange(false);
    }, resetMs);
    const prevIndex = prevIndexRef.current;
    const index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
    if (index !== -1) {
      onMatch(index);
      matchIndexRef.current = index;
    } else if (event.key !== ' ') {
      stringRef.current = '';
      setTypingChange(false);
    }
  });
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown
  }), [onKeyDown]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      onKeyDown,
      onKeyUp(event) {
        if (event.key === ' ') {
          setTypingChange(false);
        }
      }
    };
  }, [onKeyDown, setTypingChange]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
/**
 * Positions the floating element such that an inner element inside of it is
 * anchored to the reference element.
 * @see https://floating-ui.com/docs/inner
 */
const inner = props => ({
  name: 'inner',
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.evaluate)(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index];
    const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;

    // Valid combinations:
    // 1. Floating element is the scrollRef and has a border (default)
    // 2. Floating element is not the scrollRef, floating element has a border
    // 3. Floating element is not the scrollRef, scrollRef has a border
    // Floating > {...getFloatingProps()} wrapper > scrollRef > items is not
    // allowed as VoiceOver doesn't work.
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (true) {
      if (!state.placement.startsWith('bottom')) {
        warn('`placement` side must be "bottom" when using the `inner`', 'middleware.');
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...(await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.offset)(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state))
    };
    const overflow = await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.detectOverflow)(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.detectOverflow)(nextArgs, {
      ...detectOverflowOptions,
      elementContext: 'reference'
    });
    const diffY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const rounder = isScrollable ? v => v : _floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.round;
    const maxHeight = rounder((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.max)(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;

    // There is not enough space, fallback to standard anchored positioning
    if (onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_2__.min)(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      react_dom__WEBPACK_IMPORTED_MODULE_5__.flushSync(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.detectOverflow)(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
/**
 * Changes the `inner` middleware's `offset` upon a `wheel` event to
 * expand the floating element's height, revealing more list items.
 * @see https://floating-ui.com/docs/inner
 */
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const prevScrollTopRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const initialOverflowRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? 'max' : 'min';
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        react_dom__WEBPACK_IMPORTED_MODULE_5__.flushSync(() => {
          onChange(d => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgent)())) {
        // Needed to propagate scrolling during momentum scrolling phase once
        // it gets limited by the boundary. UX improvement, not critical.
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener('wheel', onWheel);

      // Wait for the position to be ready.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          react_dom__WEBPACK_IMPORTED_MODULE_5__.flushSync(() => onChange(d => d + scrollDiff));
        }
      }

      // [Firefox] Wait for the height change to have been applied.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safepolygon
 */
function safePolygon(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true
  } = options;
  let timeoutId;
  let hasLanded = false;
  let lastX = null;
  let lastY = null;
  let lastCursorTime = performance.now();
  function getCursorSpeed(x, y) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) {
      lastX = x;
      lastY = y;
      lastCursorTime = currentTime;
      return null;
    }
    const deltaX = x - lastX;
    const deltaY = y - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / elapsedTime; // px / ms

    lastX = x;
    lastY = y;
    lastCursorTime = currentTime;
    return speed;
  }
  const fn = _ref => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId);
        onClose();
      }
      clearTimeout(timeoutId);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.getTarget)(event);
      const isLeave = event.type === 'mouseleave';
      const isOverFloatingEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(elements.floating, target);
      const isOverReferenceEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split('-')[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }

      // Prevent overlapping floating element from being stuck in an open-close
      // loop: https://github.com/floating-ui/floating-ui/issues/1910
      if (isLeave && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isElement)(event.relatedTarget) && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.contains)(elements.floating, event.relatedTarget)) {
        return;
      }

      // If any nested child is open, abort.
      if (tree && getChildren(tree.nodesRef.current, nodeId).some(_ref2 => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }

      // If the pointer is leaving from the opposite side, the "buffer" logic
      // creates a point where the floating element remains open, but should be
      // ignored.
      // A constant of 1 handles floating point rounding errors.
      if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
        return close();
      }

      // Ignore when the cursor is within the rectangular trough between the
      // two elements. Since the triangle is created from the cursor point,
      // which can start beyond the ref element's edge, traversing back and
      // forth from the ref to the floating element can cause it to close. This
      // ensures it always remains open in that case.
      let rectPoly = [];
      switch (side) {
        case 'top':
          rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
          break;
        case 'bottom':
          rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
          break;
        case 'left':
          rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
          break;
        case 'right':
          rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
          break;
      }
      function getPolygon(_ref3) {
        let [x, y] = _ref3;
        switch (side) {
          case 'top':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'bottom':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'left':
            {
              const cursorPointOne = [x + buffer + 1, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x + buffer + 1, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
              return [...commonPoints, cursorPointOne, cursorPointTwo];
            }
          case 'right':
            {
              const cursorPointOne = [x - buffer, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x - buffer, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
        }
      }
      if (isPointInPolygon([clientX, clientY], rectPoly)) {
        return;
      }
      if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isLeave && requireIntent) {
        const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
        const cursorSpeedThreshold = 0.1;
        if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
          return close();
        }
      }
      if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) {
        close();
      } else if (!hasLanded && requireIntent) {
        timeoutId = window.setTimeout(close, 40);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}




/***/ }),

/***/ "./node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TYPEABLE_SELECTOR: function() { return /* binding */ TYPEABLE_SELECTOR; },
/* harmony export */   activeElement: function() { return /* binding */ activeElement; },
/* harmony export */   contains: function() { return /* binding */ contains; },
/* harmony export */   getDocument: function() { return /* binding */ getDocument; },
/* harmony export */   getPlatform: function() { return /* binding */ getPlatform; },
/* harmony export */   getTarget: function() { return /* binding */ getTarget; },
/* harmony export */   getUserAgent: function() { return /* binding */ getUserAgent; },
/* harmony export */   isAndroid: function() { return /* binding */ isAndroid; },
/* harmony export */   isEventTargetWithin: function() { return /* binding */ isEventTargetWithin; },
/* harmony export */   isJSDOM: function() { return /* binding */ isJSDOM; },
/* harmony export */   isMac: function() { return /* binding */ isMac; },
/* harmony export */   isMouseLikePointerType: function() { return /* binding */ isMouseLikePointerType; },
/* harmony export */   isReactEvent: function() { return /* binding */ isReactEvent; },
/* harmony export */   isRootElement: function() { return /* binding */ isRootElement; },
/* harmony export */   isSafari: function() { return /* binding */ isSafari; },
/* harmony export */   isTypeableCombobox: function() { return /* binding */ isTypeableCombobox; },
/* harmony export */   isTypeableElement: function() { return /* binding */ isTypeableElement; },
/* harmony export */   isVirtualClick: function() { return /* binding */ isVirtualClick; },
/* harmony export */   isVirtualPointerEvent: function() { return /* binding */ isVirtualPointerEvent; },
/* harmony export */   stopEvent: function() { return /* binding */ stopEvent; }
/* harmony export */ });
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");


function activeElement(doc) {
  let activeElement = doc.activeElement;
  while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement = activeElement.shadowRoot.activeElement;
  }
  return activeElement;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();

  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
  }

  // then fallback to custom implementation with Shadow DOM support
  if (rootNode && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      // @ts-ignore
      next = next.parentNode || next.host;
    }
  }

  // Give up, the result is false
  return false;
}
// Avoid Chrome DevTools blue warning.
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(_ref => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(' ');
  }
  return navigator.userAgent;
}

// License: https://github.com/adobe/react-spectrum/blob/b35d5c02fe900badccd0cf1a8f23bb593419f238/packages/@react-aria/utils/src/isVirtualEvent.ts
function isVirtualClick(event) {
  // FIXME: Firefox is now emitting a deprecation warning for `mozInputSource`.
  // Try to find a workaround for this. `react-aria` source still has the check.
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  if (isAndroid() && event.pointerType) {
    return event.type === 'click' && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM()) return false;
  return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' ||
  // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'touch';
}
function isSafari() {
  // Chrome DevTools does not complain about navigator.vendor
  return /apple/i.test(navigator.vendor);
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
  return getPlatform().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes('jsdom/');
}
function isMouseLikePointerType(pointerType, strict) {
  // On some Linux machines with Chromium, mouse inputs return a `pointerType`
  // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
  const values = ['mouse', 'pen'];
  if (!strict) {
    values.push('', undefined);
  }
  return values.includes(pointerType);
}
function isReactEvent(event) {
  return 'nativeEvent' in event;
}
function isRootElement(element) {
  return element.matches('html,body');
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  }

  // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
  const e = event;
  return e.target != null && node.contains(e.target);
}
function getTarget(event) {
  if ('composedPath' in event) {
    return event.composedPath()[0];
  }

  // TS thinks `event` is of type never as it assumes all browsers support
  // `composedPath()`, but browsers without shadow DOM don't.
  return event.target;
}
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isTypeableCombobox(element) {
  if (!element) return false;
  return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}




/***/ }),

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputedStyle: function() { return /* binding */ getComputedStyle; },
/* harmony export */   getContainingBlock: function() { return /* binding */ getContainingBlock; },
/* harmony export */   getDocumentElement: function() { return /* binding */ getDocumentElement; },
/* harmony export */   getFrameElement: function() { return /* binding */ getFrameElement; },
/* harmony export */   getNearestOverflowAncestor: function() { return /* binding */ getNearestOverflowAncestor; },
/* harmony export */   getNodeName: function() { return /* binding */ getNodeName; },
/* harmony export */   getNodeScroll: function() { return /* binding */ getNodeScroll; },
/* harmony export */   getOverflowAncestors: function() { return /* binding */ getOverflowAncestors; },
/* harmony export */   getParentNode: function() { return /* binding */ getParentNode; },
/* harmony export */   getWindow: function() { return /* binding */ getWindow; },
/* harmony export */   isContainingBlock: function() { return /* binding */ isContainingBlock; },
/* harmony export */   isElement: function() { return /* binding */ isElement; },
/* harmony export */   isHTMLElement: function() { return /* binding */ isHTMLElement; },
/* harmony export */   isLastTraversableNode: function() { return /* binding */ isLastTraversableNode; },
/* harmony export */   isNode: function() { return /* binding */ isNode; },
/* harmony export */   isOverflowElement: function() { return /* binding */ isOverflowElement; },
/* harmony export */   isShadowRoot: function() { return /* binding */ isShadowRoot; },
/* harmony export */   isTableElement: function() { return /* binding */ isTableElement; },
/* harmony export */   isTopLayer: function() { return /* binding */ isTopLayer; },
/* harmony export */   isWebKit: function() { return /* binding */ isWebKit; }
/* harmony export */ });
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}




/***/ }),

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignments: function() { return /* binding */ alignments; },
/* harmony export */   clamp: function() { return /* binding */ clamp; },
/* harmony export */   createCoords: function() { return /* binding */ createCoords; },
/* harmony export */   evaluate: function() { return /* binding */ evaluate; },
/* harmony export */   expandPaddingObject: function() { return /* binding */ expandPaddingObject; },
/* harmony export */   floor: function() { return /* binding */ floor; },
/* harmony export */   getAlignment: function() { return /* binding */ getAlignment; },
/* harmony export */   getAlignmentAxis: function() { return /* binding */ getAlignmentAxis; },
/* harmony export */   getAlignmentSides: function() { return /* binding */ getAlignmentSides; },
/* harmony export */   getAxisLength: function() { return /* binding */ getAxisLength; },
/* harmony export */   getExpandedPlacements: function() { return /* binding */ getExpandedPlacements; },
/* harmony export */   getOppositeAlignmentPlacement: function() { return /* binding */ getOppositeAlignmentPlacement; },
/* harmony export */   getOppositeAxis: function() { return /* binding */ getOppositeAxis; },
/* harmony export */   getOppositeAxisPlacements: function() { return /* binding */ getOppositeAxisPlacements; },
/* harmony export */   getOppositePlacement: function() { return /* binding */ getOppositePlacement; },
/* harmony export */   getPaddingObject: function() { return /* binding */ getPaddingObject; },
/* harmony export */   getSide: function() { return /* binding */ getSide; },
/* harmony export */   getSideAxis: function() { return /* binding */ getSideAxis; },
/* harmony export */   max: function() { return /* binding */ max; },
/* harmony export */   min: function() { return /* binding */ min; },
/* harmony export */   placements: function() { return /* binding */ placements; },
/* harmony export */   rectToClientRect: function() { return /* binding */ rectToClientRect; },
/* harmony export */   round: function() { return /* binding */ round; },
/* harmony export */   sides: function() { return /* binding */ sides; }
/* harmony export */ });
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}




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

/***/ "./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatingArrow: function() { return /* binding */ FloatingArrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_DirectionProvider_DirectionProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/DirectionProvider/DirectionProvider.mjs */ "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs");
/* harmony import */ var _get_arrow_position_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-arrow-position-styles.mjs */ "./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/get-arrow-position-styles.mjs");
'use client';













const FloatingArrow = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  ({
    position,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    visible,
    arrowX,
    arrowY,
    style,
    ...others
  }, ref) => {
    const { dir } = (0,_core_DirectionProvider_DirectionProvider_mjs__WEBPACK_IMPORTED_MODULE_3__.useDirection)();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        ...others,
        ref,
        style: {
          ...style,
          ...(0,_get_arrow_position_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.getArrowPositionStyles)({
            position,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            dir,
            arrowX,
            arrowY
          })
        }
      }
    );
  }
);
FloatingArrow.displayName = "@mantine/core/FloatingArrow";


//# sourceMappingURL=FloatingArrow.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/get-arrow-position-styles.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/get-arrow-position-styles.mjs ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrowPositionStyles: function() { return /* binding */ getArrowPositionStyles; }
/* harmony export */ });
'use client';
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
const radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: arrowRadius
  };
  const arrowPlacement = -arrowSize / 2;
  if (side === "left") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      clipPath: "polygon(100% 0, 0 0, 100% 100%)"
    };
  }
  if (side === "right") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent",
      clipPath: "polygon(0 100%, 0 0, 100% 100%)"
    };
  }
  if (side === "top") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
    };
  }
  if (side === "bottom") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent",
      clipPath: "polygon(0 100%, 0 0, 100% 0)"
    };
  }
  return {};
}


//# sourceMappingURL=get-arrow-position-styles.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFloatingPosition: function() { return /* binding */ getFloatingPosition; }
/* harmony export */ });
'use client';
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}


//# sourceMappingURL=get-floating-position.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFloatingAutoUpdate: function() { return /* binding */ useFloatingAutoUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs");
'use client';




function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current && opened) {
      return (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.autoUpdate)(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useDidUpdate)(() => {
    floating.update();
  }, positionDependencies);
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useDidUpdate)(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}


//# sourceMappingURL=use-floating-auto-update.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionalPortal: function() { return /* binding */ OptionalPortal; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/MantineProvider/Mantine.context.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Portal_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Portal.mjs */ "./node_modules/@mantine/core/esm/components/Portal/Portal.mjs");
'use client';














const OptionalPortal = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_4__.factory)(
  ({ withinPortal = true, children, ...others }, ref) => {
    const env = (0,_core_MantineProvider_Mantine_context_mjs__WEBPACK_IMPORTED_MODULE_3__.useMantineEnv)();
    if (env === "test" || !withinPortal) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Portal_mjs__WEBPACK_IMPORTED_MODULE_5__.Portal, { ref, ...others, children });
  }
);
OptionalPortal.displayName = "@mantine/core/OptionalPortal";


//# sourceMappingURL=OptionalPortal.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Portal/Portal.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Portal/Portal.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: function() { return /* binding */ Portal; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
'use client';















function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
function getTargetNode({
  target,
  reuseTargetNode,
  ...others
}) {
  if (target) {
    if (typeof target === "string") {
      return document.querySelector(target) || createPortalNode(others);
    }
    return target;
  }
  if (reuseTargetNode) {
    const existingNode = document.querySelector("[data-mantine-shared-portal-node]");
    if (existingNode) {
      return existingNode;
    }
    const node = createPortalNode(others);
    node.setAttribute("data-mantine-shared-portal-node", "true");
    document.body.appendChild(node);
    return node;
  }
  return createPortalNode(others);
}
const defaultProps = {};
const Portal = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_7__.factory)((props, ref) => {
  const { children, target, reuseTargetNode, ...others } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_6__.useProps)("Portal", defaultProps, props);
  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = getTargetNode({ target, reuseTargetNode, ...others });
    (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__.assignRef)(ref, nodeRef.current);
    if (!target && !reuseTargetNode && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && !reuseTargetNode && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children }), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";


//# sourceMappingURL=Portal.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/RingProgress/Curve/Curve.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/RingProgress/Curve/Curve.mjs ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Curve: function() { return /* binding */ Curve; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
/* harmony import */ var _core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _Tooltip_Tooltip_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Tooltip/Tooltip.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs");
/* harmony import */ var _get_curve_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-curve-props.mjs */ "./node_modules/@mantine/core/esm/components/RingProgress/Curve/get-curve-props.mjs");
'use client';

















function Curve({
  size,
  value,
  offset,
  sum,
  thickness,
  root,
  color,
  lineRoundCaps,
  tooltip,
  getStyles,
  display,
  ...others
}) {
  const theme = (0,_core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_4__.useMantineTheme)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip_Tooltip_mjs__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Floating, { disabled: !tooltip, label: tooltip, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__.Box,
    {
      component: "circle",
      ...others,
      ...getStyles("curve"),
      __vars: { "--curve-color": color ? (0,_core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_3__.getThemeColor)(color, theme) : void 0 },
      fill: "none",
      strokeLinecap: lineRoundCaps ? "round" : "butt",
      ...(0,_get_curve_props_mjs__WEBPACK_IMPORTED_MODULE_7__.getCurveProps)({ sum, size, thickness, value, offset, root })
    }
  ) });
}
Curve.displayName = "@mantine/core/Curve";


//# sourceMappingURL=Curve.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/RingProgress/Curve/get-curve-props.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/RingProgress/Curve/get-curve-props.mjs ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurveProps: function() { return /* binding */ getCurveProps; }
/* harmony export */ });
'use client';
function getCurveProps({ size, thickness, sum, value, root, offset }) {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = Math.PI * radius * 2 / 100;
  const strokeDasharray = root || value === void 0 ? `${(100 - sum) * deg}, ${sum * deg}` : `${value * deg}, ${(100 - value) * deg}`;
  return {
    strokeWidth: Number.isNaN(thickness) ? 12 : thickness,
    cx: size / 2 || 0,
    cy: size / 2 || 0,
    r: radius || 0,
    transform: root ? `scale(1, -1) translate(0, -${size})` : void 0,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset || 0
  };
}


//# sourceMappingURL=get-curve-props.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/RingProgress/RingProgress.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/RingProgress/RingProgress.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RingProgress: function() { return /* binding */ RingProgress; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/units-converters/rem.mjs */ "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Curve_Curve_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Curve/Curve.mjs */ "./node_modules/@mantine/core/esm/components/RingProgress/Curve/Curve.mjs");
/* harmony import */ var _get_curves_get_curves_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get-curves/get-curves.mjs */ "./node_modules/@mantine/core/esm/components/RingProgress/get-curves/get-curves.mjs");
/* harmony import */ var _RingProgress_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RingProgress.module.css.mjs */ "./node_modules/@mantine/core/esm/components/RingProgress/RingProgress.module.css.mjs");
'use client';




















function getClampedThickness(thickness, size) {
  return Math.min(thickness || 12, (size || 120) / 4);
}
const defaultProps = {
  size: 120,
  thickness: 12
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_3__.createVarsResolver)(
  (_, { size, thickness, transitionDuration }) => ({
    root: {
      "--rp-size": (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_2__.rem)(size),
      "--rp-label-offset": (0,_core_utils_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_2__.rem)(thickness * 2),
      "--rp-transition-duration": transitionDuration ? `${transitionDuration}ms` : void 0
    }
  })
);
const RingProgress = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_8__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_5__.useProps)("RingProgress", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    sections,
    size,
    thickness,
    roundCaps,
    rootColor,
    transitionDuration,
    ...others
  } = props;
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.useStyles)({
    name: "RingProgress",
    classes: _RingProgress_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__["default"],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const clampedThickness = getClampedThickness(thickness, size);
  const curves = (0,_get_curves_get_curves_mjs__WEBPACK_IMPORTED_MODULE_10__.getCurves)({
    size,
    thickness: clampedThickness,
    sections,
    renderRoundedLineCaps: roundCaps,
    rootColor
  }).map(({ data, sum, root, lineRoundCaps, offset }, index) => /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
    _Curve_Curve_mjs__WEBPACK_IMPORTED_MODULE_9__.Curve,
    {
      ...data,
      key: index,
      size,
      thickness: clampedThickness,
      sum,
      offset,
      color: data?.color,
      root,
      lineRoundCaps,
      getStyles
    }
  ));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__.Box, { ...getStyles("root"), size, ref, ...others, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { ...getStyles("svg"), children: curves }),
    label && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...getStyles("label"), children: label })
  ] });
});
RingProgress.classes = _RingProgress_module_css_mjs__WEBPACK_IMPORTED_MODULE_11__["default"];
RingProgress.displayName = "@mantine/core/RingProgress";


//# sourceMappingURL=RingProgress.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/RingProgress/RingProgress.module.css.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/RingProgress/RingProgress.module.css.mjs ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"root":"m_b32e4812","svg":"m_d43b5134","curve":"m_b1ca1fbf","label":"m_b23f9dc4"};


//# sourceMappingURL=RingProgress.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/RingProgress/get-curves/get-curves.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/RingProgress/get-curves/get-curves.mjs ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurves: function() { return /* binding */ getCurves; }
/* harmony export */ });
'use client';
function getCurves({
  size,
  thickness,
  sections,
  renderRoundedLineCaps,
  rootColor
}) {
  const sum = sections.reduce((acc, current) => acc + current.value, 0);
  const accumulated = Math.PI * ((size * 0.9 - thickness * 2) / 2) * 2;
  let offset = accumulated;
  const curves = [];
  const curvesInOrder = [];
  for (let i = 0; i < sections.length; i += 1) {
    curves.push({ sum, offset, data: sections[i], root: false });
    offset -= sections[i].value / 100 * accumulated;
  }
  curves.push({ sum, offset, data: { color: rootColor }, root: true });
  curvesInOrder.push({ ...curves[curves.length - 1], lineRoundCaps: false });
  if (curves.length > 2) {
    curvesInOrder.push({ ...curves[0], lineRoundCaps: renderRoundedLineCaps });
    curvesInOrder.push({ ...curves[curves.length - 2], lineRoundCaps: renderRoundedLineCaps });
    for (let i = 1; i <= curves.length - 3; i += 1) {
      curvesInOrder.push({ ...curves[i], lineRoundCaps: false });
    }
  } else {
    curvesInOrder.push({ ...curves[0], lineRoundCaps: renderRoundedLineCaps });
  }
  return curvesInOrder;
}


//# sourceMappingURL=get-curves.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: function() { return /* binding */ Tooltip; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs");
/* harmony import */ var _core_utils_is_element_is_element_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/is-element/is-element.mjs */ "./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs");
/* harmony import */ var _core_utils_get_default_z_index_get_default_z_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/get-default-z-index/get-default-z-index.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_utils_get_ref_prop_get_ref_prop_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/get-ref-prop/get-ref-prop.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _core_DirectionProvider_DirectionProvider_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/DirectionProvider/DirectionProvider.mjs */ "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs");
/* harmony import */ var _Floating_get_floating_position_get_floating_position_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Floating/get-floating-position/get-floating-position.mjs */ "./node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs");
/* harmony import */ var _Floating_FloatingArrow_FloatingArrow_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Floating/FloatingArrow/FloatingArrow.mjs */ "./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs");
/* harmony import */ var _Portal_OptionalPortal_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Portal/OptionalPortal.mjs */ "./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs");
/* harmony import */ var _Transition_Transition_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Transition/Transition.mjs */ "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs");
/* harmony import */ var _Transition_get_transition_props_get_transition_props_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Transition/get-transition-props/get-transition-props.mjs */ "./node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs");
/* harmony import */ var _TooltipFloating_TooltipFloating_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TooltipFloating/TooltipFloating.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs");
/* harmony import */ var _TooltipGroup_TooltipGroup_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./TooltipGroup/TooltipGroup.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs");
/* harmony import */ var _use_tooltip_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./use-tooltip.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs");
/* harmony import */ var _Tooltip_module_css_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Tooltip.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs");
'use client';
































const defaultProps = {
  position: "top",
  refProp: "ref",
  withinPortal: true,
  inline: false,
  defaultOpened: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: true, focus: false, touch: false },
  zIndex: (0,_core_utils_get_default_z_index_get_default_z_index_mjs__WEBPACK_IMPORTED_MODULE_5__.getDefaultZIndex)("popover"),
  positionDependencies: [],
  middlewares: { flip: true, shift: true, inline: false }
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_8__.createVarsResolver)((theme, { radius, color }) => ({
  tooltip: {
    "--tooltip-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_6__.getRadius)(radius),
    "--tooltip-bg": color ? (0,_core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_9__.getThemeColor)(color, theme) : void 0,
    "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
  }
}));
const Tooltip = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_13__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_10__.useProps)("Tooltip", defaultProps, _props);
  const {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    defaultOpened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    offset,
    transitionProps,
    multiline,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline,
    variant,
    keepMounted,
    vars,
    portalProps,
    mod,
    floatingStrategy,
    middlewares,
    ...others
  } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_10__.useProps)("Tooltip", defaultProps, props);
  const { dir } = (0,_core_DirectionProvider_DirectionProvider_mjs__WEBPACK_IMPORTED_MODULE_14__.useDirection)();
  const arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const tooltip = (0,_use_tooltip_mjs__WEBPACK_IMPORTED_MODULE_22__.useTooltip)({
    position: (0,_Floating_get_floating_position_get_floating_position_mjs__WEBPACK_IMPORTED_MODULE_15__.getFloatingPosition)(dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    defaultOpened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset === "number" ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
    positionDependencies: [...positionDependencies, children],
    inline,
    strategy: floatingStrategy,
    middlewares
  });
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_11__.useStyles)({
    name: "Tooltip",
    props,
    classes: _Tooltip_module_css_mjs__WEBPACK_IMPORTED_MODULE_23__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver
  });
  if (!(0,_core_utils_is_element_is_element_mjs__WEBPACK_IMPORTED_MODULE_4__.isElement)(children)) {
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useMergedRef)(tooltip.reference, (0,_core_utils_get_ref_prop_get_ref_prop_mjs__WEBPACK_IMPORTED_MODULE_7__.getRefProp)(children), ref);
  const transition = (0,_Transition_get_transition_props_get_transition_props_mjs__WEBPACK_IMPORTED_MODULE_19__.getTransitionProps)(transitionProps, { duration: 100, transition: "fade" });
  const _childrenProps = children.props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Portal_OptionalPortal_mjs__WEBPACK_IMPORTED_MODULE_17__.OptionalPortal, { ...portalProps, withinPortal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Transition_Transition_mjs__WEBPACK_IMPORTED_MODULE_18__.Transition,
      {
        ...transition,
        keepMounted,
        mounted: !disabled && !!tooltip.opened,
        duration: tooltip.isGroupPhase ? 10 : transition.duration,
        children: (transitionStyles) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_12__.Box,
          {
            ...others,
            "data-fixed": floatingStrategy === "fixed" || void 0,
            variant,
            mod: [{ multiline }, mod],
            ...tooltip.getFloatingProps({
              ref: tooltip.floating,
              className: getStyles("tooltip").className,
              style: {
                ...getStyles("tooltip").style,
                ...transitionStyles,
                zIndex,
                top: tooltip.y ?? 0,
                left: tooltip.x ?? 0
              }
            }),
            children: [
              label,
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Floating_FloatingArrow_FloatingArrow_mjs__WEBPACK_IMPORTED_MODULE_16__.FloatingArrow,
                {
                  ref: arrowRef,
                  arrowX: tooltip.arrowX,
                  arrowY: tooltip.arrowY,
                  visible: withArrow,
                  position: tooltip.placement,
                  arrowSize,
                  arrowOffset,
                  arrowRadius,
                  arrowPosition,
                  ...getStyles("arrow")
                }
              )
            ]
          }
        )
      }
    ) }),
    (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(
      children,
      tooltip.getReferenceProps({
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseMove: props.onMouseMove,
        onPointerDown: props.onPointerDown,
        onPointerEnter: props.onPointerEnter,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, _childrenProps.className),
        ..._childrenProps,
        [refProp]: targetRef
      })
    )
  ] });
});
Tooltip.classes = _Tooltip_module_css_mjs__WEBPACK_IMPORTED_MODULE_23__["default"];
Tooltip.displayName = "@mantine/core/Tooltip";
Tooltip.Floating = _TooltipFloating_TooltipFloating_mjs__WEBPACK_IMPORTED_MODULE_20__.TooltipFloating;
Tooltip.Group = _TooltipGroup_TooltipGroup_mjs__WEBPACK_IMPORTED_MODULE_21__.TooltipGroup;


//# sourceMappingURL=Tooltip.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classes; }
/* harmony export */ });
'use client';
var classes = {"tooltip":"m_1b3c8819","arrow":"m_f898399f"};


//# sourceMappingURL=Tooltip.module.css.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipFloating: function() { return /* binding */ TooltipFloating; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs");
/* harmony import */ var _core_utils_is_element_is_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/utils/is-element/is-element.mjs */ "./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs");
/* harmony import */ var _core_utils_get_default_z_index_get_default_z_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/utils/get-default-z-index/get-default-z-index.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs");
/* harmony import */ var _core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utils/get-size/get-size.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs");
/* harmony import */ var _core_utils_get_ref_prop_get_ref_prop_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/utils/get-ref-prop/get-ref-prop.mjs */ "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs");
/* harmony import */ var _core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/styles-api/create-vars-resolver/create-vars-resolver.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs");
/* harmony import */ var _core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/styles-api/use-styles/use-styles.mjs */ "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs");
/* harmony import */ var _core_Box_get_style_object_get_style_object_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/Box/get-style-object/get-style-object.mjs */ "./node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs");
/* harmony import */ var _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/Box/Box.mjs */ "./node_modules/@mantine/core/esm/core/Box/Box.mjs");
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/factory/factory.mjs */ "./node_modules/@mantine/core/esm/core/factory/factory.mjs");
/* harmony import */ var _Portal_OptionalPortal_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Portal/OptionalPortal.mjs */ "./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs");
/* harmony import */ var _use_floating_tooltip_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./use-floating-tooltip.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs");
/* harmony import */ var _Tooltip_module_css_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Tooltip.module.css.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs");
'use client';


























const defaultProps = {
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  defaultOpened: false,
  position: "right",
  zIndex: (0,_core_utils_get_default_z_index_get_default_z_index_mjs__WEBPACK_IMPORTED_MODULE_4__.getDefaultZIndex)("popover")
};
const varsResolver = (0,_core_styles_api_create_vars_resolver_create_vars_resolver_mjs__WEBPACK_IMPORTED_MODULE_7__.createVarsResolver)((theme, { radius, color }) => ({
  tooltip: {
    "--tooltip-radius": radius === void 0 ? void 0 : (0,_core_utils_get_size_get_size_mjs__WEBPACK_IMPORTED_MODULE_5__.getRadius)(radius),
    "--tooltip-bg": color ? (0,_core_MantineProvider_color_functions_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_9__.getThemeColor)(color, theme) : void 0,
    "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
  }
}));
const TooltipFloating = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_15__.factory)((_props, ref) => {
  const props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_11__.useProps)("TooltipFloating", defaultProps, _props);
  const {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    zIndex,
    disabled,
    defaultOpened,
    variant,
    vars,
    portalProps,
    ...others
  } = props;
  const theme = (0,_core_MantineProvider_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_10__.useMantineTheme)();
  const getStyles = (0,_core_styles_api_use_styles_use_styles_mjs__WEBPACK_IMPORTED_MODULE_12__.useStyles)({
    name: "TooltipFloating",
    props,
    classes: _Tooltip_module_css_mjs__WEBPACK_IMPORTED_MODULE_18__["default"],
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver
  });
  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = (0,_use_floating_tooltip_mjs__WEBPACK_IMPORTED_MODULE_17__.useFloatingTooltip)({
    offset,
    position,
    defaultOpened
  });
  if (!(0,_core_utils_is_element_is_element_mjs__WEBPACK_IMPORTED_MODULE_3__.isElement)(children)) {
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useMergedRef)(boundaryRef, (0,_core_utils_get_ref_prop_get_ref_prop_mjs__WEBPACK_IMPORTED_MODULE_6__.getRefProp)(children), ref);
  const _childrenProps = children.props;
  const onMouseEnter = (event) => {
    _childrenProps.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };
  const onMouseLeave = (event) => {
    _childrenProps.onMouseLeave?.(event);
    setOpened(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Portal_OptionalPortal_mjs__WEBPACK_IMPORTED_MODULE_16__.OptionalPortal, { ...portalProps, withinPortal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _core_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_14__.Box,
      {
        ...others,
        ...getStyles("tooltip", {
          style: {
            ...(0,_core_Box_get_style_object_get_style_object_mjs__WEBPACK_IMPORTED_MODULE_13__.getStyleObject)(style, theme),
            zIndex,
            display: !disabled && opened ? "block" : "none",
            top: (y && Math.round(y)) ?? "",
            left: (x && Math.round(x)) ?? ""
          }
        }),
        variant,
        ref: floating,
        mod: { multiline },
        children: label
      }
    ) }),
    (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
      ..._childrenProps,
      [refProp]: targetRef,
      onMouseEnter,
      onMouseLeave
    })
  ] });
});
TooltipFloating.classes = _Tooltip_module_css_mjs__WEBPACK_IMPORTED_MODULE_18__["default"];
TooltipFloating.displayName = "@mantine/core/TooltipFloating";


//# sourceMappingURL=TooltipFloating.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFloatingTooltip: function() { return /* binding */ useFloatingTooltip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
'use client';



function useFloatingTooltip({
  offset,
  position,
  defaultOpened
}) {
  const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultOpened);
  const boundaryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const { x, y, elements, refs, update, placement } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.useFloating)({
    placement: position,
    middleware: [
      (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.shift)({
        crossAxis: true,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  });
  const horizontalOffset = placement.includes("right") ? offset : position.includes("left") ? offset * -1 : 0;
  const verticalOffset = placement.includes("bottom") ? offset : position.includes("top") ? offset * -1 : 0;
  const handleMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    ({ clientX, clientY }) => {
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX + horizontalOffset,
            top: clientY + verticalOffset,
            right: clientX,
            bottom: clientY
          };
        }
      });
    },
    [elements.reference]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
      boundary.addEventListener("mousemove", handleMouseMove);
      const parents = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors)(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener("scroll", update);
      });
      return () => {
        boundary.removeEventListener("mousemove", handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener("scroll", update);
        });
      };
    }
    return void 0;
  }, [elements.reference, refs.floating.current, update, handleMouseMove, opened]);
  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating: refs.setFloating };
}


//# sourceMappingURL=use-floating-tooltip.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipGroupProvider: function() { return /* binding */ TooltipGroupProvider; },
/* harmony export */   useTooltipGroupContext: function() { return /* binding */ useTooltipGroupContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


const TooltipGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
const TooltipGroupProvider = TooltipGroupContext.Provider;
const useTooltipGroupContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TooltipGroupContext);


//# sourceMappingURL=TooltipGroup.context.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipGroup: function() { return /* binding */ TooltipGroup; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/MantineProvider/use-props/use-props.mjs */ "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs");
/* harmony import */ var _TooltipGroup_context_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TooltipGroup.context.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs");
'use client';















const defaultProps = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.useProps)("TooltipGroup", defaultProps, props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TooltipGroup_context_mjs__WEBPACK_IMPORTED_MODULE_5__.TooltipGroupProvider, { value: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay }, children }) });
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";
TooltipGroup.extend = (c) => c;


//# sourceMappingURL=TooltipGroup.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTooltip: function() { return /* binding */ useTooltip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs");
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/hooks */ "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs");
/* harmony import */ var _Floating_use_floating_auto_update_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Floating/use-floating-auto-update.mjs */ "./node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs");
/* harmony import */ var _TooltipGroup_TooltipGroup_context_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TooltipGroup/TooltipGroup.context.mjs */ "./node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs");
'use client';







function getDefaultMiddlewares(middlewares) {
  if (middlewares === void 0) {
    return { shift: true, flip: true };
  }
  const result = { ...middlewares };
  if (middlewares.shift === void 0) {
    result.shift = true;
  }
  if (middlewares.flip === void 0) {
    result.flip = true;
  }
  return result;
}
function getTooltipMiddlewares(settings) {
  const middlewaresOptions = getDefaultMiddlewares(settings.middlewares);
  const middlewares = [(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.offset)(settings.offset)];
  if (middlewaresOptions.shift) {
    middlewares.push(
      (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.shift)(
        typeof middlewaresOptions.shift === "boolean" ? { padding: 8 } : { padding: 8, ...middlewaresOptions.shift }
      )
    );
  }
  if (middlewaresOptions.flip) {
    middlewares.push(
      typeof middlewaresOptions.flip === "boolean" ? (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.flip)() : (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.flip)(middlewaresOptions.flip)
    );
  }
  middlewares.push((0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.arrow)({ element: settings.arrowRef, padding: settings.arrowOffset }));
  if (middlewaresOptions.inline) {
    middlewares.push(
      typeof middlewaresOptions.inline === "boolean" ? (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.inline)() : (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.inline)(middlewaresOptions.inline)
    );
  } else if (settings.inline) {
    middlewares.push((0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__.inline)());
  }
  return middlewares;
}
function useTooltip(settings) {
  const [uncontrolledOpened, setUncontrolledOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(settings.defaultOpened);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = (0,_TooltipGroup_TooltipGroup_context_mjs__WEBPACK_IMPORTED_MODULE_6__.useTooltipGroupContext)();
  const uid = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__.useId)();
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (_opened) => {
      setUncontrolledOpened(_opened);
      if (_opened) {
        setCurrentId(uid);
      }
    },
    [uid]
  );
  const {
    x,
    y,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useFloating)({
    strategy: settings.strategy,
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: getTooltipMiddlewares(settings)
  });
  const { delay: groupDelay, currentId, setCurrentId } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDelayGroup)(context, { id: uid });
  const { getReferenceProps, getFloatingProps } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useInteractions)([
    (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useHover)(context, {
      enabled: settings.events?.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events?.touch
    }),
    (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useFocus)(context, { enabled: settings.events?.focus, visibleOnly: true }),
    (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useRole)(context, { role: "tooltip" }),
    // Cannot be used with controlled tooltip, page jumps
    (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDismiss)(context, { enabled: typeof settings.opened === "undefined" })
  ]);
  (0,_Floating_use_floating_auto_update_mjs__WEBPACK_IMPORTED_MODULE_5__.useFloatingAutoUpdate)({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useDidUpdate)(() => {
    settings.onPositionChange?.(placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference: refs.setReference,
    floating: refs.setFloating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}


//# sourceMappingURL=use-tooltip.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransitionProps: function() { return /* binding */ getTransitionProps; }
/* harmony export */ });
'use client';
const defaultTransition = {
  duration: 100,
  transition: "fade"
};
function getTransitionProps(transitionProps, componentTransition) {
  return { ...defaultTransition, ...componentTransition, ...transitionProps };
}


//# sourceMappingURL=get-transition-props.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultZIndex: function() { return /* binding */ getDefaultZIndex; }
/* harmony export */ });
'use client';
const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}


//# sourceMappingURL=get-default-z-index.mjs.map


/***/ }),

/***/ "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRefProp: function() { return /* binding */ getRefProp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function getRefProp(element) {
  const version = react__WEBPACK_IMPORTED_MODULE_0__.version;
  if (typeof react__WEBPACK_IMPORTED_MODULE_0__.version !== "string") {
    return element?.ref;
  }
  if (version.startsWith("18.")) {
    return element?.ref;
  }
  return element?.props?.ref;
}


//# sourceMappingURL=get-ref-prop.mjs.map


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

/***/ "./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElement: function() { return /* binding */ isElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
'use client';


function isElement(value) {
  if (Array.isArray(value) || value === null) {
    return false;
  }
  if (typeof value === "object") {
    if (value.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      return false;
    }
    return true;
  }
  return false;
}


//# sourceMappingURL=is-element.mjs.map


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

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusable: function() { return /* binding */ focusable; },
/* harmony export */   getTabIndex: function() { return /* binding */ getTabIndex; },
/* harmony export */   isFocusable: function() { return /* binding */ isFocusable; },
/* harmony export */   isTabbable: function() { return /* binding */ isTabbable; },
/* harmony export */   tabbable: function() { return /* binding */ tabbable; }
/* harmony export */ });
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/blocks/meu-bloco/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/meu-bloco/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Button/Button.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/RingProgress/RingProgress.mjs");
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ "./node_modules/@mantine/core/esm/components/Text/Text.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  function onChangeContent(newContent) {
    setAttributes({
      content: newContent
    });
  }
  function onChangeTextColor(newColor) {
    setAttributes({
      textColor: newColor
    });
  }
  function onChangeAlignment(newAlignment) {
    setAttributes({
      alignment: newAlignment
    });
  }
  function onChangeShowBorder(newValue) {
    setAttributes({
      showBorder: newValue
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.MantineProvider, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
        title: __("Configurações do Bloco", "eara"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextControl, {
          tagName: "div",
          className: "meu-bloco-conteudo",
          label: "Chart Label",
          value: content,
          onChange: onChangeContent
          //   placeholder={__("Digite seu texto aqui...", "eara")}
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: __("Cor do texto", "eara")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ColorPalette, {
            value: textColor,
            onChange: onChangeTextColor
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `meu-bloco-editor ${showBorder ? "com-borda" : ""}`,
      style: {
        textAlign: alignment,
        color: textColor
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RichText, {
        tagName: "div",
        className: "meu-bloco-conteudo",
        value: content,
        onChange: onChangeContent,
        placeholder: __("Digite seu texto aqui...", "eara")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.RingProgress, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
          size: "xs",
          ta: "center",
          children: content
        }),
        sections: [{
          value: 40,
          color: "#8fbf29"
        }, {
          value: 15,
          color: "#557218"
        }, {
          value: 15,
          color: "#283583"
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
        children: "Ol\xE1"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/meu-bloco/save.js":
/*!**************************************!*\
  !*** ./src/blocks/meu-bloco/save.js ***!
  \**************************************/
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
  !*** ./src/blocks/meu-bloco/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/meu-bloco/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/meu-bloco/save.js");
// blocks/meu-bloco/index.js

const {
  registerBlockType
} = wp.blocks;
const {
  RichText
} = wp.blockEditor;
// const { PanelBody, SelectControl, ToggleControl } = wp.components;
const {
  __
} = wp.i18n;


registerBlockType("eara/meu-bloco", {
  title: __("Chart", "eara"),
  description: __("Um bloco personalizado de exemplo", "eara"),
  category: "eara",
  icon: "chart-pie",
  keywords: [__("personalizado", "eara"), __("exemplo", "eara")],
  attributes: {
    content: {
      type: "string",
      default: "Texto padrão do bloco"
    },
    textColor: {
      type: "string",
      default: "#000000"
    },
    alignment: {
      type: "string",
      default: "left"
    },
    showBorder: {
      type: "boolean",
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map