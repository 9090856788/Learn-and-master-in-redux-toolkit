/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [cart, setCart] = useState(0);
  return (
    <>
      <h1> Cart {cart}</h1>
      <button
        onClick={() => {
          setCart(cart + 1);
        }}
      >
        Add to Cart
      </button>
    </>
  );
};

export default Navbar;
