import React from "react";
import styles from "./app.module.css";
import Cart from "~/cart";
import Order from "~/order";
import Result from "~/result";

export default class extends React.Component {
  state = {
    products: getProducts(),
    formData: {
      name: {
        label: "Your Name",
        value: ""
      },
      email: {
        label: "Email",
        value: ""
      },
      phone: {
        label: "Phone",
        value: ""
      }
    },
    activeRoute: "CART"
  };

  changeCnt = (index, cnt) => {
    let products = [...this.state.products];
    products[index] = { ...products[index], current: cnt };
    this.setState({ products });
  };

  removeItem = index => {
    let products = [...this.state.products].filter(
      (product, ind) => ind !== index
    );
    this.setState({ products });
  };

  changeFormData = (name, value) => {
    let formData = { ...this.state.formData };
    formData[name] = { ...formData[name], value };
    this.setState({ formData });
  };

  moveToCart = () => {
    this.setState({ activeRoute: "CART" });
  };
  moveToOrder = () => {
    this.setState({ activeRoute: "ORDER" });
  };
  moveToResult = () => {
    this.setState({ activeRoute: "RESULT" });
  };

  render() {
    let page;

    switch (this.state.activeRoute) {
      case "CART":
        page = (
          <Cart
            products={this.state.products}
            onSend={this.moveToOrder}
            onChange={this.changeCnt}
            onRemove={this.removeItem}
          />
        );
        break;
      case "ORDER":
        page = (
          <Order
            formData={this.state.formData}
            onChange={this.changeFormData}
            onSend={this.moveToResult}
            onBack={this.moveToCart}
          />
        );
        break;
      case "RESULT":
        page = <Result />;
        break;
      default:
        page = <div>404 error</div>;
    }
    return <div className="container">{page}</div>;
  }
}

const getProducts = () => {
  return [
    {
      id: 100,
      title: "Galaxy Fold",
      price: 120000,
      rest: 10,
      current: 1
    },
    {
      id: 101,
      title: "Huawei P30",
      price: 40000,
      rest: 10,
      current: 1
    },
    {
      id: 102,
      title: "Xiaomi Mi6 Note",
      price: 15000,
      rest: 10,
      current: 1
    },
    {
      id: 103,
      title: "IPhone XS",
      price: 88000,
      rest: 10,
      current: 1
    }
  ];
};
