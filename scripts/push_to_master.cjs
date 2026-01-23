#!/usr/bin/env node
// Push current HEAD to master after a successful build
// CommonJS (works with default Node resolution in this repo)

const { execSync } = require('child_process');

function run(cmd) {
  try {
    const out = execSync(cmd, { stdio: 'inherit' });
    return out && out.toString ? out.toString().trim() : '';
  } catch (e) {
    console.error(`Command failed: ${cmd}`);
    console.error(e.message);
    process.exit(1);
  }
}

try {
  const head = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  console.log(`Current branch: ${head}`);

  // Ensure we have the latest refs from origin
  run('git fetch origin --prune');

  // Push HEAD to master with lease protection
  console.log('Pushing current HEAD to origin/master with --force-with-lease...');
  run('git push origin HEAD:master --force-with-lease');
  console.log('Push to master completed successfully.');
} catch (err) {
  console.error('Push to master failed. Aborting.');
  process.exit(1);
}
