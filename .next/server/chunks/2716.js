"use strict";
exports.id = 2716;
exports.ids = [2716];
exports.modules = {

/***/ 5739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ scrollableTabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/components/button/submitButton.js





const CircularProgress = (0,styles_.styled)((CircularProgress_default()))(()=>({
        marginLeft: 10
    }));
const SubmitButton = ({ title, loading, variant, disabled = false })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Button, {
        fullWidth: true,
        disabled: disabled,
        variant: variant,
        type: "submit",
        children: [
            title,
            loading && /*#__PURE__*/ jsx_runtime.jsx(CircularProgress, {
                color: "inherit",
                size: 20
            })
        ]
    });
SubmitButton.propTypes = {
    title: (external_prop_types_default()).string,
    loading: (external_prop_types_default()).bool,
    variant: (external_prop_types_default()).string
};
/* harmony default export */ const submitButton = (SubmitButton);

;// CONCATENATED MODULE: ./src/components/button/button.js





const button_CircularProgress = (0,styles_.styled)((CircularProgress_default()))(()=>({
        marginLeft: 10
    }));
const CustomeButton = ({ title, loading, variant, color, onClick, disabled = false })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Button, {
        fullWidth: true,
        disabled: disabled,
        color: color,
        variant: variant,
        type: "button",
        onClick: onClick,
        children: [
            title,
            loading && /*#__PURE__*/ jsx_runtime.jsx(button_CircularProgress, {
                color: "inherit",
                size: 20
            })
        ]
    });
CustomeButton.propTypes = {
    title: (external_prop_types_default()).string,
    loading: (external_prop_types_default()).string,
    variant: (external_prop_types_default()).string,
    color: (external_prop_types_default()).string,
    onClick: (external_prop_types_default()).func,
    disabled: (external_prop_types_default()).any
};
/* harmony default export */ const button_button = (CustomeButton);

;// CONCATENATED MODULE: ./src/components/button/index.js



// EXTERNAL MODULE: ./src/components/stepper/stepperContext.js
var stepperContext = __webpack_require__(4303);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
;// CONCATENATED MODULE: ./src/components/scrollableTabs.js













