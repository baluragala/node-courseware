let os = require('os');
console.log('User info - Username :', os.userInfo().username);
console.log('System info - CPUS :', os.cpus().length);
console.log('System info - Total memory :', (Math.round(os.totalmem() / (1024*1024))) + ' MB');