// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
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
//LOOK AT MINI PROJECT SOLVED FROM SATURDAY
function writeToFile({
  projectTitle,
  description,
  installation,
  usage,
  contributors,
  tests,
  username,
  email,
}) {
  fs.writeFile(
    "generatedReadMe.md",
    `
# Project: ${projectTitle}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
???

## Contributing
${contributors}

## Tests
${tests}

## Questions
you can reach me with additional questions at ${email} or github.com/${username}
      `,
    (err) => (err ? console.log(err) : console.log("Success!"))
  );
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();

// const generateFile = ({
//   projectTitle,
//   description,
//   installation,
//   usage,
//   contributors,
//   tests,
//   username,
//   email,
// }) =>
//   `
// # Project: ${projectTitle}

// ## Description
// ${description}

// ## Table of Contents
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation
// ${installation}

// ## Usage
// ${usage}

// ## License
// ???

// ## Contributing
// ${contributors}

// ## Tests
// ${tests}

// ## Questions
// you can reach me with additional questions at ${email} or github.com/${username}
// `;

// inquirer.prompt(questions).then((answers) => {
//   const readmePageContent = generateFile(answers);
//   fs.writeFile("generatedReadMe.md", readmePageContent, (err) =>
//     err ? console.log(err) : console.log("Successfully created readme!")
//   );
// });
