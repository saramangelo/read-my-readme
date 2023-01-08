//function to generate markdown for README

// includes data.title, data.description, data.installation, data.usage, data.license, data.features, data.contribute, data.tests, data.github, data.email from index.js questions
function generateMarkdown(data) {
  return `

# ${data.title} 
![Github license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen)

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
- Github: https://github.com/${data.github}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
