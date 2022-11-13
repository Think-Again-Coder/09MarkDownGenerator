//Packages below are Inquirer and fs, used to create question prompts and store files in memory. 
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Enter your Title please.'

    },
    {
    type: 'input',
    name: 'description',
    message: 'Enter you description please.'
    },
    {
    type: 'checkbox', 
    name: 'license',
    choices: ["MIT", "GPLv3", "GPL"],
    message: 'Pick your License.'
}, 
{
    type: 'input',
    name: 'Usage',
    message: 'Please enter your usage instructions.'
}, 
{
    type: 'input',
    name: 'Installation',
    message: 'Enter your instructions for installation.'

    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Enter your contribution guidelines please.'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter instructions for testing the app.'
    
        },
        {
        type: 'input',
        name: 'Username',
        message: 'Enter you username please.'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter you Email please.'
            },
]; 

// TODO: Create a function to write README file
const filename = "README.md";

function writeToFile(filename, data) { 
    var readmeInfo = generateMarkdown(data)
    fs.writeFileSync(filename, readmeInfo)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(filename, answers) 

    })

}

// Function call to initialize app
init();
