// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Rest of your code...
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the screenshot."
  },
  {
    type: "input",
    name: "installations",
    message: "What are the steps require to install you project?."
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instruction how to use your project?"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter you contact information and a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
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



// Function to generate Markdown content based on user responses
// function generateMarkdown(data) {
//   return `
//     # ${data['title']}
    
//     ## Description
//     ${data['description']}
    
//     ## Table of Contents
//     ${data['table of content']}
    
//     ## Installation Instructions
//     ${data['Instalation Instructions']}
    
//     ## License
//     This project is licensed under the ${data['license']} license.
    
//     ## Dependencies
//     ${data['require']}
    
//     ## Contributing
//     ${data['Contributing']}
    
//     ## GitHub Username
//     ${data['GitHub username?']}
//   `;
// }

// Function call to initialize app
init();

module.exports = generateMarkdown;
