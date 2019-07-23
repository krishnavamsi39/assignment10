import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class Loader extends Component {
  render() {
    return <div class="loader" />;
  }
}
export default Loader;
