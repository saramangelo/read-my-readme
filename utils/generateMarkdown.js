// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// includes data.title, data.description, data.installation, data.usage, data.license, data.features, data.contribute, data.tests, data.github, data.email from index.js questions
function generateMarkdown(data) {
  return `![Github license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen)

# ${data.title} 


## Description 
${data.description}
  
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.installation}
  
  
## Usage
${data.usage}
   
  
## Credits
${data.credits}
  
  
## License
${data.license}


## Features
${data.features}


## How to Contribute
${data.contribute}  
(https://www.contributor-covenant.org/)
  

## Tests
${data.tests}
  

## Questions
Reach me at the links below with additional questions:
- Github username: ${data.github}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
