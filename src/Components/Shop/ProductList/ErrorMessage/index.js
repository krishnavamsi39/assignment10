import React, { Component } from "react";
import { Span } from "./styledComponents";
import { observer } from "mobx-react";
@observer
class ErrorMessage extends Component {
  render() {
    return <Span class="error-message">Something went wrong with UI</Span>;
  }
}
export default ErrorMessage;
