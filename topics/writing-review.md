<h1 align="center">Vibe Research Guide<br>论文撰写与审稿篇 Writing & Review</h1>

> Writing & Review 关注 LLM 如何辅助科学论文**撰写、结构组织与自动化审稿**。这是 Vibe Research 流程的最后一环——将研究成果转化为可发表的学术论文，以及用 AI 提供审稿反馈来提升论文质量。

<section id="writing-papers"></section>

## 论文列表

| # | Paper | URL | Type | Why read / 为什么读 | Stage | Keywords |
|---|---|---|---|---|---|---|
| 1 | Can Large Language Models Provide Useful Feedback on Research Papers? A Large-Scale Empirical Analysis | [arXiv](https://arxiv.org/abs/2310.01783) | Evaluation | 大规模实证研究，分析 LLM（GPT-4）对研究论文的审稿反馈质量。发现 LLM 反馈与人类审稿者有显著重叠，但在深层洞察上仍有差距。为理解 AI 审稿的能力边界提供了数据支撑。 | Intermediate | LLM review, peer review, empirical study |
| 2 | MARG: Multi-Agent Review Generation for Scientific Papers | [arXiv](https://arxiv.org/abs/2401.04259) | System | 多 Agent 审稿系统，模拟不同角色（主审、副审、meta-reviewer）协作生成审稿意见。展示了多 Agent 在学术审稿场景中的协调模式。 | Intermediate | multi-agent, review generation, role-playing |
| 3 | SciMON: Scientific Inspiration Machines Optimized for Novelty | [arXiv](https://arxiv.org/abs/2305.14259) | System | 用 LLM 辅助论文的"novelty positioning"——帮助研究者在写作阶段更好地定位论文创新点，基于对已有文献的自动分析。 | Intermediate | novelty, writing assistance, positioning |
| 4 | Automated Peer Reviewing in Paper SEA: Standardization, Evaluation, and Analysis | [arXiv](https://arxiv.org/abs/2407.12857) | Benchmark | 系统性评估自动化审稿方法的框架，提出标准化评测流程，分析不同 LLM 在审稿任务上的表现。为自动审稿提供了规范化的评测视角。 | Intermediate | automated review, standardization, evaluation |

<section id="writing-recommendations"></section>

## 推荐度

| # | 推荐度 | 说明 |
|---|---|---|
| 1 | ★★★★★ | Must-read，LLM 审稿能力的权威评估 |
| 2 | ★★★★☆ | 强烈推荐，多 Agent 审稿的创新设计 |
| 3 | ★★★★☆ | 强烈推荐，写作辅助的独特视角 |
| 4 | ★★★★☆ | 强烈推荐，审稿评测的标准化框架 |

<section id="writing-comparison"></section>

## 写作辅助 vs 审稿自动化对比

| 维度 | 写作辅助 | 审稿自动化 |
|---|---|---|
| 代表工作 | SciMON | LLM Review Feedback, MARG, Paper SEA |
| 目标用户 | 论文作者 | 审稿者 / 会议组织者 |
| 核心任务 | 结构优化、创新定位、语言润色 | 生成审稿意见、评估论文质量 |
| 输入 | 论文草稿 + 相关文献 | 完整论文 |
| 输出 | 改进建议、结构重组、novelty 定位 | 审稿报告（strengths/weaknesses/questions） |
| 挑战 | 保持作者意图、避免 hallucination | 深层洞察、公平性、一致性 |
| 成熟度 | 较新，偏实验性 | 较活跃，有多个系统 |

<section id="writing-landscape"></section>

## 方法分类

```
LLM in Academic Writing & Review
├── 写作辅助 Writing Assistance
│   ├── 结构组织 (SciMON)
│   ├── 语言润色 (Writefull, Paperpal)
│   └── 创新定位 (novelty positioning)
├── 审稿自动化 Automated Review
│   ├── 单 Agent 审稿 (GPT-4 as Reviewer)
│   ├── 多 Agent 审稿 (MARG)
│   └── 审稿评测 (Paper SEA)
└── 审稿辅助 Review Assistance
    ├── 审稿意见生成
    ├── Meta-review 聚合
    └── 审稿质量评估
```

<section id="writing-repos"></section>

## 相关代码仓库

| 项目 | 链接 | 说明 |
|---|---|---|
| MARG | [GitHub](https://github.com/allenai/marg-reviewer) | Allen AI 多 Agent 审稿系统 |
| Automated Reviewer | [GitHub](https://github.com/liang-peng-jd/ReviewerGPT) | 基于 GPT 的自动审稿工具 |
| SciMON | [GitHub](https://github.com/allenai/SciMON) | Allen AI novelty 定位系统 |

<section id="writing-reading-tips"></section>

## 阅读建议

1. **论文 #1** 是理解"LLM 能否当审稿者"的最佳入口——数据量大、分析扎实，帮你建立对 AI 审稿能力的合理预期。
2. **论文 #2（MARG）** 展示了多 Agent 协作的一种有趣应用——如果你对多 Agent 系统感兴趣，这是个很好的案例。
3. **论文 #3（SciMON）** 换了一个视角：不是"AI 审你的论文"，而是"AI 帮你写得更好"。适合正在写论文的读者。
4. **论文 #4（Paper SEA）** 适合想设计审稿评测系统的研究者——它提供了标准化的评测框架。

<section id="writing-extended"></section>

## 延伸阅读

| 资源 | 链接 | 说明 |
|---|---|---|
| ReviewAdvisor | [arXiv](https://arxiv.org/abs/2303.14857) | 自动生成审稿建议的早期工作 |
| GPT-4 as Reviewer (NeurIPS 2023 Study) | [blog](https://blog.neurips.cc/) | NeurIPS 2023 对 LLM 审稿的实验报告 |
| Writefull | [website](https://www.writefull.com/) | 学术写作 AI 润色工具 |
| Paperpal | [website](https://paperpal.com/) | Springer Nature 支持的 AI 写作助手 |
| Grammarly Academic | [website](https://www.grammarly.com/) | 通用写作工具的学术模式 |
| Awesome LLM for Writing | [repo](https://github.com/camilleroux/awesome-llm-for-writing) | LLM 写作方向资源集合 |

---

> **返回主页**：[README](../README.md) · **上一篇**：[实验设计与执行篇](./experiment.md) · **下一篇**：[评测篇](./benchmarks.md)
