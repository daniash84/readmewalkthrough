const fs = require('fs')
const inquirer = require('inquirer');

const questions = [
   
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is the name of your GitHub Repo?',
    name: 'repo',
  },
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'project',
  },
      {
        type: 'input',
        message: 'Describe your project:',
        name: 'describe',
      },
      {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    ];
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")
        });
    }
    function init() {
        inquirer
            .prompt(questions)
    }
        // try{
            
        //     const userResponse = inquirer.prompt(questions);
        //     console.log('Your Response: ', userResponse);
        //     console.log("Retrieving your GitHub data next");
    
        //     const userInfo = api.getUser(userResponse);
        //     console.log("GitHub user info: ", userInfo);
        //     console.log("Building your beautiful README");
    
        //     const markdown = generateMarkdown(userResponse, userInfo);
        //     console.log(markdown);
    
        //     await writeFileAsync('ExampleREADME.md', markdown);
        //     console.log("README is Completed....Now you can relax");
    
        
        // } catch  (error) {
        //     console.error();
        // }
    
    
    
    init();