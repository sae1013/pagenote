import React from "react";
import styled from "@emotion/styled";
import Folder from "./components/Folder";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { router } from "./routes";
import LoginPage from "./pages/LoginPage";

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

const RootLayout = styled.div``;
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <RootLayout>
        <Routes>
          <Route path="/" Component={App}></Route>
          <Route path="login" Component={LoginPage}></Route>
        </Routes>
      </RootLayout>
    </BrowserRouter>

    // <HomeContainer>
    //   <Header></Header>
    //   <HomeMain>
    //     <SideBar></SideBar>
    //     <Contents>
    //       <Folder></Folder>
    //       <NoteList></NoteList>
    //     </Contents>
    //   </HomeMain>
    // </HomeContainer>
  );
}

export default App;
