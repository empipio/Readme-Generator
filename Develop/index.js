// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of ypur project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project here:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions for installation here:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information here:",
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter details of fellow contributors here:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter any test instructions here:",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your Github username here:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address here:",
  },
];

// TODO: Create a function to write README file
//writes file but input all undefined
function writeToFile(fileName, data) {
  const filename = "generatedReadMe.md";
  generateMarkdown();
  fs.writeFile(
    filename,
    `# Project: ${questions.projectTitle}
    
    ## Description
    ${questions.description}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${questions.installation}
    
    ## Usage
    ${questions.usage}
    
    ## License
    ???
    
    ## Contributing
    ${questions.contributors}
    
    ## Tests
    ${questions.tests}
    
    ## Questions
    github.com/${questions.username}
    you can reach me with additional questions at ${questions.email}`,

    (err) => (err ? console.log(err) : console.log("Success!"))
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
