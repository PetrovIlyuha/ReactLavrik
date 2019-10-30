import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import routes, { routesMap } from "~/routes";
import withStore from "~/hocs/withStore";
import styles from "../app/app.module.css";

class App extends React.Component {
  render() {
    let cart = this.props.stores.cart;
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
        <header>
          <div className="container">
            <hr />
            <div className="row justify-content-between">
              <div className="col col-4">
                <div className="alert alert-success">Mercury Rising Shop</div>
              </div>
              <div className="col col-3">
                <h3>In cart: {cart.cartCnt}</h3>
                <br />
                <h2>Total: {cart.total}</h2>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <hr />
          <div className="row">
            <div className="col col-3 mt-5">
              <div className="list-group">
                <div className="list-group-item mt-5 bg-dark">
                  <NavLink
                    to={routesMap.home}
                    exact
                    activeClassName={styles.active}
                  >
                    <h2>Home</h2>
                  </NavLink>
                </div>
                <div className="list-group-item mt-3 bg-dark">
                  <NavLink
                    to={routesMap.cart}
                    exact
                    activeClassName={styles.active}
                  >
                    <h2>Cart</h2>
                  </NavLink>
                </div>
                <div className="list-group-item mt-3 bg-dark">
                  <NavLink
                    to={routesMap.order}
                    exact
                    activeClassName={styles.active}
                  >
                    <h2>Order</h2>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col col-9 bg-secondary">
              <Switch>{routesComponents}</Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStore(App);
