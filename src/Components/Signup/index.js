import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";
import {
  Input,
  Div,
  Span,
  Button,
  H2,
  Loader,
  Message,
  FailureMessage,
  Box
} from "../styledComponents";

import AuthenticationStore from "../../Stores/AuthenticationStore";
var authenticationStore = new AuthenticationStore();
@observer
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", showMessage: false };
  }
  handleClick = () => {
    const userdetails = {
      username: this.state.username,
      password: this.state.password
    };
    authenticationStore.sendDetails(userdetails);

    this.setState({ username: "", password: "" });
  };
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleFocus = () => {
    authenticationStore.setAuthState();
  };
  renderMessage = () => {
    if (authenticationStore.authState === "") {
      return;
    }
    if (authenticationStore.authState !== "success") {
      return <FailureMessage>{authenticationStore.authState}</FailureMessage>;
    } else if (authenticationStore.authState === "success") {
      return <Message>Registered successfully</Message>;
    }
  };
  render() {
    return (
      <>
        <Div>
          <H2>Signup Page</H2>

          <Input
            placeholder="User name"
            value={this.state.username}
            onChange={this.handleUsername}
            onFocus={this.handleFocus}
            type="text"
          />

          <Input
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePassword}
            type="password"
          />
          <Box>
            <Button onClick={this.handleClick}>Signup</Button>
            <Span>Or</Span>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            {authenticationStore.isLoading ? <Loader /> : <></>}
          </Box>
        </Div>
        {this.renderMessage()}
      </>
    );
  }
}
export default Signup;
