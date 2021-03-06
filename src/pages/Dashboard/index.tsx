import React, { useState, FormEvent, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
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
  const [respositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplore:repositories');
    if(storagedRepositories){
      return JSON.parse(storagedRepositories);
    };
    return [];
  });


  useEffect(() => {
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify(respositories))
  }, [respositories]);

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

  };

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
          <Link key={respository.full_name} to={`/repositories/${respository.full_name}`}>
            <img src={respository.owner.avatar_url} alt={respository.owner.login} />

            <div>
              <strong>{respository.full_name}</strong>
              <p>{respository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>

        ))}

      </Repositories>

    </>
  )
};


export default Dashboard;
