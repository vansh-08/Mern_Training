import promptSync from 'prompt-sync';
const prompt = promptSync();

const uname = prompt("Enter your name: ");
console.log(`Welcome ${uname}`);