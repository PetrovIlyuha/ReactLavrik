import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import stores from "~s";
import { Provider } from "mobx-react";

ReactDom.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
