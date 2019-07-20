import { observable, action, computed } from "mobx";

class CartStore {
  @observable cartMap = [];
  constructor() {}
  @action addToCart(id) {
    this.cartMap.push(id);
    console.log(this.cartMap);
  }
}
export default CartStore;
