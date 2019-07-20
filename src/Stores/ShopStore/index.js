import { observable, action, computed } from "mobx";
import products from "../../Constants/productList";
import CartStore from "../CartStore";
class ShopStore {
  constructor() {
    this.cartStore = new CartStore(this);
  }
  productList = products;
  @observable selectedSizes = [];
  @observable selectSortBy = "select";
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

    if (this.selectSortBy === "low-to-high") {
      filteredList.sort((a, b) => {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
    }
    if (this.selectSortBy === "high-to-low") {
      filteredList.sort((a, b) => {
        return a.price < b.price ? 1 : b.price > a.price ? -1 : 0;
      });
    }

    return filteredList;
  }
}
export default ShopStore;
