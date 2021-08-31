module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./components/Auth/index.js":
/*!**********************************!*\
  !*** ./components/Auth/index.js ***!
  \**********************************/
/*! exports provided: logout, login, signup, useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/firebase/client */ "./config/firebase/client.js");

var _jsxFileName = "D:\\JHDS\\Projetos\\FullStack\\clocker\\components\\Auth\\index.js";




const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createContext"]([{}, () => {}]);
const logout = () => _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().signOut();
const login = async ({
  email,
  password
}) => {
  _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().setPersistence(_config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["persistenceMode"]);

  try {
    await _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().signInWithEmailAndPassword(email, password);
    return _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().currentUser;
  } catch (error) {
    console.log('LOGIN ERROR', error);
  }
};
const signup = async ({
  email,
  password,
  username
}) => {
  try {
    await _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().createUserWithEmailAndPassword(email, password);
    const user = await login({
      email,
      password
    });
    const token = await user.getIdToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: 'post',
      url: '/api/profile',
      data: {
        username
      },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    console.log('SIGNUP ERROR', error);
  }
};
const useAuth = () => {
  const {
    0: auth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);
  return [auth, {
    login,
    logout,
    signup
  }];
};
const AuthProvider = ({
  children
}) => {
  const {
    0: auth,
    1: setAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loading: true,
    user: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const unsubscribe = _config_firebase_client__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().onAuthStateChanged(user => {
      setAuth({
        loading: false,
        user
      });
    });
    return () => unsubscribe();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: [auth, setAuth],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.svg */ "./components/Logo/logo.svg");

const Logo = _logo_svg__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./components/Logo/logo.svg":
/*!**********************************!*\
  !*** ./components/Logo/logo.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 290,
    height: 80,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M37.619 13.833a30.877 30.877 0 00-2.274-.084V9.333c.868 0 1.735.033 2.6.098l-.326 4.402zm8.85 1.988a30.931 30.931 0 00-4.35-1.32l.968-4.31c1.69.379 3.356.882 4.972 1.51l-1.59 4.12zm6.05 3.135a30.953 30.953 0 00-1.938-1.192l2.177-3.842c1.51.855 2.955 1.82 4.324 2.888l-2.716 3.484a30.955 30.955 0 00-1.846-1.334v-.004zm8.1 7.905a30.87 30.87 0 00-2.883-3.515l3.197-3.047a36.844 36.844 0 013.299 4.018l-3.613 2.544zm3.286 5.97c-.29-.7-.605-1.389-.945-2.066l3.944-1.988a35.216 35.216 0 011.987 4.805l-4.195 1.383a30.984 30.984 0 00-.79-2.134zm2.34 11.072a30.868 30.868 0 00-.44-4.527l4.35-.75a35.54 35.54 0 01.512 5.166l-4.417.11h-.004zm-.578 6.792c.146-.751.265-1.497.358-2.252l4.385.543a35.147 35.147 0 01-1.015 5.1l-4.258-1.179c.204-.728.38-1.466.53-2.212zM61.463 61.2a31.202 31.202 0 002.146-4.01l4.037 1.788a35.64 35.64 0 01-2.451 4.584l-3.732-2.362zm-4.257 5.321a28.904 28.904 0 001.545-1.67l3.348 2.885a35.635 35.635 0 01-1.771 1.907l-3.122-3.122z",
    fill: "#4E84D5"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35.345 13.75a30.915 30.915 0 00-28.56 42.742 30.913 30.913 0 0050.42 10.03l3.123 3.122A35.336 35.336 0 01.17 41.201 35.332 35.332 0 0135.345 9.333v4.416z",
    fill: "#2B3C54"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M33.136 22.582a2.208 2.208 0 012.209 2.208v23.008l14.344 8.196a2.208 2.208 0 01-2.19 3.833L32.04 50.995a2.208 2.208 0 01-1.113-1.917V24.79a2.208 2.208 0 012.208-2.208z",
    fill: "#4E84D5"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M91.755 68.917h2.064c0 1.451-.363 2.566-1.088 3.344-.726.779-1.75 1.168-3.072 1.168-2.912 0-4.368-1.712-4.368-5.136v-.96c0-2.698.746-4.389 2.24-5.072.586-.277 1.296-.416 2.128-.416 1.216 0 2.202.336 2.96 1.008.768.662 1.152 1.622 1.152 2.88h-2.08c-.118-.629-.326-1.104-.624-1.424-.299-.32-.768-.48-1.408-.48-.747 0-1.302.235-1.664.704-.256.331-.406.896-.448 1.696a13.21 13.21 0 00-.032 1.04v.992c0 1.227.17 2.064.512 2.512.352.448.896.672 1.632.672.746 0 1.258-.202 1.536-.608.288-.416.474-1.056.56-1.92zm15.798 4.416h-2.32l-.64-1.968h-3.824l-.624 1.968h-2.32l3.648-10.432c.16-.362.336-.613.528-.752.203-.138.448-.208.736-.208s.518.064.688.192c.182.128.342.384.48.768l3.648 10.432zm-3.472-3.84l-1.344-4.512-1.408 4.512h2.752zm15.26 3.84h-3.392c-1.28 0-2.208-.245-2.784-.736-.566-.501-.848-1.312-.848-2.432v-8.224h2.224v8.224c0 .448.101.758.304.928.202.171.57.256 1.104.256h3.392v1.984zm12.476 0h-4.032c-1.28 0-2.181-.218-2.704-.656-.512-.448-.768-1.232-.768-2.352v-8.384h7.504v1.984h-5.28v2.672h3.696l-.16 1.984h-3.536v1.584c0 .448.102.758.304.928.203.171.571.256 1.104.256h3.872v1.984zm14.264-11.392v10.24c0 .352-.107.656-.32.912-.213.246-.464.368-.752.368-.736 0-1.339-.426-1.808-1.28l-3.936-6.16v7.312h-2.224V61.941h2.144l4.672 7.456v-7.456h2.224zm14.099 5.648l.016 1.232c-.042.779-.138 1.435-.288 1.968-.149.534-.442 1.019-.88 1.456-.725.726-1.781 1.088-3.168 1.088-1.632 0-2.752-.213-3.36-.64-.608-.437-.912-1.221-.912-2.352v-8.4h4.432c1.28 0 2.283.363 3.008 1.088a3.578 3.578 0 011.04 2.144c.075.598.112 1.403.112 2.416zm-2.704 3.056c.203-.245.331-.581.384-1.008.064-.437.096-1.114.096-2.032 0-.917-.032-1.578-.096-1.984-.053-.416-.181-.746-.384-.992-.384-.469-.938-.704-1.664-.704h-2v6.304c0 .427.144.72.432.88.288.16.8.24 1.536.24.747 0 1.312-.234 1.696-.704zm16.499 2.688h-2.32l-.64-1.968h-3.824l-.624 1.968h-2.32l3.648-10.432c.16-.362.336-.613.528-.752.203-.138.448-.208.736-.208s.518.064.688.192c.182.128.342.384.48.768l3.648 10.432zm-3.472-3.84l-1.344-4.512-1.408 4.512h2.752zm16.859 3.84h-2.576l-2.224-4.224h-1.6v4.224h-2.224V64.39c0-.853.198-1.472.592-1.856.395-.394 1.056-.592 1.984-.592h1.888c1.131 0 2.027.347 2.688 1.04.672.683 1.008 1.552 1.008 2.608 0 .768-.202 1.435-.608 2-.394.555-.885.939-1.472 1.152l2.544 4.592zm-4.304-6.08c.47 0 .854-.16 1.152-.48.31-.33.464-.736.464-1.216 0-.49-.149-.885-.448-1.184-.288-.298-.677-.448-1.168-.448h-1.104c-.661 0-.992.336-.992 1.008v2.32h2.096zm24.524 2.8c0 1.056-.288 1.867-.864 2.432-.565.566-1.36.848-2.384.848h-1.536c-1.259 0-2.155-.218-2.688-.656-.523-.437-.784-1.194-.784-2.272v-8.464h4.816c1.088 0 1.904.272 2.448.816.555.544.832 1.312.832 2.304 0 .576-.149 1.067-.448 1.472-.288.406-.608.694-.96.864 1.045.491 1.568 1.376 1.568 2.656zm-3.616-3.664c.821 0 1.232-.41 1.232-1.232 0-.821-.411-1.232-1.232-1.232h-2.416v2.464h2.416zm1.392 3.552c0-.512-.091-.896-.272-1.152-.181-.266-.507-.4-.976-.4h-2.56v1.792c0 .438.107.742.32.912.224.171.587.256 1.088.256h1.152c.832 0 1.248-.469 1.248-1.408zm14.723 3.392h-3.392c-1.28 0-2.208-.245-2.784-.736-.565-.501-.848-1.312-.848-2.432v-8.224h2.224v8.224c0 .448.101.758.304.928.203.171.571.256 1.104.256h3.392v1.984zm13.325-6.224v.864c0 1.91-.363 3.296-1.088 4.16-.715.864-1.867 1.296-3.456 1.296s-2.741-.432-3.456-1.296c-.704-.864-1.056-2.266-1.056-4.208v-.832c0-1.77.357-3.088 1.072-3.952.725-.864 1.867-1.296 3.424-1.296 1.568 0 2.72.438 3.456 1.312.736.875 1.104 2.192 1.104 3.952zm-2.224.816v-.592c0-1.024-.128-1.84-.384-2.448-.299-.704-.939-1.056-1.92-1.056-.992 0-1.637.352-1.936 1.056-.245.576-.368 1.392-.368 2.448v.592c0 1.376.192 2.304.576 2.784.149.203.368.379.656.528.299.139.651.208 1.056.208.416 0 .768-.069 1.056-.208.288-.138.512-.309.672-.512.16-.202.283-.469.368-.8.149-.522.224-1.189.224-2zm13.129.992h2.064c0 1.451-.363 2.566-1.088 3.344-.725.779-1.749 1.168-3.072 1.168-2.912 0-4.368-1.712-4.368-5.136v-.96c0-2.698.747-4.389 2.24-5.072.587-.277 1.296-.416 2.128-.416 1.216 0 2.203.336 2.96 1.008.768.662 1.152 1.622 1.152 2.88h-2.08c-.117-.629-.325-1.104-.624-1.424-.299-.32-.768-.48-1.408-.48-.747 0-1.301.235-1.664.704-.256.331-.405.896-.448 1.696a13.36 13.36 0 00-.032 1.04v.992c0 1.227.171 2.064.512 2.512.352.448.896.672 1.632.672.747 0 1.259-.202 1.536-.608.288-.416.475-1.056.56-1.92zm12.295-1.616l3.92 6.032h-2.592l-2.688-4.304-1.552 2.08v2.224h-2.224V61.941h2.224v6.368l4.304-6.368h2.24l-3.632 5.36zm16.208 6.032h-4.032c-1.28 0-2.181-.218-2.704-.656-.512-.448-.768-1.232-.768-2.352v-8.384h7.504v1.984h-5.28v2.672h3.696l-.16 1.984h-3.536v1.584c0 .448.102.758.304.928.203.171.571.256 1.104.256h3.872v1.984zm14.008 0h-2.576l-2.224-4.224h-1.6v4.224h-2.224V64.39c0-.853.197-1.472.592-1.856.394-.394 1.056-.592 1.984-.592h1.888c1.13 0 2.026.347 2.688 1.04.672.683 1.008 1.552 1.008 2.608 0 .768-.203 1.435-.608 2-.395.555-.886.939-1.472 1.152l2.544 4.592zm-4.304-6.08c.469 0 .853-.16 1.152-.48.309-.33.464-.736.464-1.216 0-.49-.15-.885-.448-1.184-.288-.298-.678-.448-1.168-.448h-1.104c-.662 0-.992.336-.992 1.008v2.32h2.096zM103.264 35.752h6.192c0 4.352-1.088 7.696-3.264 10.032-2.176 2.336-5.248 3.504-9.216 3.504-8.736 0-13.104-5.136-13.104-15.408V31c0-8.096 2.24-13.168 6.72-15.216 1.76-.832 3.888-1.248 6.384-1.248 3.648 0 6.608 1.008 8.88 3.024 2.304 1.984 3.456 4.864 3.456 8.64h-6.24c-.352-1.888-.976-3.312-1.872-4.272-.896-.96-2.304-1.44-4.224-1.44-2.24 0-3.904.704-4.992 2.112-.768.992-1.216 2.688-1.344 5.088-.064.768-.096 1.808-.096 3.12v2.976c0 3.68.512 6.192 1.536 7.536 1.056 1.344 2.688 2.016 4.896 2.016 2.24 0 3.776-.608 4.608-1.824.864-1.248 1.424-3.168 1.68-5.76zM136.212 49h-10.176c-3.84 0-6.624-.736-8.352-2.208-1.696-1.504-2.544-3.936-2.544-7.296V14.824h6.672v24.672c0 1.344.304 2.272.912 2.784.608.512 1.712.768 3.312.768h10.176V49zm30.375-18.672v2.592c0 5.728-1.088 9.888-3.264 12.48-2.144 2.592-5.6 3.888-10.368 3.888-4.768 0-8.224-1.296-10.368-3.888-2.112-2.592-3.168-6.8-3.168-12.624V30.28c0-5.312 1.072-9.264 3.216-11.856 2.176-2.592 5.6-3.888 10.272-3.888 4.704 0 8.16 1.312 10.368 3.936 2.208 2.624 3.312 6.576 3.312 11.856zm-6.672 2.448V31c0-3.072-.384-5.52-1.152-7.344-.896-2.112-2.816-3.168-5.76-3.168-2.976 0-4.912 1.056-5.808 3.168-.736 1.728-1.104 4.176-1.104 7.344v1.776c0 4.128.576 6.912 1.728 8.352.448.608 1.104 1.136 1.968 1.584.896.416 1.952.624 3.168.624 1.248 0 2.304-.208 3.168-.624.864-.416 1.536-.928 2.016-1.536s.848-1.408 1.104-2.4c.448-1.568.672-3.568.672-6zm29.787 2.976h6.192c0 4.352-1.088 7.696-3.264 10.032-2.176 2.336-5.248 3.504-9.216 3.504-8.736 0-13.104-5.136-13.104-15.408V31c0-8.096 2.24-13.168 6.72-15.216 1.76-.832 3.888-1.248 6.384-1.248 3.648 0 6.608 1.008 8.88 3.024 2.304 1.984 3.456 4.864 3.456 8.64h-6.24c-.352-1.888-.976-3.312-1.872-4.272-.896-.96-2.304-1.44-4.224-1.44-2.24 0-3.904.704-4.992 2.112-.768.992-1.216 2.688-1.344 5.088-.064.768-.096 1.808-.096 3.12v2.976c0 3.68.512 6.192 1.536 7.536 1.056 1.344 2.688 2.016 4.896 2.016 2.24 0 3.776-.608 4.608-1.824.864-1.248 1.424-3.168 1.68-5.76zm27.284-4.848L228.746 49h-7.776l-8.064-12.912-4.656 6.24V49h-6.672V14.824h6.672v19.104l12.912-19.104h6.72l-10.896 16.08zM256.012 49h-12.096c-3.84 0-6.544-.656-8.112-1.968-1.536-1.344-2.304-3.696-2.304-7.056V14.824h22.512v5.952h-15.84v8.016h11.088l-.48 5.952h-10.608v4.752c0 1.344.304 2.272.912 2.784.608.512 1.712.768 3.312.768h11.616V49zm32.422 0h-7.728l-6.672-12.672h-4.8V49h-6.672V22.168c0-2.56.592-4.416 1.776-5.568 1.184-1.184 3.168-1.776 5.952-1.776h5.664c3.392 0 6.08 1.04 8.064 3.12 2.016 2.048 3.024 4.656 3.024 7.824 0 2.304-.608 4.304-1.824 6-1.184 1.664-2.656 2.816-4.416 3.456L288.434 49zm-12.912-18.24c1.408 0 2.56-.48 3.456-1.44.928-.992 1.392-2.208 1.392-3.648 0-1.472-.448-2.656-1.344-3.552-.864-.896-2.032-1.344-3.504-1.344h-3.312c-1.984 0-2.976 1.008-2.976 3.024v6.96h6.288z",
    fill: "#2B3C54"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLogo);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Logo, logout, login, signup, useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./components/Logo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["Logo"]; });

/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./components/Auth/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["signup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["useAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["AuthProvider"]; });




/***/ }),

