"use strict";
exports.id = 2561;
exports.ids = [2561];
exports.modules = {

/***/ 2561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(261);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3763);
/* harmony import */ var _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4862);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _utils_axios__WEBPACK_IMPORTED_MODULE_4__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__, _components_form__WEBPACK_IMPORTED_MODULE_13__]);
([_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _utils_axios__WEBPACK_IMPORTED_MODULE_4__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__, _components_form__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Profile = ({ data, formik, loader, Content = null })=>{
    console.log("formikss", formik);
    const [isModalOpen, setIsModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleClick = ()=>{
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        formik.handleSubmit();
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
            sx: {
                backgroundColor: (theme)=>theme.palette.grey[300]
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                mt: 8,
                pb: 14,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Container, {
                    children: loader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        sx: {
                            py: 4
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                        alignItems: "center",
                        spacing: 4,
                        py: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                            container: true,
                            justifyContent: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 10,
                                md: 8,
                                lg: 8,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        component: "form",
                                        noValidate: true,
                                        onSubmit: formik.handleSubmit,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {
                                            sx: {
                                                borderRadius: "20px",
                                                boxShadow: 0,
                                                position: "relative",
                                                background: (theme)=>theme.palette.common.white
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                    sx: {
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        zIndex: -1
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                        component: "img",
                                                        src: "/profile/profilebg.png",
                                                        sx: {
                                                            width: "100%",
                                                            height: "100%",
                                                            backgroundRepeat: "no-repeat",
                                                            objectFit: "contain"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                            py: 2,
                                                            style: {
                                                                marginTop: "190px"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_13__/* .TextBox */ .zC, {
                                                                size: "small",
                                                                fullWidth: true,
                                                                label: "User Name",
                                                                name: "user_name",
                                                                value: formik.values.user_name,
                                                                onChange: formik.handleChange
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                            direction: "row",
                                                            spacing: 8,
                                                            width: "100%",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                spacing: 1,
                                                                width: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 2,
                                                                            alignItems: "center",
                                                                            className: "flexDirection",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                                    sx: {
                                                                                        backgroundColor: "#FFEBE2",
                                                                                        p: "8px"
                                                                                    },
                                                                                    height: "35px",
                                                                                    width: "35px",
                                                                                    borderRadius: "50%",
                                                                                    component: "div",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                        icon: "material-symbols:subscriptions-outline",
                                                                                        width: 18,
                                                                                        color: (theme)=>theme.palette.primary.main
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                                    component: "body2",
                                                                                    fontSize: 15,
                                                                                    children: data?.plan_name || "N/A"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                        py: 2,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 2,
                                                                            alignItems: "center",
                                                                            className: "flexDirection",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                                    sx: {
                                                                                        backgroundColor: "#FFEBE2",
                                                                                        p: "8px"
                                                                                    },
                                                                                    height: "35px",
                                                                                    width: "35px",
                                                                                    borderRadius: "50%",
                                                                                    component: "div",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                        icon: "tabler:mail",
                                                                                        width: 18,
                                                                                        color: (theme)=>theme.palette.primary.main
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                                    component: "body2",
                                                                                    fontSize: 15,
                                                                                    children: formik.values.email || "N/A"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 2,
                                                                            alignItems: "center",
                                                                            className: "flexDirection",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                                    sx: {
                                                                                        backgroundColor: "#FFEBE2",
                                                                                        p: "8px"
                                                                                    },
                                                                                    height: "35px",
                                                                                    width: "35px",
                                                                                    borderRadius: "50%",
                                                                                    component: "div",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                        icon: "material-symbols:call-outline",
                                                                                        width: 18,
                                                                                        color: (theme)=>theme.palette.primary.main
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                                                    component: "body2",
                                                                                    fontSize: 15,
                                                                                    children: formik.values.mobile || "N/A"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                        sx: {
                                                                            display: "flex !important",
                                                                            flexDirection: "row-reverse !important"
                                                                        },
                                                                        py: 2,
                                                                        onSubmit: formik.handleSubmit,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_13__/* .GoogleAutocomplete */ .Zw, {
                                                                            size: "small",
                                                                            fullWidth: true,
                                                                            labelname: "Address" // Should be "labelName" instead of "labelname"
                                                                            ,
                                                                            name: "address",
                                                                            value: formik?.values?.address,
                                                                            onChange: (e)=>{
                                                                                formik.setFieldValue(`address`, e);
                                                                            },
                                                                            onSelect: (address, lat, long)=>{
                                                                                console.log("onSelect:", address, lat, long);
                                                                                formik.setFieldValue("address", address);
                                                                                formik.setFieldValue("lat", lat); // Set lat if needed
                                                                                formik.setFieldValue("long", long); // Set long if needed
                                                                            },
                                                                            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                                                onClick: ()=>formik.setFieldValue("address", ""),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                    fontSize: "small"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Modal, {
                                                                        open: isModalOpen,
                                                                        onClose: handleCloseModal,
                                                                        "aria-labelledby": "modal-modal-title",
                                                                        "aria-describedby": "modal-modal-description",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                            sx: {
                                                                                position: "absolute",
                                                                                top: "50%",
                                                                                left: "50%",
                                                                                textAlign: "center",
                                                                                transform: "translate(-50%, -50%)",
                                                                                borderRadius: "10px",
                                                                                bgcolor: "background.paper",
                                                                                border: "1px solid #f5f5f5",
                                                                                boxShadow: 24,
                                                                                p: 4
                                                                            },
                                                                            className: "modal-box-address",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                                    spacing: 1,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                                                                                            item: true,
                                                                                            md: 12,
                                                                                            onSubmit: formik.handleSubmit,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_13__/* .GoogleAutocomplete */ .Zw, {
                                                                                                fullWidth: true,
                                                                                                size: "small",
                                                                                                name: "address",
                                                                                                labelName: "Address",
                                                                                                value: formik.values.address,
                                                                                                onSelect: (address, lat, long)=>{
                                                                                                    console.log("onSelect:", address, lat, long);
                                                                                                    formik.setFieldValue("address", address);
                                                                                                    formik.setFieldValue("lat", lat); // Set lat if needed
                                                                                                    formik.setFieldValue("long", long); // Set long if needed
                                                                                                },
                                                                                                onChange: formik.handleChange,
                                                                                                endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                                                                    onClick: ()=>formik.setFieldValue("address", ""),
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                                        fontSize: "small"
                                                                                                    })
                                                                                                }),
                                                                                                helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items[productIndex]?.address[addressIndex].address
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                                    direction: "row",
                                                                                    mt: 2,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                                        type: "submit",
                                                                                        fullWidth: true,
                                                                                        variant: "outlined",
                                                                                        onClick: handleCloseModal,
                                                                                        children: "Update Address"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    Content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                        mt: 2,
                                                                        sx: {
                                                                            width: "100%"
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {})
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                                                        direction: "row",
                                                                        width: "100%",
                                                                        spacing: 2,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                                width: "100%",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChangePasswordModal, {})
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                                                width: "100%",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                                    fullWidth: true,
                                                                                    variant: "contained",
                                                                                    type: "submit",
                                                                                    onClick: handleCloseModal,
                                                                                    children: "Update Profile"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
const ChangePasswordModal = ()=>{
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_10__.useSnackbar)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_8__.useFormik)({
        initialValues: {
            password: "",
            new_password: "",
            new_password_confirmation: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.password) {
                errors.password = "Password is required";
            }
            if (!values.new_password) {
                errors.new_password = "New password is required";
            }
            if (!values.new_password_confirmation) {
                errors.new_password_confirmation = "Confirm password is required";
            }
            if (values.new_password_confirmation && values.new_password && values.new_password_confirmation !== values.new_password) {
                errors.new_password_confirmation = "Confirm password didn't match with new password";
            }
            return errors;
        },
        onSubmit: async (values, { setErrors })=>{
            await _utils_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("api/auth/profile/change-password", values).then((response)=>{
                if (response.status === 200) {
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_11___default()), {
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
                    handleClose();
                    (0,_utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__/* .clearToken */ .qz)();
                    router.push("/auth/login");
                }
            }).catch((error)=>{
                const { response } = error;
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_11___default()), {
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
                    children: response?.data?.error.new_password
                }), {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center"
                    }
                });
                if (response.status === 422) {
                    // eslint-disable-next-line no-unused-vars
                    for (const [key, value] of Object.entries(values)){
                        setErrors({
                            [key]: response.data.error.new_password
                        });
                        if (response.data.error[key]) {
                            setErrors({
                                [key]: response.data.error.new_password
                            });
                        }
                    }
                }
                if (response?.data?.status === 406) {
                    // error
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_11___default()), {
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
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                fullWidth: true,
                variant: "outlined",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: "carbon:password"
                }),
                onClick: handleOpen,
                sx: {
                    fontWeight: 500,
                    whiteSpace: "nowrap" // Keeps the text in a single line
                },
                children: "Change Password"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                fullWidth: true,
                maxWidth: "xs",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
                    sx: {
                        py: 4,
                        px: 4
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        component: "form",
                        noValidate: true,
                        onSubmit: formik.handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                direction: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        component: "h5",
                                        fontSize: 25,
                                        fontWeight: 600,
                                        children: "Change Password"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {
                                            sx: {
                                                borderRadius: "20px",
                                                boxShadow: 0,
                                                maxWidth: "700px",
                                                margin: "auto",
                                                position: "relative",
                                                backgroundColor: (theme)=>theme.palette.grey[400]
                                            },
                                            variant: "outlined",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                size: "small",
                                                onClick: ()=>{
                                                    handleClose();
                                                    formik.resetForm();
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    fontSize: "inherit"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    textAlign: "left",
                                    fontSize: 12,
                                    children: "In order to protect your account, make sure your password:"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.List, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemIcon, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        icon: "radix-icons:dot-filled"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                    fontSize: 12,
                                                    children: [
                                                        "Is longer than 6 characters",
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemIcon, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        icon: "radix-icons:dot-filled"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                    fontSize: 12,
                                                    children: [
                                                        "Does not match or significantly contain your username, e.g. do not use ",
                                                        "‘",
                                                        "username123",
                                                        "’",
                                                        "."
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                spacing: 1,
                                mt: 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                fontSize: 14,
                                                textAlign: "left",
                                                fontWeight: 600,
                                                mb: 1,
                                                children: "Current Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_13__/* .PasswordBox */ .Jg, {
                                                fullWidth: true,
                                                size: "small",
                                                name: "password",
                                                value: formik.values.password,
                                                onChange: formik.handleChange,
                                                placeholder: "Enter Current Password",
                                                helperText: formik?.errors?.password
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                fontSize: 14,
                                                textAlign: "left",
                                                fontWeight: 600,
                                                mb: 1,
                                                children: "New Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_13__/* .PasswordBox */ .Jg, {
                                                fullWidth: true,
                                                size: "small",
                                                name: "new_password",
                                                value: formik.values.new_password,
                                                onChange: formik.handleChange,
                                                placeholder: "Enter New Password",
                                                helperText: formik?.errors?.new_password
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                fontSize: 14,
                                                textAlign: "left",
                                                fontWeight: 600,
                                                mb: 1,
                                                children: "Confirm New Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_13__/* .PasswordBox */ .Jg, {
                                                fullWidth: true,
                                                size: "small",
                                                name: "new_password_confirmation",
                                                value: formik.values.new_password_confirmation,
                                                onChange: formik.handleChange,
                                                placeholder: "Enter Confirm Password",
                                                helperText: formik?.errors?.new_password_confirmation
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                direction: "row",
                                mt: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                    type: "submit",
                                    fullWidth: true,
                                    variant: "contained",
                                    children: "Change Password"
                                })
                            })
                        ]
                    })
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