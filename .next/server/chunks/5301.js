"use strict";
exports.id = 5301;
exports.ids = [5301];
exports.modules = {

/***/ 1425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useAuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JwtContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3973);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_JwtContext__WEBPACK_IMPORTED_MODULE_1__]);
_JwtContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//

// import { AuthContext } from './Auth0Context';
// import { AuthContext } from './FirebaseContext';
// import { AuthContext } from './AwsCognitoContext';
// ------------------------------------------------------------------------
const useAuthContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_JwtContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V);
    if (!context) throw new Error("useAuthContext context must be use inside AuthProvider");
    return context;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1669:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1856);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);











const DatePickerBox = (props)=>{
    const { name, label, fullWidth, disablePast = false, value, error, helperText, format, placeholder, ...rest } = props;
    const [defaultValue, setDefaultValue] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);
    react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(()=>{
        if (value) {
            setDefaultValue(dayjs__WEBPACK_IMPORTED_MODULE_9___default()(value));
        } else {
            setDefaultValue(null);
        }
    }, [
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_6__.LocalizationProvider, {
        dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__.AdapterDayjs,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_formControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            error: helperText ? true : false,
            fullWidth: fullWidth,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_8__.DatePicker, {
                    ...rest,
                    disablePast: disablePast,
                    minDateMessage: " ",
                    format: format,
                    variant: "standard",
                    label: label,
                    error: error,
                    value: defaultValue,
                    onChange: (newValue)=>props.onChange(newValue),
                    renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1___default()), {
                            ...params,
                            variant: "standard",
                            inputProps: {
                                ...params.inputProps,
                                placeholder: placeholder
                            }
                        })
                }),
                helperText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.FormHelperText, {
                    children: helperText
                })
            ]
        }, `key${name}`)
    });
};
DatePickerBox.defaultProps = {
    formik: [],
    name: "datetime",
    label: "Datetime",
    fullWidth: false
};
DatePickerBox.propTypes = {
    formik: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DatePickerBox)));


/***/ }),

