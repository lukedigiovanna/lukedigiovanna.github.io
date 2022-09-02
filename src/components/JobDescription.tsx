import styled from "styled-components";

const Block = styled.div`
    border-radius: 3px;
    background: linear-gradient(to right, #dfdddd, #b3b8bd, #dfdddd);
    width: 700px;
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
    margin-block: 15px;
    padding: 10px;
`

const Logo = styled.img`
    flex: 1;
    max-height: 120px;
    max-width: 120px;
    margin: 15px;
    align-self: center;
`

const DetailsBlock = styled.div`
    flex: 5;
`

const Header = styled.p`
    font-size: 1.1rem;
`

const Subheader = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.95rem;
`

const CompanyTitle = styled.span`
    font-weight: bold;
`

const JobTitle = styled.span`
    font-style: italic;
    font-size: 1.04rem;
`

const JobLocation = styled.span`
    font-weight: bold;
    margin-right: 10px;
`

const Date = styled.span`
    
`

const Description = styled.p`
    color: #333;
    font-size: 0.95rem;
    margin-top: 5px;
`

export const JobDescription = (props: {logo: any, companyTitle: string, jobTitle: string, jobLocation: string, description: string, startDate: string, endDate: string}) => {
    return (
        <Block>
            <Logo src={props.logo}>

            </Logo>
            <DetailsBlock>
                <Header>
                    <CompanyTitle>
                        {props.companyTitle}
                    </CompanyTitle>
                    {" - "}
                    <JobTitle>
                        {props.jobTitle}
                    </JobTitle>
                    <Subheader>
                        <JobLocation>
                            {props.jobLocation}
                        </JobLocation>
                        <Date>
                            {props.startDate} - {props.endDate}
                        </Date>
                    </Subheader>
                    <Description>
                        {props.description}
                    </Description>
                </Header>
            </DetailsBlock>
        </Block>
    );
}