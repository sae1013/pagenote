import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { IconButton } from "../components/Button";
import { Button } from "../components/Button";
import LogoImage from "../assets/logo.png";
import { openCenteredPopup } from "../utils/utils";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Contents = styled.div`
  width: 35rem;
  height: auto;
  /* height: 100px; */
  /* background-color: ${(props) => props.theme.colors.bg.primary}; */
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
    background-color: ${(props) => props.theme.colors.bg.primary};
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
  
  const handleGoogleLogin = () => {
    const googleOauthParams = new URLSearchParams({
      access_type: 'offline',
      prompt: 'consent',
      response_type: 'code',
      redirect_uri: 'http://localhost:8000/auth/google/callback',
      scope: 'email profile',
      client_id: process.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string,
      service: 'lso',
      o2v: '2',
      theme: 'glif',
      flowName: 'GeneralOAuthFlow'
    });
    
    const googleOauthUrl = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?${googleOauthParams.toString()}`;
    
    openCenteredPopup(googleOauthUrl as string,"GOOGLE LOGIN",600,400)
  }
  const handleReceiveMessage = (event: MessageEvent) => {
    if (event.origin === "http://localhost:3000") return;
    const res = JSON.parse(event.data);
    console.log('결과',res)
    
    // if (parseInt(status) != 200) {
    //   // TODO!: Error Popup 띄워주세요.
    //   return;
    // }
    // console.log(user)
    // // TODO!: Greeting Toast message 띄워주세요.
    // // setUser(user);
    // // router.push("/");
  };
  useEffect(() => {
    window.addEventListener("message", handleReceiveMessage);
    return () => {
      window.removeEventListener("message", handleReceiveMessage);
    };
  }, []);

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
            onClick={handleGoogleLogin}
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
