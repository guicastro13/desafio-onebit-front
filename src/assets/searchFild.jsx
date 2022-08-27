import styled from "styled-components";
import MagnifyingGlass from "./svg/MagnifyingGlass";

const Div = styled.div`
  width: 139px;
  height: 32px;
  background-color: #ebf2f3;
  border-radius: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left:  10px;
  gap:10px;
`;
const Search = styled.p`
  color: rgba(0, 0, 0, 50%);
`;

const SearchFild = () => {
  return (
    <Div>
      <MagnifyingGlass />
      <Search>Search</Search>
    </Div>
  );
};

export default SearchFild;
