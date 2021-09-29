import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Card, Image, Name } from './styles';
import api from '../../services/api';

interface Project {
    id: string,
    name: string,
    logo_url: string,
    url: string,
}

export const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Array<Project>>([]);
  

  useEffect(()=> {
      api.get("projects")
        .then(res => setProjects(res.data));
  }, []);
  
  return (
    <>
      <Header></Header>

      <Container>
        <ul>
          {projects.map(project => {
            return  <Card key={project.id}>
                      <a href={project.url}>
                        <Image src={project.logo_url} alt="Community Image" ></Image>
                        <Name>{project.name}</Name>
                      </a>
                    </Card>
          })}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
