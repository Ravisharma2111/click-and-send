"use strict";
exports.id = 7190;
exports.ids = [7190];
exports.modules = {

/***/ 7190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6882);
/* harmony import */ var _components_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1333);
/* harmony import */ var _useAuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1425);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6490);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_loading_screen__WEBPACK_IMPORTED_MODULE_5__, _useAuthContext__WEBPACK_IMPORTED_MODULE_6__, _layout__WEBPACK_IMPORTED_MODULE_7__]);
([_components_loading_screen__WEBPACK_IMPORTED_MODULE_5__, _useAuthContext__WEBPACK_IMPORTED_MODULE_6__, _layout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// next

// routes

// components

//




// ----------------------------------------------------------------------
GuestGuard.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function GuestGuard({ children }) {
    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { isAuthenticated, isInitialized, user } = (0,_useAuthContext__WEBPACK_IMPORTED_MODULE_6__/* .useAuthContext */ .E)();
    // console.log("useruser", user);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isAuthenticated) {
            if (user && user?.user_type) {
                if (user?.user_type === "customer") {
                    push("/dashboard/customer/job_posted");
                } else if (user.user_type === "driver") {
                    push("/dashboard/driver/active_jobs");
                } else if (user.user_type === "company") {
                    push("/dashboard/company");
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isAuthenticated
    ]);
    if (isInitialized === isAuthenticated) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                mt: 10,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeleton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            " ",
            children,
            " "
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui


//

// ----------------------------------------------------------------------
const StyledRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme })=>({
        right: 0,
        bottom: 0,
        zIndex: 9998,
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default
    }));
// ----------------------------------------------------------------------
function LoadingScreen() {
    const [mounted, setMounted] = useState(false);
    useEffect(()=>setMounted(true), []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ _jsxs(StyledRoot, {
        children: [
            /*#__PURE__*/ _jsx(m.div, {
                animate: {
                    scale: [
                        1,
                        0.9,
                        0.9,
                        1,
                        1
                    ],
                    opacity: [
                        1,
                        0.48,
                        0.48,
                        1,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    ease: "easeInOut",
                    repeatDelay: 1,
                    repeat: Infinity
                },
                children: /*#__PURE__*/ _jsx(Box, {
                    component: "img",
                    src: "/assets/images/logo/logo.jpg",
                    disabledLink: true,
                    sx: {
                        width: 64,
                        height: 64
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                component: m.div,
                animate: {
                    scale: [
                        1.6,
                        1,
                        1,
                        1.6,
                        1.6
                    ],
                    rotate: [
                        270,
                        0,
                        0,
                        270,
                        270
                    ],
                    opacity: [
                        0.25,
                        1,
                        1,
                        1,
                        0.25
                    ],
                    borderRadius: [
                        "25%",
                        "25%",
                        "50%",
                        "50%",
                        "25%"
                    ]
                },
                transition: {
                    ease: "linear",
                    duration: 3.2,
                    repeat: Infinity
                },
                sx: {
                    width: 100,
                    height: 100,
                    position: "absolute",
                    border: (theme)=>`solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`
                }
            }),
            /*#__PURE__*/ _jsx(Box, {
                component: m.div,
                animate: {
                    scale: [
                        1,
                        1.2,
                        1.2,
                        1,
                        1
                    ],
                    rotate: [
                        0,
                        270,
                        270,
                        0,
                        0
                    ],
                    opacity: [
                        1,
                        0.25,
                        0.25,
                        0.25,
                        1
                    ],
                    borderRadius: [
                        "25%",
                        "25%",
                        "50%",
                        "50%",
                        "25%"
                    ]
                },
                transition: {
                    ease: "linear",
                    duration: 3.2,
                    repeat: Infinity
                },
                sx: {
                    width: 120,
                    height: 120,
                    position: "absolute",
                    border: (theme)=>`solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1333:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoadingScreen__WEBPACK_IMPORTED_MODULE_0__]);
_LoadingScreen__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3451:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6922);



/***/ }),

/***/ 6882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MENU_PATH */
// ----------------------------------------------------------------------
function path(root, sublink) {
    return `${root}${sublink}`;
}
// ----------------------------------------------------------------------
const MENU_PATH = {
    root: "/",
    login: "/login",
    blog: {
        root: "/blog",
        blogs: "/blogs",
        blog_detail: "/blogdetail"
    }
};


/***/ })

};
;