import { Link, useNavigate } from "react-router-dom";
import Container from "../GlobalStyled/Container";
import Form from "../../components/SignUpAndSignInStyled/Form";
import SignInSignUpContainer from "../../components/SignUpAndSignInStyled/SignInSignUpContainer";
import Title from "../../components/SignUpAndSignInStyled/Title";
import { useState } from "react";
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";



export default function SignUpPage(){

    const navigate = useNavigate();
    const [buttonStatus, setButtonStatus] = useState("")
    const [formSignUp, setFormSignUp] = useState({
        name: "",
        email: "",
        avatar: "",
        password: "", 
        confirmPassword: ""
    })

    async function signUp(e){
        e.preventDefault();
        
        const status = await api.postSignUp(formSignUp);

        if(parseInt(status) === 200){
            alert("Cadastro realizado com sucesso!");
            setButtonStatus("")
            navigate("/login");
            return;
        }

        setButtonStatus("")
        alert("Algo deu errado, confira os dados e tente novamente!")
    }

    function controlledInput(e){
        setFormSignUp({...formSignUp, [e.target.name]: e.target.value})
    }

    return(
        <Container>
            <SignInSignUpContainer>
                <Title>
                    <h1>Sign-Up</h1>
                </Title>
                <Form onSubmit = {signUp} status = {buttonStatus}>
                    <input type = "text" placeholder = "Nome" name = "name" value = {formSignUp.name} onChange = {controlledInput}/>
                    <input type = "email" placeholder = "E-mail" name = "email" value = {formSignUp.email} onChange = {controlledInput}/>
                    <input type = "url" placeholder = "Link da sua foto" name = "avatar" value = {formSignUp.avatar} onChange = {controlledInput}/>
                    <input type = "password" placeholder = "Senha" name = "password" value = {formSignUp.password} onChange = {controlledInput}/>
                    <input type = "password" placeholder = "Confirmar senha" name = "confirmPassword" value = {formSignUp.confirmPassword} onChange = {controlledInput}/>
                    <button type = "submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === 'loading' ? <ThreeDots type="ThreeDots" color="#190D17" height={40} width={40} /> : "Cadastrar"}</button>
                </Form>
                <Link to = "/cadastro">Tem uma conta? Faça login!</Link>
            </SignInSignUpContainer>
        </Container>
    )
}
