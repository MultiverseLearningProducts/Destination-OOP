const Plane = require("../../classes/Plane")
const Person = require("../../classes/Person")

describe("Plane test", ()=>{
    test("company, origin, and destination are assigned correctly ", ()=>{
        const plane1 = new Plane("JetBlue", "NY", "Cali")

        expect(plane1.company).toBe("JetBlue")

        expect(plane1.origin).toBe("NY");

        expect(plane1.destination).toBe("Cali")
    })

    // test("passengers array is initialize as empty ", ()=>{
    //     const plane1 = new Plane("JetBlue", "NY", "Cali")

    //     expect(plane1.passengers).toEqual([])
        
    // })


     test("passengers array is initialize as empty ", ()=>{
        const plane1 = new Plane("JetBlue", "NY", "Cali")

        expect(plane1.getPassengers()).toEqual([])
        
    })



    test("addPassenger method adds passenger ", ()=>{
        const plane1 = new Plane("JetBlue", "NY", "Cali")

        const person1 = new Person("Ousman", "Cali")

        plane1.addPassenger(person1)

        expect(plane1.getPassengers()).toEqual([person1])
        


    })



})

