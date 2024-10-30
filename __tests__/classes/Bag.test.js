const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Testing for Bag", () => {
  const bag = new Bag(24, 1);
  test("When creating a new bag it is an instance of Bag", () => {
    expect(bag instanceof Bag).toBeTruthy();
  });

  test("Should have weight property", () => {
    expect(bag.weight).toBe(24);
  });

  test("Should have id property", () => {
    expect(bag.id).toBe(1);
  });

  test("Should have null as the owner property initially", () => {
    expect(bag.getOwner()).toBeNull();
  });

  test("Should be able to assign the Bag to a Person", () => {
    const person = new Person("Codey", "San Diego");
    bag.assignOwner(person);
    expect(bag.getOwner()).toEqual(person);
  });
});
