import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Input, Div, Span, Button, H2 } from "../styledComponents";
import Loader from "../Shop/ProductList/Loader";
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

    this.setState({ username: "", password: "", showMessage: true });
  };
  handleUsername = e => {
    this.setState({ username: e.target.value, showMessage: false });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value, showMessage: false });
  };

  render() {
    return (
      <Div>
        <H2>Signup Page</H2>
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

        <Button onClick={this.handleClick}>Signup</Button>
        <Span>Or</Span>
        <Link to="/">
          <Button>Login</Button>
        </Link>
      </Div>
    );
  }
}
export default Signup;
