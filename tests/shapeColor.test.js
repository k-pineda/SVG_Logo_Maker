const ShapeColor = require('../lib/shapeColor');

test('ShapeColor.render() should wrap content with the specified fill color', () => {
  const content = '<circle cx="100" cy="100" r="50" />';
  const color = 'green';

  const result = ShapeColor.render(content, color);

  expect(result).toMatch(`<g fill="${color}">${content}</g>`);
});
