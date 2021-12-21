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
  return `
  
  ## ${data.title}

  ## License 
  ${data.license}

  ## Table of Contents
  [License](#license),
  [Description](#description),
  [Installation](#installation),
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

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
 # If you have any questions, feel free to email me at ${data.email}. 
 You can also visit my github page at www.github.com/${data.github}.
 

`;
}



module.exports = generateMarkdown;