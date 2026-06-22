# Quick Reference Cheat Sheet

A one-page reference for all Paper Writer commands, agents, and templates.

## Commands

| Command | Description | Agent |
|---------|-------------|-------|
| `/outline [topic]` | Generate paper outline | Paper Writer |
| `/literature [keywords]` | Systematic literature search | Literature Reviewer |
| `/method [research question]` | Design research methodology | Methodology Designer |
| `/write [section]` | Write a specific section | Paper Writer |
| `/polish [text]` | Polish academic text | Academic Editor |
| `/cite [reference]` | Format citations | Citation Manager |
| `/review` | Self-review the paper | Paper Writer |
| `/format [style]` | Apply formatting style | Paper Writer |

## Slash Command Sections

The `/write` command accepts these section names:

- `abstract` -- Generate bilingual abstract
- `introduction` -- Write introduction chapter
- `literature` -- Write literature review chapter
- `methodology` -- Write methodology chapter
- `results` -- Write results chapter
- `discussion` -- Write discussion and conclusion

## Paper Types

| Type | Description | Typical Length |
|------|-------------|----------------|
| Journal Article | Original research for peer-reviewed journals | 6000-10000 words |
| Conference Paper | Short-form conference submissions | 4000-8000 words |
| Master's Thesis | Master's degree thesis | 30000-50000 words |
| Doctoral Dissertation | PhD dissertation | 60000-100000 words |
| Review Paper | Systematic or narrative literature review | 8000-15000 words |
| Research Report | Technical or policy report | Variable |
| Proposal | Grant application or study proposal | 5000-10000 words |

## Formatting Styles

| Style | Key Features | Citation Format |
|-------|-------------|-----------------|
| APA 7th | Author-date system, double-spaced | (Author, Year) |
| IEEE | Numbered references, two-column | [1]-[3] |
| GB/T 7714 | Chinese national standard, sequential | [1] 作者. 题名[J]. |

## Section Templates

| Template | Variables | File |
|----------|-----------|------|
| Abstract | research topic, question, method, findings, conclusion | `prompts/sections/abstract.md` |
| Introduction | topic, field, background, problem, contribution | `prompts/sections/introduction.md` |
| Methodology | question, paradigm, method, sample, data, tools | `prompts/sections/methodology.md` |
| Results | hypotheses, methods, data, significance | `prompts/sections/results.md` |
| Discussion | question, findings, comparison, contribution, implications | `prompts/sections/discussion.md` |

## Agents Quick Reference

| Agent | When to Use | Key Output |
|-------|------------|------------|
| Paper Writer | Full writing workflow, section drafting, review | Structured text with [TODO] markers |
| Literature Reviewer | Literature search, synthesis, gap analysis | Thematic/chronological review text |
| Methodology Designer | Research design, sampling, validity | Complete methodology chapter |
| Data Analyst | Statistical analysis, results writing | APA-formatted results with tables |
| Academic Editor | Language polish, grammar, translation | Polished academic text |
| Citation Manager | Reference formatting, BibTeX, consistency check | Formatted references and citations |

## Language Guides

| Guide | Key Topics | File |
|-------|-----------|------|
| Chinese Academic | Connectives, substitution table, punctuation | `prompts/languages/chinese-academic.md` |
| English Academic | Hedging, tense usage, common patterns | `prompts/languages/english-academic.md` |

## Style Guides

| Guide | Coverage | File |
|-------|----------|------|
| APA 7th | Page setup, headings, citations, references, tables | `prompts/styles/apa7.md` |
| IEEE | Format, numbered citations, equations, abbreviations | `prompts/styles/ieee.md` |
| GB/T 7714 | Thesis structure, sequential/year citations, reference types | `prompts/styles/gb-t7714.md` |

## Quick Workflow Templates

### Minimal Journal Paper (Fastest Path)

```text
1. /outline "topic"
2. /write abstract
3. /write introduction
4. /write methodology
5. /write results
6. /write discussion
7. /cite (format references)
8. /polish (final polish)
9. /review (quality check)
```

### Full Research Workflow (Most Thorough)

```text
1. /outline "topic"
2. /literature "keywords"
3. /method "research question"
4. /write abstract
5. /write introduction
6. /write methodology
7. (conduct research / collect data)
8. /write results
9. /write discussion
10. /cite (format references)
11. /polish (language polish)
12. /format APA 7th (or IEEE / GB/T 7714)
13. /review (final quality check)
```

### Quick Polish (Single Paragraph)

```text
/polish "your draft paragraph here"
```

## Statistical Reporting Templates (APA 7th)

```text
t-test:         t(df) = [t值], p = [p值], d = [效应量]
ANOVA:          F(df1, df2) = [F值], p = [p值], eta² = [效应量]
Correlation:    r(df) = [r值], p = [p值]
Regression:     β = [系数], SE = [标准误], t = [t值], p = [p值]
Model fit:      χ²(df) = [值], p = [p值], CFI = [值], RMSEA = [值]
```
