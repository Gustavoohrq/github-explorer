import React, { useState, FormEvent } from 'react'

import api from '../../services/api'

import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories, Error } from './styles'
import logoImg from '../../assets/logo.svg'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [respositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório.')
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)
      const respository = response.data;
      setRepositories([...respositories, respository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório.');
    }

  }
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>

      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories >
        {respositories.map(respository => (
          <a key={respository.full_name} href="teste">
            <img src={respository.owner.avatar_url} alt={respository.owner.login} />

            <div>
              <strong>{respository.full_name}</strong>
              <p>{respository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>

        ))}

      </Repositories>

    </>
  )
};


export default Dashboard;
