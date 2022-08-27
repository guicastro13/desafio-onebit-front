import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import api from "../services/api";
import styled from "styled-components";

const Div = styled.div`
  width: 150px;
  height: 150px;
  background-color: #181717;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const P = styled.p`
  color: #EBF2F3;
`;

const Product = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    api.get("/products").then((resposne) => setProduct(resposne.data));
  }, []);


  function showProduct(event, product){
    event.preventDefault()
    console.log(product)
    navigate(`/product/${product.id}`, {replace : true})

  }

  return (
    <>
        {product.map((product) => {
          return (
              <Div key={product.id} onClick={(event) => showProduct(event, product)}>
                <Img src={product.images_show[0]} alt={product.text_alt}></Img>
                <P> {product.name} </P>
                <P> R$: {product.value}</P>
              </Div>  
          );
        })}
    </>
  );
};

export default Product;
