import React, { Component } from "react";
import "./style.css";
import EachProduct from "./EachProduct";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import apiStates from "../../../Constants/apiState";
import filters from "../../../Constants/filters/priceFilters";
import { observer } from "mobx-react";
@observer
class ProductList extends Component {
  componentDidMount() {
    this.props.shopStore.getProducts();
  }
  handleSelect = e => {
    this.props.shopStore.changeSelectSortBy(e.target.value);
  };
  renderProductList = () => {
    const { shopStore } = this.props;
    const filteredList = shopStore.getSelectedProducts;

    const products = filteredList.map(product => {
      return (
        <EachProduct shopStore={shopStore} {...product} key={product.id} />
      );
    });
    return products;
  };
  renderMainPage = () => {
    if (this.props.shopStore.apiState === apiStates.failure) {
      return <ErrorMessage />;
    } else if (this.props.shopStore.apiState === apiStates.loading) {
      return <Loader />;
    } else {
      return <div class="all-products">{this.renderProductList()}</div>;
    }
  };
  render() {
    return (
      <div>
        <span class="product-count">
          {this.props.shopStore.getSelectedProducts.length} Product(s) found
        </span>
        <select class="sort" onChange={this.handleSelect}>
          <option value={filters.select}>select</option>
          <option value={filters.lowtohigh}>low-to-high</option>
          <option value={filters.hightolow}>high-to-low</option>
        </select>
        {this.renderMainPage()}
      </div>
    );
  }
}
export default ProductList;
