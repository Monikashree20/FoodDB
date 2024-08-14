import React from 'react';
import './Food.css';
import { useDispatch, useSelector } from 'react-redux';
import { increm } from '../Redux/Cartslice';
import { Link } from 'react-router-dom';

const Foodcart = (props) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(increm(props.item));
  }

  const cart=useSelector(state=>state.carter.carter);
  const isItem=cart.some((item)=>item.id===props.item.id);

  return (
    <div className='box'>
      
      <img src={props.item.image} alt={props.item.title} className="image" />
      <h4 className="title" id="title">{props.item.title}</h4>
      <h3 className="txtprice">
        <span className="subhead">Price:</span> {props.item.price}
      </h3>
      <p className="txt" id="desc">
        <span className="subhead">Description:</span> {props.item.description}
      </p>
      <p className="txt">
        <span className="subhead">Category:</span> {props.item.category}
      </p>
      <p className="txt">
        <span className="subhead">Rating:</span> {props.item.rating.rate}
      </p>
      <p className="txt">
        <span className="subhead">Count:</span> {props.item.rating.count}
      </p>
      <button className="btn">Buy</button> 
      {isItem?<button className='btn'><Link to='/cart' className='btn1'>Go to Cart</Link></button>:<button className='btn' onClick={handleCart}>Add to Cart</button>}
      {/* <button className='btn' onClick={handleCart}>Add to Cart</button> */}
    </div>
  );
}

export default Foodcart;
