#!/usr/bin/env node

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = __dirname;

let errors = 0;
let warnings = 0;

function fail(msg) { console.error(`  FAIL: ${msg}`); errors++; }
function warn(msg) { console.warn(`  WARN: ${msg}`); warnings++; }
function ok(msg) { console.log(`  OK:   ${msg}`); }

// --- 1. Check all referenced prompt files exist ---

console.log('\n=== 1. Checking prompt files exist ===');

const expectedFiles = [
  '.claude/agents/paper-writer.md',
  '.claude/agents/literature-reviewer.md',
  '.claude/agents/methodology-designer.md',
  '.claude/agents/data-analyst.md',
  '.claude/agents/academic-editor.md',
  '.claude/agents/citation-manager.md',
  'prompts/sections/abstract.md',
  'prompts/sections/introduction.md',
  'prompts/sections/methodology.md',
  'prompts/sections/results.md',
  'prompts/sections/discussion.md',
  'prompts/styles/apa7.md',
  'prompts/styles/ieee.md',
  'prompts/styles/gb-t7714.md',
  'prompts/languages/chinese-academic.md',
  'prompts/languages/english-academic.md',
];

for (const f of expectedFiles) {
  const full = join(ROOT, f);
  if (existsSync(full)) {
    ok(f);
  } else {
    fail(`Missing file: ${f}`);
  }
}

// --- 2. Check README links point to existing files ---

console.log('\n=== 2. Checking README link targets ===');

function extractLinks(md) {
  const re = /\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  let m;
  while ((m = re.exec(md)) !== null) {
    const target = m[2];
    if (target.startsWith('http') || target.startsWith('#') || target.startsWith('mailto:')) continue;
    links.push(target);
  }
  return links;
}

for (const readme of ['README.md', 'README.zh-CN.md']) {
  const readmePath = join(ROOT, readme);
  if (!existsSync(readmePath)) { fail(`${readme} not found`); continue; }
  const content = readFileSync(readmePath, 'utf-8');
  const links = extractLinks(content);
  for (const link of links) {
    const target = join(ROOT, decodeURIComponent(link));
    if (existsSync(target)) {
      ok(`${readme} -> ${link}`);
    } else {
      fail(`${readme} broken link: ${link}`);
    }
  }
}

// --- 3. Check template placeholders ---

console.log('\n=== 3. Checking template placeholders ===');

const sectionsDir = join(ROOT, 'prompts/sections');
if (existsSync(sectionsDir)) {
  for (const file of readdirSync(sectionsDir)) {
    if (!file.endsWith('.md')) continue;
    const content = readFileSync(join(sectionsDir, file), 'utf-8');
    const placeholders = content.match(/\{[^}]+\}/g) || [];
    if (placeholders.length === 0) {
      warn(`prompts/sections/${file}: no {placeholders} found`);
    } else {
      ok(`prompts/sections/${file}: ${placeholders.length} placeholder(s) — ${[...new Set(placeholders)].join(', ')}`);
    }
  }
}

// --- 4. Check package.json integrity ---

console.log('\n=== 4. Checking package.json ===');

const pkgPath = join(ROOT, 'package.json');
if (existsSync(pkgPath)) {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  if (!pkg.name) fail('package.json: missing "name"');
  else ok(`name: ${pkg.name}`);
  if (!pkg.version) fail('package.json: missing "version"');
  else ok(`version: ${pkg.version}`);
  if (!pkg.files || !Array.isArray(pkg.files)) {
    fail('package.json: missing or invalid "files" array');
  } else {
    for (const f of pkg.files) {
      const full = join(ROOT, f);
      if (existsSync(full)) {
        ok(`files entry exists: ${f}`);
      } else {
        fail(`files entry missing: ${f}`);
      }
    }
  }
} else {
  fail('package.json not found');
}

// --- 5. Check .claude/ config paths ---

console.log('\n=== 5. Checking .claude/ structure ===');

const claudeDir = join(ROOT, '.claude');
if (existsSync(claudeDir)) {
  const agentsDir = join(claudeDir, 'agents');
  if (existsSync(agentsDir)) {
    const agents = readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    ok(`${agents.length} agent(s) found`);
    if (agents.length !== 6) warn(`Expected 6 agents, found ${agents.length}`);
  } else {
    fail('.claude/agents/ directory missing');
  }
} else {
  fail('.claude/ directory missing');
}

// --- Summary ---

console.log('\n=== Summary ===');
console.log(`  Errors:   ${errors}`);
console.log(`  Warnings: ${warnings}`);
console.log(`  Status:   ${errors === 0 ? 'PASS' : 'FAIL'}`);
process.exit(errors > 0 ? 1 : 0);
