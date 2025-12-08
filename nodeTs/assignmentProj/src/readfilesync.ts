import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import promptSync from 'prompt-sync';
import { filePathCalc } from './filePathCalc.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const prompt = promptSync();

export function readFileWithPrompt(): string {
    console.log("Reading files...");
    const fileName: string = prompt("Enter fileName.(txt,json,js,ts) to read: ");

    const filePath: string = filePathCalc(fileName);

    const readfilesync = fs.readFileSync(
        filePath,
        "utf-8"
        );
    
    return readfilesync;
}   