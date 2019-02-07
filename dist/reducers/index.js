"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeurReducers = void 0;

var Actions = _interopRequireWildcard(require("../actions/types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Reducer de la partie ROUTEUR
 * @param {State} state
 * @param {Action} action
 * @return {State} action
 */
var routeurReducers = function routeurReducers(state, action) {
  state = state || {};

  switch (action.type) {
    case Actions.ROUTEUR_CHANGE_LOCATION:
      return action.data;

    default:
      return state;
  }
};

exports.routeurReducers = routeurReducers;