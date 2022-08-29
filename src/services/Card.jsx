import api from './api'
import React, { useEffect } from 'react'


const Card = (props) => {

    const [productCard, setProductCard] = useState([]);
    useEffect(() => {
        api.get(`/products`).then((response) => {
            setProductCard(response.data)})
    }, []);
    console.log(productCard)
    return ( 
        <>
        {product ?? <></> }
        </>
     );
}
 
export default Card;