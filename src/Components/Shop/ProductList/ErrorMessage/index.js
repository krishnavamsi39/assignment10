import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class ErrorMessage extends Component {
  render() {
    return <span class="error-message">Something went wrong with UI</span>;
  }
}
export default ErrorMessage;
