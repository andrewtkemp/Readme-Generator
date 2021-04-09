// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What would you like your Project Title to be called?',
      name: 'title',
    },
    {
      type: 'checkbox',
      message: 'Please select your badge(s)',
      name: 'badge',
      choices: ["HTML", "Javascript", "CSS", 'Node'],
    },
    {
      type: 'input',
      message: 'What do you need to install to use this application?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How does someone use this app?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who created this project?',
      name: 'credit',
    },
    {
      type: 'checkbox',
      message: 'Choose your license.',
      name: 'license',
      choices: ["GNU", "MIT", "Apache"]
    },
  ])
  .then((response) => {
   console.log(response.license)
   if (response.license === 'MIT') {
      const responseText = `license: ${response.license}`
    fs.writeFile('log.txt', responseText, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
   }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
