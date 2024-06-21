exports.id = 2544;
exports.ids = [2544];
exports.modules = {

/***/ 5336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ AuthFirebaseProvider)
/* harmony export */ });
/* unused harmony export AuthFirebaseContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var _config_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1469);
/* harmony import */ var lodash_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(957);
/* harmony import */ var lodash_result__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_result__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// config



// ----------------------------------------------------------------------
// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...
// ----------------------------------------------------------------------
const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    user: null
};
const reducer = (state, action)=>{
    if (action.type === "INITIAL") {
        return {
            isInitialized: true,
            isAuthenticated: action.payload.isAuthenticated,
            user: action.payload.user
        };
    }
    return state;
};
// ----------------------------------------------------------------------
const AuthFirebaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
// ----------------------------------------------------------------------
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_3__.initializeApp)(_config_global__WEBPACK_IMPORTED_MODULE_5__/* .FIREBASE_API */ .Dc);
console.log("firebaseApp", firebaseApp);
const AUTH = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(firebaseApp);
const GOOGLE_PROVIDER = new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();
const FACEBOOK_PROVIDER = new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.FacebookAuthProvider();
AuthFirebaseContext.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function AuthFirebaseProvider({ children }) {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    const initialize = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        try {
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(AUTH, async (user)=>{
                if (user) {
                    dispatch({
                        type: "INITIAL",
                        payload: {
                            isAuthenticated: true,
                            user: {
                                ...user,
                                role: "admin"
                            }
                        }
                    });
                } else {
                    dispatch({
                        type: "INITIAL",
                        payload: {
                            isAuthenticated: false,
                            user: null
                        }
                    });
                }
            });
        } catch (error) {
            console.error(error);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        initialize();
    }, [
        initialize
    ]);
    const loginApi = async (initialValues)=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.post("api/auth/social-login", initialValues).then((response)=>{
            if (response?.status === 200) {
                console.log("response login social", response?.data);
            } else {
                console.log("error", response?.error);
            }
        }).catch((error)=>{
            console.log(error, "error");
        });
    };
    const loginWithGoogle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(AUTH, GOOGLE_PROVIDER).then((response)=>{
            let initialValues = {
                email: "",
                social_type: "gmail"
            };
            initialValues.email = response?.user?.email;
            loginApi(initialValues);
            console.log("loginWithGoogle", response?.user?.email);
        }).catch((error)=>{
            console.log("Error Google Login", error);
        });
    }, []);
    const loginWithFacebook = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(AUTH, FACEBOOK_PROVIDER).then((response)=>{
            console.log("loginWithFacebook", response);
        }).catch((error)=>{
            const errorMessage = error?.message;
            console.log("Error Facebook Login", errorMessage);
        });
    }, []);
    // LOGOUT
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(AUTH).then((response)=>{
            console.log("logout", response);
        }).catch((error)=>{
            console.log("Firebase logout", error);
        });
    }, []);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            isInitialized: state.isInitialized,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            method: "firebase",
            loginWithGoogle,
            logout,
            loginWithFacebook
        }), [
        state.isAuthenticated,
        state.isInitialized,
        state.user,
        loginWithGoogle,
        logout,
        loginWithFacebook
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthFirebaseContext.Provider, {
        value: memoizedValue,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AuthProvider),
/* harmony export */   V: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3763);
/* harmony import */ var _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4862);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5673);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(401);
/* harmony import */ var _config_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1469);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_3__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__, _utils__WEBPACK_IMPORTED_MODULE_6__, firebase_app__WEBPACK_IMPORTED_MODULE_10__, firebase_auth__WEBPACK_IMPORTED_MODULE_11__]);
([_utils_axios__WEBPACK_IMPORTED_MODULE_3__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__, _utils__WEBPACK_IMPORTED_MODULE_6__, firebase_app__WEBPACK_IMPORTED_MODULE_10__, firebase_auth__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// utils



//






// config

// ----------------------------------------------------------------------
// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...
// ----------------------------------------------------------------------
const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    user: null
};
const reducer = (state, action)=>{
    if (action.type === "INITIAL") {
        return {
            isInitialized: true,
            isAuthenticated: action.payload.isAuthenticated,
            user: action.payload.user
        };
    }
    if (action.type === "LOGIN") {
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user
        };
    }
    if (action.type === "REGISTER") {
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user
        };
    }
    if (action.type === "LOGOUT") {
        return {
            ...state,
            isAuthenticated: false,
            user: null
        };
    }
    return state;
};
// ----------------------------------------------------------------------
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_10__.initializeApp)(_config_global__WEBPACK_IMPORTED_MODULE_12__/* .FIREBASE_API */ .Dc);
console.log("firebaseApp", firebaseApp);
const AUTH = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)(firebaseApp);
const GOOGLE_PROVIDER = new firebase_auth__WEBPACK_IMPORTED_MODULE_11__.GoogleAuthProvider();
const FACEBOOK_PROVIDER = new firebase_auth__WEBPACK_IMPORTED_MODULE_11__.FacebookAuthProvider();
// ----------------------------------------------------------------------
AuthProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function AuthProvider({ children }) {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const storageAvailable = (0,_utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_7__.useSnackbar)();
    const initialize = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            const accessToken = storageAvailable ? localStorage.getItem("accessToken") : "";
            if (accessToken && (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .isValidToken */ .wu)(accessToken)) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .setSession */ .KY)(accessToken);
                const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get("api/auth/profile/my-profile");
                const user = response?.data?.view_data;
                dispatch({
                    type: "INITIAL",
                    payload: {
                        isAuthenticated: true,
                        user: user
                    }
                });
            } else {
                dispatch({
                    type: "INITIAL",
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        } catch (error) {
            console.error(error);
            const { response } = error;
            dispatch({
                type: "INITIAL",
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            });
            dispatch({
                type: "LOGOUT"
            });
        }
    }, [
        storageAvailable
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        initialize();
    }, [
        initialize,
        router
    ]);
    const socialLogin = async (initialValues)=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("api/auth/social-login", initialValues).then((response)=>{
            if (response?.status === 200) {
                const { access_token, user } = response.data;
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                    style: {
                        width: "100%",
                        padding: "30px",
                        backdropFilter: "blur(8px)",
                        background: "#ff7533 ",
                        fontSize: "19px",
                        fontWeight: 800,
                        lineHeight: "30px"
                    },
                    icon: false,
                    severity: "success",
                    children: response?.data?.message
                }), {
                    variant: "success",
                    iconVariant: true,
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center"
                    }
                });
                (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .setSession */ .KY)(access_token);
                dispatch({
                    type: "LOGIN",
                    payload: {
                        user
                    }
                });
            } else {
                console.log("error", response);
            }
        }).catch((error)=>{
            console.log(error, "error");
            const { response } = error;
            // error
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "100%",
                    padding: "30px",
                    filter: blur("8px"),
                    background: "#ffe9d5 ",
                    fontSize: "19px",
                    fontWeight: 800,
                    lineHeight: "30px"
                },
                icon: false,
                severity: "error",
                children: response?.data?.error
            }), {
                variant: "error",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
        });
    };
    const socialSignUp = async (initialValues)=>{
        // console.log("response.data", initialValues);
        await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("api/auth/social-signup", initialValues).then((response)=>{
            if (response?.status === 200) {
                console.log("response.data", response.data);
                const { access_token, user } = response.data;
                // success
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                    style: {
                        width: "100%",
                        padding: "30px",
                        backdropFilter: "blur(8px)",
                        background: "#ff7533 ",
                        fontSize: "19px",
                        fontWeight: 800,
                        lineHeight: "30px"
                    },
                    icon: false,
                    severity: "success",
                    children: response?.data?.message
                }), {
                    variant: "success",
                    iconVariant: true,
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center"
                    }
                });
                (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .setSession */ .KY)(access_token);
                dispatch({
                    type: "LOGIN",
                    payload: {
                        user
                    }
                });
                setTimeout(()=>{
                    window.location.href = "/auth/login";
                }, 1000);
            } else {
                console.log("error", response);
            }
        }).catch((error)=>{
            const { response } = error;
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "100%",
                    padding: "30px",
                    filter: blur("8px"),
                    background: "#ffe9d5 ",
                    fontSize: "19px",
                    fontWeight: 800,
                    lineHeight: "30px"
                },
                icon: false,
                severity: "error",
                children: response?.data?.error.email
            }), {
                variant: "error",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
        });
    };
    const loginWithGoogle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.signInWithPopup)(AUTH, GOOGLE_PROVIDER).then((response)=>{
            let initialValues = {
                email: "",
                social_type: "gmail"
            };
            initialValues.email = response?.user?.email;
            socialLogin(initialValues);
        }).catch((error)=>{
            console.log("Error Google Login", error);
        });
    }, []);
    const loginWithFacebook = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.signInWithPopup)(AUTH, FACEBOOK_PROVIDER).then((response)=>{
            let initialValues = {
                email: "",
                social_type: "facebook"
            };
            initialValues.email = response?.user?.email;
            socialLogin(initialValues);
        }).catch((error)=>{
            const errorMessage = error?.message;
            console.log("Error Facebook Login", errorMessage);
        });
    }, []);
    const signUpWithGoogle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((user_type)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.signInWithPopup)(AUTH, GOOGLE_PROVIDER).then((response)=>{
            console.log("responseresponse", response);
            const { user } = response;
            if (!user) {
                throw new Error("Google sign-up response does not contain user data");
            }
            let initialValues = {
                email: "",
                social_type: "gmail",
                user_type: user_type,
                mobile: "",
                user_name: ""
            };
            initialValues.email = response?.user?.email;
            initialValues.user_name = response?.user?.displayName;
            initialValues.mobile = response?.user?.phoneNumber;
            console.log("SignupGoogle", response);
            socialSignUp(initialValues);
        }).catch((error)=>{
            console.log("Error Google Login", error);
        });
    }, []);
    const signUpWithFacebook = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((user_type)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.signInWithPopup)(AUTH, FACEBOOK_PROVIDER).then((response)=>{
            let initialValues = {
                email: "",
                social_type: "facebook",
                user_type: user_type,
                mobile: "",
                user_name: ""
            };
            initialValues.email = response?.user?.email;
            initialValues.user_name = response?.user?.displayName;
            initialValues.mobile = response?.user?.phoneNumber;
            socialSignUp(initialValues);
        }).catch((error)=>{
            const errorMessage = error?.message;
            console.log("Error Facebook Login", errorMessage);
        });
    }, []);
    // UPDATE TOKEN
    const updateToken = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (data)=>{
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("api/user/update-token/{id}", {
                ...data
            });
            const { access_token, user } = response.data;
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "100%",
                    padding: "30px",
                    backdropFilter: "blur(8px)",
                    background: "#ff7533 ",
                    fontSize: "19px",
                    fontWeight: 800,
                    lineHeight: "30px"
                },
                icon: false,
                severity: "success",
                children: response?.data?.message
            }), {
                variant: "success",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .setSession */ .KY)(access_token);
            dispatch({
                type: "LOGIN",
                payload: {
                    user
                }
            });
        } catch (error) {
            const { response } = error;
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "100%",
                    padding: "30px",
                    filter: blur("8px"),
                    background: "#ffe9d5 ",
                    fontSize: "19px",
                    fontWeight: 800,
                    lineHeight: "30px"
                },
                icon: false,
                severity: "error",
                children: response?.data?.error
            }), {
                variant: "error",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
        }
    }, []);
    // LOGIN
    const login = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (data)=>{
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("api/auth/login", {
                ...data
            });
            const { access_token, user } = response.data;
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "230px",
                    padding: "10px",
                    backdropFilter: "blur(8px)",
                    background: "#ff7533 ",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "3px"
                },
                icon: true,
                severity: "success",
                children: response?.data?.message
            }), {
                variant: "success",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .setSession */ .KY)(access_token);
            dispatch({
                type: "LOGIN",
                payload: {
                    user
                }
            });
        } catch (error) {
            const { response } = error;
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "100%",
                    padding: "30px",
                    filter: blur("8px"),
                    background: "#ffe9d5 ",
                    fontSize: "19px",
                    fontWeight: 800,
                    lineHeight: "30px"
                },
                icon: false,
                severity: "error",
                children: response?.data?.error
            }), {
                variant: "error",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
        }
    }, []);
    // REGISTER
    const register = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (data)=>{
        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("/api/account/register", {
            ...data
        });
        const { access_token, user } = response.data;
        localStorage.setItem("accessToken", access_token);
        dispatch({
            type: "REGISTER",
            payload: {
                user
            }
        });
    }, []);
    // LOGOUT
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post("api/auth/logout");
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "230px",
                    padding: "10px",
                    backdropFilter: "blur(8px)",
                    background: "#ff7533 ",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "3px"
                },
                icon: true,
                severity: "success",
                children: response?.data?.message
            }), {
                variant: "success",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
            if (AUTH) {
                (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.signOut)(AUTH).then((response)=>{
                    console.log("logout", response);
                }).catch((error)=>{
                    console.log("Firebase logout", error);
                });
            }
            router.push("/auth/login");
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .setSession */ .KY)(null);
            dispatch({
                type: "LOGOUT"
            });
        } catch (error) {
            const { response } = error;
            if (response.status === 401) {
                router.push("/auth/login");
                dispatch({
                    type: "LOGOUT"
                });
            }
            enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                    width: "100%",
                    padding: "30px",
                    filter: blur("8px"),
                    background: "#ffe9d5 ",
                    fontSize: "19px",
                    fontWeight: 800,
                    lineHeight: "30px"
                },
                icon: false,
                severity: "error",
                children: response?.data?.error
            }), {
                variant: "error",
                iconVariant: true,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            });
        }
    }, []);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            isInitialized: state.isInitialized,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            method: "jwt",
            login,
            register,
            logout,
            loginWithGoogle,
            loginWithFacebook,
            signUpWithGoogle,
            signUpWithFacebook
        }), [
        state.isAuthenticated,
        state.isInitialized,
        state.user,
        login,
        logout,
        register,
        loginWithGoogle,
        loginWithFacebook,
        signUpWithGoogle,
        signUpWithFacebook
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: memoizedValue,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KY: () => (/* binding */ setSession),
/* harmony export */   wu: () => (/* binding */ isValidToken)
/* harmony export */ });
/* unused harmony export tokenExpired */
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);
_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// routes
// import { PATH_AUTH } from "../routes/paths";

