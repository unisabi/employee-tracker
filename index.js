const { prompt } = require("inquirer");
const cTable = require("console.table");
const questions = require("./questions");
const db = require("./assets/db/connection");

const promptUser = (questionSet) => {
  return prompt(questionSet);
};

const addRole = async () => {
  let [departments] = await db
    .promise()
    .query("SELECT name, id value FROM department");

  prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "what is the salary of the role?",
    },
    {
      type: "list",
      name: "department_id",
      message: "What department does the role belongs to?",
      choices: departments,
    },
  ]).then((data) => {
    db.query("INSERT INTO role SET ?", data, (err) => {
      if (err) throw err;
      init();
    });
  });
};
const addEmpl = async () => {
  let [roles] = await db.promise().query(`SELECT title name, id value FROM role`);
  let [managers] = await db.promise().query(`SELECT CONCAT(first_name," ",last_name) name, id value FROM employee`);

  managers.push({name:"null",value:null});

  let data = await promptUser(questions.addEmpl(roles, managers));
  db.promise().query('INSERT INTO employee SET ?', data, err=>{
    if (err) throw err;
    init();
  });
};
const viewEmployees = async () => {
  db.query(
    `
    SELECT 
      e.id,
      e.first_name,
      e.last_name,
      r.title,
      d.name department,
      r.salary,
      CONCAT(e2.first_name," ",e2.last_name) manager
    FROM employee e
    JOIN role r
    ON e.role_id=r.id
    JOIN department d
    ON r.department_id=d.id
    LEFT JOIN employee e2
    ON e.manager_id=e2.id`,
    function (err, results) {
      if (err) throw err;
      console.table(results);
      init();
    }
  );
};

const viewDpt = async () => {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    console.table(results);
    init();
  });
};
const viewRole = async () => {
  db.query(
    `
      SELECT 
        r.id,
        r.title,
        d.name department,
        r.salary
      FROM role r
      JOIN department d
      ON r.department_id = d.id;`,
    function (err, results) {
      console.table(results);
      init();
    }
  );
};
const addDpt = async () => {
  const data = await promptUser(questions.addDpt());
  db.query("INSERT INTO department set ?", data, (err) => {
    if (err) throw err;
    init();
  });
};

const updateEmpl = async () => {
  db.query("select * from employee", async function (err, results) {
    const data = await promptUser(questions.updateEmpl(results));
    const selection = promptUser(questions.updateEmpl());
    switch (selection.action) {
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
      case "Susan Sherri":
        break;
      case "Rick Raft":
        break;
    }
    if (err) {
      console.log(err);
    }
  });
};

async function init() {
  prompt(questions.menu).then((data) => {
    switch (data.task) {
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
      default:
        db.end();
        process.exit(0);
    }
  });
}
init();
