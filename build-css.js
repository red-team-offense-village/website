const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// Path to your CSS file with Tailwind directives
const inputFile = path.join(__dirname, 'themes/Blonde/assets/css/main.css');
// Path where the processed CSS will be saved
const outputFile = path.join(__dirname, 'static/css/tailwind.css');

// Read the input file
fs.readFile(inputFile, (err, css) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  // Process the CSS with PostCSS and plugins
  postcss([
    tailwindcss,
    autoprefixer,
  ])
    .process(css, { from: inputFile, to: outputFile })
    .then((result) => {
      // Create directory if it doesn't exist
      const dir = path.dirname(outputFile);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write the processed CSS to the output file
      fs.writeFile(outputFile, result.css, (err) => {
        if (err) {
          console.error('Error writing output file:', err);
          return;
        }
        console.log('CSS successfully processed and saved to', outputFile);
      });
    })
    .catch((error) => {
      console.error('Error processing CSS:', error);
    });
});
