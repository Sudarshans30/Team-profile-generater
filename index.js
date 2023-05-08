// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/htmlContent");
const chalk = require("chalk");

const path = require("path");
const emailValidator = require("email-validator");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// --------------------------------------prompt questions
const employeeType = [
  {
    type: "list",
    message: "which type of team member would you like to add?",
    name: "memberType",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "None! End the team building process",
    ],
  },
];
const questionsManager = [
  {
    type: "input",
    message: "What is the manager name?",
    name: "name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your name");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the manager id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the manager email?",
    name: "email",
    validate: (email) => {
      if (!emailValidator.validate(`${email}`)) {
        console.log(chalk.red("\nINCORRECT email format!!!\n"));
        return false;
      } else return true;
    },
  },
  {
    type: "input",
    message: "What is the Manager office Number?",
    name: "officeNumber",
  },
];

const questionsEngineer = [
  {
    type: "input",
    message: "What is the Engineer name?",
    name: "name",
  },
  {
    type: "input",
    message: "what is the Engineer id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Engineer email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Engieer github username?",
    name: "github",
  },
];
const questionsIntern = [
  {
    type: "input",
    message: "What is the Intern name?",
    name: "name",
  },
  {
    type: "input",
    message: "what is the Intern id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Intern email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Intern school?",
    name: "school",
  },
];
// ----------------------------------------

addedMembers = [];

function init() {
  function createTeam() {
    inquirer.prompt(employeeType).then(function (selected) {
      switch (selected.memberType) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    });
  }

  function addManager() {
    inquirer.prompt(questionsManager).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      addedMembers.push(manager);
      createTeam();
    });
  }

  function addEngineer() {
    inquirer.prompt(questionsEngineer).then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      addedMembers.push(engineer);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt(questionsIntern).then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      addedMembers.push(intern);
      createTeam();
    });
  }

  function htmlBuilder() {
    console.log("Team generated!");

    fs.writeFileSync(`teamProfile.html`, generateTeam(addedMembers), "UTF-8");
  }

  createTeam();
}

init();
