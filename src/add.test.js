import add from "./add";
test("addition", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(-1, 1)).not.toBe(1);
});
