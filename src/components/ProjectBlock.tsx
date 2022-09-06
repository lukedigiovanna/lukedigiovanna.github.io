import styled from "styled-components";
import { Project } from "../projects";

import { Column, Row } from '../theme';

const InfoLabel = styled.span`
    font-weight: bold;
`

const InfoRow = styled.p`
    margin: 3px;
`

const Block = styled.div`
    font-family: sans-serif;
    background-color: #d6e2f1;
    border-radius: 5px;
    margin: 10px;
    /* padding-inline: 20px; */
    height: fit-content;
`

const Title = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin: 0;
    text-align: center;
    width: 100%;
`

export const BlockSpacer = styled.div`
    min-width: 540px;
    margin: 10px;
`

export const BlockSpacerStart = styled.div`
    min-width: 640px;
    margin: 10px;
`

export const PaddingOffset = styled.div`
    min-width: 150px;
`

const DateLineP = styled.p`
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
    margin: 0;
    width: 100%;
`

const DateLine = (props: {start: string, end: string}) => {
    return (
        <DateLineP>
            {props.start} - {props.end}
        </DateLineP>
    )
}

export const ProjectBlock = (
    props: {
        project: Project;
        bottom: boolean
    }
) => {
    return (
        <Block>
            <Column>
                {
                    props.bottom &&
                    <>
                        <Row>
                            <DateLine start={props.project.startDate} end={props.project.endDate} />
                        </Row>
                        <Row>
                            <Title>
                                {props.project.title}
                            </Title>
                        </Row>
                    </>
                }
                <Row>
                    <Column style={{maxWidth: "200px"}}>
                        <InfoRow>
                            <InfoLabel>Github: </InfoLabel>
                            <a target="_blank" href={props.project.githubURL}> here </a>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel> Skills/Technology Used: </InfoLabel>
                        </InfoRow>
                        <InfoRow style={{marginLeft: "12px"}}>
                            {
                                props.project.skills.join(", ")
                            }
                        </InfoRow>
                    </Column>
                    <Column style={{maxWidth: "400px"}}>
                        {props.project.description}
                    </Column>
                </Row>
                {
                    !props.bottom &&
                    <>
                        <Row>
                            <Title>
                                {props.project.title}
                            </Title>
                        </Row>
                        <Row>
                            <DateLine start={props.project.startDate} end={props.project.endDate} />
                        </Row>
                    </>
                }
            </Column>

        </Block>
    )
}