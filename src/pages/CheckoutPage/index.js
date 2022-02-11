import { useState, useEffect} from "react";
import { MutatingDots, Rings } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios"
import Container from "../GlobalStyled/Container";
import check from "./check/check.gif"
import CheckoutContainer from "./Styled/CheckoutContainer";


export default function CheckoutPage(){
    const [statusPage, setStatusPage] = useState("");

    useEffect(() => {
        const response = axios.post(`http://localhost:5000/checkout`);
        response.then(response => {
            console.log(response.data);
            setStatusPage("loading");
        })
        response.catch(error => console.log(error))
    }, []);
            

    if(statusPage === ""){
        return (
            <Container>
                <Rings color="#D4CFCC" height={200} width={200}/>
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