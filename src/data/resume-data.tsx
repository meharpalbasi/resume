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
      title: 'UK Data Analyst Jobs',
      techStack: ['Side Project', 'Next.js', 'TypeScript'],
      description: 'A Job Board for Data Analyst Jobs in the UK',
      logo: EvercastLogo,
      link: {
        label: 'ukdataanalystjobs.com',
        href: 'https://www.ukdataanalyst.com',
      },
    },
    {
      title: 'Premier League Overs and Unders',
      techStack: ['Side Project', 'Next.js', 'Prisma', 'Auth.js', 'SQLite'],
      description: 'An app that allows users to bet on the outcome of the Premier League player props,',
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/premier_league_predictor',
      },
    },
    {
      title: 'FPL Analyzer',
      techStack: ['Side Project', 'Next.js'],
      description: 'An app that allows users to bet on the outcome of the Premier League,',
      logo: EvercastLogo,
      link: {
        label: 'Vercel',
        href: 'https://fpl-app-khaki.vercel.app',
      },
    },
    {
      title: 'FPL Player and Team Dashboard',
      techStack: ['Side Project', 'Next.js'],
      description: 'A dashboard that allows users to viewstats of players and teams in FPL',
      logo: EvercastLogo,
      link: {
        label: 'Vercel',
        href: 'https://fps-player-app.vercel.app',
      },
    },
    {
      title: 'FPL Price Change Bot',
      techStack: ['Side Project', 'Python', 'Telegram API','Railway'],
      description: 'A telegram bot that sends you the price changes of FPL players daily',
      logo: EvercastLogo,
      link: {
        label: 'Telegram',
        href: 'https://web.telegram.org/a/#-1002392242605',
      },
    },
    {
      title: 'Resume.me',
      techStack: ['Side Project', 'Next.js', 'TypeScript'],
      description: 'My Resume which you can access on the website you are currently on, built with Next.js.',
      logo: JarockiMeLogo,
      link: {
        label: 'meharpalbasi.fyi',
        href: 'https://www.meharpalbasi.fyi',
      },
    },
    {
      title: 'meharpalbasi.com',
      techStack: ['Side Project', 'Next.js', 'Notion API'],
      description: 'The Website you are currently on, built with Next.js',
      logo: Minimal,
      link: {
        label: 'meharpalbasi.com',
        href: 'meharpalbasi.com',
      },
    },
    {
      title: 'NFL Interception Model',
      techStack: ['Python', 'DataScience', 'SKLearn', 'Data Science'],
      description: "In this project I use the NFL's play by play data to calculate which Quarterbacks under-performed vs over-performed their expected amount of interceptions. In this model I use a logistic regression, random forest and an XGBOOST model; calculating subsequent Brier scores.",
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/interception_modelling',
      },
    },
    {
      title: 'NFL Rush Yards Overexpected Model',
      techStack: ['Python', 'DataScience', 'SKLearn', 'Data Science'],
      description: "In this project I use the NFL's play by play data to calculate which Running Backs over-performed their expected amount of rushing yards. In this model I use a XGBOOST model.",
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/rushyardsoverexpected',
      },
    },
    {
      title: 'NBA Line Up Analyzer',
      techStack: ['Side Project', 'Python', 'Streamlit'],
      description: 'Application that breaks down advanced analytics of all NBA lineups from the 2023-2024 season',
      logo: EvercastLogo,
      link: {
        label: 'streamlit.io',
        href: 'https://nbalineupanalyzer.streamlit.app',
      },
    },
    {
      title: 'Who\'s the best Kicker in the NFL?',
      techStack: ['Python', 'DataScience', 'SKLearn', 'Data Science'],
      description: "In this project I use the NFL's play by play data to calculate which Kicker over-performed their expected amount of Field Goals. In this model I use a random forest model. P.S It's Chris Boswell",
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/Kicking-Over-Expected',
      },
    },
    {
      title: 'S&P500 Analyzer',
      techStack: [
        'Streamlit',
        'Python',
        'Yahoo Finance API',
      ],
      description:
        'In this Streamlit program I visualize the top gainers and losers of the S&P500 within a chosen timeframe.',
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/equity-dashboard',
      },
    },
    {
      title: 'NFL Quarterback Through the Seasons',
      techStack: ['Python', 'Streamlit'],
      description: 'In this streamlit application I use the NFL play by play data to visualize NFL Quarterbacks cumulative Passing Yards, Touchdowns and Interceptions through the weeks.',
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/NFL-Quarterback-App',
      },
    },
    {
      title: 'FBREF Scraper',
      techStack: ['Python', 'Airflow'],
      description: 'Scrapes, combines and cleans data from FBREFs top 5 leagues and schedules it to a Postgres Database',
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/Football_Reference_Scraper_And_Cleaner/tree/main',
      },
    },
    {
      title: 'Compare your portfolio to the S&P500',
      techStack: ['Python', 'Streamlit'],
      description: 'A Streamlit application that allows you to compare your portfolio to the S&P500, with risk and return analysis',
      logo: EvercastLogo,
      link: {
        label: 'github.com',
        href: 'https://github.com/meharpalbasi/Portfolio-Analysis',
      },
    },
    {
      title: 'FPL User Analysis',
      techStack: ['Side Project', 'Python', 'Streamlit'],
      description: 'Application that shows you your FPL team performance and how you compare to the average FPL user as well as history',
      logo: EvercastLogo,
      link: {
        label: 'streamlit.io',
        href: 'https://fpluser.streamlit.app',
      },
    },
  ],
} as const;
