import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../Api';
import { login } from '../../store/user/actions';

import { Container, Title, Row, Box, Button, Table } from './styles';

export default () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [watched, setWatched] = useState(false);
  const [movies, setMovies] = useState([]);
  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();

  async function getMovies() {
    try {
      const response = await api.get(`/movies/user/${userData.user.uid}`, {
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      setMovies(response.data.movies);
    } catch (error) {
      console.log(error);
      alert('Algo deu errado. Tente novamente mais tarde.');
    }
    setName('');
    setType('');
    setDuration('');
    setWatched(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  async function handleCreateMovie() {
    try {
      await api.post(
        '/movies',
        {
          name,
          type,
          duration,
          watched,
          user_uid: userData?.user?.uid,
        },
        {
          headers: { Authorization: `Bearer ${userData.token}` },
        }
      );
      alert('Filme cadastrado com sucesso');
      getMovies();
    } catch (error) {
      console.log(error);
      alert('Algo deu errado. Tente novamente mais tarde.');
    }
    setName('');
    setType('');
    setDuration('');
    setWatched(false);
  }

  function handleLogout() {
    dispatch(login(''));
  }

  return (
    <Container>
      <h1>Catálogo de Filmes</h1>
      <Box>
        <form>
          <Row>
            <Title>Cadastrar Filme</Title>
          </Row>
          <Row style={{ width: '80%' }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Tipo"
            />
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Duração"
            />
            <div>
              <input
                type="checkbox"
                onChange={(e) => setWatched(e.target.checked)}
                value={watched}
              />
              <label>Já assistiu?</label>
            </div>
          </Row>
          <Button type="Button" onClick={() => handleCreateMovie()}>
            Cadastrar
          </Button>
        </form>
      </Box>
      <Box>
        <Row>
          <Title>Filmes cadastrados:</Title>
        </Row>

        <Table>
          <thead>
            <tr style={{ fontWeight: 'bold' }}>
              <td>Nome</td>
              <td>Tipo</td>
              <td>Duração</td>
              <td>Assistido</td>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.uid}>
                <td>{movie.name}</td>
                <td>{movie.type}</td>
                <td>{movie.duration}</td>
                <td>{movie.watched ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
      <Row style={{ justifyContent: 'center' }}>
        <Link to="/user-update">
          <Button type="Button">Atualizar Senha</Button>
        </Link>
        <Button type="Button" onClick={() => handleLogout()}>
          Deslogar
        </Button>
      </Row>

      <br />
    </Container>
  );
};