// utils
// ----------------------------------------------------------------------
function jwtDecode(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(window.atob(base64).split("").map((c)=>`%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
    return JSON.parse(jsonPayload);
}
// ----------------------------------------------------------------------
const isValidToken = (accessToken)=>{
    if (!accessToken) {
        return false;
    }
    return true;
};
// ----------------------------------------------------------------------
const tokenExpired = (exp)=>{
    // eslint-disable-next-line prefer-const
    let expiredTimer;
    const currentTime = Date.now();
    // Test token expires after 10s
    // const timeLeft = currentTime + 10000 - currentTime; // ~10s
    const timeLeft = exp * 1000 - currentTime;
    clearTimeout(expiredTimer);
    expiredTimer = setTimeout(()=>{
        alert("Token expired");
        localStorage.removeItem("accessToken");
    // window.location.href = PATH_AUTH.login;
    }, timeLeft);
};
// ----------------------------------------------------------------------
const setSession = (accessToken)=>{
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    // tokenExpired(exp);
    } else {
        localStorage.removeItem("accessToken");
        delete _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.defaults.headers.common.Authorization;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// icons

// @mui


// ----------------------------------------------------------------------
function IconifyIcon({ icon, width = 18, sx, ...other }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        ref: ref,
        component: _iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon,
        icon: icon,
        sx: {
            width,
            height: width,
            ...sx
        },
        ...other
    });
}
const Iconify = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(IconifyIcon);
Iconify.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ]),
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iconify);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _Iconify__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_0__]);
_Iconify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4723);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__);



// next

// @mui


// ----------------------------------------------------------------------
function ProgressBar() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
        showSpinner: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleStart = ()=>{
            nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
        };
        const handleStop = ()=>{
            nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5___default()), {
        styles: {
            "#nprogress": {
                pointerEvents: "none",
                "& .bar": {
                    top: 0,
                    left: 0,
                    height: 2,
                    width: "100%",
                    position: "fixed",
                    zIndex: theme.zIndex.snackbar,
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 2px ${theme.palette.primary.main}`
                },
                "& .peg": {
                    right: 0,
                    opacity: 1,
                    width: 100,
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    transform: "rotate(3deg) translate(0px, -4px)",
                    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
                }
            }
        }
    });
}


/***/ }),

/***/ 854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SnackbarProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8355);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6582);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_index__WEBPACK_IMPORTED_MODULE_6__]);
_iconify_index__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui


//

//

// ----------------------------------------------------------------------
SnackbarProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
function SnackbarProvider({ children }) {
    const isRTL = true;
    const notistackRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const onClose = (key)=>()=>{
            notistackRef.current.closeSnackbar(key);
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(notistack__WEBPACK_IMPORTED_MODULE_3__.SnackbarProvider, {
                ref: notistackRef,
                dense: true,
                maxSnack: 5,
                preventDuplicate: true,
                autoHideDuration: 2000,
                TransitionComponent: isRTL ? _mui_material__WEBPACK_IMPORTED_MODULE_5__.Collapse : undefined,
                variant: "success" // Set default variant
                ,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                iconVariant: {
                    info: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        color: "info"
                    }),
                    success: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        color: "success"
                    }),
                    warning: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        color: "warning"
                    }),
                    error: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackbarIcon, {
                        color: "error"
                    })
                },
                children: children
            })
        ]
    });
}
// ----------------------------------------------------------------------
SnackbarIcon.propTypes = {
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error"
    ])
};
function SnackbarIcon({ icon, color }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        component: "span",
        sx: {
            mr: 1.5,
            width: 40,
            height: 40,
            display: "none",
            borderRadius: 1.5,
            alignItems: "center",
            justifyContent: "center",
            color: `${color}.main`,
            bgcolor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette[color].main, 0.16)
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StyledNotistack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
// @mui



// ----------------------------------------------------------------------
function StyledNotistack() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const isLight = true;
    const inputGlobalStyles = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.GlobalStyles, {
        styles: {
            "#__next": {
                ".SnackbarContent-root": {
                    width: "100%",
                    padding: theme.spacing(1),
                    margin: theme.spacing(0.25, 0),
                    boxShadow: theme.customShadows.z8,
                    borderRadius: theme.shape.borderRadius,
                    color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: isLight ? theme.palette.grey[900] : theme.palette.common.white,
                    "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo": {
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.paper
                    },
                    [theme.breakpoints.up("md")]: {
                        minWidth: 240
                    }
                },
                ".SnackbarItem-message": {
                    padding: "0 !important",
                    fontWeight: theme.typography.fontWeightMedium
                },
                ".SnackbarItem-action": {
                    marginRight: 0,
                    color: theme.palette.action.active,
                    "& svg": {
                        width: 20,
                        height: 20
                    }
                }
            }
        }
    });
    return inputGlobalStyles;
}


/***/ }),

/***/ 4303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ StepperContext),
/* harmony export */   x: () => (/* binding */ StepperProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const StepperContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function StepperProvider({ children }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id } = router.query;
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [tagLength, setTagLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const getTagsLength = (tabs)=>{
        setTagLength(tabs?.length - 1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(0);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(0);
    }, [
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StepperContext.Provider, {
        value: {
            value,
            setValue,
            handleChange,
            getTagsLength,
            tagLength
        },
        children: children
    });
}



/***/ }),

/***/ 1469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: () => (/* binding */ FIREBASE_API)
/* harmony export */ });
/* unused harmony exports HOST_API_KEY, HEADER, NAV, ICON */
// API
// ----------------------------------------------------------------------
const HOST_API_KEY = process.env.HOST_API_KEY || "";
const FIREBASE_API = {
    apiKey: "AIzaSyALIE-wiYA8D2oRNI4PJKsA_ST0Yt0AsDE",
    authDomain: "demologin-e7cac.firebaseapp.com",
    projectId: "demologin-e7cac",
    storageBucket: "demologin-e7cac.appspot.com",
    messagingSenderId: "12818017157",
    appId: "1:12818017157:web:09cabf6d5fba4df6ef72ec"
};
// LAYOUT
// ----------------------------------------------------------------------
const HEADER = {
    H_MOBILE: 64,
    H_MAIN_DESKTOP: 88,
    H_DASHBOARD_DESKTOP: 92,
    H_DASHBOARD_DESKTOP_OFFSET: 92 - 32
};
const NAV = {
    W_BASE: 260,
    W_DASHBOARD: 280,
    W_DASHBOARD_MINI: 88,
    //
    H_DASHBOARD_ITEM: 48,
    H_DASHBOARD_ITEM_SUB: 36,
    //
    H_DASHBOARD_ITEM_HORIZONTAL: 32
};
const ICON = {
    NAV_ITEM: 24,
    NAV_ITEM_HORIZONTAL: 22,
    NAV_ITEM_MINI: 22
};


