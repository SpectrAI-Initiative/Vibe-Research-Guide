<h1 align="center">Vibe Research Guide<br>上手实践指南 Getting Started</h1>

> 本篇面向**零基础或传统研究背景**的读者，帮助你在最短时间内理解并上手 Vibe Research。无论你是想用 AI 辅助文献调研，还是想搭建自己的 Research Agent，这里都提供清晰的路径。

<section id="what-is-vibe-research"></section>

## 什么是 Vibe Research（1 分钟版本）

**传统科研流程**：找文献 → 读论文 → 提出 idea → 设计实验 → 写代码跑实验 → 分析结果 → 撰写论文

**Vibe Research**：让 LLM Agent 参与上述流程中的一个或多个环节，从"人工驱动"逐步走向"Agent 辅助"甚至"Agent 自主"。

```
传统方式：  研究者 ──────────────────────────────────────→ 成果
Vibe Research：研究者 ←→ LLM Agent（协作/自动化）──→ 成果
```

**核心区别**：不是让 AI 替代研究者，而是让 AI 加速研究中的高重复性环节（文献检索、代码实现、初稿撰写），让研究者聚焦于创造性判断。

<section id="prerequisites"></section>

## 你需要什么

### 零代码路线（5 分钟体验）

| 需求 | 说明 |
|---|---|
| 浏览器 | 任何现代浏览器 |
| 账号 | Elicit / Consensus / ChatGPT / Claude 任一 |
| 费用 | 免费（基础功能） |

### 轻代码路线（30 分钟动手）

| 需求 | 说明 |
|---|---|
| Python | 3.10+ |
| API Key | OpenAI / Anthropic / 其他 LLM 提供商 |
| 硬件 | 普通笔记本即可（使用 API 调用） |
| 费用 | API 费用约 $1-5 / 次小实验 |

### 本地部署路线（高级）

| 需求 | 说明 |
|---|---|
| GPU | 16GB+ 显存（如 RTX 4090）用于本地模型 |
| 存储 | 50GB+ 用于模型权重和文献库 |
| Python | 3.10+, PyTorch, Transformers |

<section id="zero-code"></section>

## 5 分钟体验 Vibe Research（零代码）

不需要写任何代码，用现成的 AI 工具体验 Vibe Research 的核心能力。

### 体验 1：AI 辅助文献调研

