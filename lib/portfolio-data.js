// Edit your website content here. Set isDemo to false after replacing the sample details.
export const profile = {
  name: "Sakib Emon",
  initials: "YN",
  isDemo: true,
  role: "Researcher & writer",
  location: "Dhaka, Bangladesh",
  availability: "Open to meaningful collaborations",
  headline: ["Research with", "purpose.", "Writing with", "impact."],
  intro:
    "Exploring the intersection of public health, disaster resilience, and education. Turning complex ideas into knowledge that makes a difference.",
  portrait: "/images/portrait.png",
  portraitAlt:
    "Illustrative AI-generated portrait of a fictional researcher; replace with your professional photo",
  portraitNote: "Illustrative portrait · replace with your photo",
  photoCaption: "Curiosity at heart. Impact in mind.",
  email: "hello@example.com",
  emailIsSample: true,
  affiliation: "University of Frontier Technology",
  affiliationUrl: "https://uftb.ac.bd/",
  cvUrl: "/cv-template.pdf",
  cvLabel: "Download CV",
  cvIsSample: true,
  socials: [
    { label: "LinkedIn", url: "" },
    { label: "Google Scholar", url: "" },
    { label: "ResearchGate", url: "" },
  ],
  metadata: {
    title: "Your Name — Researcher & Writer",
    description:
      "A personal portfolio exploring research, public health, disaster resilience, and thoughtful writing. Discover selected research, writing, and field notes.",
  },
};

export const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Writing", id: "writing" },
  { label: "Experience", id: "experience" },
  { label: "Blog", id: "blog" },
];

export const about = {
  heading: "Connecting the dots.\nCreating understanding.",
  paragraphs: [
    "I’m a researcher and writer driven by a simple belief: knowledge should be useful, accessible, and rooted in the real world.",
    "My interests span epidemiology, disaster risk management, and education. I’m drawn to questions about how communities adapt, how evidence informs decisions, and how we can communicate ideas more clearly.",
    "Alongside my academic interests, I write about engineering and education—making technical subjects approachable without losing their substance.",
  ],
  education: {
    degree: "Your degree & academic discipline",
    institution: "Your university",
    period: "Add graduation year",
    focus: "Add your academic focus or thesis topic",
  },
  interests: [
    "Public health & epidemiology",
    "Disaster risk & resilience",
    "Education & knowledge sharing",
  ],
};

export const skills = [
  {
    title: "Research & analysis",
    items: [
      "Research methodology",
      "Literature reviews",
      "Qualitative research",
      "Data interpretation",
    ],
  },
  {
    title: "Areas of focus",
    items: [
      "Epidemiology",
      "Disaster risk management",
      "Public health",
      "Education",
    ],
  },
  {
    title: "Writing & tools",
    items: [
      "Academic writing",
      "Technical content",
      "Editing & storytelling",
      "JavaScript / React",
      "HTML / CSS",
      "C++",
    ],
  },
];

// Replace sample publications with your own. Add a real DOI or project URL in externalUrl.
export const research = [
  {
    slug: "community-resilience",
    category: "Paper",
    label: "Research paper",
    year: "Sample",
    sample: true,
    title: "Community resilience in the face of climate-induced disasters",
    description:
      "Exploring the relationship between local knowledge, preparedness, and community-led adaptation in Bangladesh.",
    meta: "Disaster risk management · Research abstract",
    externalUrl: "",
    image: "/images/river-research.png",
    body: [
      {
        heading: "The research question",
        text: "How can local knowledge inform disaster preparedness? This sample research abstract outlines a potential study of the ways communities understand, prepare for, and respond to climate-related hazards. It is an editable example, not a published study or a report of actual findings.",
      },
      {
        heading: "A possible approach",
        text: "A mixed-methods design could combine interviews with community members, participatory mapping, and a review of local preparedness plans. The study would require informed consent, appropriate ethics approval, and careful attention to whose experiences are represented.",
      },
      {
        heading: "Why it matters",
        text: "Preparedness is shaped by trust, access to information, livelihoods, and public infrastructure. Bringing these perspectives into conversation can help frame more useful questions about adaptation. Replace this section with your actual methodology, findings, limitations, and publication link.",
      },
    ],
  },
  {
    slug: "understanding-risk",
    category: "Book",
    label: "Book",
    year: "Sample",
    sample: true,
    title: "Understanding Risk: A Guide to Disaster Preparedness",
    description:
      "An accessible introduction to risk, vulnerability, and the everyday decisions that build more resilient communities.",
    meta: "Book concept · Add publisher and ISBN",
    externalUrl: "",
    image: "",
    body: [
      {
        heading: "About the book",
        text: "This is a sample book entry, not a claim of authorship or publication. Replace the title, description, and chapter overview with details of your own book. Add the publisher, publication date, and ISBN where available.",
      },
      {
        heading: "A bridge between concepts and action",
        text: "A guide to preparedness can start with the distinction between a hazard and a disaster. Risk depends not only on a physical event but also on exposure, vulnerability, and the resources people can access. Clear examples make these ideas easier to apply.",
      },
      {
        heading: "Suggested chapter overview",
        text: "Introduce the context, explain your conceptual framework, and describe the audiences the book is designed to support. This space can include a synopsis, selected chapter descriptions, and an external link to the published book.",
      },
    ],
  },
  {
    slug: "health-and-vulnerability",
    category: "Project",
    label: "Research project",
    year: "Sample",
    sample: true,
    title: "Mapping public health vulnerability in urban communities",
    description:
      "A project concept connecting epidemiological thinking with the social and environmental conditions of urban life.",
    meta: "Public health · Project overview",
    externalUrl: "",
    image: "",
    body: [
      {
        heading: "Project overview",
        text: "This editable example shows how to present an ongoing or completed research project. Replace it with your project title, your role, collaborators, and dates. No data has been collected or analyzed for this sample.",
      },
      {
        heading: "Framing vulnerability",
        text: "Urban health is influenced by housing, access to care, environmental conditions, and social support. A project in this area might investigate how these factors interact rather than treating any one indicator as a complete explanation.",
      },
      {
        heading: "Responsible communication",
        text: "Health research should protect participant privacy, acknowledge uncertainty, and avoid stigmatizing the communities involved. Add the methods, ethical safeguards, actual outcomes, and next steps of your own work here.",
      },
    ],
  },
];

