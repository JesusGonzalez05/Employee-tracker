const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { printTable } = require('console-table-printer');


// port environmental or 3000
const PORT = process.env.PORT || 3000;
// assigns express engine to app
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: 'rootroot',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
    
  );