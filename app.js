const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
let allEmployee = [""];


function begin(){
    inquirer
        .prompt([{
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
            choices: ["Manager" , "Engineer" , "Intern"]
        }
        ]
        )
        .then (function({name , id , email , role}){
            
                if(role === "Manager"){
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What is the maneger's office number",
                                name: "OfficeNumber"
                            }
                        ]).then(function({OfficeNumber}){
                            const newManager = new Manager(name , id , email , OfficeNumber);
                            return newManager;
                            allEmployee.push(newManager);

                        })
                }else if(role === "Engineer"){

                        inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What is the Engineer's GitHub account?",
                                name: "gitHub"
                            }
                        ]).then(function({gitHub}){
                            const newEngineer = new Engineer(name , id , email , gitHub);
                            return newEngineer;
                            allEmployee.push(newEngineer);

                        })

                }else if(role === "Intern"){

                        inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What is the Intern's school??",
                                name: "school"
                            }
                        ]).then(function({school}){
                            const newIntern = new Intern(name , id , email , school);
                            return newIntern;
                            allEmployee.push(newIntern);

                        })

                }else{

                }
        
        })
}

module.exports = {newManager , newEngineer , newIntern , }

begin();

​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
