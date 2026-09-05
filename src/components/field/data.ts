// FIELD content. Copy is final per the handoff. House rule: no em dashes.

export const LINKS = {
  github: "https://github.com/Chaitanya299",
  linkedin: "https://www.linkedin.com/in/saichaitanyaparasana",
  email: "chaitanya.sai311@gmail.com",
};

export type ChapterKey =
  | "home"
  | "build"
  | "work"
  | "roadmap"
  | "recognition"
  | "contact";

export interface ChapterMeta {
  key: ChapterKey;
  num: string; // "00".."05"
  title: string; // mono chapter title
  meta: string; // right-aligned meta label
  railLabel: string; // nav rail label (chapters 01-05)
}

// Order drives nav, curtain and the canvas field formation.
export const CHAPTERS: ChapterMeta[] = [
  { key: "home", num: "00", title: "Opening", meta: "Start here", railLabel: "" },
  { key: "build", num: "01", title: "What I Can Build", meta: "For you", railLabel: "What I build" },
  { key: "work", num: "02", title: "Selected Work", meta: "What I built", railLabel: "Selected work" },
  { key: "roadmap", num: "03", title: "On the Roadmap", meta: "What comes next", railLabel: "Roadmap" },
  { key: "recognition", num: "04", title: "Recognition", meta: "Receipts", railLabel: "Recognition" },
  { key: "contact", num: "05", title: "Contact", meta: "Say hello", railLabel: "Contact" },
];

export const HERO = {
  eyebrow: ["Full-stack and AI engineer", "Hyderabad, India"],
  name: ["Chaitanya", "Parasana"],
  proposition: "AI products that keep working after the demo is over.",
  propositionSub:
    "Assistants you can talk to, search that understands a plain question, and the quiet machinery that keeps both running in production.",
  availability: "Free this September, usually reply the same day",
  metrics: [
    { num: "500ms", cap: "Live answer, voice or chat" },
    { num: "99.9%", cap: "Uptime I design for" },
    { num: "5", cap: "Projects shipped end to end" },
    { num: "1", cap: "Person, start to finish" },
  ],
};

export const ABOUT = {
  paragraphs: [
    "A demo only has to work once, in front of a friendly audience. Real software has to work at two in the morning, for someone in a hurry, on a bad connection. That second thing is the job I take.",
    "Over the last year I've shipped 5 projects end to end, from the first call to the thing running in production.",
  ],
  tags: ["Voice agents", "AI agents and SLM", "Web development", "Freelance work", "Mac and mobile apps"],
  services: [
    {
      n: "01",
      t: "Automating the work that eats your day",
      d: "The follow-ups, the data entry, the back-and-forth. I hand the repetitive work to AI that runs it for you, so the hours go back into what actually grows the business.",
    },
    {
      n: "02",
      t: "AI that answers the moment someone asks",
      d: "Chatbots, voice assistants and agents that handle questions, booking and support around the clock, so talking to your software feels closer to talking to a person than filling out a form.",
    },
    {
      n: "03",
      t: "Shipping it, then keeping it up",
      d: "I put it online, watch it, and fix the small things before anyone has to complain. Issues surface in monitoring, not in your inbox.",
    },
  ],
};

export const BUILD = {
  lead: "Five things I get asked for, in <em>plain words</em>.",
  desc: "Here are the five things people usually come to me for. Pick the one that sounds like what you need, and let's talk about it.",
  services: [
    {
      n: "01",
      title: "Agents you can talk to",
      desc: "Voice and chat assistants that answer in real time, hold context, and hand off to a person when they should.",
      tl: "3–6 weeks",
    },
    {
      n: "02",
      title: "A website for your business",
      desc: "A fast, considered site that reads well on a phone and says exactly what you do, no template look.",
      tl: "6–10 weeks",
    },
    {
      n: "03",
      title: "An app for Mac or your phone",
      desc: "Native Mac utilities and mobile apps that feel at home on the platform and respect your data.",
      tl: "4–8 weeks",
    },
    {
      n: "04",
      title: "A tool for your own team",
      desc: "The internal dashboard or automation that replaces the spreadsheet everyone quietly hates.",
      tl: "2–5 weeks",
    },
    {
      n: "05",
      title: "Getting what you have live",
      desc: "Containers, pipelines and monitoring so the thing you already built goes out and stays up.",
      tl: "1–3 weeks",
    },
  ],
  footnote: "Timelines assume one person working properly",
  numbers: ["5 projects shipped", "1+ years", "Same-day replies", "One person, start to finish"],
  closing: [
    {
      label: "How it starts",
      body: "A short call, then a written plan with a fixed price and a date. If it is a fit we start, if it is not I will point you somewhere better.",
      cta: true,
    },
    {
      label: "What you keep",
      body: "The code, the accounts, the documentation. Everything is handed over in your name, nothing is locked to me.",
    },
    {
      label: "How I price it",
      body: "One fixed price for the scope we agree on, not an hourly meter. You know the number before anything begins.",
    },
  ],
};

