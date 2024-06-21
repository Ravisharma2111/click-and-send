"use strict";
exports.id = 3623;
exports.ids = [3623];
exports.modules = {

/***/ 5222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _TextMaxLine__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _useTypography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3718);
/* harmony import */ var _TextMaxLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8936);




/***/ }),

/***/ 3623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8703);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9964);
/* harmony import */ var _components_text_max_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5222);
/* harmony import */ var _module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6982);
/* harmony import */ var _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4704);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9409);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3763);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7460);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6179);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_form__WEBPACK_IMPORTED_MODULE_2__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__, _module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_5__, _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__, _redux_store__WEBPACK_IMPORTED_MODULE_7__, _utils_axios__WEBPACK_IMPORTED_MODULE_8__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_form__WEBPACK_IMPORTED_MODULE_2__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__, _module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_5__, _redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__, _redux_store__WEBPACK_IMPORTED_MODULE_7__, _utils_axios__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const DashboardAddJob = ()=>{
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_7__/* .useDispatch */ .I0)();
    const { jobActive: { pageCount, data, page, pageSize }, jobHistory } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v9)((state)=>state.companyJob);
    const handlePageChange = (event, value)=>{
        dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__/* .setJobActivePage */ .oG)(value));
    };
    react__WEBPACK_IMPORTED_MODULE_16___default().useEffect(()=>{
        dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__/* .getJobActive */ .vr)({
            user_id: user?.id,
            type: user?.user_type,
            lat: 0,
            long: 0
        }));
    }, [
        page
    ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_14__.useSnackbar)();
    const [layout, setLayout] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    const [setPage] = react__WEBPACK_IMPORTED_MODULE_16___default().useState(1);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_16___default().useState(false);
    const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_16___default().useState("new");
    const [pageData, setPageData] = react__WEBPACK_IMPORTED_MODULE_16___default().useState({});
    const [startOpen, setStartOpen] = react__WEBPACK_IMPORTED_MODULE_16___default().useState(false);
    const handleStartOpen = (id)=>setStartOpen(id);
    const handleStartClose = ()=>setStartOpen(false);
    const [completeOpen, setCompleteOpen] = react__WEBPACK_IMPORTED_MODULE_16___default().useState(false);
    const handleCompleteOpen = (id)=>setCompleteOpen(id);
    const handleCompleteClose = ()=>setCompleteOpen(false);
    // Rating
    const [reviewOpen, setReviewOpen] = react__WEBPACK_IMPORTED_MODULE_16___default().useState(false);
    const handleReviewOpen = (id)=>setReviewOpen(id);
    const handleReviewClose = ()=>setReviewOpen(false);
    const [storeInvoiceNumber, setStoreInvoiceNumber] = react__WEBPACK_IMPORTED_MODULE_16___default().useState();
    const formData = (0,formik__WEBPACK_IMPORTED_MODULE_12__.useFormik)({
        initialValues: {
            id: "",
            driver_id: user?.id
        }
    });
    // Start Job Api
    const startJobApi = async ()=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.post("api/auth/jobs/start-job", formData.values).then((response)=>{
            if (response.status === 200) {
                // succes
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_15___default()), {
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
                setStartOpen(false);
                dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__/* .getJobActive */ .vr)({
                    user_id: user?.id,
                    type: user?.user_type,
                    lat: 0,
                    long: 0
                }));
                handleClose(true);
            }
        }).catch((error)=>{
            const { response } = error;
            console.log(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{
        formik.setFieldValue("user_id", user?.id);
    }, [
        user,
        user?.id
    ]);
    react__WEBPACK_IMPORTED_MODULE_16___default().useEffect(()=>{
        const fetchdata = async ()=>{
            await _utils_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.get("api/auth/invoice/number").then((response)=>{
                if (response.status === 200) {
                    setStoreInvoiceNumber(response?.data);
                }
            }).catch((error)=>{
                const { response } = error;
                console.log(error);
            });
        };
        fetchdata();
    }, []);
    // Complete Job Api
    const completeJobApi = async ()=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.post("api/auth/jobs/complete-job", formData.values).then((response)=>{
            if (response.status === 200) {
                setCompleteOpen(false);
                setReviewOpen(true);
                // data.forEach((job) => {
                //   if (job.created_by == 'customer') {
                //     alert('customer 4') 
                //      axiosInstance
                //       .post(
                //         "api/auth/invoice/add-send",
                //         {
                //           user_id: job.user_id,
                //           invoice_number: storeInvoiceNumber?.invoice_number,
                //           job_id: job.accept_bid.job_id,
                //           sign_image:'www.img.com'
                //         },
                //       )
                //       .then((invoiceResponse) => {
                //         console.log( "api/auth/invoice/add-send",invoiceResponse.data); // Handle the response as needed
                //       })
                //       .catch((error) => {
                //         console.error("Error sending invoice:", error);
                //       });
                //   }
                // });
                dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__/* .getJobActive */ .vr)({
                    user_id: user?.id,
                    type: user?.user_type,
                    lat: 0,
                    long: 0
                }));
                dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__/* .getJobHistory */ .M_)({
                    user_id: user?.id,
                    type: user?.user_type,
                    lat: 0,
                    long: 0
                }));
                // succes
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_15___default()), {
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
                handleClose(true);
            }
        }).catch((error)=>{
            console.log(error);
        });
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_12__.useFormik)({
        initialValues: {
            job_id: "",
            user_id: "",
            given_by: "driver",
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
            await _utils_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.post("api/auth/rating/add", formik.values).then((response)=>{
                if (response.status === 200) {
                    setReviewOpen(false);
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_15___default()), {
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
                    dispatch((0,_redux_slices_job_company__WEBPACK_IMPORTED_MODULE_6__/* .getJobActive */ .vr)({
                        user_id: user?.id,
                        type: user?.user_type,
                        lat: 0,
                        long: 0
                    }));
                    handleClose(true);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
            py: 3,
            pb: 12,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                        py: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_module_dashboard_companyCard_dashboardCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            activeJob: data
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                        py: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                            container: true,
                            spacing: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                item: true,
                                md: 12,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                    direction: "row",
                                    spacing: 1,
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                            fontSize: "1.75rem",
                                            fontWeight: 600,
                                            color: "primary",
                                            children: "Active Jobs"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                            borderRadius: "50%",
                                            border: "1px solid",
                                            borderColor: (theme)=>theme.palette.primary.main,
                                            color: (theme)=>theme.palette.primary.main,
                                            py: 0.6,
                                            px: 1.8,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                fontSize: "1.3rem",
                                                fontWeight: 500,
                                                color: "primary",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                    start: 0,
                                                    duration: 1,
                                                    end: data.length,
                                                    enableScrollSpy: true,
                                                    scrollSpyDelay: 200
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                        py: 2,
                        sx: {
                            background: " "
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                container: true,
                                rowSpacing: 0,
                                justifyContent: "center",
                                children: data && data.length > 0 ? data.map((elem, index)=>{
                                    let productDetail = elem?.items && elem?.items?.length > 0 && elem?.items[0];
                                    let addressDetail = elem?.items && elem?.items?.length > 0 && elem?.items[0];
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                        item: true,
                                        md: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Card, {
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                    direction: "row",
                                                    justifyContent: "space-between",
                                                    px: 2,
                                                    py: 1.4,
                                                    alignItems: "center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                        sx: {
                                                            width: "90%"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_text_max_line__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            line: 2,
                                                            color: "common.black",
                                                            fontSize: 17,
                                                            children: elem?.description
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Divider, {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.CardContent, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                                            container: true,
                                                            spacing: 2,
                                                            alignItems: "start",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_text_max_line__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                                line: 2,
                                                                                color: "common.black",
                                                                                fontSize: 28,
                                                                                fontWeight: 500,
                                                                                children: elem.name
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 2,
                                                                            mb: 2,
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                    direction: "row",
                                                                                    alignItems: "center",
                                                                                    spacing: 0.6,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                            alignItems: "center",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                icon: "bx:layer",
                                                                                                color: (theme)=>theme.palette.primary.main,
                                                                                                width: 22
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                fontSize: 12,
                                                                                                color: "grey",
                                                                                                children: elem?.items && elem?.items?.length > 0 && elem?.items[0]?.product?.material
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                    direction: "row",
                                                                                    alignItems: "center",
                                                                                    spacing: 0.6,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                            alignItems: "center",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                icon: "gg:expand",
                                                                                                color: (theme)=>theme.palette.primary.main,
                                                                                                width: 22
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                fontSize: 12,
                                                                                                color: "grey",
                                                                                                children: `${elem?.items && elem?.items?.length > 0 && elem?.items[0]?.product?.length}*${elem?.items && elem?.items?.length > 0 && elem?.items[0]?.product?.width}*${elem?.items && elem?.items?.length > 0 && elem?.items[0]?.product?.height}`
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                    direction: "row",
                                                                                    alignItems: "center",
                                                                                    spacing: 0.6,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                            alignItems: "center",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                icon: "uil:weight",
                                                                                                color: (theme)=>theme.palette.primary.main,
                                                                                                width: 22
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                fontSize: 12,
                                                                                                color: "grey",
                                                                                                children: [
                                                                                                    elem?.items && elem?.items?.length > 0 && elem?.items[0]?.product?.quantity,
                                                                                                    " ",
                                                                                                    "Qty"
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 1,
                                                                            children: elem.items.map((elem, index)=>{
                                                                                if (index > 2) {
                                                                                    return "";
                                                                                }
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                        component: "img",
                                                                                        alt: elem.product.image,
                                                                                        src: `${elem.product.base_url}${elem.product.image}`,
                                                                                        sx: {
                                                                                            width: "83px",
                                                                                            height: "59px",
                                                                                            border: "1px solid lightgrey",
                                                                                            objectFit: "fill",
                                                                                            borderRadius: "4px",
                                                                                            backgroundSize: "cover",
                                                                                            backgroundRepeat: "no-repeat",
                                                                                            objectFit: "contain"
                                                                                        }
                                                                                    })
                                                                                }, index);
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                                                    item: true,
                                                                    md: 6,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                        direction: "row",
                                                                        spacing: 3,
                                                                        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Divider, {
                                                                            orientation: "vertical",
                                                                            flexItem: true
                                                                        }),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                direction: "row",
                                                                                spacing: 2,
                                                                                alignItems: "center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                    fontSize: 13,
                                                                                                    fontWeight: 600,
                                                                                                    children: "Pick up Date"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                                direction: "row",
                                                                                                spacing: 1,
                                                                                                alignItems: "center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                        sx: {
                                                                                                            backgroundColor: "#FEE6BB",
                                                                                                            width: "28px",
                                                                                                            height: "28px",
                                                                                                            borderRadius: "50%",
                                                                                                            p: "5px"
                                                                                                        },
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                            color: (theme)=>theme.palette.primary.main,
                                                                                                            icon: "majesticons:calendar-line"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                            color: "grey",
                                                                                                            fontWeight: 400,
                                                                                                            fontSize: 13,
                                                                                                            children: productDetail?.product?.pickup_date || "N/A"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                    fontSize: 13,
                                                                                                    fontWeight: 600,
                                                                                                    children: "Pick up Time"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                                direction: "row",
                                                                                                spacing: 1,
                                                                                                alignItems: "center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                        sx: {
                                                                                                            backgroundColor: "#FEE6BB",
                                                                                                            width: "28px",
                                                                                                            height: "28px",
                                                                                                            borderRadius: "50%",
                                                                                                            p: "5px"
                                                                                                        },
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                            color: (theme)=>theme.palette.primary.main,
                                                                                                            icon: "majesticons:calendar-line"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                            color: "grey",
                                                                                                            fontWeight: 400,
                                                                                                            fontSize: 13,
                                                                                                            children: productDetail?.product?.pickup_time || "N/A"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                direction: "row",
                                                                                spacing: 2,
                                                                                alignItems: "center",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                    fontSize: 13,
                                                                                                    fontWeight: 600,
                                                                                                    children: "Delivery out Date"
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                                    direction: "row",
                                                                                                    spacing: 1,
                                                                                                    alignItems: "center",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                            sx: {
                                                                                                                backgroundColor: "#FEE6BB",
                                                                                                                width: "28px",
                                                                                                                height: "28px",
                                                                                                                borderRadius: "50%",
                                                                                                                p: "5px"
                                                                                                            },
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                                color: (theme)=>theme.palette.primary.main,
                                                                                                                icon: "majesticons:calendar-line"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                                color: "grey",
                                                                                                                fontWeight: 400,
                                                                                                                fontSize: 13,
                                                                                                                children: productDetail?.product?.drop_date || "N/A"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                    fontSize: 13,
                                                                                                    fontWeight: 600,
                                                                                                    children: "Delivery out Time"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                                direction: "row",
                                                                                                spacing: 1,
                                                                                                alignItems: "center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                        sx: {
                                                                                                            backgroundColor: "#FEE6BB",
                                                                                                            width: "28px",
                                                                                                            height: "28px",
                                                                                                            borderRadius: "50%",
                                                                                                            p: "5px"
                                                                                                        },
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                                            color: (theme)=>theme.palette.primary.main,
                                                                                                            icon: "majesticons:calendar-line"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                                            color: "grey",
                                                                                                            fontWeight: 400,
                                                                                                            fontSize: 13,
                                                                                                            children: productDetail?.product?.drop_time || "N/A"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {
                                                                    item: true,
                                                                    md: 2,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                            direction: "row",
                                                                            justifyContent: "space-between",
                                                                            alignItems: "center",
                                                                            spacing: 1,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                                spacing: 1,
                                                                                children: elem?.status != 0 && elem?.status != 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                                                                        color: "secondary",
                                                                                        fullWidth: true,
                                                                                        variant: "outlined",
                                                                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                            icon: "gg:track"
                                                                                        }),
                                                                                        onClick: ()=>router.push(`/dashboard/company/track_job/${elem.bid_id}/${elem.id}/${elem.user_id}`),
                                                                                        sx: {
                                                                                            fontWeight: 500
                                                                                        },
                                                                                        children: "Track Job"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                            mt: 1,
                                                                            position: "absolute",
                                                                            right: 33
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Divider, {
                                                            sx: {
                                                                my: 2
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                                direction: "row",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                        variant: "subtitle2",
                                                                        sx: {
                                                                            display: "flex",
                                                                            alignItems: "flex-start"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                        variant: "subtitle2",
                                                                        sx: {
                                                                            display: "flex",
                                                                            alignItems: "flex-start"
                                                                        },
                                                                        children: [
                                                                            "Customer Spend:",
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                icon: "bi:currency-pound"
                                                                            }),
                                                                            elem?.spentmoney,
                                                                            "+"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                    my: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                        variant: "h4",
                                        children: "No Active Jobs"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Modal, {
                                    open: completeOpen,
                                    onClose: handleCompleteClose,
                                    "aria-labelledby": "modal-modal-title",
                                    "aria-describedby": "modal-modal-review",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                        sx: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            textAlign: "center",
                                            transform: "translate(-50%, -50%)",
                                            bgcolor: "background.paper",
                                            border: "1px solid #f5f5f5",
                                            boxShadow: 24,
                                            p: 4
                                        },
                                        component: "form",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                mb: 2,
                                                children: "Are you sure you have completed the job?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                direction: "row",
                                                spacing: 8,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                                        fullWidth: true,
                                                        variant: "outlined",
                                                        onClick: ()=>{
                                                            completeJobApi();
                                                        },
                                                        children: "Yes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                                        fullWidth: true,
                                                        variant: "outlined",
                                                        onClick: ()=>{
                                                            handleCompleteClose();
                                                        },
                                                        children: "No"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Modal, {
                                    open: startOpen,
                                    onClose: handleStartClose,
                                    "aria-labelledby": "modal-modal-title",
                                    "aria-describedby": "modal-modal-description",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                        sx: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            textAlign: "center",
                                            transform: "translate(-50%, -50%)",
                                            bgcolor: "background.paper",
                                            border: "1px solid #f5f5f5",
                                            boxShadow: 24,
                                            p: 4
                                        },
                                        component: "form",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                mb: 2,
                                                children: "Are you sure you want to start the job?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                direction: "row",
                                                spacing: 8,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                                        fullWidth: true,
                                                        variant: "outlined",
                                                        onClick: ()=>{
                                                            startJobApi();
                                                        },
                                                        children: "Yes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                                        fullWidth: true,
                                                        variant: "outlined",
                                                        onClick: ()=>{
                                                            handleStartClose();
                                                        },
                                                        children: "No"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Pagination, {
                                        count: pageCount,
                                        color: "primary",
                                        page: page,
                                        onChange: handlePageChange,
                                        variant: "outlined",
                                        shape: "rounded",
                                        renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.PaginationItem, {
                                                slots: {
                                                    previous: ()=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                            direction: "row",
                                                            spacing: 0.5,
                                                            alignItems: "center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                                        });
                                                    },
                                                    next: ()=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                            direction: "row",
                                                            spacing: 0.5,
                                                            alignItems: "center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                                        });
                                                    }
                                                },
                                                ...item
                                            })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Dialog, {
                                    open: reviewOpen,
                                    onClose: handleReviewOpen,
                                    maxWidth: "xs",
                                    fullWidth: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.DialogContent, {
                                        sx: {
                                            my: 3
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                mb: 2,
                                                variant: "subtitle1",
                                                children: "Review"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                component: "form",
                                                noValidate: true,
                                                onSubmit: formik.handleSubmit,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                        spacing: 2,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Rating, {
                                                                    value: formik.values.rating,
                                                                    onChange: formik.handleChange,
                                                                    name: "rating",
                                                                    helperText: formik.touched.rating && formik.errors.rating
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Stack, {
                                                        direction: "row",
                                                        spacing: 8,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                                            fullWidth: true,
                                                            variant: "outlined",
                                                            type: "submit",
                                                            children: "Submit"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardAddJob);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;