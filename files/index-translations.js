const translations = {
  en: {
    title: "Vibe Research Guide",
    subtitle: "A curated multilingual guide for Vibe Research, the Claw ecosystem, Vibe Coding, and adjacent prompt-native workflows.",
    topicLanguageNote: "This landing page is fully localized. Linked topic pages are currently English-first.",
    quickstart: "Quick Start",
    quickstartSteps: [
      "If you are new to the field, start from Getting Started and Tools & Platforms.",
      "If you are comparing Claw projects, go straight to Claw Park.",
      "If you care about execution, read Vibe Coding after the main research pages."
    ],
    heroLabels: ["Getting Started", "Tools & Platforms", "Claw Park", "Vibe Coding"],
    toc: "Table of Contents",
    whatIs: "What is Vibe Research?",
    whatIsDesc: "Vibe Research studies how LLM-based agents can support or automate the research loop: literature review, idea generation, experiment execution, writing, and evaluation.",
    glance: "At A Glance",
    glanceCards: {
      coreQuestion: ["Core Question", "How far can AI move from research assistant to research operator?"],
      shift2026: ["2026 Shift", "Copilots got stronger, learning layers became real, research systems got more credible, and coding agents became the execution layer."],
      useRepo: ["How To Use This Repo", "Treat this page as a map and the topic pages as the actual guide."]
    },
    snapshot: "2026 Landscape Snapshot",
    snapshotItems: [
      "Research copilots are getting stronger through Deep Research, NotebookLM-style source grounding, and scientific workspaces such as Prism.",
      "Learning, RL, and self-evolving agents are becoming a distinct stack layer through Agent Lightning, Agent0, AgentEvolver, EvoAgentX, and persistent-memory systems such as Acontext.",
      "Autonomous research systems are maturing through AI Scientist-v2, Agent Laboratory, EvoScientist, and public AI-scientist platforms such as FutureHouse Platform and Edison Scientific.",
      "Vibe Coding is becoming the execution layer for research automation, especially when agents need to inspect repos, edit files, and run experiments."
    ],
    beyondResearch: "Beyond The Research Core",
    beyondResearchNote: "Vibe Research stays at the center of this repo, but the field now also depends on personal assistants, agent-native software surfaces, and companion UX around coding agents.",
    beyondResearchRows: {
      assistants: ["Personal agent assistants", "Shows the messaging-native, knowledge-native, and workspace-native assistant layer growing around research."],
      software: ["Agent-native software / harnesses", "Shows how CLIs, registries, chat bridges, and harness layers are turning existing software into agent-operable surfaces."],
      companion: ["Companion apps & coding UX", "Shows the monitor / approve / jump-back layer emerging around long-running coding agents."]
    },
    learning: "Learning, RL & Self-Evolving Agents",
    learningNote: "The stack is no longer only about agents that can use tools. A separate learning layer is emerging around training, online improvement, evolving workflows, and persistent reusable skills.",
    learningRows: {
      training: ["Agent training / optimization", "Brings RL, automatic prompt optimization, and SFT to arbitrary agent systems with near-zero code changes."],
      zeroData: ["Zero-data self-evolution", "Shows how agents can generate tasks, feedback, and training signal from their own exploration."],
      workflow: ["Workflow evolution", "Pushes optimization from single prompts toward whole workflows and scientist loops."],
      memory: ["Skill & memory substrate", "Turns memory, reusable skills, and persistent context into part of the agent-improvement stack."],
      map: ["Landscape map", "Best compact map of the broader literature and repo landscape for self-evolving agents."]
    },
    paths: "Choose a Path",
    startLabel: "Start",
    thenLabel: "Then",
    pathLabels: {
      newcomer: "New to Vibe Research",
      builder: "Developer / Builder",
      researcher: "Researcher",
      creator: "Creator / Operator"
    },
    ecosystem: "Ecosystem Snapshot",
    representativeLabel: "Representative",
    ecosystemRows: {
      copilots: ["Research copilots", "Fast reading, synthesis, and writing assistance."],
      systems: ["Research systems", "End-to-end research assistance and automation."],
      platforms: ["AI scientist platforms", "Shows the field moving from papers and demos to persistent public or commercial platform surfaces."],
      learning: ["Learning / self-evolving layer", "Turns agent training, self-generated data, evolving workflows, and persistent memory into a real stack layer."],
      claw: ["Claw ecosystem", "Covers gateway, registry, compatibility, deployment, research surfaces, scientific specialization, and autonomous pipelines."],
      execution: ["Execution layer", "Repo and coding workflows that power execution."],
      adjacent: ["Adjacent tools", "Useful prototyping tools outside the research core."]
    },
    clawStack: "Claw Family Layers",
    clawStackNote: "The Claw family is now a stack: runtime, registry, bundle compatibility, deployment, research surfaces, specialist layers, and autonomy.",
    clawStackRows: {
      foundation: ["Gateway / foundation", "Core runtime, control surface, and the main ecosystem entry point."],
      registry: ["Registry / discovery", "Search, publish, compare, and install skills and plugins."],
      bundles: ["Compatibility / bundles", "Reuse Codex, Claude, and Cursor bundle formats inside OpenClaw."],
      deployment: ["Deployment / packaging", "Reproducible installation, upgrades, and rollback for self-hosted setups."],
      surfaces: ["Research surfaces", "Covers workspaces, daily copilots, and reading-focused surfaces."],
      specialist: ["Scientific specialist / evolution", "Pushes deeper into scientific specialization, memory, and online learning."],
      autonomy: ["Autonomous pipeline", "The maximum-autonomy idea-to-paper direction."]
    },
    connectors: "Plugins, Bridges & Research Connectors",
    connectorNote: "A new layer now sits between the agent and the workflow: plugin surfaces, registries, skill catalogs, and chat bridges.",
    connectorRows: {
      bridge: ["Bridge & control surfaces", "Operate coding and research agents from Feishu/Lark, Slack, Telegram, and similar chat apps."],
      plugin: ["Plugin layer", "Agent ecosystems are moving toward skill marketplaces, bundle compatibility, and reusable capability packs."],
      memory: ["Learning / memory substrate", "Persistent context and reusable skills are starting to function like infrastructure for agent improvement."],
      registry: ["Registry & discovery", "Discovery and installation are becoming first-class parts of the ecosystem."],
      research: ["Research connectors", "Agents can connect directly to literature graphs, code artifacts, and benchmark metadata."]
    },
    ccSignals: "Recent Claude Code Signals",
    ccSignalNote: "The Claude Code layer is rapidly expanding beyond the core binary into skills, marketplaces, routing, multi-agent ops, and structured workflow frameworks.",
    ccSignalRows: {
      skills: ["Official skills layer", "Anthropic is turning public Agent Skills into a reusable Claude Code capability source."],
      community: ["Community marketplace", "A large community ecosystem for Claude Code agents, commands, hooks, and skills."],
      framework: ["Meta-framework layer", "Shows how users are wrapping Claude Code with personas, commands, and workflow conventions."],
      ops: ["Routing and ops layer", "Routing, multi-agent management, task systems, and repo packaging are becoming execution infrastructure."]
    },
    guides: "Guide Map",
    guideTopic: "Topic",
    guideLink: "Link",
    guideTrackLabels: {
      gettingStarted: "Getting Started",
      tools: "Tools & Platforms",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Systems",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "An ecosystem map for what each Claw project is building and where it fits.",
    clawSection: "Claw Family Preview",
    clawNote: "Use Claw Park when the names start to blur together. The key is to separate runtime, registry, deployment, research surfaces, and autonomy.",
    clawProject: "Project",
    clawLayer: "Layer",
    clawLayerNames: {
      foundation: "Gateway / foundation",
      registry: "Registry / discovery",
      bundles: "Compatibility / bundles",
      deployment: "Deployment / packaging",
      workspace: "Research workspace",
      copilot: "Daily research copilot",
      desktop: "Desktop / reading surface",
      scientist: "Scientific specialist",
      evolution: "Evolution layer",
      autonomy: "Autonomous pipeline"
    },
    featured: "Featured Projects",
    readingModes: "Reading Modes",
    readingModeCards: {
      field: ["Read The Field", "Surveys · Systems · Benchmarks"],
      stack: ["Build The Stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Prototype Beyond Research", "Vibe Anything"]
    },
    contribute: "How to Contribute",
    contributeItems: [
      "Suggest a resource via the Resource Suggestion issue template.",
      "Submit updates through Pull Requests with clear metadata.",
      "Follow the curation guidelines in docs/curation-guidelines.md."
    ],
    changelog: "Recent Updates",
    changelogText: "2026-W17: expanded Claw coverage into a fuller family map, added real multilingual landing-page localization, and clarified that deeper topic pages remain English for now.",
    license: "License",
    licenseText: "MIT (see LICENSE)."
  },
  zh: {
    title: "Vibe Research 技术指南",
    subtitle: "一个面向 Vibe Research、Claw 生态、Vibe Coding 与周边 prompt-native 工作流的多语言指南。",
    topicLanguageNote: "这个入口页已做完整本地化；深入链接的 topic 页面目前仍以英文为主。",
    quickstart: "快速开始",
    quickstartSteps: [
      "如果你刚入门，先看 Getting Started 和 Tools & Platforms。",
      "如果你在比较不同 Claw 项目，直接看 Claw Park。",
      "如果你关心执行层，读完科研主线后再看 Vibe Coding。"
    ],
    heroLabels: ["入门", "工具与平台", "Claw Park", "Vibe Coding"],
    toc: "目录",
    whatIs: "什么是 Vibe Research？",
    whatIsDesc: "Vibe Research 研究 LLM Agent 如何支持或自动化科研闭环：文献综述、idea 生成、实验执行、论文写作与评测。",
    glance: "快速理解",
    glanceCards: {
      coreQuestion: ["核心问题", "AI 能在多大程度上从研究助手走向研究执行者？"],
      shift2026: ["2026 的变化", "copilot 更强了，learning layer 开始成形了，研究系统更可信了，coding agent 成了执行层。"],
      useRepo: ["这个仓库怎么用", "把这个页面当地图，把 topic 页面当真正的指南。"]
    },
    snapshot: "2026 版图速览",
    snapshotItems: [
      "Research copilot 正在变强，Deep Research、NotebookLM 式溯源阅读和 Prism 这类科学写作空间正在加速文献综合。",
      "Learning、RL 和 self-evolving agents 正在变成独立的一层，代表项目包括 Agent Lightning、Agent0、AgentEvolver、EvoAgentX，以及 Acontext 这类持久记忆系统。",
      "自主科研系统正在成熟，AI Scientist-v2、Agent Laboratory、EvoScientist，以及 FutureHouse Platform、Edison Scientific 这类平台化方向，正在把系统推进到更强的 ideation、execution 和 evaluation。",
      "Vibe Coding 正成为研究自动化的执行层，因为 agent 越来越需要真实地读 repo、改文件和跑实验。"
    ],
    beyondResearch: "超出科研核心的 Agent 生态",
    beyondResearchNote: "这个仓库仍然以 Vibe Research 为中心，但现在这个领域已经同时依赖个人助手、agent-native 软件层，以及围绕 coding agent 长出来的 companion UX。",
    beyondResearchRows: {
      assistants: ["个人 Agent 助手", "说明 research 周围正在长出 messaging-native、knowledge-native 和 workspace-native 的助手层。"],
      software: ["Agent-native 软件 / harnesses", "说明 CLI、registry、聊天桥接层和 harness 层正在把已有软件变成 agent 可调用的表面。"],
      companion: ["Companion Apps 与 Coding UX", "说明围绕长时间运行的 coding agent，monitor / approve / jump-back 这一层正在形成。"]
    },
    learning: "Learning、RL 与自进化 Agent",
    learningNote: "现在这条栈不再只是“会调用工具的 agent”。围绕训练、在线优化、workflow 演化和持久技能记忆，已经开始形成单独的 learning layer。",
    learningRows: {
      training: ["Agent 训练 / 优化", "把 RL、自动 prompt 优化和 SFT 带到任意 agent 系统里，且几乎不需要大改代码。"],
      zeroData: ["零数据自进化", "说明 agent 可以依靠自己的探索来生成任务、反馈和训练信号。"],
      workflow: ["Workflow 演化", "把优化对象从单个 prompt 推到整条 workflow 和 scientist loop。"],
      memory: ["技能与记忆底座", "让 memory、可复用 skills 和持久 context 成为 agent 改进栈的一部分。"],
      map: ["版图地图", "目前最适合作为 self-evolving agent 方向总览的 GitHub 地图。"]
    },
    paths: "选择路径",
    startLabel: "先看",
    thenLabel: "然后读",
    pathLabels: {
      newcomer: "刚入门 Vibe Research",
      builder: "开发者 / Builder",
      researcher: "研究者",
      creator: "Creator / Operator"
    },
    ecosystem: "生态速览",
    representativeLabel: "代表项目",
    ecosystemRows: {
      copilots: ["Research copilots", "更快的阅读、综合和科学写作辅助。"],
      systems: ["Research systems", "端到端科研辅助和自动化。"],
      platforms: ["AI scientist platforms", "说明这个领域正在从论文和 demo 走向长期存在的平台和产品表面。"],
      learning: ["Learning / self-evolving layer", "把 agent 训练、自生成数据、workflow 演化和持久记忆变成真正的独立层。"],
      claw: ["Claw ecosystem", "覆盖 gateway、registry、compatibility、deployment、research surfaces、scientific specialization 与 autonomy。"],
      execution: ["Execution layer", "支撑执行的 repo 与 coding workflow 层。"],
      adjacent: ["Adjacent tools", "对原型有用，但不属于科研主线。"]
    },
    clawStack: "Claw 家族分层",
    clawStackNote: "Claw 现在已经不是单个产品，而是一套栈：runtime、registry、bundle compatibility、deployment、research surfaces、specialist layers 和 autonomy。",
    clawStackRows: {
      foundation: ["Gateway / foundation", "核心 runtime、控制层，以及整个生态的主入口。"],
      registry: ["Registry / discovery", "负责搜索、发布、比较和安装技能与插件。"],
      bundles: ["Compatibility / bundles", "让 Codex、Claude、Cursor 的 bundle 形式可以在 OpenClaw 内复用。"],
      deployment: ["Deployment / packaging", "为自托管提供可复现的安装、升级和回滚路径。"],
      surfaces: ["Research surfaces", "覆盖 workspace、daily copilot 和阅读型界面。"],
      specialist: ["Scientific specialist / evolution", "更深入地走向科研专业化、记忆和在线学习。"],
      autonomy: ["Autonomous pipeline", "代表最高自治度的 idea-to-paper 方向。"]
    },
    connectors: "插件、桥接层与研究连接器",
    connectorNote: "现在在 agent 和 workflow 之间，已经出现了一层新的生态：插件接口、注册表、skill 目录，以及聊天控制桥接层。",
    connectorRows: {
      bridge: ["Bridge & control surfaces", "把 coding agent 和 research agent 放到飞书/Lark、Slack、Telegram 这类聊天界面里运行。"],
      plugin: ["Plugin layer", "agent 生态正在从单一工具变成 skill marketplace、bundle compatibility 和可复用能力包。"],
      memory: ["Learning / memory substrate", "持久 context 和可复用 skills 正在开始承担 agent 改进基础设施的角色。"],
      registry: ["Registry & discovery", "发现和安装外部工具，正在成为生态里的独立能力层。"],
      research: ["Research connectors", "让 agent 直接连到文献图谱、代码资产与 benchmark 元数据。"]
    },
    ccSignals: "最近的 Claude Code 生态信号",
    ccSignalNote: "Claude Code 这一层正在快速从核心二进制扩展成技能层、市场层、路由层、多 agent 运维层，以及结构化工作流框架。",
    ccSignalRows: {
      skills: ["官方技能层", "Anthropic 正在把公开 Agent Skills 变成可复用的 Claude Code 能力来源。"],
      community: ["社区市场层", "一个很强的 Claude Code agents / commands / hooks / skills 社区生态。"],
      framework: ["元框架层", "说明用户已经开始用 persona、commands 和 workflow convention 来包装 Claude Code。"],
      ops: ["路由与运维层", "routing、多 agent 管理、任务系统、repo 打包正在变成执行基础设施。"]
    },
    guides: "Guide 地图",
    guideTopic: "主题",
    guideLink: "链接",
    guideTrackLabels: {
      gettingStarted: "入门",
      tools: "工具与平台",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "综述",
      systems: "系统",
      benchmarks: "评测",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "解释每个 Claw 在做什么，以及它在生态中的位置。",
    clawSection: "Claw 家族预览",
    clawNote: "当你开始分不清各种 Claw 名字时，就看这个版块。关键是把 runtime、registry、deployment、research surfaces 和 autonomy 分开。",
    clawProject: "项目",
    clawLayer: "层级",
    clawLayerNames: {
      foundation: "Gateway / foundation",
      registry: "Registry / discovery",
      bundles: "Compatibility / bundles",
      deployment: "Deployment / packaging",
      workspace: "Research workspace",
      copilot: "Daily research copilot",
      desktop: "Desktop / reading surface",
      scientist: "Scientific specialist",
      evolution: "Evolution layer",
      autonomy: "Autonomous pipeline"
    },
    featured: "重点项目",
    readingModes: "阅读模式",
    readingModeCards: {
      field: ["读懂这个领域", "Surveys · Systems · Benchmarks"],
      stack: ["搭建执行栈", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["做科研以外的原型", "Vibe Anything"]
    },
    contribute: "如何贡献",
    contributeItems: [
      "通过 Resource Suggestion issue 模板提交资源。",
      "通过 Pull Request 提交更新并附清晰元数据。",
      "遵循 docs/curation-guidelines.md 中的选编标准。"
    ],
    changelog: "最近更新",
    changelogText: "2026-W17：补强 Claw 家族地图，加入真实多语言首页，并明确深层 topic 页面暂时仍以英文为主。",
    license: "许可证",
    licenseText: "MIT（见 LICENSE）。"
  },
  ko: {
    title: "Vibe Research 가이드",
    subtitle: "Vibe Research, Claw 생태계, Vibe Coding, 그리고 인접한 프롬프트 네이티브 워크플로를 위한 다국어 가이드입니다.",
    topicLanguageNote: "이 랜딩 페이지는 현지화되어 있습니다. 연결된 topic 페이지는 현재 영어 중심입니다.",
    quickstart: "빠른 시작",
    quickstartSteps: [
      "처음이라면 Getting Started와 Tools & Platforms부터 보세요.",
      "Claw 프로젝트를 비교하려면 바로 Claw Park로 가세요.",
      "실행 계층이 중요하다면 연구 메인 페이지 다음에 Vibe Coding을 읽으세요."
    ],
    heroLabels: ["시작하기", "도구와 플랫폼", "Claw Park", "Vibe Coding"],
    toc: "목차",
    whatIs: "Vibe Research란?",
    whatIsDesc: "Vibe Research는 LLM 에이전트가 문헌 조사, 아이디어 생성, 실험 실행, 글쓰기, 평가 같은 연구 루프를 어떻게 지원하거나 자동화할 수 있는지 다룹니다.",
    glance: "한눈에 보기",
    glanceCards: {
      coreQuestion: ["핵심 질문", "AI는 연구 보조자에서 연구 실행자로 얼마나 멀리 갈 수 있을까?"],
      shift2026: ["2026 변화", "코파일럿은 더 강해졌고, 학습 계층이 현실화되었으며, 코딩 에이전트는 실행 계층이 되었습니다."],
      useRepo: ["이 저장소 사용법", "이 페이지는 지도처럼, topic 페이지는 실제 가이드처럼 사용하세요."]
    },
    snapshot: "2026 지형도",
    snapshotItems: [
      "Deep Research, NotebookLM 스타일의 출처 기반 읽기, Prism 같은 과학 작업공간을 통해 연구 코파일럿이 강해지고 있습니다.",
      "Agent Lightning, Agent0, AgentEvolver, EvoAgentX, Acontext 같은 프로젝트를 통해 학습, RL, 자기 진화 에이전트가 독립적인 계층이 되고 있습니다.",
      "AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform, Edison Scientific을 통해 자율 연구 시스템이 성숙하고 있습니다.",
      "에이전트가 실제로 저장소를 읽고 파일을 수정하고 실험을 실행해야 하므로 Vibe Coding이 연구 자동화의 실행 계층이 되고 있습니다."
    ],
    learning: "학습, RL & 자기 진화 에이전트",
    learningNote: "이제 스택은 단순히 도구를 쓰는 에이전트만의 문제가 아닙니다. 학습, 온라인 개선, 워크플로 진화, 재사용 가능한 지속 메모리를 둘러싼 별도 계층이 생기고 있습니다.",
    learningRows: {
      training: ["에이전트 학습 / 최적화", "거의 코드 수정 없이 임의의 에이전트 시스템에 RL, 자동 프롬프트 최적화, SFT를 도입합니다."],
      zeroData: ["제로데이터 자기 진화", "에이전트가 스스로의 탐색에서 과제, 피드백, 학습 신호를 만들 수 있음을 보여줍니다."],
      workflow: ["워크플로 진화", "최적화 대상을 단일 프롬프트에서 전체 워크플로와 과학자 루프로 확장합니다."],
      memory: ["기술 / 메모리 기반", "메모리, 재사용 가능한 기술, 지속 컨텍스트를 에이전트 개선 스택의 일부로 만듭니다."],
      map: ["지형도", "자기 진화 에이전트 문헌과 저장소를 가장 간결하게 보여주는 지도입니다."]
    },
    paths: "경로 선택",
    startLabel: "먼저",
    thenLabel: "다음",
    pathLabels: {
      newcomer: "Vibe Research 입문자",
      builder: "개발자 / 빌더",
      researcher: "연구자",
      creator: "크리에이터 / 운영자"
    },
    ecosystem: "생태계 개요",
    representativeLabel: "대표",
    ecosystemRows: {
      copilots: ["연구 코파일럿", "빠른 읽기, 요약, 과학 글쓰기 지원."],
      systems: ["연구 시스템", "종단간 연구 지원과 자동화."],
      platforms: ["AI scientist 플랫폼", "이 분야가 논문과 데모에서 지속적인 플랫폼 표면으로 이동하고 있음을 보여줍니다."],
      learning: ["학습 / 자기 진화 계층", "에이전트 학습, 자기 생성 데이터, 워크플로 진화, 지속 메모리를 실제 계층으로 만듭니다."],
      claw: ["Claw 생태계", "게이트웨이, 레지스트리, 호환성, 배포, 연구 표면, 과학 특화, 자율 파이프라인을 포괄합니다."],
      execution: ["실행 계층", "실행을 떠받치는 저장소 및 코딩 워크플로."],
      adjacent: ["인접 도구", "연구 핵심 밖의 유용한 프로토타이핑 도구."]
    },
    clawStack: "Claw 패밀리 계층",
    clawStackNote: "Claw는 이제 단일 제품이 아니라 런타임, 레지스트리, 번들 호환성, 배포, 연구 표면, 특화 계층, 자율성으로 이루어진 스택입니다.",
    clawStackRows: {
      foundation: ["게이트웨이 / 기반", "중심 런타임, 제어 표면, 생태계의 주 진입점."],
      registry: ["레지스트리 / 탐색", "스킬과 플러그인을 검색, 게시, 비교, 설치합니다."],
      bundles: ["호환성 / 번들", "Codex, Claude, Cursor 번들을 OpenClaw 안에서 재사용합니다."],
      deployment: ["배포 / 패키징", "셀프호스팅 환경을 위한 재현 가능한 설치, 업그레이드, 롤백."],
      surfaces: ["연구 표면", "워크스페이스, 일상 코파일럿, 읽기 중심 표면을 포괄합니다."],
      specialist: ["과학 특화 / 진화", "과학 특화, 메모리, 온라인 학습을 더 깊게 밀어붙입니다."],
      autonomy: ["자율 파이프라인", "가장 높은 자율성의 idea-to-paper 방향."]
    },
    connectors: "플러그인, 브리지, 연구 커넥터",
    connectorNote: "이제 에이전트와 워크플로 사이에는 플러그인 표면, 레지스트리, 스킬 카탈로그, 채팅 브리지가 놓여 있습니다.",
    connectorRows: {
      bridge: ["브리지 / 제어 표면", "Feishu/Lark, Slack, Telegram 같은 채팅 앱에서 코딩 및 연구 에이전트를 운영합니다."],
      plugin: ["플러그인 계층", "에이전트 생태계가 스킬 마켓플레이스, 번들 호환성, 재사용 가능한 기능 팩으로 이동하고 있습니다."],
      memory: ["학습 / 메모리 기반", "지속 컨텍스트와 재사용 가능한 기술이 에이전트 개선 인프라가 되기 시작했습니다."],
      registry: ["레지스트리 / 탐색", "탐색과 설치가 생태계의 1급 요소가 되고 있습니다."],
      research: ["연구 커넥터", "에이전트가 문헌 그래프, 코드 자산, 벤치마크 메타데이터에 직접 연결됩니다."]
    },
    ccSignals: "최근 Claude Code 신호",
    ccSignalNote: "Claude Code 계층은 핵심 바이너리를 넘어 스킬, 마켓플레이스, 라우팅, 멀티에이전트 운영, 구조화된 워크플로 프레임워크로 빠르게 확장되고 있습니다.",
    ccSignalRows: {
      skills: ["공식 스킬 계층", "Anthropic은 공개 Agent Skills를 재사용 가능한 Claude Code 역량 소스로 만들고 있습니다."],
      community: ["커뮤니티 마켓플레이스", "Claude Code 에이전트, 명령, 훅, 스킬을 위한 큰 커뮤니티 생태계입니다."],
      framework: ["메타 프레임워크 계층", "사용자들이 Claude Code 위에 페르소나, 명령, 워크플로 규약을 씌우고 있음을 보여줍니다."],
      ops: ["라우팅 및 운영 계층", "라우팅, 멀티에이전트 관리, 작업 시스템, 저장소 패키징이 실행 인프라가 되고 있습니다."]
    },
    guides: "가이드 맵",
    guideTopic: "주제",
    guideLink: "링크",
    guideTrackLabels: {
      gettingStarted: "시작하기",
      tools: "도구와 플랫폼",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "서베이",
      systems: "시스템",
      benchmarks: "벤치마크",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "각 Claw 프로젝트가 무엇을 만들고 어디에 위치하는지 보여주는 생태계 지도입니다.",
    clawSection: "Claw 패밀리 미리보기",
    clawNote: "이름이 헷갈리기 시작하면 Claw Park를 보세요. 런타임, 레지스트리, 배포, 연구 표면, 자율성을 분리하는 것이 핵심입니다.",
    clawProject: "프로젝트",
    clawLayer: "계층",
    clawLayerNames: {
      foundation: "게이트웨이 / 기반",
      registry: "레지스트리 / 탐색",
      bundles: "호환성 / 번들",
      deployment: "배포 / 패키징",
      workspace: "연구 워크스페이스",
      copilot: "일상 연구 코파일럿",
      desktop: "데스크톱 / 읽기 표면",
      scientist: "과학 특화",
      evolution: "진화 계층",
      autonomy: "자율 파이프라인"
    },
    featured: "주요 프로젝트",
    readingModes: "읽기 모드",
    readingModeCards: {
      field: ["분야 읽기", "Surveys · Systems · Benchmarks"],
      stack: ["스택 구축", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["연구 밖 프로토타입", "Vibe Anything"]
    },
    contribute: "기여 방법",
    contributeItems: [
      "Resource Suggestion 이슈 템플릿으로 자료를 제안하세요.",
      "명확한 메타데이터와 함께 Pull Request로 업데이트를 제출하세요.",
      "docs/curation-guidelines.md의 선별 기준을 따르세요."
    ],
    changelog: "최근 업데이트",
    changelogText: "2026-W17: Claw 패밀리 지도를 확장하고, 실제 다국어 랜딩 페이지를 추가했으며, 상세 topic 페이지는 현재 영어 중심임을 명확히 했습니다.",
    license: "라이선스",
    licenseText: "MIT (LICENSE 참조)."
  },
  ja: {
    title: "Vibe Research ガイド",
    subtitle: "Vibe Research、Claw エコシステム、Vibe Coding、そして周辺のプロンプトネイティブなワークフローのための多言語ガイドです。",
    topicLanguageNote: "このランディングページは各言語に対応しています。リンク先の topic ページは現在英語が中心です。",
    quickstart: "クイックスタート",
    quickstartSteps: [
      "初めてなら、まず Getting Started と Tools & Platforms を見てください。",
      "Claw プロジェクトを比較したいなら、そのまま Claw Park へ進んでください。",
      "実行レイヤーに関心があるなら、研究本編の後に Vibe Coding を読んでください。"
    ],
    heroLabels: ["はじめに", "ツールとプラットフォーム", "Claw Park", "Vibe Coding"],
    toc: "目次",
    whatIs: "Vibe Research とは？",
    whatIsDesc: "Vibe Research は、LLM ベースのエージェントが文献調査、アイデア生成、実験実行、執筆、評価といった研究ループをどのように支援・自動化できるかを扱います。",
    glance: "ひと目でわかること",
    glanceCards: {
      coreQuestion: ["核心的な問い", "AI は研究アシスタントから研究オペレーターへ、どこまで進めるのか？"],
      shift2026: ["2026 年の変化", "コパイロットは強くなり、学習レイヤーが現実化し、コーディングエージェントは実行レイヤーになりました。"],
      useRepo: ["このリポジトリの使い方", "このページを地図として、topic ページを実際のガイドとして使ってください。"]
    },
    snapshot: "2026 年のランドスケープ",
    snapshotItems: [
      "Deep Research、NotebookLM 的な出典重視の読解、Prism のような科学ワークスペースによって研究コパイロットは強くなっています。",
      "Agent Lightning、Agent0、AgentEvolver、EvoAgentX、Acontext などにより、学習・RL・自己進化エージェントは独立したレイヤーになりつつあります。",
      "AI Scientist-v2、Agent Laboratory、EvoScientist、FutureHouse Platform、Edison Scientific により、自律的研究システムは成熟しつつあります。",
      "エージェントが実際にリポジトリを読み、ファイルを編集し、実験を回す必要があるため、Vibe Coding は研究自動化の実行レイヤーになっています。"
    ],
    learning: "学習、RL、自己進化エージェント",
    learningNote: "スタックはもはや単にツールを使えるエージェントだけではありません。学習、オンライン改善、ワークフロー進化、再利用可能な永続メモリをめぐる別レイヤーが立ち上がっています。",
    learningRows: {
      training: ["エージェント学習 / 最適化", "ほぼコード変更なしで、任意のエージェントシステムに RL、自動プロンプト最適化、SFT を持ち込みます。"],
      zeroData: ["ゼロデータ自己進化", "エージェントが自らの探索からタスク、フィードバック、学習信号を生成できることを示します。"],
      workflow: ["ワークフロー進化", "最適化の対象を単一プロンプトから、ワークフロー全体や scientist loop へ広げます。"],
      memory: ["スキル / メモリ基盤", "メモリ、再利用可能なスキル、永続コンテキストをエージェント改善スタックの一部にします。"],
      map: ["ランドスケープマップ", "自己進化エージェントの文献とリポジトリを最もコンパクトに見渡せる地図です。"]
    },
    paths: "読むルートを選ぶ",
    startLabel: "最初に",
    thenLabel: "次に",
    pathLabels: {
      newcomer: "Vibe Research 初学者",
      builder: "開発者 / ビルダー",
      researcher: "研究者",
      creator: "クリエイター / オペレーター"
    },
    ecosystem: "エコシステム概要",
    representativeLabel: "代表例",
    ecosystemRows: {
      copilots: ["研究コパイロット", "高速な読解、要約、科学ライティング支援。"],
      systems: ["研究システム", "エンドツーエンドの研究支援と自動化。"],
      platforms: ["AI scientist プラットフォーム", "この分野が論文やデモから持続的なプラットフォームへ移っていることを示します。"],
      learning: ["学習 / 自己進化レイヤー", "エージェント学習、自己生成データ、ワークフロー進化、永続メモリを実際のレイヤーにします。"],
      claw: ["Claw エコシステム", "ゲートウェイ、レジストリ、互換性、デプロイ、研究面、科学特化、自律パイプラインを含みます。"],
      execution: ["実行レイヤー", "実行を支えるリポジトリとコーディングのワークフロー。"],
      adjacent: ["隣接ツール", "研究の中核外にある有用なプロトタイピングツール。"]
    },
    clawStack: "Claw ファミリーのレイヤー",
    clawStackNote: "Claw はもはや単一製品ではなく、ランタイム、レジストリ、bundle 互換、デプロイ、研究サーフェス、特化レイヤー、自律性から成るスタックです。",
    clawStackRows: {
      foundation: ["ゲートウェイ / 基盤", "中核ランタイム、制御面、エコシステムの主入口。"],
      registry: ["レジストリ / 発見", "スキルやプラグインを検索、公開、比較、インストールします。"],
      bundles: ["互換性 / bundles", "Codex、Claude、Cursor の bundle 形式を OpenClaw 内で再利用します。"],
      deployment: ["デプロイ / パッケージング", "セルフホスト環境向けに再現可能な導入、更新、ロールバックを提供します。"],
      surfaces: ["研究サーフェス", "ワークスペース、日常のコパイロット、読書中心のサーフェスを含みます。"],
      specialist: ["科学特化 / 進化", "科学特化、メモリ、オンライン学習をより深く押し進めます。"],
      autonomy: ["自律パイプライン", "最も自律度の高い idea-to-paper 方向です。"]
    },
    connectors: "プラグイン、ブリッジ、研究コネクタ",
    connectorNote: "いまやエージェントとワークフローの間には、プラグイン面、レジストリ、スキルカタログ、チャットブリッジという新しいレイヤーがあります。",
    connectorRows: {
      bridge: ["ブリッジ / 制御面", "Feishu/Lark、Slack、Telegram などのチャットアプリからコーディングや研究エージェントを動かせます。"],
      plugin: ["プラグイン層", "エージェントのエコシステムは、スキル市場、bundle 互換、再利用可能な機能パックへ向かっています。"],
      memory: ["学習 / メモリ基盤", "永続コンテキストと再利用可能なスキルが、エージェント改善のインフラになり始めています。"],
      registry: ["レジストリ / 発見", "発見と導入はエコシステムの第一級要素になりつつあります。"],
      research: ["研究コネクタ", "エージェントが文献グラフ、コード資産、ベンチマークメタデータへ直接接続できます。"]
    },
    ccSignals: "最近の Claude Code シグナル",
    ccSignalNote: "Claude Code のレイヤーは、コアバイナリを超えてスキル、市場、ルーティング、マルチエージェント運用、構造化ワークフローへ急速に広がっています。",
    ccSignalRows: {
      skills: ["公式スキル層", "Anthropic は公開 Agent Skills を再利用可能な Claude Code 能力ソースへ変えつつあります。"],
      community: ["コミュニティ市場", "Claude Code のエージェント、コマンド、フック、スキルの大きなコミュニティエコシステムです。"],
      framework: ["メタフレームワーク層", "ユーザーが Claude Code に persona、command、workflow convention を被せ始めていることを示します。"],
      ops: ["ルーティング / 運用層", "ルーティング、マルチエージェント管理、タスクシステム、リポジトリパッケージングが実行インフラになりつつあります。"]
    },
    guides: "ガイドマップ",
    guideTopic: "トピック",
    guideLink: "リンク",
    guideTrackLabels: {
      gettingStarted: "はじめに",
      tools: "ツールとプラットフォーム",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "サーベイ",
      systems: "システム",
      benchmarks: "ベンチマーク",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "各 Claw プロジェクトが何を作っているか、そしてどこに位置するかを示すエコシステムマップです。",
    clawSection: "Claw ファミリープレビュー",
    clawNote: "名前が混ざって見えてきたら Claw Park を使ってください。ランタイム、レジストリ、デプロイ、研究サーフェス、自律性を分けて見るのが鍵です。",
    clawProject: "プロジェクト",
    clawLayer: "レイヤー",
    clawLayerNames: {
      foundation: "ゲートウェイ / 基盤",
      registry: "レジストリ / 発見",
      bundles: "互換性 / bundles",
      deployment: "デプロイ / パッケージング",
      workspace: "研究ワークスペース",
      copilot: "日常の研究コパイロット",
      desktop: "デスクトップ / 読書サーフェス",
      scientist: "科学特化",
      evolution: "進化レイヤー",
      autonomy: "自律パイプライン"
    },
    featured: "注目プロジェクト",
    readingModes: "読み方のモード",
    readingModeCards: {
      field: ["分野を読む", "Surveys · Systems · Benchmarks"],
      stack: ["スタックを作る", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["研究外を試作する", "Vibe Anything"]
    },
    contribute: "貢献方法",
    contributeItems: [
      "Resource Suggestion の issue テンプレートから資料を提案してください。",
      "明確なメタデータ付きで Pull Request を送ってください。",
      "docs/curation-guidelines.md のキュレーション方針に従ってください。"
    ],
    changelog: "最近の更新",
    changelogText: "2026-W17: Claw ファミリーマップを拡張し、実際の多言語ランディングページを追加し、詳細 topic ページは現在英語中心であることを明確にしました。",
    license: "ライセンス",
    licenseText: "MIT（LICENSE を参照）。"
  },
  de: {
    title: "Vibe Research Leitfaden",
    subtitle: "Ein mehrsprachiger Leitfaden für Vibe Research, das Claw-Ökosystem, Vibe Coding und angrenzende prompt-native Workflows.",
    topicLanguageNote: "Diese Landingpage ist vollständig lokalisiert. Die verlinkten Topic-Seiten sind derzeit überwiegend auf Englisch.",
    quickstart: "Schnellstart",
    quickstartSteps: [
      "Wenn du neu bist, starte mit Getting Started und Tools & Platforms.",
      "Wenn du Claw-Projekte vergleichen willst, gehe direkt zu Claw Park.",
      "Wenn dich die Ausführungsebene interessiert, lies nach den Forschungsseiten Vibe Coding."
    ],
    heroLabels: ["Einstieg", "Tools & Plattformen", "Claw Park", "Vibe Coding"],
    toc: "Inhaltsverzeichnis",
    whatIs: "Was ist Vibe Research?",
    whatIsDesc: "Vibe Research untersucht, wie LLM-basierte Agenten den Forschungszyklus unterstützen oder automatisieren können: Literaturrecherche, Ideenfindung, Experimentausführung, Schreiben und Bewertung.",
    glance: "Auf einen Blick",
    glanceCards: {
      coreQuestion: ["Kernfrage", "Wie weit kann AI vom Forschungsassistenten zum Forschungsoperator gehen?"],
      shift2026: ["Verschiebung 2026", "Copilots wurden stärker, Lernschichten wurden realer, Forschungssysteme glaubwürdiger und Coding-Agenten wurden zur Ausführungsebene."],
      useRepo: ["So nutzt du dieses Repo", "Nutze diese Seite als Karte und die Topic-Seiten als eigentlichen Leitfaden."]
    },
    snapshot: "Landschaft 2026",
    snapshotItems: [
      "Research-Copilots werden stärker durch Deep Research, quellengestützte Workflows im Stil von NotebookLM und wissenschaftliche Arbeitsräume wie Prism.",
      "Lernen, RL und selbst-evolvierende Agenten werden durch Agent Lightning, Agent0, AgentEvolver, EvoAgentX und Acontext zu einer eigenen Schicht.",
      "Autonome Forschungssysteme reifen durch AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform und Edison Scientific.",
      "Vibe Coding wird zur Ausführungsebene der Forschungsautomatisierung, weil Agenten reale Repos lesen, Dateien ändern und Experimente ausführen müssen."
    ],
    learning: "Lernen, RL & selbst-evolvierende Agenten",
    learningNote: "Der Stack besteht nicht mehr nur aus Agenten, die Werkzeuge benutzen. Eine eigene Schicht für Training, Online-Verbesserung, Workflow-Evolution und persistente wiederverwendbare Skills entsteht.",
    learningRows: {
      training: ["Agenten-Training / Optimierung", "Bringt RL, automatische Prompt-Optimierung und SFT in beliebige Agentensysteme mit nahezu keinen Codeänderungen."],
      zeroData: ["Selbst-Evolution ohne Daten", "Zeigt, dass Agenten Aufgaben, Feedback und Trainingssignale aus ihrer eigenen Exploration erzeugen können."],
      workflow: ["Workflow-Evolution", "Verschiebt die Optimierung von einzelnen Prompts hin zu ganzen Workflows und Scientist-Loops."],
      memory: ["Skill- & Memory-Substrat", "Macht Memory, wiederverwendbare Skills und persistente Kontexte zu einem Teil des Verbesserungs-Stacks."],
      map: ["Landschaftskarte", "Die kompakteste Karte der Literatur und Repos rund um selbst-evolvierende Agenten."]
    },
    paths: "Pfad wählen",
    startLabel: "Start",
    thenLabel: "Dann",
    pathLabels: {
      newcomer: "Neu bei Vibe Research",
      builder: "Entwickler / Builder",
      researcher: "Forscher",
      creator: "Creator / Operator"
    },
    ecosystem: "Ökosystem-Überblick",
    representativeLabel: "Beispiele",
    ecosystemRows: {
      copilots: ["Research-Copilots", "Schnelles Lesen, Synthese und Unterstützung beim wissenschaftlichen Schreiben."],
      systems: ["Forschungssysteme", "End-to-End-Unterstützung und Automatisierung für Forschung."],
      platforms: ["AI-Scientist-Plattformen", "Zeigt die Bewegung von Papern und Demos zu dauerhaften Plattformoberflächen."],
      learning: ["Lern- / Selbst-Evolutions-Schicht", "Macht Agenten-Training, selbst erzeugte Daten, Workflow-Evolution und persistentes Memory zu einer echten Schicht."],
      claw: ["Claw-Ökosystem", "Umfasst Gateway, Registry, Kompatibilität, Deployment, Forschungssurfaces, wissenschaftliche Spezialisierung und autonome Pipelines."],
      execution: ["Ausführungsebene", "Repo- und Coding-Workflows, die die Ausführung tragen."],
      adjacent: ["Benachbarte Tools", "Nützliche Prototyping-Tools außerhalb des Forschungskerns."]
    },
    clawStack: "Claw-Familienebenen",
    clawStackNote: "Die Claw-Familie ist heute ein Stack: Runtime, Registry, Bundle-Kompatibilität, Deployment, Forschungssurfaces, Spezialisierung und Autonomie.",
    clawStackRows: {
      foundation: ["Gateway / Fundament", "Kernruntime, Kontrolloberfläche und Haupteinstieg in das Ökosystem."],
      registry: ["Registry / Discovery", "Skills und Plugins suchen, veröffentlichen, vergleichen und installieren."],
      bundles: ["Kompatibilität / Bundles", "Codex-, Claude- und Cursor-Bundles innerhalb von OpenClaw wiederverwenden."],
      deployment: ["Deployment / Packaging", "Reproduzierbare Installation, Upgrades und Rollback für Self-Hosting."],
      surfaces: ["Research-Surfaces", "Deckt Workspaces, tägliche Copilots und leseorientierte Oberflächen ab."],
      specialist: ["Wissenschaftliche Spezialisierung / Evolution", "Geht tiefer in wissenschaftliche Spezialisierung, Memory und Online-Lernen."],
      autonomy: ["Autonome Pipeline", "Die Richtung mit maximaler Autonomie von Idee bis Paper."]
    },
    connectors: "Plugins, Brücken & Research-Connectoren",
    connectorNote: "Zwischen Agent und Workflow liegt inzwischen eine neue Schicht: Plugin-Oberflächen, Registries, Skill-Kataloge und Chat-Brücken.",
    connectorRows: {
      bridge: ["Brücken & Kontrolloberflächen", "Coding- und Research-Agenten aus Feishu/Lark, Slack, Telegram und ähnlichen Chats betreiben."],
      plugin: ["Plugin-Schicht", "Agenten-Ökosysteme entwickeln sich zu Skill-Marktplätzen, Bundle-Kompatibilität und wiederverwendbaren Capability-Packs."],
      memory: ["Lern- / Memory-Substrat", "Persistenter Kontext und wiederverwendbare Skills werden zu Infrastruktur für Agentenverbesserung."],
      registry: ["Registry & Discovery", "Discovery und Installation werden zu erstklassigen Teilen des Ökosystems."],
      research: ["Research-Connectoren", "Agenten können sich direkt mit Literaturgraphen, Code-Artefakten und Benchmark-Metadaten verbinden."]
    },
    ccSignals: "Aktuelle Claude-Code-Signale",
    ccSignalNote: "Die Claude-Code-Schicht wächst schnell über das Kernbinary hinaus in Richtung Skills, Marktplätze, Routing, Multi-Agent-Ops und strukturierte Workflow-Frameworks.",
    ccSignalRows: {
      skills: ["Offizielle Skill-Schicht", "Anthropic macht öffentliche Agent Skills zu einer wiederverwendbaren Quelle für Claude-Code-Fähigkeiten."],
      community: ["Community-Marktplatz", "Ein großes Community-Ökosystem für Claude-Code-Agenten, Befehle, Hooks und Skills."],
      framework: ["Meta-Framework-Schicht", "Zeigt, wie Nutzer Claude Code mit Personas, Befehlen und Workflow-Konventionen umhüllen."],
      ops: ["Routing- und Ops-Schicht", "Routing, Multi-Agent-Management, Task-Systeme und Repo-Packaging werden zu Ausführungsinfrastruktur."]
    },
    guides: "Guide-Karte",
    guideTopic: "Thema",
    guideLink: "Link",
    guideTrackLabels: {
      gettingStarted: "Einstieg",
      tools: "Tools & Plattformen",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Systeme",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Eine Ökosystemkarte dafür, was jedes Claw-Projekt baut und wo es im Stack sitzt.",
    clawSection: "Claw-Familienvorschau",
    clawNote: "Nutze Claw Park, wenn die Namen ineinander verschwimmen. Entscheidend ist die Trennung von Runtime, Registry, Deployment, Forschungssurfaces und Autonomie.",
    clawProject: "Projekt",
    clawLayer: "Ebene",
    clawLayerNames: {
      foundation: "Gateway / Fundament",
      registry: "Registry / Discovery",
      bundles: "Kompatibilität / Bundles",
      deployment: "Deployment / Packaging",
      workspace: "Forschungs-Workspace",
      copilot: "Täglicher Research-Copilot",
      desktop: "Desktop / Leseoberfläche",
      scientist: "Wissenschaftliche Spezialisierung",
      evolution: "Evolutionsschicht",
      autonomy: "Autonome Pipeline"
    },
    featured: "Hervorgehobene Projekte",
    readingModes: "Lesemodi",
    readingModeCards: {
      field: ["Das Feld lesen", "Surveys · Systems · Benchmarks"],
      stack: ["Den Stack bauen", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Jenseits der Forschung prototypen", "Vibe Anything"]
    },
    contribute: "Mitmachen",
    contributeItems: [
      "Schlage Ressourcen über das Issue-Template Resource Suggestion vor.",
      "Reiche Aktualisierungen per Pull Request mit klaren Metadaten ein.",
      "Folge den Kuratierungsrichtlinien in docs/curation-guidelines.md."
    ],
    changelog: "Neueste Updates",
    changelogText: "2026-W17: Die Claw-Abdeckung wurde zu einer vollständigen Familienkarte ausgebaut, die Landingpage wurde wirklich mehrsprachig, und die tieferen Topic-Seiten bleiben vorerst englisch.",
    license: "Lizenz",
    licenseText: "MIT (siehe LICENSE)."
  },
  fr: {
    title: "Guide Vibe Research",
    subtitle: "Un guide multilingue pour Vibe Research, l'écosystème Claw, Vibe Coding et les workflows prompt-native adjacents.",
    topicLanguageNote: "Cette page d'accueil est réellement localisée. Les pages topic liées restent pour l'instant majoritairement en anglais.",
    quickstart: "Démarrage rapide",
    quickstartSteps: [
      "Si vous débutez, commencez par Getting Started et Tools & Platforms.",
      "Si vous comparez des projets Claw, allez directement à Claw Park.",
      "Si l'execution layer vous intéresse, lisez Vibe Coding après les pages principales sur la recherche."
    ],
    heroLabels: ["Démarrer", "Outils & plateformes", "Claw Park", "Vibe Coding"],
    toc: "Table des matières",
    whatIs: "Qu'est-ce que Vibe Research ?",
    whatIsDesc: "Vibe Research étudie la manière dont des agents fondés sur les LLM peuvent soutenir ou automatiser la boucle de recherche : revue de littérature, génération d'idées, exécution d'expériences, rédaction et évaluation.",
    glance: "En bref",
    glanceCards: {
      coreQuestion: ["Question centrale", "Jusqu'où l'IA peut-elle passer de l'assistant de recherche à l'opérateur de recherche ?"],
      shift2026: ["Bascule 2026", "Les copilots se sont renforcés, les couches d'apprentissage sont devenues réelles, et les coding agents sont devenus la couche d'exécution."],
      useRepo: ["Comment utiliser ce dépôt", "Considérez cette page comme une carte et les pages topic comme le vrai guide."]
    },
    snapshot: "Panorama 2026",
    snapshotItems: [
      "Les copilots de recherche se renforcent grâce à Deep Research, aux lectures ancrées dans les sources à la NotebookLM et aux espaces scientifiques comme Prism.",
      "Les agents d'apprentissage, de RL et d'auto-évolution deviennent une couche distincte avec Agent Lightning, Agent0, AgentEvolver, EvoAgentX et Acontext.",
      "Les systèmes de recherche autonomes mûrissent via AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform et Edison Scientific.",
      "Vibe Coding devient la couche d'exécution de l'automatisation de la recherche, car les agents doivent lire de vrais dépôts, modifier des fichiers et lancer des expériences."
    ],
    learning: "Apprentissage, RL & agents auto-évolutifs",
    learningNote: "Le stack ne se limite plus aux agents qui utilisent des outils. Une couche dédiée à l'entraînement, à l'amélioration en ligne, à l'évolution des workflows et à la mémoire persistante réutilisable émerge.",
    learningRows: {
      training: ["Entraînement / optimisation d'agents", "Apporte RL, optimisation automatique des prompts et SFT à des systèmes d'agents variés avec presque aucun changement de code."],
      zeroData: ["Auto-évolution sans données", "Montre que des agents peuvent générer tâches, feedback et signaux d'entraînement à partir de leur propre exploration."],
      workflow: ["Évolution de workflow", "Déplace l'optimisation d'un prompt unique vers des workflows entiers et des boucles de scientist."],
      memory: ["Substrat skills / mémoire", "Fait de la mémoire, des skills réutilisables et du contexte persistant une partie du stack d'amélioration."],
      map: ["Carte du paysage", "La carte la plus compacte de la littérature et des dépôts sur les agents auto-évolutifs."]
    },
    paths: "Choisir un parcours",
    startLabel: "Commencer par",
    thenLabel: "Puis",
    pathLabels: {
      newcomer: "Débuter en Vibe Research",
      builder: "Développeur / Builder",
      researcher: "Chercheur",
      creator: "Créateur / Opérateur"
    },
    ecosystem: "Vue d'ensemble de l'écosystème",
    representativeLabel: "Exemples",
    ecosystemRows: {
      copilots: ["Research copilots", "Lecture rapide, synthèse et aide à l'écriture scientifique."],
      systems: ["Systèmes de recherche", "Assistance et automatisation de recherche de bout en bout."],
      platforms: ["Plateformes AI scientist", "Montre le passage des papiers et démos vers des surfaces de plateforme durables."],
      learning: ["Couche apprentissage / auto-évolution", "Transforme l'entraînement d'agents, les données auto-générées, l'évolution de workflow et la mémoire persistante en vraie couche."],
      claw: ["Écosystème Claw", "Couvre gateway, registry, compatibilité, déploiement, surfaces de recherche, spécialisation scientifique et pipelines autonomes."],
      execution: ["Couche d'exécution", "Les workflows de dépôt et de code qui portent l'exécution."],
      adjacent: ["Outils adjacents", "Outils utiles de prototypage hors du noyau recherche."]
    },
    clawStack: "Couches de la famille Claw",
    clawStackNote: "La famille Claw est désormais un stack : runtime, registry, compatibilité de bundles, déploiement, surfaces de recherche, couches de spécialisation et autonomie.",
    clawStackRows: {
      foundation: ["Gateway / fondation", "Runtime central, surface de contrôle et point d'entrée principal de l'écosystème."],
      registry: ["Registry / découverte", "Chercher, publier, comparer et installer skills et plugins."],
      bundles: ["Compatibilité / bundles", "Réutiliser les formats de bundles Codex, Claude et Cursor dans OpenClaw."],
      deployment: ["Déploiement / packaging", "Installation, mises à jour et rollback reproductibles pour les déploiements self-hosted."],
      surfaces: ["Surfaces de recherche", "Couvre workspaces, copilots quotidiens et surfaces centrées sur la lecture."],
      specialist: ["Spécialisation scientifique / évolution", "Pousse plus loin la spécialisation scientifique, la mémoire et l'apprentissage en ligne."],
      autonomy: ["Pipeline autonome", "La direction idea-to-paper avec le plus haut niveau d'autonomie."]
    },
    connectors: "Plugins, ponts & connecteurs de recherche",
    connectorNote: "Une nouvelle couche se place désormais entre l'agent et le workflow : surfaces de plugins, registries, catalogues de skills et ponts de chat.",
    connectorRows: {
      bridge: ["Ponts & surfaces de contrôle", "Faire fonctionner des agents de code ou de recherche depuis Feishu/Lark, Slack, Telegram et d'autres chats."],
      plugin: ["Couche plugin", "Les écosystèmes d'agents évoluent vers des marchés de skills, la compatibilité de bundles et des packs de capacités réutilisables."],
      memory: ["Substrat apprentissage / mémoire", "Le contexte persistant et les skills réutilisables commencent à devenir une infrastructure d'amélioration des agents."],
      registry: ["Registry & découverte", "La découverte et l'installation deviennent des parties de premier ordre de l'écosystème."],
      research: ["Connecteurs de recherche", "Les agents peuvent se connecter directement aux graphes de littérature, artefacts de code et métadonnées de benchmarks."]
    },
    ccSignals: "Signaux récents autour de Claude Code",
    ccSignalNote: "La couche Claude Code s'étend rapidement au-delà du binaire central vers des skills, des places de marché, du routing, du multi-agent ops et des frameworks structurés.",
    ccSignalRows: {
      skills: ["Couche officielle de skills", "Anthropic transforme les Agent Skills publics en source réutilisable de capacités Claude Code."],
      community: ["Place de marché communautaire", "Un grand écosystème communautaire pour les agents, commandes, hooks et skills Claude Code."],
      framework: ["Couche méta-framework", "Montre comment les utilisateurs enveloppent Claude Code avec des personas, commandes et conventions de workflow."],
      ops: ["Couche routing et ops", "Le routing, la gestion multi-agent, les systèmes de tâches et le packaging de dépôts deviennent une infrastructure d'exécution."]
    },
    guides: "Carte du guide",
    guideTopic: "Sujet",
    guideLink: "Lien",
    guideTrackLabels: {
      gettingStarted: "Démarrer",
      tools: "Outils & plateformes",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Systèmes",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Une carte de l'écosystème montrant ce que construit chaque projet Claw et où il se situe.",
    clawSection: "Aperçu de la famille Claw",
    clawNote: "Utilisez Claw Park quand les noms commencent à se mélanger. L'essentiel est de séparer runtime, registry, déploiement, surfaces de recherche et autonomie.",
    clawProject: "Projet",
    clawLayer: "Couche",
    clawLayerNames: {
      foundation: "Gateway / fondation",
      registry: "Registry / découverte",
      bundles: "Compatibilité / bundles",
      deployment: "Déploiement / packaging",
      workspace: "Workspace de recherche",
      copilot: "Copilot de recherche quotidien",
      desktop: "Surface desktop / lecture",
      scientist: "Spécialisation scientifique",
      evolution: "Couche d'évolution",
      autonomy: "Pipeline autonome"
    },
    featured: "Projets mis en avant",
    readingModes: "Modes de lecture",
    readingModeCards: {
      field: ["Lire le champ", "Surveys · Systems · Benchmarks"],
      stack: ["Construire le stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Prototyper au-delà de la recherche", "Vibe Anything"]
    },
    contribute: "Comment contribuer",
    contributeItems: [
      "Proposez une ressource via le modèle d'issue Resource Suggestion.",
      "Envoyez les mises à jour via Pull Request avec des métadonnées claires.",
      "Suivez les règles de curation dans docs/curation-guidelines.md."
    ],
    changelog: "Mises à jour récentes",
    changelogText: "2026-W17 : extension de la couverture Claw en carte de famille complète, ajout d'une vraie page d'accueil multilingue et clarification du fait que les pages topic restent en anglais pour l'instant.",
    license: "Licence",
    licenseText: "MIT (voir LICENSE)."
  },
  es: {
    title: "Guía de Vibe Research",
    subtitle: "Una guía multilingüe sobre Vibe Research, el ecosistema Claw, Vibe Coding y los flujos prompt-native adyacentes.",
    topicLanguageNote: "Esta landing page está realmente localizada. Las páginas topic enlazadas siguen siendo, por ahora, principalmente en inglés.",
    quickstart: "Inicio rápido",
    quickstartSteps: [
      "Si acabas de llegar, empieza por Getting Started y Tools & Platforms.",
      "Si estás comparando proyectos Claw, ve directamente a Claw Park.",
      "Si te importa la capa de ejecución, lee Vibe Coding después de las páginas principales de investigación."
    ],
    heroLabels: ["Empezar", "Herramientas y plataformas", "Claw Park", "Vibe Coding"],
    toc: "Tabla de contenidos",
    whatIs: "¿Qué es Vibe Research?",
    whatIsDesc: "Vibe Research estudia cómo los agentes basados en LLM pueden apoyar o automatizar el ciclo de investigación: revisión bibliográfica, generación de ideas, ejecución de experimentos, escritura y evaluación.",
    glance: "De un vistazo",
    glanceCards: {
      coreQuestion: ["Pregunta central", "¿Hasta dónde puede pasar la IA de asistente de investigación a operadora de investigación?"],
      shift2026: ["Cambio en 2026", "Los copilots se fortalecieron, la capa de aprendizaje se volvió real y los coding agents pasaron a ser la capa de ejecución."],
      useRepo: ["Cómo usar este repo", "Usa esta página como mapa y las páginas topic como la guía real."]
    },
    snapshot: "Panorama 2026",
    snapshotItems: [
      "Los research copilots se están haciendo más fuertes gracias a Deep Research, las lecturas con fuentes al estilo NotebookLM y espacios científicos como Prism.",
      "Los agentes de aprendizaje, RL y autoevolución se están convirtiendo en una capa propia con Agent Lightning, Agent0, AgentEvolver, EvoAgentX y Acontext.",
      "Los sistemas de investigación autónoma maduran con AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform y Edison Scientific.",
      "Vibe Coding se está convirtiendo en la capa de ejecución de la automatización de la investigación, porque los agentes necesitan leer repos reales, editar archivos y ejecutar experimentos."
    ],
    learning: "Aprendizaje, RL y agentes autoevolutivos",
    learningNote: "El stack ya no trata solo de agentes que usan herramientas. Está emergiendo una capa separada de entrenamiento, mejora online, evolución de workflows y memoria persistente reutilizable.",
    learningRows: {
      training: ["Entrenamiento / optimización de agentes", "Lleva RL, optimización automática de prompts y SFT a sistemas de agentes arbitrarios con casi ningún cambio de código."],
      zeroData: ["Autoevolución sin datos", "Muestra que los agentes pueden generar tareas, feedback y señales de entrenamiento desde su propia exploración."],
      workflow: ["Evolución de workflows", "Desplaza la optimización desde prompts individuales hacia workflows completos y scientist loops."],
      memory: ["Sustrato de skills y memoria", "Convierte memoria, skills reutilizables y contexto persistente en parte del stack de mejora del agente."],
      map: ["Mapa del panorama", "El mapa más compacto de la literatura y los repos sobre agentes autoevolutivos."]
    },
    paths: "Elegir una ruta",
    startLabel: "Empieza por",
    thenLabel: "Luego",
    pathLabels: {
      newcomer: "Nuevo en Vibe Research",
      builder: "Desarrollador / Builder",
      researcher: "Investigador",
      creator: "Creator / Operator"
    },
    ecosystem: "Resumen del ecosistema",
    representativeLabel: "Representativos",
    ecosystemRows: {
      copilots: ["Research copilots", "Lectura rápida, síntesis y ayuda para escritura científica."],
      systems: ["Sistemas de investigación", "Asistencia y automatización de investigación de extremo a extremo."],
      platforms: ["Plataformas de AI scientist", "Muestra el paso de papers y demos a superficies de plataforma persistentes."],
      learning: ["Capa de aprendizaje / autoevolución", "Convierte entrenamiento de agentes, datos autogenerados, evolución de workflows y memoria persistente en una capa real."],
      claw: ["Ecosistema Claw", "Cubre gateway, registry, compatibilidad, despliegue, superficies de investigación, especialización científica y pipelines autónomos."],
      execution: ["Capa de ejecución", "Los workflows de repositorio y código que sostienen la ejecución."],
      adjacent: ["Herramientas adyacentes", "Herramientas de prototipado útiles fuera del núcleo de investigación."]
    },
    clawStack: "Capas de la familia Claw",
    clawStackNote: "La familia Claw ahora es un stack: runtime, registry, compatibilidad de bundles, despliegue, superficies de investigación, capas especializadas y autonomía.",
    clawStackRows: {
      foundation: ["Gateway / base", "Runtime central, superficie de control y punto principal de entrada al ecosistema."],
      registry: ["Registry / descubrimiento", "Buscar, publicar, comparar e instalar skills y plugins."],
      bundles: ["Compatibilidad / bundles", "Reutilizar bundles de Codex, Claude y Cursor dentro de OpenClaw."],
      deployment: ["Despliegue / packaging", "Instalación, actualizaciones y rollback reproducibles para entornos self-hosted."],
      surfaces: ["Superficies de investigación", "Cubre workspaces, copilots diarios y superficies centradas en lectura."],
      specialist: ["Especialización científica / evolución", "Empuja más a fondo la especialización científica, la memoria y el aprendizaje online."],
      autonomy: ["Pipeline autónomo", "La dirección idea-to-paper con el mayor nivel de autonomía."]
    },
    connectors: "Plugins, puentes y conectores de investigación",
    connectorNote: "Ahora existe una nueva capa entre el agente y el workflow: superficies de plugins, registries, catálogos de skills y puentes de chat.",
    connectorRows: {
      bridge: ["Puentes y superficies de control", "Operar agentes de código e investigación desde Feishu/Lark, Slack, Telegram y chats similares."],
      plugin: ["Capa de plugins", "Los ecosistemas de agentes avanzan hacia mercados de skills, compatibilidad de bundles y paquetes de capacidades reutilizables."],
      memory: ["Sustrato de aprendizaje / memoria", "El contexto persistente y las skills reutilizables empiezan a funcionar como infraestructura de mejora del agente."],
      registry: ["Registry y descubrimiento", "El descubrimiento y la instalación se están convirtiendo en partes de primera clase del ecosistema."],
      research: ["Conectores de investigación", "Los agentes pueden conectarse directamente con grafos bibliográficos, artefactos de código y metadatos de benchmarks."]
    },
    ccSignals: "Señales recientes de Claude Code",
    ccSignalNote: "La capa de Claude Code se está expandiendo rápidamente más allá del binario central hacia skills, mercados, routing, operaciones multiagente y frameworks estructurados.",
    ccSignalRows: {
      skills: ["Capa oficial de skills", "Anthropic está convirtiendo Agent Skills públicos en una fuente reutilizable de capacidades para Claude Code."],
      community: ["Mercado comunitario", "Un gran ecosistema comunitario de agentes, comandos, hooks y skills para Claude Code."],
      framework: ["Capa meta-framework", "Muestra cómo los usuarios envuelven Claude Code con personas, comandos y convenciones de workflow."],
      ops: ["Capa de routing y ops", "Routing, gestión multiagente, sistemas de tareas y empaquetado de repos se están convirtiendo en infraestructura de ejecución."]
    },
    guides: "Mapa de la guía",
    guideTopic: "Tema",
    guideLink: "Enlace",
    guideTrackLabels: {
      gettingStarted: "Empezar",
      tools: "Herramientas y plataformas",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Sistemas",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Un mapa del ecosistema para entender qué construye cada proyecto Claw y dónde encaja.",
    clawSection: "Vista previa de la familia Claw",
    clawNote: "Usa Claw Park cuando los nombres empiecen a mezclarse. La clave es separar runtime, registry, despliegue, superficies de investigación y autonomía.",
    clawProject: "Proyecto",
    clawLayer: "Capa",
    clawLayerNames: {
      foundation: "Gateway / base",
      registry: "Registry / descubrimiento",
      bundles: "Compatibilidad / bundles",
      deployment: "Despliegue / packaging",
      workspace: "Workspace de investigación",
      copilot: "Copilot diario de investigación",
      desktop: "Superficie de escritorio / lectura",
      scientist: "Especialización científica",
      evolution: "Capa de evolución",
      autonomy: "Pipeline autónomo"
    },
    featured: "Proyectos destacados",
    readingModes: "Modos de lectura",
    readingModeCards: {
      field: ["Leer el campo", "Surveys · Systems · Benchmarks"],
      stack: ["Construir el stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Prototipar más allá de investigación", "Vibe Anything"]
    },
    contribute: "Cómo contribuir",
    contributeItems: [
      "Sugiere un recurso mediante la plantilla de issue Resource Suggestion.",
      "Envía actualizaciones mediante Pull Requests con metadatos claros.",
      "Sigue las pautas de curación en docs/curation-guidelines.md."
    ],
    changelog: "Actualizaciones recientes",
    changelogText: "2026-W17: se amplió la cobertura de Claw hasta un mapa familiar más completo, se añadió una landing page realmente multilingüe y se aclaró que las páginas topic profundas siguen en inglés por ahora.",
    license: "Licencia",
    licenseText: "MIT (ver LICENSE)."
  },
  it: {
    title: "Guida Vibe Research",
    subtitle: "Una guida multilingue a Vibe Research, all'ecosistema Claw, a Vibe Coding e ai workflow prompt-native adiacenti.",
    topicLanguageNote: "Questa landing page è localizzata in modo reale. Le pagine topic collegate restano per ora soprattutto in inglese.",
    quickstart: "Avvio rapido",
    quickstartSteps: [
      "Se stai iniziando, parti da Getting Started e Tools & Platforms.",
      "Se vuoi confrontare i progetti Claw, vai subito a Claw Park.",
      "Se ti interessa il livello di esecuzione, leggi Vibe Coding dopo le pagine principali sulla ricerca."
    ],
    heroLabels: ["Inizia", "Strumenti e piattaforme", "Claw Park", "Vibe Coding"],
    toc: "Indice",
    whatIs: "Che cos'è Vibe Research?",
    whatIsDesc: "Vibe Research studia come gli agenti basati su LLM possano supportare o automatizzare il ciclo della ricerca: revisione della letteratura, generazione di idee, esecuzione di esperimenti, scrittura e valutazione.",
    glance: "In sintesi",
    glanceCards: {
      coreQuestion: ["Domanda centrale", "Fino a che punto l'AI può passare da assistente di ricerca a operatore di ricerca?"],
      shift2026: ["Svolta 2026", "I copilots si sono rafforzati, i livelli di apprendimento sono diventati reali e i coding agent sono diventati il livello di esecuzione."],
      useRepo: ["Come usare questo repo", "Usa questa pagina come mappa e le pagine topic come guida effettiva."]
    },
    snapshot: "Panorama 2026",
    snapshotItems: [
      "I research copilots stanno diventando più forti grazie a Deep Research, letture ancorate alle fonti in stile NotebookLM e spazi scientifici come Prism.",
      "Gli agenti di apprendimento, RL e autoevoluzione stanno diventando un livello autonomo con Agent Lightning, Agent0, AgentEvolver, EvoAgentX e Acontext.",
      "I sistemi di ricerca autonoma stanno maturando con AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform ed Edison Scientific.",
      "Vibe Coding sta diventando il livello di esecuzione dell'automazione della ricerca, perché gli agenti devono leggere repo reali, modificare file ed eseguire esperimenti."
    ],
    learning: "Apprendimento, RL e agenti autoevolutivi",
    learningNote: "Lo stack non riguarda più solo agenti che usano strumenti. Sta emergendo un livello separato per training, miglioramento online, evoluzione dei workflow e memoria persistente riutilizzabile.",
    learningRows: {
      training: ["Training / ottimizzazione degli agenti", "Porta RL, ottimizzazione automatica dei prompt e SFT a sistemi di agenti arbitrari con quasi nessuna modifica al codice."],
      zeroData: ["Autoevoluzione senza dati", "Mostra che gli agenti possono generare task, feedback e segnali di training dalla propria esplorazione."],
      workflow: ["Evoluzione dei workflow", "Sposta l'ottimizzazione dai singoli prompt a workflow completi e scientist loop."],
      memory: ["Substrato di skill e memoria", "Trasforma memoria, skill riutilizzabili e contesto persistente in parte della stack di miglioramento dell'agente."],
      map: ["Mappa del panorama", "La mappa più compatta della letteratura e dei repo sugli agenti autoevolutivi."]
    },
    paths: "Scegli un percorso",
    startLabel: "Inizia da",
    thenLabel: "Poi",
    pathLabels: {
      newcomer: "Nuovo in Vibe Research",
      builder: "Sviluppatore / Builder",
      researcher: "Ricercatore",
      creator: "Creator / Operator"
    },
    ecosystem: "Panoramica dell'ecosistema",
    representativeLabel: "Rappresentativi",
    ecosystemRows: {
      copilots: ["Research copilots", "Lettura rapida, sintesi e supporto alla scrittura scientifica."],
      systems: ["Sistemi di ricerca", "Supporto e automazione della ricerca end-to-end."],
      platforms: ["Piattaforme AI scientist", "Mostra il passaggio da paper e demo a superfici di piattaforma persistenti."],
      learning: ["Livello di apprendimento / autoevoluzione", "Trasforma training di agenti, dati autogenerati, evoluzione dei workflow e memoria persistente in un livello reale."],
      claw: ["Ecosistema Claw", "Copre gateway, registry, compatibilità, deployment, superfici di ricerca, specializzazione scientifica e pipeline autonome."],
      execution: ["Livello di esecuzione", "I workflow di repo e codice che sostengono l'esecuzione."],
      adjacent: ["Strumenti adiacenti", "Strumenti utili di prototipazione fuori dal nucleo della ricerca."]
    },
    clawStack: "Livelli della famiglia Claw",
    clawStackNote: "La famiglia Claw ora è uno stack: runtime, registry, compatibilità dei bundle, deployment, superfici di ricerca, livelli specialistici e autonomia.",
    clawStackRows: {
      foundation: ["Gateway / fondazione", "Runtime centrale, superficie di controllo e principale punto d'ingresso dell'ecosistema."],
      registry: ["Registry / discovery", "Cercare, pubblicare, confrontare e installare skill e plugin."],
      bundles: ["Compatibilità / bundle", "Riutilizzare bundle di Codex, Claude e Cursor dentro OpenClaw."],
      deployment: ["Deployment / packaging", "Installazione, aggiornamenti e rollback riproducibili per setup self-hosted."],
      surfaces: ["Superfici di ricerca", "Copre workspace, copilots quotidiani e superfici orientate alla lettura."],
      specialist: ["Specializzazione scientifica / evoluzione", "Spinge più a fondo specializzazione scientifica, memoria e apprendimento online."],
      autonomy: ["Pipeline autonoma", "La direzione idea-to-paper con il massimo livello di autonomia."]
    },
    connectors: "Plugin, bridge e connettori di ricerca",
    connectorNote: "Ora tra l'agente e il workflow si colloca un nuovo livello: superfici plugin, registry, cataloghi di skill e bridge di chat.",
    connectorRows: {
      bridge: ["Bridge e superfici di controllo", "Gestire agenti di coding e ricerca da Feishu/Lark, Slack, Telegram e chat simili."],
      plugin: ["Livello plugin", "Gli ecosistemi di agenti stanno andando verso marketplace di skill, compatibilità dei bundle e pacchetti di capacità riutilizzabili."],
      memory: ["Substrato apprendimento / memoria", "Contesto persistente e skill riutilizzabili stanno diventando infrastruttura per il miglioramento degli agenti."],
      registry: ["Registry e discovery", "Scoperta e installazione stanno diventando parti di primo livello dell'ecosistema."],
      research: ["Connettori di ricerca", "Gli agenti possono connettersi direttamente a grafi della letteratura, artefatti di codice e metadati dei benchmark."]
    },
    ccSignals: "Segnali recenti di Claude Code",
    ccSignalNote: "Il livello Claude Code si sta espandendo rapidamente oltre il binario centrale verso skill, marketplace, routing, operazioni multi-agente e framework strutturati.",
    ccSignalRows: {
      skills: ["Livello ufficiale di skill", "Anthropic sta trasformando le Agent Skills pubbliche in una fonte riutilizzabile di capacità per Claude Code."],
      community: ["Marketplace della community", "Un grande ecosistema della community per agenti, comandi, hook e skill di Claude Code."],
      framework: ["Livello meta-framework", "Mostra come gli utenti stiano avvolgendo Claude Code con personas, comandi e convenzioni di workflow."],
      ops: ["Livello routing e ops", "Routing, gestione multi-agente, sistemi di task e packaging dei repo stanno diventando infrastruttura di esecuzione."]
    },
    guides: "Mappa della guida",
    guideTopic: "Argomento",
    guideLink: "Link",
    guideTrackLabels: {
      gettingStarted: "Inizia",
      tools: "Strumenti e piattaforme",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Sistemi",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Una mappa dell'ecosistema per capire cosa sta costruendo ciascun progetto Claw e dove si colloca.",
    clawSection: "Anteprima della famiglia Claw",
    clawNote: "Usa Claw Park quando i nomi iniziano a confondersi. La chiave è separare runtime, registry, deployment, superfici di ricerca e autonomia.",
    clawProject: "Progetto",
    clawLayer: "Livello",
    clawLayerNames: {
      foundation: "Gateway / fondazione",
      registry: "Registry / discovery",
      bundles: "Compatibilità / bundle",
      deployment: "Deployment / packaging",
      workspace: "Workspace di ricerca",
      copilot: "Copilot di ricerca quotidiano",
      desktop: "Superficie desktop / lettura",
      scientist: "Specializzazione scientifica",
      evolution: "Livello di evoluzione",
      autonomy: "Pipeline autonoma"
    },
    featured: "Progetti in evidenza",
    readingModes: "Modalità di lettura",
    readingModeCards: {
      field: ["Leggere il campo", "Surveys · Systems · Benchmarks"],
      stack: ["Costruire lo stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Prototipare oltre la ricerca", "Vibe Anything"]
    },
    contribute: "Come contribuire",
    contributeItems: [
      "Suggerisci una risorsa tramite il template di issue Resource Suggestion.",
      "Invia aggiornamenti via Pull Request con metadati chiari.",
      "Segui le linee guida di curazione in docs/curation-guidelines.md."
    ],
    changelog: "Aggiornamenti recenti",
    changelogText: "2026-W17: la copertura di Claw è stata ampliata in una mappa familiare più completa, è stata aggiunta una vera landing page multilingue ed è stato chiarito che le topic page restano per ora in inglese.",
    license: "Licenza",
    licenseText: "MIT (vedi LICENSE)."
  },
  pt: {
    title: "Guia de Vibe Research",
    subtitle: "Um guia multilíngue sobre Vibe Research, o ecossistema Claw, Vibe Coding e fluxos prompt-native adjacentes.",
    topicLanguageNote: "Esta landing page está realmente localizada. As páginas topic vinculadas continuam, por enquanto, principalmente em inglês.",
    quickstart: "Início rápido",
    quickstartSteps: [
      "Se você está começando, vá primeiro para Getting Started e Tools & Platforms.",
      "Se quer comparar projetos Claw, vá direto para Claw Park.",
      "Se a camada de execução importa para você, leia Vibe Coding depois das páginas principais de pesquisa."
    ],
    heroLabels: ["Começar", "Ferramentas e plataformas", "Claw Park", "Vibe Coding"],
    toc: "Sumário",
    whatIs: "O que é Vibe Research?",
    whatIsDesc: "Vibe Research estuda como agentes baseados em LLM podem apoiar ou automatizar o ciclo de pesquisa: revisão de literatura, geração de ideias, execução de experimentos, escrita e avaliação.",
    glance: "Visão rápida",
    glanceCards: {
      coreQuestion: ["Pergunta central", "Até onde a IA pode ir de assistente de pesquisa a operadora de pesquisa?"],
      shift2026: ["Mudança em 2026", "Os copilots ficaram mais fortes, as camadas de aprendizagem se tornaram reais e os coding agents viraram a camada de execução."],
      useRepo: ["Como usar este repositório", "Use esta página como mapa e as páginas topic como o guia real."]
    },
    snapshot: "Panorama 2026",
    snapshotItems: [
      "Os research copilots estão ficando mais fortes com Deep Research, leitura ancorada em fontes no estilo NotebookLM e espaços científicos como Prism.",
      "Agentes de aprendizagem, RL e autoevolução estão se tornando uma camada própria com Agent Lightning, Agent0, AgentEvolver, EvoAgentX e Acontext.",
      "Sistemas autônomos de pesquisa amadurecem com AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform e Edison Scientific.",
      "Vibe Coding está se tornando a camada de execução da automação de pesquisa, porque agentes precisam ler repositórios reais, editar arquivos e rodar experimentos."
    ],
    learning: "Aprendizado, RL e agentes autoevolutivos",
    learningNote: "A stack não trata mais apenas de agentes que usam ferramentas. Está surgindo uma camada separada para treinamento, melhoria online, evolução de workflows e memória persistente reutilizável.",
    learningRows: {
      training: ["Treinamento / otimização de agentes", "Leva RL, otimização automática de prompts e SFT para sistemas arbitrários de agentes com quase nenhuma mudança de código."],
      zeroData: ["Autoevolução sem dados", "Mostra que agentes podem gerar tarefas, feedback e sinais de treinamento a partir da própria exploração."],
      workflow: ["Evolução de workflows", "Move a otimização de prompts individuais para workflows inteiros e scientist loops."],
      memory: ["Substrato de skills e memória", "Transforma memória, skills reutilizáveis e contexto persistente em parte da stack de melhoria do agente."],
      map: ["Mapa do panorama", "O mapa mais compacto da literatura e dos repositórios sobre agentes autoevolutivos."]
    },
    paths: "Escolha um caminho",
    startLabel: "Comece por",
    thenLabel: "Depois",
    pathLabels: {
      newcomer: "Novo em Vibe Research",
      builder: "Desenvolvedor / Builder",
      researcher: "Pesquisador",
      creator: "Creator / Operator"
    },
    ecosystem: "Visão do ecossistema",
    representativeLabel: "Representativos",
    ecosystemRows: {
      copilots: ["Research copilots", "Leitura rápida, síntese e apoio à escrita científica."],
      systems: ["Sistemas de pesquisa", "Assistência e automação de pesquisa de ponta a ponta."],
      platforms: ["Plataformas de AI scientist", "Mostra a passagem de papers e demos para superfícies persistentes de plataforma."],
      learning: ["Camada de aprendizado / autoevolução", "Transforma treinamento de agentes, dados autogerados, evolução de workflows e memória persistente em uma camada real."],
      claw: ["Ecossistema Claw", "Cobre gateway, registry, compatibilidade, deployment, superfícies de pesquisa, especialização científica e pipelines autônomos."],
      execution: ["Camada de execução", "Os workflows de repositório e código que sustentam a execução."],
      adjacent: ["Ferramentas adjacentes", "Ferramentas úteis de prototipagem fora do núcleo de pesquisa."]
    },
    clawStack: "Camadas da família Claw",
    clawStackNote: "A família Claw agora é uma stack: runtime, registry, compatibilidade de bundles, deployment, superfícies de pesquisa, camadas especializadas e autonomia.",
    clawStackRows: {
      foundation: ["Gateway / base", "Runtime central, superfície de controle e principal ponto de entrada do ecossistema."],
      registry: ["Registry / descoberta", "Buscar, publicar, comparar e instalar skills e plugins."],
      bundles: ["Compatibilidade / bundles", "Reutilizar bundles de Codex, Claude e Cursor dentro do OpenClaw."],
      deployment: ["Deployment / packaging", "Instalação, upgrades e rollback reproduzíveis para setups self-hosted."],
      surfaces: ["Superfícies de pesquisa", "Cobre workspaces, copilots diários e superfícies focadas em leitura."],
      specialist: ["Especialização científica / evolução", "Aprofunda especialização científica, memória e aprendizagem online."],
      autonomy: ["Pipeline autônomo", "A direção idea-to-paper com o maior nível de autonomia."]
    },
    connectors: "Plugins, bridges e conectores de pesquisa",
    connectorNote: "Agora existe uma nova camada entre o agente e o workflow: superfícies de plugin, registries, catálogos de skills e bridges de chat.",
    connectorRows: {
      bridge: ["Bridges e superfícies de controle", "Operar agentes de código e pesquisa a partir de Feishu/Lark, Slack, Telegram e chats semelhantes."],
      plugin: ["Camada de plugins", "Os ecossistemas de agentes caminham para marketplaces de skills, compatibilidade de bundles e pacotes de capacidades reutilizáveis."],
      memory: ["Substrato de aprendizado / memória", "Contexto persistente e skills reutilizáveis estão começando a funcionar como infraestrutura de melhoria de agentes."],
      registry: ["Registry e descoberta", "Descoberta e instalação estão se tornando partes de primeira classe do ecossistema."],
      research: ["Conectores de pesquisa", "Agentes podem se conectar diretamente a grafos de literatura, artefatos de código e metadados de benchmarks."]
    },
    ccSignals: "Sinais recentes do Claude Code",
    ccSignalNote: "A camada Claude Code está se expandindo rapidamente além do binário central em direção a skills, marketplaces, routing, operações multiagente e frameworks estruturados.",
    ccSignalRows: {
      skills: ["Camada oficial de skills", "A Anthropic está transformando Agent Skills públicos em uma fonte reutilizável de capacidades para Claude Code."],
      community: ["Marketplace da comunidade", "Um grande ecossistema comunitário de agentes, comandos, hooks e skills para Claude Code."],
      framework: ["Camada meta-framework", "Mostra como usuários estão envolvendo Claude Code com personas, comandos e convenções de workflow."],
      ops: ["Camada de routing e ops", "Routing, gestão multiagente, sistemas de tarefas e empacotamento de repositórios estão virando infraestrutura de execução."]
    },
    guides: "Mapa do guia",
    guideTopic: "Tópico",
    guideLink: "Link",
    guideTrackLabels: {
      gettingStarted: "Começar",
      tools: "Ferramentas e plataformas",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Sistemas",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Um mapa do ecossistema para entender o que cada projeto Claw está construindo e onde ele se encaixa.",
    clawSection: "Prévia da família Claw",
    clawNote: "Use o Claw Park quando os nomes começarem a se misturar. A chave é separar runtime, registry, deployment, superfícies de pesquisa e autonomia.",
    clawProject: "Projeto",
    clawLayer: "Camada",
    clawLayerNames: {
      foundation: "Gateway / base",
      registry: "Registry / descoberta",
      bundles: "Compatibilidade / bundles",
      deployment: "Deployment / packaging",
      workspace: "Workspace de pesquisa",
      copilot: "Copilot diário de pesquisa",
      desktop: "Superfície desktop / leitura",
      scientist: "Especialização científica",
      evolution: "Camada de evolução",
      autonomy: "Pipeline autônomo"
    },
    featured: "Projetos em destaque",
    readingModes: "Modos de leitura",
    readingModeCards: {
      field: ["Ler o campo", "Surveys · Systems · Benchmarks"],
      stack: ["Construir a stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Prototipar além da pesquisa", "Vibe Anything"]
    },
    contribute: "Como contribuir",
    contributeItems: [
      "Sugira um recurso pelo template de issue Resource Suggestion.",
      "Envie atualizações por Pull Request com metadados claros.",
      "Siga as diretrizes de curadoria em docs/curation-guidelines.md."
    ],
    changelog: "Atualizações recentes",
    changelogText: "2026-W17: a cobertura de Claw foi ampliada para um mapa familiar mais completo, foi adicionada uma landing page realmente multilíngue e foi esclarecido que as topic pages profundas continuam em inglês por enquanto.",
    license: "Licença",
    licenseText: "MIT (ver LICENSE)."
  },
  ar: {
    title: "دليل Vibe Research",
    subtitle: "دليل متعدد اللغات حول Vibe Research ونظام Claw وVibe Coding وسير العمل المجاور المعتمد على المطالبات.",
    topicLanguageNote: "هذه الصفحة الرئيسية مترجمة فعلياً. صفحات الموضوعات المرتبطة ما زالت تعتمد الإنجليزية في الوقت الحالي.",
    quickstart: "بداية سريعة",
    quickstartSteps: [
      "إذا كنت جديداً على المجال فابدأ بـ Getting Started و Tools & Platforms.",
      "إذا كنت تقارن بين مشاريع Claw فاذهب مباشرة إلى Claw Park.",
      "إذا كنت تهتم بطبقة التنفيذ فاقرأ Vibe Coding بعد صفحات البحث الأساسية."
    ],
    heroLabels: ["ابدأ", "الأدوات والمنصات", "Claw Park", "Vibe Coding"],
    toc: "المحتويات",
    whatIs: "ما هو Vibe Research؟",
    whatIsDesc: "يدرس Vibe Research كيف يمكن للوكلاء القائمين على LLM دعم أو أتمتة حلقة البحث: مراجعة الأدبيات، توليد الأفكار، تنفيذ التجارب، الكتابة، والتقييم.",
    glance: "نظرة سريعة",
    glanceCards: {
      coreQuestion: ["السؤال الأساسي", "إلى أي مدى يمكن أن تنتقل AI من مساعد بحث إلى مشغّل بحث؟"],
      shift2026: ["تحول 2026", "أصبحت أدوات copilot أقوى، وأصبحت طبقات التعلم واقعية، وأصبحت coding agents هي طبقة التنفيذ."],
      useRepo: ["كيفية استخدام هذا المستودع", "اعتبر هذه الصفحة خريطة، وصفحات topic هي الدليل الفعلي."]
    },
    snapshot: "مشهد 2026",
    snapshotItems: [
      "تزداد قوة research copilots عبر Deep Research والقراءة المسندة بالمصادر على طريقة NotebookLM ومساحات العمل العلمية مثل Prism.",
      "أصبحت وكلاء التعلم وRL والتطور الذاتي طبقة مستقلة عبر Agent Lightning وAgent0 وAgentEvolver وEvoAgentX وAcontext.",
      "تنضج أنظمة البحث الذاتية عبر AI Scientist-v2 وAgent Laboratory وEvoScientist وFutureHouse Platform وEdison Scientific.",
      "أصبح Vibe Coding طبقة التنفيذ لأتمتة البحث لأن الوكلاء يحتاجون إلى قراءة مستودعات حقيقية وتعديل الملفات وتشغيل التجارب."
    ],
    learning: "وكلاء التعلم وRL والتطور الذاتي",
    learningNote: "لم يعد stack يتعلق فقط بوكلاء يستخدمون الأدوات. تظهر الآن طبقة مستقلة للتدريب والتحسين المستمر وتطور سير العمل والذاكرة الدائمة القابلة لإعادة الاستخدام.",
    learningRows: {
      training: ["تدريب / تحسين الوكلاء", "يجلب RL وتحسين المطالبات تلقائياً وSFT إلى أنظمة وكلاء مختلفة مع تغييرات شبه معدومة في الكود."],
      zeroData: ["تطور ذاتي بلا بيانات", "يُظهر أن الوكلاء قادرون على توليد المهام والتغذية الراجعة وإشارات التدريب من استكشافهم الذاتي."],
      workflow: ["تطور سير العمل", "ينقل التحسين من prompts منفردة إلى workflows كاملة وحلقات scientist."],
      memory: ["ركيزة المهارات والذاكرة", "يجعل الذاكرة والمهارات القابلة لإعادة الاستخدام والسياق الدائم جزءاً من stack تحسين الوكلاء."],
      map: ["خريطة المشهد", "أكثر خريطة مختصرة للأدبيات والمستودعات المتعلقة بالوكلاء ذاتيي التطور."]
    },
    paths: "اختر مساراً",
    startLabel: "ابدأ من",
    thenLabel: "ثم",
    pathLabels: {
      newcomer: "جديد على Vibe Research",
      builder: "مطوّر / Builder",
      researcher: "باحث",
      creator: "منشئ / مشغّل"
    },
    ecosystem: "لمحة عن النظام البيئي",
    representativeLabel: "أمثلة",
    ecosystemRows: {
      copilots: ["Research copilots", "قراءة سريعة وتوليف ودعم للكتابة العلمية."],
      systems: ["أنظمة البحث", "مساندة وأتمتة بحثية من البداية إلى النهاية."],
      platforms: ["منصات AI scientist", "تُظهر انتقال المجال من الأوراق والعروض إلى أسطح منصات مستمرة."],
      learning: ["طبقة التعلم / التطور الذاتي", "تحوّل تدريب الوكلاء والبيانات المولدة ذاتياً وتطور workflow والذاكرة الدائمة إلى طبقة حقيقية."],
      claw: ["نظام Claw", "يغطي gateway وregistry والتوافق والنشر وسطوح البحث والتخصص العلمي والأنابيب الذاتية."],
      execution: ["طبقة التنفيذ", "سير عمل المستودعات والكود الذي يحمل التنفيذ."],
      adjacent: ["أدوات مجاورة", "أدوات نمذجة أولية مفيدة خارج قلب البحث."]
    },
    clawStack: "طبقات عائلة Claw",
    clawStackNote: "أصبحت عائلة Claw الآن stack كامل: runtime وregistry وتوافق bundles والنشر وسطوح البحث والطبقات المتخصصة والاستقلالية.",
    clawStackRows: {
      foundation: ["البوابة / الأساس", "الـ runtime الأساسي وسطح التحكم ونقطة الدخول الرئيسية إلى النظام البيئي."],
      registry: ["السجل / الاكتشاف", "البحث عن المهارات والإضافات ونشرها ومقارنتها وتثبيتها."],
      bundles: ["التوافق / bundles", "إعادة استخدام صيغ bundles الخاصة بـ Codex وClaude وCursor داخل OpenClaw."],
      deployment: ["النشر / التغليف", "تثبيت وتحديثات وتراجع قابلة لإعادة الإنتاج لبيئات self-hosted."],
      surfaces: ["سطوح البحث", "يغطي workspaces وcopilots اليومية والسطوح الموجهة للقراءة."],
      specialist: ["التخصص العلمي / التطور", "يدفع التخصص العلمي والذاكرة والتعلم عبر الإنترنت إلى عمق أكبر."],
      autonomy: ["أنبوب ذاتي", "اتجاه idea-to-paper بأقصى مستوى من الاستقلالية."]
    },
    connectors: "الإضافات والجسور وموصلات البحث",
    connectorNote: "توجد الآن طبقة جديدة بين الوكيل وسير العمل: أسطح الإضافات والسجلات وكتالوجات المهارات وجسور المحادثة.",
    connectorRows: {
      bridge: ["الجسور وأسطح التحكم", "تشغيل وكلاء البرمجة والبحث من Feishu/Lark وSlack وTelegram وتطبيقات دردشة مشابهة."],
      plugin: ["طبقة الإضافات", "تتجه أنظمة الوكلاء نحو أسواق المهارات وتوافق bundles وحزم القدرات القابلة لإعادة الاستخدام."],
      memory: ["ركيزة التعلم / الذاكرة", "بدأ السياق الدائم والمهارات القابلة لإعادة الاستخدام يعملان كبنية تحتية لتحسين الوكلاء."],
      registry: ["السجل والاكتشاف", "أصبح الاكتشاف والتثبيت جزأين أساسيين في النظام البيئي."],
      research: ["موصلات البحث", "يمكن للوكلاء الاتصال مباشرة بخرائط الأدبيات وأصول الكود وبيانات benchmarks الوصفية."]
    },
    ccSignals: "إشارات Claude Code الحديثة",
    ccSignalNote: "تتوسع طبقة Claude Code بسرعة إلى ما بعد الملف التنفيذي الأساسي نحو المهارات والأسواق والتوجيه وعمليات الوكلاء المتعددة والأطر المنظمة.",
    ccSignalRows: {
      skills: ["طبقة المهارات الرسمية", "تجعل Anthropic مهارات Agent Skills العامة مصدراً قابلاً لإعادة الاستخدام لقدرات Claude Code."],
      community: ["سوق المجتمع", "نظام مجتمعي كبير لوكلاء Claude Code والأوامر وhooks والمهارات."],
      framework: ["طبقة meta-framework", "تُظهر كيف يغلّف المستخدمون Claude Code بشخصيات وأوامر واتفاقيات workflow."],
      ops: ["طبقة التوجيه والعمليات", "أصبح التوجيه وإدارة الوكلاء المتعددين وأنظمة المهام وتغليف المستودعات بنية تحتية للتنفيذ."]
    },
    guides: "خريطة الدليل",
    guideTopic: "الموضوع",
    guideLink: "الرابط",
    guideTrackLabels: {
      gettingStarted: "ابدأ",
      tools: "الأدوات والمنصات",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "الأنظمة",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "خريطة للنظام البيئي توضّح ما الذي يبنيه كل مشروع Claw وأين يقع.",
    clawSection: "معاينة عائلة Claw",
    clawNote: "استخدم Claw Park عندما تبدأ الأسماء في الاختلاط. المفتاح هو فصل runtime وregistry والنشر وسطوح البحث والاستقلالية.",
    clawProject: "المشروع",
    clawLayer: "الطبقة",
    clawLayerNames: {
      foundation: "البوابة / الأساس",
      registry: "السجل / الاكتشاف",
      bundles: "التوافق / bundles",
      deployment: "النشر / التغليف",
      workspace: "مساحة عمل بحثية",
      copilot: "copilot بحثي يومي",
      desktop: "سطح مكتب / قراءة",
      scientist: "تخصص علمي",
      evolution: "طبقة التطور",
      autonomy: "أنبوب ذاتي"
    },
    featured: "مشاريع مميزة",
    readingModes: "أنماط القراءة",
    readingModeCards: {
      field: ["قراءة المجال", "Surveys · Systems · Benchmarks"],
      stack: ["بناء الـ stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["نمذجة خارج البحث", "Vibe Anything"]
    },
    contribute: "كيف تساهم",
    contributeItems: [
      "اقترح مورداً عبر قالب issue الخاص بـ Resource Suggestion.",
      "أرسل التحديثات عبر Pull Request مع بيانات وصفية واضحة.",
      "اتبع إرشادات التنسيق في docs/curation-guidelines.md."
    ],
    changelog: "آخر التحديثات",
    changelogText: "2026-W17: تم توسيع تغطية Claw إلى خريطة عائلية أشمل، وتمت إضافة صفحة رئيسية متعددة اللغات فعلياً، وتم توضيح أن صفحات topic الأعمق ما تزال بالإنجليزية حالياً.",
    license: "الترخيص",
    licenseText: "MIT (راجع LICENSE)."
  },
  th: {
    title: "คู่มือ Vibe Research",
    subtitle: "คู่มือหลายภาษาสำหรับ Vibe Research ระบบนิเวศ Claw, Vibe Coding และเวิร์กโฟลว์แบบ prompt-native ที่เกี่ยวข้อง",
    topicLanguageNote: "หน้า landing page นี้แปลเป็นภาษาท้องถิ่นแล้ว ส่วนหน้า topic ที่ลิงก์ไปยังคงใช้ภาษาอังกฤษเป็นหลักในตอนนี้",
    quickstart: "เริ่มแบบเร็ว",
    quickstartSteps: [
      "ถ้ายังใหม่ ให้เริ่มจาก Getting Started และ Tools & Platforms",
      "ถ้าต้องการเปรียบเทียบโปรเจกต์ Claw ให้ไปที่ Claw Park โดยตรง",
      "ถ้าคุณสนใจ execution layer ให้อ่าน Vibe Coding หลังจากหน้าหลักด้านงานวิจัย"
    ],
    heroLabels: ["เริ่มต้น", "เครื่องมือและแพลตฟอร์ม", "Claw Park", "Vibe Coding"],
    toc: "สารบัญ",
    whatIs: "Vibe Research คืออะไร?",
    whatIsDesc: "Vibe Research ศึกษาว่าเอเจนต์ที่ขับเคลื่อนด้วย LLM สามารถช่วยหรือทำให้งานวิจัยเป็นอัตโนมัติได้อย่างไร ตั้งแต่การทบทวนวรรณกรรม การสร้างไอเดีย การรันการทดลอง การเขียน และการประเมินผล",
    glance: "สรุปสั้น ๆ",
    glanceCards: {
      coreQuestion: ["คำถามหลัก", "AI จะขยับจากผู้ช่วยวิจัยไปเป็นผู้ปฏิบัติการวิจัยได้ไกลแค่ไหน?"],
      shift2026: ["ความเปลี่ยนแปลงปี 2026", "copilot แข็งแรงขึ้น ชั้นการเรียนรู้เริ่มเป็นของจริง และ coding agent กลายเป็น execution layer"],
      useRepo: ["ใช้ repo นี้อย่างไร", "มองหน้านี้เป็นแผนที่ และมองหน้า topic เป็นตัวไกด์จริง"]
    },
    snapshot: "ภาพรวมปี 2026",
    snapshotItems: [
      "research copilots แข็งแรงขึ้นผ่าน Deep Research การอ่านแบบอ้างอิงแหล่งข้อมูลอย่าง NotebookLM และพื้นที่ทำงานวิทยาศาสตร์อย่าง Prism",
      "เอเจนต์สาย learning, RL และ self-evolving กำลังกลายเป็นเลเยอร์เฉพาะของตัวเองผ่าน Agent Lightning, Agent0, AgentEvolver, EvoAgentX และ Acontext",
      "ระบบวิจัยอัตโนมัติกำลังเติบโตขึ้นผ่าน AI Scientist-v2, Agent Laboratory, EvoScientist, FutureHouse Platform และ Edison Scientific",
      "Vibe Coding กำลังกลายเป็น execution layer ของการทำวิจัยอัตโนมัติ เพราะเอเจนต์ต้องอ่าน repo จริง แก้ไฟล์จริง และรันการทดลองจริง"
    ],
    learning: "Learning, RL และเอเจนต์ที่พัฒนาตัวเอง",
    learningNote: "stack นี้ไม่ได้มีแค่เอเจนต์ที่ใช้เครื่องมือได้เท่านั้น ตอนนี้กำลังเกิดเลเยอร์แยกสำหรับการฝึก การปรับปรุงแบบออนไลน์ การพัฒนา workflow และความจำถาวรที่นำกลับมาใช้ได้",
    learningRows: {
      training: ["การฝึก / การปรับแต่งเอเจนต์", "นำ RL, การปรับ prompt อัตโนมัติ และ SFT ไปใช้กับระบบเอเจนต์ต่าง ๆ โดยแทบไม่ต้องแก้โค้ด"],
      zeroData: ["self-evolution แบบไม่พึ่งข้อมูล", "แสดงให้เห็นว่าเอเจนต์สามารถสร้างงาน feedback และสัญญาณการฝึกจากการสำรวจของตัวเองได้"],
      workflow: ["การพัฒนา workflow", "ขยายการปรับแต่งจาก prompt เดี่ยวไปสู่ workflow เต็มและ scientist loop"],
      memory: ["ฐานของ skill และ memory", "ทำให้ memory, skill ที่ใช้ซ้ำได้ และ context แบบถาวร กลายเป็นส่วนหนึ่งของ stack การพัฒนาเอเจนต์"],
      map: ["แผนที่ของ landscape", "แผนที่ที่กระชับที่สุดของงานวิจัยและ repo ในสาย self-evolving agents"]
    },
    paths: "เลือกเส้นทาง",
    startLabel: "เริ่มจาก",
    thenLabel: "ต่อด้วย",
    pathLabels: {
      newcomer: "มือใหม่ใน Vibe Research",
      builder: "นักพัฒนา / Builder",
      researcher: "นักวิจัย",
      creator: "Creator / Operator"
    },
    ecosystem: "ภาพรวมระบบนิเวศ",
    representativeLabel: "ตัวแทน",
    ecosystemRows: {
      copilots: ["Research copilots", "การอ่าน การสังเคราะห์ และการช่วยเขียนงานวิทยาศาสตร์ที่เร็วขึ้น"],
      systems: ["Research systems", "การช่วยวิจัยและการทำให้อัตโนมัติแบบ end-to-end"],
      platforms: ["แพลตฟอร์ม AI scientist", "แสดงให้เห็นว่าพื้นที่นี้กำลังขยับจาก paper และ demo ไปสู่แพลตฟอร์มถาวร"],
      learning: ["ชั้น learning / self-evolving", "ทำให้การฝึกเอเจนต์ ข้อมูลที่สร้างเอง การพัฒนา workflow และความจำถาวร กลายเป็นชั้นจริงของ stack"],
      claw: ["ระบบนิเวศ Claw", "ครอบคลุม gateway, registry, compatibility, deployment, research surfaces, scientific specialization และ autonomous pipelines"],
      execution: ["ชั้น execution", "workflow ด้าน repo และโค้ดที่รองรับการ execution"],
      adjacent: ["เครื่องมือข้างเคียง", "เครื่องมือทำต้นแบบที่มีประโยชน์แต่นอกแกนหลักของงานวิจัย"]
    },
    clawStack: "ชั้นของตระกูล Claw",
    clawStackNote: "ตอนนี้ Claw ไม่ใช่แค่โปรดักต์เดียว แต่เป็น stack ที่มี runtime, registry, bundle compatibility, deployment, research surfaces, specialist layers และ autonomy",
    clawStackRows: {
      foundation: ["Gateway / foundation", "runtime หลัก control surface และจุดเข้าใช้งานหลักของระบบนิเวศ"],
      registry: ["Registry / discovery", "ค้นหา เผยแพร่ เปรียบเทียบ และติดตั้ง skill กับ plugin"],
      bundles: ["Compatibility / bundles", "นำรูปแบบ bundle ของ Codex, Claude และ Cursor มาใช้ซ้ำใน OpenClaw"],
      deployment: ["Deployment / packaging", "ติดตั้ง อัปเกรด และ rollback แบบทำซ้ำได้สำหรับการ self-host"],
      surfaces: ["Research surfaces", "ครอบคลุม workspace, copilot รายวัน และพื้นผิวที่เน้นการอ่าน"],
      specialist: ["Scientific specialist / evolution", "ผลักไปสู่ความเฉพาะทางด้านวิทยาศาสตร์ memory และ online learning มากขึ้น"],
      autonomy: ["Autonomous pipeline", "ทิศทาง idea-to-paper ที่มีความอัตโนมัติสูงสุด"]
    },
    connectors: "ปลั๊กอิน สะพานเชื่อม และตัวเชื่อมงานวิจัย",
    connectorNote: "ตอนนี้มีชั้นใหม่คั่นระหว่าง agent กับ workflow แล้ว ได้แก่ plugin surfaces, registries, skill catalogs และ chat bridges",
    connectorRows: {
      bridge: ["Bridge & control surfaces", "สั่งงาน coding agent และ research agent จาก Feishu/Lark, Slack, Telegram และแชตอื่น ๆ ที่คล้ายกัน"],
      plugin: ["Plugin layer", "ระบบนิเวศของ agent กำลังขยับไปสู่ skill marketplace, bundle compatibility และ capability packs ที่ใช้ซ้ำได้"],
      memory: ["Learning / memory substrate", "context แบบถาวรและ skill ที่ใช้ซ้ำได้เริ่มทำหน้าที่เป็นโครงสร้างพื้นฐานสำหรับการพัฒนา agent"],
      registry: ["Registry & discovery", "การค้นหาและการติดตั้งกำลังกลายเป็นส่วนสำคัญของระบบนิเวศ"],
      research: ["Research connectors", "agent สามารถเชื่อมต่อกับกราฟวรรณกรรม code artifacts และ benchmark metadata ได้โดยตรง"]
    },
    ccSignals: "สัญญาณล่าสุดของ Claude Code",
    ccSignalNote: "เลเยอร์ของ Claude Code กำลังขยายออกจาก binary หลักอย่างรวดเร็ว ไปสู่ skills, marketplaces, routing, multi-agent ops และ workflow frameworks แบบมีโครงสร้าง",
    ccSignalRows: {
      skills: ["ชั้น skill อย่างเป็นทางการ", "Anthropic กำลังเปลี่ยน Agent Skills สาธารณะให้เป็นแหล่งความสามารถที่นำกลับมาใช้ได้ของ Claude Code"],
      community: ["ตลาดของชุมชน", "ระบบนิเวศขนาดใหญ่ของชุมชนสำหรับ Claude Code agents, commands, hooks และ skills"],
      framework: ["ชั้น meta-framework", "แสดงให้เห็นว่าผู้ใช้กำลังครอบ Claude Code ด้วย personas, commands และ workflow conventions"],
      ops: ["ชั้น routing และ ops", "routing, การจัดการ multi-agent, task systems และ repo packaging กำลังกลายเป็นโครงสร้างพื้นฐานของ execution"]
    },
    guides: "แผนที่คู่มือ",
    guideTopic: "หัวข้อ",
    guideLink: "ลิงก์",
    guideTrackLabels: {
      gettingStarted: "เริ่มต้น",
      tools: "เครื่องมือและแพลตฟอร์ม",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Surveys",
      systems: "Systems",
      benchmarks: "Benchmarks",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "แผนที่ของระบบนิเวศที่อธิบายว่าแต่ละโปรเจกต์ Claw กำลังทำอะไรและอยู่ตรงไหนของ stack",
    clawSection: "ตัวอย่างตระกูล Claw",
    clawNote: "ใช้ Claw Park เมื่อชื่อเริ่มปนกัน จุดสำคัญคือแยก runtime, registry, deployment, research surfaces และ autonomy ออกจากกัน",
    clawProject: "โปรเจกต์",
    clawLayer: "ชั้น",
    clawLayerNames: {
      foundation: "Gateway / foundation",
      registry: "Registry / discovery",
      bundles: "Compatibility / bundles",
      deployment: "Deployment / packaging",
      workspace: "Research workspace",
      copilot: "Daily research copilot",
      desktop: "Desktop / reading surface",
      scientist: "Scientific specialist",
      evolution: "Evolution layer",
      autonomy: "Autonomous pipeline"
    },
    featured: "โปรเจกต์เด่น",
    readingModes: "โหมดการอ่าน",
    readingModeCards: {
      field: ["อ่านเพื่อเข้าใจทั้งสนาม", "Surveys · Systems · Benchmarks"],
      stack: ["สร้าง stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["ทำต้นแบบนอกงานวิจัย", "Vibe Anything"]
    },
    contribute: "วิธีมีส่วนร่วม",
    contributeItems: [
      "เสนอแหล่งข้อมูลผ่าน issue template ของ Resource Suggestion",
      "ส่งอัปเดตผ่าน Pull Request พร้อม metadata ที่ชัดเจน",
      "ทำตามแนวทางการคัดสรรใน docs/curation-guidelines.md"
    ],
    changelog: "อัปเดตล่าสุด",
    changelogText: "2026-W17: ขยายแผนที่ตระกูล Claw ให้สมบูรณ์ขึ้น เพิ่มหน้า landing page หลายภาษาที่เป็นของจริง และชี้ชัดว่าหน้า topic เชิงลึกยังใช้ภาษาอังกฤษเป็นหลักในตอนนี้",
    license: "สัญญาอนุญาต",
    licenseText: "MIT (ดู LICENSE)"
  },
  vi: {
    title: "Hướng dẫn Vibe Research",
    subtitle: "Một hướng dẫn đa ngôn ngữ về Vibe Research, hệ sinh thái Claw, Vibe Coding và các workflow prompt-native lân cận.",
    topicLanguageNote: "Trang landing này đã được bản địa hóa đầy đủ. Các trang topic được liên kết hiện vẫn chủ yếu bằng tiếng Anh.",
    quickstart: "Bắt đầu nhanh",
    quickstartSteps: [
      "Nếu bạn mới vào lĩnh vực này, hãy bắt đầu từ Getting Started và Tools & Platforms.",
      "Nếu bạn muốn so sánh các dự án Claw, hãy vào thẳng Claw Park.",
      "Nếu bạn quan tâm đến tầng thực thi, hãy đọc Vibe Coding sau các trang nghiên cứu chính."
    ],
    heroLabels: ["Bắt đầu", "Công cụ và nền tảng", "Claw Park", "Vibe Coding"],
    toc: "Mục lục",
    whatIs: "Vibe Research là gì?",
    whatIsDesc: "Vibe Research nghiên cứu cách các agent dựa trên LLM có thể hỗ trợ hoặc tự động hóa vòng lặp nghiên cứu: tổng quan tài liệu, tạo ý tưởng, chạy thí nghiệm, viết và đánh giá.",
    glance: "Nhìn nhanh",
    glanceCards: {
      coreQuestion: ["Câu hỏi cốt lõi", "AI có thể đi xa đến đâu từ trợ lý nghiên cứu thành người vận hành nghiên cứu?"],
      shift2026: ["Chuyển dịch 2026", "Copilot mạnh hơn, tầng học tập đã thành hiện thực, hệ thống nghiên cứu đáng tin hơn và coding agent trở thành tầng thực thi."],
      useRepo: ["Cách dùng repo này", "Hãy coi trang này là bản đồ và các trang topic là hướng dẫn thực sự."]
    },
    snapshot: "Toàn cảnh 2026",
    snapshotItems: [
      "Research copilot đang mạnh lên nhờ Deep Research, kiểu đọc có đối chiếu nguồn như NotebookLM và các workspace khoa học như Prism.",
      "Các agent học tập, RL và tự tiến hóa đang trở thành một tầng riêng qua Agent Lightning, Agent0, AgentEvolver, EvoAgentX và các hệ thống memory bền vững như Acontext.",
      "Các hệ thống nghiên cứu tự động đang trưởng thành qua AI Scientist-v2, Agent Laboratory, EvoScientist và các nền tảng AI scientist công khai như FutureHouse Platform và Edison Scientific.",
      "Vibe Coding đang trở thành tầng thực thi cho tự động hóa nghiên cứu vì agent ngày càng cần đọc repo thật, sửa file thật và chạy thí nghiệm thật."
    ],
    learning: "Learning, RL và Agent tự tiến hóa",
    learningNote: "Stack giờ không chỉ còn là các agent biết dùng công cụ. Một tầng học tập riêng đang hình thành quanh việc huấn luyện, cải thiện online, tiến hóa workflow và kỹ năng có thể tái sử dụng lâu dài.",
    learningRows: {
      training: ["Huấn luyện / tối ưu agent", "Mang RL, tối ưu prompt tự động và SFT vào nhiều hệ thống agent khác nhau với rất ít thay đổi mã nguồn."],
      zeroData: ["Tự tiến hóa không cần dữ liệu", "Cho thấy agent có thể tự tạo nhiệm vụ, phản hồi và tín hiệu huấn luyện từ chính quá trình khám phá của mình."],
      workflow: ["Tiến hóa workflow", "Đẩy tối ưu hóa từ một prompt đơn lẻ sang toàn bộ workflow và scientist loop."],
      memory: ["Nền kỹ năng và trí nhớ", "Biến memory, skill tái sử dụng và context bền vững thành một phần của stack cải thiện agent."],
      map: ["Bản đồ landscape", "Bản đồ ngắn gọn nhất cho văn liệu và repo trong hướng self-evolving agents."]
    },
    paths: "Chọn lộ trình",
    startLabel: "Bắt đầu từ",
    thenLabel: "Sau đó",
    pathLabels: {
      newcomer: "Người mới với Vibe Research",
      builder: "Nhà phát triển / Builder",
      researcher: "Nhà nghiên cứu",
      creator: "Creator / Operator"
    },
    ecosystem: "Ảnh chụp hệ sinh thái",
    representativeLabel: "Đại diện",
    ecosystemRows: {
      copilots: ["Research copilots", "Hỗ trợ đọc, tổng hợp và viết khoa học nhanh hơn."],
      systems: ["Research systems", "Hỗ trợ và tự động hóa nghiên cứu đầu-cuối."],
      platforms: ["Nền tảng AI scientist", "Cho thấy lĩnh vực đang chuyển từ paper và demo sang các bề mặt nền tảng công khai hoặc thương mại."],
      learning: ["Tầng learning / self-evolving", "Biến huấn luyện agent, dữ liệu tự sinh, tiến hóa workflow và memory bền vững thành một tầng thực sự."],
      claw: ["Hệ sinh thái Claw", "Bao trùm gateway, registry, compatibility, deployment, research surfaces, chuyên biệt khoa học và các pipeline tự trị."],
      execution: ["Tầng thực thi", "Các repo và workflow coding cung cấp năng lực thực thi."],
      adjacent: ["Công cụ lân cận", "Công cụ tạo mẫu hữu ích nhưng nằm ngoài lõi nghiên cứu."]
    },
    clawStack: "Các lớp của họ Claw",
    clawStackNote: "Claw giờ là một stack hoàn chỉnh: runtime, registry, bundle compatibility, deployment, research surfaces, specialist layers và autonomy.",
    clawStackRows: {
      foundation: ["Gateway / nền tảng", "Runtime cốt lõi, bề mặt điều khiển và điểm vào chính của hệ sinh thái."],
      registry: ["Registry / khám phá", "Tìm kiếm, xuất bản, so sánh và cài đặt skill và plugin."],
      bundles: ["Compatibility / bundles", "Tái sử dụng định dạng bundle của Codex, Claude và Cursor bên trong OpenClaw."],
      deployment: ["Deployment / đóng gói", "Cài đặt, nâng cấp và rollback có thể tái lập cho môi trường tự host."],
      surfaces: ["Research surfaces", "Bao gồm workspace, copilot hằng ngày và các bề mặt đọc tài liệu."],
      specialist: ["Chuyên gia khoa học / tiến hóa", "Đẩy sâu hơn vào chuyên biệt khoa học, memory và online learning."],
      autonomy: ["Pipeline tự trị", "Hướng idea-to-paper với mức tự động hóa cao nhất."]
    },
    connectors: "Plugin, cầu nối và đầu nối nghiên cứu",
    connectorNote: "Giờ đây có thêm một tầng nằm giữa agent và workflow: bề mặt plugin, registry, danh mục skill và cầu nối chat.",
    connectorRows: {
      bridge: ["Bridge & control surfaces", "Vận hành coding agent và research agent từ Feishu/Lark, Slack, Telegram và các ứng dụng chat tương tự."],
      plugin: ["Tầng plugin", "Hệ sinh thái agent đang chuyển sang marketplace cho skill, bundle compatibility và các capability pack tái sử dụng."],
      memory: ["Nền learning / memory", "Context bền vững và skill tái sử dụng đang bắt đầu hoạt động như hạ tầng cho việc cải thiện agent."],
      registry: ["Registry & discovery", "Khám phá và cài đặt đang trở thành phần hạ tầng hạng nhất của hệ sinh thái."],
      research: ["Research connectors", "Agent có thể kết nối trực tiếp tới đồ thị tài liệu, code artifacts và benchmark metadata."]
    },
    ccSignals: "Tín hiệu Claude Code gần đây",
    ccSignalNote: "Lớp Claude Code đang mở rộng rất nhanh vượt khỏi binary cốt lõi sang skills, marketplace, routing, multi-agent ops và các workflow framework có cấu trúc.",
    ccSignalRows: {
      skills: ["Tầng skill chính thức", "Anthropic đang biến Agent Skills công khai thành nguồn năng lực Claude Code có thể tái sử dụng."],
      community: ["Marketplace cộng đồng", "Một hệ sinh thái cộng đồng lớn cho agent, command, hook và skill của Claude Code."],
      framework: ["Tầng meta-framework", "Cho thấy người dùng đang bọc Claude Code bằng persona, command và quy ước workflow."],
      ops: ["Tầng routing và vận hành", "Routing, quản lý multi-agent, task system và đóng gói repo đang trở thành hạ tầng thực thi."]
    },
    guides: "Bản đồ hướng dẫn",
    guideTopic: "Chủ đề",
    guideLink: "Liên kết",
    guideTrackLabels: {
      gettingStarted: "Bắt đầu",
      tools: "Công cụ và nền tảng",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Khảo sát",
      systems: "Hệ thống",
      benchmarks: "Đánh giá",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Một bản đồ hệ sinh thái để giải thích mỗi dự án Claw đang làm gì và nó nằm ở đâu.",
    clawSection: "Xem trước họ Claw",
    clawNote: "Hãy dùng Claw Park khi các tên bắt đầu bị lẫn vào nhau. Điều quan trọng là tách runtime, registry, deployment, research surfaces và autonomy.",
    clawProject: "Dự án",
    clawLayer: "Lớp",
    clawLayerNames: {
      foundation: "Gateway / nền tảng",
      registry: "Registry / khám phá",
      bundles: "Compatibility / bundles",
      deployment: "Deployment / đóng gói",
      workspace: "Research workspace",
      copilot: "Copilot nghiên cứu hằng ngày",
      desktop: "Desktop / bề mặt đọc",
      scientist: "Chuyên gia khoa học",
      evolution: "Tầng tiến hóa",
      autonomy: "Pipeline tự trị"
    },
    featured: "Dự án nổi bật",
    readingModes: "Chế độ đọc",
    readingModeCards: {
      field: ["Đọc toàn cảnh lĩnh vực", "Surveys · Systems · Benchmarks"],
      stack: ["Xây stack", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Tạo mẫu ngoài nghiên cứu", "Vibe Anything"]
    },
    contribute: "Cách đóng góp",
    contributeItems: [
      "Đề xuất tài nguyên qua issue template Resource Suggestion.",
      "Gửi cập nhật bằng Pull Request với metadata rõ ràng.",
      "Làm theo hướng dẫn tuyển chọn trong docs/curation-guidelines.md."
    ],
    changelog: "Cập nhật gần đây",
    changelogText: "2026-W17: mở rộng bản đồ họ Claw, thêm landing page đa ngôn ngữ thực sự và làm rõ rằng các trang topic sâu hơn hiện vẫn ưu tiên tiếng Anh.",
    license: "Giấy phép",
    licenseText: "MIT (xem LICENSE)."
  },
  ru: {
    title: "Гид по Vibe Research",
    subtitle: "Многоязычный гид по Vibe Research, экосистеме Claw, Vibe Coding и соседним prompt-native рабочим процессам.",
    topicLanguageNote: "Эта landing page полностью локализована. Связанные topic pages пока в основном остаются англоязычными.",
    quickstart: "Быстрый старт",
    quickstartSteps: [
      "Если вы только входите в тему, начните с Getting Started и Tools & Platforms.",
      "Если вы сравниваете проекты Claw, сразу переходите в Claw Park.",
      "Если вас интересует исполнительный слой, читайте Vibe Coding после основных исследовательских страниц."
    ],
    heroLabels: ["Старт", "Инструменты и платформы", "Claw Park", "Vibe Coding"],
    toc: "Содержание",
    whatIs: "Что такое Vibe Research?",
    whatIsDesc: "Vibe Research изучает, как агенты на базе LLM могут поддерживать или автоматизировать исследовательский цикл: обзор литературы, генерацию идей, запуск экспериментов, письмо и оценку.",
    glance: "Кратко",
    glanceCards: {
      coreQuestion: ["Ключевой вопрос", "Насколько далеко AI может продвинуться от исследовательского помощника к исследовательскому оператору?"],
      shift2026: ["Сдвиг 2026", "Копилоты стали сильнее, слой обучения стал реальным, исследовательские системы стали убедительнее, а coding agents стали исполнительным слоем."],
      useRepo: ["Как использовать этот репозиторий", "Смотрите на эту страницу как на карту, а на topic pages как на сам гид."]
    },
    snapshot: "Ландшафт 2026",
    snapshotItems: [
      "Research copilots усиливаются за счет Deep Research, чтения с опорой на источники в стиле NotebookLM и научных рабочих пространств вроде Prism.",
      "Агенты обучения, RL и self-evolving становятся отдельным слоем благодаря Agent Lightning, Agent0, AgentEvolver, EvoAgentX и системам устойчивой памяти вроде Acontext.",
      "Автономные исследовательские системы взрослеют через AI Scientist-v2, Agent Laboratory, EvoScientist и публичные платформы AI scientist вроде FutureHouse Platform и Edison Scientific.",
      "Vibe Coding становится исполнительным слоем для автоматизации исследований, потому что агентам все чаще нужно читать реальные репозитории, менять файлы и запускать эксперименты."
    ],
    learning: "Learning, RL и self-evolving agents",
    learningNote: "Стек уже не сводится только к агентам, умеющим вызывать инструменты. Возникает отдельный слой вокруг обучения, онлайн-улучшения, эволюции workflow и устойчивых переиспользуемых навыков.",
    learningRows: {
      training: ["Обучение / оптимизация агентов", "Добавляет RL, автоматическую оптимизацию промптов и SFT в произвольные агентные системы почти без изменений кода."],
      zeroData: ["Самоэволюция без данных", "Показывает, что агенты могут сами генерировать задачи, обратную связь и обучающий сигнал из собственного исследования."],
      workflow: ["Эволюция workflow", "Смещает оптимизацию от одиночных промптов к целым workflow и scientist loops."],
      memory: ["Основа навыков и памяти", "Делает память, переиспользуемые навыки и устойчивый контекст частью стека улучшения агента."],
      map: ["Карта направления", "Самая компактная карта литературы и репозиториев по self-evolving agents."]
    },
    paths: "Выберите маршрут",
    startLabel: "Начать с",
    thenLabel: "Затем",
    pathLabels: {
      newcomer: "Новичок в Vibe Research",
      builder: "Разработчик / Builder",
      researcher: "Исследователь",
      creator: "Creator / Operator"
    },
    ecosystem: "Снимок экосистемы",
    representativeLabel: "Примеры",
    ecosystemRows: {
      copilots: ["Research copilots", "Быстрое чтение, синтез и помощь в научном письме."],
      systems: ["Research systems", "Сквозная поддержка и автоматизация исследований."],
      platforms: ["Платформы AI scientist", "Показывают переход поля от статей и демо к постоянным публичным или коммерческим платформам."],
      learning: ["Слой learning / self-evolving", "Превращает обучение агентов, самогенерируемые данные, эволюцию workflow и устойчивую память в реальный слой стека."],
      claw: ["Экосистема Claw", "Охватывает gateway, registry, compatibility, deployment, research surfaces, научную специализацию и автономные пайплайны."],
      execution: ["Исполнительный слой", "Репозитории и coding workflow, которые обеспечивают выполнение."],
      adjacent: ["Соседние инструменты", "Полезные инструменты прототипирования вне исследовательского ядра."]
    },
    clawStack: "Слои семейства Claw",
    clawStackNote: "Claw теперь это не один продукт, а целый стек: runtime, registry, bundle compatibility, deployment, research surfaces, specialist layers и autonomy.",
    clawStackRows: {
      foundation: ["Gateway / основа", "Базовый runtime, поверхность управления и главная точка входа в экосистему."],
      registry: ["Registry / discovery", "Поиск, публикация, сравнение и установка навыков и плагинов."],
      bundles: ["Compatibility / bundles", "Повторное использование форматов bundle от Codex, Claude и Cursor внутри OpenClaw."],
      deployment: ["Deployment / упаковка", "Воспроизводимая установка, обновления и rollback для self-hosted окружений."],
      surfaces: ["Research surfaces", "Включает workspace, ежедневных copilot и поверхности для чтения."],
      specialist: ["Научная специализация / эволюция", "Двигает глубже в сторону научной специализации, памяти и онлайн-обучения."],
      autonomy: ["Автономный pipeline", "Направление idea-to-paper с максимальной автономностью."]
    },
    connectors: "Плагины, мосты и исследовательские коннекторы",
    connectorNote: "Теперь между агентом и workflow существует новый слой: plugin surfaces, registry, каталоги skills и chat bridges.",
    connectorRows: {
      bridge: ["Bridge & control surfaces", "Позволяют управлять coding agent и research agent из Feishu/Lark, Slack, Telegram и похожих чат-приложений."],
      plugin: ["Слой плагинов", "Экосистемы агентов движутся к skill marketplace, bundle compatibility и переиспользуемым capability packs."],
      memory: ["Основа learning / memory", "Устойчивый контекст и переиспользуемые навыки начинают работать как инфраструктура улучшения агентов."],
      registry: ["Registry & discovery", "Поиск и установка становятся первоклассной частью экосистемы."],
      research: ["Research connectors", "Агенты могут напрямую подключаться к графам литературы, code artifacts и benchmark metadata."]
    },
    ccSignals: "Свежие сигналы Claude Code",
    ccSignalNote: "Слой Claude Code быстро расширяется за пределы базового бинарника в сторону skills, marketplace, routing, multi-agent ops и структурированных workflow framework.",
    ccSignalRows: {
      skills: ["Официальный слой skills", "Anthropic превращает публичные Agent Skills в переиспользуемый источник возможностей Claude Code."],
      community: ["Сообщественный marketplace", "Крупная экосистема сообщества для Claude Code agents, commands, hooks и skills."],
      framework: ["Слой meta-framework", "Показывает, как пользователи оборачивают Claude Code персонами, командами и workflow conventions."],
      ops: ["Слой routing и ops", "Routing, управление multi-agent, task systems и упаковка репозиториев становятся инфраструктурой исполнения."]
    },
    guides: "Карта гайда",
    guideTopic: "Тема",
    guideLink: "Ссылка",
    guideTrackLabels: {
      gettingStarted: "Старт",
      tools: "Инструменты и платформы",
      clawPark: "Claw Park",
      vibeCoding: "Vibe Coding",
      surveys: "Обзоры",
      systems: "Системы",
      benchmarks: "Бенчмарки",
      vibeAnything: "Vibe Anything"
    },
    clawPark: "Claw Park",
    clawParkDesc: "Карта экосистемы, объясняющая, что делает каждый проект Claw и где он находится.",
    clawSection: "Превью семейства Claw",
    clawNote: "Используйте Claw Park, когда названия начинают сливаться. Важно разделять runtime, registry, deployment, research surfaces и autonomy.",
    clawProject: "Проект",
    clawLayer: "Слой",
    clawLayerNames: {
      foundation: "Gateway / основа",
      registry: "Registry / discovery",
      bundles: "Compatibility / bundles",
      deployment: "Deployment / упаковка",
      workspace: "Research workspace",
      copilot: "Ежедневный research copilot",
      desktop: "Desktop / поверхность чтения",
      scientist: "Научная специализация",
      evolution: "Слой эволюции",
      autonomy: "Автономный pipeline"
    },
    featured: "Ключевые проекты",
    readingModes: "Режимы чтения",
    readingModeCards: {
      field: ["Изучить поле", "Surveys · Systems · Benchmarks"],
      stack: ["Собрать стек", "Tools & Platforms · Claw Park · Vibe Coding"],
      beyond: ["Прототипировать вне исследований", "Vibe Anything"]
    },
    contribute: "Как помочь",
    contributeItems: [
      "Предложите ресурс через issue template Resource Suggestion.",
      "Отправляйте обновления через Pull Request с понятными metadata.",
      "Следуйте правилам курации в docs/curation-guidelines.md."
    ],
    changelog: "Последние обновления",
    changelogText: "2026-W17: карта семейства Claw стала полнее, landing page получила реальную многоязычную локализацию, а для глубоких topic pages явно отмечено, что они пока в основном англоязычные.",
    license: "Лицензия",
    licenseText: "MIT (см. LICENSE)."
  }
};

const heroLinks = [
  "./topics/getting-started.md",
  "./topics/tools.md",
  "./topics/claw-park.md",
  "./topics/vibe-coding.md"
];

const guideTracks = [
  { key: "gettingStarted", url: "./topics/getting-started.md" },
  { key: "tools", url: "./topics/tools.md" },
  { key: "clawPark", url: "./topics/claw-park.md" },
  { key: "vibeCoding", url: "./topics/vibe-coding.md" },
  { key: "surveys", url: "./topics/surveys.md" },
  { key: "systems", url: "./topics/systems.md" },
  { key: "benchmarks", url: "./topics/benchmarks.md" },
  { key: "vibeAnything", url: "./topics/vibe-anything.md" }
];

const glanceKeys = ["coreQuestion", "shift2026", "useRepo"];
const beyondRowsData = [
  { key: "assistants", examples: "OpenClaw, Hermes Agent, Goose, Khoj, AnythingLLM" },
  { key: "software", examples: "CLI-Anything, cc-connect, Official MCP Registry, anthropics/skills, ClawHub" },
  { key: "companion", examples: "Crush, Vibe Island, xisland" }
];
const learningRowsData = [
  { key: "training", examples: "Agent Lightning" },
  { key: "zeroData", examples: "Agent0, AgentEvolver" },
  { key: "workflow", examples: "EvoAgentX, EvoScientist, MetaClaw" },
  { key: "memory", examples: "Acontext, anthropics/skills" },
  { key: "map", examples: "Awesome-Self-Evolving-Agents" }
];
const pathRowsData = [
  { key: "newcomer", start: "./topics/getting-started.md", then: "./topics/tools.md" },
  { key: "builder", start: "./topics/tools.md", then: "./topics/vibe-coding.md" },
  { key: "researcher", start: "./topics/surveys.md", then: "./topics/benchmarks.md" },
  { key: "creator", start: "./topics/vibe-anything.md", then: "./topics/vibe-coding.md" }
];
const ecosystemRowsData = [
  { key: "copilots", examples: "Deep Research, NotebookLM, Prism" },
  { key: "systems", examples: "InnoClaw, ResearchClaw, FARS, AI Scientist, Agent Laboratory, EvoScientist" },
  { key: "platforms", examples: "FutureHouse Platform, Robin, Edison Scientific, Kosmos" },
  { key: "learning", examples: "Agent Lightning, Agent0, AgentEvolver, EvoAgentX, Acontext" },
  { key: "claw", examples: "OpenClaw, ClawHub, Plugin Bundles, nix-openclaw, ResearchClaw, ScienceClaw, MetaClaw, AutoResearchClaw" },
  { key: "execution", examples: "Claude Code, Codex, Cursor Background Agents, Copilot Coding Agent" },
  { key: "adjacent", examples: "v0, Lovable, Replit Agent" }
];
const clawStackRowsData = [
  { key: "foundation", examples: "OpenClaw" },
  { key: "registry", examples: "ClawHub, awesome-openclaw-skills" },
  { key: "bundles", examples: "OpenClaw Plugin Bundles" },
  { key: "deployment", examples: "nix-openclaw" },
  { key: "surfaces", examples: "InnoClaw, ResearchClaw, ResearchClaw Desktop App" },
  { key: "specialist", examples: "ScienceClaw, MetaClaw" },
  { key: "autonomy", examples: "AutoResearchClaw" }
];
const connectorRowsData = [
  { key: "bridge", examples: "cc-connect" },
  { key: "plugin", examples: "CLI-Anything, ClawHub, OpenClaw Plugin Bundles, Claude Code hooks / slash commands / subagents" },
  { key: "memory", examples: "Acontext, anthropics/skills" },
  { key: "registry", examples: "Official MCP Registry, awesome-mcp-servers, awesome-openclaw-skills" },
  { key: "research", examples: "OpenAlex Research MCP, Academia MCP, PapersWithCode MCP" }
];
const ccSignalRowsData = [
  { key: "skills", examples: "anthropics/skills" },
  { key: "community", examples: "wshobson/agents" },
  { key: "framework", examples: "SuperClaude Framework" },
  { key: "ops", examples: "claude-code-router, Claude Squad, claude-task-master, Repomix" }
];
const clawProjects = [
  { name: "OpenClaw", layer: "foundation", url: "https://github.com/openclaw/openclaw" },
  { name: "ClawHub", layer: "registry", url: "https://github.com/openclaw/clawhub" },
  { name: "Plugin Bundles", layer: "bundles", url: "https://docs.openclaw.ai/plugins/bundles" },
  { name: "nix-openclaw", layer: "deployment", url: "https://github.com/openclaw/nix-openclaw" },
  { name: "InnoClaw", layer: "workspace", url: "https://github.com/SpectrAI-Initiative/InnoClaw" },
  { name: "ResearchClaw", layer: "copilot", url: "https://github.com/ymx10086/ResearchClaw" },
  { name: "ResearchClaw Desktop App", layer: "desktop", url: "https://noietch.github.io/ResearchClaw/" },
  { name: "ScienceClaw", layer: "scientist", url: "https://github.com/beita6969/ScienceClaw" },
  { name: "ScienceClaw (alt repo)", layer: "scientist", url: "https://github.com/Zaoqu-Liu/ScienceClaw" },
  { name: "MetaClaw", layer: "evolution", url: "https://github.com/aiming-lab/MetaClaw" },
  { name: "AutoResearchClaw", layer: "autonomy", url: "https://github.com/aiming-lab/AutoResearchClaw" },
  { name: "awesome-openclaw-skills", layer: "registry", url: "https://github.com/sundial-org/awesome-openclaw-skills" }
];
const featuredProjects = [
  ["OpenClaw", "https://github.com/openclaw/openclaw"],
  ["Hermes Agent", "https://github.com/NousResearch/Hermes-Agent"],
  ["Goose", "https://github.com/block/goose"],
  ["Khoj", "https://github.com/khoj-ai/khoj"],
  ["AnythingLLM", "https://github.com/Mintplex-Labs/anything-llm"],
  ["CLI-Anything", "https://github.com/HKUDS/CLI-Anything"],
  ["Agent Lightning", "https://github.com/microsoft/agent-lightning"],
  ["Vibe Island", "https://vibeisland.app/"]
];
const readingModeKeys = ["field", "stack", "beyond"];
const langButtons = ["en", "zh", "ko", "ja", "de", "fr", "es", "it", "pt", "ar", "th", "vi", "ru"];
const landingUpdateText = {
  en: "2026-04-15: expanded the guide from a research-only map into a research-first broader agent-native landscape, adding personal assistants, software / harness layers, and companion coding apps.",
  zh: "2026-04-15：把这个指南从偏研究单线地图扩展成了 research-first 的更广义 agent-native 版图，新增了个人助手、software / harness 层，以及 companion coding apps。"
};

function getTranslation(lang, key) {
  const current = translations[lang] || translations.en;
  return current[key] !== undefined ? current[key] : translations.en[key];
}

function getGroupItem(lang, group, key) {
  const currentGroup = (translations[lang] && translations[lang][group]) || {};
  const fallbackGroup = translations.en[group] || {};
  return currentGroup[key] || fallbackGroup[key];
}

function applyLanguageState(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = getTranslation(lang, "title");
}

function render(lang) {
  const glanceCards = glanceKeys.map((key) => {
    const [title, text] = getGroupItem(lang, "glanceCards", key);
    return `<div class="card span-4"><span class="eyebrow">${title}</span><p>${text}</p></div>`;
  }).join("");

  const beyondRows = beyondRowsData.map(({ key, examples }) => {
    const [title, why] = getGroupItem(lang, "beyondResearchRows", key);
    return `<div class="card span-4"><span class="eyebrow">${title}</span><p><strong>${getTranslation(lang, "representativeLabel")}:</strong> ${examples}</p><p>${why}</p></div>`;
  }).join("");

  const learningRows = learningRowsData.map(({ key, examples }) => {
    const [title, why] = getGroupItem(lang, "learningRows", key);
    return `<div class="card span-6"><span class="eyebrow">${title}</span><p><strong>${getTranslation(lang, "representativeLabel")}:</strong> ${examples}</p><p>${why}</p></div>`;
  }).join("");

  const pathRows = pathRowsData.map(({ key, start, then }) =>
    `<div class="card span-6"><h3>${getGroupItem(lang, "pathLabels", key)}</h3><p><strong>${getTranslation(lang, "startLabel")}:</strong> <a href="${start}">${start}</a></p><p><strong>${getTranslation(lang, "thenLabel")}:</strong> <a href="${then}">${then}</a></p></div>`
  ).join("");

  const ecosystemRows = ecosystemRowsData.map(({ key, examples }) => {
    const [title, why] = getGroupItem(lang, "ecosystemRows", key);
    return `<div class="card span-6"><span class="eyebrow">${title}</span><p><strong>${getTranslation(lang, "representativeLabel")}:</strong> ${examples}</p><p>${why}</p></div>`;
  }).join("");

  const clawStackRows = clawStackRowsData.map(({ key, examples }) => {
    const [title, why] = getGroupItem(lang, "clawStackRows", key);
    return `<div class="card span-6"><span class="eyebrow">${title}</span><p><strong>${getTranslation(lang, "representativeLabel")}:</strong> ${examples}</p><p>${why}</p></div>`;
  }).join("");

  const connectorRows = connectorRowsData.map(({ key, examples }) => {
    const [title, why] = getGroupItem(lang, "connectorRows", key);
    return `<div class="card span-6"><span class="eyebrow">${title}</span><p><strong>${getTranslation(lang, "representativeLabel")}:</strong> ${examples}</p><p>${why}</p></div>`;
  }).join("");

  const ccSignalRows = ccSignalRowsData.map(({ key, examples }) => {
    const [title, why] = getGroupItem(lang, "ccSignalRows", key);
    return `<div class="card span-6"><span class="eyebrow">${title}</span><p><strong>${getTranslation(lang, "representativeLabel")}:</strong> ${examples}</p><p>${why}</p></div>`;
  }).join("");

  const guideRows = guideTracks.map(({ key, url }) =>
    `<tr><td>${getGroupItem(lang, "guideTrackLabels", key)}</td><td><a href="${url}">${url}</a></td></tr>`
  ).join("");

  const clawRows = clawProjects.map(({ name, layer, url }) =>
    `<tr><td><a href="${url}">${name}</a></td><td>${getGroupItem(lang, "clawLayerNames", layer)}</td></tr>`
  ).join("");

  const heroLinksHtml = heroLinks.map((url, i) =>
    `<a class="hero-link" href="${url}">${getTranslation(lang, "heroLabels")[i]}</a>`
  ).join("");

  const modeCards = readingModeKeys.map((key) => {
    const [title, text] = getTranslation(lang, "readingModeCards")[key];
    return `<div class="card span-4"><h3>${title}</h3><p>${text}</p></div>`;
  }).join("");

  return `
    <div class="hero">
      <div class="badges">
        <a href="https://github.com/SpectrAI-Initiative/Vibe-Research-Guide/stargazers"><img src="https://img.shields.io/github/stars/SpectrAI-Initiative/Vibe-Research-Guide?style=social" alt="stars"></a>
        <a href="https://github.com/SpectrAI-Initiative/Vibe-Research-Guide/commits/main"><img src="https://img.shields.io/github/last-commit/SpectrAI-Initiative/Vibe-Research-Guide" alt="last commit"></a>
        <a href="https://github.com/SpectrAI-Initiative/Vibe-Research-Guide/issues"><img src="https://img.shields.io/github/issues/SpectrAI-Initiative/Vibe-Research-Guide" alt="issues"></a>
        <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
      </div>
      <h1>${getTranslation(lang, "title")}</h1>
      <blockquote>${getTranslation(lang, "subtitle")}</blockquote>
      <p>${getTranslation(lang, "topicLanguageNote")}</p>
      <div class="hero-links">${heroLinksHtml}</div>
    </div>

    <h2>${getTranslation(lang, "quickstart")}</h2>
    <ol>${getTranslation(lang, "quickstartSteps").map((step) => `<li>${step}</li>`).join("")}</ol>

    <h2>${getTranslation(lang, "toc")}</h2>
    <ul>
      <li><a href="#what">${getTranslation(lang, "whatIs")}</a></li>
      <li><a href="#snapshot">${getTranslation(lang, "snapshot")}</a></li>
      <li><a href="#beyond-research">${getTranslation(lang, "beyondResearch")}</a></li>
      <li><a href="#learning">${getTranslation(lang, "learning")}</a></li>
      <li><a href="#paths">${getTranslation(lang, "paths")}</a></li>
      <li><a href="#ecosystem">${getTranslation(lang, "ecosystem")}</a></li>
      <li><a href="#claw-stack">${getTranslation(lang, "clawStack")}</a></li>
      <li><a href="#connectors">${getTranslation(lang, "connectors")}</a></li>
      <li><a href="#cc-signals">${getTranslation(lang, "ccSignals")}</a></li>
      <li><a href="#guides">${getTranslation(lang, "guides")}</a></li>
      <li><a href="#claw">${getTranslation(lang, "clawSection")}</a></li>
      <li><a href="#featured">${getTranslation(lang, "featured")}</a></li>
      <li><a href="#contribute">${getTranslation(lang, "contribute")}</a></li>
      <li><a href="#license">${getTranslation(lang, "license")}</a></li>
    </ul>

    <h2 id="what">${getTranslation(lang, "whatIs")}</h2>
    <p>${getTranslation(lang, "whatIsDesc")}</p>

    <h2>${getTranslation(lang, "glance")}</h2>
    <div class="grid">${glanceCards}</div>

    <h2 id="snapshot">${getTranslation(lang, "snapshot")}</h2>
    <ul>${getTranslation(lang, "snapshotItems").map((item) => `<li>${item}</li>`).join("")}</ul>

    <h2 id="beyond-research">${getTranslation(lang, "beyondResearch")}</h2>
    <p class="section-note">${getTranslation(lang, "beyondResearchNote")}</p>
    <div class="grid">${beyondRows}</div>

    <h2 id="learning">${getTranslation(lang, "learning")}</h2>
    <p class="section-note">${getTranslation(lang, "learningNote")}</p>
    <div class="grid">${learningRows}</div>

    <h2 id="paths">${getTranslation(lang, "paths")}</h2>
    <div class="grid">${pathRows}</div>

    <h2 id="ecosystem">${getTranslation(lang, "ecosystem")}</h2>
    <div class="grid">${ecosystemRows}</div>

    <h2 id="claw-stack">${getTranslation(lang, "clawStack")}</h2>
    <p class="section-note">${getTranslation(lang, "clawStackNote")}</p>
    <div class="grid">${clawStackRows}</div>

    <h2 id="connectors">${getTranslation(lang, "connectors")}</h2>
    <p class="section-note">${getTranslation(lang, "connectorNote")}</p>
    <div class="grid">${connectorRows}</div>

    <h2 id="cc-signals">${getTranslation(lang, "ccSignals")}</h2>
    <p class="section-note">${getTranslation(lang, "ccSignalNote")}</p>
    <div class="grid">${ccSignalRows}</div>

    <h2 id="guides">${getTranslation(lang, "guides")}</h2>
    <table>
      <tr><th>${getTranslation(lang, "guideTopic")}</th><th>${getTranslation(lang, "guideLink")}</th></tr>
      ${guideRows}
    </table>

    <div class="callout">
      <strong>${getTranslation(lang, "clawPark")}:</strong> ${getTranslation(lang, "clawParkDesc")}
    </div>

    <h2 id="claw">${getTranslation(lang, "clawSection")}</h2>
    <p class="section-note">${getTranslation(lang, "clawNote")}</p>
    <table>
      <tr><th>${getTranslation(lang, "clawProject")}</th><th>${getTranslation(lang, "clawLayer")}</th></tr>
      ${clawRows}
    </table>

    <h2 id="featured">${getTranslation(lang, "featured")}</h2>
    <div class="cta-strip">
      ${featuredProjects.map(([name, url]) => `<a class="cta-box" href="${url}">${name}</a>`).join("")}
    </div>

    <h2>${getTranslation(lang, "readingModes")}</h2>
    <div class="grid">${modeCards}</div>

    <h2 id="contribute">${getTranslation(lang, "contribute")}</h2>
    <ul>${getTranslation(lang, "contributeItems").map((item) => `<li>${item}</li>`).join("")}</ul>

    <h2>${getTranslation(lang, "changelog")}</h2>
    <p>${landingUpdateText[lang] || landingUpdateText.en}</p>

    <h2 id="license">${getTranslation(lang, "license")}</h2>
    <p>${getTranslation(lang, "licenseText")}</p>
  `;
}

langButtons.forEach((lang) => {
  const el = document.getElementById("content-" + lang);
  if (el) el.innerHTML = render(lang);
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll(".content").forEach((c) => c.classList.remove("active"));
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
    const target = document.getElementById("content-" + lang);
    if (target) {
      target.classList.add("active");
      applyLanguageState(lang);
    }
    btn.classList.add("active");
    try { localStorage.setItem("vibe-lang", lang); } catch (e) {}
  });
});

try {
  const saved = localStorage.getItem("vibe-lang");
  if (saved && document.getElementById("content-" + saved)) {
    document.querySelectorAll(".content").forEach((c) => c.classList.remove("active"));
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
    document.getElementById("content-" + saved).classList.add("active");
    document.querySelector('.lang-btn[data-lang="' + saved + '"]').classList.add("active");
    applyLanguageState(saved);
  }
} catch (e) {}

if (!document.querySelector(".content.active")) {
  const fallback = document.getElementById("content-en");
  if (fallback) fallback.classList.add("active");
}
applyLanguageState(document.querySelector(".content.active")?.dataset.lang || "en");
