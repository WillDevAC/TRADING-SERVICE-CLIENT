import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { Container, ContainerIcons, ChatIcon, ExitIcon } from "./styles";

interface props {
  type?: string;
}

const header = ({ type }) => {
  return (
    <Container>
      <img src="/images/logo-mobile.png" alt="Logo" />

      <ContainerIcons type={type}>
        <ChatIcon />
        <div
          onClick={() => {
            localStorage.clear();
            Router.push("/login");
          }}
        >
          <ExitIcon />
        </div>
      </ContainerIcons>
    </Container>
  );
};

export default header;
