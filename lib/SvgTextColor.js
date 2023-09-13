const Component = require('./component');

class SvgTextColor extends Component {
  constructor(color) {
    super();
    this.color = color;
  }

  render(content) {
    return `<g fill="${this.color}">${content}</g>`;
  }
}

module.exports = {
  render: (content, color) => {
    const svgTextColor = new SvgTextColor(color);
    return svgTextColor.render(content);
  },
};
