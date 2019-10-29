import { observable, computed } from "mobx";

class ProductsStore {
  @observable items = getProducts();

  @computed get productsMap() {
    let map = {};
    this.items.forEach((pr, i) => {
      map[pr.id.toString()] = i;
    });
    return map;
  }

  getById(id) {
    let index = this.productsMap[id];
    if (index === undefined) {
      return null;
    }
    return this.items[index];
  }
}

export default new ProductsStore();

// Server API
function getProducts() {
  return [
    {
      id: 100,
      title: "Galaxy Fold",
      price: 120000,
      rest: 10
    },
    {
      id: 101,
      title: "Huawei P30",
      price: 40000,
      rest: 10
    },
    {
      id: 102,
      title: "Xiaomi Mi6 Note",
      price: 15000,
      rest: 10
    },
    {
      id: 103,
      title: "IPhone XS",
      price: 88000,
      rest: 10
    }
  ];
}
