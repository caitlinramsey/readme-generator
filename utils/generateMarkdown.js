//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else {
  if(license == 'IBM') {
    return 'https://img.shields.io/badge/License-IPL_1.0-blue.svg'
  } else {
  if(license == 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  }
  }
  }
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else {
  if(license == 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  } else {
  if(license == 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  }
  }
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return ''
  }

  return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
} 

//function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contributing, tests, github, email, instructions }) {
  return `# ${title}

${renderLicenseSection(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [GitHub](#github)
- [Email](#email)
- [Instructions](#instructions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## GitHub
GitHub: ${github}

## Email
Email: ${email}

## Instructions 
${instructions}

`;
}
module.exports = generateMarkdown;
