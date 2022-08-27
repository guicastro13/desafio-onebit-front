import styled from "styled-components";

const Section = styled.section`
  width: 15%;
  height: auto;
  background-color: #ebf2f3;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Item = styled.p`
  color: #181717;
  font-family: 'Holtwood One SC', serif;
  font-size: 0.8rem;
`;

const SideMenu = () => {
  return (
    <>
      <Section>
        <Item>CAMISETAS</Item>
        <Item>CALCAS</Item>
        <Item>MOLETONS</Item>
      </Section>
    </>
  );
};

export default SideMenu;
