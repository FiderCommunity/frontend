import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { createProjectSchema, ValidationError } from './dataSchema';
import { Container, InputList } from './styles';


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

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user, token } = useAuth();

  
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        await createProjectSchema.validate(data, { abortEarly: false });
        data.user_id = user.id as string;
        
        const headers = {'Authorization':`token ${token}`}
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
    [addToast, token, user],
  );

  return (
    <>
      <Header></Header>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Add Project </h1>
            <br></br><br></br>

            {/* <InputList>
              <Input type="text" placeholder="Project Name"></Input>
              <Input type="text" placeholder="Project URL"></Input>
              <Input type="text" placeholder="Logo URL"></Input>
              <Input type="text" placeholder="Description"></Input>
            </InputList> */}
            <InputList>
              <Input name="name"  placeholder="Project Name" />
              <Input name="url" placeholder="Project URL" />
              <Input name="logo_url" placeholder="Logo URL" />
              <Input name="description" placeholder="Description" />
              {/* <Input type="text" placeholder="Project Name"></Input>
              <Input type="text" placeholder="Project URLProject URL"></Input>
              <Input type="text" placeholder="Logo URL"></Input>
              <Input type="text" placeholder="Description"></Input> */}
            </InputList>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
    </>
  );
};

export default SignUp;
