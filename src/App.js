import React from "react";
import Shop from "./Components/Shop";
import "./App.css";
import ShopStore from "./Stores/ShopStore";
import CartStore from "./Stores/CartStore";
var shopStore = new ShopStore();
var cartStore = new CartStore();
function App() {
  return (
    <div className="App">
      <Shop shopStore={shopStore} cartStore={cartStore} />
    </div>
  );
}

export default App;
