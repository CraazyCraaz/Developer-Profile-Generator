const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");

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
};

function init() {
  // this is where the inquirer answers are recorded
  getUserInput().then(userInput => {
    // only sending the username into the getGtiHubUserInfo function
    getGitHubUserInfo(userInput.username,userInput.color)

  })
};

function getGitHubUserInfo(username,color) {
  const queryUrl = `https://api.github.com/users/${username}`;
  
  axios.get(queryUrl).then(result => {

     var data={
       apiResults: result,
       color: color
     }
   
    console.log( generateHTML(data));

    let userData = generateHTML(data)

    fs.writeFile("devProfile.html", userData, function(err) {
      if(err) {
        console.log(err);
      }
      console.log("Success!");
      
    })
    
  })
};

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

// stars requires seperate api call?
//https://api.github.com/users/${username}/starred
//res.data.length

// following
// res.data.following

// });


// turn into async await



function writeToFile(fileName, data) {
  fs.writeFile("devProfile.html", generateHTML(data), (err) => {
    if (err) throw err;
    console.log('Success!');
  });
  
};


init();

