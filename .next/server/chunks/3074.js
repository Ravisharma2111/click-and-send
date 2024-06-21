"use strict";
exports.id = 3074;
exports.ids = [3074];
exports.modules = {

/***/ 3074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8703);
/* harmony import */ var _redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3984);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9409);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_form__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_form__WEBPACK_IMPORTED_MODULE_2__, _redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__, _redux_store__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ApplyJobModal = ({ job_id, applyOpen, handleClose, getData })=>{
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();
    const { jobAlert: { pageCount, data, page, pageSize } } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)((state)=>state.driverJob);
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormik)({
        initialValues: {
            job_id: job_id,
            driver_id: user?.id,
            is_apply: 1,
            ammount: "",
            description: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.description) {
                errors.description = "Note is required";
            }
            if (!values.ammount) {
                errors.ammount = "Amount is required";
            } else if (values.ammount.length >= 6) {
                errors.ammount = "Enter valid number (Max 5 Digit)";
            }
            return errors;
        },
        onSubmit: async (values)=>{
            await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.post("api/auth/jobs/apply-bid", formik.values).then((response)=>{
                if (response.status === 200) {
                    formik.resetForm();
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
                    dispatch((0,_redux_slices_job_driver__WEBPACK_IMPORTED_MODULE_3__/* .getJobAlert */ .tH)({
                        user_id: user?.id,
                        type: user?.user_type,
                        lat: 0,
                        long: 0
                    }));
                    handleClose(false);
                }
            }).catch((error)=>{
                console.log(error);
                const { response } = error;
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_9___default()), {
                    icon: false,
                    severity: "error",
                    children: response?.data?.error
                }), {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center"
                    }
                });
            });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        formik.setFieldValue("job_id", job_id);
    }, [
        job_id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        formik.setFieldValue("driver_id", user?.id);
    }, [
        user,
        user?.id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Modal, {
            open: applyOpen,
            onClose: handleClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
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
                onSubmit: formik.handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__/* .TextBox */ .zC, {
                                    fullWidth: true,
                                    size: "small",
                                    name: "ammount",
                                    value: formik.values.ammount,
                                    isMaxLenght: 5,
                                    onChange: (e)=>{
                                        if (e) {
                                            formik.setFieldValue("ammount", e.target.value.replace(/\D/gm, ""));
                                        }
                                    },
                                    label: "Bid Price",
                                    placeholder: "Bidding Price",
                                    helperText: formik.touched.ammount && formik.errors.ammount
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__/* .TextBox */ .zC, {
                                    fullWidth: true,
                                    size: "small",
                                    multiline: true,
                                    rows: 4,
                                    name: "description",
                                    value: formik.values.description,
                                    onChange: formik.handleChange,
                                    label: "Note",
                                    placeholder: "Note For Customer",
                                    helperText: formik.touched.description && formik.errors.description
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                pb: 2,
                                children: "Are you sure you want to Apply for the Job ?"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                        direction: "row",
                        spacing: 8,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                fullWidth: true,
                                variant: "outlined",
                                type: "submit",
                                children: "Yes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                fullWidth: true,
                                variant: "outlined",
                                onClick: ()=>{
                                    handleClose();
                                    formik.resetForm();
                                },
                                children: "No"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyJobModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;