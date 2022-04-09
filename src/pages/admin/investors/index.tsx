import React from 'react';

import LayoutDashboard from '../../../components/layout/dashboard'
import TableInvestors from '../../../components/dashboard/tables/table-investors'

const investors: React.FC = () => {
  return (
      <LayoutDashboard title="Investidores">
          <TableInvestors/>
      </LayoutDashboard>
  );
}

export default investors;