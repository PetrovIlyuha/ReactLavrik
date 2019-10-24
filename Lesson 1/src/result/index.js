import React from "react";
import AppMinMax from "../inputs/minmax/minmax";
import { Button } from "react-bootstrap";

export default class extends React.Component {
  state = {
    products: getProducts(),
    formData: {
      name: {
        label: "Name",
        value: ""
      },
      email: {
        lable: "email",
        value: ""
      },
      phone: {
        label: "Phone",
        value: ""
      }
    },
    activeRoute: ""
  };

  changeCnt(index, cnt) {
    let products = [...this.state.products];
    products[index] = { ...products[index], current: cnt };
    this.setState({ products });
  }

  removeItem(index) {
    let products = [...this.state.products].filter(
      (product, ind) => ind !== index
    );
    this.setState({ products });
  }

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
      /* case "CART":
        <Cart />;
        break;
      case "ORDER":
        <Order />;
        break;
      case "RESULT":
        <Result />;
        break; */
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
