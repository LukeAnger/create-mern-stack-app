#!/usr/bin/env node

const { execSync } = require('child_process');
const projectName = process.argv[2] || 'my-mern-app';

execSync(`git clone https://github.com/LukeAnger/create-mern-stack-app.git ${projectName}`);
execSync(`cd ${projectName} && npm install && npm start`);

// Rename the directory to the user-specified name
execSync(`mv ${projectName} ${process.cwd()}/${projectName}`);
