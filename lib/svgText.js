const Component = require('./component');

class SvgText extends Component {
  constructor(text) {
    super();
    this.text = text.slice(0, 3);
  }

  render() {
    const { text, fill } = this;
    return `
      <g fill="${fill}">
        <text x="10" y="50">${text}</text>
      </g>
    `;
  }
}

module.exports = {
  render: (text, fill) => {
    // Ensure the input text does not exceed three characters
    text = text.slice(0, 3);

    const svgText = new SvgText(text);
    svgText.fill = fill;
    return svgText.render();
  },
};
