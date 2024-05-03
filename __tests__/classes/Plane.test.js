const Plane = require('../../classes/Plane.js');
const { describe, it, test, expect } = require("@jest/globals");

const plane = new Plane('Ryanair', 'LA');

describe('Plane Test', () => {
  test('company, origin and destination assigned correctly', () => {
    expect(plane.company).toBe('Ryanair');
    expect(plane.origin).toBe('XYZ');
    expect(plane.destination).toBe('LA');
  })

  test('Plane initializes as an empty array', () => {
    expect(plane.getPassengers()).toEqual([]);
  })

  test('addPassenger() adds a bag to the bags array', () => {
    plane.addPassenger('Andrew');
    expect(plane.getPassengers()).toEqual(['Andrew']);
  })
})