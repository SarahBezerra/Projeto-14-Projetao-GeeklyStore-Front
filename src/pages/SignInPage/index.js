import { Link, useNavigate } from "react-router-dom";
import Container from "../GlobalStyled/Container";
import SignInSignUpContainer from "../../components/SignUpAndSignInStyled/SignInSignUpContainer";
import Form from "../../components/SignUpAndSignInStyled/Form";
import Title from "../../components/SignUpAndSignInStyled/Title";
import { useState } from "react";
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import { useUser } from "../../services/auth";

export default function SignInPage(){

    const navigate = useNavigate();
    const [buttonStatus, setButtonStatus] = useState("");
    const { setUser } = useUser();
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    })

    async function signIn(e){
        e.preventDefault()
        console.log(formLogin)
        const formUser = await api.postSignIn(formLogin);
        setUser(formUser.data);
        localStorage.setItem('user', JSON.stringify(formUser));
        setButtonStatus("")
        navigate("/")
        
    }

    function controlledInput(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }

    return(
        <Container>
            <SignInSignUpContainer>
                <Title>
                    <h1>Sign-In</h1>
                </Title>
                <Form onSubmit = {signIn} status = {buttonStatus} >
                    <input type = "email" placeholder = "E-mail" name = "email" value = {formLogin.email} onChange = {controlledInput}/>
                    <input type = "password" placeholder = "Senha" name = "password" value = {formLogin.password} onChange = {controlledInput}/>
                    <button type = "submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === 'loading' ? <ThreeDots type="ThreeDots" color="#190D17" height={40} width={40} /> : "Entrar"}</button>
                </Form>
                <Link to = "/cadastro">Não tem uma conta? Cadastre-se</Link>
            </SignInSignUpContainer>
        </Container>
    )
}

