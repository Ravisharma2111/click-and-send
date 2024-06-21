"use strict";
exports.id = 4762;
exports.ids = [4762];
exports.modules = {

/***/ 4762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* reexport */ job)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/not-found/jobList/job.js



const JobSekelton = ({ title })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        sx: {
            width: "100%",
            textAlign: "center",
            my: 4
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
            alignItems: "center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                        variant: "h5",
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    component: "img",
                    sx: {
                        width: "400px"
                    },
                    src: "/assets/images/home/new/banner-image.jpg",
                    alt: "truck"
                })
            ]
        })
    });
};
/* harmony default export */ const job = (JobSekelton);

;// CONCATENATED MODULE: ./src/components/not-found/index.js



/***/ })

};
;