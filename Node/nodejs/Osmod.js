const os = require('os');
console.log(os);
console.log(os.homedir(),os.platform(),os.machine());
console.log(`this is Home directory: ${os.homedir()}, Current os platform: ${os.platform()},  working machine: ${os.machine()}` );