// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project title",
        message: "What is the name of your Project.",
      },
      {
        type: "input",
        name: "project Description",
        message: "Please describe the purpose and reason for your project.",
      },
      {
        type: "input",
        name: "table of content",
        message: "Write down the tasble of Content?."
      },
      {
        type: "input",
        name: "Instalation Instructions",
        message: "What are the steps to Install your project? "
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
      },
      {
        type: "input",
        name: "Contributing",
        message: "List collaborators, or links to GitHub profiles.",
      },
      {
        type: "input",
        name: "GitHub username?",
        message:
          "Write the name of your GitHub username?"
      },
   
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  // Function call to initialize app

  init();
