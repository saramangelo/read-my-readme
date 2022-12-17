// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
      type: "input",
      message: "What is the description of the project?",
      name: "Description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "Installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "Usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "Contributing",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "Tests",
    },
  {
    type: "checkbox",
    message: "Which license do you want to include?",
    name: "License",
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "Questions",
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "Questions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions)


//   .then((data) => {
//     console.log(data);
//     const filename = `${data.name.toLowerCase().split(' ').join('').json}`;
    
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.error(err) : console.log("yay!")
//   );
// })
}
// const filename = `${data.name.toLowerCase().split(' ').join('').json}`
// fs.writeToFile(filename, JSON.stringify(data, null, '\t'))

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
