<h1 align="center">Vibe Research Guide<br>研究构思篇 Research Ideation</h1>

> Research Ideation 聚焦一个核心问题：**LLM 能否帮助研究者发现新的研究 idea？** 这个方向涵盖了从文献中发现 research gap、迭代生成 idea、评估 idea 的 novelty 和 feasibility、以及人机协作构思等关键环节。它是 Vibe Research 中最直接面向"科研创造力"的子领域。

<section id="ideation-papers"></section>

## 论文列表

| # | Paper | URL | Type | Why read / 为什么读 | Stage | Keywords |
|---|---|---|---|---|---|---|
| 7 | ResearchAgent: Iterative Research Idea Generation over Scientific Literature with Large Language Models | [arXiv](https://arxiv.org/abs/2404.07738) | Ideation | 从文献出发迭代生成 idea，非常贴近"找 research gap → 提 idea"的真实科研流程。 | Intermediate | ideation, iteration |
| 8 | Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers | [arXiv](https://arxiv.org/abs/2409.04109) | Evaluation / Ideation | 大规模人类评估（100+ NLP 研究者），研究 LLM 生成 idea 的 novelty 与 feasibility，提供了重要的实证证据。 | Intermediate | novelty, feasibility, human evaluation |
| 9 | Chain of Ideas: Revolutionizing Research Via Novel Idea Development with LLM Agents | [arXiv](https://arxiv.org/abs/2410.13185) | Ideation | 通过 Chain-of-Ideas 组织文献脉络、Idea Arena 机制筛选优质 idea，提升 idea generation 的结构化程度。 | Intermediate | Chain-of-Ideas, Idea Arena |
| 10 | Scideator: Human-LLM Scientific Idea Generation Grounded in Research-Paper Facet Recombination | [arXiv](https://arxiv.org/abs/2409.14634) | Human-LLM Ideation | 强调 mixed-initiative（人机协作）的 ideation，通过论文 facet recombination 生成 idea 并做 novelty checking。 | Intermediate | mixed-initiative, novelty check, facet recombination |
| 11 | AI-Researcher: Automating Scientific Discovery Through Multi-Agent Collaboration | [arXiv](https://arxiv.org/abs/2404.04573) | Ideation + System | 多 Agent 协作完成从文献调研到 idea 生成的全流程。展示了将 ideation 嵌入更完整科研管线中的设计模式。 | Intermediate | multi-agent, full pipeline, collaboration |
| 12 | Nova: An Iterative Planning and Search Approach to Enhance Novelty and Diversity of LLM Generated Ideas | [arXiv](https://arxiv.org/abs/2410.14255) | Ideation | 通过迭代规划与搜索机制，显著提升 LLM 生成 idea 的新颖性与多样性。解决了 LLM idea 生成中常见的"千篇一律"问题。 | Intermediate | novelty, diversity, iterative planning |

<section id="ideation-recommendations"></section>

## 推荐度

| # | 推荐度 | 说明 |
|---|---|---|
| 7 | ★★★★★ | Must-read，迭代 ideation 代表 |
| 8 | ★★★★★ | Must-read，实证评估标杆 |
| 9 | ★★★★☆ | 强烈推荐，结构化 ideation |
| 10 | ★★★★☆ | 强烈推荐，人机协作视角 |
| 11 | ★★★★☆ | 强烈推荐，全流程 ideation |
| 12 | ★★★★☆ | 强烈推荐，多样性提升 |

<section id="ideation-landscape"></section>

## Ideation 方法对比

| 维度 | ResearchAgent | Can LLMs Generate...? | Chain of Ideas | Scideator | AI-Researcher | Nova |
|---|---|---|---|---|---|---|
| 核心机制 | 迭代生成+文献基础 | 人类对比评估 | 文献链+Idea Arena | Facet 重组 | 多 Agent 协作 | 迭代规划+搜索 |
| 人类参与 | 低（自动） | 高（评估者） | 低（自动） | 高（协作者） | 低（自动） | 低（自动） |
| 评估方式 | 自动 | 人工 100+ 人 | Idea Arena 排序 | Novelty check | 自动 | 自动 (novelty + diversity) |
| 输出形式 | Research idea | Idea + 人类评分 | Ranked ideas | Grounded idea | Idea + 实验方案 | Diverse idea set |
| 关注点 | 文献基础 | 实证验证 | 结构化组织 | 人机协作 | 端到端管线 | 新颖性+多样性 |

<section id="ideation-reading-tips"></section>

## 阅读建议

1. **论文 #7** 是 ideation 方向最直觉的入口——从文献到 idea 的迭代过程与你日常找 research gap 的思路非常接近。
2. **论文 #8** 提供了一个关键问题的回答："LLM 生成的 idea 真的有新意吗？"——读完后你会对 LLM 的创造力边界有更清晰的认识。
3. **论文 #9 和 #10** 可以对比阅读：Chain of Ideas 偏自动化，Scideator 偏人机协作，代表了 ideation 的两种发展方向。
4. **论文 #11（AI-Researcher）** 适合关注"从 idea 到实验"完整管线的读者——它展示了 ideation 如何嵌入更大的科研系统中。
5. **论文 #12（Nova）** 专注解决 LLM 生成 idea "同质化"的问题，如果你发现 LLM 总是给出相似的 idea，这篇值得一读。

<section id="ideation-extended"></section>

## 延伸阅读

| 资源 | 链接 | 说明 |
|---|---|---|
| AI-Researcher | [arXiv](https://arxiv.org/abs/2404.04573) | 另一个 LLM 驱动的研究 idea 生成系统 |
| IdeaSynth | [arXiv](https://arxiv.org/abs/2410.09274) | 通过 knowledge graph 辅助 idea 生成 |
| Awesome Scientific Idea Generation | [repo](https://github.com/wjie0309/awesome-scientific-idea-generation) | 科研 idea 生成方向的论文列表 |
| CoI-Agent | [arXiv](https://arxiv.org/abs/2410.13185) | Chain of Ideas 的 Agent 实现 |
| Eureka: Human-Level Reward Design via Coding LLMs | [arXiv](https://arxiv.org/abs/2310.12931) | 展示 LLM 在奖励设计中的创造力，idea 生成的跨领域参考 |
