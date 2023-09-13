class ShapeColor {
    static render(content, color) {
      return `<g fill="${color}">${content}</g>`;
    }
  }
  
  module.exports = ShapeColor;
  