const inquirer = require("inquirer")
const mysql2 = require("mysql2")
require("console.table");
require("dotenv").config();

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
});

db.connect((err) =>{
    if (err) throw err;
    employeePrompt();
});

const employeePrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoices",
            message: "What would you like to do?",
            choice: [
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Exit"]
        }
    ])

    .then((response) => {

    })
}
    