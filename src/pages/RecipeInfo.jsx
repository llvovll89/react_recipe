import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailInfo = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #191919, #420192);
    color: #fff;
  }
  h2,
  h3 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    list-style: none;
  }
  ul {
    margin-top: 2rem;
    width: 100%;
  }
  img {
    object-fit: cover;
  }
  a {
    color: #03ff21;
  }
  @media screen and (max-width: 1260px) {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    flex-direction: column;
    gap: 1rem;    

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  color: #191919;
  background: #fff;
  border: 2px solid #181818;
  margin-right: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
  @media screen and (max-width: 1260px){
    margin : 0 auto;
  }
`;

export const RecipeInfo = () => {
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  let params = useParams();

  const fetchRecipeInfo = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
    );
    const detailData = await data.json();
    setDetail(detailData);
  };

  useEffect(() => {
    fetchRecipeInfo();
  }, [params.name]);

  return (
    <>
      <DetailInfo>
        <div>
          <h2>{detail.title}</h2>
          <img src={detail.image} alt={detail.title} />
        </div>
        <Info>
          <Button
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={() => setActiveTab('instructions')}
          >
            First
          </Button>
          <Button
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={() => setActiveTab('ingredients')}
          >
            Second
          </Button>
          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: detail.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {detail.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </DetailInfo>
    </>
  );
};
