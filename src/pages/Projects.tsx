import styled from "styled-components"

const Timeline = styled.div`
    overflow-x: scroll;
    max-width: 800px;
`

export const Projects = () => {
    return (
        <>
            Projects:
            <Timeline>
                This is a work in progress. Check out my <a href="https://github.com/lukedigiovanna" target="_blank">github</a> for now with many of my projects
                available and writeups accessible in the README files.
            </Timeline>
        </>
    )
}