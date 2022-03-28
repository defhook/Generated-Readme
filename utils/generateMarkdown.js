// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  let badge = '';
  if(licenses === 'ISC') {
    badge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
  } else if (licenses === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (licenses === 'Mozilla') {
    badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  let licenseLink = '';
  if(licenses === 'ISC') {
    licenseLink = 'https://opensource.org/licenses/ISC'
  } else if (licenses === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT/'
  } else if (licenses === 'Mozilla') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  let licenseSection = ''
  if(licenses === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `Licenses: ${licenses}`
  }
  return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return` 

  # ${data.title}

  ## ${renderLicenseSection(data.licenses)} ${renderLicenseBadge(data.licenses)}
  ### ${renderLicenseLink(data.licenses)}

  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [InstallationInstructions](#installationInstructions)
  ###  * [Usage](#usage)
  ###  * [ContributionGuidelines](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)
  ###  * [Licenses](#licenses)

  ## Description:
  ### What is your project about?
  ### ${data.description}
  
  ## Installation:
  ### You must install the following for this app to function:
  ### ${data.installationInstructions}

  ## Usage:
  ### ${data.usage}

  ## Contributors:
  ### ${data.contributionGuidelines}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${data.tests}

  ## Questions:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/${data.GitHub}
  ### or
  ### Email: ${data.email}

  ## Licenses:
  ### ${data.licenses}
`;
}

module.exports = generateMarkdown;
