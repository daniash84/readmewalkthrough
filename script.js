const fs = require('fs')
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api.js');

const questions = [
   
    {
    type: 'input'
    message: 'What is your GitHub username?',
    name: 'github',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required");
        }
        return true;
    }
}
{
    type: 'input',
    message: 'What is the name of your GitHub Repo?',
    name: 'repo',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub repo is required for a badge.");
        }
        return true;
    }
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
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("A valid project title is required.");
      }
      return true;
  }
  },
    {
    type: 'list-input'
    message: 'What kind of license should your project have?',
     choices: ['MIT', 'LGPL-2.1', 'BSD-3' , 'Apache 2.0'],
     name: 'license',
    }
    {
        type: 'input',
        message: 'What command is needed to install your dependancies?',
        name: 'dependancies',
      },
      {
        type: 'input',
        message: 'What command is needed to run your project?',
        name: 'command',
      },
      {
        type: 'input',
        message: 'Describe your project:',
        name: 'describe',
      },
    
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
