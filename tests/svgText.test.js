const SvgText = require('../lib/svgText');

test('SvgText.render() should render SVG text with fill color', () => {
  const text = 'Hello, World!';
  const color = 'red';

  const result = SvgText.render(text, color);

  expect(result).toMatch(`<text x="10" y="50">${text}</text>`);
  expect(result).toMatch(`<g fill="${color}">`);
});
