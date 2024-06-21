"use strict";
exports.id = 5379;
exports.ids = [5379];
exports.modules = {

/***/ 5379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8703);
/* harmony import */ var _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9964);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(261);
/* harmony import */ var _module_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4473);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3763);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7460);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6179);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _module_map__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_form__WEBPACK_IMPORTED_MODULE_1__, _components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__, _module_map__WEBPACK_IMPORTED_MODULE_4__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const BidList = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [startChat, setStartChat] = react__WEBPACK_IMPORTED_MODULE_12___default().useState("");
    const handleOpen = ()=>setStartChat(true);
    const handleClose = ()=>setStartChat(false);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_12___default().useState(false);
    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_12___default().useState("");
    const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_12___default().useState(0);
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_12___default().useState(1);
    const [pageCount, setPageCount] = react__WEBPACK_IMPORTED_MODULE_12___default().useState(1);
    const [pageSize, setPageSize] = react__WEBPACK_IMPORTED_MODULE_12___default().useState(10);
    const [filterPrice, setFilterPrice] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(10);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const [mapData, setMapData] = react__WEBPACK_IMPORTED_MODULE_12___default().useState([]);
    const [datas, setDatas] = react__WEBPACK_IMPORTED_MODULE_12___default().useState([]);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_12___default().useState(null);
    const handleFilterClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleFilterClose = ()=>{
        setAnchorEl(null);
    };
    const filterOpen = Boolean(anchorEl);
    const id = filterOpen ? "simple-popover" : undefined;
    const sortBy = [
        {
            label: "Sort(Default)",
            value: 0
        },
        {
            label: "Sort(New)",
            value: "new"
        },
        {
            label: "Sort(Last)",
            value: "last"
        }
    ];
    const { enqueueSnackbar } = (0,notistack__WEBPACK_IMPORTED_MODULE_10__.useSnackbar)();
    // Api Fetch
    const fetchApi = async ()=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get(`api/auth/jobs/job-bids/${router.query.id}`).then((response)=>{
            setLoading(true);
            if (response.status === 200) {
                setLoading(false);
                setData(response.data?.view_data);
            }
        }).catch((error)=>{
            setLoading(false);
            console.log(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        if (router.query.id) {
            fetchApi();
        }
    }, [
        router.query.id
    ]);
    const fetchMapData = async ()=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get(`api/auth/master/jobs/edit/${router.query.id}`).then((response)=>{
            setLoading(true);
            if (response.status === 200) {
                setLoading(false);
                setDatas(response.data?.view_data);
            }
        }).catch((error)=>{
            setLoading(false);
            console.log(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        if (router.query.id) {
            fetchMapData();
        }
    }, [
        router.query.id
    ]);
    react__WEBPACK_IMPORTED_MODULE_12___default().useEffect(()=>{
        let newArray = [];
        let finalArray = [];
        if (datas?.items && datas?.items?.length > 0) {
            datas?.items.forEach((element)=>{
                element?.address && element?.address?.length > 0 && element?.address.forEach((newElement, elementIndex)=>{
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
        datas,
        datas?.length
    ]);
    // Accept Bid Api
    const fetchBidApi = async (id)=>{
        await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get(`api/auth/jobs/accept-bid/${id}`).then((response)=>{
            if (response.status === 200) {
                router.push("/dashboard/customer/job_posted");
                // succes
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
            } else {
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
        }).catch((error)=>{
            console.log(error);
        });
    };
    console.log("mapData", mapData);
    // Bid Api End
    const handlePageChange = (event, value)=>{
        setPage(value);
    };
    const handleInputChange = (event)=>{
        setFilterPrice(event.target.value);
    };
    console.log("datadata", data);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                py: 4,
                sx: {
                    mt: 10
                },
                pb: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                item: true,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                item: true,
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                    sx: {
                                        height: "100%"
                                    },
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                            direction: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                    direction: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                            alignItems: "center",
                                                            onClick: ()=>router.push("/dashboard/customer/job_posted"),
                                                            mr: 2,
                                                            sx: {
                                                                cursor: "pointer",
                                                                border: (theme)=>`2px solid ${theme.palette.primary.main}`,
                                                                borderRadius: "50%"
                                                            },
                                                            width: 30,
                                                            height: 30,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                icon: "ep:back",
                                                                width: 30,
                                                                color: (theme)=>theme.palette.primary.main
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                fontSize: 28,
                                                                color: "primary",
                                                                fontWeight: 600,
                                                                children: "Applied Bids"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                    direction: "row",
                                                    alignItems: "center",
                                                    spacing: 2,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .SelectBox */ .jL, {
                                                                formSx: {
                                                                    marginBottom: 0
                                                                },
                                                                sx: {
                                                                    borderRadius: "3em",
                                                                    height: "26px",
                                                                    fontSize: "12px",
                                                                    fontWeight: 500
                                                                },
                                                                fullWidth: true,
                                                                size: "small",
                                                                color: "#fff",
                                                                value: select,
                                                                onChange: (e)=>setSelect(e.target.value),
                                                                options: sortBy
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                    onClick: handleFilterClick,
                                                                    "aria-describedby": id,
                                                                    icon: "lucide:filter",
                                                                    width: 24,
                                                                    sx: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    color: (theme)=>theme.palette.primary.main
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Popover, {
                                                                    id: id,
                                                                    open: filterOpen,
                                                                    anchorEl: anchorEl,
                                                                    onClose: handleFilterClose,
                                                                    anchorReference: "anchorPosition",
                                                                    sx: {
                                                                        width: "40em"
                                                                    },
                                                                    anchorPosition: {
                                                                        top: 150,
                                                                        left: 370
                                                                    },
                                                                    anchorOrigin: {
                                                                        vertical: "bottom",
                                                                        horizontal: "left"
                                                                    },
                                                                    transformOrigin: {
                                                                        vertical: "top",
                                                                        horizontal: "left"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                        px: 2,
                                                                        py: 2,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                                direction: "column",
                                                                                spacing: 2,
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                                    spacing: 2,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form__WEBPACK_IMPORTED_MODULE_1__/* .TextBox */ .zC, {
                                                                                                fullWidth: true,
                                                                                                size: "small",
                                                                                                value: search,
                                                                                                endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                                    icon: "iconamoon:search-bold"
                                                                                                }),
                                                                                                placeholder: "Search",
                                                                                                onChange: (e)=>setSearch(e.target.value)
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                                                    direction: "row",
                                                                                                    justifyContent: "space-between",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                                                fontSize: 14,
                                                                                                                fontWeight: 500,
                                                                                                                children: "Price"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                                                fontSize: 14,
                                                                                                                fontWeight: 500,
                                                                                                                children: [
                                                                                                                    "$",
                                                                                                                    filterPrice
                                                                                                                ]
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Slider, {
                                                                                                    size: "large",
                                                                                                    value: typeof filterPrice === "number" ? filterPrice : 0,
                                                                                                    onChange: handleInputChange
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                                    mb: 0.6,
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                                        fontSize: 14,
                                                                                                        fontWeight: 500,
                                                                                                        children: "Rating"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Rating, {
                                                                                                            sx: {
                                                                                                                color: "#FBBC04"
                                                                                                            }
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
                                                                                sx: {
                                                                                    my: 2
                                                                                }
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                                direction: "row",
                                                                                spacing: 1,
                                                                                justifyContent: "end",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                                        color: "dark",
                                                                                        onClick: handleFilterClose,
                                                                                        children: "Cancel"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                                        variant: "contained",
                                                                                        children: "Filter"
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
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                            sx: {
                                                flexGrow: data && data.length > 0 ? 1 : 0
                                            },
                                            children: data && data.length > 0 ? data.map((elem, index)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
                                                            sx: {
                                                                my: 2
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                                            container: true,
                                                            spacing: 2,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                                                    item: true,
                                                                    md: 2,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                        component: "img",
                                                                        alt: elem?.driver?.profile_img,
                                                                        src: `${elem?.driver?.base_url}${elem?.driver?.profile_img}`,
                                                                        sx: {
                                                                            borderRadius: "50%",
                                                                            width: "65px",
                                                                            objectFit: "cover",
                                                                            height: "65px",
                                                                            border: "1px solid #f2f2f2"
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                                                    item: true,
                                                                    md: 10,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                        direction: "column",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                pb: 0.3,
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                                    direction: "row",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "space-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                                fontSize: 16,
                                                                                                fontWeight: 500,
                                                                                                children: elem?.driver?.user_name
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                                fontSize: 16,
                                                                                                fontWeight: 600,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                                        icon: "bi:currency-pound"
                                                                                                    }),
                                                                                                    elem?.ammount
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                                            direction: "row",
                                                                                            spacing: 1,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                                                sx: {
                                                                                                    cursor: elem?.status === 4 ? "not-allowed" : "pointer"
                                                                                                },
                                                                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                                    icon: "material-symbols:check-circle"
                                                                                                }),
                                                                                                // disabled={elem?.status === 4}
                                                                                                variant: "contained",
                                                                                                onClick: ()=>elem?.status !== 1 && elem?.status !== 4 && elem?.status !== 2 && elem?.status !== 3 && setStartChat(elem?.id),
                                                                                                children: elem?.status === 1 || elem?.status === 2 || elem?.status === 3 || elem?.status === 4 ? "Accepted" : elem?.status === 5 ? "Declined" : "Accept"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Rating, {
                                                                                    value: elem?.rating,
                                                                                    readOnly: true,
                                                                                    size: "small",
                                                                                    sx: {
                                                                                        color: "#FBBC04"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                            direction: "row",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            pt: 2,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                            direction: "row",
                                                                            spacing: 0.4,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                        color: "#5D5D5D",
                                                                                        fontSize: 14,
                                                                                        fontWeight: 400,
                                                                                        children: "Job Success Rate1 :"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                                        color: "#5D5D5D",
                                                                                        fontSize: 14,
                                                                                        fontWeight: 600,
                                                                                        children: [
                                                                                            elem?.jobpercent,
                                                                                            " %"
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.LinearProgress, {
                                                                                variant: "determinate",
                                                                                value: elem?.jobpercent
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                                        fontSize: 14,
                                                                        fontWeight: 500,
                                                                        sx: {
                                                                            display: "flex",
                                                                            alignItems: "flex-start"
                                                                        },
                                                                        children: [
                                                                            "Earned: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                                icon: "bi:currency-pound"
                                                                            }),
                                                                            elem?.earning,
                                                                            "+"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
                                                            sx: {
                                                                my: 2
                                                            }
                                                        })
                                                    ]
                                                }, index);
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                                textAlign: "center",
                                                py: 6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                                    variant: "h4",
                                                    children: "No Bids Yet !"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Pagination, {
                                                    count: pageCount,
                                                    color: "primary",
                                                    page: page,
                                                    onChange: handlePageChange,
                                                    variant: "outlined",
                                                    shape: "rounded",
                                                    renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.PaginationItem, {
                                                            slots: {
                                                                previous: ()=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                        direction: "row",
                                                                        spacing: 0.5,
                                                                        alignItems: "center",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                                                    });
                                                                },
                                                                next: ()=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                                                        direction: "row",
                                                                        spacing: 0.5,
                                                                        alignItems: "center",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                                                    });
                                                                }
                                                            },
                                                            ...item
                                                        })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                item: true,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                                    sx: {
                                        position: "sticky",
                                        top: 75,
                                        display: "block"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_module_map__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        data: mapData
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Modal, {
                    open: startChat,
                    onClose: handleClose,
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
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
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                pb: 2,
                                children: "Are you sure you want to Accept Bid?"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                direction: "row",
                                spacing: 8,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                        fullWidth: true,
                                        variant: "outlined",
                                        onClick: ()=>fetchBidApi(startChat),
                                        children: "Yes"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                        fullWidth: true,
                                        variant: "outlined",
                                        onClick: ()=>setStartChat(false),
                                        children: "No"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BidList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;