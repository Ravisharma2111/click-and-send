"use strict";
exports.id = 4473;
exports.ids = [4473];
exports.modules = {

/***/ 8793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const getGooglePopUp = (data)=>{
    console.log("datadtaa", data);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                direction: "row",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            component: "img",
                            src: `${data?.product?.base_url}${data?.product?.image}`,
                            sx: {
                                borderRadius: "50%",
                                border: "3px solid #ff7534",
                                width: "50px",
                                height: "50px"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    color: "primary",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    variant: "subtitle1",
                                    children: "Mr. Alex"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                spacing: 0.2,
                                pb: 0.8,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                        direction: "row",
                                        spacing: 0.4,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                    fontWeight: 400,
                                                    fontSize: 10,
                                                    children: "Job Success Rate :"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                    color: "primary",
                                                    fontWeight: 500,
                                                    fontSize: 10,
                                                    children: "98 %"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.LinearProgress, {
                                            variant: "determinate",
                                            value: 98
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Rating, {
                                    value: 4,
                                    readOnly: true,
                                    size: "small",
                                    sx: {
                                        color: (theme)=>theme.palette.primary.main,
                                        fontSize: "12px !important"
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                py: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    direction: "row",
                    spacing: 1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: "mdi:chat",
                            width: 14
                        }),
                        size: "small",
                        label: "Send Message",
                        variant: "outlined",
                        color: "primary",
                        sx: {
                            fontSize: "10px",
                            cursor: "pointer"
                        }
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                pt: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    fontSize: 12,
                    fontWeight: 400,
                    children: "Bid: $500"
                })
            })
        ]
    });
};
const DirectionRenderComponent = (props)=>{
    console.log("elem elem", props);
    const [showPopUp, setShowPopUp] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        directions: null
    });
    let delayFactor = 0;
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const startLoc = props.from.lat + ", " + props.from.lng;
        const destinationLoc = props.to.lat + ", " + props.to.lng;
        getDirections(startLoc, destinationLoc);
    }, [
        props
    ]);
    const getDirections = async (startLoc, destinationLoc)=>{
        const directionService = new window.google.maps.DirectionsService();
        directionService.route({
            origin: startLoc,
            destination: destinationLoc,
            optimizeWaypoints: true,
            travelMode: window.google.maps.TravelMode.DRIVING
        }, (result, status)=>{
            if (status === window.google.maps.DirectionsStatus.OK) {
                setState({
                    directions: result
                });
            } else if (status === window.google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
                delayFactor += 0.2;
                setTimeout(()=>{
                    getDirections(startLoc, destinationLoc);
                }, delayFactor * 200);
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    };
    let originMarker = null;
    let destinationMarker = null;
    let polyline = null;
    if (state.directions && props.index) {
        originMarker = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
            defaultLabel: props.index.toString(),
            defaultIcon: null,
            position: {
                lat: parseFloat(props.from.lat),
                lng: parseFloat(props.from.lng)
            },
            onClick: ()=>{
                setShowPopUp(true); // Toggle the visibility of InfoWindow
            },
            children: showPopUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {
                onCloseClick: ()=>setShowPopUp(false),
                children: getGooglePopUp(props.data)
            })
        });
        destinationMarker = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
            defaultLabel: props.index.toString(),
            defaultIcon: null,
            position: {
                lat: parseFloat(props.to.lat),
                lng: parseFloat(props.to.lng)
            },
            onClick: ()=>{
                setShowPopUp(true); // Toggle the visibility of InfoWindow
            },
            children: showPopUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {
                onCloseClick: ()=>setShowPopUp(false),
                children: getGooglePopUp(props.data)
            })
        });
    }
    polyline = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Polyline, {
        path: [
            {
                lat: parseFloat(props.from.lat),
                lng: parseFloat(props.from.lng)
            },
            {
                lat: parseFloat(props.to.lat),
                lng: parseFloat(props.to.lng)
            }
        ],
        options: {
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 1
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            originMarker,
            destinationMarker,
            polyline
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectionRenderComponent); //  \true when international map are have then marker re not show please check in india it is visisble but out of india it is not visisble 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8793);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__]);
_directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const containerStyle = {
    width: "100%",
    height: "700px"
};
function GoogleMaps({ data = [] }) {
    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyD6MRqmdjtnIHn7tyDLX-qsjreaTkuzSCY"
    });
    // console.log("data data 123", data);
    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [center, setCenter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        lat: 51.509865,
        lng: -0.118092
    });
    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (data.length > 0) {
            // Calculate the bounds of all markers
            const markerBounds = new window.google.maps.LatLngBounds();
            data.forEach((elem)=>{
                markerBounds.extend(new window.google.maps.LatLng(elem.from.lat, elem.from.lng));
                markerBounds.extend(new window.google.maps.LatLng(elem.to.lat, elem.to.lng));
            });
            // Set the center and bounds of the map
            setBounds(markerBounds);
            setCenter(markerBounds.getCenter());
        }
    }, [
        data
    ]);
    const onLoad = (map)=>{
        setMap(map);
    };
    return isLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: "div",
        sx: {
            position: "relative",
            width: "100%"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
            mapContainerStyle: containerStyle,
            center: center,
            zoom: 5,
            onLoad: onLoad,
            options: {
                restriction: {
                    latLngBounds: bounds,
                    strictBounds: false
                }
            },
            children: data.map((elem, index)=>{
                {}
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    index: index + 1,
                    strokeColor: elem.strokeColor,
                    from: elem.from,
                    to: elem.to,
                    data: elem.data
                }, index);
            })
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(GoogleMaps));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;