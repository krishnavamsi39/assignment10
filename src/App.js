import React from "react";
import Shop from "./Components/Shop";
import "./App.css";
import ShopStore from "./Stores/ShopStore";

var shopStore = new ShopStore();

function App() {
  return <Shop shopStore={shopStore} />;
}

export default App;
