<h1 align="center">Vibe Research Guide<br>Claw Park</h1>

> Claw Park is the ecosystem map for the growing Claw family. The goal is simple: when a new Claw project appears, you should be able to answer two questions quickly: what is it trying to do, and where does it fit in the stack?

## Why Claw Park Exists

The Claw ecosystem is no longer one assistant repo. It now spans:

1. **Gateway and core runtime**
2. **Registries, bundles, and plugin distribution**
3. **Packaging and deployment**
4. **Research workspaces and daily copilots**
5. **Scientific specialists and evolution engines**
6. **Fully autonomous research pipelines**
7. **Desktop reading surfaces and community catalogs**

Without a map, all of these look like sibling products. They are not. Claw Park keeps them separated by job, not by branding.

---

## Claw Family Map

| Project | What it is doing | Role in the stack | Best for |
|---|---|---|---|
| [OpenClaw](https://github.com/openclaw/openclaw) | General assistant platform that is increasingly a gateway, control surface, and plugin runtime | Gateway / foundation | Builders who want the main runtime and ecosystem entry point |
| [ClawHub](https://github.com/openclaw/clawhub) | Public registry for OpenClaw skills and plugins with search, install, publish, and versioning flows | Registry / discovery | Users who want to find, install, and publish capabilities |
| [OpenClaw Plugin Bundles](https://docs.openclaw.ai/plugins/bundles) | Compatibility layer that maps Codex, Claude, and Cursor bundles into native OpenClaw features | Compatibility layer | Teams that want to reuse third-party agent bundles without rewriting them |
| [nix-openclaw](https://github.com/openclaw/nix-openclaw) | Declarative Nix packaging and deployment path for OpenClaw across macOS and Linux | Packaging / deployment | Operators who care about reproducible installs, rollback, and fleet-style setup |
| [InnoClaw](https://github.com/SpectrAI-Initiative/InnoClaw) | Self-hostable research workspace for grounded chat, paper study, scientific skills, and research execution | Research workspace | Labs and self-hosters who want files, papers, and execution in one place |
| [ResearchClaw](https://github.com/ymx10086/ResearchClaw) | Personal research assistant for literature review, note-taking, experiment tracking, and paper writing | Daily research copilot | Individual researchers who want an end-to-end daily driver |
| [ResearchClaw Desktop App](https://noietch.github.io/ResearchClaw/) | Local-first desktop app for PDF chat, note-taking, and paper reading workflows | Desktop / reading surface | Readers who want a lighter-weight local research surface |
| [ScienceClaw](https://github.com/beita6969/ScienceClaw) | Self-evolving scientific research colleague with strong research memory and scientific focus | Scientific specialist | Research-heavy users who want a more opinionated scientific agent |
| [ScienceClaw (alt repo)](https://github.com/Zaoqu-Liu/ScienceClaw) | Lab-style research automation stack with broad database access and multi-agent coverage | Research-lab variant | Users exploring aggressive lab automation patterns |
| [MetaClaw](https://github.com/aiming-lab/MetaClaw) | Learning framework that extracts reusable skills from real use and supports online evolution | Evolution engine | Builders interested in adaptive agents and learning-in-the-loop systems |
| [AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | Fully autonomous idea-to-paper pipeline with experiments, review, verification, and final deliverables | Autonomous pipeline | People testing how far autonomous research generation can go |
| [awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | Community-maintained directory of OpenClaw-style skills and examples | Community catalog | Users who want fast discovery of skills and ecosystem patterns |

---

## How To Read The Stack

Think in layers instead of sibling products:

| Layer | Main question | Representative pieces |
|---|---|---|
| Gateway / foundation | What runtime and control surface am I building on? | OpenClaw |
| Registry / discovery | Where do skills and plugins get published, versioned, and installed? | ClawHub · awesome-openclaw-skills |
| Compatibility | How do I reuse adjacent agent ecosystems without rewriting everything? | OpenClaw Plugin Bundles |
| Packaging / deployment | How do I install, pin, update, and roll back reliably? | nix-openclaw |
| Research workspace | Where do I chat over files, papers, and tasks? | InnoClaw · ResearchClaw Desktop App |
| Daily research copilot | What helps me read, track, and write every day? | ResearchClaw |
| Specialist scientist | What pushes deeper into scientific assistance and memory? | ScienceClaw |
| Evolution layer | What helps the agent learn from use over time? | MetaClaw |
| Autonomous pipeline | What tries to do the full research loop for me? | AutoResearchClaw |

This avoids a common mistake: comparing `ClawHub` to `ResearchClaw`, or `nix-openclaw` to `ScienceClaw`, as if they were trying to solve the same problem.

---

## Why OpenClaw Matters Right Now

The main reason OpenClaw matters in 2026 Spring is not just popularity. It now reads like a stack rather than a shell:

1. **Gateway**: the core runtime sits between users, chat surfaces, models, tools, and plugins.
2. **Registry**: [ClawHub](https://docs.openclaw.ai/tools/clawhub) turns skills and plugins into a searchable, versioned public layer.
3. **Compatibility**: [Plugin Bundles](https://docs.openclaw.ai/plugins/bundles) let OpenClaw reuse Codex, Claude, and Cursor ecosystem formats.
4. **Deployment path**: [nix-openclaw](https://github.com/openclaw/nix-openclaw) makes the ecosystem easier to package, pin, and operate.

That makes OpenClaw more important as ecosystem infrastructure than as just one more assistant app.

---

## Where Research Claws Are Diverging

The interesting shift is not just "more Claws." It is that research-oriented Claws are splitting into clearly different bets:

| Pattern | Representative projects | What the bet is |
|---|---|---|
| Gateway + ecosystem layer | OpenClaw · ClawHub · Plugin Bundles | The moat is distribution, compatibility, and a reusable runtime surface |
| Reproducible deployment | nix-openclaw | Operators want a standard way to install and maintain the ecosystem across machines |
| Grounded research workspace | InnoClaw · ResearchClaw Desktop App | Researchers want file-aware, paper-aware, local-first workspaces instead of generic chat |
| Daily research copilot | ResearchClaw | The core value is steady literature, notes, tracking, and writing support rather than maximum autonomy |
| Scientific specialist | ScienceClaw · ScienceClaw (alt repo) | The agent should behave more like a persistent scientific collaborator or even a mini research lab |
| Learning / evolution engine | MetaClaw | The long-term moat is online learning, skill extraction, and adaptation from real use |
| Full autonomy pipeline | AutoResearchClaw | The system should run as much of the idea-to-paper loop as possible with minimal intervention |

This is why "Which Claw is best?" is often the wrong question. The better question is which layer of the research stack you are trying to strengthen.

---

## Beyond Claw: The Wider Learning Layer

MetaClaw is the clearest Claw-native representative of the learning layer, but the surrounding ecosystem is now broader than Claw itself.

| Outside the Claw family | What it contributes |
|---|---|
| [Agent Lightning](https://github.com/microsoft/agent-lightning) | General agent training with RL, automatic prompt optimization, and SFT |
| [Agent0](https://github.com/aiming-lab/Agent0) · [AgentEvolver](https://github.com/modelscope/AgentEvolver) | Self-generated evolution loops, zero-data improvement, and agent learning from their own exploration |
| [EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) · [EvoScientist](https://github.com/EvoScientist/EvoScientist) | Workflow-level evolution and scientist-loop optimization |
| [Acontext](https://github.com/memodb-io/Acontext) | Persistent context, memory, and reusable skills as part of agent improvement |

The useful mental model is: MetaClaw shows how learning can live inside the Claw ecosystem, while the wider self-evolving-agent space shows that this is becoming a separate stack layer across the whole agent field.

---

## Skills, Marketplaces, And Remote Control

The broader ecosystem is no longer only project repos. It now includes a distribution and control layer around those repos:

| Layer | Example | Why it matters |
|---|---|---|
| Skill and plugin registry | [ClawHub](https://docs.openclaw.ai/tools/clawhub) | Makes OpenClaw look like a living ecosystem with versioned, searchable skills and plugins |
| Compatible bundles | [OpenClaw Plugin Bundles](https://docs.openclaw.ai/plugins/bundles) | Suggests agent ecosystems may interoperate through installable bundle compatibility, not only isolated plugins |
| Deployment substrate | [nix-openclaw](https://github.com/openclaw/nix-openclaw) | Gives operators a standard path for reproducible setup, upgrades, and rollback |
| Skill discovery | [awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | Makes OpenClaw-style skills easier to browse, compare, and reuse |
| Chat control surface | [cc-connect](https://github.com/chenhg5/cc-connect) | Lets teams operate terminal agents from messaging tools instead of requiring everyone to sit inside a shell |
| Tool registry | [Official MCP Registry](https://modelcontextprotocol.io/registry/about) · [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Standardizes discovery and installation of external tools that research agents depend on |

This is not "another Claw," but it changes how Claws spread: through registries, compatibility layers, packaging paths, and remote-control surfaces rather than only monolithic apps.

---

## Which Part Should You Start With

| If you want... | Start here |
|---|---|
| The main runtime and gateway | OpenClaw |
| A public registry for skills and plugins | ClawHub |
| To reuse Claude / Cursor / Codex bundles | OpenClaw Plugin Bundles |
| Declarative deployment and rollback | nix-openclaw |
| A grounded research workspace | InnoClaw |
| A practical personal research assistant | ResearchClaw |
| A local paper-reading surface | ResearchClaw Desktop App |
| A more research-specialized evolving scientist | ScienceClaw |
| Learning and evolution infrastructure | MetaClaw |
| Full idea-to-paper autonomy | AutoResearchClaw |

---

## Reading Trail

1. Read [Tools & Platforms](./tools.md) for the broader research tool stack.
2. Read [Systems](./systems.md) if you care about end-to-end autonomous research.
3. Read [Vibe Coding](./vibe-coding.md) if your next question is how these systems actually execute code and repo work.

---

> **Home**: [README](../README.md) · **Prev**: [Tools & Platforms](./tools.md) · **Next**: [Vibe Coding](./vibe-coding.md)
