// Research directions
export const researchDirections = [
  {
    id: "ai-for-science",
    name: "AI for Science",
    icon: "flask",
    color: "#3B82F6",
    subdirections: [
      { id: "environment", name: "Environment" },
      { id: "material", name: "Material" }
    ]
  },
  {
    id: "social-computing",
    name: "Social Computing",
    icon: "users",
    color: "#8B5CF6",
    subdirections: [
      { id: "social-bot", name: "Social Bot Detection" },
      { id: "social-science", name: "Social Science" }
    ]
  },
  {
    id: "general-ai",
    name: "General AI",
    icon: "brain",
    color: "#10B981",
    subdirections: [
      { id: "llm-post-training", name: "LLM Post-Training" },
      { id: "llm-agent", name: "LLM Agent" },
      { id: "llm-application", name: "LLM Application" },
      { id: "world-model", name: "World Model" }
    ]
  },
  {
    id: "physical-ai",
    name: "Physical AI",
    icon: "bot",
    color: "#F59E0B",
    subdirections: [
      { id: "robotics", name: "Robotics" }
    ]
  }
] as const;

// Publications
export const papers = [
  {
    id: "p1",
    title: "Neural Potential Energy Surfaces for Molecular Dynamics Simulation",
    authors: ["Zhang W.", "Li J.", "Wang X."],
    year: 2024,
    venue: "Nature Machine Intelligence",
    direction: "ai-for-science",
    citations: 156,
    abstract: "We present a novel deep learning architecture for predicting potential energy surfaces of molecular systems, enabling accurate and efficient molecular dynamics simulations.",
    link: "#"
  },
  {
    id: "p2",
    title: "ClimateNet: Deep Learning for Regional Climate Prediction",
    authors: ["Chen L.", "Liu Y.", "Zhang W."],
    year: 2024,
    venue: "Science Advances",
    direction: "ai-for-science",
    citations: 89,
    abstract: "A transformer-based model that accurately predicts regional climate patterns up to 6 months ahead, with applications in agricultural planning and disaster prevention.",
    link: "#"
  },
  {
    id: "p3",
    title: "BotHunter: Sequential Detection of Social Bots via Multi-scale Behavior Analysis",
    authors: ["Wang J.", "Zhou H.", "Chen L."],
    year: 2024,
    venue: "ACM SIGKDD Conference on Knowledge Discovery",
    direction: "social-computing",
    citations: 234,
    abstract: "We propose a multi-scale behavior analysis framework that achieves state-of-the-art performance in detecting sophisticated social bots across multiple platforms.",
    link: "#"
  },
  {
    id: "p4",
    title: "SocialGraph: Modeling Opinion Dynamics with Graph Neural Networks",
    authors: ["Liu Y.", "Zhang W.", "Wang J."],
    year: 2023,
    venue: "AAAI Conference on Artificial Intelligence",
    direction: "social-computing",
    citations: 178,
    abstract: "A novel graph neural network architecture for modeling opinion formation and spread in social networks, capturing both structural and content information.",
    link: "#"
  },
  {
    id: "p5",
    title: "Polaris-7B: A Foundation Model for Scientific Reasoning",
    authors: ["Zhang W.", "Li J.", "Zhou H.", "Chen L."],
    year: 2024,
    venue: "NeurIPS",
    direction: "general-ai",
    citations: 412,
    abstract: "We introduce Polaris-7B, a 7-billion parameter language model specialized for scientific reasoning, achieving state-of-the-art results on multiple scientific benchmarks.",
    link: "#"
  },
  {
    id: "p6",
    title: "AgentBench: Evaluating LLM Agents on Real-World Tasks",
    authors: ["Chen L.", "Wang X.", "Zhang W."],
    year: 2024,
    venue: "ICML",
    direction: "general-ai",
    citations: 567,
    abstract: "A comprehensive benchmark for evaluating large language model agents on real-world software engineering, database management, and OS tasks.",
    link: "#"
  },
  {
    id: "p7",
    title: "WorldModel-X: Video Prediction with Implicit Physical Reasoning",
    authors: ["Li J.", "Zhang W.", "Zhou H."],
    year: 2024,
    venue: "CVPR",
    direction: "general-ai",
    citations: 289,
    abstract: "We present a world model that learns implicit physical laws from video data, enabling accurate long-horizon video prediction and planning.",
    link: "#"
  },
  {
    id: "p8",
    title: "Roboclaude: Language-Guided Robotic Manipulation with Foundation Models",
    authors: ["Wang X.", "Liu Y.", "Chen L."],
    year: 2024,
    venue: "ICRA",
    direction: "physical-ai",
    citations: 145,
    abstract: "A framework that leverages large language models for high-level task planning and natural language instruction following in robotic manipulation.",
    link: "#"
  },
  {
    id: "p9",
    title: "MatNet: Predicting Material Properties from Crystal Structures",
    authors: ["Zhang W.", "Li J."],
    year: 2023,
    venue: "Nature Materials",
    direction: "ai-for-science",
    citations: 523,
    abstract: "A graph neural network architecture for predicting mechanical, electronic, and thermal properties of crystalline materials from their atomic structures.",
    link: "#"
  },
  {
    id: "p10",
    title: "AlignPolaris: Reinforcement Learning from AI Feedback for Scientific LLMs",
    authors: ["Chen L.", "Zhang W.", "Wang J."],
    year: 2024,
    venue: "ICLR",
    direction: "general-ai",
    citations: 198,
    abstract: "We develop a novel RLAIF approach that uses AI feedback to align scientific language models with human preferences, improving both accuracy and helpfulness.",
    link: "#"
  }
] as const;

