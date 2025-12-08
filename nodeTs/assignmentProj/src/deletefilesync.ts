import * as fs from 'fs';
import promptsync from 'prompt-sync';
import { filePathCalc } from './filePathCalc.js';

const prompt = promptsync();

export function deletefile() {

    const filename = prompt("Enter file name(.json, .tst, .js, .ts): ");
    const filepath = filePathCalc(filename);

    fs.unlinkSync(filepath)
    console.log(`"${filename}" deleted successfully`);
}