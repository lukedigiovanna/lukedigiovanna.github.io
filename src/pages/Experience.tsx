import styled from "styled-components";
import { JobDescription } from "../components/JobDescription";
import theme, { Row, Column } from "../theme";

const Title = styled.h1`
    font-family: ${theme.fonts.primary};
    color: #222;
`

const Spacer = styled.div`
    height: 400px;
`

export const Experience = () => {
    return (
        <Row>
            <Column>
                <Title>
                    Experience
                </Title>
                <JobDescription logo={require("../assets/bloomberg.png")}
                                companyTitle={"Bloomberg LP"}
                                jobTitle={"Software Engineer Intern"}
                                jobLocation={"New York, NY"}
                                startDate={"May 2023"}
                                endDate={"August 2023"}
                                description={"This coming summer I am very excited to be working as a software engineer for Bloomberg!"} />
                <JobDescription logo={require("../assets/coderschool.png")}
                                companyTitle={"The Coder School"}
                                jobTitle={"Code Coach"}
                                jobLocation={"Ashburn, VA (Remote)"}
                                startDate={"June 2020"}
                                endDate={"Present"}
                                description={"When I was a kid I desperately pled my mom to find something for me to learn programming. Unfortunately, at the time there wasn't much in the way of coding classes, so I had to pick up a book. But now, I am able to be what I had always wanted when I was kid. With this job I share my passion for coding to the similarly passionate next generation!"} />
                <JobDescription logo={require("../assets/virginiatech.png")}
                                companyTitle={"Virginia Tech"}
                                jobTitle={"Undergraduate Teaching Assistant"}
                                jobLocation={"Blacksburg, VA"}
                                startDate={"Sept. 2022"}
                                endDate={"Present"}
                                description={"I've taken my love for spreading my knowledge of programming to the collegiate level where I assist Professor Liao in CEE 3814 Analytical Tools in Civil Engineering. I grade homeworks and hold office hours for students with additional questions. All of the course is done in Python."} />
                <JobDescription logo={require("../assets/mantech.png")}
                                companyTitle={"ManTech International"}
                                jobTitle={"DFEND Intern"}
                                jobLocation={"Chantilly, VA"}
                                startDate={"June 2021"}
                                endDate={"Aug. 2021"}
                                description={"I was fortunate enough to have the opportunity to apply for a tech internship after my senior year of high school. At this opportunity I was able to learn a lot about cybersecurity, encryption, low level programming, and many other topics. Although I don't wish to pursue a further career in cybersecurity or the defense industry, this internship gave me valuable knowledge in the field of computer science."} />
                <Spacer />
            </Column>
        </Row>
    );
}