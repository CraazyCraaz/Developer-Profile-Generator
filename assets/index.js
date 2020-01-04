alert("Alerts are super annoying");
/////////////////////////////////////////////////////////
// Pulled from another activity, helps with a head start!

// require("fs") === The Node.js file system module allows you to work with the file system on your computer
// require("fs") === Common use for the File System module: Read files, Create files, Update files, Delete files, Rename files
const fs = require("fs");
// require("axios") === for promises
const axios = require("axios");
// require("inquirer") === providing error feedback, asking questions, parsing input, validating answers, managing hierarchical prompts
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  });

/////////////////////////////////////////////////////////////
// What came originally with the homework information
const questions = [

];

function writeToFile(fileName, data) {

}

function init() {
}

init();

