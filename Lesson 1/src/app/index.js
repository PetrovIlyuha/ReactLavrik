import React from "react";
import styles from "./app.module.css";
import { observer } from "mobx-react";

import Router from "~s/router.js";

@observer
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container">{Router.component}</div>
      </div>
    );
  }
}

export default App;
