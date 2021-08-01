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

  return `
  # **${answers.title}**

  ${answers.badge}

  ## Description:
  ${answers.description}

  ![sceenshot](#)

  ## Table of Contents:
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Testing](#Test)
  * [Repository Link](#Repository)
  * [GitHub Information](#GitHub)
  * [Questions](#Questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Repository
  - [Project Repo](${answers.repo})

  ## GitHub

  ![Image of myself](${githubInfo.githubImage})
  * ${githubInfo.nam}
  * [GitHub Profile](${githubInfo.profile})
  * <${githubInfo.email}>

  ## Questions
  If you have any questions please send an e-mail to ${answers.questions} or visit to review code https://github.com/${answers.githubUsername}

`;
}

module.exports = generateMarkdown;
