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
