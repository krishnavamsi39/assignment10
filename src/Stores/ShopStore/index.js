import { observable, action, computed } from "mobx";
import CartStore from "../CartStore";
import apiStates from "../../Constants/apiState";
import priceFilters from "../../Constants/filters/priceFilters";

import fetchApiUtils from "../../Utils/FetchApiUtils";
class ShopStore {
  @observable productList = [];
  @observable apiState = apiStates.loading;

  constructor() {
    this.cartStore = new CartStore(this);
  }

  getProducts() {
    fetchApiUtils("https://products-cart.getsandbox.com/products/v1/")
      .then(res => {
        return res.json();
      })
      .then(output => {
        this.apiState = apiStates.success;
        this.productList = output.products;
      })
      .catch(err => {
        this.apiState = apiStates.failure;
      });
  }

  @observable selectedSizes = [];
  @observable selectSortBy = priceFilters.select;
  @action changeSelectSortBy(value) {
    this.selectSortBy = value;
  }
  @action AddorRemoveSizes(value) {
    let index = this.selectedSizes.indexOf(value);
    if (index === -1) {
      this.selectedSizes.push(value);
    } else {
      this.selectedSizes.splice(index, 1);
    }
  }
  @computed get getSelectedProducts() {
    let filteredList = this.productList.slice();

    if (this.selectedSizes.length !== 0) {
      filteredList = [];
      this.selectedSizes.map(size => {
        this.productList.map(product => {
          if (
            product.availableSizes.indexOf(size) !== -1 &&
            filteredList.indexOf(product) === -1
          ) {
            filteredList.push(product);
          }
        });
      });
    }

    if (this.selectSortBy === priceFilters.lowtohigh) {
      filteredList.sort((a, b) => {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
    }
    if (this.selectSortBy === priceFilters.hightolow) {
      filteredList.sort((a, b) => {
        return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
      });
    }

    return filteredList;
  }
}
export default ShopStore;