/***/ 6709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3763);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8703);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_4__]);
([_utils_axios__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const UploadFileBox = (props)=>{
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("");
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("");
    const { name, label, accept, icon, value, size, required, inputAdornmentPosition, fullWidth, helperText, disabled, startIcon, endIcon } = props;
    const fileUpload = async (e)=>{
        props.onChange("");
        setMessage("");
        setError("");
        let file = e.target.files[0];
        const formData = new FormData();
        formData.append("item_image", file);
        setLoading(true);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        await _utils_axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post(`/${props.url}`, formData, config).then((response)=>{
            const { data } = response;
            if (response.status === 200) {
                setLoading(false);
                setMessage(data.message);
                props.onChange(data.image);
            } else {
                setLoading(false);
                setError(data.message);
            }
        }).catch((error)=>{
            console.log("error", error);
            const { response } = error;
            setLoading(false);
            console.log("response", response);
        // setError(response.data.message);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                style: {
                    display: "none"
                },
                id: `${name}-document-file`,
                type: "file",
                accept: accept,
                onChange: (e)=>{
                    fileUpload(e);
                    e.target.value = null;
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .NI, {
                error: helperText ? true : false,
                fullWidth: fullWidth,
                required: required,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        width: "100%",
                        children: [
                            startIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    ml: 0,
                                    background: (theme)=>theme.palette.grey[100],
                                    border: "1px solid",
                                    borderColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[500], 0.32),
                                    padding: ".375rem .75rem",
                                    borderRadius: ".25rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: startIcon
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                fullWidth: fullWidth,
                                error: helperText || error ? true : false,
                                success: error ? false : true,
                                name: name,
                                sx: {
                                    "& .MuiInput-root:after": {
                                        borderBottomStyle: "solid"
                                    },
                                    "& .MuiInput-root:before": {
                                        borderBottomStyle: "solid",
                                        content: '""'
                                    }
                                },
                                label: label,
                                variant: "standard",
                                type: "url",
                                readOnly: disabled,
                                size: size,
                                required: required,
                                disabled: disabled,
                                value: value,
                                onChange: (e)=>props.onChange(e.target.value),
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                                        position: inputAdornmentPosition,
                                        children: [
                                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {
                                                size: 25
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: `${name}-document-file`,
                                                children: !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                    children: icon
                                                })
                                            })
                                        ]
                                    })
                                }
                            }),
                            endIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    ml: 0,
                                    background: (theme)=>theme.palette.grey[100],
                                    border: "1px solid",
                                    borderColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[500], 0.32),
                                    padding: ".375rem .75rem",
                                    borderRadius: ".25rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: endIcon
                            })
                        ]
                    }),
                    helperText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                        children: helperText
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                        children: error
                    }),
                    message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                        style: {
                            color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.green[500]
                        },
                        children: message
                    })
                ]
            }, `${name}`)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadFileBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const FormControl = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_0___default()))(({ fullWidth })=>({
        marginBottom: 10,
        ...!fullWidth && {
            width: "50%",
            paddingLeft: 5,
            paddingRight: 5
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControl);


/***/ }),

/***/ 3656:
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
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1790);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3804);
/* harmony import */ var _mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _formControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8062);
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([material_ui_popup_state__WEBPACK_IMPORTED_MODULE_6__]);
material_ui_popup_state__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const GoogleAutocomplete = (props)=>{
    const { name, label, format, variant, type, InputLabelProps, startIcon, endIcon, value, required, multiline, inputEndAdornmentPosition = "end", inputStartAdornmentPosition = "start", fullWidth, helperText, disabled, rows, onKeyDown, isMaxLenght, maxLength, sx, size, formSx, placeholder, min, readOnly, onSelect, textBoxSx, isBackgroundColor = false, IconSx, onChange, EndIconClick, ...rest } = props;
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const handleSelect = async (value)=>{
        let address, lat, long;
        address = value;
        await (0,react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__.geocodeByAddress)(address).then((results)=>{
            return (0,react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__.getLatLng)(results[0]);
        }).then((latLng)=>{
            lat = latLng?.lat;
            long = latLng?.lng;
            console.log("latLng", latLng);
        }).catch((error)=>{
            address = "";
            // latLongValue = "";
            console.error("Error", error);
        });
        await onSelect(address, lat, long);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            my: 0,
            width: "100%",
            position: "relative"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
            value: value,
            onChange: (e)=>props.onChange(e),
            onSelect: (e)=>handleSelect(e),
            children: ({ getInputProps, suggestions, getSuggestionItemProps, loading })=>{
                {}
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    component: "div",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_formControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            error: helperText ? true : false,
                            fullWidth: fullWidth,
                            sx: {
                                ...formSx,
                                borderRadius: "0.25rem"
                            },
                            size: size,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    ...rest,
                                    fullWidth: fullWidth,
                                    error: helperText ? true : false,
                                    variant: "standard",
                                    name: name,
                                    sx: !isBackgroundColor ? {
                                        "& .MuiOutlinedInput-input": {
                                            background: (theme)=>theme.palette.common.white,
                                            borderRadius: "0.25rem"
                                        }
                                    } : {
                                        ...textBoxSx
                                    },
                                    label: label,
                                    InputLabelProps: InputLabelProps,
                                    type: type,
                                    onKeyDown: onKeyDown,
                                    placeholder: placeholder,
                                    size: size,
                                    rows: rows,
                                    min: min,
                                    value: value,
                                    multiline: multiline,
                                    required: required,
                                    onChange: (e)=>props.onChange(e),
                                    disabled: disabled,
                                    autoComplete: "false",
                                    inputProps: {
                                        maxLength: isMaxLenght ? isMaxLenght : null,
                                        min: min,
                                        readOnly: readOnly,
                                        onKeyDown: onKeyDown
                                    },
                                    InputProps: {
                                        readOnly: readOnly,
                                        min: min,
                                        endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: endIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                                                position: inputEndAdornmentPosition,
                                                children: endIcon
                                            })
                                        }),
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: startIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                                                position: inputStartAdornmentPosition,
                                                children: startIcon
                                            })
                                        })
                                    },
                                    ...getInputProps({
                                        placeholder: "Search Address ...",
                                        className: "location-search-input"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    sx: {
                                        display: "flex"
                                    },
                                    children: helperText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                                        children: helperText
                                    })
                                })
                            ]
                        }, `key${name}`),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                            },
                            className: "autocomplete-dropdown-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                                elevation: 5,
                                sx: {
                                    height: "max-content",
                                    maxHeight: "200px",
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                    background: (theme)=>theme.palette.common.white
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: [
                                        loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            children: "Loading..."
                                        }),
                                        !loading && suggestions.map((suggestion, index)=>{
                                            const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                                            const style = suggestion.active ? {
                                                backgroundColor: "#fafafa",
                                                cursor: "pointer"
                                            } : {
                                                backgroundColor: "#ffffff",
                                                cursor: "pointer"
                                            };
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                                                        ...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                                                            disablePadding: true,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemButton, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                                                                        primary: suggestion.description
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {})
                                                ]
                                            }, `${name}-${index}`);
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                });
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleAutocomplete);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jg: () => (/* reexport safe */ _password__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   Ke: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   NI: () => (/* reexport safe */ _formControl__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   Zw: () => (/* reexport safe */ _googleAutocomplete__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   jL: () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   zC: () => (/* reexport safe */ _textBox__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _formControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8062);
/* harmony import */ var _textBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9194);
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9140);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5969);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6709);
/* harmony import */ var _googleAutocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3656);
/* harmony import */ var _datePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_textBox__WEBPACK_IMPORTED_MODULE_1__, _password__WEBPACK_IMPORTED_MODULE_2__, _select__WEBPACK_IMPORTED_MODULE_3__, _file__WEBPACK_IMPORTED_MODULE_4__, _googleAutocomplete__WEBPACK_IMPORTED_MODULE_5__]);
([_textBox__WEBPACK_IMPORTED_MODULE_1__, _password__WEBPACK_IMPORTED_MODULE_2__, _select__WEBPACK_IMPORTED_MODULE_3__, _file__WEBPACK_IMPORTED_MODULE_4__, _googleAutocomplete__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8703);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);
_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PasswordBox = (props)=>{
    const [showPassword, setShowPassword] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    const { name, label, startIcon, value, required, inputAdornmentPosition, fullWidth, helperText, disabled, placeholder, variant, size } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_3__/* .FormControl */ .NI, {
        error: helperText ? true : false,
        fullWidth: fullWidth,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                children: [
                    startIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            ml: 0,
                            background: (theme)=>theme.palette.common.white,
                            border: "1px solid",
                            borderColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[500], 0.32),
                            padding: ".375rem .75rem",
                            borderRadius: ".25rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: startIcon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        fullWidth: fullWidth,
                        error: helperText ? true : false,
                        name: name,
                        variant: "standard",
                        size: size,
                        placeholder: placeholder,
                        label: label,
                        type: showPassword ? "text" : "password",
                        required: required,
                        value: value,
                        sx: {
                            background: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0),
                            "&.MuiOutlinedInput-input": {
                                background: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0)
                            }
                        },
                        disabled: disabled,
                        // autoComplete={"false"} //MUI pickUp the string value on autoComplete
                        autoComplete: "new-password",
                        onChange: (e)=>props.onChange(e),
                        InputProps: {
                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                                position: inputAdornmentPosition || "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                    onClick: ()=>setShowPassword(!showPassword),
                                    color: "#cdcdcd",
                                    fontSize: "small",
                                    children: showPassword ? "visibility" : "visibility_off"
                                })
                            })
                        }
                    })
                ]
            }),
            helperText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                children: helperText
            })
        ]
    }, `key${name}`);
};
PasswordBox.propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    inputAdornmentPosition: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    required: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    helperText: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8703);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);
_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SelectBox = (props)=>{
    const { name, label = "", value, required, options, fullWidth, helperText, isRequired, size, inputEndAdornmentPosition = "end", inputStartAdornmentPosition = "start", startIcon, endIcon, placeholder, formSx, sx, variant = "standard" } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .NI, {
        error: helperText ? true : false,
        fullWidth: fullWidth,
        sx: formSx,
        style: !fullWidth ? {
            width: "50%",
            paddingLeft: 5,
            paddingRight: 5
        } : {},
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                children: `${label} ${isRequired ? "*" : ""}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                sx: sx,
                variant: variant,
                size: size,
                name: name,
                label: label,
                required: required,
                value: value,
                onChange: (e)=>props.onChange(e),
                inputProps: {
                    name: name
                },
                placeholder: placeholder,
                renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        ...params,
                        label: "10,000 options"
                    }),
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                        position: inputEndAdornmentPosition,
                        children: endIcon
                    }),
                    startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                        position: inputStartAdornmentPosition,
                        children: startIcon
                    })
                },
                children: options && options.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                        value: option.value,
                        children: option.label
                    }, option.value))
            }),
            helperText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                children: helperText
            })
        ]
    }, `key${name}`);
};
SelectBox.propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    options: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    helperText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    isRequired: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9194:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);
_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const TextBox = (props)=>{
    const { name, label, format, // variant,
    type, InputLabelProps, startIcon, endIcon, value, required, multiline, inputEndAdornmentPosition = "end", inputStartAdornmentPosition = "start", fullWidth, helperText, disabled, rows, onKeyDown, isMaxLenght, maxLength, sx, size, formSx, placeholder, min, readOnly, onSelect, textBoxSx, isAdditional = false, IconSx, ...rest } = props;
    // console.log('props',props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_3__/* .FormControl */ .NI, {
        error: helperText ? true : false,
        fullWidth: fullWidth,
        sx: {
            ...formSx,
            borderRadius: "0.25rem"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                children: [
                    startIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            ml: 0,
                            background: (theme)=>theme.palette.common.white,
                            border: "1px solid",
                            borderColor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[500], 0.32),
                            padding: ".375rem .75rem",
                            borderRadius: ".25rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: startIcon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        ...rest,
                        fullWidth: fullWidth,
                        error: helperText ? true : false,
                        variant: "standard",
                        name: name,
                        sx: !isAdditional ? {
                            "& .MuiOutlinedInput-input": {
                                background: (theme)=>theme.palette.common.white,
                                borderRadius: "0.25rem"
                            },
                            ...textBoxSx
                        } : {
                            ...textBoxSx
                        },
                        label: label,
                        InputLabelProps: InputLabelProps,
                        type: type,
                        onKeyDown: onKeyDown,
                        placeholder: placeholder,
                        size: size,
                        format: format,
                        rows: rows,
                        min: min,
                        multiline: multiline,
                        required: required,
                        disabled: disabled,
                        autoComplete: "false",
                        value: value,
                        onChange: (e)=>props.onChange(e),
                        inputProps: {
                            maxLength: isMaxLenght ? isMaxLenght : null,
                            min: min,
                            readOnly: readOnly,
                            onKeyDown: onKeyDown
                        },
                        // onKeyDown={}
                        InputProps: {
                            readOnly: readOnly,
                            min: min,
                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                                position: inputEndAdornmentPosition,
                                children: endIcon
                            })
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    display: "flex"
                },
                children: helperText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                    children: helperText
                })
            })
        ]
    }, `key${name}`);
};
TextBox.propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    format: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    // variant: PropTypes.string,
    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    InputLabelProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    inputAdornmentPosition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    required: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    multiline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    helperText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    isRequired: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    rows: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ image_Image)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9252);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/image/getRatio.js
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}

;// CONCATENATED MODULE: ./src/components/image/Image.js
/* eslint-disable react/display-name */ 



// @mui

//

// ----------------------------------------------------------------------
const Image = /*#__PURE__*/ (0,external_react_.forwardRef)(({ ratio, disabledEffect = false, effect = "blur", sx, ...other }, ref)=>{
    const content = /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        component: external_react_lazy_load_image_component_.LazyLoadImage,
        wrapperClassName: "wrapper",
        effect: disabledEffect ? undefined : effect,
        placeholderSrc: disabledEffect ? "/assets/transparent.png" : "/assets/placeholder.svg",
        sx: {
            width: 1,
            height: 1,
            objectFit: "cover"
        },
        ...other
    });
    if (ratio) {
        return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
            ref: ref,
            component: "span",
            sx: {
                width: 1,
                lineHeight: 1,
                display: "block",
                overflow: "hidden",
                position: "relative",
                pt: getRatio(ratio),
                "& .wrapper": {
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    position: "absolute",
                    backgroundSize: "cover !important"
                },
                ...sx
            },
            children: content
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        ref: ref,
        component: "span",
        sx: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
            "& .wrapper": {
                width: 1,
                height: 1,
                backgroundSize: "cover !important"
            },
            ...sx
        },
        children: content
    });
});
Image.propTypes = {
    sx: (external_prop_types_default()).object,
    effect: (external_prop_types_default()).string,
    disabledEffect: (external_prop_types_default()).bool,
    ratio: external_prop_types_default().oneOf([
        "4/3",
        "3/4",
        "6/4",
        "4/6",
        "16/9",
        "9/16",
        "21/9",
        "9/21",
        "1/1"
    ])
};
/* harmony default export */ const image_Image = (Image);


/***/ }),

/***/ 8245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useActiveLink)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useActiveLink(path, deep = true) {
    const { pathname, asPath } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const checkPath = path && path?.startsWith("#");
    const currentPath = path === "/" ? "/" : path;
    const normalActive = !checkPath && pathname === currentPath || !checkPath && asPath === currentPath;
    const deepActive = !checkPath && pathname.includes(currentPath) || !checkPath && asPath.includes(currentPath);
    return {
        active: deep ? deepActive : normalActive,
        isExternalLink: path && path.includes("http")
    };
}


/***/ }),

/***/ 9479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useOffSetTop)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
function useOffSetTop(top = 100, options) {
    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useScroll)(options);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>scrollY.onChange((scrollHeight)=>{
            if (scrollHeight > top) {
                setValue(true);
            } else {
                setValue(false);
            }
        }), [
        scrollY,
        top
    ]);
    return value;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useResponsive),
/* harmony export */   z: () => (/* binding */ useWidth)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
function useResponsive(query, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(start));
    const mediaDown = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down(start));
    const mediaBetween = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.between(start, end));
    const mediaOnly = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.only(start));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    return mediaOnly;
}
// ----------------------------------------------------------------------
function useWidth() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(key));
        return !output && matches ? key : output;
    }, null) || "xs";
}


/***/ }),

/***/ 2128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ StyledListItemText)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const StyledListItemText = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.ListItemText)(({ theme })=>({
        "& .MuiTypography-root": {
            fontSize: "14px",
            color: "#666666"
        }
    }));


/***/ }),

/***/ 392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sectionOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7318);
/* harmony import */ var _sectionThree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9828);
/* harmony import */ var _sectionTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6430);
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sectionOne__WEBPACK_IMPORTED_MODULE_3__, _subscribe__WEBPACK_IMPORTED_MODULE_6__]);
([_sectionOne__WEBPACK_IMPORTED_MODULE_3__, _subscribe__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                backgroundColor: (theme)=>theme.palette.common.white,
                position: "relative"
            },
            children: [
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subscribe__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                }),
                                " "
                            ]
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                    sx: {
                        position: "relative",
                        paddingTop: "340px"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            container: true,
                            spacing: {
                                lg: 0,
                                md: 0,
                                sm: 2,
                                xs: 2
                            },
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 3,
                                    sm: 12,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        component: "img",
                                        width: 186,
                                        height: 57,
                                        src: "/logo.png",
                                        alt: "Logo",
                                        loading: "lazy",
                                        sx: {
                                            objectFit: "contain",
                                            background: "transparent",
                                            backgroundSize: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 3,
                                    sm: 12,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sectionOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 3,
                                    sm: 12,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sectionTwo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 3,
                                    sm: 12,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sectionThree__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: "/home/bgfooter.png",
                            width: "33%",
                            sx: {
                                position: "absolute",
                                bottom: 0
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                            sx: {
                                py: 0.5,
                                pb: 0.5
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                component: "p",
                                textAlign: "center",
                                mt: 2,
                                fontWeight: 400,
                                fontSize: 14,
                                color: "#535353",
                                children: [
                                    "\xa9 Copyright ",
                                    currentYear,
                                    " Click & Send. All Rights Reserved"
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9964);
/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2625);
/* harmony import */ var _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footerStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2128);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_1__]);
_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SectionOne = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    direction: "row",
                    alignItems: "center",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_2___default()), {
                            fontSize: "large",
                            sx: {
                                color: "common.black"
                            }
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_4__/* .StyledListItemText */ .z, {
                            primary: "United Kingdom",
                            sx: {
                                "& .MuiTypography-root": {
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: "common.black"
                                }
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        fontSize: 14,
                        color: "#535353",
                        children: "Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque."
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#535353",
                                children: [
                                    "Call us:",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        component: "span",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        ml: 0.6,
                                        color: "#535353",
                                        children: "0123456789"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#535353",
                                children: [
                                    "Mail us:",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        component: "span",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        ml: 0.6,
                                        color: "#535353",
                                        children: "info@abcd.co.uk"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: "row",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                icon: "ic:baseline-facebook",
                                width: 24
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                icon: "ri:instagram-fill",
                                width: 24
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                icon: "entypo-social:linkedin-with-circle",
                                width: 24
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footerStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2128);



const SectionThree = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        fontSize: 20,
                        fontWeight: 600,
                        children: "Services"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: "a",
                    href: "/blogs",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Blogs"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: "a",
                    href: "/testimonial/testimonials",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Testimonials"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionThree);


/***/ }),

/***/ 6430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footerStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2128);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const SectionTwo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        fontSize: 20,
                        fontWeight: 600,
                        children: "Website Links"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                    href: "/aboutus",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "About us"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                    href: "/testimonial/testimonials",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Testimonials"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                    href: "/faqs",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Faq"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                    href: "/contact_us",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Contact us"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                    href: "/privacy_policy",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Privacy Policy"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                    href: "/term_and_condition",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footerStyle__WEBPACK_IMPORTED_MODULE_2__/* .StyledListItemText */ .z, {
                        primary: "Term & Condition"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTwo);


/***/ }),

/***/ 7575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_2__]);
([_components_form__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Subscribe = ()=>{
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
        initialValues: {
            email: ""
        },
        validate: (values)=>{
            const errors = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            return errors;
        },
        onSubmit: async (values)=>{
            await _utils_axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post("api/auth/master/subscribe/add", values).then((response)=>{
                if (response.status === 200) {
                    formik.resetForm();
                    enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                enqueueSnackbar(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_6___default()), {
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                className: "subscribe_box_CardContent_responsive",
                sx: {
                    paddingBottom: "24px!imporatant",
                    position: "relative"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        backgroundColor: (theme)=>theme.palette.primary.main,
                        p: 3,
                        borderRadius: "20px",
                        position: "absolute",
                        top: "-1.5em"
                    },
                    direction: {
                        lg: "row",
                        md: "column",
                        sm: "column",
                        xs: "column"
                    },
                    spacing: {
                        md: 0,
                        sm: 2,
                        xs: 2
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        className: "suscribe_box_stack_responsive",
                        direction: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        sx: {
                            width: "100%",
                            gap: "80px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                className: "suscribe_box_grid_responsive",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        color: (theme)=>theme.palette.common.white,
                                        fontSize: 24,
                                        fontWeight: 600,
                                        children: "Subscribe To Our newsletter"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        color: (theme)=>theme.palette.common.white,
                                        fontSize: 14,
                                        fontWeight: 400,
                                        children: "Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                className: "suscribe_form_box_stack_responsive",
                                direction: "row",
                                spacing: 2,
                                alignItems: "center",
                                component: "form",
                                onSubmit: formik.handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                className: "subscribe_TextBox_responsive",
                                                fullWidth: true,
                                                isAdditional: true,
                                                value: formik.values.email,
                                                onChange: (e)=>formik.setFieldValue("email", e.target.value),
                                                formSx: {
                                                    mb: 0,
                                                    width: "100%"
                                                },
                                                textBoxSx: {
                                                    width: "16em",
                                                    "& .MuiInput-root": {
                                                        color: "#fff !important"
                                                    },
                                                    "& .MuiFormControl-root": {
                                                        margin: "0px !important"
                                                    },
                                                    "& .MuiInputLabel-root": {
                                                        color: "#fff !important"
                                                    },
                                                    "& .MuiInput-root:before": {
                                                        borderColor: "#fff !important"
                                                    },
                                                    "& .MuiInput-root:after": {
                                                        borderColor: "#fff !important"
                                                    }
                                                },
                                                label: "Enter Your Email",
                                                size: "small"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                fontSize: 10,
                                                color: "common.white",
                                                children: formik.touched.email && formik.errors.email
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        sx: {
                                            marginLeft: "0px !important;"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            variant: "contained",
                                            fullWidth: true,
                                            color: "light",
                                            type: "submit",
                                            sx: {
                                                // width: "10em",
                                                // height: "40px",
                                                margint: "0px !imoortant",
                                                borderRadius: "10px",
                                                color: (theme)=>theme.palette.primary.main,
                                                mb: formik.touched.email && formik.errors.email ? 2 : 0
                                            },
                                            children: "Subscribe Now"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscribe);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const MobileDrawer = ({ handleDrawerToggle, mobileOpen, drawer, drawerWidth, container })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: "nav",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
            container: container,
            anchor: "right",
            variant: "temporary",
            open: mobileOpen,
            onClose: handleDrawerToggle,
            ModalProps: {
                keepMounted: true
            },
            sx: {
                display: {
                    xs: "block",
                    sm: "none"
                },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth
                }
            },
            children: drawer
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileDrawer);


/***/ }),

/***/ 1564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9479);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2076);
/* harmony import */ var _utils_config_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5370);
/* harmony import */ var _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4862);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9368);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nav_config_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5375);
/* harmony import */ var _nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1993);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7390);
/* harmony import */ var _navConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8450);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1567);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5168);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_2__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__, _nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_15__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_2__, _utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__, _nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import Button from '@mui/material/Button';













// import invoices from "@/sections/dashboard/customerDashboard/invoicesPage/invoices";
// import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const drawerWidth = 240;
const Header = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const token = (0,_utils_localStorageAvailable__WEBPACK_IMPORTED_MODULE_5__/* .isAccessToken */ .hv)();
    const { user, isAuthenticated, logout } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const isMobile = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("down", "md");
    const value = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(10, {
        offset: [
            "start end",
            "end end"
        ]
    });
    const isOffset = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_utils_config_global__WEBPACK_IMPORTED_MODULE_4__/* .HEADER */ .yf.H_MAIN_DESKTOP);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_13___default().useState(false);
    const [showAlert, setShowAlert] = react__WEBPACK_IMPORTED_MODULE_13___default().useState(false);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_13___default().useState(null);
    // State to keep track of the active menu item
    const [activeItem, setActiveItem] = react__WEBPACK_IMPORTED_MODULE_13___default().useState("");
    // Function to check if the current path includes a certain string
    const isActivePath = (path)=>router.pathname.includes(path);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    // Function to handle menu item click, sets the active item and closes the menu
    const handleMenuItemClick = (itemName)=>{
        setActiveItem(itemName);
        handleClose();
    };
    // Function to apply conditional styling
    const handleAuth = ()=>{
        if (isAuthenticated) {
            logout();
        } else {
            router.push("/auth/login");
        }
    };
    const handleDrawerToggle = ()=>{
        setMobileOpen((prevState)=>!prevState);
    };
    const drawer = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
        sx: {
            textAlign: "left"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                sx: {
                    my: 2
                },
                component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    component: "img",
                    width: 175,
                    height: 50,
                    src: "/logo.png",
                    alt: "Logo",
                    loading: "lazy",
                    sx: {
                        objectFit: "contain",
                        background: "transparent",
                        backgroundSize: "cover"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.List, {
                children: _navConfig__WEBPACK_IMPORTED_MODULE_17__/* .navItems */ .t && _navConfig__WEBPACK_IMPORTED_MODULE_17__/* .navItems */ .t.length && _navConfig__WEBPACK_IMPORTED_MODULE_17__/* .navItems */ .t.map((item, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
                                disablePadding: true,
                                onClick: handleDrawerToggle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemButton, {
                                    LinkComponent: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                    href: item?.link,
                                    sx: {
                                        textAlign: "left"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemText, {
                                        primary: item?.name
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {})
                        ]
                    }, `parent-${index}`);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.List, {
                children: _navConfig__WEBPACK_IMPORTED_MODULE_17__/* .navItemsLogout */ .F && _navConfig__WEBPACK_IMPORTED_MODULE_17__/* .navItemsLogout */ .F.length && _navConfig__WEBPACK_IMPORTED_MODULE_17__/* .navItemsLogout */ .F.map((item, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
                                disablePadding: true,
                                onClick: handleDrawerToggle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemButton, {
                                    LinkComponent: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                    href: item?.link,
                                    sx: {
                                        textAlign: "left",
                                        backgroundColor: "#ff7533",
                                        color: "white"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemText, {
                                        primary: item?.name
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {})
                        ]
                    }, `parent-${index}`);
                })
            })
        ]
    });
    const container = window !== undefined ? ()=>window().document.body : undefined;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.AppBar, {
                component: "nav",
                position: "fixed",
                color: "inherit",
                sx: {
                    "&.MuiAppBar-root": {
                        boxShadow: value ? "0px 2px 4px -1px rgba(145, 158, 171, 0.2), 0px 4px 5px 0px rgba(145, 158, 171, 0.14), 0px 1px 10px 0px rgba(145, 158, 171, 0.12)" : "none"
                    },
                    background: (theme)=>value ? theme.palette.common.white : theme.palette.common.white,
                    transition: (theme)=>theme.transitions.create("background", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.short
                        })
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Container, {
                    className: "headerLinks_stack_responsive",
                    maxWidth: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Toolbar, {
                        className: "headerLinks_stack_responsive",
                        sx: {
                            justifyContent: {
                                lg: "space-between",
                                md: "space-between",
                                sm: "space-between",
                                xs: "space-between"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                href: "/",
                                sx: {
                                    display: "inline-block",
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                    component: "img",
                                    width: 300,
                                    height: 80,
                                    src: "/newlogo.png",
                                    alt: "Logo",
                                    loading: "lazy",
                                    sx: {
                                        objectFit: "contain",
                                        backgroundColor: "transparent",
                                        backgroundSize: "cover",
                                        marginLeft: "-50px",
                                        marginTop: "3px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                                // className="headerNav_stack_responsive"
                                direction: "row",
                                sx: {
                                    display: {
                                        xs: "none",
                                        sm: "flex"
                                    },
                                    alignItems: "center"
                                },
                                spacing: 0,
                                children: [
                                    !isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav_desktop_NavDesktop__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        value: value,
                                        isOffset: isOffset,
                                        data: _nav_config_navigation__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z && lodash_filter__WEBPACK_IMPORTED_MODULE_10___default()(_nav_config_navigation__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, (item)=>{
                                            return item.token(isAuthenticated);
                                        })
                                    }),
                                    isAuthenticated && (user?.user_type == "company" && user?.profile?.company_type === "customer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1,
                                            borderBottom: (theme)=>router.asPath.startsWith("/dashboard") ? "2px solid" : "none",
                                            color: (theme)=>router.asPath.startsWith("/dashboard") ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath.startsWith("/dashboard") ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath.startsWith("/dashboard") ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: user?.user_type === "driver" ? `/dashboard/${user?.user_type}/active_jobs` : `/dashboard/${user?.user_type}/job_posted`,
                                        children: "Dashboard"
                                    }) : null),
                                    isAuthenticated && (user?.user_type == "company" && user?.profile?.company_type === "driver" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1,
                                            borderBottom: (theme)=>router.asPath.startsWith("/dashboard/company/driver/list") ? "2px solid" : "none",
                                            color: (theme)=>router.asPath.startsWith("/dashboard/company/driver/list") ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath.startsWith("/dashboard/company/driver/list") ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath.startsWith("/dashboard/company/driver/list") ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: user?.user_type === "driver" ? `/dashboard/company/driver/list` : `/dashboard/company/driver/list`,
                                        children: "Dashboard"
                                    }) : null),
                                    isAuthenticated && user?.user_type == "customer" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1,
                                            borderBottom: (theme)=>router.asPath.startsWith("/dashboard/company/driver/list") ? "2px solid" : "none",
                                            color: (theme)=>router.asPath.startsWith("/dashboard/company/driver/list") ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath.startsWith("/dashboard/company/driver/list") ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath.startsWith("/dashboard/company/driver/list") ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: user?.user_type === "driver" ? `/dashboard/company/driver/list` : `/dashboard/company/driver/list`,
                                        children: "Dashboard"
                                    }),
                                    isAuthenticated && (user?.user_type == "company" && user?.profile?.company_type === "driver" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `#` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `#` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `#` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `#` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `#`,
                                        children: "Job list"
                                    }) : null),
                                    isAuthenticated && (user?.user_type == "company" && user?.profile?.company_type === "customer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/dashboard/${user?.user_type}/job_post_form/create` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/dashboard/${user?.user_type}/job_post_form/create` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/dashboard/${user?.user_type}/job_post_form/create` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/dashboard/${user?.user_type}/job_post_form/create` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/dashboard/${user?.user_type}/job_post_form/create`,
                                        children: "Add Jobs"
                                    }) : null),
                                    isAuthenticated && (user?.user_type == "driver" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/dashboard/driver/job_request` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/dashboard/driver/job_request` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/dashboard/driver/job_request` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/dashboard/driver/job_request` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/dashboard/driver/job_request`,
                                        children: "View Jobs"
                                    }) : null),
                                    isAuthenticated && (user?.user_type == "driver" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/dashboard/driver/job_history` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/dashboard/driver/job_history` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/dashboard/driver/job_history` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/dashboard/driver/job_history` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/dashboard/driver/job_history`,
                                        children: "Jobs history"
                                    }) : null),
                                    isAuthenticated && (user?.user_type == "customer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/dashboard/customer/job_history` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/dashboard/customer/job_history` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/dashboard/customer/job_history` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/dashboard/customer/job_history` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/dashboard/customer/job_history`,
                                        children: "Jobs history"
                                    }) : null),
                                    isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/${user?.user_type}/profile` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/${user?.user_type}/profile` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/${user?.user_type}/profile` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/${user?.user_type}/profile` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/${user?.user_type}/profile`,
                                        children: "Profile"
                                    }),
                                    isAuthenticated && (user?.user_type == "driver" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            // mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/dashboard/${user?.user_type}/subscription` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/dashboard/${user?.user_type}/subscription` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/dashboard/${user?.user_type}/subscription` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/dashboard/${user?.user_type}/subscription` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/dashboard/${user?.user_type}/subscription`,
                                        children: "Subscription"
                                    }) : null),
                                    isAuthenticated && (user?.user_type == "company" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        sx: {
                                            // mx: 1.5,
                                            pr: 1,
                                            borderBottom: (theme)=>router.asPath === `/dashboard/${user?.user_type}/subscription` ? "2px solid" : "none",
                                            color: (theme)=>router.asPath === `/dashboard/${user?.user_type}/subscription` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderColor: (theme)=>router.asPath === `/dashboard/${user?.user_type}/subscription` ? theme.palette.primary.main : theme.palette.text.primary,
                                            borderBottom: router.asPath === `/dashboard/${user?.user_type}/subscription` ? "2px solid" : "",
                                            ...theme.typography.subtitle2,
                                            textDecoration: "none",
                                            fontSize: "1rem"
                                        },
                                        component: (next_link__WEBPACK_IMPORTED_MODULE_11___default()),
                                        href: `/dashboard/${user?.user_type}/subscription`,
                                        children: "Subscription"
                                    }) : null),
                                    isAuthenticated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        onMouseEnter: ()=>setShowAlert(true),
                                        onMouseLeave: ()=>setShowAlert(false),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                size: "large",
                                                "aria-label": "show 17 new notifications",
                                                color: "inherit",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                    badgeContent: 0,
                                                    color: "error",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                        sx: {
                                                            fontSize: "32px"
                                                        }
                                                    })
                                                })
                                            }),
                                            showAlert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                sx: {
                                                    backgroundColor: "#ffffff"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                    icon: false,
                                                    severity: "success",
                                                    sx: {
                                                        width: "320px",
                                                        backgroundColor: "#637381",
                                                        position: "absolute",
                                                        transform: "translateX(-50%)",
                                                        mt: 1,
                                                        zIndex: 1
                                                    },
                                                    children: "This success Alert has no icon."
                                                })
                                            })
                                        ]
                                    }),
                                    !isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                            variant: "outlined",
                                            sx: {
                                                color: "#000",
                                                ml: 0.8,
                                                mr: 1.5,
                                                fontSize: "1rem"
                                            },
                                            onClick: ()=>router.push("/contact_us"),
                                            children: "Contact us"
                                        })
                                    }),
                                    !isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                            sx: {
                                                width: "100px",
                                                fontSize: "1rem"
                                            },
                                            variant: "contained",
                                            onClick: handleAuth,
                                            children: "Log in"
                                        })
                                    }),
                                    isAuthenticated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                                direction: "row",
                                                spacing: 0.5,
                                                alignItems: "center",
                                                sx: {
                                                    cursor: "pointer"
                                                },
                                                onClick: handleClick,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_21___default()), {
                                                    style: {
                                                        marginTop: "8px",
                                                        marginLeft: "10px",
                                                        fontSize: "32px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                sx: {
                                                    marginTop: "10px"
                                                },
                                                anchorEl: anchorEl,
                                                open: Boolean(anchorEl),
                                                onClose: handleClose,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        href: "/invoice",
                                                        passHref: true,
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            sx: {
                                                                color: "#212b36",
                                                                fontWeight: "500",
                                                                lineHeight: "1.5"
                                                            },
                                                            onClick: ()=>handleMenuItemClick("invoice"),
                                                            children: "Invoice"
                                                        })
                                                    }),
                                                    user?.user_type == "driver" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        href: "/StripeConnectionPage",
                                                        passHref: true,
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            sx: {
                                                                color: "#212b36",
                                                                fontWeight: "500",
                                                                lineHeight: "1.5"
                                                            },
                                                            onClick: ()=>handleMenuItemClick("StripeConnectionPage"),
                                                            children: "Stripe Connection"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        href: "/payment",
                                                        passHref: true,
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            sx: {
                                                                color: "#212b36",
                                                                fontWeight: "500",
                                                                lineHeight: "1.5"
                                                            },
                                                            onClick: ()=>handleMenuItemClick("payment"),
                                                            children: "Pending payment"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        href: `/${user?.user_type}/profile`,
                                                        passHref: true,
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            sx: {
                                                                color: "#212b36",
                                                                fontWeight: "500",
                                                                lineHeight: "1.5"
                                                            },
                                                            onClick: ()=>handleMenuItemClick("account"),
                                                            children: "settings(my profile)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        href: "/contact_us",
                                                        passHref: true,
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            sx: {
                                                                color: "#212b36",
                                                                fontWeight: "500",
                                                                lineHeight: "1.5"
                                                            },
                                                            onClick: ()=>handleMenuItemClick("account"),
                                                            children: "Contact us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            paddingTop: "10px"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                            sx: {
                                                                width: "140px"
                                                            },
                                                            variant: "contained",
                                                            onClick: handleAuth,
                                                            children: isAuthenticated ? "Log Out" : "Log in"
                                                        })
                                                    })
                                                ]
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                color: "inherit",
                                "aria-label": "open drawer",
                                edge: "start",
                                onClick: handleDrawerToggle,
                                sx: {
                                    ml: 2,
                                    display: {
                                        sm: "none"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    style: {
                                        fontSize: "40px",
                                        marginBottom: "12px"
                                    }
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_drawer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                drawer: drawer,
                handleDrawerToggle: handleDrawerToggle,
                mobileOpen: mobileOpen,
                drawerWidth: drawerWidth,
                container: container
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ navItemsLogout),
/* harmony export */   t: () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [
    {
        name: "Home",
        link: "/",
        isArrow: false
    },
    {
        name: "About us",
        link: "/aboutus",
        isArrow: true
    },
    {
        name: "Testimonials",
        link: "/testimonial/testimonials",
        isArrow: false
    },
    {
        name: "FAQ",
        link: "/faqs",
        isArrow: false
    },
    {
        name: "Blogs",
        link: "/blogs",
        isArrow: false
    },
    {
        name: "Dashboard",
        link: "/dashboard/customer/job_posted",
        isArrow: true
    },
    {
        name: "My Profile",
        link: "/customer/profile",
        isArrow: false
    },
    {
        name: "Contact us",
        link: "/contact_us",
        isArrow: false
    }
];
const navItemsLogout = [
    {
        name: "Logout",
        link: "/contact",
        isArrow: false
    }
];


/***/ }),

