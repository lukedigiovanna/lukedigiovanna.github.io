import styled from "styled-components";
import { JobDescription } from "../components/JobDescription";
import { Container, Column } from "../theme";



const Title = styled.h1`
    font-family: sans-serif;
    color: #222;
`

export const Experience = () => {
    return (
        <Container>
            <Column>
                <Title>
                    Experience
                </Title>
                <JobDescription logo={require("../assets/coderschool.png")}
                                companyTitle={"The Coder School"}
                                jobTitle={"Code Coach"}
                                jobLocation={"Ashburn, VA (Remote)"}
                                startDate={"June 2020"}
                                endDate={"Present"}
                                description={"When I was a kid I desperately pled to my mom to find something for me to learn programming. Unfortunately, at the time there wasn't much in the way of coding classes, so I had to pick up a book. But now, I am able to be what I had always wanted when I was kid. With this job I share my passion for coding to the similarly passionate next generation!"} />
                <JobDescription logo={require("../assets/virginiatech.png")}
                                companyTitle={"Virginia Tech"}
                                jobTitle={"Undergraduate Teaching Assistant"}
                                jobLocation={"Blacksburg, VA"}
                                startDate={"Sept. 2022"}
                                endDate={"Present"}
                                description={"!"} />
                <JobDescription logo={require("../assets/profile_image.jpg")}
                                companyTitle={"ManTech International"}
                                jobTitle={"DFEND Intern"}
                                jobLocation={"Chantilly, VA"}
                                startDate={"June 2021"}
                                endDate={"Aug. 2021"}
                                description={""} />
            </Column>
        </Container>
    );
}