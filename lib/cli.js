const inquirer = require('inquirer');
const { createDocument } = require('./document');

async function generateLogo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'svgText',
      message: 'Enter the SVG text:',
    },
    {
      type: 'input',
      name: 'svgTextColor',
      message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ]);

  // Create and save the SVG document based on user input
  const svgDocument = createDocument(answers);
  // You would write the SVG document to a file here.

  console.log('SVG logo generated successfully!');
}

generateLogo();
