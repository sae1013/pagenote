import React from "react";
import styled from "@emotion/styled";
import NoteList from "../components/NoteList";
import Folder from "../components/Folder";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";

const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  background-color: ${(props) => props.theme.colors.bg.primary};
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
  background-color: ${(props) => props.theme.colors.bg.primary};
  overflow-y: scroll;
`;

function HomePage() {
  const queryClient = useQueryClient();
  const getNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    return res.data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return (
    <HomeContainer>
      <HomeMain>
        <SideBar></SideBar>
        <Contents>
          <Folder></Folder>
          <NoteList data={data} isLoading={isLoading}></NoteList>
        </Contents>
      </HomeMain>
    </HomeContainer>
  );
}

export default HomePage;
