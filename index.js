const { prompt } = require('inquirer');
const cTable = require('console.table');
const questions = require('./questions');
const db = require('./assets/db/connection');


  const promptUser = (questionSet) => {
    return inquirer.prompt(questionSet);
  };
  
  const addRole = async () => {
      
      db.query("select dept_name as name, id as value from department", async function (err, results) {
          var data = await promptUser(questions.addRole(results))
          console.log(data)
          
          if(err){
              console.log(err)
          }
        });
  };
  const addEmpl = async () => {
      
    db.query("select first_name, last_name, role_id, manager_id from employee", async function (err, results) {
        var data = await promptUser(questions.addEmpl(results))
        console.log(data)
        
        if(err){
            console.log(err)
        }
      });
  };
  const viewEmployees = async () =>{
    db.query("SELECT * FROM employee", function (err, results, fields) {
      console.log(results);
    });
  };
  
  const viewDpt = async () => {
    db.query("SELECT id as DepartmentID, dept_name as DepartmentName FROM department", function (err, results, fields) {
      console.log(results);
    });
  };
  const viewRole = async () => {
    db.query("select * from roles", function (err, results){
      console.log(results)
    });
  };
  const addDpt = async () => {
    db.query("select dept_name from department", async function (err, results){
      const data = await promptUser(questions.addDpt(results))
      console.log(data)
      if(err){
        console.log(err)
      }
    });
  };
  const updateEmpl = async () => {
    db.query("select * from employee", async function (err, results){
      const data = await promptUser(questions.updateEmpl(results))
      console.log(data)
      const selection = promptUser(questions.updateEmpl());
      switch (selection.action){
        case "John Doe":
          break;
        case "Betty White":
          break;
         case "Douglus Smith":
          break;
        case "Micah Henley":
          break;
        case "Daniel Jacobs":
          break;
        case "Chole Clover":
          break;
        case "SUsan Sherri":
          break;
        case "Rick Raft":
          break; 
      }
      if (err){
        console.log(err)
      }
    })
  };
  
  async function init() {
    var data = await promptUser(questions.menu);

    switch (data.action) {
      case "view all departments":
        viewDpt();
  
        break;
      case "add a role":
        addRole();
        break;
      case "view all employees":
        viewEmployees();
          break;
      case "add an employee":
        addEmpl();
        break;
      case "view all roles":
        viewRole();
        break;
      case "add a department":
        addDpt();  
        break;
      case "update an employee role":
        updateEmpl();
        break;
          
            
    }
    return;
  }
init();