export interface WorkItem {
  n: string;
  title: string;
  preview: string; // hover-card label
  summary: string;
  tags: string[];
  how: string;
  why: string;
  tricky: string;
  github: string;
  shot: string; // placeholder frame caption
}

export const WORK: WorkItem[] = [
  {
    n: "01",
    title: "AI Deployment Platform",
    preview: "AI deployment platform",
    summary: "A dashboard that puts an AI service online in one click, and writes down every change it makes.",
    tags: ["Kubernetes", "ArgoCD", "FastAPI", "Next.js", "Helm", "Prometheus"],
    how: "Every change is written to a file first. A background service then makes the servers match that file. Nothing happens that is not written down, so what is running always matches the plan.",
    why: "The whole thing starts on one laptop with a single command. No cloud account, no monthly bill just to try it out.",
    tricky: "The built in assistant reads server logs, and a log can say anything. So it is allowed to suggest but never to act, and a person clicks the final button. A booby trapped log line cannot change your system.",
    github: "https://github.com/Chaitanya299/k8s-gitops-lab",
    shot: "Dashboard shot, drop image",
  },
  {
    n: "02",
    title: "Vellum",
    preview: "Vellum, screen softener for Mac",
    summary: "A small Mac app that lays a soft paper texture over your screen, so a long day at the desk is easier on the eyes.",
    tags: ["Objective-C", "AppKit", "Core Graphics", "macOS"],
    how: "Hand-built AppKit with no storyboards. One borderless window per screen draws a tint pass plus a tiled soft-light grain over procedurally generated, cached textures.",
    why: "Twelve textures, a circadian day and night schedule, and per-app exclusions, all drawn cheaply enough to sit over every screen without you noticing the cost.",
    tricky: "Surviving other apps in fullscreen: accessory activation policy, join-all-spaces, and a screen-saver window level, while avoiding the auxiliary mode that would tie the overlay to its own window.",
    github: "https://github.com/Chaitanya299/Vellum",
    shot: "App shot, drop image",
  },
  {
    n: "03",
    title: "ScoreDay",
    preview: "ScoreDay, daily habit scoreboard",
    summary: "A daily scoreboard for the habits you are trying to keep, with a score you cannot fudge.",
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite", "Vitest"],
    how: "A recurrence engine computes occurrences and a central status engine tracks each one. Scoring derives from real occurrences, and levels map earned XP to a rank.",
    why: "Seven recurrence types, occurrence-based completions, XP levelling and streaks, all local-first on SQLite so your data stays on your machine.",
    tricky: "Points are frozen snapshots at completion time, so editing a task never rewrites history. A unique constraint makes double-completion impossible at the database layer.",
    github: "https://github.com/Chaitanya299/ScoreDay",
    shot: "Scoreboard shot, drop image",
  },
  {
    n: "04",
    title: "Orient",
    preview: "orient, project memory for developers",
    summary: "A tool that keeps notes on why a project is built the way it is, right next to the code.",
    tags: ["TypeScript", "Node", "Claude Code", "Codex", "opencode"],
    how: "Six commands map to a docs tree: current state, architecture, and an append-only decision log. It surveys the repo in a read-only agent and drafts every write for you to approve.",
    why: "The always-on footprint is a few lines of pointers. Everything substantial lives in files that load only when read, so it holds up on repos that stay alive for years.",
    tricky: "Safe by design: no network, no telemetry, read-only survey agents, secret-blind by default, and a commit step that refuses to ship a key. Every write is a proposal the human reviews.",
    github: "https://github.com/Chaitanya299/Orient",
    shot: "Terminal shot, drop image",
  },
];

export interface RoadmapCard {
  status: "Building now" | "In testing" | "Planning";
  date: string;
  title: string;
  lead: string;
  body: string;
  tags: string[];
}

