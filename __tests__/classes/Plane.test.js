const Plane = require("../../classes/Plane")


describe("Plane tests", () => {
    const plane1 = new Plane("Delta", "NYC")
    
    test("Can create a plane instance", () => {
            expect (plane1 instanceof Plane).toBe(true)
        })

    test("Can add passengers and return passenger", () => {
        plane1.addPassenger("Carlos")
        expect(plane1.getPassengers()).toEqual(["Carlos"])
    })
})