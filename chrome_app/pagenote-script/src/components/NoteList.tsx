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

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  grid-gap: 2rem;
  padding: 0 1rem;
`;

function NoteList() {
  return (
    <div>
      <ListTitle>My Notes</ListTitle>
      <ListContainer>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
      </ListContainer>
    </div>
  );
}

export default NoteList;
