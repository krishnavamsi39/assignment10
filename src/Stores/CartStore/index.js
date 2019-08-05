import { observable, action, computed } from "mobx";
import { jsonToString } from "webpack/lib/Stats";

class CartStore {
  shopStore;
  constructor(shopStore) {
    this.shopStore = shopStore;
  }
  @observable cartMap = new Map();

 mapToObj=(inputMap) =>{
  let obj = {};

  inputMap.forEach(function(value, key){
      obj[key] = value
  });

  return obj;
}
 objectToMap=(obj)=> {
  let map = new Map();
  Object.keys(obj).forEach(key => {
      map.set(parseInt(key), parseInt(obj[key]));
  });
  return map;
}
@action getCartItems(){
  this.cartMap = this.objectToMap(JSON.parse(localStorage.getItem('CartMap')));
}
  @computed get total() {
  
    let total = 0;
    let installments = 0;
    this.shopStore.productList.map(product => {
      if (this.cartMap.has(product.id)) {
        installments = installments + product.installments;
        total = total + product.price * this.cartMap.get(product.id);
      }
    });
    let totalList = [];
    totalList.push(total.toFixed(2));
    totalList.push(installments);
    totalList.push((total / installments).toFixed(2));
    console.log(totalList);
    return totalList;
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
    localStorage.setItem('CartMap',JSON.stringify(this.mapToObj(this.cartMap)))

  }
  @action addToCart(id) {
   
    if (this.cartMap.has(id)) {
      this.cartMap.set(id, this.cartMap.get(id) + 1);
    } else {
      this.cartMap.set(id, 1);
    }
    localStorage.setItem('CartMap',JSON.stringify(this.mapToObj(this.cartMap)))
  }
}
export default CartStore;
