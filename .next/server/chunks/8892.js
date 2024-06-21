"use strict";
exports.id = 8892;
exports.ids = [8892];
exports.modules = {

/***/ 8892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1425);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _module_map_track_job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4930);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _module_map_track_job__WEBPACK_IMPORTED_MODULE_3__, _utils_axios__WEBPACK_IMPORTED_MODULE_4__]);
([_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _module_map_track_job__WEBPACK_IMPORTED_MODULE_3__, _utils_axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const TrackJob = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { slug } = query;
    const [bid_id, job_id, driver_id] = slug;
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const [mapData, setMapData] = react__WEBPACK_IMPORTED_MODULE_7___default().useState([]);
    const initialValues = {
        bid_id: bid_id,
        user_id: driver_id,
        job_id: job_id
    };
    const fetchTrackJob = async ()=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post(`api/auth/jobs/track-job`, initialValues).then((response)=>{
            if (response.status === 200) {
                setData(response.data.view_data && response.data.view_data?.length > 0 ? response.data.view_data : []);
            }
        }).catch((error)=>console.log(error));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (bid_id && job_id && driver_id) {
            fetchTrackJob();
        }
    }, [
        bid_id,
        job_id,
        driver_id
    ]);
    console.log("queryquery", query);
    react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(()=>{
        let newArray = [];
        let finalArray = [];
        if (data && data?.length > 0) {
            data.forEach((element)=>{
                element.forEach((newElement, elementIndex)=>{
                    if (newElement?.type == "drop") {
                        newArray[elementIndex] = {
                            from: {
                                lat: newElement?.lat,
                                lng: newElement?.long
                            }
                        };
                    } else if (newElement?.type == "pickup") {
                        newArray[elementIndex - 1] = {
                            from: {
                                ...newArray[elementIndex - 1].from
                            },
                            to: {
                                lat: newElement?.lat,
                                lng: newElement?.long
                            }
                        };
                        finalArray.push(...newArray);
                    }
                });
            });
        }
        setMapData(finalArray);
    }, [
        data,
        data?.length
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            py: 12,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        my: 1,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            variant: "outlined",
                            sx: {
                                my: 0
                            },
                            onClick: ()=>router.push("/dashboard/company/active_jobs"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "ion:play-back",
                                    sx: {
                                        mr: "7px"
                                    },
                                    width: 14
                                }),
                                "Back"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                    item: true,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
                                        sx: {
                                            position: "relative",
                                            pr: 0,
                                            py: 0,
                                            maxHeight: "92vh",
                                            overflowY: "scroll",
                                            height: "100%",
                                            borderRadius: "0px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                sx: {
                                                    my: 0,
                                                    ml: 0,
                                                    position: "sticky",
                                                    top: 0,
                                                    zIndex: 1200,
                                                    background: (theme)=>theme.palette.common.white
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                        component: "h3",
                                                        variant: "h3",
                                                        sx: {
                                                            py: 1
                                                        },
                                                        color: "primary",
                                                        children: "Track Job"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {})
                                                ]
                                            }),
                                            data.length > 0 && data && data.map((elem)=>{
                                                return elem && elem?.length > 0 && elem.map((item, index)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                        sx: {
                                                            scrollSnapAlign: "start"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
                                                                sx: {
                                                                    p: 2,
                                                                    mb: 0.5,
                                                                    borderRadius: "0px",
                                                                    boxShadow: "none"
                                                                },
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                                                    direction: "row",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "center",
                                                                    spacing: 3,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        fontWeight: 500,
                                                                                        textTransform: "uppercase",
                                                                                        children: item?.type
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                                                                        color: "grey",
                                                                                        children: item?.address
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                                                variant: "outlined",
                                                                                color: "dark",
                                                                                size: "small",
                                                                                children: "View"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {})
                                                        ]
                                                    }, index);
                                                });
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                    item: true,
                                    md: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_module_map_track_job__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        data: mapData
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackJob);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;