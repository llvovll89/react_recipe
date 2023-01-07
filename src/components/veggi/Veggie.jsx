import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Wrapper = styled.div`
  margin: 3rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  &:hover p {
    transition: 0.3s all ease;
    font-size: 1.35rem;
  }

  &:hover img{
    transition: 0.3s all ease;
    transform: scale(1.1);
  }
  img {
    position: absolute;
    border-radius: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s all ease;
  }

  p {
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
    font-family: 'Rajdhani', sans-serif;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    transition: 0.3s all ease;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.58));
`;

export const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    const API_KEY = process.env.REACT_APP_API_KEY;

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const getAPI = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`
      );
      const getData = await getAPI.json();

      localStorage.setItem('veggie', JSON.stringify(getData.recipes));
      setVeggie(getData.recipes);
    }
  };

  return (
    <>
      <div className="container">
        <Wrapper>
          <h3> Our Vegetarian Picks </h3>

          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '2rem',
              mediaQuery : 'max' ,
              breakpoints : {
                768: {
                  perPage : 1
                }
              }
            }}
          >
            {veggie.map((item) => (
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
