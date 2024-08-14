// Food.jsx
import React, { useState } from 'react';
import Foodcart from '../assets/Foodcart'; // Assuming you have this component
import Search from '../assets/Search';
import { FOODS } from '../assets/Constants'; // Assuming FOODS is imported from a Constants file

const Parotta = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredParotta = FOODS.filter(food =>
    food.category==='parotta'
  );

  return (
    <>
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      
      <div className="food-container">
        {filteredParotta.length > 0 ? (
          filteredParotta.map(item => (
            <Foodcart key={item.id} item={item} cart={cart} setCart={setCart} />
          ))
        ) : (
          <p className="not-available">Currently not available</p>
        )}
      </div>
    </>
  );
};

export default Parotta;
