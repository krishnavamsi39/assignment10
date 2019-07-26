import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Input, Div, Span, Button, H2 } from "../styledComponents";
import AuthenticationStore from "../../Stores/AuthenticationStore";
import { observer } from "mobx-react";

var authenticationStore = new AuthenticationStore();
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleClick = () => {
    const userdetails = {
      username: this.state.username,
      password: this.state.password
    };
    authenticationStore.loginDetails(userdetails);
    if (authenticationStore.isLoggedIn) {
      console.log(1);
      this.history.push("/home");
    } else {
      return <Redirect to="/" />;
    }
  };
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <Div>
        <H2>Login Page</H2>
        <Span> User Name </Span>

        <Input
          value={this.state.username}
          onChange={this.handleUsername}
          type="text"
        />

        <Span> Password</Span>
        <Input
          value={this.state.password}
          onChange={this.handlePassword}
          type="password"
        />
        <Button onClick={this.handleClick}>Login</Button>
        <Span>Or</Span>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </Div>
    );
  }
}
export default Login;
