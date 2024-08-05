const fs = require('fs/promises');

const filePath = './someFile.txt';

async function errorHandling() {
    try {
        
        const data = await fs.readFile(filePath, 'utf-8');
        console.log('File content:', data);
    } catch (err) {
        
        if (err.code === 'ENOENT') {
            console.error(`Error: The file '${filePath}' does not exist.`);
        } else {
            console.error('An unexpected error occurred:', err);
        }
    }
}


errorHandling();
