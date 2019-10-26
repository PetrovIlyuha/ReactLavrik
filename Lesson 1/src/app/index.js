import React from "react";
import styles from "./app.module.css";

import Router from "~s/router.js";

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <button onClick={() => this.forceUpdate()}>Force Upd</button>
        <hr />
        <div className="container">{Router.component}</div>
      </div>
    );
  }
}
