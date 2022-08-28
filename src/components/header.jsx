import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import ShopCart from "../assets/svg/shopCart";
import SearchFild from "../assets/searchFild";

const Heading = styled.header`
    width: 100vw;
    height: 60px;
    background-color: #181717;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    position: fixed;
`;
const CastroLogo = styled.h1`
        cursor: pointer;
        font-family: 'Irish Grover', cursive;
        color: #EBF2F3;
`;
const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:10px;
`;

const Span = styled.span`
    cursor: pointer;
`;


const Header = () => {
    const navigate = useNavigate()    

    function backHome(event) {
        event.preventDefault()
        navigate("/", { replace: true})
    }

    function goToCart(event) {
        event.preventDefault()
        navigate("/cart", { replace: true})
    }

    return ( 
        
        <>  
            <Heading>
                <CastroLogo onClick={(event) => backHome(event)}>CASTRO STORE</CastroLogo>
                <Div>
                    <SearchFild/>
                    <Span onClick={(event) => goToCart(event)}><ShopCart /></Span>
                </Div>
            </Heading>
        </>
     );
}
 
export default Header;