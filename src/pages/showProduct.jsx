import { useEffect, useState } from "react";
import Header from "../components/header";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import api from "../services/api";
import { useParams } from "react-router-dom";

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
`;
const Section = styled.section`
  width: 76%;
  background-color: #ebf2f3;
  display: grid;
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
const ShowProduct = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get("/products").then((response) => setProduct(response.data));
  }, []);

  useEffect(() => {
  }, [product]);

  const { id } = useParams();

  return (
    <>
      <Header />
      <Main>
        <SideCarousel>
          {product === null ? (
            <div></div>
          ) : (
            product[id - 1].images_show.map((item) => {
              return (
                <Img src={item} alt={product[id - 1].text_alt}></Img>
              )
            })
          )}
        </SideCarousel>
        <Section>
            {product === null ? (
            <div></div> 
            ) : (
            <section>
              <PrimaryImg src={product[id -1].images_show[0]} alt={product[id - 1].text_alt}></PrimaryImg>
              {product[id -1].description}
            </section>
            )}
            {product === null ? (<div></div>) : (
              <section>
                {product[id - 1].name}
                <p>R$ {product[id - 1].value}</p>
                <button>COMPRAR</button>
              </section>
            )}
        </Section>
      </Main>
      <GlobalStyle />
    </>
  );
};

export default ShowProduct;
