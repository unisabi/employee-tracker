// const db = require('./assets/db/connection');

const questions = {
  menu: {
    type: "list",
    name: "task",
    message: "What would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
      "exit app"
    ],

    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Select an option to continue! ";
      }
    },
  },

  addEmpl(roles, managers) {
    return [
      {
        type: "input",
        message: "First name of the employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "Last name of the employee?",
        name: "last_name",
      },
      {
        type: "list",
        message: "Role of the employee?",
        name: "role_id",
        choices: roles
      },
      {
        type: "list",
        message: "Manager of the employee?",
        name: "manager_id",
        choices: managers
      },
    ];
  },
  addDpt() {
    return [
      {
        type: "input",
        message: "Enter the department name:",
        name: "name",
      }
  ];
    
  },
  updateEmpl() {
    return [
      {
        type: "list",
        message: "Select the employee you want to update",
        name: "update",
        choices: [
          "John Doe",
          "Betty White",
          "Douglus Smith",
          "Micah Henley",
          "Daniel Jacobs",
          "Chole Clover",
          "Susan Sherri",
          "Rick Rift",
        ],
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Select an employee to continue! ";
          }
        },
      },
    ];
  },
};

module.exports = questions;
