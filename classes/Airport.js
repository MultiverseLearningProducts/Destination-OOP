class Airport {
static airportCode;
#planes
        constructor(name, airportCode ){
            this.name = name;
            this.#planes = [];
        }
        
        getPlanes() {
            return this.#planes
        }
        
        addPlane(plane){
            return this.#planes.push(plane)
        }
    

}

let p1 = new Airport("H", "TKY", )


console.log(p1.airportCode)

module.exports = Airport;