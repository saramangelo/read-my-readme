// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filename = `${data.name.toLowerCase().split(' ').join('').json}`
    fs.writeToFile(filename, JSON.stringify(data, null, '\t'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
