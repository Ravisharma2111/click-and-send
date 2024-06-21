"use strict";
exports.id = 8633;
exports.ids = [8633];
exports.modules = {

/***/ 5222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _TextMaxLine__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _useTypography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3718);
/* harmony import */ var _TextMaxLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8936);




/***/ }),

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3260);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__);



// Define the provided CSS styles
const styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10
    },
    ratingContainer: {
        marginBottom: 10
    },
    ratingBox: {
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    userImage: {
        width: 60,
        height: 60,
        objectFit: "cover",
        marginRight: 10
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "blue"
    },
    reviewText: {
        fontSize: 14
    },
    tableContainer: {
        marginTop: "20px",
        borderRadius: 10,
        border: "1px solid",
        borderColor: "#000",
        marginBottom: 10
    },
    table: {
        minWidth: "100%"
    },
    tableCell: {
        fontSize: "10px",
        padding: 5
    },
    tableHeaderCell: {
        fontSize: "13px",
        fontWeight: "600",
        padding: 5
    },
    Headersection: {
        borderBottomWidth: 1,
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
// Define the PDFViewer component
const PDFViewer = ({ jobDetail })=>{
    console.log("jobDetail123", jobDetail);
    const [imageData, setImageData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (jobDetail.items[0]?.address[0]?.item?.image) {
            fetchImage(jobDetail.items[0]?.address[0]?.item?.image);
        }
    }, [
        jobDetail.items
    ]);
    const fetchImage = (imageUrl)=>{
        fetch(imageUrl).then((response)=>response.blob()).then((blob)=>{
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = ()=>{
                setImageData(reader.result);
            };
        }).catch((error)=>{
            console.error("Error fetching image:", error);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Document, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Page, {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: styles.Headersection,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        children: "Job Detail"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: {
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "15px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        style: {
                            fontWeight: 700,
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 1,
                            fontSize: "12px"
                        },
                        children: jobDetail.name
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: {
                        marginBottom: 3,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: 10,
                        borderBottomWidth: 1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            style: {
                                fontWeight: 500,
                                fontSize: "10px"
                            },
                            children: "Vehicle Requirement:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            style: {
                                fontWeight: 600,
                                fontSize: "12px"
                            },
                            children: jobDetail?.vehicle
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "15px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        children: "Pickup Details"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: styles.tableContainer,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                        style: styles.table,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                                style: {
                                    flexDirection: "row"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 2
                                            }
                                        ],
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Pickup Date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Pickup Time"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "L*W*H"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Quantity"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Material"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                                children: jobDetail.items[0].address && jobDetail.items[0].address?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                                    style: {
                                        flexDirection: "row",
                                        borderBottomWidth: 1
                                    },
                                    children: [
                                        console.log("jobDetail.items[0].address[0]?.pickup_date", jobDetail.items[0].address[0]?.item?.pickup_date),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 2
                                                }
                                            ],
                                            children: jobDetail.items[0].address[0]?.address
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[0]?.item?.pickup_date
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[0].item?.pickup_time
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: `${jobDetail.items[0].address[0].item?.length} * ${jobDetail.items[0].address[0].item?.width} * ${jobDetail.items[0].address[0].item?.height}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[0].item?.quantity
                                        }),
                                        imageData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                            style: [
                                                styles.image,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            src: imageData
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[0].item?.material
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "15px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        children: "Delivery Details"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                    style: styles.tableContainer,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                        style: styles.table,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                                style: {
                                    flexDirection: "row"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 2
                                            }
                                        ],
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Pickup Date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Pickup Time"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "L*W*H"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Quantity"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: [
                                            styles.tableHeaderCell,
                                            {
                                                flex: 1
                                            }
                                        ],
                                        children: "Material"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                                children: jobDetail.items[0].address && jobDetail.items[0].address?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
                                    style: {
                                        flexDirection: "row",
                                        borderBottomWidth: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 2
                                                }
                                            ],
                                            children: jobDetail.items[0].address[1]?.address
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[1]?.item?.pickup_date
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[1].item?.pickup_time
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: `${jobDetail.items[0].address[1].item?.length} * ${jobDetail.items[0].address[1].item?.width} * ${jobDetail.items[0].address[1].item?.height}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[1].item?.quantity
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                            style: [
                                                styles.image,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            src: `${jobDetail.items[0].address[1].item?.image}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: [
                                                styles.tableCell,
                                                {
                                                    flex: 1
                                                }
                                            ],
                                            children: jobDetail.items[0].address[1].item?.material
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PDFViewer);


/***/ })

};
;