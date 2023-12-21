const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/shapes");

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What are your Initials?",
        name: "initials",
      },
      {
        type: "input",
        message: "What color would you like your Initials to be?",
        name: "textColor",
      },
      {
        type: "input",
        message: "What Color would you like your custom logo to be?",
        name: "color",
      },
      {
        type: "list",
        message: "What Shape would you like you logo to be?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
    ])
    .then(function (userInput) {
      const shapesTemplate = generateLogo(userInput);
      fs.writeFile("logo.svg", shapesTemplate, function (error) {
        error
          ? console.log("An error has taken place.")
          : console.log("Your Logo has been created!");
      });
    });
}
init();
