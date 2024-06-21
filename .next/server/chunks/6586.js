"use strict";
exports.id = 6586;
exports.ids = [6586];
exports.modules = {

/***/ 6586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8703);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9964);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_form__WEBPACK_IMPORTED_MODULE_2__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__, _utils_axios__WEBPACK_IMPORTED_MODULE_4__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_form__WEBPACK_IMPORTED_MODULE_2__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__, _utils_axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const JobDeleteDetail = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();
    const { id } = router.query;
    const [jobDetail, setJobDetail] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const [ratings, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const [reviewOpen, setReviewOpen] = react__WEBPACK_IMPORTED_MODULE_10___default().useState(false);
    const handleReviewOpen = (id)=>setReviewOpen(id);
    const handleReviewClose = ()=>setReviewOpen(false);
    const [addressOpen, setAddressOpen] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const handleAddressOpen = (address)=>setAddressOpen(address);
    const handleAddressClose = ()=>setAddressOpen(false);
    // Rating list api
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
        initialValues: {
            job_id: "",
            user_id: "",
            given_by: "customer",
            rating: "",
            review: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.review) {
                errors.review = "Note is required";
            }
            if (!values.rating) {
                errors.rating = "Rating is required";
            }
            return errors;
        },
        onSubmit: async (values)=>{
            await _utils_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("api/auth/rating/add", formik.values).then((response)=>{
                if (response.status === 200) {
                    formik.handleReset();
                    setReviewOpen(false);
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9___default()), {
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
                    getJobDetail();
                    handleClose(true);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }
    });
    const getJobDetail = async ()=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get(`api/auth/jobs/view/${id}`).then((response)=>{
            if (response?.status === 200) {
                setJobDetail(response?.data?.view_data);
                setRatings(response?.data?.view_data?.job?.ratings);
            }
        }).catch((error)=>{
            console.log("RatignList", error);
        });
    };
    // End
    react__WEBPACK_IMPORTED_MODULE_10___default().useEffect(()=>{
        if (id) {
            getJobDetail();
        }
    }, [
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        formik.setFieldValue("user_id", user?.id);
        formik.setFieldValue("job_id", id);
    }, [
        user,
        user?.id,
        id
    ]);
    console.log("jobDetail345", jobDetail, ratings);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                mt: 10,
                pb: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        my: 4,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                variant: "outlined",
                                sx: {
                                    my: 2
                                },
                                onClick: ()=>router.push("/dashboard/customer/job_delete"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: "ion:play-back",
                                        sx: {
                                            mr: "7px"
                                        },
                                        width: 14
                                    }),
                                    "Back"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
                                sx: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                        textAlign: "center",
                                        variant: "h6",
                                        my: 1,
                                        fontSize: 17,
                                        children: "Job Detail"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                variant: "h4",
                                                component: "h4",
                                                textAlign: "center",
                                                children: jobDetail?.job?.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                                direction: "row",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                spacing: 2,
                                                my: 1,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        component: "p",
                                                        variant: "body2",
                                                        fontWeight: 500,
                                                        children: "Vehicle Requirment:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        component: "p",
                                                        variant: "body2",
                                                        fontWeight: 600,
                                                        children: jobDetail?.job?.vehicle
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {
                                                sx: {
                                                    my: 4
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        component: "p",
                                                        variant: "body1",
                                                        fontWeight: 500,
                                                        textAlign: "center",
                                                        mb: 2,
                                                        children: "Pickup Details"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
                                                        sx: {
                                                            borderRadius: "10px",
                                                            border: "1px solid",
                                                            borderColor: (theme)=>theme.palette.primary.main
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
                                                            "aria-label": "simple table",
                                                            sx: {
                                                                minWidth: "100%"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Address"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Pickup Date"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Pickup Time"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "L*W*H"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Quantity"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Image"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Material"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {
                                                                    children: jobDetail?.pickup && jobDetail?.pickup?.length > 0 && jobDetail?.pickup.map((item, index)=>{
                                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                                            sx: {
                                                                                "&:last-child td, &:last-child th": {
                                                                                    border: 0
                                                                                }
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    component: "th",
                                                                                    scope: "row",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.address
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.pickup_date
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.pickup_time
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: `${item?.item?.length} * ${item?.item?.width} * ${item?.item?.height}`
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.quantity
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                            component: "img",
                                                                                            m: "auto",
                                                                                            src: `${item?.item?.base_url}${item?.item?.image}`,
                                                                                            width: 80
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.material
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, `jobDetail${index}`);
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {
                                                sx: {
                                                    my: 4
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        component: "p",
                                                        variant: "body1",
                                                        fontWeight: 500,
                                                        textAlign: "center",
                                                        mb: 2,
                                                        children: "Delivery Details"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
                                                        sx: {
                                                            borderRadius: "10px",
                                                            border: "1px solid",
                                                            borderColor: (theme)=>theme.palette.primary.main
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
                                                            "aria-label": "simple table",
                                                            sx: {
                                                                minWidth: "100%"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Address"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Delivery Date"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Delivery Time"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                align: "left",
                                                                                children: "Quantity"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {
                                                                    children: jobDetail?.drop && jobDetail?.drop?.length > 0 && jobDetail?.drop.map((item, index)=>{
                                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                                                            sx: {
                                                                                "&:last-child td, &:last-child th": {
                                                                                    border: 0
                                                                                }
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    component: "th",
                                                                                    scope: "row",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.address
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.drop_date
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.drop_time
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        component: "p",
                                                                                        variant: "body2",
                                                                                        children: item?.item?.quantity
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, `jobDetail${index}`);
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                my: 4,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                        my: 3,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                textAlign: "right",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                                    variant: "outlined",
                                                                    onClick: ()=>setReviewOpen(true),
                                                                    children: "+ Add Rating"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                    textAlign: "center",
                                                                    variant: "h4",
                                                                    children: "Rating & Reviews"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    ratings && ratings?.length > 0 && ratings.map((item, index)=>{
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                                                    spacing: 3,
                                                                    direction: "row",
                                                                    py: 2,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                            component: "img",
                                                                            src: `${item?.user?.base_url}${item?.user?.profile_img}`,
                                                                            width: 60,
                                                                            height: 60,
                                                                            sx: {
                                                                                objectFit: "cover"
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                                                            direction: "column",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        fontSize: 16,
                                                                                        fontWeight: 500,
                                                                                        color: "primary",
                                                                                        children: item?.user?.user_name
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Rating, {
                                                                                        value: item?.rating,
                                                                                        readOnly: true,
                                                                                        size: "small"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        fontSize: 14,
                                                                                        children: item?.review
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {})
                                                            ]
                                                        }, index);
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                open: addressOpen,
                onClose: handleAddressClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: "10px",
                        p: 4
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableContainer, {
                        sx: {
                            borderRadius: "10px",
                            border: "1px solid",
                            borderColor: (theme)=>theme.palette.grey[300]
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Table, {
                            "aria-label": "simple table",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableHead, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                align: "left",
                                                children: "Sr. No."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                align: "left",
                                                children: "Address"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableBody, {
                                    children: addressOpen && addressOpen?.length > 0 && addressOpen.map((item, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableRow, {
                                            sx: {
                                                "&:last-child td, &:last-child th": {
                                                    border: 0
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                    component: "th",
                                                    scope: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        children: index + 1
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        sx: {
                                                            maxWidth: "52em",
                                                            wordWrap: "break-word"
                                                        },
                                                        children: item?.address
                                                    })
                                                })
                                            ]
                                        }, `jobDetail${index}`);
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
                open: reviewOpen,
                onClose: handleReviewOpen,
                maxWidth: "xs",
                fullWidth: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
                    sx: {
                        my: 3
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        component: "form",
                        noValidate: true,
                        onSubmit: formik.handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                align: "right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    icon: "basil:cross-solid",
                                    width: 20,
                                    onClick: handleReviewClose,
                                    sx: {
                                        border: "1px solid grey",
                                        borderRadius: "50%",
                                        cursor: "pointer"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                mb: 2,
                                variant: "subtitle1",
                                children: "Review"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Rating, {
                                            value: formik.values.rating,
                                            onChange: formik.handleChange,
                                            name: "rating",
                                            helperText: formik.touched.rating && formik.errors.rating
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__/* .TextBox */ .zC, {
                                            size: "small",
                                            name: "review",
                                            label: "Review",
                                            fullWidth: true,
                                            multiline: true,
                                            rows: "4",
                                            value: formik.values.review,
                                            onChange: formik.handleChange,
                                            helperText: formik.touched.review && formik.errors.review
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                direction: "row",
                                spacing: 8,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    fullWidth: true,
                                    variant: "outlined",
                                    type: "submit",
                                    children: "Submit"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobDeleteDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;