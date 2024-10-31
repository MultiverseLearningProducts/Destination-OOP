const Airport = require("../../classes/Airport");
const Person = require("../../classes/Person");
const Plane = require("../../classes/Plane");

describe("Testing for Plane", () => {
  const plane = new Plane("Southwest", "Dallas", "SLC");
  test("When creating a new plane it is an instance of Plane", () => {
    expect(plane instanceof Plane).toBeTruthy();
  });

  test("Should have company property", () => {
    expect(plane.company).toEqual("Southwest");
  });

  test("Should have origin property", () => {
    expect(plane.origin).toEqual("SLC");
  });

  test("Should have destination property", () => {
    expect(plane.destination).toEqual("Dallas");
  });

  test("Should initialize passengers array as empty", () => {
    expect(Array.isArray(plane.getPassengers())).toBeTruthy();
    expect(plane.getPassengers()).toHaveLength(0);
  });

  test("Should add Person to passengers with addPassenger", () => {
    const person = new Person("Gepetto", "Atlanta");
    plane.addPassenger(person);
    expect(plane.getPassengers()).toHaveLength(1);
  });
});
