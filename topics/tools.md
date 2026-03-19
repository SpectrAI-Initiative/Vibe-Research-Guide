<h1 align="center">Vibe Research Guide<br>工具与平台 Tools & Platforms</h1>

> 从 Vibe Research 核心平台到辅助工具，帮你快速找到适合自己的工具组合。

---

## Vibe Research 核心平台

这些是专门为自动化科研设计的 Agent 系统和平台：

| 项目 | 功能定位 | 链接 | 特点 |
|---|---|---|---|
| **InnoClaw** | AI 科研创新 Agent | [GitHub](https://github.com/SpectrAI-Initiative/InnoClaw) | 开源，专注科学创新，支持文献分析到 idea 生成 |
| **ResearchClaw** | 个人科研助手 | [GitHub](https://github.com/ymx10086/ResearchClaw) | 开源，CLI/Web/Slack 多端，集成文献/数据/通用工具 |
| **FARS（日行迹）** | 全自动科研系统 | [GitHub](https://github.com/fars-analemma) · [官网](https://analemma.ai/) | 复旦 MOSS 团队，四模块端到端（Ideation→Planning→Experiment→Writing） |
| **AI-Scientist** | 端到端科研自动化 | [GitHub](https://github.com/SakanaAI/AI-Scientist) | Sakana AI，idea→实验→论文→审稿全流程 |
| **Orchestra** | AI-for-Science 平台 | [官网](https://www.orchestra-research.com/) | 云端 Vibe Research 平台，无需本地部署 |
| **Agent Laboratory** | 人机协作研究助手 | [GitHub](https://github.com/SamuelSchmidgall/AgentLaboratory) | Human-in-the-loop，支持研究者全程参与 |

### 核心平台对比

| 维度 | InnoClaw | ResearchClaw | FARS | AI-Scientist | Orchestra |
|---|---|---|---|---|---|
| 开源 | ✅ | ✅ | ✅ | ✅ | ❌（云服务） |
| 覆盖环节 | 文献→Idea | 文献→数据→实验 | Idea→论文（全流程） | Idea→论文（全流程） | 全流程 |
| 交互方式 | CLI | CLI/Web/Slack | Web | CLI | Web |
| 上手难度 | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| 适合谁 | 入门者/研究者 | 个人研究者 | 全自动化需求 | 全自动化需求 | 零代码用户 |

### OpenClaw 生态

[OpenClaw](https://docs.openclaw.ai/) 是一个开放的 AI Agent 技能生态系统，涵盖 28 个类别的技能（包括 AI & LLMs、搜索与研究、Agent 社交等），为上述核心平台提供可扩展的技能支持。

---

## 文献发现与检索

| 工具 | 链接 | 特点 | 费用 |
|---|---|---|---|
| Semantic Scholar | [website](https://www.semanticscholar.org/) | Allen AI，AI 驱动搜索，开放 API | 免费 |
| Connected Papers | [website](https://www.connectedpapers.com/) | 论文引用关系图谱可视化 | 免费 |
| Research Rabbit | [website](https://www.researchrabbit.ai/) | 基于收藏的持续论文推荐 | 免费 |
| Litmaps | [website](https://www.litmaps.com/) | 交互式文献图谱 | 免费/Pro |
| Google Scholar | [website](https://scholar.google.com/) | 覆盖面最广，支持 Alerts | 免费 |

## 文献阅读与综合

| 工具 | 链接 | 特点 | 费用 |
|---|---|---|---|
| Elicit | [website](https://elicit.com/) | 输入研究问题，自动检索并提取数据 | 免费 |
| Consensus | [website](https://consensus.app/) | 基于论文证据直接回答问题 | 免费 |
| NotebookLM | [website](https://notebooklm.google.com/) | Google 出品，上传论文对话式阅读 | 免费 |
| PaperQA2 | [GitHub](https://github.com/Future-House/paper-qa) | 开源 RAG 文献问答，精确引用 | 免费 |
| OpenScholar | [GitHub](https://github.com/allenai/OpenScholar) | Allen AI，大规模文献综合 | 免费 |
| Perplexity | [website](https://www.perplexity.ai/) | 带引用的 AI 搜索引擎 | 免费 |

## 写作与审稿辅助

| 工具 | 链接 | 特点 | 费用 |
|---|---|---|---|
| Writefull | [website](https://www.writefull.com/) | 专为学术写作设计的 AI 润色 | 免费/Pro |
| Paperpal | [website](https://paperpal.com/) | Springer Nature 支持 | 免费/Pro |
| Grammarly | [website](https://www.grammarly.com/) | 通用写作助手，支持学术模式 | 免费 |

## 实验与代码辅助

| 工具 | 链接 | 特点 | 费用 |
|---|---|---|---|
| Cursor | [website](https://cursor.sh/) | AI-native 代码编辑器 | 免费/Pro |
| GitHub Copilot | [website](https://github.com/features/copilot) | AI 编码助手 | $10/月 |
| OpenHands | [GitHub](https://github.com/All-Hands-AI/OpenHands) | 开源全栈 Agent | 免费 |
| SWE-agent | [GitHub](https://github.com/princeton-nlp/SWE-agent) | 代码修复 Agent | 免费 |
| Weights & Biases | [website](https://wandb.ai/) | ML 实验跟踪 | 免费（个人） |

## 文献管理

| 工具 | 链接 | 特点 | 费用 |
|---|---|---|---|
| Zotero | [website](https://www.zotero.org/) | 开源，生态丰富（支持 AI 插件） | 免费 |
| Zotero + ZoteroGPT | [GitHub](https://github.com/MuiseDestiny/zotero-gpt) | Zotero 的 GPT 插件 | 免费 |
| Paperpile | [website](https://paperpile.com/) | 与 Google Docs 深度集成 | $3/月 |

---

## 工具选型指南

| 你想做什么 | 推荐方案 |
|---|---|
| **快速体验 Vibe Research** | Elicit + NotebookLM（零代码） |
| **部署个人 Research Agent** | InnoClaw 或 ResearchClaw |
| **文献 RAG 问答** | PaperQA2 |
| **全流程自动化科研** | FARS 或 AI-Scientist |
| **云端无部署** | Orchestra |
| **完整研究工作流** | ResearchClaw + Zotero + Cursor + W&B |

---

> **返回主页**：[README](../README.md) · **上一篇**：[上手指南](./getting-started.md) · **下一篇**：[综述篇](./surveys.md)
