import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { IconButton } from "../components/Button";
import { Button } from "../components/Button";
import LogoImage from "../assets/logo.png";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #fff5e1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Contents = styled.div`
  width: 35rem;
  height: auto;
  /* height: 100px; */
  /* background-color: #fff5e1; */
`;

const ContentsTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const Form = styled.div``;

const Divider = styled.hr`
  margin: 30px 0;
  height: 1.2px;
  padding: 0;
  overflow: visible;
  border: none;
  color: #6e6d7a;
  background-color: #6e6d7a;
  text-align: center;
  ::after {
    display: inline-block;
    position: relative;
    top: -0.7rem;
    font-size: 1.2rem;
    background-color: #fff5e1;
    padding: 0 1rem;
    content: "or";
  }
`;

const ImageWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
`;
function LoginPage() {
  return (
    <Container>
      <Contents>
        <ImageWrapper>
          <Image src={LogoImage}></Image>
        </ImageWrapper>
        <ContentsTitle>Sign in to Page Note</ContentsTitle>
        <Form>
          <IconButton
            Icon={FcGoogle}
            onClick={() => {}}
            styleProps={{
              button: {
                backgroundColor: "#1a1a1a",
                width: "100%",
                height: "4rem",
              },
              text: {
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.3rem",
              },
            }}
          >
            Signup with Google
          </IconButton>
          <Divider />
          <IconButton
            Icon={RiKakaoTalkFill}
            onClick={() => {}}
            styleProps={{
              button: {
                backgroundColor: "#fee500",
                width: "100%",
                height: "4rem",
              },
              text: {
                color: "#1a1a1a",
                fontWeight: 800,
                fontSize: "1.3rem",
              },
            }}
          >
            Signup with Kakao
          </IconButton>
        </Form>
        {/* <ImageWrapper></ImageWrapper> */}
      </Contents>
    </Container>
  );
}

export default LoginPage;
