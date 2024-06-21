"use strict";
exports.id = 7400;
exports.ids = [7400];
exports.modules = {

/***/ 1435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ DialogForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_ArrowDropDownCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4286);
/* harmony import */ var _mui_icons_material_ArrowDropDownCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowDropDownCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__]);
([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const DialogForm = ({ formik })=>{
    const OTPSelect = [
        // {
        //   label: "Choose Option for Get OTP",
        //   value: 0,
        // },
        {
            label: "Email",
            value: "email"
        },
        {
            label: "Contact No.",
            value: "phone"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                my: 2
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    width: "100%",
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                    error: formik.errors.otp ? true : false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_7___default()), {
                            name: `otp`,
                            containerStyle: {
                                justifyContent: "center"
                            },
                            inputStyle: {
                                width: "50px",
                                height: "56px",
                                borderRadius: "10px"
                            },
                            value: formik?.values?.otp,
                            onChange: (e)=>formik.setFieldValue("otp", e),
                            error: formik.touched.otp && formik.errors.otp,
                            helperText: formik.touched.otp && formik.errors.otp,
                            numInputs: 4,
                            renderSeparator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    marginRight: "5px"
                                }
                            }),
                            renderInput: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    ...props
                                })
                        }),
                        formik.errors.otp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormHelperText, {
                            children: formik.errors.otp
                        })
                    ]
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ DialogHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const DialogHeader = ({ onClose, title })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            background: (theme)=>theme.palette.primary.main
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        color: "inherit",
                        sx: {
                            color: (theme)=>theme.palette.common.white,
                            fontSize: "20px",
                            fontWeight: 500
                        },
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        mr: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                            onClick: onClose,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default()), {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {})
        ]
    });
};


/***/ }),

/***/ 7400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(653);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1435);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3763);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_form__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_6__]);
([_form__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide, {
        direction: "down",
        ref: ref,
        ...props
    });
});
const forgotimg = "/assets/images/auth/forgot.png";
const OTPDialogBox = ({ keepMounted, onClose, open, title, email, registerFormik })=>{
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_7__.useSnackbar)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            email: "",
            otp: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.otp) {
                errors.otp = "OTP  is required";
            }
            return errors;
        },
        onSubmit: async (values)=>{
            let formData;
            formData = {
                email: email,
                otp: values.otp
            };
            await _utils_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.post("api/user/validate-otp", formData, {
                setErrors
            }).then((response)=>{
                if (response?.status === 200) {
                    onClose();
                    formik.resetForm();
                    registerFormik.resetForm();
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
                } else {
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
                }
            }).catch((error)=>{
                const { response } = error;
                let status = [
                    406,
                    404
                ];
                if (response.status === 422) {
                    // eslint-disable-next-line no-unused-vars
                    for (const [key, value] of Object.entries(values)){
                        if (response.data.error[key]) {
                            setErrors({
                                [key]: response.data.error[key][0]
                            });
                        }
                    }
                }
                if (status.includes(response?.status)) {
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
                }
            });
        }
    });
    const resendOtp = async ()=>{
        let formData;
        formData = {
            email: registerFormik?.values?.email,
            type: registerFormik?.values?.user_type
        };
        await _utils_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.post("api/user/resend-otp", formData).then((response)=>{
            if (response?.status === 200) {
                // succes
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
            } else {
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
            }
        }).catch((error)=>{
            const { response } = error;
            let status = [
                406,
                404
            ];
            if (status.includes(response?.status)) {
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
            }
        });
    };
    const handleClose = ()=>{
        formik.resetForm();
        registerFormik.resetForm();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            open: open,
            TransitionComponent: Transition,
            keepMounted: keepMounted,
            components: "form",
            scroll: "paper",
            onClose: ()=>{
                onClose();
                handleClose();
            },
            "aria-describedby": "alert-dialog-slide-description",
            sx: {
                "& .MuiPaper-rounded": {
                    borderRadius: "0px"
                }
            },
            maxWidth: "xs",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_3__/* .DialogHeader */ .f, {
                    onClose: ()=>{
                        onClose();
                        handleClose();
                    },
                    title: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                    dividers: "paper",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            textAlign: "left",
                            mb: 2,
                            mt: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h5",
                                    fontWeight: 500,
                                    sx: {
                                        cursor: "pointer",
                                        fontSize: "16px",
                                        fontWeight: 500
                                    },
                                    children: "Please Enter One Time Password to Verify your Account"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    sx: {
                                        fontSize: "16px"
                                    },
                                    children: "A Code has Been Sent To Your Email-id"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form__WEBPACK_IMPORTED_MODULE_4__/* .DialogForm */ .d, {
                            formik: formik
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                sx: {
                                    fontSize: "16px"
                                },
                                children: [
                                    "Didn",
                                    "'",
                                    "t receive OTP ?",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        color: "primary",
                                        component: "span",
                                        fontWeight: 500,
                                        sx: {
                                            cursor: "pointer",
                                            fontSize: "15px"
                                        },
                                        onClick: resendOtp,
                                        children: "Resend OTP"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            onClick: ()=>formik.handleSubmit(),
                            variant: "contained",
                            color: "primary",
                            type: "submit",
                            children: "Verify"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "contained",
                            color: "dark",
                            onClick: ()=>{
                                onClose();
                                handleClose();
                            },
                            children: "Close"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OTPDialogBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;