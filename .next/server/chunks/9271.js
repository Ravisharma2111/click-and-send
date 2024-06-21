"use strict";
exports.id = 9271;
exports.ids = [9271];
exports.modules = {

/***/ 5222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _TextMaxLine__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _useTypography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3718);
/* harmony import */ var _TextMaxLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8936);




/***/ }),

/***/ 2393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5623);
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const DashboardCard = ({ jobPost })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const [companyData, setCompanyData] = react__WEBPACK_IMPORTED_MODULE_9___default().useState([]);
    const { jobPost: { pageCount, data, page, pageSize }, jobHistory, jobDelete } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)((state)=>state.customerJob);
    const handlePageChange = (event, value)=>{
        dispatch((0,_redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__/* .setJobPostPage */ ._O)(value));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        dispatch((0,_redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__/* .getJobPost */ .zj)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_9___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__/* .getJobHistory */ .M_)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_9___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_customercompany__WEBPACK_IMPORTED_MODULE_3__/* .getJobDelete */ .dR)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    const [subscription, setSubscription] = react__WEBPACK_IMPORTED_MODULE_9___default().useState([]);
    // API FETCH LIST
    const fetchdata = async (type = "company")=>{
        try {
            const statusShowPlan = 1;
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get(`/api/auth/master/plan/list/${type}/${statusShowPlan}`);
            if (response.status === 200) {
                const subscriptionData = lodash_find__WEBPACK_IMPORTED_MODULE_7___default()(response?.data.view_data, {
                    default: 1
                });
                if (subscriptionData) {
                    setSubscription(subscriptionData);
                } else {
                    console.log("No data found in response.view_data");
                }
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_9___default().useEffect(()=>{
        fetchdata();
    }, []);
    react__WEBPACK_IMPORTED_MODULE_9___default().useEffect(()=>{
        if (data) {
            const filteredData = data.filter((compData)=>compData.created_by === "company" && compData.user_id === user.id);
            setCompanyData(filteredData);
        }
    }, [
        data,
        user
    ]);
    console.log(companyData?.length, "companyData");
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
                                backgroundColor: router.pathname === "/dashboard/company/job_posted" ? "#145365" : "#145365",
                                border: "1px solid #145365",
                                color: router.pathname === "/dashboard/company/job_posted" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/company/job_posted"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                className: "dashboardCards_CardContent_responsive",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    spacing: 0,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>router.pathname === "/dashboard/company/job_posted" ? "#246678" : "#246678"
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
                                                    children: "JOB POSTED"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h4",
                                                    textAlign: "center",
                                                    children: companyData?.length
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
                                                    children: jobHistory?.dataCount
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
                                backgroundColor: (theme)=>theme.palette.error.main,
                                border: (theme)=>`1px solid ${theme.palette.error.main}`,
                                color: (theme)=>theme.palette.common.white,
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/company/job_delete"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    spacing: 0,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.error.light, 0.3)
                                            },
                                            height: "80px",
                                            p: 2,
                                            width: "80px",
                                            borderRadius: "50%",
                                            component: "div",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                icon: "material-symbols:delete-outline",
                                                width: 48
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h6",
                                                    fontWeight: 300,
                                                    children: "JOB DELETE"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h4",
                                                    textAlign: "center",
                                                    children: jobDelete?.dataCount
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
                                backgroundColor: router.pathname === "/dashboard/company/subscription" ? "#FECA3C" : "#FECA3C",
                                border: "1px solid #FECA3C",
                                color: router.pathname === "/dashboard/company/subscription" ? "#fff" : "#fff",
                                cursor: "pointer"
                            },
                            onClick: ()=>router.push("/dashboard/company/subscription"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    direction: "row",
                                    justifyContent: "space-around",
                                    spacing: 0,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            sx: {
                                                backgroundColor: (theme)=>router.pathname === "/dashboard/company/subscription" ? "#ffd768" : "#ffd768"
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h6",
                                                    fontWeight: 300,
                                                    children: "SUBSCRIPTION"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                    variant: "h4",
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
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LT: () => (/* binding */ setJobHistoryPage),
/* harmony export */   M_: () => (/* binding */ getJobHistory),
/* harmony export */   _O: () => (/* binding */ setJobPostPage),
/* harmony export */   dR: () => (/* binding */ getJobDelete),
/* harmony export */   zS: () => (/* binding */ setJobHistoryPageSize),
/* harmony export */   zj: () => (/* binding */ getJobPost)
/* harmony export */ });
/* unused harmony exports startJobPostLoading, setJobDeletePage */
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);
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

/***/ })

};
;