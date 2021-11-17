export const PROJECTS = [
  {
    id: 1,
    name: "Dapper Designer",
    description:
      "This site :) A JAMStack playground to try out new things and experiement. The blogs section uses MDX  & syntax-highlighter. Serverless functions keep a hit count on a FaunaDB & handle the contact form",
    tech: ["NextJS", "TypeScript", "FaunaDB", "TailwindCSS", "Netlify"],
    isPrivate: true,
    link: "/",
  },
  {
    id: 4,
    name: "Revel Well",
    description:
      "Online spin class video streaming subscription services featured in the Australian Financial Review. Client manages all content including video upload through Contenful and MUX APIs. Data is fetched and served using GraphQL. The video load time are outstanding!",
    tech: [
      "Gatsby",
      "Netlify",
      "GraphQL",
      "Stripe",
      "MUX",
      "HLS",
      "Contentful",
    ],
    isPrivate: false,
    link: "https://revelwell.com.au",
  },
  {
    id: 2,
    name: "Trip Planner",
    description:
      "Small app for my Mums up coming trip to Oz to practice serverless functions & databases as well as testing",
    tech: ["NextJS", "FaunaDB", "React Testing Library", "Vercel"],
    isPrivate: false,
    link: "https://mums-trip-ideas.vercel.app/",
  },
  {
    id: 3,
    name: "Redfox",
    description:
      "A drag n' drop style CRM for sales teams based on a stratup idea. Currently still in development and moving to production in December. First time using Drag n Drop",
    tech: [
      "React",
      "Redux",
      "React Beautiful DnD",
      "TailwindCSS",
      "styled-components",
    ],
    isPrivate: true,
    link: "/",
  },
  {
    id: 5,
    name: "Preacta Recruitment",
    description:
      "Static site for multi-million dollar recruitment company. All content managed trhough Contentful with templates setup for the Admin staff to manage new starts and blog posts",
    tech: ["Gatsby", "Contentful", "GraphQL", "Sass", "Netlify"],
    isPrivate: false,
    link: "https://www.preactarecruitment.com",
  },
  {
    id: 6,
    name: "Kloud Partners",
    description:
      "Static site for startup recruitment company. Using Greensock for on scroll animations. Focus on high google lighthouse score and SEO",
    tech: ["Gatsby", "Greensock", "TailwindCSS", "Netlify"],
    isPrivate: false,
    link: "https://www.kloudpartners.com",
  },
  {
    id: 7,
    name: "BoogFlix",
    description:
      "Subscription based video streaming platform using previous experience of video stream with a focus on low buffering times and 4K quality streaming",
    tech: ["React", "VideoJS", "HLS"],
    isPrivate: false,
    link: "https://boogflix.com/",
  },
];
