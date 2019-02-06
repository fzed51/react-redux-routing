# react-redux-routing

routeur react/redux simple et compréhensible.

## Utilisation

### ConnectedRouteur

Le composant est à intégrer au début de l'application

```jsx
import { render } from "react-dom";
import React from "react";
import { ConnectedRouteur } from "react-redux-routing";
import App from "./app";

const root = document.getQuerySelector("#root");
render(
  <ConnectedRouteur>
    <App />
  </ConnectedRouteur>,
  root
);
```

### Routeur

Ce composant est nécessaire pour le choix entre les routes, Il utilise la classe 
Route.

```jsx
render() {
    return (<Routeur definition={[
        new Route(/^\/user\/?$/, UserComponent),
        new Route(/^\/admin\/?$/, AdminComponent),
    ]} />);
}
```

### Lien

### push
