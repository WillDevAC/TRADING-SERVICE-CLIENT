import styled from 'styled-components';

export const TitleUtilities = styled.span`
  padding-top: 3%;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const UtilitiesActions = styled.div`
  display: flex;
  min-height: 100px;
  align-items: center;
  gap: 10px;

  button {
    display: flex;
    padding: 1rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: #0b3b69;
    color: white;
    border: none;
    border-radius: 10px;

    gap: 10px;

    font-size: 18px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      background-color: white;
      border-radius: 30px;
    }

    &:hover {
      background-color: #0e1924;
    }
  }
`;