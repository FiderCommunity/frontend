import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Card, Image, Name } from './styles';
import api from '../../services/api';


import defaultImage from '../../assets/default.jpg';


interface Post {
    id: string,
    name: string,
    url: string
}

export const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  
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

  useEffect(()=> {
      const response = api.get("projects")
        .then(res => setPosts(res.data));
  }, []);
  
  return (
    <>
      <Header headerInfos={headerInfos} ></Header>

      <Container>
        <ul>
          {posts.map(post => {
            return  <Card id={post.id}>
                      <a href={post.url}>
                        <Image src={defaultImage} alt="Community Image" ></Image>
                        <Name>{post.name}</Name>
                      </a>
                    </Card>
          })}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
