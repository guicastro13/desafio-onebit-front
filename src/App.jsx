import styled from "styled-components";
import Products from "./components/products";

const Hello = styled.h1`
  color: white;
`;
const Div = styled.div`
  background-color: black;
`;

function App() {
  return (
    <>
      <Div>
        <Hello>Hello world</Hello>
      </Div>
      <Products />
    </>
  );
}

export default App;
