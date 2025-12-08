import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export function filePathCalc(fileName: string): string {
    let extDir;
    const fileExt: string = fileName.substring( fileName.indexOf('.') + 1 );
    
    if (fileExt === 'txt') extDir = 'textFiles';
    else if(fileExt === 'json') extDir = 'jsonFiles';
    else if(fileExt === 'ts') extDir = 'tsFiles';
    else if(fileExt === 'js') extDir = 'jsFiles';

    const filePath: string = path.join(dirname, '..', 'output', `${extDir}`, `${fileName}`);

    return filePath;
}