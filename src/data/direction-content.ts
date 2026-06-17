export const directionContent = {
  "ai-for-science": {
    label: { en: "AI for Science", zh: "AI for Science" },
    description: {
      en: "Leveraging AI to accelerate breakthroughs in environmental science and materials discovery, from molecular modeling to experiment design.",
      zh: "利用人工智能加速环境科学与材料科学中的发现流程，从分子建模到实验设计优化。",
    },
    subdirections: {
      environment: {
        label: { en: "Environment", zh: "环境科学" },
        description: {
          en: "Climate modeling, environmental monitoring, and sustainability-oriented intelligence systems.",
          zh: "聚焦气候建模、环境监测与面向可持续发展的智能分析系统。",
        },
      },
      material: {
        label: { en: "Material", zh: "材料科学" },
        description: {
          en: "AI-driven material property prediction, screening, and inverse design for scientific discovery.",
          zh: "通过人工智能进行材料性质预测、筛选与反向设计，加速新材料发现。",
        },
      },
    },
    memberIds: ["tm1", "tm5"],
  },
  "social-computing": {
    label: { en: "Social Computing", zh: "Social Computing" },
    description: {
      en: "Studying social structures, information diffusion, and online behavior with computational models and large-scale data.",
      zh: "通过计算模型与大规模数据分析研究社会结构、信息传播与在线行为。",
    },
    subdirections: {
      "social-bot": {
        label: { en: "Social Bot Detection", zh: "社交机器人检测" },
        description: {
          en: "Identifying coordinated bot behavior and improving the robustness of online trust systems.",
          zh: "识别协同机器人行为，提升在线平台信任与安全分析能力。",
        },
      },
      "social-science": {
        label: { en: "Social Science", zh: "计算社会科学" },
        description: {
          en: "Applying data-driven methods to opinion dynamics, networks, and digital society research.",
          zh: "以数据驱动方法研究舆论演化、社交网络与数字社会现象。",
        },
      },
    },
    memberIds: ["tm4"],
  },
  "general-ai": {
    label: { en: "General AI", zh: "General AI" },
    description: {
      en: "Advancing large models, autonomous agents, and world models to build more capable and reliable intelligence systems.",
      zh: "围绕大模型、智能体与世界模型推进更强、更可靠的通用智能系统。",
    },
    subdirections: {
      "llm-post-training": {
        label: { en: "LLM Post-Training", zh: "大模型后训练" },
        description: {
          en: "Improving instruction-following, reasoning quality, and alignment after pretraining.",
          zh: "提升预训练后模型的指令遵循、推理质量与对齐能力。",
        },
      },
      "llm-agent": {
        label: { en: "LLM Agent", zh: "大模型智能体" },
        description: {
          en: "Building agent systems that can plan, act, and collaborate across real tasks and tools.",
          zh: "构建能够规划、执行并协同完成真实任务的大模型智能体系统。",
        },
      },
      "llm-application": {
        label: { en: "LLM Application", zh: "大模型应用" },
        description: {
          en: "Designing practical AI products and workflows built on top of foundation models.",
          zh: "设计基于基础模型的实用产品形态与高价值工作流应用。",
        },
      },
      "world-model": {
        label: { en: "World Model", zh: "世界模型" },
        description: {
          en: "Learning structured representations that support simulation, prediction, and long-horizon planning.",
          zh: "学习支持模拟、预测与长程规划的结构化世界表示。",
        },
      },
    },
    memberIds: ["tm3", "tm6"],
  },
  "physical-ai": {
    label: { en: "Physical AI", zh: "Physical AI" },
    description: {
      en: "Connecting perception, reasoning, and control to create embodied agents that can operate in the physical world.",
      zh: "打通感知、推理与控制，构建能够在真实世界中行动的具身智能系统。",
    },
    subdirections: {
      robotics: {
        label: { en: "Robotics", zh: "机器人" },
        description: {
          en: "Language-guided robotics, manipulation, and embodied decision-making for real-world settings.",
          zh: "面向真实场景的语言引导机器人、操作学习与具身决策研究。",
        },
      },
    },
    memberIds: ["tm2"],
  },
} as const;
