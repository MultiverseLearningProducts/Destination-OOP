const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag")

describe("Person class", ()=>{
    test("instance of the person class", ()=>{
        const person1 = new Person("Ousman", "Cali");

        expect(person1 instanceof Person).toEqual(true)
    })

    test("name property assigned correctly", ()=>{
        const person1 = new Person("Ousman", "Cali");

        expect(person1.name).toBe("Ousman")

    })

    test("destination property assigned correctly", ()=>{
        const person1 = new Person("Ousman", "Cali");
        
        expect(person1.destination).toBe("Cali")
    })

    // test("bags array is initialized as empty array", ()=>{
    //     const person1 = new Person("Ousman", "Cali");

    //     expect(person1.bags).toEqual([])
    // })

      test("getBags method returns an array", ()=>{
        const person1 = new Person("Ousman", "Cali");

        expect(person1.getBags()).toEqual([])
    })



    test("addBags method adds a bag to the bags array",()=>{
        const person1 = new Person("Ousman", "Cali");
        const bag1 = new Bag(50,3)

        person1.addBag(bag1)
        expect(person1.getBags()).toEqual([bag1])
    })
})