// Patents
export const patents = [
  {
    id: "pat1",
    title: "Method and System for Detecting Social Bots Using Multi-modal Analysis",
    status: "granted",
    year: 2024,
    number: "CN114XXXXXX",
    direction: "social-computing"
  },
  {
    id: "pat2",
    title: "Neural Network Architecture for Molecular Property Prediction",
    status: "granted",
    year: 2023,
    number: "CN113XXXXXX",
    direction: "ai-for-science"
  },
  {
    id: "pat3",
    title: "LLM-based Robotic Task Planning System",
    status: "pending",
    year: 2024,
    number: "CN2024XXXXXX",
    direction: "physical-ai"
  },
  {
    id: "pat4",
    title: "Video Prediction Method Based on Physical Constraints",
    status: "pending",
    year: 2024,
    number: "CN2024XXXXXX",
    direction: "general-ai"
  }
] as const;

// Datasets
export const datasets = [
  {
    id: "ds1",
    name: "BotEval-2024",
    description: "A comprehensive benchmark dataset for evaluating social bot detection methods, containing 1M labeled samples across5 platforms.",
    size: "2.3GB",
    samples: "1,000,000",
    direction: "social-computing",
    link: "#"
  },
  {
    id: "ds2",
    name: "ClimateBench-CN",
    description: "Regional climate data for China with 50-year historical records and 6-month forecast annotations.",
    size: "15.7GB",
    samples: "50,000",
    direction: "ai-for-science",
    link: "#"
  },
  {
    id: "ds3",
    name: "SciEval",
    description: "A multi-choice QA dataset for evaluating scientific reasoning capabilities of language models.",
    size: "340MB",
    samples: "25,000",
    direction: "general-ai",
    link: "#"
  },
  {
    id: "ds4",
    name: "MatPropDB",
    description: "A database of calculated material properties from DFT simulations, covering 100,000 crystal structures.",
    size: "8.2GB",
    samples: "100,000",
    direction: "ai-for-science",
    link: "#"
  }
] as const;

