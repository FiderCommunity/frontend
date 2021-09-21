import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Card, Image, Name } from './styles';
import api from '../../services/api';

interface Post {
    id: string,
    name: string,
    logo_url: string,
    url: string,
}

export const Features: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  
  const headerInfos = [
    {
      "link": "/settings",
      "name": "Settings"
    }
  ]

  useEffect(()=> {
      api.get("projects")
        .then(res => setPosts(res.data));
  }, []);
  
  return (
    <>
      <Header headerInfos={headerInfos} ></Header>

      <Container>
       <h1>Features</h1>
      </Container>
    </>
  );
};

export default Features;
