import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../Api';

import { login } from '../../store/user/actions';

import { Title, Inputs, Box, Container, Button } from './styles';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleStoreLogin() {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      dispatch(login(response.data));
    } catch (error) {
      alert('Não foi possível realizar o login. Tente novamente mais tarde.');
    }
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Box>
        <Title>Insira seus dados</Title>
        <Inputs>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </Inputs>

        <Button type="button" onClick={() => handleStoreLogin()}>
          Fazer Login
        </Button>
        <Link to="/create-user">Criar uma conta</Link>
      </Box>
    </Container>
  );
};
