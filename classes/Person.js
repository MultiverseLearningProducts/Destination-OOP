class Person {
  #bag;
  constractor(name, destination) {
    this.name = name;
    this.destination = destination;
    this.#bag = [];
  }
  addBags(bags) {
    return (this.#bag = bags);
  }
  getBags() {
    this.#bag;
  }
}

module.exports = Person;
