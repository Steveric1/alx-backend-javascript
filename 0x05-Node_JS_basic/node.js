// const { spawn } = require('child_process');
// 
// const listAll = spawn('ls', ['-lh', '.']);
// 
// listAll.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
// 
// listAll.stderr.on('data', (data) => {
//   console.error(data);
// });
// 
// listAll.on('close', (code) => {
//   console.log('child process exited with code' + code);
// });


// fork
const { fork } = require('child_process');
const child = fork('node.js');

child.on('message', (message) => {
  console.log('Welcome to Holberton School, what is your name?', message);
});

child.send({hello: 'world'});