import React from "react";
import Shop from "./Components/Shop";
import "./App.css";
import ShopStore from "./Stores/ShopStore";
import * as Cookies from "js-cookie";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";

var shopStore = new ShopStore();

function DisplayShop() {
  return <Shop shopStore={shopStore} />;
}
function App() {
  return (
    <Router>
      <div>
        <AuthRoute exact path="/login" component={Login} />
        <ProtectedRoute path="/" component={DisplayShop} />
        <AuthRoute path="/signup" component={Signup} />
      </div>
    </Router>
  );
}
function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get("login") === undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}
function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get("login") !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

export default App;
