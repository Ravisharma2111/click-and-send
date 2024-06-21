"use strict";
exports.id = 8936;
exports.ids = [8936];
exports.modules = {

/***/ 8936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3718);
/* eslint-disable react/display-name */ 


// @mui

//

// ----------------------------------------------------------------------
const TextMaxLine = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ asLink, variant = "body1", line = 2, persistent = false, children, sx, ...other }, ref)=>{
    const { lineHeight } = (0,_useTypography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(variant);
    const styles = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
        ...persistent && {
            height: lineHeight * line
        },
        ...sx
    };
    if (asLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            color: "inherit",
            ref: ref,
            variant: variant,
            sx: {
                ...styles
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        ref: ref,
        variant: variant,
        sx: {
            ...styles
        },
        ...other,
        children: children
    });
});
TextMaxLine.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    asLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    line: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    persistent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2"
    ])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextMaxLine);


/***/ }),

/***/ 3718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useTypography)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2076);
/* harmony import */ var _theme_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2074);
// @mui

// hooks

// theme

// ----------------------------------------------------------------------
function useTypography(variant) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const breakpoints = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__/* .useWidth */ .z)();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = (0,_theme_typography__WEBPACK_IMPORTED_MODULE_2__/* .remToPx */ .cv)(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const { fontWeight, letterSpacing } = theme.typography[variant];
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
}


/***/ })

};
;