"use strict";
exports.id = 9468;
exports.ids = [9468];
exports.modules = {

/***/ 9468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3984);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9409);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const DashboardCard = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const { jobAlert: { pageCount, data, page, pageSize }, jobActive, jobHistory } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)((state)=>state.driverJob);
    const handlePageChange = (event, value)=>{
        dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .setJobAlertPage */ .mY)(value));
        dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .setJobActivePage */ .oG)(value));
        dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .setJobHistoryPage */ .LT)(value));
    };
    react__WEBPACK_IMPORTED_MODULE_9___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .getJobActive */ .vr)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .getJobAlert */ .tH)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .getJobHistory */ .M_)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    const [subscription, setSubscription] = react__WEBPACK_IMPORTED_MODULE_9___default().useState([]);
    // API FETCH LIST
    const fetchdata = async (type = "driver")=>{
        const statusShowPlan = 1;
        await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get(`/api/auth/master/plan/list/${type}/${statusShowPlan}`).then((response)=>{
            if (response.status === 200) {
                let subscriptionData = lodash_find__WEBPACK_IMPORTED_MODULE_7___default()(response?.data.view_data, {
                    default: 1
                });
                setSubscription(subscriptionData);
            }
        }).catch((error)=>{
            console.log("error", error);
        });
    };
    react__WEBPACK_IMPORTED_MODULE_9___default().useEffect(()=>{
        fetchdata();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
            sx: {
                mt: 4
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                className: "dashboard_box_grid_responsive",
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                p: 4,
                                backgroundColor: router.pathname === "/dashboard/driver/job_request" ? "#145365" : "#145365",
                                border: "1px solid #145365",
                                color: router.pathname === "/dashboard/driver/job_request" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/driver/job_request"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                direction: "row",
                                justifyContent: "space-around",
                                spacing: 0,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        sx: {
                                            backgroundColor: (theme)=>router.pathname === "/dashboard/driver/job_request" ? "#246678" : "#246678",
                                            width: "60px",
                                            height: "60px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        height: "auto",
                                        py: 1,
                                        borderRadius: 5,
                                        component: "div",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            icon: "fluent:alert-48-regular",
                                            width: 45
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                fontSize: 16,
                                                fontWeight: 300,
                                                children: "JOB ALERT"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                variant: "h5",
                                                textAlign: "center",
                                                children: data?.length
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                p: 4,
                                backgroundColor: router.pathname === "/dashboard/driver/active_jobs" ? "#ff7533" : "#ff7533",
                                border: "1px solid #ff7533",
                                color: router.pathname === "/dashboard/driver/active_jobs" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/driver/active_jobs"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                direction: "row",
                                justifyContent: "space-around",
                                alignItems: "center",
                                spacing: 0,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        sx: {
                                            backgroundColor: (theme)=>router.pathname === "/dashboard/driver/job_post" ? "#ff884f" : "#ff884f"
                                        },
                                        height: "60px",
                                        py: 0.5,
                                        px: 1,
                                        borderRadius: 5,
                                        component: "div",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            icon: "solar:user-linear",
                                            width: 45
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                fontSize: 16,
                                                fontWeight: 300,
                                                children: "ACTIVE JOBS"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                variant: "h5",
                                                textAlign: "center",
                                                children: jobActive?.dataCount
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                p: 4,
                                backgroundColor: router.pathname === "/dashboard/driver/job_history" ? "#FD9B3D" : "#FD9B3D",
                                border: "1px solid #FD9B3D",
                                color: router.pathname === "/dashboard/driver/job_history" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/driver/job_history"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                direction: "row",
                                justifyContent: "space-around",
                                spacing: 0,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        sx: {
                                            backgroundColor: (theme)=>router.pathname === "/dashboard/driver/job_history" ? "#ffa54e" : "#ffa54e"
                                        },
                                        height: "60px",
                                        py: 0.5,
                                        px: 1,
                                        borderRadius: 5,
                                        component: "div",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                icon: "ri:history-fill",
                                                width: 48
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                fontSize: 16,
                                                fontWeight: 300,
                                                children: "JOB HISTORY"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                variant: "h5",
                                                textAlign: "center",
                                                children: jobHistory?.dataCount
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                p: 4,
                                backgroundColor: router.pathname === "/dashboard/driver/subscription" ? "#FECA3C" : "#FECA3C",
                                border: "1px solid #FECA3C",
                                color: router.pathname === "/dashboard/driver/subscription" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/driver/subscription"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                direction: "row",
                                justifyContent: "space-around",
                                spacing: 0,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        sx: {
                                            backgroundColor: (theme)=>router.pathname === "/dashboard/driver/subscription" ? "#ffd768" : "#ffd768"
                                        },
                                        height: "60px",
                                        py: 0.5,
                                        px: 1,
                                        borderRadius: 5,
                                        component: "div",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            icon: "material-symbols:subscriptions-outline",
                                            width: 45
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                fontSize: 16,
                                                fontWeight: 300,
                                                children: "SUBSCRIPTION"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                variant: "h5",
                                                textAlign: "center",
                                                children: [
                                                    subscription?.duration || 0,
                                                    " Month"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;