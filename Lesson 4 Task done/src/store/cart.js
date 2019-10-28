import { observable, computed, action } from "mobx";

class Cart {
  @observable products = getProducts();

  @computed get total() {
    return this.products.reduce(
      (total, product) => total + product.price * product.current,
      0
    );
  }

  @computed get changeOn() {
    return this.products.map((product, i) => {
      return cnt => this.change(i, cnt);
    });
  }

  @action change(index, cnt) {
    this.products[index].current = cnt;
  }

  @action remove(index) {
    this.products.splice(index, 1);
  }
}

export default new Cart();

// Server API
function getProducts() {
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
}
