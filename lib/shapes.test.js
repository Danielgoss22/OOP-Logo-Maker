const Circle = require("../shapes.js");
const Triangle = require("../shapes.js");
const Square = require("../shapes.js");

describe("render", () => {
  it("should take the userInput and pass textColor, text, and fill color to generate logo", () => {
    //shapeColor, text, textColor
    const circle = new Circle(gold, BMRG, pink);
    expect(circle.render(2, 2)).toEqual(total);
  });
});
describe("render", () => {
  it("should take the userInput and pass textColor, text, and fill color to generate logo", () => {
    //shapeColor, text, textColor
    const triangle = new Triangle(gold, BMRG, pink);
    expect(circle.render(2, 2)).toEqual(total);
  });
});
describe("render", () => {
  it("should take the userInput and pass textColor, text, and fill color to generate logo", () => {
    //shapeColor, text, textColor
    const square = new Square(gold, BMRG, pink);
    expect(circle.render(2, 2)).toEqual(total);
  });
});
