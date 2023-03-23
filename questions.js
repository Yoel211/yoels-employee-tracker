const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: '2Secondhokage$',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
);

function prompt () {
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
        'update an employee role'
      ],
    },
  ]).then(function(answers){
    console.log(answers.title)


    if ( answers.title === "view all departments") {
        db.query('SELECT * FROM department', function (err, results){
            if (err) throw err
            console.log(results);
        })
    }

    if ( answers.title === "view all employees") {
        db.query('SELECT * FROM employee', function (err, results){
            if (err) throw err
            console.log(results);
        })
    }

    if ( answers.title === "view all roles") {
        db.query('SELECT * FROM roles', function (err, results){
            if (err) throw err
            console.log(results);
        })
    }

    if ( answers.title === "add a department") {
        inquirer.prompt ({
            type : 'input',
            name : 'department',
            message : 'department added'

        }).then (data=>{
            db.query('INSERT INTO department (name) values (?)',[data.department], function (err, results){
                if (err) throw err
                console.log(results);
            })
        })
    }

    if ( answers.title === "add an employee") {
        inquirer.prompt ({
            type: 'input',
            name : 'employee',
            message : 'employee added'
        }).then ( data => {
            db.query (' INSERT INTO employee (first_name) values (?)', [data.employee], function (err,results){
                if (err) throw err
                console.log(results);
            })
        })
    }

    if ( answers.title === "add a role") {
        inquirer.prompt ({
            type : 'input',
            name : 'role',
            message : 'role added'

        }).then (data=>{
            db.query('INSERT INTO roles (title) values (?)',[data.roles], function (err, results){
                if (err) throw err
                console.log(results);
            })
        })
    }

    if ( answers.title === "update an employee role") {
        db.query('SELECT * FROM employee', function (err, results){
            if (err) throw err
            console.log(results);
        })
    }
  })
};
db.connect(err=>{
    if (err) throw err
    prompt();
}) 