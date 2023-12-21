const { Circle, Square, Triangle } = require("./shapes.js");
//shapeColor, text, textColor
describe("circle", () => {
  it("should take the userInput and pass shapeColor, text, and textColor to generate logo", () => {
    const circle = new Circle();
    circle.shapeColor = "black";
    circle.text = "DHG";
    circle.textColor = "white";

    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="black" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">DHG</text>
    
    </svg>`
    );
  });
});
describe("triangle", () => {
  it("should take the userInput and pass shapeColor, text, and textColor to generate logo", () => {
    const triangle = new Triangle();
    triangle.shapeColor = "black";
    triangle.text = "DHG";
    triangle.textColor = "white";

    expect(triangle.render()).toEqual(
      ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="black" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">DHG</text>
    
    </svg>`
    );
  });
});
describe("render", () => {
  it("should take the userInput and pass shapeColor, text, and textColor to generate logo", () => {
    const square = new Square();
    square.shapeColor = "black";
    square.text = "DHG";
    square.textColor = "white";

    expect(square.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <rect x="70" y="50" width="150" height="150" fill="black"/>
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">DHG</text>
    
    </svg>`
    );
  });
});
