import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  transition: all 0.4s linear;

  a {
    font-size: 1.2rem;
    color: #f4f4f4;
  }
  span {
    font-family: 'Chosunilbo_myungjo';
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Nlink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.25rem;
  border-radius: 6px;
  margin: 0 1rem;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  background: linear-gradient(35deg, #494949, #313131);
  transition: 0.3s all linear;

  &:hover {
    transition: 0.3s all linear;
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.65);
  }
  &.active {
    background: linear-gradient(to bottom, #839acc, #243e57);
  }
`;

const Toggle = styled.div`
  transition: all 0.4s linear;
  margin: 1rem auto;
  width: 200px;
  height: 70px;
  background: #000;
  p {
    color: #fff;
  }
`;

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {!toggleMenu ? (
        <Toggle className="toggle" onClick={() => setToggleMenu(!toggleMenu)}>
          <div className={!toggleMenu ? "inner" : "inner_out"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Toggle>
      ) : (
        <Content>
          <Nlink to={'/cook/American'}>
            <span className="icons">🍔</span>
            <span>양식</span>
          </Nlink>
          <Nlink to={'/cook/Japanese'}>
            <span className="icons">🍘</span>
            <span>일식</span>
          </Nlink>
          <Nlink to={'/cook/korean'}>
            <span className="icons">🍚</span>
            <span>한식</span>
          </Nlink>
          <Nlink to={'/cook/chinese'}>
            <span className="icons">🍜</span>
            <span>중식</span>
          </Nlink>
        </Content>
      )}
    </>
  );
};
