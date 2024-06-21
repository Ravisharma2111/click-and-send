"use strict";
exports.id = 5844;
exports.ids = [5844];
exports.modules = {

/***/ 5844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__]);
_components_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const DriverJobForm = ({ formik })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { id } = router.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            sx: {
                background: (theme)=>theme.palette.grey[400],
                mt: 8,
                pb: 12
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                sx: {
                    py: 3
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs, {
                                "aria-label": "breadcrumb",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "grey",
                                        href: "/",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "grey",
                                        href: "/dashboard/company",
                                        children: "Dashboard"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "grey",
                                        href: "/dashboard/company/driver/list",
                                        children: "Driver"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        color: "text.primary",
                                        children: id === "create" ? "Add Driver" : "Update Driver"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                sx: {
                                    borderRadius: "0px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                            direction: "row",
                                            spacing: 1,
                                            py: 2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                fontWeight: 500,
                                                fontSize: 24,
                                                children: id === "create" ? "Add Driver" : "Update Driver"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                    component: "form",
                                                    noValidate: true,
                                                    onSubmit: formik.handleSubmit,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            container: true,
                                                            spacing: 4,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 12,
                                                                    sm: 12,
                                                                    xs: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                        fullWidth: true,
                                                                        placeholder: formik.values.user_type === "company" ? "Enter Company Name" : "Enter Your Full Name",
                                                                        name: "user_name",
                                                                        value: formik.values.user_name,
                                                                        onChange: formik.handleChange,
                                                                        helperText: formik.touched.user_name && formik.errors.user_name,
                                                                        size: "small"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 6,
                                                                    sm: 12,
                                                                    xs: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                        fullWidth: true,
                                                                        placeholder: formik.values.user_type === "company" ? "Enter Company Email" : "Enter Your Email Address",
                                                                        name: "email",
                                                                        value: formik.values.email,
                                                                        onChange: formik.handleChange,
                                                                        helperText: formik.touched.email && formik.errors.email,
                                                                        size: "small"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 6,
                                                                    sm: 12,
                                                                    xs: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                        fullWidth: true,
                                                                        placeholder: "Enter Your Contact Number",
                                                                        name: "mobile",
                                                                        value: formik.values.mobile,
                                                                        onChange: (e)=>{
                                                                            const cleanedValue = e.target.value.replace(/\D/gm, "").slice(0, 11);
                                                                            formik.setFieldValue("mobile", cleanedValue);
                                                                        },
                                                                        helperText: formik.touched.mobile && formik.errors.mobile,
                                                                        size: "small"
                                                                    })
                                                                }),
                                                                id === "create" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                            item: true,
                                                                            md: 6,
                                                                            sm: 12,
                                                                            xs: 12,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .PasswordBox */ .Jg, {
                                                                                fullWidth: true,
                                                                                placeholder: "Enter Password",
                                                                                name: "password",
                                                                                value: formik.values.password,
                                                                                onChange: formik.handleChange,
                                                                                helperText: formik.touched.password && formik.errors.password,
                                                                                size: "small"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                            item: true,
                                                                            md: 6,
                                                                            sm: 12,
                                                                            xs: 12,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .PasswordBox */ .Jg, {
                                                                                fullWidth: true,
                                                                                placeholder: "Enter Confirm Password",
                                                                                name: "password_confirmation",
                                                                                value: formik.values.password_confirmation,
                                                                                onChange: formik.handleChange,
                                                                                helperText: formik.touched.password_confirmation && formik.errors.password_confirmation,
                                                                                size: "small"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Driver Photo"
                                                                            }),
                                                                            !formik.values.profile_img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "profile_img",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("profile_img", e.target.files[0]);
                                                                                    formik.setFieldValue("profile_img_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.profile_img && formik.errors.profile_img
                                                                            }),
                                                                            formik.values.profile_img_url && formik.values.profile_img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("profile_img", "");
                                                                                                        formik.setFieldValue("profile_img_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.profile_img_url,
                                                                                            alt: formik.values.profile_img.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Driver Licence Front"
                                                                            }),
                                                                            !formik.values.licence_front && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "licence_front",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("licence_front", e.target.files[0]);
                                                                                    formik.setFieldValue("licence_front_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.licence_front && formik.errors.licence_front
                                                                            }),
                                                                            formik.values.licence_front_url && formik.values.licence_front && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("licence_front", "");
                                                                                                        formik.setFieldValue("licence_front_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.licence_front_url,
                                                                                            alt: formik.values.licence_front.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Driver Licence Back"
                                                                            }),
                                                                            !formik.values.licence_back && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "licence_back",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("licence_back", e.target.files[0]);
                                                                                    formik.setFieldValue("licence_back_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.licence_back && formik.errors.licence_back
                                                                            }),
                                                                            formik.values.licence_back_url && formik.values.licence_back && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("licence_back", "");
                                                                                                        formik.setFieldValue("licence_back_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.licence_back_url,
                                                                                            alt: formik.values.licence_back.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Address Proof"
                                                                            }),
                                                                            !formik.values.address_proof && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "address_proof",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("address_proof", e.target.files[0]);
                                                                                    formik.setFieldValue("address_proof_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.address_proof && formik.errors.address_proof
                                                                            }),
                                                                            formik.values.address_proof_url && formik.values.address_proof && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("address_proof", "");
                                                                                                        formik.setFieldValue("address_proof_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.address_proof_url,
                                                                                            alt: formik.values.address_proof.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Insurance Certificate"
                                                                            }),
                                                                            !formik.values.insurance_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "insurance_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("insurance_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("insurance_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.insurance_cert && formik.errors.insurance_cert
                                                                            }),
                                                                            formik.values.insurance_cert_url && formik.values.insurance_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("insurance_cert", "");
                                                                                                        formik.setFieldValue("insurance_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.insurance_cert_url,
                                                                                            alt: formik.values.insurance_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "good in Transit Certificate"
                                                                            }),
                                                                            !formik.values.transit_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "transit_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("transit_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("transit_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.transit_cert && formik.errors.transit_cert
                                                                            }),
                                                                            formik.values.transit_cert_url && formik.values.transit_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("transit_cert", "");
                                                                                                        formik.setFieldValue("transit_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.transit_cert_url,
                                                                                            alt: formik.values.transit_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "public Liability Certificate"
                                                                            }),
                                                                            !formik.values.liability_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "liability_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("liability_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("liability_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.liability_cert && formik.errors.liability_cert
                                                                            }),
                                                                            formik.values.liability_cert_url && formik.values.liability_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("liability_cert", "");
                                                                                                        formik.setFieldValue("liability_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.liability_cert_url,
                                                                                            alt: formik.values.liability_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Vehicle Certificate"
                                                                            }),
                                                                            !formik.values.vehicle_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "vehicle_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("vehicle_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("vehicle_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.vehicle_cert && formik.errors.vehicle_cert
                                                                            }),
                                                                            formik.values.vehicle_cert_url && formik.values.vehicle_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("vehicle_cert", "");
                                                                                                        formik.setFieldValue("vehicle_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.vehicle_cert_url,
                                                                                            alt: formik.values.vehicle_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "V5c Certificate"
                                                                            }),
                                                                            !formik.values.v5c_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "v5c_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("v5c_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("v5c_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.v5c_cert && formik.errors.v5c_cert
                                                                            }),
                                                                            formik.values.v5c_cert_url && formik.values.v5c_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("v5c_cert", "");
                                                                                                        formik.setFieldValue("v5c_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.v5c_cert_url,
                                                                                            alt: formik.values.v5c_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Dvia Certificate"
                                                                            }),
                                                                            !formik.values.dvia_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "dvia_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("dvia_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("dvia_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.dvia_cert && formik.errors.dvia_cert
                                                                            }),
                                                                            formik.values.dvia_cert_url && formik.values.dvia_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("dvia_cert", "");
                                                                                                        formik.setFieldValue("dvia_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.dvia_cert_url,
                                                                                            alt: formik.values.dvia_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                                    item: true,
                                                                    md: 4,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        textAlign: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                textAlign: "left",
                                                                                variant: "p",
                                                                                children: "Nationality Proof Certificate"
                                                                            }),
                                                                            !formik.values.nationality_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                fullWidth: true,
                                                                                isAdditional: true,
                                                                                textBoxSx: {
                                                                                    "& .MuiInput-root:after": {
                                                                                        borderBottom: "0px !important"
                                                                                    },
                                                                                    "& .MuiInput-root:before": {
                                                                                        borderBottom: "0px !important",
                                                                                        content: '""'
                                                                                    }
                                                                                },
                                                                                type: "file",
                                                                                size: "small",
                                                                                value: "",
                                                                                name: "nationality_cert",
                                                                                onChange: (e)=>{
                                                                                    formik.setFieldValue("nationality_cert", e.target.files[0]);
                                                                                    formik.setFieldValue("nationality_cert_url", URL.createObjectURL(e.target.files[0]));
                                                                                },
                                                                                helperText: formik.touched.nationality_cert && formik.errors.nationality_cert
                                                                            }),
                                                                            formik.values.nationality_cert_url && formik.values.nationality_cert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                sx: {
                                                                                    width: "max-content"
                                                                                },
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                                                                    sx: {
                                                                                        pb: "10px !important",
                                                                                        pt: "30px !important",
                                                                                        px: "10px !important"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            sx: {
                                                                                                position: "absolute",
                                                                                                top: 5,
                                                                                                right: 6
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                                                                                                sx: {
                                                                                                    borderRadius: "50%"
                                                                                                },
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                                                                                    size: "small",
                                                                                                    onClick: ()=>{
                                                                                                        formik.setFieldValue("nationality_cert", "");
                                                                                                        formik.setFieldValue("nationality_cert_url", "");
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                                            component: "img",
                                                                                            style: {
                                                                                                margin: "10px"
                                                                                            },
                                                                                            src: formik.values.nationality_cert_url,
                                                                                            alt: formik.values.nationality_cert.name,
                                                                                            width: "100px",
                                                                                            height: "100px",
                                                                                            thumbnail: true
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                            direction: "row",
                                                            spacing: 4,
                                                            mt: 4,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                        type: "submit",
                                                                        fullWidth: true,
                                                                        variant: "contained",
                                                                        color: "primary",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                            px: "1.5em",
                                                                            children: "Submit"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                        fullWidth: true,
                                                                        variant: "contained",
                                                                        color: "dark",
                                                                        onClick: formik.resetForm,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                            px: "2.1em",
                                                                            component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
                                                                            href: "/dashboard/company/driver/list",
                                                                            sx: {
                                                                                textDecoration: "none",
                                                                                color: "white"
                                                                            },
                                                                            children: "Cancel"
                                                                        })
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
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DriverJobForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;