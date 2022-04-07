import React from "react";

import {
  Container,
  NotifTitle,
  NotifValue,
  NotifContainer,
  NotifColumn,
  NotifRow,
  NotifValueDiv,
} from "./styles";

interface Props {
  Image: string;
  Title: string;
  Date: string;
  Time: string;
  Value: string;
}

const notification: React.FC<Props> = ({ Image, Title, Date, Time, Value }) => {
  return (
    <Container>
      <NotifContainer>
        <NotifColumn>
          <img src={Image} alt="" />
        </NotifColumn>
        <NotifColumn>
          <NotifTitle>{Title}</NotifTitle>
          <NotifRow>
            <p>{Date}</p>
            <p>{Time}</p>
          </NotifRow>
        </NotifColumn>
      </NotifContainer>
      <NotifValue>
        <NotifValueDiv>
          <h1>R$ {Value}</h1>
        </NotifValueDiv>
      </NotifValue>
    </Container>
  );
};

export default notification;
