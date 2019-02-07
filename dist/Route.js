"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Route =
/*#__PURE__*/
function () {
  /**
   * constructeur d'une route
   * @param {RegExp} regex
   * @param {ReactElement} component
   * @param {object} props
   * @param {ReactElement|null} children
   */
  function Route(regex, component, props, children) {
    _classCallCheck(this, Route);

    this.regex = regex;
    this.component = component;
    this.props = props || {};
    this.children = children || null;
  }
  /**
   * control si une URL match avec le regec de la route
   * @param {*} route 
   */


  _createClass(Route, [{
    key: "match",
    value: function match(route) {
      return this.regex.test(route);
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.component;

      if (this.children) {
        return _react.default.createElement(Component, this.props, this.children);
      }

      return _react.default.createElement(Component, this.props);
    }
  }]);

  return Route;
}();

var _default = Route;
exports.default = _default;