import styled from "styled-components";

import { Header, Body, Container, Column } from '../theme';

const ProfileImage = styled.img`
    width: 240px;
    border-radius: 5px;
`


export const About = () => {
    return (
        <Container>
            <Column>
                <ProfileImage src={require("../assets/profile_image.jpg")} />
            </Column>
            <Column>
                <Header>
                    About Me
                </Header>
                <Body>
                    Hi there! I am a second year computer science student at Virginia Tech.
                    I am passionate about programming, problem solving, and building
                    technology that connects people.
                </Body>
            </Column>
        </Container>
    );
}