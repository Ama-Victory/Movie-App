import React from 'react'
import "./cart.css"

const Cart = () => {
  return (
    <div>
      <div className="cartMain">
        <div className="cartHolder">
          <div className="cartHead">
            <p>Shopping Cart</p>
            <p>Remove all</p>
          </div>
          <div className="product"></div>
          <div className="product"></div>
          <br />
          <div className='cartTotal'></div>
        </div>
      </div>
    </div>
  );
}

export default Cart