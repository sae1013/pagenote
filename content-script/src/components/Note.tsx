import React, { SetStateAction, useRef, useState } from "react";
import styled from "@emotion/styled";
import QuillEditor from "../editor/QuillEditor";
import Button from "../../../src/components/Button";
import axios from "axios";

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
  const [contents, setContents] = useState("");
  const [noteId, setNoteId] = useState(null);

  const handleSaveNotes = async () => {
    if (!noteId) {
      const result = await axios.post("http://localhost:3000/notes", {
        writer: "sae1013",
        contents,
      });
      setNoteId(result.data._id);
    } else {
      const result = await axios.patch("http://localhost:3000/notes", {
        _id: noteId,
        contents,
        writer: "sae1013",
      });
    }
  };
  return (
    <div>
      <QuillEditor onChange={setContents}></QuillEditor>
      <Button
        onClick={handleSaveNotes}
        variant="primary"
        styleProps={{
          position: "absolute",
          bottom: "2rem",
          right: "1rem",
        }}
      >
        Save
      </Button>
      <NoteFooter>
        <a>asdf</a>
        <p>Auto saved</p>
      </NoteFooter>
    </div>
  );
};

export default Note;
