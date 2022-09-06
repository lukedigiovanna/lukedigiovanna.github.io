import styled from "styled-components";

import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";

import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from "react-gsap";

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

function App() {
  return (
    <AppContainer>
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
      <Container id={"about"} 
        style={{background: "linear-gradient(to bottom, #eaf4ff, #e6fef9)"}}>
        <About />
      </Container>
      <Container id={"projects"}
        style={{background: "linear-gradient(to bottom, #e6fef9, #eaf4ff)"}}>
        <Projects />
      </Container>
      <Container id={"experience"}
        style={{background: "linear-gradient(to bottom, #eaf4ff, #e6fef9)"}}>
        <Experience />
      </Container>
      <Container id={"contact"}
        style={{background: "linear-gradient(to bottom, #e6fef9, #eaf4ff)"}}>
        <Contact />
      </Container>
    </AppContainer>
  );
}

export default App;
