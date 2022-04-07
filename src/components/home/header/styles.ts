import styled from "styled-components";

import { IoMdChatboxes } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

interface Props {
  type: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  padding-right: 2.5rem;
  padding-left: 1.5rem;
  z-index: 99999;

  position: ${(props) => (props.type == "fixed" ? "relative" : "sticky")};
  top: 0;

  img {
    height: 100%;
    padding-right: 2rem;
  }
`;

export const ContainerIcons = styled.div<Props>`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 800px) {
    width: 25%;
    justify-content: flex-end;
    gap: 1.5rem;
  }
`;

export const ChatIcon = styled(IoMdChatboxes)`
  font-size: 1.7rem;

  &:hover {
    background-color: #0a2d4f;
    border-radius: 30px;
    cursor: pointer;
  }
`;

export const ExitIcon = styled(FiLogOut)`
  font-size: 1.7rem;

  &:hover {
    cursor: pointer;
  }
`;
