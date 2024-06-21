"use strict";
exports.id = 2238;
exports.ids = [2238];
exports.modules = {

/***/ 8464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ForgetForm)
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
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_flags_select__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__]);
([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import { SelectBox, TextBox } from "@/components/form";
// import Iconify from "@/components/iconify/Iconify";
// import { Close } from "@mui/icons-material";
// import {
//   Autocomplete,
//   Box,
//   FormControl,
//   FormHelperText,
//   InputAdornment,
//   Stack,
//   TextField,
//   alpha,
// } from "@mui/material";
// import * as React from "react";
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
// import { find } from "lodash";
// import ReactFlagsSelect from "react-flags-select";
// export const ForgetForm = ({ formik,selected,handleSelect,customLabels }) => {
//   const OTPSelect = [
//     // {
//     //   label: "Choose Option for Get OTP",
//     //   value: 0,
//     // },
//     {
//       label: "Email",
//       value: "email",
//     },
//     {
//       label: "Mobile",
//       value: "mobile",
//     },
//   ];
// console.log(formik )
//   return (
//     <React.Fragment>
//       <Box sx={{ mt: 4 }} />
//       <FormControl
//         sx={{ mb: 1.3 }}
//         error={formik.errors.type ? true : false}
//         fullWidth
//       >
//         <Stack direction="row">
//           {/* <Box
//             sx={{
//               ml: 0,
//               background: (theme) => theme.palette.grey[100],
//               border: "1px solid",
//               borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
//               padding: ".375rem .75rem",
//               borderRadius: ".25rem",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <ArrowDropDownCircleIcon color="primary" fontSize="small" />
//           </Box> */}
//           <Autocomplete
//             sx={{ mb: 0 }}
//             size="small"
//             fullWidth
//             options={OTPSelect}
//             name={`type`}
//             value={find(OTPSelect, { value: formik?.values?.type })}
//             onChange={(e, newValue) => {
//               formik.setFieldValue("type", newValue?.value);
//               formik.setFieldValue("email", "");
//             }}
//             error={formik.touched.type && formik.errors.type}
//             helperText={formik.touched.type && formik.errors.type}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 placeholder="Choose Option for Get OTP"
//                 InputProps={{
//                   ...params.InputProps,
//                 }}
//               />
//             )}
//           />
//         </Stack>
//         {formik.errors.type && (
//           <FormHelperText>{formik.errors.type}</FormHelperText>
//         )}
//       </FormControl>
//       {formik.values.type == "email" && (
//         <TextBox
//           size="small"
//           // startIcon={<Iconify icon="material-symbols:mail" color={"#ff7534"} />}
//           fullWidth
//           start
//           // label="Email"
//           name={`email`}
//           placeholder="Enter your Registered Email"
//           value={formik?.values?.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && formik.errors.email}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//       )}
//       {formik.values.type == "mobile" && (
//         <Box sx={{ display: "flex" }}>
//                     {/* <ReactFlagsSelect
//                       //  sx={{ border: "none",background : "red",}}
//                       selected={selected}
//                       // searchable
//                       onSelect={handleSelect} // Use the handleSelect function
//                       countries={["GB", "IN"]} // Specify country codes for US, UK, and India
//                       customLabels={customLabels} // Specify custom labels for specific countries
//                       selectedSize={10}
//                       // optionsSize={10}
//                       className="menu-flags"
//                       components={{
//                         DropdownIndicator: () => null,
//                         IndicatorSeparator: () => null,
//                       }}
//                       selectButtonClassName="menu-flags-button"
//     style={{
//       // Add CSS directly to the ReactFlagsSelect component
//       marginRight: "10px",
//       border: "1px solid red",
//       fontSize: "25px",
//       borderRadius: "5px",
//       padding: "5px",
//     }}
//                     />  */}
//         <TextBox
//           size="small"
//           fullWidth
//           startIcon={<Iconify icon="ic:round-call" color="#ff7534" />}
//           // label="Mobile No."
//           // required
//           name={`email`}
//           placeholder="Enter your Registered Contact No"
//           value={formik?.values?.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && formik.errors.email}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         </Box>
//       )}
//     </React.Fragment>
//   );
// };









const ForgetForm = ({ formik, handleSelect, customLabels })=>{
    const OTPSelect = [
        {
            label: "Email",
            value: "email"
        },
        {
            label: "Mobile",
            value: "mobile"
        }
    ];
    // Initialize selected country state with GB
    const [selectedCountry, setSelectedCountry] = react__WEBPACK_IMPORTED_MODULE_5__.useState("GB");
    console.log(formik);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    mt: 4
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                sx: {
                    mb: 1.3
                },
                error: formik.errors.type ? true : false,
                fullWidth: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        direction: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Autocomplete, {
                            sx: {
                                mb: 0
                            },
                            size: "small",
                            fullWidth: true,
                            options: OTPSelect,
                            name: `type`,
                            value: lodash_find__WEBPACK_IMPORTED_MODULE_7___default()(OTPSelect, {
                                value: formik?.values?.type
                            }),
                            onChange: (e, newValue)=>{
                                formik.setFieldValue("type", newValue?.value);
                                formik.setFieldValue("email", "");
                            },
                            error: formik.touched.type && formik.errors.type,
                            helperText: formik.touched.type && formik.errors.type,
                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                    ...params,
                                    placeholder: "Choose Option for Get OTP",
                                    InputProps: {
                                        ...params.InputProps
                                    }
                                })
                        })
                    }),
                    formik.errors.type && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormHelperText, {
                        children: formik.errors.type
                    })
                ]
            }),
            formik.values.type == "email" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                size: "small",
                fullWidth: true,
                start: true,
                // label="Email"
                name: `email`,
                placeholder: "Enter your Registered Email",
                value: formik?.values?.email,
                onChange: formik.handleChange,
                error: formik.touched.email && formik.errors.email,
                helperText: formik.touched.email && formik.errors.email
            }),
            formik.values.type == "mobile" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_flags_select__WEBPACK_IMPORTED_MODULE_8___default()), {
                        selected: selectedCountry,
                        onSelect: (code)=>setSelectedCountry(code),
                        countries: [
                            "GB",
                            "IN"
                        ],
                        customLabels: customLabels,
                        selectedSize: 10,
                        style: {
                            marginRight: "10px",
                            border: "1px solid red",
                            fontSize: "25px",
                            borderRadius: "5px",
                            padding: "5px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                        size: "small",
                        fullWidth: true,
                        name: `email`,
                        placeholder: "Enter your Registered Contact No",
                        value: formik?.values?.email,
                        onChange: formik.handleChange,
                        error: formik.touched.email && formik.errors.email,
                        helperText: formik.touched.email && formik.errors.email
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5228:
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2065);
/* harmony import */ var _forgetForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8464);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _otpForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6487);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3763);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8703);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9964);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_forgetForm__WEBPACK_IMPORTED_MODULE_4__, _otpForm__WEBPACK_IMPORTED_MODULE_8__, _utils_axios__WEBPACK_IMPORTED_MODULE_9__, _components_form__WEBPACK_IMPORTED_MODULE_10__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_12__]);
([_forgetForm__WEBPACK_IMPORTED_MODULE_4__, _otpForm__WEBPACK_IMPORTED_MODULE_8__, _utils_axios__WEBPACK_IMPORTED_MODULE_9__, _components_form__WEBPACK_IMPORTED_MODULE_10__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide, {
        direction: "down",
        ref: ref,
        ...props
    });
});
const forgotimg = "/assets/images/auth/forgot.png";
const ForgetPasswordDialogBox = ({ keepMounted, onClose, open, title })=>{
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_6__.useSnackbar)();
    const [showResend, setShowResend] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [openPassword, setPasswordOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    // const handleOpen = () => setPasswordOpen(true);
    const handlePasswordClose = ()=>{
        onClose();
        setShowResend(false);
    // setPasswordOpen(false);
    };
    const [selectedCoutry, setSelectedCountry] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const customLabels = {
        GB: {
            primary: "UK",
            secondary: "+44"
        },
        IN: {
            primary: "IN",
            secondary: "+91"
        }
    };
    const handleSelect = (countryCode)=>{
        const selectedCountry = countryCode.toUpperCase();
        const { primary, secondary } = customLabels[selectedCountry];
        // console.log("Primary:", primary);
        // console.log("Secondary:", secondary);
        setSelectedCountry(secondary);
        setSelected(selectedCountry);
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            email: "",
            mobile: "",
            otp: "",
            type: "email",
            password: "",
            password_confirmation: ""
        },
        validate: (values)=>{
            const errors = {};
            if (values.type === "mobile" && !values.email) {
                errors.email = "Mobile no. is required";
            } else if (values.type === "mobile" && (!/^\+?[0-9]{0,13}$/.test(values.email.replace(/\s+/g, "")) || isNaN(parseInt(values.email.replace(/\s+/g, "").replace("+", ""))))) {
                errors.email = "Please enter a valid phone number (up to 15 digits) with '+' sign";
            }
            if (values.type === "email" && !values.email) {
                errors.email = "Email is required";
            } else if (values.type === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (showResend && !values.otp) {
                errors.otp = "OTP is Required";
            }
            return errors;
        },
        onSubmit: async (values, { setErrors })=>{
            console.log("values forgot", values);
            let url, formData;
            if (!showResend) {
                url = "/api/user/send-otp";
                formData = {
                    email: values?.email || `${selectedCoutry}${values.mobile}`,
                    mobile: `${selectedCoutry}${values.mobile}`,
                    type: values?.type,
                    logged: "yes"
                };
            } else {
                url = "/api/user/reset-password";
                formData = {
                    email: values?.email,
                    otp: values?.otp,
                    password: values?.password,
                    password_confirmation: values?.password_confirmation
                };
            }
            await _utils_axios__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.post(url, formData, {
                setErrors
            }).then((response)=>{
                if (response?.status === 200) {
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                    if (showResend) {
                        handleClose();
                        onClose();
                    // setPasswordOpen(true);
                    }
                    setShowResend(true);
                    // console.log("Resetformik", response);
                    formik.setFieldValue("otp", response?.data?.verification_code);
                    // Resetformik.setFieldValue("otp", values?.otp);
                    // Resetformik.setFieldValue("email", values?.email);
                    setOpen(true);
                    if (showResend) {
                        handleClose();
                        onClose();
                    }
                } else {
                    // error
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                    setShowResend(false);
                }
            }).catch((error)=>{
                const { response } = error;
                console.log("formik.values", response);
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
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                        children: response?.data?.message
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
    const Resetformik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            email: "",
            otp: "",
            password: "",
            password_confirmation: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.password) {
                errors.password = "New password is required";
            }
            if (!values.password_confirmation) {
                errors.password_confirmation = "Confirm password is required";
            }
            if (values.password_confirmation && values.password && values.password_confirmation !== values.password) {
                errors.password_confirmation = "Confirm password didn't match with new password";
            }
            return errors;
        },
        onSubmit: async (values, { setErrors })=>{
            const formattedEmail = values.email.trim().toLowerCase();
            // Format OTP if necessary
            const formattedOTP = values.otp.trim();
            console.error(formattedEmail, "Error occurred:", formattedOTP);
            // Assign formatted values to formik state
            Resetformik.setFieldValue("email", formattedEmail);
            Resetformik.setFieldValue("otp", formattedOTP);
            await _utils_axios__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.post("api/user/reset-password", values).then((response)=>{
                if (response.status === 200) {
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                    handlePasswordClose();
                    clearToken();
                    setPasswordOpen(false);
                    router.push("/auth/login");
                }
            }).catch((error)=>{
                const { response } = error;
                // error
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                if (response?.data?.status === 406) {
                    // error
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
    // console.log("Resetformik", Resetformik.values);
    const handleClose = ()=>{
        formik.resetForm();
        setShowResend(false);
    };
    const resendOtp = async ()=>{
        let formData;
        formData = {
            email: formik?.values?.email,
            type: formik?.values?.type,
            logged: "yes"
        };
        await _utils_axios__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.post("api/user/resend-otp", formData).then((response)=>{
            if (response?.status === 200) {
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                formik.setFieldValue("otp", response?.data?.verification_code);
            } else {
                // error
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            open: open,
            TransitionComponent: Transition,
            keepMounted: keepMounted,
            components: "form",
            scroll: "paper",
            onClose: onClose,
            "aria-describedby": "alert-dialog-slide-description",
            maxWidth: "xs",
            sx: {
                "& .MuiPaper-rounded": {
                    borderRadius: "0px"
                }
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_3__/* .DialogHeader */ .f, {
                    onClose: ()=>onClose(),
                    title: `${!showResend ? title : "OTP Verification"}`,
                    showResend: showResend,
                    handleClose: handleClose
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                    dividers: "paper",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            textAlign: "center",
                            mt: 2,
                            children: [
                                !showResend && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    m: "auto",
                                    component: "img",
                                    src: forgotimg,
                                    width: "6em"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h4",
                                    fontWeight: 300,
                                    sx: {
                                        cursor: "pointer",
                                        fontSize: "16px",
                                        fontWeight: 500
                                    },
                                    children: !showResend ? "Forget Password" : "Please Enter One Time OTP for Reset Your Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    sx: {
                                        fontSize: "16px"
                                    },
                                    children: !showResend ? "Enter Your Registerd Email or Contact no & Well Send you a link to reset your Password" : `A Code has Been Sent To Your ${formik.values.type == "email" ? "Email" : "Mobile"}`
                                })
                            ]
                        }),
                        showResend ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_otpForm__WEBPACK_IMPORTED_MODULE_8__/* .OTPForm */ .t, {
                            formik: formik
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forgetForm__WEBPACK_IMPORTED_MODULE_4__/* .ForgetForm */ .g, {
                            formik: formik,
                            selected: selected,
                            handleSelect: handleSelect,
                            customLabels: customLabels
                        }),
                        showResend && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPasswordDialogBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_dialog_forgetPasswordModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5228);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8703);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9964);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7666);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_dialog_forgetPasswordModal__WEBPACK_IMPORTED_MODULE_2__, _components_form__WEBPACK_IMPORTED_MODULE_3__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_dialog_forgetPasswordModal__WEBPACK_IMPORTED_MODULE_2__, _components_form__WEBPACK_IMPORTED_MODULE_3__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// import  { FacebookLoginButton } from 'react-social-login-buttons'
// import  { LoginSocialFacebook } from 'reactjs-social-login'
const Login = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const handleClose = ()=>setOpen(false);
    const { login } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const { loginWithGoogle, user, loginWithFacebook } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const handleGoogleLogin = async ()=>{
        try {
            if (loginWithGoogle) {
                loginWithGoogle();
            }
            console.log("GOOGLE LOGIN");
        } catch (error) {
            console.error(error);
        }
    };
    const handleFacebookLogin = async ()=>{
        try {
            if (loginWithFacebook) {
                loginWithFacebook();
            }
            console.log("FACEBOOK LOGIN");
        } catch (error) {
            console.error(error);
        }
    };
    const handleNotification = ()=>{
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            new Notification("Hello, World!");
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    new Notification("Hello, World!");
                }
            });
        }
    };
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormik)({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.email) {
                errors.email = "Email Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password Required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
            }
            return errors;
        },
        onSubmit: async (values)=>{
            // call api
            const data = {
                email: values.email,
                password: values.password
            };
            login(data);
            handleNotification();
            requestPermission();
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                sx: {
                    py: 14
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        spacing: 0,
                        sx: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        container: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                                item: true,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                        src: "/login/pana.png",
                                        component: "img"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                                item: true,
                                md: 4,
                                sm: 12,
                                xs: 12,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                    spacing: 3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                            textAlign: "center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                fontSize: 20,
                                                fontWeight: 600,
                                                children: "Hey! Welcome Back"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                            direction: "row",
                                            spacing: 2,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                        fullWidth: true,
                                                        sx: {
                                                            backgroundColor: (theme)=>theme.palette.grey[100],
                                                            border: (theme)=>`1px solid ${theme.palette.grey[300]}`,
                                                            borderRadius: "20px",
                                                            px: 2,
                                                            color: "#fff",
                                                            ":hover": {
                                                                backgroundColor: (theme)=>theme.palette.grey[400]
                                                            }
                                                        },
                                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            icon: "flat-color-icons:google"
                                                        }),
                                                        onClick: ()=>handleGoogleLogin(),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                            fontSize: 9,
                                                            color: (theme)=>theme.palette.grey[600],
                                                            children: "Sign in with Google"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                        fullWidth: true,
                                                        sx: {
                                                            backgroundColor: (theme)=>theme.palette.grey[100],
                                                            border: (theme)=>`1px solid ${theme.palette.grey[300]}`,
                                                            borderRadius: "20px",
                                                            px: 2,
                                                            color: "#fff",
                                                            ":hover": {
                                                                backgroundColor: (theme)=>theme.palette.grey[400]
                                                            }
                                                        },
                                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            icon: "logos:facebook"
                                                        }),
                                                        onClick: ()=>handleFacebookLogin(),
                                                        children: [
                                                            "  ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                                fontSize: 9,
                                                                color: (theme)=>theme.palette.grey[600],
                                                                children: "Sign in with Facebook"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                            spacing: 1,
                                            py: 1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                component: "form",
                                                noValidate: true,
                                                onSubmit: formik.handleSubmit,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                                                        spacing: 2,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__/* .TextBox */ .zC, {
                                                                    variant: "standard",
                                                                    fullWidth: true,
                                                                    label: "Email",
                                                                    placeholder: "Enter Your Email Address",
                                                                    size: "small",
                                                                    onChange: formik.handleChange,
                                                                    value: formik.values.email,
                                                                    name: "email",
                                                                    helperText: formik?.errors?.email
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_3__/* .PasswordBox */ .Jg, {
                                                                    label: "Password",
                                                                    variant: "standard",
                                                                    onChange: formik.handleChange,
                                                                    fullWidth: true,
                                                                    placeholder: "Enter Password",
                                                                    size: "small",
                                                                    value: formik.values.password,
                                                                    name: "password",
                                                                    helperText: formik?.errors?.password
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                sx: {
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "center"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.FormControlLabel, {
                                                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
                                                                                size: "",
                                                                                defaultChecked: true
                                                                            }),
                                                                            label: "Remember me",
                                                                            sx: {
                                                                                fontSize: 14,
                                                                                "&..MuiFormControlLabel-label": {
                                                                                    fontSize: "4px"
                                                                                }
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                                            onClick: ()=>setOpen(true),
                                                                            variant: "p",
                                                                            color: "primary",
                                                                            sx: {
                                                                                cursor: "pointer",
                                                                                fontSize: "12px"
                                                                            },
                                                                            children: "Forget Password ?"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                    variant: "contained",
                                                                    color: "primary",
                                                                    type: "submit",
                                                                    fullWidth: true,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                                        fontSize: 12,
                                                                        children: "Login Now"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                                                            textAlign: "center",
                                                            mt: 4,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                                    variant: "p",
                                                                    fontSize: 12,
                                                                    children: [
                                                                        "Don",
                                                                        "’",
                                                                        "t have an account?"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                                                    component: "span",
                                                                    color: "primary",
                                                                    onClick: ()=>router.push("/auth/register"),
                                                                    sx: {
                                                                        cursor: "pointer",
                                                                        fontSize: 12,
                                                                        ml: 0.5,
                                                                        borderBottom: "1px solid",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "SIGNUP"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dialog_forgetPasswordModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Forget Password",
                open: open,
                onClose: ()=>handleClose()
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;