/***/ 5375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navConfig = [
    {
        title: "Home",
        path: "/",
        token: (token)=>true,
        sx: {
            fontSize: "5rem"
        }
    },
    {
        title: "About us",
        path: "/aboutus",
        token: (token)=>true
    },
    // {
    //   title: "Dashboard",
    //   path: "/dashboard/customer/job_post",
    //   token: (token) => token,
    // },
    {
        title: "Testimonials",
        path: "/testimonial/testimonials",
        token: (token)=>true
    },
    {
        title: "FAQ",
        path: "/faqs",
        token: (token)=>true
    },
    {
        title: "Blogs",
        path: "/blogs",
        token: (token)=>true
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navConfig);


/***/ }),

/***/ 1993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavDesktop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavList__WEBPACK_IMPORTED_MODULE_3__]);
_NavList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

// ----------------------------------------------------------------------
NavDesktop.propTypes = {
    data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavDesktop({ isOffset, data }) {
    console.log("data", data);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        component: "nav",
        direction: "row",
        spacing: 2.5,
        sx: {
            mr: 1,
            height: 1,
            alignItems: "flex-start"
        },
        children: data.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                item: link,
                isOffset: isOffset
            }, link.title))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aj: () => (/* binding */ NavItemDashboard),
/* harmony export */   LY: () => (/* binding */ NavItem),
/* harmony export */   U: () => (/* binding */ NavSubItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9964);
/* harmony import */ var _components_image_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2736);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/display-name */ 



