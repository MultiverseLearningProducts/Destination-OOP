const Airport = require("../../classes/Airport")

describe("Airplane Tests", () => {
    const LGA = new Airport("LGA", 908);
  
    test("Creates an instance of Airplane", () => {
        expect(LGA instanceof Airport).toBe(true)
    })

    test("Can add a plane and return plane's array", () => {
        LGA.addPlane("Emirates")
        expect(LGA.getPlanes()).toEqual(["Emirates"])
    })
})