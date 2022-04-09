import React from "react";

import {
  Container,
  Section,
  Title,
  Form,
  SectionMobile,
} from "../../template/sign/styles";

import { InputDefault, Label } from "../../template/inputs/default";

import { ButtonDefault, ButtonLink } from "../../template/buttons/buttons";

import Router from "next/router";

const register: React.FC = () => {

  const handleEventRedirect = (e) => {
    Router.push("register/step2")
    e.preventDefault();
  }

  return (
    <Container>
      <SectionMobile type="primary" mobile="true">
        <img src="/images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section type="secondary" mobile="false">
        <Form onSubmit={handleEventRedirect}>
          <Title>Registre-se</Title>

          <Label>Nome completo</Label>
          <InputDefault type="text" name="nome" id="nome" required />

          <Label>CPF</Label>
          <InputDefault type="text" name="cpf" id="cpf" required />

          <Label>Data de nascimento</Label>
          <InputDefault
            type="text"
            name="nascimento"
            id="nascimento"
            required
          />

          <ButtonDefault>CONTINUAR</ButtonDefault>

          <ButtonLink onClick={() => Router.push("/")}>VOLTAR</ButtonLink>
        </Form>
      </Section>
    </Container>
  );
};

export default register;
