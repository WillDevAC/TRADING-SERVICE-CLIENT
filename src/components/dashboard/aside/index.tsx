import React, { useEffect, useState } from "react";

import { Menu, Conteudo } from "./styles";

const aside: React.FC = () => {

  const [ GetScreenSize, SetScreenSize ] = useState(0);

  useEffect(() => {
    SetScreenSize(window.innerHeight);
  }, [])

  return (
    <>
      <Menu screensize={GetScreenSize}>
        <p>Menu</p>
      </Menu>
      <Conteudo>
        <p>Conteudo</p>
      </Conteudo>
    </>
  );
};

export default aside;
