// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');

const generatePage = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'Please provide an email for users to contact you.',
    name: 'email'
},  
{
    type: 'input',
    message: 'What is your github username?',
    name: 'github'
}, 
{
    type: 'input',
    message:  'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message:  'Please describe your project in detail.',
    name: 'description'
},
{
    type: 'input',
    message:  'Please provide your installation instructions.',
    name: 'installation'
},    
{
    type: 'input',
    message:  'What is the projects intended usage?',
    name: 'usage'
},    
{
    type: 'list',
    message:  'Select a license you would like to display.',
    choices: ['MIT', 'Apache', 'AGPL-3.0', 'GPL-3.0', 'Unlicense'],
    name: 'license'
},  
{
    type: 'input',
    message: 'How can a user contribute to the project or repository?',
    name: 'contributing'
},  
{
    type: 'input',
    message: 'What tests have been performed on the project and how can a user perform the tests?',
    name: 'tests'
},  

];

// TODO: Create a function to write README file
const newfile = (fileName, answers)  =>{
    let content = generatePage(answers);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('Your readme was created successfully!')
    });
}

// // TODO: Create a function to initialize app
const init =() => {
    inquirer.prompt(questions).then(function (answers) {
        const fileName = './readme/README.md';
        newfile(fileName, answers)
    });
}

// Function call to initialize app
init();

