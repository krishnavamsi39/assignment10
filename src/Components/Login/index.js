import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
import { observer } from "mobx-react";

var authenticationStore = new AuthenticationStore();
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  DisplayHomePage = () => {
    if (authenticationStore.isLoggedIn) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
  };
  handleClick = () => {
    const userdetails = {
      username: this.state.username,
      password: this.state.password
    };
    authenticationStore.loginDetails(userdetails, this.DisplayHomePage);
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
    }
  };
  render() {
    return (
      <>
        <Div>
          <H2>Login Page</H2>
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
            <Button onClick={this.handleClick}>Login</Button>
            <Span>Or</Span>
            <Link to="/signup">
              <Button>Signup</Button>
            </Link>
            {authenticationStore.isLoading ? <Loader /> : <></>}
          </Box>
        </Div>
        {this.renderMessage()}
      </>
    );
  }
}
export default Login;
