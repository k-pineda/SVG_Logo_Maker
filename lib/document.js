const Component = require('./component');
const SvgText = require('./svgText');
const SvgTextColor = require('./svgTextColor');
const ShapeList = require('./shapeList');
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

    // Ensure that shapeList is treated as an array
    const shapesToRender = Array.isArray(shapeList) ? shapeList : [shapeList];

    // Calculate text positions for all shapes
    let textX, textY;

    // Render all shapes in shapesToRender
    const renderedShapes = shapesToRender.map((shape) => {
      let shapeSvg = '';
      switch (shape) {
        case 'circle':
          textX = circleCenterX - (svgText.length * 5);
          textY = circleCenterY + 5;
          shapeSvg = `
            ${SvgTextColor.render(svgText, svgTextColor)}
            ${ShapeColor.render(ShapeList.render(shape), shapeColor)}
            <text x="${textX}" y="${textY}" fill="${svgTextColor}" font-weight="bold">${svgText}</text>
          `;
          break;
        case 'triangle':
          // Calculate triangle text positions
          textX = circleCenterX - (svgText.length * 5);
          textY = circleCenterY - 20; // Adjust for triangle height to center text
          shapeSvg = `
            ${SvgTextColor.render(svgText, svgTextColor)}
            ${ShapeColor.render(ShapeList.render(shape), shapeColor)}
            <text x="${textX}" y="${textY}" fill="${svgTextColor}" font-weight="bold">${svgText}</text>
          `;
          break;
        case 'square':
          // Calculate square text positions
          textX = circleCenterX - (svgText.length * 5);
          textY = circleCenterY + 5; // Adjust for square height
          shapeSvg = `
            ${SvgTextColor.render(svgText, svgTextColor)}
            ${ShapeColor.render(ShapeList.render(shape), shapeColor)}
            <text x="${textX}" y="${textY}" fill="${svgTextColor}" font-weight="bold">${svgText}</text>
          `;
          break;
        default:
          throw new Error('Invalid shape');
      }
      return shapeSvg;
    });

    // Include the <circle> element conditionally
    // const circleSvg = shapeList.includes('circle')
    //   ? `<circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="${shapeColor}" />`
    //   : '';

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      ${renderedShapes.join('\n')}
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
