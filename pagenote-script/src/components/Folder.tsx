import React from "react";
import { css } from "@emotion/react";

// const TitleClass = css`
//     font-size: 2rem;
//     font-weight: 800;
// `
function Folder() {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen",
        },
      }}
    >
      This has a hotpink background.
    </div>
  );
}

export default Folder;
