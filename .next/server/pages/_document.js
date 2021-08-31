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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/document-context":
/*!***********************************************************!*\
  !*** external "next/dist/shared/lib/document-context.js" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/document-context.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

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

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DocumentContext", {
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
});
Object.defineProperty(exports, "DocumentInitialProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
});
Object.defineProperty(exports, "DocumentProps", {
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
});
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _documentContext = __webpack_require__(/*! ../shared/lib/document-context */ "../shared/lib/document-context");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, Object.assign({}, props)));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/false, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/false, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react).useContext(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaGVhZC1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvc2NyaXB0LnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFH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QkFBdUIsS0FBSyxnQkFBNUIsSUFBNEMsS0FBUyxVQUFULENBQW9CLEtBQXBCLENBajRCaUIsQztBQW80Qm5FOztBQXA0QjBFOztRQTh1QmhFLFUsR0FBQSxVO0FBQUEsVUFBVSxDQUNkLFdBREksR0F4dUIrQyxnQkFBZ0MsZ0JBd3VCL0U7QUFBQSxVQUFVLENBTWQsaUJBTkksR0FNYSwwVEFOYjs7U0F5SkosVSxDQUFXLE8sRUFBaUIsTSxFQUF3QjtTQUNwRCxPQUFPLE9BQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFQLENBQWUsR0FBZixJQUFtQixHQUFuQixHQUEwQixHQUFPLE87QUFDaEUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6NEJELGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL19uZXh0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsImV4cG9ydCBjb25zdCBET01BdHRyaWJ1dGVOYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICBodG1sRm9yOiAnZm9yJyxcbiAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gIG5vTW9kdWxlOiAnbm9Nb2R1bGUnLFxufVxuXG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7IHR5cGUsIHByb3BzIH06IEpTWC5FbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gIGZvciAoY29uc3QgcCBpbiBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlXG4gICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWVcblxuICAgIC8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuICAgIGlmIChwcm9wc1twXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW3BdIHx8IHAudG9Mb3dlckNhc2UoKVxuICAgIGlmIChcbiAgICAgIHR5cGUgPT09ICdzY3JpcHQnICYmXG4gICAgICAoYXR0ciA9PT0gJ2FzeW5jJyB8fCBhdHRyID09PSAnZGVmZXInIHx8IGF0dHIgPT09ICdub01vZHVsZScpXG4gICAgKSB7XG4gICAgICA7KGVsIGFzIEhUTUxTY3JpcHRFbGVtZW50KVthdHRyXSA9ICEhcHJvcHNbcF1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BzW3BdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIH0gPSBwcm9wc1xuICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJydcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgOiAnJ1xuICB9XG4gIHJldHVybiBlbFxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlOiBzdHJpbmcsIGNvbXBvbmVudHM6IEpTWC5FbGVtZW50W10pOiB2b2lkIHtcbiAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICBjb25zdCBoZWFkQ291bnRFbDogSFRNTE1ldGFFbGVtZW50ID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJ1xuICApIGFzIEhUTUxNZXRhRWxlbWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghaGVhZENvdW50RWwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudClcbiAgY29uc3Qgb2xkVGFnczogRWxlbWVudFtdID0gW11cblxuICBmb3IgKFxuICAgIGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaSA8IGhlYWRDb3VudDtcbiAgICBpKyssIGogPSBqIS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICkge1xuICAgIGlmIChqIS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgIG9sZFRhZ3MucHVzaChqISlcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3VGFncyA9IChjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkgYXMgSFRNTEVsZW1lbnRbXSkuZmlsdGVyKFxuICAgIChuZXdUYWcpID0+IHtcbiAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba11cbiAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIClcblxuICBvbGRUYWdzLmZvckVhY2goKHQpID0+IHQucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodCkpXG4gIG5ld1RhZ3MuZm9yRWFjaCgodCkgPT4gaGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbCkpXG4gIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKToge1xuICBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8dW5rbm93bj5cbiAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHZvaWRcbn0ge1xuICBsZXQgdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSAodXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuXG5cbiAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGxcbiAgICAgICAgY29uc3QgdGFnczogUmVjb3JkPHN0cmluZywgSlNYLkVsZW1lbnRbXT4gPSB7fVxuXG4gICAgICAgIGhlYWQuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuICAgICAgICAgICAgLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbiAgICAgICAgICAgIGgudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgICBoLnByb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddICYmXG4gICAgICAgICAgICAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaC5wcm9wcy5ocmVmID0gaC5wcm9wc1snZGF0YS1ocmVmJ11cbiAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW11cbiAgICAgICAgICBjb21wb25lbnRzLnB1c2goaClcbiAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGxcbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGl0bGVDb21wb25lbnQucHJvcHNcbiAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICAgIDtbJ21ldGEnLCAnYmFzZScsICdsaW5rJywgJ3N0eWxlJywgJ3NjcmlwdCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKVxuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfSxcbiAgfVxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSkgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmXG4gICAgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JpcHRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IERPTUF0dHJpYnV0ZU5hbWVzIH0gZnJvbSAnLi9oZWFkLW1hbmFnZXInXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbmNvbnN0IFNjcmlwdENhY2hlID0gbmV3IE1hcCgpXG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KClcblxuZXhwb3J0IGludGVyZmFjZSBTY3JpcHRQcm9wcyBleHRlbmRzIFNjcmlwdEhUTUxBdHRyaWJ1dGVzPEhUTUxTY3JpcHRFbGVtZW50PiB7XG4gIHN0cmF0ZWd5PzogJ2FmdGVySW50ZXJhY3RpdmUnIHwgJ2xhenlPbmxvYWQnIHwgJ2JlZm9yZUludGVyYWN0aXZlJ1xuICBpZD86IHN0cmluZ1xuICBvbkxvYWQ/OiAoZTogYW55KSA9PiB2b2lkXG4gIG9uRXJyb3I/OiAoZTogYW55KSA9PiB2b2lkXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBTY3JpcHRQcm9wc2AgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvcHMgPSBTY3JpcHRQcm9wc1xuXG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgJ29uTG9hZCcsXG4gICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gICdjaGlsZHJlbicsXG4gICdvbkVycm9yJyxcbiAgJ3N0cmF0ZWd5Jyxcbl1cblxuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wczogU2NyaXB0UHJvcHMpOiB2b2lkID0+IHtcbiAgY29uc3Qge1xuICAgIHNyYyxcbiAgICBpZCxcbiAgICBvbkxvYWQgPSAoKSA9PiB7fSxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTCxcbiAgICBjaGlsZHJlbiA9ICcnLFxuICAgIG9uRXJyb3IsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNhY2hlS2V5ID0gaWQgfHwgc3JjXG5cbiAgLy8gU2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZFxuICBpZiAoY2FjaGVLZXkgJiYgTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIENvbnRlbnRzIG9mIHRoaXMgc2NyaXB0IGFyZSBhbHJlYWR5IGxvYWRpbmcvbG9hZGVkXG4gIGlmIChTY3JpcHRDYWNoZS5oYXMoc3JjKSkge1xuICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpXG4gICAgLy8gRXhlY3V0ZSBvbkxvYWQgc2luY2UgdGhlIHNjcmlwdCBsb2FkaW5nIGhhcyBiZWd1blxuICAgIFNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLCBvbkVycm9yKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIGNvbnN0IGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZC5jYWxsKHRoaXMsIGUpXG4gICAgICB9XG4gICAgfSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZWplY3QoZSlcbiAgICB9KVxuICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvbkVycm9yKSB7XG4gICAgICBvbkVycm9yKGUpXG4gICAgfVxuICB9KVxuXG4gIGlmIChzcmMpIHtcbiAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSlcbiAgfVxuICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KVxuXG4gIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJ1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgICAgPyBjaGlsZHJlbi5qb2luKCcnKVxuICAgICAgICA6ICcnXG4gIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgZWwuc3JjID0gc3JjXG4gIH1cblxuICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW2tdIHx8IGsudG9Mb3dlckNhc2UoKVxuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHM6IFNjcmlwdFByb3BzKSB7XG4gIGNvbnN0IHsgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScgfSA9IHByb3BzXG4gIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgbG9hZFNjcmlwdChwcm9wcylcbiAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHM6IFNjcmlwdFByb3BzKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtczogU2NyaXB0UHJvcHNbXSkge1xuICBzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpXG59XG5cbmZ1bmN0aW9uIFNjcmlwdChwcm9wczogU2NyaXB0UHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7XG4gICAgc3JjID0gJycsXG4gICAgb25Mb2FkID0gKCkgPT4ge30sXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgc3RyYXRlZ3kgPSAnYWZ0ZXJJbnRlcmFjdGl2ZScsXG4gICAgb25FcnJvcixcbiAgICAuLi5yZXN0UHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG4gIGNvbnN0IHsgdXBkYXRlU2NyaXB0cywgc2NyaXB0cyB9ID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgICAgbG9hZFNjcmlwdChwcm9wcylcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgIGxvYWRMYXp5U2NyaXB0KHByb3BzKVxuICAgIH1cbiAgfSwgW3Byb3BzLCBzdHJhdGVneV0pXG5cbiAgaWYgKHN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgaWYgKHVwZGF0ZVNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuY29uY2F0KFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYyxcbiAgICAgICAgICBvbkxvYWQsXG4gICAgICAgICAgb25FcnJvcixcbiAgICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICAgdXBkYXRlU2NyaXB0cyhzY3JpcHRzKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkU2NyaXB0KHByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL3NoYXJlZC9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9saWIvZG9jdW1lbnQtY29udGV4dCdcbmltcG9ydCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHMsXG59IGZyb20gJy4uL3NoYXJlZC9saWIvdXRpbHMnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0LCBnZXRQYWdlRmlsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuaW1wb3J0IFNjcmlwdCwgeyBTY3JpcHRQcm9wcyB9IGZyb20gJy4uL2NsaWVudC9zY3JpcHQnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBpbkFtcE1vZGVcbiAgICA/IFtdXG4gICAgOiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0OiBEb2N1bWVudFByb3BzLCBwcm9wczogT3JpZ2luUHJvcHMpIHtcbiAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICBjb25zdCB7XG4gICAgYXNzZXRQcmVmaXgsXG4gICAgYnVpbGRNYW5pZmVzdCxcbiAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgfSA9IGNvbnRleHRcblxuICByZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzXG4gICAgLmZpbHRlcihcbiAgICAgIChwb2x5ZmlsbCkgPT4gcG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgKVxuICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICA8c2NyaXB0XG4gICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgIGRlZmVyPXshZGlzYWJsZU9wdGltaXplZExvYWRpbmd9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgIC8+XG4gICAgKSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dDogRG9jdW1lbnRQcm9wcywgcHJvcHM6IE9yaWdpblByb3BzKSB7XG4gIGNvbnN0IHsgc2NyaXB0TG9hZGVyLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyB9ID0gY29udGV4dFxuXG4gIHJldHVybiAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoXG4gICAgKGZpbGU6IFNjcmlwdFByb3BzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmF0ZWd5LCAuLi5zY3JpcHRQcm9wcyB9ID0gZmlsZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi5zY3JpcHRQcm9wc31cbiAgICAgICAgICBrZXk9e3NjcmlwdFByb3BzLnNyYyB8fCBpbmRleH1cbiAgICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17cHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gZ2V0RHluYW1pY0NodW5rcyhcbiAgY29udGV4dDogRG9jdW1lbnRQcm9wcyxcbiAgcHJvcHM6IE9yaWdpblByb3BzLFxuICBmaWxlczogRG9jdW1lbnRGaWxlc1xuKSB7XG4gIGNvbnN0IHtcbiAgICBkeW5hbWljSW1wb3J0cyxcbiAgICBhc3NldFByZWZpeCxcbiAgICBpc0RldmVsb3BtZW50LFxuICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICB9ID0gY29udGV4dFxuXG4gIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpID0+IHtcbiAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBkZWZlcj17IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfVxuICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgIG5vbmNlPXtwcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAvPlxuICAgIClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0U2NyaXB0cyhcbiAgY29udGV4dDogRG9jdW1lbnRQcm9wcyxcbiAgcHJvcHM6IE9yaWdpblByb3BzLFxuICBmaWxlczogRG9jdW1lbnRGaWxlc1xuKSB7XG4gIGNvbnN0IHtcbiAgICBhc3NldFByZWZpeCxcbiAgICBidWlsZE1hbmlmZXN0LFxuICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gIH0gPSBjb250ZXh0XG5cbiAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gIClcblxuICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzY3JpcHRcbiAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICBmaWxlXG4gICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICBub25jZT17cHJvcHMubm9uY2V9XG4gICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgZGVmZXI9eyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZ31cbiAgICAgICAgY3Jvc3NPcmlnaW49e3Byb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59XG4gICAgICAvPlxuICAgIClcbiAgfSlcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gWy4uLmZsdXNoKCldXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxZPihcbiAgICBEb2N1bWVudENvbXBvbmVudDogbmV3ICgpID0+IERvY3VtZW50PFk+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgWVxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wc30+XG4gICAgICAgIDxEb2N1bWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0bWwoXG4gIHByb3BzOiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQsIGxvY2FsZSB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGxhbmc9e3Byb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZH1cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcylcblxuICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgbGV0IHVubWFuZ2VkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXSlcbiAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gQXJyYXkuZnJvbShcbiAgICAgIG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuY3NzJykpKVxuICAgIClcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcylcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGxldCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKVxuXG4gICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpXG4gICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLW4tZz17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGF0YS1uLXA9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTXG4gICAgKSB7XG4gICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoXG4gICAgICAgIGNzc0xpbmtFbGVtZW50c1xuICAgICAgKSBhcyBSZWFjdEVsZW1lbnRbXVxuICAgIH1cblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkeW5hbWljSW1wb3J0c1xuICAgICAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIHNjcmlwdExvYWRlcixcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlLnNyY31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlLnNyY31cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICBdXG4gIH1cblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpXG4gIH1cblxuICBnZXRTY3JpcHRzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcylcbiAgfVxuXG4gIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXM6IFNjcmlwdFByb3BzW10gPSBbXVxuICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW46IFJlYWN0Tm9kZVtdID0gW11cblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gU2NyaXB0KSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSA9IChcbiAgICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXVxuICAgICAgICAgICkuY29uY2F0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgWydsYXp5T25sb2FkJywgJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2NyaXB0TG9hZGVySXRlbXMucHVzaChjaGlsZC5wcm9wcylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlciA9IHNjcmlwdExvYWRlckl0ZW1zXG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlblxuICB9XG5cbiAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlOiBSZWFjdE5vZGUpOiBSZWFjdE5vZGVbXSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChub2RlLCAoYzogYW55KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgoeyB1cmwgfSkgPT5cbiAgICAgICAgICBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQsXG4gICAgICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPVxuICAgICAgdW5zdGFibGVfSnNQcmVsb2FkID09PSBmYWxzZSB8fCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmdcblxuICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWVcblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dFxuICAgIGxldCBjc3NQcmVsb2FkczogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGhlYWQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYyAmJlxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cylcbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbilcbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGNoaWxkPy50eXBlID09PSAnbWV0YScgJiZcbiAgICAgICAgICAgIGNoaWxkPy5wcm9wcz8ubmFtZSA9PT0gJ3ZpZXdwb3J0J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgIWluQW1wTW9kZVxuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY2hpbGRyZW4gPSB0aGlzLmhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pXG5cbiAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlXG4gICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlXG5cbiAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgaGVhZCA9IFJlYWN0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZFxuICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gY2hpbGRcbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmIChcbiAgICAgICAgICA8bWV0YSBuYW1lPVwibmV4dC1mb250LXByZWNvbm5lY3RcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfSU1BR0VTICYmIChcbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm5leHQtaW1hZ2UtcHJlbG9hZFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZVxuXG4gIGlmIChpbkFtcE1vZGUpIHJldHVybiA8PntBTVBfUkVOREVSX1RBUkdFVH08Lz5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgLy8gU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYW10aG9yLzY0YjExNGU0YTRmNTM5OTE1YTk1YjkxZmZkMzQwYWNjXG4gIHN0YXRpYyBzYWZhcmlOb21vZHVsZUZpeCA9XG4gICAgJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7J1xuXG4gIGdldER5bmFtaWNDaHVua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKVxuICB9XG5cbiAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKVxuICB9XG5cbiAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzOiBSZWFkb25seTxEb2N1bWVudFByb3BzPik6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlXG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsXG4gICAgICBpbkFtcE1vZGVcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXNcbiAgICAgICAgICA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmXG4gICAgICAgICAgIWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJlxuICAgICAgICAgICFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAge2Rpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9