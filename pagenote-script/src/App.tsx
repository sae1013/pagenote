import React from "react";
import styled from "@emotion/styled";
import Folder from "./components/Folder";
import NoteList from "./components/NoteList";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff5e1;
`;

const HomeMain = styled.div`
  padding-top: 8rem;
  margin: auto;
  display: flex;
  width: 1500px;
  height: 800px;
  /* background-color: red; */
`;

const SideBar = styled.section`
  width: 300px;
  height: 700px;
  background-color: blue;
`;

const Contents = styled.section`
  flex: 1;
  height: 700px;
  background-color: yellow;
  overflow-y: scroll;
`;

function App() {
  return (
    <HomeContainer>
      <HomeMain>
        <SideBar></SideBar>
        <Contents>
          <Folder></Folder>
          <NoteList></NoteList>
        </Contents>
      </HomeMain>
    </HomeContainer>
  );
}

export { App };
