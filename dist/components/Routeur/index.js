"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _routeur = _interopRequireDefault(require("./routeur"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateMap = function stateMap(state) {
  var curentRoute = "";

  if (state.routeur && state.routeur.pathname) {
    curentRoute = state.routeur.pathname;
  }

  return {
    route: curentRoute
  };
};

var _default = (0, _reactRedux.connect)(stateMap)(_routeur.default);

exports.default = _default;