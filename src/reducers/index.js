import * as Actions from "../actions/types";

/**
 * Reducer de la partie ROUTEUR
 * @param {State} state
 * @param {Action} action
 * @return {State} action
 */
export const routeurReducers = (state, action) => {
  state = state || {};
  switch (action.type) {
    case Actions.ROUTEUR_CHANGE_LOCATION:
      return action.data;

    default:
      return state;
  }
};
