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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/agenda.js");
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

/***/ "./pages/agenda.js":
/*!*************************!*\
  !*** ./pages/agenda.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Agenda; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components */ "./components/index.js");

var _jsxFileName = "D:\\JHDS\\Projetos\\FullStack\\clocker\\pages\\agenda.js";




function Agenda() {
  const [auth, {
    logout
  }] = Object(_components__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    !auth.user && router.push('/');
  }, [auth.user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: logout,
      children: "Sair"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UvY2xpZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FnZW5kYS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJsb2dvdXQiLCJmaXJlYmFzZUNsaWVudCIsImF1dGgiLCJzaWduT3V0IiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2V0UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZU1vZGUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImN1cnJlbnRVc2VyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2lnbnVwIiwidXNlcm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwidG9rZW4iLCJnZXRJZFRva2VuIiwiZGF0YSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRBdXRoIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJMb2dvIiwibG9nbyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiQXV0aCIsIlBlcnNpc3RlbmNlIiwiTE9DQUwiLCJBZ2VuZGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0MsbURBQUEsQ0FBb0IsQ0FBQyxFQUFELEVBQUssTUFBTSxDQUFFLENBQWIsQ0FBcEIsQ0FBcEI7QUFFTyxNQUFNQyxNQUFNLEdBQUcsTUFBTUMsc0VBQWMsQ0FBQ0MsSUFBZixHQUFzQkMsT0FBdEIsRUFBckI7QUFFQSxNQUFNQyxLQUFLLEdBQUcsT0FBTztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBUCxLQUErQjtBQUNoREwsd0VBQWMsQ0FBQ0MsSUFBZixHQUFzQkssY0FBdEIsQ0FBcUNDLHVFQUFyQzs7QUFFSixNQUFJO0FBQ0UsVUFBTVAsc0VBQWMsQ0FBQ0MsSUFBZixHQUFzQk8sMEJBQXRCLENBQWlESixLQUFqRCxFQUF3REMsUUFBeEQsQ0FBTjtBQUNBLFdBQU9MLHNFQUFjLENBQUNDLElBQWYsR0FBc0JRLFdBQTdCO0FBRUQsR0FKTCxDQUlNLE9BQU9DLEtBQVAsRUFBYTtBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixLQUEzQjtBQUNEO0FBQ0osQ0FWTTtBQVlBLE1BQU1HLE1BQU0sR0FBRyxPQUFPO0FBQUVULE9BQUY7QUFBU0MsVUFBVDtBQUFtQlM7QUFBbkIsQ0FBUCxLQUF3QztBQUMxRCxNQUFJO0FBQ0EsVUFBTWQsc0VBQWMsQ0FBQ0MsSUFBZixHQUFzQmMsOEJBQXRCLENBQXFEWCxLQUFyRCxFQUE0REMsUUFBNUQsQ0FBTjtBQUNBLFVBQU1XLElBQUksR0FBRyxNQUFNYixLQUFLLENBQUM7QUFBRUMsV0FBRjtBQUFTQztBQUFULEtBQUQsQ0FBeEI7QUFFQSxVQUFNWSxLQUFLLEdBQUcsTUFBTUQsSUFBSSxDQUFDRSxVQUFMLEVBQXBCO0FBRUEsVUFBTTtBQUFFQztBQUFGLFFBQVcsTUFBTUMsNENBQUssQ0FBQztBQUMzQkMsWUFBTSxFQUFFLE1BRG1CO0FBRTNCQyxTQUFHLEVBQUUsY0FGc0I7QUFHM0JILFVBQUksRUFBRTtBQUFFTDtBQUFGLE9BSHFCO0FBSTNCUyxhQUFPLEVBQUU7QUFDUCx5QkFBa0IsVUFBU04sS0FBTTtBQUQxQjtBQUprQixLQUFELENBQTVCO0FBU0gsR0FmRCxDQWVFLE9BQU9QLEtBQVAsRUFBYztBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixLQUE1QjtBQUNIO0FBQ0osQ0FuQk07QUFxQkEsTUFBTWMsT0FBTyxHQUFHLE1BQU07QUFDekIsUUFBTTtBQUFBLE9BQUN2QjtBQUFELE1BQVN3Qix3REFBVSxDQUFDNUIsV0FBRCxDQUF6QjtBQUVBLFNBQU8sQ0FBQ0ksSUFBRCxFQUFPO0FBQUVFLFNBQUY7QUFBU0osVUFBVDtBQUFpQmM7QUFBakIsR0FBUCxDQUFQO0FBQ0gsQ0FKTTtBQU1BLE1BQU1hLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUMxQyxRQUFNO0FBQUEsT0FBQzFCLElBQUQ7QUFBQSxPQUFPMkI7QUFBUCxNQUFtQkMsc0RBQVEsQ0FBQztBQUM5QkMsV0FBTyxFQUFFLElBRHFCO0FBRTlCZCxRQUFJLEVBQUU7QUFGd0IsR0FBRCxDQUFqQztBQUtBZSx5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxXQUFXLEdBQUdoQyxzRUFBYyxDQUFDQyxJQUFmLEdBQXNCZ0Msa0JBQXRCLENBQXlDakIsSUFBSSxJQUFJO0FBQ25FWSxhQUFPLENBQUM7QUFDTkUsZUFBTyxFQUFFLEtBREg7QUFFTmQ7QUFGTSxPQUFELENBQVA7QUFJRCxLQUxtQixDQUFwQjtBQU9BLFdBQU8sTUFBTWdCLFdBQVcsRUFBeEI7QUFDRCxHQVRNLEVBU0osRUFUSSxDQUFUO0FBV0Esc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFLENBQUMvQixJQUFELEVBQU8yQixPQUFQLENBQTdCO0FBQUEsY0FDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQXRCTSxDOzs7Ozs7Ozs7Ozs7QUNoRFA7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNTyxJQUFJLEdBQUdDLGlEQUFiLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBOztBQUVBLHFCQUFxQixnREFBZ0QsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlLEdBQUcsd0NBQXdDOztBQUU1Ujs7QUFFL0I7QUFDQSxzQkFBc0IsbURBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUMsbURBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxxQ0FBcUMsbURBQW1CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxxQ0FBcUMsbURBQW1CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxxQ0FBcUMsbURBQW1CO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWUsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDakN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1DLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFQyx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFRCw4QkFGTztBQUduQkUsV0FBUyxFQUFFRixjQUhRO0FBSW5CRyxlQUFhLEVBQUVILDBCQUpJO0FBS25CSSxtQkFBaUIsRUFBRUosYUFMQTtBQU1uQkssT0FBSyxFQUFFTCwwQ0FOWTtBQU9uQk0sZUFBYSxFQUFFTixjQUFzQ087QUFQbEMsQ0FBdkI7QUFVQSxNQUFNQyxHQUFHLEdBQUc5QyxtREFBYyxDQUFDK0MsSUFBZixDQUFvQkMsTUFBcEIsR0FDTmhELG1EQUFjLENBQUM4QyxHQUFmLEVBRE0sR0FFTjlDLG1EQUFjLENBQUNpRCxhQUFmLENBQTZCYixjQUE3QixDQUZOO0FBSU8sTUFBTTdCLGVBQWUsR0FBR1AsbURBQWMsQ0FBQ0MsSUFBZixDQUFvQmlELElBQXBCLENBQXlCQyxXQUF6QixDQUFxQ0MsS0FBN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJQO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxHQUFtQjtBQUNoQyxRQUFNLENBQUNwRCxJQUFELEVBQU87QUFBQ0Y7QUFBRCxHQUFQLElBQW1CeUIsMkRBQU8sRUFBaEM7QUFDQSxRQUFNOEIsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBeEIseURBQVMsQ0FBQyxNQUFNO0FBQ2QsS0FBQzlCLElBQUksQ0FBQ2UsSUFBTixJQUFjc0MsTUFBTSxDQUFDRSxJQUFQLENBQVksR0FBWixDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUN2RCxJQUFJLENBQUNlLElBQU4sQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUFRLGFBQU8sRUFBRWpCLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNqQkQsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYWdlbmRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvX25leHQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWdlbmRhLmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBmaXJlYmFzZUNsaWVudCwgcGVyc2lzdGVuY2VNb2RlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2ZpcmViYXNlL2NsaWVudCdcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChbe30sICgpID0+IHt9XSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2lnbk91dCgpXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gICAgZmlyZWJhc2VDbGllbnQuYXV0aCgpLnNldFBlcnNpc3RlbmNlKHBlcnNpc3RlbmNlTW9kZSlcclxuICAgIFxyXG50cnkge1xyXG4gICAgICBhd2FpdCBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICByZXR1cm4gZmlyZWJhc2VDbGllbnQuYXV0aCgpLmN1cnJlbnRVc2VyXHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmxvZygnTE9HSU4gRVJST1InLCBlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cCA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWV9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICcvYXBpL3Byb2ZpbGUnLFxyXG4gICAgICAgICAgZGF0YTogeyB1c2VybmFtZSB9LFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTSUdOVVAgRVJST1InLCBlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gICAgXHJcbiAgICByZXR1cm4gW2F1dGgsIHsgbG9naW4sIGxvZ291dCwgc2lnbnVwIH1dXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbYXV0aCwgc2V0QXV0aCBdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgdXNlcjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgICBzZXRBdXRoKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKClcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbYXV0aCwgc2V0QXV0aF19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSIsImltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IGxvZ28iLCJ2YXIgX3BhdGgsIF9wYXRoMiwgX3BhdGgzLCBfcGF0aDQ7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdMb2dvKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDI5MCxcbiAgICBoZWlnaHQ6IDgwLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgZDogXCJNMzcuNjE5IDEzLjgzM2EzMC44NzcgMzAuODc3IDAgMDAtMi4yNzQtLjA4NFY5LjMzM2MuODY4IDAgMS43MzUuMDMzIDIuNi4wOThsLS4zMjYgNC40MDJ6bTguODUgMS45ODhhMzAuOTMxIDMwLjkzMSAwIDAwLTQuMzUtMS4zMmwuOTY4LTQuMzFjMS42OS4zNzkgMy4zNTYuODgyIDQuOTcyIDEuNTFsLTEuNTkgNC4xMnptNi4wNSAzLjEzNWEzMC45NTMgMzAuOTUzIDAgMDAtMS45MzgtMS4xOTJsMi4xNzctMy44NDJjMS41MS44NTUgMi45NTUgMS44MiA0LjMyNCAyLjg4OGwtMi43MTYgMy40ODRhMzAuOTU1IDMwLjk1NSAwIDAwLTEuODQ2LTEuMzM0di0uMDA0em04LjEgNy45MDVhMzAuODcgMzAuODcgMCAwMC0yLjg4My0zLjUxNWwzLjE5Ny0zLjA0N2EzNi44NDQgMzYuODQ0IDAgMDEzLjI5OSA0LjAxOGwtMy42MTMgMi41NDR6bTMuMjg2IDUuOTdjLS4yOS0uNy0uNjA1LTEuMzg5LS45NDUtMi4wNjZsMy45NDQtMS45ODhhMzUuMjE2IDM1LjIxNiAwIDAxMS45ODcgNC44MDVsLTQuMTk1IDEuMzgzYTMwLjk4NCAzMC45ODQgMCAwMC0uNzktMi4xMzR6bTIuMzQgMTEuMDcyYTMwLjg2OCAzMC44NjggMCAwMC0uNDQtNC41MjdsNC4zNS0uNzVhMzUuNTQgMzUuNTQgMCAwMS41MTIgNS4xNjZsLTQuNDE3LjExaC0uMDA0em0tLjU3OCA2Ljc5MmMuMTQ2LS43NTEuMjY1LTEuNDk3LjM1OC0yLjI1Mmw0LjM4NS41NDNhMzUuMTQ3IDM1LjE0NyAwIDAxLTEuMDE1IDUuMWwtNC4yNTgtMS4xNzljLjIwNC0uNzI4LjM4LTEuNDY2LjUzLTIuMjEyek02MS40NjMgNjEuMmEzMS4yMDIgMzEuMjAyIDAgMDAyLjE0Ni00LjAxbDQuMDM3IDEuNzg4YTM1LjY0IDM1LjY0IDAgMDEtMi40NTEgNC41ODRsLTMuNzMyLTIuMzYyem0tNC4yNTcgNS4zMjFhMjguOTA0IDI4LjkwNCAwIDAwMS41NDUtMS42N2wzLjM0OCAyLjg4NWEzNS42MzUgMzUuNjM1IDAgMDEtMS43NzEgMS45MDdsLTMuMTIyLTMuMTIyelwiLFxuICAgIGZpbGw6IFwiIzRFODRENVwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgZDogXCJNMzUuMzQ1IDEzLjc1YTMwLjkxNSAzMC45MTUgMCAwMC0yOC41NiA0Mi43NDIgMzAuOTEzIDMwLjkxMyAwIDAwNTAuNDIgMTAuMDNsMy4xMjMgMy4xMjJBMzUuMzM2IDM1LjMzNiAwIDAxLjE3IDQxLjIwMSAzNS4zMzIgMzUuMzMyIDAgMDEzNS4zNDUgOS4zMzN2NC40MTZ6XCIsXG4gICAgZmlsbDogXCIjMkIzQzU0XCJcbiAgfSkpLCBfcGF0aDMgfHwgKF9wYXRoMyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk0zMy4xMzYgMjIuNTgyYTIuMjA4IDIuMjA4IDAgMDEyLjIwOSAyLjIwOHYyMy4wMDhsMTQuMzQ0IDguMTk2YTIuMjA4IDIuMjA4IDAgMDEtMi4xOSAzLjgzM0wzMi4wNCA1MC45OTVhMi4yMDggMi4yMDggMCAwMS0xLjExMy0xLjkxN1YyNC43OWEyLjIwOCAyLjIwOCAwIDAxMi4yMDgtMi4yMDh6XCIsXG4gICAgZmlsbDogXCIjNEU4NEQ1XCJcbiAgfSkpLCBfcGF0aDQgfHwgKF9wYXRoNCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNOTEuNzU1IDY4LjkxN2gyLjA2NGMwIDEuNDUxLS4zNjMgMi41NjYtMS4wODggMy4zNDQtLjcyNi43NzktMS43NSAxLjE2OC0zLjA3MiAxLjE2OC0yLjkxMiAwLTQuMzY4LTEuNzEyLTQuMzY4LTUuMTM2di0uOTZjMC0yLjY5OC43NDYtNC4zODkgMi4yNC01LjA3Mi41ODYtLjI3NyAxLjI5Ni0uNDE2IDIuMTI4LS40MTYgMS4yMTYgMCAyLjIwMi4zMzYgMi45NiAxLjAwOC43NjguNjYyIDEuMTUyIDEuNjIyIDEuMTUyIDIuODhoLTIuMDhjLS4xMTgtLjYyOS0uMzI2LTEuMTA0LS42MjQtMS40MjQtLjI5OS0uMzItLjc2OC0uNDgtMS40MDgtLjQ4LS43NDcgMC0xLjMwMi4yMzUtMS42NjQuNzA0LS4yNTYuMzMxLS40MDYuODk2LS40NDggMS42OTZhMTMuMjEgMTMuMjEgMCAwMC0uMDMyIDEuMDR2Ljk5MmMwIDEuMjI3LjE3IDIuMDY0LjUxMiAyLjUxMi4zNTIuNDQ4Ljg5Ni42NzIgMS42MzIuNjcyLjc0NiAwIDEuMjU4LS4yMDIgMS41MzYtLjYwOC4yODgtLjQxNi40NzQtMS4wNTYuNTYtMS45MnptMTUuNzk4IDQuNDE2aC0yLjMybC0uNjQtMS45NjhoLTMuODI0bC0uNjI0IDEuOTY4aC0yLjMybDMuNjQ4LTEwLjQzMmMuMTYtLjM2Mi4zMzYtLjYxMy41MjgtLjc1Mi4yMDMtLjEzOC40NDgtLjIwOC43MzYtLjIwOHMuNTE4LjA2NC42ODguMTkyYy4xODIuMTI4LjM0Mi4zODQuNDguNzY4bDMuNjQ4IDEwLjQzMnptLTMuNDcyLTMuODRsLTEuMzQ0LTQuNTEyLTEuNDA4IDQuNTEyaDIuNzUyem0xNS4yNiAzLjg0aC0zLjM5MmMtMS4yOCAwLTIuMjA4LS4yNDUtMi43ODQtLjczNi0uNTY2LS41MDEtLjg0OC0xLjMxMi0uODQ4LTIuNDMydi04LjIyNGgyLjIyNHY4LjIyNGMwIC40NDguMTAxLjc1OC4zMDQuOTI4LjIwMi4xNzEuNTcuMjU2IDEuMTA0LjI1NmgzLjM5MnYxLjk4NHptMTIuNDc2IDBoLTQuMDMyYy0xLjI4IDAtMi4xODEtLjIxOC0yLjcwNC0uNjU2LS41MTItLjQ0OC0uNzY4LTEuMjMyLS43NjgtMi4zNTJ2LTguMzg0aDcuNTA0djEuOTg0aC01LjI4djIuNjcyaDMuNjk2bC0uMTYgMS45ODRoLTMuNTM2djEuNTg0YzAgLjQ0OC4xMDIuNzU4LjMwNC45MjguMjAzLjE3MS41NzEuMjU2IDEuMTA0LjI1NmgzLjg3MnYxLjk4NHptMTQuMjY0LTExLjM5MnYxMC4yNGMwIC4zNTItLjEwNy42NTYtLjMyLjkxMi0uMjEzLjI0Ni0uNDY0LjM2OC0uNzUyLjM2OC0uNzM2IDAtMS4zMzktLjQyNi0xLjgwOC0xLjI4bC0zLjkzNi02LjE2djcuMzEyaC0yLjIyNFY2MS45NDFoMi4xNDRsNC42NzIgNy40NTZ2LTcuNDU2aDIuMjI0em0xNC4wOTkgNS42NDhsLjAxNiAxLjIzMmMtLjA0Mi43NzktLjEzOCAxLjQzNS0uMjg4IDEuOTY4LS4xNDkuNTM0LS40NDIgMS4wMTktLjg4IDEuNDU2LS43MjUuNzI2LTEuNzgxIDEuMDg4LTMuMTY4IDEuMDg4LTEuNjMyIDAtMi43NTItLjIxMy0zLjM2LS42NC0uNjA4LS40MzctLjkxMi0xLjIyMS0uOTEyLTIuMzUydi04LjRoNC40MzJjMS4yOCAwIDIuMjgzLjM2MyAzLjAwOCAxLjA4OGEzLjU3OCAzLjU3OCAwIDAxMS4wNCAyLjE0NGMuMDc1LjU5OC4xMTIgMS40MDMuMTEyIDIuNDE2em0tMi43MDQgMy4wNTZjLjIwMy0uMjQ1LjMzMS0uNTgxLjM4NC0xLjAwOC4wNjQtLjQzNy4wOTYtMS4xMTQuMDk2LTIuMDMyIDAtLjkxNy0uMDMyLTEuNTc4LS4wOTYtMS45ODQtLjA1My0uNDE2LS4xODEtLjc0Ni0uMzg0LS45OTItLjM4NC0uNDY5LS45MzgtLjcwNC0xLjY2NC0uNzA0aC0ydjYuMzA0YzAgLjQyNy4xNDQuNzIuNDMyLjg4LjI4OC4xNi44LjI0IDEuNTM2LjI0Ljc0NyAwIDEuMzEyLS4yMzQgMS42OTYtLjcwNHptMTYuNDk5IDIuNjg4aC0yLjMybC0uNjQtMS45NjhoLTMuODI0bC0uNjI0IDEuOTY4aC0yLjMybDMuNjQ4LTEwLjQzMmMuMTYtLjM2Mi4zMzYtLjYxMy41MjgtLjc1Mi4yMDMtLjEzOC40NDgtLjIwOC43MzYtLjIwOHMuNTE4LjA2NC42ODguMTkyYy4xODIuMTI4LjM0Mi4zODQuNDguNzY4bDMuNjQ4IDEwLjQzMnptLTMuNDcyLTMuODRsLTEuMzQ0LTQuNTEyLTEuNDA4IDQuNTEyaDIuNzUyem0xNi44NTkgMy44NGgtMi41NzZsLTIuMjI0LTQuMjI0aC0xLjZ2NC4yMjRoLTIuMjI0VjY0LjM5YzAtLjg1My4xOTgtMS40NzIuNTkyLTEuODU2LjM5NS0uMzk0IDEuMDU2LS41OTIgMS45ODQtLjU5MmgxLjg4OGMxLjEzMSAwIDIuMDI3LjM0NyAyLjY4OCAxLjA0LjY3Mi42ODMgMS4wMDggMS41NTIgMS4wMDggMi42MDggMCAuNzY4LS4yMDIgMS40MzUtLjYwOCAyLS4zOTQuNTU1LS44ODUuOTM5LTEuNDcyIDEuMTUybDIuNTQ0IDQuNTkyem0tNC4zMDQtNi4wOGMuNDcgMCAuODU0LS4xNiAxLjE1Mi0uNDguMzEtLjMzLjQ2NC0uNzM2LjQ2NC0xLjIxNiAwLS40OS0uMTQ5LS44ODUtLjQ0OC0xLjE4NC0uMjg4LS4yOTgtLjY3Ny0uNDQ4LTEuMTY4LS40NDhoLTEuMTA0Yy0uNjYxIDAtLjk5Mi4zMzYtLjk5MiAxLjAwOHYyLjMyaDIuMDk2em0yNC41MjQgMi44YzAgMS4wNTYtLjI4OCAxLjg2Ny0uODY0IDIuNDMyLS41NjUuNTY2LTEuMzYuODQ4LTIuMzg0Ljg0OGgtMS41MzZjLTEuMjU5IDAtMi4xNTUtLjIxOC0yLjY4OC0uNjU2LS41MjMtLjQzNy0uNzg0LTEuMTk0LS43ODQtMi4yNzJ2LTguNDY0aDQuODE2YzEuMDg4IDAgMS45MDQuMjcyIDIuNDQ4LjgxNi41NTUuNTQ0LjgzMiAxLjMxMi44MzIgMi4zMDQgMCAuNTc2LS4xNDkgMS4wNjctLjQ0OCAxLjQ3Mi0uMjg4LjQwNi0uNjA4LjY5NC0uOTYuODY0IDEuMDQ1LjQ5MSAxLjU2OCAxLjM3NiAxLjU2OCAyLjY1NnptLTMuNjE2LTMuNjY0Yy44MjEgMCAxLjIzMi0uNDEgMS4yMzItMS4yMzIgMC0uODIxLS40MTEtMS4yMzItMS4yMzItMS4yMzJoLTIuNDE2djIuNDY0aDIuNDE2em0xLjM5MiAzLjU1MmMwLS41MTItLjA5MS0uODk2LS4yNzItMS4xNTItLjE4MS0uMjY2LS41MDctLjQtLjk3Ni0uNGgtMi41NnYxLjc5MmMwIC40MzguMTA3Ljc0Mi4zMi45MTIuMjI0LjE3MS41ODcuMjU2IDEuMDg4LjI1NmgxLjE1MmMuODMyIDAgMS4yNDgtLjQ2OSAxLjI0OC0xLjQwOHptMTQuNzIzIDMuMzkyaC0zLjM5MmMtMS4yOCAwLTIuMjA4LS4yNDUtMi43ODQtLjczNi0uNTY1LS41MDEtLjg0OC0xLjMxMi0uODQ4LTIuNDMydi04LjIyNGgyLjIyNHY4LjIyNGMwIC40NDguMTAxLjc1OC4zMDQuOTI4LjIwMy4xNzEuNTcxLjI1NiAxLjEwNC4yNTZoMy4zOTJ2MS45ODR6bTEzLjMyNS02LjIyNHYuODY0YzAgMS45MS0uMzYzIDMuMjk2LTEuMDg4IDQuMTYtLjcxNS44NjQtMS44NjcgMS4yOTYtMy40NTYgMS4yOTZzLTIuNzQxLS40MzItMy40NTYtMS4yOTZjLS43MDQtLjg2NC0xLjA1Ni0yLjI2Ni0xLjA1Ni00LjIwOHYtLjgzMmMwLTEuNzcuMzU3LTMuMDg4IDEuMDcyLTMuOTUyLjcyNS0uODY0IDEuODY3LTEuMjk2IDMuNDI0LTEuMjk2IDEuNTY4IDAgMi43Mi40MzggMy40NTYgMS4zMTIuNzM2Ljg3NSAxLjEwNCAyLjE5MiAxLjEwNCAzLjk1MnptLTIuMjI0LjgxNnYtLjU5MmMwLTEuMDI0LS4xMjgtMS44NC0uMzg0LTIuNDQ4LS4yOTktLjcwNC0uOTM5LTEuMDU2LTEuOTItMS4wNTYtLjk5MiAwLTEuNjM3LjM1Mi0xLjkzNiAxLjA1Ni0uMjQ1LjU3Ni0uMzY4IDEuMzkyLS4zNjggMi40NDh2LjU5MmMwIDEuMzc2LjE5MiAyLjMwNC41NzYgMi43ODQuMTQ5LjIwMy4zNjguMzc5LjY1Ni41MjguMjk5LjEzOS42NTEuMjA4IDEuMDU2LjIwOC40MTYgMCAuNzY4LS4wNjkgMS4wNTYtLjIwOC4yODgtLjEzOC41MTItLjMwOS42NzItLjUxMi4xNi0uMjAyLjI4My0uNDY5LjM2OC0uOC4xNDktLjUyMi4yMjQtMS4xODkuMjI0LTJ6bTEzLjEyOS45OTJoMi4wNjRjMCAxLjQ1MS0uMzYzIDIuNTY2LTEuMDg4IDMuMzQ0LS43MjUuNzc5LTEuNzQ5IDEuMTY4LTMuMDcyIDEuMTY4LTIuOTEyIDAtNC4zNjgtMS43MTItNC4zNjgtNS4xMzZ2LS45NmMwLTIuNjk4Ljc0Ny00LjM4OSAyLjI0LTUuMDcyLjU4Ny0uMjc3IDEuMjk2LS40MTYgMi4xMjgtLjQxNiAxLjIxNiAwIDIuMjAzLjMzNiAyLjk2IDEuMDA4Ljc2OC42NjIgMS4xNTIgMS42MjIgMS4xNTIgMi44OGgtMi4wOGMtLjExNy0uNjI5LS4zMjUtMS4xMDQtLjYyNC0xLjQyNC0uMjk5LS4zMi0uNzY4LS40OC0xLjQwOC0uNDgtLjc0NyAwLTEuMzAxLjIzNS0xLjY2NC43MDQtLjI1Ni4zMzEtLjQwNS44OTYtLjQ0OCAxLjY5NmExMy4zNiAxMy4zNiAwIDAwLS4wMzIgMS4wNHYuOTkyYzAgMS4yMjcuMTcxIDIuMDY0LjUxMiAyLjUxMi4zNTIuNDQ4Ljg5Ni42NzIgMS42MzIuNjcyLjc0NyAwIDEuMjU5LS4yMDIgMS41MzYtLjYwOC4yODgtLjQxNi40NzUtMS4wNTYuNTYtMS45MnptMTIuMjk1LTEuNjE2bDMuOTIgNi4wMzJoLTIuNTkybC0yLjY4OC00LjMwNC0xLjU1MiAyLjA4djIuMjI0aC0yLjIyNFY2MS45NDFoMi4yMjR2Ni4zNjhsNC4zMDQtNi4zNjhoMi4yNGwtMy42MzIgNS4zNnptMTYuMjA4IDYuMDMyaC00LjAzMmMtMS4yOCAwLTIuMTgxLS4yMTgtMi43MDQtLjY1Ni0uNTEyLS40NDgtLjc2OC0xLjIzMi0uNzY4LTIuMzUydi04LjM4NGg3LjUwNHYxLjk4NGgtNS4yOHYyLjY3MmgzLjY5NmwtLjE2IDEuOTg0aC0zLjUzNnYxLjU4NGMwIC40NDguMTAyLjc1OC4zMDQuOTI4LjIwMy4xNzEuNTcxLjI1NiAxLjEwNC4yNTZoMy44NzJ2MS45ODR6bTE0LjAwOCAwaC0yLjU3NmwtMi4yMjQtNC4yMjRoLTEuNnY0LjIyNGgtMi4yMjRWNjQuMzljMC0uODUzLjE5Ny0xLjQ3Mi41OTItMS44NTYuMzk0LS4zOTQgMS4wNTYtLjU5MiAxLjk4NC0uNTkyaDEuODg4YzEuMTMgMCAyLjAyNi4zNDcgMi42ODggMS4wNC42NzIuNjgzIDEuMDA4IDEuNTUyIDEuMDA4IDIuNjA4IDAgLjc2OC0uMjAzIDEuNDM1LS42MDggMi0uMzk1LjU1NS0uODg2LjkzOS0xLjQ3MiAxLjE1MmwyLjU0NCA0LjU5MnptLTQuMzA0LTYuMDhjLjQ2OSAwIC44NTMtLjE2IDEuMTUyLS40OC4zMDktLjMzLjQ2NC0uNzM2LjQ2NC0xLjIxNiAwLS40OS0uMTUtLjg4NS0uNDQ4LTEuMTg0LS4yODgtLjI5OC0uNjc4LS40NDgtMS4xNjgtLjQ0OGgtMS4xMDRjLS42NjIgMC0uOTkyLjMzNi0uOTkyIDEuMDA4djIuMzJoMi4wOTZ6TTEwMy4yNjQgMzUuNzUyaDYuMTkyYzAgNC4zNTItMS4wODggNy42OTYtMy4yNjQgMTAuMDMyLTIuMTc2IDIuMzM2LTUuMjQ4IDMuNTA0LTkuMjE2IDMuNTA0LTguNzM2IDAtMTMuMTA0LTUuMTM2LTEzLjEwNC0xNS40MDhWMzFjMC04LjA5NiAyLjI0LTEzLjE2OCA2LjcyLTE1LjIxNiAxLjc2LS44MzIgMy44ODgtMS4yNDggNi4zODQtMS4yNDggMy42NDggMCA2LjYwOCAxLjAwOCA4Ljg4IDMuMDI0IDIuMzA0IDEuOTg0IDMuNDU2IDQuODY0IDMuNDU2IDguNjRoLTYuMjRjLS4zNTItMS44ODgtLjk3Ni0zLjMxMi0xLjg3Mi00LjI3Mi0uODk2LS45Ni0yLjMwNC0xLjQ0LTQuMjI0LTEuNDQtMi4yNCAwLTMuOTA0LjcwNC00Ljk5MiAyLjExMi0uNzY4Ljk5Mi0xLjIxNiAyLjY4OC0xLjM0NCA1LjA4OC0uMDY0Ljc2OC0uMDk2IDEuODA4LS4wOTYgMy4xMnYyLjk3NmMwIDMuNjguNTEyIDYuMTkyIDEuNTM2IDcuNTM2IDEuMDU2IDEuMzQ0IDIuNjg4IDIuMDE2IDQuODk2IDIuMDE2IDIuMjQgMCAzLjc3Ni0uNjA4IDQuNjA4LTEuODI0Ljg2NC0xLjI0OCAxLjQyNC0zLjE2OCAxLjY4LTUuNzZ6TTEzNi4yMTIgNDloLTEwLjE3NmMtMy44NCAwLTYuNjI0LS43MzYtOC4zNTItMi4yMDgtMS42OTYtMS41MDQtMi41NDQtMy45MzYtMi41NDQtNy4yOTZWMTQuODI0aDYuNjcydjI0LjY3MmMwIDEuMzQ0LjMwNCAyLjI3Mi45MTIgMi43ODQuNjA4LjUxMiAxLjcxMi43NjggMy4zMTIuNzY4aDEwLjE3NlY0OXptMzAuMzc1LTE4LjY3MnYyLjU5MmMwIDUuNzI4LTEuMDg4IDkuODg4LTMuMjY0IDEyLjQ4LTIuMTQ0IDIuNTkyLTUuNiAzLjg4OC0xMC4zNjggMy44ODgtNC43NjggMC04LjIyNC0xLjI5Ni0xMC4zNjgtMy44ODgtMi4xMTItMi41OTItMy4xNjgtNi44LTMuMTY4LTEyLjYyNFYzMC4yOGMwLTUuMzEyIDEuMDcyLTkuMjY0IDMuMjE2LTExLjg1NiAyLjE3Ni0yLjU5MiA1LjYtMy44ODggMTAuMjcyLTMuODg4IDQuNzA0IDAgOC4xNiAxLjMxMiAxMC4zNjggMy45MzYgMi4yMDggMi42MjQgMy4zMTIgNi41NzYgMy4zMTIgMTEuODU2em0tNi42NzIgMi40NDhWMzFjMC0zLjA3Mi0uMzg0LTUuNTItMS4xNTItNy4zNDQtLjg5Ni0yLjExMi0yLjgxNi0zLjE2OC01Ljc2LTMuMTY4LTIuOTc2IDAtNC45MTIgMS4wNTYtNS44MDggMy4xNjgtLjczNiAxLjcyOC0xLjEwNCA0LjE3Ni0xLjEwNCA3LjM0NHYxLjc3NmMwIDQuMTI4LjU3NiA2LjkxMiAxLjcyOCA4LjM1Mi40NDguNjA4IDEuMTA0IDEuMTM2IDEuOTY4IDEuNTg0Ljg5Ni40MTYgMS45NTIuNjI0IDMuMTY4LjYyNCAxLjI0OCAwIDIuMzA0LS4yMDggMy4xNjgtLjYyNC44NjQtLjQxNiAxLjUzNi0uOTI4IDIuMDE2LTEuNTM2cy44NDgtMS40MDggMS4xMDQtMi40Yy40NDgtMS41NjguNjcyLTMuNTY4LjY3Mi02em0yOS43ODcgMi45NzZoNi4xOTJjMCA0LjM1Mi0xLjA4OCA3LjY5Ni0zLjI2NCAxMC4wMzItMi4xNzYgMi4zMzYtNS4yNDggMy41MDQtOS4yMTYgMy41MDQtOC43MzYgMC0xMy4xMDQtNS4xMzYtMTMuMTA0LTE1LjQwOFYzMWMwLTguMDk2IDIuMjQtMTMuMTY4IDYuNzItMTUuMjE2IDEuNzYtLjgzMiAzLjg4OC0xLjI0OCA2LjM4NC0xLjI0OCAzLjY0OCAwIDYuNjA4IDEuMDA4IDguODggMy4wMjQgMi4zMDQgMS45ODQgMy40NTYgNC44NjQgMy40NTYgOC42NGgtNi4yNGMtLjM1Mi0xLjg4OC0uOTc2LTMuMzEyLTEuODcyLTQuMjcyLS44OTYtLjk2LTIuMzA0LTEuNDQtNC4yMjQtMS40NC0yLjI0IDAtMy45MDQuNzA0LTQuOTkyIDIuMTEyLS43NjguOTkyLTEuMjE2IDIuNjg4LTEuMzQ0IDUuMDg4LS4wNjQuNzY4LS4wOTYgMS44MDgtLjA5NiAzLjEydjIuOTc2YzAgMy42OC41MTIgNi4xOTIgMS41MzYgNy41MzYgMS4wNTYgMS4zNDQgMi42ODggMi4wMTYgNC44OTYgMi4wMTYgMi4yNCAwIDMuNzc2LS42MDggNC42MDgtMS44MjQuODY0LTEuMjQ4IDEuNDI0LTMuMTY4IDEuNjgtNS43NnptMjcuMjg0LTQuODQ4TDIyOC43NDYgNDloLTcuNzc2bC04LjA2NC0xMi45MTItNC42NTYgNi4yNFY0OWgtNi42NzJWMTQuODI0aDYuNjcydjE5LjEwNGwxMi45MTItMTkuMTA0aDYuNzJsLTEwLjg5NiAxNi4wOHpNMjU2LjAxMiA0OWgtMTIuMDk2Yy0zLjg0IDAtNi41NDQtLjY1Ni04LjExMi0xLjk2OC0xLjUzNi0xLjM0NC0yLjMwNC0zLjY5Ni0yLjMwNC03LjA1NlYxNC44MjRoMjIuNTEydjUuOTUyaC0xNS44NHY4LjAxNmgxMS4wODhsLS40OCA1Ljk1MmgtMTAuNjA4djQuNzUyYzAgMS4zNDQuMzA0IDIuMjcyLjkxMiAyLjc4NC42MDguNTEyIDEuNzEyLjc2OCAzLjMxMi43NjhoMTEuNjE2VjQ5em0zMi40MjIgMGgtNy43MjhsLTYuNjcyLTEyLjY3MmgtNC44VjQ5aC02LjY3MlYyMi4xNjhjMC0yLjU2LjU5Mi00LjQxNiAxLjc3Ni01LjU2OCAxLjE4NC0xLjE4NCAzLjE2OC0xLjc3NiA1Ljk1Mi0xLjc3Nmg1LjY2NGMzLjM5MiAwIDYuMDggMS4wNCA4LjA2NCAzLjEyIDIuMDE2IDIuMDQ4IDMuMDI0IDQuNjU2IDMuMDI0IDcuODI0IDAgMi4zMDQtLjYwOCA0LjMwNC0xLjgyNCA2LTEuMTg0IDEuNjY0LTIuNjU2IDIuODE2LTQuNDE2IDMuNDU2TDI4OC40MzQgNDl6bS0xMi45MTItMTguMjRjMS40MDggMCAyLjU2LS40OCAzLjQ1Ni0xLjQ0LjkyOC0uOTkyIDEuMzkyLTIuMjA4IDEuMzkyLTMuNjQ4IDAtMS40NzItLjQ0OC0yLjY1Ni0xLjM0NC0zLjU1Mi0uODY0LS44OTYtMi4wMzItMS4zNDQtMy41MDQtMS4zNDRoLTMuMzEyYy0xLjk4NCAwLTIuOTc2IDEuMDA4LTIuOTc2IDMuMDI0djYuOTZoNi4yODh6XCIsXG4gICAgZmlsbDogXCIjMkIzQzU0XCJcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTG9nbzsiLCJleHBvcnQgKiBmcm9tICcuL0xvZ28nXHJcbmV4cG9ydCAqIGZyb20gJy4vQXV0aCciLCJpbXBvcnQgZmlyZWJhc2VDbGllbnQgZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOLFxyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lELFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RPUkFHRV9CVUNLRVQsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICAgIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfSUQsXHJcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRFxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBmaXJlYmFzZUNsaWVudC5hcHBzLmxlbmd0aCBcclxuICAgID8gZmlyZWJhc2VDbGllbnQuYXBwKCkgXHJcbiAgICA6IGZpcmViYXNlQ2xpZW50LmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXHJcblxyXG5leHBvcnQgY29uc3QgcGVyc2lzdGVuY2VNb2RlID0gZmlyZWJhc2VDbGllbnQuYXV0aC5BdXRoLlBlcnNpc3RlbmNlLkxPQ0FMXHJcblxyXG5leHBvcnQgeyBmaXJlYmFzZUNsaWVudCB9IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWdlbmRhICgpIHtcclxuICBjb25zdCBbYXV0aCwge2xvZ291dH1dID0gdXNlQXV0aCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWF1dGgudXNlciAmJiByb3V0ZXIucHVzaCgnLycpXHJcbiAgfSwgW2F1dGgudXNlcl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+U2FpcjwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==