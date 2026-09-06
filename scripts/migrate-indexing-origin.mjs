import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const OLD_ORIGIN = ['https://solar', 'project.org'].join('');
const NEW_ORIGIN = 'https://thesolarproject.org';
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.html', '.txt', '.xml']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (EXTENSIONS.has(path.extname(entry.name))) files.push(fullPath);
  }
  return files;
}

const files = [
  ...(await walk(path.join(ROOT, 'src'))),
  ...(await walk(path.join(ROOT, 'public'))),
  path.join(ROOT, 'index.html'),
];

let changed = 0;
for (const file of files) {
  const before = await readFile(file, 'utf8');
  if (!before.includes(OLD_ORIGIN)) continue;
  const after = before.replaceAll(OLD_ORIGIN, NEW_ORIGIN);
  await writeFile(file, after, 'utf8');
  changed += 1;
  console.log(`Updated ${path.relative(ROOT, file)}`);
}

console.log(`Normalized deprecated site origin in ${changed} file(s).`);
