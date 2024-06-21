"use strict";
exports.id = 6490;
exports.ids = [6490];
exports.modules = {

/***/ 6922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable react/display-name */ 


// next

// @mui


// ----------------------------------------------------------------------
const Logo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ disabledLink = false, sx, ...other }, ref)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );
    const logo = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        ref: ref,
        component: "div",
        sx: {
            width: 40,
            height: 40,
            display: "inline-flex",
            ...sx
        },
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            viewBox: "0 0 512 512",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                            id: "BG1",
                            x1: "100%",
                            x2: "50%",
                            y1: "9.946%",
                            y2: "50%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "0%",
                                    stopColor: PRIMARY_DARK
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "100%",
                                    stopColor: PRIMARY_MAIN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                            id: "BG2",
                            x1: "50%",
                            x2: "50%",
                            y1: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "0%",
                                    stopColor: PRIMARY_LIGHT
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "100%",
                                    stopColor: PRIMARY_MAIN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                            id: "BG3",
                            x1: "50%",
                            x2: "50%",
                            y1: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "0%",
                                    stopColor: PRIMARY_LIGHT
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "100%",
                                    stopColor: PRIMARY_MAIN
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    fill: PRIMARY_MAIN,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "url(#BG1)",
                            d: "M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "url(#BG2)",
                            d: "M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "url(#BG3)",
                            d: "M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
                        })
                    ]
                })
            ]
        })
    });
    if (disabledLink) {
        return logo;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
        href: "/",
        sx: {
            display: "contents"
        },
        children: logo
    });
});
Logo.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    disabledLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 9797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9964);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9530);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// next

// @mui

// locales
// auth
// import { RoleBasedGuard } from "@/auth";
//



// import { useAuthContext } from "@/auth/useAuthContext";
// ----------------------------------------------------------------------
function NavItems({ item, depth, open, active, isExternalLink, ...other }, ref) {
    const { title, path, icon, info, children, disabled, caption, roles } = item;
    // const { user } = useAuthContext();
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledItem */ .MZ, {
        ref: ref,
        open: open,
        depth: depth,
        active: active,
        disabled: disabled,
        ...other,
        children: [
            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledIcon */ .xL, {
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
                primary: `${title}`,
                primaryTypographyProps: {
                    noWrap: true,
                    component: "span",
                    variant: active ? "subtitle2" : "body2"
                }
            }),
            info && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                component: "span",
                sx: {
                    ml: 1,
                    lineHeight: 0
                },
                children: info
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                title: `${caption}`,
                arrow: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    component: "span",
                    sx: {
                        ml: 0.5,
                        lineHeight: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        icon: "eva:info-outline",
                        width: 16
                    })
                })
            }),
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: subItem ? "eva:chevron-right-fill" : "eva:chevron-down-fill",
                width: 16,
                sx: {
                    ml: 0.5,
                    flexShrink: 0
                }
            })
        ]
    });
    const renderItem = ()=>{
        // ExternalLink
        if (isExternalLink) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
        // Default
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),
            href: path,
            underline: "none",
            children: renderContent
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            " ",
            renderItem(),
            " "
        ]
    });
}
const NavItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6__.forwardRef(NavItems);
NavItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8245);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9530);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavItem__WEBPACK_IMPORTED_MODULE_6__]);
_NavItem__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// next

// hooks

//


// import { useAuthContext } from "@/auth/useAuthContext";
// ----------------------------------------------------------------------
NavList.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    hasChild: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavList({ data, depth, hasChild }) {
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { pathname } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // const { user } = useAuthContext();
    const { active, isExternalLink } = (0,_hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(data.path);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const appBarEl = Array.from(document.querySelectorAll(".MuiAppBar-root"));
        // Reset styles when hover
        const styles = ()=>{
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach((elem)=>{
                elem.style.padding = "";
            });
        };
        if (open) {
            styles();
        } else {
            styles();
        }
    }, [
        open
    ]);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ref: navRef,
                item: data,
                depth: depth,
                open: open,
                active: active,
                isExternalLink: isExternalLink,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose
            }),
            hasChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledPopover */ .uv, {
                open: open,
                anchorEl: navRef.current,
                anchorOrigin: depth === 1 ? {
                    vertical: "bottom",
                    horizontal: "left"
                } : {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: depth === 1 ? {
                    vertical: "top",
                    horizontal: "left"
                } : {
                    vertical: "center",
                    horizontal: "left"
                },
                PaperProps: {
                    onMouseEnter: handleOpen,
                    onMouseLeave: handleClose
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavSubList, {
                    data: data.children,
                    depth: depth
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
NavSubList.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
function NavSubList({ data, depth }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((list)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children
            }, list.title + list.path);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7361:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3990);
/* harmony import */ var _NavList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavList__WEBPACK_IMPORTED_MODULE_5__]);
_NavList__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

// utils

//

// ----------------------------------------------------------------------
NavSectionHorizontal.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
function NavSectionHorizontal({ data, sx, ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        spacing: 2,
        sx: {
            mx: "auto",
            ..._utils_cssStyles__WEBPACK_IMPORTED_MODULE_4__/* .hideScrollbarY */ .U3,
            ...sx
        },
        ...other,
        children: data.map((group)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Items, {
                items: group.items
            }, group.subheader))
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(NavSectionHorizontal))));
// ----------------------------------------------------------------------
Items.propTypes = {
    items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
function Items({ items }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: items && items?.length && items.map((list)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                data: list,
                depth: 1,
                hasChild: !!list.children
            }, list.title + list.path);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9818:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _NavSectionHorizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavSectionHorizontal__WEBPACK_IMPORTED_MODULE_0__]);
_NavSectionHorizontal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MZ: () => (/* binding */ StyledItem),
/* harmony export */   uv: () => (/* binding */ StyledPopover),
/* harmony export */   xL: () => (/* binding */ StyledIcon)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3990);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5370);
// @mui


// utils

// config

