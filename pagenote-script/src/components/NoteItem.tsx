import React from "react";
import styled from "@emotion/styled";

const NoteContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  height: 240px;
`;

function NoteItem() {
  return <NoteContainer></NoteContainer>;
}

export default NoteItem;