// next

// @mui

// components
// import Image from '../../../../components/image';
// import Iconify from '../../../../components/iconify';
//



// ----------------------------------------------------------------------
const NavItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ item, open, isOffset, active, subItem, isExternalLink, value, ...other }, ref)=>{
    const { title, path, children } = item;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ListItem */ .HC, {
        ref: ref,
        disableRipple: true,
        isOffset: isOffset,
        subItem: subItem,
        active: active,
        open: open,
        value: value,
        ...other,
        children: [
            title,
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                width: 16,
                icon: "eva:arrow-ios-downward-fill",
                sx: {
                    ml: 1
                }
            })
        ]
    });
    // ExternalLink
    if (isExternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
    }
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        href: path,
        underline: "none",
        children: renderContent
    });
});
NavItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    subItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
const NavSubItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ item, open, isOffset, active, subItem, isExternalLink, value, ...other }, ref)=>{
    const { title, path, children } = item;
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .ListSubItem */ .E2, {
        ref: ref,
        disableRipple: true,
        isOffset: isOffset,
        subItem: subItem,
        active: active,
        open: open,
        ...other,
        children: [
            title,
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                width: 16,
                icon: "eva:arrow-ios-downward-fill",
                sx: {
                    ml: 1
                }
            })
        ]
    });
    // ExternalLink
    if (isExternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
    }
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        href: path,
        underline: "none",
        children: renderContent
    });
});
NavSubItem.propTypes = {
    open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    active: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    subItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isExternalLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
// ----------------------------------------------------------------------
NavItemDashboard.propTypes = {
    item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
function NavItemDashboard({ item, sx, ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        href: item.path,
        underline: "none",
        sx: {
            width: 1
        },
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardActionArea, {
            sx: {
                py: 5,
                px: 10,
                minHeight: 400,
                borderRadius: 1,
                color: "text.disabled",
                bgcolor: "background.neutral",
                ...sx
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                whileTap: "tap",
                whileHover: "hover",
                variants: {
                    hover: {
                        scale: 1.02
                    },
                    tap: {
                        scale: 0.98
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_image_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    visibleByDefault: true,
                    alt: "illustration_dashboard",
                    src: "/assets/illustrations/illustration_dashboard.png"
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7457);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8245);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9479);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavItem__WEBPACK_IMPORTED_MODULE_5__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__]);
([_NavItem__WEBPACK_IMPORTED_MODULE_5__, _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// next

// @mui

// hooks
// import useActiveLink from '../../../../hooks/useActiveLink';
//





// ----------------------------------------------------------------------
NavList.propTypes = {
    item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    isOffset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function NavList({ item, isOffset }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { path, children } = item;
    const { active, isExternalLink } = (0,_hooks_useActiveLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(path, false);
    const isMobile = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)("down", "md");
    const responsiveHeight = isMobile ? 78.5 : 52;
    const value = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10, {
        offset: [
            "start end",
            "end end"
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (openMenu) {
            handleCloseMenu();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleOpenMenu = ()=>{
        if (children) {
            setOpenMenu(true);
        }
    };
    const handleCloseMenu = ()=>{
        setOpenMenu(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavItem */ .LY, {
                item: item,
                isOffset: isOffset,
                active: active,
                open: openMenu,
                isExternalLink: isExternalLink,
                onMouseEnter: handleOpenMenu,
                onMouseLeave: handleCloseMenu,
                value: value
            }),
            !!children && openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Portal, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Fade, {
                    in: openMenu,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledMenu */ .l2, {
                        onMouseEnter: handleOpenMenu,
                        onMouseLeave: handleCloseMenu,
                        value: value,
                        sx: {
                            top: 42
                        },
                        children: children.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavSubList, {
                                subheader: list.subheader,
                                items: list.items,
                                isDashboard: list.subheader === "Dashboard",
                                onClose: handleCloseMenu
                            }, list.subheader))
                    })
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
NavSubList.propTypes = {
    items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    isDashboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function NavSubList({ items, isDashboard, subheader, onClose }) {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isActive = (path)=>pathname === path;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        spacing: 2.5,
        gridColumn: isDashboard ? "span 6" : "span 2",
        alignItems: "flex-start",
        children: items && items.length > 0 && items.map((item)=>isDashboard ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavItemDashboard */ .Aj, {
                item: item,
                onClick: onClose
            }, item.title) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavSubItem */ .U, {
                subItem: true,
                item: item,
                active: isActive(item.path),
                onClick: onClose
            }, item.title))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E2: () => (/* binding */ ListSubItem),
/* harmony export */   HC: () => (/* binding */ ListItem),
/* harmony export */   l2: () => (/* binding */ StyledMenu)
/* harmony export */ });
/* unused harmony export StyledSubheader */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
const ListItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "open" && prop !== "isOffset" && prop !== "subItem" && prop !== "value"
})(({ active, open, isOffset, subItem, theme, value })=>{
    const dotActive = {
        content: '""',
        borderRadius: "50%",
        position: "absolute",
        width: 6,
        height: 6,
        left: -14,
        opacity: 0.48,
        backgroundColor: "currentColor",
        marginLeft: 5
    };
    return {
        ...theme.typography.subtitle2,
        padding: 0,
        height: "100%",
        color: theme.palette.text.primary,
        transition: theme.transitions.create("opacity", {
            duration: theme.transitions.duration.shorter
        }),
        "&:hover": {
            opacity: 0.48,
            backgroundColor: "transparent"
        },
        // Sub item
        ...subItem && {
            ...theme.typography.body2,
            color: theme.palette.text.secondary
        },
        // isOffset
        ...isOffset && {
            color: theme.palette.text.primary
        },
        // Active
        ...active && {
            color: `${theme.palette.primary.main} !important`,
            borderBottom: "2px solid"
        },
        ...active && subItem && {
            ...theme.typography.subtitle2,
            color: theme.palette.text.primary,
            "&::before": {
                color: theme.palette.primary.main
            }
        },
        ...open && {
            opacity: 0.48
        }
    };
});
const ListSubItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "open" && prop !== "isOffset" && prop !== "subItem" && prop !== "value"
})(({ active, open, isOffset, subItem, theme, value })=>{
    const dotActive = {
        content: '""',
        borderRadius: "50%",
        position: "absolute",
        width: 6,
        height: 6,
        left: -14,
        opacity: 0.48,
        backgroundColor: "currentColor"
    };
    return {
        ...theme.typography.subtitle2,
        padding: 0,
        height: "100%",
        color: theme.palette.text.primary,
        transition: theme.transitions.create("opacity", {
            duration: theme.transitions.duration.shorter
        }),
        "&:hover": {
            opacity: 0.48,
            backgroundColor: "transparent"
        },
        // Sub item
        ...subItem && {
            ...theme.typography.body2,
            color: theme.palette.text.secondary
        },
        // isOffset
        ...isOffset && {
            color: theme.palette.text.primary
        },
        // Active
        ...active && {
            color: `${theme.palette.primary.main} !important`,
            "&::before": dotActive
        },
        // Active sub item
        ...active && subItem && {
            ...theme.typography.subtitle2,
            color: theme.palette.text.primary,
            "&::before": {
                ...dotActive,
                color: theme.palette.primary.main
            }
        },
        // Open
        ...open && {
            opacity: 0.48
        }
    };
});
// ----------------------------------------------------------------------
const StyledMenu = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper)(({ theme })=>{
    return {
        right: 250,
        display: "grid",
        position: "fixed",
        alignItems: "flex-start",
        zIndex: theme.zIndex.modal,
        padding: theme.spacing(1, 1, 1, 3),
        boxShadow: theme.customShadows.dialog,
        gridTemplateColumns: "repeat(3, 1fr)",
        borderRadius: Number(theme.shape.borderRadius) * 2,
        border: `solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[500], 0.16)}`
    };
});
// ----------------------------------------------------------------------
const StyledSubheader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListSubheader)(({ theme })=>({
        ...theme.typography.overline,
        padding: 0,
        fontSize: 11,
        color: theme.palette.text.primary
    }));


/***/ })

};
;