// ----------------------------------------------------------------------
const StyledItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "open"
})(({ active, disabled, open, depth, theme })=>{
    const isLight = theme.palette.mode === "light";
    const subItem = depth !== 1;
    const activeStyle = {
        color: theme.palette.primary.main,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        ...!isLight && {
            color: theme.palette.primary.light
        }
    };
    const activeSubStyle = {
        color: theme.palette.text.primary,
        backgroundColor: "transparent"
    };
    const hoverStyle = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover
    };
    return {
        flexShrink: 0,
        display: "inline-flex",
        textTransform: "capitalize",
        padding: theme.spacing(0, 0.75),
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        height: _utils_config_global__WEBPACK_IMPORTED_MODULE_3__/* .NAV */ .w$.H_DASHBOARD_ITEM_HORIZONTAL,
        "&:hover": hoverStyle,
        // Sub item
        ...subItem && {
            width: "100%",
            margin: 0,
            paddingRight: 0,
            paddingLeft: theme.spacing(1)
        },
        // Active item
        ...active && {
            ...activeStyle,
            "&:hover": {
                ...activeStyle
            }
        },
        // Active sub item
        ...subItem && active && {
            ...activeSubStyle,
            "&:hover": {
                ...activeSubStyle
            }
        },
        // Open
        ...open && !active && hoverStyle,
        // Disabled
        ...disabled && {
            "&.Mui-disabled": {
                opacity: 0.64
            }
        }
    };
});
// ----------------------------------------------------------------------
const StyledIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon)({
    marginRight: 8,
    flexShrink: 0,
    width: _utils_config_global__WEBPACK_IMPORTED_MODULE_3__/* .ICON */ .Wm.NAV_ITEM_HORIZONTAL,
    height: _utils_config_global__WEBPACK_IMPORTED_MODULE_3__/* .ICON */ .Wm.NAV_ITEM_HORIZONTAL
});
// ----------------------------------------------------------------------
const StyledPopover = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Popover)(({ theme })=>({
        pointerEvents: "none",
        "& .MuiPopover-paper": {
            width: 160,
            pointerEvents: "auto",
            padding: theme.spacing(1),
            marginTop: theme.spacing(0.5),
            boxShadow: theme.customShadows.dropdown,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__/* .bgBlur */ .Ls)({
                color: theme.palette.background.default
            })
        }
    }));


/***/ }),

/***/ 9527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mr: () => (/* reexport safe */ _vertical__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _mini__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(884);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mini__WEBPACK_IMPORTED_MODULE_0__, _vertical__WEBPACK_IMPORTED_MODULE_1__, _horizontal__WEBPACK_IMPORTED_MODULE_2__]);
([_mini__WEBPACK_IMPORTED_MODULE_0__, _vertical__WEBPACK_IMPORTED_MODULE_1__, _horizontal__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8355);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify__WEBPACK_IMPORTED_MODULE_5__]);
_iconify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react/display-name */ 


// next

// @mui

// locales
// import { useLocales } from '../../../locales';
// auth
// import RoleBasedGuard from '../../../auth/RoleBasedGuard';
//


// ----------------------------------------------------------------------
const NavItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ item, depth, open, active, isExternalLink, ...other }, ref)=>{
    // const { translate } = useLocales();
    const { title, path, icon, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledItem */ .MZ, {
        ref: ref,
        open: open,
        depth: depth,
        active: active,
        disabled: disabled,
        ...other,
        children: [
            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledIcon */ .xL, {
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                primary: `${title}`,
                primaryTypographyProps: {
                    noWrap: true,
                    sx: {
                        width: 72,
                        fontSize: 10,
                        lineHeight: "16px",
                        textAlign: "center",
                        ...active && {
                            fontWeight: "fontWeightMedium"
                        },
                        ...subItem && {
                            fontSize: 14,
                            width: "auto",
                            textAlign: "left"
                        }
                    }
                }
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                title: `${caption}`,
                arrow: true,
                placement: "right",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: "eva:info-outline",
                    width: 16,
                    sx: {
                        top: 11,
                        left: 6,
                        position: "absolute"
                    }
                })
            }),
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                width: 16,
                icon: "eva:chevron-right-fill",
                sx: {
                    top: 11,
                    right: 6,
                    position: "absolute"
                }
            })
        ]
    });
    const renderItem = ()=>{
        // ExternalLink
        if (isExternalLink) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
        // Default
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Link, {
            component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
            href: path,
            underline: "none",
            children: renderContent
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            " ",
            renderItem(),
            " "
        ]
    });
});
NavItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8245);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2552);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavItem__WEBPACK_IMPORTED_MODULE_6__]);
_NavItem__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// next

// hooks

//


// ----------------------------------------------------------------------
NavList.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    hasChild: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavList({ data, depth, hasChild }) {
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { active, isExternalLink } = (0,_hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(data.path, false);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const appBarEl = Array.from(document.querySelectorAll(".MuiAppBar-root"));
        // Reset styles when hover
        const styles = ()=>{
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach((elem)=>{
                elem.style.padding = "";
            });
        };
        if (open) {
            styles();
        } else {
            styles();
        }
    }, [
        open
    ]);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ref: navRef,
                item: data,
                depth: depth,
                open: open,
                active: active,
                isExternalLink: isExternalLink,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose
            }),
            hasChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledPopover */ .uv, {
                open: open,
                anchorEl: navRef.current,
                anchorOrigin: {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "center",
                    horizontal: "left"
                },
                PaperProps: {
                    onMouseEnter: handleOpen,
                    onMouseLeave: handleClose
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavSubList, {
                    data: data.children,
                    depth: depth
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
NavSubList.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
function NavSubList({ data, depth }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children
            }, list.title + list.path))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8576:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavList__WEBPACK_IMPORTED_MODULE_4__]);
_NavList__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
NavSectionMini.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
function NavSectionMini({ data, sx, ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        spacing: 0.5,
        alignItems: "center",
        sx: {
            px: 0.75,
            ...sx
        },
        ...other,
        children: data.map((group, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Items, {
                items: group.items,
                isLastGroup: index + 1 === data.length
            }, group.subheader))
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(NavSectionMini))));
// ----------------------------------------------------------------------
Items.propTypes = {
    items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    isLastGroup: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function Items({ items, isLastGroup }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            items.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    data: list,
                    depth: 1,
                    hasChild: !!list.children
                }, list.title + list.path)),
            !isLastGroup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    width: 24,
                    height: "1px",
                    bgcolor: "divider",
                    my: "8px !important"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 884:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _NavSectionMini__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8576);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavSectionMini__WEBPACK_IMPORTED_MODULE_0__]);
_NavSectionMini__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MZ: () => (/* binding */ StyledItem),
/* harmony export */   uv: () => (/* binding */ StyledPopover),
/* harmony export */   xL: () => (/* binding */ StyledIcon)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5370);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3990);
// @mui


// utils


// ----------------------------------------------------------------------
const StyledItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "open"
})(({ active, disabled, open, depth, theme })=>{
    const isLight = theme.palette.mode === "light";
    const subItem = depth !== 1;
    const activeStyle = {
        color: theme.palette.primary.main,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        ...!isLight && {
            color: theme.palette.primary.light
        }
    };
    const activeSubStyle = {
        color: theme.palette.text.primary,
        backgroundColor: "transparent"
    };
    const hoverStyle = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover
    };
    return {
        flexDirection: "column",
        textTransform: "capitalize",
        padding: theme.spacing(1, 0, 0.5, 0),
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        "&:hover": hoverStyle,
        // Sub item
        ...subItem && {
            flexDirection: "row",
            padding: theme.spacing(1)
        },
        // Active item
        ...active && {
            ...activeStyle,
            "&:hover": {
                ...activeStyle
            }
        },
        // Active sub item
        ...subItem && active && {
            ...activeSubStyle,
            "&:hover": {
                ...activeSubStyle
            }
        },
        // Open
        ...open && !active && hoverStyle,
        // Disabled
        ...disabled && {
            "&.Mui-disabled": {
                opacity: 0.64
            }
        }
    };
});
// ----------------------------------------------------------------------
const StyledIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon)({
    marginRight: 0,
    marginBottom: 4,
    width: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .ICON */ .Wm.NAV_ITEM_MINI,
    height: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .ICON */ .Wm.NAV_ITEM_MINI
});
// ----------------------------------------------------------------------
const StyledPopover = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Popover)(({ theme })=>({
        pointerEvents: "none",
        "& .MuiPopover-paper": {
            width: 160,
            pointerEvents: "auto",
            padding: theme.spacing(1),
            marginTop: theme.spacing(0.5),
            boxShadow: theme.customShadows.dropdown,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__/* .bgBlur */ .Ls)({
                color: theme.palette.background.default
            })
        }
    }));


