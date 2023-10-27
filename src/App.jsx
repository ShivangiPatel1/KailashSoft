import {styled}  from "styled-components";
import {css} from "styled-components";
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;  
`
const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0, 65% 0, 49% 100%, 100% 100%);
  background-color: #7DADC4;
`

const App = () =>{
  return (
    <Container>
        <Navbar/>
        <Intro/>
        <IntroShape></IntroShape>
    </Container>
  );
};

export default App;
