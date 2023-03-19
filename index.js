#!/usr/bin/env node

const { execSync } = require('child_process');
const { prompt } = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: "Please specify the project directory (e.g. 'my-mern-app')",
    default: 'my-mern-app',
  },
  {
    type: 'confirm',
    name: 'installTypescript',
    message: 'Do you want to install TypeScript?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'installEslint',
    message: 'Do you want to install ESLint?',
    default: true,
  },
];

prompt(questions).then(answers => {
  const { projectName, installTypescript, installEslint } = answers;

  const gitCloneCmd = `git clone https://github.com/LukeAnger/mern-stack-template.git ${projectName}`;
  const npmInstallCmd = `cd ${projectName} && npm install`;

  if (installTypescript) {
    npmInstallCmd += ' typescript';
  }

  if (installEslint) {
    npmInstallCmd += ' eslint';
  }

  execSync(`${gitCloneCmd} && ${npmInstallCmd} && npm start`);

  // Rename the directory to the user-specified name
  execSync(`mv ${projectName} ${process.cwd()}/${projectName}`);
});
