<h1 align="center">Vibe Research Guide<br>Benchmarks & Evaluation</h1>

> Benchmarks are where most Auto Research claims become credible or collapse. Without scientist-aligned evaluation, it is too easy to confuse fluent reports, strong tool use, or decent coding ability with actual research capability.

## How To Read This Page

The current benchmark landscape splits into two main groups:

1. **Scientist-aligned workflow benchmarks**: can a system rediscover, reason through, and operate a research process that looks like real science?
2. **Engineering / R&D capability benchmarks**: can a system execute the implementation-heavy work that modern research depends on?

Both matter. A research agent that cannot code or run experiments is weak. A coding agent that cannot reason scientifically is also weak.

## Paper List

| # | Benchmark | URL | Type | Why read | Stage | Keywords |
|---|---|---|---|---|---|---|
| 12 | ScienceAgentBench: Toward Rigorous Assessment of Language Agents for Data-Driven Scientific Discovery | [arXiv](https://arxiv.org/abs/2410.05080) · [GitHub](https://github.com/OSU-NLP-Group/ScienceAgentBench) | Scientist-aligned workflow | Early high-signal benchmark for realistic scientific-discovery evaluation | Intermediate | rigor, discovery |
| 13 | FIRE-Bench: Evaluating Agents on the Rediscovery of Scientific Insights | [arXiv](https://arxiv.org/abs/2602.02905) · [Website](https://firebench.github.io/) | Scientist-aligned workflow | Strong rediscovery framing that makes verification easier than vague novelty claims | Intermediate | rediscovery, verification |
| 14 | ResearchClawBench | [GitHub](https://github.com/InternScience/ResearchClawBench) | Scientist-aligned workflow | Benchmark signal built around autonomous scientific research from rediscovery to new-discovery | Intermediate | autonomous research, workflow |
| 15 | Probing Scientific General Intelligence of LLMs with Scientist-Aligned Workflows | [arXiv](https://arxiv.org/abs/2512.16969) | Scientist-aligned workflow | Useful for separating general reasoning from scientist-aligned process capability | Intermediate | SGI, scientist workflow |
| 16 | AstaBench: Rigorous Benchmarking of AI Agents with a Scientific Research Suite | [arXiv](https://arxiv.org/abs/2510.21652) · [Ai2 post](https://allenai.org/blog/astabench) | Scientist-aligned workflow | Broader and more holistic scientific benchmark suite | Intermediate | benchmark suite, coverage |
| 17 | MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering | [arXiv](https://arxiv.org/abs/2410.07095) · [GitHub](https://github.com/openai/mle-bench) | Engineering / R&D | Strong reality check for the implementation side of research work | Intermediate | ML engineering, Kaggle |
| 18 | RE-Bench: Evaluating Frontier AI R&D Capabilities of Language Model Agents Against Human Experts | [arXiv](https://arxiv.org/abs/2411.15671) · [GitHub](https://github.com/METR/RE-Bench) | Engineering / R&D | Most useful benchmark here when you care about expert-level R&D comparison | Intermediate | R&D, human experts |

## Recommendations

| # | Rating | Note |
|---|---|---|
| 12 | ★★★★★ | Must-read baseline for scientific-agent evaluation |
| 13 | ★★★★★ | Must-read if you care about rediscovery and verifiability |
| 14 | ★★★★☆ | Strong recent signal for agentic research-workspace evaluation |
| 15 | ★★★★★ | Best current framing for scientist-aligned workflow evaluation |
| 16 | ★★★★☆ | Useful for broader scientific-task coverage |
| 17 | ★★★★☆ | Important adjacent benchmark for execution-heavy work |
| 18 | ★★★★★ | Best reality check for autonomous R&D against humans |

## Benchmark Families

| Family | Representative resources | What it evaluates | Why it matters |
|---|---|---|---|
| **Scientist-aligned workflow benchmarks** | [ScienceAgentBench](https://arxiv.org/abs/2410.05080) · [FIRE-Bench](https://arxiv.org/abs/2602.02905) · [ResearchClawBench](https://github.com/InternScience/ResearchClawBench) · [SGI-Bench](https://arxiv.org/abs/2512.16969) · [AstaBench](https://arxiv.org/abs/2510.21652) | Literature reasoning, rediscovery, structured scientific workflows, and research-process quality | This is where "AI scientist" claims should increasingly be judged |
| **Engineering / R&D capability benchmarks** | [MLE-bench](https://arxiv.org/abs/2410.07095) · [RE-Bench](https://arxiv.org/abs/2411.15671) | Implementation, experimentation, ML engineering, and expert-level R&D capability | Research systems increasingly fail on execution, not only on ideation |

## Benchmark Comparison

| Dimension | ScienceAgentBench | FIRE-Bench | ResearchClawBench | SGI-Bench | AstaBench | MLE-bench | RE-Bench |
|---|---|---|---|---|---|---|---|
| Core idea | Rigorous science-task assessment | Rediscovery of known insights | Autonomous research workflow evaluation | Scientist-aligned process quality | Broad scientific-research suite | ML engineering execution | Frontier AI R&D vs experts |
| Best use | Baseline scientific-agent evaluation | Verifiable rediscovery | Agentic research workspace evaluation | Scientist-like workflow calibration | Wider task coverage | Implementation-heavy systems | Reality check against human experts |
| Main strength | Scientific realism | Verifiability | Workflow framing | Process alignment | Breadth | Practical coding + ML work | Human comparison |

## Reading Tips

1. Start with **ScienceAgentBench** if you want the cleanest baseline.
2. Read **FIRE-Bench** next if you care about rediscovery rather than hand-wavy discovery claims.
3. Read **SGI-Bench** when you want to judge whether a system is behaving like a scientist rather than just a strong generalist model.
4. Use **ResearchClawBench** and **AstaBench** to understand the current push toward broader and more realistic workflow suites.
5. Finish with **MLE-bench** and **RE-Bench** to calibrate implementation and expert-level R&D gaps.

## Extended Reading

| Resource | Link | Description |
|---|---|---|
| MLAgentBench | [arXiv](https://arxiv.org/abs/2310.03302) | Earlier benchmark for machine-learning experimentation by agents |
| SWE-bench | [GitHub](https://github.com/princeton-nlp/SWE-bench) | Important execution-layer benchmark for coding agents |
| GAIA | [arXiv](https://arxiv.org/abs/2311.12983) | General assistant benchmark that is useful, but not scientist-aligned |
| Awesome AI Agent Benchmarks | [GitHub](https://github.com/agiresearch/awesome-ai-agent-benchmarks) | Useful meta-index for wider benchmark scouting |

---

> **Home**: [README](../README.md) · **Prev**: [Writing & Review](./writing-review.md)
