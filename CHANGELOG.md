# Changelog

All notable changes to Paper Writer will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.13.0] - 2026-06-22

### Added
- Advanced Usage Guide (`examples/advanced-usage.md`) covering multi-agent collaboration, cross-language writing, journal-specific formatting, thesis writing, systematic reviews, and reviewer feedback workflows
- Conference Paper Example (`examples/conference-paper-example.md`) demonstrating complete IEEE conference paper writing workflow
- Usage Examples section in both README files with 4 detailed end-to-end examples
- Detailed usage examples for all 6 agent definitions (input/output demonstrations)
- Expanded APA 7th Edition style guide with title page format, statistical reporting rules, and multiple reference examples per type
- Expanded IEEE style guide with double-column format notes, mathematical equation formatting, abbreviation conventions, and table/figure examples
- Expanded GB/T 7714-2015 style guide with master/doctoral thesis structure, patent/standard/report formats, and mixed-language citation rules
- Advanced Usage section in both README files linking to the new guide
- Table of Contents added to Chinese README

### Changed
- Enhanced all 6 agent definitions with detailed usage examples, common phrases, and practical input/output demonstrations
- Improved Quick Start and Examples sections in both README.md and README.zh-CN.md
- Version bumped to 1.13.0 across package.json, CHANGELOG, and README badges

### Improved
- Paper Writer agent: added 3 multi-step workflow examples (Chinese journal, English conference, paragraph polish)
- Literature Reviewer agent: added systematic search workflow example, structured review paragraph example, and common academic phrases table
- Methodology Designer agent: added quasi-experimental, mixed-methods, and questionnaire design examples
- Data Analyst agent: added t-test, regression writing, and table design examples
- Academic Editor agent: added Chinese/English polish and translation examples
- Citation Manager agent: added bulk citation, consistency check, and BibTeX generation examples

## [1.12.0] - 2026-06-20

### Added
- Enhanced agent definitions with richer workflow descriptions and clearer output guidelines
- Improved prompt templates with more specific usage instructions and writing guidelines
- Expanded formatting style guides with additional reference type examples

### Changed
- Refined README structure for better navigation and readability
- Updated prompt template descriptions with expanded use-case details

## [1.11.0] - 2026-06-19

### Added
- Conference paper support documentation alongside existing journal paper workflows
- Enhanced examples directory with workflow descriptions for different paper types
- Improved cross-references between README and project documentation files

### Changed
- Updated agent capability descriptions for clarity
- Refined formatting style guide structure for consistency

## [1.10.0] - 2026-06-18

### Added
- Comprehensive README overhaul with Table of Contents, Features section, detailed Agent descriptions, and workflow diagrams
- Expanded CONTRIBUTING.md with commit convention table, detailed contribution types, and step-by-step guides
- Full Contributor Covenant Code of Conduct (v2.1) with enforcement guidelines and severity levels
- Enhanced SECURITY.md with vulnerability severity matrix, disclosure policy, and security best practices
- Enhanced CI workflow with per-file status reporting, package.json validation, and project stats
- PRs Welcome badge and CI status badge in README

### Changed
- README.md restructured for clarity and completeness -- removed emoji overuse, added proper Markdown links
- Version bumped to 1.10.0 across package.json and CHANGELOG
- CI workflow now checks for all community files (CODE_OF_CONDUCT, SECURITY, CODEOWNERS, package.json)

## [1.9.0] - 2026-06-18

### Added
- Expanded agent documentation with per-agent capability lists
- Workflow diagram showing the paper writing process flow
- Supported Paper Types section with expanded descriptions
- Quick Contribution Guide in README

### Changed
- Prompt Templates section now includes file links
- Formatting Styles section includes use-case descriptions
- Project Structure tree updated to include all community files

## [1.8.0] - 2026-06-18

### Added
- Installation section with detailed prerequisites and step-by-step setup
- Usage examples showing slash commands and multi-step workflow
- Agent definitions table in README with role and capability summaries
- License and Contributing sections with direct links to supporting documents

### Changed
- README badges updated: added CI status badge, version badge, PRs Welcome badge
- README overview section expanded with Key Highlights subsection

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

## [1.3.0] - 2026-06-14

### Changed
- Local optimization and performance improvements
- CHANGELOG sync across repositories
- npm package published
- Documentation improvements

## [1.2.0] - 2026-06-11

### Added
- `validate.mjs` -- project validation script (file existence, README links, placeholders, package.json)
- `npm run validate` script in package.json
- `examples/journal-paper-example.md` -- complete workflow example for journal papers
- Comprehensive `README.zh-CN.md` with full agent documentation, templates, and project structure

### Changed
- Bumped version from 1.0.0 to 1.2.0 in package.json (aligned with CHANGELOG)
- Expanded `files` field in package.json to include `examples/` and `validate.mjs`

## [1.1.0] - 2026-06-10

### Added
- Multi-platform installation guide (npm, macOS, Linux, Windows, Claude Code)
- npm package (`paper-writer`) published to npm registry
- npm publish workflow (publish.yml)
- Website and Topics added to GitHub repository
- Enhanced Release notes with platform-specific instructions

### Changed
- Repository made public for open-source community

## [1.0.0] - 2026-06-09

### Initial Release

#### Agents
- **Paper Writer** -- Main orchestrator for the entire writing workflow
- **Literature Reviewer** -- Systematic literature search, analysis, and synthesis
- **Methodology Designer** -- Research design, sampling, data collection, validity
- **Data Analyst** -- Statistical analysis, results writing, table/figure formatting
- **Academic Editor** -- Language polish, formatting, Chinese/English academic writing
- **Citation Manager** -- Reference management, APA/IEEE/GB-T 7714 formatting

#### Prompt Templates
- Abstract generation (Chinese + English)
- Introduction writing (background, problem, significance)
- Methodology design (research framework, data collection, analysis plan)
- Results writing (statistical reporting, table/figure descriptions)
- Discussion writing (theoretical contributions, practical implications)

#### Formatting Styles
- APA 7th Edition -- Psychology, Education, Social Sciences
- IEEE -- Engineering, Computer Science, Electronics
- GB/T 7714-2015 -- Chinese academic papers (national standard)

#### Language Guides
- Chinese Academic Writing
- English Academic Writing

#### Project Infrastructure
- MIT License
- English README with badges and documentation
- Chinese README (README.zh-CN.md)
- Contributing guidelines
- Changelog
