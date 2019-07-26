import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function Example() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={App} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default Example;
