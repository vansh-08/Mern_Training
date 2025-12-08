import promptSync from 'prompt-sync';
import { readFileWithPrompt } from './readfilesync.js';
import { createFileWithPrompt } from './createfilesync.js';
import {append} from './appendfilesync.js'
import { deletefile } from './deletefilesync.js';

const prompt = promptSync();

while (true) {
    console.log("\nEnter your choice \n0 to read a file \n1 to create new file\n2 to append data\n3 to delete a file\n-1 to quit")
    const choice: string = (prompt(">"));

    if (choice === '0') {
        const fileread = readFileWithPrompt();
        console.log();
        console.log(fileread);
    } else if (choice === '1') {
        const createfile = createFileWithPrompt();
        console.log();
        console.log(createfile);
    }else if(choice==='2'){
        const appendFile=append();
    } else if (choice === '3') {
        console.log();
        deletefile();
    } else if (choice === '-1') {
        break;
    } else {
        console.log("Entered invalid choice, try again\n");
    }
}