export const profile = {
  name: "Sakib Emon",
  initials: "SE",
  isDemo: false,
  role: "Educational Technology & Engineering Graduate",
  location: "Dhaka, Bangladesh",
  availability: "Open to meaningful collaborations",
  headline: ["Turning ideas into", "reality.", "Driven by AI &", "Technology."],
  intro:
    "Educational Technology and Engineering graduate passionate about transforming ideas into usable solutions—from AI-driven mobile apps and interactive web platforms to data-backed educational content and machine learning workflows.",
  portrait: "/images/portrait.png",
  portraitAlt: "Portrait photo of Sakib Emon",
  portraitNote: "Sakib Emon",
  photoCaption: "Curiosity at heart. Innovation in mind.",
  email: "sakibemon001@gmail.com",
  emailIsSample: false,
  affiliation: "University of Frontier Technology, Bangladesh",
  affiliationUrl: "https://uftb.ac.bd/",
  cvUrl: "/Sakib_Emon_CV.pdf",
  cvLabel: "Download CV",
  cvIsSample: false,
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "GitHub", url: "https://github.com" },
    { label: "ResearchGate", url: "" },
  ],
  metadata: {
    title: "Sakib Emon — Educational Technology & Engineering",
    description:
      "Personal portfolio of Sakib Emon featuring projects in Flutter, AI/ML, web development, research publications, and educational technology.",
  },
};

export const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "research" },
  { label: "Publications", id: "writing" },
  { label: "Experience", id: "experience" },
];

export const about = {
  heading: "Bridging Education & Technology.\nEngineering Real Impact.",
  paragraphs: [
    "I'm an Educational Technology and Engineering graduate who genuinely enjoys turning ideas into things people can actually use. Whether that's a web platform connecting students with teachers, a mobile app that makes healthy eating feel like a game, or a piece of content that makes a complex topic easy to understand.",
    "I've taught robotics to curious kids, built three independent projects from the ground up, and spent years writing engineering and education-related content paired with machine learning-driven data analysis.",
    "I'm especially drawn to where education meets technology, and I've been pushing further into AI and machine learning to bring smarter, more personalized experiences into the things I build.",
  ],
  education: {
    degree: "B.Sc. in Educational Technology and Engineering (CGPA: 3.41)",
    institution: "University of Frontier Technology, Bangladesh",
    period: "2022 – 2026",
    focus: "Analyzing Cognitive Engagement Patterns in Online Learning Using Multimodal Data",
  },
  interests: [
    "Educational Technology & EdTech Solutions",
    "Artificial Intelligence & Machine Learning Workflows",
    "Cross-Platform Mobile App Development (Flutter)",
    "Data Analysis & Explainable AI (XAI)",
  ],
};

export const skills = [
  {
    title: "Technical & Development",
    items: [
      "Flutter & Dart",
      "Python",
      "C",
      "Web Development (HTML/CSS, JS)",
      "Mobile App Architecture",
    ],
  },
  {
    title: "AI & Data Science",
    items: [
      "Artificial Intelligence & Machine Learning",
      "AI Workflows & Multi-Agent Systems",
      "Data Analysis (Google Colab)",
      "Explainable AI (XAI)",
    ],
  },
  {
    title: "Project & Content",
    items: [
      "Project Development & Management",
      "Technical Content Writing",
      "Content Design & Development",
      "SEO & Microsoft Office",
    ],
  },
];

// Major projects from CV
export const research = [
  {
    slug: "nutrigo-mobile-app",
    category: "Mobile App",
    label: "Flutter / AI Application",
    year: "2026",
    sample: false,
    title: "NutriGO Mobile Application",
    description:
      "A Flutter-based mobile app delivering structured 4-week nutrition courses and daily meal challenges, featuring AI-powered meal-image verification, gamification, and a points-based leaderboard.",
    meta: "Mobile Development · Flutter, Dart, AI Image Verification",
    externalUrl: "",
    image: "/images/river-research.png",
    body: [
      {
        heading: "Overview",
        text: "NutriGO transforms healthy eating habits into an engaging, gamified experience. It delivers structured 4-week nutrition courses paired with daily challenges to motivate consistent progress.",
      },
      {
        heading: "Key Features",
        text: "Includes AI-driven meal-photo verification to evaluate balanced diets, interactive progress tracking dashboards, and competitive points-based leaderboards.",
      },
      {
        heading: "Tech Stack",
        text: "Built with Flutter and Dart, integrating automated AI image recognition pipelines and local/remote state management systems.",
      },
    ],
  },
  {
    slug: "nutrition-e-learning-platform",
    category: "Web Platform",
    label: "Web Application",
    year: "2025 – Present",
    sample: false,
    title: "Nutrition E-Learning Platform",
    description:
      "A web platform that helps users track daily meals and follow structured nutrition routines, with meal photo uploads, progress monitoring, and score-based goal tracking.",
    meta: "Full Stack Web Development · Co-Developer",
    externalUrl: "",
    image: "",
    body: [
      {
        heading: "Platform Concept",
        text: "Designed to provide continuous support and accountability for nutrition learners. It enables daily meal logging and provides personalized score breakdowns.",
      },
      {
        heading: "Core Capabilities",
        text: "Supports meal photo uploads, adherence tracking across multiple weeks, and goal verification algorithms.",
      },
    ],
  },
  {
    slug: "edu-connect-hub",
    category: "EdTech",
    label: "Web Platform",
    year: "2025",
    sample: false,
    title: "EDU Connect Hub",
    description:
      "A web-based platform connecting students of classes 6-10 with teachers, encouraging interactive, technology-driven learning through effective communication, guidance, and resource sharing.",
    meta: "EdTech Platform · Developer & Owner",
    externalUrl: "",
    image: "",
    body: [
      {
        heading: "The Challenge",
        text: "Secondary school students (classes 6-10) often lack direct, structured communication channels with qualified teachers outside classroom hours.",
      },
      {
        heading: "The Solution",
        text: "EDU Connect Hub acts as a centralized learning bridge featuring interactive messaging, organized resource repositories, and digital guidance workflows.",
      },
    ],
  },
];

