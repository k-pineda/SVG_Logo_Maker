const inquirer = require('inquirer');
const { createDocument } = require('./document');
const { writeFile } = require('fs/promises');

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
      name: 'shapeList',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ]);

  // Creates and saves the SVG document based on user input
  const svgDocument = createDocument(answers);

  // Defines the file path where the SVG file will be saved
  const filePath = 'logo.svg';

  try {
    // Write the SVG content to the file
    await writeFile(filePath, svgDocument);

    console.log(`SVG logo generated successfully and saved as ${filePath}`);

    // Open the SVG file in the default web browser using dynamic import
    const open = await import('open');
    await open.default(filePath, { wait: false }); // { wait: false } makes the function not wait for the browser to close

    console.log(`SVG logo opened in the default web browser.`);
  } catch (error) {
    console.error('Error writing or opening SVG file:', error);
  }
}

generateLogo();
