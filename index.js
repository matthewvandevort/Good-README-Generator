// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

console.log('Hello! Time to create a README.md file for your project!');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message:'Please enter the title of your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
