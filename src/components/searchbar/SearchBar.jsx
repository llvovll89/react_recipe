import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.form`
  position: relative;
  width: 100%;
  margin: auto;
  input {
    background: linear-gradient(35deg, #181818, #003223);
    color: #fff;
    border-radius: 6px;
    font-size: 1.1rem;
    width: 100%;
    padding: 1.2rem 3rem;
    font-famile: 'Rajdhani', sans-serif;
  }
  input:hover {
    background: rgba(0,0,0,0.72);
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export const SearchBar = () => {
    const [ textInput , setTextInput ] = useState('');
    const history = useNavigate();

    const onSubmitHandeler = (e) => {
        e.preventDefault();
        history('/search/'+textInput)
    }

  return (
    <>
      <FormContainer onSubmit={onSubmitHandeler}>
        <FaSearch />
        <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
      </FormContainer>
    </>
  );
};
