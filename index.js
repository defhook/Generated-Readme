// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//link to the file 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter your GitHub name!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project:",
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log("Please provide a brief description of your project!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Please provide instructions on how to install the code:",
        validate: projectInstallationInstructions => {
            if (projectInstallationInstructions) {
                return true;
            } else {
                console.log("Please provide instructions on how to install the code!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide input on what this program is used for:",
        validate: projectUsage => {
            if (projectUsage) {
                return true;
            } else {
                console.log("Please provide input on what this program is used for!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Please provide input on who contributed to the development:",
        validate: projectContributionGuidelines => {
            if (projectContributionGuidelines) {
                return true;
            } else {
                console.log("Please provide input on who contributed to the development!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application and provide examples in this section:",
        validate: projectTests => {
            if (projectTests) {
                return true;
            } else {
                console.log("Please provide tests for your application and provide examples!");
                return false;
            }
        },
    },
    {
        type: "list",
        name: "licenses",
        message: "What type of license applies to your code? (Check all that apply)",
        choices: ["None", "ISC", "MIT", "Mozilla"],
        validate: projectLicense => {
            if (projectLicense) {
                return true;
            } else {
                console.log("Please select the type of license that applies to your code!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
        validate: projectGitHub => {
            if (projectGitHub) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
        validate: projectEmail => {
            if (projectEmail) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        },
    }
];


// TODO: Create a function to write README file
// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};




// TODO: Create a function to initialize app
// function to initialize app
function init() {
    console.log("welcome to the ReadMe Generator!");
    inquirer.prompt(questions)
        .then(answer => {
            console.log(answer);
        const fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}


// Function call to initialize app
init();

module.exports = questions;