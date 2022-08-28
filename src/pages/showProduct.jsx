import React, { useEffect, useState, useContext } from "react";
import Header from "../components/header";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import api from "../services/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/index";

const Main = styled.main`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
  padding-top: 120px;
  gap: 30px;
`;

const SideCarousel = styled.section`
  width: 15%;
  height: auto;
  background-color: #ebf2f3;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;
const Section = styled.section`
  width: 76%;
  background-color: #ebf2f3;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 30px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;
const PrimaryImg = styled.img`
  width: 200px;
  height: 200px;
`;
const Description = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;

const ShowProduct = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get("/products").then((response) => setProduct(response.data));
  }, []);

  useEffect(() => {}, [product]);

  const { id } = useParams();

  const indexProduct = Number(id - 1)

  const { addProductToCart } = useContext(UserContext);

  return (
    <>
      <Header />
      <Main>
        <SideCarousel>
          {product === null ? (
            <div></div>
          ) : (
            product[id - 1].images_show.map((item, index) => {
              return (
                <Img
                  key={index}
                  src={item}
                  alt={product[id - 1].text_alt}
                ></Img>
              );
            })
          )}
        </SideCarousel>
        <Section>
          {product === null ? (
            <div></div>
          ) : (
            <section>
              <PrimaryImg
                src={product[id - 1].images_show[0]}
                alt={product[id - 1].text_alt}
              ></PrimaryImg>
            </section>
          )}
          {product === null ? (
            <div></div>
          ) : (
            <Description>
              <h4>{product[id - 1].name}</h4>
              <p>{product[id - 1].description}</p>
              <p>R${product[id - 1].value}</p>
              <button onClick={() => addProductToCart(indexProduct, 1)}>COMPRAR</button>
            </Description>
          )}
        </Section>
      </Main>
      <GlobalStyle />
    </>
  );
};

export default ShowProduct;
