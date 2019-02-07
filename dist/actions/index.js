"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = exports.action_change_location = void 0;

var Types = _interopRequireWildcard(require("./types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * @typedef {{type:string, data?:any}} Action
 */

/**
 * action : change de location
 * @package Routeur
 * @param {string} newLocation
 * @returns {Action}
 */
var action_change_location = function action_change_location(newLocation) {
  try {
    var url = new URL(newLocation, window.location.origin);
    var hash = url.hash,
        pathname = url.pathname,
        search = url.search;
    return {
      type: Types.ROUTEUR_CHANGE_LOCATION,
      data: {
        hash: hash,
        pathname: pathname,
        search: search
      }
    };
  } catch (err) {
    return {
      type: Types.ROUTEUR_ERROR,
      data: "la nouvelle URL n'est pas valide"
    };
  }
};

exports.action_change_location = action_change_location;

var push = function push(newLocation) {
  try {
    var url = new URL(newLocation, window.location.origin);
    var hash = url.hash,
        pathname = url.pathname,
        search = url.search;
    window.location.hash = newLocation;
    return {
      type: Types.ROUTEUR_PUSH,
      data: {
        hash: hash,
        pathname: pathname,
        search: search
      }
    };
  } catch (err) {
    return {
      type: Types.ROUTEUR_ERROR,
      data: "la nouvelle URL n'est pas valide"
    };
  }
};

exports.push = push;