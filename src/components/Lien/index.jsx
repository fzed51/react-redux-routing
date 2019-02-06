import React from "react";

class Lien extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.children) {
      return <a href={"#" + this.props.to}>{this.props.children}</a>;
    }
    return null;
  }
}

export default Lien;
