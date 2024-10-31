const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");

describe("Testing for Airport", () => {
  const airport = new Airport("Salt Lake City International", "SLC");
  test("When creating a new airport it is an instance of Airport", () => {
    expect(airport instanceof Airport).toBeTruthy();
  });

  test("Should have a name property", () => {
    expect(airport.name).toEqual("Salt Lake City International");
  });

  test("Should return a three letter string for airport code", () => {
    expect(Airport.airportCode).toEqual("SLC");
  });

  test("Should initialize planes array as empty", () => {
    expect(Array.isArray(airport.getPlanes())).toBeTruthy();
    expect(airport.getPlanes()).toHaveLength(0);
  });

  test("Should add Plane to array with addPlane", () => {
    const plane = new Plane("Delta", "origin", "destinitaion");
    airport.addPlane(plane);
    expect(airport.getPlanes()[0]).toBe(plane);
  });
});
