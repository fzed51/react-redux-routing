"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _connectedRouteur = _interopRequireDefault(require("./connected-routeur"));

var _actions = require("../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dispatchMap = function dispatchMap(dispatch) {
  return {
    onNewLocation: function onNewLocation(newLocation) {
      return dispatch((0, _actions.action_change_location)(newLocation));
    }
  };
};

var _default = (0, _reactRedux.connect)(undefined, dispatchMap)(_connectedRouteur.default);

exports.default = _default;