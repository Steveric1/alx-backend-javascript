// process.stdin.setEncoding('utf8');
// 
// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write('data: ' + chunk);
//   }
// });
// 
// process.stdin.on('end', function() {
//   process.stdout.write('end');
// });

// print process.argv
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// })

// console.log('Starting directory: ' + process.cwd());
// try {
//   process.chdir('../');
//   console.log('New directory: ' + process.cwd());
// }
// catch (err) {
//   console.log('chdir: ' + err);
// }
// 
// if (process.getgid) {
//     console.log('Current gid: ' + process.getgid());
// }
// 
// console.log('Version: ' + process.version);
// 
// console.log(process.uptime());


const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});