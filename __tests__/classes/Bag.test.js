const Bag = require('../../classes/Bag.js');
const { describe, it, test, expect } = require("@jest/globals");

const bag = new Bag(20, 123)

describe('Bag Test', () => {
  test('create an instance of the Bag class', () => {
    expect(bag instanceof Bag).toBe(true);
  })

  test('weight and id assigned correctly', () => {
    expect(bag.weight).toBe(20);
    expect(bag.id).toBe(123);
  })

  test('owner: The person assigned to a Bag. Initialized with a value of null', () => {
    expect(bag.getOwner()).toBe(null);
  })

  test('update owner with a Person assigned to a Bag', () => {
    bag.assignOwner('Peter')
    expect(bag.getOwner()).toEqual('Peter');
  })
})