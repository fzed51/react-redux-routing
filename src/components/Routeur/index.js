import { connect } from "react-redux";
import Routeur from "./routeur";

const stateMap = state => {
  let curentRoute = "";
  if (state.routeur && state.routeur.pathname) {
    curentRoute = state.routeur.pathname;
  }
  return {
    route: curentRoute
  };
};

export default connect(stateMap)(Routeur);
