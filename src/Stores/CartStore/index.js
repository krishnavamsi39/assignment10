import { observable, action, computed } from "mobx";

class CartStore {
  shopStore;
  constructor(shopStore) {
    this.shopStore = shopStore;
  }
  @observable cartMap = new Map();
  @computed get total() {
    let total = 0;

    this.shopStore.productList.map(product => {
      if (this.cartMap.has(product.id)) {
        total = total + product.price * this.cartMap.get(product.id);
      }
    });

    return total.toFixed(2);
  }
  @computed get cartCount() {
    const cartIds = [...this.cartMap.keys()];
    let cartCount = 0;
    cartIds.map(id => {
      cartCount = cartCount + this.cartMap.get(id);
    });
    return cartCount;
  }
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
