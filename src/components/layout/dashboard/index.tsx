import React from "react";

import { 
  SectionAside,
  ContainerLayout
} from "./styles";

import HeaderDashboard from '../../dashboard/header';
import Aside from '../../dashboard/aside';

const dashboard: React.FC = ( { children } ) => {
  return (
  <>
    <HeaderDashboard/>
    <Aside/>
  </>
  )
}
export default dashboard;
