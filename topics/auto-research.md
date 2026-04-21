<h1 align="center">Vibe Research Guide<br>Auto Research / AI Scientist</h1>

> Auto Research is the part of Vibe Research that tries to move from "research assistance" to "research operation." The key question is no longer only whether an agent can summarize papers, but whether it can propose ideas, build experiments, execute code, analyze results, and close the loop with credible evaluation.

## What Auto Research Means

In this guide, **Auto Research** refers to systems that try to automate a meaningful portion of the scientific workflow:

1. Scope a problem or research direction.
2. Search and synthesize prior work.
3. Generate or refine hypotheses.
4. Write and run code or experiments.
5. Analyze outputs and decide what to try next.
6. Produce reports, papers, or review artifacts.
7. Evaluate whether the system actually did research rather than only writing fluent text.

The important shift is from **answering questions** to **operating research loops**.

---

## 2026 Signals

Several concrete signals make Auto Research feel like a real stack rather than a loose set of demos:

| Signal | Representative resources | Why it matters |
|---|---|---|
| **End-to-end scientist systems are credible now** | [The AI Scientist](https://arxiv.org/abs/2408.06292) · [The AI Scientist-v2](https://arxiv.org/abs/2504.08066) · [Agent Laboratory](https://arxiv.org/abs/2501.04227) · [EvoScientist](https://arxiv.org/abs/2603.08127) | The field now has recognizable reference systems for idea-to-paper workflows, not only agent demos |
| **Framework-style auto research is growing** | [AI-Researcher](https://github.com/HKUDS/AI-Researcher) · [RD-Agent](https://github.com/microsoft/RD-Agent) · [Auto-Deep-Research](https://github.com/HKUDS/Auto-Deep-Research) | The boundary between "research system" and "agent framework" is getting thinner |
| **Scientist-aligned evaluation is finally improving** | [ScienceAgentBench](https://arxiv.org/abs/2410.05080) · [FIRE-Bench](https://arxiv.org/abs/2602.02905) · [ResearchClawBench](https://github.com/InternScience/ResearchClawBench) · [SGI-Bench](https://arxiv.org/abs/2512.16969) | The field is moving from vague capability claims toward research-specific evaluation |
| **Execution substrates matter more than ever** | [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) · [Codex](https://github.com/openai/codex) · [OpenHands](https://github.com/All-Hands-AI/OpenHands) · [SWE-agent](https://github.com/princeton-nlp/SWE-agent) | Most auto-research systems now rise or fall on their coding and execution layer |
| **Platformization is visible** | [FutureHouse Platform](https://www.futurehouse.org/research-announcements/launching-futurehouse-platform-ai-agents?_bhlid=b2b50af9254da4cf97bbad70959795fa728b14f6) · [Robin](https://www.futurehouse.org/research-announcements/demonstrating-end-to-end-scientific-discovery-with-robin-a-multi-agent-system) · [BixBench](https://www.futurehouse.org/research-announcements/bixbench) · [Edison Scientific](https://edisonscientific.com/) | Public platforms and benchmark products are becoming part of the story, not only papers and repos |

---

## Lifecycle Map

| Research stage | What good systems need | Representative systems |
|---|---|---|
| **Problem framing** | Interpret broad goals, narrow scope, identify tractable directions | [AI-Researcher](https://github.com/HKUDS/AI-Researcher) · [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) |
| **Literature synthesis** | Search papers, organize evidence, track novelty and grounding | [Auto-Deep-Research](https://github.com/HKUDS/Auto-Deep-Research) · [ResearchClaw](https://github.com/ymx10086/ResearchClaw) |
| **Hypothesis / idea generation** | Produce candidate ideas and filter weak ones | [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) · [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) |
| **Implementation / experimentation** | Write code, run experiments, recover from failure, inspect repos | [RD-Agent](https://github.com/microsoft/RD-Agent) · [OpenHands](https://github.com/All-Hands-AI/OpenHands) · [SWE-agent](https://github.com/princeton-nlp/SWE-agent) |
| **Iteration / search** | Explore alternatives, branch experiments, compare outcomes | [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) · [EvoScientist](https://github.com/EvoScientist/EvoScientist) |
| **Writing / reporting** | Turn results into reports, papers, checklists, and reviews | [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) · [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) |
| **Evaluation** | Judge rediscovery, research quality, expert alignment, and reproducibility | [ScienceAgentBench](https://github.com/OSU-NLP-Group/ScienceAgentBench) · [FIRE-Bench](https://firebench.github.io/) · [ResearchClawBench](https://github.com/InternScience/ResearchClawBench) |

---

## Representative Papers

| Paper | Link | Type | Why it matters |
|---|---|---|---|
| **The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery** | [arXiv](https://arxiv.org/abs/2408.06292) | End-to-end system | The clearest reference point for what "idea to paper" automation means |
| **The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search** | [arXiv](https://arxiv.org/abs/2504.08066) | End-to-end system | Pushes the field toward stronger exploration and workshop-level output quality |
| **Agent Laboratory: Using LLM Agents as Research Assistants** | [arXiv](https://arxiv.org/abs/2501.04227) | Human-in-the-loop system | Better mental model when you want useful collaboration rather than maximum autonomy |
| **AI-Researcher: Autonomous Scientific Innovation** | [GitHub](https://github.com/HKUDS/AI-Researcher) | Production-style framework | Strong signal that auto research is becoming a productized system layer |
| **R&D-Agent: An LLM-Agent Framework Towards Autonomous Data Science** | [GitHub](https://github.com/microsoft/RD-Agent) · [arXiv](https://arxiv.org/abs/2505.14738) | R&D framework | Important because it connects hypothesis generation to real implementation loops |
| **Auto-Deep-Research** | [GitHub](https://github.com/HKUDS/Auto-Deep-Research) · [arXiv](https://arxiv.org/abs/2502.05957) | Deep-research assistant | Useful bridge between retrieval-heavy research copilot workflows and fuller auto-research systems |
| **EvoScientist: Towards Multi-Agent Evolving AI Scientists for End-to-End Scientific Discovery** | [arXiv](https://arxiv.org/abs/2603.08127) | Self-evolving scientist | High-signal example of the learning / evolution branch entering research automation |

---

## Representative Systems

| Family | Representative resources | What it optimizes for | Best mental model |
|---|---|---|---|
| **Template-heavy end-to-end scientist** | [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) | High automation within clearer task templates | Strongest simple reference for "can AI write a paper?" |
| **Search-heavy end-to-end scientist** | [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) | Broader exploration and stronger ideation search | Best reference for open-ended branching and experiment-tree workflows |
| **Human-in-the-loop research copilot** | [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) | Collaborative iteration and practical research support | Useful when humans still want active control |
| **Production-facing auto research system** | [AI-Researcher](https://github.com/HKUDS/AI-Researcher) | End-to-end orchestration and usability | The "productized scientist workflow" branch |
| **R&D / data-science execution agent** | [RD-Agent](https://github.com/microsoft/RD-Agent) | Data-centric experimentation and implementation loops | Better thought of as autonomous R&D rather than only paper-writing |
| **Deep-research assistant framework** | [Auto-Deep-Research](https://github.com/HKUDS/Auto-Deep-Research) | Search, reading, and report generation with lower setup cost | Useful bridge from copilot tools toward heavier autonomy |
| **Self-evolving multi-agent scientist** | [EvoScientist](https://github.com/EvoScientist/EvoScientist) | Memory, iteration, and continual system improvement | The clearest current learning-layer entry into auto research |

---

## Benchmarks

| Benchmark | Link | What it evaluates | Why it matters |
|---|---|---|---|
| **ScienceAgentBench** | [arXiv](https://arxiv.org/abs/2410.05080) · [GitHub](https://github.com/OSU-NLP-Group/ScienceAgentBench) | Data-driven scientific discovery tasks | Early high-signal benchmark focused on realistic science tasks |
| **FIRE-Bench** | [arXiv](https://arxiv.org/abs/2602.02905) · [Website](https://firebench.github.io/) | Rediscovery of known scientific insights | Strong "verifiable rediscovery" framing instead of vague discovery claims |
| **ResearchClawBench** | [GitHub](https://github.com/InternScience/ResearchClawBench) | Autonomous research from rediscovery to new-discovery | One of the clearest recent benchmark signals for agentic research workspaces |
| **SGI-Bench** | [arXiv](https://arxiv.org/abs/2512.16969) | Scientist-aligned workflows and scientific general intelligence | Helps distinguish generic reasoning strength from scientist-aligned process capability |
| **AstaBench** | [arXiv](https://arxiv.org/abs/2510.21652) · [Ai2 post](https://allenai.org/blog/astabench) | Holistic scientific-research suite | Useful when you want broader task coverage than a single rediscovery setup |
| **MLE-bench** | [arXiv](https://arxiv.org/abs/2410.07095) · [GitHub](https://github.com/openai/mle-bench) | ML engineering execution | Important adjacent benchmark because many research agents fail at implementation rather than ideation |
| **RE-Bench** | [arXiv](https://arxiv.org/abs/2411.15671) · [GitHub](https://github.com/METR/RE-Bench) | Frontier AI R&D against human experts | Useful for calibrating realistic expectations on autonomous R&D, not only scientific writing |

---

## Frameworks & Execution Layer

Auto Research systems increasingly depend on a lower layer that can safely inspect code, run tools, and recover from failure.

| Layer | Representative resources | Role |
|---|---|---|
| **Research orchestration** | [AI-Researcher](https://github.com/HKUDS/AI-Researcher) · [RD-Agent](https://github.com/microsoft/RD-Agent) · [Auto-Deep-Research](https://github.com/HKUDS/Auto-Deep-Research) | High-level research loop coordination |
| **Coding / execution substrate** | [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) · [Codex](https://github.com/openai/codex) · [OpenHands](https://github.com/All-Hands-AI/OpenHands) · [SWE-agent](https://github.com/princeton-nlp/SWE-agent) | Safe code editing, environment interaction, and experiment execution |
| **Research workspace / assistant substrate** | [OpenClaw](https://github.com/openclaw/openclaw) · [ResearchClaw](https://github.com/ymx10086/ResearchClaw) · [InnoClaw](https://github.com/SpectrAI-Initiative/InnoClaw) | Grounded papers, files, notes, and long-running assistant shells |
| **Bridge / control surface** | [cc-connect](https://github.com/chenhg5/cc-connect) | Operate research or coding agents from chat surfaces |
| **Learning / improvement layer** | [Agent Lightning](https://github.com/microsoft/agent-lightning) · [MetaClaw](https://github.com/aiming-lab/MetaClaw) · [EvoScientist](https://github.com/EvoScientist/EvoScientist) | Training, online improvement, and evolving scientific workflows |

The important point is that **Auto Research is not one model**. It is a stack:

1. research copilots,
2. orchestration frameworks,
3. execution substrates,
4. evaluation harnesses,
5. and, increasingly, learning layers.

---

## Platform Signals

| Platform / signal | Link | Why it matters |
|---|---|---|
| **FutureHouse Platform** | [Announcement](https://www.futurehouse.org/research-announcements/launching-futurehouse-platform-ai-agents?_bhlid=b2b50af9254da4cf97bbad70959795fa728b14f6) | Shows AI scientist workflows being offered as public product surfaces |
| **Robin** | [Announcement](https://www.futurehouse.org/research-announcements/demonstrating-end-to-end-scientific-discovery-with-robin-a-multi-agent-system) | Strong recent signal for end-to-end multi-agent scientific discovery claims |
| **BixBench** | [Announcement](https://www.futurehouse.org/research-announcements/bixbench) | Shows benchmark productization becoming part of the platform story |
| **Edison Scientific / Kosmos** | [Website](https://edisonscientific.com/) · [Kosmos](https://edisonscientific.com/articles/announcing-kosmos) | Indicates movement toward enterprise and wet-lab-adjacent R&D workflows |

---

## Recommended Reading Order

1. Start with [Surveys](./surveys.md) to get the field-level framing.
2. Read [Systems](./systems.md) to understand the main system families.
3. Read [Benchmarks](./benchmarks.md) before trusting autonomy claims too much.
4. Return to [Tools & Platforms](./tools.md) if you want to build or operate a system.
5. Use [Vibe Coding](./vibe-coding.md) when the bottleneck becomes execution rather than research logic.

If you only read three things:

1. [The AI Scientist](https://arxiv.org/abs/2408.06292)
2. [Agent Laboratory](https://arxiv.org/abs/2501.04227)
3. [ScienceAgentBench](https://arxiv.org/abs/2410.05080)

That sequence gives you one end-to-end system, one collaborative system, and one reality check.

---

> **Home**: [README](../README.md) · **Next**: [Surveys](./surveys.md)
