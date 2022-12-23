const { prompt } = require('inquirer');
const cTable = require('console.table');
const questions = require('./questions');
const db = require('./assets/db/connection');

const init = () => {
    prompt(questions).then(async ({task}) => {
        if(task=='view all departments') {
            let [data] = await db.promise().query('SELECT * FROM department;');
            console.table(data);
        };

        init();
    });
};

init();
