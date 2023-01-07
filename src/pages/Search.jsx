import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const CookItem = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    transition: 0.3s all ease;
  }
  img:hover {
    transform: scale(0.95);
    transition: 0.3s all ease;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color: #181818;
  }
`;

export const Search = () => {
  const [searchRecipe, setSearchRecipe] = useState([]);
  let params = useParams();

  const getSearch = async (searchname) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const getData = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchname}`
    );
    const getRecipes = await getData.json();
    setSearchRecipe(getRecipes.results);
  };

  useEffect(() => {
    getSearch(params.searchbar);
  }, [params.searchbar]);

  return (
    <>
      <div className="grid">
        {searchRecipe.map((item) => (
          <CookItem key={item.id}>
            <Link to={'/recipeinfo/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </CookItem>
        ))}
      </div>
    </>
  );
};
