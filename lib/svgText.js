const Component = require('./component');

class SvgText extends Component {
  constructor(text) {
    super();
    this.text = text;
  }

  render() {
    return `<text x="10" y="50">${this.text}</text>`;
  }
}

module.exports = {
  render: (text, color) => {
    const svgText = new SvgText(text);
    svgText.props.fill = color;
    return svgText.render();
  },
};
