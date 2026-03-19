<h1 align="center">Vibe Research Guide<br>快速上手 Getting Started</h1>

> 本篇帮你用最短时间**上手 Vibe Research**——不是读论文，而是直接用工具做研究。

## 什么是 Vibe Research

用 LLM Agent 自动化科研流程：文献调研 → 提出 idea → 设计实验 → 写代码跑实验 → 撰写论文。

你不需要是 AI 专家，只需要会用工具。

---

## 快速上手路线

| 路线 | 时间 | 工具 | 你能做到 |
|---|---|---|---|
| **零代码体验** | 5 分钟 | Elicit / Consensus / NotebookLM | 用 AI 搜论文、读论文、提问 |
| **一键部署** | 30 分钟 | InnoClaw / ResearchClaw | 运行完整的 Research Agent |
| **全流程自动化** | 1-2 小时 | FARS（日行迹） | 从 idea 到论文的端到端自动化 |

---

## 路线一：5 分钟零代码体验

不写代码，用现成 AI 工具体验 Vibe Research：

1. **文献搜索**：打开 [Elicit](https://elicit.com/)，输入研究问题（如 *"What are the main approaches for using LLMs in scientific discovery?"*），看 AI 如何自动检索论文并提取关键信息
2. **论文阅读**：上传一篇 PDF 到 [NotebookLM](https://notebooklm.google.com/)，提问 *"Summarize the key contributions and limitations"*
3. **Idea 头脑风暴**：在 ChatGPT / Claude 中输入你的研究方向，让 AI 帮你梳理挑战和 idea

这就是 Vibe Research 的基本形态——AI 辅助每个研究环节。

---

## 路线二：30 分钟部署 Research Agent

### 选项 A：InnoClaw（推荐）

[InnoClaw](https://github.com/SpectrAI-Initiative/InnoClaw) 是开源 AI 科研 Agent，专注科学创新，支持从文献调研到 idea 生成的完整流程。

```bash
# 克隆仓库
git clone https://github.com/SpectrAI-Initiative/InnoClaw.git
cd InnoClaw

# 安装依赖
pip install -r requirements.txt

# 配置 API Key
cp .env.example .env
# 编辑 .env，填入你的 API Key

# 运行
python main.py
```

InnoClaw 能做什么：
- 自动文献检索与分析
- 基于文献的 idea 生成
- 研究方案设计辅助

### 选项 B：ResearchClaw

[ResearchClaw](https://github.com/ymx10086/ResearchClaw) 是个人 AI 科研助手，提供 CLI / Web / Slack 多种交互方式。

```bash
git clone https://github.com/ymx10086/ResearchClaw.git
cd ResearchClaw

pip install -r requirements.txt

# 配置后运行
python app.py
```

ResearchClaw 的核心能力：
- **文献工具**：ArXiv 搜索、Semantic Scholar 检索、PDF 解析、BibTeX 生成
- **数据工具**：数据分析（pandas）、可视化（matplotlib）、统计分析
- **通用工具**：Shell 执行、文件 I/O、浏览器、记忆管理

架构：`用户 → Console/CLI/Slack → FastAPI → ScholarAgent（ReAct） → 工具集`

### 选项 C：PaperQA2（文献问答）

[PaperQA2](https://github.com/Future-House/paper-qa) 适合只需要文献问答 RAG 能力的场景：

```bash
pip install paper-qa
export OPENAI_API_KEY="your-key"

python -c "
from paperqa import Docs
docs = Docs()
docs.add('your-paper.pdf')
answer = docs.query('What is the main contribution?')
print(answer.formatted_answer)
"
```

---

## 路线三：全流程自动化

### FARS（日行迹）— 全自动科研系统

[FARS](https://github.com/fars-analemma)（Fully Automated Research System）由复旦 MOSS 团队打造的日行迹（Analemma）公司开发，是目前最完整的端到端自动科研系统。

**四大模块**：

| 模块 | 功能 | 说明 |
|---|---|---|
| Ideation | 研究构思 | 自动发现研究问题和创新点 |
| Planning | 实验规划 | 设计实验方案和技术路线 |
| Experiment | 实验执行 | 自动编写代码、运行实验、分析结果 |
| Writing | 论文撰写 | 生成完整的学术论文 |

FARS 曾进行 228 小时直播，自动产出 100 篇论文，展示了全流程自动化的可行性。

官网：[analemma.ai](https://analemma.ai/) · GitHub：[fars-analemma](https://github.com/fars-analemma)

### AI-Scientist — 端到端科研

[AI-Scientist](https://github.com/SakanaAI/AI-Scientist) 是 Sakana AI 的端到端系统，覆盖 idea 生成 → 实验 → 论文撰写 → 自动审稿。

```bash
git clone https://github.com/SakanaAI/AI-Scientist.git
cd AI-Scientist
pip install -r requirements.txt
export OPENAI_API_KEY="your-key"
```

### Orchestra — AI-for-Science 平台

[Orchestra](https://www.orchestra-research.com/) 是专为 Vibe Research 设计的 AI-for-Science 平台，提供云端科研自动化服务，无需本地部署。

---

## 工具选择指南

| 你想做什么 | 推荐工具 | 难度 |
|---|---|---|
| 快速搜论文、读论文 | Elicit / Consensus / NotebookLM | ⭐ |
| 跑一个 Research Agent | InnoClaw / ResearchClaw | ⭐⭐ |
| 文献问答 RAG | PaperQA2 | ⭐⭐ |
| 全流程自动化（idea→论文） | FARS / AI-Scientist | ⭐⭐⭐ |
| 云端科研平台 | Orchestra | ⭐ |

---

## 常见问题

**Q: 需要会编程吗？**
A: 不一定。零代码工具（Elicit、NotebookLM、Orchestra）已覆盖基本场景。部署 Agent 需要基础的 Python 和命令行。

**Q: 需要 GPU 吗？**
A: 大多数工具使用 API 调用，普通笔记本即可。本地部署大模型才需要 GPU。

**Q: API 费用大概多少？**
A: 小规模实验约 $1-5。建议先设置 token 上限，用小数据测试。

**Q: 用 AI 做的研究能发论文吗？**
A: 可以，但需注意各会议/期刊对 AI 辅助的政策。核心原则：研究者对内容负责。

---

> **返回主页**：[README](../README.md) · **下一步**：[工具与平台](./tools.md)
