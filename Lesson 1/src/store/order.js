import { observable, action } from "mobx";

class Order {
  @observable formData = {
    name: {
      value: "",
      label: "Name",
      validator: val => /^[aA-zZ]{6,}$/.test(val),
      errorText: "Name should be comprised of not less then 6 latin characters",
      valid: false
    },
    phone: {
      value: "",
      label: "Phone",
      validator: val => /^((\+7|7|8)+([0-9]){10})$/.test(val),
      errorText: "Your Phone number must of the right format",
      valid: false
    },
    email: {
      value: "",
      label: "Email",
      validator: val =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        ),
      errorText: "Check the spelling, please...Wrong format of email",
      valid: false
    }
  };

  @action change(key, value) {
    let field = this.formData[key];
    field.value = value;
    field.value = field.validator(field.value);
  }
}

export default new Order();
