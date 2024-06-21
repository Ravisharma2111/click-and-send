"use strict";
exports.id = 4930;
exports.ids = [4930];
exports.modules = {

/***/ 7636:
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





const DirectionRenderComponent = (props)=>{
    console.log("elem elem 1", props);
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
            // console.log("status", status);
            if (status === window.google.maps.DirectionsStatus.OK) {
                setState({
                    directions: result
                });
            } else if (status === window.google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
                delayFactor += 0.2;
                // if (delayFactor <= 10) delayFactor = 0.2;
                setTimeout(()=>{
                    getDirections(startLoc, destinationLoc);
                }, delayFactor * 200);
            } else {
                console.error(`Error fetching directions: ${status}`);
            }
        });
    };
    console.log("Stroke Color:", props); // Debugging
    let originMarker = null;
    let destinationMarker = null;
    if (state.directions && props.index) {
        originMarker = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
            defaultLabel: props.index.toString(),
            defaultIcon: null,
            position: {
                lat: parseFloat(props.from.lat),
                lng: parseFloat(props.from.lng)
            },
            onClick: ()=>{
                setShowPopUp(1);
            }
        });
        destinationMarker = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
            label: props.index.toString(),
            defaultIcon: null,
            position: {
                lat: parseFloat(props.to.lat),
                lng: parseFloat(props.to.lng)
            },
            onClick: ()=>{
                setShowPopUp(1);
            }
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            state.directions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.DirectionsRenderer, {
                directions: state.directions,
                options: {
                    polylineOptions: {
                        strokeColor: props.strokeColor,
                        strokeOpacity: 0.4,
                        strokeWeight: 4
                    },
                    preserveViewport: true,
                    suppressMarkers: true,
                    icon: {
                        scale: 3
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                position: {
                    lat: parseFloat(props.from.lat),
                    lng: parseFloat(props.from.lng)
                },
                onClick: ()=>{
                    setShowPopUp(true); // Assuming setShowPopUp is defined in parent component
                },
                autoFocus: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                position: {
                    lat: parseFloat(props.to.lat),
                    lng: parseFloat(props.to.lng)
                },
                onClick: ()=>{
                    setShowPopUp(true); // Assuming setShowPopUp is defined in parent component
                },
                autoFocus: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectionRenderComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4930:
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
/* harmony import */ var _directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7636);
/* harmony import */ var _utils_dummyLocations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5822);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__]);
([_directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const containerStyle = {
    width: "100%",
    height: "700px"
};
// const center = {
//   lat: 0, // Update the center to an international location
//   lng: 0,
// };
function TrackGoogleMaps({ data = [] }) {
    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyD6MRqmdjtnIHn7tyDLX-qsjreaTkuzSCY"
    });
    // const initialCenter = { lat: 0, lng: 0 };
    // const [state, setState] = React.useState({
    //   defaultZoom: 5,
    //   map: null,
    //   center: {
    //     lat: 23.217724,
    //     lng: 72.667216,
    //   },
    // });
    const initialCenter = calculateCenter(data);
    const [showPopUpIndex, setShowPopUpIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    function calculateCenter(data) {
        if (data.length === 0) return {
            lat: 51.509865,
            lng: -0.118092
        };
        const sumLat = data.reduce((acc, curr)=>acc + parseFloat(curr?.from?.lat) + parseFloat(curr?.to?.lat), 0);
        const sumLng = data.reduce((acc, curr)=>acc + parseFloat(curr?.from?.lng) + parseFloat(curr?.to?.lng), 0);
        const avgLat = sumLat / (2 * data.length);
        const avgLng = sumLng / (2 * data.length);
        return {
            lat: avgLat,
            lng: avgLng
        };
    }
    return isLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
        mapContainerStyle: containerStyle,
        center: initialCenter,
        zoom: 5,
        children: data.map((elem, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_directionRenderComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        from: {
                            lat: parseFloat(elem?.from?.lat),
                            lng: parseFloat(elem?.from?.lng)
                        },
                        to: {
                            lat: parseFloat(elem?.to?.lat),
                            lng: parseFloat(elem?.to?.lng)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                        position: {
                            lat: parseFloat(elem?.from?.lat),
                            lng: parseFloat(elem?.from?.lng)
                        },
                        onClick: ()=>setShowPopUpIndex(index),
                        autoFocus: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                        position: {
                            lat: parseFloat(elem?.to?.lat),
                            lng: parseFloat(elem?.to?.lng)
                        },
                        onClick: ()=>setShowPopUpIndex(index),
                        autoFocus: true
                    }),
                    showPopUpIndex === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {
                        position: {
                            lat: parseFloat(elem?.from?.lat),
                            lng: parseFloat(elem?.from?.lng)
                        },
                        onCloseClick: ()=>setShowPopUpIndex(null),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "nh\xe0 trọ cho thu\xea"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "1.500.000đ"
                                })
                            ]
                        })
                    })
                ]
            }, index))
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(TrackGoogleMaps));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5822:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./src/utils/constant.js
var constant = __webpack_require__(8672);
;// CONCATENATED MODULE: ./src/utils/helper.js
const convertLatLngToObj = (lat, lng)=>{
    return {
        lat,
        lng
    };
};
const createLatLngObject = (latLng)=>{
    const latLngArray = latLng.split(",");
    return {
        lat: latLngArray[0],
        lng: latLngArray[1]
    };
};
const createLocationObject = (from, fromTitle, to, toTitle, strokeColor = "#f68f54")=>{
    return {
        from: {
            ...createLatLngObject(from),
            fromTitle
        },
        to: {
            ...createLatLngObject(to),
            toTitle
        },
        strokeColor: strokeColor
    };
};


