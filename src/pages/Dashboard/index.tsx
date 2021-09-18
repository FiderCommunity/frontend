import React from 'react';
import Header from '../../components/Header';


export const Dashboard: React.FC = () => {
  const headerInfos = [
    {
      "link": "/logout",
      "name": "Log Out"
    },
    {
      "link": "/settings",
      "name": "Settings"
    }
  ]
  
  return (
    <>
      <Header headerInfos={headerInfos} ></Header>
    </>
  );
};

export default Dashboard;
