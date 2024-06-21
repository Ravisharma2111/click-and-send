"use strict";
exports.id = 1995;
exports.ids = [1995];
exports.modules = {

/***/ 1995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6179);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7460);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6982);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3763);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(261);
/* harmony import */ var _components_not_found__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4762);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1425);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9409);
/* harmony import */ var _redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8217);
/* harmony import */ var _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_10__, _utils_axios__WEBPACK_IMPORTED_MODULE_11__, _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_16__, _redux_store__WEBPACK_IMPORTED_MODULE_17__, _redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_18__, _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_19__]);
([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_10__, _utils_axios__WEBPACK_IMPORTED_MODULE_11__, _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_16__, _redux_store__WEBPACK_IMPORTED_MODULE_17__, _redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_18__, _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const DriverJobListSection = ({ formik })=>{
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_16__/* .useAuthContext */ .E)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_17__/* .useDispatch */ .I0)();
    const { Driver: { pageCount, data, page, pageSize } } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .v9)((state)=>state.companyJob);
    const handlePageChange = (event, value)=>{
        dispatch((0,_redux_slices_job_customer__WEBPACK_IMPORTED_MODULE_18__/* .setJobPostPage */ ._O)(value));
    };
    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_19__/* .getDriver */ .L$)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, []);
    const [layout, setLayout] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
    const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_6___default().useState("new");
    const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
    console.log("datadata", data);
    const MonthSelect = [
        {
            label: "Choose Month",
            value: 0
        },
        {
            label: "January",
            value: "January"
        },
        {
            label: "February",
            value: "February"
        },
        {
            label: "March",
            value: "March"
        },
        {
            label: "April",
            value: "April"
        },
        {
            label: "May",
            value: "May"
        },
        {
            label: "June",
            value: "June"
        },
        {
            label: "July",
            value: "July"
        },
        {
            label: "August",
            value: "August"
        },
        {
            label: "September",
            value: "September"
        },
        {
            label: "October",
            value: "October"
        },
        {
            label: "November",
            value: "November"
        },
        {
            label: "December",
            value: "December"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            py: 3,
            pb: 12,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        py: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            jobPost: data?.length
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        py: 2,
                        children: loader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeleton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    item: true,
                                    md: 7,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                        direction: "row",
                                        spacing: 1,
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                fontSize: 28,
                                                fontWeight: 600,
                                                color: "primary",
                                                children: "Driver List"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                borderRadius: "50%",
                                                border: "1px solid",
                                                borderColor: (theme)=>theme.palette.primary.main,
                                                color: (theme)=>theme.palette.primary.main,
                                                py: 0.6,
                                                px: 1.8,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                    fontSize: "1.3rem",
                                                    fontWeight: 500,
                                                    color: "primary",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        start: 0,
                                                        duration: 1,
                                                        end: data?.length,
                                                        enableScrollSpy: true,
                                                        scrollSpyDelay: 200
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    item: true,
                                    md: 3,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .SelectBox */ .jL, {
                                            sx: {
                                                mb: 0
                                            },
                                            size: "small",
                                            fullWidth: true,
                                            options: MonthSelect,
                                            name: `month`,
                                            value: formik?.values?.month,
                                            onChange: formik.handleChange,
                                            error: formik.touched.month && formik.errors.month,
                                            helperText: formik.touched.month && formik.errors.month
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    item: true,
                                    md: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                            variant: "contained",
                                            fullWidth: true,
                                            onClick: ()=>router.push("/dashboard/company/driver/form/create"),
                                            children: "Add Driver"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        py: 2,
                        sx: {
                            background: " "
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                container: true,
                                rowSpacing: 0,
                                children: data && data?.length > 0 ? data.map((item, index)=>{
                                    let productDetail = "N/A";
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                        item: true,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
                                            sx: {
                                                my: 2,
                                                borderWidth: "2px",
                                                ":hover": {
                                                    borderColor: "#ff7534",
                                                    transition: " all 0.3s ease-in-out"
                                                }
                                            },
                                            variant: "outlined",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                    direction: "row",
                                                    justifyContent: "space-between",
                                                    px: 2,
                                                    py: 1.4,
                                                    alignItems: "center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                            sx: {
                                                                width: "90%"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                color: "common.black",
                                                                fontSize: 17,
                                                                sx: {
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis"
                                                                },
                                                                fontWeight: 500,
                                                                children: item?.email
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                            container: true,
                                                            spacing: 2,
                                                            alignItems: "start",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 3,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                fontSize: 28,
                                                                                fontWeight: 500,
                                                                                children: item.user_name
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 1,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                    component: "img",
                                                                                    alt: item.user_name,
                                                                                    src: `${item.base_url}${item.profile_img}`,
                                                                                    sx: {
                                                                                        width: "83px",
                                                                                        height: "59px",
                                                                                        border: "1px solid lightgrey",
                                                                                        objectFit: "cover"
                                                                                    }
                                                                                })
                                                                            }, index)
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 3,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                            mb: 4,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                        fontSize: 13,
                                                                                        fontWeight: 600,
                                                                                        children: "Mobile"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                                    direction: "row",
                                                                                    spacing: 1,
                                                                                    alignItems: "center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                            sx: {
                                                                                                backgroundColor: "#FEE6BB",
                                                                                                width: "28px",
                                                                                                height: "28px",
                                                                                                borderRadius: "50%",
                                                                                                p: "5px"
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                                color: (theme)=>theme.palette.primary.main,
                                                                                                icon: "majesticons:calendar-line"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                                color: "grey",
                                                                                                fontWeight: 400,
                                                                                                fontSize: 13,
                                                                                                children: item?.mobile || "N/A"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                fontSize: 13,
                                                                                fontWeight: 600,
                                                                                children: "Driver job completed"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 1,
                                                                            alignItems: "center",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                    sx: {
                                                                                        backgroundColor: "#FEE6BB",
                                                                                        width: "28px",
                                                                                        height: "28px",
                                                                                        borderRadius: "50%",
                                                                                        p: "5px"
                                                                                    },
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                        color: (theme)=>theme.palette.primary.main,
                                                                                        icon: "majesticons:calendar-line"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                        color: "grey",
                                                                                        fontWeight: 400,
                                                                                        fontSize: 13,
                                                                                        children: item?.state || "N/A"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 3,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                        mb: 4,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                    fontSize: 13,
                                                                                    fontWeight: 600,
                                                                                    children: "Running Job"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                                direction: "row",
                                                                                spacing: 1,
                                                                                alignItems: "center",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                        sx: {
                                                                                            backgroundColor: "#FEE6BB",
                                                                                            width: "28px",
                                                                                            height: "28px",
                                                                                            borderRadius: "50%",
                                                                                            p: "5px"
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                            color: (theme)=>theme.palette.primary.main,
                                                                                            icon: "majesticons:calendar-line"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                            color: "grey",
                                                                                            fontWeight: 400,
                                                                                            fontSize: 13,
                                                                                            children: item?.city || "N/A"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 3
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                                                            sx: {
                                                                my: 2
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                direction: "row",
                                                                alignItems: "center",
                                                                justifyContent: "flex-end",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                                        color: "dark",
                                                                        fullWidth: true,
                                                                        variant: "outlined",
                                                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                            icon: "basil:edit-solid"
                                                                        }),
                                                                        onClick: ()=>router.push(`/dashboard/company/driver/form/${item?.user_id}`),
                                                                        sx: {
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Edit Driver"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: !loader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_not_found__WEBPACK_IMPORTED_MODULE_15__/* .JobSekelton */ .J, {
                                        title: "No Driver List..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
                                        count: pageCount,
                                        color: "primary",
                                        page: page,
                                        onChange: handlePageChange,
                                        variant: "outlined",
                                        shape: "rounded",
                                        renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {
                                                slots: {
                                                    previous: ()=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                            direction: "row",
                                                            spacing: 0.5,
                                                            alignItems: "center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                                        });
                                                    },
                                                    next: ()=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                            direction: "row",
                                                            spacing: 0.5,
                                                            alignItems: "center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                                        });
                                                    }
                                                },
                                                ...item
                                            })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DriverJobListSection);
