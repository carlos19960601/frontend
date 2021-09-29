import { Button } from "grommet";
import { useState } from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #55dfbd;
`;

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  height: 100vh;
  width: 320px;
  transform: translateX(${(props) => props.x}%);
  opacity: ${(props) => props.opacity};
  background: #45b0f9;
`;

function App() {
  const [panelOpen, setPanelOpen] = useState(false);
  return (
    <Container>
      <Button label="Toggle Panel" onClick={() => setPanelOpen(!panelOpen)} />
      <Motion
        style={{
          x: spring(panelOpen ? 0 : -100),
          opacity: spring(panelOpen ? 1 : 0),
        }}
      >
        {(currentStyles) => {
          return (
            <Panel {...currentStyles}>
              <Button label="Close Panel" onClick={() => setPanelOpen(false)} />
            </Panel>
          );
        }}
      </Motion>
    </Container>
  );
}

export default App;