/***/ "./config/firebase/client.js":
/*!***********************************!*\
  !*** ./config/firebase/client.js ***!
  \***********************************/
/*! exports provided: persistenceMode, firebaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistenceMode", function() { return persistenceMode; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebaseClient", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


const firebaseConfig = {
  apiKey: "AIzaSyA9IS8Q-AMOA7CeXfBKc-6vk4wS-EU85Io",
  authDomain: "clocker-jhds.firebaseapp.com",
  projectId: "clocker-jhds",
  storageBucket: "clocker-jhds.appspot.com",
  messagingSenderId: "55562366636",
  appId: "1:55562366636:web:4efe1ad0726af483133909",
  measurementId: "G-N144WMHWLL"
};
const app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app() : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
const persistenceMode = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (false ? undefined : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _router.default;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
});
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./utils/resolve-rewrites"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components */ "./components/index.js");

var _jsxFileName = "D:\\JHDS\\Projetos\\FullStack\\clocker\\pages\\login.js";







const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email('Email inválido').required('Preenchimento obrigatório'),
  password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required('Preenchimento obrigatório')
});
function Login() {
  const [auth, {
    login
  }] = Object(_components__WEBPACK_IMPORTED_MODULE_7__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    onSubmit: login,
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: ''
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    auth.user && router.push('/agenda');
  }, [auth.user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    p: 4,
    centerContent: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_7__["Logo"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      p: 4,
      mt: 8,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        children: "Crie sua agenda compartilhada"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
        id: "email",
        p: 4,
        isRequired: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["FormLabel"], {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          size: "lg",
          type: "email",
          value: values.email,
          onChange: handleChange,
          onBlur: handleBlur
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), touched.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
          textColor: "#e74c3c",
          children: errors.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
        id: "password",
        p: 4,
        isRequired: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["FormLabel"], {
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          size: "lg",
          type: "password",
          value: values.password,
          onChange: handleChange,
          onBlur: handleBlur
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
          textColor: "#e74c3c",
          children: errors.password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 32
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        p: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          size: "lg",
          colorScheme: "blue",
          width: "100%",
          onClick: handleSubmit,
          isLoading: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["isSubmitting"],
          children: "Entrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      children: "Ainda n\xE3o tem uma conta? Cadastre-se"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9maXJlYmFzZS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsIlJlYWN0IiwibG9nb3V0IiwiZmlyZWJhc2VDbGllbnQiLCJhdXRoIiwic2lnbk91dCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInNldFBlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VNb2RlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjdXJyZW50VXNlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsInRva2VuIiwiZ2V0SWRUb2tlbiIsImRhdGEiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0QXV0aCIsInVzZVN0YXRlIiwibG9hZGluZyIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiTG9nbyIsImxvZ28iLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfTUVBU1VSRU1FTlRfSUQiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsIkF1dGgiLCJQZXJzaXN0ZW5jZSIsIkxPQ0FMIiwidmFsaWRhdGlvblNjaGVtYSIsInl1cCIsInNoYXBlIiwicmVxdWlyZWQiLCJMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInZhbHVlcyIsImVycm9ycyIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwidXNlRm9ybWlrIiwib25TdWJtaXQiLCJpbml0aWFsVmFsdWVzIiwicHVzaCIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHNFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLDJGOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FB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QUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSwrRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL19uZXh0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGZpcmViYXNlQ2xpZW50LCBwZXJzaXN0ZW5jZU1vZGUgfSBmcm9tICcuLi8uLi9jb25maWcvZmlyZWJhc2UvY2xpZW50J1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5zaWduT3V0KClcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2V0UGVyc2lzdGVuY2UocGVyc2lzdGVuY2VNb2RlKVxyXG4gICAgXHJcbnRyeSB7XHJcbiAgICAgIGF3YWl0IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIHJldHVybiBmaXJlYmFzZUNsaWVudC5hdXRoKCkuY3VycmVudFVzZXJcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMT0dJTiBFUlJPUicsIGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZX0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZWJhc2VDbGllbnQuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKClcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogJy9hcGkvcHJvZmlsZScsXHJcbiAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NJR05VUCBFUlJPUicsIGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgICBcclxuICAgIHJldHVybiBbYXV0aCwgeyBsb2dpbiwgbG9nb3V0LCBzaWdudXAgfV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoIF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB1c2VyOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gZmlyZWJhc2VDbGllbnQuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgIHNldEF1dGgoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKVxyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1thdXRoLCBzZXRBdXRoXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gbG9nbyIsInZhciBfcGF0aCwgX3BhdGgyLCBfcGF0aDMsIF9wYXRoNDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0xvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjkwLFxuICAgIGhlaWdodDogODAsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk0zNy42MTkgMTMuODMzYTMwLjg3NyAzMC44NzcgMCAwMC0yLjI3NC0uMDg0VjkuMzMzYy44NjggMCAxLjczNS4wMzMgMi42LjA5OGwtLjMyNiA0LjQwMnptOC44NSAxLjk4OGEzMC45MzEgMzAuOTMxIDAgMDAtNC4zNS0xLjMybC45NjgtNC4zMWMxLjY5LjM3OSAzLjM1Ni44ODIgNC45NzIgMS41MWwtMS41OSA0LjEyem02LjA1IDMuMTM1YTMwLjk1MyAzMC45NTMgMCAwMC0xLjkzOC0xLjE5MmwyLjE3Ny0zLjg0MmMxLjUxLjg1NSAyLjk1NSAxLjgyIDQuMzI0IDIuODg4bC0yLjcxNiAzLjQ4NGEzMC45NTUgMzAuOTU1IDAgMDAtMS44NDYtMS4zMzR2LS4wMDR6bTguMSA3LjkwNWEzMC44NyAzMC44NyAwIDAwLTIuODgzLTMuNTE1bDMuMTk3LTMuMDQ3YTM2Ljg0NCAzNi44NDQgMCAwMTMuMjk5IDQuMDE4bC0zLjYxMyAyLjU0NHptMy4yODYgNS45N2MtLjI5LS43LS42MDUtMS4zODktLjk0NS0yLjA2NmwzLjk0NC0xLjk4OGEzNS4yMTYgMzUuMjE2IDAgMDExLjk4NyA0LjgwNWwtNC4xOTUgMS4zODNhMzAuOTg0IDMwLjk4NCAwIDAwLS43OS0yLjEzNHptMi4zNCAxMS4wNzJhMzAuODY4IDMwLjg2OCAwIDAwLS40NC00LjUyN2w0LjM1LS43NWEzNS41NCAzNS41NCAwIDAxLjUxMiA1LjE2NmwtNC40MTcuMTFoLS4wMDR6bS0uNTc4IDYuNzkyYy4xNDYtLjc1MS4yNjUtMS40OTcuMzU4LTIuMjUybDQuMzg1LjU0M2EzNS4xNDcgMzUuMTQ3IDAgMDEtMS4wMTUgNS4xbC00LjI1OC0xLjE3OWMuMjA0LS43MjguMzgtMS40NjYuNTMtMi4yMTJ6TTYxLjQ2MyA2MS4yYTMxLjIwMiAzMS4yMDIgMCAwMDIuMTQ2LTQuMDFsNC4wMzcgMS43ODhhMzUuNjQgMzUuNjQgMCAwMS0yLjQ1MSA0LjU4NGwtMy43MzItMi4zNjJ6bS00LjI1NyA1LjMyMWEyOC45MDQgMjguOTA0IDAgMDAxLjU0NS0xLjY3bDMuMzQ4IDIuODg1YTM1LjYzNSAzNS42MzUgMCAwMS0xLjc3MSAxLjkwN2wtMy4xMjItMy4xMjJ6XCIsXG4gICAgZmlsbDogXCIjNEU4NEQ1XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk0zNS4zNDUgMTMuNzVhMzAuOTE1IDMwLjkxNSAwIDAwLTI4LjU2IDQyLjc0MiAzMC45MTMgMzAuOTEzIDAgMDA1MC40MiAxMC4wM2wzLjEyMyAzLjEyMkEzNS4zMzYgMzUuMzM2IDAgMDEuMTcgNDEuMjAxIDM1LjMzMiAzNS4zMzIgMCAwMTM1LjM0NSA5LjMzM3Y0LjQxNnpcIixcbiAgICBmaWxsOiBcIiMyQjNDNTRcIlxuICB9KSksIF9wYXRoMyB8fCAoX3BhdGgzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGQ6IFwiTTMzLjEzNiAyMi41ODJhMi4yMDggMi4yMDggMCAwMTIuMjA5IDIuMjA4djIzLjAwOGwxNC4zNDQgOC4xOTZhMi4yMDggMi4yMDggMCAwMS0yLjE5IDMuODMzTDMyLjA0IDUwLjk5NWEyLjIwOCAyLjIwOCAwIDAxLTEuMTEzLTEuOTE3VjI0Ljc5YTIuMjA4IDIuMjA4IDAgMDEyLjIwOC0yLjIwOHpcIixcbiAgICBmaWxsOiBcIiM0RTg0RDVcIlxuICB9KSksIF9wYXRoNCB8fCAoX3BhdGg0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk05MS43NTUgNjguOTE3aDIuMDY0YzAgMS40NTEtLjM2MyAyLjU2Ni0xLjA4OCAzLjM0NC0uNzI2Ljc3OS0xLjc1IDEuMTY4LTMuMDcyIDEuMTY4LTIuOTEyIDAtNC4zNjgtMS43MTItNC4zNjgtNS4xMzZ2LS45NmMwLTIuNjk4Ljc0Ni00LjM4OSAyLjI0LTUuMDcyLjU4Ni0uMjc3IDEuMjk2LS40MTYgMi4xMjgtLjQxNiAxLjIxNiAwIDIuMjAyLjMzNiAyLjk2IDEuMDA4Ljc2OC42NjIgMS4xNTIgMS42MjIgMS4xNTIgMi44OGgtMi4wOGMtLjExOC0uNjI5LS4zMjYtMS4xMDQtLjYyNC0xLjQyNC0uMjk5LS4zMi0uNzY4LS40OC0xLjQwOC0uNDgtLjc0NyAwLTEuMzAyLjIzNS0xLjY2NC43MDQtLjI1Ni4zMzEtLjQwNi44OTYtLjQ0OCAxLjY5NmExMy4yMSAxMy4yMSAwIDAwLS4wMzIgMS4wNHYuOTkyYzAgMS4yMjcuMTcgMi4wNjQuNTEyIDIuNTEyLjM1Mi40NDguODk2LjY3MiAxLjYzMi42NzIuNzQ2IDAgMS4yNTgtLjIwMiAxLjUzNi0uNjA4LjI4OC0uNDE2LjQ3NC0xLjA1Ni41Ni0xLjkyem0xNS43OTggNC40MTZoLTIuMzJsLS42NC0xLjk2OGgtMy44MjRsLS42MjQgMS45NjhoLTIuMzJsMy42NDgtMTAuNDMyYy4xNi0uMzYyLjMzNi0uNjEzLjUyOC0uNzUyLjIwMy0uMTM4LjQ0OC0uMjA4LjczNi0uMjA4cy41MTguMDY0LjY4OC4xOTJjLjE4Mi4xMjguMzQyLjM4NC40OC43NjhsMy42NDggMTAuNDMyem0tMy40NzItMy44NGwtMS4zNDQtNC41MTItMS40MDggNC41MTJoMi43NTJ6bTE1LjI2IDMuODRoLTMuMzkyYy0xLjI4IDAtMi4yMDgtLjI0NS0yLjc4NC0uNzM2LS41NjYtLjUwMS0uODQ4LTEuMzEyLS44NDgtMi40MzJ2LTguMjI0aDIuMjI0djguMjI0YzAgLjQ0OC4xMDEuNzU4LjMwNC45MjguMjAyLjE3MS41Ny4yNTYgMS4xMDQuMjU2aDMuMzkydjEuOTg0em0xMi40NzYgMGgtNC4wMzJjLTEuMjggMC0yLjE4MS0uMjE4LTIuNzA0LS42NTYtLjUxMi0uNDQ4LS43NjgtMS4yMzItLjc2OC0yLjM1MnYtOC4zODRoNy41MDR2MS45ODRoLTUuMjh2Mi42NzJoMy42OTZsLS4xNiAxLjk4NGgtMy41MzZ2MS41ODRjMCAuNDQ4LjEwMi43NTguMzA0LjkyOC4yMDMuMTcxLjU3MS4yNTYgMS4xMDQuMjU2aDMuODcydjEuOTg0em0xNC4yNjQtMTEuMzkydjEwLjI0YzAgLjM1Mi0uMTA3LjY1Ni0uMzIuOTEyLS4yMTMuMjQ2LS40NjQuMzY4LS43NTIuMzY4LS43MzYgMC0xLjMzOS0uNDI2LTEuODA4LTEuMjhsLTMuOTM2LTYuMTZ2Ny4zMTJoLTIuMjI0VjYxLjk0MWgyLjE0NGw0LjY3MiA3LjQ1NnYtNy40NTZoMi4yMjR6bTE0LjA5OSA1LjY0OGwuMDE2IDEuMjMyYy0uMDQyLjc3OS0uMTM4IDEuNDM1LS4yODggMS45NjgtLjE0OS41MzQtLjQ0MiAxLjAxOS0uODggMS40NTYtLjcyNS43MjYtMS43ODEgMS4wODgtMy4xNjggMS4wODgtMS42MzIgMC0yLjc1Mi0uMjEzLTMuMzYtLjY0LS42MDgtLjQzNy0uOTEyLTEuMjIxLS45MTItMi4zNTJ2LTguNGg0LjQzMmMxLjI4IDAgMi4yODMuMzYzIDMuMDA4IDEuMDg4YTMuNTc4IDMuNTc4IDAgMDExLjA0IDIuMTQ0Yy4wNzUuNTk4LjExMiAxLjQwMy4xMTIgMi40MTZ6bS0yLjcwNCAzLjA1NmMuMjAzLS4yNDUuMzMxLS41ODEuMzg0LTEuMDA4LjA2NC0uNDM3LjA5Ni0xLjExNC4wOTYtMi4wMzIgMC0uOTE3LS4wMzItMS41NzgtLjA5Ni0xLjk4NC0uMDUzLS40MTYtLjE4MS0uNzQ2LS4zODQtLjk5Mi0uMzg0LS40NjktLjkzOC0uNzA0LTEuNjY0LS43MDRoLTJ2Ni4zMDRjMCAuNDI3LjE0NC43Mi40MzIuODguMjg4LjE2LjguMjQgMS41MzYuMjQuNzQ3IDAgMS4zMTItLjIzNCAxLjY5Ni0uNzA0em0xNi40OTkgMi42ODhoLTIuMzJsLS42NC0xLjk2OGgtMy44MjRsLS42MjQgMS45NjhoLTIuMzJsMy42NDgtMTAuNDMyYy4xNi0uMzYyLjMzNi0uNjEzLjUyOC0uNzUyLjIwMy0uMTM4LjQ0OC0uMjA4LjczNi0uMjA4cy41MTguMDY0LjY4OC4xOTJjLjE4Mi4xMjguMzQyLjM4NC40OC43NjhsMy42NDggMTAuNDMyem0tMy40NzItMy44NGwtMS4zNDQtNC41MTItMS40MDggNC41MTJoMi43NTJ6bTE2Ljg1OSAzLjg0aC0yLjU3NmwtMi4yMjQtNC4yMjRoLTEuNnY0LjIyNGgtMi4yMjRWNjQuMzljMC0uODUzLjE5OC0xLjQ3Mi41OTItMS44NTYuMzk1LS4zOTQgMS4wNTYtLjU5MiAxLjk4NC0uNTkyaDEuODg4YzEuMTMxIDAgMi4wMjcuMzQ3IDIuNjg4IDEuMDQuNjcyLjY4MyAxLjAwOCAxLjU1MiAxLjAwOCAyLjYwOCAwIC43NjgtLjIwMiAxLjQzNS0uNjA4IDItLjM5NC41NTUtLjg4NS45MzktMS40NzIgMS4xNTJsMi41NDQgNC41OTJ6bS00LjMwNC02LjA4Yy40NyAwIC44NTQtLjE2IDEuMTUyLS40OC4zMS0uMzMuNDY0LS43MzYuNDY0LTEuMjE2IDAtLjQ5LS4xNDktLjg4NS0uNDQ4LTEuMTg0LS4yODgtLjI5OC0uNjc3LS40NDgtMS4xNjgtLjQ0OGgtMS4xMDRjLS42NjEgMC0uOTkyLjMzNi0uOTkyIDEuMDA4djIuMzJoMi4wOTZ6bTI0LjUyNCAyLjhjMCAxLjA1Ni0uMjg4IDEuODY3LS44NjQgMi40MzItLjU2NS41NjYtMS4zNi44NDgtMi4zODQuODQ4aC0xLjUzNmMtMS4yNTkgMC0yLjE1NS0uMjE4LTIuNjg4LS42NTYtLjUyMy0uNDM3LS43ODQtMS4xOTQtLjc4NC0yLjI3MnYtOC40NjRoNC44MTZjMS4wODggMCAxLjkwNC4yNzIgMi40NDguODE2LjU1NS41NDQuODMyIDEuMzEyLjgzMiAyLjMwNCAwIC41NzYtLjE0OSAxLjA2Ny0uNDQ4IDEuNDcyLS4yODguNDA2LS42MDguNjk0LS45Ni44NjQgMS4wNDUuNDkxIDEuNTY4IDEuMzc2IDEuNTY4IDIuNjU2em0tMy42MTYtMy42NjRjLjgyMSAwIDEuMjMyLS40MSAxLjIzMi0xLjIzMiAwLS44MjEtLjQxMS0xLjIzMi0xLjIzMi0xLjIzMmgtMi40MTZ2Mi40NjRoMi40MTZ6bTEuMzkyIDMuNTUyYzAtLjUxMi0uMDkxLS44OTYtLjI3Mi0xLjE1Mi0uMTgxLS4yNjYtLjUwNy0uNC0uOTc2LS40aC0yLjU2djEuNzkyYzAgLjQzOC4xMDcuNzQyLjMyLjkxMi4yMjQuMTcxLjU4Ny4yNTYgMS4wODguMjU2aDEuMTUyYy44MzIgMCAxLjI0OC0uNDY5IDEuMjQ4LTEuNDA4em0xNC43MjMgMy4zOTJoLTMuMzkyYy0xLjI4IDAtMi4yMDgtLjI0NS0yLjc4NC0uNzM2LS41NjUtLjUwMS0uODQ4LTEuMzEyLS44NDgtMi40MzJ2LTguMjI0aDIuMjI0djguMjI0YzAgLjQ0OC4xMDEuNzU4LjMwNC45MjguMjAzLjE3MS41NzEuMjU2IDEuMTA0LjI1NmgzLjM5MnYxLjk4NHptMTMuMzI1LTYuMjI0di44NjRjMCAxLjkxLS4zNjMgMy4yOTYtMS4wODggNC4xNi0uNzE1Ljg2NC0xLjg2NyAxLjI5Ni0zLjQ1NiAxLjI5NnMtMi43NDEtLjQzMi0zLjQ1Ni0xLjI5NmMtLjcwNC0uODY0LTEuMDU2LTIuMjY2LTEuMDU2LTQuMjA4di0uODMyYzAtMS43Ny4zNTctMy4wODggMS4wNzItMy45NTIuNzI1LS44NjQgMS44NjctMS4yOTYgMy40MjQtMS4yOTYgMS41NjggMCAyLjcyLjQzOCAzLjQ1NiAxLjMxMi43MzYuODc1IDEuMTA0IDIuMTkyIDEuMTA0IDMuOTUyem0tMi4yMjQuODE2di0uNTkyYzAtMS4wMjQtLjEyOC0xLjg0LS4zODQtMi40NDgtLjI5OS0uNzA0LS45MzktMS4wNTYtMS45Mi0xLjA1Ni0uOTkyIDAtMS42MzcuMzUyLTEuOTM2IDEuMDU2LS4yNDUuNTc2LS4zNjggMS4zOTItLjM2OCAyLjQ0OHYuNTkyYzAgMS4zNzYuMTkyIDIuMzA0LjU3NiAyLjc4NC4xNDkuMjAzLjM2OC4zNzkuNjU2LjUyOC4yOTkuMTM5LjY1MS4yMDggMS4wNTYuMjA4LjQxNiAwIC43NjgtLjA2OSAxLjA1Ni0uMjA4LjI4OC0uMTM4LjUxMi0uMzA5LjY3Mi0uNTEyLjE2LS4yMDIuMjgzLS40NjkuMzY4LS44LjE0OS0uNTIyLjIyNC0xLjE4OS4yMjQtMnptMTMuMTI5Ljk5MmgyLjA2NGMwIDEuNDUxLS4zNjMgMi41NjYtMS4wODggMy4zNDQtLjcyNS43NzktMS43NDkgMS4xNjgtMy4wNzIgMS4xNjgtMi45MTIgMC00LjM2OC0xLjcxMi00LjM2OC01LjEzNnYtLjk2YzAtMi42OTguNzQ3LTQuMzg5IDIuMjQtNS4wNzIuNTg3LS4yNzcgMS4yOTYtLjQxNiAyLjEyOC0uNDE2IDEuMjE2IDAgMi4yMDMuMzM2IDIuOTYgMS4wMDguNzY4LjY2MiAxLjE1MiAxLjYyMiAxLjE1MiAyLjg4aC0yLjA4Yy0uMTE3LS42MjktLjMyNS0xLjEwNC0uNjI0LTEuNDI0LS4yOTktLjMyLS43NjgtLjQ4LTEuNDA4LS40OC0uNzQ3IDAtMS4zMDEuMjM1LTEuNjY0LjcwNC0uMjU2LjMzMS0uNDA1Ljg5Ni0uNDQ4IDEuNjk2YTEzLjM2IDEzLjM2IDAgMDAtLjAzMiAxLjA0di45OTJjMCAxLjIyNy4xNzEgMi4wNjQuNTEyIDIuNTEyLjM1Mi40NDguODk2LjY3MiAxLjYzMi42NzIuNzQ3IDAgMS4yNTktLjIwMiAxLjUzNi0uNjA4LjI4OC0uNDE2LjQ3NS0xLjA1Ni41Ni0xLjkyem0xMi4yOTUtMS42MTZsMy45MiA2LjAzMmgtMi41OTJsLTIuNjg4LTQuMzA0LTEuNTUyIDIuMDh2Mi4yMjRoLTIuMjI0VjYxLjk0MWgyLjIyNHY2LjM2OGw0LjMwNC02LjM2OGgyLjI0bC0zLjYzMiA1LjM2em0xNi4yMDggNi4wMzJoLTQuMDMyYy0xLjI4IDAtMi4xODEtLjIxOC0yLjcwNC0uNjU2LS41MTItLjQ0OC0uNzY4LTEuMjMyLS43NjgtMi4zNTJ2LTguMzg0aDcuNTA0djEuOTg0aC01LjI4djIuNjcyaDMuNjk2bC0uMTYgMS45ODRoLTMuNTM2djEuNTg0YzAgLjQ0OC4xMDIuNzU4LjMwNC45MjguMjAzLjE3MS41NzEuMjU2IDEuMTA0LjI1NmgzLjg3MnYxLjk4NHptMTQuMDA4IDBoLTIuNTc2bC0yLjIyNC00LjIyNGgtMS42djQuMjI0aC0yLjIyNFY2NC4zOWMwLS44NTMuMTk3LTEuNDcyLjU5Mi0xLjg1Ni4zOTQtLjM5NCAxLjA1Ni0uNTkyIDEuOTg0LS41OTJoMS44ODhjMS4xMyAwIDIuMDI2LjM0NyAyLjY4OCAxLjA0LjY3Mi42ODMgMS4wMDggMS41NTIgMS4wMDggMi42MDggMCAuNzY4LS4yMDMgMS40MzUtLjYwOCAyLS4zOTUuNTU1LS44ODYuOTM5LTEuNDcyIDEuMTUybDIuNTQ0IDQuNTkyem0tNC4zMDQtNi4wOGMuNDY5IDAgLjg1My0uMTYgMS4xNTItLjQ4LjMwOS0uMzMuNDY0LS43MzYuNDY0LTEuMjE2IDAtLjQ5LS4xNS0uODg1LS40NDgtMS4xODQtLjI4OC0uMjk4LS42NzgtLjQ0OC0xLjE2OC0uNDQ4aC0xLjEwNGMtLjY2MiAwLS45OTIuMzM2LS45OTIgMS4wMDh2Mi4zMmgyLjA5NnpNMTAzLjI2NCAzNS43NTJoNi4xOTJjMCA0LjM1Mi0xLjA4OCA3LjY5Ni0zLjI2NCAxMC4wMzItMi4xNzYgMi4zMzYtNS4yNDggMy41MDQtOS4yMTYgMy41MDQtOC43MzYgMC0xMy4xMDQtNS4xMzYtMTMuMTA0LTE1LjQwOFYzMWMwLTguMDk2IDIuMjQtMTMuMTY4IDYuNzItMTUuMjE2IDEuNzYtLjgzMiAzLjg4OC0xLjI0OCA2LjM4NC0xLjI0OCAzLjY0OCAwIDYuNjA4IDEuMDA4IDguODggMy4wMjQgMi4zMDQgMS45ODQgMy40NTYgNC44NjQgMy40NTYgOC42NGgtNi4yNGMtLjM1Mi0xLjg4OC0uOTc2LTMuMzEyLTEuODcyLTQuMjcyLS44OTYtLjk2LTIuMzA0LTEuNDQtNC4yMjQtMS40NC0yLjI0IDAtMy45MDQuNzA0LTQuOTkyIDIuMTEyLS43NjguOTkyLTEuMjE2IDIuNjg4LTEuMzQ0IDUuMDg4LS4wNjQuNzY4LS4wOTYgMS44MDgtLjA5NiAzLjEydjIuOTc2YzAgMy42OC41MTIgNi4xOTIgMS41MzYgNy41MzYgMS4wNTYgMS4zNDQgMi42ODggMi4wMTYgNC44OTYgMi4wMTYgMi4yNCAwIDMuNzc2LS42MDggNC42MDgtMS44MjQuODY0LTEuMjQ4IDEuNDI0LTMuMTY4IDEuNjgtNS43NnpNMTM2LjIxMiA0OWgtMTAuMTc2Yy0zLjg0IDAtNi42MjQtLjczNi04LjM1Mi0yLjIwOC0xLjY5Ni0xLjUwNC0yLjU0NC0zLjkzNi0yLjU0NC03LjI5NlYxNC44MjRoNi42NzJ2MjQuNjcyYzAgMS4zNDQuMzA0IDIuMjcyLjkxMiAyLjc4NC42MDguNTEyIDEuNzEyLjc2OCAzLjMxMi43NjhoMTAuMTc2VjQ5em0zMC4zNzUtMTguNjcydjIuNTkyYzAgNS43MjgtMS4wODggOS44ODgtMy4yNjQgMTIuNDgtMi4xNDQgMi41OTItNS42IDMuODg4LTEwLjM2OCAzLjg4OC00Ljc2OCAwLTguMjI0LTEuMjk2LTEwLjM2OC0zLjg4OC0yLjExMi0yLjU5Mi0zLjE2OC02LjgtMy4xNjgtMTIuNjI0VjMwLjI4YzAtNS4zMTIgMS4wNzItOS4yNjQgMy4yMTYtMTEuODU2IDIuMTc2LTIuNTkyIDUuNi0zLjg4OCAxMC4yNzItMy44ODggNC43MDQgMCA4LjE2IDEuMzEyIDEwLjM2OCAzLjkzNiAyLjIwOCAyLjYyNCAzLjMxMiA2LjU3NiAzLjMxMiAxMS44NTZ6bS02LjY3MiAyLjQ0OFYzMWMwLTMuMDcyLS4zODQtNS41Mi0xLjE1Mi03LjM0NC0uODk2LTIuMTEyLTIuODE2LTMuMTY4LTUuNzYtMy4xNjgtMi45NzYgMC00LjkxMiAxLjA1Ni01LjgwOCAzLjE2OC0uNzM2IDEuNzI4LTEuMTA0IDQuMTc2LTEuMTA0IDcuMzQ0djEuNzc2YzAgNC4xMjguNTc2IDYuOTEyIDEuNzI4IDguMzUyLjQ0OC42MDggMS4xMDQgMS4xMzYgMS45NjggMS41ODQuODk2LjQxNiAxLjk1Mi42MjQgMy4xNjguNjI0IDEuMjQ4IDAgMi4zMDQtLjIwOCAzLjE2OC0uNjI0Ljg2NC0uNDE2IDEuNTM2LS45MjggMi4wMTYtMS41MzZzLjg0OC0xLjQwOCAxLjEwNC0yLjRjLjQ0OC0xLjU2OC42NzItMy41NjguNjcyLTZ6bTI5Ljc4NyAyLjk3Nmg2LjE5MmMwIDQuMzUyLTEuMDg4IDcuNjk2LTMuMjY0IDEwLjAzMi0yLjE3NiAyLjMzNi01LjI0OCAzLjUwNC05LjIxNiAzLjUwNC04LjczNiAwLTEzLjEwNC01LjEzNi0xMy4xMDQtMTUuNDA4VjMxYzAtOC4wOTYgMi4yNC0xMy4xNjggNi43Mi0xNS4yMTYgMS43Ni0uODMyIDMuODg4LTEuMjQ4IDYuMzg0LTEuMjQ4IDMuNjQ4IDAgNi42MDggMS4wMDggOC44OCAzLjAyNCAyLjMwNCAxLjk4NCAzLjQ1NiA0Ljg2NCAzLjQ1NiA4LjY0aC02LjI0Yy0uMzUyLTEuODg4LS45NzYtMy4zMTItMS44NzItNC4yNzItLjg5Ni0uOTYtMi4zMDQtMS40NC00LjIyNC0xLjQ0LTIuMjQgMC0zLjkwNC43MDQtNC45OTIgMi4xMTItLjc2OC45OTItMS4yMTYgMi42ODgtMS4zNDQgNS4wODgtLjA2NC43NjgtLjA5NiAxLjgwOC0uMDk2IDMuMTJ2Mi45NzZjMCAzLjY4LjUxMiA2LjE5MiAxLjUzNiA3LjUzNiAxLjA1NiAxLjM0NCAyLjY4OCAyLjAxNiA0Ljg5NiAyLjAxNiAyLjI0IDAgMy43NzYtLjYwOCA0LjYwOC0xLjgyNC44NjQtMS4yNDggMS40MjQtMy4xNjggMS42OC01Ljc2em0yNy4yODQtNC44NDhMMjI4Ljc0NiA0OWgtNy43NzZsLTguMDY0LTEyLjkxMi00LjY1NiA2LjI0VjQ5aC02LjY3MlYxNC44MjRoNi42NzJ2MTkuMTA0bDEyLjkxMi0xOS4xMDRoNi43MmwtMTAuODk2IDE2LjA4ek0yNTYuMDEyIDQ5aC0xMi4wOTZjLTMuODQgMC02LjU0NC0uNjU2LTguMTEyLTEuOTY4LTEuNTM2LTEuMzQ0LTIuMzA0LTMuNjk2LTIuMzA0LTcuMDU2VjE0LjgyNGgyMi41MTJ2NS45NTJoLTE1Ljg0djguMDE2aDExLjA4OGwtLjQ4IDUuOTUyaC0xMC42MDh2NC43NTJjMCAxLjM0NC4zMDQgMi4yNzIuOTEyIDIuNzg0LjYwOC41MTIgMS43MTIuNzY4IDMuMzEyLjc2OGgxMS42MTZWNDl6bTMyLjQyMiAwaC03LjcyOGwtNi42NzItMTIuNjcyaC00LjhWNDloLTYuNjcyVjIyLjE2OGMwLTIuNTYuNTkyLTQuNDE2IDEuNzc2LTUuNTY4IDEuMTg0LTEuMTg0IDMuMTY4LTEuNzc2IDUuOTUyLTEuNzc2aDUuNjY0YzMuMzkyIDAgNi4wOCAxLjA0IDguMDY0IDMuMTIgMi4wMTYgMi4wNDggMy4wMjQgNC42NTYgMy4wMjQgNy44MjQgMCAyLjMwNC0uNjA4IDQuMzA0LTEuODI0IDYtMS4xODQgMS42NjQtMi42NTYgMi44MTYtNC40MTYgMy40NTZMMjg4LjQzNCA0OXptLTEyLjkxMi0xOC4yNGMxLjQwOCAwIDIuNTYtLjQ4IDMuNDU2LTEuNDQuOTI4LS45OTIgMS4zOTItMi4yMDggMS4zOTItMy42NDggMC0xLjQ3Mi0uNDQ4LTIuNjU2LTEuMzQ0LTMuNTUyLS44NjQtLjg5Ni0yLjAzMi0xLjM0NC0zLjUwNC0xLjM0NGgtMy4zMTJjLTEuOTg0IDAtMi45NzYgMS4wMDgtMi45NzYgMy4wMjR2Ni45Nmg2LjI4OHpcIixcbiAgICBmaWxsOiBcIiMyQjNDNTRcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMb2dvOyIsImV4cG9ydCAqIGZyb20gJy4vTG9nbydcclxuZXhwb3J0ICogZnJvbSAnLi9BdXRoJyIsImltcG9ydCBmaXJlYmFzZUNsaWVudCBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxyXG4gICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSF9ET01BSU4sXHJcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcclxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEXHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IGZpcmViYXNlQ2xpZW50LmFwcHMubGVuZ3RoIFxyXG4gICAgPyBmaXJlYmFzZUNsaWVudC5hcHAoKSBcclxuICAgIDogZmlyZWJhc2VDbGllbnQuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcclxuXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW5jZU1vZGUgPSBmaXJlYmFzZUNsaWVudC5hdXRoLkF1dGguUGVyc2lzdGVuY2UuTE9DQUxcclxuXHJcbmV4cG9ydCB7IGZpcmViYXNlQ2xpZW50IH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgIHNjcm9sbCA9IGZhbHNlXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGxldCBjaGlsZDogYW55XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHRyeSB7XG4gICAgICBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICB9XG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykpIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlcyBhcyBhbnlcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZFxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgOyhkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG1zKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG1zKVxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICByb3V0ZUZpbGVzUHJvbWlzZSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgdHlwZSB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyIH1cblxuZXhwb3J0IHR5cGUgeyBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG4gICdkb21haW5Mb2NhbGVzJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dIGFzIGNvbnN0XG5leHBvcnQgdHlwZSBSb3V0ZXJFdmVudCA9IHR5cGVvZiByb3V0ZXJFdmVudHNbbnVtYmVyXVxuXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBSb3V0ZXJFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZXInXG5pbXBvcnQgdHlwZSB7IERvbWFpbkxvY2FsZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgbm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVbXVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKVxuICAgIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG4gIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuXG4gIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKVxuICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoXG4gICAgPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpXG4gICAgOiB1cmxBc1N0cmluZ1xuXG4gIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/JylcblxuICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYFxuICAgIClcbiAgICBjb25zdCBub3JtYWxpemVkVXJsID0gbm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90bylcbiAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmxcbiAgfVxuXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKFxuICAgICAgdXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICdodHRwOi8vbidcbiAgICApXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXI8Um91dGVyRXZlbnQ+XG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZVtdXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXI8Um91dGVyRXZlbnQ+ID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlW11cbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgIChzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwKSB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0geyBsb2NhbGUgfVxuICAgICAgICA7KG9wdGlvbnMgYXMgYW55KS5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhcyAhPT0gcGF0aG5hbWVcblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID1cbiAgICAgIHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faCB8fCAob3B0aW9ucyBhcyBhbnkpLl9zaG91bGRSZXNvbHZlSHJlZlxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKFxuICAgICAgIShvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiZcbiAgICAgICFsb2NhbGVDaGFuZ2VcbiAgICApIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgOyhvcHRpb25zIGFzIGFueSkuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUpXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUpXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwgPz8gIWlzVmFsaWRTaGFsbG93Um91dGVcbiAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8geyB4OiAwLCB5OiAwIH0gOiBudWxsXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgPz8gcmVzZXRTY3JvbGxcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcblxyXG5pbXBvcnQgeyBcclxuICBDb250YWluZXIsXHJcbiAgQm94LFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBUZXh0LFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1MYWJlbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBpc1N1Ym1pdHRpbmdcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgTG9nbywgdXNlQXV0aCB9IGZyb20gJy4vLi4vY29tcG9uZW50cydcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoJ0VtYWlsIGludsOhbGlkbycpLnJlcXVpcmVkKCdQcmVlbmNoaW1lbnRvIG9icmlnYXTDs3JpbycpLFxyXG4gIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1ByZWVuY2hpbWVudG8gb2JyaWdhdMOzcmlvJyksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbYXV0aCwgeyBsb2dpbiB9XSA9IHVzZUF1dGgoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgXHJcbiAgY29uc3QgeyBcclxuICAgIHZhbHVlcyxcclxuICAgIGVycm9ycyxcclxuICAgIHRvdWNoZWQsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICBoYW5kbGVCbHVyLFxyXG4gICAgaGFuZGxlU3VibWl0XHJcbiAgfSA9IHVzZUZvcm1payh7XHJcbiAgICBvblN1Ym1pdDogbG9naW4sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF1dGgudXNlciAmJiByb3V0ZXIucHVzaCgnL2FnZW5kYScpXHJcbiAgfSwgW2F1dGgudXNlcl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHA9ezR9IGNlbnRlckNvbnRlbnQ+XHJcbiAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDxCb3ggcD17NH0gbXQ9ezh9PlxyXG4gICAgICAgIDxUZXh0PkNyaWUgc3VhIGFnZW5kYSBjb21wYXJ0aWxoYWRhPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiIHA9ezR9IGlzUmVxdWlyZWQ+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxnXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVCbHVyfSAvPlxyXG4gICAgICAgICAge3RvdWNoZWQuZW1haWwgJiYgPEZvcm1IZWxwZXJUZXh0IHRleHRDb2xvcj1cIiNlNzRjM2NcIj57ZXJyb3JzLmVtYWlsfTwvRm9ybUhlbHBlclRleHQ+fVxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBpZD1cInBhc3N3b3JkXCIgcD17NH0gaXNSZXF1aXJlZD5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+U2VuaGE8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCBzaXplPVwibGdcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZUJsdXJ9IC8+XHJcbiAgICAgICAgICB7dG91Y2hlZC5wYXNzd29yZCAmJiA8Rm9ybUhlbHBlclRleHQgdGV4dENvbG9yPVwiI2U3NGMzY1wiPntlcnJvcnMucGFzc3dvcmR9PC9Gb3JtSGVscGVyVGV4dD59XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgPEJveCBwPXs0fT5cclxuICAgICAgICAgIDxCdXR0b24gIHNpemU9e1wibGdcIn0gY29sb3JTY2hlbWU9e1wiYmx1ZVwifSB3aWR0aD1cIjEwMCVcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfT5FbnRyYXI8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+QWluZGEgbsOjbyB0ZW0gdW1hIGNvbnRhPyBDYWRhc3RyZS1zZTwvTGluaz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9