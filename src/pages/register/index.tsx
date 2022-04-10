import React, { useState } from "react";

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
import dayjs from "dayjs";

const register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const handleEventRedirect = (e) => {
    e.preventDefault();
    Router.push("register/step2");
  };

  function CPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function parseDate(str) {
    function pad(x){return (((''+x).length==2) ? '' : '0') + x; }
    var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
      , d = (m) ? new Date(m[3], m[2]-1, m[1]) : null
      , matchesPadded = (d&&(str==[pad(d.getDate()),pad(d.getMonth()+1),d.getFullYear()].join('/')))
      , matchesNonPadded = (d&&(str==[d.getDate(),d.getMonth()+1,d.getFullYear()].join('/')));
    return (matchesPadded || matchesNonPadded) ? d : null;
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
          <InputDefault
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="nome"
            id="nome"
            required
          />

          <Label>CPF</Label>
          <InputDefault
            onChange={(e) => {
              if (e.target.value.length <= 14) {
                setCpf(CPF(e.target.value));
              }
            }}
            value={cpf}
            type="text"
            name="cpf"
            id="cpf"
            required
          />

          <Label>Data de nascimento</Label>
          <InputDefault
            type="text"
            valu={birthDate}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                //@ts-ignore
                setBirthDate(dayjs(e.target.value).format('DD/MM/YYYY'));
              }
            }}
            name="nascimento"
            id="nascimento"
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
