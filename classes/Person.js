class Person {
    

constructor(name, destination){
    this.name = name;
    this.destination = destination;
    this.bags = []
}

addBag(bag) {
   return this.bags.push(bag)
}

getBag() {
    return this.bags
}
}




module.exports = Person;