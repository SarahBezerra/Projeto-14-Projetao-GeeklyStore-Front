import { useEffect, useState } from "react"
import api from "../../services/api";
import styled from "styled-components";
import Product from "./Product";
import { useNavigate } from "react-router";

export default function ShoppingCartPage({ token }){

    const [ products, setProducts ] = useState([]);
    const [ total, setTotal ] = useState(0);
    let navigate = useNavigate();

    async function getProducts() {
        try {
            const response = await api.getProductsFromCart(token);
            setProducts(response.data.userCart.products)
            setTotal(response.data.total)
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => 
        getProducts()
    ,[])

    if(products.length === 0) {
        return("Você não possui produtos no carrinho");
    }

    function changePage() {
        navigate('/checkout');
    }

    async function buy() {
        try {
            await api.buyProducts(token, products);
            setProducts([])
            changePage();
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
        <Products>
            <h2>Carrinho</h2>
            <ProductsList>
                {products.map(product => <Product key={product._id} product={product} token={token}/>)}
            </ProductsList>
        </Products>

        <Infos>
        <p>TOTAL: ${total}</p>
        <button onClick={buy}>Finalizar Compra</button>
        </Infos>
        </>
    )
}

const Products = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 0 15px;

    padding: 20px;

    h2 {
        padding-bottom: 15px;
        font-size: 20px;
        font-weight: 700;
    }

`
const ProductsList = styled.li`
    padding-bottom: 30px;
    list-style-type: none;

    ul {    
        width: 100%;
        height: 90px;
        border-radius: 5px;
        margin-bottom: 20px;
        background-color: #FFF;
        
        display: flex;
        align-items: center;

        position: relative;

        img {
            width: 80px;
            height: 90px;
            border-radius: 5px;
            margin-right: 6px;
        }

        p.name {
            font-size: 17px;
            color: #000;
            font-weight: 600;
            margin-bottom: 10px;
        }

        p.description {
            font-size: 14px;
            color: #474747;
            margin-bottom: 10px;
        }

        p.price {
            font-size: 16px;
            color: #346C32;
            font-weight: 600;

            position: absolute;
            bottom: 5px;
            right: 5px;
        }

        ion-icon {
            padding: 6px;
            background: #9F8795;
            opacity: 0.7;
            border-radius: 50%;

            position: absolute;
            top: 5px;
            right: 5px;

            font-size: 20px;
            color: #000;
        }
    }

`

const Infos = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;

    p {
        margin-bottom: 20px;
        font-size: 22px;
        color: green;
    }

    button{
        width: 300px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        border: none;
        border-radius: 50px;
        background-color: #9F8795;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #190D17;
    }
`