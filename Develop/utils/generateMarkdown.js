//Page to add text, template literal
// function to generate markdown for README
// ![Contents](https://img.shields.io/github/languages/top/${data.github}/${data.title})
// ![Last-Commit](https://img.shields.io/github/last-commit/${data.github}/${data.title})

function generateMarkdown(data) {
    return `# **${data.title}**
![License](https://img.shields.io/badge/${data.license}-license-purple)

## **Table of Contents**

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## **Description**

${data.description}

## **Installation**

${data.installation}

## **Usage**

${data.usage}

## **Contributing**

${data.contributing}

## **Tests**

${data.tests}

Test your library
\`\`\`sh
npm test
\`\`\`

## **License**

This repository is covered under the ${data.license} license. 

## **Questions**
Please contact with any questions or thoughts.
Email: ${data.email}

Check out [my GitHub](https://github.com/${data.github})
`
}

module.exports = generateMarkdown