"use strict";
exports.id = 6982;
exports.ids = [6982];
exports.modules = {

/***/ 6982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4704);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9409);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8217);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__, _redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_9__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__, _redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const DashboardCard = ({ jobPost })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const { dashboard } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)((state)=>state.companyJob);
    const [subscription, setSubscription] = react__WEBPACK_IMPORTED_MODULE_8___default().useState([]);
    console.log("dashboard", dashboard);
    // API FETCH LIST
    const fetchdata = async (type = "company")=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get(`/api/auth/master/plan/list/${type}`).then((response)=>{
            if (response.status === 200) {
                let subscriptionData = find(response?.data.view_data, {
                    default: 1
                });
                setSubscription(subscriptionData);
            }
        }).catch((error)=>{
            console.log("error", error);
        });
    };
    react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(()=>{
        fetchdata();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_3__/* .getCompanyDashboard */ .TD)({
            user_id: user?.id
        }));
    }, [
        user?.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        dispatch((0,_redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_9__/* .getJobPost */ .zj)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_9__/* .getJobHistory */ .M_)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_9__/* .getJobDelete */ .dR)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
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
                                backgroundColor: router.pathname === "/dashboard/company/driver/list" ? "#145365" : "#145365",
                                border: "1px solid #145365",
                                color: router.pathname === "/dashboard/company/driver/list" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/company/driver/list"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    spacing: 0,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>router.pathname === "/dashboard/company/driver/list" ? "#246678" : "#246678"
                                            },
                                            height: "80px",
                                            p: 2,
                                            width: "80px",
                                            borderRadius: "50%",
                                            component: "div",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                icon: "basil:bag-solid",
                                                width: 48
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h6",
                                                    fontWeight: 300,
                                                    children: "Job List 2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h4",
                                                    textAlign: "center",
                                                    children: dashboard?.drivers
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                backgroundColor: router.pathname === "/dashboard/company/job_history" ? "#FD9B3D" : "#FD9B3D",
                                border: "1px solid #FD9B3D",
                                color: router.pathname === "/dashboard/company/job_history" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/company/job_history"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    spacing: 0,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>router.pathname === "/dashboard/company/job_history" ? "#ffa54e" : "#ffa54e"
                                            },
                                            height: "80px",
                                            p: 2,
                                            width: "80px",
                                            borderRadius: "50%",
                                            component: "div",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                icon: "ri:history-fill",
                                                width: 48
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h6",
                                                    fontWeight: 300,
                                                    children: "JOB HISTORY"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h4",
                                                    textAlign: "center",
                                                    children: dashboard?.history
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                backgroundColor: router.pathname === "/dashboard/company/active_jobs" ? "#FD9B3D" : "#FD9B3D",
                                border: "1px solid #FD9B3D",
                                color: router.pathname === "/dashboard/company/active_jobs" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/company/active_jobs"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    spacing: 0,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>router.pathname === "/dashboard/company/job_post" ? "#ffa54e" : "#ffa54e"
                                            },
                                            height: "80px",
                                            p: 2,
                                            width: "80px",
                                            borderRadius: "50%",
                                            component: "div",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                icon: "solar:user-linear",
                                                width: 48
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
                                                    children: dashboard?.active
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        item: true,
                        md: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {
                            sx: {
                                backgroundColor: router.pathname === "/invoice" ? "#FECA3C" : "#FECA3C",
                                border: "1px solid #FECA3C",
                                color: router.pathname === "/invoice" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/invoice"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    spacing: 0,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>router.pathname === "/invoice" ? "#ffd768" : "#ffd768"
                                            },
                                            height: "80px",
                                            p: 2,
                                            width: "80px",
                                            borderRadius: "50%",
                                            component: "div",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                icon: "material-symbols:subscriptions-outline",
                                                width: 48
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                variant: "h6",
                                                fontWeight: 300,
                                                children: "Invoice"
                                            })
                                        })
                                    ]
                                })
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