import styled from "styled-components"
import { Header } from "../theme"

import { useEffect } from "react";
import { ProjectBlock, BlockSpacer, BlockSpacerStart, PaddingOffset } from "../components/ProjectBlock";

import projects, { Project } from "../projects";

const Timeline = styled.div`
    overflow: auto;
    position: relative;
    max-width: 100%;
    mask: linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 95%);
`

const TickMark = styled.div<{index: number}>`
    width: 3px;
    background-color: black;
    height: 40px;
    top: ${props => props.index % 2 === 0 ? -25 : -10}px;
    left: ${props => 530 + props.index * 660}px;
    position: absolute;
`

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

const BottomRow = styled.div`
    display: flex;
    flex-direction: row;
`

const Line = styled.div`
    width: ${425 + projects.length * 700}px;
    height: 3px;
    background-color: black;
    margin-block: 20px;
    position: relative;
`

export const Projects = () => {    
    return (
        <>
            <Header>
                Projects
            </Header>
            <Timeline id={"timeline"}>
                <TopRow>
                    <PaddingOffset />
                    {
                        projects.map((project: Project, index: number) => {
                            if (index % 2 === 0) {
                                if (index < projects.length - 2) {
                                    return (
                                        <>
                                            <ProjectBlock
                                                project={project}
                                                bottom={false}
                                                key={index}
                                                />
                                            <BlockSpacer />
                                        </>
                                    )       
                                }
                                else {
                                    return (
                                        <ProjectBlock
                                            project={project}
                                            bottom={false}
                                            key={index}
                                        />
                                    )
                                }
                            }
                            return (
                                <></>
                            )
                        })
                    }
                    <PaddingOffset />
                </TopRow>
                <Line>
                    {
                        projects.map((project: Project, index: number) => {
                            return (
                                <TickMark index={index}>

                                </TickMark>
                            )
                        })
                    }
                </Line>
                <BottomRow>
                    <BlockSpacerStart />
                    <PaddingOffset />
                    {
                        projects.map((project: Project, index: number) => {
                            if (index % 2 === 1) {
                                if (index < projects.length - 2) {
                                    return (
                                        <>
                                            <ProjectBlock
                                                project={project}
                                                bottom={true}
                                                key={index}
                                            />
                                            <BlockSpacer />
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <ProjectBlock
                                            project={project}
                                            key={index}
                                            bottom={true}
                                        />
                                    )
                                }
                            }
                            else {
                                return <></>
                            }
                        })
                    }
                    <PaddingOffset />
                </BottomRow>
            </Timeline>
        </>
    )
}