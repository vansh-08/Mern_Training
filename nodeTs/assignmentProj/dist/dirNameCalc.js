export function DirName(fileExt) {
    let extDir;
    if (fileExt === 'txt')
        extDir = 'textFiles';
    else if (fileExt === 'json')
        extDir = 'jsonFiles';
    else if (fileExt === 'ts')
        extDir = 'tsFiles';
    else if (fileExt === 'js')
        extDir = 'jsFiles';
    return extDir;
}
