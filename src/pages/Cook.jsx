import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CookItem = styled.div`
  cusor: pointer;
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

export const Cook = () => {
  const [cook, setCook] = useState([]);
  let params = useParams();

  const getCook = async (cookname) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const getData = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${cookname}`
    );
    const getRecipes = await getData.json();
    setCook(getRecipes.results);
  };

  useEffect(() => {
    getCook(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <>
      <motion.div className="grid" 
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        {cook.map((item) => (
          <CookItem key={item.id}>
            <Link to={'/recipeinfo/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </CookItem>
        ))}
      </motion.div>
    </>
  );
};
