import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../src/routes/index'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
