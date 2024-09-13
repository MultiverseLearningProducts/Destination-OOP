const { Person } = require("../classes/Person");

describe("Test Person", () => {
  test("Components", () => {
    const person = new Person("Jack", "London");
    expect(person.name).toBe("Jack");
    expect(person.destination).toBe("London");
    expect(person.bags).toEqual([]);
    Person.addBags("bag");
    expect(Person.getBags()).toEqual("bag");
  });
});
