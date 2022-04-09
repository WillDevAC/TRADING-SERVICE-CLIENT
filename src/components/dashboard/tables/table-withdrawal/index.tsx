import React from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons
} from "../../../../template/admin/tables/styles";

const table_withdrawal: React.FC = () => {
  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais recentes</option>
            <option value="">Mais antigos</option>
          </select>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome do solicitante</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Valor de saque</th>
              <th>Método de saque</th>
              <th>Chave/Carteira</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>JOSE EVERALDO DA SILVA</td>
                <td>joseveraldo@gmail.com</td>
                <td>061.306.42-45</td>
                <td>R$ 100.00</td>
                <td>PIX</td>
                <td>203914921942020jdsakdajkjdsadj193912032910</td>
                <td>
                  <ContainerTableActions>
                    <button>Aceitar saque</button>
                    <button>Recusar saque</button>
                  </ContainerTableActions>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContainerTable>

      <ContainerPagination>
        <p>Paginação aqui</p>
      </ContainerPagination>
    </>
  );
};

export default table_withdrawal;
