import React from "react";

import { Menu, Conteudo } from "./styles";

const aside: React.FC = () => {
  return (
    <>
      <Menu>
        <p>Aside</p>
      </Menu>
      <Conteudo>
        <p>Conteudo</p>
      </Conteudo>
    </>
  );
};

export default aside;
