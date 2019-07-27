import ShopStore from "../../../Stores/ShopStore/index";
let shopStore = new ShopStore();
test("addition", () => {
  shopStore.AddorRemoveSizes("S");
  expect(shopStore.selectedSizes).toEqual(["S"]);
  shopStore.AddorRemoveSizes("S");
  expect(shopStore.selectedSizes).toEqual([]);
  shopStore.AddorRemoveSizes("S");
  expect(shopStore.selectedSizes).toEqual(["S"]);
  shopStore.AddorRemoveSizes("M");
  expect(shopStore.selectedSizes).toEqual(["S", "M"]);
});
