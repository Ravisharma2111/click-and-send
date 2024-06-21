"use strict";
exports.id = 6213;
exports.ids = [6213];
exports.modules = {

/***/ 6213:
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
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_CreditCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9787);
/* harmony import */ var _mui_icons_material_CreditCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CreditCard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3763);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1425);
/* harmony import */ var _subscription_OTPVerification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6906);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_6__, _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_7__, _subscription_OTPVerification__WEBPACK_IMPORTED_MODULE_8__]);
([_utils_axios__WEBPACK_IMPORTED_MODULE_6__, _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_7__, _subscription_OTPVerification__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CardPaymentForm = ({ customerInvoiceAndSubscription, paymentDetails, setShowPayment })=>{
    console.log("customerInvoiceAndSubscription customerInvoiceAndSubscription", customerInvoiceAndSubscription, paymentDetails);
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_7__/* .useAuthContext */ .E)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [openSnackbar, setOpenSnackbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        nameOnCard: "",
        email: "company@mailinator.com",
        expMonth: "",
        expYear: ""
    });
    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [showOTP, setShowOTP] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (e)=>{
        setFormErrors({});
        let { name, value } = e.target;
        if (name === "expiryDate") {
            value = value.replace(/[^0-9/]/g, "");
            if (value.length === 2 && value.indexOf("/") === -1) {
                value += "/";
            } else if (value.length > 2) {
                value = value.substring(0, 2) + "/" + value.substring(2).replace(/[^\d]/g, "");
            }
            if (value.length === 3 && e.nativeEvent.inputType === "deleteContentBackward") {
                value = value.slice(0, -1);
            }
            const [month, year] = value.split("/");
            setFormValues({
                ...formValues,
                [name]: value,
                expMonth: month,
                expYear: year || ""
            });
        } else if (name === "cvv") {
            value = value.replace(/\D/g, "").slice(0, 3);
            setFormValues({
                ...formValues,
                [name]: value
            });
        } else if (name === "cardNumber") {
            value = value.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ") || "";
            setFormValues({
                ...formValues,
                [name]: value.slice(0, 19)
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    };
    const validate = (values)=>{
        const errors = {};
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        const cardNumberContinuous = values.cardNumber.replace(/\s/g, "");
        if (!values.cardNumber) {
            errors.cardNumber = "Card number is required!";
        } else if (cardNumberContinuous.length !== 16) {
            errors.cardNumber = "Card number must be 16 digits!";
        }
        if (!values.expiryDate) {
            errors.expiryDate = "Expiry date is required!";
        } else {
            const [expMonth, expYear] = values.expiryDate.split("/").map((num)=>parseInt(num, 10));
            if (isNaN(expMonth) || isNaN(expYear) || expMonth < 1 || expMonth > 12) {
                errors.expiryDate = "Invalid month!";
            } else if (expYear < currentYear || expYear === currentYear && expMonth < currentMonth) {
                errors.expiryDate = "Card has expired!";
            }
        }
        if (!values.cvv) {
            errors.cvv = "CVV is required!";
        } else if (values.cvv.length !== 3) {
            errors.cvv = "CVV must be 3 digits!";
        }
        if (!values.nameOnCard) {
            errors.nameOnCard = "Name on card is required!";
        }
        return errors;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const [expMonth, expYear] = formValues.expiryDate.split("/");
            const customerInitialValues = {
                user_id: paymentDetails?.job?.user_id,
                invoice_id: paymentDetails?.id,
                email: user?.email,
                number: formValues?.cardNumber,
                exp_month: Number(expMonth),
                exp_year: Number(expYear),
                cvc: Number(formValues?.cvv),
                name: formValues?.nameOnCard
            };
            const customerInitialValuesSubscription = {
                user_id: user?.id,
                plan_id: paymentDetails?.id,
                email: user?.email,
                number: formValues?.cardNumber,
                exp_month: Number(expMonth),
                exp_year: Number(expYear),
                cvc: Number(formValues?.cvv),
                name: formValues?.nameOnCard
            };
            try {
                let CustomerResponse;
                if (customerInvoiceAndSubscription === "companySubscriptionPlan") {
                    CustomerResponse = await _utils_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.post(`api/auth/payment/purchase-plan/${user?.id}`, customerInitialValuesSubscription);
                } else if (customerInvoiceAndSubscription === "companyInvoicePayment") {
                    CustomerResponse = await _utils_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.post(`api/auth/payment/company-invoice-payment`, customerInitialValues);
                }
                if (CustomerResponse?.status === 200) {
                    setOpenSnackbar(true);
                    setTimeout(()=>{
                        setShowPayment(false);
                    }, 1500);
                }
            } catch (error) {
                if (error.response) {
                    const { data } = error.response;
                    setFormErrors(data.errors);
                } else {
                    console.error("An error occurred:", error.message);
                }
            }
        }
    };
    if (showOTP) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subscription_OTPVerification__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            setShowOTPVerification: setShowOTP
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        sx: {
            paddingBottom: "120px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Snackbar, {
                open: openSnackbar,
                autoHideDuration: 6000,
                onClose: ()=>setOpenSnackbar(false),
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                },
                style: {
                    top: "100px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
                    elevation: 6,
                    variant: "filled",
                    onClose: ()=>setOpenSnackbar(false),
                    severity: "success",
                    children: "Purchase plan successful!!"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: {
                        lg: "350px",
                        md: "350px",
                        sm: "100%",
                        xs: "100%"
                    },
                    backgroundImage: `url("/banner/banner.png")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    zIndex: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                    className: "dashboard_subscription_box_stack_responsive",
                    sx: {
                        paddingTop: {
                            lg: "6rem!important",
                            md: "6rem!important",
                            sm: "6rem!important",
                            xs: "3rem!important"
                        },
                        paddingBottom: {
                            lg: "4rem!important",
                            md: "4rem!important",
                            sm: "2rem!important",
                            xs: "2rem!important"
                        },
                        position: "relative",
                        zIndex: 9
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        spacing: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            gutterBottom: true,
                            fontSize: 44,
                            component: "h2",
                            fontWeight: 600,
                            color: "white",
                            variant: "h2",
                            children: paymentDetails.name
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                maxWidth: "md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h4",
                        align: "center",
                        gutterBottom: true,
                        style: {
                            marginBottom: "2rem",
                            color: "#333",
                            paddingTop: "25px"
                        },
                        children: "Pay with card"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                        variant: "outlined",
                        style: {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            borderRadius: "16px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mb: 2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CreditCard__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        fontSize: "large",
                                        style: {
                                            color: "#ff7533"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    onSubmit: handleSubmit,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    label: "Card Number",
                                                    variant: "outlined",
                                                    fullWidth: true,
                                                    name: "cardNumber",
                                                    InputProps: {
                                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CreditCard__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            style: {
                                                                marginRight: "10px"
                                                            }
                                                        }),
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*"
                                                    },
                                                    value: formValues?.cardNumber,
                                                    onChange: handleChange,
                                                    error: !!formErrors?.cardNumber,
                                                    helperText: formErrors?.cardNumber
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    label: "Expiry Date (MM/YY)",
                                                    variant: "outlined",
                                                    fullWidth: true,
                                                    name: "expiryDate",
                                                    value: formValues?.expiryDate,
                                                    onChange: handleChange,
                                                    error: !!formErrors?.expiryDate,
                                                    helperText: formErrors?.expiryDate
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    label: "CVV",
                                                    variant: "outlined",
                                                    fullWidth: true,
                                                    name: "cvv",
                                                    inputProps: {
                                                        maxLength: 3,
                                                        inputMode: "numeric",
                                                        pattern: "[0-9]*"
                                                    },
                                                    value: formValues?.cvv,
                                                    onChange: handleChange,
                                                    error: !!formErrors?.cvv,
                                                    helperText: formErrors?.cvv
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                    label: "Name on Card",
                                                    variant: "outlined",
                                                    fullWidth: true,
                                                    name: "nameOnCard",
                                                    value: formValues?.nameOnCard,
                                                    onChange: handleChange,
                                                    error: !!formErrors?.nameOnCard,
                                                    helperText: formErrors?.nameOnCard || " "
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    type: "submit",
                                                    variant: "contained",
                                                    style: {
                                                        backgroundColor: "#ff7533",
                                                        color: "white",
                                                        borderRadius: "8px"
                                                    },
                                                    fullWidth: true,
                                                    children: "Complete payment"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                fullWidth: true,
                                                variant: "text",
                                                onClick: ()=>setShowPayment(false),
                                                children: "Back to Plans"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardPaymentForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6906:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _SuccessMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const OTPVerification = ({ setShowOTPVerification })=>{
    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOtpChange = (e)=>{
        let value = e.target.value;
        // Allow only numeric input
        value = value.replace(/\D/g, "");
        // Restrict input to maximum of 6 characters
        if (value.length > 6) {
            value = value.slice(0, 6);
        }
        setOtp(value);
        setError(""); // Clear error when user modifies OTP
    };
    const verifyOtp = async ()=>{
        if (otp.length !== 6) {
            setError("OTP must be 6 digits.");
            return;
        }
        setLoading(true);
        try {
            // Replace with your actual API endpoint and method
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/verify-otp", {
                otp
            });
            if (response.status === 200) {
                // Handle successful OTP verification here
                alert("OTP Verified Successfully!");
                setShowSuccess(true);
            } else {
                // Handle non-200 responses here
                setError("Verification failed. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally{
            setLoading(false);
        }
        setShowOTPVerification(false);
    };
    const resendOtp = async ()=>{
        setLoading(true);
        try {
            // Replace with your actual API endpoint and method for resending OTP
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/resend-otp");
            if (response.status === 200) {
                alert("OTP Resent Successfully!");
            } else {
                setError("Failed to resend OTP. Please try again.");
            }
        } catch (error) {
            setError("An error occurred while resending OTP. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    if (showSuccess) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SuccessMessage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            setSuccess: setShowSuccess
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: {
                        lg: "350px",
                        md: "350px",
                        sm: "100%",
                        xs: "100%"
                    },
                    backgroundImage: `url("/banner/banner.png")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    zIndex: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        className: "Subscritption_box_stack_responsive",
                        sx: {
                            zIndex: 8,
                            position: "absolute",
                            left: "8em",
                            top: "7em"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                        className: "dashboard_subscription_box_stack_responsive",
                        sx: {
                            paddingTop: {
                                lg: "6rem!important",
                                md: "6rem!important",
                                sm: "6rem!important",
                                xs: "3rem!important"
                            },
                            paddingBottom: {
                                lg: "4rem!important",
                                md: "4rem!important",
                                sm: "2rem!important",
                                xs: "2rem!important"
                            },
                            position: "relative",
                            zIndex: 9
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                sx: {
                    alignItems: "center",
                    padding: "100px 0px"
                },
                container: true,
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h5",
                            children: "Verify OTP"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            label: "Enter OTP",
                            variant: "outlined",
                            fullWidth: true,
                            value: otp,
                            onChange: handleOtpChange,
                            error: !!error,
                            helperText: error,
                            disabled: loading
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "contained",
                            color: "primary",
                            onClick: verifyOtp,
                            disabled: loading,
                            children: "Verify OTP"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "text",
                            onClick: resendOtp,
                            disabled: loading,
                            children: "Resend OTP"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OTPVerification);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const SuccessMessage = ({ setSuccess })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            textAlign: "center",
            padding: "100px 0"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h4",
                gutterBottom: true,
                children: "Success!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "subtitle1",
                children: "Your OTP has been verified successfully."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "contained",
                sx: {
                    marginTop: "20px"
                },
                onClick: ()=>setSuccess(false),
                children: "Go Back"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessMessage);


/***/ })

};
;