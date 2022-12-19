// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
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
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "credits",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "tests",
    },
  {
    type: "checkbox",
    message: "Which license do you want to include?",
    name: "license",
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions)

// data = giant object (answers from input)
  .then((data) => {
    console.log(data);
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    
    fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("yay!")
  );
})
}
writeToFile();
// const filename = `${data.name.toLowerCase().split(' ').join('').json}`
// fs.writeToFile(filename, JSON.stringify(data, null, '\t'))

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
