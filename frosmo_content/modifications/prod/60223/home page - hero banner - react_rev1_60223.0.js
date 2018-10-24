/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frosmo_content/modifications/prod/60223/home page - hero banner - react_rev1_60223.0.source.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.contentful.json":
/*!**************************!*\
  !*** ./.contentful.json ***!
  \**************************/
/*! exports provided: spaceId, accessToken, default */
/***/ (function(module) {

module.exports = {"spaceId":"fb91ihmtmxwb","accessToken":"f36d7f101903d788f327aaeb073689c6746d3e05342aca96b3511633799fa0ad"};

/***/ }),

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _heroModule = __webpack_require__(/*! ./hero.module.css */ "./components/hero.module.css");

var _heroModule2 = _interopRequireDefault(_heroModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var imgSrc = data.image.fields.file.url + '?w=1180&h=480&q=50&fm=webp&fit=pad&bg=rgb%3A000000';

      return _react2.default.createElement(
        'div',
        { className: _heroModule2.default.hero },
        _react2.default.createElement('img', { className: _heroModule2.default.heroImage, alt: data.name, src: imgSrc }),
        _react2.default.createElement(
          'div',
          { className: _heroModule2.default.heroDetails },
          _react2.default.createElement(
            'h3',
            { className: _heroModule2.default.heroHeadline },
            data.name
          ),
          _react2.default.createElement(
            'p',
            { className: _heroModule2.default.heroTitle },
            data.title
          ),
          _react2.default.createElement(
            'p',
            null,
            data.company
          )
        )
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

exports.default = Hero;

/***/ }),

/***/ "./components/hero.module.css":
/*!************************************!*\
  !*** ./components/hero.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hero":"hero__2CY-F","heroImage":"heroImage__2bV6m","heroDetails":"heroDetails__17Sw1","heroHeadline":"heroHeadline__37kXX","heroTitle":"heroTitle__JFnIp"};

/***/ }),

/***/ "./frosmo_content/modifications/prod/60223/home page - hero banner - react_rev1_60223.0.source.js":
/*!********************************************************************************************************!*\
  !*** ./frosmo_content/modifications/prod/60223/home page - hero banner - react_rev1_60223.0.source.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hero = __webpack_require__(/*! components/hero */ "./components/hero.js");

var _hero2 = _interopRequireDefault(_hero);

var _reactDOM = __webpack_require__(/*! reactDOM */ "reactDOM");

var _contentful = __webpack_require__(/*! contentful */ "contentful");

var _contentful2 = _interopRequireDefault(_contentful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentfulConfig = __webpack_require__(/*! ../../../../.contentful */ "./.contentful.json");

var element = positionData.getMessageInstance().getElements().pop();
var personName = message.template.defaults.person;

var client = window.contentful.createClient({
    space: contentfulConfig.spaceId,
    accessToken: contentfulConfig.accessToken
});
client.getEntries({
    content_type: 'person',
    'fields.name': personName
}).then(renderElement);

function renderElement(entries) {
    (0, _reactDOM.render)(React.createElement(_hero2.default, { data: entries.items[0].fields }), element);
}

/***/ }),

