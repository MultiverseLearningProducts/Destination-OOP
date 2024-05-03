class Airport {
  static airportCode = 'XYZ';
  #planes;

  constructor(name) {
    this.name = name;
    this.#planes = [];
  }

  getPlanes() {
    return this.#planes;
  }

  addPlane(plane) {
    return this.#planes.push(plane);
  }
}


module.exports = Airport;