import React from "react";
import Shop from "./Components/Shop";
import "./App.css";
import ShopStore from "./Stores/ShopStore";
var shopStore = new ShopStore();
function App() {
  return (
    <div className="App">
      <Shop shopStore={shopStore} />
    </div>
  );
}

export default App;
