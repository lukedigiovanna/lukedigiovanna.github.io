import styled from "styled-components";

const GradientText = styled.p<{ colors: string[] }>`
  background: linear-gradient(to right, ${(props) => props.colors.join(", ")});
  background-clip: text;
  -webkit-background-clip: text;
  width: fit-content;
  color: transparent;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled(GradientText)`
  text-align: center;
  font-weight: bold;
  font-size: 6rem;
  font-family: sans-serif;

  animation: fadeIn 1s ease-in-out;
`

const Subtitle = styled(GradientText)`
  font-family: sans-serif;
  text-align: center;
  font-size: 2.4rem;
  margin-top:0;
`

function App() {
  return (
    <Container>
      <Title colors={["#ebbe7b", "#f38f68", "#ebbe7b"]}> Luke DiGiovanna </Title>
      <Subtitle colors={["#fda5a5", "#aa6161"]}> Fullstack developer, automator, student </Subtitle>
    </Container>
  );
}

export default App;
