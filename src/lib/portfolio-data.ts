export interface TechTag {
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  span: "wide" | "tall" | "square";
  deepDive: {
    architecture: string;
    performance: string;
    challenge: string;
  };
}

export interface UpcomingProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "Planning" | "In Progress" | "Beta" | "Soon";
  eta: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  link: string;
  learnings: string[];
}

export interface Activity {
  title: string;
  description: string;
}

export interface Social {
  label: string;
  url: string;
}

export const PORTFOLIO = {
  name: "Sai Chaitanya Parasana",
  short: "Sai Chaitanya",
  role: "Full Stack & AI Engineer",
  bio: "I build real-time, AI-native systems, from voice agents on WebRTC to retrieval-augmented LLMs and containerized DevOps pipelines.",
  location: "Available for high-impact technical roles & freelance",
  email: "chaitanya.sai311@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/Chaitanya299" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/saichaitanyaparasana" },
    { label: "Email", url: "mailto:chaitanya.sai311@gmail.com" },
  ] satisfies Social[],
  projects: [
    {
      id: "k8s-gitops-lab",
      title: "AI Platform: Kubernetes GitOps",
      tagline: "GitOps deploys to Kubernetes, no kubectl after setup",
      description:
        "A Next.js dashboard + FastAPI control plane that ships the AI agent you've built. Helm values are committed to Gitea, ArgoCD reconciles a local kind cluster, and Prometheus + Grafana handle observability.",
      stack: ["Kubernetes", "ArgoCD", "FastAPI", "Next.js", "Helm", "Gitea", "Prometheus"],
      github: "https://github.com/Chaitanya299/k8s-gitops-lab",
      span: "wide",
      deepDive: {
        architecture:
          "Dashboard → FastAPI control plane → Gitea (git is the source of truth) → ArgoCD → Kubernetes. The backend holds read-only k8s RBAC, so the cluster can never drift from what's committed.",
        performance:
          "The whole platform boots on a laptop with `make up` (kind cluster, local registry, ArgoCD, Gitea and kube-prometheus-stack), with no cloud account required.",
        challenge:
          "The deploy assistant reads workload-controlled data (pod logs print anything), so guardrails are structural: no write tools, server-side re-validation, secret redaction at the boundary, and a human clicks Deploy. A prompt-injected log line cannot become a commit.",
      },
    },
    {
      id: "vellum",
      title: "Vellum",
      tagline: "macOS menu-bar paper-texture screen filter",
      description:
        "A menu-bar app that draws a procedural paper-grain overlay across every screen for eye protection: 12 textures, a circadian day/night schedule, and per-app exclusions.",
      stack: ["Objective-C", "AppKit", "Core Graphics", "macOS"],
      github: "https://github.com/Chaitanya299/Vellum",
      span: "tall",
      deepDive: {
        architecture:
          "Singletons + hand-built AppKit (no Storyboards, no Auto Layout). OverlayManager creates one borderless window per NSScreen; TextureOverlayView runs a tint pass plus a tiled soft-light grain pass over procedurally generated, cached textures.",
        performance:
          "Cached texture images and explicit-frame views keep redraws cheap across multi-monitor setups and Space changes.",
        challenge:
          "Surviving other apps' fullscreen Spaces: accessory activation policy + CanJoinAllSpaces + screen-saver window level, while deliberately avoiding FullScreenAuxiliary, which would tie the overlay to our own fullscreen window.",
      },
    },
    {
      id: "scoreday",
      title: "ScoreDay",
      tagline: "Personal daily scoreboard with a deterministic recurrence engine",
      description:
        "A Next.js 15 habit and goal tracker with seven recurrence types, occurrence-based completions, XP levelling and streaks, local-first on SQLite + Prisma.",
      stack: ["Next.js 15", "TypeScript", "Prisma", "SQLite", "Tailwind", "Vitest"],
      github: "https://github.com/Chaitanya299/ScoreDay",
      span: "wide",
      deepDive: {
        architecture:
          "recurrence.ts computes occurrences and a central status engine (NOT_DUE / DUE / COMPLETED / MISSED / UPCOMING / OVERDUE); scoring.ts derives scores from real occurrences and levels.ts maps XP to levels.",
        performance:
          "A unique (taskId, occurrenceDate) constraint makes double-completion impossible at the DB layer; weekly tasks key off their week's Monday, so one-per-week is enforced automatically.",
        challenge:
          "Scoring must never be 'points × 7': points are frozen snapshots at completion time so editing a task never rewrites history, all covered by a vitest suite.",
      },
    },
    {
      id: "orient",
      title: "orient",
      tagline: "A living map of what you're building: the why never scrolls away",
      description:
        "A Claude Code plugin (plus opencode commands and Codex skills) that keeps an always-current STATE.md, an append-only decision log of ADRs, and on-demand request tracing alongside your code. No network, no telemetry, runs entirely on your machine, drafts every write, and ships nothing until you approve.",
      stack: ["Claude Code Plugin", "opencode", "Codex Skills", "TypeScript", "Node", "ADR"],
      github: "https://github.com/Chaitanya299/Orient",
      span: "square",
      deepDive: {
        architecture:
          "Six commands map to a docs/ tree: STATE.md (where am I?), architecture.md (entry points + module boundaries), and decisions/ (one append-only ADR per real call). init surveys the repo in a read-only subagent and can mine git history into candidate ADRs. status reads STATE.md alone; trace follows one path with file:line refs; decide writes an ADR and updates architecture.md to match; sync rewrites STATE.md from what actually changed.",
        performance:
          "Always-on footprint is ~14 lines of pointers between ORIENT markers in your instructions file. Everything substantial (state, decisions, architecture) lives in files that only load when read, so it holds up on repos alive for years without degrading instruction-following.",
        challenge:
          "It's built safe by design: no network, no telemetry, read-only survey agents, secret-blind (never opens .env or copies a key), a pre-commit nudge (not block) when a build manifest changes with no ADR, and commit refuses to ship a .env or detected key. Every write is a proposal the human reviews; the ADRs are AI-drafted drafts, not gospel.",
      },
    },
  ] satisfies Project[],
  upcoming: [
    {
      id: "monflow",
      title: "MonFlow",
      tagline: "Privacy-first UPI expense tracker: your bank data never leaves the phone",
      description:
        "A React Native app that turns UPI/bank SMS and notification alerts into a clean ledger. A Kotlin NotificationListenerService captures alerts into an encrypted SQLCipher (AES-256) vault; an on-device regex parser with a promotional filter extracts transactions; and a CRDT (Automerge) + Waku P2P engine handles bill splitting with zero servers.",
      stack: ["React Native", "Kotlin", "SQLCipher", "Automerge CRDT", "Waku", "TypeScript"],
      status: "In Progress",
      eta: "Q4 2026",
    },
    {
      id: "jobautomator",
      title: "JobAutomator",
      tagline: "AI agent that fills job applications for you, human approves every submit",
      description:
        "A Chrome extension + FastAPI control plane that reads application forms, maps each field to your profile with an LLM, and autofills paginated multi-step flows. Resume parsing (PDF/DOCX), structured field-action schemas via Pydantic, and a side-panel review UI so nothing is submitted without your click.",
      stack: ["FastAPI", "Chrome Extension", "LLM Agents", "Pydantic", "Python", "JavaScript"],
      status: "Beta",
      eta: "Q3 2026",
    },
    {
      id: "edge-slm-agent",
      title: "Edge SLM Agent",
      tagline: "Small language model + tool-use agent that runs fully on-device",
      description:
        "A quantized 1-3B SLM fine-tuned for tool calling, orchestrated by a local agent runtime with planning, memory, and retrieval over personal files. Targets laptop-class hardware: GGUF inference via llama.cpp, function-calling evals, and a sandboxed executor: private AI assistance with no API keys and no cloud round-trips.",
      stack: ["SLM", "llama.cpp", "GGUF", "LoRA Fine-tuning", "Tool Use", "Python"],
      status: "Planning",
      eta: "Q1 2027",
    },
  ] satisfies UpcomingProject[],
  certificates: [
    {
      id: "aws-cloud",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://drive.google.com/file/d/1QvxkMBhskNkW-y7IkX7a-S5FKO_5VwdQ/view",
      learnings: [
        "Mastered fundamental cloud concepts and global infrastructure.",
        "Deep understanding of security, compliance, and the shared responsibility model.",
        "Proficiency in core AWS services and billing/pricing structures."
      ],
    },
    {
      id: "azure-ai",
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      link: "https://drive.google.com/file/d/1XSeJ27istaznc6wHCDkI-vkB5yw9XGTR/view",
      learnings: [
        "Explored AI workloads and common machine learning principles on Azure.",
        "Gained expertise in computer vision and natural language processing (NLP).",
        "Applied responsible AI practices in cloud-based solution design."
      ],
    },
    {
      id: "mastering-django",
      title: "Mastering Django",
      issuer: "",
      link: "https://drive.google.com/file/d/1tLHtUUc0AuF4MBiPEFOtXAuEtBbmDvou/view",
      learnings: [
        "Built scalable, secure web applications using Python's primary framework.",
        "Implemented clean architectural patterns and rapid development workflows.",
        "Mastered ORM, authentication, and high-performance server-side rendering."
      ],
    },
    {
      id: "gen-ai",
      title: "Generative AI Foundations",
      issuer: "Microsoft / upGrad",
      link: "https://drive.google.com/file/d/10_Y8CUsY8J6t8ABM_AxVL5df1rZ3wcRa/view",
      learnings: [
        "Advanced prompt engineering techniques for high-fidelity LLM outputs.",
        "Understanding of transformer architectures and fine-tuning strategies.",
        "Explored AI ethics, safety, and system-level mitigation patterns."
      ],
    },
  ] satisfies Certificate[],
  activities: [
    {
      title: "Financial Engineering",
      description: "Keen interest in financial education and literacy. Good understanding of financial accounting and analysis."
    },
    {
      title: "International Martial Arts",
      description: "International Martial Arts winner and Brown belt holder. Disciplined in precision and focus."
    },
    {
      title: "Endeavors & Hobbies",
      description: "Actively up-skilling in modern technologies. Enthusiast of book reading, horse riding, and swimming."
    }
  ] satisfies Activity[],
} as const;

export type Portfolio = typeof PORTFOLIO;
