import React from "react";

import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
// import IconButton from "../components/base/IconButton";
// import Divider from "../components/base/Divider";
// import Button from "../components/base/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { IconButton } from "../components/Button";

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const SideBar = styled.section`
  display: none;
  align-items: stretch;

  @media (min-width: "960px") {
    display: block;
    width: 40rem;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.section`
  padding: 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) and (max-width: 1199px) {
    padding-left: 15%;
  }
  @media (min-width: 1200px) {
    padding-left: 180px;
  }
`;

const AuthContent = styled.div`
  max-width: 416px;
  @media (min-width: 1200px) {
    margin: 0 0 0;
  }
`;

const AuthContentTitle = styled.h2`
  font-size: 29px;
  font-weight: 800;
  margin-bottom: 40px;
`;
function LoginPage() {
  return (
    <Container>
      <IconButton
        Icon={FcGoogle}
        iconPosition="left"
        onClick={() => {}}
        styleProps={{
          icon: {},
        }}
      >
        Google Login
      </IconButton>
      {/* <SideBar>
        <Video></Video>
      </SideBar>
      <Content>
        <AuthContent>
          <AuthContentTitle />
          <button></button>
          <hr></hr>
          <button></button>
        </AuthContent>
        <div>
          <button></button>
        </div>
      </Content> */}
    </Container>
    // <div className={styles.login}>
    //   <section className={styles["login--sidebar"]}>
    //     <video autoPlay muted loop>
    //       <source src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"></source>
    //     </video>
    //   </section>

    //   <section className={styles["login--content"]}>
    //     <div className={styles["auth--content"]}>
    //       <h2 className={styles["auth--title"]}>Sign up to EveryNote</h2>
    //       <IconButton
    //         icon={FcGoogle}
    //         iconPosition="left"
    //         buttonSx={{
    //           width: "100%",
    //           height: "5.6rem",
    //         }}
    //       >
    //         Sign up with Google
    //       </IconButton>

    //       <Divider content="or"></Divider>

    //       <IconButton
    //         icon={RiKakaoTalkFill}
    //         iconPosition="left"
    //         shape="round"
    //         buttonSx={{
    //           width: "100%",
    //           height: "5.6rem",
    //           backgroundColor: "#fee500",
    //         }}
    //         textSx={{ color: "#000" }}
    //       >
    //         Sign up with Kakao
    //       </IconButton>
    //     </div>
    //     <div>
    //       <Button
    //         onClick={() => {
    //           navigate("/");
    //         }}
    //         buttonSx={{
    //           marginTop: "2rem",
    //           backgroundColor: "white",
    //         }}
    //         textSx={{
    //           color: "#000",
    //         }}
    //       >
    //         Go Home{" "}
    //       </Button>
    //     </div>
    //   </section>
    // </div>
  );
}

export default LoginPage;
