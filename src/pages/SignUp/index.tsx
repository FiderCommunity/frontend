import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';
import { signUpSchema, ValidationError } from './dataSchema';
import { Container, Content, Background, AnimationContainer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        await signUpSchema.validate(data, { abortEarly: false });

        await api.post('/users', data);
        history.push('/login');

        addToast({
          type: 'success',
          title: 'Registrated with success!',
          description: 'You can login on FiderCommunity',
        });
      } catch (err) {
        
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        
        addToast({
          type: 'error',
          title: 'Error on registration',
          description: (err as any).response.data.error,
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logo} alt="Logo FiderCommunity" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Sign up </h1>

            <Input name="name" icon={FiUser} placeholder="Name" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />
            <Button type="submit">Enter</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Back
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
