const { Plane } = require("../classes/Plane");

describe("Plane", () => {
  test("Test components", () => {
    const plane = new Plane("Airplane", "Germany", "New York");
    expect(plane.company).toBe("Airplane");
    expect(plane.origin).toBe("Germany");
    expect(plane.destination).toBe("New York");
    expect(plane.passengers).toEqual([]);
  });
  test("Test Plane function", () => {
    const plane = new Plane("Airplane", "Germany", "New York");
    const person = ("Jack", "London");
    plane.addPassenger(person);
    expect(plane.getPassengers()).toContain(person);
  });
});
