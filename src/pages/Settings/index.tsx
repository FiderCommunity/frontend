import React from 'react';
import { FiMap } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export const Settings: React.FC = () => {
  return (
    <Link to="/">
        <FiMap />
        dashboard
    </Link>
  );
};

export default Settings;
