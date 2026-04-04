import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const assetDir = path.join(rootDir, 'assets');

await mkdir(assetDir, { recursive: true });
await copyFile(path.join(rootDir, 'logo.png'), path.join(assetDir, 'logo.png'));

console.log(`Prepared Capacitor asset sources in ${assetDir}`);
