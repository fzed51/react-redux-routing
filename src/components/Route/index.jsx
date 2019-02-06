import React from "react";

class Route {
  /**
   * constructeur d'une route
   * @param {RegExp} regex
   * @param {ReactElement} component
   * @param {object} props
   * @param {ReactElement|null} children
   */
  constructor(regex, component, props, children) {
    this.regex = regex;
    this.component = component;
    this.props = props || {};
    this.children = children || null;
  }

  /**
   * control si une URL match avec le regec de la route
   * @param {*} route 
   */
  match(route) {
    return this.regex.test(route);
  }

  render() {
    const Component = this.component;
    if (this.children) {
      return <Component {...this.props}>{this.children}</Component>;
    }
    return <Component {...this.props} />;
  }
}

export default Route;
