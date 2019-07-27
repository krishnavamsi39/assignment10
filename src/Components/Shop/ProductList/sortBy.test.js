import ShopStore from "../../../Stores/ShopStore";
let shopStore = new ShopStore();
test("changeSelectSort", () => {
  shopStore.changeSelectSortBy("low-to-high");
  expect(shopStore.selectSortBy).toBe("low-to-high");

  shopStore.changeSelectSortBy("high-to-low");
  expect(shopStore.selectSortBy).toBe("high-to-low");
});