/***/ }),

/***/ 8172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8355);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify__WEBPACK_IMPORTED_MODULE_4__]);
_iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// next

// @mui

// locales
// import { useLocales } from '../../../locales';
// auth
// import RoleBasedGuard from '../../../auth/RoleBasedGuard';
//

//

// ----------------------------------------------------------------------
NavItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavItem({ item, depth, open, active, isExternalLink, ...other }) {
    // const { translate } = useLocales();
    const { title, path, icon, info, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledItem */ .MZ, {
        depth: depth,
        active: active,
        disabled: disabled,
        caption: !!caption,
        ...other,
        children: [
            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledIcon */ .xL, {
                children: icon
            }),
            subItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledIcon */ .xL, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledDotIcon */ .Cr, {
                    active: active && subItem
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
                primary: `${title}`,
                secondary: caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    title: `${caption}`,
                    placement: "top-start",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: `${caption}`
                    })
                }),
                primaryTypographyProps: {
                    noWrap: true,
                    component: "span",
                    variant: active ? "subtitle2" : "body2"
                },
                secondaryTypographyProps: {
                    noWrap: true,
                    variant: "caption"
                }
            }),
            info && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                component: "span",
                sx: {
                    lineHeight: 0
                },
                children: info
            }),
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                width: 16,
                icon: open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill",
                sx: {
                    ml: 1,
                    flexShrink: 0
                }
            })
        ]
    });
    const renderItem = ()=>{
        // ExternalLink
        if (isExternalLink) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
        // Has child
        if (children) {
            return renderContent;
        }
        // Default
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),
            href: path,
            underline: "none",
            children: renderContent
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            " ",
            renderItem(),
            " "
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8245);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavItem__WEBPACK_IMPORTED_MODULE_6__]);
_NavItem__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// next

// @mui

// hooks

//

// ----------------------------------------------------------------------
NavList.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    hasChild: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavList({ data, depth, hasChild }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { active, isExternalLink } = (0,_hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(data.path, false);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(active);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!active) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleToggle = ()=>{
        setOpen(!open);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                item: data,
                depth: depth,
                open: open,
                active: active,
                isExternalLink: isExternalLink,
                onClick: handleToggle
            }),
            hasChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
                in: open,
                unmountOnExit: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavSubList, {
                    data: data.children,
                    depth: depth
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
NavSubList.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
function NavSubList({ data, depth }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children
            }, list.title + list.path))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavSectionVertical)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6231);
/* harmony import */ var _NavList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavList__WEBPACK_IMPORTED_MODULE_4__]);
_NavList__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

// locales
// import { useLocales } from '../../../locales';
//


// ----------------------------------------------------------------------
NavSectionVertical.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
function NavSectionVertical({ data, sx, ...other }) {
    // const { translate } = useLocales();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        sx: sx,
        ...other,
        children: data.map((group)=>{
            const key = group.subheader || group.items[0].title;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                disablePadding: true,
                sx: {
                    px: 2
                },
                children: group.items.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: list,
                        depth: 1,
                        hasChild: !!list.children
                    }, list.title + list.path))
            }, key);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _NavSectionVertical__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _NavSectionVertical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7963);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavSectionVertical__WEBPACK_IMPORTED_MODULE_0__]);
_NavSectionVertical__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ StyledDotIcon),
/* harmony export */   MZ: () => (/* binding */ StyledItem),
/* harmony export */   xL: () => (/* binding */ StyledIcon)
/* harmony export */ });
/* unused harmony export StyledSubheader */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5370);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3990);
// @mui


// config


// ----------------------------------------------------------------------
const StyledItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "caption"
})(({ active, disabled, depth, caption, theme })=>{
    const isLight = theme.palette.mode === "light";
    const subItem = depth !== 1;
    const activeStyle = {
        color: theme.palette.primary.main,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        ...!isLight && {
            color: theme.palette.primary.light
        }
    };
    const activeSubStyle = {
        color: theme.palette.text.primary,
        backgroundColor: "transparent"
    };
    return {
        position: "relative",
        textTransform: "capitalize",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1.5),
        marginBottom: theme.spacing(0.5),
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        height: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .NAV */ .w$.H_DASHBOARD_ITEM,
        // Sub item
        ...subItem && {
            height: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .NAV */ .w$.H_DASHBOARD_ITEM_SUB,
            ...depth > 2 && {
                paddingLeft: theme.spacing(depth)
            },
            ...caption && {
                height: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .NAV */ .w$.H_DASHBOARD_ITEM
            }
        },
        // Active item
        ...active && {
            ...activeStyle,
            "&:hover": {
                ...activeStyle
            }
        },
        // Active sub item
        ...subItem && active && {
            ...activeSubStyle,
            "&:hover": {
                ...activeSubStyle
            }
        },
        // Disabled
        ...disabled && {
            "&.Mui-disabled": {
                opacity: 0.64
            }
        }
    };
});
// ----------------------------------------------------------------------
const StyledIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .ICON */ .Wm.NAV_ITEM,
    height: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .ICON */ .Wm.NAV_ITEM
});
// ----------------------------------------------------------------------
const StyledDotIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("span", {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, theme })=>({
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter
        }),
        ...active && {
            transform: "scale(2)",
            backgroundColor: theme.palette.primary.main
        }
    }));
// ----------------------------------------------------------------------
const StyledSubheader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListSubheader)(({ theme })=>({
        ...theme.typography.overline,
        fontSize: 11,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        color: theme.palette.text.secondary
    }));


/***/ }),

/***/ 1943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ scrollbar_Scrollbar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "simplebar-react"
var external_simplebar_react_ = __webpack_require__(4172);
var external_simplebar_react_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_react_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/components/scrollbar/styles.js

// @mui

// ----------------------------------------------------------------------
const StyledRootScrollbar = (0,styles_.styled)("div")(()=>({
        flexGrow: 1,
        height: "100%",
        overflow: "hidden"
    }));
const StyledScrollbar = (0,styles_.styled)((external_simplebar_react_default()))(({ theme })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&:before": {
                backgroundColor: (0,styles_.alpha)(theme.palette.grey[600], 0.48)
            },
            "&.simplebar-visible:before": {
                opacity: 1
            }
        },
        "& .simplebar-track.simplebar-vertical": {
            width: 10
        },
        "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
            height: 6
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    }));

;// CONCATENATED MODULE: ./src/components/scrollbar/Scrollbar.js



// @mui

