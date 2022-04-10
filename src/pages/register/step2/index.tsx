import React, { useState } from "react";

import {
  Container,
  Section,
  Title,
  Form,
  SectionMobile,
} from "../../../template/sign/styles";

import { InputDefault, Label } from "../../../template/inputs/default";

import { ButtonDefault, ButtonLink } from "../../../template/buttons/buttons";

import Router from "next/router";

const register: React.FC = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const handleEventRedirect = (e) => {
    e.preventDefault();

    localStorage.setItem("register-cep", cep.replaceAll("-", ""));
    localStorage.setItem("register-address", address);
    localStorage.setItem("register-number", number);

    Router.push(`/register/step3?ref=${Router.query?.ref}`);
  };

  function CEP(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/^([\d]{5})\-*([\d]{3})/, "$1-$2");
  }

  return (
    <Container>
      <SectionMobile type="primary" mobile="true">
        <img src="/images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section type="secondary" mobile="false">
        <Form onSubmit={handleEventRedirect}>
          <Title>Registre-se</Title>

          <Label>CEP</Label>
          <InputDefault
            value={cep}
            onChange={(e) => {
              if (e.target.value.length <= 9) {
                setCep(CEP(e.target.value));
              }
            }}
            type="text"
            name="nome"
            id="nome"
            required
          />

          <Label>Endereço</Label>
          <InputDefault
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            id="address"
            required
          />

          <Label>Nº da casa</Label>
          <InputDefault
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            name="ncasa"
            id="ncasa"
            required
          />

          <ButtonDefault>CONTINUAR</ButtonDefault>

          <ButtonLink onClick={() => Router.back()}>VOLTAR</ButtonLink>
        </Form>
      </Section>
    </Container>
  );
};

export default register;
