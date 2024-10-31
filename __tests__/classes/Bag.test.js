const Bag = require("../../classes/Bag")

describe("Bag tests", () =>{
    const bag1 = new Bag(1, 340);

    test('Can create a bag instance', () =>
    expect(bag1 instanceof Bag).toBe(true))


    test("Can set owner", () =>
    expect(bag1.assignOwner("Jeff")).toBe("Jeff"))

    test("Can get owner", () => {
        expect(bag1.getOwner()).toBe("Jeff")
    })

})
