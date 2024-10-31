class Plane {
#passengers
    constructor(company, origin, destination){
        this.company = company;
        this.origin = origin;
        this.destination = destination,
        this.#passengers = []
    }
    
    getPassengers() {
        return this.#passengers
    }
    
    addPassenger(passenger){
        return this.#passengers.push(passenger)
    }


}

let p1 = new Plane("H", "TKY", "NY")
p1.addPassenger(bag)
p1.getPassengers()

console.log(p1)

module.exports = Plane;