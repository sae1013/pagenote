import React, {
  SetStateAction,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import styled from "@emotion/styled";
import QuillEditor from "../editor/QuillEditor";
import Button from "../../../src/components/Button";
import axios from "axios";
import { debounce } from "../utils/debounce";

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
  const [noteId, setNoteId] = useState<string | null>(null);

  const handleClickSave = () => {
    handleSaveNotes("contents");
  };

  const handleSaveNotes = useCallback(
    async (contents: string) => {
      if (!noteId) {
        const result = await axios.post("http://localhost:3000/notes", {
          writer: "sae1013",
          contents,
        });
        setNoteId(result.data._id);
      } else {
        await axios.patch("http://localhost:3000/notes", {
          _id: noteId,
          contents,
          writer: "sae1013",
        });
        console.log("UPDATE!");
      }
    },
    [noteId]
  );
  const debouncedSaveNotes = useCallback(debounce(handleSaveNotes, 1000 * 3), [
    noteId,
  ]);

  return (
    <div>
      <QuillEditor onChange={debouncedSaveNotes}></QuillEditor>
      <Button
        onClick={() => handleClickSave}
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
