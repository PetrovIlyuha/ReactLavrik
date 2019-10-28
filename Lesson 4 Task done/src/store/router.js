import React from "react";
import { observable, action, computed } from "mobx";

import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";

class Router {
  routes = {
    cart: () => <Cart />,
    order: () => <Order />,
    result: () => <Result />
  };

  @observable activeRoute = "cart";

  @computed get component() {
    return this.routes[this.activeRoute]();
  }

  @action moveTo(route) {
    this.activeRoute = route;
  }
}

export default new Router();
