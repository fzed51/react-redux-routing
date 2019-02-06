import { connect } from "react-redux";
import ConnectedRouteur from "./connected-routeur";
import { action_change_location } from "../../actions";

const dispatchMap = dispatch => ({
  onNewLocation: newLocation => dispatch(action_change_location(newLocation))
});

export default connect(
  undefined,
  dispatchMap
)(ConnectedRouteur);
