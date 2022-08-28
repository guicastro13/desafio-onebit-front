import api from "./api"
import { useEffect, useContext } from "react"
import UserContext from "../context/index"

function Cart() {
    useEffect(()=>{
        api.get("/products", )
    })
    const { addToCart } = useContext(UserContext)
    return ( 
        <>
        
        </>
     );
}

export default Cart;