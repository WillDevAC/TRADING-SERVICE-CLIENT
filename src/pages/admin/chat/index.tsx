import React from 'react';

import LayoutDashboard from '../../../components/layout/dashboard'

const chat: React.FC = () => {
  return (
      <LayoutDashboard title="Chats" urlBackButton='/admin' isBackButton={true}>
          Chat
      </LayoutDashboard>
  );
}

export default chat;