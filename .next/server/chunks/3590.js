"use strict";
exports.id = 3590;
exports.ids = [3590];
exports.modules = {

/***/ 3590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useAuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1425);
/* harmony import */ var _sections_auth_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2238);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6490);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(261);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAuthContext__WEBPACK_IMPORTED_MODULE_4__, _sections_auth_login__WEBPACK_IMPORTED_MODULE_5__, _layout__WEBPACK_IMPORTED_MODULE_6__]);
([_useAuthContext__WEBPACK_IMPORTED_MODULE_4__, _sections_auth_login__WEBPACK_IMPORTED_MODULE_5__, _layout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// next

// components
// import LoadingScreen from "../components/loading-screen";
//





// ----------------------------------------------------------------------
AuthGuard.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function AuthGuard({ children }) {
    const { isAuthenticated, isInitialized } = (0,_useAuthContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuthContext */ .E)();
    const { pathname, push } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [requestedLocation, setRequestedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (requestedLocation && pathname !== requestedLocation) {
            push(requestedLocation);
        }
        if (isAuthenticated) {
            setRequestedLocation(null);
        }
    }, [
        isAuthenticated,
        pathname,
        push,
        requestedLocation
    ]);
    if (!isInitialized) {
        return(// <PrimaryWebLayout>
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
            mt: 10,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            })
        }));
    }
    if (!isAuthenticated) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_auth_login__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
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

/***/ })

};
;