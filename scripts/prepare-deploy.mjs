// Builds the portfolio for a self-hosted root ("/") deployment and stages the
// compiled output in deploy/, ready to upload to a hosting's public directory.
// Run with: npm run prepare:deploy
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, cpSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(rootDir, 'dist')
const deployDir = path.join(rootDir, 'deploy')

function fail(message) {
  console.error(`\n✖ ${message}`)
  process.exit(1)
}

// Guard rail: never let a future edit turn this into a wipe of something
// other than the local deploy/ folder.
if (path.basename(deployDir) !== 'deploy' || path.dirname(deployDir) !== rootDir) {
  fail(`Refusing to continue: unexpected deploy path "${deployDir}".`)
}

console.log('→ Building for hosting (base "/")...')
try {
  execSync('npm run build:hosting', { cwd: rootDir, stdio: 'inherit' })
} catch {
  fail('Build failed (npm run build:hosting). Fix the error above and re-run prepare:deploy.')
}

if (!existsSync(path.join(distDir, 'index.html'))) {
  fail(
    `Build did not produce ${path.join('dist', 'index.html')}. Aborting before touching deploy/.`,
  )
}

console.log('→ Clearing previous deploy/ contents...')
rmSync(deployDir, { recursive: true, force: true })
mkdirSync(deployDir, { recursive: true })

console.log('→ Copying dist/ contents into deploy/...')
cpSync(distDir, deployDir, { recursive: true })

function collectFiles(dir) {
  let files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) files = files.concat(collectFiles(fullPath))
    else files.push(fullPath)
  }
  return files
}

const files = collectFiles(deployDir)
const totalBytes = files.reduce((sum, file) => sum + statSync(file).size, 0)
const totalKb = (totalBytes / 1024).toFixed(1)

console.log(`\n✓ deploy/ ready: ${files.length} files, ${totalKb} KB total.`)
console.log(
  `  ${path.join('deploy', 'index.html')} ${existsSync(path.join(deployDir, 'index.html')) ? 'OK' : 'MISSING'}`,
)