export const writing = [
  {
    slug: "engineering-a-resilient-future",
    category: "Engineering",
    label: "Engineering",
    sample: true,
    year: "Sample",
    readTime: "3 min read",
    title: "Engineering a more resilient future",
    description:
      "Why the best infrastructure starts with understanding the people who depend on it.",
    image: "/images/architecture.png",
    imageAlt:
      "Monochrome concrete stairways and walkways in a university atrium",
    externalUrl: "",
    body: [
      {
        heading: "Beyond the blueprint",
        text: "A bridge connects two riverbanks, but its value extends far beyond that physical connection. It can shorten a journey to school, provide a route to medical care, or keep a local market accessible. Good engineering begins with understanding these everyday needs.",
      },
      {
        heading: "Designing for uncertainty",
        text: "Infrastructure decisions have long lives. A design needs to account for changing conditions, maintenance capacity, and the consequences of failure. Resilience is not the promise that nothing will go wrong; it is the ability to retain essential functions and recover when conditions change.",
      },
      {
        heading: "Listening is a technical skill",
        text: "Community knowledge can reveal details that a site drawing misses: seasonal access routes, informal drainage paths, or barriers faced by people with disabilities. Bringing these insights into the design process helps engineers ask better questions before committing to a solution.",
      },
      {
        heading: "A practical starting point",
        text: "Start by defining who the infrastructure serves, what functions must continue during disruption, and who will maintain it. Document assumptions and revisit them. This original sample illustrates an accessible engineering writing style; replace it with a commissioned or published piece when ready.",
      },
    ],
  },
  {
    slug: "learning-beyond-the-classroom",
    category: "Education",
    label: "Education",
    sample: true,
    year: "Sample",
    readTime: "3 min read",
    title: "Learning beyond the classroom",
    description:
      "How curiosity, context, and real-world questions can make education more meaningful.",
    image: "/images/river-research.png",
    imageAlt:
      "An aerial view of a river and agricultural floodplains in Bangladesh",
    externalUrl: "",
    body: [
      {
        heading: "Start with a question",
        text: "Why does one street flood while another stays dry? How does a neighborhood decide where to plant trees? Familiar questions can create a bridge between classroom concepts and the world students experience every day.",
      },
      {
        heading: "Context creates connection",
        text: "Learning becomes more tangible when students can connect an idea to a place, a person, or a decision. That does not require an elaborate field trip. A local observation, a short interview, or a careful comparison can become the foundation of a meaningful investigation.",
      },
      {
        heading: "Reflection matters",
        text: "An activity alone is not a learning outcome. Students need opportunities to explain what they noticed, question their assumptions, and identify what remains uncertain. Teachers can support that process by valuing thoughtful questions alongside correct answers.",
      },
      {
        heading: "Make room for different voices",
        text: "Not all learners have equal access to time, travel, or technology. Flexible ways to participate make place-based learning more inclusive. This is an original portfolio sample, ready to be replaced with your own education writing.",
      },
    ],
  },
];

