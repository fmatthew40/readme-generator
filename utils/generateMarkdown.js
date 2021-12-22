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
  2.  [Description](#description)
  3.  [Installation](#installation)
  4.  [Usage](#usage)
  5.  [Contributing](#contributing)
  6.  [Tests](#tests)
  7.  [Questions](#questions)

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
 To find out more information about this license, visit the link below.
 https://choosealicense.com/licenses/${data.license.toLowerCase()}/

`;
}



module.exports = generateMarkdown;
