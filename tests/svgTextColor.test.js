const SvgTextColor = require('../lib/svgTextColor');

test('SvgTextColor.render() should wrap content with the specified fill color', () => {
  const content = '<text>Sample Text</text>';
  const color = 'blue';

  const result = SvgTextColor.render(content, color);

  expect(result).toMatch(`<g fill="${color}">${content}</g>`);
});
