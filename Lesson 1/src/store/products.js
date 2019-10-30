import { observable, computed } from "mobx";

export default class {
  constructor(RootStore) {
    this.RootStore = RootStore;
    this.api = this.RootStore.api.products;
  }
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

// Server API
function getProducts() {
  return [
    {
      id: 100,
      title: "Samsung Galaxy 10",
      price: 120000,
      rest: 10,
      image:
        "https://topmag.ru/upload/iblock/aac/aac2faebb80449240785ca2f60cb044e.jpg",
      description:
        "Samsung Galaxy Note 10 smartphone runs on Android v9.0 (Pie) operating system. The phone is powered by Octa core (2.73 GHz, Dual core, M4 Mongoose + 2.4 GHz, Dual core, Cortex A75 + 1.9 GHz, Quad core, Cortex A55) processor. It runs on the Samsung Exynos 9 Octa 9825 Chipset. It has 8 GB RAM and 256 GB internal storage."
    },
    {
      id: 101,
      title: "Huawei P30",
      price: 40000,
      rest: 10,
      image:
        "https://w180418-545-h-926085.c.cdn77.org/wa-data/public/shop/products/00/35/3500/images/6726/6726.750x0.jpeg",
      description:
        "Huawei P30 smartphone runs on Android v9.0 (Pie) operating system. The phone is powered by Octa core (2.6 GHz, Dual core, Cortex A73 + 1.92 GHz, Dual core, Cortex A76 + 1.8 GHz, Quad core, Cortex A53) processor. It runs on the HiSilicon Kirin 980 Chipset. It has 6 GB RAM and 128 GB internal storage."
    },
    {
      id: 102,
      title: "Xiaomi Mi7",
      price: 15000,
      rest: 10,
      image: "https://miredmi.ru/images/1xcxc.jpg",
      description:
        "Xiaomi MI7, ready to launch in February 2018, is the latest smartphone in India with 6.1 inches (15.49 cm) touchscreen display by Xiaomi. Designed with the updated technology, Xiaomi MI7 works on Android v7.0 (Nougat) operating system and features Dual-color LED Flash, 2160 x 3840 pixels screen resolution, 13 MP front camera and what not"
    },
    {
      id: 103,
      title: "IPhone 11 Pro",
      price: 88000,
      rest: 10,
      image:
        "https://www.yablochko.ru/upload/iblock/705/iphone-11-pro-gold-select-2019.jpg",
      description:
        "American tech giant Apple recently unveiled the iPhone 11 at a starting price of Rs 64,900. At this price, the iPhone 11 is the most ‘affordable’ of the three new iPhones launched by Apple, the other two being iPhone 11 Pro and iPhone 11 Pro Max. It will be available in India starting September 27.The iPhone 11 will come in six colour variants: Purple, Yellow, Green, Black, White and Product RED."
    }
  ];
}
