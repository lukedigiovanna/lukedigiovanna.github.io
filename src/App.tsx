import styled, {keyframes} from "styled-components";
import * as React from 'react';

import ScrollMagic from 'scrollmagic';
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";

const GradientText = styled.p<{ colors: string[] }>`
  background: linear-gradient(to right, ${(props) => props.colors.join(", ")});
  background-clip: text;
  -webkit-background-clip: text;
  width: fit-content;
  color: transparent;
`

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`

const AppContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const Container = styled.div`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  position: relative;
  padding-top: 3rem;
`

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: linear-gradient(to right, #00293e, #005aa4, #00293e);
  z-index: 1;
  `

const NavbarContent = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: 800px;
`

const NavbarButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`

const NavbarButton = styled.a`
  text-decoration: none;
  font-family: sans-serif;
  color: #ddd;
  font-size: 1.1rem;
  font-weight: bold;
  margin-inline: 7px;
  transition: 0.3s ease-in-out;
  opacity: 1.0;

  &:hover {
    opacity: 0.9;
    color: #fca6a6;
  }
`

const Name = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  color: #eee;
  font-size: 1.8rem;
  margin: 0;
`

const WIP = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  background-color: #ff7b7b;
  max-width: 100px;
  padding: 20px;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 10px #000);
`

window.addEventListener('load', () => {
  const controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
    duration: 7000,
    offset: 100,
  }).setPin("#introduction").addTo(controller);
})

function App() {

  // React.useEffect(() => {
  //   // window.location.href = "https://youtube.com";
  // });
  
  return (
    <AppContainer>
      {/* <WIP>This site is still a work in progress!</WIP> */}
      <Navbar>
        <NavbarContent>
          <Name>
            Luke DiGiovanna
          </Name>
          <NavbarButtonSection>
            <NavbarButton href={"#about"}>
              About
            </NavbarButton>
            <NavbarButton href={"#projects"}>
              Projects
            </NavbarButton>
            <NavbarButton href={"#experience"}>
              Experience
            </NavbarButton>
            <NavbarButton href={"#contact"}>
              Contact
            </NavbarButton>
          </NavbarButtonSection>
        </NavbarContent>
      </Navbar>
      <Container id={"about"}>
        <About />
      </Container>
      <Container id={"projects"}>
        <Projects />
      </Container>
      <Container id={"experience"}>
        <Experience />
      </Container>
      <Container id={"contact"}>
        <Contact />
      </Container>
    </AppContainer>
  );
}

export default App;
