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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components */ "./components/index.js");

var _jsxFileName = "D:\\JHDS\\Projetos\\FullStack\\clocker\\pages\\index.js";




function Home() {
  const [auth] = Object(_components__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!auth.loading) {
      auth.user ? router.push('/agenda') : router.push('/login');
    }
  }, [auth.user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    p: 4,
    centerContent: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UvY2xpZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJSZWFjdCIsImxvZ291dCIsImZpcmViYXNlQ2xpZW50IiwiYXV0aCIsInNpZ25PdXQiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlTW9kZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3VycmVudFVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzaWdudXAiLCJ1c2VybmFtZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJ0b2tlbiIsImdldElkVG9rZW4iLCJkYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEF1dGgiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIkxvZ28iLCJsb2dvIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJBdXRoIiwiUGVyc2lzdGVuY2UiLCJMT0NBTCIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7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R1AsbURBQWMsQ0FBQ0MsSUFBZixDQUFvQmlELElBQXBCLENBQXlCQyxXQUF6QixDQUFxQ0MsS0FBN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJQO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixRQUFNLENBQUNwRCxJQUFELElBQVN1QiwyREFBTyxFQUF0QjtBQUNBLFFBQU04QixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUF4Qix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUM5QixJQUFJLENBQUM2QixPQUFWLEVBQW1CO0FBQ2pCN0IsVUFBSSxDQUFDZSxJQUFMLEdBQ0lzQyxNQUFNLENBQUNFLElBQVAsQ0FBWSxTQUFaLENBREosR0FFSUYsTUFBTSxDQUFDRSxJQUFQLENBQVksUUFBWixDQUZKO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ3ZELElBQUksQ0FBQ2UsSUFBTixDQU5NLENBQVQ7QUFRQSxzQkFDRSxxRUFBQywwREFBRDtBQUFXLEtBQUMsRUFBRSxDQUFkO0FBQWlCLGlCQUFhLE1BQTlCO0FBQUEsMkJBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7O0FDdkJELDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvX25leHQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGZpcmViYXNlQ2xpZW50LCBwZXJzaXN0ZW5jZU1vZGUgfSBmcm9tICcuLi8uLi9jb25maWcvZmlyZWJhc2UvY2xpZW50J1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5zaWduT3V0KClcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2V0UGVyc2lzdGVuY2UocGVyc2lzdGVuY2VNb2RlKVxyXG4gICAgXHJcbnRyeSB7XHJcbiAgICAgIGF3YWl0IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIHJldHVybiBmaXJlYmFzZUNsaWVudC5hdXRoKCkuY3VycmVudFVzZXJcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMT0dJTiBFUlJPUicsIGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZX0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmlyZWJhc2VDbGllbnQuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKClcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIHVybDogJy9hcGkvcHJvZmlsZScsXHJcbiAgICAgICAgICBkYXRhOiB7IHVzZXJuYW1lIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NJR05VUCBFUlJPUicsIGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgICBcclxuICAgIHJldHVybiBbYXV0aCwgeyBsb2dpbiwgbG9nb3V0LCBzaWdudXAgfV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoIF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB1c2VyOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gZmlyZWJhc2VDbGllbnQuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgIHNldEF1dGgoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKVxyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1thdXRoLCBzZXRBdXRoXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gbG9nbyIsInZhciBfcGF0aCwgX3BhdGgyLCBfcGF0aDMsIF9wYXRoNDtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0xvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMjkwLFxuICAgIGhlaWdodDogODAsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk0zNy42MTkgMTMuODMzYTMwLjg3NyAzMC44NzcgMCAwMC0yLjI3NC0uMDg0VjkuMzMzYy44NjggMCAxLjczNS4wMzMgMi42LjA5OGwtLjMyNiA0LjQwMnptOC44NSAxLjk4OGEzMC45MzEgMzAuOTMxIDAgMDAtNC4zNS0xLjMybC45NjgtNC4zMWMxLjY5LjM3OSAzLjM1Ni44ODIgNC45NzIgMS41MWwtMS41OSA0LjEyem02LjA1IDMuMTM1YTMwLjk1MyAzMC45NTMgMCAwMC0xLjkzOC0xLjE5MmwyLjE3Ny0zLjg0MmMxLjUxLjg1NSAyLjk1NSAxLjgyIDQuMzI0IDIuODg4bC0yLjcxNiAzLjQ4NGEzMC45NTUgMzAuOTU1IDAgMDAtMS44NDYtMS4zMzR2LS4wMDR6bTguMSA3LjkwNWEzMC44NyAzMC44NyAwIDAwLTIuODgzLTMuNTE1bDMuMTk3LTMuMDQ3YTM2Ljg0NCAzNi44NDQgMCAwMTMuMjk5IDQuMDE4bC0zLjYxMyAyLjU0NHptMy4yODYgNS45N2MtLjI5LS43LS42MDUtMS4zODktLjk0NS0yLjA2NmwzLjk0NC0xLjk4OGEzNS4yMTYgMzUuMjE2IDAgMDExLjk4NyA0LjgwNWwtNC4xOTUgMS4zODNhMzAuOTg0IDMwLjk4NCAwIDAwLS43OS0yLjEzNHptMi4zNCAxMS4wNzJhMzAuODY4IDMwLjg2OCAwIDAwLS40NC00LjUyN2w0LjM1LS43NWEzNS41NCAzNS41NCAwIDAxLjUxMiA1LjE2NmwtNC40MTcuMTFoLS4wMDR6bS0uNTc4IDYuNzkyYy4xNDYtLjc1MS4yNjUtMS40OTcuMzU4LTIuMjUybDQuMzg1LjU0M2EzNS4xNDcgMzUuMTQ3IDAgMDEtMS4wMTUgNS4xbC00LjI1OC0xLjE3OWMuMjA0LS43MjguMzgtMS40NjYuNTMtMi4yMTJ6TTYxLjQ2MyA2MS4yYTMxLjIwMiAzMS4yMDIgMCAwMDIuMTQ2LTQuMDFsNC4wMzcgMS43ODhhMzUuNjQgMzUuNjQgMCAwMS0yLjQ1MSA0LjU4NGwtMy43MzItMi4zNjJ6bS00LjI1NyA1LjMyMWEyOC45MDQgMjguOTA0IDAgMDAxLjU0NS0xLjY3bDMuMzQ4IDIuODg1YTM1LjYzNSAzNS42MzUgMCAwMS0xLjc3MSAxLjkwN2wtMy4xMjItMy4xMjJ6XCIsXG4gICAgZmlsbDogXCIjNEU4NEQ1XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk0zNS4zNDUgMTMuNzVhMzAuOTE1IDMwLjkxNSAwIDAwLTI4LjU2IDQyLjc0MiAzMC45MTMgMzAuOTEzIDAgMDA1MC40MiAxMC4wM2wzLjEyMyAzLjEyMkEzNS4zMzYgMzUuMzM2IDAgMDEuMTcgNDEuMjAxIDM1LjMzMiAzNS4zMzIgMCAwMTM1LjM0NSA5LjMzM3Y0LjQxNnpcIixcbiAgICBmaWxsOiBcIiMyQjNDNTRcIlxuICB9KSksIF9wYXRoMyB8fCAoX3BhdGgzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGQ6IFwiTTMzLjEzNiAyMi41ODJhMi4yMDggMi4yMDggMCAwMTIuMjA5IDIuMjA4djIzLjAwOGwxNC4zNDQgOC4xOTZhMi4yMDggMi4yMDggMCAwMS0yLjE5IDMuODMzTDMyLjA0IDUwLjk5NWEyLjIwOCAyLjIwOCAwIDAxLTEuMTEzLTEuOTE3VjI0Ljc5YTIuMjA4IDIuMjA4IDAgMDEyLjIwOC0yLjIwOHpcIixcbiAgICBmaWxsOiBcIiM0RTg0RDVcIlxuICB9KSksIF9wYXRoNCB8fCAoX3BhdGg0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk05MS43NTUgNjguOTE3aDIuMDY0YzAgMS40NTEtLjM2MyAyLjU2Ni0xLjA4OCAzLjM0NC0uNzI2Ljc3OS0xLjc1IDEuMTY4LTMuMDcyIDEuMTY4LTIuOTEyIDAtNC4zNjgtMS43MTItNC4zNjgtNS4xMzZ2LS45NmMwLTIuNjk4Ljc0Ni00LjM4OSAyLjI0LTUuMDcyLjU4Ni0uMjc3IDEuMjk2LS40MTYgMi4xMjgtLjQxNiAxLjIxNiAwIDIuMjAyLjMzNiAyLjk2IDEuMDA4Ljc2OC42NjIgMS4xNTIgMS42MjIgMS4xNTIgMi44OGgtMi4wOGMtLjExOC0uNjI5LS4zMjYtMS4xMDQtLjYyNC0xLjQyNC0uMjk5LS4zMi0uNzY4LS40OC0xLjQwOC0uNDgtLjc0NyAwLTEuMzAyLjIzNS0xLjY2NC43MDQtLjI1Ni4zMzEtLjQwNi44OTYtLjQ0OCAxLjY5NmExMy4yMSAxMy4yMSAwIDAwLS4wMzIgMS4wNHYuOTkyYzAgMS4yMjcuMTcgMi4wNjQuNTEyIDIuNTEyLjM1Mi40NDguODk2LjY3MiAxLjYzMi42NzIuNzQ2IDAgMS4yNTgtLjIwMiAxLjUzNi0uNjA4LjI4OC0uNDE2LjQ3NC0xLjA1Ni41Ni0xLjkyem0xNS43OTggNC40MTZoLTIuMzJsLS42NC0xLjk2OGgtMy44MjRsLS42MjQgMS45NjhoLTIuMzJsMy42NDgtMTAuNDMyYy4xNi0uMzYyLjMzNi0uNjEzLjUyOC0uNzUyLjIwMy0uMTM4LjQ0OC0uMjA4LjczNi0uMjA4cy41MTguMDY0LjY4OC4xOTJjLjE4Mi4xMjguMzQyLjM4NC40OC43NjhsMy42NDggMTAuNDMyem0tMy40NzItMy44NGwtMS4zNDQtNC41MTItMS40MDggNC41MTJoMi43NTJ6bTE1LjI2IDMuODRoLTMuMzkyYy0xLjI4IDAtMi4yMDgtLjI0NS0yLjc4NC0uNzM2LS41NjYtLjUwMS0uODQ4LTEuMzEyLS44NDgtMi40MzJ2LTguMjI0aDIuMjI0djguMjI0YzAgLjQ0OC4xMDEuNzU4LjMwNC45MjguMjAyLjE3MS41Ny4yNTYgMS4xMDQuMjU2aDMuMzkydjEuOTg0em0xMi40NzYgMGgtNC4wMzJjLTEuMjggMC0yLjE4MS0uMjE4LTIuNzA0LS42NTYtLjUxMi0uNDQ4LS43NjgtMS4yMzItLjc2OC0yLjM1MnYtOC4zODRoNy41MDR2MS45ODRoLTUuMjh2Mi42NzJoMy42OTZsLS4xNiAxLjk4NGgtMy41MzZ2MS41ODRjMCAuNDQ4LjEwMi43NTguMzA0LjkyOC4yMDMuMTcxLjU3MS4yNTYgMS4xMDQuMjU2aDMuODcydjEuOTg0em0xNC4yNjQtMTEuMzkydjEwLjI0YzAgLjM1Mi0uMTA3LjY1Ni0uMzIuOTEyLS4yMTMuMjQ2LS40NjQuMzY4LS43NTIuMzY4LS43MzYgMC0xLjMzOS0uNDI2LTEuODA4LTEuMjhsLTMuOTM2LTYuMTZ2Ny4zMTJoLTIuMjI0VjYxLjk0MWgyLjE0NGw0LjY3MiA3LjQ1NnYtNy40NTZoMi4yMjR6bTE0LjA5OSA1LjY0OGwuMDE2IDEuMjMyYy0uMDQyLjc3OS0uMTM4IDEuNDM1LS4yODggMS45NjgtLjE0OS41MzQtLjQ0MiAxLjAxOS0uODggMS40NTYtLjcyNS43MjYtMS43ODEgMS4wODgtMy4xNjggMS4wODgtMS42MzIgMC0yLjc1Mi0uMjEzLTMuMzYtLjY0LS42MDgtLjQzNy0uOTEyLTEuMjIxLS45MTItMi4zNTJ2LTguNGg0LjQzMmMxLjI4IDAgMi4yODMuMzYzIDMuMDA4IDEuMDg4YTMuNTc4IDMuNTc4IDAgMDExLjA0IDIuMTQ0Yy4wNzUuNTk4LjExMiAxLjQwMy4xMTIgMi40MTZ6bS0yLjcwNCAzLjA1NmMuMjAzLS4yNDUuMzMxLS41ODEuMzg0LTEuMDA4LjA2NC0uNDM3LjA5Ni0xLjExNC4wOTYtMi4wMzIgMC0uOTE3LS4wMzItMS41NzgtLjA5Ni0xLjk4NC0uMDUzLS40MTYtLjE4MS0uNzQ2LS4zODQtLjk5Mi0uMzg0LS40NjktLjkzOC0uNzA0LTEuNjY0LS43MDRoLTJ2Ni4zMDRjMCAuNDI3LjE0NC43Mi40MzIuODguMjg4LjE2LjguMjQgMS41MzYuMjQuNzQ3IDAgMS4zMTItLjIzNCAxLjY5Ni0uNzA0em0xNi40OTkgMi42ODhoLTIuMzJsLS42NC0xLjk2OGgtMy44MjRsLS42MjQgMS45NjhoLTIuMzJsMy42NDgtMTAuNDMyYy4xNi0uMzYyLjMzNi0uNjEzLjUyOC0uNzUyLjIwMy0uMTM4LjQ0OC0uMjA4LjczNi0uMjA4cy41MTguMDY0LjY4OC4xOTJjLjE4Mi4xMjguMzQyLjM4NC40OC43NjhsMy42NDggMTAuNDMyem0tMy40NzItMy44NGwtMS4zNDQtNC41MTItMS40MDggNC41MTJoMi43NTJ6bTE2Ljg1OSAzLjg0aC0yLjU3NmwtMi4yMjQtNC4yMjRoLTEuNnY0LjIyNGgtMi4yMjRWNjQuMzljMC0uODUzLjE5OC0xLjQ3Mi41OTItMS44NTYuMzk1LS4zOTQgMS4wNTYtLjU5MiAxLjk4NC0uNTkyaDEuODg4YzEuMTMxIDAgMi4wMjcuMzQ3IDIuNjg4IDEuMDQuNjcyLjY4MyAxLjAwOCAxLjU1MiAxLjAwOCAyLjYwOCAwIC43NjgtLjIwMiAxLjQzNS0uNjA4IDItLjM5NC41NTUtLjg4NS45MzktMS40NzIgMS4xNTJsMi41NDQgNC41OTJ6bS00LjMwNC02LjA4Yy40NyAwIC44NTQtLjE2IDEuMTUyLS40OC4zMS0uMzMuNDY0LS43MzYuNDY0LTEuMjE2IDAtLjQ5LS4xNDktLjg4NS0uNDQ4LTEuMTg0LS4yODgtLjI5OC0uNjc3LS40NDgtMS4xNjgtLjQ0OGgtMS4xMDRjLS42NjEgMC0uOTkyLjMzNi0uOTkyIDEuMDA4djIuMzJoMi4wOTZ6bTI0LjUyNCAyLjhjMCAxLjA1Ni0uMjg4IDEuODY3LS44NjQgMi40MzItLjU2NS41NjYtMS4zNi44NDgtMi4zODQuODQ4aC0xLjUzNmMtMS4yNTkgMC0yLjE1NS0uMjE4LTIuNjg4LS42NTYtLjUyMy0uNDM3LS43ODQtMS4xOTQtLjc4NC0yLjI3MnYtOC40NjRoNC44MTZjMS4wODggMCAxLjkwNC4yNzIgMi40NDguODE2LjU1NS41NDQuODMyIDEuMzEyLjgzMiAyLjMwNCAwIC41NzYtLjE0OSAxLjA2Ny0uNDQ4IDEuNDcyLS4yODguNDA2LS42MDguNjk0LS45Ni44NjQgMS4wNDUuNDkxIDEuNTY4IDEuMzc2IDEuNTY4IDIuNjU2em0tMy42MTYtMy42NjRjLjgyMSAwIDEuMjMyLS40MSAxLjIzMi0xLjIzMiAwLS44MjEtLjQxMS0xLjIzMi0xLjIzMi0xLjIzMmgtMi40MTZ2Mi40NjRoMi40MTZ6bTEuMzkyIDMuNTUyYzAtLjUxMi0uMDkxLS44OTYtLjI3Mi0xLjE1Mi0uMTgxLS4yNjYtLjUwNy0uNC0uOTc2LS40aC0yLjU2djEuNzkyYzAgLjQzOC4xMDcuNzQyLjMyLjkxMi4yMjQuMTcxLjU4Ny4yNTYgMS4wODguMjU2aDEuMTUyYy44MzIgMCAxLjI0OC0uNDY5IDEuMjQ4LTEuNDA4em0xNC43MjMgMy4zOTJoLTMuMzkyYy0xLjI4IDAtMi4yMDgtLjI0NS0yLjc4NC0uNzM2LS41NjUtLjUwMS0uODQ4LTEuMzEyLS44NDgtMi40MzJ2LTguMjI0aDIuMjI0djguMjI0YzAgLjQ0OC4xMDEuNzU4LjMwNC45MjguMjAzLjE3MS41NzEuMjU2IDEuMTA0LjI1NmgzLjM5MnYxLjk4NHptMTMuMzI1LTYuMjI0di44NjRjMCAxLjkxLS4zNjMgMy4yOTYtMS4wODggNC4xNi0uNzE1Ljg2NC0xLjg2NyAxLjI5Ni0zLjQ1NiAxLjI5NnMtMi43NDEtLjQzMi0zLjQ1Ni0xLjI5NmMtLjcwNC0uODY0LTEuMDU2LTIuMjY2LTEuMDU2LTQuMjA4di0uODMyYzAtMS43Ny4zNTctMy4wODggMS4wNzItMy45NTIuNzI1LS44NjQgMS44NjctMS4yOTYgMy40MjQtMS4yOTYgMS41NjggMCAyLjcyLjQzOCAzLjQ1NiAxLjMxMi43MzYuODc1IDEuMTA0IDIuMTkyIDEuMTA0IDMuOTUyem0tMi4yMjQuODE2di0uNTkyYzAtMS4wMjQtLjEyOC0xLjg0LS4zODQtMi40NDgtLjI5OS0uNzA0LS45MzktMS4wNTYtMS45Mi0xLjA1Ni0uOTkyIDAtMS42MzcuMzUyLTEuOTM2IDEuMDU2LS4yNDUuNTc2LS4zNjggMS4zOTItLjM2OCAyLjQ0OHYuNTkyYzAgMS4zNzYuMTkyIDIuMzA0LjU3NiAyLjc4NC4xNDkuMjAzLjM2OC4zNzkuNjU2LjUyOC4yOTkuMTM5LjY1MS4yMDggMS4wNTYuMjA4LjQxNiAwIC43NjgtLjA2OSAxLjA1Ni0uMjA4LjI4OC0uMTM4LjUxMi0uMzA5LjY3Mi0uNTEyLjE2LS4yMDIuMjgzLS40NjkuMzY4LS44LjE0OS0uNTIyLjIyNC0xLjE4OS4yMjQtMnptMTMuMTI5Ljk5MmgyLjA2NGMwIDEuNDUxLS4zNjMgMi41NjYtMS4wODggMy4zNDQtLjcyNS43NzktMS43NDkgMS4xNjgtMy4wNzIgMS4xNjgtMi45MTIgMC00LjM2OC0xLjcxMi00LjM2OC01LjEzNnYtLjk2YzAtMi42OTguNzQ3LTQuMzg5IDIuMjQtNS4wNzIuNTg3LS4yNzcgMS4yOTYtLjQxNiAyLjEyOC0uNDE2IDEuMjE2IDAgMi4yMDMuMzM2IDIuOTYgMS4wMDguNzY4LjY2MiAxLjE1MiAxLjYyMiAxLjE1MiAyLjg4aC0yLjA4Yy0uMTE3LS42MjktLjMyNS0xLjEwNC0uNjI0LTEuNDI0LS4yOTktLjMyLS43NjgtLjQ4LTEuNDA4LS40OC0uNzQ3IDAtMS4zMDEuMjM1LTEuNjY0LjcwNC0uMjU2LjMzMS0uNDA1Ljg5Ni0uNDQ4IDEuNjk2YTEzLjM2IDEzLjM2IDAgMDAtLjAzMiAxLjA0di45OTJjMCAxLjIyNy4xNzEgMi4wNjQuNTEyIDIuNTEyLjM1Mi40NDguODk2LjY3MiAxLjYzMi42NzIuNzQ3IDAgMS4yNTktLjIwMiAxLjUzNi0uNjA4LjI4OC0uNDE2LjQ3NS0xLjA1Ni41Ni0xLjkyem0xMi4yOTUtMS42MTZsMy45MiA2LjAzMmgtMi41OTJsLTIuNjg4LTQuMzA0LTEuNTUyIDIuMDh2Mi4yMjRoLTIuMjI0VjYxLjk0MWgyLjIyNHY2LjM2OGw0LjMwNC02LjM2OGgyLjI0bC0zLjYzMiA1LjM2em0xNi4yMDggNi4wMzJoLTQuMDMyYy0xLjI4IDAtMi4xODEtLjIxOC0yLjcwNC0uNjU2LS41MTItLjQ0OC0uNzY4LTEuMjMyLS43NjgtMi4zNTJ2LTguMzg0aDcuNTA0djEuOTg0aC01LjI4djIuNjcyaDMuNjk2bC0uMTYgMS45ODRoLTMuNTM2djEuNTg0YzAgLjQ0OC4xMDIuNzU4LjMwNC45MjguMjAzLjE3MS41NzEuMjU2IDEuMTA0LjI1NmgzLjg3MnYxLjk4NHptMTQuMDA4IDBoLTIuNTc2bC0yLjIyNC00LjIyNGgtMS42djQuMjI0aC0yLjIyNFY2NC4zOWMwLS44NTMuMTk3LTEuNDcyLjU5Mi0xLjg1Ni4zOTQtLjM5NCAxLjA1Ni0uNTkyIDEuOTg0LS41OTJoMS44ODhjMS4xMyAwIDIuMDI2LjM0NyAyLjY4OCAxLjA0LjY3Mi42ODMgMS4wMDggMS41NTIgMS4wMDggMi42MDggMCAuNzY4LS4yMDMgMS40MzUtLjYwOCAyLS4zOTUuNTU1LS44ODYuOTM5LTEuNDcyIDEuMTUybDIuNTQ0IDQuNTkyem0tNC4zMDQtNi4wOGMuNDY5IDAgLjg1My0uMTYgMS4xNTItLjQ4LjMwOS0uMzMuNDY0LS43MzYuNDY0LTEuMjE2IDAtLjQ5LS4xNS0uODg1LS40NDgtMS4xODQtLjI4OC0uMjk4LS42NzgtLjQ0OC0xLjE2OC0uNDQ4aC0xLjEwNGMtLjY2MiAwLS45OTIuMzM2LS45OTIgMS4wMDh2Mi4zMmgyLjA5NnpNMTAzLjI2NCAzNS43NTJoNi4xOTJjMCA0LjM1Mi0xLjA4OCA3LjY5Ni0zLjI2NCAxMC4wMzItMi4xNzYgMi4zMzYtNS4yNDggMy41MDQtOS4yMTYgMy41MDQtOC43MzYgMC0xMy4xMDQtNS4xMzYtMTMuMTA0LTE1LjQwOFYzMWMwLTguMDk2IDIuMjQtMTMuMTY4IDYuNzItMTUuMjE2IDEuNzYtLjgzMiAzLjg4OC0xLjI0OCA2LjM4NC0xLjI0OCAzLjY0OCAwIDYuNjA4IDEuMDA4IDguODggMy4wMjQgMi4zMDQgMS45ODQgMy40NTYgNC44NjQgMy40NTYgOC42NGgtNi4yNGMtLjM1Mi0xLjg4OC0uOTc2LTMuMzEyLTEuODcyLTQuMjcyLS44OTYtLjk2LTIuMzA0LTEuNDQtNC4yMjQtMS40NC0yLjI0IDAtMy45MDQuNzA0LTQuOTkyIDIuMTEyLS43NjguOTkyLTEuMjE2IDIuNjg4LTEuMzQ0IDUuMDg4LS4wNjQuNzY4LS4wOTYgMS44MDgtLjA5NiAzLjEydjIuOTc2YzAgMy42OC41MTIgNi4xOTIgMS41MzYgNy41MzYgMS4wNTYgMS4zNDQgMi42ODggMi4wMTYgNC44OTYgMi4wMTYgMi4yNCAwIDMuNzc2LS42MDggNC42MDgtMS44MjQuODY0LTEuMjQ4IDEuNDI0LTMuMTY4IDEuNjgtNS43NnpNMTM2LjIxMiA0OWgtMTAuMTc2Yy0zLjg0IDAtNi42MjQtLjczNi04LjM1Mi0yLjIwOC0xLjY5Ni0xLjUwNC0yLjU0NC0zLjkzNi0yLjU0NC03LjI5NlYxNC44MjRoNi42NzJ2MjQuNjcyYzAgMS4zNDQuMzA0IDIuMjcyLjkxMiAyLjc4NC42MDguNTEyIDEuNzEyLjc2OCAzLjMxMi43NjhoMTAuMTc2VjQ5em0zMC4zNzUtMTguNjcydjIuNTkyYzAgNS43MjgtMS4wODggOS44ODgtMy4yNjQgMTIuNDgtMi4xNDQgMi41OTItNS42IDMuODg4LTEwLjM2OCAzLjg4OC00Ljc2OCAwLTguMjI0LTEuMjk2LTEwLjM2OC0zLjg4OC0yLjExMi0yLjU5Mi0zLjE2OC02LjgtMy4xNjgtMTIuNjI0VjMwLjI4YzAtNS4zMTIgMS4wNzItOS4yNjQgMy4yMTYtMTEuODU2IDIuMTc2LTIuNTkyIDUuNi0zLjg4OCAxMC4yNzItMy44ODggNC43MDQgMCA4LjE2IDEuMzEyIDEwLjM2OCAzLjkzNiAyLjIwOCAyLjYyNCAzLjMxMiA2LjU3NiAzLjMxMiAxMS44NTZ6bS02LjY3MiAyLjQ0OFYzMWMwLTMuMDcyLS4zODQtNS41Mi0xLjE1Mi03LjM0NC0uODk2LTIuMTEyLTIuODE2LTMuMTY4LTUuNzYtMy4xNjgtMi45NzYgMC00LjkxMiAxLjA1Ni01LjgwOCAzLjE2OC0uNzM2IDEuNzI4LTEuMTA0IDQuMTc2LTEuMTA0IDcuMzQ0djEuNzc2YzAgNC4xMjguNTc2IDYuOTEyIDEuNzI4IDguMzUyLjQ0OC42MDggMS4xMDQgMS4xMzYgMS45NjggMS41ODQuODk2LjQxNiAxLjk1Mi42MjQgMy4xNjguNjI0IDEuMjQ4IDAgMi4zMDQtLjIwOCAzLjE2OC0uNjI0Ljg2NC0uNDE2IDEuNTM2LS45MjggMi4wMTYtMS41MzZzLjg0OC0xLjQwOCAxLjEwNC0yLjRjLjQ0OC0xLjU2OC42NzItMy41NjguNjcyLTZ6bTI5Ljc4NyAyLjk3Nmg2LjE5MmMwIDQuMzUyLTEuMDg4IDcuNjk2LTMuMjY0IDEwLjAzMi0yLjE3NiAyLjMzNi01LjI0OCAzLjUwNC05LjIxNiAzLjUwNC04LjczNiAwLTEzLjEwNC01LjEzNi0xMy4xMDQtMTUuNDA4VjMxYzAtOC4wOTYgMi4yNC0xMy4xNjggNi43Mi0xNS4yMTYgMS43Ni0uODMyIDMuODg4LTEuMjQ4IDYuMzg0LTEuMjQ4IDMuNjQ4IDAgNi42MDggMS4wMDggOC44OCAzLjAyNCAyLjMwNCAxLjk4NCAzLjQ1NiA0Ljg2NCAzLjQ1NiA4LjY0aC02LjI0Yy0uMzUyLTEuODg4LS45NzYtMy4zMTItMS44NzItNC4yNzItLjg5Ni0uOTYtMi4zMDQtMS40NC00LjIyNC0xLjQ0LTIuMjQgMC0zLjkwNC43MDQtNC45OTIgMi4xMTItLjc2OC45OTItMS4yMTYgMi42ODgtMS4zNDQgNS4wODgtLjA2NC43NjgtLjA5NiAxLjgwOC0uMDk2IDMuMTJ2Mi45NzZjMCAzLjY4LjUxMiA2LjE5MiAxLjUzNiA3LjUzNiAxLjA1NiAxLjM0NCAyLjY4OCAyLjAxNiA0Ljg5NiAyLjAxNiAyLjI0IDAgMy43NzYtLjYwOCA0LjYwOC0xLjgyNC44NjQtMS4yNDggMS40MjQtMy4xNjggMS42OC01Ljc2em0yNy4yODQtNC44NDhMMjI4Ljc0NiA0OWgtNy43NzZsLTguMDY0LTEyLjkxMi00LjY1NiA2LjI0VjQ5aC02LjY3MlYxNC44MjRoNi42NzJ2MTkuMTA0bDEyLjkxMi0xOS4xMDRoNi43MmwtMTAuODk2IDE2LjA4ek0yNTYuMDEyIDQ5aC0xMi4wOTZjLTMuODQgMC02LjU0NC0uNjU2LTguMTEyLTEuOTY4LTEuNTM2LTEuMzQ0LTIuMzA0LTMuNjk2LTIuMzA0LTcuMDU2VjE0LjgyNGgyMi41MTJ2NS45NTJoLTE1Ljg0djguMDE2aDExLjA4OGwtLjQ4IDUuOTUyaC0xMC42MDh2NC43NTJjMCAxLjM0NC4zMDQgMi4yNzIuOTEyIDIuNzg0LjYwOC41MTIgMS43MTIuNzY4IDMuMzEyLjc2OGgxMS42MTZWNDl6bTMyLjQyMiAwaC03LjcyOGwtNi42NzItMTIuNjcyaC00LjhWNDloLTYuNjcyVjIyLjE2OGMwLTIuNTYuNTkyLTQuNDE2IDEuNzc2LTUuNTY4IDEuMTg0LTEuMTg0IDMuMTY4LTEuNzc2IDUuOTUyLTEuNzc2aDUuNjY0YzMuMzkyIDAgNi4wOCAxLjA0IDguMDY0IDMuMTIgMi4wMTYgMi4wNDggMy4wMjQgNC42NTYgMy4wMjQgNy44MjQgMCAyLjMwNC0uNjA4IDQuMzA0LTEuODI0IDYtMS4xODQgMS42NjQtMi42NTYgMi44MTYtNC40MTYgMy40NTZMMjg4LjQzNCA0OXptLTEyLjkxMi0xOC4yNGMxLjQwOCAwIDIuNTYtLjQ4IDMuNDU2LTEuNDQuOTI4LS45OTIgMS4zOTItMi4yMDggMS4zOTItMy42NDggMC0xLjQ3Mi0uNDQ4LTIuNjU2LTEuMzQ0LTMuNTUyLS44NjQtLjg5Ni0yLjAzMi0xLjM0NC0zLjUwNC0xLjM0NGgtMy4zMTJjLTEuOTg0IDAtMi45NzYgMS4wMDgtMi45NzYgMy4wMjR2Ni45Nmg2LjI4OHpcIixcbiAgICBmaWxsOiBcIiMyQjNDNTRcIlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMb2dvOyIsImV4cG9ydCAqIGZyb20gJy4vTG9nbydcclxuZXhwb3J0ICogZnJvbSAnLi9BdXRoJyIsImltcG9ydCBmaXJlYmFzZUNsaWVudCBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxyXG4gICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSF9ET01BSU4sXHJcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcclxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEXHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IGZpcmViYXNlQ2xpZW50LmFwcHMubGVuZ3RoIFxyXG4gICAgPyBmaXJlYmFzZUNsaWVudC5hcHAoKSBcclxuICAgIDogZmlyZWJhc2VDbGllbnQuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcclxuXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW5jZU1vZGUgPSBmaXJlYmFzZUNsaWVudC5hdXRoLkF1dGguUGVyc2lzdGVuY2UuTE9DQUxcclxuXHJcbmV4cG9ydCB7IGZpcmViYXNlQ2xpZW50IH0iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBTcGlubmVyfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYXV0aF0gPSB1c2VBdXRoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhdXRoLmxvYWRpbmcpIHtcbiAgICAgIGF1dGgudXNlciBcbiAgICAgICAgPyByb3V0ZXIucHVzaCgnL2FnZW5kYScpIFxuICAgICAgICA6IHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH1cbiAgfSwgW2F1dGgudXNlcl0pXG4gIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgcD17NH0gY2VudGVyQ29udGVudD5cbiAgICAgIDxTcGlubmVyIC8+XG4gICAgPC9Db250YWluZXI+XG4gICkgIFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=