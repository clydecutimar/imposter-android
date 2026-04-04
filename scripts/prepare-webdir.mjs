import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const webDir = path.join(rootDir, 'www');
const requiredFiles = ['index.html', 'logo.png', 'loading-screen.mp4'];
const optionalFiles = ['styles.css', 'app.js'];

await mkdir(webDir, { recursive: true });

for (const fileName of [...requiredFiles, ...optionalFiles]) {
    const sourcePath = path.join(rootDir, fileName);
    const targetPath = path.join(webDir, fileName);

    try {
        await copyFile(sourcePath, targetPath);
    } catch (error) {
        if (requiredFiles.includes(fileName)) {
            throw error;
        }
    }
}

console.log(`Prepared web assets in ${webDir}`);
