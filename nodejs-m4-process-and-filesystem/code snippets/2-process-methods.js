console.log(`Current Working Directory: ${process.cwd()}`);
//for linux system user linux based path
console.log(`Changing Directory to C:\ : ${process.chdir('c:\\')}`);
console.log(`Current Working Directory: ${process.cwd()}`);
console.log(`CPU Usage: ${JSON.stringify(process.cpuUsage())}`);
console.log(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);
console.log(`Killing self **`);
process.kill(process.pid);
console.log(`You will not see this !!!`);
