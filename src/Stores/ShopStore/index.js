import { observable, action } from "mobx";
class ShopStore {
  @observable selectedSizes = [];

  @action AddorRemoveSizes(value) {
    let index = this.selectedSizes.indexOf(value);
    if (index === -1) {
      this.selectedSizes.push(value);
    } else {
      this.selectedSizes.splice(index, 1);
    }
    console.log(this.selectedSizes);
  }
}
export default ShopStore;
