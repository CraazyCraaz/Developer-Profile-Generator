// require("fs") === The Node.js file system module allows you to work with the file system on your computer
// require("fs") === Common use for the File System module: Read files, Create files, Update files, Delete files, Rename files
// require("axios") === has been used for promises and waiting
// require("inquirer") === providing error feedback, asking questions, parsing input, validating answers, managing hierarchical prompts
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const genHTML = require("./generateHTML");

// .then(function ({ username }) {
  // const queryUrl = `https://api.github.com/users/${username}`;

  // axios.get(queryUrl).then(function (res) {

    // github profile image
    // res.data.avatar_url

    // users name (real name)
    // res.data.name

    // location
    // res.data.location

    // github profile link
    // res.data.html_url

    // linkedin
    // res.data.blog

    // bio
    // res.data.bio

    // public repos
    // res.data.public_repos

    // followers
    // res.data.followers

    // stars requires seperate api call
    //https://api.github.com/users/${username}/starred
    //res.data.length

    // following
    // res.data.following

  // });


  // fs.writeFile("${username}Profile.html", somethingGoesHere?, function (err) {
  //   if (err) {
  //     throw err;
  //   }
  // });
// });
function getUserInput() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the GitHub username of the Developer you're searching for:",
        name: "username"
      },
      {
        type: "list",
        message: "Pick a color",
        name: "color",
        choices: [
          "green",
          "blue",
          "pink",
          "red"
        ]
      }
    ])
}

// turn into async await
function getGitHubUserInfo(username) {
  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl).then(result => {
console.log(result);

  })
}
//
function temp152(uriParam) {
  const queryUrl = `https://api.github.com/users/${username}/${uriParam}`;

  axios.get(queryUrl).then(result => {

  })
}


/////////////////////////////////////////////////////////////
// What came originally with the homework information
const questions = [

];

function writeToFile(fileName, data) {

}

function init() {
  getUserInput().then (userInput => {
    console.log(userInput);
    getGitHubUserInfo(userInput.username)
    
  })
}

init();

