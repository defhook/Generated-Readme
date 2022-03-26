// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =  require('inquirer');
//link to the file 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =[
    {
        type: "input", 
        name: "title", 
        message: "What is the name of your project?"
    }, 
    {
        type: "input", 
        name: "description", 
        message: "Please provide a brief description of your project."
    }, 
    {
        type: "input", 
        name: "installationInstructions", 
        message: "Please provide instructions on how to install the code:",
    }, 
    {
        type: "input", 
        name: "usage", 
        message: "Please provide input on what this program is used for:",
    }, 
    {
        type: "input", 
        name: "contributionGuidelines", 
        message: "Please provide input on who contributed to the development.",
    }, 
    {
        type: "input", 
        name: "tests", 
        message: "Write tests for your application and provide examples in this section",
    }, 
    {
        type: "checkbox", 
        name: "license", 
        message: "What type of license applies to your code? (Check all that apply)",
        choices: ["IBM", "ISC", "MIT", "Mozilla", "Attribution License"]
    }, 
    {
        type: "input", 
        name: "GitHub", 
        message: "What is your GitHub username?",
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Please provide your email address."
    }    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Generated ReadMe file Successfully!');
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to readme generator ....");
    inquirer.prompt(questions).then(answer => {
        console.log(answer); 

        //convert into reame friendly format 
        const convertData = generateMarkdown(answer); 
        //console.log(convertData);

//create the readme file 
        writeToFile("README1.md", answer); 

    })
}

// Function call to initialize app
init();
