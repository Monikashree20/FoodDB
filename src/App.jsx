import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './assets/Header';
import Profile from './assets/Profile';
import Cart from './assets/Cart';
import SignUp from './assets/SignUp';
import Food from './assets/Food';
import Search from './assets/Search';
import Home from './Home';
import HomeImg from './HomeImg';
import './App.css';
import { FOODS } from './assets/Constants'; // Import your foods data
import Biriyani from './Cateogary/Biriyani';
import Dosa from './Cateogary/Dosa';
import Idly from './Cateogary/Idly';
import Puttu from './Cateogary/Puttu';
import Cakes from './Cateogary/Cakes';
import Parotta from './Cateogary/Parotta';
import Pongal from './Cateogary/Pongal';
import Poori from './Cateogary/Poori';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(FOODS); // Initialize with FOODS

  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = FOODS.filter((food) =>
      food.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <BrowserRouter>
      <Header />
      {/* <HomeImg></HomeImg> */}
      <div className="main-content">
        <Routes>

          <Route path='/' element={<HomeImg />} />
          <Route
            path='/food'
            element={
              <>
                {/* <Search onSearch={handleSearch} /> */}
                {filteredFoods.length > 0 ? (
                  <Food cart={cart} setCart={setCart} foods={filteredFoods} />
                ) : (
                  <p className="not-available">Currently not available</p>
                )}
              </>
            }
          />
          <Route path='/cart' element={<Cart cart={cart} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/biriyani' element={<Biriyani/>} />
          <Route path='/dosa' element={<Dosa/>} />
          <Route path='/idli' element={<Idly/>} />
          <Route path='/puttu' element={<Puttu/>} />
          <Route path='/cakes' element={<Cakes/>} />
          <Route path='/parotta' element={<Parotta/>} />
          <Route path='/pongal' element={<Pongal/>} />
          <Route path='/poori' element={<Poori/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
