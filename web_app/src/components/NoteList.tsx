/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";

const ListTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
`;

const ListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
  grid-gap: 2rem;
  padding: 0 1rem;
`;

const ItemContainer = styled.li<{ backgroundImageUrl: string }>`
  border-radius: 1rem;
  overflow: hidden;
  padding-bottom: 56.25%;
  background-color: #fff;
  background: url(${(props) => props.backgroundImageUrl}) center/cover no-repeat;
  cursor: pointer;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

interface NoteListProps {
  data: any[];
  isLoading: boolean;
}

const ItemTitle = styled.h1`
  padding-top: 0.5rem;
  font-size: 1.4rem;
  text-align: center;
  color: #fff;
`;
const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  padding-bottom: 56.25%;
`;
const Image = styled.img`
  width: 100%;
`;
function NoteList({ data }: NoteListProps) {
  return (
    <>
      <ListTitle>My Notes</ListTitle>
      <ListContainer>
        {data?.map((item) => {
          console.log(item);
          return (
            <ItemContainer backgroundImageUrl={item.imageUrl}>
              <Overlay>
                <ItemTitle>{item.title}</ItemTitle>
              </Overlay>
            </ItemContainer>
          );
        })}
      </ListContainer>
    </>
  );
}

export default NoteList;
