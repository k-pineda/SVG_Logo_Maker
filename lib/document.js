const Component = require('./component');
const SvgText = require('./svgText');
const SvgTextColor = require('./svgTextColor');
const ShapeList = require('./shapeList ');
const ShapeColor = require('./shapeColor');

class Document extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { svgText, svgTextColor, shapeList, shapeColor } = this.props;

     // Calculate the position to center the text within the circle
     const circleRadius = 50;
     const circleCenterX = 100;
     const circleCenterY = 100;
     const textX = circleCenterX - svgText.length * 5; // Adjust for text width
     const textY = circleCenterY + 5; // Adjust for text height

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      ${SvgTextColor.render(svgText, svgTextColor)}
      ${ShapeColor.render(ShapeList.render(shapeList), shapeColor)}
      <circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="${shapeColor}"/>
      <text x="${textX}" y="${textY}" fill="${svgTextColor}" font-weight="bold">${svgText}</text>
    </svg>
    `;
  }
}

module.exports = {
  createDocument: (props) => {
    const document = new Document(props);
    return document.render(); // Return the rendered SVG content as a string
  },
};
