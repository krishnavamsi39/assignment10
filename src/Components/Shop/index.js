import React, { Component } from "react";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { observer } from "mobx-react";
@observer
class Shop extends Component {
  render() {
    return (
      <>
        <FilterPanel shopStore={this.props.shopStore} />
        <ProductList shopStore={this.props.shopStore} />
        <Cart shopStore={this.props.shopStore} />
      </>
    );
  }
}
export default Shop;
