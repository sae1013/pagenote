/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import NoteItem from "./NoteItem";

const ListTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
`;

const ListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  grid-gap: 2rem;
  padding: 0 1rem;
`;

const ItemContainer = styled.li`
  border-radius: 1rem;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  height: 240px;
`;
interface NoteListProps {
  data: any[];
  isLoading: boolean;
}

const ItemTitle = styled.h1``;
const ImageWrapper = styled.div``;
const Image = styled.img``;
function NoteList({ data }: NoteListProps) {
  return (
    <>
      <ListTitle>My Notes</ListTitle>
      <ListContainer>
        {data?.map((item) => {
          return (
            <ItemContainer>
              <ImageWrapper>
                <Image src=""></Image>
              </ImageWrapper>
              <ItemTitle>{item.titme}</ItemTitle>
            </ItemContainer>
          );
        })}
      </ListContainer>
    </>
  );
  // <div>
  //   <ListTitle>My Notes</ListTitle>
  //   <ListContainer>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //     <NoteItem></NoteItem>
  //   </ListContainer>
  // </div>
}

export default NoteList;