/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_FirebaseContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5336);
/* harmony import */ var _auth_JwtContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3973);
/* harmony import */ var _components_progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(823);
/* harmony import */ var _components_snackbar_SnackbarProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(854);
/* harmony import */ var _components_stepper_stepperContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4303);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9409);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4742);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3280);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_FirebaseContext__WEBPACK_IMPORTED_MODULE_1__, _auth_JwtContext__WEBPACK_IMPORTED_MODULE_2__, _components_snackbar_SnackbarProvider__WEBPACK_IMPORTED_MODULE_4__, _redux_store__WEBPACK_IMPORTED_MODULE_6__]);
([_auth_FirebaseContext__WEBPACK_IMPORTED_MODULE_1__, _auth_JwtContext__WEBPACK_IMPORTED_MODULE_2__, _components_snackbar_SnackbarProvider__WEBPACK_IMPORTED_MODULE_4__, _redux_store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// redux

// slick-carousel


function App(props) {
    const { Component, pageProps, settings } = props;
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_11___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_12__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_9__.LocalizationProvider, {
                    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_10__.AdapterDayjs,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progressBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_snackbar_SnackbarProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_JwtContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthProvider */ .H, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_FirebaseContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthFirebaseProvider */ .x, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_stepper_stepperContext__WEBPACK_IMPORTED_MODULE_5__/* .StepperProvider */ .x, {
                                        children: getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        }))
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-sync-scripts */ 

function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/faviconweb.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyD6MRqmdjtnIHn7tyDLX-qsjreaTkuzSCY"}&libraries=places`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mt: () => (/* binding */ rootPersistConfig)
/* harmony export */ });
/* unused harmony exports createNoopStorage, storage, driverJobPersistConfig, customerJobPersistConfig, companyJobPersistConfig, homeTotalJobPersistConfig */
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7388);
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slices_home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4491);
/* harmony import */ var _slices_job_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4704);
/* harmony import */ var _slices_job_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8217);
/* harmony import */ var _slices_job_driver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices_home_home__WEBPACK_IMPORTED_MODULE_3__, _slices_job_company__WEBPACK_IMPORTED_MODULE_4__, _slices_job_customer__WEBPACK_IMPORTED_MODULE_5__, _slices_job_driver__WEBPACK_IMPORTED_MODULE_6__]);
([_slices_home_home__WEBPACK_IMPORTED_MODULE_3__, _slices_job_company__WEBPACK_IMPORTED_MODULE_4__, _slices_job_customer__WEBPACK_IMPORTED_MODULE_5__, _slices_job_driver__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// slices




// ----------------------------------------------------------------------
const createNoopStorage = ()=>({
        getItem () {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem () {
            return Promise.resolve();
        }
    });
const storage =  false ? 0 : createNoopStorage();
const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const driverJobPersistConfig = {
    key: "driverJob",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const customerJobPersistConfig = {
    key: "customerJob",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const companyJobPersistConfig = {
    key: "companyJob",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const homeTotalJobPersistConfig = {
    key: "home",
    storage,
    keyPrefix: "redux-",
    whitelist: []
};
const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    driverJob: (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(driverJobPersistConfig, _slices_job_driver__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP),
    customerJob: (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(customerJobPersistConfig, _slices_job_customer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP),
    companyJob: (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(companyJobPersistConfig, _slices_job_company__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP),
    home: (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(homeTotalJobPersistConfig, _slices_home_home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ot: () => (/* binding */ getTotalUser),
/* harmony export */   Ov: () => (/* binding */ getTestimonial),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports startTotalUserLoading, startTestimonialLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_1__]);
_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const initialState = {
    isTotalUserLoading: false,
    totalUserError: null,
    totalUser: {
        data: []
    },
    isTestimonialLoading: false,
    testimonialError: null,
    testimonial: {
        data: []
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "home",
    initialState,
    reducers: {
        // START LOADING
        startTotalUserLoading (state) {
            state.isTotalUserLoading = true;
        },
        startTestimonialLoading (state) {
            state.isTotalUserLoading = true;
        },
        // HAS ERROR START
        hasTotalUserError (state, action) {
            state.isTotalUserLoading = false;
            state.error = action.payload;
        },
        hasTestimonialError (state, action) {
            state.isTotalUserLoading = false;
            state.error = action.payload;
        },
        // HAS ERROR END
        // SET TOTAL USER
        setTotalUser (state, action) {
            state.isTotalUserLoading = false;
            state.totalUser.data = action.payload;
        },
        // SET TOTAL USER END
        // SET TESTIMONIAL
        setTestimonial (state, action) {
            state.isTestimonialLoading = false;
            state.testimonial.data = action.payload;
        }
    }
});
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
// Actions
const { startTotalUserLoading, startTestimonialLoading } = slice.actions;
// ----------------------------------------------------------------------
const getTotalUser = ()=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startTotalUserLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/home/total-users");
            dispatch(slice.actions.setTotalUser(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasTotalUserError(error));
        }
    };
};
// ==========================================================
const getTestimonial = ()=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startTestimonialLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/home/faq-testimonial");
            dispatch(slice.actions.setTestimonial(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasTestimonialError(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L$: () => (/* binding */ getDriver),
/* harmony export */   LT: () => (/* binding */ setJobHistoryPage),
/* harmony export */   M_: () => (/* binding */ getJobHistory),
/* harmony export */   TD: () => (/* binding */ getCompanyDashboard),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   oG: () => (/* binding */ setJobActivePage),
/* harmony export */   vr: () => (/* binding */ getJobActive),
/* harmony export */   zS: () => (/* binding */ setJobHistoryPageSize)
/* harmony export */ });
/* unused harmony exports startDriverLoading, setDriverPage */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_1__]);
_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const initialState = {
    isDriverLoading: false,
    DriverError: null,
    Driver: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isJobActiveLoading: false,
    jobActiveError: null,
    jobActive: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isJobHistoryLoading: false,
    jobHistoryError: null,
    jobHistory: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isDashboardLoading: false,
    dashboardError: null,
    dashboard: null
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "companyJob",
    initialState,
    reducers: {
        // START LOADING
        startDriverLoading (state) {
            state.isDriverLoading = true;
        },
        startJobActiveLoading (state) {
            state.isJobActiveLoading = true;
        },
        startJobHistoryLoading (state) {
            state.isJobActiveLoading = true;
        },
        startDashboardLoading (state) {
            state.isDashboardLoading = true;
        },
        // HAS ERROR START
        hasDriverError (state, action) {
            state.isDriverLoading = false;
            state.error = action.payload;
        },
        hasJobActiveError (state, action) {
            state.isJobActiveLoading = false;
            state.error = action.payload;
        },
        hasJobHistoryError (state, action) {
            state.isJobActiveLoading = false;
            state.error = action.payload;
        },
        hasDashboardError (state, action) {
            state.isDashboardLoading = false;
            state.dashboardError = action.payload;
        },
        // HAS ERROR END
        // SET DRIVER LIST
        setDriver (state, action) {
            state.isDriverLoading = false;
            state.Driver.data = action.payload.data;
            state.Driver.dataCount = action.payload.data.length;
            state.Driver.pageCount = action.payload.meta?.last_page;
        },
        setDriverPage (state, action) {
            state.Driver.page = action.payload;
        },
        // SET JOB END
        // ====================================================
        // SET JOB ALERT
        setJobActive (state, action) {
            state.isJobActiveLoading = false;
            state.jobActive.data = action.payload.data;
            state.jobActive.dataCount = action.payload.data.length;
            state.jobActive.pageCount = action.payload.meta?.last_page;
        },
        setJobActivePage (state, action) {
            state.jobActive.page = action.payload;
        },
        // SET JOB END
        // =====================================================
        // SET JOB hISTORY
        setJobHistory (state, action) {
            state.isJobHistoryLoading = false;
            state.jobHistory.data = action.payload.data;
            state.jobHistory.dataCount = action.payload.data.length;
            state.jobHistory.pageCount = action.payload.meta?.last_page;
        },
        setJobHistoryPage (state, action) {
            state.jobHistory.page = action.payload;
        },
        // SET JOB HISTORY END
        setJobHistoryPageSize (state, action) {
            state.jobHistory.pageSize = action.payload;
        },
        // SET DASHBOARD
        setDashboard (state, action) {
            state.isDashboardLoading = false;
            state.dashboard = action.payload;
        }
    }
});
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
// Actions
const { startDriverLoading, setDriverPage, setJobActivePage, setJobHistoryPage, setJobHistoryPageSize } = slice.actions;
// ----------------------------------------------------------------------
const getCompanyDashboard = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startDashboardLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/company/dashboard", {
                params: {
                    ...params
                }
            });
            dispatch(slice.actions.setDashboard(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasDashboardError(error));
        }
    };
};
const getDriver = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startDriverLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/company/driver-list", {
                params: {
                    ...params
                }
            });
            dispatch(slice.actions.setDriver(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasDriverError(error));
        }
    };
};
const getJobActive = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobActiveLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("api/auth/company/drivers-job", {
                type: "active",
                ...params
            });
            dispatch(slice.actions.setJobActive(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobActiveError(error));
        }
    };
};
const getJobHistory = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobHistoryLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("api/auth/company/drivers-job", {
                type: "history",
                ...params
            });
            console.log("response?.data?.view_data", response?.data);
            dispatch(slice.actions.setJobHistory(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobHistoryError(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LT: () => (/* binding */ setJobHistoryPage),
/* harmony export */   M_: () => (/* binding */ getJobHistory),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _O: () => (/* binding */ setJobPostPage),
/* harmony export */   dR: () => (/* binding */ getJobDelete),
/* harmony export */   yB: () => (/* binding */ setJobDeletePage),
/* harmony export */   zS: () => (/* binding */ setJobHistoryPageSize),
/* harmony export */   zj: () => (/* binding */ getJobPost)
/* harmony export */ });
/* unused harmony export startJobPostLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_1__]);
_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const initialState = {
    isJobPostLoading: false,
    jobPostError: null,
    jobPost: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isJobHistoryLoading: false,
    jobHistoryError: null,
    jobHistory: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isJobDeleteLoading: false,
    jobDeleteError: null,
    jobDelete: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "customerJob",
    initialState,
    reducers: {
        // START LOADING
        startJobPostLoading (state) {
            state.isJobPostLoading = true;
        },
        startJobHistoryLoading (state) {
            state.isJobActiveLoading = true;
        },
        startJobDeleteLoading (state) {
            state.isJobDeleteLoading = true;
        },
        // HAS ERROR START
        hasJobPostError (state, action) {
            state.isJobPostLoading = false;
            state.error = action.payload;
        },
        hasJobHistoryError (state, action) {
            state.isJobActiveLoading = false;
            state.error = action.payload;
        },
        hasJobDeleteError (state, action) {
            state.isJobDeleteLoading = false;
            state.error = action.payload;
        },
        // HAS ERROR END
        // SET JOB Post
        setJobPost (state, action) {
            state.isJobPostLoading = false;
            state.jobPost.data = action.payload.data;
            state.jobPost.dataCount = action.payload.data.length;
            state.jobPost.pageCount = action.payload.meta?.last_page;
        },
        setJobPostPage (state, action) {
            state.jobPost.page = action.payload;
        },
        // SET JOB END
        // =======================================================
        // SET JOB hISTORY
        setJobHistory (state, action) {
            state.isJobHistoryLoading = false;
            state.jobHistory.data = action.payload.data;
            state.jobHistory.dataCount = action.payload.data.length;
            state.jobHistory.pageCount = action.payload.meta?.last_page;
        },
        setJobHistoryPage (state, action) {
            state.jobHistory.page = action.payload;
        },
        setJobHistoryPageSize (state, action) {
            state.jobHistory.pageSize = action.payload;
        },
        // SET JOB HISTORY END
        // ========================================================
        // SET JOB DELETE
        setJobDelete (state, action) {
            state.isJobDeleteLoading = false;
            state.jobDelete.data = action.payload.data;
            state.jobDelete.dataCount = action.payload.data.length;
            state.jobDelete.pageCount = action.payload.meta?.last_page;
        },
        setJobDeletePage (state, action) {
            state.jobDelete.page = action.payload;
        }
    }
});
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
// Actions
const { startJobPostLoading, setJobPostPage, setJobHistoryPage, setJobHistoryPageSize, setJobDeletePage } = slice.actions;
// ----------------------------------------------------------------------
const getJobPost = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobPostLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/jobs/list", {
                params: {
                    status: "post",
                    type: "customer",
                    ...params
                }
            });
            dispatch(slice.actions.setJobPost(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobPostError(error));
        }
    };
};
const getJobHistory = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobHistoryLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/jobs/list", {
                params: {
                    status: "history",
                    type: "customer",
                    ...params
                }
            });
            dispatch(slice.actions.setJobHistory(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobHistoryError(error));
        }
    };
};
const getJobDelete = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobDeleteLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/jobs/list", {
                params: {
                    status: "pending",
                    type: "customer",
                    is_deleted: 1,
                    ...params
                }
            });
            dispatch(slice.actions.setJobDelete(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobDeleteError(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LT: () => (/* binding */ setJobHistoryPage),
