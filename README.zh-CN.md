<div align="center">

# Paper Writer

### Claude Code 学术论文写作智能体

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Agent-blue)](https://claude.ai)
[![Version](https://img.shields.io/badge/version-1.13.0-orange.svg)](https://github.com/WuSuBuDuoMing/paper-writer/releases)
[![Academic](https://img.shields.io/badge/Type-Academic%20Writing-orange)]()

**[English](README.md)** | [报告问题](https://github.com/WuSuBuDuoMing/paper-writer/issues) | [功能建议](https://github.com/WuSuBuDuoMing/paper-writer/issues)

</div>

---

## 目录

- [概述](#概述)
- [快速开始](#快速开始)
- [使用示例](#使用示例)
- [智能体](#智能体)
- [Prompt 模板](#prompt-模板)
- [格式规范](#格式规范)
- [语言指南](#语言指南)
- [高级用法](#高级用法)
- [项目结构](#项目结构)
- [支持的论文类型](#支持的论文类型)
- [验证](#验证)
- [贡献](#贡献)
- [许可证](#许可证)

---

## 概述

Paper Writer 是一个 **Claude Code 智能体系统**，专为学术论文写作设计。提供专业化 AI 智能体、Prompt 模板和格式指南，帮助研究者从选题到终稿完成高质量学术论文。

### 包含内容

- 6 个专业智能体 -- 论文写作、文献综述、方法论设计、数据分析、学术润色、引用管理
- 5 个章节模板 -- 摘要、引言、方法论、结果、讨论
- 3 种格式规范 -- APA 7th、IEEE、GB/T 7714-2015
- 2 份语言指南 -- 中文学术写作、英文学术写作
- 完整的中英文支持

---

## 快速开始

### 前提条件

- [Claude Code](https://claude.ai/code) 已安装
- Claude 订阅（Pro、Team 或 Enterprise）

### 安装

```bash
# 克隆仓库
git clone https://github.com/WuSuBuDuoMing/paper-writer.git
cd paper-writer

# 复制智能体定义到你的项目
cp -r .claude/ /path/to/your/paper-project/.claude/

# 复制 Prompt 模板（推荐）
cp -r prompts/ /path/to/your/paper-project/prompts/

# 启动
cd /path/to/your/paper-project
claude
```

### 使用方法

```bash
# 在论文项目目录中启动 Claude Code
claude

# 然后使用斜杠命令：
/outline "深度学习在医学影像诊断中的应用"
/literature "transformer medical imaging"
/method "定量研究 问卷调查"
/write abstract
/polish "这段文本"
/review
```

---

## 使用示例

### 示例 1：完整期刊论文写作流程

```bash
# 步骤 1：生成论文大纲
claude "/outline '人工智能个性化学习系统对大学生学习效果的影响研究'"

# 步骤 2：文献综述
claude "/literature '个性化学习 人工智能 教育技术'"

# 步骤 3：设计研究方法
claude "/method '准实验设计 前后测对照组'"

# 步骤 4：逐章节撰写
claude "/write abstract"
claude "/write introduction"
claude "/write results"
claude "/write discussion"

# 步骤 5：润色与审查
claude "/polish '本文研究了人工智能个性化学习系统对...'"
claude "/review"

# 步骤 6：格式化
claude "/format GB/T 7714"
```

### 示例 2：IEEE 会议论文

```bash
# 生成英文会议论文大纲
claude "/outline 'Federated Learning-Based Anomaly Detection for IoT Networks'"

# 文献检索
claude "/literature 'federated learning IoT security'"

# 撰写结果（IEEE 表格格式）
claude "/write results"

# 应用 IEEE 引用格式
claude "/format IEEE"
```

### 示例 3：快速段落润色

```bash
# 润色一段中文学术文本
claude "/polish '本文研究了AI对学生学习的影响。我们找了300个学生做问卷调查。结果发现AI教学效果很好。'"

# 输出示例：
# 「本研究旨在探究人工智能辅助教学对大学生学习效果的影响。
#  研究采用问卷调查法，以分层随机抽样的方式选取300名在校大学生作为调查对象。
#  实证分析结果表明，接受AI辅助教学的实验组学生在学业成绩方面表现出显著提升
# （M = 82.3, SD = 8.5, p < 0.01），验证了人工智能技术在高等教育教学中的积极效用。」
```

### 示例 4：批量引用格式化

```bash
# 将原始文献信息转为指定格式
claude "/cite '张三, 李四. 人工智能在教育中的应用. 教育研究, 2024, 45(3):12-20'"
# 输出: [1] 张三, 李四. 人工智能在教育中的应用研究[J]. 教育研究, 2024, 45(3): 12-20.
```

更多示例请查看：
- [期刊论文示例](examples/journal-paper-example.md) -- 中文学术期刊论文完整流程
- [会议论文示例](examples/conference-paper-example.md) -- IEEE 会议论文写作流程
- [高级用法指南](examples/advanced-usage.md) -- 多智能体协作、跨语言写作等高级技巧

---

## 智能体

### Paper Writer（主编排智能体）

管理整个论文写作流程的主编排智能体。处理选题、大纲生成、逐章节撰写和质量审查。

| 能力 | 说明 |
| --- | --- |
| 选题与框架 | 确定研究方向、构建论文大纲 |
| 分步撰写 | 按章节逐步完成，每步可编辑 |
| 质量检查 | 格式、引用、逻辑、语言最终审查 |

### Literature Reviewer（文献综述专家）

专注于系统性文献检索、分析和综述撰写。按主题、方法或年代组织文献。

| 能力 | 说明 |
| --- | --- |
| 检索策略 | 覆盖 Web of Science、Scopus、PubMed、CNKI |
| 质量评估 | 评估研究质量和方法论严谨性 |
| 缺口识别 | 发现研究不足和未来方向 |

### Methodology Designer（方法论设计专家）

帮助设计研究方法论，包括研究设计、抽样策略、数据收集工具和效度/信度分析。

| 能力 | 说明 |
| --- | --- |
| 研究设计 | 定量/定性/混合方法选择 |
| 抽样策略 | 概率/非概率抽样及样本量计算 |
| 效度保障 | 内部效度、外部效度、构念效度 |

### Data Analyst（数据分析专家）

协助统计分析解读、结果描述、图表格式化和结果章节撰写。

| 能力 | 说明 |
| --- | --- |
| 统计分析 | 描述性、推断性、高级统计方法 |
| 图表规范 | 三线表、APA 格式统计报告 |
| 假设检验 | 效应量、置信区间报告 |

### Academic Editor（学术编辑专家）

润色学术语言、检查格式规范、修正语法、中英文写作风格转换。

| 能力 | 说明 |
| --- | --- |
| 语言润色 | 语法、用词、学术表达提升 |
| 逻辑检查 | 论证链条完整性、段落衔接 |
| 中英互译 | 学术论文翻译和本地化 |

### Citation Manager（引用管理专家）

管理参考文献，生成 APA/IEEE/GB-T 7714 格式引用，检查引用一致性，生成 BibTeX 条目。

| 能力 | 说明 |
| --- | --- |
| 格式生成 | APA、IEEE、GB/T 7714、BibTeX |
| 一致性检查 | 文内引用与参考文献列表匹配 |
| DOI 查询 | 帮助查找 DOI 和 ISBN |

---

## Prompt 模板

每个模板为特定论文章节提供结构化 Prompt：

| 模板 | 文件 | 说明 |
| --- | --- | --- |
| 摘要 | [abstract.md](prompts/sections/abstract.md) | 生成中英文结构化摘要 |
| 引言 | [introduction.md](prompts/sections/introduction.md) | 撰写背景、问题、意义 |
| 方法论 | [methodology.md](prompts/sections/methodology.md) | 设计完整研究方法 |
| 结果 | [results.md](prompts/sections/results.md) | 撰写统计分析结果 |
| 讨论 | [discussion.md](prompts/sections/discussion.md) | 撰写理论贡献和实践启示 |

### 使用示例

```markdown
# 生成摘要
请为以下论文撰写中英文摘要：

研究主题：深度学习在医学影像诊断中的应用
研究问题：如何提高医学影像诊断的准确率？
研究方法：卷积神经网络 + 多中心临床验证
主要发现：准确率达到 96.3%，较传统方法提升 12%
结论：深度学习可有效辅助医学影像诊断
```

---

## 格式规范

| 规范 | 文件 | 适用领域 |
| --- | --- | --- |
| APA 7th Edition | [apa7.md](prompts/styles/apa7.md) | 心理学、教育学、社会科学 |
| IEEE | [ieee.md](prompts/styles/ieee.md) | 工程、计算机科学、电子 |
| GB/T 7714-2015 | [gb-t7714.md](prompts/styles/gb-t7714.md) | 中文学术论文（国家标准） |

每个格式规范指南包含：页面设置、标题层级、文内引用格式、参考文献格式、表格与图片规范以及完整示例。

---

## 语言指南

| 指南 | 文件 | 说明 |
| --- | --- | --- |
| 中文学术写作 | [chinese-academic.md](prompts/languages/chinese-academic.md) | 学术用语规范、常见问题修正、段落结构 |
| 英文学术写作 | [english-academic.md](prompts/languages/english-academic.md) | Hedging、时态用法、常见模式 |

---

## 高级用法

详细内容请查看 [examples/advanced-usage.md](examples/advanced-usage.md)，主要亮点：

- **多智能体协作** -- 如何编排多个 Agent 完成全流程写作
- **跨语言写作** -- 中英文互译和学术风格转换
- **期刊定制** -- 针对特定期刊要求的格式适配
- **学位论文** -- 硕博论文的特殊写作要求
- **系统性综述** -- PRISMA 标准的文献综述工作流
- **审稿反馈** -- 结构化的修改回复策略

---

## 项目结构

```
paper-writer/
├── .claude/
│   ├── agents/                      # Claude Code 智能体定义
│   │   ├── paper-writer.md          #   主编排智能体
│   │   ├── literature-reviewer.md   #   文献综述专家
│   │   ├── methodology-designer.md  #   方法论设计专家
│   │   ├── data-analyst.md          #   数据分析专家
│   │   ├── academic-editor.md       #   学术编辑专家
│   │   └── citation-manager.md      #   引用管理专家
│   └── commands/                    # （预留斜杠命令）
│
├── prompts/
│   ├── sections/                    # 章节 Prompt 模板
│   │   ├── abstract.md
│   │   ├── introduction.md
│   │   ├── methodology.md
│   │   ├── results.md
│   │   └── discussion.md
│   ├── styles/                      # 格式规范指南
│   │   ├── apa7.md
│   │   ├── ieee.md
│   │   └── gb-t7714.md
│   └── languages/                   # 语言写作指南
│       ├── chinese-academic.md
│       └── english-academic.md
│
├── examples/                        # 使用示例
│   ├── journal-paper-example.md     #   期刊论文完整流程
│   ├── conference-paper-example.md  #   会议论文写作流程
│   └── advanced-usage.md           #   高级用法指南
│
├── validate.mjs                     # 项目验证脚本
├── README.md                        # 英文文档
├── README.zh-CN.md                  # 中文文档（本文件）
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
├── CODEOWNERS
└── package.json
```

---

## 支持的论文类型

- 期刊论文（Journal Article）
- 会议论文（Conference Paper）
- 学位论文（Thesis/Dissertation）
- 综述论文（Review Paper）
- 研究报告（Research Report）
- 开题报告（Proposal）

---

## 验证

运行验证脚本检查项目完整性：

```bash
npm run validate
```

---

## 贡献

欢迎贡献！请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

### 贡献方式

- 添加新的智能体定义
- 创建额外的 Prompt 模板
- 添加其他引用格式风格指南
- 改进现有文档
- 报告问题和建议功能

---

## 许可证

本项目基于 **MIT 许可证** -- 详见 [LICENSE](LICENSE)。

---

<div align="center">

**为更好的学术写作而生**

[回到顶部](#paper-writer)

</div>
