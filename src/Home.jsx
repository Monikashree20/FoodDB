import React from 'react';
import HomeImg from './HomeImg';

const Home = () => {
  return (
    <div>
      <HomeImg>
        {/* You can pass any children you want to render inside the HomeImg component */}
        {/* For example, a search bar or any other content */}
        <input type="text" placeholder="Search..." />
      </HomeImg>
    </div>
  );
}

export default Home;