/* harmony export */   M_: () => (/* binding */ getJobHistory),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mY: () => (/* binding */ setJobAlertPage),
/* harmony export */   oG: () => (/* binding */ setJobActivePage),
/* harmony export */   tH: () => (/* binding */ getJobAlert),
/* harmony export */   vr: () => (/* binding */ getJobActive)
/* harmony export */ });
/* unused harmony export startJobAlertLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_1__]);
_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const initialState = {
    isJobAlertLoading: false,
    jobAlertError: null,
    jobAlert: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isJobActiveLoading: false,
    jobActiveError: null,
    jobActive: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    },
    isJobHistoryLoading: false,
    jobHistoryError: null,
    jobHistory: {
        data: [],
        pageCount: 0,
        dataCount: 0,
        page: 1,
        pageSize: 10
    }
};
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "driverJob",
    initialState,
    reducers: {
        // START LOADING
        startJobAlertLoading (state) {
            state.isJobAlertLoading = true;
        },
        startJobActiveLoading (state) {
            state.isJobActiveLoading = true;
        },
        startJobHistoryLoading (state) {
            state.isJobActiveLoading = true;
        },
        // HAS ERROR START
        hasJobAlertError (state, action) {
            state.isJobAlertLoading = false;
            state.error = action.payload;
        },
        hasJobActiveError (state, action) {
            state.isJobActiveLoading = false;
            state.error = action.payload;
        },
        hasJobHistoryError (state, action) {
            state.isJobActiveLoading = false;
            state.error = action.payload;
        },
        // HAS ERROR END
        // SET JOB ALERT
        setJobAlert (state, action) {
            state.isJobAlertLoading = false;
            state.jobAlert.data = action.payload.data;
            state.jobAlert.dataCount = action.payload.data.length;
            state.jobAlert.pageCount = action.payload.meta?.last_page;
        },
        setJobAlertPage (state, action) {
            state.jobAlert.page = action.payload;
        },
        // SET JOB END
        // ====================================================
        // SET JOB ALERT
        setJobActive (state, action) {
            state.isJobActiveLoading = false;
            state.jobActive.data = action.payload.data;
            state.jobActive.dataCount = action.payload.data.length;
            state.jobActive.pageCount = action.payload.meta?.last_page;
        },
        setJobActivePage (state, action) {
            state.jobActive.page = action.payload;
        },
        // SET JOB END
        // =====================================================
        // SET JOB hISTORY
        setJobHistory (state, action) {
            state.isJobHistoryLoading = false;
            state.jobHistory.data = action.payload.data;
            state.jobHistory.dataCount = action.payload.data.length;
            state.jobHistory.pageCount = action.payload.meta?.last_page;
        },
        setJobHistoryPage (state, action) {
            state.jobHistory.page = action.payload;
        }
    }
});
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
// export default{ sliceActive.reducer};
// Actions
const { startJobAlertLoading, setJobAlertPage, setJobActivePage, setJobHistoryPage } = slice.actions;
// ----------------------------------------------------------------------
const getJobAlert = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobAlertLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/jobs/list", {
                params: {
                    status: "pending",
                    type: "driver",
                    ...params
                }
            });
            dispatch(slice.actions.setJobAlert(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobAlertError(error));
        }
    };
};
const getJobActive = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobActiveLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/jobs/list", {
                params: {
                    status: "active",
                    type: "driver",
                    ...params
                }
            });
            dispatch(slice.actions.setJobActive(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobActiveError(error));
        }
    };
};
const getJobHistory = (params)=>{
    return async (dispatch)=>{
        dispatch(slice.actions.startJobHistoryLoading());
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("api/auth/jobs/list", {
                params: {
                    status: "history",
                    type: "driver",
                    ...params
                }
            });
            dispatch(slice.actions.setJobHistory(response?.data?.view_data));
        } catch (error) {
            dispatch(slice.actions.hasJobHistoryError(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I0: () => (/* binding */ useDispatch),
/* harmony export */   h: () => (/* binding */ store),
/* harmony export */   v9: () => (/* binding */ useSelector)
/* harmony export */ });
/* unused harmony exports dispatch, persistor */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rootReducer__WEBPACK_IMPORTED_MODULE_3__]);
_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// ----------------------------------------------------------------------
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(_rootReducer__WEBPACK_IMPORTED_MODULE_3__/* .rootPersistConfig */ .mt, _rootReducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP),
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
});
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);
const { dispatch } = store;
const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;
const useDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ThemeProvider)
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/theme/palette.js

