const Person = require("../../classes//Person")

describe("Person test", () => {
    const person1 = new Person("hashid", "Dubai");

    test("Can create an instance of Person", () => {
    expect(person1 instanceof Person).toBe(true)
})

    test("Can add and get bag", () => {
        person1.addBag("Angela")
        expect(person1.getBag()).toEqual(["Angela"])

    })
})