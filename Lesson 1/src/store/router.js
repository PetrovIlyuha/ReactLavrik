import React from "react";

import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";

class Router {
  routes = {
    cart: () => <Cart />,
    order: () => <Order />,
    result: () => <Result />
  };

  activeRoute = "cart";

  get component() {
    return this.routes[this.activeRoute]();
  }

  moveTo(route) {
    this.activeRoute = route;
  }
}

export default new Router();
