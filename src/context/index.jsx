import React, { createContext, useState } from "react";
export const UserContext = createContext([]);

const Context = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function addProductToCart(id, quantity) {
    const cart = {id, quantity}
    const isTrue = cartProducts.find(item => item.id == id) 
     let index = cartProducts.indexOf(isTrue)
    if (isTrue) {
      cartProducts[index].quantity ++
    } else {
      cartProducts.push(cart)
    }
    const newCart = cartProducts.slice()
    setCartProducts(newCart)
    console.log(cartProducts)
  }
  

  return (
    <>
      <UserContext.Provider value={{ addProductToCart, cartProducts}}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default Context;
