import * as Types from "./types";

/**
 * @typedef {{type:string, data?:any}} Action
 */

/**
 * action : change de location
 * @package Routeur
 * @param {string} newLocation
 * @returns {Action}
 */

export const action_change_location = newLocation => {
  try {
    const url = new URL(newLocation, window.location.origin);
    const { hash, pathname, search } = url;
    return {
      type: Types.ROUTEUR_CHANGE_LOCATION,
      data: { hash, pathname, search }
    };
  } catch (err) {
    return {
      type: Types.ROUTEUR_ERROR,
      data: "la nouvelle URL n'est pas valide"
    };
  }
};


export const push = newLocation => {
  try {
    const url = new URL(newLocation, window.location.origin);
    const { hash, pathname, search } = url;
    window.location.hash = newLocation
    return {
      type: Types.ROUTEUR_PUSH,
      data: { hash, pathname, search }
    };
  } catch (err) {
    return {
      type: Types.ROUTEUR_ERROR,
      data: "la nouvelle URL n'est pas valide"
    };
  }
};

