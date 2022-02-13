import { useState} from "react";
import { Rings} from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios"
import Container from "../GlobalStyled/Container";
import check from "./check/check.gif"
import CheckoutContainer from "./Styled/CheckoutContainer";


export default function CheckoutPage(){
    const [statusPage, setStatusPage] = useState("validate");

    function confirm(){
        setStatusPage("")
        const response = axios.post(`https://geekly-project-back.herokuapp.com/checkout`);
            response.then(response => {
                console.log(response.data);
                setStatusPage("loaded");
            })
            response.catch(error => console.log(error))
        }

    if(statusPage === ""){
        return (
            <Container>
                <Rings color="#D4CFCC" height={200} width={200}/>
            </Container>
        )
    }
    
    if(statusPage === "validate"){
        return (
            <Container>
                <CheckoutContainer>
                    <p>map dos produtos</p>
                    <button onClick={confirm}>Confirmar Compra</button>
                    <Link to = "/carrinho_de_compras">Voltar</Link>
                </CheckoutContainer>
            </Container>
        )
    }

    return (
        <Container>
            <CheckoutContainer>
                <img src = {check} alt = "check"/>
                <span>Sua compra foi efetuada com sucesso!</span>
                <Link to = "/login"><ion-icon name="planet-outline"></ion-icon> Voltar para a Home</Link>
            </CheckoutContainer>
        </Container>
    )
}