<div align="center">

# Paper Writer

### AI-Powered Academic Paper Writing Agent for Claude Code

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![CI](https://github.com/WuSuBuDuoMing/paper-writer/actions/workflows/ci.yml/badge.svg)](https://github.com/WuSuBuDuoMing/paper-writer/actions/workflows/ci.yml)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Agent-blue)](https://claude.ai/code)
[![Version](https://img.shields.io/badge/version-1.13.0-orange.svg)](https://github.com/WuSuBuDuoMing/paper-writer/releases)
[![Academic](https://img.shields.io/badge/Type-Academic%20Writing-orange)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**[Chinese Documentation](README.zh-CN.md)** | [Report Bug](https://github.com/WuSuBuDuoMing/paper-writer/issues) | [Request Feature](https://github.com/WuSuBuDuoMing/paper-writer/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Usage Examples](#usage-examples)
- [Agents](#agents)
- [Prompt Templates](#prompt-templates)
- [Formatting Styles](#formatting-styles)
- [Language Guides](#language-guides)
- [Advanced Usage](#advanced-usage)
- [Project Structure](#project-structure)
- [Supported Paper Types](#supported-paper-types)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Paper Writer is a **Claude Code agent system** designed for academic paper writing. It provides specialized AI agents, prompt templates, and formatting guides to help researchers write high-quality academic papers -- from outline to final draft.

Whether you are a graduate student drafting your first journal article, a researcher preparing a conference paper, or a seasoned academic polishing a manuscript, Paper Writer provides the specialized agents and structured workflows you need.

### Key Highlights

- **6 Specialized Agents** -- Each agent is an expert in a specific aspect of academic writing
- **5 Section Prompts** -- Structured templates for every major paper section
- **3 Formatting Styles** -- APA 7th, IEEE, and GB/T 7714-2015 (Chinese national standard)
- **2 Language Guides** -- Chinese and English academic writing conventions
- **Bilingual Support** -- Full support for Chinese and English papers with cross-language capabilities

---

## Features

### Intelligent Agent System

| Agent | Role | Key Capabilities |
|-------|------|------------------|
| Paper Writer | Orchestrator | Topic selection, outline generation, section-by-section writing, quality review |
| Literature Reviewer | Research Specialist | Systematic literature search, thematic analysis, synthesis |
| Methodology Designer | Research Architect | Study design, sampling strategy, data collection, validity analysis |
| Data Analyst | Results Expert | Statistical interpretation, results writing, table/figure formatting |
| Academic Editor | Language Polisher | Academic language refinement, formatting, grammar, cross-language conversion |
| Citation Manager | Reference Expert | APA/IEEE/GB-T 7714 formatting, BibTeX generation, citation consistency |

### Structured Writing Workflow

```
Topic Selection --> Literature Review --> Methodology Design
       |                                        |
       v                                        v
   Outline -----> Section Writing -----> Quality Review -----> Final Draft
                       |
          +------------+------------+
          |            |            |
      Abstract    Methodology   Results ...
```

### Multi-Format Output

- **APA 7th Edition** -- Psychology, Education, Social Sciences
- **IEEE** -- Engineering, Computer Science, Electronics
- **GB/T 7714-2015** -- Chinese academic papers (national standard)

---

## Quick Start

### Prerequisites

- [Claude Code](https://claude.ai/code) installed and configured
- A Claude subscription (Pro, Team, or Enterprise)
- Git installed on your system

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/WuSuBuDuoMing/paper-writer.git
cd paper-writer

# 2. Copy agent definitions to your paper project
cp -r .claude/ /path/to/your/paper-project/.claude/

# 3. Copy prompt templates (optional, but recommended)
cp -r prompts/ /path/to/your/paper-project/prompts/

# 4. Start writing!
cd /path/to/your/paper-project
claude
```

### Usage

#### Using Slash Commands in Claude Code

```bash
# Start Claude Code in your paper project directory
claude

# Use the specialized commands:
/outline "Deep Learning in Medical Image Diagnosis"
/literature "transformer medical imaging"
/method "quantitative research questionnaire"
/write abstract
/polish "text to refine"
/review
```

#### As Agent Definitions

Copy the `.claude/agents/` files to your project's `.claude/agents/` directory. Claude Code will automatically recognize and load them when you start a session.

---

## Usage Examples

### Example 1: Complete Journal Paper Workflow (Chinese)

```bash
# Step 1: Generate an outline
claude "/outline '人工智能个性化学习系统对大学生学习效果的影响研究'"

# Step 2: Review the literature
claude "/literature '个性化学习 人工智能 教育技术'"

# Step 3: Design methodology
claude "/method '准实验设计 前后测对照组'"

# Step 4: Write each section
claude "/write abstract"
claude "/write introduction"
claude "/write results"
claude "/write discussion"

# Step 5: Polish and review
claude "/polish '本文研究了人工智能个性化学习系统对...'"
claude "/review"

# Step 6: Format
claude "/format GB/T 7714"
```

### Example 2: English IEEE Conference Paper

```bash
# Outline for an IEEE conference paper
claude "/outline 'Federated Learning-Based Anomaly Detection for IoT Networks'"

# Literature review with IEEE formatting
claude "/literature 'federated learning IoT security'"

# Write results with IEEE table format
claude "/write results"

# Apply IEEE citation style
claude "/format IEEE"
```

### Example 3: Quick Paragraph Polish

```bash
# Polish a draft paragraph
claude "/polish 'This study examines the impact of AI on education.
We tested 300 students and the results were very good.'"

# Expected output: Academic, hedged language with proper statistical reporting
# "This study investigates the impact of AI-assisted instruction on educational outcomes.
#  A quasi-experimental study was conducted involving 300 undergraduate students.
#  The results demonstrated a statistically significant improvement..."
```

### Example 4: Bulk Citation Formatting

```bash
# Convert raw references to a specific format
claude "/cite 'Wang M, Li H. AI in education. J Educational Tech, 2024, 45(3):12-20'"
# Output: Wang, M., & Li, H. (2024). AI in education. Journal of Educational Technology, 45(3), 12-20.
```

For more examples, see:
- [Journal Paper Example](examples/journal-paper-example.md) -- Chinese journal paper complete workflow
- [Conference Paper Example](examples/conference-paper-example.md) -- IEEE conference paper workflow
- [Advanced Usage Guide](examples/advanced-usage.md) -- Multi-agent collaboration, cross-language writing, and more

---

## Agents

### Paper Writer (Main Agent)

The orchestrator agent that manages the entire paper writing workflow. Handles topic selection, outline generation, section-by-section writing, and quality review.

**Capabilities:**
- Decompose complex topics into structured outlines
- Coordinate other specialized agents for each section
- Maintain consistency across all paper sections
- Perform quality checks against academic standards

### Literature Reviewer

Specializes in systematic literature search, analysis, and synthesis. Helps organize literature by themes, methods, or chronology.

**Capabilities:**
- Systematic literature search strategies
- Thematic and chronological organization
- Gap identification and research positioning
- Citation network analysis

### Methodology Designer

Helps design research methodology including study design, sampling strategy, data collection instruments, and validity/reliability analysis.

**Capabilities:**
- Quantitative and qualitative research design
- Sampling strategy and sample size calculation
- Survey and experiment design
- Validity and reliability assessment

### Data Analyst

Assists with statistical analysis interpretation, result description, table/figure formatting, and writing the results section.

**Capabilities:**
- Statistical method selection guidance
- Results interpretation and description
- Table and figure formatting
- APA/IEEE compliant data presentation

### Academic Editor

Polishes academic language, checks formatting, fixes grammar, converts between Chinese and English academic writing styles.

**Capabilities:**
- Academic tone and register refinement
- Grammar and syntax correction
- Cross-language academic style conversion
- Formatting consistency checks

### Citation Manager

Manages references, generates citations in APA/IEEE/GB-T 7714 format, checks citation consistency, and generates BibTeX entries.

**Capabilities:**
- Multi-format citation generation
- Reference list formatting
- Citation-in-text consistency checking
- BibTeX entry generation

---

## Prompt Templates

Each template provides a structured prompt for generating specific paper sections:

| Template | File | Description |
|----------|------|-------------|
| Abstract | [prompts/sections/abstract.md](prompts/sections/abstract.md) | Generate structured Chinese/English abstracts with keywords |
| Introduction | [prompts/sections/introduction.md](prompts/sections/introduction.md) | Write introduction with background, problem statement, and significance |
| Methodology | [prompts/sections/methodology.md](prompts/sections/methodology.md) | Design detailed research methodology with full justification |
| Results | [prompts/sections/results.md](prompts/sections/results.md) | Write results with proper statistical reporting and table/figure references |
| Discussion | [prompts/sections/discussion.md](prompts/sections/discussion.md) | Write discussion with theoretical and practical implications |

---

## Formatting Styles

| Style | File | Use Case |
|-------|------|----------|
| APA 7th Edition | [apa7.md](prompts/styles/apa7.md) | Psychology, Education, Social Sciences |
| IEEE | [ieee.md](prompts/styles/ieee.md) | Engineering, Computer Science, Electronics |
| GB/T 7714-2015 | [gb-t7714.md](prompts/styles/gb-t7714.md) | Chinese academic papers (national standard) |

Each style guide covers page setup, heading hierarchy, in-text citation format, reference list format, and table/figure formatting rules.

---

## Language Guides

| Guide | File | Description |
|-------|------|-------------|
| Chinese Academic Writing | [chinese-academic.md](prompts/languages/chinese-academic.md) | Academic vocabulary, common mistakes, paragraph structure |
| English Academic Writing | [english-academic.md](prompts/languages/english-academic.md) | Hedging language, tense usage, common academic patterns |

---

## Advanced Usage

For detailed advanced usage, see [examples/advanced-usage.md](examples/advanced-usage.md). Highlights include:

- **Multi-agent collaboration** -- How to orchestrate agents across the full writing workflow
- **Cross-language writing** -- Translate and polish between Chinese and English academic styles
- **Journal-specific formatting** -- Customize output for target journal requirements
- **Thesis writing** -- Special considerations for master's and doctoral theses
- **Systematic reviews** -- PRISMA-guided literature review workflow
- **Reviewer feedback** -- Structured approach to revision

---

## Project Structure

```
paper-writer/
├── .claude/
│   ├── agents/                       # Claude Code agent definitions
│   │   ├── paper-writer.md           #   Main orchestrator agent
│   │   ├── literature-reviewer.md    #   Literature review specialist
│   │   ├── methodology-designer.md   #   Research methodology expert
│   │   ├── data-analyst.md           #   Data analysis & results
│   │   ├── academic-editor.md        #   Language polish & formatting
│   │   └── citation-manager.md       #   Reference management
│   └── commands/                      # (Reserved for slash commands)
│
├── prompts/
│   ├── sections/                      # Section-specific prompt templates
│   │   ├── abstract.md
│   │   ├── introduction.md
│   │   ├── methodology.md
│   │   ├── results.md
│   │   └── discussion.md
│   ├── styles/                        # Formatting style guides
│   │   ├── apa7.md
│   │   ├── ieee.md
│   │   └── gb-t7714.md
│   └── languages/                     # Language writing guides
│       ├── chinese-academic.md
│       └── english-academic.md
│
├── examples/                          # Example papers and workflows
│   ├── journal-paper-example.md       #   Chinese journal paper workflow
│   ├── conference-paper-example.md    #   IEEE conference paper workflow
│   └── advanced-usage.md             #   Advanced usage guide
│
├── .github/                           # GitHub configuration
│   ├── workflows/                     # CI/CD pipelines
│   │   ├── ci.yml                     #   Validation workflow
│   │   └── publish.yml               #   npm publish workflow
│   ├── ISSUE_TEMPLATE/               # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md      # PR template
│
├── README.md                          # English documentation
├── README.zh-CN.md                    # Chinese documentation
├── LICENSE                            # MIT License
├── CONTRIBUTING.md                    # Contribution guidelines
├── CODE_OF_CONDUCT.md                 # Community standards
├── SECURITY.md                        # Security policy
├── CHANGELOG.md                       # Version history
├── CODEOWNERS                         # Code review assignments
├── validate.mjs                       # Project validation script
└── package.json                       # npm package metadata
```

---

## Supported Paper Types

- **Journal Articles** -- Original research papers for peer-reviewed journals
- **Conference Papers** -- Short-form conference submissions and proceedings
- **Thesis/Dissertation** -- Master's and PhD theses and dissertations
- **Review Papers** -- Systematic and narrative literature reviews
- **Research Proposals** -- Grant applications and study proposals
- **Literature Reviews** -- Standalone review chapters and reports

---

## Contributing

Contributions are welcome! Whether it is fixing a typo, adding a new agent, or suggesting a new formatting style, every contribution helps.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Contribution Guide

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Ways to Contribute

- Add new agent definitions
- Create additional prompt templates
- Add formatting styles for other citation formats
- Improve existing documentation
- Report bugs and suggest features

---

## License

This project is licensed under the **MIT License** -- see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with care for better academic writing**

[Back to top](#paper-writer)

</div>
