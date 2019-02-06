import React from "react";

class ConnectedRouteur extends React.Component {
  onLocationChange(ev) {
    // console.log(`ConnectedRouteur:onLocationChange(${ev.newURL})`);
    const newUrl = new URL(ev.newURL);
    this.props.onNewLocation(newUrl.hash.substr(1));
  }
  
  componentDidMount() {
    // console.log("ConnectedRouteur:componentWillMount");
    this.props.onNewLocation(window.location.hash.substr(1));
    window.addEventListener(
      "hashchange",
      this.onLocationChange.bind(this),
      false
    );
  }

  componentWillUnmount() {
    // console.log("ConnectedRouteur:componentWillUnmount");
    window.removeEventListener(
      "hashchange",
      this.onLocationChange.bind(this),
      false
    );
  }

  render() {
    return this.props.children;
  }
}

export default ConnectedRouteur;
