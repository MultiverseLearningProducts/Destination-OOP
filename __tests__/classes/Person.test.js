const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Testing for Person", () => {
  const person = new Person("Codey", "San Diego");
  test("When creating a new person it is an instance of Person", () => {
    expect(person instanceof Person).toBeTruthy();
  });

  test("Should have a name property", () => {
    expect(person.name).toEqual("Codey");
  });

  test("Should have a destination property", () => {
    expect(person.destination).toEqual("San Diego");
  });

  test("Should initialize bags array as empty", () => {
    expect(Array.isArray(person.getBags())).toBeTruthy();
    expect(person.getBags()).toHaveLength(0);
  });

  test("Should add Bags to array with addBag", () => {
    const bag = new Bag(100, 1);
    person.addBag(bag);
    expect(person.getBags()).toHaveLength(1);
  });
});
