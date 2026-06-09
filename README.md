<div align="center">

# 📝 Paper Writer

### AI-Powered Academic Paper Writing Agent for Claude Code

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Agent-blue)](https://claude.ai)
[![Academic](https://img.shields.io/badge/Type-Academic%20Writing-orange)]()

**[中文文档](README.zh-CN.md)** · [Report Bug](https://github.com/WuSuBuDuoMing/paper-writer/issues) · [Request Feature](https://github.com/WuSuBuDuoMing/paper-writer/issues)

</div>

---

## 📖 Overview

Paper Writer is a **Claude Code agent system** for academic paper writing. It provides specialized AI agents, prompt templates, and formatting guides to help researchers write high-quality academic papers from outline to final draft.

### What's Included

- 🤖 **6 Specialized Agents** — Paper Writer, Literature Reviewer, Methodology Designer, Data Analyst, Academic Editor, Citation Manager
- 📋 **5 Section Prompts** — Abstract, Introduction, Methodology, Results, Discussion
- 📐 **3 Formatting Styles** — APA 7th, IEEE, GB/T 7714-2015
- 🌐 **2 Language Guides** — Chinese Academic Writing, English Academic Writing
- 🔄 **Multi-language** — Full support for Chinese and English papers

---

## 🚀 Quick Start

### Prerequisites

- [Claude Code](https://claude.ai/code) installed
- Claude subscription (Pro, Team, or Enterprise)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/WuSuBuDuoMing/paper-writer.git
cd paper-writer

# 2. Copy agent definitions to your project
cp -r .claude/ /path/to/your/paper-project/.claude/

# 3. Start writing!
claude
```

### Usage

#### In Claude Code CLI

```bash
# Start Claude Code in your paper project directory
claude

# Then use slash commands:
/outline "深度学习在医学影像诊断中的应用"
/literature "transformer medical imaging"
/method "定量研究 问卷调查"
/write abstract
/polish "这段文本"
/review
```

#### As Agent Definitions

Copy the `.claude/agents/` files to your project's `.claude/agents/` directory. Claude Code will automatically recognize them.

---

## 🤖 Agents

### Paper Writer (Main Agent)
The orchestrator agent that manages the entire paper writing workflow. Handles topic selection, outline generation, section-by-section writing, and quality review.

### Literature Reviewer
Specializes in systematic literature search, analysis, and synthesis. Helps organize literature by themes, methods, or chronology.

### Methodology Designer
Helps design research methodology including study design, sampling strategy, data collection instruments, and validity/reliability analysis.

### Data Analyst
Assists with statistical analysis interpretation, result description, table/figure formatting, and writing the results section.

### Academic Editor
Polishes academic language, checks formatting, fixes grammar, converts between Chinese and English academic writing styles.

### Citation Manager
Manages references, generates citations in APA/IEEE/GB-T 7714 format, checks citation consistency, and generates BibTeX entries.

---

## 📋 Prompt Templates

Each template provides a structured prompt for generating specific paper sections:

| Template | Description |
|----------|-------------|
| [Abstract](prompts/sections/abstract.md) | Generate structured Chinese/English abstracts |
| [Introduction](prompts/sections/introduction.md) | Write introduction with background, problem, significance |
| [Methodology](prompts/sections/methodology.md) | Design research methodology with full detail |
| [Results](prompts/sections/results.md) | Write results with statistical reporting |
| [Discussion](prompts/sections/discussion.md) | Write discussion with theoretical and practical implications |

---

## 📐 Formatting Styles

| Style | File | Use Case |
|-------|------|----------|
| APA 7th Edition | [apa7.md](prompts/styles/apa7.md) | Psychology, Education, Social Sciences |
| IEEE | [ieee.md](prompts/styles/ieee.md) | Engineering, Computer Science, Electronics |
| GB/T 7714-2015 | [gb-t7714.md](prompts/styles/gb-t7714.md) | Chinese academic papers (national standard) |

---

## 🌐 Language Guides

| Guide | Description |
|-------|-------------|
| [Chinese Academic Writing](prompts/languages/chinese-academic.md) | 学术用语规范、常见问题修正、段落结构 |
| [English Academic Writing](prompts/languages/english-academic.md) | Hedging language, tense usage, common patterns |

---

## 📂 Project Structure

```
paper-writer/
├── .claude/
│   ├── agents/                    # Claude Code agent definitions
│   │   ├── paper-writer.md        #   Main orchestrator agent
│   │   ├── literature-reviewer.md #   Literature review specialist
│   │   ├── methodology-designer.md#   Research methodology expert
│   │   ├── data-analyst.md        #   Data analysis & results
│   │   ├── academic-editor.md     #   Language polish & formatting
│   │   └── citation-manager.md    #   Reference management
│   └── commands/                   # (Reserved for slash commands)
│
├── prompts/
│   ├── sections/                   # Section-specific prompt templates
│   │   ├── abstract.md
│   │   ├── introduction.md
│   │   ├── methodology.md
│   │   ├── results.md
│   │   └── discussion.md
│   ├── styles/                     # Formatting style guides
│   │   ├── apa7.md
│   │   ├── ieee.md
│   │   └── gb-t7714.md
│   └── languages/                  # Language writing guides
│       ├── chinese-academic.md
│       └── english-academic.md
│
├── examples/                       # (Coming soon)
├── README.md
├── README.zh-CN.md
├── LICENSE
├── CONTRIBUTING.md
└── CHANGELOG.md
```

---

## 🎯 Supported Paper Types

- **Journal Articles** — Original research papers
- **Conference Papers** — Short-form conference submissions
- **Thesis/Dissertation** — Master's and PhD theses
- **Review Papers** — Systematic and narrative reviews
- **Research Proposals** — Grant applications and study proposals
- **Literature Reviews** — Standalone review chapters

---

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for better academic writing**

[⬆ Back to top](#-paper-writer)

</div>
