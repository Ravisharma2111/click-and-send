"use strict";
exports.id = 4180;
exports.ids = [4180];
exports.modules = {

/***/ 4180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* reexport */ banner)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__(7185);
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/breadcrumb/index.js






const BreadcrumbComponent = ()=>{
    const { asPath } = (0,router_.useRouter)();
    const linkPath = asPath.split("/");
    linkPath.shift();
    const pathArray = linkPath.map((path, i)=>{
        return {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i + 1).join("/")
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Breadcrumbs_default()), {
        mt: 2,
        "aria-label": "breadcrumb",
        sx: {
            color: (theme)=>theme.palette.common.white,
            fontSize: {
                lg: "1rem!important",
                md: "1rem!important",
                sm: "0.7rem!important",
                xs: "0.7rem!important"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                legacyBehavior: true,
                children: /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                    underline: "hover",
                    color: "common.white",
                    sx: {
                        cursor: "pointer",
                        fontSize: {
                            lg: "1rem!important",
                            md: "1rem!important",
                            sm: "0.7rem!important",
                            xs: "0.7rem!important"
                        }
                    },
                    children: "Home"
                })
            }),
            pathArray && pathArray.map((path, index)=>{
                if (index == pathArray.length - 1) {
                    return /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                        sx: {
                            textTransform: "uppercase",
                            color: (theme)=>theme.palette.common.white,
                            fontSize: {
                                lg: "1rem!important",
                                md: "1rem!important",
                                sm: "0.7rem!important",
                                xs: "0.7rem!important"
                            }
                        },
                        color: "text.secondary",
                        children: path && path?.breadcrumb?.indexOf("-") !== -1 ? path.breadcrumb.replace(/-/g, " ") : path.breadcrumb
                    }, `breadcrumb-${index}`);
                } else {
                    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: path.href,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                            sx: {
                                textTransform: "capitalize"
                            },
                            underline: "hover",
                            color: "inherit",
                            children: path.breadcrumb
                        })
                    }, `breadcrumb-${index}`);
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/banner/banner.js




const BannerSection = ({ title, alt, src, srcWidth, imgSx, subTitle, titleLastWord })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
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
                backgroundImage: `url(../../../${src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                zIndex: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                "&::before": {
                    content: '""',
                    backgroundImage: "linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 160%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 7
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Stack, {
                    sx: {
                        zIndex: 8,
                        position: "absolute",
                        left: "8em",
                        top: "6em"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(BreadcrumbComponent, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.CardContent, {
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
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Typography, {
                            gutterBottom: true,
                            fontSize: 44,
                            component: "h1",
                            fontWeight: 600,
                            color: "white",
                            children: [
                                title,
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                    component: "span",
                                    gutterBottom: true,
                                    fontSize: 44,
                                    fontWeight: 600,
                                    color: "primary",
                                    children: titleLastWord
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                            gutterBottom: true,
                            component: "p",
                            fontWeight: 400,
                            width: 400,
                            fontSize: 16,
                            color: "white",
                            m: "auto",
                            children: subTitle
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const banner = (BannerSection);

;// CONCATENATED MODULE: ./src/components/banner/index.js



/***/ })

};
;