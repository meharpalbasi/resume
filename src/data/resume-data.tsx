import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Meharpal Basi",
  initials: "MB",
  location: "London, England",
  locationLink: "https://www.google.co.uk/maps/place/London",
  about:
    "Detail-oriented Data Analyst dedicated to building high-quality data solutions.",
  summary:
    "As a Data Analyst, I specialize in creating high-quality data solutions and turning complex data into actionable insights that drive business growth. ",
  avatarUrl: "https://avatars.githubusercontent.com/meharpalbasi",
  personalWebsiteUrl: "www.meharpalbasi.com",
  contact: {
    email: "meharpalbasi45@gmail.com",
    tel: "+447957299101",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/meharpalbasi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/meharpal-basi/",
        icon: LinkedInIcon,
      },

    ],
  },
  education: [
    {
      school: "University of Warwick",
      degree: "Bachelor's Degree in Economics",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "LHV Bank",
      link: "https://lhv.com",
      badges: ["London"],
      title: "Data Analyst",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:
        "Banking Services Data Analyst. Technologies: Python, SQL, Power BI, Tableau, AWS Cloud",
    },
    {
      company: "Penta Group",
      link: "https://pentagroup.co/careers",
      badges: ["London"],
      title: "Insights Analyst",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Created and Presented impactful client reports. Technologies: SQL, Databases",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "React/Next.js/Remix",
    "Power BI",
    "Tableau",
    "Metabase",
    "AWS Cloud",
  ],
  projects: [
    {
      title: "S&P 500 Analyzer",
      techStack: [
        "Python",
        "Streamlit",
      ],
      description:
        "Analyzing S&P 500 Companies within a given time period visualizing the biggest winners and losers",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://meharpalbasi-equity-dashboard-equity-dashboard-v5uns1.streamlit.app",
      },
    },
    {
      title: "Quarterback Breakdown App",
      techStack: [
        "Python",
        "Streamlit",
      ],
      description:
        "Breaking down each Quarterback's offensive stast by the Defensive Zone types, Coverage types, Pass Rushers and other defensive metrics",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://quarterbackbreakdown.streamlit.app",
      },
    },
    {
      title: "Premier League Overs and Unders",
      techStack: [
        "Side Project",
        "Python",
        "Flask",
        "SQLite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "meharpalbasi.com",
      techStack: ["Side Project", "Next.js"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://meharpalbasi.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://yearprogressapp.vercel.app",
      },
    },
    {
      title: "Quarterback Interception Model",
      techStack: ['Python', "Machine Learning"],
      description: "In this this project I use NFL's play by play data to calculate which Quarterbacks under-performed vs over-performed their expected amount of interceptions, using logistic regression and an XGBOOST model ",
      link: {
        label: "github.com",
        href: "https://github.com/meharpalbasi/interception_modelling",
      },
    }
  ],
} as const;
