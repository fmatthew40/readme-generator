// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

//   }
// }
// renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## ${data.title}

  ## ![screenshot](https://img.shields.io/badge/License-${data.license}-blue.svg)


  ## Table of Contents
  1.  [License](#license)
  2.  [Demonstration](#demonstration)
  3.  [Description](#description)
  4.  [Installation](#installation)
  5.  [Usage](#usage)
  6.  [Contributing](#contributing)
  7.  [Tests](#tests)
  8.  [Questions](#questions)

 ## Demonstration
 Please visit the following link to view a demonstration video of this application. 
 ${data.demonstration}

 ## Description
 ${data.description}

 ## Installation 
 ${data.installation}

 ## Usage 
 ${data.usage}

 ## Contributing 
 ${data.contributing}

 ## Tests 
 ${data.tests}

 ## Questions
 If you have any questions, feel free to email me at ${data.email}. 
 You can also visit my github page at www.github.com/${data.github}.
 
 ## License 
 This project has a project license of ${data.license}.  
 To find out more information about this license, visit the following link.
 https://choosealicense.com/licenses/${data.license.toLowerCase()}/

`;
}



module.exports = generateMarkdown;
