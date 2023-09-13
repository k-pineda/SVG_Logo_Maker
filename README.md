# SVG Logo Generator

The SVG Logo Generator is a command-line application designed to simplify the process of creating a simple logo for your projects. It allows users to generate a logo with custom text, colors, and shapes, and then save it as an SVG (Scalable Vector Graphics) file. This tool is particularly useful for quickly creating logos for personal or small-scale projects.

## Motivation

The motivation behind this project was to provide a straightforward and user-friendly way to generate logos. Logos are an essential part of branding and project identification, and having a tool to create them quickly can be a significant time-saver. Whether you need a logo for a personal blog, a small business, or any other project, this SVG Logo Generator can help you design a logo that suits your needs.

## Description

The SVG Logo Generator is a Node.js command-line application that leverages the power of JavaScript and various libraries to create custom logos. Here's how it works:

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/k-pineda/SVG_Logo_Maker.git
   ```

2. Navigate to the project folder:

   ```
   cd SVG_Logo_Maker
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. To ensure everything is set up correctly, run the tests using Jest:

   ```
   npx jest
   ```

### Usage

1. After successfully installing the application, you can start generating logos by entering the following command in your terminal:

   ```
   node lib/cli.js
   ```

2. Follow the command-line prompts to customize your logo:
   - Choose a text for your logo (up to 3 characters).
   - Specify the text color using CSS color names (e.g., 'black') or hexadecimal color codes (e.g., #F38181).
   - Select a shape for your logo from three options: circle, triangle, or square.
   - Set the shape's color using CSS color names or hexadecimal color codes.

3. Once you've completed the prompts, the SVG Logo Generator will create your custom logo.

4. The generated logo will be saved as an SVG file in the project directory and will be named `logo.svg`.

5. You can now use your newly created logo for your project, website, or any other branding needs.

**Note:** The SVG Logo Generator imposes a character limit of 3 characters for the logo text to keep the logos simple and visually appealing.

## Walkthrough Video

To help you get started, we've provided a walkthrough video that demonstrates how to use the SVG Logo Generator. 



https://github.com/k-pineda/SVG_Logo_Maker/assets/128410226/3f49e1a9-f548-497e-a462-2d00cff22086



Feel free to experiment with different text, colors, and shapes to create unique logos for your projects!

We hope you find this SVG Logo Generator helpful in creating logos for your projects. 

Happy logo designing!
