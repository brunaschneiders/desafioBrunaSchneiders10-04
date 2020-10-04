import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../Api';
import { login } from '../../store/user/actions';

import { Title, Inputs, Box, Container, Button } from './styles';

export default () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();

  async function handleUpdateUser() {
    try {
      const response = await api.put(
        `/users/${userData?.user?.uid}`,
        {
          email,
          oldPassword,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userData?.token}` },
        }
      );
      console.log(response);
      alert('Senha atualizada com sucesso.');
      dispatch(login(''));
    } catch (error) {
      console.log(error);
      alert('Algo deu errado. Tente novamente mais tarde.');
    }
    setEmail('');
    setOldPassword('');
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
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Senha Antiga"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nova Senha"
          />
        </Inputs>

        <Button type="button" onClick={() => handleUpdateUser()}>
          Atualizar Senha
        </Button>

        <Link to="/">Voltar</Link>
      </Box>
    </Container>
  );
};
