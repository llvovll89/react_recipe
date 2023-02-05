import React from 'react';
import { Home } from './Home';
import { Cook } from './Cook';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Search } from './Search';
import { RecipeInfo } from './RecipeInfo';
import { AnimatePresence } from 'framer-motion';

export const Pages = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.path} >
          <Route path="/" element={<Home />} />
          <Route path='/react_recipe' element={<Home />} />
          <Route path="/cook/:type" element={<Cook />} />
          <Route path="/search/:searchbar" element={<Search />} />
          <Route path="/recipeinfo/:name" element={<RecipeInfo />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
