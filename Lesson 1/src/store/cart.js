import { observable, computed, action } from "mobx";

export default class {
  @observable products = [];

  constructor(RootStore) {
    this.RootStore = RootStore;
  }
  @computed get productsDetailed() {
    return this.products.map(pr => {
      let product = this.RootStore.products.getById(pr.id);
      return { ...product, cnt: pr.cnt };
    });
  }

  @computed get inCart() {
    return id => this.products.some(product => product.id === id);
  }

  @computed get total() {
    return this.productsDetailed.reduce((total, product) => {
      return total + product.price * product.cnt;
    }, 0);
  }

  @action add(id) {
    this.products.push({ id, cnt: 1 });
  }

  @action change(id, cnt) {
    let index = this.products.findIndex(product => product.id === id);

    if (index !== -1) {
      this.products[index].cnt = cnt;
    }
  }

  @action remove(id) {
    let index = this.products.findIndex(product => product.id === id);

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
