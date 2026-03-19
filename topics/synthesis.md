<h1 align="center">Vibe Research Guide<br>文献综合篇 Literature Synthesis</h1>

> Literature Synthesis 关注如何**让 LLM 系统性地阅读、理解和综合大量科学文献**，产出有引用支撑的综述性回答或报告。这是 Vibe Research 中最接近"文献阅读自动化"的方向——它不只是问答，而是要做到 citation-backed、factual、comprehensive 的文献综合。

<section id="synthesis-papers"></section>

## 论文列表

| # | Paper | URL | Type | Why read / 为什么读 | Stage | Keywords |
|---|---|---|---|---|---|---|
| 1 | OpenScholar: Synthesizing Scientific Literature with Retrieval-Augmented Language Models | [arXiv](https://arxiv.org/abs/2411.14199) | RAG / Synthesis | 高质量 scientific literature synthesis 的代表工作。使用 RAG 从海量文献中检索相关段落，生成有引用支撑的综合性回答，在多个科学问答 benchmark 上大幅超越基线。 | Intermediate | RAG, citation-backed synthesis, grounded generation |
| 2 | PaperQA: Retrieval-Augmented Generative Agent for Scientific Research | [arXiv](https://arxiv.org/abs/2312.07559) | RAG / QA | Future House 出品，基于 RAG 的科学文献问答系统。支持全文检索、精确引用与答案验证，在科学 QA 任务上超越人类基线。开源可部署，实用性极强。 | Beginner-Intermediate | RAG, question answering, citation verification |
| 3 | AutoSurvey: Large Language Models Can Automatically Write Surveys | [arXiv](https://arxiv.org/abs/2406.10252) | Survey Generation | 自动生成学术综述论文的系统。输入研究主题，自动检索文献、组织结构、生成完整综述。展示了 LLM 在长文档生成与知识组织中的能力。 | Intermediate | automated survey, long-form generation, knowledge organization |
| 4 | ScholarCopilot: Training Large Language Models for Academic Writing with Retrieval-Augmented Generation | [arXiv](https://arxiv.org/abs/2504.00824) | RAG / Writing | 将检索增强与学术写作深度结合的系统。训练模型在写作过程中自动检索并引用相关文献，实现"边写边引"。代表了 synthesis + writing 的融合趋势。 | Intermediate | academic writing, retrieval-augmented, citation generation |
| 5 | RA-ISF: Learning to Answer and Understand from Retrieval Augmentation via Iterative Self-Feedback | [arXiv](https://arxiv.org/abs/2403.06840) | RAG / Reasoning | 通过迭代自反馈改进 RAG 质量的方法。在检索→生成→验证的循环中，Agent 自主评估并修正回答质量，提升 synthesis 的准确性和全面性。 | Intermediate | iterative self-feedback, RAG improvement, self-correction |

<section id="synthesis-recommendations"></section>

## 推荐度

| # | 推荐度 | 说明 |
|---|---|---|
| 1 | ★★★★★ | Must-read，文献综合方向的标杆 |
| 2 | ★★★★★ | Must-read，开源可部署的实用系统 |
| 3 | ★★★★☆ | 强烈推荐，自动综述生成的前沿 |
| 4 | ★★★★☆ | 强烈推荐，写作+检索融合趋势 |
| 5 | ★★★★☆ | 强烈推荐，RAG 质量提升的通用方法 |

<section id="synthesis-comparison"></section>

## 文献综合方法对比

| 维度 | OpenScholar | PaperQA2 | AutoSurvey | ScholarCopilot | RA-ISF |
|---|---|---|---|---|---|
| 核心任务 | 多文献综合回答 | 精确文献问答 | 自动生成综述 | 边写边引 | RAG 质量提升 |
| 检索范围 | 大规模语料 | 用户上传 PDF | 自动检索 | 训练时集成 | 通用 |
| 引用准确度 | 高（grounding check） | 高（原文验证） | 中 | 高（训练优化） | 高（迭代修正） |
| 输出形式 | 综合性回答 | QA 回答 + 引用 | 完整综述论文 | 学术段落 + 引用 | 改进后的回答 |
| 可部署性 | 开源 | 开源 | 开源 | 开源 | 方法论 |
| 适合场景 | 研究者的文献调研 | 日常论文问答 | 综述写作 | 论文撰写 | RAG 系统优化 |

<section id="synthesis-architecture"></section>

## 核心技术栈

文献综合系统的通用架构可以概括为：

```
                        文献综合系统通用架构
┌──────────────────────────────────────────────────────┐
│                                                      │
│  1. 文献获取层                                        │
│     ├── 用户上传 PDF (PaperQA2)                       │
│     ├── 大规模语料检索 (OpenScholar)                    │
│     └── 自动文献搜索 (AutoSurvey, ScholarCopilot)      │
│                                                      │
│  2. 检索增强层 (RAG)                                   │
│     ├── 段落级检索 (dense retrieval)                    │
│     ├── 重排序 (reranking)                             │
│     └── 上下文窗口管理                                  │
│                                                      │
│  3. 生成与综合层                                       │
│     ├── 引用感知生成 (citation-aware generation)        │
│     ├── 多文档信息融合                                  │
│     └── 结构化组织 (sections, arguments)               │
│                                                      │
│  4. 验证与反馈层                                       │
│     ├── 引用验证 (grounding check)                     │
│     ├── 事实核查 (factual verification)                │
│     └── 迭代自修正 (RA-ISF)                            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

<section id="synthesis-repos"></section>

## 相关代码仓库

| 项目 | 链接 | 说明 |
|---|---|---|
| OpenScholar | [GitHub](https://github.com/allenai/OpenScholar) | Allen AI 官方开源实现 |
| PaperQA2 | [GitHub](https://github.com/Future-House/paper-qa) | Future House 官方实现，pip install paper-qa |
| AutoSurvey | [GitHub](https://github.com/AutoSurveys/AutoSurvey) | 自动综述生成系统 |
| ScholarCopilot | [GitHub](https://github.com/THUDM/ScholarCopilot) | 清华 THUDM 检索增强写作系统 |

<section id="synthesis-reading-tips"></section>

## 阅读建议

1. **论文 #1（OpenScholar）** 是入门文献综合方向的首选——它完整展示了 RAG 在科学文献场景下的最佳实践。
2. **论文 #2（PaperQA2）** 最适合想"动手做"的读者——它的开源实现质量高，可以直接 `pip install` 跑起来。
3. **论文 #3（AutoSurvey）** 展示了一个更具雄心的目标：不只是回答问题，而是自动写出完整综述，适合关注长文档生成的研究者。
4. **论文 #4（ScholarCopilot）** 代表了一个新趋势：将检索和写作深度融合，值得关注这个方向的发展。
5. **论文 #5（RA-ISF）** 是方法论层面的贡献——无论你用哪个系统，迭代自反馈的思路都能提升 synthesis 质量。
6. 建议先理解 **RAG（Retrieval-Augmented Generation）** 的基本原理再阅读这些论文。推荐先读 [RAG 原论文](https://arxiv.org/abs/2005.11401)。

<section id="synthesis-extended"></section>

## 延伸阅读

| 资源 | 链接 | 说明 |
|---|---|---|
| Semantic Scholar Open Data | [website](https://www.semanticscholar.org/product/api) | Allen AI 的科学文献 API，OpenScholar 底层数据源 |
| Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | [arXiv](https://arxiv.org/abs/2005.11401) | RAG 原论文，理解底层技术 |
| Awesome RAG | [repo](https://github.com/hymie122/RAG-Survey) | RAG 方向综述与论文列表 |
| Elicit | [website](https://elicit.com/) | 面向研究者的 AI 文献助手产品 |
| Consensus | [website](https://consensus.app/) | AI 驱动的科学文献搜索引擎 |
| OpenAlex | [website](https://openalex.org/) | 开放的学术文献元数据平台 |
| Grobid | [GitHub](https://github.com/kermitt2/grobid) | 科学文献 PDF 结构化解析工具 |
| LlamaIndex | [GitHub](https://github.com/run-llama/llama_index) | 通用 RAG 框架，支持文献检索管线 |

---

> **返回主页**：[README](../README.md) · **上一篇**：[研究构思篇](./ideation.md) · **下一篇**：[实验设计与执行篇](./experiment.md)
