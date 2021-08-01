function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `![License](https://img.shields.io/badge/license-Apache%202.0-blue)`;
      break;
    case 'GNU Public License v3.0':
      return `![License](https://img.shields.io/badge/license-GNU%20Pub%203.0-blue)`;
      break;
    case 'Open Software License 3.0':
      return `![License](https://img.shields.io/badge/license-Open%20Software%203.0-brightgreen)`;
      break;
    case 'MIT':
      return `![License](https://img.shields.io/badge/license-MIT-red)`;
      break;
    case 'Mozilla Public License 2.0':
      return `![License](https://img.shields.io/badge/license-Mozilla%202.0-yellow)`;
      break;
  
    default:
      break;
  }
}
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `![Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case 'GNU Public License v3.0':
      return `![GNU Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'Open Software License 3.0':
      return `![Open Saftware License 3.0](https://opensource.org/licenses/OSL-3.0)`;
      break;
    case 'MIT':
      return `![MIT License](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public License 2.0':
      return `![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
  
    default:
      break;
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data, githubInfo) {

  return `
  # **${data.title}**

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}

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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Repository
  - [Project Repo](${data.repo})

  ## Questions
  If you have any questions please send an e-mail to ${data.questions} or visit to review code https://github.com/${data.githubUsername}

`;
}

module.exports = generateMarkdown;