//

// ----------------------------------------------------------------------
Scrollbar.propTypes = {
    sx: (external_prop_types_default()).object,
    children: (external_prop_types_default()).node
};
function Scrollbar({ children, sx, ...other }) {
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
            sx: {
                overflowX: "auto",
                ...sx
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(StyledRootScrollbar, {
        children: /*#__PURE__*/ jsx_runtime.jsx(StyledScrollbar, {
            timeout: 500,
            clickOnTrack: false,
            sx: sx,
            ...other,
            children: children
        })
    });
}
/* harmony default export */ const scrollbar_Scrollbar = (/*#__PURE__*/(0,external_react_.memo)(Scrollbar));


/***/ }),

/***/ 6490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* reexport safe */ _primaryWeb__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _primaryWeb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7904);
/* harmony import */ var _secondaryWeb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_primaryWeb__WEBPACK_IMPORTED_MODULE_0__, _secondaryWeb__WEBPACK_IMPORTED_MODULE_1__]);
([_primaryWeb__WEBPACK_IMPORTED_MODULE_0__, _secondaryWeb__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3014:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9226);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6872);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const TopBar = ()=>{
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            background: "#555555",
            color: "#fff"
        },
        children: /*#__PURE__*/ _jsx(Container, {
            maxWidth: true,
            children: /*#__PURE__*/ _jsxs(Toolbar, {
                sx: {
                    minHeight: "52px !important",
                    px: "6rem !important",
                    gap: {
                        md: 0,
                        sm: 1,
                        xs: 1
                    },
                    justifyContent: {
                        lg: "space-between",
                        md: "space-between",
                        sm: "center",
                        xs: "center"
                    },
                    display: {
                        md: "flex !important",
                        sm: "grid !important",
                        xs: "grid !important"
                    },
                    py: {
                        md: 0,
                        sm: 1,
                        xs: 1
                    }
                },
                children: [
                    /*#__PURE__*/ _jsx(Box, {
                        children: /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            spacing: 3,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ _jsxs(Stack, {
                                    direction: "row",
                                    spacing: 0.5,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ _jsx(Phone, {
                                            sx: {
                                                fontSize: "18px"
                                            }
                                        }),
                                        " ",
                                        /*#__PURE__*/ _jsx(Typography, {
                                            sx: {
                                                fontSize: "15px"
                                            },
                                            children: "0123456789"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Stack, {
                                    direction: "row",
                                    spacing: 0.5,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ _jsx(Email, {
                                            sx: {
                                                fontSize: "18px"
                                            }
                                        }),
                                        " ",
                                        /*#__PURE__*/ _jsx(Typography, {
                                            sx: {
                                                fontSize: "15px"
                                            },
                                            children: "0123456789"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Box, {
                        children: /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            spacing: 1.5,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/fb-icon.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/ins-logo.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/link-icon.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/twitter-icon.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/you-icon.jpg"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TopBar)));


/***/ }),

/***/ 7904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1564);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(392);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9881);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9852);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9479);
/* harmony import */ var _header_topbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3014);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_2__, _footer__WEBPACK_IMPORTED_MODULE_3__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_7__]);
([_header__WEBPACK_IMPORTED_MODULE_2__, _footer__WEBPACK_IMPORTED_MODULE_3__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const PrimaryWebLayout = (props)=>{
    const { children } = props;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State for loading status
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Simulating data loading delay with setTimeout
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 2000);
        // Cleanup function to clear the timer
        return ()=>clearTimeout(timer);
    }, []);
    const isMobile = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)("down", "md");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {}),
                " "
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    id: "back-to-top-anchor"
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_scrollTop__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    ...props,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Fab, {
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5___default()), {})
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrimaryWebLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ScrollTop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4156);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);





function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default()({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Fade, {
        in: trigger,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
ScrollTop.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element).isRequired,
    window: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};


/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/typography/typoStyle.js

const typoStyle_TypoHeading = (0,material_.styled)(material_.Typography)(({ theme, isPositionLeft = false })=>({
        // fontFamily: "Poppins-Semi-Bold",
        textAlign: isPositionLeft ? "left" : "center",
        position: "relative",
        paddingBottom: "10px",
        // "&::before": {
        //     content: '""',
        //     position: "absolute",
        //     width: "120px",
        //     height: "1px",
        //     bottom: 0,
        //     left: isPositionLeft ? 'calc(10% - 50px)' : 'calc(50% - 60px)',
        //     background: theme.palette.divider,
        //     display: "block",
        //     marginTop: 1
        // },
        "&::after": {
            content: '""',
            position: "relative",
            width: "40px",
            height: "3px",
            bottom: 0,
            left: isPositionLeft ? "0px" : "calc(50% - 20px)",
            background: theme.palette.primary.main,
            display: "block",
            marginTop: "0.5rem"
        }
    }));
const typoStyle_TypoTitle = (0,material_.styled)(material_.Typography)(({ theme })=>({
        // fontFamily: "Poppins-Semi-Bold",
        textAlign: "center"
    }));
const typoStyle_TypoParagraph = (0,material_.styled)(material_.Typography)(({ theme })=>({
        // fontFamily: "Poppins-Regular !important",
        textAlign: "center"
    }));

;// CONCATENATED MODULE: ./src/components/typography/heading.js




const heading_Heading = ({ heading, sx, className, isPositionLeft, ...rest })=>{
    return /*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(Box, {
            children: /*#__PURE__*/ _jsx(TypoHeading, {
                isPositionLeft: isPositionLeft,
                ...rest,
                sx: sx,
                className: className,
                component: "h3",
                variant: "h3",
                children: heading
            })
        })
    });
};
/* harmony default export */ const heading = ((/* unused pure expression or super */ null && (heading_Heading)));

;// CONCATENATED MODULE: ./src/components/typography/title.js



