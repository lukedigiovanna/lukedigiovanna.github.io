import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 800px;
    margin: 20px auto;
    color: #eee;
    font-family: sans-serif;
`

function MainPage() {
    return (
        <Container>
            <h1>
                Luke DiGiovannna
            </h1>
            <p>
                Hello, I am a software developer.
            </p>
        </Container>
    )
}

export { MainPage };