const BorderLinearProgress = (0,material_.styled)((LinearProgress_default()))(({ theme })=>({
        height: 10,
        borderRadius: 5,
        [`&.${LinearProgress_.linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
        },
        [`& .${LinearProgress_.linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main
        }
    }));
let highestIndex = 0;
const ScrollableTabs = ({ tabs, formik, isLastStep, disabled, hideButton, setStep })=>{
    const router = (0,router_.useRouter)();
    const { id } = router.query;
    const { value, setValue, handleChange } = (0,external_react_.useContext)(stepperContext/* StepperContext */.E);
    // console.log("dkhhfasdjhf", formik);
    const checkError = ()=>{
        let selectTab = [];
        if (tabs) {
            tabs.map((element, index)=>{
                if (element?.fields && formik?.errors) {
                    const isEquipmentTranster = formik?.errors?.equipment_transfers;
                    const errors = Object.keys(formik.errors);
                    element.fields.map((item, i)=>{
                        if (errors.includes(item)) {
                            // set default tab for error
                            selectTab.push(index);
                        } else if (isEquipmentTranster) {
                            if (isEquipmentTranster[element.fields[i]]) {
                                selectTab.push(index);
                            }
                        }
                    });
                }
            });
        }
        if (selectTab && selectTab.length) {
            setValue(selectTab[0]);
            if (selectTab[0] >= highestIndex) {
                highestIndex = selectTab[0];
            }
        }
    };
    external_react_.useEffect(()=>{
        if (formik.isSubmitting) {
            checkError();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        formik
    ]);
    const _handleBack = ()=>{
        setValue(value - 1);
    };
    let steps = 100 / setStep;
    let finalValue = (value + 1) * steps;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((TabContext_default()), {
                value: value,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        textAlign: "right",
                        mb: 1,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Typography, {
                            color: "primary",
                            fontSize: 14,
                            fontWeight: 500,
                            children: [
                                "Step ",
                                value + 1,
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                    ml: 0.7,
                                    component: "span",
                                    color: "grey",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    children: "Of 3"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(BorderLinearProgress, {
                            variant: "determinate",
                            value: finalValue
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    tabs && tabs.map((tab, index)=>/*#__PURE__*/ jsx_runtime.jsx((TabPanel_default()), {
                            sx: {
                                p: 0,
                                my: 2
                            },
                            value: index,
                            children: tab.component
                        }, `tab${index}`))
                ]
            }),
            !hideButton && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
                    direction: "row",
                    alignItems: "center",
                    spacing: 2,
                    justifyContent: "center",
                    sx: {
                        marginTop: "20px"
                    },
                    className: "suscribeTable_box_stack_responsive",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                width: "20%"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(button_button, {
                                color: "primary",
                                onClick: ()=>_handleBack(),
                                variant: "outlined",
                                title: "Cancel",
                                disabled: value <= 0
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                width: "auto"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(submitButton, {
                                loading: formik.isSubmitting,
                                disabled: formik.isSubmitting || disabled,
                                variant: "contained",
                                title: isLastStep ? id === "create" ? "Post Job" : "Update" : "Next"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
ScrollableTabs.DefaultProps = {
    tabs: []
};
ScrollableTabs.propTypes = {
    tabs: (external_prop_types_default()).array,
    formik: (external_prop_types_default()).object,
    isLastStep: (external_prop_types_default()).any,
    hideButton: (external_prop_types_default()).any,
    disabled: (external_prop_types_default()).any,
    value: (external_prop_types_default()).any
};
/* harmony default export */ const scrollableTabs = (ScrollableTabs);


/***/ }),

/***/ 8465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__]);
_components_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const StepOne = ({ formik })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                mb: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    fontSize: 16,
                    fontWeight: 500,
                    children: "Enter Job Title"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                    fullWidth: true,
                    placeholder: "Job Title",
                    label: "Job Title",
                    size: "small",
                    value: formik.values.name,
                    name: `name`,
                    onChange: formik.handleChange,
                    helperText: formik.touched.name && formik.errors.name
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__]);
_components_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const VehicleTypeTruck = [
    {
        label: "7.5t",
        value: "7.5t"
    },
    {
        label: "10t",
        value: "10t"
    },
    {
        label: "18t",
        value: "18t"
    },
    {
        label: "26t",
        value: "26t"
    },
    {
        label: "Trailer",
        value: "Trailer"
    },
    {
        label: "Attic",
        value: "Attic"
    }
];
const VehicleTypeVan = [
    {
        label: "Small van",
        value: "Small van"
    },
    {
        label: "SWB 2.4 m ",
        value: "SWB 2.4 m "
    },
    {
        label: "Medium 3 m",
        value: "Medium 3 m"
    },
    {
        label: "Lwb 4m",
        value: "Lwb 4m"
    },
    {
        label: "XLWB",
        value: "XLWB"
    },
    {
        label: "Moterbike",
        value: "Moterbike"
    },
    {
        label: "Car",
        value: "Car"
    },
    {
        label: "Drop side",
        value: "Drop side"
    },
    {
        label: "Curtain side",
        value: "Curtain side"
    }
];
const VehicleType = [
    {
        label: "Choose Vehicle Type",
        value: 0
    },
    {
        label: "Vans",
        value: "van"
    },
    {
        label: "Trucks/ lorrys",
        value: "truck"
    }
];
const StepThree = ({ formik })=>{
    const [vehicle, setVehicle] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);
    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id } = query;
    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{
        if (id !== "create") {
            if (formik.values.vehical_type === "van") {
                setVehicle(VehicleTypeVan);
            } else if (formik.values.vehical_type === "truck") {
                setVehicle(VehicleTypeTruck);
            } else {
                setVehicle([]);
            }
        }
    }, [
        formik.values,
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                mb: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    fontSize: 16,
                    fontWeight: 500,
                    children: "Vehicle Requirement"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                className: "dashboard_jobPostForm_responsive",
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .SelectBox */ .jL, {
                            fullWidth: true,
                            label: "Vehicle Type",
                            value: formik.values?.vehical_type,
                            name: `vehical_type`,
                            options: VehicleType,
                            onChange: (e)=>{
                                formik.setFieldValue("vehical_type", e.target.value);
                                formik.setFieldValue("vehicle", "");
                                if (e.target.value === "van") {
                                    setVehicle(VehicleTypeVan);
                                } else if (e.target.value === "truck") {
                                    setVehicle(VehicleTypeTruck);
                                } else {
                                    setVehicle([]);
                                }
                            },
                            helperText: formik.touched.vehical_type && formik.errors.vehical_type,
                            size: "small",
                            vehicle: "small"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .SelectBox */ .jL, {
                            fullWidth: true,
                            label: "Vehicle",
                            value: formik.values?.vehicle,
                            name: `vehicle`,
                            options: vehicle,
                            onChange: formik.handleChange,
                            helperText: formik.touched.vehicle && formik.errors.vehicle,
                            size: "small",
                            vehicle: "small"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        md: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                fullWidth: true,
                                label: "Important Note:",
                                name: `description`,
                                value: formik?.values?.description,
                                onChange: formik.handleChange,
                                size: "small",
                                multiline: true,
                                rows: 7,
                                helperText: formik.touched.description && formik.errors.description
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3280);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_x_date_pickers_MobileTimePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7893);
/* harmony import */ var _mui_x_date_pickers_MobileTimePicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_MobileTimePicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_x_date_pickers_MobileDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(791);
/* harmony import */ var _mui_x_date_pickers_MobileDatePicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_MobileDatePicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4101);
/* harmony import */ var _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__]);
_components_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const MaterialSelect = [
    {
        label: "Choose Material",
        value: 0
    },
    {
        label: "Liquid",
        value: "Liquid"
    },
    {
        label: "Solid",
        value: "Solid"
    },
    {
        label: "Gas",
        value: "Gas"
    },
    {
        label: "Solution",
        value: "Solution"
    },
    {
        label: "Other",
        value: "Other"
    }
];
const DropTypeSelect = [
    {
        label: "Choose Address Type",
        value: 0
    },
    {
        label: "Pickup",
        value: "pickup"
    },
    {
        label: "Delivery",
        value: "drop"
    }
];
const StepTwo = ({ formik, id, addProduct, removeProduct, addSingleAddress, addSingleAddress1, removesAddress })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                sx: {
                    my: 3
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    mb: 3
                },
                children: formik?.values?.items && formik?.values?.items?.length > 0 && formik.values.items.map((productItem, productIndex)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            mt: 1
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
                            sx: {
                                borderRadius: "0px",
                                border: "0px",
                                boxShadow: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    container: true,
                                    spacing: 3,
                                    children: [
                                        productIndex <= 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                    item: true,
                                                    md: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                            fullWidth: true,
                                                            type: "date",
                                                            label: "Pickup Date",
                                                            InputLabelProps: {
                                                                shrink: true
                                                            },
                                                            value: productItem?.product?.pickup_date,
                                                            min: new Date().toISOString().split("T")[0],
                                                            name: `items[${productIndex}].product.pickup_date`,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue(`items[${productIndex}].product.pickup_date`, e.target.value);
                                                                formik.setFieldValue(`items[${productIndex}].product.pickup_time`, "");
                                                                formik.setFieldValue(`items[${productIndex}].product.drop_date`, "");
                                                                formik.setFieldValue(`items[${productIndex}].product.drop_time`, "");
                                                            },
                                                            // onKeyDown={(event) => event.preventDefault()}
                                                            size: "small",
                                                            helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.pickup_date
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                    item: true,
                                                    md: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .NI, {
                                                            fullWidth: true,
                                                            size: "small",
                                                            sx: {
                                                                marginTop: "5px"
                                                            },
                                                            error: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.pickup_time,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_MobileTimePicker__WEBPACK_IMPORTED_MODULE_6__.MobileTimePicker, {
                                                                    sx: {
                                                                        "& .MuiOutlinedInput-input": {
                                                                            padding: "8.5px 14px !important"
                                                                        },
                                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                                            borderRight: "0px !important",
                                                                            borderTop: "0px !important",
                                                                            borderLeft: "0px !important",
                                                                            borderRadius: "0px"
                                                                        }
                                                                    },
                                                                    fullWidth: true,
                                                                    variant: "standard",
                                                                    format: "HH:mm",
                                                                    label: "Pickup Time",
                                                                    ampm: false,
                                                                    viewRenderers: {
                                                                        hours: _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__.renderTimeViewClock,
                                                                        minutes: _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__.renderTimeViewClock,
                                                                        seconds: _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__.renderTimeViewClock
                                                                    },
                                                                    value: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(`${productItem?.product?.pickup_date}T${moment__WEBPACK_IMPORTED_MODULE_10___default()(productItem?.product?.pickup_time, "hh:mm a").format("HH:mm")}`),
                                                                    InputLabelProps: {
                                                                        shrink: true
                                                                    },
                                                                    name: `items[${productIndex}].product.pickup_time`,
                                                                    onChange: (e)=>{
                                                                        formik.setFieldValue(`items[${productIndex}].product.pickup_time`, dayjs__WEBPACK_IMPORTED_MODULE_8___default()(e).format("HH:mm "));
                                                                        formik.setFieldValue(`items[${productIndex}].product.drop_time`, "");
                                                                    },
                                                                    size: "small",
                                                                    helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.pickup_time
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                    sx: {
                                                                        display: "flex"
                                                                    },
                                                                    children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.pickup_time && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormHelperText, {
                                                                        children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.pickup_time
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                    item: true,
                                                    md: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                            fullWidth: true,
                                                            type: "date",
                                                            label: "Delivery Date",
                                                            InputLabelProps: {
                                                                shrink: true
                                                            },
                                                            value: productItem?.product?.drop_date,
                                                            min: productItem?.product?.pickup_date || new Date().toISOString().split("T")[0],
                                                            name: `items[${productIndex}].product.drop_date`,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue(`items[${productIndex}].product.drop_time`, "");
                                                                formik.setFieldValue(`items[${productIndex}].product.drop_date`, e.target.value);
                                                            },
                                                            // onKeyDown={(event) => event.preventDefault()}
                                                            size: "small",
                                                            helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.drop_date
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                    item: true,
                                                    md: 6,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .NI, {
                                                            fullWidth: true,
                                                            size: "small",
                                                            error: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.drop_time,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_MobileTimePicker__WEBPACK_IMPORTED_MODULE_6__.MobileTimePicker, {
                                                                    sx: {
                                                                        "& .MuiOutlinedInput-input": {
                                                                            padding: "8.5px 14px !important"
                                                                        },
                                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                                            borderRight: "0px !important",
                                                                            borderTop: "0px !important",
                                                                            borderLeft: "0px !important",
                                                                            borderRadius: "0px"
                                                                        }
                                                                    },
                                                                    fullWidth: true,
                                                                    format: "HH:mm",
                                                                    variant: "standard",
                                                                    ampm: false,
                                                                    label: "Delivery Time",
                                                                    value: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(`${productItem?.product?.drop_date}T${moment__WEBPACK_IMPORTED_MODULE_10___default()(productItem?.product?.drop_time, "hh:mm a").format("HH:mm")}`),
                                                                    InputLabelProps: {
                                                                        shrink: true
                                                                    },
                                                                    viewRenderers: {
                                                                        hours: _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__.renderTimeViewClock,
                                                                        minutes: _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__.renderTimeViewClock,
                                                                        seconds: _mui_x_date_pickers_timeViewRenderers__WEBPACK_IMPORTED_MODULE_12__.renderTimeViewClock
                                                                    },
                                                                    name: `items[${productIndex}].product.drop_time`,
                                                                    onChange: (e)=>{
                                                                        const dropTime = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(e);
                                                                        const pickupTime = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(formik.values.items[productIndex].product.pickup_time, "hh:mm a");
                                                                        if (dropTime.isBefore(pickupTime)) {
                                                                            formik.setFieldError(`items[${productIndex}].product.drop_time`, "Delivery time cannot be earlier than pickup time.");
                                                                        } else {
                                                                            formik.setFieldValue(`items[${productIndex}].product.drop_time`, dropTime.format("hh:mm a"));
                                                                            // Clear the error when the user selects a valid drop time
                                                                            formik.setFieldError(`items[${productIndex}].product.drop_time`, "");
                                                                        }
                                                                    },
                                                                    size: "small",
                                                                    helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.drop_time
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                    sx: {
                                                                        display: "flex"
                                                                    },
                                                                    children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.drop_time && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormHelperText, {
                                                                        children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.drop_time
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                    fullWidth: true,
                                                    label: "Quantity",
                                                    InputLabelProps: {
                                                        shrink: true
                                                    },
                                                    placeholder: "Enter Quantity",
                                                    value: productItem?.product?.quantity,
                                                    name: `items[${productIndex}].product.quantity`,
                                                    onChange: (e)=>{
                                                        formik.setFieldValue(`items[${productIndex}].product.quantity`, e.target.value.replace(/\D/gm, ""));
                                                    },
                                                    size: "small",
                                                    helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.quantity
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                    fullWidth: true,
                                                    label: "Length (mm) ",
                                                    placeholder: "Enter Product Length (mm) ",
                                                    value: productItem?.product?.length,
                                                    name: `items[${productIndex}].product.length`,
                                                    onChange: (e)=>{
                                                        formik.setFieldValue(`items[${productIndex}].product.length`, e.target.value.replace(/\D/gm, ""));
                                                    },
                                                    size: "small",
                                                    helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.length
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                    fullWidth: true,
                                                    label: "Width (mm)",
                                                    placeholder: "Enter Product Width (mm)",
                                                    value: productItem?.product?.width,
                                                    name: `items[${productIndex}].product.width`,
                                                    onChange: (e)=>{
                                                        formik.setFieldValue(`items[${productIndex}].product.width`, e.target.value.replace(/\D/gm, ""));
                                                    },
                                                    size: "small",
                                                    helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.width
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                    fullWidth: true,
                                                    label: "Height (mm)",
                                                    placeholder: "Enter Product Height (mm)",
                                                    value: productItem?.product?.height,
                                                    name: `items[${productIndex}].product.height`,
                                                    onChange: (e)=>{
                                                        formik.setFieldValue(`items[${productIndex}].product.height`, e.target.value.replace(/\D/gm, ""));
                                                    },
                                                    size: "small",
                                                    helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.height
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 6,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                        children: "Image Upload"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .UploadFileBox */ .Ke, {
                                                        fullWidth: true,
                                                        url: "api/auth/master/jobs/item-image",
                                                        accept: "image/jpeg,image/png",
                                                        icon: "upload",
                                                        disabled: true,
                                                        size: "small",
                                                        value: productItem?.product?.image,
                                                        name: `items[${productIndex}].product.image`,
                                                        onChange: (e)=>{
                                                            console.log("ProductImage", e, `items[${productIndex}].product.image`);
                                                            formik.setFieldValue(`items[${productIndex}].product.image`, e);
                                                        },
                                                        helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.image
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 6,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                    children: "Choose Material"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                        direction: "row",
                                                        mb: 1.3,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .SelectBox */ .jL, {
                                                            fullWidth: true,
                                                            placeholder: "Select",
                                                            size: "small",
                                                            variant: "standard",
                                                            value: productItem?.product?.material,
                                                            name: `items[${productIndex}].product.material`,
                                                            onChange: (e)=>{
                                                                formik.setFieldValue(`items[${productIndex}].product.material`, e.target.value);
                                                            },
                                                            options: MaterialSelect,
                                                            vehicle: "small",
                                                            helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items?.length > 0 && formik?.errors?.items[productIndex]?.product?.index === productIndex && formik?.errors?.items[productIndex]?.product?.material
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                                            sx: {
                                                my: 2
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            component: "h5",
                                            variant: "h5",
                                            fontSize: 15,
                                            fontWeight: 400,
                                            children: "Add Address Details"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    sx: {
                                        my: 4
                                    },
                                    children: productItem?.address && productItem?.address?.length > 0 && productItem?.address.sort((a, b)=>{
                                        // Sorting logic: "drop" type comes first
                                        if (a.type !== "drop" && b.type === "drop") {
                                            return -1; // a comes first
                                        } else if (a.type === "drop" && b.type !== "drop") {
                                            return 1; // b comes first
                                        } else {
                                            return 0; // no change in order
                                        }
                                    }).map((addressItem, addressIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            sx: {
                                                mt: 4
                                            },
                                            children: [
                                                console.log(productItem, addressItem, "df"),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
                                                    sx: {
                                                        borderRadius: "0px",
                                                        border: "0px",
                                                        boxShadow: "none"
                                                    },
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                                                            action: addressItem.isNew ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                                                onClick: ()=>removesAddress(productIndex, addressItem.id),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                                            }) : null,
                                                            sx: {
                                                                mb: 3,
                                                                p: 0
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                            container: true,
                                                            spacing: 3,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 12,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                        direction: "row",
                                                                        spacing: 2,
                                                                        alignItems: "center",
                                                                        className: "flexDirection",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                fontSize: 16,
                                                                                children: "Address Type :"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                                fontSize: 14,
                                                                                sx: {
                                                                                    textTransform: "capitalize"
                                                                                },
                                                                                children: addressItem?.type == "drop" ? "Delivery" : addressItem?.type
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                            fullWidth: true,
                                                                            label: "Post Code",
                                                                            placeholder: "Enter Post Code",
                                                                            value: addressItem?.pin_code,
                                                                            name: `items[${productIndex}].address[${addressIndex}].pin_code`,
                                                                            onChange: (e)=>{
                                                                                const enteredPostalCode = e.target.value.toUpperCase();
                                                                                if (enteredPostalCode.length <= 8 || enteredPostalCode.length === 0) {
                                                                                    formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].pin_code`, enteredPostalCode);
                                                                                }
                                                                            },
                                                                            size: "small",
                                                                            helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items[productIndex]?.address[addressIndex]?.pin_code
                                                                        })
                                                                    })
                                                                }),
                                                                console.log("productIndex productIndex", productIndex, addressIndex),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                                                    item: true,
                                                                    md: 12,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .GoogleAutocomplete */ .Zw, {
                                                                        fullWidth: true,
                                                                        size: "small",
                                                                        labelname: "Address",
                                                                        name: `items[${productIndex}].address[${addressIndex}].address`,
                                                                        value: addressItem?.address,
                                                                        onSelect: (address, lat, long)=>{
                                                                            formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].address`, address);
                                                                            formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].lat`, lat);
                                                                            formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].long`, long);
                                                                        },
                                                                        onChange: (e)=>{
                                                                            formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].address`, e);
                                                                        },
                                                                        endIcon: addressItem?.address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                                                            size: "small",
                                                                            inputEndAdornmentPosition: "end",
                                                                            onClick: ()=>{
                                                                                formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].address`, "");
                                                                                formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].lat`, "");
                                                                                formik.setFieldValue(`items[${productIndex}].address[${addressIndex}].long`, "");
                                                                            },
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                fontSize: "small"
                                                                            })
                                                                        }),
                                                                        helperText: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(formik.touched) && formik?.errors?.items && formik?.errors?.items[productIndex]?.address[addressIndex]?.address
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        addressItem?.type == "drop" && productItem?.address?.length - 1 === addressIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                            variant: "contained",
                                                            color: "primary",
                                                            onClick: ()=>{
                                                                addSingleAddress1();
                                                            },
                                                            children: "Add Delivery Address"
                                                        }) : (addressItem?.null),
                                                        addressItem?.type == "pickup" && productItem?.address?.filter((flr)=>flr.type === "pickup").length - 1 === addressIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                            variant: "contained",
                                                            color: "primary",
                                                            onClick: ()=>{
                                                                addSingleAddress();
                                                            },
                                                            children: "Add Pickup Address"
                                                        }) : (addressItem?.null)
                                                    ]
                                                })
                                            ]
                                        }, productIndex))
                                })
                            ]
                        })
                    }, `${productIndex}_${productItem?.id}`);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                sx: {
                    my: 3
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2716:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_step_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8465);
/* harmony import */ var _components_scrollableTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5739);
/* harmony import */ var _form_step_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6423);
/* harmony import */ var _form_step_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var _components_stepper_stepperContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4303);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_form_step_one__WEBPACK_IMPORTED_MODULE_4__, _form_step_two__WEBPACK_IMPORTED_MODULE_6__, _form_step_three__WEBPACK_IMPORTED_MODULE_7__]);
([_form_step_one__WEBPACK_IMPORTED_MODULE_4__, _form_step_two__WEBPACK_IMPORTED_MODULE_6__, _form_step_three__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const JobPostForm = ({ formik, addProduct, removeProduct, addAddress, removesAddress, addSingleAddress, addSingleAddress1 })=>{
    const { value } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_stepper_stepperContext__WEBPACK_IMPORTED_MODULE_8__/* .StepperContext */ .E);
    const isLastStep = value === 3 - 1;
    const setStep = 3;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id } = router.query;
    const tabs = [
        {
            title: "Basic",
            fields: [
                "name"
            ],
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_step_one__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    formik: formik
                })
            })
        },
        {
            title: "Details",
            fields: [
                "items"
            ],
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_step_two__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    formik: formik,
                    id: id,
                    removeProduct: removeProduct,
                    addProduct: addProduct,
                    addSingleAddress: addSingleAddress,
                    addSingleAddress1: addSingleAddress1,
                    removesAddress: removesAddress
                })
            })
        },
        {
            title: "Address",
            fields: [
                "vehicle",
                "vehical_type",
                "description"
            ],
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_step_three__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    formik: formik
                })
            })
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                background: (theme)=>theme.palette.grey[400],
                mt: 8,
                pb: 12
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                sx: {
                    py: 3
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, {
                                "aria-label": "breadcrumb",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_9___default()),
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "grey",
                                        href: "/",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_9___default()),
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "grey",
                                        href: "/dashboard/customer/job_posted",
                                        children: "Dashboard"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_9___default()),
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "grey",
                                        href: "/dashboard/customer/job_posted",
                                        children: "Job Posted"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        color: "text.primary",
                                        children: id === "create" ? "Add New Job" : "Edit Job"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                sx: {
                                    borderRadius: "0px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                            direction: "row",
                                            spacing: 1,
                                            py: 2,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                fontWeight: 500,
                                                fontSize: 24,
                                                children: [
                                                    " ",
                                                    id === "create" ? "Post Your Job" : "Edit Your Job"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            component: "form",
                                            noValidate: true,
                                            onSubmit: formik.handleSubmit,
                                            children: id === "create" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_scrollableTabs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                setStep: setStep,
                                                isLastStep: isLastStep,
                                                tabs: tabs,
                                                formik: formik
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                container: true,
                                                spacing: 1,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        md: 12,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_step_one__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            formik: formik
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        md: 12,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_step_two__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            formik: formik,
                                                            id: id,
                                                            removeProduct: removeProduct,
                                                            addProduct: addProduct,
                                                            removesAddress: removesAddress
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        item: true,
                                                        md: 12,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_step_three__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                            formik: formik
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                        container: true,
                                                        spacing: 2,
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        sx: {
                                                            mt: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                item: true,
                                                                md: 2,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                        variant: "outlined",
                                                                        fullWidth: true,
                                                                        onClick: ()=>router.push("/dashboard/customer/job_posted"),
                                                                        children: "Cancel"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                                                item: true,
                                                                md: 2,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                                    sx: {
                                                                        width: "180px"
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                        variant: "contained",
                                                                        fullWidth: true,
                                                                        type: "submit",
                                                                        onClick: ()=>router.push("/dashboard/customer/job_posted"),
                                                                        children: "Save"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobPostForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;