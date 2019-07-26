import React from "react";
import Shop from "./Components/Shop";
import "./App.css";
import ShopStore from "./Stores/ShopStore";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <Route exact path="/" component={Login} />
        <Route path="/home" component={DisplayShop} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}
export default App;
