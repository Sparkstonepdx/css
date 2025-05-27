import chokidar from 'chokidar';
import { exec } from 'child_process';
import { promisify } from 'util';
import liveServer from 'live-server';

const run = promisify(exec);

async function rebuild() {
  try {
    console.log('🔄 Rebuilding...');
    await run('node build.js');
    await run('sass src/theme.scss dist/theme.css');
    await run('cp dist/theme.css docs/theme.css');
    console.log('✅ Build complete.\n');
  } catch (err) {
    console.error('❌ Build failed:', err.stderr || err);
  }
}

// Initial build
await rebuild();

// Watch for changes in key folders
const watcher = chokidar.watch('.', {
  ignored: ['node_modules', 'dist', 'docs', '.git'],
  ignoreInitial: true,
  persistent: true,
});

watcher.on('all', async (event, path) => {
  console.log(`📁 ${event} ${path}`);
  await rebuild();
});

// Serve docs folder
liveServer.start({
  root: 'docs',
  open: true,
  wait: 100,
  logLevel: 0,
});
