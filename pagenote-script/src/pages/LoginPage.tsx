import React from "react";

import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import IconButton from "../components/base/IconButton";
import Divider from "../components/base/Divider";
import Button from "../components/base/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <section className={styles["login--sidebar"]}>
        <video autoPlay muted loop>
          <source src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"></source>
        </video>
      </section>

      <section className={styles["login--content"]}>
        <div className={styles["auth--content"]}>
          <h2 className={styles["auth--title"]}>Sign up to EveryNote</h2>
          <IconButton
            icon={FcGoogle}
            iconPosition="left"
            buttonSx={{
              width: "100%",
              height: "5.6rem",
            }}
          >
            Sign up with Google
          </IconButton>

          <Divider content="or"></Divider>

          <IconButton
            icon={RiKakaoTalkFill}
            iconPosition="left"
            shape="round"
            buttonSx={{
              width: "100%",
              height: "5.6rem",
              backgroundColor: "#fee500",
            }}
            textSx={{ color: "#000" }}
          >
            Sign up with Kakao
          </IconButton>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/");
            }}
            buttonSx={{
              marginTop: "2rem",
              backgroundColor: "white",
            }}
            textSx={{
              color: "#000",
            }}
          >
            Go Home{" "}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
