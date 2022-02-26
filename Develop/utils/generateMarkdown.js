// function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, badge) {
  const licenseBadges = [
    {
      name: "MIT",
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },
    {
      name: "GNU GPU 2.0",
      badge:
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    },
    {
      name: "GNU GPU 3.0",
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },
    {
      name: "GNU LGPL 3.0",
      badge:
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    },
    {
      name: "Apache",
      badge:
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },
    {
      name: "BSD",
      badge:
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    },
    {
      name: "ISC",
      badge:
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    },
    {
      name: "Artistic License (Perl)",
      badge:
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    },
    {
      name: "Eclipse",
      badge:
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    },
    {
      name: "License not known",
      badge: "",
    },
  ];
  for (const licenseEl of licenseBadges) {
    if (licenseEl.name == license) {
      badge = licenseEl.badge;
      return badge;
    }
    if (!license) {
      return "";
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};
