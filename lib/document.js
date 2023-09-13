const Component = require('./component');
const SvgText = require('./SvgText');
const SvgTextColor = require('./svgTextColor');
const ShapeList = require('./ShapeList ');
const ShapeColor = require('./ShapeColor');

class Document extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { svgText, svgTextColor, shape, shapeColor } = this.props;

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        ${SvgTextColor.render(svgText, svgTextColor)}
        ${ShapeColor.render(ShapeList.render(shape), shapeColor)}
      </svg>
    `;
  }
}

module.exports = {
  createDocument: (props) => new Document(props),
};
