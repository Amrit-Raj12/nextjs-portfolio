"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n// import Providers from \"next-auth/providers\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }), \n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.SECRET,\n    callbacks: {\n        async jwt (token, account) {\n            if (account?.accessToken) {\n                token.accessToken = account.accessToken;\n            }\n            return token;\n        },\n        redirect: async (url, _baseUrl)=>{\n            if (url === \"/\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        }\n    },\n    // providers: [\n    //   Providers.GitHub({\n    //     clientId: process.env.GITHUB_ID,\n    //     clientSecret: process.env.GITHUB_SECRET,\n    //   }),\n    // ],\n    database: process.env.DB_URL\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ2hDLEVBQStDO0FBQ1E7QUFFdkQsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUN2QkUsU0FBUyxFQUFFLENBQUM7UUFDVkQsaUVBQWMsQ0FBQyxDQUFDO1lBQ2RFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRSxDQUFDO2dCQUNkQyxNQUFNLEVBQUUsQ0FBQztvQkFDUEMsTUFBTSxFQUFFLENBQVM7b0JBQ2pCQyxXQUFXLEVBQUUsQ0FBUztvQkFDdEJDLGFBQWEsRUFBRSxDQUFNO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RDLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLFVBQVUsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREMsTUFBTSxFQUFFWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksTUFBTTtJQUUxQkMsU0FBUyxFQUFFLENBQUM7Y0FDSkosR0FBRyxFQUFDSyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLEVBQUUsRUFBRUEsT0FBTyxFQUFFQyxXQUFXLEVBQUUsQ0FBQztnQkFDekJGLEtBQUssQ0FBQ0UsV0FBVyxHQUFHRCxPQUFPLENBQUNDLFdBQVc7WUFDekMsQ0FBQztZQUNELE1BQU0sQ0FBQ0YsS0FBSztRQUNkLENBQUM7UUFDREcsUUFBUSxTQUFTQyxHQUFHLEVBQUVDLFFBQVEsR0FBSyxDQUFDO1lBQ2xDLEVBQUUsRUFBRUQsR0FBRyxLQUFLLENBQUcsSUFBRSxDQUFDO2dCQUNoQixNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUc7WUFDNUIsQ0FBQztZQUNELE1BQU0sQ0FBQ0QsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBRztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUNELEVBQWU7SUFDZixFQUF1QjtJQUN2QixFQUF1QztJQUN2QyxFQUErQztJQUMvQyxFQUFRO0lBQ1IsRUFBSztJQUNMQyxRQUFRLEVBQUV2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3VCLE1BQU07QUFvQjlCLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9sLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG4vLyBpbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBqd3Q6IHtcbiAgICBlbmNyeXB0aW9uOiB0cnVlLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QodG9rZW4sIGFjY291bnQpIHtcbiAgICAgIGlmIChhY2NvdW50Py5hY2Nlc3NUb2tlbikge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzVG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICByZWRpcmVjdDogYXN5bmMgKHVybCwgX2Jhc2VVcmwpID0+IHtcbiAgICAgIGlmICh1cmwgPT09IFwiL1wiKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIvXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcIi9cIik7XG4gICAgfSxcbiAgfSxcbiAgLy8gcHJvdmlkZXJzOiBbXG4gIC8vICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gIC8vICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAvLyAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAvLyAgIH0pLFxuICAvLyBdLFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfVVJMLFxuXG4gIC8vIHNlc3Npb246IHtcbiAgLy8gICBqd3Q6IHRydWUsXG4gIC8vIH0sXG4gIC8vIGp3dDoge1xuICAvLyAgIHNlY3JldDogXCJhYmNkZGVlZmZcIixcbiAgLy8gfSxcbiAgLy8gY2FsbGJhY2tzOiB7XG4gIC8vICAgYXN5bmMgand0KHRva2VuLCB1c2VyKSB7XG4gIC8vICAgICBpZiAodXNlcikge1xuICAvLyAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gdG9rZW47XG4gIC8vICAgfSxcbiAgLy8gICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHRva2VuKSB7XG4gIC8vICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgLy8gICAgIHJldHVybiBzZXNzaW9uO1xuICAvLyAgIH0sXG4gIC8vIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJqd3QiLCJlbmNyeXB0aW9uIiwic2VjcmV0IiwiU0VDUkVUIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJyZWRpcmVjdCIsInVybCIsIl9iYXNlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkYXRhYmFzZSIsIkRCX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();