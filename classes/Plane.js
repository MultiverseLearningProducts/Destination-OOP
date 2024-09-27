class Plane {
    #passengers = []

    constructor(company,origin,destination){
        this.company = company;
        this.origin = origin;
        this.destination = destination;

    }

    static airportCode = this.origin;

    getPassengers(){
        return this.#passengers
    }

    addPassenger(passenger){
        this.#passengers.push(passenger)
    }



}


module.exports = Plane;