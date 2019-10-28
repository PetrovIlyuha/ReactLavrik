import React, { Component } from "react";
import cartModel from "~s/cart.js";
import orderModel from "~s/order.js";
export default class extends Component {
  render() {
    return (
      <div>
        <h1>Hi, {orderModel.data.name}</h1>
        <h2>Evething went Fine!</h2>
        <h2>
          Your order has been sent for processing by the delivery service.
        </h2>
        <h2>
          <strong>Total Cost: {cartModel.total}</strong>
        </h2>
      </div>
    );
  }
}
