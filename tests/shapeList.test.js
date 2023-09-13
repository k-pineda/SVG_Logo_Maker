const ShapeList = require('../lib/shapeList ');

test('ShapeList.render() should render SVG shape based on input', () => {
  const circle = ShapeList.render('circle');
  const triangle = ShapeList.render('triangle');
  const square = ShapeList.render('square');

  expect(circle).toMatch('<circle cx="100" cy="100" r="50" />');
  expect(triangle).toMatch('<polygon points="100,25 75,100 125,100" />');
  expect(square).toMatch('<rect x="50" y="50" width="100" height="100" />');
});
