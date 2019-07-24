import React, { Component } from "react";
import { Span } from "./styledComponents";
import { observer } from "mobx-react";
@observer
class ErrorMessage extends Component {
  render() {
    return <Span>Something went wrong with UI</Span>;
  }
}
export default ErrorMessage;
