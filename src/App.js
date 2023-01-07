import React from 'react';
import { Pages } from './pages/Pages';
import { Menu } from './components/menu/Menu';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SearchBar } from './components/searchbar/SearchBar';
import styled from 'styled-components';
import { CiForkAndKnife } from 'react-icons/ci';
import './index.css';

const Nav = styled.div`
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 1.8rem;
    margin-right: 0.2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
}
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

function App() {
  return (
    <div className="main-container">
      <Router>
        <Nav>
          <CiForkAndKnife />
          <Logo to={'/'}>RECIPE</Logo>
        </Nav>
        <SearchBar />
        <Menu />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
