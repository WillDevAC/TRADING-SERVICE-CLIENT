import React from "react";

import { 
  Main
} from "./styles";

import HeaderDashboard from '../../dashboard/header';
import Aside from '../../dashboard/aside';

const dashboard: React.FC = ( { children } ) => {
  return (
  <>
    <HeaderDashboard/>
    <Aside/>
    <Main>
        { children }
    </Main>
  </>
  )
}
export default dashboard;
