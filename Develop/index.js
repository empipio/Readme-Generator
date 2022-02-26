// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const getBadge = require("./utils/generateMarkdown");

// array of questions for user input
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
    type: "checkbox",
    name: "license",
    message: "Select which license is used for your project:",
    choices: [
      "MIT",
      "GNU GPU 2.0",
      "GNU GPU 3.0",
      "GNU LGPL 3.0",
      "Apache",
      "BSD",
      "ISC",
      "Artistic License (Perl)",
      "Eclipse",
      "License not known",
    ],
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

// function to write README file
function writeToFile({
  projectTitle,
  description,
  installation,
  usage,
  license,
  contributors,
  tests,
  username,
  email,
}) {
  fs.writeFile(
    "generatedReadMe.md",
    `
# ${projectTitle}

${getBadge.renderLicenseBadge(license)}

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
This project is covered under the following license: ${license}

## Contributing
${contributors}

## Tests
${tests}

## Questions
you can reach me with additional questions at ${email} or reach out on [github](https://github.com/${username})
      `,
    (err) => (err ? console.log(err) : console.log("Success!"))
  );
}

//function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
