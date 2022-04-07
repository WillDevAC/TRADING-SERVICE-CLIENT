import React from "react";

import Layout from "../../components/layout/home";
import Panel from "../../components/home/panel";
import Notification from "../../components/home/Notification";

import {
  GraySelect,
  BtnContainer,
  Option,
} from "../../template/buttons/secondary";

import { InputDate } from "../../template/inputs/default";

import {
  ExtractPagination,
  ExtractPaginationButtonPrev,
  PrevIcon,
  ExtractPaginationNumber,
  NextIcon,
} from "../../template/extract/styles";

import data from "../../json/extract.json";

const extract: React.FC = () => {
  return (
    <Layout type="default">
      <Panel titleHeader="Extrato" urlBackButton="/home">
        <BtnContainer>
          <GraySelect>
            <Option disabled>Filtrar</Option>
            <Option value="all">Todos</Option>
            <Option value="entrance">Entradas</Option>
            <Option value="exit">Saídas</Option>
          </GraySelect>

          <InputDate type="date"></InputDate>
        </BtnContainer>

        {data.map((item) => (
          <Notification
            Title={item.title}
            Image={item.image}
            Date={item.date}
            Time={item.time}
            Value={item.value}
          />
        ))}

        <ExtractPagination>
          <ExtractPaginationButtonPrev>
            <PrevIcon />
          </ExtractPaginationButtonPrev>

          <ExtractPaginationNumber>1</ExtractPaginationNumber>

          <ExtractPaginationButtonPrev>
            <NextIcon />
          </ExtractPaginationButtonPrev>
        </ExtractPagination>
      </Panel>
    </Layout>
  );
};

export default extract;
