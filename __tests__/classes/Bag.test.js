const { Bag } = require("../../classes/Bag");

describe("Bag Test", () => {
  test("Test to create an instance of the Bag class", () => {
    const bag = new Bag(20, 1234);
    expect(bag.weight).toBe(20);
    expect(bag.id).toBe(1234);
    bag.setOwner("John");
    expect(bag.getOwner()).toBe("John");
  });
});
