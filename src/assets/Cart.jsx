import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { quaninc, quandec,del } from '../Redux/Cartslice';

const emptyCartImage = "https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif";

const Cart = () => {
  const cartItems = useSelector((state) => state.carter.carter);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  }, [cartItems]);

  const handleInc = (item) => {
    dispatch(quaninc(item));
  };

  const handleDec = (item) => {
    dispatch(quandec(item));
  };

  const handleDel=(item)=>{
    dispatch(del(item));
}

  // Define the delivery fee and calculate the final total
  const deliveryFee = 5.00; // You can adjust this value as needed
  const finalTotal = total + deliveryFee;

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img src={emptyCartImage} alt="Empty Cart" className="empty-cart-image" />
            <p>Your cart is empty</p>
            <button onClick={() => window.location.href='/'}>Order your food</button>
          </div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-item-details">
                <h4 className="cart-title">{item.title}</h4>
                <p className="cart-price">Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDec(item)}>-</button>
                  <span> Quantity: {item.quantity} </span>
                  <button onClick={() => handleInc(item)}>+</button>

                  <button onClick={()=>handleDel(item)}>Delete</button>
                </div>
                {/* <p className="cart-price">Price: ${item.price.toFixed(2)}</p> */}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="price-details">
        <h2>Price Details</h2>
        <p>Subtotal: ${total.toFixed(2)}</p>
        <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
        <p>Total: ${finalTotal.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
