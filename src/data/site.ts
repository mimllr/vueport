import resumeData from "./resume.json";

type ResumeWork = {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
};

type ResumeData = {
  basics: {
    name: string;
    label: string;
    email: string;
    url: string;
    summary: string;
    location: {
      city: string;
      region: string;
      countryCode: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
  work: ResumeWork[];
  education: Array<{
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
  }>;
  skills: Array<{
    name: string;
    keywords: string[];
  }>;
  projects: Array<{
    name: string;
    url?: string;
    description: string;
    highlights?: string[];
  }>;
};

export const resume = resumeData as ResumeData;

export const contactEmail = "himikemiller@gmail.com";

export const links = {
  home: "/",
  work: "/work",
  about: "/about",
  ai: "/ai",
  tinybots: "/tinybots",
  resume: "/resume",
  contact: "/contact",
  resumePdf: "/resume.pdf",
  resumeJson: "/resume.json",
  email: `mailto:${contactEmail}`,
  linkedin: "https://www.linkedin.com/in/mimllr",
  github: "https://github.com/mimllr",
  twitter: "https://twitter.com/mimllr",
  tinybotsExternal: {
    main: "https://tinybots.app",
    greenlight: "https://tinybots.app/products",
    hxckey: "https://tinybots.app/products",
    hxckeyDiscord: "https://tinybots.app/products",
  },
};

export const profile = {
  name: resume.basics.name,
  title: "Senior Product Manager",
  label: resume.basics.label,
  location: `${resume.basics.location.city}, ${resume.basics.location.region}`,
  email: contactEmail,
  avatar: "/headshot-new.jpg",
  status: "Currently: building Tinybots",
  focus: "Platform & AI Products",
  background: "PM · Engineering · Design",
  summary: resume.basics.summary,
  specialties: ["Platform PM", "AI PM", "Open to consulting"],
};

export const metrics = [
  { value: "250k+", label: "Users Scaled" },
  { value: "500+", label: "Devs on Platform" },
  { value: "250", label: "Enterprise Customers" },
  { value: "10", label: "Countries Reached" },
];

export const personalStats = [
  { value: "10+", label: "Years experience" },
  { value: "20+", label: "Products owned" },
  { value: "6", label: "Teams led" },
  { value: "1", label: "Canine Coworker" },
];

export const workItems = [
  {
    title: "Global HCM",
    description:
      "Grew and scaled a front end framework and 10+ microservices to support client growth from single to triple digits, and users from low-five to mid-six figures.",
    year: "2019-Present",
    tags: ["Platform", "Enterprise", "Growth"],
    categories: ["platform", "enterprise"],
  },
  {
    title: "Sections CRM",
    description:
      "Launched an internal CRM for a growth-stage education startup that handled lead generation, admissions, marketing analytics, and student onboarding.",
    year: "2018",
    tags: ["Enterprise", "SaaS", "Growth"],
    categories: ["enterprise"],
    href: "/projects/sections-crm",
  },
  {
    title: "Tinybots",
    description:
      "Founded an agent-driven, privacy-conscious product studio shipping small, focused consumer software without trackers or venture pressure.",
    year: "2026",
    tags: ["Founder", "AI"],
    categories: ["founder", "consumer", "ai"],
    href: "/tinybots",
  },
  {
    title: "Greenlight",
    description:
      "A Health and Fitness app that aligns your 7- and 28-day baselines to keep your load and recovery balanced. Uses an AI-driven health model and insights.",
    year: "2026",
    tags: ["Consumer", "Privacy"],
    categories: ["consumer", "ai"],
    href: "/projects/greenlight",
  },
  {
    title: "Hxckey",
    description:
      "NHL scores, live activities, and favorites without accounts, tracking, or advertisements. Uses an AI-optimized model to highlight players to watch.",
    year: "2026",
    tags: ["Consumer", "Privacy"],
    categories: ["consumer", "ai"],
    href: "/projects/hxckey",
  },
];

export const aiProjects = workItems.filter((item) =>
  item.categories.includes("ai"),
);

export const tinybotsCapabilities = [
  {
    name: "iOS / macOS Apps",
    description: "Native applications tailored for the device.",
    status: "Live",
    icon: "💻",
    href: links.tinybotsExternal,
  },
  {
    name: "Microservices",
    description: "Lightweight, designed to fit a specific need.",
    status: "Live",
    icon: "🎛️",
    href: links.tinybotsExternal,
  },
  {
    name: "Chat Integrations",
    description: "Discord & Slack bots for any workflow.",
    status: "Beta",
    icon: "💬",
    href: links.tinybotsExternal,
  },
];

export const tinybotsProducts = [
  {
    name: "Greenlight",
    description: "Health & Fitness app that keeps you balanced.",
    status: "Beta",
    icon: "🏋️‍♀️",
    href: links.tinybotsExternal.greenlight,
  },
  {
    name: "Hxckey",
    description: "NHL Scores without tracking and spam.",
    status: "Beta",
    icon: "🎛️",
    href: links.tinybotsExternal.hxckey,
  },
  {
    name: "Hxckey-discord",
    description: "Discord community integration that drives engagement.",
    status: "Beta",
    icon: "🥅",
    href: links.tinybotsExternal.hxckeyDiscord,
  },
];

// export const tinybotsValues = [
//   {
//     title: "Privacy-first",
//     description:
//       "We don't collect what we don't need. No third-party trackers, no hidden telemetry, no dark patterns.",
//     icon: "shield",
//   },
//   {
//     title: "Small surface area",
//     description:
//       "Every product does one thing really well. We resist scope creep religiously and keep interfaces quiet.",
//     icon: "cube",
//   },
//   {
//     title: "Ship fast, iterate honest",
//     description:
//       "We ship early and tell users exactly what's missing. Honest betas beat polished vaporware.",
//     icon: "rocket",
//   },
//   {
//     title: "No VC, no pressure",
//     description:
//       "Tinybots is bootstrapped and intends to stay that way. Sustainable revenue beats growth theater.",
//     icon: "seedling",
//   },
// ];

export const opportunities = [
  "Senior Product Manager",
  "Lead Product Manager",
  "Platform PM",
  "AI Product Manager",
  "Product Consulting",
];

export const resumeSkillGroups = [
  {
    label: "Product",
    skills: [
      "Platform Strategy",
      "Developer Experience",
      "AI Products",
      "Enterprise",
      "Consumer",
      "Roadmap Ownership",
    ],
  },
  {
    label: "Process",
    skills: [
      "Discovery",
      "Prioritization",
      "OKRs",
      "Stakeholder Mgmt",
      "User Research",
      "Analytics",
    ],
  },
  {
    label: "Technical",
    skills: [
      "APIs",
      "Microservices",
      "Figma",
      "AI/ML Basics",
      "Agile / Scrum",
      "iOS",
      "Design Systems",
    ],
  },
];

export function formatResumeDate(value?: string) {
  if (!value) return "Present";
  const [year, month] = value.split("-");

  if (!month) return year;

  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export const resumeRoles = resume.work.map((role) => ({
  ...role,
  dateRange: `${formatResumeDate(role.startDate)} — ${formatResumeDate(role.endDate)}`,
}));

export const educationItems = resume.education.map((item) => ({
  ...item,
  credential: `${item.studyType}, ${item.area}`,
  dateRange: `${item.startDate} — ${item.endDate}`,
}));
