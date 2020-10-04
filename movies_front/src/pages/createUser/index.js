import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../Api';

import { Title, Inputs, Box, Container, Button } from './styles';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  async function handleCreateUser() {
    try {
      await api.post('/users', {
        name,
        email,
        age,
        password,
      });
      alert('Usuário cadastrado com sucesso');
    } catch (error) {
      alert('Algo deu errado. Tente novamente mais tarde.');
    }
    setName('');
    setEmail('');
    setAge('');
    setPassword('');
  }

  return (
    <Container>
      <Box>
        <Title>Insira seus dados</Title>
        <Inputs>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Idade"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </Inputs>

        <Button type="button" onClick={() => handleCreateUser()}>
          Cadastrar
        </Button>
        <Link to="/login">Fazer login</Link>
      </Box>
    </Container>
  );
};
