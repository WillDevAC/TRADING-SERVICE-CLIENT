import styled from 'styled-components';

export const ContainerActionsTable = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;

  select {
      padding: 10px;
      color: black;
      font-size: 15px;
      border-radius: 5px;
      outline: none;
  }

  input {
      padding: 10px;
      font-size: 15px;
      border-radius: 5px;
  }

`;

export const ContainerTable = styled.div `
  div {
    overflow-x:auto;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;

    thead {
        background-color: #0B3B69;
    }
  }

  td {
    text-align: center;
    padding: 8px;
  }

  tr {
    text-align: center;
    padding: 8px;
    color: black;
    font-size: 13.5px;
  }

  th {
    text-align: center;
    padding: 8px;
  }
`

export const ContainerPagination = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.5%;
  display: flex;
  width: 100%;
  min-height: 50px;
  color: black;
`

export const ContainerTableActions = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    padding: 10px;
    background-color: #DDDDDD;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
      background-color: #8c8c8c;
    }
  }
`

export const ContainerTableActionsButtons = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  button {
    padding: 10px;
    background-color: #DDDDDD;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 15px;
    &:hover{
      background-color: #8c8c8c;
      cursor: pointer;
    }
  }
`