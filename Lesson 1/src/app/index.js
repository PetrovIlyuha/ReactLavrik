import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import routes, { routesMap } from "~/routes";

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
          <header
            style={{ background: "linear-gradient(to left, red, white)" }}
          >
            <h2>Unique Butique</h2>
          </header>
          <hr />
          <div className="row">
            <div className="col col-3">
              <div className="list-group">
                <div className="list-group-item">
                  <Link to={routesMap.home}>Home</Link>
                </div>
                <div className="list-group-item">
                  <Link to={routesMap.cart}>Cart</Link>
                </div>
                <div className="list-group-item">
                  <Link to={routesMap.order}>Order</Link>
                </div>
              </div>
            </div>
            <div className="col col-9">
              <Switch>{routesComponents}</Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
