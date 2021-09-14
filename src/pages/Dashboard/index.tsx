import React from 'react';
import { FiLogIn, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export const SignIn: React.FC = () => {
  return (
    <>
        <Link to="/settings">
            <FiSettings />
            settings
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/login">
            <FiLogIn />
            Login
        </Link>
    </>
  );
};

export default SignIn;
