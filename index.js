// packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input

const userQuestions = () => {  
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your application:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of your application?',
        },
        {
            type: 'checkbox',
            name: 'license',
            choices: ['MIT', 'IBM', 'Mozilla', 'None'],
            message: 'Please pick your License:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please list contribution instructions:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please list testing instructions:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address:',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please include instructions for reaching out with questions:',
        },
    ]);
};

// function to initialize app
const init = () => {
    userQuestions()
        .then((answers) => writeFile('README.md', generateMarkdown(answers)))
        .then (() => console.log('Successfully generated README.md!'))
        .catch((err) => console.error(err));
};

// function call to initialize app
init();
