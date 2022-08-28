
import Header from "../components/header";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";


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

const CartPage = () => {
  
  return (
    <>
      <Header />
      <Main>
        <SideCarousel>
          <Img></Img>
        </SideCarousel>
        <Section>
          <PrimaryImg></PrimaryImg>

          <Description></Description>
        </Section>
      </Main>
      <GlobalStyle />
    </>
  );
};

export default CartPage;
