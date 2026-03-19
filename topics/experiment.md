<h1 align="center">Vibe Research Guide<br>实验设计与执行篇 Experiment Execution</h1>

> Experiment Execution 关注 LLM Agent 如何**自动化科学实验的设计与执行**：从实验方案生成、代码编写、数据分析到结果解读。这个方向直接决定了 Vibe Research 系统能否真正"做实验"而非仅仅"讨论实验"。

<section id="experiment-papers"></section>

## 论文列表

| # | Paper | URL | Type | Why read / 为什么读 | Stage | Keywords |
|---|---|---|---|---|---|---|
| 1 | MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation | [arXiv](https://arxiv.org/abs/2310.03302) | Benchmark + Agent | 首个系统评估 LLM Agent 做 ML 实验能力的 benchmark。定义了 13 个 ML 任务，测试 Agent 能否完成数据处理、模型训练、性能优化等环节。 | Intermediate | ML experimentation, agent evaluation |
| 2 | Data Interpreter: An LLM Agent for Data Science | [arXiv](https://arxiv.org/abs/2402.18679) | System | MSRA 出品的数据科学 Agent，采用动态规划与工具集成设计，能自动完成数据清洗、可视化、建模等任务。展示了 Agent 在数据密集型研究中的应用潜力。 | Intermediate | data science, dynamic planning, tool use |
| 3 | OpenHands: An Open Platform for AI Software Engineers | [arXiv](https://arxiv.org/abs/2407.16741) | Platform | 开源全栈 Agent 平台，支持代码生成、执行、调试的完整循环。虽然定位是软件工程，但其架构对构建研究实验 Agent 有直接参考价值。 | Intermediate | code agent, software engineering, open-source |
| 4 | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering | [arXiv](https://arxiv.org/abs/2405.15793) | System | Princeton 出品，通过设计 Agent-Computer Interface（ACI）让 Agent 高效与代码仓库交互。展示了如何让 Agent 在真实代码环境中完成复杂任务。 | Intermediate | ACI, repository interaction, code repair |

<section id="experiment-recommendations"></section>

## 推荐度

| # | 推荐度 | 说明 |
|---|---|---|
| 1 | ★★★★★ | Must-read，实验自动化评测的标杆 |
| 2 | ★★★★☆ | 强烈推荐，数据科学自动化的代表 |
| 3 | ★★★★★ | Must-read，开源 Agent 平台的标杆 |
| 4 | ★★★★☆ | 强烈推荐，ACI 设计的开创性工作 |

<section id="experiment-comparison"></section>

## 实验自动化方法对比

| 维度 | MLAgentBench | Data Interpreter | OpenHands | SWE-agent |
|---|---|---|---|---|
| 核心定位 | ML 实验评测 | 数据科学自动化 | 通用代码 Agent | 代码修复 Agent |
| 自动化程度 | 全自动 | 全自动 | 全自动 / 交互式 | 全自动 |
| 代码执行 | ✓ sandbox | ✓ Jupyter | ✓ Docker sandbox | ✓ sandbox |
| 领域适用性 | ML 实验 | 数据分析、可视化 | 通用软件任务 | GitHub Issue 修复 |
| 人类参与 | 评测阶段 | 可选 | 可选 | 评测阶段 |
| 工具集成 | Python/ML libraries | 动态工具注册 | 多语言多工具 | 命令行 + 编辑器 |
| 输出形式 | 实验结果 + 性能指标 | 分析报告 + 可视化 | 代码 + PR | 代码补丁 |

<section id="experiment-repos"></section>

## 相关代码仓库

| 项目 | 链接 | 说明 |
|---|---|---|
| MLAgentBench | [GitHub](https://github.com/snap-stanford/MLAgentBench) | Stanford 官方实现，含 13 个 ML 任务 |
| MetaGPT / Data Interpreter | [GitHub](https://github.com/geekan/MetaGPT) | MSRA 多 Agent 框架，含 Data Interpreter 模块 |
| OpenHands | [GitHub](https://github.com/All-Hands-AI/OpenHands) | 开源全栈 Agent 平台 |
| SWE-agent | [GitHub](https://github.com/princeton-nlp/SWE-agent) | Princeton Agent-Computer Interface 实现 |

<section id="experiment-reading-tips"></section>

## 阅读建议

1. **论文 #1（MLAgentBench）** 是理解"Agent 做实验能力"的最佳入口——它定义了什么叫做"成功完成一个 ML 实验"。
2. **论文 #2（Data Interpreter）** 展示了 Agent 在数据密集型任务中的设计模式，适合关注数据分析场景的读者。
3. **论文 #3 + #4** 适合想构建实验 Agent 的 Builder——它们的开源实现可以直接作为你系统的基础组件。
4. 建议结合 [系统篇](./systems.md) 一起阅读，理解"实验执行"如何嵌入"端到端科研系统"中。

<section id="experiment-extended"></section>

## 延伸阅读

| 资源 | 链接 | 说明 |
|---|---|---|
| MLE-bench | [arXiv](https://arxiv.org/abs/2410.07095) | Kaggle 竞赛为基础的 ML 工程 benchmark |
| TaskBench | [arXiv](https://arxiv.org/abs/2311.18760) | 评测 Agent 工具使用与任务分解能力 |
| Jupyter AI | [GitHub](https://github.com/jupyterlab/jupyter-ai) | JupyterLab 的 AI 扩展，支持代码生成 |
| AutoML | [PapersWithCode](https://paperswithcode.com/task/automl) | 自动化机器学习方向论文索引 |
| Awesome Code LLM | [repo](https://github.com/huybery/Awesome-Code-LLM) | 代码 LLM 方向论文与工具集合 |

---

> **返回主页**：[README](../README.md) · **上一篇**：[文献综合篇](./synthesis.md) · **下一篇**：[撰写与审稿篇](./writing-review.md)