;// CONCATENATED MODULE: ./src/utils/dummyLocations.js


const directions = [
    // {
    //   from: locationsList.Mumbai,
    //   to: locationsList.Pune,
    //   strokeColor: "#f68f54"
    // },
    // {
    //   from: locationsList.Goa,
    //   to: locationsList.Ratnagiri,
    //   strokeColor: "#f68f54"
    // },
    // {
    //   from: locationsList.Nagpur,
    //   to: locationsList.Nashik,
    //   strokeColor: "#f68f54"
    // },
    // {
    //   from: locationsList.Indore,
    //   to: locationsList.Gwalior,
    //   strokeColor: "#f68f54"
    // },
    // {
    //   from: locationsList.Madurai,
    //   to: locationsList.Coimbatore,
    //   strokeColor: "#f68f54"
    // },
    // {
    //   from: locationsList.Chennai,
    //   to: locationsList.Tirupati,
    //   strokeColor: "#f68f54"
    // },
    // {
    //   from: locationsList.Kochi,
    //   to: locationsList.Thiruvalla,
    //   strokeColor: "#f68f54"
    // },
    {
        from: constant/* locationsList */.mH.Udaipur,
        to: constant/* locationsList */.mH.Mumbai,
        strokeColor: "#f68f54"
    }
];
const DummyLocations = directions.map((elem)=>{
    return createLocationObject(elem.from.latLng, elem.from.title, elem.to.latLng, elem.to.title, elem.strokeColor);
});
/* harmony default export */ const dummyLocations = ((/* unused pure expression or super */ null && (DummyLocations))); /* more directions
const moreDirections = [
  {
    from: locationsList.NewDelhi,
    to: locationsList.Allahabad,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Amritsar,
    to: locationsList.Chandigarh,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Ludhiana,
    to: locationsList.Jalandhar,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kanpur,
    to: locationsList.Bareilly,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Lucknow,
    to: locationsList.Agra,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Islamabad,
    to: locationsList.RawalPindi,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Lahore,
    to: locationsList.Multan,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Dhaka,
    to: locationsList.Chittagong,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kohima,
    to: locationsList.Imphal,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Guwahati,
    to: locationsList.Shillong,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kolkata,
    to: locationsList.Hydrabad,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Jamshedpur,
    to: locationsList.Ranchi,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Cuttack,
    to: locationsList.Bhubaneswar,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Raipur,
    to: locationsList.Bilaspur,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Visakhapatnam,
    to: locationsList.Srikakulam,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Vijayawada,
    to: locationsList.Kanchipuram,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Srinagar,
    to: locationsList.Porbandar,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Dambulla,
    to: locationsList.Colombo,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Galle,
    to: locationsList.Kandy,
    strokeColor: "#f68f54"
  }
];
*/ 


/***/ })

};
;