import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.style.css";

interface QuillEditorProps {
  readOnly?: boolean;
  children?: React.ReactNode;
  onChange?: (...args: any) => any;
}
function QuillEditor({
  readOnly = false,
  children,
  onChange,
  ...props
}: QuillEditorProps) {
  const [value, setValue] = useState("");

  const handleImageUpload = (e: React.MouseEvent) => {
    console.log(e);
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
    }),
    []
  );

  return (
    <>
      <ReactQuill
        id="note-ql-root"
        readOnly={false}
        theme="snow"
        // value={}
        onChange={onChange}
        modules={modules}
      />
      {children}
    </>
  );
}

export default QuillEditor;