// Benchmarks
export const benchmarks = [
  {
    id: "bm1",
    name: "MMLU",
    direction: "general-ai",
    ourScore: "89.2%",
    secondScore: "87.5%",
    secondLab: "claude-4",
    date: "2024-06"
  },
  {
    id: "bm2",
    name: "HumanEval",
    direction: "general-ai",
    ourScore: "92.1%",
    secondScore: "90.2%",
    secondLab: "Claude3",
    date: "2024-05"
  },
  {
    id: "bm3",
    name: "BotDetection-F1",
    direction: "social-computing",
    ourScore: "96.8%",
    secondScore: "94.3%",
    secondLab: "Botometer Pro",
    date: "2024-03"
  },
  {
    id: "bm4",
    name: "MATBENCH",
    direction: "ai-for-science",
    ourScore: "94.5%",
    secondScore: "91.2%",
    secondLab: "CGCNN",
    date: "2024-04"
  },
  {
    id: "bm5",
    name: "OSWorld",
    direction: "general-ai",
    ourScore: "45.3%",
    secondScore: "38.1%",
    secondLab: "claude-4",
    date: "2024-06"
  },
  {
    id: "bm6",
    name: "CALVIN",
    direction: "physical-ai",
    ourScore: "87.6%",
    secondScore: "82.4%",
    secondLab: "Roboclaude2",
    date: "2024-05"
  }
] as const;

// Products
export const products = [
  {
    id: "pr1",
    name: "PolarisChat",
    tagline: "Scientific AI Assistant",
    description: "An intelligent assistant powered by Polaris-7B, designed for researchers and scientists to accelerate literature review, hypothesis generation, and data analysis.",
    features: ["Literature search", "Paper summarization", "Code generation", "Data visualization"],
    image: "/images/polaris-chat.svg",
    link: "#",
    demo: "#"
  },
  {
    id: "pr2",
    name: "BotScanner",
    tagline: "Social Media Bot Detection",
    description: "A real-time API service for detecting social bots on Twitter, Weibo, and other platforms. Achieve 96%+ accuracy with our multi-modal analysis engine.",
    features: ["Real-time detection", "Batch processing", "API access", "Dashboard analytics"],
    image: "/images/bot-scanner.svg",
    link: "#",
    demo: "#"
  },
  {
    id: "pr3",
    name: "MatDiscovery",
    tagline: "AI-Powered Materials Platform",
    description: "A web platform for discovering and analyzing novel materials using AI. Browse our database of 100K+ materials and predict properties with one click.",
    features: ["Property prediction", "Crystal structure search", "Similarity analysis", "Export reports"],
    image: "/images/mat-discovery.svg",
    link: "#",
    demo: "#"
  }
] as const;

// Team members
export const teamMembers = [
  {
    id: "tm1",
    name: "Prof. Wei Zhang",
    role: "Director",
    title: "Professor, Chair of AI Research",
    research: ["AI for Science", "Machine Learning"],
    bio: "Prof. Zhang leads Polaris Lab with over 20 years of experience in machine learning and computational science.",
    email: "wzhang@pku.edu.cn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wei"
  },
  {
    id: "tm2",
    name: "Dr. Jia Li",
    role: "Co-director",
    title: "Associate Professor",
    research: ["Physical AI", "Robotics"],
    bio: "Dr. Li focuses on the intersection of AI and robotics, developing intelligent systems for real-world applications.",
    email: "jli@pku.edu.cn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jia"
  },
  {
    id: "tm3",
    name: "Dr. Lei Chen",
    role: "Faculty",
    title: "Assistant Professor",
    research: ["General AI", "LLM"],
    bio: "Dr. Chen specializes in large language models and their applications in scientific research.",
    email: "lchen@pku.edu.cn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lei"
  },
  {
    id: "tm4",
    name: "Dr. Hua Zhou",
    role: "Faculty",
    title: "Assistant Professor",
    research: ["Social Computing", "Data Mining"],
    bio: "Dr. Zhou's research focuses on understanding and analyzing social phenomena through computational methods.",
    email: "hzhou@pku.edu.cn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hua"
  },
  {
    id: "tm5",
    name: "Dr. Xin Wang",
    role: "Faculty",
    title: "Assistant Professor",
    research: ["AI for Science", "Materials"],
    bio: "Dr. Wang combines AI with materials science to accelerate the discovery of novel materials.",
    email: "xwang@pku.edu.cn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=xin"
  },
  {
    id: "tm6",
    name: "Prof. Yan Liu",
    role: "Advisory",
    title: "Visiting Professor",
    research: ["General AI", "World Models"],
    bio: "Prof. Liu is a renowned researcher in world models and video prediction.",
    email: "yliu@pku.edu.cn",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yan"
  }
] as const;

// Stats
export const stats = {
  papers: 156,
  patents: 23,
  datasets: 12,
  members: 45
} as const;