import React from "react";
import styled from "@emotion/styled";
import NoteList from "../components/NoteList";
import Header from "../components/Header";
import Folder from "../components/Folder";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff5e1;
`;

const HomeMain = styled.div`
  margin: auto;
  display: flex;
  max-width: 1500px;
  height: calc(100vh - 6rem);
`;

const SideBar = styled.section`
  width: 300px;
  height: calc(100vh - 6rem);
  background-color: blue;
`;

const Contents = styled.section`
  padding: 1rem;
  flex: 1;
  background-color: yellow;
  overflow-y: scroll;
`;

function HomePage() {
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

export default HomePage;
