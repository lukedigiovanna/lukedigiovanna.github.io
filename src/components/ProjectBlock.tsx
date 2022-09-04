import styled from "styled-components";

import { Header, Column, Row } from '../theme';

const InfoLabel = styled.span`
    font-weight: bold;
`

const InfoRow = styled.p`
    margin: 3px;
`

const Block = styled.div`
    font-family: sans-serif;
    background-color: #eee;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
`

const Title = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin: 0 0 10px 10px;
    text-align: center;
    width: 100%;
`

export const ProjectBlock = (
    props: {
        title: string;
        githubURL: string; 
        icon: any;
        startDate: string;
        endDate: string;
        description: string;
        skills: string[];
    }
) => {
    return (
        <Block>
            <Column>
                <Row>
                    <Title>
                        {props.title}
                    </Title>
                </Row>
                <Row>
                    <Column style={{maxWidth: "200px"}}>
                        <InfoRow>
                            <InfoLabel> Start Date </InfoLabel>: {props.startDate}
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel> End Date </InfoLabel>: {props.endDate}
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel> Skills/Technology Used: </InfoLabel>
                        </InfoRow>
                        <InfoRow style={{marginLeft: "12px"}}>
                            {
                                props.skills.join(", ")
                            }
                        </InfoRow>
                    </Column>
                    <Column style={{maxWidth: "400px"}}>
                        {props.description}
                    </Column>
                </Row>
            </Column>

        </Block>
    )
}