// Publications and Books from CV
export const writing = [
  {
    slug: "weather-prediction-explainable-ai",
    category: "Conference Paper",
    label: "Springer Nature LNNS",
    sample: false,
    year: "2026",
    readTime: "Research Paper",
    title: "Transformer Based Weather Prediction with Explainable AI for Crop Cultivation Planning",
    description:
      "Published at MIET International Conference (Springer Nature LNNS). Investigates deep transformer models coupled with XAI methods to aid agricultural decision-making.",
    image: "/images/architecture.png",
    imageAlt: "Transformer Based Weather Prediction Research",
    externalUrl: "",
    body: [
      {
        heading: "Abstract",
        text: "Accurate microclimate and weather forecasts are essential for crop cultivation planning. This study leverages transformer architecture combined with explainable AI (XAI) to interpret predictive factors for agricultural resilience.",
      },
      {
        heading: "Publication Venue",
        text: "Presented at MIET International Conference and published in Springer Nature Lecture Notes in Networks and Systems (LNNS).",
      },
    ],
  },
  {
    slug: "shikkhapodhoti-o-projuktigoto-rupantor",
    category: "Book",
    label: "Published Book",
    sample: false,
    year: "2026",
    readTime: "Book",
    title: "শিক্ষাপদ্ধতি ও প্রযুক্তিগত রূপান্তর",
    description:
      "A comprehensive published book exploring instructional methodologies and technological transformation across modern educational paradigms.",
    image: "/images/river-research.png",
    imageAlt: "Book Cover",
    externalUrl: "",
    body: [
      {
        heading: "About the Book",
        text: "The book analyzes the integration of digital tools, adaptive learning models, and technological shifts within educational ecosystems, offering actionable frameworks for educators and technologists.",
      },
    ],
  },
  {
    slug: "undergraduate-thesis",
    category: "Thesis",
    label: "Undergraduate Research",
    sample: false,
    year: "2026",
    readTime: "B.Sc. Thesis",
    title: "Analyzing Cognitive Engagement Patterns in Online Learning Using Multimodal Data",
    description:
      "Undergraduate research focused on evaluating learners' cognitive engagement dynamics using multimodal learning analytics and machine learning techniques.",
    image: "",
    imageAlt: "Cognitive Engagement Analytics",
    externalUrl: "",
    body: [
      {
        heading: "Research Scope",
        text: "Investigates student behavioral and cognitive engagement through multimodal datasets, applying machine learning algorithms to uncover learning patterns and boost retention.",
      },
    ],
  },
];

export const experience = [
  {
    organization: "Bangladesh Robotics Olympiad (BdRO)",
    role: "Robotics Instructor",
    period: "Feb 2024 – May 2024",
    description:
      "Taught robotics fundamentals to children through interactive, hands-on sessions. Mentored young learners, encouraging creativity and algorithmic problem-solving skills.",
    tags: ["Robotics", "STEM Education", "Mentorship"],
    url: "",
  },
  {
    organization: "Online (Freelance)",
    role: "Content Writer & Data Analyst",
    period: "2022 – 2026",
    description:
      "Wrote engineering, teaching, and education-related content for diverse clients. Delivered statistical and machine learning-driven data analysis services using Google Colab to support empirical content and research projects.",
    tags: ["Technical Writing", "Data Analysis", "Machine Learning"],
    url: "",
  },
  {
    organization: "UFTB STEAM Club",
    role: "Executive Member",
    period: "2023 – 2024",
    description:
      "Organized technology events and managed collaborative projects fostering innovation across Science, Technology, Engineering, Arts, and Mathematics.",
    tags: ["Leadership", "Event Management", "STEAM"],
    url: "https://uftb.ac.bd/",
  },
  {
    organization: "National STEAM Olympiad",
    role: "Volunteer",
    period: "2023 – 2024",
    description:
      "Supported event coordination, participant management, and smooth operational execution for activities promoting innovation in STEAM domains.",
    tags: ["Volunteering", "Operations"],
    url: "",
  },
];

export const blog = [];

export const contact = {
  heading: "Let's build something\nimpactful together.",
  description:
    "Have a project in mind, an EdTech idea, or a research collaboration? Feel free to reach out via email or connect on LinkedIn.",
};

export const collections = { research, writing, blog };

export function externalLink(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : null;
  } catch {
    return null;
  }
}