export const experience = [
  {
    organization: "East West University",
    role: "Your position / department",
    period: "Add dates",
    description:
      "Describe your academic responsibilities, the projects you contribute to, and the people you collaborate with.",
    tags: ["Academic affiliation", "Research"],
    url: "https://www.ewubd.edu/",
  },
  {
    organization: "Independent writing",
    role: "Your freelance role",
    period: "Add dates",
    description:
      "Add your experience translating engineering and education topics into clear, engaging content for your clients and readers.",
    tags: ["Content writing", "Technical communication"],
    url: "",
  },
];

// Add more blog objects with unique slugs. Each body entry becomes an article section.
export const blog = [
  {
    slug: "asking-better-research-questions",
    category: "Research notes",
    label: "Research notes",
    sample: true,
    year: "Sample",
    date: "2026-09-01",
    readTime: "3 min read",
    title: "The art of asking better research questions",
    description:
      "A few reflections on curiosity, clarity, and finding the question worth pursuing.",
    image: "",
    externalUrl: "",
    body: [
      {
        heading: "Curiosity is a beginning",
        text: "A good research question often begins with something that does not quite make sense. An unexpected pattern, a gap between policy and practice, or two findings that appear to disagree can all be starting points. The challenge is turning that curiosity into a question that can be investigated responsibly.",
      },
      {
        heading: "Make the boundaries visible",
        text: "Who is the question about? In what setting? Over what period? Making these boundaries explicit helps a broad interest become a focused inquiry. It also helps readers understand what an eventual answer will—and will not—tell them.",
      },
      {
        heading: "Read for conversations, not just citations",
        text: "A literature review is more useful when it reveals how ideas relate. Look for disagreements, repeated assumptions, and perspectives that are missing. A useful question contributes to that conversation rather than merely adding another measurement.",
      },
      {
        heading: "Allow the question to change",
        text: "Research questions improve through feedback. A conversation with a supervisor, a pilot interview, or a closer look at the available evidence may reveal a better formulation. Refinement is not a failure of the original idea; it is part of doing careful work. This post is sample content for your editable blog.",
      },
    ],
  },
  {
    slug: "making-complex-ideas-simple",
    category: "On writing",
    label: "On writing",
    sample: true,
    year: "Sample",
    date: "2026-08-20",
    readTime: "3 min read",
    title: "Simple writing is not simple thinking",
    description:
      "On making technical ideas accessible without taking away what makes them important.",
    image: "",
    externalUrl: "",
    body: [
      {
        heading: "Clarity takes work",
        text: "A clear explanation often looks effortless because the difficult decisions have been made before the reader arrives. The writer has chosen what to foreground, what to define, and what to leave for another paragraph. That work requires a strong understanding of the subject.",
      },
      {
        heading: "Replace jargon with precision",
        text: "Technical language can be useful when it carries a specific meaning. The goal is not to remove every specialist term, but to introduce terms deliberately and explain them in context. Where a familiar word conveys the same meaning, use it.",
      },
      {
        heading: "Keep the uncertainty",
        text: "Accessible writing should not turn a tentative finding into a certainty. Explain what the evidence supports, where its limits are, and why those limits matter. A plain sentence can carry nuance just as well as a complicated one.",
      },
      {
        heading: "Read it as a reader",
        text: "After drafting, ask what a reader needs to know at each step. Does the next sentence answer a question the previous one raised? Can a concrete example do more than another definition? This sample reflection can be replaced with your own writing notes.",
      },
    ],
  },
  {
    slug: "resilience-starts-with-listening",
    category: "Field perspectives",
    label: "Field perspectives",
    sample: true,
    year: "Sample",
    date: "2026-08-08",
    readTime: "3 min read",
    title: "Resilience starts with listening",
    description:
      "Why local knowledge belongs at the center of conversations about disaster preparedness.",
    image: "",
    externalUrl: "",
    body: [
      {
        heading: "Whose knowledge counts?",
        text: "People who live with recurring hazards often develop detailed knowledge of local conditions. They notice which paths become unsafe, who may need help, and how warnings move through a neighborhood. These observations are valuable starting points for preparedness discussions.",
      },
      {
        heading: "Participation is more than attendance",
        text: "Inviting people to a meeting is not the same as giving them influence over a decision. Meaningful participation involves accessible communication, room for disagreement, and a clear explanation of how input will affect the work.",
      },
      {
        heading: "Connect perspectives",
        text: "Local experience and technical analysis can strengthen each other when neither is treated as complete on its own. The aim is not to romanticize community knowledge, but to create space for evidence and experience to be examined together.",
      },
      {
        heading: "Begin with listening",
        text: "Before offering a solution, ask what people have already tried, which resources are available, and what makes action difficult. The answers can reshape both the problem and the response. This is a sample perspective, not a report of completed fieldwork.",
      },
    ],
  },
];

export const contact = {
  heading: "Good work starts with\na conversation.",
  description:
    "Have a research idea, a writing project, or a question worth exploring? I’d love to hear from you.",
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