const Title = ({ title, sx, className, ...rest })=>{
    return /*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(TypoTitle, {
            ...rest,
            sx: sx,
            className: className,
            component: "h5",
            variant: "h5",
            children: title
        })
    });
};
/* harmony default export */ const title = ((/* unused pure expression or super */ null && (Title)));

;// CONCATENATED MODULE: ./src/components/typography/Paragraph.js



const Paragraph = ({ text, sx, className, ...rest })=>{
    return /*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(TypoParagraph, {
            ...rest,
            sx: sx,
            className: className,
            component: "p",
            variant: "body2",
            children: text
        })
    });
};
/* harmony default export */ const typography_Paragraph = ((/* unused pure expression or super */ null && (Paragraph)));

// EXTERNAL MODULE: external "@mui/icons-material/FormatQuote"
var FormatQuote_ = __webpack_require__(4311);
;// CONCATENATED MODULE: ./src/components/typography/testimonialParagraph.js




const TestimonialParagraph = ({ quoteColor, text, sx, className, ...rest })=>{
    return /*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsxs(TypoParagraph, {
            ...rest,
            sx: sx,
            className: className,
            component: "p",
            variant: "body2",
            children: [
                /*#__PURE__*/ _jsx(FormatQuoteIcon, {
                    color: quoteColor,
                    sx: {
                        transform: "rotate(180deg)",
                        position: "relative",
                        top: "3px"
                    }
                }),
                text,
                /*#__PURE__*/ _jsx(FormatQuoteIcon, {
                    color: quoteColor,
                    sx: {
                        position: "relative",
                        top: "10px"
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const testimonialParagraph = ((/* unused pure expression or super */ null && (TestimonialParagraph)));

;// CONCATENATED MODULE: ./src/components/typography/index.js





// EXTERNAL MODULE: external "@mui/icons-material/Mail"
var Mail_ = __webpack_require__(9026);
// EXTERNAL MODULE: external "@mui/icons-material/Call"
var Call_ = __webpack_require__(2081);
// EXTERNAL MODULE: external "@mui/icons-material/LocationOn"
var LocationOn_ = __webpack_require__(2625);
;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/footerStyle.js

const footerStyle_StyledListItemText = (0,material_.styled)(material_.ListItemText)(({ theme })=>({
        "& .MuiTypography-root": {
            fontSize: "14px",
            color: "#666666"
        }
    }));

;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/sectionFour.js







const sectionFour_SectionFour = ()=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Heading, {
                heading: "Contact Us",
                isPositionLeft: true,
                sx: {
                    fontSize: "20px!important",
                    textAlign: "left",
                    px: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0
                    },
                    color: "#555555"
                }
            }),
            /*#__PURE__*/ _jsxs(List, {
                children: [
                    /*#__PURE__*/ _jsxs(ListItemButton, {
                        component: "a",
                        href: "#",
                        children: [
                            /*#__PURE__*/ _jsx(ListItemIcon, {
                                children: /*#__PURE__*/ _jsx(LocationOnIcon, {
                                    sx: {
                                        color: "#666666"
                                    }
                                })
                            }),
                            /*#__PURE__*/ _jsx(StyledListItemText, {
                                primary: "Lorem ipsum door sit amet, consectetur 12345"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(ListItemButton, {
                        component: "a",
                        href: "#",
                        children: [
                            /*#__PURE__*/ _jsx(ListItemIcon, {
                                children: /*#__PURE__*/ _jsx(CallIcon, {
                                    sx: {
                                        color: "#666666"
                                    }
                                })
                            }),
                            /*#__PURE__*/ _jsx(StyledListItemText, {
                                primary: "123456892"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(ListItemButton, {
                        component: "a",
                        href: "#",
                        children: [
                            /*#__PURE__*/ _jsx(ListItemIcon, {
                                children: /*#__PURE__*/ _jsx(Mail, {
                                    sx: {
                                        color: "#666666"
                                    }
                                })
                            }),
                            /*#__PURE__*/ _jsx(StyledListItemText, {
                                primary: "info@gamil.com"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sectionFour = ((/* unused pure expression or super */ null && (sectionFour_SectionFour)));

;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/sectionOne.js



const sectionOne_SectionOne = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Box, {
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    component: "img",
                    src: "/assets/images/logo/logo.jpg"
                }),
                /*#__PURE__*/ _jsx(List, {
                    sx: {
                        mt: 1
                    },
                    children: /*#__PURE__*/ _jsx(StyledListItemText, {
                        primary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt labore et dolore magna aliqua."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sectionOne = ((/* unused pure expression or super */ null && (sectionOne_SectionOne)));

;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/sectionThree.js





const sectionThree_SectionThree = ()=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Heading, {
                heading: "Links",
                isPositionLeft: true,
                sx: {
                    fontSize: "20px!important",
                    textAlign: "left",
                    px: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0
                    },
                    color: "#555555"
                }
            }),
            /*#__PURE__*/ _jsxs(List, {
                children: [
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "Blogs"
                        })
                    }),
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "News"
                        })
                    }),
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "Testimonials"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sectionThree = ((/* unused pure expression or super */ null && (sectionThree_SectionThree)));

;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/sectionTwo.js




const sectionTwo_SectionTwo = ()=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Heading, {
                heading: "Useful Links",
                isPositionLeft: true,
                sx: {
                    fontSize: "20px!important",
                    textAlign: "left",
                    px: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0
                    },
                    color: "#555555!important"
                }
            }),
            /*#__PURE__*/ _jsxs(List, {
                children: [
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "Jobs"
                        })
                    }),
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "Help"
                        })
                    }),
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "Faq"
                        })
                    }),
                    /*#__PURE__*/ _jsx(ListItemButton, {
                        component: "a",
                        href: "#simple-list",
                        children: /*#__PURE__*/ _jsx(StyledListItemText, {
                            primary: "Contact us"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sectionTwo = ((/* unused pure expression or super */ null && (sectionTwo_SectionTwo)));

;// CONCATENATED MODULE: ./src/components/button/subscribeButton.js



const subscribeButton_SubscribeButton = ()=>{
    return /*#__PURE__*/ _jsx(TextField, {
        fullWidth: true,
        InputProps: {
            endAdornment: /*#__PURE__*/ _jsx(InputAdornment, {
                position: "end",
                sx: {
                    background: (theme)=>theme.palette.common.white
                },
                children: /*#__PURE__*/ _jsx(Button, {
                    fullWidth: true,
                    variant: "contained",
                    color: "primary",
                    size: "medium",
                    sx: {
                        "&.MuiButton-root": {
                            borderRadius: "30px",
                            width: {
                                md: "150px !important",
                                sm: "100px !important",
                                xs: "100px !important"
                            },
                            padding: "8px"
                        }
                    },
                    children: "Sent"
                })
            })
        },
        size: "small",
        color: "primary",
        sx: {
            "&.MuiTextField-root": {
                background: (theme)=>theme.palette.common.white,
                borderRadius: "30px !important",
                fontSize: "14px !important",
                width: {
                    md: "500px",
                    sm: "100%",
                    xs: "100%"
                }
            },
            "& .MuiOutlinedInput-root": {
                paddingRight: "2px !important",
                overflow: "hidden"
            },
            "& .MuiOutlinedInput-input": {
                color: (theme)=>theme.palette.common.black,
                background: (theme)=>theme.palette.common.white,
                borderRadius: "30px 0px 0px 30px !important",
                paddingRight: "12px !important",
                padding: "12px",
                fontSize: "14px !important"
            },
            "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "30px !important"
            }
        },
        id: "outlined-basic",
        variant: "outlined",
        placeholder: "Enter your email address"
    });
};
/* harmony default export */ const subscribeButton = ((/* unused pure expression or super */ null && (subscribeButton_SubscribeButton)));

;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/subscribe.js



const subscribe_Subscribe = ()=>{
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            background: (theme)=>theme.palette.primary.main
        },
        children: /*#__PURE__*/ _jsx(Container, {
            children: /*#__PURE__*/ _jsx(CardContent, {
                sx: {
                    paddingBottom: "24px!imporatant"
                },
                children: /*#__PURE__*/ _jsxs(Stack, {
                    justifyContent: "space-between",
                    direction: {
                        lg: "row",
                        md: "row",
                        sm: "column",
                        xs: "column"
                    },
                    alignItems: "center",
                    spacing: {
                        md: 0,
                        sm: 2,
                        xs: 2
                    },
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            children: /*#__PURE__*/ _jsx(Typography, {
                                variant: "h4",
                                sx: {
                                    color: (theme)=>theme.palette.common.white
                                },
                                children: "Subscribe Our Newsletter"
                            })
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            children: /*#__PURE__*/ _jsx(SubscribeButton, {})
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const subscribe = ((/* unused pure expression or super */ null && (subscribe_Subscribe)));

;// CONCATENATED MODULE: ./src/layout/secondaryWeb/footer/index.js







const Footer = ()=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Subscribe, {}),
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    backgroundColor: (theme)=>theme.palette.grey[200],
                    color: (theme)=>theme.palette.common.white
                },
                children: [
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsx(Container, {
                            children: /*#__PURE__*/ _jsxs(Grid, {
                                container: true,
                                spacing: {
                                    lg: 8,
                                    md: 8,
                                    sm: 3,
                                    xs: 3
                                },
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        lg: 3,
                                        md: 3,
                                        sm: 12,
                                        xs: 12,
                                        children: /*#__PURE__*/ _jsx(SectionOne, {})
                                    }),
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        lg: 3,
                                        md: 3,
                                        sm: 12,
                                        xs: 12,
                                        children: /*#__PURE__*/ _jsx(SectionTwo, {})
                                    }),
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        lg: 3,
                                        md: 3,
                                        sm: 12,
                                        xs: 12,
                                        children: /*#__PURE__*/ _jsx(SectionThree, {})
                                    }),
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        lg: 3,
                                        md: 3,
                                        sm: 12,
                                        xs: 12,
                                        children: /*#__PURE__*/ _jsx(SectionFour, {})
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(Box, {
                        sx: {
                            backgroundColor: (theme)=>theme.palette.primary.main,
                            color: (theme)=>theme.palette.common.white
                        },
                        children: /*#__PURE__*/ _jsx(CardContent, {
                            sx: {
                                py: 0.5,
                                pb: 0.5
                            },
                            children: /*#__PURE__*/ _jsx(Typography, {
                                component: "p",
                                variant: "subtitle1",
                                textAlign: "center",
                                mt: 2,
                                fontSize: "14px",
                                children: "2023 \xa9 Webpristine Technology."
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (Footer)));


/***/ }),

/***/ 2273:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9479);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2076);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5370);
/* harmony import */ var _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4862);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nav_config_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7496);
/* harmony import */ var _nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4755);
/* harmony import */ var _nav_mobile_NavMobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_1__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__, _nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_10__, _nav_mobile_NavMobile__WEBPACK_IMPORTED_MODULE_11__]);
([_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_1__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__, _nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_10__, _nav_mobile_NavMobile__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const drawerWidth = 240;
const Header = (props)=>{
    const router = useRouter();
    const token = isAccessToken();
    const isMobile = useResponsive("down", "md");
    const responsiveHeight = isMobile ? 78.5 : 52;
    const value = useOffSetTop(responsiveHeight, {
        offset: [
            "start end",
            "end end"
        ]
    });
    const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = ()=>{
        setMobileOpen((prevState)=>!prevState);
    };
    const container = window !== undefined ? ()=>window().document.body : undefined;
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(AppBar, {
            component: "nav",
            position: value ? "fixed" : "relative",
            color: "inherit",
            children: /*#__PURE__*/ _jsx(Container, {
                maxWidth: true,
                children: /*#__PURE__*/ _jsxs(Toolbar, {
                    sx: {
                        justifyContent: {
                            lg: "space-between",
                            md: "space-between",
                            sm: "space-between",
                            xs: "space-between"
                        }
                    },
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            component: Link,
                            href: "/",
                            children: /*#__PURE__*/ _jsx(Box, {
                                component: "img",
                                width: 200,
                                height: 50,
                                src: "/assets/images/logo/logo.jpg",
                                alt: "Logo",
                                loading: "lazy",
                                sx: {
                                    objectFit: "contain",
                                    background: "transparent",
                                    backgroundSize: "cover"
                                }
                            })
                        }),
                        /*#__PURE__*/ _jsxs(Box, {
                            component: "div",
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                },
                                alignItems: "baseline"
                            },
                            children: [
                                /*#__PURE__*/ _jsx(NavDesktop, {
                                    isOffset: isOffset,
                                    data: navConfig
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    children: token ? /*#__PURE__*/ _jsx(Box, {
                                        component: "div",
                                        children: /*#__PURE__*/ _jsx(Button, {
                                            onClick: ()=>{
                                                clearToken();
                                                router.push("/auth/login");
                                            },
                                            sx: {
                                                color: "#fff",
                                                ml: 1
                                            },
                                            "aria-owns": "mouse-over-popover",
                                            "aria-haspopup": "true",
                                            variant: "contained",
                                            children: /*#__PURE__*/ _jsx(Typography, {
                                                children: "Log out"
                                            })
                                        })
                                    }) : /*#__PURE__*/ _jsx(Box, {
                                        component: "div",
                                        children: /*#__PURE__*/ _jsx(Button, {
                                            onClick: ()=>{
                                                router.push("/auth/login");
                                            },
                                            sx: {
                                                color: "#fff",
                                                ml: 1
                                            },
                                            "aria-owns": "mouse-over-popover",
                                            "aria-haspopup": "true",
                                            variant: "contained",
                                            children: "Sign in/ Sign up"
                                        })
                                    })
                                })
                            ]
                        }),
                        isMobile && /*#__PURE__*/ _jsx(NavMobile, {
                            isOffset: isOffset,
                            data: navConfig
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Header)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8367:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9226);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6872);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const TopBar = ()=>{
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            background: "#555555",
            color: "#fff"
        },
        children: /*#__PURE__*/ _jsx(Container, {
            maxWidth: true,
            children: /*#__PURE__*/ _jsxs(Toolbar, {
                sx: {
                    minHeight: "52px !important",
                    px: "6rem !important",
                    gap: {
                        md: 0,
                        sm: 1,
                        xs: 1
                    },
                    justifyContent: {
                        lg: "space-between",
                        md: "space-between",
                        sm: "center",
                        xs: "center"
                    },
                    display: {
                        md: "flex !important",
                        sm: "grid !important",
                        xs: "grid !important"
                    },
                    py: {
                        md: 0,
                        sm: 1,
                        xs: 1
                    }
                },
                children: [
                    /*#__PURE__*/ _jsx(Box, {
                        children: /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            spacing: 3,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ _jsxs(Stack, {
                                    direction: "row",
                                    spacing: 0.5,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ _jsx(Phone, {
                                            sx: {
                                                fontSize: "18px"
                                            }
                                        }),
                                        " ",
                                        /*#__PURE__*/ _jsx(Typography, {
                                            sx: {
                                                fontSize: "15px"
                                            },
                                            children: "0123456789"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Stack, {
                                    direction: "row",
                                    spacing: 0.5,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ _jsx(Email, {
                                            sx: {
                                                fontSize: "18px"
                                            }
                                        }),
                                        " ",
                                        /*#__PURE__*/ _jsx(Typography, {
                                            sx: {
                                                fontSize: "15px"
                                            },
                                            children: "0123456789"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Box, {
                        children: /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            spacing: 1.5,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/fb-icon.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/ins-logo.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/link-icon.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/twitter-icon.jpg"
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    component: "img",
                                    src: "/assets/images/layout/topbar/you-icon.jpg"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TopBar)));


/***/ }),

/***/ 6369:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2273);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9090);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9881);
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5457);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9479);
/* harmony import */ var _header_topbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8367);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_2__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_7__]);
([_header__WEBPACK_IMPORTED_MODULE_2__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const SecondaryWebLayout = (props)=>{
    const { children } = props;
    const isMobile = useResponsive("down", "md");
    const responsiveHeight = isMobile ? 78.5 : 52;
    const value = useOffSetTop(responsiveHeight, {
        offset: [
            "start end",
            "end end"
        ]
    });
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(TopBar, {}),
            /*#__PURE__*/ _jsx(Header, {}),
            value && /*#__PURE__*/ _jsx(Toolbar, {
                id: "back-to-top-anchor"
            }),
            children,
            /*#__PURE__*/ _jsx(Footer, {}),
            /*#__PURE__*/ _jsx(ScrollTop, {
                ...props,
                children: /*#__PURE__*/ _jsx(Fab, {
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ _jsx(KeyboardArrowUpIcon, {})
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SecondaryWebLayout)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7496:
/***/ (() => {

const navConfig = [
    {
        title: "Home",
        path: "/",
        sx: {
            fontSize: "5rem"
        }
    },
    {
        title: "About us",
        path: "/aboutus/aboutus"
    },
    {
        title: "Job",
        path: "#jobs"
    },
    {
        title: "Testimonials",
        path: "#tesimonials"
    },
    {
        title: "FAQ",
        path: "/faqs"
    },
    {
        title: "Blog",
        path: "/blog",
        children: [
            {
                items: [
                    {
                        title: "Blog",
                        path: "/blog/blogs"
                    },
                    {
                        title: "Blog Detail",
                        path: "/blog/blogdetail"
                    }
                ]
            }
        ]
    },
    {
        title: "Contact Us",
        path: "/contact"
    }
];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (navConfig)));


/***/ }),

/***/ 4755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3884);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavList__WEBPACK_IMPORTED_MODULE_3__]);
_NavList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

// ----------------------------------------------------------------------
NavDesktop.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavDesktop({ isOffset, data }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        component: "nav",
        direction: "row",
        spacing: 5,
        sx: {
            mr: 5,
            height: 1
        },
        children: data.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                item: link,
                isOffset: isOffset
            }, link.title))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavItemDashboard),
/* harmony export */   L: () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1034);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9964);
/* harmony import */ var _components_image_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/display-name */ 



// next

// @mui

// components
// import Image from '../../../../components/image';
// import Iconify from '../../../../components/iconify';
//



// ----------------------------------------------------------------------
const NavItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ item, open, isOffset, active, subItem, isExternalLink, ...other }, ref)=>{
    const { title, path, children } = item;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .ListItem */ .HC, {
        ref: ref,
        disableRipple: true,
        isOffset: isOffset,
        subItem: subItem,
        active: active,
        open: open,
        ...other,
        children: [
            title,
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                width: 16,
                icon: "eva:arrow-ios-downward-fill",
                sx: {
                    ml: 1
                }
            })
        ]
    });
    // ExternalLink
    if (isExternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
    }
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        href: path,
        underline: "none",
        children: renderContent
    });
});
NavItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    subItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
// ----------------------------------------------------------------------
NavItemDashboard.propTypes = {
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function NavItemDashboard({ item, sx, ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        href: item.path,
        underline: "none",
        sx: {
            width: 1
        },
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardActionArea, {
            sx: {
                py: 5,
                px: 10,
                minHeight: 400,
                borderRadius: 1,
                color: "text.disabled",
                bgcolor: "background.neutral",
                ...sx
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div, {
                whileTap: "tap",
                whileHover: "hover",
                variants: {
                    hover: {
                        scale: 1.02
                    },
                    tap: {
                        scale: 0.98
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_image_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    visibleByDefault: true,
                    alt: "illustration_dashboard",
                    src: "/assets/illustrations/illustration_dashboard.png"
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4345);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1034);
/* harmony import */ var _hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8245);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9479);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavItem__WEBPACK_IMPORTED_MODULE_5__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__]);
([_NavItem__WEBPACK_IMPORTED_MODULE_5__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// next

// @mui

// hooks
// import useActiveLink from '../../../../hooks/useActiveLink';
//





// ----------------------------------------------------------------------
NavList.propTypes = {
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavList({ item, isOffset }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { path, children } = item;
    const { active, isExternalLink } = (0,_hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(path);
    const isMobile = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)("down", "md");
    const responsiveHeight = isMobile ? 78.5 : 52;
    const value = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(responsiveHeight, {
        offset: [
            "start end",
            "end end"
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (openMenu) {
            handleCloseMenu();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleOpenMenu = ()=>{
        if (children) {
            setOpenMenu(true);
        }
    };
    const handleCloseMenu = ()=>{
        setOpenMenu(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavItem */ .L, {
                item: item,
                isOffset: isOffset,
                active: active,
                open: openMenu,
                isExternalLink: isExternalLink,
                onMouseEnter: handleOpenMenu,
                onMouseLeave: handleCloseMenu
            }),
            !!children && openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Portal, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Fade, {
                    in: openMenu,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledMenu */ .l2, {
                        onMouseEnter: handleOpenMenu,
                        onMouseLeave: handleCloseMenu,
                        value: value,
                        sx: {
                            top: value ? 42 : 95
                        },
                        children: children.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavSubList, {
                                subheader: list.subheader,
                                items: list.items,
                                isDashboard: list.subheader === "Dashboard",
                                onClose: handleCloseMenu
                            }, list.subheader))
                    })
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
NavSubList.propTypes = {
    items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    isDashboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function NavSubList({ items, isDashboard, subheader, onClose }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isActive = (path)=>pathname === path;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        spacing: 2.5,
        gridColumn: isDashboard ? "span 6" : "span 2",
        alignItems: "flex-start",
        children: items && items.length > 0 && items.map((item)=>isDashboard ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavItemDashboard */ .A, {
                item: item,
                onClick: onClose
            }, item.title) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavItem */ .L, {
                subItem: true,
                item: item,
                active: isActive(item.path),
                onClick: onClose
            }, item.title))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HC: () => (/* binding */ ListItem),
/* harmony export */   l2: () => (/* binding */ StyledMenu)
/* harmony export */ });
/* unused harmony export StyledSubheader */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
const ListItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "open" && prop !== "isOffset" && prop !== "subItem"
})(({ active, open, isOffset, subItem, theme })=>{
    const dotActive = {
        content: '""',
        borderRadius: "50%",
        position: "absolute",
        width: 6,
        height: 6,
        left: -14,
        opacity: 0.48,
        backgroundColor: "currentColor"
    };
    return {
        ...theme.typography.subtitle2,
        padding: 0,
        height: "100%",
        color: theme.palette.text.primary,
        transition: theme.transitions.create("opacity", {
            duration: theme.transitions.duration.shorter
        }),
        "&:hover": {
            opacity: 0.48,
            backgroundColor: "transparent"
        },
        // Sub item
        ...subItem && {
            ...theme.typography.body2,
            color: theme.palette.text.secondary
        },
        // isOffset
        ...isOffset && {
            color: theme.palette.text.primary
        },
        // Active
        ...active && {
            color: theme.palette.primary.main
        },
        // Active sub item
        ...active && subItem && {
            ...theme.typography.subtitle2,
            color: theme.palette.text.primary
        },
        // Open
        ...open && {
            opacity: 0.48
        }
    };
});
// ----------------------------------------------------------------------
const StyledMenu = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper)(({ theme })=>{
    return {
        right: 300,
        display: "grid",
        position: "fixed",
        alignItems: "flex-start",
        zIndex: theme.zIndex.modal,
        padding: theme.spacing(1, 1, 1, 3),
        boxShadow: theme.customShadows.dialog,
        gridTemplateColumns: "repeat(3, 1fr)",
        borderRadius: Number(theme.shape.borderRadius) * 2,
        border: `solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[500], 0.16)}`
    };
});
// ----------------------------------------------------------------------
const StyledSubheader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListSubheader)(({ theme })=>({
        ...theme.typography.overline,
        padding: 0,
        fontSize: 11,
        color: theme.palette.text.primary
    }));


/***/ }),

/***/ 6485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9964);
/* harmony import */ var _components_image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2736);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// next

