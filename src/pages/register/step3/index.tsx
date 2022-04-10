import React, { useContext, useState } from "react";

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
import { toast } from "react-nextjs-toast";
import Router from "next/router";
import { api } from "../../../services/api";
import dayjs from "dayjs";

const register: React.FC = () => {
  const hiddenFileInput = React.useRef(null);
const [front, setFront] = useState(null)
const [back, setBack] = useState(null)
  const hiddenFileInput2 = React.useRef(null);
  const [rg, setRg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleClick2 = (event) => {
    hiddenFileInput2.current.click();
  };

  const handleChange = async (event) => {
    event.preventDefault();
    const url = await handleChangeIMG(event.target.files[0]);
    setFront(url);
  };

  const handleChange2 = async (event) => {
    event.preventDefault();
    const url = await handleChangeIMG(event.target.files[0]);
    setBack(url)
    console.log(url);
  };

  const handleChangeIMG = async (files: any): Promise<string> => {
    if (files) {
      let formData = new FormData();
      formData.append("img", files);
      formData.append("folder", "register/docs/");
      const res = await api.post("/upload", formData);
      return String(res.data.url);
    }
    return "";
  };

  function RG(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = localStorage.getItem("register-name");
    const cpf = localStorage.getItem("register-cpf");
    const birthDate = localStorage.getItem("register-birthDate");
    const cep = localStorage.getItem("register-cep");
    const address = localStorage.getItem("register-address");
    const number = localStorage.getItem("register-number");

    if (!name || !cpf || !birthDate || !cep || !address || !number) {
      localStorage.clear();
      toast.notify("Dados inválidos", {
        title: "error",
      });
      return Router.replace("/register");
    }
    console.log(hiddenFileInput2.current.files)
    if (!front ) {
      return toast.notify("Insira a parte frontal do documento", {
        title: "error",
      });
    }
    if (!back) {
      return toast.notify("Insira a parte traseira do documento", {
        title: "error",
      });
    }
    const docFrontUrl = front
    const docBackUrl = back

    const data = {
      email,
      docFrontUrl,
      docBackUrl,
      name,
      cpf,
      rg: rg.replaceAll('.','').replaceAll('-',''),
      birthDate,
      password,
      cep,
      address,
      addressNumber: number,
      consultantId: Router?.query?.ref,
    };
    const response = await api.post("/user/register", data);
    if (!!response?.data?.accessToken) {
      localStorage.clear();
      localStorage.setItem("@token", response?.data?.accessToken);
      localStorage.setItem(
        "@timestampToken",
        dayjs(new Date()).toDate().toString()
      );
      Router.push("/home");
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
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
          <InputDefault
            value={rg}
            onChange={(e) => {
              if (e.target.value.length <= 12) {
                setRg(RG(e.target.value));
              }
            }}
            type="text"
            name="rg"
            id="rg"
            required
          />

          <Label>Email</Label>
          <InputDefault
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            id="email"
            required
          />

          <Label>Senha</Label>
          <InputDefault
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            required
          />

          <DocumentSection>
            <DocumentDiv>
              <Folder />
              <h1>Documentação</h1>
              <p>
                Clique nos botões abaixo e anexe seu documento de identidade
                (frente e verso).
              </p>
            </DocumentDiv>
            <SendButtons>
              <InputFile border="dashed" onClick={handleClick}>
                Frente
              </InputFile>
              <input
                id="fileSelect"
                onChange={handleChange}
                ref={hiddenFileInput}
                type="file"
                hidden
              />
              <InputFile border="dashed" onClick={handleClick2}>
                Verso
              </InputFile>
              <input
                id="fileSelect2"
                onChange={handleChange2}
                ref={hiddenFileInput2}
                type="file"
                hidden
              />
            </SendButtons>
          </DocumentSection>

          <ButtonDefault onClick={(e) => onSubmit(e)}>FINALIZAR</ButtonDefault>

          <ButtonLink onClick={() => Router.back()}>VOLTAR</ButtonLink>
        </Form>
      </Section>
    </Container>
  );
};

export default register;
