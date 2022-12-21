// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user input
// includes title, description, installation, usage, credits, license, features, contribute, tests, github, email.
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message:
      " List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    name: "credits",
  },
  // license should be in list form, no spaces
  {
    type: "list",
    message: "Which license do you want to include?",
    choices: ["Apache_2.0", "ISC", "MIT"],
    name: "license",
  },
  {
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "features",
  },
  {
    type: "input",
    message:
      " If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.",
    name: "contribute",
  },
  {
    type: "input",
    message:
      "If you've written tests for your application, provide examples on how to run them here.",
    name: "tests",
  },
  // include the next two parts in Questions section
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

// function to write README file
function writeToFile(fileName, data) {
  inquirer
    .prompt(questions)

    // data = giant object (answers from input)
    .then((data) => {
      console.log(data);
      const filename = "README.md";

      fs.writeFile(filename, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("README.md successfully created!")
      );
    });
}
writeToFile();
