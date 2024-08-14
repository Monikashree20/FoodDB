// Food.jsx
import React, { useState } from 'react';
import Foodcart from './Foodcart'; // Assuming you have this component
import Search from './Search';
import { FOODS } from './Constants'; // Assuming FOODS is imported from a Constants file

const Food = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredFoods = FOODS.filter(food =>
    food.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      
      <div className="food-container">
        {filteredFoods.length > 0 ? (
          filteredFoods.map(item => (
            <Foodcart key={item.id} item={item} cart={cart} setCart={setCart} />
          ))
        ) : (
          <p className="not-available">Currently not available</p>
        )}
      </div>
    </>
  );
};

export default Food;
