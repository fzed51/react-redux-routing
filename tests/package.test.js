const ReactReduxRouting = require("../dist");

describe("le reducer", () => {
  let state_origin = {
    path: "a/b/c.d"
  };
  let state_modified = {
    path: "e/f/g.h"
  };
  let action_good = {
    type: "ROUTEUR_CHANGE_LOCATION",
    data: {
      path: "e/f/g.h"
    }
  };
  let action_bad = {
    type: "-XXX-"
  };

  it("Le reducer ne doit pas executer une action inconnue", () =>
    expect(
      ReactReduxRouting.routeurReducers(state_origin, action_bad)
    ).toBe(state_origin));
  it("Le reducer doit executer une action du routeur", () =>
    expect(
      ReactReduxRouting.routeurReducers(state_origin, action_good)
    ).toEqual(state_modified));
});
