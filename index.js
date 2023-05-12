// packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// an array of questions for user input

const userQuestions = () => {  
    return inquirer.prompt([
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
    ]);
};

const generateREADME = ({ motivation, build, problem, learn, standout }) =>
    `My  motivation in creating this was ${motivation}.
     I built this project because ${build}.
     This application solves the problem of ${problem}.
     Through creating this application, I learned ${learn}.
     This project stands out because ${standout}.`

// function to initialize app
function init = () => {
    userQuestions()
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then (() => console.log('Successfully generated README.md!'))
        .catch((err) => console.error(err));
};

// function call to initialize app
init();
