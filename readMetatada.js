const fs = require('fs/promises');

const filePath = './example.txt'; 

async function readMetadata(filePath) {
    try {
        const stats = await fs.stat(filePath);

        console.log(`File: ${filePath}`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`Modified: ${stats.mtime}`);


        
        // Unix permission `0o444` means read-only for owner, group, and others
        await fs.chmod(filePath, 0o444);
        console.log(`Permissions for ${filePath} changed to read-only`);
    } catch (err) {
        console.error(`Error reading metadata of file ${filePath}:`, err);
    }
}


readMetadata(filePath);
