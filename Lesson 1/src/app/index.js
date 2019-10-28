import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "~/routes";

@observer
class App extends React.Component {
  render() {
    let routesComponents = routes.map(route => {
      return (
        <Route
          path={route.url}
          component={route.component}
          exact={route.exact}
          key={route.url}
        />
      );
    });
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>{routesComponents}</Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
