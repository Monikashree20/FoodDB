import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeImg.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './Footer'; // Import the Footer component
import { Link } from 'react-router-dom';

const HomeImg = ({ children }) => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate('/food');
  };

  const handleDishClick = (dish) => {
    switch (dish) {
      case 'biryani':
        navigate('/biriyani');
        break;
      case 'dosa':
        navigate('/dosa');
        break;
      case 'idli':
        navigate('/idli');
        break;
      case 'puttu':
        navigate('/puttu');
        break;
      case 'cakes':
        navigate('/cakes');
        break;
      case 'parotta':
        navigate('/parotta');
        break;
      case 'poori':
        navigate('/poori');
        break;
      case 'pongal':
        navigate('/pongal');
        break;
      case 'shakes':
        navigate('/shakes');
        break;
      default:
        console.log('Dish not found');
    }
  };
  

  return (
    <div className="image-container">
      <img
        src="https://uptown.id/wp-content/uploads/2022/11/top-view-table-full-delicious-food-composition-scaled.jpg"
        alt=""
        className="half-page-image"
      />
      <div className="search-container">
        <h1 className="app-name"><i>Foodzy</i></h1>
        <p className="tagline">Discover the best food & drinks</p>
        <div className="dropdown-container">
          <label htmlFor="city-select" className="dropdown-label">
            <FaMapMarkerAlt className="dropdown-icon" /> Select City:
          </label>
          <select id="city-select" className="dropdown">
            <option value="coimbatore">Coimbatore</option>
            <option value="chennai">Chennai</option>
            <option value="madurai">Madurai</option>
          </select>
        </div>
        {children && (
          <div className="children-content">
            {children}
          </div>
        )}
      </div>

      <div className="additional-images">
        <div className="whitebox" onClick={handleBoxClick}>
          <img src="https://i.ytimg.com/vi/7Bfj1mEp6dA/maxresdefault.jpg" alt="" />
          <h2>Order Online</h2>
          <p>Stay Home and order to your doors</p>
        </div>

        <div className="whitebox">
          <img src="https://fxqmag.com/wp-content/uploads/2021/02/IMG_8550-Edit.jpg" alt="" />
          <h2>Dining</h2>
          <p>View the city's Favourite dining venue</p>
        </div>
      </div>
     
      <div className="collection-section">
        <div className="collection-item">
          <img src="https://i.pinimg.com/736x/4a/d7/8e/4ad78e9fc647e72182c6454f359d0d15.jpg" alt="Collection 1" />
          <div className="collection-text">
            <h3>14 Great Cafes</h3>
            <p>11 Places</p>
          </div>
        </div>
        <div className="collection-item">
          <img src="https://i.pinimg.com/originals/a1/0d/e7/a10de72f9fc0385144f7f7af89f3a6a2.jpg" alt="Collection 2" />
          <div className="collection-text">
            <h3>11 Best Pubs and Bars</h3>
            <p>10 Places</p>
          </div>
        </div>
        <div className="collection-item">
          <img src="https://foodsguy.com/wp-content/uploads/2020/12/How-To-Set-A-Table-For-Breakfast.jpg" alt="Collection 3" />
          <div className="collection-text">
            <h3>11 Blissful Breakfast Places</h3>
            <p>8 Places</p>
          </div>
        </div>
        <div className="collection-item">
          <img src="https://img.freepik.com/premium-photo/coffee-cup-table-cafe_410516-7210.jpg" alt="Collection 4" />
          <div className="collection-text">
            <h3>6 Premium Coffee Shops</h3>
            <p>5 Places</p>
          </div>
        </div>
      </div>

      {/* New Localities Section */}
      <div className="localities-section">
        <h2>Popular localities in and around Coimbatore</h2>
        <div className="localities-grid">
          <div className="locality-box">
            <h3>RS Puram</h3>
            <p>353 places</p>
          </div>
          <div className="locality-box">
            <h3>Peelamedu</h3>
            <p>520 places</p>
          </div>
          <div className="locality-box">
            <h3>Race Course</h3>
            <p>95 places</p>
          </div>
          <div className="locality-box">
            <h3>Saibaba Colony</h3>
            <p>272 places</p>
          </div>
          <div className="locality-box">
            <h3>Gandhipuram</h3>
            <p>286 places</p>
          </div>
          <div className="locality-box">
            <h3>Kalapatti</h3>
            <p>90 places</p>
          </div>
          <div className="locality-box">
            <h3>Ramanathapuram</h3>
            <p>167 places</p>
          </div>
          <div className="locality-box">
            <h3>Town Hall</h3>
            <p>153 places</p>
          </div>
          <div className="locality-box">
            <h3>Ganapathy</h3>
            <p>169 places</p>
          </div>
          <div className="locality-box">
            <h3>Thudiyalur</h3>
            <p>144 places</p>
          </div>
        </div>
      </div>

      {/* Popular Dishes Section */}
      <div className="dishes-section">
        <h2>Popular Dishes</h2>
        <div className="dishes-grid">
          <div className="dish-box" onClick={() => handleDishClick('biryani')}>
            <Link to="/biriyani"><img src="https://wallpaperaccess.com/full/1972917.jpg" alt="Biryani" /></Link>
            <p>Biryani</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('dosa')}>
            <Link to="/dosa"><img src="https://wallpapercave.com/wp/wp10104470.jpg" alt="Dosa" /></Link>
            <p>Dosa</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('idli')}>
            <Link to="/idli"><img src="https://static.toiimg.com/photo/68631114.cms" alt="Idli" /></Link>
            <p>Idli</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('puttu')}>
            <Link to="/puttu"><img src="https://www.keralatourism.org/images/cuisine/large/Puttu_and_Kadala_Curry20131126123929_43_1.jpg" alt="Puttu" /></Link>
            <p>Puttu</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('cakes')}>
            <Link to="/cakes"><img src="https://png.pngtree.com/background/20230519/original/pngtree-chocolate-cakes-hd-wallpaper-580p-picture-image_2655120.jpg" alt="Cakes" />
            </Link>
            <p>Cakes</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('parotta')}>
            <Link to="/parotta"><img src="https://i.pinimg.com/originals/7f/d5/d3/7fd5d34f0e14f1b5df131883b9f5a67e.jpg" alt="Parotta" /></Link>
            <p>Parotta</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('poori')}>
            <Link to="/poori"><img src="https://www.onmanorama.com/content/dam/mm/en/food/readers-recipe/images/2020/12/9/wheat-poori-masala.jpg.transform/onm-articleimage/image.jpg" alt="Poori" /></Link>
            <p>Poori</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('pongal')}>
            <Link to="/pongal"><img src="https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-3.jpg" alt="Pongal" /></Link>
            <p>Pongal</p>
          </div>
          <div className="dish-box" onClick={() => handleDishClick('shakes')}>
            <img src="https://www.heritagefoods.in/blog/wp-content/uploads/2021/04/front-view-delicious-chocolate-milkshake_23-2148549982.jpg" alt="Shakes" />
            <p>Shakes</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

    </div>
  );
};

export default HomeImg;
