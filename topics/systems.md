<h1 align="center">Vibe Research Guide<br>Representative Systems</h1>

> Representative systems show what happens when LLM agents move from "research help" to "research operation." The most important question is no longer whether an agent can write a summary, but whether it can plan work, execute code, branch experiments, inspect failures, and produce outputs that survive evaluation.

## 2026 Signals

The system layer now has clearer internal structure than it did a year ago:

| Signal | Representative resources | Why it matters |
|---|---|---|
| **End-to-end scientist systems are now a real family** | [The AI Scientist](https://arxiv.org/abs/2408.06292) · [The AI Scientist-v2](https://arxiv.org/abs/2504.08066) · [EvoScientist](https://arxiv.org/abs/2603.08127) | There is now a recognizable line of systems trying to automate idea generation, execution, and reporting |
| **Human-in-the-loop systems remain important** | [Agent Laboratory](https://arxiv.org/abs/2501.04227) | Practical research help often still benefits from explicit collaboration rather than maximum autonomy |
| **Framework-style auto research is growing** | [AI-Researcher](https://github.com/HKUDS/AI-Researcher) · [RD-Agent](https://github.com/microsoft/RD-Agent) · [Auto-Deep-Research](https://github.com/HKUDS/Auto-Deep-Research) | The field is no longer only flagship papers; orchestration frameworks are becoming first-class objects |
| **Execution substrates are part of system design now** | [OpenHands](https://github.com/All-Hands-AI/OpenHands) · [SWE-agent](https://github.com/princeton-nlp/SWE-agent) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) | The best "research system" often depends on a reliable coding or environment-interaction layer |
| **Platformization is visible** | [FutureHouse Platform](https://www.futurehouse.org/research-announcements/launching-futurehouse-platform-ai-agents?_bhlid=b2b50af9254da4cf97bbad70959795fa728b14f6) · [Robin](https://www.futurehouse.org/research-announcements/demonstrating-end-to-end-scientific-discovery-with-robin-a-multi-agent-system) · [Edison Scientific](https://edisonscientific.com/) | System ideas are moving beyond papers into persistent product surfaces |

## System Families

| Family | Representative resources | Best mental model | What it optimizes for |
|---|---|---|---|
| **Template-heavy end-to-end scientist** | [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) | The cleanest "idea to paper" baseline | Full-loop automation inside a clearer scaffold |
| **Search-heavy end-to-end scientist** | [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) | Branching search over research ideas and experiments | Better exploration and higher-quality output |
| **Collaborative research copilot** | [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) | Human stays in the loop while the agent executes real work | Practical assistance and controllability |
| **Productized auto-research orchestrator** | [AI-Researcher](https://github.com/HKUDS/AI-Researcher) | Research workflow as a reusable system layer | Broader usability and workflow packaging |
| **Autonomous R&D / data science agent** | [RD-Agent](https://github.com/microsoft/RD-Agent) | Research and development on real implementation loops | Execution-heavy data-science and engineering workflows |
| **Deep-research assistant framework** | [Auto-Deep-Research](https://github.com/HKUDS/Auto-Deep-Research) | Search, reading, synthesis, and structured report generation | Stronger literature-grounded multi-step research assistance |
| **Self-evolving multi-agent scientist** | [EvoScientist](https://github.com/EvoScientist/EvoScientist) | Scientist workflow plus persistent improvement | Memory, iteration, and continual system evolution |

## Paper List

| # | Paper | URL | Type | Why read | Stage | Keywords |
|---|---|---|---|---|---|---|
| 4 | The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery | [arXiv](https://arxiv.org/abs/2408.06292) | System | Landmark reference for end-to-end idea → experiment → report automation | Intermediate | AI scientist, full loop |
| 5 | The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search | [arXiv](https://arxiv.org/abs/2504.08066) | System | Stronger exploration and higher output quality via agentic tree search | Intermediate | tree search, branching |
| 6 | Agent Laboratory: Using LLM Agents as Research Assistants | [arXiv](https://arxiv.org/abs/2501.04227) | System | Best reference for human-in-the-loop scientific assistance | Intermediate | collaboration, copilot |
| 7 | AI-Researcher: Autonomous Scientific Innovation | [arXiv](https://arxiv.org/abs/2505.18705) · [GitHub](https://github.com/HKUDS/AI-Researcher) | Framework | Important bridge from paper demo to reusable auto-research workflow system | Intermediate | orchestration, innovation |
| 8 | R&D-Agent: An LLM-Agent Framework Towards Autonomous Data Science | [arXiv](https://arxiv.org/abs/2505.14738) · [GitHub](https://github.com/microsoft/RD-Agent) | Framework | Shows how autonomous R&D and data-science execution fit into the same landscape | Intermediate | autonomous R&D, data science |
| 9 | Auto-Deep-Research | [arXiv](https://arxiv.org/abs/2502.05957) · [GitHub](https://github.com/HKUDS/Auto-Deep-Research) | Framework | Best reference for retrieval-heavy multi-step research automation | Beginner-Intermediate | deep research, synthesis |
| 10 | EvoScientist: Towards Multi-Agent Evolving AI Scientists for End-to-End Scientific Discovery | [arXiv](https://arxiv.org/abs/2603.08127) | System | Strongest recent example of self-evolving multi-agent research automation | Intermediate | self-evolution, persistent memory |

## Recommendations

| # | Rating | Note |
|---|---|---|
| 4 | ★★★★★ | Must-read baseline for what "auto research" means |
| 5 | ★★★★★ | Must-read if you care about open-ended search and branching |
| 6 | ★★★★★ | Must-read if you want something closer to real human workflows |
| 7 | ★★★★☆ | Highly recommended for framework thinking and productization |
| 8 | ★★★★☆ | Highly recommended for autonomous R&D and execution-heavy loops |
| 9 | ★★★★☆ | Best bridge from deep-research products to fuller research agents |
| 10 | ★★★★★ | Must-read for the learning / evolving-scientist direction |

## Architecture Comparison

| Dimension | AI Scientist | AI Scientist-v2 | Agent Laboratory | AI-Researcher | RD-Agent | Auto-Deep-Research | EvoScientist |
|---|---|---|---|---|---|---|---|
| Autonomy | High | Very high | Medium | High | High | Medium-High | Very high |
| Human-in-the-loop | Minimal | Minimal | Explicit | Optional | Optional | Optional | Minimal |
| Core search strategy | Linear staged workflow | Agentic tree search | Human-guided iteration | Multi-stage orchestration | R&D loop orchestration | Search + retrieval + synthesis | Evolution and memory |
| Execution substrate dependence | Built-in | Built-in | Built-in | High | High | Medium | High |
| Best output | End-to-end research artifact | Stronger branching exploration | Practical assistant-style support | Reusable research workflow | Autonomous data-science / R&D results | Grounded research report | Improving scientist workflow |
| Benchmark relevance | ScienceAgentBench-style eval | FIRE-Bench / SGI-Bench style eval | Human collaboration studies | Framework and orchestration comparisons | RE-Bench / MLE-bench-adjacent eval | Deep-research quality eval | Scientist-aligned process eval |
| Open-source | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## Execution Substrates

These are not always "research systems" by themselves, but they increasingly function as the lower layer that research systems rely on.

| Project | Link | Why it matters here |
|---|---|---|
| OpenHands | [GitHub](https://github.com/All-Hands-AI/OpenHands) | General open-source execution substrate for coding and environment interaction |
| SWE-agent | [GitHub](https://github.com/princeton-nlp/SWE-agent) | Strong reference for agent-computer interaction and reliable repo workflows |
| Claude Code | [Docs](https://docs.anthropic.com/en/docs/claude-code/overview) | Terminal-native coding agent with approval and repo controls |
| Codex | [GitHub](https://github.com/openai/codex) | OpenAI execution layer for local and cloud coding tasks |
| OpenClaw | [GitHub](https://github.com/openclaw/openclaw) | Assistant substrate that can host research-oriented Claw variants and plugin surfaces |

## Extended Reading

| Resource | Link | Description |
|---|---|---|
| Toward end-to-end automation of AI research | [Nature](https://www.nature.com/articles/s41586-026-09511-4) | Perspective on how the system layer is changing and where the remaining gaps are |
| FutureHouse Platform | [Announcement](https://www.futurehouse.org/research-announcements/launching-futurehouse-platform-ai-agents?_bhlid=b2b50af9254da4cf97bbad70959795fa728b14f6) | Public platform surface for specialized scientific agents |
| Robin | [Announcement](https://www.futurehouse.org/research-announcements/demonstrating-end-to-end-scientific-discovery-with-robin-a-multi-agent-system) | Multi-agent scientific discovery signal with stronger real-workflow claims |
| BixBench | [Announcement](https://www.futurehouse.org/research-announcements/bixbench) | Benchmark productization signal for the platform layer |
| Edison Scientific / Kosmos | [Website](https://edisonscientific.com/) · [Kosmos](https://edisonscientific.com/articles/announcing-kosmos) | Commercial platformization of AI-scientist ideas |

## Reading Tips

1. Start with **The AI Scientist** if you want the cleanest mental model of end-to-end automation.
2. Read **Agent Laboratory** next if you want a more realistic and collaborative system design.
3. Read **The AI Scientist-v2** after that to see what stronger search adds.
4. Use **AI-Researcher**, **RD-Agent**, and **Auto-Deep-Research** to understand why frameworks and orchestration matter now.
5. Finish with **EvoScientist** if you care about persistent memory, evolution, and continual improvement.

---

> **Home**: [README](../README.md) · **Prev**: [Surveys](./surveys.md) · **Next**: [Ideation](./ideation.md)
