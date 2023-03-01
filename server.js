const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./config/connection");
require("console.table");
require("dotenv").config();



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
                "Exit"
            ]
        }
    ])
    .then((response) => {
        switch (response.userChoice) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add Department":
                addDepartments();
                break;
            case "Add Role":
                addRoles();
                break;
            case "Add Employee":
                addEmployees();
                break;
            case "Exit":
                db.end();
                break;
        }
    })
    .catch((err) => {
        if (err) throw err;
    })
};

const viewAllDepartments = () => {
const sql = `SELECT * FROM department`;

db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(`\n`);
    console.log('\x1b[33m Viewing All Departments: \x1b[0m');
    console.log(`\n`);
    console.table(rows);
    employeePrompt();
})
};

const viewAllRoles = () => {
const sql = `SELECT role.title, role.id, department_name, role.salary FROM role
LEFT JOIN department ON role.department_id = department.id`;

db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(`\n`);
    console.log('\x1b[33m Viewing All Roles: \x1b[0m');
    console.log(`\n`);
    console.table(rows);
    employeePrompt();
})
};

const viewAllEmployees = () => {
const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, employee.manager_id FROM employee 
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id`;

db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(`\n`);
    console.log('\x1b[33m Viewing All Employees: \x1b[0m');
    console.log(`\n`);
    console.table(rows);
    employeePrompt();
})
};

const addDepartments = () => {
const sql = `SELECT * FROM department`;

db.query(sql, async (err, res) => {
    if (err) throw err;
    res = res.map(({ id, department }) => ({

        value: id,
        name: department,

    }));
    await inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the department id?",
        },
        {
            type: "input",
            name: "deptName",
            message: "What is the department name?",
        },
    ])

        .then((res) => {
            const sql = `INSERT INTO department SET ?`;
            db.query(sql, {
                id: res.id,
                title: res.title,
                salary: res.salary,
                department_id: res.department_id,
            })

            console.log(`\n`);
            console.log('\x1b[33m New department Has Been Added. \x1b[0m');
            console.log(`\n`);
            console.table(res);
            employeePrompt();
        });

})
};

const addRoles = () => {
const sql = `SELECT * FROM department`;

db.query(sql, async (err, res) => {
    if (err) throw err;
    res = res.map(({ id, title, salary, department_id }) => ({

        value: id,
        title: title,
        salary: salary,
        department: department_id,

    }));
    await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role title?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the role id?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the role salary?",
        },
        {
            type: "list",
            name: "departmentId",
            message: "What is the role department?",
            choices: [
                "1 Coach",
                "2 Player",
                "3 Training Staff",
                "4 Executive",
                "5 Owner"]
        },

    ])

        .then((res) => {
            const sql = `INSERT INTO role SET ?`;
            db.query(sql, {
                id: res.id,
                title: res.title,
                salary: res.salary,
                department_id: res.department_id,
            })
            console.log(`\n`);
            console.log('\x1b[33m New Role Has Been Added. \x1b[0m');
            console.log(`\n`);
            console.table(res);
            employeePrompt();
        });

})
};

const addEmployees = () => {
const sql = `SELECT * FROM employee`;

db.query(sql, async (err, res) => {
    if (err) throw err;
    res = res.map(({ id, first_name, last_name, role_id, manager_id }) => ({

        value: id,
        first_name: first_name,
        last_name: last_name,
        role: role_id,
        manager: manager_id,

    }));
    await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employees first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employees last name?",
        },
        {
            type: "input",
            name: "role",
            message: "What is the employees role?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employees id?",
        },
        {
            type: "input",
            name: "manager",
            message: "Who is the employees manager id?",
        },
    ])

        .then((res) => {
            const sql = `INSERT INTO employee SET ?`;
            db.query(sql, {

                id: res.id,
                first_name: res.first_name,
                last_name: res.last_name,
                role: res.role_id,
                manager: res.manager_id,

            })

            console.log(`\n`);
            console.log('\x1b[33m New Employee Has Been Added. \x1b[0m');
            console.log(`\n`);
            console.table(res);
            employeePrompt();
        });

})
};


    