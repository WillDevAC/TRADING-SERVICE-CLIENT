import React from "react";

import {
  Container,
  Section,
  DocumentSection,
  DocumentDiv,
  Title,
  Folder,
  SendButtons,
  Form,
  SectionMobile,
} from "../../../template/sign/styles";

import {
  InputDefault,
  Label,
  InputFile,
} from "../../../template/inputs/default";

import { ButtonDefault, ButtonLink } from "../../../template/buttons/buttons";

import Router from "next/router";

const register: React.FC = () => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    event.preventDefault();
    console.log("adasdf");
  };

  return (
    <Container>
      <SectionMobile type="primary" mobile="true">
        <img src="/images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section type="secondary" mobile="false">
        <Form>
          <Title>Registre-se</Title>
          <Label>RG</Label>
          <InputDefault type="text" name="rg" id="rg" required />

          <DocumentSection>
            <DocumentDiv>
              <Folder/>
              <h1>Documentação</h1>
              <p>Clique nos botões abaixo e anexe seu documento de identidade (frente e verso).</p>
            </DocumentDiv>
            <SendButtons>
              <InputFile border="dashed" onClick={handleClick}>Frente</InputFile>
              <input
                id="fileSelect"
                onChange={handleChange}
                ref={hiddenFileInput}
                type="file"
                hidden
              />
              <InputFile border="dashed" onClick={handleClick}>Verso</InputFile>
              <input
                id="fileSelect"
                onChange={handleChange}
                ref={hiddenFileInput}
                type="file"
                hidden
              />
            </SendButtons>
          </DocumentSection>
          
          <ButtonDefault onClick={() => Router.push("../index.tsx")}>
            FINALIZAR
          </ButtonDefault>

          <ButtonLink onClick={() => Router.push("/")}>VOLTAR</ButtonLink>
        </Form>
      </Section>
    </Container>
  );
};

export default register;
