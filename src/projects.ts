
export interface Project {
    title: string;
    githubURL: string; 
    liveURL: string | null;
    downloadURL: string | null;
    icon: any;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
}

const projects: Project[] = [
    {
        title: "Wiki-Lie",
        startDate: "February 2022",
        endDate: "Present",
        description: "Wiki-Lie is an online party game inspired by Tom Scott's Two of These People are Lying. The premise of the game is simple: All players must convince a chosen guesser that they know about a particular topic, but only one player actually knows about that topic. I initially tried playing this game on paper, but found it quite difficult to keep track of the articles, so I decided to make a web app version.",
        githubURL: "https://github.com/lukedigiovanna/wiki-lie-v2",
        liveURL: "http://wiki-lie.herokuapp.com",
        downloadURL: null,
        icon: null,
        skills: ["Node.js", "TypeScript", "React.js", "Express", "Socket.io", "HTML/CSS", "Wikimedia API"]
    },
    {
        title: "Googlepedia",
        startDate: "August 2022",
        endDate: "Present",
        description: "I wanted to try creating a search engine, so I did. This is quite basic and only searches Wikipedia, but it makes use of a webscraper, indexer, and frontend, just as in a real search engine.",
        githubURL: "github.com",
        liveURL: "http://wiki-lie.herokuapp.com",
        downloadURL: null,
        icon: null,
        skills: ["PostgreSQL", "Web Scraping", "Index", "TypeScript", "Node.js", "Express", "Axios"],
    },
    {
        title: "Googlepedia2",
        startDate: "August 2022",
        endDate: "Present",
        description: "I wanted to try creating a search engine, so I did. This is quite basic and only searches Wikipedia, but it makes use of a webscraper, indexer, and frontend, just as in a real search engine.",
        githubURL: "github.com",
        liveURL: "http://wiki-lie.herokuapp.com",
        downloadURL: null,
        icon: null,
        skills: ["PostgreSQL", "Web Scraping", "Index", "TypeScript", "Node.js", "Express", "Axios"],
    },
    {
        title: "Googlepedia3",
        startDate: "August 2022",
        endDate: "Present",
        description: "I wanted to try creating a search engine, so I did. This is quite basic and only searches Wikipedia, but it makes use of a webscraper, indexer, and frontend, just as in a real search engine.",
        githubURL: "https://github.com/lukedigiovanna/wiki-lie-v2",
        liveURL: "http://wiki-lie.herokuapp.com",
        downloadURL: null,
        icon: null,
        skills: ["PostgreSQL", "Web Scraping", "Index", "TypeScript", "Node.js", "Express", "Axios"],
    },
    {
        title: "Googlepedia4",
        startDate: "August 2022",
        endDate: "Present",
        description: "I wanted to try creating a search engine, so I did. This is quite basic and only searches Wikipedia, but it makes use of a webscraper, indexer, and frontend, just as in a real search engine.",
        githubURL: "github.com",
        liveURL: "http://wiki-lie.herokuapp.com",
        downloadURL: null,
        icon: null,
        skills: ["PostgreSQL", "Web Scraping", "Index", "TypeScript", "Node.js", "Express", "Axios"],
    }

];

export default projects;