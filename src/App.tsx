import styled, {keyframes} from "styled-components";
import * as React from 'react';
import Engine from './engine';

import ScrollMagic from 'scrollmagic';

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
  height: 100vh;
  width: 100vw;
  margin: 0;
  position: relative;
`

const Title = styled(GradientText)`
  text-align: center;
  font-weight: bold;
  font-size: 6rem;
  font-family: sans-serif;

  animation: ${fadeIn} 1.2s ease-in-out;
`

const Subtitle = styled(GradientText)`
  font-family: sans-serif;
  text-align: center;
  font-size: 2.4rem;
  margin-top:0;

  animation: ${fadeIn} 1.2s ease-in-out;
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: linear-gradient(to right, #00293e, #005aa4, #00293e);
  z-index: 1;
  display: flex;
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
  // const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // React.useEffect(() => {
  //   new Engine(canvasRef.current as HTMLCanvasElement)
  // }, []);

  return (
    <>
      {/* 
        <Navbar>
        </Navbar>
        <WIP>This site is still a work in progress!</WIP> */}
      <div id={"introduction"}>

      </div>
    </>
  );
}

export default App;
