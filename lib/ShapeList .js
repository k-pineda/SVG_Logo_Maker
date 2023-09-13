class ShapeList {
  static render(shapeList) {
    switch (shapeList) {
      case 'circle':
        return '<circle cx="100" cy="100" r="50" />';
      case 'triangle':
        return '<polygon points="100,25 75,100 125,100" />';
      case 'square':
        return '<rect x="50" y="50" width="100" height="100" />';
      default:
        throw new Error('Invalid shape');
    }
  }
}

module.exports = ShapeList;
