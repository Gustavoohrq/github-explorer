import React from 'react'

import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories } from './styles'
import logoImg from '../../assets/logo.svg'
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button>Pesquisar</button>

      </Form>
      <Repositories >
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/47986830?s=460&u=d44a5fd4ef0d4e943315daf38c8efb7e438b12f8&v=4" alt="Gustavo Henrique"/>

          <div>
            <strong>rockeseat / unform</strong>
            <p>Lorem ipsum</p>
          </div>
          <FiChevronRight size={20} />

        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/47986830?s=460&u=d44a5fd4ef0d4e943315daf38c8efb7e438b12f8&v=4" alt="Gustavo Henrique"/>

          <div>
            <strong>rockeseat / unform</strong>
            <p>Lorem ipsum</p>
          </div>
          <FiChevronRight size={20} />

        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/47986830?s=460&u=d44a5fd4ef0d4e943315daf38c8efb7e438b12f8&v=4" alt="Gustavo Henrique"/>

          <div>
            <strong>rockeseat / unform</strong>
            <p>Lorem ipsum</p>
          </div>
          <FiChevronRight size={20} />

        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/47986830?s=460&u=d44a5fd4ef0d4e943315daf38c8efb7e438b12f8&v=4" alt="Gustavo Henrique"/>

          <div>
            <strong>rockeseat / unform</strong>
            <p>Lorem ipsum</p>
          </div>
          <FiChevronRight size={20} />

        </a>
      </Repositories>

    </>
  )
};


export default Dashboard;
