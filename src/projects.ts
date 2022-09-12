
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
        description: "I wanted to try creating a search engine, so I did. This is quite basic and only searches Wikipedia, but it makes use of a webscraper, indexer, and frontend, just as in a real search engine.<br><br>I am currently working on extending this project to use a fully custom indexing application. You are free to read about my progress <a target='_blank' href='https://docs.google.com/document/d/1ybQDWr1OHtBjlFQ0sO_RA-qTLm5HhRMHrtWEUWUvS1g/edit?usp=sharing'>here</a>",
        githubURL: "https://github.com/lukedigiovanna/googlepedia",
        liveURL: "http://googlio.herokuapp.com",
        downloadURL: null,
        icon: null,
        skills: ["PostgreSQL", "Web Scraping", "Index", "TypeScript", "Node.js", "Express", "Axios", "Data Structures"],
    },
    {
        title: "3D ASCII Engine",
        startDate: "September 2021",
        endDate: "September 2021",
        description: "To learn how 3D graphics actually work, I decided to create my own 3D engine. I was inspired by the iconic <a target='_blank' href='https://www.youtube.com/watch?v=DEqXNfs_HhY'>rotating donut</a> program, so I chose the terminal as the canvas to draw on. This program is quite rudimentary, but the math and graphics procedures are consistent with proper 3D graphics.",
        githubURL: "https://github.com/lukedigiovanna/3D-ASCII-Engine",
        liveURL: null,
        downloadURL: null,
        icon: null,
        skills: ["C++", "Windows.h", "3D Graphics", "Matrices and Vectors", "Graphics Optimization"],
    },
    {
        title: "Rubik's Cube Computer Vision",
        startDate: "August 2020",
        endDate: "May 2021",
        description: "This was my project for my senior capstone research as part of my high school curriculum. My partner and I wanted to do something related to computer vision and 3D image reconstruction. We settled on developing an algorithm to scan the faces of a Rubik's cube and suggest a solution.",
        githubURL: "https://github.com/lukedigiovanna/Rubiks-Cube-Solver",
        liveURL: "https://drive.google.com/drive/folders/1DLXX06XW8JmYig23C9MBRHMEzH655xzf",
        downloadURL: null,
        icon: null,
        skills: ["Python", "OpenCV", "Computer Vision", "Research"]
    },
    {
        title: "Regression Visualizer",
        startDate: "May 2021",
        endDate: "May 2021",
        description: "Visualizes polynomial regression for any given data set of points. Makes use of iterative gradient descent to visualization how the polynomial changes as its parameters are optimized.",
        githubURL: "https://github.com/lukedigiovanna/Regression-Visualizer",
        liveURL: null,
        downloadURL: null,
        icon: null,
        skills: ["Machine Learning", "HTML/CSS", "JavaScript", "Canvas API"]
    },
    {
        title: "Kings of San Anglos",
        startDate: "October 2019",
        endDate: "July 2021",
        description: "This is probably my single largest project in terms of scope and code. It is a very open-ended free-world game made entirely in Java with no external libraries. This is a testament to my OOP programming abilities, data serialization, simulation, and graphics programming.",
        githubURL: "https://github.com/lukedigiovanna/City-Freeworld-Game",
        liveURL: null,
        downloadURL: null,
        icon: null,
        skills: ["Java", "Data Serialization", "Game Programming", "Physics Simualtion", "Object Oriented Programming", "Graphics", "Java GUI"]
    },
    {
        title: "Sorting Vis/Audibilizer",
        startDate: "August 2020",
        endDate: "August 2020",
        description: "I was inspired by all those YouTube videos of the cool looking sorting algorithms, so I made my own version! This supports many algorithms, visualization methods, and other options.",
        githubURL: "https://github.com/lukedigiovanna/sorting-visualizer",
        liveURL: null,
        downloadURL: null,
        icon: null,
        skills: ["Java", "Java GUI", "Algorithms"]
    }
];

export default projects;