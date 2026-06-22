# IEEE Style Guide

## 论文结构

```
I. INTRODUCTION
II. RELATED WORK
III. METHODOLOGY
IV. RESULTS AND DISCUSSION
V. CONCLUSION
REFERENCES
```

**IEEE Transactions 风格结构**（较长论文）：
```
I. INTRODUCTION
II. RELATED WORK
III. SYSTEM DESIGN / PROPOSED METHOD
IV. EXPERIMENTAL SETUP
V. RESULTS
VI. DISCUSSION
VII. CONCLUSION
REFERENCES
APPENDIX
```

## 格式要求

### 页面设置
- 页边距：0.75英寸（1.9cm）各边
- 字体：10pt Times New Roman（双栏）
- 行距：单倍行距
- 栏间距：0.25英寸（0.6cm）

### 标题
- 所有标题居中、大写、粗体
- 编号用罗马数字：I, II, III, IV, V
- 子标题：A, B, C, D
- 子子标题：1), 2), 3)

### 首段脚注
```
Manuscript received Month Day, Year; revised Month Day, Year.
This work was supported by Grant Name. (Corresponding author: Name.)
```

## 文内引用格式

IEEE 使用编号引用，按首次出现顺序编号：

```
如文献 [1] 所述...
Wang 在文献 [1] 中指出...
文献 [1]-[3] 表明...
如 [1, Table I] 所示...
正如 [1] 和 [2] 所证实的...
```

### 多篇文献同时引用
```
[1]-[3]（连续编号）
[1], [3], [5]（不连续编号）
[1], [2], [5]-[7]（混合）
```

## 参考文献格式

### 期刊
```
[1] A. A. Author and B. B. Author, "Title of article in title case," Title of Periodical, vol. X, no. X, pp. XXX-XXX, Month Year, doi: 10.xxxx/xxxxx.
```

**示例**：
```
[1] A. Vaswani et al., "Attention is all you need," in Proc. NeurIPS, Long Beach, CA, USA, 2017, pp. 5998-6008.
[2] J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova, "BERT: Pre-training of deep bidirectional transformers for language understanding," in Proc. NAACL-HLT, Minneapolis, MN, USA, 2019, pp. 4171-4186.
```

### 会议
```
[2] A. A. Author, "Title of paper in title case," in Proc. Conference Name, Location, Year, pp. XXX-XXX.
```

**示例**：
```
[3] K. He, X. Zhang, S. Ren, and J. Sun, "Deep residual learning for image recognition," in Proc. IEEE CVPR, Las Vegas, NV, USA, 2016, pp. 770-778.
```

### 书籍
```
[3] A. A. Author, Title of Book in Title Case. City, State/Country: Publisher, Year.
```

**示例**：
```
[4] I. Goodfellow, Y. Bengio, and A. Courville, Deep Learning. Cambridge, MA, USA: MIT Press, 2016.
```

### 网页
```
[4] Author or Organization, "Title of page." Site Name. (Year, Month Day). [Online]. Available: URL
```

**示例**：
```
[5] OpenAI, "GPT-4 technical report." OpenAI. (2023, Mar. 14). [Online]. Available: https://openai.com/research/gpt-4
```

### 专利
```
[5] A. A. Author, "Title of patent," U.S. Patent X XXX XXX, Month Day, Year.
```

### 技术报告
```
[6] A. A. Author, "Title of report," Dept./Company, City, State, Tech. Rep. XXX, Year.
```

### 学位论文
```
[7] A. A. Author, "Title of thesis," Ph.D. dissertation/M.S. thesis, Dept., Univ., City, State, Year.
```

### 标准
```
[8] Title of Standard, Standard Number, Year.
```

**示例**：
```
[8] IEEE Standard for Floating-Point Arithmetic, IEEE Std 754-2019, 2019.
```

## 数学公式

### 行内公式
使用 $ 符号包围：$E = mc^2$

### 独立公式
```
$$
y = f(x) = \sum_{i=1}^{n} w_i x_i + b
\tag{1}
$$
```

- 公式编号右对齐，用圆括号
- 在正文中引用时写作：Eq. (1) 或 equation (1)

## 表格与图片

### 表格
- 表号和表题在表格上方，居中
- 表号用大写罗马数字（TABLE I, TABLE II）
- 使用三线表格式
- 列标题居中

**示例**：
```
TABLE I
COMPARISON OF DIFFERENT METHODS

| Method | Accuracy (%) | F1 Score | Time (s) |
|--------|:-----------:|:--------:|:--------:|
| CNN    |    92.3     |   0.91   |   2.5    |
| RNN    |    89.7     |   0.88   |   3.8    |
| Ours   |    96.1     |   0.95   |   1.9    |
```

### 图片
- 图号和图题在图片下方，居中
- 图号用阿拉伯数字（Fig. 1, Fig. 2）
- 黑白可区分

**示例**：
```
Fig. 1. Architecture of the proposed model. The encoder processes input
tokens through N transformer layers, and the decoder generates output
sequences autoregressively.
```

## 缩写与首字母缩略词

- 首次出现时给出全称和缩写：Convolutional Neural Network (CNN)
- 后续只使用缩写：CNN
- 摘要中定义的缩写需要在正文中重新定义
- 标题中避免使用缩写
