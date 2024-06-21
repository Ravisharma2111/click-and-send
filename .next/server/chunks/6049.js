"use strict";
exports.id = 6049;
exports.ids = [6049];
exports.modules = {

/***/ 6049:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__]);
_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
const SubscriptionDialog = ({ children })=>{
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_4__.useState(true);
    const checkRoute = [
        "/dashboard/driver/subscription",
        "/dashboard/company/subscription",
        "/dashboard/customer/subscription"
    ];
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>{
        if (checkRoute.includes(router?.route)) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [
        router?.route
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: user?.plan?.plan_id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            open: user?.plan?.plan_id ? false : open,
            components: "form",
            scroll: "paper",
            // onClose={() => {
            //   onClose();
            //   handleClose();
            // }}
            "aria-describedby": "alert-dialog-slide-description",
            sx: {
                "&.MuiDialog-root": {
                    zIndex: 100
                },
                "& .MuiPaper-rounded": {
                    borderRadius: "0px"
                },
                "& .MuiBackdrop-root": {
                    backgroundColor: "#f2f2f2"
                }
            },
            maxWidth: "xs",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                    dividers: "paper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        textAlign: "left",
                        mt: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h5",
                            fontWeight: 500,
                            sx: {
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: 500
                            },
                            children: "Please Subscribe to Access this Page"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                    sx: {
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        onClick: ()=>router.route === "/dashboard/company" ? router.push("company/subscription") : router.route === "/dashboard/driver/active_jobs" ? router.push("subscription") : router.route === "/dashboard/customer" ? router.push("/dashboard/customer/subscription") : router.route === "/driver/profile" ? router.push("/dashboard/driver/subscription") : router.route === "/customer/profile" ? router.push("/dashboard/customer/subscription") : router.route === "/company/profile" ? router.push("/dashboard/company/subscription") : "",
                        children: "Subscribe Now"
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;