// @mui

// components


//

// ----------------------------------------------------------------------
NavItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavItem({ item, open, active, isExternalLink, ...other }) {
    const { title, path, icon, children } = item;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .ListItem */ .H, {
        active: active,
        ...other,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {
                children: [
                    " ",
                    icon,
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
                disableTypography: true,
                primary: title
            }),
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                width: 16,
                icon: open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill",
                sx: {
                    ml: 1
                }
            })
        ]
    });
    // ExternalLink
    if (isExternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
    }
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),
        href: path,
        underline: "none",
        children: renderContent
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6485);
/* harmony import */ var _components_nav_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9527);
/* harmony import */ var _hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8245);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavItem__WEBPACK_IMPORTED_MODULE_5__, _components_nav_section__WEBPACK_IMPORTED_MODULE_6__]);
([_NavItem__WEBPACK_IMPORTED_MODULE_5__, _components_nav_section__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// next

// @mui

// hooks
// import useActiveLink from '../../../../hooks/useActiveLink';
// components
// import { NavSectionVertical } from '../../../../components/nav-section';
//



// ----------------------------------------------------------------------
NavList.propTypes = {
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function NavList({ item }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { path, children } = item;
    const { isExternalLink } = (0,_hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(path, false);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                item: item,
                open: open,
                onClick: ()=>setOpen(!open),
                active: pathname === path,
                isExternalLink: isExternalLink
            }),
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
                in: open,
                unmountOnExit: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_section__WEBPACK_IMPORTED_MODULE_6__/* .NavSectionVertical */ .Mr, {
                    data: children,
                    sx: {
                        "& .MuiList-root:last-of-type .MuiListItemButton-root": {
                            height: 160,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            bgcolor: "background.neutral",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: "url(/assets/illustrations/illustration_dashboard.png)",
                            "& > *:not(.MuiTouchRipple-root)": {
                                display: "none"
                            }
                        }
                    }
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2736);
/* harmony import */ var _NavList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1894);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9964);
/* harmony import */ var _components_logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6922);
/* harmony import */ var _components_scrollbar_Scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1943);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5370);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavList__WEBPACK_IMPORTED_MODULE_6__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__]);
([_NavList__WEBPACK_IMPORTED_MODULE_6__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// next

// @mui

// config
// import { NAV } from '../../../../config-global';
// componentsimport Iconify from '@/components/iconify/Iconify';

// import Scrollbar from '../../../../components/scrollbar';
//





// ----------------------------------------------------------------------
NavMobile.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavMobile({ isOffset, data }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                onClick: handleOpen,
                sx: {
                    ml: 1,
                    ...isOffset && {
                        color: "text.primary"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    icon: "eva:menu-2-fill"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
                open: open,
                onClose: handleClose,
                PaperProps: {
                    sx: {
                        pb: 5,
                        width: _utils_config_global__WEBPACK_IMPORTED_MODULE_10__/* .NAV */ .w$.W_BASE
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_scrollbar_Scrollbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_logo_Logo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            sx: {
                                mx: 2.5,
                                my: 3
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.List, {
                            component: "nav",
                            disablePadding: true,
                            children: data.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    item: link
                                }, link.title))
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5370);
// @mui



// config
// import { NAV } from '../../../../config-global';
// ----------------------------------------------------------------------
const ListItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, theme })=>({
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        height: _utils_config_global__WEBPACK_IMPORTED_MODULE_2__/* .NAV */ .w$.H_DASHBOARD_ITEM,
        // Active
        ...active && {
            color: theme.palette.primary.main,
            ...theme.typography.subtitle2,
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
    }));


/***/ }),

/***/ 5457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4156);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);





