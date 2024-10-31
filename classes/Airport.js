class Airport {
static airportCode;
#planes
        constructor(name, airportCode){
            this.name = name;
            this.#planes = [];
            this.airportCode =  airportCode
        }
        
        getPlanes() {
            return this.#planes
        }
        
        addPlane(plane){
            return this.#planes.push(plane)
        }
    

}




module.exports = Airport;