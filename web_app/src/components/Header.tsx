import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  background-color: red;
  height: 6rem;
  display: flex;
  align-items: center;
`;
function Header() {
  const handleLogin = () => {};
  return (
    <Container>
      <Button
        styleProps={{
          marginLeft: "auto",
          marginRight: "1rem",
          fontSize: "1.2rem",
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  );
}

export default Header;
