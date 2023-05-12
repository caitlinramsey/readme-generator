// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer   
    .prompt([
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'build',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
        },
        {
            type: 'input',
            name: 'standout',
            message: 'What makes your project stand out?',
        },
    ])
    .then((answers) => {
        const readMeContent = generateREADME(answers);

        fs.writeToFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
        );
    });
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fileName + questions + data
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
