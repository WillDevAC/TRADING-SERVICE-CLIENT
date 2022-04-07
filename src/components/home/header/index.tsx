import React, { useState } from "react";

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
        <ExitIcon />
      </ContainerIcons>
    </Container>
  );
};

export default header;
