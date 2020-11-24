//Other files
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js")
const questions = require("./Develop/utils/questions.js")

//Start function
function start() {
    //Inquirer the questions
    inquirer
        .prompt(questions)
        .then((answers) => {
            fs.writeFile("README.md", generateMarkdown(answers), (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        });
}

start();