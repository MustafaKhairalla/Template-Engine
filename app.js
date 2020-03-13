const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//const OUTPUT_DIR = path.resolve(__dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let allEmployee = [""];
var managerSelect = 0;

function begin() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the employee's ID",
        name: "id"
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email"
      },
      {
        type: "list",
        message: "what is the employee's role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    .then(function({ name, id, email, role }) {
      if (role === "Manager" && managerSelect === 0) {
        managerSelect = 1;
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the maneger's office number",
              name: "OfficeNumber"
            }
          ])
          .then(function({ OfficeNumber }) {
            startOver();
            const newManager = new Manager(name, id, email, OfficeNumber);
            return newManager;
            allEmployee.push(newManager);
          });
      } else if (role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the Engineer's GitHub account?",
              name: "gitHub"
            }
          ])
          .then(function({ gitHub }) {
            startOver();
            const newEngineer = new Engineer(name, id, email, gitHub);
            return newEngineer;
            allEmployee.push(newEngineer);
          });
      } else if (role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the Intern's school??",
              name: "school"
            }
          ])
          .then(function({ school }) {
            startOver();
            const newIntern = new Intern(name, id, email, school);
            return newIntern;
            allEmployee.push(newIntern);
          });
      } else {
        console.log("only one manager is allowed");
        startOver();
      }
    });
}

function startOver() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a new employee?",
        name: "answer",
        choices: ["Yes", "No"]
      }
    ])
    .then(function({ answer }) {
      if (answer === "Yes") {
        begin();
      } else {
        console.log("Thank you for using our application");
      }
    });
}

// module.exports = {newManager , newEngineer , newIntern , }

begin();
