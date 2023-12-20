class Circle {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}
class Square {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="70" y="50" width="150" height="150" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
  }
}
class Triangle {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

function generateLogo(data) {
  console.log(data);
  if (data.shape === "Circle") {
    const shapeLogo = new Circle(data.color, data.initials, data.textColor);
    const template = shapeLogo.render();
    return template;
  } else if (data.shape === "Square") {
    const shapeLogo = new Square(data.color, data.initials, data.textColor);
    const template = shapeLogo.render();
    return template;
  } else {
    const shapeLogo = new Triangle(data.color, data.initials, data.textColor);
    const template = shapeLogo.render();
    return template;
  }
}

module.exports = generateLogo;
