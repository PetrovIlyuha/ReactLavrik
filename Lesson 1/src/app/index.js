import React from "react";
import { observer, Provider } from "mobx-react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import routes, { routesMap } from "~/routes";

import stores from "~s";

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
      <Provider stores={stores}>
        <BrowserRouter>
          <div className="container">
            <header
              style={{ background: "linear-gradient(to left, red, white)" }}
            >
              <h2>Unique Butique</h2>
            </header>
            <hr />
            <div className="row">
              <div className="col col-3 mt-5">
                <div className="list-group">
                  <div className="list-group-item mt-5 bg-dark">
                    <Link to={routesMap.home} style={{ color: "yellow" }}>
                      Home
                    </Link>
                  </div>
                  <div className="list-group-item mt-3 bg-dark">
                    <Link to={routesMap.cart} style={{ color: "yellow" }}>
                      Cart
                    </Link>
                  </div>
                  <div className="list-group-item mt-3 bg-dark">
                    <Link to={routesMap.order} style={{ color: "yellow" }}>
                      Order
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col-9 bg-secondary">
                <Switch>{routesComponents}</Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
