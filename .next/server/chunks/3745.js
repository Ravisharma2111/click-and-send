"use strict";
exports.id = 3745;
exports.ids = [3745];
exports.modules = {

/***/ 7660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_iconify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8355);
/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(261);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _paymentPage_CardPaymentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6213);
/* harmony import */ var _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_iconify__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_3__, _paymentPage_CardPaymentForm__WEBPACK_IMPORTED_MODULE_7__, _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_8__]);
([_components_iconify__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_3__, _paymentPage_CardPaymentForm__WEBPACK_IMPORTED_MODULE_7__, _auth_useAuthContext__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SubscriptionsPage = ()=>{
    const { user } = (0,_auth_useAuthContext__WEBPACK_IMPORTED_MODULE_8__/* .useAuthContext */ .E)();
    const activePlan = user?.plan;
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [paymentDetails, setPaymentDetails] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const [showPayment, setShowPayment] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    // API FETCH LIST
    const fetchdata = async (type = "company")=>{
        setLoading(true);
        const statusShowPlan = 1;
        await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get(`/api/auth/master/plan/list/${type}/${statusShowPlan}`).then((response)=>{
            if (response.status === 200) {
                setLoading(false);
                setData(response?.data.view_data);
            }
        }).catch((error)=>{
            setLoading(false);
            console.log("error", error);
        });
    };
    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{
        fetchdata();
    }, []);
    const handleCheckout = async (elem)=>{
        setPaymentDetails(elem);
        console.log("Selected Plan: ", elem);
        setShowPayment(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
        children: !showPayment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                backgroundColor: "#f5f5f5",
                pb: 6
            },
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeleton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: {
                                lg: "550px",
                                md: "550px",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                className: "Subscritption_box_stack_responsive",
                                sx: {
                                    zIndex: 8,
                                    position: "absolute",
                                    left: "8em",
                                    top: "6em"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Breadcrumbs, {
                                    "aria-label": "breadcrumb",
                                    sx: {
                                        color: "common.white"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            component: (next_link__WEBPACK_IMPORTED_MODULE_5___default()),
                                            sx: {
                                                textDecoration: "none"
                                            },
                                            color: "common.white",
                                            href: "/",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            component: (next_link__WEBPACK_IMPORTED_MODULE_5___default()),
                                            sx: {
                                                textDecoration: "none"
                                            },
                                            color: "common.white",
                                            href: "/dashboard/company",
                                            children: "Dashboard"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            sx: {
                                                textDecoration: "none",
                                                fontWeight: 600
                                            },
                                            color: "common.white",
                                            children: "Subscription"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                                className: "dashboard_subscription_box_stack_responsive",
                                sx: {
                                    paddingTop: {
                                        lg: "6rem!important",
                                        md: "6rem!important",
                                        sm: "3rem!important",
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
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                    spacing: 4,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            gutterBottom: true,
                                            fontSize: 44,
                                            component: "h2",
                                            fontWeight: 600,
                                            color: "white",
                                            variant: "h2",
                                            children: "Our Subscription Plans"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                            variant: "body1",
                                            component: "p",
                                            color: "common.white",
                                            children: "Choose the right plan made for you"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        className: "subscription_plan_box_stack_responsive",
                        sx: {
                            position: "relative",
                            top: -140,
                            zIndex: 6
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                pb: 0,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    className: "DashboardSubscritption_Grid_stack_responsive",
                                    container: true,
                                    spacing: 6,
                                    children: data && data?.length > 0 && data.map((elem, index)=>{
                                        const isActivePlan = activePlan?.plan_id === elem.id;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            md: 4,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
                                                sx: {
                                                    borderRadius: "20px"
                                                },
                                                onMouseOver: ()=>setHover(index),
                                                onMouseOut: ()=>setHover(false),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                            sx: {
                                                                textAlign: "center",
                                                                py: 5,
                                                                backgroundImage: "url(/assets/images/home/subscription/subscription_banner.png)",
                                                                backgroundRepeat: "no-repeat",
                                                                objectFit: "contain"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                    variant: "h4",
                                                                    color: "common.white",
                                                                    fontWeight: 600,
                                                                    children: elem?.name
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                direction: "column",
                                                                spacing: 0.6,
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                        variant: "h3",
                                                                        children: [
                                                                            "$",
                                                                            elem?.price
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                                        variant: "body1",
                                                                        fontWeight: 400,
                                                                        children: "/month"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                            spacing: 1,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                                        textAlign: "center",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.List, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                                                    sx: {
                                                                                        position: "relative"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemIcon, {
                                                                                            sx: {
                                                                                                position: "absolute"
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                                                icon: "charm:square-tick",
                                                                                                color: (theme)=>theme.palette.success.main
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                                                                                            sx: {
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            primary: "Online System"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                                                    sx: {
                                                                                        position: "relative"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemIcon, {
                                                                                            sx: {
                                                                                                position: "absolute"
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                                                icon: "charm:square-tick",
                                                                                                color: (theme)=>theme.palette.success.main
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                                                                                            sx: {
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            primary: " Free apps"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                                                    sx: {
                                                                                        position: "relative"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemIcon, {
                                                                                            sx: {
                                                                                                position: "absolute"
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                                                icon: "system-uicons:cross",
                                                                                                color: "red"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                                                                                            sx: {
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            primary: " Free apps"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                                                    sx: {
                                                                                        position: "relative"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemIcon, {
                                                                                            sx: {
                                                                                                position: "absolute"
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                                                icon: "charm:square-tick",
                                                                                                color: (theme)=>theme.palette.success.main
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                                                                                            sx: {
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            primary: "live preview"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                                                    sx: {
                                                                                        position: "relative"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemIcon, {
                                                                                            sx: {
                                                                                                position: "absolute"
                                                                                            },
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                                                icon: "system-uicons:cross",
                                                                                                color: "red"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                                                                                            sx: {
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            primary: "Support unlimited"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                                                    alignItems: "center",
                                                                    children: isActivePlan ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                                        fullWidth: true,
                                                                        variant: "contained",
                                                                        sx: {
                                                                            px: 5
                                                                        },
                                                                        onClick: ()=>handleCheckout(plan),
                                                                        children: "Activate Plan"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                                        fullWidth: true,
                                                                        variant: "contained",
                                                                        sx: {
                                                                            px: 5
                                                                        },
                                                                        onClick: ()=>handleCheckout(elem),
                                                                        children: "Get Started"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, index);
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paymentPage_CardPaymentForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            paymentDetails: paymentDetails,
            setShowPayment: setShowPayment,
            customerInvoiceAndSubscription: "companySubscriptionPlan"
        }) // Render the PaymentPage component when showPayment is true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;