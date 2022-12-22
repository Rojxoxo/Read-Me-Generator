// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "A description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions for your project:",
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter usage information:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidlines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
    },
    {
        type: "input",
        name: "username",
        message: "Enter your gitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquirer.prompt(questions).then((answers) => {
    fs.writeFile('README.md', JSON.stringify(answers), (error) => {
        return error    
            ? console.error(error)
            : console.log('File written successfully')
    })
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
