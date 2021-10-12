import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import api from '../../services/api';
import { FiTrash2 } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErrors';


import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { createProjectSchema, ValidationError } from './dataSchema';
import { Container, InputList, ProjectsList, CardContainer, Card, Name } from './styles';


import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

interface SignUpFormData {
  name: string;
  url: string;
  logo_url: string;
  description: string;
  user_id: string;
}

interface Project {
  id: string,
  name: string,
  logo_url: string,
  url: string,
}

const SignUp: React.FC = () => {
  const [projects, setProjects] = useState<Array<Project>>([]);

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const { user, token } = useAuth();
  const headers = {'Authorization':`token ${token}`}

  
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        await createProjectSchema.validate(data, { abortEarly: false });
        data.user_id = user.id as string;
        
        await api.post('/projects', data, {headers});

        addToast({
          type: 'success',
          title: 'Project Registred!',
          description: 'You can check its features now',
        });
      } catch (err) {
        
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        
        addToast({
          type: 'error',
          title: 'Error on project registration',
          description: (err as any).response.data.error,
        });
      }
    },
    [addToast, user, headers],
  );

  const deleteItem = useCallback( 
    async (id: string) => {
      api.delete("projects", { params: { id }, headers })
      .then(() => {
        addToast({
          type: 'success',
          title: 'Project Deleted!'
        });
      })
      .catch(e => {
        addToast({
          type: 'success',
          title: 'Error on deleting project.',
          description: e
        });
      });
    },
    [addToast, headers]
  );

  useEffect(()=> {
    api.get("projects")
      .then(res => setProjects(res.data));
  }, [deleteItem, handleSubmit]);

  return (
    <>
      <Header></Header>
        <Container>
          <ProjectsList>
            <h1> Projects List </h1>
            <br></br><br></br>
            <CardContainer>
              {projects.map(project => {
                return  <Card key={project.id}>
                            <Name>{project.name}</Name>
                            <button name='delete' onClick={() => deleteItem(project.id)}> 
                              <FiTrash2 size={20} color={'red'} />
                            </button>
                        </Card>
              })}
            </CardContainer>

          </ProjectsList>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Add Project </h1>
            <br></br><br></br>

            
            <InputList>
              <Input name="name"  placeholder="Project Name" />
              <Input name="url" placeholder="Project URL" />
              <Input name="logo_url" placeholder="Logo URL" />
              <Input name="description" placeholder="Description" />
              <Button type="submit">Submit</Button>
            </InputList>
          </Form>
        </Container>
    </>
  );
};

export default SignUp;
