import { observable, action, computed } from "mobx";

class CartStore {
  @observable cartMap = new Map();
  @action removeFromCart(id) {
    this.cartMap.delete(id);
  }
  @action addToCart(id) {
    if (this.cartMap.has(id)) {
      this.cartMap.set(id, this.cartMap.get(id) + 1);
    } else {
      this.cartMap.set(id, 1);
    }
  }
}
export default CartStore;
