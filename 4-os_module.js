// built in - os module

const os = require('os');
console.log(os.userInfo()); // to get user's information
console.log(os.uptime()/3600); // system's uptime in seconds

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);