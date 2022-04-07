import React from "react";

import Router from "next/router";

import {
  Container,
  Section,
  Title,
  Form,
  SectionMobile,
} from "../../template/sign/styles";

import { InputDefault, Label } from "../../template/inputs/default";
import { ButtonDefault, ButtonLink } from "../../template/buttons/buttons";

const sign: React.FC = () => {
  //@temporary.
  const HandleFormSubmitRedirect = (event) => {
    Router.push("/home");

    event.preventDefault();
  };

  return (
    <Container>
      <SectionMobile>
        <img src="images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section>
        <Form onSubmit={HandleFormSubmitRedirect}>
          <Title>Portal de investimentos</Title>

          <Label>CPF</Label>
          <InputDefault type="text" name="cpf" id="cpf" required />

          <Label>Senha</Label>
          <InputDefault type="password" name="email" id="password" required />

          <ButtonDefault>Acessar</ButtonDefault>
          <ButtonLink onClick={() => Router.push("/register")}>
            CADASTRA-SE
          </ButtonLink>
        </Form>
      </Section>
    </Container>
  );
};

export default sign;
