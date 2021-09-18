import React from 'react';
import { Link } from 'react-router-dom'
import { Container, RightOptions, LeftOptions } from './styles';


interface HeaderInfo {
  link: string;
  name: string;
}

interface HeaderProps {
  headerInfos: HeaderInfo[];
}

const Header: React.FC<HeaderProps> = ({ headerInfos })  => {
  console.log(headerInfos)

  return(
    <Container>
      <Link to="/"> <LeftOptions> Fider Community </LeftOptions> </Link>

      {headerInfos.map(headerInfo => {
        return <Link to={headerInfo.link}> <RightOptions> {headerInfo.name} </RightOptions> </Link>
      })}
    </Container>
  )
}


export default Header;