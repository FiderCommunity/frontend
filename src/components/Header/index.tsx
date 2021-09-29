import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { useLocation } from 'react-router-dom'
import { Container, LeftOptions, RightLink } from './styles';



interface HeaderInfo {
  link: string;
  name: string;
}

const Header: React.FC = ()  => {
  const { signOut, user } = useAuth();
  const locationPathName = useLocation().pathname;

  return(
    <Container>
      <Link to="/"> <LeftOptions> Fider Community </LeftOptions> </Link>

      { // Login e Logout
        user ?
        <RightLink href="/" onClick={() => signOut()}>Logout</RightLink> : 
        <RightLink href="/login">Login</RightLink>
      }
      
      
      { // Caso Logado
        user && locationPathName === '/dashboard' ? (<><RightLink href="/settings"> Settings </RightLink> <RightLink href="/features"> Features </RightLink></>) :
        user && locationPathName === '/features' ? (<><RightLink href="/settings"> Settings </RightLink> <RightLink href="/dashboard"> Dashboard </RightLink></>) :
        user && locationPathName === '/settings' ? (<><RightLink href="/features"> Features </RightLink> <RightLink href="/dashboard"> Dashboard </RightLink></>) : null
      }

      { // Features
        !user && locationPathName === '/requests' ?
        <RightLink href="/dashboard"> Dashboard </RightLink> :
        !user ? <RightLink href="/requests"> Features </RightLink> : null
      }

    </Container>
  )
}


export default Header;