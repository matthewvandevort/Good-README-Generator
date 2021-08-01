// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const axios = require("axios");

console.log('Hello! Time to create a README.md file for your project!');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message:'Please enter the title of your project.',
    },
    {
        type: "input",
        name: 'badge',
        message:'Please enter the title of your project.',
    },
    {
        type: "input",
        name: 'description',
        message:'Please enter a description of your project.',
    },
    {
        type: "input",
        name: 'installation',
        message:'Please enter how to install this application.',
    },
    {
        type: "input",
        name: 'usage',
        message:'How do you use this application?',
    },
    {
        type: "checkbox",
        name: 'license',
        message:'What license do youwant to use?',
        choices: [
            'MIT',
            'Creative Commons',
            'Apache',
            'European Union Public License 1.1',
            'Open Software License 3.0',
            'Mozilla Public License 2.0',
            'ISC'
        ],
    },
    {
        type: "input",
        name: 'contributing',
        message:'Who contributed to making this project?',
    },
    {
        type: "input",
        name: 'tests',
        message:'How do you test this project?',
    },
    {
        type: "input",
        name: 'questions',
        message:'Who should be eamiled for questions regarding this project and how it was developed?',
    },
    {
        type: "input",
        name: 'githubUsername',
        message:'Plese enter your GitHub Username',
    },
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then(answers => {
    fs.writeFile('generated-README.md', generateMarkdown(answers),function (err){
        console.log(err)
    })
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