function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default()({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Fade, {
        in: trigger,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
ScrollTop.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element).isRequired,
    window: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};


/***/ }),

/***/ 3990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ls: () => (/* binding */ bgBlur),
/* harmony export */   U3: () => (/* binding */ hideScrollbarY)
/* harmony export */ });
/* unused harmony exports bgGradient, textGradient, filterStyles, hideScrollbarX */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
// @mui

// ----------------------------------------------------------------------
function bgBlur(props) {
    const color = props?.color || "#000000";
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;
    const imgUrl = props?.imgUrl;
    if (imgUrl) {
        return {
            position: "relative",
            backgroundImage: `url(${imgUrl})`,
            "&:before": {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: "100%",
                height: "100%",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, opacity)
            }
        };
    }
    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, opacity)
    };
}
// ----------------------------------------------------------------------
function bgGradient(props) {
    const direction = props?.direction || "to bottom";
    const startColor = props?.startColor;
    const endColor = props?.endColor;
    const imgUrl = props?.imgUrl;
    const color = props?.color;
    if (imgUrl) {
        return {
            background: `linear-gradient(${direction}, ${startColor || color}, ${endColor || color}), url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        };
    }
    return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
    };
}
// ----------------------------------------------------------------------
function textGradient(value) {
    return {
        background: `-webkit-linear-gradient(${value})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    };
}
// ----------------------------------------------------------------------
function filterStyles(value) {
    return {
        filter: value,
        WebkitFilter: value,
        MozFilter: value
    };
}
// ----------------------------------------------------------------------
const hideScrollbarY = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
        display: "none"
    }
};
// ----------------------------------------------------------------------
const hideScrollbarX = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
        display: "none"
    }
};


/***/ })

};
;