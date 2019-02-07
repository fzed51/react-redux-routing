import * as React from "react";

type Action = {
  type: string;
  data?: any;
};

export function push(route: string): Action;

export class Route {
  constructor(
    path: RegExp,
    Component: any,
    props?: object,
    children?: any | null
  );
  match(route: string): boolean;
  render(): any;
}

interface LienProps {
  to: string;
}

export class Lien extends React.Component<LienProps> {
  constructor(props: LienProps);
}

export class ConnectedRouteur extends React.Component {
  constructor(props: LienProps);
}

interface RouteurProps {
  definition: Route[];
  notFound?: Route;
}

export class Routeur extends React.Component<RouteurProps> {
  constructor(props: RouteurProps);
}

export function routeurReducers<S>(state: S, action: Action): S;
