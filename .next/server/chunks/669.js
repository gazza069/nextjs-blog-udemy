exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 2040:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__1I7EE",
	"header": "layout_header__0Pxcn",
	"headerImage": "layout_headerImage__RH5X7",
	"headerHomeImage": "layout_headerHomeImage__LaN5T",
	"backToHome": "layout_backToHome__6PQbT"
};


/***/ }),

/***/ 9754:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY",
	"boldText": "utils_boldText__NhTA_"
};


/***/ }),

/***/ 5738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "y": () => (/* binding */ siteTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2040);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9754);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





const name = "Shin Code";
const siteTitle = "Next.js blog";
function Layout({ children , home  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
                children: home ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/images/profile.png",
                            className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().borderCircle)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerHomeImage)}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading2Xl),
                            children: name
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/images/profile.png",
                            className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().borderCircle)}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading2Xl),
                            children: name
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            !home && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: "←　ホームへ戻る"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 6225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds),
/* harmony export */   "x0": () => (/* binding */ getPostsData)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const postsDirectry = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "posts");
//mdファイルのデータを取り出す
function getPostsData() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(postsDirectry);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/, ""); //ファイル名(id)
        // マークダウンファイルを文字列として読み取る
        const fullPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(postsDirectry, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(fullPath, "utf8");
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        //idとデータを返す
        return {
            id,
            ...matterResult.data
        };
    });
    return allPostsData;
}
//getStaticPathでreturnで使うpathを取得する
function getAllPostIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(postsDirectry);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
/*
    [
        {
            params: {
                id: "ssg-ssr"
            }
        },
        {
            params: {
                id: "next-react"
            }
        }
    ]
    */ }
//idに基づいてブログ投稿データを返す
async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(postsDirectry, `${id}.md`);
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);
    const blogContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(matterResult.content);
    const blogContentHTML = blogContent.toString();
    return {
        id,
        blogContentHTML,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;