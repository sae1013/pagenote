/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const ListTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
`;

const Item = styled.li`
  width: 100px;
  height: 100px;
  background-color: #f9f9f9;
`;

function Folder() {
  return (
    <div>
      <ListTitle>Folder</ListTitle>
      <ul
        css={{
          listStyle: "none",
          padding: "0 1rem",
        }}
      >
        <Item></Item>
      </ul>
    </div>
  );
}

export default Folder;