/***/ "contentful":
/*!************************************!*\
  !*** external "window.contentful" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.contentful;

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "reactDOM":
/*!**********************************!*\
  !*** external "window.ReactDOM" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVyby5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Zyb3Ntb19jb250ZW50L21vZGlmaWNhdGlvbnMvcHJvZC82MDIyMy9ob21lIHBhZ2UgLSBoZXJvIGJhbm5lciAtIHJlYWN0X3JldjFfNjAyMjMuMC5zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LmNvbnRlbnRmdWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIiJdLCJuYW1lcyI6WyJIZXJvIiwiZGF0YSIsInByb3BzIiwiaW1nU3JjIiwiaW1hZ2UiLCJmaWVsZHMiLCJmaWxlIiwidXJsIiwic3R5bGVzIiwiaGVybyIsImhlcm9JbWFnZSIsIm5hbWUiLCJoZXJvRGV0YWlscyIsImhlcm9IZWFkbGluZSIsImhlcm9UaXRsZSIsInRpdGxlIiwiY29tcGFueSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGVudGZ1bENvbmZpZyIsInJlcXVpcmUiLCJlbGVtZW50IiwicG9zaXRpb25EYXRhIiwiZ2V0TWVzc2FnZUluc3RhbmNlIiwiZ2V0RWxlbWVudHMiLCJwb3AiLCJwZXJzb25OYW1lIiwibWVzc2FnZSIsInRlbXBsYXRlIiwiZGVmYXVsdHMiLCJwZXJzb24iLCJjbGllbnQiLCJ3aW5kb3ciLCJjb250ZW50ZnVsIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJzcGFjZUlkIiwiYWNjZXNzVG9rZW4iLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwidGhlbiIsInJlbmRlckVsZW1lbnQiLCJlbnRyaWVzIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs2QkFDTTtBQUNSLFVBQU1DLE9BQU8sS0FBS0MsS0FBTCxDQUFXRCxJQUF4QjtBQUNBLFVBQU1FLFNBQVlGLEtBQUtHLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUJDLEdBQW5DLHVEQUFOOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0MscUJBQU9DLElBQXZCO0FBQ0UsK0NBQUssV0FBV0QscUJBQU9FLFNBQXZCLEVBQWtDLEtBQUtULEtBQUtVLElBQTVDLEVBQWtELEtBQUtSLE1BQXZELEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFXSyxxQkFBT0ksV0FBdkI7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFXSixxQkFBT0ssWUFBdEI7QUFBcUNaLGlCQUFLVTtBQUExQyxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUcsV0FBV0gscUJBQU9NLFNBQXJCO0FBQWlDYixpQkFBS2M7QUFBdEMsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJZCxpQkFBS2U7QUFBVDtBQUhGO0FBRkYsT0FERjtBQVVEOzs7O0VBZmdCQyxnQkFBTUMsUzs7a0JBa0JWbEIsSTs7Ozs7Ozs7Ozs7QUNyQmY7QUFDQSxrQkFBa0IsNEo7Ozs7Ozs7Ozs7Ozs7O0FDRGxCOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1tQixtQkFBbUJDLG1CQUFPQSxDQUFDLG1EQUFSLENBQXpCOztBQUVBLElBQU1DLFVBQVVDLGFBQWFDLGtCQUFiLEdBQWtDQyxXQUFsQyxHQUFnREMsR0FBaEQsRUFBaEI7QUFDQSxJQUFNQyxhQUFhQyxRQUFRQyxRQUFSLENBQWlCQyxRQUFqQixDQUEwQkMsTUFBN0M7O0FBRUEsSUFBTUMsU0FBU0MsT0FBT0MsVUFBUCxDQUFrQkMsWUFBbEIsQ0FBK0I7QUFDMUNDLFdBQU9oQixpQkFBaUJpQixPQURrQjtBQUUxQ0MsaUJBQWFsQixpQkFBaUJrQjtBQUZZLENBQS9CLENBQWY7QUFJQU4sT0FBT08sVUFBUCxDQUFrQjtBQUNkQyxrQkFBYyxRQURBO0FBRWQsbUJBQWViO0FBRkQsQ0FBbEIsRUFJS2MsSUFKTCxDQUlVQyxhQUpWOztBQU1BLFNBQVNBLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQzVCLDBCQUFPLG9CQUFDLGNBQUQsSUFBTSxNQUFNQSxRQUFRQyxLQUFSLENBQWMsQ0FBZCxFQUFpQnRDLE1BQTdCLEdBQVAsRUFBZ0RnQixPQUFoRDtBQUNILEM7Ozs7Ozs7Ozs7O0FDckJELG1DOzs7Ozs7Ozs7OztBQ0FBLDhCOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImZyb3Ntb19jb250ZW50L21vZGlmaWNhdGlvbnMvcHJvZC82MDIyMy9ob21lIHBhZ2UgLSBoZXJvIGJhbm5lciAtIHJlYWN0X3JldjFfNjAyMjMuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvc21vX2NvbnRlbnQvbW9kaWZpY2F0aW9ucy9wcm9kLzYwMjIzL2hvbWUgcGFnZSAtIGhlcm8gYmFubmVyIC0gcmVhY3RfcmV2MV82MDIyMy4wLnNvdXJjZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZXJvLm1vZHVsZS5jc3MnXG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGFcbiAgICBjb25zdCBpbWdTcmMgPSBgJHtkYXRhLmltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0xMTgwJmg9NDgwJnE9NTAmZm09d2VicCZmaXQ9cGFkJmJnPXJnYiUzQTAwMDAwMGBcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZX0gYWx0PXtkYXRhLm5hbWV9IHNyYz17aW1nU3JjfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9EZXRhaWxzfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0hlYWRsaW5lfT57ZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT57ZGF0YS50aXRsZX08L3A+XG4gICAgICAgICAgPHA+e2RhdGEuY29tcGFueX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJoZXJvXCI6XCJoZXJvX18yQ1ktRlwiLFwiaGVyb0ltYWdlXCI6XCJoZXJvSW1hZ2VfXzJiVjZtXCIsXCJoZXJvRGV0YWlsc1wiOlwiaGVyb0RldGFpbHNfXzE3U3cxXCIsXCJoZXJvSGVhZGxpbmVcIjpcImhlcm9IZWFkbGluZV9fMzdrWFhcIixcImhlcm9UaXRsZVwiOlwiaGVyb1RpdGxlX19KRm5JcFwifTsiLCJpbXBvcnQgSGVybyBmcm9tICdjb21wb25lbnRzL2hlcm8nXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdERPTSdcbmltcG9ydCBjb250ZW50ZnVsIGZyb20gJ2NvbnRlbnRmdWwnXG5cbmNvbnN0IGNvbnRlbnRmdWxDb25maWcgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uY29udGVudGZ1bCcpXG5cbmNvbnN0IGVsZW1lbnQgPSBwb3NpdGlvbkRhdGEuZ2V0TWVzc2FnZUluc3RhbmNlKCkuZ2V0RWxlbWVudHMoKS5wb3AoKTtcbmNvbnN0IHBlcnNvbk5hbWUgPSBtZXNzYWdlLnRlbXBsYXRlLmRlZmF1bHRzLnBlcnNvbjtcblxuY29uc3QgY2xpZW50ID0gd2luZG93LmNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogY29udGVudGZ1bENvbmZpZy5zcGFjZUlkLFxuICAgIGFjY2Vzc1Rva2VuOiBjb250ZW50ZnVsQ29uZmlnLmFjY2Vzc1Rva2VuXG59KTtcbmNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6ICdwZXJzb24nLFxuICAgICdmaWVsZHMubmFtZSc6IHBlcnNvbk5hbWVcbn0pXG4gICAgLnRoZW4ocmVuZGVyRWxlbWVudCk7XG5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZW50cmllcykge1xuICAgIHJlbmRlcig8SGVybyBkYXRhPXtlbnRyaWVzLml0ZW1zWzBdLmZpZWxkc30gLz4sIGVsZW1lbnQpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LmNvbnRlbnRmdWw7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==