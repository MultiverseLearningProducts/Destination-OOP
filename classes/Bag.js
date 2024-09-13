class Bag {
  #Person;
  constructor(weight, id) {
    this.weight = weight;
    this.id = id;
    this.#Person = null;
  }
  getOwner() {
    return this.#Person;
  }
  setOwner(person) {
    this.#Person = person;
  }
}

module.exports = Bag;
