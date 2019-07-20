import React, { Component } from "react";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { observer } from "mobx-react";
@observer
class Shop extends Component {
  render() {
    return (
      <div class="shop">
        <FilterPanel shopStore={this.props.shopStore} />
        <ProductList shopStore={this.props.shopStore} />
        <Cart shopStore={this.props.shopStore} />
      </div>
    );
  }
}
export default Shop;
