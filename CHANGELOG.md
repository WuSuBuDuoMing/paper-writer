# Changelog

All notable changes to Paper Writer will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.7.0] - 2026-06-16

### Added
- Code of Conduct (CODE_OF_CONDUCT.md) based on Contributor Covenant v2.1
- GitHub Sponsors funding configuration (FUNDING.yml)
- CODEOWNERS file for code review assignments
- Enhanced Issue and PR templates

## [1.5.0] - 2026-06-14

### Added
- Security policy (SECURITY.md)
- Documentation enhancements
- Open-source best practices

## [1.0.0] - 2026-06-09

### 🎉 Initial Release

#### Agents
- **Paper Writer** — Main orchestrator for the entire writing workflow
- **Literature Reviewer** — Systematic literature search, analysis, and synthesis
- **Methodology Designer** — Research design, sampling, data collection, validity
- **Data Analyst** — Statistical analysis, results writing, table/figure formatting
- **Academic Editor** — Language polish, formatting, Chinese/English academic writing
- **Citation Manager** — Reference management, APA/IEEE/GB-T 7714 formatting

#### Prompt Templates
- Abstract generation (Chinese + English)
- Introduction writing (background, problem, significance)
- Methodology design (research framework, data collection, analysis plan)
- Results writing (statistical reporting, table/figure descriptions)
- Discussion writing (theoretical contributions, practical implications)

#### Formatting Styles
- APA 7th Edition — Psychology, Education, Social Sciences
- IEEE — Engineering, Computer Science, Electronics
- GB/T 7714-2015 — Chinese academic papers (national standard)

#### Language Guides
- Chinese Academic Writing — 学术用语、常见问题、段落结构
- English Academic Writing — Hedging, tense usage, common patterns

#### Project Infrastructure
- MIT License
- English README with badges and documentation
- Chinese README (README.zh-CN.md)
- Contributing guidelines
- Changelog

## [1.1.0] - 2026-06-10

### Added
- Multi-platform installation guide (npm, macOS, Linux, Windows, Claude Code)
- npm package (`paper-writer`) published to npm registry
- npm publish workflow (publish.yml)
- Website and Topics added to GitHub repository
- Enhanced Release notes with platform-specific instructions

### Changed
- Repository made public for open-source community

## [1.3.0] - 2026-06-14

### Changed
- Local optimization and performance improvements
- CHANGELOG sync across repositories
- npm package published
- Documentation improvements

## [1.2.0] - 2026-06-11

### Added
- `validate.mjs` — project validation script (file existence, README links, placeholders, package.json)
- `npm run validate` script in package.json
- `examples/journal-paper-example.md` — complete workflow example for journal papers
- Comprehensive `README.zh-CN.md` with full agent documentation, templates, and project structure

### Changed
- Bumped version from 1.0.0 to 1.2.0 in package.json (aligned with CHANGELOG)
- Expanded `files` field in package.json to include `examples/` and `validate.mjs`
