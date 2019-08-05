import React, { Component } from "react";
import {
  AllProductsContainer,
  Select,
  ProductCount,
  Option
} from "./styledComponents";
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
    this.props.shopStore.cartStore.getCartItems()
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
      return (
        <AllProductsContainer>{this.renderProductList()}</AllProductsContainer>
      );
    }
  };
  render() {
    return (
      <>
        <ProductCount>
          {this.props.shopStore.getSelectedProducts.length} Product(s) found
        </ProductCount>
        <Select onChange={this.handleSelect}>
          <Option value={filters.select}>select</Option>
          <Option value={filters.lowtohigh}>low-to-high</Option>
          <Option value={filters.hightolow}>high-to-low</Option>
        </Select>
        {this.renderMainPage()}
      </>
    );
  }
}
export default ProductList;
