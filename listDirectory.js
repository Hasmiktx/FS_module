const fsp = require('fs/promises');
const fs=require("fs");
const path = require('path');
const dirToScan = './watchDir'; 

const sourceDir = './testDir'; 
const destinationDir = './destDir'; 


function listFilesRecursively(dir) {
    try {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const fullPath = path.join(dir, file);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                console.log(`Directory: ${fullPath}`);
                listFilesRecursively(fullPath); 
            } else {
                console.log(`File: ${fullPath}`);
            }
        });
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err);
    }
}


listFilesRecursively(dirToScan);



async function copyDirectory(src, dest) {
    try {
        const entries = await fsp.readdir(src, { withFileTypes: true });
        //    console.log(entries,"ent")
        await fsp.mkdir(dest, { recursive: true });

        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (entry.isDirectory()) {
                await copyDirectory(srcPath, destPath); 
            } else {
                await fsp.copyFile(srcPath, destPath); 
        }
        }
    } catch (err) {
        console.error(`Error copying directory from ${src} to ${dest}:`, err);
    }
}



copyDirectory(sourceDir, destinationDir);
