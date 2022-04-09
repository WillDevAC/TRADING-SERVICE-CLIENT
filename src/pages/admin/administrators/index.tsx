import React from 'react';

import LayoutDashboard from '../../../components/layout/dashboard'

import TableAdministrators from '../../../components/dashboard/tables/table-administrators'

const administrators: React.FC = () => {
  return (
      <LayoutDashboard title="Administradores">
          <TableAdministrators/>
      </LayoutDashboard>
  );
}

export default administrators;