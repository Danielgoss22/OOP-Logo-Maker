const { Circle, Square, Triangle } = require("../shapes.js");

describe("circle", () => {
  it("should take the userInput and pass textColor, text, and fill color to generate logo", () => {
    const circle = new Circle();
    circle.shapeColor("gold");

    expect(circle.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="gold" /> 
      `
    );
  });
});
describe("triangle", () => {
  it("should take the userInput and pass textColor, text, and fill color to generate logo", () => {
    const triangle = new Triangle();
    triangle.shapeColor("gold");

    expect(triangle.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="gold" />`
    );
  });
});
describe("render", () => {
  it("should take the userInput and pass textColor, text, and fill color to generate logo", () => {
    const square = new Square();
    square.shapeColor("gold");

    expect(square.render()).toEqual(
      `<rect x="70" y="50" width="150" height="150" fill="gold"/> `
    );
  });
});
