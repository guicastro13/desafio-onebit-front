import Product from "./products";
import styled from "styled-components";

const Section = styled.section`
  width: 76%;
  background-color: #ebf2f3;
  display: grid;
  flex-direction: row;
  gap: 10px;
  padding: 30px;
  grid-template-columns: auto auto auto;
`;

const MainContent = () => {
  return (
    <>
      <Section>
        <Product />
      </Section>
    </>
  );
};

export default MainContent;
