import React, { Component } from "react";
import cartModel from "~s/cart.js";
export default class extends Component {
  render() {
    return (
      <div>
        <h2>
          Your order has been sent for processing by the delivery service.
        </h2>
        <p>
          <strong>Total Cost: {cartModel.total}</strong>
        </p>
      </div>
    );
  }
}
