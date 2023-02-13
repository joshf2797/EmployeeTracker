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