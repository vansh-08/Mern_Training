var ps = require('prompt-sync')({ sigint: true });
var uname = ps("Enter your name: ");
console.log("Welcome ".concat(uname));
