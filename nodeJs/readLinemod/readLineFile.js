import fs from 'fs';
import readLine, { createInterface } from 'readline'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hello = () => {
    rl.question("Enter your name: ", (uname) => {
        console.log(`Your name is: ${uname}`);
        rl.close();
    })
}

hello();