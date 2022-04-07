import React, { useEffect, useState } from "react";

import { Menu } from "./styles";

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
    </>
  );
};

export default aside;
