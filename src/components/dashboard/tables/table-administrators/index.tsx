import React from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons
} from "../../../../template/admin/tables/styles";

import Router from "next/router";

const table_administrators: React.FC = () => {
  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais recente</option>
            <option value="">Mais antigo</option>
          </select>
          <button>Novo administrador</button>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Data de nascimento</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>WILL SILVA DA ROCHA</td>
                <td>wydemairomsilva@gmail.com</td>
                <td>061.306.422-45</td>
                <td>20/04/1966</td>
                <td>
                  <ContainerTableActions>
                    <button onClick={() => Router.push("administrators/edit/1")}>
                      Editar
                    </button>
                    <button>Excluir</button>
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

export default table_administrators;
