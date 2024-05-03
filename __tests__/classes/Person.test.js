const Person = require('../../classes/Person.js');
const { describe, it, test, expect } = require("@jest/globals");

const person = new Person('Ambal', 'NY');

describe('Person Test', () => {
  test('create an instance of the Person class', () => {
    expect(person instanceof Person).toBe(true);
  })

  test('name and destination assigned correctly', () => {
    expect(person.name).toBe('Ambal');
    expect(person.destination).toBe('NY');
  })

  test('Bags initializes as an empty array', () => {
    expect(person.getBags()).toEqual([]);
  })

  test('addBags() adds a bag to the bags array', () => {
    person.addBag({weight: 20, id: 123});
    expect(person.getBags()).toEqual([{weight: 20, id: 123}]);
  })
})