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
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
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
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
