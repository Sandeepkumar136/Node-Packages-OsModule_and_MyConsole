// Import the os module

const os = require('os');


// Example usage of the os module
console.log('Operating System Info:');
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Number of CPUs: ${os.cpus().length}`);

function myCallBackfunction(){
    let a= os.totalmem()/ (1024*1024*2);
    console.log(`This is a total memories is Gegabyte: ${a}`);
}

myCallBackfunction()