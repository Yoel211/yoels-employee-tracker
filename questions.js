const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password
        password: '2Secondhokage$',
        database: 'employee_tracker'
    },
    console.table(`Connected to the employee_tracker database.`)
);


function prompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'title',
                message: 'What would you like to do?',
                choices: [
                    'view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role',
                    'exit'
                ],
            },
        ]).then(function (answers) {
            console.table(answers.title)



            if (answers.title === "view all departments") {
                db.query('SELECT * FROM department', function (err, results) {
                    if (err) throw err
                    console.table(results);
                    prompt();
                })

            }

            if (answers.title === "view all employees") {
                db.query('SELECT * FROM employee', function (err, results) {
                    if (err) throw err
                    console.table(results);
                    prompt();
                })
            }

            if (answers.title === "view all roles") {
                db.query('SELECT * FROM roles', function (err, results) {
                    if (err) throw err
                    console.table(results);
                    prompt();
                })

            }

            if (answers.title === "add a department") {
                inquirer.prompt({
                    type: 'input',
                    name: 'department',
                    message: 'department added'

                }).then(data => {
                    db.query('INSERT INTO department (name) values (?)', [data.department], function (err, results) {
                        if (err) throw err
                        console.log(results);
                        prompt();
                    })
                })
            }

            if (answers.title === "add an employee") {
                inquirer.prompt({
                    type: 'input',
                    name: 'employee',
                    message: 'employee added'
                }).then(data => {
                    db.query(' INSERT INTO employee (first_name) values (?)', [data.employee], function (err, results) {
                        if (err) throw err
                        console.table(results);
                        prompt();
                    })
                })
            }

            if (answers.title === "add a role") {
                inquirer.prompt(
                    [
                        {
                            type: 'input',
                            name: 'title',
                            message: 'What roles do you want to add?'
                        },
                        {
                            type:'input', 
                            name: 'salary',
                            message: 'thats alot of money'
                        },
                        {
                            type: 'input',
                            name: 'department',
                            message : 'department added'

                        }
                    ]
                ).then(data => {
                    console.table(data)
                    db.query(`INSERT INTO roles (title, salary, department_id) values (?,?,?)`, [data.title, data.salary, data.department], function (err, results) {
                        if (err) throw err
                        console.log(results);
                        prompt();
                    })
                })
            }

            if (answers.title === "update an employee role") {
                db.query('SELECT * FROM employee', function (err, results) {
                    if (err) throw err
                    console.log(results);
                    prompt();
                })
            }
            // prompt ();
        })
};


// db.connect(err => {
//     if (err) throw err
//     prompt();
// }) 
prompt()