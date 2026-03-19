<h1 align="center">Vibe Research Guide<br>代表系统篇 Representative Systems</h1>

> 代表性系统展示了 LLM Agent 如何**端到端**地参与科学研究：从 idea 生成、实验实现到论文撰写。这些系统是 Vibe Research 从概念走向落地的标志性工作，理解它们的架构设计与工作流程，能帮助你快速判断"能做什么"和"怎么做"。

<section id="system-papers"></section>

## 论文列表

| # | Paper | URL | Type | Why read / 为什么读 | Stage | Keywords |
|---|---|---|---|---|---|---|
| 4 | The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery | [arXiv](https://arxiv.org/abs/2408.06292) | System | 标志性工作，展示端到端科研自动化流程：idea generation → experiment → paper writing → review。理解此系统是理解整个领域的基础。 | Intermediate | AI Scientist, end-to-end workflow |
| 5 | The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search | [arXiv](https://arxiv.org/abs/2504.08066) | System | AI Scientist 的升级版，引入 agentic tree search，更高自主性与搜索能力，产出达到 workshop 级别。 | Intermediate | agentic tree search, autonomy |
| 6 | Agent Laboratory: Using LLM Agents as Research Assistants | [arXiv](https://arxiv.org/abs/2501.04227) | System | 更贴近真实科研场景的 human-in-the-loop 设计，强调人类反馈与协作，实用性更强。 | Intermediate | copilot, human feedback |
| 7 | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering | [arXiv](https://arxiv.org/abs/2405.15793) | System | Princeton 出品，通过设计 Agent-Computer Interface（ACI）让 Agent 高效与代码仓库交互。虽定位软件工程，但其 ACI 架构对研究实验 Agent 的代码执行环节有直接参考价值。 | Intermediate | ACI, code interaction, software engineering |
| 8 | OpenHands: An Open Platform for AI Software Engineers | [arXiv](https://arxiv.org/abs/2407.16741) | Platform | 开源全栈 Agent 平台（原名 OpenDevin），支持代码生成、执行、调试的完整循环。提供 Docker sandbox 隔离执行环境，是构建研究实验系统的理想基础设施。 | Intermediate | open-source, full-stack agent, sandbox |

<section id="system-recommendations"></section>

## 推荐度

| # | 推荐度 | 说明 |
|---|---|---|
| 4 | ★★★★★ | Must-read，里程碑工作 |
| 5 | ★★★★★ | Must-read，自主性提升 |
| 6 | ★★★★★ | Must-read，落地友好 |
| 7 | ★★★★☆ | 强烈推荐，ACI 设计的开创性工作 |
| 8 | ★★★★☆ | 强烈推荐，开源 Agent 平台标杆 |

<section id="system-architecture"></section>

## 系统架构对比

| 维度 | AI Scientist | AI Scientist-v2 | Agent Laboratory | SWE-agent | OpenHands |
|---|---|---|---|---|---|
| 自主性 | 全自动 | 全自动（更强搜索） | Human-in-the-loop | 全自动 | 全自动 / 交互式 |
| 搜索策略 | 线性流程 | Agentic tree search | 人类引导 | ACI 驱动 | 多策略 |
| 产出级别 | 论文级（初步） | Workshop 级 | 研究助手级 | 代码补丁级 | 代码 + PR 级 |
| 适合场景 | 概念验证 | 自主探索 | 真实科研协作 | 代码密集型研究 | 通用研究工程 |
| 代码执行 | 内置 | 内置 | 内置 | Sandbox | Docker Sandbox |
| 开源 | ✓ | ✓ | ✓ | ✓ | ✓ |

<section id="system-repos"></section>

## 相关代码仓库

| 项目 | 链接 | 说明 |
|---|---|---|
| The AI Scientist (Sakana AI) | [GitHub](https://github.com/SakanaAI/AI-Scientist) | 官方开源实现，可直接复现 |
| Agent Laboratory | [GitHub](https://github.com/SamuelSchmidgall/AgentLaboratory) | 官方代码仓库 |
| SWE-agent | [GitHub](https://github.com/princeton-nlp/SWE-agent) | Princeton 官方实现 |
| OpenHands | [GitHub](https://github.com/All-Hands-AI/OpenHands) | 开源全栈 Agent 平台 |

<section id="system-reading-tips"></section>

## 阅读建议

1. **论文 #4（AI Scientist）** 是入门系统篇的首选——先理解"端到端"意味着什么，再看后续工作如何改进。
2. **论文 #5** 和 **#4** 对比阅读，重点关注 tree search 带来了哪些新能力。
3. **论文 #6** 适合"想动手做"的读者——它的 human-in-the-loop 设计更接近你实际科研中的使用方式。
4. **论文 #7（SWE-agent）** 和 **#8（OpenHands）** 侧重代码执行能力，适合 Builder 路线的读者。它们的开源实现可以直接作为你构建研究实验系统的基础组件。

<section id="system-extended"></section>

## 延伸阅读

| 资源 | 链接 | 说明 |
|---|---|---|
| MLAgentBench | [arXiv](https://arxiv.org/abs/2310.03302) | 评测 LLM Agent 做 ML 实验的能力 |
| MetaGPT | [GitHub](https://github.com/geekan/MetaGPT) | 多 Agent 软件开发框架，含 Data Interpreter |
| Aider | [GitHub](https://github.com/paul-gauthier/aider) | 命令行 AI 编程助手，支持多文件编辑 |
