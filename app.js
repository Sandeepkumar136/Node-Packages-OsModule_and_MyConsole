// They are prints hello world, to stdout
console.log('hello world');
console.log('hello %s', 'world');

// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

console.error(new Error('Whoops, something bad happend'));

// alias of error

let errors='sandeep kumar life have fully error';
console.warn(errors);



// My Console

const {Console}= require('node:console');

const out = process.stdout;
const err = process.stderr;

const myConsole=new console.Console(out, err);

myConsole.log('This is my New Console');