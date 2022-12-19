// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description 
  ${data.description}
  
  ## Table of Contents (Optional)
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
   
  
  ## Credits
  ${data.credits}
  
  
  ## License
  ${data.license}
  
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-color=<COLOR>)](https://opensource.org/licenses/${data.license})

  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  ${data.tests}
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
