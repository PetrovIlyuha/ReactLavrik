import { observable, action, computed } from "mobx";

export default class {
  @observable formData = {
    name: {
      value: "",
      label: "Name",
      validator: val => /[\wа-яА-Я]{6}/gi.test(val),
      errorText: "Russian letters, at least 6",
      valid: null
    },
    phone: {
      value: "",
      label: "Phone",
      validator: val => /^((\+7|7|8)+([0-9]){10})$/.test(val),
      errorText: "Phone Number in +79**145**** format",
      valid: null
    },
    email: {
      value: "",
      label: "Email",
      validator: val =>
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
      errorText: "Check your email input, it seems to be invalid characters",
      valid: null
    }
  };

  constructor(RootStore) {
    this.RootStore = RootStore;
  }

  @computed get formValid() {
    return Object.values(this.formData).every(field => field.valid);
  }

  @computed get data() {
    let data = {};

    for (let name in this.formData) {
      data[name] = this.formData[name].value;
    }
    return data;
  }

  @action change(key, value) {
    let field = this.formData[key];
    field.value = value;
    field.valid = field.validator(field.value);
  }
}
