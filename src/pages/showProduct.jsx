import { useEffect, useState } from "react";
import Header from "../components/header";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import api from "../services/api"

const Section = styled.section`
  background-color: #ebf2f3;
  width: 60%;
  height: 60%;
`;

const ShowProduct = () => {
const {product, setProduct} = useState;
useEffect(() => {
  api.get("/products").then((response) => setProduct(response))
}, [])
  return (
    <>
      <Header />
      <Section>
      
      </Section>
      <GlobalStyle />
    </>
  );
};

export default ShowProduct;
