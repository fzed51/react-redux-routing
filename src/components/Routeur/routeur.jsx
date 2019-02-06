import React from "react";

/**
 * @property {string} route
 * @property {Route[]} definition
 * @property {Route} notFound
 */

class Routeur extends React.Component {
  render() {
    const routes = this.props.definition.filter(route =>
      route.match(this.props.route)
    );
    if (routes.length > 0) {
      return routes[0].render();
    } else if (this.props.notFound) {
      return this.props.notFound.render();
    } else {
      return (
        <div>
          <strong>404</strong> not found
        </div>
      );
    }
  }
}

export default Routeur;
