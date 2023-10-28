import React, { useEffect, useState } from 'react';
import { Container, Card, UserPic, Title, TitleSection, Description, TagContainer, Tag, SearchContainer, Input, Select } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';


interface Feature {
  id: number,
  number: number,
  title: string,
  description: string,
  tags: string[],
  createdAt: string,

  votesCount: number,
  commentsCount: number,
  
  user: PostUser,
  projectName: string,

  postURL: string
}

interface PostUser {
  id: number,
  name: string,
  avatarURL: string
}

export const Features: React.FC = () => {
  const [features, setFeatures] = useState<Array<Feature>>([]);
  const [issueTitle, setIssueTitle] = useState<string>('');

  const [projectName, setProjectName] = useState<string>('');
  const [projects, setProjects] = useState<Array<string>>([]);

  const [tagName, setTagName] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>([]);


  useEffect(()=> {
      api.get("posts")
        .then(res => {
          setFeatures(res.data)
          setProjects(Array.from(new Set(res.data.map(({ projectName }) => projectName))))

          // Get Tags
          const set = new Set();
          res.data.map(({ tags }) => tags.map((tag: string) => set.add(tag)) )
          setTags(Array.from(set.values()) as Array<string>)

        })
  }, []);
  
  return (
    <>
      <Header></Header>

      <Container>
        <SearchContainer>
          <Select defaultValue={''} onChange={event => setTagName(event.target.value)}>
              <option value='' key=''>All Tags</option>
              {tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
          </Select>
          <Select defaultValue={''} onChange={event => setProjectName(event.target.value)}>
            <option value='' key=''>All Projects</option>
            {projects.map(project => <option value={project} key={project}>{project}</option>)}
          </Select>
          <Input type="text" placeholder="Issue Title..." onChange={event => setIssueTitle(event.target.value)}></Input>
        </SearchContainer>
        
        <ul>
          {features
            // Filter Issue Title
            .filter((feature) => {
              if(tagName === "") 
                return feature
              else if (feature.tags.includes(tagName))
                return feature
              else return 0
            })
            // Filter Issue Title
            .filter((feature) => {
            if(issueTitle === "") 
              return feature
            else if (feature.title.toLocaleLowerCase().includes(issueTitle.toLocaleLowerCase()))
              return feature
            else return 0
            })
            //Filter Project Name
            .filter((feature) => {
              if(projectName === "") 
                return feature
              else if (feature.projectName.toLocaleLowerCase().includes(projectName.toLocaleLowerCase()))
                return feature
                else return 0
            })
            // Map Features Left
            .map(feature => {
              return <Card key={feature.projectName + feature.id + feature.title}>
                <a href={feature.postURL}>
                  <TitleSection>
                    <UserPic src={feature.user.avatarURL} alt="User Picture" ></UserPic>
                    <Title>
                      <p><b>{feature.projectName}</b></p>
                      {feature.title}
                    </Title>
                  </TitleSection>
                  <Description>
                    {feature.description}
                  </Description>
                  <TagContainer>
                    {feature.tags.map( tag => {
                      return <Tag key={tag}> {tag} </Tag>
                    })}
                  </TagContainer>
                </a>
              </Card>
          })}
        </ul>
      </Container>
    </>
  );
};

export default Features;