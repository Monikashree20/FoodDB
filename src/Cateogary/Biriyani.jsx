// Food.jsx
import React, { useState } from 'react';
import Foodcart from '../assets/Foodcart'; // Assuming you have this component
import Search from '../assets/Search';
import { FOODS } from '../assets/Constants'; // Assuming FOODS is imported from a Constants file

const Biriyani = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredBiriyani = FOODS.filter(food =>
    food.category==='biryani'
  );

  return (
    <>
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      
      <div className="food-container">
        {filteredBiriyani.length > 0 ? (
          filteredBiriyani.map(item => (
            <Foodcart key={item.id} item={item} cart={cart} setCart={setCart} />
          ))
        ) : (
          <p className="not-available">Currently not available</p>
        )}
      </div>
    </>
  );
};

export default Biriyani;