export const ROADMAP: RoadmapCard[] = [
  {
    status: "Building now",
    date: "Late 2026",
    title: "MonFlow",
    lead: "A privacy-first UPI expense tracker whose data never leaves your phone.",
    body: "Bank and UPI alerts are captured into an encrypted vault, parsed on-device, and split with friends over a peer-to-peer engine with no servers in the middle.",
    tags: ["React Native", "Kotlin", "SQLCipher", "Automerge"],
  },
  {
    status: "In testing",
    date: "Mid 2026",
    title: "JobAutomator & Crawler",
    lead: "An AI agent that fills job applications for you, with a human approving every submit.",
    body: "It reads a form, maps each field to your profile with a model, and walks multi-step flows. A side panel shows every action so nothing is sent without your click.",
    tags: ["FastAPI", "Chrome Extension", "LLM Agents", "Python"],
  },
  {
    status: "Planning",
    date: "Early 2027",
    title: "Edge Assistant",
    lead: "A small language model and tool-use agent that runs fully on-device.",
    body: "A quantized SLM tuned for tool calling, with planning, memory and retrieval over your own files. Private assistance on laptop-class hardware, no API keys, no cloud round-trips.",
    tags: ["SLM", "llama.cpp", "GGUF", "Tool Use"],
  },
  {
    status: "Planning",
    date: "Late 2026",
    title: "Chatbot Builder",
    lead: "A way to stand up a grounded assistant from your own documents in an afternoon.",
    body: "Point it at your content, tune the retrieval, and ship a chat widget that answers from what you actually wrote rather than from a guess.",
    tags: ["RAG", "Embeddings", "Next.js", "TypeScript"],
  },
];

export interface Cert {
  n: string;
  title: string;
  desc: string;
  issuer: string;
  link: string;
}

export const CERTS: Cert[] = [
  {
    n: "01",
    title: "AWS Cloud Practitioner",
    desc: "Cloud fundamentals, global infrastructure, security and the shared responsibility model.",
    issuer: "Amazon Web Services",
    link: "https://drive.google.com/file/d/1QvxkMBhskNkW-y7IkX7a-S5FKO_5VwdQ/view",
  },
  {
    n: "02",
    title: "Azure AI Fundamentals",
    desc: "AI workloads, machine learning principles, computer vision and language on Azure.",
    issuer: "Microsoft",
    link: "https://drive.google.com/file/d/1XSeJ27istaznc6wHCDkI-vkB5yw9XGTR/view",
  },
  {
    n: "03",
    title: "Mastering Django",
    desc: "Scalable server-side applications, clean architecture, ORM and authentication.",
    issuer: "Certificate",
    link: "https://drive.google.com/file/d/1tLHtUUc0AuF4MBiPEFOtXAuEtBbmDvou/view",
  },
  {
    n: "04",
    title: "Generative AI Foundations",
    desc: "Prompt engineering, transformer architectures, fine-tuning, and AI safety patterns.",
    issuer: "Microsoft / upGrad",
    link: "https://drive.google.com/file/d/10_Y8CUsY8J6t8ABM_AxVL5df1rZ3wcRa/view",
  },
];

export const RECOGNITION = {
  counters: [
    { target: 4, cap: "Certifications earned" },
    { target: 4, cap: "Projects I finished" },
    { target: 3, cap: "Years writing code" },
  ],
  closing: [
    {
      label: "Money and markets",
      body: "A standing interest in financial literacy and accounting. I read markets the way I read systems, looking for the part that quietly holds it together.",
    },
    {
      label: "Martial arts",
      body: "An international martial arts win and a brown belt. It is where I learned that precision and patience beat force, which turns out to be true of software too.",
    },
    {
      label: "Away from the desk",
      body: "Books, horse riding and swimming. The best fixes tend to arrive when I am nowhere near a keyboard.",
    },
  ],
};

export const CONTACT = {
  trust: "No sales pitch back. Just a straight answer on whether I'm the right person for it.",
  availability:
    "Free this September and usually reply the same day. Tell me what you are trying to build, and I will tell you honestly whether I am the right person for it.",
  whatNext: [
    { n: "01", t: "I read it and reply the same day." },
    { n: "02", t: "A half-hour call to understand the shape of it." },
    { n: "03", t: "A written plan, a fixed price, a date, and a free demo." },
  ],
  needs: [
    "An AI agent or assistant",
    "A website or portfolio",
    "A native app (Mac or phone)",
    "An internal tool or dashboard",
    "Deploy and maintain what I have",
    "Not sure yet, help me figure it out",
  ],
  budgets: [
    "₹20k – 50k ($250 – 600)",
    "₹50k – 1.5L ($600 – 1,800)",
    "₹1.5L – 4L ($1,800 – 5,000)",
    "₹4L – 10L ($5,000 – 12,000)",
    "₹10L+ ($12,000+)",
    "Not sure yet",
  ],
  timelines: ["As soon as possible", "Within 1–2 months", "Just exploring for now"],
};
