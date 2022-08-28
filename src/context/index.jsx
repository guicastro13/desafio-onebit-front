import React, { createContext, useState } from "react";
export const UserContext = createContext([]);

const Context = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([
    [1, 1],
    [0, 1],
  ]);

  function addProductToCart(id, quantity) {
    const cart = [id, quantity]
    const isTrue = cartProducts.find(item => item[0] === id)
    console.log(isTrue)
    if (isTrue) {
      cartProducts[id][1] ++;
      console.log(cartProducts)
    } else {
      cartProducts.push(cart)
      console.log(cartProducts)
    }
  }

  return (
    <>
      <UserContext.Provider value={{ addProductToCart, cartProducts }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default Context;
