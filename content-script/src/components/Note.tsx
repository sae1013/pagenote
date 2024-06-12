import React, { SetStateAction, useRef, useState } from "react";
import styled from "@emotion/styled";
import QuillEditor from "../editor/QuillEditor";

const NoteFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: block;
  }
  height: 1.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: rgb(255, 222, 89);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const Note = () => {
  return (
    <div>
      <QuillEditor></QuillEditor>
      <NoteFooter>
        <a>asdf</a>
        <p>Auto saved</p>
      </NoteFooter>
    </div>
  );
};

export default Note;
