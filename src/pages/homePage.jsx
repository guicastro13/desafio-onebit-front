import Header from "../components/header";
import MainContent from "../components/mainContent";
import SideMenu from "../components/sideMenu";
import styled from "styled-components";
import GlobalStyle from "../../styles/global"

const Main = styled.main`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
  padding-top : 120px;
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <SideMenu />
        <MainContent />
      </Main>
      <GlobalStyle/>
    </>
  );
};

export default HomePage;
