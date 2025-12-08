import promptSync from 'prompt-sync';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { filePathCalc } from './filePathCalc.js';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));

const prompt = promptSync();

export function createFileWithPrompt(): void {
    const ext=['js','ts','txt','json']
    console.log("Enter below details to create a new file using writeFileSync...")
    const fileName: string = prompt("Enter your file name: ");
    const fileExt: string = prompt("Enter file extension (txt, json, ts, js): ");
    while (!ext.includes(fileExt)) {
        console.log("Invalid file extension");
        return;
}

    const data: string = prompt("Enter text to add inside file: ");
    const filePath: string = filePathCalc(`${fileName}.${fileExt}`);

    const writeFileSync = fs.writeFileSync(
        filePath,
        data
        );

    console.log(writeFileSync);
    console.log(`"${fileName}" is created \n"${data}" added successfully..`);

    return;
}
