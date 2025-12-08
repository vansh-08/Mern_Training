import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import promptsync from 'prompt-sync';
import { filePathCalc } from './filePathCalc.js';
const prompt = promptsync();
export function append() {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const filename = prompt("Enter file name (.txt,.json,js,ts) to append: ");
    const data = prompt("Enter content: ");
    const filepath = filePathCalc(filename);
    const appendFile = fs.appendFileSync(filepath, data);
    console.log(`"${data}" appended succesfully!`);
    return;
}
