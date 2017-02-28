'use strict';


//app modules
const githubCmd = require('./lib/github-command');
// const canvasCmd = require('./lib/canvas-api');

const main = () => {
  Promise.all([
    // fetchCanvasStudents(),
    githubCmd.fetchLabRepoURLs(),
  ]);
};
main();
