import React from "react";

import {
  ContainerActionsTable,
  ContainerTable,
  ContainerPagination,
  ContainerTableActions,
  ContainerTableActionsButtons
} from "../../../../template/admin/tables/styles";

import Router from "next/router";

const table_consultants: React.FC = () => {
  return (
    <>
      <ContainerActionsTable>
        <ContainerTableActionsButtons>
          <select>
            <option value="">Filtrar na tabela</option>
            <option value="">Mais convites aceitos</option>
            <option value="">Mais convites gerados</option>
          </select>
          <button>Novo consultor</button>
        </ContainerTableActionsButtons>

        <input type="search" placeholder="🔎 Pesquisar" />
      </ContainerActionsTable>

      <ContainerTable>
        <div>
          <table>
            <thead>
              <th>Nome</th>
              <th>Email</th>
              <th>Convites aceitos</th>
              <th>Convites pendentes</th>
              <th>Cidade</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <tr>
                <td>JOSE EVERALDO DA SILVA</td>
                <td>joseveraldo@gmail.com</td>
                <td>0</td>
                <td>0</td>
                <td>SÃO JOSE / RS</td>
                <td>
                  <ContainerTableActions>
                    <button onClick={() => Router.push("consultants/edit/1")}>
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

export default table_consultants;
