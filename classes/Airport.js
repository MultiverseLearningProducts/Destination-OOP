class Airport {
  #planes;
  static airportCode = "SLC";
  constructor(name) {
    this.name = name;
    this.#planes = [];
  }

  getPlanes() {
    return this.#planes;
  }

  addPlane(plane) {
    this.#planes.push(plane);
  }
}

module.exports = Airport;
