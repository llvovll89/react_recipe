import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 3rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    left: 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  p {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0,211,13,0.29));
`;

export const Popular = () => {
  const [popRecipe, setPopRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const check = localStorage.getItem('popRecipe');
    const API_KEY = process.env.REACT_APP_API_KEY;

    if (check) {
      setPopRecipe(JSON.parse(check));
    } else {
      const getAPI = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`
      );
      const getData = await getAPI.json();

      localStorage.setItem('popRecipe', JSON.stringify(getData.recipes));
      setPopRecipe(getData.recipes);
    }
  };

  return (
    <>
      <div className="container">
        <Wrapper>
          <h3> Popular Recipe </h3>

          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '1rem',
              mediaQuery : 'max' ,
              breakpoints : {
                768: {
                  perPage : 2
                }
              }
            }}
          >
            {popRecipe.map((item) => (
              <SplideSlide key={item.id}>
                <Card>
                  <Link to={'/recipeinfo/' + item.id}>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.title} />
                    <Gradient />
                  </Link> 
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        </Wrapper>
      </div>
    </>
  );
};
