import nunjucks from 'nunjucks';
import fs from 'fs/promises';
import path from 'path';
import glob from 'fast-glob';
import { exec } from 'child_process';

nunjucks.configure('templates', { autoescape: true });

// Run shell commands
function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) return reject(err);
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
      resolve();
    });
  });
}
const pages = await glob('pages/*.njk');
const outputDir = 'docs';

await fs.mkdir(outputDir, { recursive: true });

for (const file of pages) {
  const name = path.basename(file, '.njk');
  const src = await fs.readFile(file, 'utf8');
  const html = nunjucks.renderString(src, { title: name === 'index' ? null : name });
  await fs.writeFile(path.join(outputDir, `${name}.html`), html);
  console.log(`✓ Built ${name}.html`);
}
await run('cp dist/theme.css docs/theme.css');
