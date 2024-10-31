class Bag {
    #owner
constructor(id, weight){
    this.id = id;
    this.weight = weight;
    this.#owner = null
}

getOwner() {
    return this.#owner
}

assignOwner(person){
    return this.#owner = person
}
}



module.exports = Bag;