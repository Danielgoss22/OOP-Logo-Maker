class Circle {
  constructor(size, text, fillColor) {
    this.size = size;
    this.text = text;
    this.fillColor = fillColor;
  }
}
class Square {
  constructor(size, text, fillColor) {
    this.size = size;
    this.text = text;
    this.fillColor = fillColor;
  }
}
class Triangle {
  constructor(size, text, fillColor) {
    this.size = size;
    this.text = text;
    this.fillColor = fillColor;
  }
}

function generateLogo(data) {
  return <circle cx="25" cy="75" r="20" />;
}
module.exports = generateLogo;
