import React from "react";

import Layout from "../../components/layout/home";

import Panel from "../../components/home/panel";

import { ContainerProfile } from "../../template/profile/styles";

import { InputDefault, Label } from "../../template/inputs/default";
import { ButtonDefault } from "../../template/buttons/buttons";

const profile: React.FC = () => {
  return (
    <Layout type="default">
      <Panel titleHeader="Meu perfil" urlBackButton="/home">
        <Label>Nome completo</Label>
        <InputDefault type="text" disabled />

        <Label>CPF</Label>
        <InputDefault type="text" disabled />

        <Label>Data de nascimento</Label>
        <InputDefault type="text" disabled />

        <Label>RG</Label>
        <InputDefault type="text" disabled />

        <Label>Status da conta</Label>
        <InputDefault type="text" value="EM APROVAÇÃO" disabled />

        <ButtonDefault>ATUALIZAR</ButtonDefault>
      </Panel>
    </Layout>
  );
};

export default profile;
