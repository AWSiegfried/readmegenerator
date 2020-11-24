//Page for asking questions
// array of questions for user
const questions = [{
        type: "input",
        name: "yourName",
        message: "What is your full name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "Unilicense"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email address you would like people to contact?"
    }

];

module.exports = questions