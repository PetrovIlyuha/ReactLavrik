import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
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
          key={route.id}
        />
      );
    });
    return (
      <BrowserRouter>
        <div className="container">{routesComponents}</div>
      </BrowserRouter>
    );
  }
}

export default App;
