import Header from "../components/header";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import React, { useContext } from "react";
import { UserContext } from "../context/index";
import Card from "../services/Card";

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
  flex-direction: column;
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


const CartPage = (props) => {
  const { cartProducts } = useContext(UserContext);
  console.log(cartProducts)
  return (
    <>
      <Header />
      <Main>
        <SideCarousel>ola</SideCarousel>
        <Section>
        {cartProducts.map((item, key) => {
          <Card item={item} key={key}></Card>
        })}
        </Section>
      </Main>
      <GlobalStyle />
    </>
  );
};

export default CartPage;
