/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import styled from "@emotion/styled";
import Note from "./components/Note";

const Container = styled.div`
  position: fixed;
  top: 5rem;
  right: 1rem;
  width: 420px;
  height: 800px;
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  z-index: 100000;
`;
function App() {
  return (
    <Container>
      <Note></Note>
    </Container>
  );
}

export { App };
