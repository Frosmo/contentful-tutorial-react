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
    console.log('render', entries.items[0].fields);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVyby5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Zyb3Ntb19jb250ZW50L21vZGlmaWNhdGlvbnMvcHJvZC82MDIyMy9ob21lIHBhZ2UgLSBoZXJvIGJhbm5lciAtIHJlYWN0X3JldjFfNjAyMjMuMC5zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LmNvbnRlbnRmdWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIiJdLCJuYW1lcyI6WyJIZXJvIiwiZGF0YSIsInByb3BzIiwiaW1nU3JjIiwiaW1hZ2UiLCJmaWVsZHMiLCJmaWxlIiwidXJsIiwic3R5bGVzIiwiaGVybyIsImhlcm9JbWFnZSIsIm5hbWUiLCJoZXJvRGV0YWlscyIsImhlcm9IZWFkbGluZSIsImhlcm9UaXRsZSIsInRpdGxlIiwiY29tcGFueSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGVudGZ1bENvbmZpZyIsInJlcXVpcmUiLCJlbGVtZW50IiwicG9zaXRpb25EYXRhIiwiZ2V0TWVzc2FnZUluc3RhbmNlIiwiZ2V0RWxlbWVudHMiLCJwb3AiLCJwZXJzb25OYW1lIiwibWVzc2FnZSIsInRlbXBsYXRlIiwiZGVmYXVsdHMiLCJwZXJzb24iLCJjbGllbnQiLCJ3aW5kb3ciLCJjb250ZW50ZnVsIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJzcGFjZUlkIiwiYWNjZXNzVG9rZW4iLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwidGhlbiIsInJlbmRlckVsZW1lbnQiLCJlbnRyaWVzIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7NkJBQ007QUFDUixVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0QsSUFBeEI7QUFDQSxVQUFNRSxTQUFZRixLQUFLRyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCQyxHQUFuQyx1REFBTjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdDLHFCQUFPQyxJQUF2QjtBQUNFLCtDQUFLLFdBQVdELHFCQUFPRSxTQUF2QixFQUFrQyxLQUFLVCxLQUFLVSxJQUE1QyxFQUFrRCxLQUFLUixNQUF2RCxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBV0sscUJBQU9JLFdBQXZCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBV0oscUJBQU9LLFlBQXRCO0FBQXFDWixpQkFBS1U7QUFBMUMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFHLFdBQVdILHFCQUFPTSxTQUFyQjtBQUFpQ2IsaUJBQUtjO0FBQXRDLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSWQsaUJBQUtlO0FBQVQ7QUFIRjtBQUZGLE9BREY7QUFVRDs7OztFQWZnQkMsZ0JBQU1DLFM7O2tCQWtCVmxCLEk7Ozs7Ozs7Ozs7O0FDckJmO0FBQ0Esa0JBQWtCLDRKOzs7Ozs7Ozs7Ozs7OztBQ0RsQjs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNbUIsbUJBQW1CQyxtQkFBT0EsQ0FBQyxtREFBUixDQUF6Qjs7QUFFQSxJQUFNQyxVQUFVQyxhQUFhQyxrQkFBYixHQUFrQ0MsV0FBbEMsR0FBZ0RDLEdBQWhELEVBQWhCO0FBQ0EsSUFBTUMsYUFBYUMsUUFBUUMsUUFBUixDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTdDOztBQUVBLElBQU1DLFNBQVNDLE9BQU9DLFVBQVAsQ0FBa0JDLFlBQWxCLENBQStCO0FBQzFDQyxXQUFPaEIsaUJBQWlCaUIsT0FEa0I7QUFFMUNDLGlCQUFhbEIsaUJBQWlCa0I7QUFGWSxDQUEvQixDQUFmO0FBSUFOLE9BQU9PLFVBQVAsQ0FBa0I7QUFDZEMsa0JBQWMsUUFEQTtBQUVkLG1CQUFlYjtBQUZELENBQWxCLEVBSUtjLElBSkwsQ0FJVUMsYUFKVjs7QUFNQSxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUM1QkMsWUFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JGLFFBQVFHLEtBQVIsQ0FBYyxDQUFkLEVBQWlCeEMsTUFBdkM7QUFDQSwwQkFBTyxvQkFBQyxjQUFELElBQU0sTUFBTXFDLFFBQVFHLEtBQVIsQ0FBYyxDQUFkLEVBQWlCeEMsTUFBN0IsR0FBUCxFQUFnRGdCLE9BQWhEO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUN0QkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEI7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiZnJvc21vX2NvbnRlbnQvbW9kaWZpY2F0aW9ucy9wcm9kLzYwMjIzL2hvbWUgcGFnZSAtIGhlcm8gYmFubmVyIC0gcmVhY3RfcmV2MV82MDIyMy4wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mcm9zbW9fY29udGVudC9tb2RpZmljYXRpb25zL3Byb2QvNjAyMjMvaG9tZSBwYWdlIC0gaGVybyBiYW5uZXIgLSByZWFjdF9yZXYxXzYwMjIzLjAuc291cmNlLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlcm8ubW9kdWxlLmNzcydcblxuY2xhc3MgSGVybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxuICAgIGNvbnN0IGltZ1NyYyA9IGAke2RhdGEuaW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTExODAmaD00ODAmcT01MCZmbT13ZWJwJmZpdD1wYWQmYmc9cmdiJTNBMDAwMDAwYFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlfSBhbHQ9e2RhdGEubmFtZX0gc3JjPXtpbWdTcmN9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0RldGFpbHN9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSGVhZGxpbmV9PntkYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGl0bGV9PntkYXRhLnRpdGxlfTwvcD5cbiAgICAgICAgICA8cD57ZGF0YS5jb21wYW55fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImhlcm9cIjpcImhlcm9fXzJDWS1GXCIsXCJoZXJvSW1hZ2VcIjpcImhlcm9JbWFnZV9fMmJWNm1cIixcImhlcm9EZXRhaWxzXCI6XCJoZXJvRGV0YWlsc19fMTdTdzFcIixcImhlcm9IZWFkbGluZVwiOlwiaGVyb0hlYWRsaW5lX18zN2tYWFwiLFwiaGVyb1RpdGxlXCI6XCJoZXJvVGl0bGVfX0pGbklwXCJ9OyIsImltcG9ydCBIZXJvIGZyb20gJ2NvbXBvbmVudHMvaGVybydcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0RE9NJ1xuaW1wb3J0IGNvbnRlbnRmdWwgZnJvbSAnY29udGVudGZ1bCdcblxuY29uc3QgY29udGVudGZ1bENvbmZpZyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy5jb250ZW50ZnVsJylcblxuY29uc3QgZWxlbWVudCA9IHBvc2l0aW9uRGF0YS5nZXRNZXNzYWdlSW5zdGFuY2UoKS5nZXRFbGVtZW50cygpLnBvcCgpO1xuY29uc3QgcGVyc29uTmFtZSA9IG1lc3NhZ2UudGVtcGxhdGUuZGVmYXVsdHMucGVyc29uO1xuXG5jb25zdCBjbGllbnQgPSB3aW5kb3cuY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuICAgIHNwYWNlOiBjb250ZW50ZnVsQ29uZmlnLnNwYWNlSWQsXG4gICAgYWNjZXNzVG9rZW46IGNvbnRlbnRmdWxDb25maWcuYWNjZXNzVG9rZW5cbn0pO1xuY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ3BlcnNvbicsXG4gICAgJ2ZpZWxkcy5uYW1lJzogcGVyc29uTmFtZVxufSlcbiAgICAudGhlbihyZW5kZXJFbGVtZW50KTtcblxuZnVuY3Rpb24gcmVuZGVyRWxlbWVudChlbnRyaWVzKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlcicsIGVudHJpZXMuaXRlbXNbMF0uZmllbGRzKVxuICAgIHJlbmRlcig8SGVybyBkYXRhPXtlbnRyaWVzLml0ZW1zWzBdLmZpZWxkc30gLz4sIGVsZW1lbnQpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LmNvbnRlbnRmdWw7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==