const DeleteModal = ({ id })=>{
    const [open, setOpen] = React.useState(false);
    const { user } = useAuthContext();
    const { enqueueSnackbar } = useSnackbar();
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const dispatch = useDispatch();
    const { jobPost: { pageCount, data, page, pageSize } } = useSelector((state)=>state.customerJob);
    const deleteData = async ()=>{
        await axiosInstance.delete(`api/auth/master/jobs/delete/${id}`).then((response)=>{
            if (response?.status === 200) {
                handleClose();
                dispatch(getJobPost({
                    user_id: user?.id,
                    type: user?.user_type,
                    lat: 0,
                    long: 0
                }));
                // succes
                enqueueSnackbar(/*#__PURE__*/ _jsx(Alert, {
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
            }
        }).catch((error)=>{
            const { response } = error;
            // error
            enqueueSnackbar(/*#__PURE__*/ _jsx(Alert, {
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
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(Button, {
                onClick: handleOpen,
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: "fluent:delete-12-regular",
                    width: "1.7em",
                    color: (theme)=>theme.palette.primary.main
                })
            }),
            /*#__PURE__*/ _jsx(Modal, {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ _jsxs(Box, {
                    sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        textAlign: "center",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "8px",
                        bgcolor: "background.paper",
                        border: "1px solid #f5f5f5",
                        boxShadow: 24,
                        p: 4
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Stack, {
                            spacing: 1,
                            sx: {
                                mb: 4
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Typography, {
                                    id: "modal-modal-title",
                                    fontWeight: 600,
                                    fontSize: 20,
                                    component: "p",
                                    children: "Sure you want to delete?"
                                }),
                                /*#__PURE__*/ _jsx(Typography, {
                                    id: "modal-modal-title",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    component: "p",
                                    sx: {
                                        color: "#54595E"
                                    },
                                    children: "Are you sure you want to delete this?"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ _jsx(Button, {
                                    fullWidth: true,
                                    variant: "outlined",
                                    onClick: handleClose,
                                    children: "No, cancel"
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    fullWidth: true,
                                    variant: "contained",
                                    onClick: deleteData,
                                    children: "Yes, Delete"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;