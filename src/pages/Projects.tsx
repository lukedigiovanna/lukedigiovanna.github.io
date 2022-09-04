import styled from "styled-components"

import { Header } from "../theme"

import ScrollMagic from 'scrollmagic';
import gsap from "gsap";
import { useEffect } from "react";
import { ProjectBlock } from "../components/ProjectBlock";

const Timeline = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: row;
    max-width: 1000px;
`

export const Projects = () => {
    useEffect(() => {

    }, []);
    
    return (
        <>
            <Header>
                Projects
            </Header>
            <Timeline id={"timeline"}>
                <ProjectBlock
                    title={"Wiki-Lie"}
                    startDate={"February 2022"}
                    endDate={"Present"}
                    description={"Wiki-Lie is an online party game inspired by Tom Scott's Two of These People are Lying. The premise of the game is simple: All players must convince a chosen guesser that they know about a particular topic, but only one player actually knows about that topic. I initially tried playing this game on paper, but found it quite difficult to keep track of the articles, so I decided to make a web app version."}
                    githubURL={"github.com"}
                    icon={null}
                    skills={["Node.js", "TypeScript", "React.js", "Express", "Socket.io", "HTML/CSS", "Wikimedia API"]}
                />
                <ProjectBlock
                    title={"Googlepedia"}
                    startDate={"August 2022"}
                    endDate={"Present"}
                    description={"I wanted to try creating a search engine, so I did. This is quite basic and only searches Wikipedia, but it makes use of a webscraper, indexer, and frontend, just as in a real search engine."}
                    githubURL={"github.com"}
                    icon={null}
                    skills={["PostgreSQL", "Web Scraping", "Index", "TypeScript", "Node.js", "Express", "Axios"]}
                />
                <ProjectBlock
                    title={"Sample Project"}
                    startDate={"March 2020"}
                    endDate={"Present"}
                    description={"Destroy the world and collapse global supply chains"}
                    githubURL={"github.com"}
                    icon={null}
                    skills={["High Infectiousness", "Global Scarcity", "Death"]}
                />
            </Timeline>
        </>
    )
}