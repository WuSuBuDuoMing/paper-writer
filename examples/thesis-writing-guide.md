# Thesis Writing Guide

This guide provides a structured workflow for writing master's and doctoral theses using Paper Writer agents.

## Overview

Thesis writing differs from journal papers in scope, structure, and academic expectations. This guide covers the complete thesis lifecycle from proposal to defense.

## Thesis Structure

### Standard Master's Thesis Structure

```
1. 绪论（Introduction）
   1.1 研究背景
   1.2 研究问题与目标
   1.3 研究意义
   1.4 研究内容与方法
   1.5 论文结构安排

2. 文献综述（Literature Review）
   2.1 核心概念界定
   2.2 理论基础
   2.3 国内外研究现状
   2.4 研究述评与研究缺口

3. 研究设计与方法（Methodology）
   3.1 研究框架与假设
   3.2 研究设计
   3.3 数据收集
   3.4 数据分析方法
   3.5 研究伦理

4. 数据分析与结果（Results）
   4.1 描述性统计
   4.2 信效度检验
   4.3 假设检验
   4.4 稳健性检验

5. 讨论与结论（Discussion & Conclusion）
   5.1 主要发现讨论
   5.2 理论贡献
   5.3 实践启示
   5.4 研究局限性与未来方向
   5.5 结论

参考文献
附录
致谢
```

### Additional Sections for Doctoral Dissertations

```
1.1 研究背景（需更宏观的学术脉络梳理）
2.1 理论基础（需建立完整的理论分析框架）
3.1 多个研究/子研究设计（通常 2-3 个子研究）
4.1-4.3 每个子研究独立的结果章节
5.1 综合讨论（整合所有子研究发现）
```

## Step-by-Step Workflow

### Phase 1: Preparation (Week 1-2)

```
Step 1: Topic Selection
  Agent: Paper Writer
  Command: /outline "你的研究方向"
  Output: 完整论文大纲 + 研究问题列表

Step 2: Literature Review
  Agent: Literature Reviewer
  Command: /literature "你的研究关键词"
  Output: 系统性文献综述 + 研究缺口分析

Step 3: Methodology Design
  Agent: Methodology Designer
  Command: /method "研究问题和方法偏好"
  Output: 完整研究方案 + 样本量计算 + 伦理审查清单
```

### Phase 2: Writing (Week 3-8)

```
Step 4: Introduction
  Agent: Paper Writer
  Command: /write introduction
  Output: 3000-5000字绪论

Step 5: Literature Review Chapter
  Agent: Literature Reviewer
  Command: /write literature
  Output: 5000-8000字文献综述

Step 6: Methodology Chapter
  Agent: Methodology Designer
  Command: /write methodology
  Output: 3000-6000字方法论章节

Step 7: Abstract
  Agent: Paper Writer
  Command: /write abstract
  Output: 中英文摘要 + 关键词
```

### Phase 3: Analysis & Results (Week 9-12)

```
Step 8: Data Analysis
  Agent: Data Analyst
  Command: /write results
  Output: 3000-5000字结果章节（含三线表）

Step 9: Discussion & Conclusion
  Agent: Paper Writer
  Command: /write discussion
  Output: 3000-5000字讨论与结论
```

### Phase 4: Polish & Format (Week 13-16)

```
Step 10: Citation Check
  Agent: Citation Manager
  Command: /cite
  Output: 统一格式的参考文献列表

Step 11: Language Polish
  Agent: Academic Editor
  Command: /polish
  Output: 全文润色后的终稿

Step 12: Final Review
  Agent: Paper Writer
  Command: /review
  Output: 质量检查报告 + 修改建议
```

## Thesis-Specific Considerations

### 1. Extended Literature Review

Unlike journal papers, theses require a comprehensive literature review chapter:

- **Core concepts** -- Define all key terms with scholarly references
- **Theoretical framework** -- Establish the theoretical lens for the study
- **Research gaps** -- Show a clear progression from existing work to your contribution
- **Suggested length**: 5000-10000 words

### 2. Multiple Studies (Doctoral Level)

Doctoral dissertations often include 2-3 interconnected studies:

```
Study 1: Exploratory qualitative study
  -> Agent: Literature Reviewer + Methodology Designer

Study 2: Quantitative validation
  -> Agent: Data Analyst + Methodology Designer

Study 3: Intervention/Experiment
  -> Agent: All agents collaborate
```

### 3. Comprehensive Methodology

Thesis methodology chapters require more detail than journal papers:

- Justify every methodological choice
- Provide complete instrument details (reproduce scales, interview guides)
- Include pilot study results if applicable
- Address threats to validity comprehensively

### 4. Defense Preparation

After completion, use Paper Writer to prepare for defense:

```
Command: /review
- Check all claims are supported by evidence
- Verify consistency between chapters
- Ensure all research questions are addressed
- Prepare responses for common defense questions
```

## Tips for Thesis Writers

1. **Start with methodology** -- Write the methodology chapter first to clarify your thinking
2. **Iterative writing** -- Write chapter drafts, then revise after completing later chapters
3. **Citation management** -- Use Citation Manager from the start to avoid reformatting
4. **Cross-reference** -- Ensure introduction, methodology, results, and discussion are consistent
5. **Progressive polishing** -- Polish each chapter before moving to the next

## Common Mistakes to Avoid

- Literature review that merely lists studies without analysis
- Methodology that does not justify each choice
- Results without effect sizes and confidence intervals
- Discussion that merely restates results without interpretation
- Inconsistencies between chapters (e.g., different sample sizes reported)
