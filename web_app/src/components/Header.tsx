import React from "react";
import styled from "@emotion/styled";
import { Button } from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 6rem;
  display: flex;
  align-items: center;
`;

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleLoginBtnClick = () => {
    navigate("/login");
  };
  return (
    <>
      {pathname !== "/login" && (
        <Container>
          <Button
            variant="dark"
            styleProps={{
              button: {
                width: "6rem",
                height: "40px",
                borderRadius: "35px",
                marginLeft: "auto",
                marginRight: "1rem",
              },
              text: {
                fontSize: "1rem",
              },
            }}
            onClick={handleLoginBtnClick}
          >
            Login
          </Button>
        </Container>
      )}
    </>
  );
}

export default Header;
