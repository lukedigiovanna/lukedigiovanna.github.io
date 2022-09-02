import styled from "styled-components";

import { Header, Body, Row, Column } from '../theme';

const ProfileImage = styled.img`
    width: 240px;
    border-radius: 5px;
`

const Links = styled.div`
    flex-direction: row;
    align-items: space-around;
    border-bottom: 1px solid black;
    width: fit-content;
    text-align: center;
`

const Link = styled.a`
    
`

const LinkImage = styled.img`
    width: 35px;
    margin-inline: 20px;
    transition: 0.2s ease-in-out;

    &:hover {
        filter: drop-shadow(0px 0px 6px black);
    }

    &:active {
        filter: drop-shadow(0px 0px 6px aqua);
    }
`

export const About = () => {
    return (
        <>
            <Row style={{marginTop: "20px"}}>
                <Column>
                    <ProfileImage src={require("../assets/profile_image.jpg")} />
                </Column>
                <Column>
                    <Header>
                        About Me
                    </Header>
                    <Body>
                        Hi there! I am a second year computer science student at Virginia Tech.
                        I am passionate about programming, solving problems, and building
                        technology that connects people.
                    </Body>
                </Column>
            </Row>
            Stuff:
            <Links>
                <Link target="_blank" href="https://www.linkedin.com/in/luke-digiovanna-848309212/">
                    <LinkImage src={require("../assets/linkedin.png")}></LinkImage>
                </Link>
                <Link target="_blank" href="https://github.com/lukedigiovanna">
                    <LinkImage src={require("../assets/github.png")}></LinkImage>
                </Link>
                <Link target="_blank" href="https://www.youtube.com/channel/UCdC2JPSPOf6s53L6KEvGdow/featured">
                    <LinkImage src={require("../assets/youtube.png")}></LinkImage>
                </Link>
            </Links>
        </>
    );
}