1. 打开 [Elicit](https://elicit.com/) 或 [Consensus](https://consensus.app/)
2. 输入一个研究问题，例如：*"What are the main approaches for using LLMs in scientific discovery?"*
3. 观察 AI 如何：
   - 检索相关论文
   - 提取关键信息
   - 生成结构化摘要
4. 对比传统方式：你手动在 Google Scholar 搜索同样的问题需要多久？

### 体验 2：AI 辅助 Idea Brainstorm

1. 打开 [ChatGPT](https://chat.openai.com/) 或 [Claude](https://claude.ai/)
2. 使用如下 prompt：

```
你是一位 AI for Science 领域的研究者。我对"用 LLM Agent 自动化科学实验"
这个方向感兴趣。请帮我：
1. 梳理这个方向的 3 个核心挑战
2. 对每个挑战，提出 1 个可能的研究 idea
3. 评估每个 idea 的 novelty 和 feasibility（1-5 分）
```

3. 观察 AI 生成的 idea 质量——这就是 Research Ideation 的雏形

### 体验 3：AI 辅助论文阅读

1. 选择一篇论文 PDF（如 [The AI Scientist](https://arxiv.org/abs/2408.06292)）
2. 上传到 [ChatGPT](https://chat.openai.com/) 或 [NotebookLM](https://notebooklm.google.com/)
3. 提问：*"Summarize the key contributions and limitations of this paper"*
4. 这就是 Literature Synthesis 的日常应用

<section id="hands-on"></section>

## 30 分钟动手项目：运行你的第一个 Research Agent

### 选项 A：PaperQA2（文献问答）

PaperQA2 是一个基于 RAG 的科学文献问答系统，适合入门体验。

```bash
# 1. 安装
pip install paper-qa

# 2. 设置 API Key
export OPENAI_API_KEY="your-key-here"

# 3. 准备论文（将 PDF 放入 papers/ 目录）
mkdir papers
# 下载几篇论文 PDF 到 papers/ 目录

# 4. 运行问答
python -c "
from paperqa import Docs
docs = Docs()
# 添加论文
for pdf in ['papers/paper1.pdf', 'papers/paper2.pdf']:
    docs.add(pdf)
# 提问
answer = docs.query('What are the main approaches for automated scientific discovery?')
print(answer.formatted_answer)
"
```

### 选项 B：AI-Scientist（端到端科研自动化）

AI-Scientist 是更完整的系统，但设置也更复杂。

```bash
# 1. 克隆仓库
git clone https://github.com/SakanaAI/AI-Scientist.git
cd AI-Scientist

# 2. 安装依赖
pip install -r requirements.txt

# 3. 设置 API Key
export OPENAI_API_KEY="your-key-here"

# 4. 运行 demo（参考仓库 README 中的详细步骤）
```

### 理解输出

运行后，观察 Agent 的输出：
- **检索了哪些文献？** → 体会 Retrieval 的作用
- **生成了什么回答/idea？** → 体会 Generation 的能力与局限
- **引用是否准确？** → 这是当前系统最大的挑战之一

<section id="demo-to-real"></section>

## 从 Demo 到真实项目

### 定义你的研究问题

| 步骤 | 说明 | 示例 |
|---|---|---|
| 1. 选定领域 | 你熟悉或感兴趣的方向 | NLP、CV、生物信息学… |
| 2. 明确问题 | 将模糊兴趣转化为具体问题 | "如何用 LLM 自动生成实验假设？" |
| 3. 文献调研 | 用 AI 工具快速扫描已有工作 | Elicit / Semantic Scholar |
| 4. 找到 Gap | 已有工作没覆盖的角度 | "现有方法缺少对 feasibility 的自动评估" |
| 5. 设计方案 | 结合现有系统提出改进 | "在 ResearchAgent 基础上加入 feasibility scorer" |

### 常见踩坑与解决方案

| 问题 | 原因 | 解决方案 |
|---|---|---|
| API 费用超预期 | 长文本 / 多轮调用 | 设置 token 上限，先用小规模测试 |
| 引用幻觉 | LLM 编造不存在的论文 | 使用 RAG 系统（如 PaperQA2）而非纯生成 |
| 输出质量不稳定 | Prompt 设计不当 | 参考已有系统的 prompt 模板 |
| 实验不可复现 | 随机种子 / API 版本变化 | 固定 seed，记录 model version |
| 本地模型跑不动 | 显存不足 | 使用 API 调用或量化模型 |

<section id="learning-path"></section>

## 推荐学习路径

### 7 天入门计划

| 天数 | 目标 | 行动 |
|---|---|---|
| Day 1 | 建立概念 | 读综述 [#1 From Automation to Autonomy](https://arxiv.org/abs/2505.13259) + 体验 Elicit/Consensus |
| Day 2 | 理解系统 | 读 [#4 The AI Scientist](https://arxiv.org/abs/2408.06292)，理解端到端流程 |
| Day 3 | 动手体验 | 跑 PaperQA2 demo，用自己的论文测试 |
| Day 4 | 深入方向 | 根据兴趣选读：Ideation / Synthesis / Experiment |
| Day 5 | 工具探索 | 试用 3+ 工具（见 [工具篇](./tools.md)），找到适合自己工作流的组合 |
| Day 6 | 定义项目 | 选定研究问题，完成文献调研 |
| Day 7 | 启动实践 | 搭建最小原型或完成一份 AI-assisted 文献综述 |

### 进阶路线

完成 7 天入门后，根据目标选择进阶方向：

- **想做研究** → 阅读 [构思篇](./ideation.md) + [评测篇](./benchmarks.md)，设计你的研究问题
- **想搭系统** → 阅读 [系统篇](./systems.md) + [实验篇](./experiment.md)，复现并改进已有系统
- **想写论文** → 阅读 [撰写与审稿篇](./writing-review.md)，了解 AI 辅助学术写作

<section id="faq"></section>

## 常见问题

**Q: Vibe Research 和 AI for Science 有什么区别？**
A: AI for Science 是更广泛的领域（包括用 AI 做蛋白质预测、药物发现等）。Vibe Research 更聚焦于用 LLM Agent 自动化**科研流程本身**（idea → experiment → paper）。

**Q: 我需要会编程吗？**
A: 不一定。零代码工具（Elicit、Consensus、NotebookLM）已经能覆盖文献调研和论文阅读场景。如果想搭建自己的 Agent 系统，则需要 Python 基础。

**Q: 用 AI 做的研究能发论文吗？**
A: 可以，但需要注意各会议/期刊对 AI 辅助写作的政策。核心原则：AI 是工具，研究者对内容负责。

**Q: 从哪里获取论文 PDF 用于 RAG 系统？**
A: arXiv（免费获取大部分 CS/AI 论文）、Semantic Scholar API（结构化元数据）、Unpaywall（合法获取 OA 论文）。

---

> **返回主页**：[README](../README.md) · **下一步**：[实用工具篇](./tools.md)
