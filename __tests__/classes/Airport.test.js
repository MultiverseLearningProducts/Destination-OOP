const Airport = require('../../classes/Airport.js');
const { describe, it, test, expect } = require("@jest/globals");

const airport = new Airport('Luton Airport', 'LA');

describe('Airport Test', () => {
  test('name and airCode assigned correctly', () => {
    expect(airport.name).toBe('Luton Airport');
    expect(Airport.airportCode).toBe('XYZ');
  })

  test('Airport initializes as an empty array', () => {
    expect(airport.getPlanes()).toEqual([]);
  })

  test('addPassenger() adds a bag to the bags array', () => {
    airport.addPlane('B 747');
    expect(airport.getPlanes()).toEqual(['B 747']);
  })
})