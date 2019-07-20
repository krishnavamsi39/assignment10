import { observable, action, computed } from "mobx";
import productList from "../../Constants/productList";

class CartStore {
  @observable cartMap = new Map();
  @computed get total() {
    const cartIds = [...this.cartMap.keys()];
    let total = 0;
    cartIds.map(id => {
      productList.map(product => {
        if (id === product.id) {
          total = total + product.price * this.cartMap.get(id);
        }
      });
    });
    return total;
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
