const Bag = require("../../classes/Bag")

describe("Bag Test", ()=>{
    test("Can create an instance of the Bag Class", ()=>{
        const bag1 = new Bag(50,2);

        expect(bag1 instanceof Bag).toEqual(true)
    })

    test("weight property is assigned correctly", ()=>{
        const bag2 = new Bag(50,2);

        expect(bag2.weight).toEqual(50)
    })


    test("id property is assigned correctly", ()=>{
        const bag3= new Bag(50,2);

        expect(bag3.id).toBe(2)
    })

    test("owner property is initialized with value of null", ()=>{
        const bag4= new Bag(50,2)

        expect(bag4.owner).toBe(null)
    })

    test("getOwner method returns owner", ()=>{
        const bag1 = new Bag(50,2)

        expect(bag1.getOwner()).toBe(null)
    })

    test("assignOwner method update owner with person assigned", ()=>{
        const bag5= new Bag(50,2)

        bag5.assignOwner('Alex')

        expect(bag5.getOwner()).toBe("Alex")
    })



})