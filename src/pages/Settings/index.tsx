import React from 'react';
// import { FiMap } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import Header from '../../components/Header';


export const Settings: React.FC = () => {
  const headerInfos = [
    {
      "link": "/logout",
      "name": "Log Out"
    },
    {
      "link": "/dasboard",
      "name": "Dashboard"
    }
  ]

  return (
    <>
      <Header headerInfos={headerInfos} ></Header>
    </>
  );
};

export default Settings;
