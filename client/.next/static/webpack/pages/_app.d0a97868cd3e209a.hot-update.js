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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthConsumer\": function() { return /* binding */ AuthConsumer; },\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuthContext\": function() { return /* binding */ useAuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst HANDLERS = {\n    INITIALIZE: \"INITIALIZE\",\n    SIGN_IN: \"SIGN_IN\",\n    SIGN_OUT: \"SIGN_OUT\"\n};\nconst initialState = {\n    isAuthenticated: false,\n    isLoading: true,\n    user: null\n};\nconst handlers = {\n    [HANDLERS.INITIALIZE]: (state, action)=>{\n        const user = action.payload;\n        return {\n            ...state,\n            ...// if payload (user) is provided, then is authenticated\n            user ? {\n                isAuthenticated: true,\n                isLoading: false,\n                user\n            } : {\n                isLoading: false\n            }\n        };\n    },\n    [HANDLERS.SIGN_IN]: (state, action)=>{\n        const user = action.payload;\n        return {\n            ...state,\n            isAuthenticated: true,\n            user\n        };\n    },\n    [HANDLERS.SIGN_OUT]: (state)=>{\n        return {\n            ...state,\n            isAuthenticated: false,\n            user: null\n        };\n    }\n};\nconst reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;\n// The role of this context is to propagate authentication state through the App tree.\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    undefined\n});\nconst AuthProvider = (props)=>{\n    _s();\n    const { children  } = props;\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const initialized = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const initialize = async ()=>{\n        // Prevent from calling twice in development mode with React.StrictMode enabled\n        if (initialized.current) {\n            return;\n        }\n        initialized.current = true;\n        let isAuthenticated = false;\n        try {\n            isAuthenticated = window.sessionStorage.getItem(\"authenticated\") === \"true\";\n        } catch (err) {\n            console.error(err);\n        }\n        if (isAuthenticated) {\n            const user = {\n                id: \"5e86809283e28b96d2d38537\",\n                avatar: \"/assets/avatars/avatar-anika-visser.png\",\n                name: \"Anika Visser\",\n                email: \"anika.visser@devias.io\"\n            };\n            dispatch({\n                type: HANDLERS.INITIALIZE,\n                payload: user\n            });\n        } else {\n            dispatch({\n                type: HANDLERS.INITIALIZE\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initialize();\n    }, // eslint-disable-next-line react-hooks/exhaustive-deps\n    []);\n    const skip = ()=>{\n        try {\n            window.sessionStorage.setItem(\"authenticated\", \"true\");\n        } catch (err) {\n            console.error(err);\n        }\n        const user = {\n            id: \"5e86809283e28b96d2d38537\",\n            avatar: \"/assets/avatars/avatar-anika-visser.png\",\n            name: \"Anika Visser\",\n            email: \"anika.visser@devias.io\"\n        };\n        dispatch({\n            type: HANDLERS.SIGN_IN,\n            payload: user\n        });\n    };\n    const signIn = async (values, onSubmitProps)=>{\n        const loggedInResponse = await fetch(\"http://localhost:3001/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(values)\n        });\n        const loggedIn = await loggedInResponse.json();\n        console.log(\"saveduser\", loggedIn);\n        if (loggedIn) {\n            dispatch({\n                type: HANDLERS.SIGN_IN,\n                payload: loggedIn.user\n            });\n            navigate(\"/\");\n        }\n        return savedUser;\n    };\n    const signUp = async (formData)=>{\n        console.log(\"singup\", formData);\n        const savedUserResponse = await fetch(\"http://localhost:3001/auth/register\", {\n            method: \"POST\",\n            body: formData\n        });\n        const savedUser1 = await savedUserResponse.json();\n        console.log(\"saveduser\", savedUser1);\n        return savedUser1;\n    };\n    const signOut = ()=>{\n        dispatch({\n            type: HANDLERS.SIGN_OUT\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            ...state,\n            skip,\n            signIn,\n            signUp,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ibrah\\\\Desktop\\\\Code\\\\habitTracker\\\\client\\\\src\\\\contexts\\\\auth-context.js\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"RMKaRUM3uEm0jJ9ikESH8Gc9r4Q=\");\n_c = AuthProvider;\nAuthProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\nconst AuthConsumer = AuthContext.Consumer;\nconst useAuthContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuthContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7SUFBL0M4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvYXV0aC1jb250ZXh0LmpzPzdiYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBIQU5ETEVSUyA9IHtcbiAgSU5JVElBTElaRTogJ0lOSVRJQUxJWkUnLFxuICBTSUdOX0lOOiAnU0lHTl9JTicsXG4gIFNJR05fT1VUOiAnU0lHTl9PVVQnXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gIGlzTG9hZGluZzogdHJ1ZSxcbiAgdXNlcjogbnVsbFxufTtcblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIFtIQU5ETEVSUy5JTklUSUFMSVpFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VyID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi4oXG4gICAgICAgIC8vIGlmIHBheWxvYWQgKHVzZXIpIGlzIHByb3ZpZGVkLCB0aGVuIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICAgICAgdXNlclxuICAgICAgICAgID8gKHtcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB1c2VyXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6ICh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICB9O1xuICB9LFxuICBbSEFORExFUlMuU0lHTl9JTl06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgdXNlclxuICAgIH07XG4gIH0sXG4gIFtIQU5ETEVSUy5TSUdOX09VVF06IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICB1c2VyOiBudWxsXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoXG4gIGhhbmRsZXJzW2FjdGlvbi50eXBlXSA/IGhhbmRsZXJzW2FjdGlvbi50eXBlXShzdGF0ZSwgYWN0aW9uKSA6IHN0YXRlXG4pO1xuXG4vLyBUaGUgcm9sZSBvZiB0aGlzIGNvbnRleHQgaXMgdG8gcHJvcGFnYXRlIGF1dGhlbnRpY2F0aW9uIHN0YXRlIHRocm91Z2ggdGhlIEFwcCB0cmVlLlxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdW5kZWZpbmVkIH0pO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgaW5pdGlhbGl6ZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gUHJldmVudCBmcm9tIGNhbGxpbmcgdHdpY2UgaW4gZGV2ZWxvcG1lbnQgbW9kZSB3aXRoIFJlYWN0LlN0cmljdE1vZGUgZW5hYmxlZFxuICAgIGlmIChpbml0aWFsaXplZC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZWQuY3VycmVudCA9IHRydWU7XG5cbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgaXNBdXRoZW50aWNhdGVkID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0ZWQnKSA9PT0gJ3RydWUnO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgIGlkOiAnNWU4NjgwOTI4M2UyOGI5NmQyZDM4NTM3JyxcbiAgICAgICAgYXZhdGFyOiAnL2Fzc2V0cy9hdmF0YXJzL2F2YXRhci1hbmlrYS12aXNzZXIucG5nJyxcbiAgICAgICAgbmFtZTogJ0FuaWthIFZpc3NlcicsXG4gICAgICAgIGVtYWlsOiAnYW5pa2Eudmlzc2VyQGRldmlhcy5pbydcbiAgICAgIH07XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogSEFORExFUlMuSU5JVElBTElaRSxcbiAgICAgICAgcGF5bG9hZDogdXNlclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogSEFORExFUlMuSU5JVElBTElaRVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpbml0aWFsaXplKCk7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBza2lwID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYXV0aGVudGljYXRlZCcsICd0cnVlJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIGlkOiAnNWU4NjgwOTI4M2UyOGI5NmQyZDM4NTM3JyxcbiAgICAgIGF2YXRhcjogJy9hc3NldHMvYXZhdGFycy9hdmF0YXItYW5pa2Etdmlzc2VyLnBuZycsXG4gICAgICBuYW1lOiAnQW5pa2EgVmlzc2VyJyxcbiAgICAgIGVtYWlsOiAnYW5pa2Eudmlzc2VyQGRldmlhcy5pbydcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogSEFORExFUlMuU0lHTl9JTixcbiAgICAgIHBheWxvYWQ6IHVzZXJcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAodmFsdWVzLCBvblN1Ym1pdFByb3BzKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VkSW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aC9sb2dpblwiLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICB9XG4gICAgKVxuICAgIGNvbnN0IGxvZ2dlZEluID0gYXdhaXQgbG9nZ2VkSW5SZXNwb25zZS5qc29uKClcblxuICAgIGNvbnNvbGUubG9nKFwic2F2ZWR1c2VyXCIsbG9nZ2VkSW4pXG5cbiAgICBpZiAobG9nZ2VkSW4pe1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBIQU5ETEVSUy5TSUdOX0lOLFxuICAgICAgICBwYXlsb2FkOiBsb2dnZWRJbi51c2VyXG4gICAgICB9KVxuICAgICAgbmF2aWdhdGUoXCIvXCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdmVkVXNlclxuXG4gIH07XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzaW5ndXBcIiwgZm9ybURhdGEpXG4gICAgY29uc3Qgc2F2ZWRVc2VyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBzYXZlZFVzZXJSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJzYXZlZHVzZXJcIixzYXZlZFVzZXIpXG4gICAgcmV0dXJuIHNhdmVkVXNlclxuXG4gIH07XG5cbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBIQU5ETEVSUy5TSUdOX09VVFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2tpcCxcbiAgICAgICAgc2lnbkluLFxuICAgICAgICBzaWduVXAsXG4gICAgICAgIHNpZ25PdXRcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5BdXRoUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29uc3VtZXIgPSBBdXRoQ29udGV4dC5Db25zdW1lcjtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlUmVmIiwiUHJvcFR5cGVzIiwiSEFORExFUlMiLCJJTklUSUFMSVpFIiwiU0lHTl9JTiIsIlNJR05fT1VUIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNMb2FkaW5nIiwidXNlciIsImhhbmRsZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlciIsInR5cGUiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6ZSIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJpZCIsImF2YXRhciIsIm5hbWUiLCJlbWFpbCIsInNraXAiLCJzZXRJdGVtIiwic2lnbkluIiwidmFsdWVzIiwib25TdWJtaXRQcm9wcyIsImxvZ2dlZEluUmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2dlZEluIiwianNvbiIsImxvZyIsIm5hdmlnYXRlIiwic2F2ZWRVc2VyIiwic2lnblVwIiwiZm9ybURhdGEiLCJzYXZlZFVzZXJSZXNwb25zZSIsInNpZ25PdXQiLCJQcm92aWRlciIsInZhbHVlIiwicHJvcFR5cGVzIiwibm9kZSIsIkF1dGhDb25zdW1lciIsIkNvbnN1bWVyIiwidXNlQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/auth-context.js\n"));

/***/ })

});