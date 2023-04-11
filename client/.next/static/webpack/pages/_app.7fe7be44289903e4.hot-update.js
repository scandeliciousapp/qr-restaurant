"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/auth-context.js":
/*!**************************************!*\
  !*** ./src/contexts/auth-context.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthConsumer\": function() { return /* binding */ AuthConsumer; },\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuthContext\": function() { return /* binding */ useAuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst HANDLERS = {\n    INITIALIZE: \"INITIALIZE\",\n    SIGN_IN: \"SIGN_IN\",\n    SIGN_OUT: \"SIGN_OUT\"\n};\nconst initialState = {\n    isAuthenticated: false,\n    isLoading: true,\n    user: null\n};\nconst handlers = {\n    [HANDLERS.INITIALIZE]: (state, action)=>{\n        const user1 = action.payload;\n        return {\n            ...state,\n            ...// if payload (user) is provided, then is authenticated\n            user1 ? {\n                isAuthenticated: true,\n                isLoading: false,\n                user: user1\n            } : {\n                isLoading: false\n            }\n        };\n    },\n    [HANDLERS.SIGN_IN]: (state, action)=>{\n        const user1 = action.payload;\n        return {\n            ...state,\n            isAuthenticated: true,\n            user: user1\n        };\n    },\n    [HANDLERS.SIGN_OUT]: (state)=>{\n        return {\n            ...state,\n            isAuthenticated: false,\n            user: null\n        };\n    }\n};\nconst reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;\n// The role of this context is to propagate authentication state through the App tree.\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    undefined\n});\nconst AuthProvider = (props)=>{\n    _s();\n    const { children  } = props;\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const initialized = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const initialize = async ()=>{\n        // Prevent from calling twice in development mode with React.StrictMode enabled\n        if (initialized.current) {\n            return;\n        }\n        initialized.current = true;\n        let isAuthenticated = false;\n        try {\n            isAuthenticated = window.sessionStorage.getItem(\"authenticated\") === \"true\";\n        } catch (err) {\n            console.error(err);\n        }\n        if (isAuthenticated) {\n            const user1 = {\n                id: \"5e86809283e28b96d2d38537\",\n                avatar: \"/assets/avatars/avatar-anika-visser.png\",\n                name: \"Anika Visser\",\n                email: \"anika.visser@devias.io\"\n            };\n            dispatch({\n                type: HANDLERS.INITIALIZE,\n                payload: user1\n            });\n        } else {\n            dispatch({\n                type: HANDLERS.INITIALIZE\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initialize();\n    }, // eslint-disable-next-line react-hooks/exhaustive-deps\n    []);\n    const skip = ()=>{\n        try {\n            window.sessionStorage.setItem(\"authenticated\", \"true\");\n        } catch (err) {\n            console.error(err);\n        }\n        const user1 = {\n            id: \"5e86809283e28b96d2d38537\",\n            avatar: \"/assets/avatars/avatar-anika-visser.png\",\n            name: \"Anika Visser\",\n            email: \"anika.visser@devias.io\"\n        };\n        dispatch({\n            type: HANDLERS.SIGN_IN,\n            payload: user1\n        });\n    };\n    const signIn = async (values, onSubmitProps)=>{\n        const loggedInResponse = await fetch(\"http://localhost:3001/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(values)\n        });\n        const loggedIn = await loggedInResponse.json();\n        const savedUser = await savedUserResponse.json();\n        console.log(\"saveduser\", savedUser);\n        if (loggedIn) {\n            dispatch({\n                type: HANDLERS.SIGN_IN,\n                payload: user\n            });\n            navigate(\"/\");\n        }\n        return savedUser;\n    };\n    const signUp = async (formData)=>{\n        console.log(\"singup\", formData);\n        const savedUserResponse1 = await fetch(\"http://localhost:3001/auth/register\", {\n            method: \"POST\",\n            body: formData\n        });\n        const savedUser = await savedUserResponse1.json();\n        console.log(\"saveduser\", savedUser);\n        return savedUser;\n    };\n    const signOut = ()=>{\n        dispatch({\n            type: HANDLERS.SIGN_OUT\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            ...state,\n            skip,\n            signIn,\n            signUp,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ibrah\\\\Desktop\\\\Code\\\\habitTracker\\\\client\\\\src\\\\contexts\\\\auth-context.js\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"RMKaRUM3uEm0jJ9ikESH8Gc9r4Q=\");\n_c = AuthProvider;\nAuthProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\nconst AuthConsumer = AuthContext.Consumer;\nconst useAuthContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuthContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWpFOztJQUFBQSxPQUFBQSxpREFBVUEsQ0FBQ21CO0FBQVcsRUFBRTtJQUEvQzhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9hdXRoLWNvbnRleHQuanM/N2JiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEhBTkRMRVJTID0ge1xuICBJTklUSUFMSVpFOiAnSU5JVElBTElaRScsXG4gIFNJR05fSU46ICdTSUdOX0lOJyxcbiAgU0lHTl9PVVQ6ICdTSUdOX09VVCdcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiB0cnVlLFxuICB1c2VyOiBudWxsXG59O1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgW0hBTkRMRVJTLklOSVRJQUxJWkVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLihcbiAgICAgICAgLy8gaWYgcGF5bG9hZCAodXNlcikgaXMgcHJvdmlkZWQsIHRoZW4gaXMgYXV0aGVudGljYXRlZFxuICAgICAgICB1c2VyXG4gICAgICAgICAgPyAoe1xuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIH07XG4gIH0sXG4gIFtIQU5ETEVSUy5TSUdOX0lOXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB1c2VyXG4gICAgfTtcbiAgfSxcbiAgW0hBTkRMRVJTLlNJR05fT1VUXTogKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIHVzZXI6IG51bGxcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IChcbiAgaGFuZGxlcnNbYWN0aW9uLnR5cGVdID8gaGFuZGxlcnNbYWN0aW9uLnR5cGVdKHN0YXRlLCBhY3Rpb24pIDogc3RhdGVcbik7XG5cbi8vIFRoZSByb2xlIG9mIHRoaXMgY29udGV4dCBpcyB0byBwcm9wYWdhdGUgYXV0aGVudGljYXRpb24gc3RhdGUgdGhyb3VnaCB0aGUgQXBwIHRyZWUuXG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyB1bmRlZmluZWQgfSk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCBpbml0aWFsaXplZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBQcmV2ZW50IGZyb20gY2FsbGluZyB0d2ljZSBpbiBkZXZlbG9wbWVudCBtb2RlIHdpdGggUmVhY3QuU3RyaWN0TW9kZSBlbmFibGVkXG4gICAgaWYgKGluaXRpYWxpemVkLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplZC5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYXV0aGVudGljYXRlZCcpID09PSAndHJ1ZSc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgaWQ6ICc1ZTg2ODA5MjgzZTI4Yjk2ZDJkMzg1MzcnLFxuICAgICAgICBhdmF0YXI6ICcvYXNzZXRzL2F2YXRhcnMvYXZhdGFyLWFuaWthLXZpc3Nlci5wbmcnLFxuICAgICAgICBuYW1lOiAnQW5pa2EgVmlzc2VyJyxcbiAgICAgICAgZW1haWw6ICdhbmlrYS52aXNzZXJAZGV2aWFzLmlvJ1xuICAgICAgfTtcblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBIQU5ETEVSUy5JTklUSUFMSVpFLFxuICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBIQU5ETEVSUy5JTklUSUFMSVpFXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGluaXRpYWxpemUoKTtcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHNraXAgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgJ3RydWUnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgaWQ6ICc1ZTg2ODA5MjgzZTI4Yjk2ZDJkMzg1MzcnLFxuICAgICAgYXZhdGFyOiAnL2Fzc2V0cy9hdmF0YXJzL2F2YXRhci1hbmlrYS12aXNzZXIucG5nJyxcbiAgICAgIG5hbWU6ICdBbmlrYSBWaXNzZXInLFxuICAgICAgZW1haWw6ICdhbmlrYS52aXNzZXJAZGV2aWFzLmlvJ1xuICAgIH07XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBIQU5ETEVSUy5TSUdOX0lOLFxuICAgICAgcGF5bG9hZDogdXNlclxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jICh2YWx1ZXMsIG9uU3VibWl0UHJvcHMpID0+IHtcbiAgICBjb25zdCBsb2dnZWRJblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoL2xvZ2luXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcylcbiAgICAgIH1cbiAgICApXG4gICAgY29uc3QgbG9nZ2VkSW4gPSBhd2FpdCBsb2dnZWRJblJlc3BvbnNlLmpzb24oKVxuXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgc2F2ZWRVc2VyUmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwic2F2ZWR1c2VyXCIsc2F2ZWRVc2VyKVxuXG4gICAgaWYgKGxvZ2dlZEluKXtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogSEFORExFUlMuU0lHTl9JTixcbiAgICAgICAgcGF5bG9hZDogdXNlclxuICAgICAgfSlcbiAgICAgIG5hdmlnYXRlKFwiL1wiKVxuICAgIH1cblxuICAgIHJldHVybiBzYXZlZFVzZXJcblxuICB9O1xuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2luZ3VwXCIsIGZvcm1EYXRhKVxuICAgIGNvbnN0IHNhdmVkVXNlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoL3JlZ2lzdGVyXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgc2F2ZWRVc2VyUmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwic2F2ZWR1c2VyXCIsc2F2ZWRVc2VyKVxuICAgIHJldHVybiBzYXZlZFVzZXJcblxuICB9O1xuXG4gIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogSEFORExFUlMuU0lHTl9PVVRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNraXAsXG4gICAgICAgIHNpZ25JbixcbiAgICAgICAgc2lnblVwLFxuICAgICAgICBzaWduT3V0XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuQXV0aFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnN1bWVyID0gQXV0aENvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVJlZiIsIlByb3BUeXBlcyIsIkhBTkRMRVJTIiwiSU5JVElBTElaRSIsIlNJR05fSU4iLCJTSUdOX09VVCIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsImlzTG9hZGluZyIsInVzZXIiLCJoYW5kbGVycyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlZHVjZXIiLCJ0eXBlIiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJpbml0aWFsaXplZCIsImluaXRpYWxpemUiLCJjdXJyZW50Iiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwiZW1haWwiLCJza2lwIiwic2V0SXRlbSIsInNpZ25JbiIsInZhbHVlcyIsIm9uU3VibWl0UHJvcHMiLCJsb2dnZWRJblJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dnZWRJbiIsImpzb24iLCJzYXZlZFVzZXIiLCJzYXZlZFVzZXJSZXNwb25zZSIsImxvZyIsIm5hdmlnYXRlIiwic2lnblVwIiwiZm9ybURhdGEiLCJzaWduT3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInByb3BUeXBlcyIsIm5vZGUiLCJBdXRoQ29uc3VtZXIiLCJDb25zdW1lciIsInVzZUF1dGhDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/auth-context.js\n"));

/***/ })

});