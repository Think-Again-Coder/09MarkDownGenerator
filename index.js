//Packages below are Inquirer and fs, used to create question prompts and store files in memory. 
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const { error } = require("console");

//Questions for the the user input below in an array. 
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Enter the Title of your project: '
    },
    {
    type: 'input',
    name: 'description',
    message: 'Enter your project description:'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Enter your instructions for installation:'
    }, 
    {
    type: 'input',
    name: 'installation',
    message: 'Please enter your instructions for using application:'
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Enter your instructions for testing the application:'
    },
    {
    type: 'input',
    name: 'contributions',
    message: 'Enter your contribution guidelines:'
    },
    {
    type: 'input',
    name: 'user',
    message: 'Enter your GitHub username please:'
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your Email please: '
    },
    {
    type: 'checkbox', 
    name: 'License type',
    choices: ["MIT", "GPLv3", "GPL"],
    message: 'Finally, choose what type of license to apply: '
    },
]; 

// function to write the README file
const filename = "README.md";

function writeToFile(filename, data) { 
    var readmeInfo = generateMarkdown(data)
    fs.writeFileSync(filename, readmeInfo);
};

// a function to initialize questions in app.
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(filename, answers);
    })

};

// Function call to initialize app as a whole.
init();
