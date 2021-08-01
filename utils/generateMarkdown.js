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
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description:
  ${answers.description}

  ![sceenshot](#)

  ## Table of Contents:
  * [1. Installation](#installation)
  * [2. Usage](#usage)
  * [3. License](license)
  * [4. Contributing](#contributing)
  * [5. Testing](#test)
  * [6. Questions](#questions)
  
  ### 1. Installation
  ${answers.installation}

  ### 2. Usage
  ${answers.usage}

  ### 3. License
  ${answers.license[0] || null}

  ### 4. Contributing
  ${answers.contributing}

  ### 5. Tests
  ${answers.tests}

  ### 6. Questions
  If you have any questions please send an e-mail to ${answers.questions} or visit to review code https://github.com/${answers.githubUsername}

`;
}

module.exports = generateMarkdown;