// ----------------------------------------------------------------------
// SETUP COLORS
const GREY = {
    0: "#FFFFFF",
    //
    100: "#f8f9fa",
    //
    200: "#f6f6f7",
    300: "#DFE3E8",
    //
    400: "#ececec",
    //
    500: "#919EAB",
    600: "#637381",
    500: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    1000: "#8F9BB3"
};
const PRIMARY = {
    lighter: "#FFCDB8",
    light: "#FF905B",
    main: "#ff7533",
    dark: "#B25123",
    darker: "#BB4100",
    contrastText: "#fff"
};
const SECONDARY = {
    lighter: "#73A3CA",
    light: "#f5f5f5",
    main: "#212d45",
    dark: "#445473",
    darker: "#34415D",
    contrastText: "#fff"
};
const INFO = {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#fff"
};
const SUCCESS = {
    lighter: "#D8FBDE",
    light: "#86E8AB",
    main: "#36B37E",
    dark: "#1B806A",
    darker: "#fff",
    contrastText: "#fff"
};
const WARNING = {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: GREY[800]
};
const ERROR = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#fff"
};
const DARK = {
    lighter: "#C1C1C1",
    light: "#797979",
    main: "#242424",
    dark: "#121416",
    darker: "#454545",
    contrastText: "#fff"
};
const GREYLIGHT = {
    main: "#ABAFB1",
    contrastText: "#ABAFB1"
};
const LIGHT = {
    main: "#ffffff"
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    dark: DARK,
    greyLight: GREYLIGHT,
    light: LIGHT,
    divider: (0,styles_.alpha)(GREY[500], 0.24),
    action: {
        hover: (0,styles_.alpha)(GREY[500], 0.08),
        selected: (0,styles_.alpha)(GREY[500], 0.16),
        disabled: (0,styles_.alpha)(GREY[500], 0.8),
        disabledBackground: (0,styles_.alpha)(GREY[500], 0.24),
        focus: (0,styles_.alpha)(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
function palette(themeMode) {
    const light = {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#fff",
            default: "#fff",
            neutral: GREY[200]
        },
        action: {
            ...COMMON.action,
            active: GREY[600]
        }
    };
    const dark = {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: (0,styles_.alpha)(GREY[500], 0.16)
        },
        action: {
            ...COMMON.action,
            active: GREY[500]
        }
    };
    return themeMode === "light" ? light : dark;
}

// EXTERNAL MODULE: ./src/theme/typography.js
var typography = __webpack_require__(2074);
;// CONCATENATED MODULE: ./src/theme/shadows.js
// @mui

//

// ----------------------------------------------------------------------
const themeColor = palette("light");
const LIGHT_MODE = themeColor.grey[500];
const DARK_MODE = themeColor.common.black;
function createShadow(color) {
    const transparent1 = (0,styles_.alpha)(color, 0.2);
    const transparent2 = (0,styles_.alpha)(color, 0.14);
    const transparent3 = (0,styles_.alpha)(color, 0.12);
    return [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`
    ];
}
function shadows(themeMode) {
    return themeMode === "light" ? createShadow(LIGHT_MODE) : createShadow(DARK_MODE);
}

;// CONCATENATED MODULE: ./src/theme/customShadows.js
// @mui

//

// ----------------------------------------------------------------------
const customShadows_themeColor = palette("light");
const customShadows_LIGHT_MODE = customShadows_themeColor.grey[500];
const customShadows_DARK_MODE = customShadows_themeColor.common.black;
function customShadows_createShadow(color) {
    const transparent = (0,styles_.alpha)(color, 0.16);
    return {
        z1: `0 1px 2px 0 ${transparent}`,
        z4: `0 4px 8px 0 ${transparent}`,
        z8: `0 8px 16px 0 ${transparent}`,
        z12: `0 12px 24px -4px ${transparent}`,
        z16: `0 16px 32px -4px ${transparent}`,
        z20: `0 20px 40px -4px ${transparent}`,
        z24: `0 24px 48px 0 ${transparent}`,
        //
        primary: `0 8px 16px 0 ${(0,styles_.alpha)(palette("light").primary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0,styles_.alpha)(palette("light").info.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0,styles_.alpha)(palette("light").secondary.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0,styles_.alpha)(palette("light").success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0,styles_.alpha)(palette("light").warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0,styles_.alpha)(palette("light").error.main, 0.24)}`,
        //
        card: `0 0 2px 0 ${(0,styles_.alpha)(color, 0.2)}, 0 12px 24px -4px ${(0,styles_.alpha)(color, 0.12)}`,
        dialog: `-40px 40px 80px -8px ${(0,styles_.alpha)(color, 0.24)}`,
        dropdown: `0 0 2px 0 ${(0,styles_.alpha)(color, 0.24)}, -20px 20px 40px -4px ${(0,styles_.alpha)(color, 0.24)}`
    };
}
function customShadows(themeMode) {
    return themeMode === "light" ? customShadows_createShadow(customShadows_LIGHT_MODE) : customShadows_createShadow(customShadows_DARK_MODE);
}

;// CONCATENATED MODULE: ./src/theme/overrides/Fab.js

// ----------------------------------------------------------------------
const COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function Fab(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyle = (ownerState)=>{
        const defaultColor = ownerState.color === "default";
        const inheritColor = ownerState.color === "inherit";
        const circularVariant = ownerState.variant === "circular";
        const extendedVariant = ownerState.variant === "extended";
        const outlinedVariant = ownerState.variant === "outlined";
        const outlinedExtendedVariant = ownerState.variant === "outlinedExtended";
        const softVariant = ownerState.variant === "soft";
        const softExtendedVariant = ownerState.variant === "softExtended";
        const defaultStyle = {
            "&:hover, &:active": {
                boxShadow: "none"
            },
            ...(circularVariant || extendedVariant) && {
                ...(defaultColor || inheritColor) && {
                    color: theme.palette.grey[800],
                    boxShadow: theme.customShadows.z8,
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                ...inheritColor && {
                    ...!isLight && {
                        color: "inherit",
                        backgroundColor: theme.palette.grey[800],
                        "&:hover": {
                            backgroundColor: theme.palette.grey[500]
                        }
                    }
                }
            },
            ...(outlinedVariant || outlinedExtendedVariant) && {
                boxShadow: "none",
                backgroundColor: "transparent",
                ...(defaultColor || inheritColor) && {
                    border: `solid 1px ${(0,styles_.alpha)(theme.palette.grey[500], 0.32)}`,
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                ...defaultColor && {
                    ...!isLight && {
                        color: theme.palette.text.secondary
                    }
                }
            },
            ...(softVariant || softExtendedVariant) && {
                boxShadow: "none",
                ...defaultColor && {
                    color: theme.palette.grey[800],
                    backgroundColor: theme.palette.grey[300],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                ...inheritColor && {
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.24)
                    }
                }
            }
        };
        const colorStyle = COLORS.map((color)=>({
                ...ownerState.color === color && {
                    ...(circularVariant || extendedVariant) && {
                        boxShadow: theme.customShadows[color],
                        "&:hover": {
                            backgroundColor: theme.palette[color].dark
                        }
                    },
                    ...(outlinedVariant || outlinedExtendedVariant) && {
                        color: theme.palette[color].main,
                        border: `solid 1px ${(0,styles_.alpha)(theme.palette[color].main, 0.48)}`,
                        "&:hover": {
                            backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.08),
                            border: `solid 1px ${theme.palette[color].main}`
                        }
                    },
                    ...(softVariant || softExtendedVariant) && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            "&.Mui-disabled": {
                ...(outlinedVariant || outlinedExtendedVariant) && {
                    backgroundColor: "transparent",
                    border: `solid 1px ${theme.palette.action.disabledBackground}`
                }
            }
        };
        const size = {
            ...(extendedVariant || outlinedExtendedVariant || softExtendedVariant) && {
                width: "auto",
                "& svg": {
                    marginRight: theme.spacing(1)
                },
                ...ownerState.size === "small" && {
                    height: 34,
                    minHeight: 34,
                    borderRadius: 17,
                    padding: theme.spacing(0, 1)
                },
                ...ownerState.size === "medium" && {
                    height: 40,
                    minHeight: 40,
                    borderRadius: 20,
                    padding: theme.spacing(0, 2)
                },
                ...ownerState.size === "large" && {
                    height: 48,
                    minHeight: 48,
                    borderRadius: 24,
                    padding: theme.spacing(0, 2)
                }
            }
        };
        return [
            ...colorStyle,
            defaultStyle,
            disabledState,
            size
        ];
    };
    return {
        MuiFab: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Card.js
// ----------------------------------------------------------------------
function Card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: "relative",
                    boxShadow: theme.customShadows.card,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    zIndex: 0
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/CustomIcons.js


// ----------------------------------------------------------------------
// CloseIcon
function CloseIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L12,10.59 L13.29,9.29 C13.6821222,8.89787783 14.3178778,8.89787783 14.71,9.29 C15.1021222,9.68212217 15.1021222,10.3178778 14.71,10.71 L13.41,12 L14.71,13.29 Z"
        })
    });
}
// StarIcon
function StarIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z"
        })
    });
}
// Using for Alert
function InfoIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,11 C11,10.4477153 11.4477153,10 12,10 C12.5522847,10 13,10.4477153 13,11 L13,16 Z M12,9 C11.4477153,9 11,8.55228475 11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 C13,8.55228475 12.5522847,9 12,9 Z"
        })
    });
}
function WarningIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M22.56,16.3 L14.89,3.58 C14.2597186,2.59400001 13.1702353,1.99737652 12,1.99737652 C10.8297647,1.99737652 9.74028139,2.59400001 9.11,3.58 L1.44,16.3 C0.888546003,17.2192471 0.869485343,18.3628867 1.39,19.3 C1.99197363,20.3551378 3.11522982,21.0046397 4.33,21 L19.67,21 C20.8765042,21.0128744 21.9978314,20.3797441 22.61,19.34 C23.146086,18.3926382 23.1269508,17.2292197 22.56,16.3 L22.56,16.3 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,9 C11,8.44771525 11.4477153,8 12,8 C12.5522847,8 13,8.44771525 13,9 L13,13 Z"
        })
    });
}
function SuccessIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M16.3,9.61 L11.73,15.61 C11.5412074,15.855247 11.2494966,15.9992561 10.94,16.0000145 C10.6322197,16.001658 10.3408221,15.861492 10.15,15.62 L7.71,12.51 C7.49028166,12.2277602 7.43782669,11.8497415 7.57239438,11.5183399 C7.70696206,11.1869384 8.00810836,10.9525017 8.36239438,10.9033399 C8.7166804,10.8541782 9.07028166,10.9977602 9.29,11.28 L10.92,13.36 L14.7,8.36 C14.917932,8.07418751 15.2717886,7.92635122 15.6282755,7.97217964 C15.9847624,8.01800806 16.2897207,8.25053875 16.4282755,8.58217966 C16.5668304,8.91382056 16.517932,9.29418753 16.3,9.58 L16.3,9.61 Z"
        })
    });
}
function ErrorIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 L13,13 Z"
        })
    });
}
// Using for Checkbox
function CheckboxIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z"
        })
    });
}
function CheckboxCheckedIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z"
        })
    });
}
function CheckboxIndeterminateIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z"
        })
    });
}
// Using for Radio Button
function RadioIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
        })
    });
}
function RadioCheckedIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
        })
    });
}
// Using for Select Input
function InputSelectIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        sx: {
            right: 12,
            fontSize: 16,
            position: "absolute",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z"
        })
    });
}
//  Using for TreeView
function TreeViewCollapseIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M12,8 C12.5522847,8 13,8.44771525 13,9 L13,9 L13,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 Z"
        })
    });
}
function TreeViewExpandIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 Z"
        })
    });
}
function TreeViewEndIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M14,8.99420168 C14.2666375,8.99420168 14.5222334,9.10068735 14.71,9.29 C14.8993127,9.4777666 15.0057983,9.73336246 15.0057983,10 C15.0057983,10.2666375 14.8993127,10.5222334 14.71,10.71 L14.71,10.71 L13.41,12 L14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L10.71,9.29 L12,10.59 L13.29,9.29 C13.4777666,9.10068735 13.7333625,8.99420168 14,8.99420168 Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/overrides/Chip.js


//

// ----------------------------------------------------------------------
const Chip_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function Chip(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyle = (ownerState)=>{
        const defaultColor = ownerState.color === "default";
        const filledVariant = ownerState.variant === "filled";
        const outlinedVariant = ownerState.variant === "outlined";
        const softVariant = ownerState.variant === "soft";
        const defaultStyle = {
            ...defaultColor && {
                "& .MuiChip-avatar": {
                    color: theme.palette.text[isLight ? "secondary" : "primary"],
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.48)
                },
                // OUTLINED
                ...outlinedVariant && {
                    border: `solid 1px ${(0,styles_.alpha)(theme.palette.grey[500], 0.32)}`
                },
                // SOFT
                ...softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.16),
                    "&:hover": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.32)
                    }
                }
            }
        };
        const colorStyle = Chip_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    "& .MuiChip-avatar": {
                        color: theme.palette[color].lighter,
                        backgroundColor: theme.palette[color].dark
                    },
                    // FILLED
                    ...filledVariant && {
                        "& .MuiChip-deleteIcon": {
                            color: (0,styles_.alpha)(theme.palette[color].contrastText, 0.56),
                            "&:hover": {
                                color: theme.palette[color].contrastText
                            }
                        }
                    },
                    // SOFT
                    ...softVariant && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.32)
                        },
                        "& .MuiChip-deleteIcon": {
                            color: (0,styles_.alpha)(theme.palette[color][isLight ? "dark" : "light"], 0.48),
                            "&:hover": {
                                color: theme.palette[color].dark
                            }
                        }
                    }
                }
            }));
        return [
            ...colorStyle,
            defaultStyle
        ];
    };
    return {
        MuiChip: {
            defaultProps: {
                deleteIcon: /*#__PURE__*/ jsx_runtime.jsx(CloseIcon, {})
            },
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Tabs.js
// ----------------------------------------------------------------------
function Tabs(theme) {
    return {
        MuiTabs: {
            defaultProps: {
                textColor: "inherit",
                allowScrollButtonsMobile: true,
                variant: "scrollable"
            },
            styleOverrides: {
                scrollButtons: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
                iconPosition: "start"
            },
            styleOverrides: {
                root: ({ ownerState })=>({
                        padding: 0,
                        opacity: 1,
                        minWidth: 48,
                        fontWeight: theme.typography.fontWeightMedium,
                        "&:not(:last-of-type)": {
                            marginRight: theme.spacing(3),
                            [theme.breakpoints.up("sm")]: {
                                marginRight: theme.spacing(5)
                            }
                        },
                        "&:not(.Mui-selected)": {
                            color: theme.palette.text.secondary
                        },
                        ...(ownerState.iconPosition === "start" || ownerState.iconPosition === "end") && {
                            minHeight: 48
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Menu.js
// ----------------------------------------------------------------------
function Menu(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Link.js
// ----------------------------------------------------------------------
function Link(theme) {
    return {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/List.js
// ----------------------------------------------------------------------
function List(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0
                },
                multiline: {
                    marginTop: 0,
                    marginBottom: 0
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Table.js
// ----------------------------------------------------------------------
function Table(theme) {
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    position: "relative"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: "none"
                },
                head: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`
                },
                paddingCheckbox: {
                    paddingLeft: theme.spacing(1)
                }
            }
        },
        MuiTablePagination: {
            defaultProps: {
                backIconButtonProps: {
                    size: "small"
                },
                nextIconButtonProps: {
                    size: "small"
                },
                SelectProps: {
                    MenuProps: {
                        MenuListProps: {
                            sx: {
                                "& .MuiMenuItem-root": {
                                    ...theme.typography.body2
                                }
                            }
                        }
                    }
                }
            },
            styleOverrides: {
                root: {
                    borderTop: `solid 1px ${theme.palette.divider}`
                },
                toolbar: {
                    height: 64
                },
                actions: {
                    marginRight: theme.spacing(1)
                },
                select: {
                    "&:focus": {
                        borderRadius: theme.shape.borderRadius
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Alert.js


// ----------------------------------------------------------------------
const Alert_COLORS = [
    "info",
    "success",
    "warning",
    "error"
];
function Alert(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyle = (ownerState)=>{
        const standardVariant = ownerState.variant === "standard";
        const filledVariant = ownerState.variant === "filled";
        const outlinedVariant = ownerState.variant === "outlined";
        const colorStyle = Alert_COLORS.map((color)=>({
                ...ownerState.severity === color && {
                    // STANDARD
                    ...standardVariant && {
                        color: theme.palette[color][isLight ? "darker" : "lighter"],
                        backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
                        "& .MuiAlert-icon": {
                            color: theme.palette[color][isLight ? "main" : "light"]
                        }
                    },
                    // FILLED
                    ...filledVariant && {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main
                    },
                    // OUTLINED
                    ...outlinedVariant && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        border: `solid 1px ${theme.palette[color].main}`,
                        "& .MuiAlert-icon": {
                            color: theme.palette[color].main
                        }
                    }
                }
            }));
        return [
            ...colorStyle
        ];
    };
    return {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: /*#__PURE__*/ jsx_runtime.jsx(InfoIcon, {}),
                    success: /*#__PURE__*/ jsx_runtime.jsx(SuccessIcon, {}),
                    warning: /*#__PURE__*/ jsx_runtime.jsx(WarningIcon, {}),
                    error: /*#__PURE__*/ jsx_runtime.jsx(ErrorIcon, {})
                }
            },
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState),
                icon: {
                    opacity: 1
                }
            }
        },
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    marginBottom: theme.spacing(0.5)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Badge.js
// ----------------------------------------------------------------------
function Badge(theme) {
    return {
        MuiBadge: {
            styleOverrides: {
                dot: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Paper.js
// ----------------------------------------------------------------------
function Paper(theme) {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Input.js

// ----------------------------------------------------------------------
function Input(theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: (0,styles_.alpha)(theme.palette.grey[500], 0.56)
                    },
                    "&:after": {
                        borderBottomColor: theme.palette.text.primary
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.16)
                    },
                    "&.Mui-focused": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.16)
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                underline: {
                    "&:before, :after": {
                        display: "none"
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: ".25rem",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: (0,styles_.alpha)(theme.palette.grey[500], 0.32)
                    },
                    "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: 1,
                            borderColor: theme.palette.text.primary
                        }
                    },
                    "&.Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Radio.js
//


// ----------------------------------------------------------------------
function Radio(theme) {
    return {
        MuiRadio: {
            defaultProps: {
                icon: /*#__PURE__*/ jsx_runtime.jsx(RadioIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime.jsx(RadioCheckedIcon, {})
            },
            styleOverrides: {
                root: ({ ownerState })=>({
                        padding: theme.spacing(1),
                        ...ownerState.size === "small" && {
                            "& svg": {
                                width: 20,
                                height: 20
                            }
                        },
                        ...ownerState.size === "medium" && {
                            "& svg": {
                                width: 24,
                                height: 24
                            }
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Drawer.js

// ----------------------------------------------------------------------
function Drawer(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant === "temporary" && {
                            "& .MuiDrawer-paper": {
                                boxShadow: `-40px 40px 80px -8px ${(0,styles_.alpha)(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.24)}`
                            }
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Dialog.js
// ----------------------------------------------------------------------
function Dialog(theme) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dialog,
                    "&.MuiPaper-rounded": {
                        borderRadius: Number(theme.shape.borderRadius) * 2
                    },
                    "&.MuiDialog-paperFullScreen": {
                        borderRadius: 0
                    },
                    "&.MuiDialog-paper .MuiDialogActions-root": {
                        padding: theme.spacing(3)
                    },
                    "@media (max-width: 600px)": {
                        margin: theme.spacing(2)
                    },
                    "@media (max-width: 663.95px)": {
                        "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {
                            maxWidth: "100%"
                        }
                    }
                },
                paperFullWidth: {
                    width: "100%"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(0, 3)
                },
                dividers: {
                    borderTop: 0,
                    borderBottomStyle: "dashed",
                    paddingBottom: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Avatar.js

// ----------------------------------------------------------------------
function Avatar(theme) {
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.24)
                }
            }
        },
        MuiAvatarGroup: {
            defaultProps: {
                max: 4
            },
            styleOverrides: {
                root: {
                    justifyContent: "flex-end"
                },
                avatar: {
                    fontSize: 16,
                    fontWeight: theme.typography.fontWeightMedium,
                    "&:first-of-type": {
                        fontSize: 12,
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.primary.lighter
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Rating.js


//

// ----------------------------------------------------------------------
function Rating(theme) {
    return {
        MuiRating: {
            defaultProps: {
                emptyIcon: /*#__PURE__*/ jsx_runtime.jsx(StarIcon, {}),
                icon: /*#__PURE__*/ jsx_runtime.jsx(StarIcon, {})
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        opacity: 0.48
                    }
                },
                iconEmpty: {
                    color: (0,styles_.alpha)(theme.palette.grey[500], 0.48)
                },
                sizeSmall: {
                    "& svg": {
                        width: 20,
                        height: 20
                    }
                },
                sizeLarge: {
                    "& svg": {
                        width: 28,
                        height: 28
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Slider.js
// ----------------------------------------------------------------------
function Slider(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSlider: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: theme.palette.action.disabled
                    }
                },
                rail: {
                    opacity: 0.32
                },
                markLabel: {
                    fontSize: 13,
                    color: theme.palette.text.disabled
                },
                valueLabel: {
                    borderRadius: 8,
                    backgroundColor: theme.palette.grey[isLight ? 800 : 500]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Button.js

// ----------------------------------------------------------------------
const Button_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function Button(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyle = (ownerState)=>{
        const inheritColor = ownerState.color === "inherit";
        const containedVariant = ownerState.variant === "contained";
        const outlinedVariant = ownerState.variant === "outlined";
        const textVariant = ownerState.variant === "text";
        const softVariant = ownerState.variant === "soft";
        const smallSize = ownerState.size === "small";
        const largeSize = ownerState.size === "large";
        const defaultStyle = {
            borderRadius: ".25rem",
            ...inheritColor && {
                // CONTAINED
                ...containedVariant && {
                    color: theme.palette.grey[800],
                    "&:hover": {
                        boxShadow: theme.customShadows.z8,
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                // OUTLINED
                ...outlinedVariant && {
                    borderColor: (0,styles_.alpha)(theme.palette.grey[500], 0.32),
                    "&:hover": {
                        borderColor: theme.palette.text.primary,
                        backgroundColor: theme.palette.action.hover
                    }
                },
                // TEXT
                ...textVariant && {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                // SOFT
                ...softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.24)
                    }
                }
            }
        };
        const colorStyle = Button_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    // CONTAINED
                    ...containedVariant && {
                        "&:hover": {
                            boxShadow: theme.customShadows[color]
                        }
                    },
                    // SOFT
                    ...softVariant && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            "&.Mui-disabled": {
                // SOFT
                ...softVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                }
            }
        };
        const size = {
            ...smallSize && {
                height: 30,
                fontSize: 13,
                ...softVariant && {
                    padding: "4px 10px"
                }
            },
            ...largeSize && {
                height: 48,
                fontSize: 15,
                ...softVariant && {
                    padding: "8px 22px"
                }
            }
        };
        return [
            ...colorStyle,
            defaultStyle,
            disabledState,
            size
        ];
    };
    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Switch.js

// ----------------------------------------------------------------------
function Switch(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyle = (ownerState)=>({
            padding: "9px 13px 9px 12px",
            width: 58,
            height: 38,
            ...ownerState.size === "small" && {
                padding: "4px 8px 4px 7px",
                width: 40,
                height: 24
            },
            "& .MuiSwitch-thumb": {
                width: 14,
                height: 14,
                boxShadow: "none",
                color: `${theme.palette.common.white} !important`,
                ...ownerState.size === "small" && {
                    width: 10,
                    height: 10
                }
            },
            "& .MuiSwitch-track": {
                opacity: 1,
                borderRadius: 14,
                backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.48)
            },
            "& .MuiSwitch-switchBase": {
                left: 3,
                padding: 12,
                ...ownerState.size === "small" && {
                    padding: 7
                },
                "&.Mui-checked": {
                    transform: "translateX(13px)",
                    "&+.MuiSwitch-track": {
                        opacity: 1
                    },
                    ...ownerState.size === "small" && {
                        transform: "translateX(9px)"
                    }
                },
                "&.Mui-disabled": {
                    "& .MuiSwitch-thumb": {
                        opacity: isLight ? 1 : 0.48
                    },
                    "&+.MuiSwitch-track": {
                        opacity: 0.48
                    }
                }
            }
        });
    return {
        MuiSwitch: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Select.js
//

// ----------------------------------------------------------------------
function Select(theme) {
    return {
        MuiSelect: {
            defaultProps: {
                IconComponent: InputSelectIcon
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/SvgIcon.js
// ----------------------------------------------------------------------
function SvgIcon(theme) {
    return {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Tooltip.js
// ----------------------------------------------------------------------
function Tooltip(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLight ? 800 : 500]
                },
                arrow: {
                    color: theme.palette.grey[isLight ? 800 : 500]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Popover.js
// ----------------------------------------------------------------------
function Popover(theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dropdown,
                    borderRadius: Number(theme.shape.borderRadius) * 1.5
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Stepper.js
// ----------------------------------------------------------------------
function Stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/DataGrid.js
// ----------------------------------------------------------------------
function DataGrid(theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: `1px solid transparent`,
                    "& .MuiTablePagination-root": {
                        borderTop: 0
                    }
                },
                cell: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                toolbarContainer: {
                    padding: theme.spacing(2),
                    backgroundColor: theme.palette.background.neutral,
                    "& .MuiButton-root": {
                        marginRight: theme.spacing(1.5),
                        color: theme.palette.text.primary,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                },
                paper: {
                    boxShadow: theme.customShadows.dropdown
                },
                menu: {
                    "& .MuiPaper-root": {
                        boxShadow: theme.customShadows.dropdown
                    },
                    "& .MuiMenuItem-root": {
                        ...theme.typography.body2,
                        "& .MuiListItemIcon-root": {
                            minWidth: "auto"
                        }
                    }
                },
                panelFooter: {
                    padding: theme.spacing(2),
                    justifyContent: "flex-end",
                    borderTop: `1px solid ${theme.palette.divider}`,
                    "& .MuiButton-root": {
                        "&:first-of-type": {
                            marginRight: theme.spacing(1.5),
                            color: theme.palette.text.primary,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover
                            }
                        },
                        "&:last-of-type": {
                            color: theme.palette.common.white,
                            backgroundColor: theme.palette.primary.main,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark
                            }
                        }
                    }
                },
                filterForm: {
                    padding: theme.spacing(1.5, 0),
                    "& .MuiFormControl-root": {
                        margin: theme.spacing(0, 0.5)
                    },
                    "& .MuiInput-root": {
                        marginTop: theme.spacing(3),
                        "&::before, &::after": {
                            display: "none"
                        },
                        "& .MuiNativeSelect-select, .MuiInput-input": {
                            ...theme.typography.body2,
                            padding: theme.spacing(0.75, 1),
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: theme.palette.background.neutral
                        },
                        "& .MuiSvgIcon-root": {
                            right: 4
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Skeleton.js
// ----------------------------------------------------------------------
function Skeleton(theme) {
    return {
        MuiSkeleton: {
            defaultProps: {
                animation: "wave"
            },
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.neutral
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Backdrop.js

// ----------------------------------------------------------------------
function Backdrop(theme) {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: (0,styles_.alpha)(theme.palette.grey[800], 0.8)
                },
                invisible: {
                    background: "transparent"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Progress.js

// ----------------------------------------------------------------------
const Progress_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function Progress(theme) {
    const rootStyle = (ownerState)=>{
        const bufferVariant = ownerState.variant === "buffer";
        const defaultStyle = {
            borderRadius: 4,
            "& .MuiLinearProgress-bar": {
                borderRadius: 4
            },
            ...bufferVariant && {
                backgroundColor: "transparent"
            }
        };
        const colorStyle = Progress_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    backgroundColor: (0,material_.alpha)(theme.palette[color].main, 0.24)
                }
            }));
        return [
            ...colorStyle,
            defaultStyle
        ];
    };
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Timeline.js
// ----------------------------------------------------------------------
function Timeline(theme) {
    return {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/TreeView.js


// ----------------------------------------------------------------------
function TreeView(theme) {
    return {
        MuiTreeView: {
            defaultProps: {
                defaultCollapseIcon: /*#__PURE__*/ jsx_runtime.jsx(TreeViewCollapseIcon, {
                    sx: {
                        width: 20,
                        height: 20
                    }
                }),
                defaultExpandIcon: /*#__PURE__*/ jsx_runtime.jsx(TreeViewExpandIcon, {
                    sx: {
                        width: 20,
                        height: 20
                    }
                }),
                defaultEndIcon: /*#__PURE__*/ jsx_runtime.jsx(TreeViewEndIcon, {
                    sx: {
                        color: "text.secondary",
                        width: 20,
                        height: 20
                    }
                })
            }
        },
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                },
                iconContainer: {
                    width: "auto"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Checkbox.js


// ----------------------------------------------------------------------
function Checkbox(theme) {
    return {
        MuiCheckbox: {
            defaultProps: {
                icon: /*#__PURE__*/ jsx_runtime.jsx(CheckboxIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime.jsx(CheckboxCheckedIcon, {}),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime.jsx(CheckboxIndeterminateIcon, {})
            },
            styleOverrides: {
                root: ({ ownerState })=>({
                        padding: theme.spacing(1),
                        ...ownerState.size === "small" && {
                            "& svg": {
                                width: 20,
                                height: 20
                            }
                        },
                        ...ownerState.size === "medium" && {
                            "& svg": {
                                width: 24,
                                height: 24
                            }
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Accordion.js
// ----------------------------------------------------------------------
function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    "&.Mui-expanded": {
                        boxShadow: theme.customShadows.z8,
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.background.paper
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1),
                    "&.Mui-disabled": {
                        opacity: 1,
                        color: theme.palette.action.disabled,
                        "& .MuiTypography-root": {
                            color: "inherit"
                        }
                    }
                },
                expandIconWrapper: {
                    color: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Typography.js
// ----------------------------------------------------------------------
function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Pagination.js

// ----------------------------------------------------------------------
const Pagination_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function Pagination(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyle = (ownerState)=>{
        const outlinedVariant = ownerState.variant === "outlined";
        const softVariant = ownerState.variant === "soft";
        const defaultStyle = {
            "& .MuiPaginationItem-root": {
                ...outlinedVariant && {
                    borderColor: (0,styles_.alpha)(theme.palette.grey[500], 0.32)
                },
                "&.Mui-selected": {
                    fontWeight: theme.typography.fontWeightMedium
                }
            }
        };
        const colorStyle = Pagination_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    ...softVariant && {
                        "& .MuiPaginationItem-root": {
                            "&.Mui-selected": {
                                color: theme.palette[color][isLight ? "dark" : "light"],
                                backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.16),
                                "&:hover": {
                                    backgroundColor: (0,styles_.alpha)(theme.palette[color].main, 0.32)
                                }
                            }
                        }
                    }
                }
            }));
        return [
            ...colorStyle,
            defaultStyle
        ];
    };
    return {
        MuiPagination: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Breadcrumbs.js
// ----------------------------------------------------------------------
function Breadcrumbs(theme) {
    return {
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                },
                li: {
                    display: "inline-flex",
                    margin: theme.spacing(0.25, 0),
                    "& > *": {
                        ...theme.typography.body2
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/ButtonGroup.js

// ----------------------------------------------------------------------
const ButtonGroup_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function ButtonGroup(theme) {
    const rootStyle = (ownerState)=>{
        const inheritColor = ownerState.color === "inherit";
        const containedVariant = ownerState.variant === "contained";
        const outlinedVariant = ownerState.variant === "outlined";
        const textVariant = ownerState.variant === "text";
        const softVariant = ownerState.variant === "soft";
        const horizontalOrientation = ownerState.orientation === "horizontal";
        const verticalOrientation = ownerState.orientation === "vertical";
        const defaultStyle = {
            "& .MuiButtonGroup-grouped": {
                "&:not(:last-of-type)": {
                    ...!outlinedVariant && {
                        borderStyle: "solid",
                        ...inheritColor && {
                            borderColor: (0,styles_.alpha)(theme.palette.grey[500], 0.32)
                        },
                        // HORIZONTAL
                        ...horizontalOrientation && {
                            borderWidth: "0px 1px 0px 0px"
                        },
                        // VERTICAL
                        ...verticalOrientation && {
                            borderWidth: "0px 0px 1px 0px"
                        }
                    }
                }
            }
        };
        const colorStyle = ButtonGroup_COLORS.map((color)=>({
                "& .MuiButtonGroup-grouped": {
                    "&:not(:last-of-type)": {
                        ...!outlinedVariant && {
                            ...ownerState.color === color && {
                                // CONTAINED
                                ...containedVariant && {
                                    borderColor: (0,styles_.alpha)(theme.palette[color].dark, 0.48)
                                },
                                // TEXT
                                ...textVariant && {
                                    borderColor: (0,styles_.alpha)(theme.palette[color].main, 0.48)
                                },
                                // SOFT
                                ...softVariant && {
                                    borderColor: (0,styles_.alpha)(theme.palette[color].dark, 0.24)
                                }
                            }
                        }
                    }
                }
            }));
        const disabledState = {
            "& .MuiButtonGroup-grouped.Mui-disabled": {
                "&:not(:last-of-type)": {
                    borderColor: theme.palette.action.disabledBackground
                }
            }
        };
        return [
            ...colorStyle,
            defaultStyle,
            disabledState
        ];
    };
    return {
        MuiButtonGroup: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Autocomplete.js

// ----------------------------------------------------------------------
function Autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "& span.MuiAutocomplete-tag": {
                        ...theme.typography.body2,
                        width: 24,
                        height: 24,
                        lineHeight: "24px",
                        textAlign: "center",
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.16)
                    }
                },
                paper: {
                    boxShadow: theme.customShadows.dropdown
                },
                listbox: {
                    padding: theme.spacing(0, 1)
                },
                option: {
                    ...theme.typography.body2,
                    padding: theme.spacing(1),
                    margin: theme.spacing(0.75, 0),
                    borderRadius: theme.shape.borderRadius
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/ToggleButton.js

// ----------------------------------------------------------------------
const ToggleButton_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
function ToggleButton(theme) {
    const rootStyle = (ownerState)=>{
        const standardColor = ownerState.color === "standard";
        const defaultStyle = {
            ...standardColor && {
                "&.Mui-selected": {
                    borderColor: "inherit"
                }
            }
        };
        const colorStyle = ToggleButton_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    "&:hover": {
                        borderColor: (0,styles_.alpha)(theme.palette[color].main, 0.48),
                        backgroundColor: (0,styles_.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                    },
                    "&.Mui-selected": {
                        borderColor: theme.palette[color].main
                    }
                }
            }));
        const disabledState = {
            "&.Mui-disabled": {
                "&.Mui-selected": {
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.action.selected,
                    borderColor: theme.palette.action.disabledBackground
                }
            }
        };
        return [
            ...colorStyle,
            defaultStyle,
            disabledState
        ];
    };
    return {
        MuiToggleButton: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyle(ownerState)
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    border: `solid 1px ${(0,styles_.alpha)(theme.palette.grey[500], 0.16)}`
                },
                grouped: {
                    margin: 4,
                    borderColor: "transparent !important",
                    borderRadius: `${theme.shape.borderRadius}px !important`
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/ControlLabel.js
// ----------------------------------------------------------------------
function ControlLabel(theme) {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiFormHelperText: {
            defaultProps: {
                component: "div"
            },
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.disabled
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/LoadingButton.js
// ----------------------------------------------------------------------
function LoadingButton(theme) {
    return {
        MuiLoadingButton: {
            variants: [
                {
                    props: {
                        loading: true,
                        loadingPosition: "start",
                        size: "small"
                    },
                    style: {
                        "& .MuiLoadingButton-loadingIndicatorStart": {
                            left: 10
                        }
                    }
                },
                {
                    props: {
                        loading: true,
                        loadingPosition: "end",
                        size: "small"
                    },
                    style: {
                        "& .MuiLoadingButton-loadingIndicatorEnd": {
                            right: 10
                        }
                    }
                }
            ],
            styleOverrides: {
                loadingIndicatorStart: {
                    left: 14
                },
                loadingIndicatorEnd: {
                    right: 14
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/index.js
//









































// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return Object.assign(Fab(theme), Tabs(theme), Chip(theme), Card(theme), Menu(theme), Link(theme), Input(theme), Radio(theme), Badge(theme), List(theme), Table(theme), Paper(theme), Alert(theme), Switch(theme), Select(theme), Button(theme), Rating(theme), Dialog(theme), Avatar(theme), Slider(theme), Drawer(theme), Stepper(theme), Tooltip(theme), Popover(theme), SvgIcon(theme), Checkbox(theme), DataGrid(theme), Skeleton(theme), Timeline(theme), TreeView(theme), Backdrop(theme), Progress(theme), Accordion(theme), Typography(theme), Pagination(theme), ButtonGroup(theme), Breadcrumbs(theme), Autocomplete(theme), ControlLabel(theme), ToggleButton(theme), LoadingButton(theme));
}

;// CONCATENATED MODULE: ./src/theme/globalStyles.js
// @mui


// ----------------------------------------------------------------------
function GlobalStyles() {
    const inputGlobalStyles = /*#__PURE__*/ jsx_runtime.jsx(material_.GlobalStyles, {
        styles: {
            "*": {
                boxSizing: "border-box"
            },
            html: {
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
                WebkitOverflowScrolling: "touch"
            },
            body: {
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%"
            },
            "#__next": {
                width: "100%",
                height: "100%"
            },
            input: {
                "&[type=number]": {
                    MozAppearance: "textfield",
                    "&::-webkit-outer-spin-button": {
                        margin: 0,
                        WebkitAppearance: "none"
                    },
                    "&::-webkit-inner-spin-button": {
                        margin: 0,
                        WebkitAppearance: "none"
                    }
                }
            },
            img: {
                display: "block",
                maxWidth: "100%"
            },
            ul: {
                margin: 0,
                padding: 0
            }
        }
    });
    return inputGlobalStyles;
}

;// CONCATENATED MODULE: ./src/theme/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui


//






// ----------------------------------------------------------------------
ThemeProvider.propTypes = {
    children: (external_prop_types_default()).node
};
function ThemeProvider({ children }) {
    const themeDirection = "ltr";
    const themeMode = "light";
    const themeOptions = (0,external_react_.useMemo)(()=>({
            palette: palette(themeMode),
            typography: typography/* default */.ZP,
            shape: {
                borderRadius: 8
            },
            direction: themeDirection,
            shadows: shadows(themeMode),
            customShadows: customShadows(themeMode)
        }), [
        themeDirection,
        themeMode
    ]);
    const theme = (0,styles_.createTheme)(themeOptions);
    theme.components = ComponentsOverrides(theme);
    return /*#__PURE__*/ jsx_runtime.jsx(styles_.StyledEngineProvider, {
        injectFirst: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime.jsx(GlobalStyles, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 2074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   cv: () => (/* binding */ remToPx)
/* harmony export */ });
/* unused harmony exports pxToRem, responsiveFontSizes */
/* harmony import */ var _next_font_google_target_css_path_src_theme_typography_js_import_Poppins_arguments_weight_400_500_600_500_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2362);
/* harmony import */ var _next_font_google_target_css_path_src_theme_typography_js_import_Poppins_arguments_weight_400_500_600_500_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_theme_typography_js_import_Poppins_arguments_weight_400_500_600_500_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0__);


// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts
const typography = {
    fontFamily: (_next_font_google_target_css_path_src_theme_typography_js_import_Poppins_arguments_weight_400_500_600_500_800_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont___WEBPACK_IMPORTED_MODULE_0___default().style).fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 500,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 500,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 500,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 500,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);




/***/ }),

/***/ 3763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5370);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _localStorageAvailable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4862);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _localStorageAvailable__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _localStorageAvailable__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// config



// ----------------------------------------------------------------------
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _config_global__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API_KEY */ .qL
});
axiosInstance.interceptors.response.use(async (response)=>response, async (error)=>{
    const { response } = error;
    if (response.status === 401) {
        console.log("response 401", response);
        await (0,_localStorageAvailable__WEBPACK_IMPORTED_MODULE_3__/* .setSession */ .KY)(null);
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/auth/login");
    }
    return Promise.reject(error && error || "Something went wrong");
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wm: () => (/* binding */ ICON),
/* harmony export */   qL: () => (/* binding */ HOST_API_KEY),
/* harmony export */   w$: () => (/* binding */ NAV),
/* harmony export */   yf: () => (/* binding */ HEADER)
/* harmony export */ });
// API
// ----------------------------------------------------------------------
const HOST_API_KEY = "https://webpristine.com/work/clickandsend/" || 0;
const HEADER = {
    H_MOBILE: 64,
    H_MAIN_DESKTOP: 88,
    H_DASHBOARD_DESKTOP: 92,
    H_DASHBOARD_DESKTOP_OFFSET: 92 - 32
};
const NAV = {
    W_BASE: 260,
    W_DASHBOARD: 280,
    W_DASHBOARD_MINI: 88,
    //
    H_DASHBOARD_ITEM: 48,
    H_DASHBOARD_ITEM_SUB: 36,
    //
    H_DASHBOARD_ITEM_HORIZONTAL: 32
};
const ICON = {
    NAV_ITEM: 24,
    NAV_ITEM_HORIZONTAL: 22,
    NAV_ITEM_MINI: 22
};


/***/ }),

/***/ 4862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KY: () => (/* binding */ setSession),
/* harmony export */   ZP: () => (/* binding */ localStorageAvailable),
/* harmony export */   hv: () => (/* binding */ isAccessToken),
/* harmony export */   qz: () => (/* binding */ clearToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _axios__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ----------------------------------------------------------------------



function localStorageAvailable() {
    try {
        // Incognito mode might reject access to the localStorage for security reasons.
        // window isn't defined on Node.js
        // https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
        const key = "__some_random_key_you_are_not_going_to_use__";
        window.localStorage.setItem(key, key);
        window.localStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
}
const isAccessToken = ()=>{
    if (false) {} else {
        return false;
    }
};
const clearToken = ()=>{
    if (false) {}
// Router.push("/auth/login");
};
const setSession = (accessToken)=>{
    console.log("accessToken", accessToken);
    if (accessToken) {
        localStorage.setItem("token", accessToken);
        _axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    // tokenExpired(exp);
    } else {
        localStorage.removeItem("accessToken");
        delete axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Authorization;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;