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
        message:'Please enter the badge links that you want to use.',
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
        type: "input",
        name: 'license',
        message:'Please enter the license or the badge link that you want to use',
        
    },
    {
        type: "input",
        name: 'contributing',
        message:'Who contributed to making this project?',
    },
    {
        type: "input",
        name: 'tests',
        message:'How do you test this project and enter the project tests.',
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
    {
        type: "input",
        name: 'repo',
        message:'Plese enter your repository link.',
    },
];

// Function to write README file and get API call from GitHub
inquirer
    .prompt(questions)
    .then(function(answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;

        axios.get(queryUrl).then(function(response) {

            const githubInfo = {
                githubImage: response.data.avatar_url,
                profile: response.data.html_url,
                name: response.data.name,
                email: response.data.email
            };
        fs.writeFile('generated-README.md', generateMarkdown(answers, githubInfo), function (err){
            if (err) {
                throw err;
            };

            console.log('Your README.md file was created. Success!');
        });
    });
});


function init() {

}

init();
