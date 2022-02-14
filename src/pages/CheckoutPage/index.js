import { useEffect, useState} from "react";
import { Rings} from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios"
import Container from "../GlobalStyled/Container";
import check from "./check/check.gif"
import CheckoutContainer from "./Styled/CheckoutContainer";
import { useUser } from "../../services/auth";



export default function CheckoutPage(){
    const [statusPage, setStatusPage] = useState("validate");
    const {user} = useUser()

   
    useEffect(() => {
        const response = axios.post(`https://geekly-project-back.herokuapp.com/checkout`,
            {
                email: user.email
            },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            response.then(response => {
                console.log(response.data);
                setStatusPage("loaded");
            })
            response.catch(error => console.log(error))
    }, [])
        

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
                <Link to = "/"><ion-icon name="planet-outline"></ion-icon>Voltar para a Home</Link>
            </CheckoutContainer>
        </Container>
    )
}